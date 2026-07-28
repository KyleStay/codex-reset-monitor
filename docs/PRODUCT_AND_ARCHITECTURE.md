# Codex Reset Monitor: product and architecture

Last verified: 2026-07-28

## Current direction

The live product uses a recurring Codex research agent, GitHub Pages, Actions,
Issues, and repository-backed JSON. It contains no demonstration observations.
OpenAI does not expose a public feed of individual Codex account reset times, so
real reset evidence must come from explicit user observations. The system keeps
those observations distinct from official service incidents and approved
public-source context.

## Evidence and trust

- **Confirmed observation:** a public GitHub reset issue to which a repository
  maintainer added `verified-observation`.
- **Correction:** changed content from a previously verified issue, recorded
  with a new content hash and append-only audit entry.
- **Incident:** an official OpenAI Status record. It is context, not a reset.
- **Public signal:** minimal metadata from an issue carrying
  `approved-public-source`.
- **Forecast:** a point-in-time experimental estimate.

GitHub authentication prevents anonymous form flooding. The collector does not
copy submitter identity. Each observation receives a trust weight capped at
0.6, and duplicates in the same surface/time-zone/15-minute bucket collapse to
one record. One report cannot produce a high-confidence forecast.

## Architecture

```text
Official public sources    verified / approved GitHub Issues
         |                              |
 daily research agent       issue parser + label-event audit
         |                              |
         +-- adapters + validation + normalization + hashing --+
                                      |
                     repository-backed versioned JSON
                                      |
                 point-in-time features + simple forecast
                                      |
              outcome scoring + source/job health + RSS
                                      |
                    static Next.js -> GitHub Pages
```

Collectors, validation, feature generation, forecasting, scoring, and
presentation remain separate modules. The GitHub issue adapter can be replaced
with a database/API later without changing the forecast contract.

## Zero-data behavior

With no verified reset observations, the system publishes the declared prior:

| Horizon | Probability |
| --- | ---: |
| 1 hour | 4% |
| 3 hours | 12% |
| 6 hours | 22% |
| 12 hours | 39% |
| 24 hours | 63% |

This is a broad heuristic, not trained performance. The UI shows confidence D,
states that there is no verified history, and publishes no likely time range.
The prior is not adjusted by official incidents.

## Free-hosting verification

| Capability | Selected service | Verified behavior | Limitation / safe degradation |
| --- | --- | --- | --- |
| Public site | GitHub Pages | Public repository Pages and custom Actions workflow | Last successful artifact remains available after a failed refresh. |
| Daily research and refresh | Recurring local Codex agent | Can browse approved public sources, review evidence, run deterministic code, and publish through authenticated Git | Depends on the configured host, Codex availability/usage, credentials, and a clean checkout; failures leave the prior site intact. |
| Test and deploy | GitHub Actions | Push-triggered standard hosted runners are free for public repositories | Actions does not gather evidence or modify datasets; the last successful artifact remains available after failure. |
| Observation input | GitHub Issue Forms | Structured required fields in public repositories | Requires a GitHub account; forms are public preview. |
| Administrative protection | GitHub repository permissions | Only collaborators can apply labels or dispatch workflows | Public users can read the audit queue but cannot approve records. |
| Persistent data and rollback | Git repository | Versioned JSON, issue history, commit history | Repository scale is suitable only for a small public dataset; migrate behind interfaces if it grows materially. |

No payment card or paid service is required by the public site architecture,
and the deployed application makes no AI API calls. The daily agent uses the
operator's existing Codex access and is therefore not a zero-compute-cost
guarantee. GitHub documents standard hosted Actions runners as free for public
repositories.

Primary references:

- https://docs.github.com/actions/concepts/billing-and-usage
- https://docs.github.com/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema
- https://status.openai.com/api/v2/incidents.json

## Source contracts

Official and approved public sources retain adapter ID, provenance,
publication/retrieval time, canonical URL, minimal excerpt, metadata, normalized
features, and content hash. Reset observations retain UTC limit/reset times,
stated time zone, broad surface and tier, detection method, confidence, capped
trust, verification time, source issue URL/number, content hash, and correction
audit. Prompts, responses, code, credentials, cookies, tokens, private links,
screenshots, logs, and copied GitHub author identity are excluded.

## Forecast and evaluation gates

The baseline uses only observations verified by the forecast cutoff. At least
two valid events are required to calculate a cycle and likely interval. At least
20 are required before candidate evaluation can be considered for promotion.
Historical forecasts keep their original probabilities and version IDs.
Completed 24-hour windows are scored with a Brier score; precision, recall,
false alarms, misses, timing error, calibration, and sample count are displayed
when calculable. Missing metrics render as unavailable, never as invented
values.

Candidate evaluation must use a time-aware holdout and beat both the active
model and schedule baseline without unacceptable calibration, false-alarm, or
missed-event regression. Unfavorable results remain public.
