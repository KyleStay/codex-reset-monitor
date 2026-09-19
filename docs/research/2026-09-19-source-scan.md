# Source scan for 2026-09-19

Research and forecast cutoff: `2026-09-19T09:20:44.713Z` UTC. The prior
published cutoff was `2026-09-18T13:57:06.541Z`. This note uses only evidence
available by the current cutoff. Later retrieval must not alter this or any
earlier feature snapshot.

## Evidence and decisions

One new confirmed observation qualified. [Project issue
#62](https://github.com/KyleStay/codex-reset-monitor/issues/62) records the
individual-paid Codex bucket moving from 97% used to 0% used between
`2026-09-19T08:09:13.476Z` and `08:51:54.026Z`. The provider anchor advanced
from `2026-09-19T08:09:56Z` to `2026-09-26T08:10:09Z`. The interval straddles
the prior anchor and the issue reports a `-42` minute lead at the upper sample.
The banked-reset count stayed at one. This is a scheduled automatic reset, not
a banked redemption, credit grant, or out-of-cycle reset. It confirms one
account only.

No completed special reset, new reset promise, banked-credit grant or
redemption, historical inference, supported cause, or correction qualified.
Project counts at the cutoff were 15 `verified-observation` issues, four
`approved-public-source` issues, and 43 `pending-review` issues.

The [official Status API](https://status.openai.com/api/v2/incidents.json)
added three resolved incidents. [Agent API container
overbilling](https://status.openai.com/incidents/01M2VA7X37P1ASADSNZ1CG4N4D)
ran from September 18 `22:29:53Z` through September 19 `07:52:40Z` and said
OpenAI was calculating refunds for affected customers. [Delayed Support
responses](https://status.openai.com/incidents/01M2V76GEPJB0HQGRA0QERRZ3T)
ran from `21:36:41Z` through `01:10:40Z`. [SSO and SCIM
errors](https://status.openai.com/incidents/01M2VBZB1RYSMXHZNRA25ZJ36X) ran from
`23:00:09Z` through `23:18:55Z`. None describes a Codex usage reset, banked
reset, reset-credit delivery, or quota compensation. The overbilling refund is
financial remediation for Agent API container charges, not a usage-window
reset.

The current [banked-reset Help
article](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work)
still separates automatic resets from saved resets. It says a successful
banked redemption refreshes eligible windows and changes the weekly reset
date. Its relative update label does not supply an exact revision timestamp.
The official [September 14 through 18 localized weekly
update](https://developers.openai.com/es-419/docs/whats-new) contains a
GPT-5.5 retirement notice, not a reset-policy, quota, credit, or accounting
change. The unlocalized `/docs/whats-new` path returned 404 during this scan,
so this note cites the live OpenAI-owned localized page.

The public `openai/codex` scan covered 95 issues created, 399 issue comments
created, 81 pull requests updated, and six releases published after the prior
cutoff. No comment in that bounded set carried GitHub's owner, member, or
collaborator association. Stable [release
0.155.1](https://github.com/openai/codex/releases/tag/rust-v0.155.1) changed a
reasoning-summary default; the other five releases were empty-note alpha
builds. No reviewed release or pull-request record changed reset mechanics.

Five focused user reports added contradictions, not confirmed events.
[Issue #46439](https://github.com/openai/codex/issues/46439) says a user-applied
reset briefly appeared in `/status` before the five-hour limit returned.
[Issue #46563](https://github.com/openai/codex/issues/46563) attributes plan
and purchased-credit depletion to runaway background summarization.
[Issue #46599](https://github.com/openai/codex/issues/46599) reports ChatGPT
model restrictions after Codex or Work exhaustion. [Issue
#46608](https://github.com/openai/codex/issues/46608) reports disputed negative
credit accounting and an unexplained automatic recharge. [Issue
#46437](https://github.com/openai/codex/issues/46437) argues that reset pricing
encourages multiple subscriptions. These records lack common provider bounds,
a population denominator, and staff diagnosis. They cannot establish reset
delivery, prevalence, or cause.

## Configured Tibo watch

The exact [@thsottiaux profile](https://x.com/thsottiaux) rendered publicly as
`Tibo (@thsottiaux)`, `Codex & ChatGPT @OpenAI`, with 2,988 posts. The newest
visible original was the September 19 keynote post listed below. The profile
did not expose a complete replies timeline without login.

The approved [discovery
feed](https://www.willcodexquotareset.com/api/forecast) reported
`fetchedAt=2026-09-19T09:00:23.426Z`, `sourceErrors.tibo=null`, and 11 new
numeric status IDs after the prior cutoff. I read only `fetchedAt`,
`sourceErrors.tibo`, and raw `tiboPosts`. I did not read or use the feed's
forecast, `tiboSignal`, `tweetAssessment`, probability, persisted
classification, or derived score. All 11 candidates passed X-owned
[oEmbed](https://publish.twitter.com/oembed) checks for author, author URL,
canonical URL, public text, and calendar date. Exact UTC comes from each X
Snowflake ID because oEmbed has no `created_at`. Feed timestamps agreed after
rounding to whole seconds.

| Canonical X ID | ID-derived UTC | Classification |
| --- | --- | --- |
| [2100985777962537277](https://x.com/thsottiaux/status/2100985777962537277) | `2026-09-18T16:30:18.551Z` | Reply, "Good prompt." Nonqualifying commentary. |
| [2101026876647170092](https://x.com/thsottiaux/status/2101026876647170092) | `2026-09-18T19:13:37.241Z` | Reply about another product adopting `AGENTS.md`. Nonqualifying. |
| [2101054196703522861](https://x.com/thsottiaux/status/2101054196703522861) | `2026-09-18T21:02:10.850Z` | Social reply. Nonqualifying. |
| [2101055411394904265](https://x.com/thsottiaux/status/2101055411394904265) | `2026-09-18T21:07:00.455Z` | Greeting reply. Its discovery context mentions unavailable usage, but the parent is not a configured source and was not used as evidence. |
| [2101124031567262054](https://x.com/thsottiaux/status/2101124031567262054) | `2026-09-19T01:39:40.779Z` | DevDay hype reply. Nonqualifying. |
| [2101125563448705092](https://x.com/thsottiaux/status/2101125563448705092) | `2026-09-19T01:45:46.008Z` | Product-naming reply. Nonqualifying. |
| [2101156632088735758](https://x.com/thsottiaux/status/2101156632088735758) | `2026-09-19T03:49:13.349Z` | Social reply. Nonqualifying. |
| [2101156788011962700](https://x.com/thsottiaux/status/2101156788011962700) | `2026-09-19T03:49:50.524Z` | Model-request reply. Nonqualifying. |
| [2101157729037586694](https://x.com/thsottiaux/status/2101157729037586694) | `2026-09-19T03:53:34.882Z` | Original about keynote preparation and product announcements next week. Product commentary, not a reset promise. |
| [2101158161994699036](https://x.com/thsottiaux/status/2101158161994699036) | `2026-09-19T03:55:18.107Z` | Reply asking whether the recipient uses Sol and buys credits. Nonqualifying mechanism commentary with no limit or reset change. |
| [2101158751290233190](https://x.com/thsottiaux/status/2101158751290233190) | `2026-09-19T03:57:38.606Z` | Social reply. Nonqualifying. |

The preferred [exact-DID
mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcaom2u2hfsm3aqab5dfvhxs&limit=100)
used DID `did:plc:rcaom2u2hfsm3aqab5dfvhxs` and represented all 11 candidates.
Indexing lag against ID-derived X time ranged from 137.051 to 851.315
seconds. It also contained one rounded-time reply, "We have content for maybe
3 dev days," for which neither the discovery feed nor the mirror supplied a
canonical X ID. That item remains an unvalidated mirror-only gap. The mirror
also split the long keynote original, making its second fragment look like a
reply. This is why mirror activity metadata cannot replace canonical context.

The fallback [exact-DID
mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcelwndiefenpjvnm6uood4t&limit=100)
used DID `did:plc:rcelwndiefenpjvnm6uood4t`. It represented only the keynote
original, split across two records indexed 296.379 and 299.674 seconds after
the X timestamp. It omitted all ten validated replies. Both mirrors remain
unofficial discovery aids and cannot prove authorship, delivery, cause, scope,
or timeline completeness.

## Historical follow-up

X oEmbed again validated the configured author, canonical URL, public text,
and calendar date for the [June 29 reset-plus-credit
promise](https://x.com/thsottiaux/status/2071740419030053227), [July 28
completion](https://x.com/thsottiaux/status/2081940052154933696), [July 29
completion](https://x.com/thsottiaux/status/2082317452755751098), [August 1
completion](https://x.com/thsottiaux/status/2083395449814229287), [August 8
Monday promise](https://x.com/thsottiaux/status/2086189414292865249), [August
10 contextual reply](https://x.com/thsottiaux/status/2086800050630676504),
[August 10 ordinary-reset
interpretation](https://x.com/thsottiaux/status/2086800639120888014),
[September 12 promise](https://x.com/thsottiaux/status/2098612714704891959),
and [September 12 completion
wording](https://x.com/thsottiaux/status/2098685367058612394).

The June 29 post still promises two separate actions, a hard reset within one
hour and a banked reset within 24 hours. No source-owned completion or
recipient denominator closes either action. The July 28, July 29, and August 1
posts remain attributed completion statements with unresolved delivery breadth
and cause. The August 8 and 10 thread remains an intended future ordinary reset,
not completed delivery. The September 12 promise and completion remain tightly
correlated with verified issue #59 for this account, but no new evidence proves
universal propagation.

[Replacement-credit issue
#56](https://github.com/KyleStay/codex-reset-monitor/issues/56), [completion
issue #60](https://github.com/KyleStay/codex-reset-monitor/issues/60), and
[promise issue #61](https://github.com/KyleStay/codex-reset-monitor/issues/61)
remain open, pending review, and without comments. Today's scheduled reset does
not close any of those special-reset or replacement-credit questions. No
historical ledger record, cause assessment, correction, or earlier feature
snapshot should change.

## Point-in-time-safe pattern audit

Grades describe evidence, not probability. Grade A is provider, observer, or
source-native chronology. Grade B is a public repository claim. Grade C is an
attributed operator statement used directionally. Grade D is a predictive,
causal, or population inference. Every current comparison stops at
`2026-09-19T09:20:44.713Z`. Earlier forecasts use only evidence discovered and
approved before their own cutoffs.

| Pattern and change since September 18 | Exact sample and covered range | Support, contradictions, lead time, and grade |
| --- | --- | --- |
| Bounded primary-bucket transition, strengthened | `n=15` verified observations from Aug 8 through Sep 19, 2026; `n=14` reset gaps; observer fields and maintainer-verified issues; current cutoff. | Issue #62 adds a 97% to 0% transition with a stable advanced anchor. Its gap from issue #59's upper bound is `168h39m08.006s`; the full range remains `11h09m42.937s` to `195h30m43.288s`. Grade A for this account after the event, Grade D for population prediction. |
| Provider anchor as a scheduled-reset detector, strengthened | `n=3` scheduled events among `n=15` observations; current event bounded `08:09:13.476Z` to `08:51:54.026Z` around the known `08:09:56Z` anchor. | The 42m40.550s observation interval contains the scheduled anchor and advances the next anchor by seven days plus 13 seconds. This supports the anchor for one account. Sampling lag prevents an exact completion time. Grade A chronology, Grade D breadth. |
| Banked redemption distinction, strengthened negative control | `n=3` mechanism-diagnostic observations from Sep 10 through Sep 19: two redemptions and one scheduled automatic reset. | Both redemptions reduced available credits by one while refreshing the window. Issue #62 refreshed the window with credits unchanged at one. Grade A for these account states. Generalization remains Grade D. |
| Tibo promise before independently observed delivery, unchanged and sparse | `n=2` prospective promise episodes with later observer bounds, Sep 7 through Sep 12; two older unresolved promise threads, Jun 29 and Aug 8 through 10; X, oEmbed, and verified observer issues. | Matched promise-to-upper-bound lead range remains `4h52m09.839s` to `6h03m50.593s`. The unresolved promises prevent success-only interpretation. Attribution Grade C, predictive value Grade D. |
| Completed wording and original-versus-reply position, unchanged | `n=4` qualifying statements from Sep 7 through Sep 12, two promises and two completions; `n=11` current negatives from Sep 18 through 19, one original and ten replies. | The current original concerns a keynote and all ten replies are nonqualifying. The small, selected sample cannot establish that originals or completion language predict delivery. Attribution Grade A after oEmbed validation, generalization Grade D. |
| Incident phase linkage, strengthened negative control | `n=3` official incidents created after the prior cutoff, Sep 18 through 19; Status chronology; current cutoff. | Overbilling, Support delay, and SSO or SCIM recovery contain no Codex-reset or quota-compensation language. There is no defensible reset lead time or affected-account match. Grade A chronology, Grade D linkage. |
| Public reset, depletion, enforcement, and credit claims, strengthened contradictions | `n=5` focused issue bodies among `n=95` new issues, Sep 18 `13:58:52Z` through Sep 19 `08:14:09Z`. | Reports describe a failed applied reset, background depletion, cross-product enforcement, negative credits, and pricing incentives. They lack common provider bounds, staff diagnosis, and a denominator. Grade B claims, Grade D prevalence and cause. |
| Release and implementation activity, unchanged | `n=81` updated PRs, `n=399` new issue comments, and `n=6` releases after the prior cutoff. | No owner, member, or collaborator-associated comment in the bounded set supplied a reset diagnosis. Release notes and reviewed PR titles contain no reset-mechanism change. Grade A repository chronology, Grade D reset linkage. |
| Discovery and mirror completeness, weakened for fallback coverage | `n=11` X and oEmbed-validated candidates, Sep 18 through 19; feed cutoff `09:00:23.426Z`; two exact-DID mirrors. | Feed and preferred mirror covered 11/11. Preferred lag was 137.051 to 851.315 seconds and included one mirror-only item without an X ID. Fallback covered 1/11, split it, and omitted all ten replies. Grade A canonical validation, Grade B current discovery, Grade D completeness. |
| Cadence, cooldown, weekday, and UTC hour, unchanged | `n=15` heterogeneous transitions and `n=14` gaps, Aug 8 through Sep 19; current cutoff. | Three scheduled events, 11 out-of-cycle events, and the initial unclassified event mix mechanisms. A Friday scheduled rollover does not establish a special-reset weekday, UTC-hour, gap, or cooldown rule. Grade D. |

## Strongest predictors, failures, and next tests

The strongest detector remains a bounded exhausted-to-available or near-zero
primary-meter transition paired with a material, stable provider-anchor
advance. Credit-count movement separates the two observed banked redemptions
from today's automatic scheduled reset. The known provider anchor also
correctly fell inside the new observation interval, but this is a one-account
schedule result, not evidence for a special reset elsewhere.

Signals that failed or remain too sparse are issue volume, completed wording
without account bounds, original-versus-reply position, weekday and UTC-hour
rules, reset-to-reset cooldown, launch or milestone context, incident timing
without quota language, release activity, and mirror text without canonical
validation. The latest public claims add useful contradictions but no shared
cause or population denominator. The discovery feed's reply context and the
preferred mirror's unidentified extra item remain discovery gaps, not model
features.

What changed since September 18 is narrow and useful. The scheduled September
19 anchor resolved as issue #62, raised the verified count from 14 to 15, left
the banked reset untouched, and moved the provider anchor to September 26. No
approved public-source feature changed. No Tibo candidate qualified.

The next tests are the September 26 anchor with credit state tracked
separately, tighter sampling around the anchor to distinguish display lag from
enforcement timing, recipient and nonrecipient bounds for September 12, and a
source-owned receipt for the June 29 and August 8 through 10 promises. A future
banked redemption should again require a credit decrement plus a bounded window
refresh. An anchor slide without a usage or enforcement transition remains
non-evidence.

## Deterministic refresh implication

The live refresh at the research cutoff contains 15 observations, four
retained incidents, four approved sources, zero rejected records, and zero
duplicates. Repository code produced dataset
`events-15-cutoff-2026-09-19-be693eb2` and forecast `fc_20260919092044`.
All 1, 3, 6, 12, and 24-hour estimates are `1.0653882581056%`, with confidence
D and a September 26 `03:41:39Z` through `12:38:39Z` likely interval.
Performance remains `n=44`; model and baseline Brier remain
`0.10341818181818187`, so no model was promoted.

The forecast input changed because issue #62 added a scheduled verified event
and a new future provider anchor. The prior September 19 anchor left the short
horizons, dropping the prior 19.64%, 22.25%, 26.61%, 36.72%, and 59.36%
estimates to the new near-floor value. No third-party forecast, classifier,
mirror record, unapproved post, incident inference, or historical rewrite
entered the calculation.
