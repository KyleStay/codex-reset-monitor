# Codex Reset Monitor project instructions

Read `/Users/kyle/.codex/AGENTS.md` before repository work. Its GitHub
authentication and sandbox-access rules apply here.

## Repository and publishing

- The public remote is `https://github.com/KyleStay/codex-reset-monitor`.
- The public site is `https://kylestay.github.io/codex-reset-monitor/`.
- A recurring Codex agent follows `docs/DAILY_AGENT.md` to research approved
  sources, backfill source-backed historical reset research and possible causes,
  improve the product when needed, refresh deterministic data and forecasts,
  verify, commit, and push.
- All research, maintenance, source collection, data refreshes, forecast
  calculation, scoring, tests, verification, issue review, commits, and pushes
  run in the agent's local Codex workspace. Never delegate any of that work to
  GitHub Actions.
- The only permitted GitHub Actions workflow is
  `.github/workflows/pages.yml`. It may trigger only when a finished commit is
  pushed to `main`, and may only check out that commit, install build
  dependencies, build the static site, upload the Pages artifact, and deploy
  GitHub Pages.
- Never add another workflow or add `schedule`, `workflow_dispatch`,
  `pull_request`, research, `update:data`, tests, repository writes, issue
  mutations, forecast generation, RSS generation, commits, or pushes to the
  Pages workflow. Local `npm run verify` is the required verification gate
  before a publishing commit is pushed.
- Before editing or publishing, fetch the remote and reconcile commits with a
  fast-forward update. Never force-push over generated history.
- A sandboxed GitHub authentication, credential, keychain, or network failure
  is inconclusive. Retry the same read-only or user-authorized operation with
  narrow escalated access before reporting GitHub as unavailable.
- The installed local telemetry observer is the primary source for the
  operator's future reset observations. Manual GitHub Issue Form reports are
  optional corroboration, not an operational dependency. Only issues labeled
  `verified-observation` by a repository maintainer enter the confirmed public
  dataset. Do not add seeded or fabricated reset records.
- The local observer may call only the official Codex app-server
  `account/rateLimits/read` method. It may retain
  sampling time, quota bucket ID/name, used percentage, reset timestamp, window
  duration, exhausted state, generalized plan tier, OpenAI-issued reset-credit
  count/status/grant/expiry metadata, deterministic full-reset records, and
  publication deduplication state. Retain quota samples for at most 90 days. It
  must never read or retain conversations, prompts, responses, code, thread or
  session history, logs, account identifiers, credentials, or device locale.
  A deterministic exhausted-to-available transition, or a near-zero
  used-percentage transition with a reset-timestamp advance, may be published by
  the authenticated maintainer as a `verified-observation` issue. Partial quota
  adjustments and reset credits must not be labeled as completed full resets.
  No other local signal may self-verify.
- Historical resets should be reconstructed as best-effort, source-backed
  inferences under `docs/HISTORICAL_RESEARCH.md`; do not wait for manual reports.
  Preserve date precision, evidence grade, scope, contradictions, and cause
  uncertainty. Inferred records remain distinct from confirmed observations.
- An agent may classify evidence but must never invent probabilities, promote a
  model, convert public chatter into a confirmed reset, or guess an account
  identity. Forecast calculations remain deterministic repository code.

## Verification

- Run `npm run verify` for code changes.
- After a push, monitor the automatically triggered **Deploy GitHub Pages** run
  and check the live Pages routes and metadata over HTTPS. Do not manually
  dispatch a workflow.
