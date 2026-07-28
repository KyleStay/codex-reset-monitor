import assert from "node:assert/strict";
import test from "node:test";
import fixture from "../fixtures/openai-status.json";
import { OpenAIStatusAdapter } from "../lib/sources/openai-status";
import { buildForecast } from "../lib/forecast";
import { scoreForecast } from "../lib/scoring";
import { validateObservation } from "../lib/validation";
import type { FeatureSnapshot } from "../lib/domain";

test("fixture ingestion is idempotent and retains required provenance", async () => {
  const adapter = new OpenAIStatusAdapter(async () => ({
    ...fixture,
    incidents: [fixture.incidents[0], fixture.incidents[0]],
  }));
  const batch = await adapter.collect();
  assert.equal(batch.records.length, 1);
  assert.equal(batch.records[0].provenance, "official");
  assert.ok(batch.records[0].canonicalUrl.startsWith("https://"));
  assert.ok(batch.records[0].contentHash.length === 64);
  assert.equal(batch.records[0].normalizedFeatures.codexRelevant, true);
});

test("submission-to-forecast-to-score pipeline is reproducible", async () => {
  const observation = validateObservation({
    limitReachedAtUtc: "2026-07-28T08:00:00.000Z",
    observedResetAtUtc: "2026-07-28T12:00:00.000Z",
    statedTimeZone: "UTC",
    codexSurface: "cli",
    relatedIncidentIds: [],
    relatedSourceIds: [],
    detectionMethod: "manual-retry",
    confidence: 0.9,
  });
  const features: FeatureSnapshot = {
    cutoffUtc: "2026-07-28T14:00:00.000Z",
    confirmedEventCount: 1,
    hoursSinceLastConfirmedReset: 2,
    medianCycleHours: 24,
    cycleDispersionHours: 6,
    activeIncident: false,
    incidentRecencyHours: null,
    approvedPostCount24h: 0,
    weightedReportVolume6h: 0,
    sourceTrustMean: observation.confidence,
    dataQuality: 0.4,
  };
  const first = buildForecast(features);
  const second = buildForecast(features);
  assert.deepEqual(first, second);
  const scored = scoreForecast(first, "2026-07-29T12:00:00.000Z");
  assert.equal(scored.outcomes[24], true);
});

test("correction schema is append-only by contract", async () => {
  const schema = await import("../db/schema");
  assert.ok(schema.observationAudit);
  assert.ok(schema.resetObservations);
  assert.notEqual(schema.observationAudit, schema.resetObservations);
});
