import type { SourceRecord, StoredObservation } from "../domain";
import { observationDedupeKey, stableDigest, validateObservation } from "../validation";

export const VERIFIED_OBSERVATION_LABEL = "verified-observation";
export const APPROVED_SOURCE_LABEL = "approved-public-source";

interface GitHubIssue {
  number: number;
  html_url: string;
  body: string | null;
  created_at: string;
  updated_at: string;
  pull_request?: unknown;
}

interface GitHubIssueEvent {
  event: string;
  created_at: string;
  label?: { name?: string };
}

interface GitHubCollection {
  observations: StoredObservation[];
  publicSources: SourceRecord[];
  rejectedRecords: Array<{ sourceUrl: string; reason: string }>;
  duplicateCount: number;
  retrievedAtUtc: string;
}

const field = (fields: Map<string, string>, label: string) => {
  const value = fields.get(label)?.trim();
  return !value || value === "_No response_" ? undefined : value;
};

export function parseIssueFormBody(body: string): Map<string, string> {
  const result = new Map<string, string>();
  for (const block of body.split(/\r?\n\r?\n(?=### )/)) {
    const match = block.match(/^### ([^\r\n]+)\r?\n\r?\n([\s\S]*)$/);
    if (match) result.set(match[1].trim(), match[2].trim());
  }
  return result;
}

const list = (value: string | undefined) =>
  value?.split(",").map((part) => part.trim()).filter(Boolean) ?? [];

const confidence = (value: string | undefined) => {
  const parsed = Number.parseFloat(value?.replace("%", "") ?? "80");
  return parsed > 1 ? parsed / 100 : parsed;
};

const surface = (value: string | undefined) => {
  const normalized = value?.toLowerCase() ?? "";
  if (normalized.startsWith("cli")) return "cli";
  if (normalized.startsWith("ide")) return "ide";
  if (normalized.startsWith("cloud")) return "cloud";
  if (normalized.startsWith("web")) return "web";
  return "other";
};

const planTier = (value: string | undefined) => {
  const normalized = value?.toLowerCase() ?? "";
  if (normalized === "free") return "free";
  if (normalized.startsWith("individual")) return "individual-paid";
  if (normalized.startsWith("team")) return "team-or-enterprise";
  return "unknown";
};

const detectionMethod = (value: string | undefined) => {
  const normalized = value?.toLowerCase() ?? "";
  if (normalized.startsWith("manual")) return "manual-retry";
  if (normalized.startsWith("scheduled")) return "scheduled-check";
  if (normalized.startsWith("local")) return "local-observer";
  return "other";
};

const observationKind = (value: string | undefined) =>
  value?.toLowerCase().includes("meter") ? "meter-reset" : "access-restored";

export async function normalizeVerifiedObservation(
  issue: GitHubIssue,
  events: GitHubIssueEvent[],
  retrievedAtUtc: string,
  previous?: StoredObservation,
): Promise<StoredObservation> {
  const fields = parseIssueFormBody(issue.body ?? "");
  const input = validateObservation({
    observationKind: observationKind(field(fields, "Observation kind")),
    limitReachedAtUtc: field(fields, "Limit reached time"),
    priorSampleAtUtc: field(fields, "Prior sample time"),
    observedResetAtUtc: field(fields, "Observed reset time") ?? field(fields, "Access returned time"),
    previousUsedPercent: field(fields, "Previous used percent"),
    currentUsedPercent: field(fields, "Current used percent"),
    previousResetsAtUtc: field(fields, "Previous reset time"),
    currentResetsAtUtc: field(fields, "Current reset time"),
    statedTimeZone: field(fields, "Time zone"),
    precedingForecastId: field(fields, "Preceding forecast ID"),
    codexSurface: surface(field(fields, "Codex surface")),
    planTier: planTier(field(fields, "Generalized plan tier")),
    relatedIncidentIds: list(field(fields, "Related incident IDs")),
    relatedSourceIds: list(field(fields, "Related public-source IDs")),
    submitterNotes: field(fields, "Notes"),
    detectionMethod: detectionMethod(field(fields, "Detection method")),
    confidence: confidence(field(fields, "Confidence")),
  });
  const verifiedAtUtc = events
    .filter((event) => event.event === "labeled" && event.label?.name === VERIFIED_OBSERVATION_LABEL)
    .map((event) => new Date(event.created_at).toISOString())
    .sort()[0] ?? new Date(issue.updated_at).toISOString();
  const sourceContentHash = await stableDigest(issue.body ?? "");
  const action = previous && previous.sourceContentHash !== sourceContentHash ? "corrected" : "verified";
  const auditHistory = previous?.auditHistory ? [...previous.auditHistory] : [];
  if (!previous || action === "corrected") {
    auditHistory.push({
      recordedAtUtc: retrievedAtUtc,
      action,
      sourceContentHash,
      sourceIssueUpdatedAtUtc: new Date(issue.updated_at).toISOString(),
    });
  }
  return {
    id: `github-issue-${issue.number}`,
    ...input,
    verificationState: "confirmed",
    trustWeight: Number(Math.min(0.6, input.confidence * 0.6).toFixed(3)),
    createdAtUtc: new Date(issue.created_at).toISOString(),
    verifiedAtUtc,
    sourceUrl: issue.html_url,
    sourceIssueNumber: issue.number,
    sourceIssueUpdatedAtUtc: new Date(issue.updated_at).toISOString(),
    sourceContentHash,
    auditHistory,
  };
}

export async function normalizeApprovedSource(
  issue: GitHubIssue,
  retrievedAtUtc: string,
): Promise<SourceRecord> {
  const fields = parseIssueFormBody(issue.body ?? "");
  const canonicalUrl = field(fields, "Canonical URL");
  const title = field(fields, "Title");
  const publicationTime = field(fields, "Publication time");
  if (!canonicalUrl || !title || !publicationTime) throw new Error("Approved source is missing a required field");
  const url = new URL(canonicalUrl);
  if (url.protocol !== "https:") throw new Error("Approved source URL must use HTTPS");
  if (Number.isNaN(Date.parse(publicationTime))) throw new Error("Publication time must be an ISO 8601 timestamp");
  const excerpt = field(fields, "Minimal excerpt")?.replace(/\s+/g, " ").slice(0, 240) ?? null;
  const contentHash = await stableDigest(JSON.stringify({
    url: url.toString(),
    title,
    publicationTime: new Date(publicationTime).toISOString(),
    excerpt,
  }));
  return {
    id: `github-source-${issue.number}`,
    sourceAdapterId: "github-approved-source-v1",
    sourceKind: "approved_public_post",
    provenance: "administrator_approved",
    publicationTimeUtc: new Date(publicationTime).toISOString(),
    retrievalTimeUtc: retrievedAtUtc,
    canonicalUrl: url.toString(),
    title: title.slice(0, 160),
    excerpt,
    metadata: { sourceIssueNumber: issue.number, sourceIssueUrl: issue.html_url },
    normalizedFeatures: { approved: true },
    contentHash,
  };
}

async function requestJson<T>(url: string, token: string, fetcher: typeof fetch): Promise<T> {
  let lastError = "GitHub request failed";
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const headers: Record<string, string> = {
        accept: "application/vnd.github+json",
        "user-agent": "codex-reset-monitor/0.2",
        "x-github-api-version": "2022-11-28",
    };
    if (token) headers.authorization = `Bearer ${token}`;
    const response = await fetcher(url, {
      headers,
      signal: AbortSignal.timeout(15_000),
    });
    if (response.ok) return response.json() as Promise<T>;
    lastError = `GitHub returned ${response.status}`;
    if (response.status !== 429 && response.status < 500) break;
    await new Promise((resolve) => setTimeout(resolve, 250 * 2 ** attempt));
  }
  throw new Error(lastError);
}

async function issuesForLabel(
  repository: string,
  label: string,
  token: string,
  fetcher: typeof fetch,
): Promise<GitHubIssue[]> {
  const result: GitHubIssue[] = [];
  for (let page = 1; page <= 10; page += 1) {
    const url = `https://api.github.com/repos/${repository}/issues?state=all&labels=${encodeURIComponent(label)}&per_page=100&page=${page}`;
    const rows = await requestJson<GitHubIssue[]>(url, token, fetcher);
    result.push(...rows.filter((row) => !row.pull_request));
    if (rows.length < 100) break;
  }
  return result;
}

export async function collectGitHubIssueData({
  repository,
  token,
  previousObservations,
  fetcher = fetch,
  now = new Date(),
}: {
  repository: string;
  token: string;
  previousObservations: StoredObservation[];
  fetcher?: typeof fetch;
  now?: Date;
}): Promise<GitHubCollection> {
  const retrievedAtUtc = now.toISOString();
  const previous = new Map(previousObservations.map((row) => [row.id, row]));
  const rejectedRecords: GitHubCollection["rejectedRecords"] = [];
  const verifiedIssues = await issuesForLabel(repository, VERIFIED_OBSERVATION_LABEL, token, fetcher);
  const normalized: StoredObservation[] = [];
  for (const issue of verifiedIssues) {
    try {
      const events = await requestJson<GitHubIssueEvent[]>(
        `https://api.github.com/repos/${repository}/issues/${issue.number}/events?per_page=100`,
        token,
        fetcher,
      );
      normalized.push(await normalizeVerifiedObservation(
        issue,
        events,
        retrievedAtUtc,
        previous.get(`github-issue-${issue.number}`),
      ));
    } catch (error) {
      rejectedRecords.push({
        sourceUrl: issue.html_url,
        reason: error instanceof Error ? error.message : "Invalid verified observation",
      });
    }
  }
  const byDedupeKey = new Map<string, StoredObservation>();
  let duplicateCount = 0;
  for (const observation of normalized) {
    const key = await observationDedupeKey(observation);
    const existing = byDedupeKey.get(key);
    if (!existing || observation.trustWeight > existing.trustWeight) {
      if (existing) duplicateCount += 1;
      byDedupeKey.set(key, observation);
    } else {
      duplicateCount += 1;
    }
  }

  const sourceIssues = await issuesForLabel(repository, APPROVED_SOURCE_LABEL, token, fetcher);
  const publicSources: SourceRecord[] = [];
  for (const issue of sourceIssues) {
    try {
      publicSources.push(await normalizeApprovedSource(issue, retrievedAtUtc));
    } catch (error) {
      rejectedRecords.push({
        sourceUrl: issue.html_url,
        reason: error instanceof Error ? error.message : "Invalid approved source",
      });
    }
  }
  return {
    observations: [...byDedupeKey.values()].sort(
      (a, b) => Date.parse(a.observedResetAtUtc) - Date.parse(b.observedResetAtUtc),
    ),
    publicSources: [...new Map(publicSources.map((row) => [row.contentHash, row])).values()],
    rejectedRecords,
    duplicateCount,
    retrievedAtUtc,
  };
}
