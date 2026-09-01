# Daily source scan for September 1, 2026

**Research cutoff:** `2026-09-01T09:37:31Z`  
**Prior cutoff:** `2026-08-31T09:25:50Z`

This scan separates confirmed observer transitions, inferred resets, future
promises, banked resets, paid instant resets, usage credits, incidents,
mechanism changes, and public contradictions. It does not convert a public
claim or product document into a confirmed reset.

## Coverage

Recent monitoring covered the interval between the two cutoffs. Historical
follow-up rechecked the public-launch range from August 2025 through the current
cutoff, with focused review of the unresolved June 29 reset-plus-credit promise,
July 28 and 29, August 1, August 8 and 10, the August 31 partial adjustment,
Business scope, 20X scope, banked-credit lifecycle, and staff-diagnosis gaps.

| Source | Result |
| --- | --- |
| [OpenAI Status](https://status.openai.com/api/v2/incidents.json) | The live adapter found no new Codex-relevant incident. The retained count remains two current records, and neither contains a reset, credit, or compensation statement. |
| [Paid weekly Work and Codex rate limit resets](https://help.openai.com/en/articles/20001507-paid-weekly-work-and-codex-rate-limit-resets) | New official mechanism documentation. The source-native page payload reports `updatedAt=1788209098.219`, or `2026-08-31T20:44:58.219Z`. Eligible Plus and Pro personal accounts may buy an immediate reset that restores the applicable five-hour and weekly allowances. The next weekly period begins with the next Work or Codex request. This is distinct from a banked reset, usage credits, and an automatic global reset. Availability varies by account and billing country. |
| [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540) and [banked resets](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work) | Current Help continues to separate automatic resets, banked resets, and usage credits. A banked reset requires redemption and changes the weekly reset date. The pages do not establish an account event. |
| [Codex 0.152.0](https://github.com/openai/codex/releases/tag/rust-v0.152.0) | The stable release adds actionable rate-limit banners for usage, credits, reset actions, and plan management through PR #41742. This is a client affordance, not a backend reset or policy proof. Alpha `0.153.0-alpha.1` and `.2` have empty public release notes. |
| [Configured X profile](https://x.com/thsottiaux) | The public source-native profile showed 2,807 posts. Six post-cutoff candidates were reviewed. All six passed X-owned oEmbed checks for canonical URL, `Tibo`, `@thsottiaux`, text, and date. None concerns a reset, credit, usage-limit change, incident, or cause. |
| Approved discovery feed | Read only `fetchedAt=2026-09-01T08:59:16.421Z`, `sourceErrors.tibo=null`, and raw `tiboPosts`. It exposed six numeric candidates after the prior cutoff. No forecast, classifier, assessment, probability, or derived score was read. |
| Preferred mirror, DID `did:plc:rcaom2u2hfsm3aqab5dfvhxs` | The bounded public Author Feed carried all six current candidates. Indexing lag ranged from about `3m39.998s` to `13m50.405s`. |
| Fallback mirror, DID `did:plc:rcelwndiefenpjvnm6uood4t` | The bounded feed carried one of six current candidates, with about `2m19.307s` lag, and omitted all five replies. |

The new canonical IDs are
[`2094507935598874633`](https://x.com/thsottiaux/status/2094507935598874633),
[`2094586662798201081`](https://x.com/thsottiaux/status/2094586662798201081),
[`2094587183483211962`](https://x.com/thsottiaux/status/2094587183483211962),
[`2094588317245509959`](https://x.com/thsottiaux/status/2094588317245509959),
[`2094681132780736835`](https://x.com/thsottiaux/status/2094681132780736835), and
[`2094681510905516147`](https://x.com/thsottiaux/status/2094681510905516147).
The set contains one original and five replies. It concerns hiring, welcomes,
an API bill, product adoption, and short commentary. All six are
**nonqualifying commentary**. Exact UTC remains Snowflake-ID-derived because
oEmbed exposes dates but not precise created-at values.

## Observer and project evidence

The privacy-minimized observer sampled at `2026-09-01T09:17:12.764Z`. It
reported nine published resets, 30% weekly usage, provider reset time
`2026-09-07T02:28:25Z`, one available banked reset granted
`2026-08-22T00:20:05Z`, and no pending publication. The banked reset remains
unredeemed. No exhausted-to-available or near-zero transition followed the
prior day's `23%` to `11%` partial adjustment. The latest state is therefore a
follow-up contradiction, not a tenth reset.

The project now has nine `verified-observation` issues and two approved public
sources. [Issue #42](https://github.com/KyleStay/codex-reset-monitor/issues/42)
records the new official paid-reset mechanism with classification
`mechanism_change`. The source schema now carries an explicit classification.
Only `completed_hard_reset` and `promised_future_reset` may enter the approved
reset-signal feature. Mechanism, credit, incident, and nonqualifying records
remain public evidence but do not move that feature. Existing approved issue
#3 was backfilled as `completed_hard_reset`.

## New public repository signals

Eight post-cutoff `openai/codex` issue records were reviewed, representing seven
unique contexts because #42010 duplicates #42007:

- [#41827](https://github.com/openai/codex/issues/41827) alleges an unauthorized
  banked-reset redemption. It adds a second consent failure report but supplies
  no independently verified provider transition or staff resolution.
- [#41957](https://github.com/openai/codex/issues/41957) compares two Plus tasks
  and reports a much larger five-hour and weekly burn in the later task. It is a
  detailed single-account accounting claim, not reset evidence.
- [#41965](https://github.com/openai/codex/issues/41965) alleges Work-to-Codex
  misrouting and asks for allowance restoration. It does not report a completed
  reset or provider bound.
- [#41968](https://github.com/openai/codex/issues/41968) reports a switch from
  five-hour/weekly display to a monthly allowance followed by rapid depletion.
  One same-issue reply reports similar symptoms, but no staff diagnosis or
  common provider anchor exists.
- [#41969](https://github.com/openai/codex/issues/41969) reports rapid weekly
  depletion plus disappearance of a banked reset and Luna reserve without an
  intentional redemption. It is a ledger and entitlement contradiction.
- [#42007](https://github.com/openai/codex/issues/42007) and duplicate
  [#42010](https://github.com/openai/codex/issues/42010) report a five-hour meter
  moving 0% to 100% while the weekly meter moved one percentage point. One
  author and duplicated content count as one context.
- [#42015](https://github.com/openai/codex/issues/42015) reports conversation
  access restrictions despite visible remaining allowances. It spans several
  weeks and lacks a new reset or staff-owned cause.

These reports strengthen accounting, consent, bucket, entitlement, and
display-enforcement contradictions. They do not establish a shared reset,
population prevalence, or confirmed cause.

## Historical leads

The [June 29 promise](https://x.com/thsottiaux/status/2071740419030053227)
still has no canonical completion statement or account-level denominator for
either the promised hard reset or the separate banked reset. Public missing-
credit reports remain contradictory.

The recovered [July 28](https://x.com/thsottiaux/status/2081940052154933696),
[July 29](https://x.com/thsottiaux/status/2082317452755751098), and
[August 1](https://x.com/thsottiaux/status/2083395449814229287) canonical posts
remain attributed completed-action statements with incomplete delivery breadth.
No new provider-bound recipient or nonrecipient set qualified. The August 8 and
10 promise thread remains future-action context for later observer transitions,
not independent proof of universal delivery.

## Point-in-time-safe pattern audit

Only evidence public, discovered, or approved before each evaluated cutoff is
compared with later outcomes. The six new social records, eight issue records,
official paid-reset article, and issue #42 were unavailable to the prior
forecast and cannot rewrite it.

| Pattern | Exact sample, range, classes, and cutoff | Support, contradiction, grade, and change |
| --- | --- | --- |
| Provider-owned bounded transition | `n=9` verified observations, August 8 to 29, plus one nonqualifying August 31 partial adjustment followed through the current cutoff; observer meters, access state, reset timestamps, anchors, and credit state. | No tenth transition occurred. Usage is now 30% with the September 7 anchor and the credit still available. **Grade A transition gate, D population; unchanged as the strongest predictor, strengthened as a fail-closed control.** |
| Attributed future and completed wording | `n=2` paired August 30 to 31 reset-action records, canonical X/oEmbed and discovery metadata, plus later observer state through the current cutoff. | The promise preceded the completed-action claim by `7h09m50.051s`, but no qualifying independent transition occurred in that interval. Earlier qualified independent lead times remain about `17m34s` to `51h28m`. **Grade A attribution, C directionality, D delivery; unchanged.** |
| Original posts versus replies | `n=6` new candidates, August 31 to September 1: one original and five replies; X/oEmbed, discovery feed, and two mirrors. | All canonical checks passed and all records were nonqualifying. The fallback omitted all five replies. **Grade A attribution, B current discovery, D completeness; strengthened validation sample, unchanged predictive value.** |
| Hard reset versus banked credit | `n=1` local banked reset tracked across four later hard-reset transitions and through September 1; observer metadata, current Help, and public claims. | The credit remains available. New #41827 and #41969 allege unauthorized redemption or disappearance without an independent provider bound. **Grade A local distinction, D breadth; strengthened contradiction coverage, unchanged mechanism conclusion.** |
| Paid instant reset versus other capacity | `n=1` official Help mechanism record updated August 31, corroborated by one stable-release UI affordance on September 1; official support and repository release evidence, current cutoff. | A paid instant reset is immediate, user-triggered, cannot be banked, and changes the weekly schedule after the next request. Availability varies by account and no purchase observation exists. **Grade A mechanism, D uptake; new.** |
| Incident chronology and reset linkage | `n=17` inherited incident/reset contexts, June 3 to August 29, official Status phases, observer events, attributed posts, and public reports, current cutoff. | No new incident exists and retained incidents contain no reset or compensation statement. **Grade A chronology, D linkage; unchanged as a negative control.** |
| Public clustering and contradictions | `n=8` new issue records representing seven unique contexts, August 31 to September 1, plus the local partial-adjustment follow-up; public claims and observer state, current cutoff. | Consent, rapid depletion, bucket divergence, disappearing credits/reserve, monthly-window display, and enforcement divergence recur without a shared provider bound or staff diagnosis. **Grade B divergence, D prevalence/cause; strengthened.** |
| Discovery and mirror freshness | `n=6` current candidates; feed `fetchedAt=2026-09-01T08:59:16.421Z`; exact-DID mirror reads before the current cutoff. | Preferred coverage was 6/6 with `3m39.998s` to `13m50.405s` lag. Fallback coverage was 1/6 with `2m19.307s` lag and five reply omissions. **Grade B freshness, D completeness; preferred unchanged, fallback weakened.** |
| Reset gaps, cooldown, UTC time, and weekday | `n=9` observations, August 8 to 29, yielding eight gaps: `11h09m42.937s`, `51h29m50.496s`, `55h20m37.071s`, `170h25m58.932s`, `86h58m44.404s`, `37h26m14.123s`, `50h12m38.541s`, and `54h31m03.567s`; current cutoff. | No new gap. The sample remains too small and heterogeneous for cadence, cooldown, UTC-hour, or weekday inference. **Grade D; unchanged.** |

## Predictors, failed signals, and next tests

The strongest supported predictor remains a bounded provider-owned meter or
access transition with a materially advanced stable provider anchor. Credit
state distinguishes an automatic hard reset from a banked redemption for the
observed account. Canonical future or completed wording identifies a watch
window and attributed scope, but does not establish delivery.

Signals that failed or remain too sparse are cadence, weekday, UTC hour,
cooldown, milestone context alone, incidents without quota language, mirror
text without canonical validation, anchor movement without a qualifying usage
transition, monthly or five-hour display changes without a provider-bound
event, and single-account redemption or depletion claims. Nine events and
eight heterogeneous gaps remain too small for a defensible timing rule.

Since August 31, the durable change is the new paid instant reset mechanism and
the source-classification gate that keeps it out of reset-signal features. The
scan also gained six validated but nonqualifying social records and seven unique
public contradiction contexts. It gained no confirmed reset, inferred reset,
completed banked grant, confirmed redemption, supported broad cause, universal
delivery proof, or historical correction.

Next observable tests are:

1. Follow the September 7 private anchor and the August 31 partial adjustment
   for a qualifying meter or enforcement transition.
2. Capture a paid instant reset with explicit purchase consent, checkout time,
   the next request, both allowance states, and the new weekly anchor. Keep it
   separate from banked-reset redemption and global action.
3. Capture a banked redemption with before-and-after five-hour and weekly
   anchors, explicit consent, credit-count change, and enforcement recovery.
4. Seek staff diagnosis and independent provider-bound corroboration for
   #41957, #41968, #41969, and #42007 without retaining private diagnostics.
5. Continue June 29, July 28 and 29, August 1, Business, 20X, and recipient-
   breadth work without rewriting earlier snapshots.

## Deterministic refresh

The final live refresh generated dataset
`events-9-cutoff-2026-09-01-9a445484`. It retained nine verified observations,
two official incidents, and two approved public sources with healthy source
collection and no rejected or duplicate records. The paid-reset article is
classified `mechanism_change`, so `approvedPostCount24h` remains zero.

All horizons remain `1%`; the likely interval remains
`2026-09-05T21:27:55Z` through `2026-09-06T00:27:55Z`, confidence D.
Performance matured from `n=26` to `n=28`; model and baseline Brier both moved
from `0.10261923076923075` to `0.09529642857142855`. No model was promoted and
no historical feature snapshot was rewritten.
