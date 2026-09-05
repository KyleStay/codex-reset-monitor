# Daily source scan for September 5, 2026

**Research cutoff:** `2026-09-05T09:21:55Z`  
**Prior cutoff:** `2026-09-03T09:21:16Z`

This scan keeps observer-confirmed hard-reset transitions, banked-credit
grants, banked-credit redemption, promised future actions, inferred resets,
incidents, mechanism changes, and public contradictions separate. A public
statement or a credit becoming available is not a completed hard reset. The
approved discovery feed and Bluesky mirrors locate and corroborate candidates
only; X-owned oEmbed validates the canonical author, URL, public text, and
date.

## Coverage and source boundary

Recent monitoring covered the interval between the two cutoffs. Historical
follow-up rechecked the public-launch range from August 2025 through this
cutoff, with focused review of the June 29 reset-plus-credit promise, July 28
and 29, August 1, the August 8/10 promise thread, the August 30/31 action,
Business and 20X scope, the Astra rollout promotion, banked-credit lifecycle,
and staff-diagnosis gaps.

I did not read private Codex activity, conversations, prompts, responses,
account identifiers, credentials, cookies, session history, logs, or any
third-party forecast, classifier, probability, signal, or score. The discovery
feed was read only for `fetchedAt`, `sourceErrors.tibo`, and raw `tiboPosts`.

| Source | Result |
| --- | --- |
| [OpenAI Status API](https://status.openai.com/api/v2/incidents.json) | Two records were created and resolved after the prior cutoff: [Elevated errors across ChatGPT and Codex](https://status.openai.com/incidents/01M1KWEDH417T2CF44YYHZDFCR), `2026-09-03T14:58:23Z` to `16:55:49Z`, and [APAC increased errors across ChatGPT, Work, image generation, file upload, Voice, and Codex Cloud](https://status.openai.com/incidents/01M1NKFZH5EEYEREC54HNAHY35), `2026-09-04T07:00:26Z` to `10:46:54Z`. Neither mentions a reset, credit grant, compensation, or quota restoration. They remain incident evidence and negative controls. |
| [GPT-6 Astra announcement](https://openai.com/index/gpt-6-astra/) and [safety overview](https://openai.com/index/safety-overview-gpt-6-astra/) | Official September 3 launch material says Astra is rolling out to paid ChatGPT plans, uses existing subscription allowances, and can use credits. It does not report an account reset or banked-credit receipt. |
| [ChatGPT Work and Codex Help article](https://help.openai.com/en/articles/20001275) | The current page says Astra rollout is gradual, availability can differ between Chat, Work, and Codex, and Astra uses the plan's existing Work/Codex allowance. Plus and Business Standard have limited Astra usage with optional credits; Pro and Business Premium have their full existing allowance. This is rollout and mechanism context, not a personal reset event. |
| [Banked Codex resets Help article](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work) | The source-native payload reports `updatedAt=1788566390.236`, or `2026-09-04T23:59:50.236Z`. The page now explicitly says existing Plus, Pro, and Business users should receive a banked reset on September 3 and September 4; it also specifies new-account cutoffs and says delivery may take several hours. Approved source issue [#47](https://github.com/KyleStay/codex-reset-monitor/issues/47) records this as official banked-grant evidence, not proof that every account received it. |
| [Paid weekly Work and Codex resets](https://help.openai.com/en/articles/20001507-paid-weekly-work-and-codex-rate-limit-resets) | The current mechanism remains a user-purchased immediate reset for eligible Plus/Pro personal accounts. It restores the applicable windows, changes the next weekly schedule, and is distinct from credits and banked resets. No purchase receipt was observed. |
| [Codex app-server documentation](https://learn.chatgpt.com/docs/app-server) | The contract still separates `rateLimitsByLimitId` and `rateLimitResetCredits`; consuming a credit is explicit and should be followed by another rate-limit read. This documents mechanism and telemetry fields, not an account event. |
| [ChatGPT and Codex changelog](https://learn.chatgpt.com/docs/changelog) | The latest dated reset-relevant entry remains the September 1 CLI 0.152.0 rate-limit banner change. No new reset-policy entry was found after the prior cutoff. |
| [Codex releases](https://github.com/openai/codex/releases) | Releases 0.153.1 to 0.153.4 and 0.154.0-alpha.1 to .3 appeared after the prior cutoff. They add Astra catalog/picker and async-question changes; 0.153.2 corrects displayed Fast-tier wording. No release body states a reset, grant, or quota-window policy. |
| [Configured X profile](https://x.com/thsottiaux) | The exact public profile showed 2,868 posts. Replies were not exposed in the unauthenticated source-native view, so candidate completeness was checked through the approved feed and exact-DID mirrors. |
| Approved discovery feed | Fetched at `2026-09-05T09:00:23.722Z`; `sourceErrors.tibo=null`. Only raw `tiboPosts` were used. Forty-four numeric candidates appeared after the prior cutoff. |
| Preferred mirror, exact DID `did:plc:rcaom2u2hfsm3aqab5dfvhxs` | Public author feed matched all 44 candidate timestamps. `indexedAt-createdAt` lag ranged from `46.663s` to `962.759s` (median `557.782s`). Some threaded text was split or incomplete. |
| Fallback mirror, exact DID `did:plc:rcelwndiefenpjvnm6uood4t` | Public author feed matched 11/44 candidate timestamps. Lag ranged from `27.971s` to `363.256s` (median `244.661s`) and it omitted 33 candidates. The September 5 banked-reset announcement was split into `(1/2)` and `(2/2)`. |
| Public [openai/codex issues](https://github.com/openai/codex/issues), comments, releases, and pull requests | Seventeen new `rate-limits`-labeled issues appeared after the prior cutoff. Six focused records are summarized below. They add unverified depletion, idle-drain, banked-reset failure, split-enforcement, and token-consumption reports; no OpenAI staff diagnosis or provider-bound reset evidence appeared. |
| Configured [OpenAI Community Codex discussion](https://community.openai.com/t/codex-rate-limits-discussion-thread/1378553/) | The current rate-limit discussion and September 3 to 4 topics contain public claims about resets, missing credits, and task/limit behavior. They remain low-trust discovery/corroboration only and supply no independent provider denominator. |

## Canonical social evidence

All 44 post-cutoff candidates passed X-owned [oEmbed validation](https://publish.twitter.com/oembed) for the exact canonical URL, author `Tibo`, author URL `https://x.com/thsottiaux`, public text, and displayed date. The set contains 10 originals and 34 replies. oEmbed exposed a date but not a precise created-at time, so the exact times below use the X Snowflake-ID basis and are labeled derived.

Three originals are **promised banked-credit grants**, not completed resets:

- [Post `2095651088502591861`](https://x.com/thsottiaux/status/2095651088502591861), ID-derived `2026-09-03T23:12:09.470Z`, promises one banked reset for each day a paid ChatGPT user lacks Astra and says the first will land in roughly three hours.
- [Post `2095979536043401428`](https://x.com/thsottiaux/status/2095979536043401428), ID-derived `2026-09-04T20:57:17.466Z`, says Plus and Business users who do not yet have Astra will receive a banked reset by end of day and gives an `8pm PT` new-account cutoff.
- [Post `2096035437299237298`](https://x.com/thsottiaux/status/2096035437299237298), ID-derived `2026-09-05T00:39:25.364Z`, promises a full banked reset for Plus, Pro, and Business users by end of day and repeats an `8pm PT` account/upgrade cutoff. [Reply `2096035748130795560`](https://x.com/thsottiaux/status/2096035748130795560) at derived `00:40:39.472Z` is contextual follow-up, not a separate grant claim.

The official Help update above independently supports the September 3/4
promotion and its multi-hour delivery caveat. It does not establish that all
eligible accounts received a grant, that the three posts describe separate
cohorts, or that the observed local grants can be causally assigned to a
particular post.

Other relevant candidates were **Astra rollout or usage commentary**, not
reset evidence: [2095597168816226335](https://x.com/thsottiaux/status/2095597168816226335),
[2095961185262997556](https://x.com/thsottiaux/status/2095961185262997556), and
[2096002992046796932](https://x.com/thsottiaux/status/2096002992046796932) describe
staged rollout to Pro, Business, and Plus; [2095899886470463914](https://x.com/thsottiaux/status/2095899886470463914)
describes one Astra task as using less than 15% of weekly usage; and the
remaining 37 candidates are product, culture, model, Claude, or short-reply
commentary. None is a completed Codex hard-reset statement, redemption receipt,
cause confirmation, or universal-delivery proof.

## Observer and project evidence

The privacy-minimized observer sampled at `2026-09-05T09:15:51.381Z`. It still
has **9 verified hard-reset observations**, with **86% weekly usage** and the
current provider anchor `2026-09-07T02:28:25Z`. It recorded the available
banked-credit count rising from 1 to 3, with new grant metadata at
`2026-09-04T02:38:00Z` and `2026-09-05T04:20:36Z`. No credit was redeemed and no
new exhausted-to-available or near-zero full-meter transition occurred. The
two credit grants are available-credit evidence, not completed hard resets.

The raw promise-to-grant intervals are `3h25m50.530s` (September 3 promise to
the September 4 grant), `7h23m18.534s` (September 4 promise to the September 5
grant), and `3h41m10.636s` (September 5 promise to the same September 5 grant).
These are not causal lead times: one observed account and two grants cannot
identify the intended post or establish population delivery.

Pending public-source issues [#44](https://github.com/KyleStay/codex-reset-monitor/issues/44),
[#46](https://github.com/KyleStay/codex-reset-monitor/issues/46), and
[#45](https://github.com/KyleStay/codex-reset-monitor/issues/45) preserve the
three grant promises for maintainer review. They are forecast-ineligible. The
official Help promotion is approved as issue [#47](https://github.com/KyleStay/codex-reset-monitor/issues/47)
but remains ineligible for the hard-reset signal because its classification is
`banked_reset_grant`. The refresh retains 9 verified observations, 4 official incidents, 3 approved
public sources, zero rejected records, and zero duplicates.

## New public repository signals

Seventeen post-cutoff `openai/codex` records carry the `rate-limits` label.
These six focused records are public claims, not reset observations:

- [#42912](https://github.com/openai/codex/issues/42912) reports a Plus/macOS five-hour quota starting about 40% depleted and draining while idle after reset; this is a meter/idle-drain contradiction.
- [#42910](https://github.com/openai/codex/issues/42910) reports Luna Reserve can read/run commands while file edits are rejected by the regular usage limit; this is split enforcement.
- [#42901](https://github.com/openai/codex/issues/42901) reports Astra token consumption above roughly 272k tokens; this is a token-cost/depletion claim.
- [#42888](https://github.com/openai/codex/issues/42888) reports a banked reset did not work; there is no sanitized provider transition or staff resolution.
- [#42887](https://github.com/openai/codex/issues/42887) reports Voice draining quota too quickly; it supplies no reset bound.
- [#42884](https://github.com/openai/codex/issues/42884) is a rate-limit-labeled Windows report with no provider-bound reset evidence in its public title or metadata.

The 0.153.1 to 0.153.4 release series adds Astra model catalog/picker and
guidance fixes, while alpha .1 to .3 have no substantive public release body.
These are product/mechanism changes only. No visible issue discussion or
recent release provides an OpenAI-owned diagnosis of the rate-limit reports.

## Historical leads and ledger decision

The canonical [June 29 promise](https://x.com/thsottiaux/status/2071740419030053227),
[July 28](https://x.com/thsottiaux/status/2081940052154933696),
[July 29](https://x.com/thsottiaux/status/2082317452755751098), [August 1](https://x.com/thsottiaux/status/2083395449814229287),
and [August 8/10 thread](https://x.com/thsottiaux/status/2086189414292865249)
records were revalidated through X-owned oEmbed for the configured author and
canonical URLs. No new completion statement, recipient/nonrecipient set,
banked-credit receipt, Business/20X denominator, or staff diagnosis closes
those gaps. The June 29 hard-reset and separate banked-reset promise remain
unresolved. July 29 still has a public nonrecipient contradiction in
[issue #36170](https://github.com/openai/codex/issues/36170), and August 1
remains breadth-unknown.

The August 30/31 attributed hard-reset claim remains a Grade C, day-precision
inferred reset for at least some paid accounts, not a confirmed observation.
The observer's prior `23%` to `11%` partial adjustment and advanced anchor
still contradict universal full delivery. The new September banked grants are
a distinct promotion and do not rewrite those historical records. No new
inferred event, automatic hard reset, redemption, confirmed cause, or ledger
correction was added.

## Point-in-time-safe pattern audit

Only evidence public, discovered, or approved before each evaluated cutoff is
compared with later outcomes. The 44 new social candidates, current Help
promotion text, two new Status incidents, six new GitHub issues, releases, and
the two observer grants were unavailable to the prior cutoff. They cannot
rewrite earlier forecast feature snapshots.

| Pattern | Exact sample, covered range, evidence classes, and cutoff | Support, contradiction, grade, and change |
| --- | --- | --- |
| Provider-owned bounded hard reset | `n=9` verified observations, August 8 to 29; observer usage/access transitions, provider anchors, credit state; cutoff `2026-09-05T09:21:55Z`. | No tenth transition. The current account is 86% used with a September 7 anchor. **Grade A transition gate, D population; unchanged as the strongest hard-reset predictor.** |
| Attributed hard-reset wording | `n=2` paired August 30/31 promise/completion records, plus earlier qualified independent lead times of about `17m34s` to `51h28m`; canonical X/oEmbed, observer bounds, and public reports; current cutoff. | The August 30 promise preceded the completion claim by `7h09m50.051s`, but no independent full transition occurred in that interval. **Grade A attribution, C directionality, D delivery; unchanged for universal delivery.** |
| Banked-grant promotion and local availability | `n=3` canonical Tibo grant promises, September 3 to 5, plus the official Help promotion text and `n=2` observer grant-count increases on September 4/5; canonical X/oEmbed, official Help, privacy-minimized observer; current cutoff. | Raw promise-to-grant intervals are `3h25m50.530s` to `7h23m18.534s`, but one account and ambiguous post-to-grant mapping prevent causal lead-time or breadth claims. Count rose 1 to 3 with no redemption. **Grade A local grant state/mechanism, C attribution, D population; new and strengthened as a banked-credit detection signal.** |
| Original posts versus replies | `n=44` new candidates, September 3 to 5: 10 originals and 34 replies; X/oEmbed, feed, and exact-DID mirrors; current cutoff. | All canonical checks passed. The three grant promises are originals; the contextual September 5 reply is not a separate event. **Grade A attribution, B current discovery, D completeness; validation sample strengthened, predictive value not established.** |
| Hard reset versus banked credit | `n=1` original credit tracked unchanged across four later hard-reset observations, plus `n=2` new grants; observer metadata, official Help, and public claims; August 22 to September 5. | All three credits are currently available and unredeemed. Official documentation explicitly distinguishes a banked reset from an automatic/global reset. **Grade A mechanism/local distinction, C receipt, D breadth; strengthened, with no completed redemption.** |
| Paid instant reset versus promotion | `n=1` current official paid-reset mechanism and `n=3` current banked-promotion promises; Help, official launch material, and canonical X; current cutoff. | Paid reset is immediate and user-triggered; banked reset is saved and separate. No purchase receipt exists. **Grade A mechanism, D uptake; unchanged.** |
| Astra rollout context | `n=2` official September 3 launch pages plus `n=3` attributed rollout/grant posts; official announcement/Help, canonical X, current cutoff. | Official sources support gradual rollout and existing-allowance/credit mechanics. They do not establish that Astra rollout caused an automatic hard reset or that all plans received the same grant. **Grade A product context, C promotion linkage, D automatic-reset cause; new context, no causal promotion.** |
| Incident chronology and reset linkage | `n=19` contexts, June 3 to September 4: 17 inherited incident/reset contexts plus two new official Status incidents; Status phases, observer events, attributed posts, and public reports. | Both new incidents resolved without reset, credit, or compensation language. **Grade A chronology, D reset linkage; unchanged as a negative control.** |
| Public clustering and contradictions | `n=6` focused rate-limit-labeled GitHub issues from a larger set of 17, September 4 to 5, plus configured Community reports; public issue bodies/metadata and current cutoff. | Idle drain, banked-reset failure, split enforcement, Voice depletion, and Astra token-cost claims add current contradictions without a shared provider bound, denominator, or staff cause. **Grade B divergence, D prevalence/cause; contradiction coverage strengthened, predictive value unchanged.** |
| Discovery and mirror freshness | `n=44` current candidates; feed fetched `2026-09-05T09:00:23.722Z`; Bluesky `indexedAt-createdAt` metadata. | Preferred timestamp coverage 44/44 with `46.663s` to `962.759s` lag; fallback 11/44 with `27.971s` to `363.256s` lag. Split text and omissions remain. **Grade B freshness, D completeness; preferred freshness strengthened, fallback completeness remains weak.** |
| Reset gaps, cooldown, UTC time, and weekday | `n=9` hard-reset observations, August 8 to 29, yielding eight gaps: `11h09m42.937s`, `51h29m50.496s`, `55h20m37.071s`, `170h25m58.932s`, `86h58m44.404s`, `37h26m14.123s`, `50h12m38.541s`, and `54h31m03.567s`; current cutoff. | No new hard-reset gap. The heterogeneous sample remains too small for cadence, cooldown, UTC-hour, or weekday inference. **Grade D; unchanged.** |

## Predictors, failed signals, and next tests

The strongest hard-reset predictor remains a bounded provider-owned meter or
access transition paired with a materially advanced stable provider anchor.
For banked-credit availability, the strongest current signal is a canonical
grant promise corroborated by official promotion terms and an observer
credit-count increase; this detects availability on an observed account but
not redemption or population delivery. Credit state continues to distinguish
automatic hard resets from banked credits.

Signals that failed or remain too sparse include cadence, weekday, UTC hour,
cooldown, milestone context alone, incidents without quota language, mirror
text without canonical validation, anchor movement without a qualifying usage
transition, display changes without a provider-bound event, release/UI/API
changes alone, and public reports without provider bounds. The three promises
and two grants are one-account evidence with ambiguous mapping, not a general
grant-rate estimate. Nine hard resets and eight heterogeneous gaps remain too
small for a defensible timing rule.

Since the prior cutoff, the durable changes are:

- Official Help now documents the September 3/4 Astra-related banked-reset promotion and multi-hour delivery caveat; approved issue #47 records it as `banked_reset_grant` evidence.
- Three canonical Tibo banked-grant promises were validated and filed as pending issues #44, #46, and #45.
- The observer saw two available-credit grants, increasing one account's count from 1 to 3; no redemption or hard reset followed.
- Two new resolved Status incidents and six new rate-limit-labeled GitHub issues add negative controls and contradictions, not reset evidence.
- Forty-four canonical X candidates were validated; 10 were originals and 34 replies. No candidate became a completed hard-reset signal.

Next observable tests are:

1. Recheck the two new banked-credit grants after the Help article's several-hour window and after the September 5 end-of-day promise; record eligibility scope, credit count, grant timestamp, expiration, and whether any credit is redeemed. Do not classify availability as a hard reset.
2. Seek an independent eligible/noneligible account denominator for the September 3/4 Astra promotion, preserving plan, region, workspace, and cutoff scope.
3. Follow the September 7 provider anchor for a qualifying usage/enforcement transition and keep the August 31 partial adjustment separate.
4. Capture any banked redemption with explicit consent, before/after five-hour and weekly anchors, credit-count change, and post-redemption enforcement recovery.
5. Seek staff diagnosis and independent provider bounds for #42912, #42910, #42901, #42888, #42887, and #42884 without retaining private diagnostics.
6. Continue the June 29, July 28/29, August 1, August 8/10, Business, 20X, and August 30/31 breadth work without rewriting earlier feature snapshots.

## Deterministic refresh

The final local refresh at `2026-09-05T09:33:35.117Z` generated dataset
`events-9-cutoff-2026-09-05-9a445484` and forecast
`fc_20260905093335`. It retained 9 verified observations, 4 official
incidents, and 3 approved public sources with zero rejected records and zero
duplicates. The three pending grant issues and current official promotion
text did not enter approved reset-signal features.

Probabilities are 1h `1%`, 3h `1%`, 6h `2.198711%`, 12h `30.457584%`, and
24h `92.786324%`. The likely interval is
`2026-09-05T21:27:55Z` through `2026-09-06T00:27:55Z`, confidence D. The
model uses the latest published verified-observation anchor of
`2026-09-05T22:57:55Z`; the current private observer anchor is later at
`2026-09-07T02:28:25Z`, a preserved contradiction rather than an unapproved
input substitution. The provider-anchor baseline remains
`provider-anchor-baseline-0.3.0`; performance
is `n=32`, Brier `0.083396875`, equal to the baseline. The probability change
is deterministic time-to-published-anchor behavior from the local refresh, not
imported third-party forecasting and not a promotion of the new public promises. No
historical feature snapshot was rewritten and no model was promoted.
