# Operations

## Local development

1. Install Node.js 22.13 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and replace the demonstration admin key.
4. Run `npm run db:generate` after schema changes.
5. Run `npm run dev`, then open the printed local URL.
6. Run `npm test` before a change is merged.

Seed records are visibly labeled demonstrations. Local source ingestion uses
`fixtures/openai-status.json`; it does not imply live OpenAI source access.

## Production deployment (GitHub Pages + Cloudflare Free API)

1. Push the project to a public GitHub repository.
2. In Settings → Pages, choose **GitHub Actions** as the source.
3. Push to `main` or run the included Pages workflow. Its daily schedule
   refreshes the official status data, runs the deterministic forecast, builds,
   and republishes the site.
4. Create a Cloudflare account and keep it on Workers Free. Create D1, bind it
   as `DB`, apply `drizzle/` migrations, and deploy only the write API.
5. Set `ADMIN_KEY`, `RATE_LIMIT_HMAC_KEY`, and `APP_ORIGIN` as encrypted runtime
   secrets/variables. Never commit their values.
6. Set repository variable `NEXT_PUBLIC_API_BASE` to the Worker URL. Without it,
   the static site stays fully readable and write forms report that submissions
   are unavailable.
7. Verify `/`, `/performance/`, `/submit/`, `/admin/`, and `/feed.xml`.
8. Confirm the account remains Workers Free. Do not add a payment method or
   upgrade for this project.

The daily job uses deterministic statistics, not a paid AI service. This keeps
the result reproducible and genuinely zero-cost. A future explainable model can
run in the same job, but promotion remains gated by the declared evaluation
criteria.

## Secrets

All secrets live in runtime environment configuration. `.env*`, `.dev.vars`,
tokens, exports, and local D1 files are ignored. Rotate the bootstrap admin key
after any suspected disclosure. A production public launch should replace the
bootstrap key with verified identity plus an explicit allowlist.

## Retraining and rollback

Retraining is skipped below 20 confirmed events. Above that threshold it builds
point-in-time feature snapshots using only data published, retrieved, and
verified by each forecast cutoff. Duplicates, post-hoc corrections, and future
publication times are excluded. A candidate is saved as `candidate`; it is
promoted only when declared gates pass. Rollback creates a new audit/job record
and points the active version to the selected prior artifact; no artifact or
forecast is deleted.

## Disaster recovery

- D1 Free provides seven-day Time Travel. Record a weekly restore drill.
- Export a logical, encrypted database backup at least daily to an operator-owned
  location with a documented retention policy.
- Restore into a new database, run integrity checks and forecast recomputation,
  then swap the binding. Do not overwrite the only good database.
- Git contains schema, migrations, fixtures, and model artifacts; secrets and
  raw exports do not.

## Budget and failure policy

Track Worker requests, D1 rows read/written, storage, and build minutes. At 80%
of any daily/monthly allowance, reduce ingestion frequency and serve the last
successful forecast with a stale-data notice. At the hard limit, writes and
jobs fail closed. The application must never enable a paid plan, create a
billable resource, or imply a fresh forecast after a failed job.

## Source compliance and privacy

Only official endpoints and administrator-approved canonical URLs are allowed.
Store minimal excerpts and link to the original. Never collect Codex prompts,
responses, source code, account identifiers, API credentials, cookies, session
tokens, or raw IP addresses. Delete rejected submission payloads after abuse and
audit needs expire; retain the minimal immutable decision record.
