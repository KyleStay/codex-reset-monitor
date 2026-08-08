import type { ObservationInput } from "./domain";

const SAMPLE_RETENTION_MS = 90 * 24 * 60 * 60_000;
const MAX_SAMPLE_COUNT = 90 * 24 * 12;

export interface SafeRateLimitSample {
  sampledAtUtc: string;
  usedPercent: number;
  resetsAtUtc: string | null;
  windowDurationMinutes: number | null;
  exhausted: boolean;
  planTier: ObservationInput["planTier"];
}

export interface SafeRateLimitBucket {
  limitId: string;
  limitName: string | null;
  primary: Omit<SafeRateLimitSample, "sampledAtUtc" | "planTier"> | null;
  secondary: Omit<SafeRateLimitSample, "sampledAtUtc" | "planTier"> | null;
}

export interface SafeResetCreditSnapshot {
  sampledAtUtc: string;
  availableCount: number;
  credits: Array<{
    resetType: string;
    status: string;
    grantedAtUtc: string | null;
    expiresAtUtc: string | null;
    title: string | null;
  }>;
}

export interface LocalResetCandidate extends ObservationInput {
  previousUsedPercent: number;
  currentUsedPercent: number;
}

export interface SafeDetectedReset {
  key: string;
  observationKind: LocalResetCandidate["observationKind"];
  limitReachedAtUtc?: string;
  priorSampleAtUtc?: string;
  observedResetAtUtc: string;
  previousUsedPercent: number;
  currentUsedPercent: number;
  previousResetsAtUtc?: string;
  currentResetsAtUtc?: string;
}

export interface LocalObserverState {
  schemaVersion: 3;
  lastSample: SafeRateLimitSample | null;
  recentSamples: SafeRateLimitSample[];
  latestRateLimitBuckets: SafeRateLimitBucket[];
  latestResetCredits: SafeResetCreditSnapshot | null;
  detectedResets: SafeDetectedReset[];
  openExhaustion: {
    firstObservedAtUtc: string;
    usedPercent: number;
    resetsAtUtc: string | null;
  } | null;
  pendingCandidate: (LocalResetCandidate & { key: string }) | null;
  publishedKeys: string[];
}

interface LegacyLocalObserverState {
  schemaVersion: 1;
  lastSample?: SafeRateLimitSample | null;
  openExhaustion?: LocalObserverState["openExhaustion"];
  pendingCandidate?: LocalObserverState["pendingCandidate"];
  publishedKeys?: string[];
}

interface VersionTwoLocalObserverState {
  schemaVersion: 2;
  lastSample?: SafeRateLimitSample | null;
  recentSamples?: SafeRateLimitSample[];
  latestRateLimitBuckets?: SafeRateLimitBucket[];
  latestUsage?: unknown;
  detectedResets?: SafeDetectedReset[];
  openExhaustion?: LocalObserverState["openExhaustion"];
  pendingCandidate?: LocalObserverState["pendingCandidate"];
  publishedKeys?: string[];
}

export const emptyLocalObserverState = (): LocalObserverState => ({
  schemaVersion: 3,
  lastSample: null,
  recentSamples: [],
  latestRateLimitBuckets: [],
  latestResetCredits: null,
  detectedResets: [],
  openExhaustion: null,
  pendingCandidate: null,
  publishedKeys: [],
});

export function normalizeLocalObserverState(value: unknown): LocalObserverState {
  if (!value || typeof value !== "object") throw new Error("Invalid local observer state");
  const parsed = value as Partial<LocalObserverState> | LegacyLocalObserverState | VersionTwoLocalObserverState;
  if (parsed.schemaVersion !== 1 && parsed.schemaVersion !== 2 && parsed.schemaVersion !== 3) {
    throw new Error("Unsupported local observer state version");
  }
  const base = emptyLocalObserverState();
  if (parsed.schemaVersion === 1) {
    return {
      ...base,
      lastSample: parsed.lastSample ?? null,
      recentSamples: parsed.lastSample ? [parsed.lastSample] : [],
      openExhaustion: parsed.openExhaustion ?? null,
      pendingCandidate: parsed.pendingCandidate ?? null,
      publishedKeys: parsed.publishedKeys ?? [],
    };
  }
  return {
    ...base,
    schemaVersion: 3,
    lastSample: parsed.lastSample ?? null,
    recentSamples: Array.isArray(parsed.recentSamples) ? parsed.recentSamples : [],
    latestRateLimitBuckets: Array.isArray(parsed.latestRateLimitBuckets) ? parsed.latestRateLimitBuckets : [],
    latestResetCredits: parsed.schemaVersion === 3 ? parsed.latestResetCredits ?? null : null,
    detectedResets: Array.isArray(parsed.detectedResets) ? parsed.detectedResets : [],
    openExhaustion: parsed.openExhaustion ?? null,
    pendingCandidate: parsed.pendingCandidate ?? null,
    publishedKeys: Array.isArray(parsed.publishedKeys) ? parsed.publishedKeys : [],
  };
}

export function advanceLocalObserver(
  current: LocalObserverState,
  sample: SafeRateLimitSample,
  timeZone: string,
): { state: LocalObserverState; candidate: LocalResetCandidate | null } {
  const retentionCutoff = Date.parse(sample.sampledAtUtc) - SAMPLE_RETENTION_MS;
  const recentSamples = [...current.recentSamples, sample]
    .filter((entry) => Date.parse(entry.sampledAtUtc) >= retentionCutoff)
    .slice(-MAX_SAMPLE_COUNT);
  const state: LocalObserverState = {
    ...current,
    lastSample: sample,
    recentSamples,
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
  const looksLikeFullReset = sample.usedPercent <= 5 && previous
    ? previous.usedPercent - sample.usedPercent >= 5
    : false;
  if (previous && !previous.exhausted && resetTimestampAdvanced && looksLikeFullReset) {
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

export function recordLocalTelemetry(
  current: LocalObserverState,
  rateLimitBuckets: SafeRateLimitBucket[],
  resetCredits: SafeResetCreditSnapshot | null,
): LocalObserverState {
  return {
    ...current,
    latestRateLimitBuckets: rateLimitBuckets,
    latestResetCredits: resetCredits,
  };
}

export function rememberLocalCandidate(
  current: LocalObserverState,
  candidate: LocalResetCandidate,
  key: string,
): LocalObserverState {
  const detected: SafeDetectedReset = {
    key,
    observationKind: candidate.observationKind,
    limitReachedAtUtc: candidate.limitReachedAtUtc,
    priorSampleAtUtc: candidate.priorSampleAtUtc,
    observedResetAtUtc: candidate.observedResetAtUtc,
    previousUsedPercent: candidate.previousUsedPercent,
    currentUsedPercent: candidate.currentUsedPercent,
    previousResetsAtUtc: candidate.previousResetsAtUtc,
    currentResetsAtUtc: candidate.currentResetsAtUtc,
  };
  return {
    ...current,
    detectedResets: current.detectedResets.some((entry) => entry.key === key)
      ? current.detectedResets
      : [...current.detectedResets, detected].slice(-500),
  };
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
