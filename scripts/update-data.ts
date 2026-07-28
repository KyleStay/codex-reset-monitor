import { readFile, writeFile, mkdir } from "node:fs/promises";
import { buildForecast } from "../lib/forecast";
import { scoreForecast } from "../lib/scoring";
import { collectGitHubIssueData } from "../lib/sources/github-issues";
import { OpenAIStatusAdapter } from "../lib/sources/openai-status";
import type {
  FeatureSnapshot,
  Forecast,
  ForecastHistoryRow,
  Horizon,
  SourceRecord,
  StoredObservation,
} from "../lib/domain";

const DATA_DIR = new URL("../data/", import.meta.url);
const GENERATED_DIR = new URL("../data/generated/", import.meta.url);
const OBSERVATIONS_URL = new URL("observations.json", DATA_DIR);
const PUBLIC_SOURCES_URL = new URL("public-sources.json", DATA_DIR);
const SNAPSHOT_URL = new URL("snapshot.json", GENERATED_DIR);
const HISTORY_URL = new URL("forecast-history.json", GENERATED_DIR);
const JOB_HISTORY_URL = new URL("job-history.json", GENERATED_DIR);
const now = new Date();
const nowUtc = now.toISOString();

async function readJson<T>(url: URL, fallback: T): Promise<T> {
  try {
    return JSON.parse(await readFile(url, "utf8")) as T;
  } catch {
    return fallback;
  }
}

async function writeJson(url: URL, value: unknown) {
  await writeFile(url, `${JSON.stringify(value, null, 2)}\n`);
}

await mkdir(GENERATED_DIR, { recursive: true });

let observations = await readJson<StoredObservation[]>(OBSERVATIONS_URL, []);
let approvedPublicSources = await readJson<SourceRecord[]>(PUBLIC_SOURCES_URL, []);
const repository = process.env.GITHUB_REPOSITORY ?? "KyleStay/codex-reset-monitor";
const githubToken = process.env.GITHUB_TOKEN ?? "";
let observationSourceHealth = {
  status: "disabled" as "healthy" | "degraded" | "disabled",
  checkedAtUtc: nowUtc,
  message: "GitHub collection is available in Actions; local mode uses the checked-in verified dataset.",
  rejectedRecordCount: 0,
  duplicateCount: 0,
};

if (repository) {
  try {
    const collected = await collectGitHubIssueData({
      repository,
      token: githubToken,
      previousObservations: observations,
      now,
    });
    observations = collected.observations;
    approvedPublicSources = collected.publicSources;
    observationSourceHealth = {
      status: collected.rejectedRecords.length ? "degraded" : "healthy",
      checkedAtUtc: collected.retrievedAtUtc,
      message: collected.rejectedRecords.length
        ? `${collected.rejectedRecords.length} labeled issue record(s) were rejected during validation.`
        : "Verified observations and approved public sources were collected from GitHub Issues.",
      rejectedRecordCount: collected.rejectedRecords.length,
      duplicateCount: collected.duplicateCount,
    };
    await writeJson(OBSERVATIONS_URL, observations);
    await writeJson(PUBLIC_SOURCES_URL, approvedPublicSources);
  } catch (error) {
    observationSourceHealth = {
      status: "degraded",
      checkedAtUtc: nowUtc,
      message: `GitHub collection failed; retained last verified dataset: ${error instanceof Error ? error.message : "unknown failure"}`,
      rejectedRecordCount: 0,
      duplicateCount: 0,
    };
  }
}

const previousSnapshot = await readJson<{
  officialIncidents?: SourceRecord[];
  officialStatusHealth?: { status: string; checkedAtUtc: string; message: string };
}>(SNAPSHOT_URL, {});
let officialIncidents = previousSnapshot.officialIncidents ?? [];
let officialStatusHealth = {
  status: "degraded",
  checkedAtUtc: nowUtc,
  message: "Official status has not been collected.",
};
try {
  const batch = await new OpenAIStatusAdapter().collect();
  officialIncidents = batch.records
    .filter((record) => record.normalizedFeatures.codexRelevant === true)
    .sort((a, b) => Date.parse(b.publicationTimeUtc) - Date.parse(a.publicationTimeUtc))
    .slice(0, 50);
  officialStatusHealth = {
    status: "healthy",
    checkedAtUtc: batch.retrievedAtUtc,
    message: `Collected ${officialIncidents.length} Codex-relevant official incident record(s).`,
  };
} catch (error) {
  officialStatusHealth = {
    status: "degraded",
    checkedAtUtc: nowUtc,
    message: `Official status collection failed; retained last snapshot: ${error instanceof Error ? error.message : "unknown failure"}`,
  };
}

const eligibleObservations = observations
  .filter((row) => row.verificationState === "confirmed" && Date.parse(row.verifiedAtUtc) <= now.getTime())
  .sort((a, b) => Date.parse(a.observedResetAtUtc) - Date.parse(b.observedResetAtUtc));
const resetTimes = eligibleObservations.map((row) => Date.parse(row.observedResetAtUtc));
const cycles = resetTimes
  .slice(1)
  .map((time, index) => (time - resetTimes[index]) / 3_600_000)
  .filter((hours) => hours > 0 && Number.isFinite(hours))
  .sort((a, b) => a - b);
const medianCycleHours = cycles.length ? cycles[Math.floor(cycles.length / 2)] : 24;
const cycleDispersionHours = cycles.length
  ? Math.max(2, cycles.reduce((sum, value) => sum + Math.abs(value - medianCycleHours), 0) / cycles.length)
  : 12;
const lastReset = resetTimes.at(-1);
const activeIncident = officialIncidents.some((row) => row.normalizedFeatures.active === true);
const mostRecentIncident = officialIncidents[0];
const recentReports = eligibleObservations.filter(
  (row) => Date.parse(row.verifiedAtUtc) >= now.getTime() - 6 * 3_600_000,
);
const trustMean = eligibleObservations.length
  ? eligibleObservations.reduce((sum, row) => sum + row.trustWeight, 0) / eligibleObservations.length
  : 0;
const features: FeatureSnapshot = {
  cutoffUtc: nowUtc,
  confirmedEventCount: eligibleObservations.length,
  hoursSinceLastConfirmedReset: lastReset === undefined ? null : Math.max(0, (now.getTime() - lastReset) / 3_600_000),
  medianCycleHours: Number(medianCycleHours.toFixed(2)),
  cycleDispersionHours: Number(cycleDispersionHours.toFixed(2)),
  activeIncident,
  incidentRecencyHours: mostRecentIncident
    ? Math.max(0, (now.getTime() - Date.parse(mostRecentIncident.publicationTimeUtc)) / 3_600_000)
    : null,
  approvedPostCount24h: approvedPublicSources.filter(
    (row) => Date.parse(row.publicationTimeUtc) >= now.getTime() - 24 * 3_600_000,
  ).length,
  weightedReportVolume6h: Number(recentReports.reduce((sum, row) => sum + row.trustWeight, 0).toFixed(3)),
  sourceTrustMean: Number(trustMean.toFixed(3)),
  dataQuality: Number(Math.min(0.9, eligibleObservations.length / 20 * 0.8).toFixed(3)),
};
const forecast = buildForecast(features, now);

const displayUtc = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  timeZone: "UTC",
});
const interval = forecast.likelyStartUtc && forecast.likelyEndUtc
  ? `${displayUtc.format(new Date(forecast.likelyStartUtc))}–${displayUtc.format(new Date(forecast.likelyEndUtc))} UTC`
  : null;
let history = await readJson<ForecastHistoryRow[]>(HISTORY_URL, []);
if (!history.some((row) => row.id === forecast.datasetVersion)) {
  history.unshift({
    id: forecast.datasetVersion,
    at: forecast.forecastAtUtc,
    probabilities: forecast.probabilities,
    p6: forecast.probabilities[6],
    likelyStartUtc: forecast.likelyStartUtc,
    likelyEndUtc: forecast.likelyEndUtc,
    interval,
    outcome: "Awaiting 24-hour outcome",
    outcomes: null,
    brier: null,
    timingErrorMinutes: null,
    modelVersion: forecast.modelVersion,
    datasetVersion: forecast.datasetVersion,
  });
}

history = history.map((row) => {
  if (row.brier !== null || now.getTime() < Date.parse(row.at) + 24 * 3_600_000) return row;
  const actual = eligibleObservations.find((observation) => {
    const resetAt = Date.parse(observation.observedResetAtUtc);
    return resetAt >= Date.parse(row.at) && resetAt <= Date.parse(row.at) + 24 * 3_600_000;
  });
  const historicalForecast: Forecast = {
    id: row.id,
    forecastAtUtc: row.at,
    probabilities: row.probabilities,
    likelyStartUtc: row.likelyStartUtc,
    likelyEndUtc: row.likelyEndUtc,
    confidenceGrade: "D",
    featureSnapshot: features,
    explanationFactors: [],
    modelVersion: row.modelVersion,
    datasetVersion: row.datasetVersion,
    dataSufficiencyLabel: "Historical forecast",
  };
  const score = scoreForecast(historicalForecast, actual?.observedResetAtUtc ?? null);
  return {
    ...row,
    outcome: actual ? `Verified reset at ${displayUtc.format(new Date(actual.observedResetAtUtc))} UTC` : "No verified reset within 24h",
    outcomes: score.outcomes,
    brier: Number(score.brierScore.toFixed(4)),
    timingErrorMinutes: score.absoluteTimingErrorMinutes,
  };
});
await writeJson(HISTORY_URL, history);

const scored = history.filter((row) => row.brier !== null);
const atSixHours = scored.map((row) => ({
  predicted: row.p6 >= 0.5,
  actual: row.outcomes?.[6] ?? false,
}));
const truePositive = atSixHours.filter((row) => row.predicted && row.actual).length;
const falsePositive = atSixHours.filter((row) => row.predicted && !row.actual).length;
const falseNegative = atSixHours.filter((row) => !row.predicted && row.actual).length;
const calibrationRanges: Array<{ min: number; max: number; bucket: string }> = [
  { min: 0, max: 0.2, bucket: "0–20%" },
  { min: 0.2, max: 0.4, bucket: "21–40%" },
  { min: 0.4, max: 0.6, bucket: "41–60%" },
  { min: 0.6, max: 0.8, bucket: "61–80%" },
  { min: 0.8, max: 1.01, bucket: "81–100%" },
];
const calibration = calibrationRanges.flatMap((range) => {
  const rows = scored.filter((row) => row.p6 >= range.min && row.p6 < range.max);
  if (!rows.length) return [];
  return [{
    bucket: range.bucket,
    predicted: rows.reduce((sum, row) => sum + row.p6, 0) / rows.length,
    observed: rows.filter((row) => row.outcomes?.[6]).length / rows.length,
    n: rows.length,
  }];
});
const performance = {
  sampleCount: scored.length,
  brier: scored.length ? scored.reduce((sum, row) => sum + (row.brier ?? 0), 0) / scored.length : null,
  baselineBrier: scored.length ? scored.reduce((sum, row) => sum + (row.brier ?? 0), 0) / scored.length : null,
  precision6h: truePositive + falsePositive ? truePositive / (truePositive + falsePositive) : null,
  recall6h: truePositive + falseNegative ? truePositive / (truePositive + falseNegative) : null,
  falseAlarmRate: truePositive + falsePositive ? falsePositive / (truePositive + falsePositive) : null,
  missedEventRate: truePositive + falseNegative ? falseNegative / (truePositive + falseNegative) : null,
  medianTimingErrorMinutes: (() => {
    const values = scored
      .map((row) => row.timingErrorMinutes)
      .filter((value): value is number => value !== null)
      .sort((a, b) => a - b);
    return values.length ? values[Math.floor(values.length / 2)] : null;
  })(),
  calibration,
};

const snapshot = {
  generatedAtUtc: nowUtc,
  sourceMode: "live-official-status-and-verified-github-issues",
  officialStatusHealth,
  observationSourceHealth,
  officialIncidents,
  approvedPublicSources,
  verifiedObservationCount: eligibleObservations.length,
  forecast,
  performance,
};
await writeJson(SNAPSHOT_URL, snapshot);

const jobHistory = await readJson<Array<Record<string, unknown>>>(JOB_HISTORY_URL, []);
jobHistory.unshift({
  id: `refresh-${nowUtc}`,
  startedAtUtc: nowUtc,
  completedAtUtc: new Date().toISOString(),
  status: officialStatusHealth.status === "healthy" && observationSourceHealth.status !== "degraded" ? "succeeded" : "degraded",
  officialIncidentCount: officialIncidents.length,
  verifiedObservationCount: eligibleObservations.length,
  approvedPublicSourceCount: approvedPublicSources.length,
  rejectedRecordCount: observationSourceHealth.rejectedRecordCount,
  duplicateCount: observationSourceHealth.duplicateCount,
  datasetVersion: forecast.datasetVersion,
});
await writeJson(JOB_HISTORY_URL, jobHistory.slice(0, 100));

const base = process.env.PUBLIC_SITE_URL || "https://kylestay.github.io/codex-reset-monitor";
const rssItems = history.slice(0, 10).map((row) => {
  const probability = Math.round(row.probabilities[24 as Horizon] * 100);
  return `<item><guid>${row.id}</guid><title>Experimental 24h estimate: ${probability}%</title><link>${base}</link><pubDate>${new Date(row.at).toUTCString()}</pubDate><description>${row.interval ? `Likely interval ${row.interval}.` : "No likely interval is available without verified timing history."} Experimental estimate, never a guarantee. Model ${row.modelVersion}.</description></item>`;
}).join("\n");
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>Codex Reset Monitor</title><link>${base}</link>
<description>Meaningful changes to experimental Codex reset forecasts.</description>
<lastBuildDate>${now.toUTCString()}</lastBuildDate>
${rssItems}
</channel></rss>`;
await writeFile(new URL("../public/feed.xml", import.meta.url), rss);

console.log(JSON.stringify({
  datasetVersion: forecast.datasetVersion,
  verifiedObservations: eligibleObservations.length,
  officialIncidents: officialIncidents.length,
  approvedPublicSources: approvedPublicSources.length,
  officialStatus: officialStatusHealth.status,
  githubIssues: observationSourceHealth.status,
}));
