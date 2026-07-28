# Daily research agent

This runbook is the production contract for the recurring Codex agent. The
agent may find and classify evidence, but repository code is the sole authority
for probability calculation, scoring, and generated forecast history.

## Safety gates

1. Read the global and repository `AGENTS.md` files completely.
2. Fetch `origin` and fast-forward `main`. If the working tree is dirty, the
   branch has diverged, or a force-push would be required, stop and report the
   blocker without changing files.
3. Never collect or reproduce prompts, responses, code, credentials, cookies,
   session tokens, account identifiers, private links, screenshots, or logs.
4. Never fabricate an observation, publication time, excerpt, model result, or
   source. Never treat a service incident or public claim as a confirmed
   personal reset.
5. Do not guess an account identity, including any account referred to only as
   "Tibo". Do not use prohibited, brittle, authenticated, or evasive scraping.
6. Do not change model code, model versions, promotion thresholds, source
   policy, or verification labels during a routine run.

## Evidence research

Read `data/source-policy.json` before browsing.

- Check OpenAI Status through the existing adapter.
- Review current issues labeled `verified-observation`; only those issues may
  become confirmed reset observations.
- Review current issues labeled `approved-public-source`; only those issues may
  enter the public-source dataset.
- Search official domains for newly published, Codex-reset-relevant
  announcements. Store only the canonical URL, publication time, neutral title,
  minimal excerpt or summary, retrieval time, relevant metadata, normalized
  features, and content hash.
- For a newly found official-domain record, create a structured public-source
  issue and apply `public-source` plus `approved-public-source`. The issue body
  must use the exact headings `Canonical URL`, `Publication time`, `Title`,
  `Minimal excerpt`, and `Source confirmation` used by the Issue Form.
- For any other potentially useful public record, create or leave it as
  `public-source` plus `pending-review`. It must not affect the forecast until a
  maintainer approves it.
- Treat public descriptions of reset behavior as public signals or pending
  review only. Do not submit them as if the agent personally observed a reset.
- Deduplicate by canonical URL and content hash before creating an issue.

## Refresh and publish

1. Run `npm run update:data` with the public repository configured. This
   collects live official status, approved sources, verified observations,
   generates point-in-time features, calculates the deterministic forecast,
   scores mature outcomes, updates source/job health, and writes RSS.
2. Inspect every changed record for provenance, timestamps, correction
   history, duplicate handling, sensitive content, and future-information
   leakage. A publication or correction known after a forecast cutoff must
   never enter that historical forecast.
3. Run `npm run verify`. If validation, tests, lint, or build fails, do not
   commit or push.
4. If the refresh is valid, commit only the intended data, generated forecast,
   RSS, and any structured source-issue effects. Use a dated
   `data: agent daily refresh` commit message. Never create an empty commit.
5. Push `main` normally. Never force-push.
6. Monitor **Test and deploy GitHub Pages** to completion. Verify the live home,
   performance, history timelines, source health, timestamp, and feed over
   HTTPS. Do not claim publication if the deployment or live check was not
   verified.

The run report must state which sources were checked, newly accepted and
pending evidence, observation/source counts, forecast changes, verification
result, commit, deployment result, live URL, and any limitations or blockers.
