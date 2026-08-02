import type { ObservationInput, ObservationKind, Surface } from "./domain";

const SURFACES = new Set<Surface>(["cli", "ide", "cloud", "web", "other"]);
const PLAN_TIERS = new Set(["free", "individual-paid", "team-or-enterprise", "unknown"]);
const OBSERVATION_KINDS = new Set<ObservationKind>(["access-restored", "meter-reset"]);
const DETECTION_METHODS = new Set(["manual-retry", "scheduled-check", "local-observer", "other"]);

function iso(value: unknown, field: string): string {
  if (typeof value !== "string" || !value || Number.isNaN(Date.parse(value))) {
    throw new Error(`${field} must be a valid date and time`);
  }
  return new Date(value).toISOString();
}

function strings(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string").map((item) => item.trim()).filter(Boolean).slice(0, 10);
}

function optionalIso(value: unknown, field: string): string | undefined {
  return value === undefined || value === null || value === "" ? undefined : iso(value, field);
}

function optionalPercent(value: unknown, field: string): number | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  const parsed = Number(typeof value === "string" ? value.replace("%", "") : value);
  if (!Number.isFinite(parsed) || parsed < 0 || parsed > 100) throw new Error(`${field} must be between 0 and 100`);
  return parsed;
}

export function validateObservation(payload: unknown): ObservationInput {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) throw new Error("A submission object is required");
  const input = payload as Record<string, unknown>;
  const allowed = new Set([
    "observationKind", "limitReachedAtUtc", "priorSampleAtUtc", "observedResetAtUtc",
    "previousUsedPercent", "currentUsedPercent", "previousResetsAtUtc", "currentResetsAtUtc",
    "statedTimeZone", "precedingForecastId",
    "codexSurface", "planTier", "relatedIncidentIds", "relatedSourceIds", "submitterNotes",
    "detectionMethod", "confidence",
  ]);
  const unexpected = Object.keys(input).filter((key) => !allowed.has(key));
  if (unexpected.length) throw new Error(`Unexpected field: ${unexpected[0]}`);

  const observationKind = (input.observationKind ?? "access-restored") as ObservationKind;
  if (!OBSERVATION_KINDS.has(observationKind)) throw new Error("Select a supported observation kind");
  const limitReachedAtUtc = optionalIso(input.limitReachedAtUtc, "Limit-reached time");
  const priorSampleAtUtc = optionalIso(input.priorSampleAtUtc, "Prior sample time");
  const observedResetAtUtc = iso(input.observedResetAtUtc, "Observed reset time");
  if (observationKind === "access-restored" && !limitReachedAtUtc) {
    throw new Error("Access-restored observations require a limit-reached time");
  }
  if (limitReachedAtUtc && Date.parse(observedResetAtUtc) <= Date.parse(limitReachedAtUtc)) {
    throw new Error("Observed reset time must be later than the limit-reached time");
  }
  const previousUsedPercent = optionalPercent(input.previousUsedPercent, "Previous used percent");
  const currentUsedPercent = optionalPercent(input.currentUsedPercent, "Current used percent");
  const previousResetsAtUtc = optionalIso(input.previousResetsAtUtc, "Previous reset time");
  const currentResetsAtUtc = optionalIso(input.currentResetsAtUtc, "Current reset time");
  if (observationKind === "meter-reset") {
    if (!priorSampleAtUtc || Date.parse(observedResetAtUtc) <= Date.parse(priorSampleAtUtc)) {
      throw new Error("Meter-reset observations require an earlier prior sample time");
    }
    if (previousUsedPercent === undefined || currentUsedPercent === undefined || currentUsedPercent >= previousUsedPercent) {
      throw new Error("Meter-reset observations require a lower current used percentage");
    }
    if (!previousResetsAtUtc || !currentResetsAtUtc || Date.parse(currentResetsAtUtc) - Date.parse(previousResetsAtUtc) < 60_000) {
      throw new Error("Meter-reset observations require a materially advanced reset timestamp");
    }
    if (input.detectionMethod !== "local-observer") {
      throw new Error("Meter-reset observations require the local observer detection method");
    }
  }
  if (Date.parse(observedResetAtUtc) > Date.now() + 5 * 60_000) {
    throw new Error("Observed reset time cannot be in the future");
  }
  const timeZone = typeof input.statedTimeZone === "string" ? input.statedTimeZone.trim() : "";
  try {
    new Intl.DateTimeFormat("en", { timeZone }).format();
  } catch {
    throw new Error("Time zone must be an IANA time zone");
  }
  if (!SURFACES.has(input.codexSurface as Surface)) throw new Error("Select a supported Codex surface");
  if (input.planTier && !PLAN_TIERS.has(input.planTier as string)) throw new Error("Select a generalized plan tier");
  if (!DETECTION_METHODS.has(input.detectionMethod as string)) throw new Error("Select a detection method");
  const confidence = Number(input.confidence);
  if (!Number.isFinite(confidence) || confidence < 0.1 || confidence > 1) throw new Error("Confidence must be between 0.1 and 1");
  const notes = typeof input.submitterNotes === "string" ? input.submitterNotes.trim() : "";
  if (notes.length > 500) throw new Error("Notes must be 500 characters or fewer");
  const sensitive = /(sk-[A-Za-z0-9_-]{12,}|session[_ -]?token|cookie:|authorization:|-----BEGIN .*PRIVATE KEY-----)/i;
  if (sensitive.test(notes)) throw new Error("Notes appear to contain a credential or session value. Remove it before submitting");

  return {
    observationKind,
    limitReachedAtUtc,
    priorSampleAtUtc,
    observedResetAtUtc,
    previousUsedPercent,
    currentUsedPercent,
    previousResetsAtUtc,
    currentResetsAtUtc,
    statedTimeZone: timeZone,
    precedingForecastId: typeof input.precedingForecastId === "string" ? input.precedingForecastId.trim().slice(0, 80) : undefined,
    codexSurface: input.codexSurface as Surface,
    planTier: input.planTier as ObservationInput["planTier"],
    relatedIncidentIds: strings(input.relatedIncidentIds),
    relatedSourceIds: strings(input.relatedSourceIds),
    submitterNotes: notes || undefined,
    detectionMethod: input.detectionMethod as ObservationInput["detectionMethod"],
    confidence,
  };
}

export async function stableDigest(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function observationDedupeKey(input: ObservationInput): Promise<string> {
  const roundedReset = Math.floor(Date.parse(input.observedResetAtUtc) / 900_000);
  return stableDigest([input.codexSurface, roundedReset, input.statedTimeZone].join("|"));
}
