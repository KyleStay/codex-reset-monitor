import type { ObservationInput } from "./domain";
import { classifyResetTiming, type ResetTiming } from "./reset-schedule";

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
  resetTiming: ResetTiming;
  scheduledLeadMinutes: number | null;
  previousResetCredits: SafeResetCreditSnapshot | null;
  currentResetCredits: SafeResetCreditSnapshot | null;
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
  resetTiming: ResetTiming;
  scheduledLeadMinutes: number | null;
  previousResetCredits: SafeResetCreditSnapshot | null;
  currentResetCredits: SafeResetCreditSnapshot | null;
}

export interface LocalObserverState {
  schemaVersion: 4;
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
  schemaVersion: 2 | 3;
  lastSample?: SafeRateLimitSample | null;
  recentSamples?: SafeRateLimitSample[];
  latestRateLimitBuckets?: SafeRateLimitBucket[];
  latestResetCredits?: SafeResetCreditSnapshot | null;
  latestUsage?: unknown;
  detectedResets?: SafeDetectedReset[];
  openExhaustion?: LocalObserverState["openExhaustion"];
  pendingCandidate?: LocalObserverState["pendingCandidate"];
  publishedKeys?: string[];
}

export const emptyLocalObserverState = (): LocalObserverState => ({
  schemaVersion: 4,
  lastSample: null,
  recentSamples: [],
  latestRateLimitBuckets: [],
  latestResetCredits: null,
  detectedResets: [],
  openExhaustion: null,
  pendingCandidate: null,
  publishedKeys: [],
});

function normalizePendingCandidate(candidate: LocalObserverState["pendingCandidate"]) {
  if (!candidate) return null;
  const classification = classifyResetTiming(candidate);
  return {
    ...candidate,
    resetTiming: candidate.resetTiming ?? classification.timing,
    scheduledLeadMinutes: candidate.scheduledLeadMinutes ?? classification.scheduledLeadMinutes,
    previousResetCredits: candidate.previousResetCredits ?? null,
    currentResetCredits: candidate.currentResetCredits ?? null,
  };
}

export function normalizeLocalObserverState(value: unknown): LocalObserverState {
  if (!value || typeof value !== "object") throw new Error("Invalid local observer state");
  const parsed = value as Partial<LocalObserverState> | LegacyLocalObserverState | VersionTwoLocalObserverState;
  if (parsed.schemaVersion !== 1 && parsed.schemaVersion !== 2 && parsed.schemaVersion !== 3 && parsed.schemaVersion !== 4) {
    throw new Error("Unsupported local observer state version");
  }
  const base = emptyLocalObserverState();
  if (parsed.schemaVersion === 1) {
    return {
      ...base,
      lastSample: parsed.lastSample ?? null,
      recentSamples: parsed.lastSample ? [parsed.lastSample] : [],
      openExhaustion: parsed.openExhaustion ?? null,
      pendingCandidate: normalizePendingCandidate(parsed.pendingCandidate ?? null),
      publishedKeys: parsed.publishedKeys ?? [],
    };
  }
  return {
    ...base,
    schemaVersion: 4,
    lastSample: parsed.lastSample ?? null,
    recentSamples: Array.isArray(parsed.recentSamples) ? parsed.recentSamples : [],
    latestRateLimitBuckets: Array.isArray(parsed.latestRateLimitBuckets) ? parsed.latestRateLimitBuckets : [],
    latestResetCredits: parsed.schemaVersion === 3 || parsed.schemaVersion === 4 ? parsed.latestResetCredits ?? null : null,
    detectedResets: Array.isArray(parsed.detectedResets)
      ? parsed.detectedResets.map((entry) => {
          const classification = classifyResetTiming(entry);
          return {
            ...entry,
            resetTiming: entry.resetTiming ?? classification.timing,
            scheduledLeadMinutes: entry.scheduledLeadMinutes ?? classification.scheduledLeadMinutes,
            previousResetCredits: entry.previousResetCredits ?? null,
            currentResetCredits: entry.currentResetCredits ?? null,
          };
        })
      : [],
    openExhaustion: parsed.openExhaustion ?? null,
    pendingCandidate: normalizePendingCandidate(parsed.pendingCandidate ?? null),
    publishedKeys: Array.isArray(parsed.publishedKeys) ? parsed.publishedKeys : [],
  };
}

export function advanceLocalObserver(
  current: LocalObserverState,
  sample: SafeRateLimitSample,
  timeZone: string,
  currentResetCredits: SafeResetCreditSnapshot | null = null,
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
    const classification = classifyResetTiming({
      observedResetAtUtc: sample.sampledAtUtc,
      previousResetsAtUtc: exhausted.resetsAtUtc ?? undefined,
      currentResetsAtUtc: sample.resetsAtUtc ?? undefined,
      windowDurationMinutes: sample.windowDurationMinutes,
    });
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
      resetTiming: classification.timing,
      scheduledLeadMinutes: classification.scheduledLeadMinutes,
      previousResetCredits: current.latestResetCredits,
      currentResetCredits,
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
  const stableWindowDuration = previous?.windowDurationMinutes !== null
    && previous?.windowDurationMinutes !== undefined
    && sample.windowDurationMinutes !== null
    && Math.abs(previous.windowDurationMinutes - sample.windowDurationMinutes) <= 1;
  if (previous && !previous.exhausted && resetTimestampAdvanced && looksLikeFullReset && stableWindowDuration) {
    const classification = classifyResetTiming({
      observedResetAtUtc: sample.sampledAtUtc,
      previousResetsAtUtc: previous.resetsAtUtc ?? undefined,
      currentResetsAtUtc: sample.resetsAtUtc ?? undefined,
      windowDurationMinutes: sample.windowDurationMinutes,
    });
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
      resetTiming: classification.timing,
      scheduledLeadMinutes: classification.scheduledLeadMinutes,
      previousResetCredits: current.latestResetCredits,
      currentResetCredits,
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
    resetTiming: candidate.resetTiming,
    scheduledLeadMinutes: candidate.scheduledLeadMinutes,
    previousResetCredits: candidate.previousResetCredits,
    currentResetCredits: candidate.currentResetCredits,
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
