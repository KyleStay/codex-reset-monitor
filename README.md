# Codex Reset Monitor

An unofficial, open-source monitor for automatically observed and
source-inferred Codex usage-limit resets.
It publishes transparent probabilities for another observed reset within 1, 3,
6, 12, and 24 hours.

Forecasts are experimental estimates, never guarantees. The public site contains
no seeded or fabricated observations.

## Live data

- **Reset observations:** a privacy-minimized observer on the maintainer's
  device watches official Codex quota counters and automatically records
  deterministic transitions. Optional public reports can corroborate them.
  Only issues carrying `verified-observation` enter the confirmed dataset.
- **Official incidents:** OpenAI's public Status JSON, collected directly each
  day with provenance, publication/retrieval times, canonical URL, minimal
  excerpt, normalized features, and content hash.
- **Public posts:** administrator-approved issue records carrying
  `approved-public-source`. No social account is guessed or scraped.
- **Historical research:** a validated ledger of inferred public reset events,
  possible causes, contradictions, and future detection signals. It remains
  separate from verified observations and cannot silently become training data.
- **Forecasts:** deterministic snapshots refreshed by a daily agent and
  committed to Git. With no
  verified observations, the site shows a documented broad prior and no likely
  time interval. A verified future provider reset timestamp anchors the current
  window; early out-of-cycle resets re-anchor it without teaching a false
  recurring cadence.

The daily agent gathers compliant evidence, runs the deterministic pipeline,
verifies the result, commits, and pushes from its local Codex workspace. GitHub
Issues provide the review queue. The sole GitHub Actions workflow only builds,
uploads, and deploys the committed GitHub Pages site.

## How resets are assessed

The installed local observer is the primary path for future account-level
events. It samples official quota fields every five minutes, stores a rolling
90-day local history, and automatically publishes only deterministic reset
transitions. The daily research agent independently works backward through
official and source-native public records to maintain explicitly inferred past
events. Historical inferences state their precision, evidence grade, scope,
contradictions, and cause uncertainty; they are never relabeled as confirmed.

Manual GitHub reports remain available as optional corroboration. A maintainer
checks privacy, timestamp validity, duplication, and provenance before adding
`verified-observation`.

Editing a verified issue changes its content hash. The next collection appends a
correction entry to that observation's audit history; Git preserves the prior
dataset revision.

### Automatic local observations

On macOS, the maintainer can install the five-minute observer with
`npm run observe:local:install`. It reads quota windows and OpenAI-issued queued
reset-credit metadata from `account/rateLimits/read`. It never reads aggregate
token activity, task history, prompts, responses, code, logs, screenshots,
account identifiers, or device locale. A deterministic full-reset transition
creates a deduplicated public issue carrying
`verified-observation`; the daily refresh then imports it. Run
`npm run observe:local:status` to read the sanitized local telemetry bridge.
See [operations](docs/OPERATIONS.md#local-reset-observer) for the exact data
contract, detection rules, and uninstall command. The bridge schema and consumer
contract are documented in [local telemetry bridge](docs/LOCAL_TELEMETRY_BRIDGE.md).

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run update:data
npm run dev
```

Local `update:data` collects live official status and public GitHub issues.
GitHub Actions never runs this command. Local collection can use GitHub's
low-volume unauthenticated public API. An optional token may be supplied only
in the process environment for higher rate limits. Never store a token in the
repository or an environment file.

Run the full suite:

```bash
npm run verify
```

## Daily agent and deployment

The recurring Codex agent follows
[`docs/DAILY_AGENT.md`](docs/DAILY_AGENT.md). Each run:

1. stops safely if the working tree is not clean;
2. reviews official, terms-compliant sources and the configured watchlist;
3. collects verified GitHub issues and live OpenAI Status records;
4. validates, deduplicates, forecasts, and scores mature outcomes;
5. reviews the diff, runs the verification suite, commits, and pushes;
6. checks the GitHub Pages deployment and public site.

The agent does not make up reset events or probabilities. A push to `main`
automatically triggers the only permitted workflow, which only builds, uploads,
and deploys the GitHub Pages artifact. It has no manual or scheduled trigger.
The generated snapshot shows collection time and source health so stale or
degraded sources are not presented as fresh.

See [operations](docs/OPERATIONS.md) and
[product and architecture](docs/PRODUCT_AND_ARCHITECTURE.md).

## Privacy

Never submit Codex prompts, responses, source code, credentials, cookies,
session tokens, account identifiers, private links, screenshots, or logs.
Optional reports are public GitHub issues associated with the submitter's
GitHub account, but author identity is not copied into the published dataset.

This project is not affiliated with or endorsed by OpenAI.

## License

MIT
