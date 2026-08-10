# Daily research agent

This runbook is the production contract for the recurring Codex agent. The
agent owns the complete research, maintenance, verification, and publishing
loop. It may improve collectors, schemas, tests, documentation, and
presentation when needed, but repository code is the sole authority for
probability calculation, scoring, and generated forecast history.

## Safety gates

1. Read the global and repository `AGENTS.md` files completely.
2. Fetch `origin` and fast-forward `main`. If the working tree is dirty, the
   branch has diverged, or a force-push would be required, stop and report the
   blocker without changing files.
3. Never collect or reproduce prompts, responses, code, credentials, cookies,
   session tokens, account identifiers, private links, screenshots, or logs.
   The separately installed local observer is limited to the official Codex
   `account/rateLimits/read` response and the privacy-minimized quota and reset-
   credit fields documented in Operations. Do not broaden that allowlist or
   inspect aggregate usage, conversation, or session storage.
4. Never fabricate an observation, publication time, excerpt, model result, or
   source. Never treat a service incident or public claim as a confirmed
   personal reset.
5. Do not guess an account identity. Only exact canonical accounts and manual
   collection methods listed in `data/source-policy.json` may be reviewed. Do
   not use prohibited, brittle, authenticated, automated, or evasive scraping.
6. Do not weaken verification, privacy, provenance, backtesting, or model
   promotion gates. Model changes require reproducible evaluation and the
   declared promotion criteria; an agent's judgment alone is insufficient.
7. Perform the complete run in the local Codex workspace. GitHub Actions is
   prohibited for research, scheduling, source collection, issue review,
   refreshes, tests, verification, forecasts, scoring, RSS, commits, or pushes.
   Never create or dispatch a workflow for agent work.

## Evidence research

Read `data/source-policy.json` before browsing.
Read `docs/HISTORICAL_RESEARCH.md` before researching.

- Check OpenAI Status through the existing adapter.
- Review current issues labeled `verified-observation`; only those issues may
  become confirmed reset observations.
- Treat authenticated local-observer issues carrying `verified-observation` as
  confirmed only when their structured fields pass the dedicated transition
  validation. The observer can confirm either access returning after exhaustion
  or a near-zero full meter reset bounded by two samples; it never reconstructs
  past events. Treat available reset credits as queued, not completed, resets.
  Preserve scheduled versus out-of-cycle timing separately from cause. Use the
  newest future provider reset timestamp as the active forecast anchor, exclude
  out-of-cycle events from cadence estimation, and do not infer a recurring
  special-reset probability from a single event.
- Do not wait for community reports. Treat the automatic observer as the
  primary future account-level signal and make source-backed historical
  inference progress independently on every run.
- Review current issues labeled `approved-public-source`; only those issues may
  enter the public-source dataset.
- Search official domains for newly published, Codex-reset-relevant
  announcements. Store only the canonical URL, publication time, neutral title,
  minimal excerpt or summary, retrieval time, relevant metadata, normalized
  features, and content hash.
- Review configured social-watchlist accounts manually through their public,
  source-native profile and permanent status URLs. Do not use search snippets,
  inferred identities, private views, or scraped timelines as evidence.
- Treat a watchlist post as an attributed public signal even when it uses
  first-person operator language. Correlate its source-native UTC timestamp
  with independently observed reset bounds, new provider reset anchors, scope,
  and nonrecipient contradictions. It cannot by itself create a confirmed
  observation, prove account-by-account delivery, assign a confirmed cause, or
  promote a model.
- Preserve point-in-time integrity: a post discovered after a forecast cutoff
  may inform later forecasts and research, but must never be inserted into an
  earlier forecast's feature snapshot.
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
- Make bounded progress on historical backfill during every run. Search
  source-native archives and permanent URLs, not only the latest search
  results.
- Maintain `data/research-history.json` with explicit evidence class, date
  precision, scope, evidence grade, cause confidence, contradictions, source
  provenance, and future detection signals.
- Seek causes, but do not force one. Distinguish outage compensation,
  promotions, mechanism changes, plan migrations, metering/display corrections,
  and coincident incidents.
- Improve source adapters and public presentation when a durable, compliant
  source or evidence class cannot be represented correctly. Add tests for any
  new behavior.

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
4. If the refresh is valid, commit only the intended research, source data,
   generated forecast, RSS, tests, documentation, and presentation changes.
   Use a dated `data: agent daily refresh` commit message. Never create an empty
   commit.
5. Push `main` normally. Never force-push.
6. The push to `main` automatically triggers the sole permitted workflow,
   **Deploy GitHub Pages**. Monitor that deployment to completion; never
   dispatch it manually. Verify the live home, performance, history timelines,
   source health, timestamp, and feed over HTTPS. Do not claim publication if
   the deployment or live check was not verified.

The Pages workflow is a deployment transport only. It may install build
dependencies, build the static artifact, upload it, and deploy it. It must not
replace any local agent step or change repository, issue, research, dataset,
forecast, or RSS state.

The run report must state which sources and historical ranges were checked,
newly accepted and pending evidence, inferred events and cause assessments,
detection signals learned, observation/source counts, forecast changes,
verification result, commit, deployment result, live URL, and any limitations
or blockers.
