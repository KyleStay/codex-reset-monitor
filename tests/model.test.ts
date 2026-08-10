import assert from "node:assert/strict";
import test from "node:test";
import { baselineProbability, buildForecast, candidateProbability, NO_DATA_PRIOR } from "../lib/forecast";
import { scoreForecast } from "../lib/scoring";
import { classifyResetTiming } from "../lib/reset-schedule";
import type { FeatureSnapshot } from "../lib/domain";

const features: FeatureSnapshot = {
  cutoffUtc: "2026-07-28T14:00:00.000Z",
  confirmedEventCount: 6,
  scheduledEventCount: 6,
  outOfCycleEventCount: 0,
  lastResetTiming: "scheduled",
  scheduledResetAtUtc: null,
  hoursSinceLastConfirmedReset: 19,
  medianCycleHours: 26,
  cycleDispersionHours: 4,
  activeIncident: false,
  incidentRecencyHours: 100,
  approvedPostCount24h: 0,
  weightedReportVolume6h: 0,
  sourceTrustMean: 0.7,
  dataQuality: 0.6,
};

test("forecast probabilities are bounded and monotonic by horizon", () => {
  const forecast = buildForecast(features);
  const values = [1, 3, 6, 12, 24].map((hours) => forecast.probabilities[hours as 1 | 3 | 6 | 12 | 24]);
  values.forEach((value) => assert.ok(value >= 0.01 && value <= 0.98));
  for (let index = 1; index < values.length; index += 1) assert.ok(values[index] >= values[index - 1]);
  assert.equal(forecast.dataSufficiencyLabel, "Experimental—limited history");
  assert.deepEqual(forecast.featureSnapshot, features);
});

test("an active incident modestly raises candidate probability", () => {
  const calm = candidateProbability(6, features);
  const active = candidateProbability(6, { ...features, activeIncident: true });
  assert.ok(active > calm);
  assert.ok(active - calm < 0.2);
  assert.ok(baselineProbability(24, features) > baselineProbability(1, features));
});

test("zero observations use the published prior and do not invent a likely interval", () => {
  const forecast = buildForecast({
    ...features,
    confirmedEventCount: 0,
    scheduledEventCount: 0,
    lastResetTiming: null,
    hoursSinceLastConfirmedReset: null,
    sourceTrustMean: 0,
    dataQuality: 0,
  });
  assert.deepEqual(forecast.probabilities, NO_DATA_PRIOR);
  assert.equal(forecast.likelyStartUtc, null);
  assert.equal(forecast.likelyEndUtc, null);
  assert.equal(forecast.modelVersion, "published-prior-0.1.0");
  assert.match(forecast.dataSufficiencyLabel, /no verified reset history/i);
});

test("one observation keeps the prior but acknowledges the confirmed event", () => {
  const forecast = buildForecast({
    ...features,
    confirmedEventCount: 1,
    scheduledEventCount: 0,
    lastResetTiming: "unknown",
    hoursSinceLastConfirmedReset: 7,
    sourceTrustMean: 0.6,
    dataQuality: 0.04,
  });
  assert.deepEqual(forecast.probabilities, NO_DATA_PRIOR);
  assert.equal(forecast.likelyStartUtc, null);
  assert.equal(forecast.likelyEndUtc, null);
  assert.match(forecast.explanationFactors[0].label, /one verified reset/i);
  assert.match(forecast.explanationFactors[0].detail, /at least two/i);
  assert.match(forecast.dataSufficiencyLabel, /limited history/i);
});

test("scoring uses only events after forecast cutoff and within each horizon", () => {
  const forecast = buildForecast(features);
  const scored = scoreForecast(forecast, "2026-07-28T19:00:00.000Z");
  assert.equal(scored.outcomes[1], false);
  assert.equal(scored.outcomes[3], false);
  assert.equal(scored.outcomes[6], true);
  assert.equal(scored.outcomes[24], true);
  assert.ok(scored.brierScore >= 0 && scored.brierScore <= 1);
  assert.ok(scored.absoluteTimingErrorMinutes !== null);
});

test("an early full-window re-anchor is classified out of cycle", () => {
  const result = classifyResetTiming({
    observedResetAtUtc: "2026-08-08T20:32:48.433Z",
    previousResetsAtUtc: "2026-08-15T09:19:41.000Z",
    currentResetsAtUtc: "2026-08-15T20:29:18.000Z",
  });
  assert.equal(result.timing, "out-of-cycle");
  assert.ok((result.scheduledLeadMinutes ?? 0) > 9_000);
});

test("an official provider anchor overrides an out-of-cycle interval", () => {
  const forecast = buildForecast({
    ...features,
    cutoffUtc: "2026-08-08T21:00:00.000Z",
    confirmedEventCount: 2,
    scheduledEventCount: 1,
    outOfCycleEventCount: 1,
    lastResetTiming: "out-of-cycle",
    scheduledResetAtUtc: "2026-08-15T20:29:18.000Z",
    medianCycleHours: 167.94,
    cycleDispersionHours: 8.4,
  });
  assert.equal(forecast.modelVersion, "provider-anchor-baseline-0.3.0");
  assert.ok(forecast.probabilities[24] < 0.05);
  assert.ok(forecast.likelyStartUtc && Date.parse(forecast.likelyStartUtc) > Date.parse("2026-08-15T16:00:00Z"));
  assert.match(forecast.explanationFactors[1].label, /out-of-cycle/i);
});
