import assert from "node:assert/strict";
import test from "node:test";
import researchHistory from "../data/research-history.json";
import sourcePolicy from "../data/source-policy.json";
import { validateHistoricalResearch } from "../lib/research";
import { observationDedupeKey, validateObservation } from "../lib/validation";

const valid = {
  observationKind: "access-restored",
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

test("validation accepts only source-backed local meter-reset transitions", () => {
  const result = validateObservation({
    observationKind: "meter-reset",
    priorSampleAtUtc: "2026-08-01T10:00:00Z",
    observedResetAtUtc: "2026-08-01T10:05:00Z",
    previousUsedPercent: 37,
    currentUsedPercent: 0,
    previousResetsAtUtc: "2026-08-03T10:00:00Z",
    currentResetsAtUtc: "2026-08-08T10:05:00Z",
    statedTimeZone: "America/New_York",
    codexSurface: "other",
    planTier: "individual-paid",
    relatedIncidentIds: [],
    relatedSourceIds: [],
    detectionMethod: "local-observer",
    confidence: 0.95,
  });
  assert.equal(result.limitReachedAtUtc, undefined);
  assert.equal(result.observationKind, "meter-reset");
  assert.equal(result.previousUsedPercent, 37);
  assert.throws(
    () => validateObservation({ ...result, currentResetsAtUtc: result.previousResetsAtUtc }),
    /advanced reset timestamp/,
  );
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

test("configured social sources are canonical and manual-review only", () => {
  assert.ok(sourcePolicy.socialWatchlist.length > 0);
  for (const source of sourcePolicy.socialWatchlist) {
    const url = new URL(source.canonicalUrl);
    assert.equal(url.protocol, "https:");
    assert.equal(url.hostname, source.host);
    assert.equal(url.pathname, `/${source.handle}`);
    assert.equal(source.collectionMethod, "manual-source-native-browser-review");
    assert.match(source.rule, /cannot by itself create a confirmed observation/i);
  }
});

test("configured social discovery fallbacks cannot become evidence by themselves", () => {
  const requiredFallbacks = new Map([
    ["willcodexquotareset.com", /never treat .* as source proof/i],
    ["publish.twitter.com", /does not .* replace independent reset observation/i],
    ["public.api.bsky.app", /require a canonical X status URL/i],
  ]);

  for (const [host, guardrail] of requiredFallbacks) {
    const source = sourcePolicy.researchSources.find((candidate) => candidate.host === host);
    assert.ok(source, `missing configured discovery fallback ${host}`);
    assert.match(source.rule, guardrail);
  }
});
