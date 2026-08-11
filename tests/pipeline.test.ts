import assert from "node:assert/strict";
import test from "node:test";
import fixture from "../fixtures/openai-status.json";
import { OpenAIStatusAdapter } from "../lib/sources/openai-status";
import { buildForecast } from "../lib/forecast";
import { scoreForecast } from "../lib/scoring";
import { validateObservation } from "../lib/validation";
import {
  collectGitHubIssueData,
  normalizeVerifiedObservation,
  parseIssueFormBody,
} from "../lib/sources/github-issues";
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
    observationKind: "access-restored",
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
    scheduledEventCount: 0,
    outOfCycleEventCount: 0,
    lastResetTiming: "unknown",
    scheduledResetAtUtc: null,
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

const observationBody = `### Limit reached time

2026-07-27T08:00:00Z

### Access returned time

2026-07-27T12:00:00Z

### Previous reset time

2026-07-29T12:00:00Z

### Current reset time

2026-08-03T12:00:00Z

### Time zone

UTC

### Codex surface

CLI

### Generalized plan tier

Prefer not to say / unknown

### Detection method

Manual retry

### Confidence

90%

### Preceding forecast ID

_No response_

### Related incident IDs

_No response_

### Related public-source IDs

_No response_

### Notes

Timing only
Second line`;

test("GitHub issue form parsing retains only validated observation fields", async () => {
  const fields = parseIssueFormBody(observationBody);
  assert.equal(fields.get("Codex surface"), "CLI");
  assert.equal(fields.get("Notes"), "Timing only\nSecond line");
  const normalized = await normalizeVerifiedObservation({
    number: 42,
    html_url: "https://github.com/KyleStay/codex-reset-monitor/issues/42",
    body: observationBody,
    created_at: "2026-07-27T12:05:00Z",
    updated_at: "2026-07-27T13:00:00Z",
  }, [{
    event: "labeled",
    created_at: "2026-07-27T13:00:00Z",
    label: { name: "verified-observation" },
  }], "2026-07-28T04:17:00Z");
  assert.equal(normalized.codexSurface, "cli");
  assert.equal(normalized.observationKind, "access-restored");
  assert.equal(normalized.previousResetsAtUtc, "2026-07-29T12:00:00.000Z");
  assert.equal(normalized.currentResetsAtUtc, "2026-08-03T12:00:00.000Z");
  assert.equal(normalized.verifiedAtUtc, "2026-07-27T13:00:00.000Z");
  assert.equal(normalized.trustWeight, 0.54);
  assert.equal(normalized.auditHistory[0].action, "verified");
  assert.equal("author" in normalized, false);
});

test("GitHub normalization accepts privacy-safe local meter resets without a fabricated limit time", async () => {
  const body = `### Observation kind

Locally observed meter reset

### Prior sample time

2026-08-01T10:00:00Z

### Observed reset time

2026-08-01T10:05:00Z

### Previous used percent

37%

### Current used percent

0%

### Previous reset time

2026-08-03T10:00:00Z

### Current reset time

2026-08-08T10:05:00Z

### Time zone

America/New_York

### Codex surface

Other — account-level local telemetry

### Generalized plan tier

Individual paid

### Detection method

Local observer

### Confidence

95%

### Notes

Privacy-safe local observation.`;
  const normalized = await normalizeVerifiedObservation({
    number: 44,
    html_url: "https://github.com/KyleStay/codex-reset-monitor/issues/44",
    body,
    created_at: "2026-08-01T10:06:00Z",
    updated_at: "2026-08-01T10:06:00Z",
  }, [{ event: "labeled", created_at: "2026-08-01T10:06:00Z", label: { name: "verified-observation" } }], "2026-08-01T10:07:00Z");
  assert.equal(normalized.observationKind, "meter-reset");
  assert.equal(normalized.limitReachedAtUtc, undefined);
  assert.equal(normalized.detectionMethod, "local-observer");
  assert.equal(normalized.previousUsedPercent, 37);
});

test("GitHub collection deduplicates verified reports and ingests only approved source metadata", async () => {
  const issues = [
    {
      number: 42,
      html_url: "https://github.com/KyleStay/codex-reset-monitor/issues/42",
      body: observationBody,
      created_at: "2026-07-27T12:05:00Z",
      updated_at: "2026-07-27T13:00:00Z",
    },
    {
      number: 43,
      html_url: "https://github.com/KyleStay/codex-reset-monitor/issues/43",
      body: observationBody,
      created_at: "2026-07-27T12:06:00Z",
      updated_at: "2026-07-27T13:01:00Z",
    },
  ];
  const sourceBody = `### Canonical URL

https://openai.com/news/

### Publication time

2026-07-27T10:00:00Z

### Title

Official announcement

### Minimal excerpt

Minimal public metadata`;
  const mockFetch = (async (input: string | URL | Request) => {
    const url = String(input);
    if (url.includes("labels=verified-observation")) return new Response(JSON.stringify(issues));
    if (url.includes("labels=approved-public-source")) return new Response(JSON.stringify([{
      number: 50,
      html_url: "https://github.com/KyleStay/codex-reset-monitor/issues/50",
      body: sourceBody,
      created_at: "2026-07-27T10:01:00Z",
      updated_at: "2026-07-27T10:02:00Z",
    }]));
    if (url.includes("/events")) return new Response(JSON.stringify([{
      event: "labeled",
      created_at: "2026-07-27T13:00:00Z",
      label: { name: "verified-observation" },
    }]));
    return new Response("not found", { status: 404 });
  }) as typeof fetch;
  const result = await collectGitHubIssueData({
    repository: "KyleStay/codex-reset-monitor",
    token: "test-token",
    previousObservations: [],
    fetcher: mockFetch,
    now: new Date("2026-07-28T04:17:00Z"),
  });
  assert.equal(result.observations.length, 1);
  assert.equal(result.duplicateCount, 1);
  assert.equal(result.publicSources.length, 1);
  assert.equal(result.publicSources[0].provenance, "administrator_approved");
});
