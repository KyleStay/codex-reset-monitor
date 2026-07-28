import type { CollectionBatch, SourceAdapter, SourceHealth, SourceRecord } from "../domain";
import fixture from "../../fixtures/openai-status.json";
import { stableDigest } from "../validation";

interface StatusIncident {
  id: string;
  name: string;
  status: string;
  impact: string;
  created_at: string;
  resolved_at?: string | null;
  shortlink: string;
  body?: string;
}

export class OpenAIStatusAdapter implements SourceAdapter {
  readonly id = "openai-status-v1";
  readonly kind = "official_status" as const;

  constructor(private readonly load: () => Promise<unknown> = async () => fixture) {}

  async normalize(raw: unknown, retrievedAtUtc: string): Promise<SourceRecord> {
    if (!raw || typeof raw !== "object") throw new Error("Invalid status incident");
    const incident = raw as Partial<StatusIncident>;
    if (!incident.id || !incident.name || !incident.created_at || !incident.shortlink) {
      throw new Error("Official status record is missing required provenance");
    }
    const canonical = {
      id: incident.id,
      name: incident.name.trim(),
      status: incident.status ?? "unknown",
      impact: incident.impact ?? "unknown",
      createdAt: new Date(incident.created_at).toISOString(),
      resolvedAt: incident.resolved_at ? new Date(incident.resolved_at).toISOString() : null,
      url: incident.shortlink,
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
      excerpt: incident.body?.trim().slice(0, 240) ?? null,
      metadata: { externalId: canonical.id, status: canonical.status, impact: canonical.impact },
      normalizedFeatures: {
        codexRelevant: /codex|usage limit/i.test(`${canonical.name} ${incident.body ?? ""}`),
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
      return { status: "healthy", checkedAtUtc: new Date().toISOString(), message: "Fixture parsed successfully; live collection is disabled." };
    } catch (error) {
      return { status: "degraded", checkedAtUtc: new Date().toISOString(), message: error instanceof Error ? error.message : "Unknown adapter failure" };
    }
  }
}
