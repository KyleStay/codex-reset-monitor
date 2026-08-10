export type ResetTiming = "scheduled" | "out-of-cycle" | "unknown";

interface ResetAnchorEvidence {
  observedResetAtUtc: string;
  previousResetsAtUtc?: string;
  currentResetsAtUtc?: string;
  windowDurationMinutes?: number | null;
}

export interface ResetTimingClassification {
  timing: ResetTiming;
  scheduledLeadMinutes: number | null;
  toleranceMinutes: number | null;
}

const MIN_TIMING_TOLERANCE_MS = 60 * 60_000;
const WINDOW_TOLERANCE_FRACTION = 0.1;

export function classifyResetTiming({
  observedResetAtUtc,
  previousResetsAtUtc,
  currentResetsAtUtc,
  windowDurationMinutes,
}: ResetAnchorEvidence): ResetTimingClassification {
  if (!previousResetsAtUtc || !currentResetsAtUtc) {
    return { timing: "unknown", scheduledLeadMinutes: null, toleranceMinutes: null };
  }
  const observed = Date.parse(observedResetAtUtc);
  const previousAnchor = Date.parse(previousResetsAtUtc);
  const currentAnchor = Date.parse(currentResetsAtUtc);
  const observedWindowMs = currentAnchor - observed;
  const reportedWindowMs = Number.isFinite(windowDurationMinutes) && Number(windowDurationMinutes) > 0
    ? Number(windowDurationMinutes) * 60_000
    : observedWindowMs;
  if (![observed, previousAnchor, currentAnchor, observedWindowMs, reportedWindowMs].every(Number.isFinite) || reportedWindowMs <= 0) {
    return { timing: "unknown", scheduledLeadMinutes: null, toleranceMinutes: null };
  }
  const toleranceMs = Math.max(MIN_TIMING_TOLERANCE_MS, reportedWindowMs * WINDOW_TOLERANCE_FRACTION);
  if (Math.abs(observedWindowMs - reportedWindowMs) > toleranceMs) {
    return {
      timing: "unknown",
      scheduledLeadMinutes: Math.round((previousAnchor - observed) / 60_000),
      toleranceMinutes: Math.round(toleranceMs / 60_000),
    };
  }
  const leadMs = previousAnchor - observed;
  const timing: ResetTiming = leadMs > toleranceMs
    ? "out-of-cycle"
    : Math.abs(leadMs) <= toleranceMs
      ? "scheduled"
      : "unknown";
  return {
    timing,
    scheduledLeadMinutes: Math.round(leadMs / 60_000),
    toleranceMinutes: Math.round(toleranceMs / 60_000),
  };
}

export function latestProviderAnchor(observations: ResetAnchorEvidence[], cutoffUtc: string) {
  const cutoff = Date.parse(cutoffUtc);
  const latest = observations
    .filter((row) => row.currentResetsAtUtc && Date.parse(row.observedResetAtUtc) <= cutoff)
    .sort((a, b) => Date.parse(b.observedResetAtUtc) - Date.parse(a.observedResetAtUtc))[0];
  return latest?.currentResetsAtUtc && Date.parse(latest.currentResetsAtUtc) > cutoff
    ? latest.currentResetsAtUtc
    : null;
}
