# Operations

## Production data flow

The deployed system has no private database and no paid AI call.

1. GitHub Issue Forms collect public reset reports and suggested source URLs.
2. Maintainers review reports in GitHub. Only `verified-observation` and
   `approved-public-source` labels authorize ingestion.
3. At 04:17 UTC every day, GitHub Actions reads labeled issues with its built-in
   repository token and reads OpenAI's public incident JSON.
4. The job validates timestamps, rejects sensitive-looking notes, caps trust,
   deduplicates 15-minute surface/time-zone buckets, preserves audit history,
   generates a forecast, scores completed outcomes, and writes source health.
5. Changed data and forecasts are committed to `main`, then GitHub Pages is
   rebuilt and deployed.

The workflow also supports manual dispatch. It fast-forwards its checkout before
collection so queued runs cannot overwrite a prior generated commit.

## Maintainer review

Pending queue:

`https://github.com/KyleStay/codex-reset-monitor/issues?q=is%3Aissue+is%3Aopen+label%3Apending-review`

For a valid reset observation:

1. Confirm both timestamps are ISO 8601 and access returned after the limit.
2. Confirm the IANA time zone and broad surface are plausible.
3. Remove any prompt, response, code, credential, token, account identifier,
   private link, screenshot, or log. Reject the issue if safe minimization is
   uncertain.
4. Search existing verified issues for a duplicate in the same surface,
   time zone, and 15-minute reset bucket.
5. Remove `pending-review`; add `verified-observation`.
6. Dispatch the Pages workflow for immediate publication, or wait for the daily
   run.

For a compliant public source, verify the canonical public HTTPS URL,
publication time, neutral title, and minimal excerpt; then replace
`pending-review` with `approved-public-source`.

GitHub repository permissions protect label changes and workflow dispatch. The
static `/admin/` page contains no embedded administrator credential.

## Local development

1. Install Node.js 22.13 or newer.
2. Run `npm install`.
3. Run `npm run update:data` to collect live official status and public,
   labeled GitHub issues.
4. Run `npm run dev`.
5. Run `npm run verify` before publishing.

The configured public repository can be collected without credentials at
GitHub's lower unauthenticated rate limit. To test another repository or obtain
higher rate limits, supply `GITHUB_REPOSITORY` and a short-lived, read-only token
in the process environment. Never place tokens in `.env*`, shell profiles,
logs, or repository files.

## Deployment

The configured production repository is
`KyleStay/codex-reset-monitor`.

1. Keep the repository public and Issues enabled.
2. Keep Pages source set to GitHub Actions.
3. Define repository variables:
   - `PUBLIC_SITE_URL=https://kylestay.github.io/codex-reset-monitor`
   - `APP_ORIGIN=https://kylestay.github.io`
4. Ensure workflow permissions allow `contents: write`, `issues: read`,
   `pages: write`, and `id-token: write`.
5. Create the labels listed below.
6. Run **Refresh data and deploy GitHub Pages** manually.
7. Verify `/`, `/performance/`, `/submit/`, `/methodology/`, `/admin/`, and
   `/feed.xml` over HTTPS.

Required labels:

- `reset-observation`
- `public-source`
- `pending-review`
- `verified-observation`
- `approved-public-source`
- `rejected`

## Scheduled-job limitations

GitHub Actions standard hosted runners are free for public repositories.
Scheduled workflows:

- can start later than the exact cron time during load;
- run from the default branch;
- may be automatically disabled after 60 days without repository activity.

The job commits a timestamped source/job snapshot when it runs, which normally
keeps the repository active. Operators should still check workflow history
monthly. If collection fails, the last valid records are retained and the
source is marked degraded; the site must not imply the source is fresh.

References:

- https://docs.github.com/actions/concepts/billing-and-usage
- https://docs.github.com/actions/reference/workflows-and-actions/events-that-trigger-workflows
- https://docs.github.com/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema

## Forecasting, scoring, and rollback

- Zero verified observations: fixed published prior, confidence D, no likely
  interval.
- One verified observation: prior remains dominant; no cycle can be inferred.
- Two to nineteen: schedule baseline only, always labeled limited history.
- Twenty or more: candidate evaluation may run, but promotion requires a
  time-aware holdout win against the active model and baseline without
  unacceptable calibration, false-alarm, or missed-event regression.

Forecast records are append-only by dataset/day ID. Outcomes are scored only
after 24 hours. Reverting a model or generated dataset uses an ordinary reviewed
Git revert or a new model-version commit; never rewrite forecast history.

## Recovery

All operational data is in Git:

- `data/observations.json`
- `data/public-sources.json`
- `data/generated/snapshot.json`
- `data/generated/forecast-history.json`
- `data/generated/job-history.json`

Recover by checking out the last known-good commit, reviewing the diff, and
publishing a new corrective commit. Do not force-push or delete the faulty
history. GitHub issues remain the source records for future reconstruction.
