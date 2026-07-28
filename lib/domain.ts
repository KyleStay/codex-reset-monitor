export const HORIZONS = [1, 3, 6, 12, 24] as const;
export type Horizon = (typeof HORIZONS)[number];

export type VerificationState = "pending" | "confirmed" | "inferred" | "rejected" | "corrected";
export type Surface = "cli" | "ide" | "cloud" | "web" | "other";

export interface ObservationInput {
  limitReachedAtUtc: string;
  observedResetAtUtc: string;
  statedTimeZone: string;
  precedingForecastId?: string;
  codexSurface: Surface;
  planTier?: "free" | "individual-paid" | "team-or-enterprise" | "unknown";
  relatedIncidentIds: string[];
  relatedSourceIds: string[];
  submitterNotes?: string;
  detectionMethod: "manual-retry" | "scheduled-check" | "other";
  confidence: number;
}

export interface FeatureSnapshot {
  cutoffUtc: string;
  confirmedEventCount: number;
  hoursSinceLastConfirmedReset: number | null;
  medianCycleHours: number;
  cycleDispersionHours: number;
  activeIncident: boolean;
  incidentRecencyHours: number | null;
  approvedPostCount24h: number;
  weightedReportVolume6h: number;
  sourceTrustMean: number;
  dataQuality: number;
}

export interface Forecast {
  id: string;
  forecastAtUtc: string;
  probabilities: Record<Horizon, number>;
  likelyStartUtc: string;
  likelyEndUtc: string;
  confidenceGrade: "A" | "B" | "C" | "D";
  featureSnapshot: FeatureSnapshot;
  explanationFactors: Array<{ label: string; direction: "raises" | "lowers" | "neutral"; detail: string }>;
  modelVersion: string;
  datasetVersion: string;
  dataSufficiencyLabel: string;
}

export interface SourceRecord {
  id: string;
  sourceAdapterId: string;
  sourceKind: "official_status" | "approved_public_post";
  provenance: "official" | "administrator_approved";
  publicationTimeUtc: string;
  retrievalTimeUtc: string;
  canonicalUrl: string;
  title: string;
  excerpt: string | null;
  metadata: Record<string, string | number | boolean>;
  normalizedFeatures: Record<string, string | number | boolean>;
  contentHash: string;
}

export interface SourceHealth {
  status: "healthy" | "degraded" | "disabled";
  checkedAtUtc: string;
  message: string;
}

export interface CollectionBatch {
  records: SourceRecord[];
  nextCursor?: string;
  retrievedAtUtc: string;
}

export interface SourceAdapter {
  readonly id: string;
  readonly kind: SourceRecord["sourceKind"];
  collect(cursor?: string): Promise<CollectionBatch>;
  normalize(raw: unknown, retrievedAtUtc: string): Promise<SourceRecord>;
  health(): Promise<SourceHealth>;
}
