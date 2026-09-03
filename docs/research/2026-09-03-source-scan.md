# Daily source scan for September 3, 2026

**Research cutoff:** `2026-09-03T09:21:16Z`  
**Prior cutoff:** `2026-09-02T09:33:30Z`

This scan keeps observer-confirmed transitions, inferred resets, promises,
banked resets, purchased instant resets, usage credits, incidents, mechanism
changes, and public contradictions separate. Public claims never become
confirmed observations. Discovery feeds and mirrors are used only for source
discovery and freshness checks; X-owned oEmbed remains the attribution and
text validator.

## Coverage

Recent monitoring covered the interval between the two cutoffs. Historical
follow-up rechecked the public-launch range from August 2025 through the
current cutoff, with focused review of the June 29 reset-plus-credit promise,
July 28 and 29, August 1, the August 8 and 10 promise thread, August 30 and 31
delivery, Business and 20X scope, reset-credit lifecycle, paid instant resets,
and staff-diagnosis gaps.

| Source | Result |
| --- | --- |
| [OpenAI Status API](https://status.openai.com/api/v2/incidents.json) | Two new records appeared after the prior cutoff: a resolved ChatGPT Work Mode high-error incident and a resolved new-account creation incident. Neither mentions Codex resets, quota restoration, granted credits, or compensation. They are negative controls, not reset evidence. |
| [Official Codex app-server documentation](https://learn.chatgpt.com/docs/app-server) | The current contract still separates named rate-limit buckets from `rateLimitResetCredits`; `account/rateLimitResetCredit/consume` is an explicit user-authorized operation and should be followed by another rate-limit read. This is mechanism evidence, not an account event. |
| [Paid weekly Work and Codex resets](https://help.openai.com/en/articles/20001507-paid-weekly-work-and-codex-rate-limit-resets) | The current Help article says eligible Plus and Pro personal accounts can purchase an immediate reset from Desktop Usage settings or the in-app weekly-limit banner. It restores both five-hour and weekly usage, then starts a new seven-day weekly window. No purchase or account event was observed. |
| [Banked Codex resets](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work) | The current Help article describes a one-time saved reset that is applied by the user, refreshes both allowances, changes the weekly date, and is distinct from an automatic/global reset. No redemption was observed. |
| [Codex 0.153.0](https://github.com/openai/codex/releases/tag/rust-v0.153.0) | The September 3 stable release adds TUI, plugin CLI, and auto-recap changes. Its relevant quota change is an earlier low-allowance warning for Plus and Team users, not a reset policy or delivery statement. |
| [Codex 0.153.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.6) and [0.153.0-alpha.5.1](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.5.1) | Both prereleases appeared after the prior cutoff with no quota or reset statement in their release bodies. |
| [Configured X profile](https://x.com/thsottiaux) | The source-native profile loaded and displayed 2,822 posts. The latest visible posts are product, culture, and model commentary. The Replies tab did not become available in the unauthenticated view, so reply completeness comes from the approved discovery feed and exact-DID mirror checks. |
| Approved discovery feed | Read only `fetchedAt=2026-09-03T09:00:32.957Z`, `sourceErrors.tibo=null`, and raw `tiboPosts`. No third-party forecast, classifier, probability, score, or assessment fields were read or imported. |
| Preferred mirror, DID `did:plc:rcaom2u2hfsm3aqab5dfvhxs` | The bounded public author feed carried all 8/8 current canonical candidates from the exact DID and matching handle. Indexing lag ranged from `3m30.459s` to `13m43.291s`. |
| Fallback mirror, DID `did:plc:rcelwndiefenpjvnm6uood4t` | The bounded public author feed carried 2/8 current candidates from the exact DID. Indexing lag ranged from `1m02.032s` to `1m39.424s` and it omitted six current candidates. |
| Public `openai/codex` issues, comments, and PRs | Six new `rate-limits`-labeled issues, visible issue discussion, and two relevant merged PRs were reviewed. They add unverified depletion, entitlement, task-interruption, and metering contradictions but no OpenAI staff diagnosis or reset observation. |
| Configured [OpenAI Community Codex discussion](https://community.openai.com/t/codex-active-tasks-now-stop-immediately-at-usage-limit-despite-documentation-saying-they-can-continue/1394462) | A September 3 topic and a short reply claim active tasks now stop at the limit despite current Help wording. This is low-trust public commentary, not a reset or provider-bound observation. |

The 8 new canonical IDs are
[`2095288416292487289`](https://x.com/thsottiaux/status/2095288416292487289),
[`2095290543790280964`](https://x.com/thsottiaux/status/2095290543790280964),
[`2095367738684489861`](https://x.com/thsottiaux/status/2095367738684489861),
[`2095368053739696143`](https://x.com/thsottiaux/status/2095368053739696143),
[`2095368608713199994`](https://x.com/thsottiaux/status/2095368608713199994),
[`2095369901137654271`](https://x.com/thsottiaux/status/2095369901137654271),
[`2095370639892955269`](https://x.com/thsottiaux/status/2095370639892955269), and
[`2095394541725794808`](https://x.com/thsottiaux/status/2095394541725794808).
Every candidate passed X-owned oEmbed validation for author `Tibo`, handle
`@thsottiaux`, canonical URL, text, and date. Two are originals and six are
replies. All eight are **nonqualifying commentary**: product or culture posts,
short replies, a gift-credit discussion, or a question that mentions a reset
without claiming delivery. The exact UTC values below are derived from the X
Snowflake IDs because oEmbed exposes the date but not a precise created-at
field.

| ID | Exact UTC | Timestamp basis | Classification |
| --- | --- | --- | --- |
| `2095288416292487289` | `2026-09-02T23:11:01.677Z` | X Snowflake ID | Original product commentary about the desktop app as a browser; nonqualifying. |
| `2095290543790280964` | `2026-09-02T23:19:28.912Z` | X Snowflake ID | Reply about a gift of 5,000 Codex credits; not a reset, banked credit, or account event. |
| `2095367738684489861` | `2026-09-03T04:26:13.609Z` | X Snowflake ID | Short reply, no reset or quota claim; nonqualifying. |
| `2095368053739696143` | `2026-09-03T04:27:28.724Z` | X Snowflake ID | Short reply, no reset or quota claim; nonqualifying. |
| `2095368608713199994` | `2026-09-03T04:29:41.040Z` | X Snowflake ID | Reply about token commentary, not a reset or limit event. |
| `2095369901137654271` | `2026-09-03T04:34:49.178Z` | X Snowflake ID | Original culture commentary; nonqualifying. |
| `2095370639892955269` | `2026-09-03T04:37:45.311Z` | X Snowflake ID | Reply asking which Codex reset, with no promise or completion statement; nonqualifying. |
| `2095394541725794808` | `2026-09-03T06:12:43.952Z` | X Snowflake ID | Reply about LLM quality; nonqualifying. |

The preferred exact-DID mirror reproduced all eight texts and timestamps. Its
observed index lags were, in descending post time, `5m31.154s`, `10m28.387s`,
`12m22.221s`, `3m30.459s`, `5m42.825s`, `6m57.915s`, `13m43.291s`, and
`6m08.326s`. The fallback exact-DID mirror reproduced only
`2095369901137654271` (`1m39.424s`) and `2095288416292487289` (`1m02.032s`);
it omitted six current candidates. Both mirrors remain corroboration and
discovery only.

## Observer and project evidence

The privacy-minimized observer sampled at `2026-09-03T09:15:05.024Z`. It
reported nine published resets, 60% weekly usage, an unchanged provider anchor
of `2026-09-07T02:28:25Z`, one available unredeemed banked reset granted August
22, and no pending publication. No exhausted-to-available or near-zero meter
transition occurred after the August 31 partial adjustment. There is no tenth
confirmed reset. The project still has nine `verified-observation` issues, two
approved public sources, and 32 pending-review sources.

[Pending issue #43](https://github.com/KyleStay/codex-reset-monitor/issues/43)
remains excluded from forecasting until maintainer review. The account-level
August 30 and 31 report still lacks a complete recipient denominator and exact
provider receipt.

## New public repository signals

The six new `openai/codex` issues labeled `rate-limits` are useful as
unverified contradictions, not reset evidence:

- [#42482](https://github.com/openai/codex/issues/42482) reports a built-in
  `gpt-image-2` request returning `INSUFFICIENT_BALANCE` while the account
  reports 21% weekly Codex usage remaining. Regular Codex tasks reportedly
  work, suggesting a separate entitlement or meter path.
- [#42475](https://github.com/openai/codex/issues/42475) asks that an active
  conversation not stop when its available token allowance is insufficient.
  It is a task-interruption report, not a reset claim.
- [#42464](https://github.com/openai/codex/issues/42464) reports a Windows
  Desktop task stuck on an unsupported browser wait for roughly 14 hours and
  alleges five-hour and weekly depletion while inactive. It supplies no
  provider ledger or staff diagnosis.
- [#42448](https://github.com/openai/codex/issues/42448) compares two Pro 20X
  runs in the same displayed 11% usage band and claims substantially different
  token-weighted work. This is an unverified account-level metering claim.
- [#42420](https://github.com/openai/codex/issues/42420) reports a long Desktop
  task that consumed substantial work but failed its deployment target. It is
  task reliability context, not reset or quota-delivery evidence.
- [#42416](https://github.com/openai/codex/issues/42416) reports a UI state with
  five-hour allowance remaining while the weekly allowance is exhausted. This
  is a display and split-bucket enforcement contradiction.

Relevant merged changes include [#42358](https://github.com/openai/codex/pull/42358),
which extends rate-limit reads with optional usage capabilities and a
lightweight polling path, and [#42372](https://github.com/openai/codex/pull/42372),
which adds a Luna Reserve fallback after an authoritative ordinary-usage
exhaustion read. Both are mechanism and UI changes, not reset events. Visible
issue discussion and comments added no OpenAI-owned diagnosis. The configured
[Community topic](https://community.openai.com/t/codex-active-tasks-now-stop-immediately-at-usage-limit-despite-documentation-saying-they-can-continue/1394462)
and its reply provide another low-trust report of active-task interruption;
the [rolling-cap feature request](https://community.openai.com/t/remove-the-rolling-5-hour-codex-cap/1394464)
does not report a reset.

## Historical leads and ledger decision

No new source evidence closes the June 29 promise, July 28 and 29 or August 1
inferred records, the August 8 and 10 promise thread, Business or 20X scope,
or the staff-diagnosis gap. The canonical [August 31 completion
statement](https://x.com/thsottiaux/status/2094252447271366730) and
[issue #42224](https://github.com/openai/codex/issues/42224) continue to support
only a Grade C, day-precision inferred reset for at least some paid accounts.
The local observer's August 31 `23%` to `11%` partial adjustment with an
advanced anchor remains a direct contradiction to universal delivery. No new
inferred event, confirmed observation, cause attribution, or correction was
added in this scan.

The two current Status records do not change the incident ledger. The official
Help and app-server pages continue to document distinct automatic, banked, and
paid-reset mechanisms, but documentation is not evidence that any account
reset occurred.

## Point-in-time-safe pattern audit

Only evidence public, discovered, or approved before each evaluated cutoff is
compared with later outcomes. The eight new social records, six new issues,
their post-cutoff discussion, the two merged mechanism PRs, the new 0.153.0
release, and the September 3 Community reports were unavailable to the prior
cutoff. They cannot rewrite earlier forecasts or snapshots.

| Pattern | Exact sample, range, classes, and cutoff | Support, contradiction, grade, and change |
| --- | --- | --- |
| Provider-owned bounded transition | `n=9` verified observations, August 8 to 29, plus the nonqualifying August 31 partial adjustment carried through the current cutoff; observer meters, access state, provider anchors, and credit state. | No tenth transition occurred. Usage is 60%, the September 7 anchor is unchanged, and the banked reset remains available. **Grade A transition gate, D population; unchanged as the strongest predictor.** |
| Attributed future and completed wording | `n=2` paired August 30 to 31 records, canonical X and oEmbed plus discovery metadata, followed by observer and public evidence through the current cutoff. | The promise preceded the completion claim by `7h09m50.051s`. The local account did not show a full transition, while #42224 reports one account-level restoration. **Grade A attribution, C directionality, D population delivery; unchanged for universal delivery.** |
| Original posts versus replies | `n=8` new candidates, September 2 to 3: two originals and six replies; X/oEmbed, approved feed, and two exact-DID mirrors. | All eight canonical checks passed and all were nonqualifying. Preferred mirror coverage was 8/8; fallback coverage was 2/8. **Grade A attribution, B current discovery, D completeness; validation sample strengthened, predictive value unchanged.** |
| Hard reset versus banked credit | `n=1` local banked reset tracked across four later hard-reset transitions and through the current sample; observer metadata, current official documentation, and public claims. | The credit remains available and unredeemed; no new redemption receipt exists. **Grade A local distinction, D breadth; unchanged.** |
| Paid instant reset versus other capacity | `n=1` official Help mechanism record plus public surface reports and the current app-server contract; no purchase receipt. | Documentation supports immediate user-triggered restoration of both allowances, but no purchase observation exists. The new image-entitlement report is a separate-path contradiction. **Grade A mechanism, D uptake; unchanged.** |
| Incident chronology and reset linkage | `n=17` inherited Codex/reset contexts, June 3 to August 29, plus two post-cutoff nonqualifying Status records; official Status phases, observer events, attributed posts, and public reports. | The new Work Mode incident had no reset or compensation language; the account-creation incident is unrelated. **Grade A chronology, D linkage; unchanged as a negative control.** |
| Public clustering and contradictions | `n=6` new rate-limit-labeled issues, visible issue discussion, and two configured Community topics, September 2 to 3; public claims only. | Depletion, split-bucket, entitlement, metering, and active-task interruption reports gained current examples, but no provider-bound sample, independent receipt, prevalence estimate, or staff-owned cause. **Grade B divergence, D prevalence and cause; contradiction coverage strengthened, predictive value unchanged.** |
| Discovery and mirror freshness | `n=8` current candidates; feed fetched at `2026-09-03T09:00:32.957Z`; exact-DID mirror reads before the cutoff. | Preferred coverage was 8/8 with `3m30.459s` to `13m43.291s` lag. Fallback coverage was 2/8 with `1m02.032s` to `1m39.424s` lag and six omissions. **Grade B freshness, D completeness; preferred remains strong, fallback remains incomplete.** |
| Reset gaps, cooldown, UTC time, and weekday | `n=9` observations, August 8 to 29, yielding eight gaps: `11h09m42.937s`, `51h29m50.496s`, `55h20m37.071s`, `170h25m58.932s`, `86h58m44.404s`, `37h26m14.123s`, `50h12m38.541s`, and `54h31m03.567s`; current cutoff. | No new confirmed gap exists. The sample remains too small and heterogeneous for a cadence, cooldown, UTC-hour, or weekday rule. **Grade D; unchanged.** |

## Predictors, failed signals, and next tests

The strongest predictor remains a bounded provider-owned meter or access
transition paired with a materially advanced stable provider anchor. Credit
state distinguishes a hard reset from a banked redemption for the observed
account. Canonical promise or completion wording identifies a watch window and
attributed scope, but independent provider evidence still decides delivery.

Signals that failed or remain too sparse include cadence, weekday, UTC hour,
cooldown, milestone context alone, incidents without quota language, mirror
text without canonical validation, anchor movement without a qualifying usage
transition, display changes without a provider-bound event, release/UI/API
changes alone, and public reports without provider bounds. The new active-task
and split-bucket reports describe contradictions, not reset timing or cause.
Nine confirmed events and eight heterogeneous gaps remain too small for a
defensible timing rule.

Since the prior cutoff, the durable changes are an additional eight validated
but nonqualifying Tibo records, two nonqualifying Status records, stable 0.153.0
rate-limit warning behavior, the #42358 and #42372 mechanism changes, six new
rate-limit-labeled issues, and two low-trust Community topics. None changes
confirmed counts, historical labels, or cause attribution. No universal
delivery proof, completed banked-reset redemption, staff diagnosis, source
correction, or model promotion qualified.

Next observable tests are:

1. Follow the September 7 private provider anchor for a qualifying meter or
   enforcement transition, keeping the August 31 partial adjustment separate.
2. Seek another independent August 31 recipient or nonrecipient with old and
   new usage, anchor, plan, bucket, credit count, and UTC bounds.
3. Capture a paid instant reset with explicit purchase consent, checkout time,
   next request, both allowance states, and the new weekly anchor.
4. Capture a banked redemption with before-and-after five-hour and weekly
   anchors, explicit consent, credit-count change, and enforcement recovery.
5. Seek staff diagnosis for #42416, #42448, #42464, #42475, and #42482 without
   retaining private diagnostics; separately test the active-task behavior
   against the current Help wording.
6. Continue the June 29, July 28 and 29, August 1, Business, 20X, and
   recipient-breadth work without changing earlier snapshots.

## Deterministic refresh

The live refresh generated dataset
`events-9-cutoff-2026-09-03-9a445484` and forecast
`fc_20260903092008`. It retained nine verified observations, two official
incidents, and two approved public sources with healthy collection, zero
rejected records, and zero duplicates. The 32 pending-review sources remain
forecast-ineligible.

All horizons remain `1%`. The likely interval remains
`2026-09-05T21:27:55Z` through `2026-09-06T00:27:55Z`, confidence D. Two
September 1 forecasts matured negative, increasing the performance sample
from 28 to 30 and improving both the model and baseline Brier score from
`0.09529642857142855` to `0.08894999999999999`. No model was promoted, and no
historical feature snapshot was rewritten.
