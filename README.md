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
- **Forecasts:** deterministic daily snapshots committed to Git. With no
  verified observations, the site shows a documented broad prior and no likely
  time interval.

The public site and daily job use GitHub Pages, Issues, and Actions. Standard
GitHub-hosted Actions runners are free for public repositories.

## Submit and verify a reset

1. Open the site's **Report a reset** form.
2. Review and submit the prefilled public GitHub issue.
3. A maintainer checks privacy, timestamp validity, duplication, and provenance.
4. The maintainer removes `pending-review` and adds `verified-observation`.
5. The next daily or manually dispatched workflow validates, deduplicates, and
   publishes the observation.

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

## Daily deployment

[`.github/workflows/pages.yml`](.github/workflows/pages.yml) runs daily at
04:17 UTC, on pushes to `main`, and on manual dispatch. It:

1. fast-forwards a queued checkout;
2. collects verified GitHub issues and live OpenAI Status records;
3. validates, deduplicates, forecasts, and scores mature outcomes;
4. commits changed data, forecast, job history, and RSS;
5. runs tests and builds the static site;
6. deploys GitHub Pages.

GitHub notes that scheduled runs can be delayed and that schedules in inactive
public repositories may be disabled after 60 days. The generated snapshot shows
collection time and health so a stale or degraded source is not presented as
fresh.

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
