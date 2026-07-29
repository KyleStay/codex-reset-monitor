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
- Reset reports come from GitHub Issue Forms. Only issues labeled
  `verified-observation` by a repository maintainer enter the public dataset.
  Do not add seeded or fabricated reset records.
- An agent may classify evidence but must never invent probabilities, promote a
  model, convert public chatter into a confirmed reset, or guess an account
  identity. Forecast calculations remain deterministic repository code.

## Verification

- Run `npm run verify` for code changes.
- After a push, monitor the automatically triggered **Deploy GitHub Pages** run
  and check the live Pages routes and metadata over HTTPS. Do not manually
  dispatch a workflow.
