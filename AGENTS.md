# Codex Reset Monitor project instructions

Read `/Users/kyle/.codex/AGENTS.md` before repository work. Its GitHub
authentication and sandbox-access rules apply here.

## Repository and publishing

- The public remote is `https://github.com/KyleStay/codex-reset-monitor`.
- The public site is `https://kylestay.github.io/codex-reset-monitor/`.
- A recurring Codex agent follows `docs/DAILY_AGENT.md` to research approved
  sources, refresh deterministic data and forecasts, verify, commit, and push.
- GitHub Pages deploys through `.github/workflows/pages.yml`. The workflow only
  tests, builds, and deploys commits; it must not research, rewrite data, or
  create forecast commits.
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
- For deployment changes, verify the GitHub Actions run and check the live
  Pages routes and metadata over HTTPS.
