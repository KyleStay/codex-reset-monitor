PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_reset_observations` (
	`id` text PRIMARY KEY NOT NULL,
	`observation_kind` text DEFAULT 'access-restored' NOT NULL,
	`limit_reached_at_utc` text,
	`prior_sample_at_utc` text,
	`observed_reset_at_utc` text NOT NULL,
	`previous_used_percent` real,
	`current_used_percent` real,
	`previous_resets_at_utc` text,
	`current_resets_at_utc` text,
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
INSERT INTO `__new_reset_observations`("id", "observation_kind", "limit_reached_at_utc", "prior_sample_at_utc", "observed_reset_at_utc", "previous_used_percent", "current_used_percent", "previous_resets_at_utc", "current_resets_at_utc", "stated_time_zone", "preceding_forecast_id", "codex_surface", "plan_tier", "incident_ids_json", "source_ids_json", "submitter_notes", "detection_method", "verification_state", "confidence", "trust_weight", "dedupe_key", "created_at_utc", "corrected_at_utc") SELECT "id", 'access-restored', "limit_reached_at_utc", NULL, COALESCE("observed_reset_at_utc", "limit_reached_at_utc"), NULL, NULL, NULL, NULL, "stated_time_zone", "preceding_forecast_id", "codex_surface", "plan_tier", "incident_ids_json", "source_ids_json", "submitter_notes", "detection_method", "verification_state", "confidence", "trust_weight", "dedupe_key", "created_at_utc", "corrected_at_utc" FROM `reset_observations`;--> statement-breakpoint
DROP TABLE `reset_observations`;--> statement-breakpoint
ALTER TABLE `__new_reset_observations` RENAME TO `reset_observations`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `reset_observations_dedupe_idx` ON `reset_observations` (`dedupe_key`);--> statement-breakpoint
CREATE INDEX `reset_observations_state_time_idx` ON `reset_observations` (`verification_state`,`observed_reset_at_utc`);
