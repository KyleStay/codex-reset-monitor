import { index, integer, real, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const resetObservations = sqliteTable("reset_observations", {
  id: text("id").primaryKey(),
  observationKind: text("observation_kind").notNull().default("access-restored"),
  limitReachedAtUtc: text("limit_reached_at_utc"),
  priorSampleAtUtc: text("prior_sample_at_utc"),
  observedResetAtUtc: text("observed_reset_at_utc").notNull(),
  previousUsedPercent: real("previous_used_percent"),
  currentUsedPercent: real("current_used_percent"),
  previousResetsAtUtc: text("previous_resets_at_utc"),
  currentResetsAtUtc: text("current_resets_at_utc"),
  statedTimeZone: text("stated_time_zone").notNull(),
  precedingForecastId: text("preceding_forecast_id"),
  codexSurface: text("codex_surface").notNull(),
  planTier: text("plan_tier"),
  incidentIdsJson: text("incident_ids_json").notNull().default("[]"),
  sourceIdsJson: text("source_ids_json").notNull().default("[]"),
  submitterNotes: text("submitter_notes"),
  detectionMethod: text("detection_method").notNull(),
  verificationState: text("verification_state").notNull().default("pending"),
  confidence: real("confidence").notNull(),
  trustWeight: real("trust_weight").notNull().default(0.15),
  dedupeKey: text("dedupe_key").notNull(),
  createdAtUtc: text("created_at_utc").notNull(),
  correctedAtUtc: text("corrected_at_utc"),
}, (table) => [
  uniqueIndex("reset_observations_dedupe_idx").on(table.dedupeKey),
  index("reset_observations_state_time_idx").on(table.verificationState, table.observedResetAtUtc),
]);

export const observationAudit = sqliteTable("observation_audit", {
  id: text("id").primaryKey(),
  observationId: text("observation_id").notNull(),
  action: text("action").notNull(),
  actorClass: text("actor_class").notNull(),
  reason: text("reason").notNull(),
  beforeJson: text("before_json"),
  afterJson: text("after_json").notNull(),
  createdAtUtc: text("created_at_utc").notNull(),
}, (table) => [
  index("observation_audit_observation_idx").on(table.observationId, table.createdAtUtc),
]);

export const sourceRecords = sqliteTable("source_records", {
  id: text("id").primaryKey(),
  adapterId: text("adapter_id").notNull(),
  sourceKind: text("source_kind").notNull(),
  provenance: text("provenance").notNull(),
  publicationTimeUtc: text("publication_time_utc").notNull(),
  retrievalTimeUtc: text("retrieval_time_utc").notNull(),
  canonicalUrl: text("canonical_url").notNull(),
  title: text("title").notNull(),
  excerpt: text("excerpt"),
  metadataJson: text("metadata_json").notNull(),
  normalizedFeaturesJson: text("normalized_features_json").notNull(),
  contentHash: text("content_hash").notNull(),
}, (table) => [
  uniqueIndex("source_records_content_hash_idx").on(table.contentHash),
  index("source_records_publication_idx").on(table.publicationTimeUtc),
]);

export const incidents = sqliteTable("incidents", {
  id: text("id").primaryKey(),
  sourceRecordId: text("source_record_id").notNull(),
  title: text("title").notNull(),
  state: text("state").notNull(),
  impact: text("impact").notNull(),
  startedAtUtc: text("started_at_utc").notNull(),
  resolvedAtUtc: text("resolved_at_utc"),
  codexRelevant: integer("codex_relevant", { mode: "boolean" }).notNull(),
});

export const forecasts = sqliteTable("forecasts", {
  id: text("id").primaryKey(),
  forecastAtUtc: text("forecast_at_utc").notNull(),
  p1h: real("p_1h").notNull(),
  p3h: real("p_3h").notNull(),
  p6h: real("p_6h").notNull(),
  p12h: real("p_12h").notNull(),
  p24h: real("p_24h").notNull(),
  likelyStartUtc: text("likely_start_utc").notNull(),
  likelyEndUtc: text("likely_end_utc").notNull(),
  confidenceGrade: text("confidence_grade").notNull(),
  featureSnapshotJson: text("feature_snapshot_json").notNull(),
  explanationFactorsJson: text("explanation_factors_json").notNull(),
  modelVersion: text("model_version").notNull(),
  datasetVersion: text("dataset_version").notNull(),
  dataSufficiencyLabel: text("data_sufficiency_label").notNull(),
}, (table) => [index("forecasts_time_idx").on(table.forecastAtUtc)]);

export const forecastOutcomes = sqliteTable("forecast_outcomes", {
  id: text("id").primaryKey(),
  forecastId: text("forecast_id").notNull(),
  observationId: text("observation_id"),
  outcome1h: integer("outcome_1h", { mode: "boolean" }).notNull(),
  outcome3h: integer("outcome_3h", { mode: "boolean" }).notNull(),
  outcome6h: integer("outcome_6h", { mode: "boolean" }).notNull(),
  outcome12h: integer("outcome_12h", { mode: "boolean" }).notNull(),
  outcome24h: integer("outcome_24h", { mode: "boolean" }).notNull(),
  absoluteTimingErrorMinutes: integer("absolute_timing_error_minutes"),
  scoredAtUtc: text("scored_at_utc").notNull(),
}, (table) => [uniqueIndex("forecast_outcomes_forecast_idx").on(table.forecastId)]);

export const modelVersions = sqliteTable("model_versions", {
  id: text("id").primaryKey(),
  kind: text("kind").notNull(),
  artifactHash: text("artifact_hash").notNull(),
  datasetVersion: text("dataset_version").notNull(),
  trainingCutoffUtc: text("training_cutoff_utc").notNull(),
  metricsJson: text("metrics_json").notNull(),
  state: text("state").notNull(),
  rollbackParentId: text("rollback_parent_id"),
  createdAtUtc: text("created_at_utc").notNull(),
});

export const jobRuns = sqliteTable("job_runs", {
  id: text("id").primaryKey(),
  jobType: text("job_type").notNull(),
  status: text("status").notNull(),
  attemptCount: integer("attempt_count").notNull().default(1),
  inputCount: integer("input_count").notNull().default(0),
  outputCount: integer("output_count").notNull().default(0),
  errorSummary: text("error_summary"),
  startedAtUtc: text("started_at_utc").notNull(),
  finishedAtUtc: text("finished_at_utc"),
}, (table) => [index("job_runs_type_time_idx").on(table.jobType, table.startedAtUtc)]);

export const rateLimitBuckets = sqliteTable("rate_limit_buckets", {
  keyDigest: text("key_digest").notNull(),
  windowStartUtc: text("window_start_utc").notNull(),
  requestCount: integer("request_count").notNull().default(1),
  expiresAtUtc: text("expires_at_utc").notNull(),
}, (table) => [
  uniqueIndex("rate_limit_bucket_key_window_idx").on(table.keyDigest, table.windowStartUtc),
]);
