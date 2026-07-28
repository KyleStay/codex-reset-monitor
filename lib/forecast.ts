import { HORIZONS, type FeatureSnapshot, type Forecast, type Horizon } from "./domain";

const clamp = (value: number, min = 0.01, max = 0.98) => Math.min(max, Math.max(min, value));
const sigmoid = (value: number) => 1 / (1 + Math.exp(-value));

export function baselineProbability(hours: Horizon, features: FeatureSnapshot): number {
  const elapsed = features.hoursSinceLastConfirmedReset ?? features.medianCycleHours * 0.5;
  const remaining = Math.max(0, features.medianCycleHours - elapsed);
  const scale = Math.max(2, features.cycleDispersionHours);
  const scheduleHazard = sigmoid((hours - remaining) / scale);
  const sparsePenalty = Math.min(0.12, Math.max(0, (20 - features.confirmedEventCount) * 0.006));
  return clamp(scheduleHazard * (1 - sparsePenalty));
}

export function candidateProbability(hours: Horizon, features: FeatureSnapshot): number {
  const base = baselineProbability(hours, features);
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
  const elapsed = features.hoursSinceLastConfirmedReset ?? 0;
  const remaining = Math.max(1, features.medianCycleHours - elapsed);
  const center = now.getTime() + remaining * 3_600_000;
  const halfWidth = Math.max(90 * 60_000, features.cycleDispersionHours * 1_800_000);
  const confidenceGrade = features.confirmedEventCount >= 50 ? "B" : features.confirmedEventCount >= 20 ? "C" : "D";

  return {
    id: `fc_${now.toISOString().replace(/\D/g, "").slice(0, 14)}`,
    forecastAtUtc: now.toISOString(),
    probabilities,
    likelyStartUtc: new Date(center - halfWidth).toISOString(),
    likelyEndUtc: new Date(center + halfWidth).toISOString(),
    confidenceGrade,
    featureSnapshot: features,
    explanationFactors: [
      {
        label: "Time since the last confirmed reset",
        direction: remaining <= 12 ? "raises" : "lowers",
        detail: `${Math.round(elapsed)} hours have elapsed against a ${features.medianCycleHours}-hour median cycle.`,
      },
      {
        label: "Limited verified history",
        direction: "lowers",
        detail: `${features.confirmedEventCount} confirmed events are available; 20 are required before statistical promotion.`,
      },
      {
        label: features.activeIncident ? "Active official incident" : "No active official incident",
        direction: features.activeIncident ? "raises" : "neutral",
        detail: features.activeIncident
          ? "An official Codex-relevant incident is active, which modestly raises the estimate."
          : "No active Codex-relevant incident is represented in the current snapshot.",
      },
    ],
    modelVersion: "candidate-logistic-0.1.0",
    datasetVersion: `events-${features.confirmedEventCount}-cutoff-${now.toISOString().slice(0, 10)}`,
    dataSufficiencyLabel: features.confirmedEventCount < 20
      ? "Experimental—limited history"
      : "Experimental estimate",
  };
}
