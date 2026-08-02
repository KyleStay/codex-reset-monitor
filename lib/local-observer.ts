import type { ObservationInput } from "./domain";

export interface SafeRateLimitSample {
  sampledAtUtc: string;
  usedPercent: number;
  resetsAtUtc: string | null;
  windowDurationMinutes: number | null;
  exhausted: boolean;
  planTier: ObservationInput["planTier"];
}

export interface LocalResetCandidate extends ObservationInput {
  previousUsedPercent: number;
  currentUsedPercent: number;
}

export interface LocalObserverState {
  schemaVersion: 1;
  lastSample: SafeRateLimitSample | null;
  openExhaustion: {
    firstObservedAtUtc: string;
    usedPercent: number;
    resetsAtUtc: string | null;
  } | null;
  pendingCandidate: (LocalResetCandidate & { key: string }) | null;
  publishedKeys: string[];
}

export const emptyLocalObserverState = (): LocalObserverState => ({
  schemaVersion: 1,
  lastSample: null,
  openExhaustion: null,
  pendingCandidate: null,
  publishedKeys: [],
});

export function advanceLocalObserver(
  current: LocalObserverState,
  sample: SafeRateLimitSample,
  timeZone: string,
): { state: LocalObserverState; candidate: LocalResetCandidate | null } {
  const state: LocalObserverState = {
    ...current,
    lastSample: sample,
    publishedKeys: [...current.publishedKeys],
  };
  const previous = current.lastSample;

  if (sample.exhausted) {
    state.openExhaustion ??= {
      firstObservedAtUtc: sample.sampledAtUtc,
      usedPercent: sample.usedPercent,
      resetsAtUtc: sample.resetsAtUtc,
    };
    return { state, candidate: null };
  }

  if (state.openExhaustion) {
    const exhausted = state.openExhaustion;
    state.openExhaustion = null;
    const candidate: LocalResetCandidate = {
      observationKind: "access-restored",
      limitReachedAtUtc: exhausted.firstObservedAtUtc,
      observedResetAtUtc: sample.sampledAtUtc,
      statedTimeZone: timeZone,
      codexSurface: "other",
      planTier: sample.planTier,
      relatedIncidentIds: [],
      relatedSourceIds: [],
      submitterNotes: "Automatically observed through the read-only Codex rate-limit API. No prompts, responses, account identifiers, screenshots, session files, or logs were accessed.",
      detectionMethod: "local-observer",
      confidence: 1,
      previousUsedPercent: exhausted.usedPercent,
      currentUsedPercent: sample.usedPercent,
      previousResetsAtUtc: exhausted.resetsAtUtc ?? undefined,
      currentResetsAtUtc: sample.resetsAtUtc ?? undefined,
    };
    return { state, candidate };
  }

  const resetTimestampAdvanced = previous?.resetsAtUtc && sample.resetsAtUtc
    ? Date.parse(sample.resetsAtUtc) - Date.parse(previous.resetsAtUtc) >= 60_000
    : false;
  if (previous && !previous.exhausted && resetTimestampAdvanced && sample.usedPercent < previous.usedPercent) {
    const candidate: LocalResetCandidate = {
      observationKind: "meter-reset",
      priorSampleAtUtc: previous.sampledAtUtc,
      observedResetAtUtc: sample.sampledAtUtc,
      previousUsedPercent: previous.usedPercent,
      currentUsedPercent: sample.usedPercent,
      previousResetsAtUtc: previous.resetsAtUtc ?? undefined,
      currentResetsAtUtc: sample.resetsAtUtc ?? undefined,
      statedTimeZone: timeZone,
      codexSurface: "other",
      planTier: sample.planTier,
      relatedIncidentIds: [],
      relatedSourceIds: [],
      submitterNotes: "Automatically observed a lower used percentage and an advanced reset timestamp through the read-only Codex rate-limit API. No prompts, responses, account identifiers, screenshots, session files, or logs were accessed.",
      detectionMethod: "local-observer",
      confidence: 1,
    };
    return { state, candidate };
  }
  return { state, candidate: null };
}

export function markLocalCandidatePublished(
  current: LocalObserverState,
  key: string,
): LocalObserverState {
  return {
    ...current,
    pendingCandidate: current.pendingCandidate?.key === key ? null : current.pendingCandidate,
    publishedKeys: [...new Set([...current.publishedKeys, key])].slice(-200),
  };
}
