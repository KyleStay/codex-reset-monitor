# Daily source scan for September 2, 2026

**Research cutoff:** `2026-09-02T09:33:30Z`  
**Prior cutoff:** `2026-09-01T09:37:31Z`

This scan keeps observer-confirmed transitions, inferred resets, promises,
banked resets, purchased instant resets, usage credits, incidents, mechanism
changes, and public contradictions separate. Public claims never become
confirmed observations.

## Coverage

Recent monitoring covered the interval between the two cutoffs. Historical
follow-up rechecked the public-launch range from August 2025 through the current
cutoff, with focused review of the June 29 reset-plus-credit promise, July 28
and 29, August 1, the August 8 and 10 promise thread, August 30 and 31 delivery,
Business and 20X scope, reset-credit lifecycle, paid instant resets, and
staff-diagnosis gaps.

| Source | Result |
| --- | --- |
| [OpenAI Status](https://status.openai.com/api/v2/incidents.json) | The live adapter found no new Codex-relevant incident. The retained count remains two, and neither record states that OpenAI reset usage, granted credits, or compensated accounts. |
| [Official Codex app-server documentation](https://learn.chatgpt.com/docs/app-server) | The current contract still treats named rate-limit buckets, reset-credit balances, and explicit credit consumption as separate server records. A consume result must be followed by another rate-limit read. This is existing mechanism evidence, not an account event. |
| [Codex 0.152.1](https://github.com/openai/codex/releases/tag/rust-v0.152.1) | The September 1 stable patch only fixes Guardian approval policy handling. It adds no quota, credit, reset, or metering statement. |
| [Configured X profile](https://x.com/thsottiaux) | The public source-native profile loaded with 2,814 posts. Seven post-cutoff candidates were found through the configured feed. All seven passed X-owned oEmbed author, URL, text, and date validation. None concerns a reset, credit, limit change, incident, or cause. |
| Approved discovery feed | Read only `fetchedAt=2026-09-02T08:58:37.225Z`, `sourceErrors.tibo=null`, and raw `tiboPosts`. No forecast, classification, assessment, probability, signal, or derived score was read. |
| Preferred mirror, DID `did:plc:rcaom2u2hfsm3aqab5dfvhxs` | The bounded public Author Feed carried 7/7 current candidates. Indexing lag ranged from `3m37.302s` to `15m02.301s`. |
| Fallback mirror, DID `did:plc:rcelwndiefenpjvnm6uood4t` | The bounded feed carried 3/7 current candidates. Lag ranged from `1m22.509s` to `3m20.502s`; it omitted four of the five replies. |

The seven new canonical IDs are
[`2094826808114057246`](https://x.com/thsottiaux/status/2094826808114057246),
[`2094826841622348106`](https://x.com/thsottiaux/status/2094826841622348106),
[`2094939684015317363`](https://x.com/thsottiaux/status/2094939684015317363),
[`2094988223407886801`](https://x.com/thsottiaux/status/2094988223407886801),
[`2094988714422542469`](https://x.com/thsottiaux/status/2094988714422542469),
[`2095004327597506707`](https://x.com/thsottiaux/status/2095004327597506707), and
[`2095021298854588615`](https://x.com/thsottiaux/status/2095021298854588615).
They contain two originals and five replies about merchandise, product and
model teasing, and brief commentary. All seven are **nonqualifying
commentary**. Exact UTC is Snowflake-ID-derived because oEmbed exposes the date
but not precise created-at values:

| ID | Exact UTC | Timestamp basis |
| --- | --- | --- |
| `2094826808114057246` | `2026-09-01T16:36:45.711Z` | X Snowflake ID |
| `2094826841622348106` | `2026-09-01T16:36:53.700Z` | X Snowflake ID |
| `2094939684015317363` | `2026-09-02T00:05:17.423Z` | X Snowflake ID |
| `2094988223407886801` | `2026-09-02T03:18:10.116Z` | X Snowflake ID |
| `2094988714422542469` | `2026-09-02T03:20:07.183Z` | X Snowflake ID |
| `2095004327597506707` | `2026-09-02T04:22:09.654Z` | X Snowflake ID |
| `2095021298854588615` | `2026-09-02T05:29:35.917Z` | X Snowflake ID |

## Observer and project evidence

The privacy-minimized observer sampled at `2026-09-02T09:20:25.746Z`. It
reported nine published resets, 48% weekly usage, an unchanged provider reset
time of `2026-09-07T02:28:25Z`, one available banked reset granted August 22,
and no pending publication. The credit remains unredeemed. No
exhausted-to-available or near-zero meter transition occurred after the August
31 partial adjustment. There is no tenth confirmed reset.

The project still has nine `verified-observation` issues and two approved
public sources. [Pending issue #43](https://github.com/KyleStay/codex-reset-monitor/issues/43)
records a new account-level August 30 and 31 reset report. It remains excluded
from forecasting until a maintainer reviews it, and its September 2 discovery
time bars it from earlier feature snapshots.

## New public repository signals

Six post-cutoff `openai/codex` records supplied useful but unverified reset,
bucket, entitlement, and depletion context:

- [#42105](https://github.com/openai/codex/issues/42105) requests access to the
  paid instant-reset purchase from mobile. It is one user's product-surface
  claim, not a purchase or completed reset observation.
- [#42108](https://github.com/openai/codex/issues/42108) reports that Windows
  Desktop blocked Spark when the general bucket was exhausted, while the same
  account and model worked through CLI. A second Pro account later reported the
  same split-bucket gating symptom. This strengthens a display and enforcement
  contradiction, not a reset.
- [#42127](https://github.com/openai/codex/issues/42127) reports rapid Pro 20X
  weekly depletion after a recent reset. A second account added a similar
  comparison. Neither report supplies a server ledger or staff diagnosis.
- [#42153](https://github.com/openai/codex/issues/42153) reports that Desktop
  presented Luna as selected after general exhaustion but blocked the next
  request. This is an entitlement and messaging contradiction.
- [#42218](https://github.com/openai/codex/issues/42218) reports a five-hour
  allowance starting at 89% remaining after more than ten hours without visible
  use, while CLI and the web meter agreed and Analytics showed no activity. It
  lacks a prior server sample and cannot establish a reset failure or cause.
- [#42224](https://github.com/openai/codex/issues/42224) reports one Pro 5X
  account returning to full weekly allowance without manual redemption on both
  August 30 and 31, followed by much faster depletion after the second action.
  The August 31 account-level receipt is newly useful corroboration, but the
  report does not establish an exact UTC delivery time, banked-credit state,
  population breadth, or cause.

No reviewed issue has an OpenAI staff diagnosis. Two-account reproduction
strengthens the existence of split-bucket gating and rapid-depletion
contradictions, but not their prevalence or shared cause.

## Historical leads and ledger decision

The canonical [August 31 completion statement](https://x.com/thsottiaux/status/2094252447271366730)
said paid ChatGPT Work and Codex usage had been reset. The new #42224 report is
the first newly reviewed account-level claim that explicitly describes a full
August 31 weekly restoration and a September 7 re-anchor without manual
redemption. Together they now support a **Grade C, day-precision inferred
reset for at least some paid accounts**. The ledger records it separately from
confirmed observations and from the paid instant-reset mechanism.

The evidence does not support universal delivery. The local observer changed
from 23% to 11% used while its provider anchor advanced, which failed the full
reset gate. This is a direct delivery contradiction for one account. The
milestone cause remains attributed to Tibo, not independently confirmed.

The [June 29 promise](https://x.com/thsottiaux/status/2071740419030053227)
still lacks a canonical completion statement and a receipt denominator for the
promised hard reset and separate banked reset. July 28 and 29 and August 1 keep
their existing inferred classifications. No new bounded recipient or
nonrecipient sample changed them. The August 8 and 10 promise thread remains
future-action context for later observer evidence, not proof of broad delivery.

## Point-in-time-safe pattern audit

Only evidence public, discovered, or approved before each evaluated cutoff is
compared with later outcomes. The seven social records, six focused issue
records, two later corroborating comments, release 0.152.1, pending issue #43,
and the new inferred ledger record were unavailable to the prior cutoff. They
cannot rewrite earlier forecasts.

| Pattern | Exact sample, range, classes, and cutoff | Support, contradiction, grade, and change |
| --- | --- | --- |
| Provider-owned bounded transition | `n=9` verified observations, August 8 to 29, plus one nonqualifying August 31 partial adjustment followed through September 2; observer meters, access state, provider anchors, and credit state. | No tenth transition occurred. Usage is 48%, the September 7 anchor is unchanged, and the banked reset remains available. **Grade A transition gate, D population; unchanged as the strongest predictor.** |
| Attributed future and completed wording | `n=2` paired August 30 to 31 records, canonical X and oEmbed plus discovery metadata, followed by observer and public evidence through the current cutoff. | The promise preceded the completion claim by `7h09m50.051s`. The local account did not show a full transition, while #42224 later reported one account-level restoration. Earlier qualified independent lead times remain about `17m34s` to `51h28m`. **Grade A attribution, C directionality, D population delivery; strengthened for some-account receipt, unchanged for universal delivery.** |
| Original posts versus replies | `n=7` new candidates, September 1 to 2: two originals and five replies; X/oEmbed, the discovery feed, and two exact-DID mirrors. | All seven canonical checks passed and all were nonqualifying. The fallback omitted four replies. **Grade A attribution, B current discovery, D completeness; strengthened validation sample, unchanged predictive value.** |
| Hard reset versus banked credit | `n=1` local banked reset tracked across four later hard-reset transitions and through September 2; observer metadata, current official documentation, and public claims. | The credit remains available. #42224 says no manual redemption but lacks a before-and-after credit count. **Grade A local distinction, D breadth; unchanged.** |
| Paid instant reset versus other capacity | `n=1` official Help mechanism record updated August 31 plus one September 1 public mobile-surface request; official support and public repository evidence, current cutoff. | The official mechanism is immediate and user-triggered, but no purchase observation exists. The feature request cannot establish price or availability beyond its account. **Grade A mechanism, D uptake; unchanged.** |
| Incident chronology and reset linkage | `n=17` inherited incident/reset contexts, June 3 to August 29; official Status phases, observer events, attributed posts, and public reports, current cutoff. | No new incident appeared, and retained incidents contain no reset or compensation statement. **Grade A chronology, D linkage; unchanged as a negative control.** |
| Public clustering and contradictions | `n=6` focused issues plus two independent-account comments, September 1 to 2; public claims, current cutoff. | Separate-bucket gating and rapid-depletion claims each gained a second account. Luna entitlement, five-hour initialization, and paid-reset surface reports add different contradictions without a shared provider bound or staff diagnosis. **Grade B divergence, D prevalence and cause; strengthened.** |
| Discovery and mirror freshness | `n=7` current candidates; feed fetched at `2026-09-02T08:58:37.225Z`; exact-DID mirror reads before the cutoff. | Preferred coverage was 7/7 with `3m37.302s` to `15m02.301s` lag. Fallback coverage was 3/7 with `1m22.509s` to `3m20.502s` lag and four reply omissions. **Grade B freshness, D completeness; preferred unchanged, fallback strengthened from 1/6 to 3/7 but remains incomplete.** |
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
transition, and display changes without a provider-bound event. Nine confirmed
events and eight heterogeneous gaps remain too small for a defensible timing
rule. The growing depletion cluster has no common server ledger or staff-owned
cause.

Since September 1, the durable change is one new Grade C inferred August 31
reset for some paid accounts, based on canonical attributed completion wording
plus one later account-level report. It does not change confirmed counts or
historical model labels. Split-bucket gating and rapid-depletion contradictions
strengthened to two public accounts each. Seven newly validated Tibo records
were all nonqualifying. No completed banked-reset redemption, supported broad
cause, universal-delivery proof, correction, or model promotion qualified.

Next observable tests are:

1. Follow the September 7 private anchor for a qualifying meter or enforcement
   transition, keeping the August 31 partial adjustment separate.
2. Seek another independent August 31 recipient or nonrecipient with old and
   new usage, anchor, plan, bucket, credit count, and UTC bounds.
3. Capture a paid instant reset with explicit purchase consent, checkout time,
   next request, both allowance states, and the new weekly anchor.
4. Capture a banked redemption with before-and-after five-hour and weekly
   anchors, explicit consent, credit-count change, and enforcement recovery.
5. Seek staff diagnosis for #42108, #42127, #42218, and #42224 without retaining
   private diagnostics.
6. Continue the June 29, July 28 and 29, August 1, Business, 20X, and
   recipient-breadth work without changing earlier snapshots.

## Deterministic refresh

The live refresh generated dataset
`events-9-cutoff-2026-09-02-9a445484` and forecast
`fc_20260902092058`. It retained nine verified observations, two official
incidents, and two approved public sources with healthy collection, zero
rejected records, and zero duplicates. Pending issue #43 and the inferred
ledger record are forecast-ineligible.

All horizons remain `1%`. The likely interval remains
`2026-09-05T21:27:55Z` through `2026-09-06T00:27:55Z`, confidence D.
Performance remains `n=28`; model and baseline Brier scores both remain
`0.09529642857142855`. No model was promoted, and no historical feature
snapshot was rewritten.
