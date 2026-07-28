# Codex Reset Monitor project instructions

Read `/Users/kyle/.codex/AGENTS.md` before repository work. Its GitHub
authentication and sandbox-access rules apply here.

## Repository and publishing

- The public remote is `https://github.com/KyleStay/codex-reset-monitor`.
- The public site is `https://kylestay.github.io/codex-reset-monitor/`.
- GitHub Pages deploys through `.github/workflows/pages.yml`. The workflow also
  refreshes official-status data and may commit generated forecast files to
  `main`.
- Before editing or publishing, fetch the remote and reconcile workflow-created
  commits with a fast-forward update. Never force-push over generated history.
- A sandboxed GitHub authentication, credential, keychain, or network failure
  is inconclusive. Retry the same read-only or user-authorized operation with
  narrow escalated access before reporting GitHub as unavailable.
- Do not claim the optional submission/admin write API is live unless
  `NEXT_PUBLIC_API_BASE` is configured and the deployed API has been verified.

## Verification

- Run `npm run verify` for code changes.
- For deployment changes, verify the GitHub Actions run and check the live
  Pages routes and metadata over HTTPS.
