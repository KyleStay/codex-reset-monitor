import { buildForecast } from "./forecast";
import type { FeatureSnapshot } from "./domain";
import snapshot from "../data/generated/snapshot.json";
import generatedHistory from "../data/generated/forecast-history.json";

export const DEMO_NOW = "2026-07-28T14:00:00.000Z";

export const resetHistory = [
  { id: "rst-006", date: "2026-07-27T18:20:00.000Z", surface: "CLI", state: "Confirmed", cycle: "27.8h", note: "Verified demonstration observation" },
  { id: "rst-005", date: "2026-07-26T14:33:00.000Z", surface: "IDE", state: "Confirmed", cycle: "25.4h", note: "Verified demonstration observation" },
  { id: "rst-004", date: "2026-07-25T13:10:00.000Z", surface: "Cloud", state: "Confirmed", cycle: "31.1h", note: "Verified demonstration observation" },
  { id: "rst-003", date: "2026-07-24T06:04:00.000Z", surface: "CLI", state: "Corrected", cycle: "23.7h", note: "Time corrected; original remains in audit history" },
  { id: "rst-002", date: "2026-07-23T06:22:00.000Z", surface: "Web", state: "Confirmed", cycle: "26.5h", note: "Verified demonstration observation" },
  { id: "rst-001", date: "2026-07-22T03:51:00.000Z", surface: "CLI", state: "Confirmed", cycle: "—", note: "Earliest seeded observation" },
];

export const incidents = [
  { id: "inc-3", date: "2026-07-19T14:08:00.000Z", state: "Resolved", title: "Elevated errors affecting ChatGPT", detail: "Official write-up noted that some Codex requests failed.", url: "https://status.openai.com/" },
  { id: "inc-2", date: "2026-06-26T21:04:00.000Z", state: "Resolved", title: "Codex usage limits depleting faster than expected", detail: "Official incident; fixture only in this build.", url: "https://status.openai.com/" },
  { id: "inc-1", date: "2026-05-27T21:57:00.000Z", state: "Resolved", title: "Codex context compaction latency", detail: "Official Codex-related service incident.", url: "https://status.openai.com/" },
];

export const publicSignals = [
  { id: "sig-2", date: "2026-07-21T16:10:00.000Z", state: "Approved", title: "Official status write-up published", detail: "Metadata only; visitors are linked to the original.", url: "https://status.openai.com/" },
  { id: "sig-1", date: "2026-07-10T12:30:00.000Z", state: "Manual URL", title: "Administrator-approved announcement placeholder", detail: "No social account is guessed or scraped.", url: "https://openai.com/news/" },
];

export const features: FeatureSnapshot = {
  cutoffUtc: DEMO_NOW,
  confirmedEventCount: 6,
  hoursSinceLastConfirmedReset: 19.7,
  medianCycleHours: 26.5,
  cycleDispersionHours: 4.2,
  activeIncident: false,
  incidentRecencyHours: 218,
  approvedPostCount24h: 0,
  weightedReportVolume6h: 0.3,
  sourceTrustMean: 0.74,
  dataQuality: 0.58,
};

const generated = snapshot.forecast;
const baselineForecast = buildForecast({ ...features, cutoffUtc: snapshot.generatedAtUtc }, new Date(snapshot.generatedAtUtc));
export const currentForecast = {
  ...baselineForecast,
  forecastAtUtc: snapshot.generatedAtUtc,
  probabilities: {
    1: generated.probabilities["1"],
    3: generated.probabilities["3"],
    6: generated.probabilities["6"],
    12: generated.probabilities["12"],
    24: generated.probabilities["24"],
  },
  likelyStartUtc: generated.likelyStartUtc,
  likelyEndUtc: generated.likelyEndUtc,
  modelVersion: generated.modelVersion,
  datasetVersion: generated.datasetVersion,
  dataSufficiencyLabel: generated.dataSufficiencyLabel,
};

export const forecastHistory = generatedHistory;

export const performance = {
  sampleCount: 5,
  brier: 0.214,
  baselineBrier: 0.227,
  precision6h: 0.67,
  recall6h: 0.5,
  falseAlarmRate: 0.33,
  missedEventRate: 0.5,
  medianTimingErrorMinutes: 96,
  calibration: [
    { bucket: "0–20%", predicted: 0.15, observed: 0.2, n: 5 },
    { bucket: "21–40%", predicted: 0.32, observed: 0.25, n: 4 },
    { bucket: "41–60%", predicted: 0.51, observed: 0.5, n: 4 },
    { bucket: "61–80%", predicted: 0.69, observed: 0.67, n: 3 },
    { bucket: "81–100%", predicted: 0.86, observed: 1, n: 1 },
  ],
};
