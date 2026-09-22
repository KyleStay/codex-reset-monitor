import assert from "node:assert/strict";
import test from "node:test";
import {
  advanceLocalObserver,
  emptyLocalObserverState,
  markLocalCandidatePublished,
  normalizeLocalObserverState,
  recordLocalTelemetry,
  rememberLocalCandidate,
  type SafeRateLimitSample,
} from "../lib/local-observer";

const sample = (overrides: Partial<SafeRateLimitSample> = {}): SafeRateLimitSample => ({
  sampledAtUtc: "2026-08-01T10:00:00.000Z",
  usedPercent: 42,
  resetsAtUtc: "2026-08-08T10:00:00.000Z",
  windowDurationMinutes: 10080,
  exhausted: false,
  planTier: "individual-paid",
  ...overrides,
});

test("local observer records exhaustion without publishing an event", () => {
  const result = advanceLocalObserver(
    emptyLocalObserverState(),
    sample({ usedPercent: 100, exhausted: true }),
    "America/New_York",
  );
  assert.equal(result.candidate, null);
  assert.equal(result.state.openExhaustion?.firstObservedAtUtc, "2026-08-01T10:00:00.000Z");
});

test("local observer emits a minimized candidate on exhausted-to-available transition", () => {
  const exhausted = advanceLocalObserver(
    emptyLocalObserverState(),
    sample({ usedPercent: 100, exhausted: true, resetsAtUtc: "2026-08-01T11:00:00.000Z" }),
    "America/New_York",
  ).state;
  const recovered = advanceLocalObserver(
    exhausted,
    sample({ sampledAtUtc: "2026-08-01T10:05:00.000Z", usedPercent: 0, resetsAtUtc: "2026-08-08T10:05:00.000Z" }),
    "America/New_York",
  );
  assert.equal(recovered.candidate?.limitReachedAtUtc, "2026-08-01T10:00:00.000Z");
  assert.equal(recovered.candidate?.observedResetAtUtc, "2026-08-01T10:05:00.000Z");
  assert.equal(recovered.candidate?.observationKind, "access-restored");
  assert.equal(recovered.candidate?.detectionMethod, "local-observer");
  assert.equal(recovered.candidate?.previousResetsAtUtc, "2026-08-01T11:00:00.000Z");
  assert.equal(recovered.candidate?.currentResetsAtUtc, "2026-08-08T10:05:00.000Z");
  assert.equal(recovered.candidate?.resetTiming, "scheduled");
  assert.match(recovered.candidate?.submitterNotes ?? "", /No prompts, responses, account identifiers/);
  assert.equal(recovered.state.openExhaustion, null);
});

test("local observer does not misclassify ordinary usage changes as resets", () => {
  const first = advanceLocalObserver(emptyLocalObserverState(), sample({ usedPercent: 40 }), "UTC").state;
  const second = advanceLocalObserver(first, sample({ sampledAtUtc: "2026-08-01T10:05:00.000Z", usedPercent: 20 }), "UTC");
  assert.equal(second.candidate, null);
});

test("local observer ignores sub-minute reset timestamp jitter", () => {
  const first = advanceLocalObserver(
    emptyLocalObserverState(),
    sample({ usedPercent: 3, resetsAtUtc: "2026-08-08T10:00:00.000Z" }),
    "UTC",
  ).state;
  const jittered = advanceLocalObserver(
    first,
    sample({ sampledAtUtc: "2026-08-01T10:05:00.000Z", usedPercent: 2, resetsAtUtc: "2026-08-08T10:00:01.000Z" }),
    "UTC",
  );
  assert.equal(jittered.candidate, null);
});

test("local observer ignores a sliding reset timestamp without a usage transition", () => {
  const first = advanceLocalObserver(
    emptyLocalObserverState(),
    sample({ usedPercent: 0, resetsAtUtc: "2026-08-08T10:00:00.000Z" }),
    "UTC",
  ).state;
  const sliding = advanceLocalObserver(
    first,
    sample({ sampledAtUtc: "2026-08-01T10:05:00.000Z", usedPercent: 0, resetsAtUtc: "2026-08-08T10:05:00.000Z" }),
    "UTC",
  );
  assert.equal(sliding.candidate, null);
});

test("local observer emits a full meter reset when usage reaches near zero and reset time advances", () => {
  const first = advanceLocalObserver(
    emptyLocalObserverState(),
    sample({ usedPercent: 37, resetsAtUtc: "2026-08-03T10:00:00.000Z" }),
    "America/New_York",
  ).state;
  const reset = advanceLocalObserver(
    first,
    sample({ sampledAtUtc: "2026-08-01T10:05:00.000Z", usedPercent: 0, resetsAtUtc: "2026-08-08T10:05:00.000Z" }),
    "America/New_York",
  );
  assert.equal(reset.candidate?.observationKind, "meter-reset");
  assert.equal(reset.candidate?.priorSampleAtUtc, "2026-08-01T10:00:00.000Z");
  assert.equal(reset.candidate?.previousUsedPercent, 37);
  assert.equal(reset.candidate?.currentUsedPercent, 0);
});

test("published local candidates are cleared and deduplicated", () => {
  const state = emptyLocalObserverState();
  state.pendingCandidate = {
    ...advanceLocalObserver(
      advanceLocalObserver(state, sample({ usedPercent: 100, exhausted: true }), "UTC").state,
      sample({ sampledAtUtc: "2026-08-01T10:05:00.000Z", usedPercent: 0 }),
      "UTC",
    ).candidate!,
    key: "abc",
  };
  const published = markLocalCandidatePublished(state, "abc");
  assert.equal(published.pendingCandidate, null);
  assert.deepEqual(published.publishedKeys, ["abc"]);
});

test("older observer state migrates without losing safe reset samples", () => {
  const migrated = normalizeLocalObserverState({
    schemaVersion: 1,
    lastSample: sample(),
    openExhaustion: null,
    pendingCandidate: null,
    publishedKeys: ["old"],
  });
  assert.equal(migrated.schemaVersion, 4);
  assert.equal(migrated.recentSamples.length, 1);
  assert.equal(migrated.lastSample?.usedPercent, 42);
  assert.deepEqual(migrated.publishedKeys, ["old"]);
});

test("observer state migration strips non-allowlisted reset-credit fields", () => {
  const migrated = normalizeLocalObserverState({
    ...emptyLocalObserverState(),
    latestResetCredits: {
      sampledAtUtc: "2026-08-01T10:00:00.000Z",
      availableCount: 1,
      credits: [{
        resetType: "codexRateLimits",
        status: "available",
        grantedAtUtc: "2026-08-01T09:00:00.000Z",
        expiresAtUtc: "2026-08-08T09:00:00.000Z",
        title: "Account-specific free text",
      }],
    },
  });

  assert.deepEqual(migrated.latestResetCredits, {
    sampledAtUtc: "2026-08-01T10:00:00.000Z",
    availableCount: 1,
    credits: [{
      status: "available",
      grantedAtUtc: "2026-08-01T09:00:00.000Z",
      expiresAtUtc: "2026-08-08T09:00:00.000Z",
    }],
  });
  assert.doesNotMatch(JSON.stringify(migrated), /resetType|Account-specific free text/);
});

test("observer retains privacy-safe telemetry and a deduplicated reset ledger", () => {
  const initial = recordLocalTelemetry(emptyLocalObserverState(), [{
    limitId: "codex",
    limitName: null,
    primary: {
      usedPercent: 42,
      resetsAtUtc: "2026-08-08T10:00:00.000Z",
      windowDurationMinutes: 10080,
      exhausted: false,
    },
    secondary: null,
  }], {
    sampledAtUtc: "2026-08-01T10:00:00.000Z",
    availableCount: 2,
    credits: [{
      status: "available",
      grantedAtUtc: "2026-08-01T09:00:00.000Z",
      expiresAtUtc: "2026-08-08T09:00:00.000Z",
    }],
  });
  assert.equal(initial.latestRateLimitBuckets[0].limitId, "codex");
  assert.equal(initial.latestResetCredits?.availableCount, 2);

  const candidate = advanceLocalObserver(
    advanceLocalObserver(initial, sample({ usedPercent: 100, exhausted: true }), "UTC").state,
    sample({ sampledAtUtc: "2026-08-01T10:05:00.000Z", usedPercent: 0 }),
    "UTC",
  ).candidate!;
  const remembered = rememberLocalCandidate(initial, candidate, "reset-key");
  const duplicate = rememberLocalCandidate(remembered, candidate, "reset-key");
  assert.equal(duplicate.detectedResets.length, 1);
  assert.equal(duplicate.detectedResets[0].key, "reset-key");
});

test("observer does not classify a partial quota adjustment as a full reset", () => {
  const first = advanceLocalObserver(
    emptyLocalObserverState(),
    sample({ usedPercent: 57, resetsAtUtc: "2026-08-08T10:00:00.000Z" }),
    "UTC",
  ).state;
  const adjusted = advanceLocalObserver(
    first,
    sample({
      sampledAtUtc: "2026-08-01T10:05:00.000Z",
      usedPercent: 42,
      resetsAtUtc: "2026-08-15T10:00:00.000Z",
    }),
    "UTC",
  );
  assert.equal(adjusted.candidate, null);
});

test("observer does not classify a window-duration migration as a full reset", () => {
  const first = advanceLocalObserver(
    emptyLocalObserverState(),
    sample({ usedPercent: 10, windowDurationMinutes: 10080 }),
    "UTC",
  ).state;
  const migrated = advanceLocalObserver(first, sample({
    sampledAtUtc: "2026-08-01T10:05:00.000Z",
    usedPercent: 0,
    resetsAtUtc: "2026-08-09T10:05:00.000Z",
    windowDurationMinutes: 11520,
  }), "UTC");
  assert.equal(migrated.candidate, null);
});

test("observer retains bounded credit evidence and out-of-cycle timing", () => {
  const beforeCredits = {
    sampledAtUtc: "2026-08-08T20:27:39.534Z",
    availableCount: 1,
    credits: [],
  };
  let state = recordLocalTelemetry(emptyLocalObserverState(), [], beforeCredits);
  state = advanceLocalObserver(state, sample({
    sampledAtUtc: "2026-08-08T20:27:39.534Z",
    usedPercent: 10,
    resetsAtUtc: "2026-08-15T09:19:41.000Z",
  }), "UTC").state;
  const afterCredits = {
    sampledAtUtc: "2026-08-08T20:32:48.433Z",
    availableCount: 1,
    credits: [],
  };
  const result = advanceLocalObserver(state, sample({
    sampledAtUtc: "2026-08-08T20:32:48.433Z",
    usedPercent: 0,
    resetsAtUtc: "2026-08-15T20:29:18.000Z",
  }), "UTC", afterCredits);
  assert.equal(result.candidate?.resetTiming, "out-of-cycle");
  assert.equal(result.candidate?.previousResetCredits?.availableCount, 1);
  assert.equal(result.candidate?.currentResetCredits?.availableCount, 1);
});

test("observer does not publish a reset-credit recovery as a full reset", () => {
  const beforeCredits = {
    sampledAtUtc: "2026-08-01T10:00:00.000Z",
    availableCount: 1,
    credits: [],
  };
  let state = recordLocalTelemetry(emptyLocalObserverState(), [], beforeCredits);
  state = advanceLocalObserver(state, sample({
    usedPercent: 100,
    exhausted: true,
    resetsAtUtc: "2026-08-08T10:00:00.000Z",
  }), "UTC").state;
  const recoveredByCredit = advanceLocalObserver(state, sample({
    sampledAtUtc: "2026-08-01T10:05:00.000Z",
    usedPercent: 72,
    exhausted: false,
    resetsAtUtc: "2026-08-08T10:00:00.000Z",
  }), "UTC", {
    sampledAtUtc: "2026-08-01T10:05:00.000Z",
    availableCount: 0,
    credits: [],
  });

  assert.equal(recoveredByCredit.candidate, null);
  assert.equal(recoveredByCredit.state.openExhaustion, null);
});

test("observer suppresses reset-credit recovery when the reset anchor advances", () => {
  const beforeCredits = {
    sampledAtUtc: "2026-08-01T10:00:00.000Z",
    availableCount: 1,
    credits: [],
  };
  let state = recordLocalTelemetry(emptyLocalObserverState(), [], beforeCredits);
  state = advanceLocalObserver(state, sample({
    usedPercent: 100,
    exhausted: true,
    resetsAtUtc: "2026-08-08T10:00:00.000Z",
  }), "UTC").state;

  const recoveredByCredit = advanceLocalObserver(state, sample({
    sampledAtUtc: "2026-08-01T10:05:00.000Z",
    usedPercent: 72,
    exhausted: false,
    resetsAtUtc: "2026-08-15T10:00:00.000Z",
  }), "UTC", {
    sampledAtUtc: "2026-08-01T10:05:00.000Z",
    availableCount: 0,
    credits: [],
  });

  assert.equal(recoveredByCredit.candidate, null);
  assert.equal(recoveredByCredit.state.openExhaustion, null);
});

test("observer suppresses reset-credit recovery when the reset anchor disappears", () => {
  const beforeCredits = {
    sampledAtUtc: "2026-08-01T10:00:00.000Z",
    availableCount: 1,
    credits: [],
  };
  let state = recordLocalTelemetry(emptyLocalObserverState(), [], beforeCredits);
  state = advanceLocalObserver(state, sample({
    usedPercent: 100,
    exhausted: true,
    resetsAtUtc: "2026-08-08T10:00:00.000Z",
  }), "UTC").state;

  const recoveredByCredit = advanceLocalObserver(state, sample({
    sampledAtUtc: "2026-08-01T10:05:00.000Z",
    usedPercent: 72,
    exhausted: false,
    resetsAtUtc: null,
  }), "UTC", {
    sampledAtUtc: "2026-08-01T10:05:00.000Z",
    availableCount: 0,
    credits: [],
  });

  assert.equal(recoveredByCredit.candidate, null);
  assert.equal(recoveredByCredit.state.openExhaustion, null);
});

test("observer suppresses high-usage recovery with an unchanged anchor without credit metadata", () => {
  const exhausted = advanceLocalObserver(emptyLocalObserverState(), sample({
    usedPercent: 100,
    exhausted: true,
    resetsAtUtc: "2026-08-08T10:00:00.000Z",
  }), "UTC").state;
  const recovered = advanceLocalObserver(exhausted, sample({
    sampledAtUtc: "2026-08-01T10:05:00.000Z",
    usedPercent: 72,
    exhausted: false,
    resetsAtUtc: "2026-08-08T10:00:30.000Z",
  }), "UTC");
  assert.equal(recovered.candidate, null);
});

test("observer retains positive recovery evidence at low usage or with an advanced anchor", () => {
  const exhausted = advanceLocalObserver(emptyLocalObserverState(), sample({
    usedPercent: 100,
    exhausted: true,
    resetsAtUtc: "2026-08-08T10:00:00.000Z",
  }), "UTC").state;
  const nearZero = advanceLocalObserver(exhausted, sample({
    sampledAtUtc: "2026-08-01T10:05:00.000Z",
    usedPercent: 2,
    exhausted: false,
    resetsAtUtc: "2026-08-08T10:00:30.000Z",
  }), "UTC");
  const advancedAnchor = advanceLocalObserver(exhausted, sample({
    sampledAtUtc: "2026-08-01T10:05:00.000Z",
    usedPercent: 72,
    exhausted: false,
    resetsAtUtc: "2026-08-15T10:00:00.000Z",
  }), "UTC");
  assert.equal(nearZero.candidate?.observationKind, "access-restored");
  assert.equal(advancedAnchor.candidate?.observationKind, "access-restored");
});

test("observer suppresses credit redemption before exhaustion", () => {
  const beforeCredits = {
    sampledAtUtc: "2026-08-01T10:00:00.000Z",
    availableCount: 1,
    credits: [],
  };
  const state = advanceLocalObserver(
    recordLocalTelemetry(emptyLocalObserverState(), [], beforeCredits),
    sample({ usedPercent: 90, resetsAtUtc: "2026-08-03T10:00:00.000Z" }),
    "UTC",
  ).state;
  const result = advanceLocalObserver(state, sample({
    sampledAtUtc: "2026-08-01T10:05:00.000Z",
    usedPercent: 0,
    resetsAtUtc: "2026-08-08T10:05:00.000Z",
  }), "UTC", {
    sampledAtUtc: "2026-08-01T10:05:00.000Z",
    availableCount: 0,
    credits: [],
  });
  assert.equal(result.candidate, null);
  assert.equal(result.state.openExhaustion, null);
  assert.equal(result.state.lastSample?.usedPercent, 0);
});
