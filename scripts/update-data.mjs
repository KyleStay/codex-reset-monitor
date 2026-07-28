import { createHash } from "node:crypto";
import { readFile, writeFile, mkdir } from "node:fs/promises";

const statusUrl = process.env.STATUS_FEED_URL ?? "https://status.openai.com/api/v2/incidents.json";
const now = new Date();
const observations = JSON.parse(await readFile(new URL("../data/observations.json", import.meta.url), "utf8"))
  .filter((row) => row.verificationState === "confirmed")
  .sort((a, b) => Date.parse(a.observedResetAtUtc) - Date.parse(b.observedResetAtUtc));

let officialIncidents = [];
let sourceHealth = "healthy";
let retrievedAt = now.toISOString();
try {
  const response = await fetch(statusUrl, { headers: { "user-agent": "codex-reset-monitor/0.1 (+open-source research)" }, signal: AbortSignal.timeout(15_000) });
  if (!response.ok) throw new Error(`Status endpoint returned ${response.status}`);
  const payload = await response.json();
  officialIncidents = (payload.incidents ?? []).filter((incident) => {
    const text = `${incident.name} ${(incident.incident_updates ?? []).map((update) => update.body).join(" ")}`;
    return /codex|usage limit/i.test(text);
  }).slice(0, 20).map((incident) => ({
    id: incident.id,
    title: String(incident.name).slice(0, 160),
    status: incident.status,
    impact: incident.impact,
    publicationTimeUtc: new Date(incident.created_at).toISOString(),
    retrievalTimeUtc: retrievedAt,
    canonicalUrl: `https://status.openai.com/incidents/${incident.id}`,
    excerpt: String(incident.incident_updates?.[0]?.body ?? "").replace(/\s+/g, " ").slice(0, 240),
    contentHash: createHash("sha256").update(JSON.stringify([incident.id, incident.updated_at, incident.status])).digest("hex"),
  }));
} catch (error) {
  sourceHealth = `degraded: ${error instanceof Error ? error.message : "unknown failure"}`;
}

const times = observations.map((row) => Date.parse(row.observedResetAtUtc));
const cycles = times.slice(1).map((time, index) => (time - times[index]) / 3_600_000).sort((a, b) => a - b);
const median = cycles.length ? cycles[Math.floor(cycles.length / 2)] : 24;
const last = times.at(-1) ?? now.getTime() - 12 * 3_600_000;
const elapsed = Math.max(0, (now.getTime() - last) / 3_600_000);
const dispersion = cycles.length ? Math.max(2, cycles.reduce((sum, value) => sum + Math.abs(value - median), 0) / cycles.length) : 6;
const activeIncident = officialIncidents.some((incident) => incident.status !== "resolved");
const sigmoid = (x) => 1 / (1 + Math.exp(-x));
const probabilities = Object.fromEntries([1, 3, 6, 12, 24].map((hours) => {
  const remaining = Math.max(0, median - elapsed);
  const base = sigmoid((hours - remaining) / dispersion);
  const sparsePenalty = Math.min(.12, Math.max(0, (20 - observations.length) * .006));
  return [hours, Number(Math.min(.98, Math.max(.01, base * (1 - sparsePenalty) + (activeIncident ? .03 : 0))).toFixed(4))];
}));
const center = now.getTime() + Math.max(1, median - elapsed) * 3_600_000;
const halfWidth = Math.max(90 * 60_000, dispersion * 1_800_000);
const snapshot = {
  generatedAtUtc: now.toISOString(),
  sourceRetrievedAtUtc: retrievedAt,
  sourceMode: "official-public-json",
  sourceHealth,
  officialIncidents,
  forecast: {
    modelVersion: "schedule-baseline-0.1.0",
    datasetVersion: `events-${observations.length}-cutoff-${now.toISOString().slice(0, 10)}`,
    probabilities,
    likelyStartUtc: new Date(center - halfWidth).toISOString(),
    likelyEndUtc: new Date(center + halfWidth).toISOString(),
    dataSufficiencyLabel: observations.length < 20 ? "Experimental—limited history" : "Experimental estimate",
  },
};

await mkdir(new URL("../data/generated/", import.meta.url), { recursive: true });
await writeFile(new URL("../data/generated/snapshot.json", import.meta.url), `${JSON.stringify(snapshot, null, 2)}\n`);
const historyUrl = new URL("../data/generated/forecast-history.json", import.meta.url);
let history = [];
try {
  history = JSON.parse(await readFile(historyUrl, "utf8"));
} catch {
  history = [];
}
if (!history.some((row) => row.id === snapshot.forecast.datasetVersion)) {
  const display = new Intl.DateTimeFormat("en", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: "UTC" });
  history.unshift({
    id: snapshot.forecast.datasetVersion,
    at: snapshot.generatedAtUtc,
    p6: snapshot.forecast.probabilities[6],
    interval: `${display.format(new Date(snapshot.forecast.likelyStartUtc))}–${display.format(new Date(snapshot.forecast.likelyEndUtc))} UTC`,
    outcome: "Awaiting outcome",
    brier: null,
  });
  await writeFile(historyUrl, `${JSON.stringify(history, null, 2)}\n`);
}

const base = process.env.PUBLIC_SITE_URL || "https://example.github.io/codex-reset-monitor";
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>Codex Reset Monitor</title><link>${base}</link>
<description>Meaningful changes to experimental Codex reset forecasts.</description>
<lastBuildDate>${now.toUTCString()}</lastBuildDate>
<item><guid>${snapshot.forecast.datasetVersion}</guid><title>${snapshot.forecast.dataSufficiencyLabel}: 24h probability ${Math.round(snapshot.forecast.probabilities[24] * 100)}%</title><link>${base}</link><pubDate>${now.toUTCString()}</pubDate><description>Experimental estimate, never a guarantee. Model ${snapshot.forecast.modelVersion}.</description></item>
</channel></rss>`;
await mkdir(new URL("../public/", import.meta.url), { recursive: true });
await writeFile(new URL("../public/feed.xml", import.meta.url), rss);

console.log(`Wrote ${snapshot.forecast.datasetVersion}; official incidents: ${officialIncidents.length}; source: ${sourceHealth}`);
