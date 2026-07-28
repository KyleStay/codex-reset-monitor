CREATE TABLE `forecast_outcomes` (
	`id` text PRIMARY KEY NOT NULL,
	`forecast_id` text NOT NULL,
	`observation_id` text,
	`outcome_1h` integer NOT NULL,
	`outcome_3h` integer NOT NULL,
	`outcome_6h` integer NOT NULL,
	`outcome_12h` integer NOT NULL,
	`outcome_24h` integer NOT NULL,
	`absolute_timing_error_minutes` integer,
	`scored_at_utc` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `forecast_outcomes_forecast_idx` ON `forecast_outcomes` (`forecast_id`);--> statement-breakpoint
CREATE TABLE `forecasts` (
	`id` text PRIMARY KEY NOT NULL,
	`forecast_at_utc` text NOT NULL,
	`p_1h` real NOT NULL,
	`p_3h` real NOT NULL,
	`p_6h` real NOT NULL,
	`p_12h` real NOT NULL,
	`p_24h` real NOT NULL,
	`likely_start_utc` text NOT NULL,
	`likely_end_utc` text NOT NULL,
	`confidence_grade` text NOT NULL,
	`feature_snapshot_json` text NOT NULL,
	`explanation_factors_json` text NOT NULL,
	`model_version` text NOT NULL,
	`dataset_version` text NOT NULL,
	`data_sufficiency_label` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `forecasts_time_idx` ON `forecasts` (`forecast_at_utc`);--> statement-breakpoint
CREATE TABLE `incidents` (
	`id` text PRIMARY KEY NOT NULL,
	`source_record_id` text NOT NULL,
	`title` text NOT NULL,
	`state` text NOT NULL,
	`impact` text NOT NULL,
	`started_at_utc` text NOT NULL,
	`resolved_at_utc` text,
	`codex_relevant` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `job_runs` (
	`id` text PRIMARY KEY NOT NULL,
	`job_type` text NOT NULL,
	`status` text NOT NULL,
	`attempt_count` integer DEFAULT 1 NOT NULL,
	`input_count` integer DEFAULT 0 NOT NULL,
	`output_count` integer DEFAULT 0 NOT NULL,
	`error_summary` text,
	`started_at_utc` text NOT NULL,
	`finished_at_utc` text
);
--> statement-breakpoint
CREATE INDEX `job_runs_type_time_idx` ON `job_runs` (`job_type`,`started_at_utc`);--> statement-breakpoint
CREATE TABLE `model_versions` (
	`id` text PRIMARY KEY NOT NULL,
	`kind` text NOT NULL,
	`artifact_hash` text NOT NULL,
	`dataset_version` text NOT NULL,
	`training_cutoff_utc` text NOT NULL,
	`metrics_json` text NOT NULL,
	`state` text NOT NULL,
	`rollback_parent_id` text,
	`created_at_utc` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `observation_audit` (
	`id` text PRIMARY KEY NOT NULL,
	`observation_id` text NOT NULL,
	`action` text NOT NULL,
	`actor_class` text NOT NULL,
	`reason` text NOT NULL,
	`before_json` text,
	`after_json` text NOT NULL,
	`created_at_utc` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `observation_audit_observation_idx` ON `observation_audit` (`observation_id`,`created_at_utc`);--> statement-breakpoint
CREATE TABLE `rate_limit_buckets` (
	`key_digest` text NOT NULL,
	`window_start_utc` text NOT NULL,
	`request_count` integer DEFAULT 1 NOT NULL,
	`expires_at_utc` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `rate_limit_bucket_key_window_idx` ON `rate_limit_buckets` (`key_digest`,`window_start_utc`);--> statement-breakpoint
CREATE TABLE `reset_observations` (
	`id` text PRIMARY KEY NOT NULL,
	`limit_reached_at_utc` text NOT NULL,
	`observed_reset_at_utc` text,
	`stated_time_zone` text NOT NULL,
	`preceding_forecast_id` text,
	`codex_surface` text NOT NULL,
	`plan_tier` text,
	`incident_ids_json` text DEFAULT '[]' NOT NULL,
	`source_ids_json` text DEFAULT '[]' NOT NULL,
	`submitter_notes` text,
	`detection_method` text NOT NULL,
	`verification_state` text DEFAULT 'pending' NOT NULL,
	`confidence` real NOT NULL,
	`trust_weight` real DEFAULT 0.15 NOT NULL,
	`dedupe_key` text NOT NULL,
	`created_at_utc` text NOT NULL,
	`corrected_at_utc` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `reset_observations_dedupe_idx` ON `reset_observations` (`dedupe_key`);--> statement-breakpoint
CREATE INDEX `reset_observations_state_time_idx` ON `reset_observations` (`verification_state`,`observed_reset_at_utc`);--> statement-breakpoint
CREATE TABLE `source_records` (
	`id` text PRIMARY KEY NOT NULL,
	`adapter_id` text NOT NULL,
	`source_kind` text NOT NULL,
	`provenance` text NOT NULL,
	`publication_time_utc` text NOT NULL,
	`retrieval_time_utc` text NOT NULL,
	`canonical_url` text NOT NULL,
	`title` text NOT NULL,
	`excerpt` text,
	`metadata_json` text NOT NULL,
	`normalized_features_json` text NOT NULL,
	`content_hash` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `source_records_content_hash_idx` ON `source_records` (`content_hash`);--> statement-breakpoint
CREATE INDEX `source_records_publication_idx` ON `source_records` (`publication_time_utc`);