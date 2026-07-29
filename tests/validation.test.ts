import assert from "node:assert/strict";
import test from "node:test";
import researchHistory from "../data/research-history.json";
import { validateHistoricalResearch } from "../lib/research";
import { observationDedupeKey, validateObservation } from "../lib/validation";

const valid = {
  limitReachedAtUtc: "2026-07-27T10:00:00-04:00",
  observedResetAtUtc: "2026-07-27T12:00:00-04:00",
  statedTimeZone: "America/New_York",
  codexSurface: "cli",
  planTier: "individual-paid",
  relatedIncidentIds: [],
  relatedSourceIds: [],
  submitterNotes: "Checked manually after lunch.",
  detectionMethod: "manual-retry",
  confidence: 0.8,
};

test("observation validation normalizes timestamps to UTC", () => {
  const result = validateObservation(valid);
  assert.equal(result.limitReachedAtUtc, "2026-07-27T14:00:00.000Z");
  assert.equal(result.observedResetAtUtc, "2026-07-27T16:00:00.000Z");
  assert.equal(result.statedTimeZone, "America/New_York");
});

test("validation rejects unexpected or sensitive fields", () => {
  assert.throws(() => validateObservation({ ...valid, prompt: "private" }), /Unexpected field/);
  assert.throws(() => validateObservation({ ...valid, submitterNotes: "Authorization: bearer secret" }), /credential or session/);
  assert.throws(() => validateObservation({ ...valid, observedResetAtUtc: valid.limitReachedAtUtc }), /later/);
});

test("dedupe key collapses matching surface, timezone, and 15-minute reset bucket", async () => {
  const first = validateObservation(valid);
  const second = validateObservation({ ...valid, observedResetAtUtc: "2026-07-27T12:07:00-04:00" });
  assert.equal(await observationDedupeKey(first), await observationDedupeKey(second));
});

test("historical research remains explicitly inferred and source-backed", () => {
  const rows = validateHistoricalResearch(researchHistory);
  assert.ok(rows.length >= 2);
  assert.ok(rows.every((row) => row.verificationState === "inferred"));
  assert.ok(rows.every((row) => row.sources.length > 0 && row.detectionSignals.length > 0));
  assert.ok(rows.every((row) => row.datePrecision === "day" || row.eventTimeUtc?.startsWith(row.eventDate)));
  assert.throws(
    () =>
      validateHistoricalResearch([
        {
          ...rows[0],
          id: "missing-precise-time",
          datePrecision: "hour",
          eventTimeUtc: undefined,
        },
      ]),
    /requires a UTC eventTimeUtc/,
  );
});
