import assert from "node:assert/strict";
import test from "node:test";
import {
  advanceLocalObserver,
  emptyLocalObserverState,
  markLocalCandidatePublished,
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

test("local observer emits a meter reset when usage drops and reset time advances", () => {
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
