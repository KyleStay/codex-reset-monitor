import type { CollectionBatch, SourceAdapter, SourceHealth, SourceRecord } from "../domain";
import { stableDigest } from "../validation";

interface StatusIncident {
  id: string;
  name: string;
  status: string;
  impact: string;
  created_at: string;
  resolved_at?: string | null;
  shortlink?: string | null;
  updated_at?: string;
  body?: string;
  incident_updates?: Array<{ body?: string }>;
}

export class OpenAIStatusAdapter implements SourceAdapter {
  readonly id = "openai-status-v1";
  readonly kind = "official_status" as const;

  constructor(private readonly load: () => Promise<unknown> = async () => {
    let lastError = "OpenAI Status request failed";
    for (let attempt = 0; attempt < 3; attempt += 1) {
      const response = await fetch("https://status.openai.com/api/v2/incidents.json", {
        headers: { "user-agent": "codex-reset-monitor/0.2 (+https://github.com/KyleStay/codex-reset-monitor)" },
        signal: AbortSignal.timeout(15_000),
      });
      if (response.ok) return response.json();
      lastError = `OpenAI Status returned ${response.status}`;
      if (response.status !== 429 && response.status < 500) break;
      await new Promise((resolve) => setTimeout(resolve, 250 * 2 ** attempt));
    }
    throw new Error(lastError);
  }) {}

  async normalize(raw: unknown, retrievedAtUtc: string): Promise<SourceRecord> {
    if (!raw || typeof raw !== "object") throw new Error("Invalid status incident");
    const incident = raw as Partial<StatusIncident>;
    if (!incident.id || !incident.name || !incident.created_at) {
      throw new Error("Official status record is missing required provenance");
    }
    const updateText = incident.incident_updates?.map((update) => update.body ?? "").join(" ").trim();
    const canonical = {
      id: incident.id,
      name: incident.name.trim(),
      status: incident.status ?? "unknown",
      impact: incident.impact ?? "unknown",
      createdAt: new Date(incident.created_at).toISOString(),
      resolvedAt: incident.resolved_at ? new Date(incident.resolved_at).toISOString() : null,
      updatedAt: incident.updated_at ? new Date(incident.updated_at).toISOString() : null,
      url: incident.shortlink ?? `https://status.openai.com/incidents/${incident.id}`,
    };
    return {
      id: `src_${await stableDigest(`${this.id}|${incident.id}`).then((value) => value.slice(0, 16))}`,
      sourceAdapterId: this.id,
      sourceKind: this.kind,
      provenance: "official",
      publicationTimeUtc: canonical.createdAt,
      retrievalTimeUtc: new Date(retrievedAtUtc).toISOString(),
      canonicalUrl: canonical.url,
      title: canonical.name,
      excerpt: (updateText || incident.body)?.replace(/\s+/g, " ").trim().slice(0, 240) ?? null,
      metadata: { externalId: canonical.id, status: canonical.status, impact: canonical.impact },
      normalizedFeatures: {
        codexRelevant: /codex|usage limit/i.test(`${canonical.name} ${updateText} ${incident.body ?? ""}`),
        active: canonical.status !== "resolved",
        impact: canonical.impact,
      },
      contentHash: await stableDigest(JSON.stringify(canonical)),
    };
  }

  async collect(): Promise<CollectionBatch> {
    const retrievedAtUtc = new Date().toISOString();
    const payload = await this.load() as { incidents?: unknown[] };
    const records = await Promise.all((payload.incidents ?? []).map((row) => this.normalize(row, retrievedAtUtc)));
    const unique = [...new Map(records.map((record) => [record.contentHash, record])).values()];
    return { records: unique, retrievedAtUtc };
  }

  async health(): Promise<SourceHealth> {
    try {
      await this.collect();
      return { status: "healthy", checkedAtUtc: new Date().toISOString(), message: "Official OpenAI Status JSON collected successfully." };
    } catch (error) {
      return { status: "degraded", checkedAtUtc: new Date().toISOString(), message: error instanceof Error ? error.message : "Unknown adapter failure" };
    }
  }
}
