import type { HistoricalResearchEvent } from "./domain";

const isoDate = /^\d{4}-\d{2}-\d{2}$/;

export function validateHistoricalResearch(value: unknown): HistoricalResearchEvent[] {
  if (!Array.isArray(value)) throw new Error("Historical research must be an array");
  const ids = new Set<string>();
  return value.map((candidate, index) => {
    if (!candidate || typeof candidate !== "object") {
      throw new Error(`Historical research row ${index} must be an object`);
    }
    const row = candidate as Partial<HistoricalResearchEvent>;
    if (!row.id || ids.has(row.id)) throw new Error(`Historical research row ${index} has an invalid or duplicate id`);
    ids.add(row.id);
    if (!row.eventDate || !isoDate.test(row.eventDate)) throw new Error(`${row.id} must use a date-only eventDate`);
    if (!["day", "hour", "exact"].includes(row.datePrecision ?? "")) throw new Error(`${row.id} has invalid date precision`);
    if (!["inferred_reset", "reset_mechanism_change"].includes(row.classification ?? "")) throw new Error(`${row.id} has invalid classification`);
    if (row.verificationState !== "inferred") throw new Error(`${row.id} must remain explicitly inferred`);
    if (!["unknown", "paid_plans", "selected_plans"].includes(row.scope ?? "")) throw new Error(`${row.id} has invalid scope`);
    if (!row.title || !row.summary) throw new Error(`${row.id} requires a title and summary`);
    if (!["A", "B", "C", "D"].includes(row.evidenceGrade ?? "")) throw new Error(`${row.id} has invalid evidence grade`);
    if (!row.cause || !["confirmed", "attributed", "hypothesis", "unknown"].includes(row.cause.confidence)) {
      throw new Error(`${row.id} has an invalid cause assessment`);
    }
    if (!Array.isArray(row.detectionSignals) || row.detectionSignals.length === 0) {
      throw new Error(`${row.id} requires at least one detection signal`);
    }
    if (!Array.isArray(row.contradictions) || !Array.isArray(row.sources) || row.sources.length === 0) {
      throw new Error(`${row.id} requires source and contradiction arrays`);
    }
    for (const source of row.sources) {
      if (!source.canonicalUrl.startsWith("https://") || Number.isNaN(Date.parse(source.publicationTimeUtc))) {
        throw new Error(`${row.id} has an invalid source`);
      }
    }
    if (Number.isNaN(Date.parse(row.firstRecordedAtUtc ?? "")) || Number.isNaN(Date.parse(row.lastReviewedAtUtc ?? ""))) {
      throw new Error(`${row.id} has invalid audit timestamps`);
    }
    return row as HistoricalResearchEvent;
  });
}
