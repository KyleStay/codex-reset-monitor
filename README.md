# Codex Reset Monitor

An unofficial, open-source monitor for user-observed Codex usage-limit resets.
It publishes transparent probabilities for another observed reset within 1, 3,
6, 12, and 24 hours.

Forecasts are experimental estimates, never guarantees. The public site contains
no seeded or fabricated observations.

## Live data

- **Reset observations:** public GitHub Issue Forms reviewed by a repository
  maintainer. Only issues carrying `verified-observation` enter the dataset.
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
  time interval.

The daily agent gathers compliant evidence and runs the repository's
deterministic pipeline. GitHub Issues provide the review queue, and GitHub
Actions only tests and deploys the committed static site.

## Submit and verify a reset

1. Open the site's **Report a reset** form.
2. Review and submit the prefilled public GitHub issue.
3. A maintainer checks privacy, timestamp validity, duplication, and provenance.
4. The maintainer removes `pending-review` and adds `verified-observation`.
5. The next agent refresh validates, deduplicates, commits, and publishes the
   observation.

Editing a verified issue changes its content hash. The next collection appends a
correction entry to that observation's audit history; Git preserves the prior
dataset revision.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run update:data
npm run dev
```

Local `update:data` collects live official status and public GitHub issues.
Actions supplies its scoped repository token; local collection can use GitHub's
low-volume unauthenticated public API. An optional token may be supplied only in
the process environment for higher rate limits. Never store a token in the
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

The agent does not make up reset events or probabilities. GitHub Actions runs
on the resulting push and only tests, builds, and deploys the static site. The
generated snapshot shows collection time and source health so stale or degraded
sources are not presented as fresh.

See [operations](docs/OPERATIONS.md) and
[product and architecture](docs/PRODUCT_AND_ARCHITECTURE.md).

## Privacy

Never submit Codex prompts, responses, source code, credentials, cookies,
session tokens, account identifiers, private links, screenshots, or logs.
Reports are public GitHub issues associated with the submitter's GitHub account,
but author identity is not copied into the published dataset.

This project is not affiliated with or endorsed by OpenAI.

## License

MIT
