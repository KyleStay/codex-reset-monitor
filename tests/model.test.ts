import assert from "node:assert/strict";
import test from "node:test";
import { baselineProbability, buildForecast, candidateProbability } from "../lib/forecast";
import { scoreForecast } from "../lib/scoring";
import type { FeatureSnapshot } from "../lib/domain";

const features: FeatureSnapshot = {
  cutoffUtc: "2026-07-28T14:00:00.000Z",
  confirmedEventCount: 6,
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
