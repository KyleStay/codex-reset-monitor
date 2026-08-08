import { HORIZONS, type FeatureSnapshot, type Forecast, type Horizon } from "./domain";

const clamp = (value: number, min = 0.01, max = 0.98) => Math.min(max, Math.max(min, value));
const sigmoid = (value: number) => 1 / (1 + Math.exp(-value));
const featureTag = (features: FeatureSnapshot) => {
  const value = [
    features.confirmedEventCount,
    features.medianCycleHours,
    features.cycleDispersionHours,
    features.activeIncident,
    features.approvedPostCount24h,
    features.sourceTrustMean,
    features.dataQuality,
  ].join("|");
  let hash = 2_166_136_261;
  for (const character of value) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16_777_619);
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
};
export const NO_DATA_PRIOR: Record<Horizon, number> = {
  1: 0.04,
  3: 0.12,
  6: 0.22,
  12: 0.39,
  24: 0.63,
};

export function baselineProbability(hours: Horizon, features: FeatureSnapshot): number {
  if (features.confirmedEventCount < 2) return NO_DATA_PRIOR[hours];
  const elapsed = features.hoursSinceLastConfirmedReset ?? features.medianCycleHours * 0.5;
  const remaining = Math.max(0, features.medianCycleHours - elapsed);
  const scale = Math.max(2, features.cycleDispersionHours);
  const scheduleHazard = sigmoid((hours - remaining) / scale);
  const sparsePenalty = Math.min(0.12, Math.max(0, (20 - features.confirmedEventCount) * 0.006));
  return clamp(scheduleHazard * (1 - sparsePenalty));
}

export function candidateProbability(hours: Horizon, features: FeatureSnapshot): number {
  const base = baselineProbability(hours, features);
  if (features.confirmedEventCount < 2) return base;
  const logit = Math.log(base / (1 - base));
  const incident = features.activeIncident ? 0.28 : 0;
  const reports = Math.min(0.3, features.weightedReportVolume6h * 0.08);
  const posts = Math.min(0.12, features.approvedPostCount24h * 0.04);
  const quality = (features.dataQuality - 0.5) * 0.16;
  return clamp(sigmoid(logit + incident + reports + posts + quality));
}

export function buildForecast(features: FeatureSnapshot, now = new Date(features.cutoffUtc)): Forecast {
  const probabilities = Object.fromEntries(
    HORIZONS.map((hours) => [hours, candidateProbability(hours, features)])
  ) as Record<Horizon, number>;
  const hasTimingHistory = features.confirmedEventCount >= 2 && features.hoursSinceLastConfirmedReset !== null;
  const elapsed = features.hoursSinceLastConfirmedReset ?? 0;
  const remaining = Math.max(1, features.medianCycleHours - elapsed);
  const center = now.getTime() + remaining * 3_600_000;
  const halfWidth = Math.max(90 * 60_000, features.cycleDispersionHours * 1_800_000);
  const confidenceGrade = features.confirmedEventCount >= 50 ? "B" : features.confirmedEventCount >= 20 ? "C" : "D";
  const explanationFactors = hasTimingHistory
    ? [
        {
          label: "Time since the last confirmed reset",
          direction: remaining <= 12 ? "raises" as const : "lowers" as const,
          detail: `${Math.round(elapsed)} hours have elapsed against a ${features.medianCycleHours}-hour median cycle.`,
        },
        {
          label: "Limited verified history",
          direction: "lowers" as const,
          detail: `${features.confirmedEventCount} confirmed events are available; 20 are required before statistical promotion.`,
        },
        {
          label: features.activeIncident ? "Active official incident" : "No active official incident",
          direction: features.activeIncident ? "raises" as const : "neutral" as const,
          detail: features.activeIncident
            ? "An official Codex-relevant incident is active. It is context, not evidence of a personal reset."
            : "No active Codex-relevant incident is represented in the current snapshot.",
        },
      ]
    : [
        {
          label: features.confirmedEventCount === 0 ? "No verified reset history" : "One verified reset is not a schedule",
          direction: "lowers" as const,
          detail: features.confirmedEventCount === 0
            ? "No timing pattern has been learned. The displayed probabilities are a broad published prior."
            : "One confirmed event is available, but at least two are required to estimate a timing pattern. The displayed probabilities remain the broad published prior.",
        },
        {
          label: "Verified collection is active",
          direction: "neutral" as const,
          detail: "Only deterministic local transitions or maintainer-verified reports can enter the confirmed reset history.",
        },
        {
          label: features.activeIncident ? "Active official incident" : "Official incident context",
          direction: "neutral" as const,
          detail: features.activeIncident
            ? "An official Codex-relevant incident is active, but incidents are not personal reset confirmations."
            : "Official OpenAI status is monitored separately from personal reset observations.",
        },
      ];

  return {
    id: `fc_${now.toISOString().replace(/\D/g, "").slice(0, 14)}`,
    forecastAtUtc: now.toISOString(),
    probabilities,
    likelyStartUtc: hasTimingHistory ? new Date(center - halfWidth).toISOString() : null,
    likelyEndUtc: hasTimingHistory ? new Date(center + halfWidth).toISOString() : null,
    confidenceGrade,
    featureSnapshot: features,
    explanationFactors,
    modelVersion: features.confirmedEventCount < 2 ? "published-prior-0.1.0" : "schedule-baseline-0.2.0",
    datasetVersion: `events-${features.confirmedEventCount}-cutoff-${now.toISOString().slice(0, 10)}-${featureTag(features)}`,
    dataSufficiencyLabel: features.confirmedEventCount === 0
      ? "Experimental—no verified reset history"
      : features.confirmedEventCount < 20
        ? "Experimental—limited history"
      : "Experimental estimate",
  };
}
