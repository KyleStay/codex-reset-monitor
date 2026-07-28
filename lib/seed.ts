import snapshotJson from "../data/generated/snapshot.json";
import generatedHistory from "../data/generated/forecast-history.json";
import observationsJson from "../data/observations.json";
import type {
  Forecast,
  ForecastHistoryRow,
  SourceRecord,
  StoredObservation,
} from "./domain";

const snapshot = snapshotJson as unknown as {
  generatedAtUtc: string;
  sourceMode: string;
  officialStatusHealth: { status: "healthy" | "degraded"; checkedAtUtc: string; message: string };
  observationSourceHealth: {
    status: "healthy" | "degraded" | "disabled";
    checkedAtUtc: string;
    message: string;
    rejectedRecordCount: number;
    duplicateCount: number;
  };
  officialIncidents: SourceRecord[];
  approvedPublicSources: SourceRecord[];
  verifiedObservationCount: number;
  forecast: Forecast;
  performance: {
    sampleCount: number;
    brier: number | null;
    baselineBrier: number | null;
    precision6h: number | null;
    recall6h: number | null;
    falseAlarmRate: number | null;
    missedEventRate: number | null;
    medianTimingErrorMinutes: number | null;
    calibration: Array<{ bucket: string; predicted: number; observed: number; n: number }>;
  };
};
const observations = observationsJson as unknown as StoredObservation[];
const chronological = [...observations].sort(
  (a, b) => Date.parse(a.observedResetAtUtc) - Date.parse(b.observedResetAtUtc),
);

export const resetHistory = chronological.map((row, index) => {
  const previous = chronological[index - 1];
  const cycle = previous
    ? `${((Date.parse(row.observedResetAtUtc) - Date.parse(previous.observedResetAtUtc)) / 3_600_000).toFixed(1)}h`
    : undefined;
  return {
    id: row.id,
    date: row.observedResetAtUtc,
    surface: row.codexSurface.toUpperCase(),
    state: "Confirmed",
    cycle,
    note: "Administrator-verified community observation.",
    url: row.sourceUrl,
  };
}).reverse();

export const incidents = snapshot.officialIncidents.map((record) => ({
  id: record.id,
  date: record.publicationTimeUtc,
  state: String(record.metadata.status ?? "Official"),
  title: record.title,
  detail: record.excerpt ?? "Official OpenAI status record.",
  url: record.canonicalUrl,
}));

export const publicSignals = snapshot.approvedPublicSources.map((record) => ({
  id: record.id,
  date: record.publicationTimeUtc,
  state: "Approved",
  title: record.title,
  detail: record.excerpt ?? "Administrator-approved public source metadata.",
  url: record.canonicalUrl,
}));

export const currentForecast = snapshot.forecast;
export const forecastHistory = generatedHistory as unknown as ForecastHistoryRow[];
export const performance = snapshot.performance;
export const collectionHealth = {
  generatedAtUtc: snapshot.generatedAtUtc,
  sourceMode: snapshot.sourceMode,
  officialStatus: snapshot.officialStatusHealth,
  observations: snapshot.observationSourceHealth,
  verifiedObservationCount: snapshot.verifiedObservationCount,
};
