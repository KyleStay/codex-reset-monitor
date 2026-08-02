# Operations

## Production data flow

The deployed system has no private database or application-time AI call. A
recurring Codex agent performs the daily research and publishing work.

1. GitHub Issue Forms collect public reset reports and suggested source URLs;
   an optional local observer can create privacy-minimized reset issues for the
   maintainer's own device.
2. Maintainers review reports in GitHub. Only `verified-observation` and
   `approved-public-source` labels authorize ingestion.
3. Each day, the agent reviews terms-compliant sources, reads labeled issues,
   and runs the live OpenAI Status adapter.
4. Deterministic code validates timestamps, rejects sensitive-looking notes, caps trust,
   deduplicates 15-minute surface/time-zone buckets, preserves audit history,
   generates a forecast, scores completed outcomes, and writes source health.
5. The agent reviews and verifies changed data, commits it to `main`, pushes,
   and checks the resulting GitHub Pages deployment.

All research, refresh, verification, and publishing decisions happen in the
local Codex workspace. The sole GitHub Actions workflow only builds and deploys
the exact finished commit pushed by the agent or a maintainer to GitHub Pages.
It never gathers evidence, runs the research pipeline or test suite, writes
repository data, handles issues, calculates forecasts, generates RSS, commits,
or pushes.

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
6. Ask the agent to refresh immediately, or wait for its next daily run.

For a compliant public source, verify the canonical public HTTPS URL,
publication time, neutral title, and minimal excerpt; then replace
`pending-review` with `approved-public-source`.

## Local reset observer

The opt-in macOS observer samples the primary Codex usage window every five
minutes. It calls only the official app-server `account/rateLimits/read`
method. It does not open Codex databases, conversations, task history, prompts,
responses, repositories, screenshots, or logs.

It stores only the sample time, used percentage, reset timestamp, window
duration, exhaustion flag, generalized plan tier, pending event, and published
deduplication keys. The state file is private to the local user at
`~/Library/Application Support/Codex Reset Monitor/local-observer.json`.
Device locale is not published; observations use UTC.

Two deterministic transitions can create an issue already carrying
`verified-observation` under the authenticated maintainer account:

- access becomes available after the observer recorded an exhausted window;
- between adjacent non-exhausted samples, usage decreases while the official
  reset timestamp advances by at least one minute. This rejects harmless
  sub-minute timestamp jitter.

The second form bounds the reset to a five-minute interval rather than
inventing a limit-reached time. Failed reads or failed GitHub publication fail
closed; a pending candidate remains in private state for the next run. Issue
keys and a repository search prevent duplicate publication.

Install or refresh the LaunchAgent:

```bash
npm run observe:local:install
```

Run a one-time read without publishing:

```bash
npm run observe:local
```

Uninstall it with `node scripts/install-local-observer.mjs --uninstall`.
Safe process output is written under `~/Library/Logs/Codex Reset Monitor/`.
Removing the LaunchAgent does not remove the private state or any public issue.
The daily data refresh remains responsible for importing verified issues into
the versioned dataset and forecast.

GitHub repository permissions protect label changes. The
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
4. Ensure workflow permissions allow `contents: read`, `pages: write`, and
   `id-token: write`.
5. Create the labels listed below.
6. Push a locally verified commit to `main`; this automatically runs
   **Deploy GitHub Pages**. Manual dispatch is intentionally unavailable.
7. Verify `/`, `/performance/`, `/submit/`, `/methodology/`, `/admin/`, and
   `/feed.xml` over HTTPS.

Required labels:

- `reset-observation`
- `public-source`
- `pending-review`
- `verified-observation`
- `approved-public-source`
- `rejected`

## Agent and deployment limitations

The daily research run depends on the configured Codex host being available,
authenticated to GitHub, and able to reach approved sources. It is not an
always-on server and its availability or model usage is not covered by GitHub
Pages' free hosting allowance. A dirty working tree, failed validation,
ambiguous evidence, or unavailable source must fail closed without a push.

GitHub Actions is used only after a push to build, upload, and deploy the Pages
artifact. It is not an agent runtime or verification service. If either the
local agent or deployment fails, the last valid site remains public.
Timestamps and source health must make stale data visible.

References:

- https://docs.github.com/actions/concepts/billing-and-usage
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
