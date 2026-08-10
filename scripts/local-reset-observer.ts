import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, open, readFile, rename, stat, unlink, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import {
  advanceLocalObserver,
  emptyLocalObserverState,
  markLocalCandidatePublished,
  normalizeLocalObserverState,
  recordLocalTelemetry,
  rememberLocalCandidate,
  type LocalObserverState,
  type LocalResetCandidate,
  type SafeRateLimitBucket,
  type SafeRateLimitSample,
  type SafeResetCreditSnapshot,
} from "../lib/local-observer";
import { validateObservation } from "../lib/validation";

const args = new Set(process.argv.slice(2));
const publish = args.has("--publish");
const statusOnly = args.has("--status");
const repository = process.env.GITHUB_REPOSITORY ?? "KyleStay/codex-reset-monitor";
const statePath = process.env.CODEX_RESET_MONITOR_STATE_PATH
  ?? join(homedir(), "Library", "Application Support", "Codex Reset Monitor", "local-observer.json");
const lockPath = `${statePath}.lock`;
// UTC satisfies the observation schema without publishing the device's locale.
const timeZone = "UTC";

interface RateLimitWindowResponse {
  usedPercent?: number;
  windowDurationMins?: number | null;
  resetsAt?: number | null;
}

interface RateLimitBucketResponse {
  limitId?: string | null;
  limitName?: string | null;
  primary?: RateLimitWindowResponse | null;
  secondary?: RateLimitWindowResponse | null;
  planType?: string | null;
  rateLimitReachedType?: string | null;
}

interface AppServerRateLimitsResponse {
  rateLimits?: RateLimitBucketResponse | null;
  rateLimitsByLimitId?: Record<string, RateLimitBucketResponse> | null;
  rateLimitResetCredits?: {
    availableCount?: number;
    credits?: Array<{
      resetType?: string | null;
      status?: string | null;
      grantedAt?: number | null;
      expiresAt?: number | null;
      title?: string | null;
    }> | null;
  } | null;
}

interface SafeTelemetryRead {
  sample: SafeRateLimitSample;
  rateLimitBuckets: SafeRateLimitBucket[];
  resetCredits: SafeResetCreditSnapshot | null;
}

async function acquireLock() {
  await mkdir(dirname(statePath), { recursive: true, mode: 0o700 });
  try {
    return await open(lockPath, "wx", 0o600);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "EEXIST") throw error;
    const ageMs = Date.now() - (await stat(lockPath)).mtimeMs;
    if (ageMs < 10 * 60_000) return null;
    await unlink(lockPath);
    return open(lockPath, "wx", 0o600);
  }
}

async function readState(): Promise<LocalObserverState> {
  try {
    return normalizeLocalObserverState(JSON.parse(await readFile(statePath, "utf8")));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return emptyLocalObserverState();
    throw error;
  }
}

async function writeState(state: LocalObserverState) {
  const temporary = `${statePath}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(state, null, 2)}\n`, { mode: 0o600 });
  await rename(temporary, statePath);
}

function generalizedPlanTier(value: string | null | undefined): SafeRateLimitSample["planTier"] {
  const normalized = value?.toLowerCase() ?? "";
  if (normalized.includes("free") || normalized === "go") return "free";
  if (["plus", "pro"].some((part) => normalized.includes(part))) return "individual-paid";
  if (["business", "team", "enterprise", "edu"].some((part) => normalized.includes(part))) return "team-or-enterprise";
  return "unknown";
}

function optionalNonNegativeNumber(value: unknown): number | null {
  return Number.isFinite(value) && Number(value) >= 0 ? Number(value) : null;
}

function safeWindow(
  value: RateLimitWindowResponse | null | undefined,
  exhausted: boolean,
): SafeRateLimitBucket["primary"] {
  if (!value || !Number.isFinite(value.usedPercent)) return null;
  return {
    usedPercent: Number(value.usedPercent),
    resetsAtUtc: Number.isFinite(value.resetsAt) && Number(value.resetsAt) > 0
      ? new Date(Number(value.resetsAt) * 1000).toISOString()
      : null,
    windowDurationMinutes: optionalNonNegativeNumber(value.windowDurationMins),
    exhausted: exhausted || Number(value.usedPercent) >= 100,
  };
}

function safeLimitId(value: string | null | undefined, fallback: string) {
  const candidate = value ?? fallback;
  return /^[A-Za-z0-9_.:-]{1,80}$/.test(candidate) ? candidate : "unknown";
}

function parseRateLimitBuckets(result: AppServerRateLimitsResponse): SafeRateLimitBucket[] {
  const entries = result.rateLimitsByLimitId && Object.keys(result.rateLimitsByLimitId).length
    ? Object.entries(result.rateLimitsByLimitId)
    : result.rateLimits
      ? [[result.rateLimits.limitId ?? "codex", result.rateLimits] as const]
      : [];
  return entries.map(([key, bucket]) => {
    const exhausted = bucket.rateLimitReachedType === "rate_limit_reached";
    return {
      limitId: safeLimitId(bucket.limitId, key),
      limitName: typeof bucket.limitName === "string" && bucket.limitName.length <= 80 ? bucket.limitName : null,
      primary: safeWindow(bucket.primary, exhausted),
      secondary: safeWindow(bucket.secondary, exhausted),
    };
  });
}

function safeUnixTimestamp(value: number | null | undefined) {
  return Number.isFinite(value) && Number(value) > 0 ? new Date(Number(value) * 1000).toISOString() : null;
}

function safeLabel(value: string | null | undefined) {
  return typeof value === "string" && value.length <= 80 ? value : null;
}

function parseResetCredits(result: AppServerRateLimitsResponse, sampledAtUtc: string): SafeResetCreditSnapshot | null {
  const snapshot = result.rateLimitResetCredits;
  if (!snapshot || !Number.isFinite(snapshot.availableCount)) return null;
  return {
    sampledAtUtc,
    availableCount: Math.floor(Number(snapshot.availableCount)),
    credits: (snapshot.credits ?? []).map((credit) => ({
      resetType: safeLabel(credit.resetType) ?? "unknown",
      status: safeLabel(credit.status) ?? "unknown",
      grantedAtUtc: safeUnixTimestamp(credit.grantedAt),
      expiresAtUtc: safeUnixTimestamp(credit.expiresAt),
      title: safeLabel(credit.title),
    })),
  };
}

async function readTelemetry(): Promise<SafeTelemetryRead> {
  const executable = process.env.CODEX_BIN ?? "codex";
  const child = spawn(executable, ["app-server", "--stdio"], {
    stdio: ["pipe", "pipe", "ignore"],
  });
  child.stdout.setEncoding("utf8");
  let buffer = "";

  const result = await new Promise<AppServerRateLimitsResponse>((resolve, reject) => {
    let settled = false;
    const timer = setTimeout(() => finish(() => reject(new Error("Codex telemetry read timed out"))), 20_000);
    const finish = (callback: () => void) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      child.kill();
      callback();
    };
    child.on("error", (error) => finish(() => reject(error)));
    child.on("exit", (code) => {
      finish(() => reject(new Error(`Codex app-server exited before returning rate limits (status ${code ?? "unknown"})`)));
    });
    child.stdout.on("data", (chunk: string) => {
      buffer += chunk;
      let newline = buffer.indexOf("\n");
      while (newline >= 0) {
        const line = buffer.slice(0, newline).trim();
        buffer = buffer.slice(newline + 1);
        newline = buffer.indexOf("\n");
        if (!line) continue;
        let message: { id?: number; result?: AppServerRateLimitsResponse; error?: { message?: string } };
        try {
          message = JSON.parse(line) as typeof message;
        } catch {
          continue;
        }
        if (message.id === 1) {
          child.stdin.write(`${JSON.stringify({ method: "initialized" })}\n`);
          child.stdin.write(`${JSON.stringify({ method: "account/rateLimits/read", id: 2 })}\n`);
        } else if (message.id === 2) {
          if (message.error) finish(() => reject(new Error(message.error?.message ?? "Codex rate-limit read failed")));
          else finish(() => resolve(message.result ?? {}));
        }
      }
    });
    child.stdin.write(`${JSON.stringify({
      method: "initialize",
      id: 1,
      params: {
        clientInfo: { name: "codex-reset-monitor", title: "Codex Reset Monitor", version: "0.1.0" },
        capabilities: null,
      },
    })}\n`);
  });

  const snapshot = result.rateLimits;
  const primary = snapshot?.primary;
  if (!primary || !Number.isFinite(primary.usedPercent)) {
    throw new Error("Codex did not return a primary rate-limit window");
  }
  const resetsAt = Number.isFinite(primary.resetsAt) && Number(primary.resetsAt) > 0
    ? new Date(Number(primary.resetsAt) * 1000).toISOString()
    : null;
  const usedPercent = Number(primary.usedPercent);
  const sampledAtUtc = new Date().toISOString();
  return {
    sample: {
      sampledAtUtc,
      usedPercent,
      resetsAtUtc: resetsAt,
      windowDurationMinutes: Number.isFinite(primary.windowDurationMins) ? Number(primary.windowDurationMins) : null,
      exhausted: snapshot?.rateLimitReachedType === "rate_limit_reached" || usedPercent >= 100,
      planTier: generalizedPlanTier(snapshot?.planType),
    },
    rateLimitBuckets: parseRateLimitBuckets(result),
    resetCredits: parseResetCredits(result, sampledAtUtc),
  };
}

function statusPayload(state: LocalObserverState) {
  return {
    schemaVersion: state.schemaVersion,
    latestSample: state.lastSample,
    retainedSampleCount: state.recentSamples.length,
    retainedFromUtc: state.recentSamples.at(0)?.sampledAtUtc ?? null,
    rateLimitBuckets: state.latestRateLimitBuckets,
    resetCredits: state.latestResetCredits,
    detectedResets: state.detectedResets,
    pendingPublication: Boolean(state.pendingCandidate),
    publishedResetCount: state.publishedKeys.length,
  };
}

function candidateKey(candidate: LocalResetCandidate) {
  return createHash("sha256")
    .update([candidate.observationKind, candidate.limitReachedAtUtc ?? candidate.priorSampleAtUtc, candidate.observedResetAtUtc, candidate.statedTimeZone].join("|"))
    .digest("hex");
}

function issueBody(candidate: LocalResetCandidate, key: string) {
  const tier = {
    free: "Free",
    "individual-paid": "Individual paid",
    "team-or-enterprise": "Team or enterprise",
    unknown: "Prefer not to say / unknown",
  }[candidate.planTier ?? "unknown"];
  const common = [
    `<!-- local-observer-key: ${key} -->`,
    "### Observation kind", candidate.observationKind === "meter-reset" ? "Locally observed meter reset" : "Access restored after limit reached",
  ];
  const timing = candidate.observationKind === "meter-reset"
    ? [
      "### Prior sample time", candidate.priorSampleAtUtc ?? "_No response_",
      "### Observed reset time", candidate.observedResetAtUtc,
      "### Previous used percent", `${candidate.previousUsedPercent}%`,
      "### Current used percent", `${candidate.currentUsedPercent}%`,
      "### Previous reset time", candidate.previousResetsAtUtc ?? "_No response_",
      "### Current reset time", candidate.currentResetsAtUtc ?? "_No response_",
    ]
    : [
      "### Limit reached time", candidate.limitReachedAtUtc ?? "_No response_",
      "### Access returned time", candidate.observedResetAtUtc,
      "### Previous reset time", candidate.previousResetsAtUtc ?? "_No response_",
      "### Current reset time", candidate.currentResetsAtUtc ?? "_No response_",
    ];
  const classification = [
    "### Reset timing", candidate.resetTiming,
    "### Lead versus previous schedule", candidate.scheduledLeadMinutes === null
      ? "_No response_"
      : `${candidate.scheduledLeadMinutes} minutes`,
    "### Reset credits before", candidate.previousResetCredits?.availableCount ?? "_No response_",
    "### Reset credits after", candidate.currentResetCredits?.availableCount ?? "_No response_",
  ];
  return [
    ...common,
    ...timing,
    ...classification,
    "### Time zone", candidate.statedTimeZone,
    "### Codex surface", "Other — account-level local telemetry",
    "### Generalized plan tier", tier,
    "### Detection method", "Local observer",
    "### Confidence", "100%",
    "### Preceding forecast ID", "_No response_",
    "### Related incident IDs", "_No response_",
    "### Related public-source IDs", "_No response_",
    "### Notes", candidate.submitterNotes ?? "Privacy-safe local observation.",
  ].join("\n\n");
}

async function runGh(args: string[], stdin?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const child = spawn(process.env.GH_BIN ?? "gh", args, { stdio: ["pipe", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    const timer = setTimeout(() => {
      child.kill();
      reject(new Error("GitHub publication timed out; the candidate remains pending"));
    }, 30_000);
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (chunk: string) => { stdout += chunk; });
    child.stderr.on("data", (chunk: string) => { stderr += chunk; });
    child.on("error", (error) => {
      clearTimeout(timer);
      reject(error);
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      if (code === 0) resolve(stdout);
      else reject(new Error(stderr.trim() || `gh exited with status ${code}`));
    });
    if (stdin) child.stdin.write(stdin);
    child.stdin.end();
  });
}

async function publishCandidate(candidate: LocalResetCandidate, key: string) {
  const existingRaw = await runGh([
    "api", `repos/${repository}/issues`, "--method", "GET",
    "-f", "state=all", "-f", "labels=verified-observation", "-f", "per_page=100",
  ]);
  const existing = (JSON.parse(existingRaw) as Array<{ number: number; html_url: string; body?: string | null }>)
    .find((issue) => issue.body?.includes(`local-observer-key: ${key}`));
  if (existing) return { number: existing.number, url: existing.html_url, reused: true };

  const titleTime = candidate.observedResetAtUtc.replace(/\.\d{3}Z$/, "Z");
  const eventLabel = candidate.observationKind === "meter-reset" ? "meter reset" : "rate-limit recovery";
  const payload = JSON.stringify({
    title: `[Reset observation] Local ${eventLabel} ${titleTime}`,
    body: issueBody(candidate, key),
    labels: ["reset-observation", "verified-observation"],
  });
  const createdRaw = await runGh([
    "api", `repos/${repository}/issues`, "--method", "POST", "--input", "-",
  ], payload);
  const created = JSON.parse(createdRaw) as { number: number; html_url: string };
  return { number: created.number, url: created.html_url, reused: false };
}

if (statusOnly) {
  console.log(JSON.stringify(statusPayload(await readState()), null, 2));
  process.exit(0);
}

console.log(JSON.stringify({ status: "starting", mode: publish ? "publish" : "read-only" }));

const lock = await acquireLock();
if (!lock) {
  console.log(JSON.stringify({ status: "skipped", reason: "observer already running" }));
  process.exit(0);
}

try {
  await lock.writeFile(new Date().toISOString());
  let state = await readState();
  let publishedIssue: { number: number; url: string; reused: boolean } | null = null;

  if (publish && state.pendingCandidate) {
    publishedIssue = await publishCandidate(state.pendingCandidate, state.pendingCandidate.key);
    state = markLocalCandidatePublished(state, state.pendingCandidate.key);
    await writeState(state);
  }

  const telemetry = await readTelemetry();
  const sample = telemetry.sample;
  const advanced = advanceLocalObserver(state, sample, timeZone, telemetry.resetCredits);
  state = recordLocalTelemetry(advanced.state, telemetry.rateLimitBuckets, telemetry.resetCredits);
  if (advanced.candidate) {
    const validated = validateObservation({
      observationKind: advanced.candidate.observationKind,
      limitReachedAtUtc: advanced.candidate.limitReachedAtUtc,
      priorSampleAtUtc: advanced.candidate.priorSampleAtUtc,
      observedResetAtUtc: advanced.candidate.observedResetAtUtc,
      previousUsedPercent: advanced.candidate.previousUsedPercent,
      currentUsedPercent: advanced.candidate.currentUsedPercent,
      previousResetsAtUtc: advanced.candidate.previousResetsAtUtc,
      currentResetsAtUtc: advanced.candidate.currentResetsAtUtc,
      statedTimeZone: advanced.candidate.statedTimeZone,
      precedingForecastId: advanced.candidate.precedingForecastId,
      codexSurface: advanced.candidate.codexSurface,
      planTier: advanced.candidate.planTier,
      relatedIncidentIds: advanced.candidate.relatedIncidentIds,
      relatedSourceIds: advanced.candidate.relatedSourceIds,
      submitterNotes: advanced.candidate.submitterNotes,
      detectionMethod: advanced.candidate.detectionMethod,
      confidence: advanced.candidate.confidence,
    });
    const candidate = { ...advanced.candidate, ...validated };
    const key = candidateKey(candidate);
    state = rememberLocalCandidate(state, candidate, key);
    if (!state.publishedKeys.includes(key)) state.pendingCandidate = { ...candidate, key };
  }
  await writeState(state);

  if (publish && state.pendingCandidate) {
    publishedIssue = await publishCandidate(state.pendingCandidate, state.pendingCandidate.key);
    state = markLocalCandidatePublished(state, state.pendingCandidate.key);
    await writeState(state);
  }

  console.log(JSON.stringify({
    status: "ok",
    sampledAtUtc: sample.sampledAtUtc,
    usedPercent: sample.usedPercent,
    exhausted: sample.exhausted,
    resetsAtUtc: sample.resetsAtUtc,
    rateLimitBucketCount: state.latestRateLimitBuckets.length,
    queuedResetCount: state.latestResetCredits?.availableCount ?? 0,
    detectedResetCount: state.detectedResets.length,
    pendingPublication: Boolean(state.pendingCandidate),
    publishedIssue,
  }));
} finally {
  await lock.close();
  await unlink(lockPath).catch(() => undefined);
}
