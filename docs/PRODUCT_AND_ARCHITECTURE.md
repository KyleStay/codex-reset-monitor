# Codex Reset Monitor: product and architecture

Last verified: 2026-07-28

## Repository assessment

The workspace was empty and was not a Git repository. There were no existing
architecture decisions or uncommitted user changes to preserve. The project now
uses strict TypeScript, React, statically exported Next.js, a Cloudflare Worker,
and D1, with
separate source ingestion, normalization, forecasting, evaluation, data access,
and presentation modules.

## Product decisions

- A reset is a user-observed return of Codex availability after a limit was
  reached. It is not an OpenAI-confirmed internal event.
- Public labels distinguish confirmed observations, inferred events,
  experimental forecasts, official incidents, approved public-source signals,
  and corrections.
- Anonymous reports remain pending until an administrator verifies them. They
  influence no high-confidence public state on their own.
- Plan tier is optional and generalized. The service never asks for prompts,
  responses, code, credentials, cookies, or account content.
- The initial candidate is an explainable logistic-style model. Promotion is
  disabled until at least 20 confirmed, temporally valid outcomes exist.
- With fewer than 20 confirmed events, every forecast says
  “Experimental—limited history.”

No product question blocks the first vertical slice. The intended “Tibo” account
is deliberately unresolved: the watchlist contains no guessed identity and only
administrator-approved canonical URLs can be added.

## Architecture

```text
OpenAI Status / approved URLs / community form
                  |
          source adapters + validation
                  |
        normalization + content hashing
                  |
      D1 event store + immutable audit trail
                  |
    point-in-time feature builder (UTC cutoffs)
                  |
 baseline + explainable statistical candidate
                  |
 forecast snapshots -> public pages / RSS / scoring
```

The public UI is generated daily and served by GitHub Pages. A small,
replaceable Worker API accepts
privacy-minimized observations, runs validation/deduplication/rate checks, and
serves the feed. D1 stores normalized records. Worker Cron Triggers run status
ingestion and forecasting; weekly retraining is gated by label count and
time-aware evaluation. Model artifacts are versioned JSON/coefficients in the
repository for the first release and can move to object storage behind the same
artifact interface later.

Admin writes require an environment-supplied secret and server-side
authorization. The demonstration deployment intentionally leaves administration
read-only unless `ADMIN_KEY` is configured. Production should replace this
bootstrap key with identity-aware access and an explicit administrator
allowlist.

## Free-hosting verification

| Capability | Selected service | Verified free allowance | Constraint / safe degradation |
| --- | --- | --- | --- |
| Public static site | GitHub Pages | Public repositories on GitHub Free; 1 GB published site; 100 GB/month soft bandwidth; 10-minute deployment timeout | Serve the last successful artifact when a refresh fails. |
| Daily data + deploy job | GitHub Actions | Standard hosted runners are free for public repositories | Scheduled jobs may be delayed and disable after 60 days without repository activity. Always show retrieval time and staleness. |
| Submission/admin API | Cloudflare Workers | 100,000 dynamic requests/day; 10 ms CPU/invocation | Fail writes closed at limits. Never auto-upgrade. |
| Database | Cloudflare D1 | 5M rows read/day, 100k rows written/day, 5 GB/account; 500 MB/database on Free | Indexed queries, bounded retention of minimal excerpts, and fail closed on exhausted daily limits. |
| Scheduled jobs | Worker Cron Triggers | 5 triggers/account on Free | Combine ingestion, scoring, and forecast work into one frequent job; weekly maintenance in one second trigger. |
| Repository deployment | GitHub Pages Actions | Custom Pages workflows are supported | Build on main and once daily; keep artifacts small. |
| Recovery | D1 Time Travel | 7 days on Free | Nightly logical export is documented; source/model artifacts stay in Git. |
| Payment behavior | Workers Free | Free is the default plan; paid is a separate $5/month minimum plan | Do not enroll in Workers Paid or configure paid-only resources. Official docs do not explicitly promise that every signup path is card-free, so card requirement remains “not independently verified.” |

Official references:

- https://docs.github.com/pages/getting-started-with-github-pages/github-pages-limits
- https://docs.github.com/actions/concepts/billing-and-usage
- https://docs.github.com/actions/reference/workflows-and-actions/events-that-trigger-workflows
- https://docs.github.com/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://developers.cloudflare.com/workers/platform/pricing/
- https://developers.cloudflare.com/workers/platform/limits/
- https://developers.cloudflare.com/d1/platform/pricing/
- https://developers.cloudflare.com/d1/platform/limits/
- https://developers.cloudflare.com/workers/configuration/cron-triggers/
- https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/

Vendor choice is replaceable: domain interfaces do not expose D1 types, status
adapters return normalized contracts, and forecasting operates on plain
point-in-time snapshots.

## Source-adapter contracts

```ts
interface SourceAdapter {
  readonly id: string;
  readonly kind: "official_status" | "approved_public_post";
  collect(cursor?: string): Promise<CollectionBatch>;
  normalize(raw: unknown, retrievedAtUtc: string): SourceRecord;
  health(): Promise<SourceHealth>;
}

interface SourceRecord {
  id: string;
  sourceAdapterId: string;
  provenance: "official" | "administrator_approved";
  publicationTimeUtc: string;
  retrievalTimeUtc: string;
  canonicalUrl: string;
  title: string;
  excerpt: string | null;
  metadata: Record<string, string | number | boolean>;
  normalizedFeatures: Record<string, number | string | boolean>;
  contentHash: string;
}
```

Adapters must use official or explicitly approved endpoints, preserve original
publication and retrieval times, store only a short necessary excerpt, hash
canonical normalized content for idempotency, retry transient failures with
bounded exponential backoff, and record every attempt in job history. An
administrator may submit a canonical URL when compliant automation is absent.
No brittle or prohibited scraping is permitted.

## Database schema

The executable Drizzle schema and generated migration are the source of truth.
Core tables are:

- `reset_observations`: stated local timezone plus UTC limit/reset times,
  surface, generalized tier, detection method, verification, confidence,
  trust weight, dedupe key, optional predecessor forecast, and creation time.
- `observation_audit`: append-only creation/correction/verification events,
  actor class, reason, and before/after JSON.
- `source_records`: provenance, adapter, publication/retrieval times, canonical
  URL, minimal excerpt, metadata/features JSON, and unique content hash.
- `incidents`: normalized official incident state and source record.
- `forecasts`: immutable horizon probabilities, likely interval, grade, feature
  snapshot, explanation factors, model/dataset versions, and forecast time.
- `forecast_outcomes`: horizon outcomes and timing error, versioned scoring time.
- `model_versions`: artifact hash, training cutoff, metrics, lifecycle state,
  and rollback parent.
- `job_runs`: job type, attempts, status, counts, error summary, and timestamps.
- `rate_limit_buckets`: rotating privacy-preserving keyed digest and counts;
  raw IP addresses are never stored.

Every mutable correction creates an audit row in the same transaction. Historical
forecasts are never updated in place.

## Phased plan and acceptance criteria

### Phase 1 — complete vertical slice

- Seeded histories render with unambiguous demo labels.
- Official Status adapter parses a terms-compliant fixture idempotently.
- Valid observation submissions persist as pending; duplicates and malformed
  values are rejected; no sensitive field is accepted.
- Authorized admin can verify or correct an observation and creates an immutable
  audit record.
- Baseline creates and persists 1/3/6/12/24-hour probabilities with an
  explanation and full feature snapshot.
- Confirmed outcomes score prior forecasts reproducibly.
- Dashboard, performance, submit, methodology, and admin routes are responsive,
  keyboard usable, theme-aware, and pass automated checks.
- Local setup and GitHub Pages + Cloudflare API deployment are reproducible from documentation.

### Phase 2 — reliable operations

- Live official source access is enabled only after endpoint/terms verification.
- Cron ingestion has retry/backoff, health display, alerting, and budget guards.
- Rate limiting uses a rotated keyed digest and administrator-configurable
  thresholds.
- Backup/restore drills and model rollback are tested.

### Phase 3 — candidate model

- At least 20 confirmed, deduplicated events exist.
- Time-aware holdout proves the candidate beats both the active model and
  schedule-only baseline on declared Brier score and timing error without an
  unacceptable calibration, missed-event, or false-alarm regression.
- Promotion and rollback are fully audited; unfavorable results remain public.
