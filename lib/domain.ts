export const HORIZONS = [1, 3, 6, 12, 24] as const;
export type Horizon = (typeof HORIZONS)[number];

export type VerificationState = "pending" | "confirmed" | "inferred" | "rejected" | "corrected";
export type Surface = "cli" | "ide" | "cloud" | "web" | "other";
export type ObservationKind = "access-restored" | "meter-reset";

export interface ObservationInput {
  observationKind: ObservationKind;
  limitReachedAtUtc?: string;
  priorSampleAtUtc?: string;
  observedResetAtUtc: string;
  previousUsedPercent?: number;
  currentUsedPercent?: number;
  previousResetsAtUtc?: string;
  currentResetsAtUtc?: string;
  statedTimeZone: string;
  precedingForecastId?: string;
  codexSurface: Surface;
  planTier?: "free" | "individual-paid" | "team-or-enterprise" | "unknown";
  relatedIncidentIds: string[];
  relatedSourceIds: string[];
  submitterNotes?: string;
  detectionMethod: "manual-retry" | "scheduled-check" | "local-observer" | "other";
  confidence: number;
}

export interface FeatureSnapshot {
  cutoffUtc: string;
  confirmedEventCount: number;
  scheduledEventCount: number;
  outOfCycleEventCount: number;
  lastResetTiming: "scheduled" | "out-of-cycle" | "unknown" | null;
  scheduledResetAtUtc: string | null;
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
  likelyStartUtc: string | null;
  likelyEndUtc: string | null;
  confidenceGrade: "A" | "B" | "C" | "D";
  featureSnapshot: FeatureSnapshot;
  explanationFactors: Array<{ label: string; direction: "raises" | "lowers" | "neutral"; detail: string }>;
  modelVersion: string;
  datasetVersion: string;
  dataSufficiencyLabel: string;
}

export interface ObservationAuditEntry {
  recordedAtUtc: string;
  action: "verified" | "corrected";
  sourceContentHash: string;
  sourceIssueUpdatedAtUtc: string;
}

export interface StoredObservation extends ObservationInput {
  id: string;
  verificationState: "confirmed";
  trustWeight: number;
  createdAtUtc: string;
  verifiedAtUtc: string;
  sourceUrl: string;
  sourceIssueNumber: number;
  sourceIssueUpdatedAtUtc: string;
  sourceContentHash: string;
  auditHistory: ObservationAuditEntry[];
}

export interface ForecastHistoryRow {
  id: string;
  at: string;
  probabilities: Record<Horizon, number>;
  p6: number;
  likelyStartUtc: string | null;
  likelyEndUtc: string | null;
  interval: string | null;
  outcome: string;
  outcomes: Record<Horizon, boolean> | null;
  brier: number | null;
  timingErrorMinutes: number | null;
  modelVersion: string;
  datasetVersion: string;
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

export interface HistoricalResearchEvent {
  id: string;
  eventDate: string;
  datePrecision: "day" | "hour" | "exact";
  eventTimeUtc?: string;
  classification: "inferred_reset" | "reset_mechanism_change";
  verificationState: "inferred";
  scope: "unknown" | "all_accounts" | "paid_plans" | "selected_plans";
  title: string;
  summary: string;
  evidenceGrade: "A" | "B" | "C" | "D";
  cause: {
    assessment: string;
    confidence: "confirmed" | "attributed" | "hypothesis" | "unknown";
    rationale: string;
  };
  detectionSignals: string[];
  contradictions: string[];
  sources: Array<{
    canonicalUrl: string;
    publicationTimeUtc: string;
    title: string;
    provenance:
      | "official_status"
      | "official_announcement"
      | "official_support"
      | "official_repository_staff"
      | "public_report";
    role: "primary" | "corroborating";
  }>;
  firstRecordedAtUtc: string;
  lastReviewedAtUtc: string;
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
