# Codex Reset Monitor

An unofficial, open-source experiment that records observed Codex usage-limit
resets and publishes transparent probability estimates for another reset within
1, 3, 6, 12, and 24 hours.

Forecasts are experimental estimates, never guarantees. The seeded application
is a product demonstration and makes no claim of real-world predictive skill.

## What is included

- Responsive public dashboard with reset, incident, public-signal, and immutable
  forecast timelines
- Explainable schedule baseline and statistical candidate
- Calibration, Brier score, precision/recall, false alarms, misses, timing error,
  and baseline comparison
- Privacy-minimized observation form and protected admin review workflow
- Append-only corrections, model versions, job histories, and rollback schema
- Official OpenAI Status adapter with an idempotent local fixture
- Daily GitHub Actions refresh and GitHub Pages deployment
- Cloudflare Worker + D1 write API, separated from the public static site
- RSS feed for forecast changes
- Unit, pipeline integration, exported-route, and accessibility-oriented checks

## Run locally

Requires Node.js 22.13+.

```bash
npm install
npm run dev
```

The public UI works without secrets. Write forms remain safely unavailable until
`NEXT_PUBLIC_API_BASE` points to a configured API.

Run all checks:

```bash
npm run verify
```

Refresh the current official-status snapshot and deterministic forecast:

```bash
npm run update:data
```

That command accesses `https://status.openai.com/api/v2/incidents.json`. Tests
use only the local fixture.

## Deploy

The public site is designed for a public GitHub repository and GitHub Pages.
Enable **Settings → Pages → GitHub Actions**, then run the included workflow.
It refreshes and publishes daily at 04:17 UTC and on pushes to `main`.

For submissions:

1. Create a Cloudflare D1 database on Workers Free.
2. Replace the placeholder D1 database ID in `api/wrangler.jsonc`.
3. Apply the generated migrations in `drizzle/`.
4. Store `ADMIN_KEY` and `RATE_LIMIT_HMAC_KEY` as Worker secrets.
5. Set `ALLOWED_ORIGIN` to the exact GitHub Pages origin.
6. Deploy `api/`, then set repository variable `NEXT_PUBLIC_API_BASE` to that
   Worker URL.

See [product and architecture](docs/PRODUCT_AND_ARCHITECTURE.md) and
[operations](docs/OPERATIONS.md) for the verified free-tier constraints, source
contracts, schema, retraining, rollback, privacy, and disaster recovery.

## Privacy

Never submit Codex prompts, responses, source code, credentials, cookies,
session tokens, private links, or other account contents. The project collects
event timing and broad context only. It is not affiliated with or endorsed by
OpenAI.

## License

MIT
