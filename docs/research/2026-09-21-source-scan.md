# Source scan for 2026-09-21

Research cutoff: `2026-09-21T09:20:52Z` UTC. The prior published cutoff was
`2026-09-19T09:20:44.713Z`. This source-audit draft uses only evidence public
by the current cutoff. The approved discovery feed was first read for this run
at its own `2026-09-21T09:00:10.398Z` fetch time. Nothing found here may enter
an earlier forecast snapshot.

## Evidence and decisions

No completed hard reset, completed banked-reset grant, redemption, supported
cause, correction, or new historical inference qualified in this source lane.
The [official Status API](https://status.openai.com/api/v2/incidents.json)
contained no incident created after the prior cutoff. The current [banked-reset
Help article](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work)
still separates automatic or global resets from saved resets. It says a banked
reset is consumed only after it refreshes an eligible window, changes the
weekly reset date when used, and expires if unused. Its relative update label
says 11 days ago and supplies no exact revision timestamp. The current
[OpenAI what's-new page](https://learn.chatgpt.com/docs/whats-new) supplied no
new reset, quota, credit, or accounting announcement in this bounded check.

The public `openai/codex` scan covered 284 issues created, 835 issue comments
created, 77 pull requests updated, and seven releases published after the prior
cutoff. None of the 835 comments had GitHub owner, member, or collaborator
association. All seven releases, `0.156.0-alpha.8` through
`0.156.0-alpha.14`, have empty notes. [PR
#46912](https://github.com/openai/codex/pull/46912) changed quota-warning
presentation and stale-read handling in the TUI. It did not change how a reset
is granted, redeemed, or applied.

Eight focused public issue bodies add useful contradictions, but no provider
diagnosis or population denominator. [#46907](https://github.com/openai/codex/issues/46907)
reports one banked reset disappearing at its recorded expiry while two later
credits remained. [#46854](https://github.com/openai/codex/issues/46854)
reports 34 failed redemption attempts on a single-window account, with all
three credits and 100% usage unchanged. [#46901](https://github.com/openai/codex/issues/46901)
reports rapid depletion after a claimed redemption. [#46904](https://github.com/openai/codex/issues/46904)
reports a 40-point weekly-usage rise during an unintended five-hour Goal loop.
[#46819](https://github.com/openai/codex/issues/46819) reports a newly reset
weekly allowance reaching 100% during 44 minutes of security-worker fan-out.
[#46798](https://github.com/openai/codex/issues/46798) and
[#46632](https://github.com/openai/codex/issues/46632) report capacity failures
while quota remained available. [#46937](https://github.com/openai/codex/issues/46937)
reports zero available usage after a Pro-to-Plus plan change. These are user
claims. They do not establish a shared reset, prevalence, or cause.

## Configured Tibo watch

The exact [@thsottiaux profile](https://x.com/thsottiaux) rendered publicly as
`Tibo (@thsottiaux)`, `Codex & ChatGPT @OpenAI`, with 3,003 posts. Its newest
visible original was the September 19 Linux-desktop post below. The public
Posts view did not supply a complete Replies timeline.

The approved [discovery
feed](https://www.willcodexquotareset.com/api/forecast) reported
`fetchedAt=2026-09-21T09:00:10.398Z`, `sourceErrors.tibo=null`, and 27 raw
Tibo records. I read only `fetchedAt`, `sourceErrors.tibo`, and raw
`tiboPosts`. I did not read or use its forecast, `tiboSignal`,
`tweetAssessment`, persisted classification, probability, or derived score.
The bounded candidate set was 15 status IDs newer than the last validated ID,
plus one older status that the September 19 scan had left as a mirror-only gap.
All 16 passed X-owned [oEmbed](https://publish.twitter.com/oembed) checks for
author, author URL, canonical URL, public text, and calendar date. Exact UTC
comes from each X Snowflake ID because oEmbed has no `created_at`.

The one relevant item is [status
2101352781219258527](https://x.com/thsottiaux/status/2101352781219258527),
ID-derived `2026-09-19T16:48:38.946Z`. Its exact canonical text is "OK fine.
But it’s also still coming in Tuesday". The source-native X thread showed it
replying to a September 18 post that said, "you owe us a banked reset". X
rendered Tibo's reply as `12:48 PM · Sep 19, 2026`. The canonical author, text,
date, URL, and parent context were validated at this run's discovery cutoff,
`2026-09-21T09:00:10.398Z`. This is an attributed promise of a future banked
reset grant expected Tuesday. It is not a completed grant, redemption,
completed hard reset, or proof that any account will receive it. The word
"also" leaves product-release context in the thread, so the promised action
should remain pending until source-native completion and account evidence
separate the banked reset from the other Tuesday release.

After the research cutoff, the project preserved this candidate in
[pending-review issue #63](https://github.com/KyleStay/codex-reset-monitor/issues/63).
It remains forecast-ineligible unless a maintainer approves it. Creating the
review record does not move its discovery time or permit it to affect an
earlier snapshot.

| Canonical X ID | ID-derived UTC | Classification |
| --- | --- | --- |
| [2101921202436702657](https://x.com/thsottiaux/status/2101921202436702657) | `2026-09-21T06:27:21.125Z` | Reply, "👁️codex👁️". Nonqualifying commentary. |
| [2101920928070562029](https://x.com/thsottiaux/status/2101920928070562029) | `2026-09-21T06:26:15.711Z` | Social reply. Nonqualifying. |
| [2101920329346195690](https://x.com/thsottiaux/status/2101920329346195690) | `2026-09-21T06:23:52.964Z` | Social reply. Nonqualifying. |
| [2101772015028130032](https://x.com/thsottiaux/status/2101772015028130032) | `2026-09-20T20:34:32.075Z` | Reply about community conduct. It mentions resets only in unconfigured parent text. Nonqualifying. |
| [2101554478940070162](https://x.com/thsottiaux/status/2101554478940070162) | `2026-09-20T06:10:07.430Z` | Instruction-request reply. Nonqualifying. |
| [2101531597820596462](https://x.com/thsottiaux/status/2101531597820596462) | `2026-09-20T04:39:12.146Z` | Social reply. Nonqualifying. |
| [2101448279712207203](https://x.com/thsottiaux/status/2101448279712207203) | `2026-09-19T23:08:07.561Z` | Social reply. Nonqualifying. |
| [2101432860892901859](https://x.com/thsottiaux/status/2101432860892901859) | `2026-09-19T22:06:51.428Z` | Social reply. Nonqualifying. |
| [2101432368682983749](https://x.com/thsottiaux/status/2101432368682983749) | `2026-09-19T22:04:54.076Z` | Social reply. Nonqualifying. |
| [2101431497437950458](https://x.com/thsottiaux/status/2101431497437950458) | `2026-09-19T22:01:26.355Z` | Linux-desktop original. Nonqualifying. |
| [2101354419829010896](https://x.com/thsottiaux/status/2101354419829010896) | `2026-09-19T16:55:09.621Z` | Product-adoption reply. Nonqualifying. |
| [2101353743275135306](https://x.com/thsottiaux/status/2101353743275135306) | `2026-09-19T16:52:28.318Z` | Astra-efficiency reply. Product commentary, not a limit change or reset. |
| [2101353058110480808](https://x.com/thsottiaux/status/2101353058110480808) | `2026-09-19T16:49:44.962Z` | Model-character reply. Nonqualifying. |
| [2101352781219258527](https://x.com/thsottiaux/status/2101352781219258527) | `2026-09-19T16:48:38.946Z` | Promised future banked-reset grant for Tuesday. Not completed. |
| [2101352396140278226](https://x.com/thsottiaux/status/2101352396140278226) | `2026-09-19T16:47:07.136Z` | Product-support reply. Nonqualifying. |
| [2101126440469344384](https://x.com/thsottiaux/status/2101126440469344384) | `2026-09-19T01:49:15.106Z` | Late-discovered keynote reply. It closes the prior mirror-only ID gap but predates both cutoffs and is nonqualifying. |

The preferred [exact-DID
mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcaom2u2hfsm3aqab5dfvhxs&limit=100)
covered 16/16 candidates. Indexing lag against ID-derived X time ranged from
66.806 to 1,008.628 seconds. The fallback [exact-DID
mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcelwndiefenpjvnm6uood4t&limit=100)
covered 1/16, the Linux-desktop original, at 76.603 seconds. It omitted all 15
replies. The preferred feed's newest record was `2026-09-21T06:27:21Z`; the
fallback stopped at `2026-09-19T22:01:26Z`. Both remain discovery-only and
cannot establish authorship, delivery, cause, scope, or completeness without
canonical validation.

## Historical follow-up

No new source closed the June 29 promised reset-plus-credit completion question,
the July 28/29 or August 1 delivery-breadth gaps, or the August 8/10 ordinary
reset promise. The September 19 banked-reset promise is a new prospective test
with a Tuesday target. It must remain separate from completed hard resets and
from the product release also discussed in the thread. No source in this lane
supports a cause assessment or a retrospective change to an earlier feature
snapshot.

## Point-in-time-safe pattern audit

Grades describe evidence, not probability. Grade A is source-native or
provider chronology. Grade B is a public repository claim. Grade C is an
attributed operator statement used directionally. Grade D is a predictive,
causal, or population inference. Every comparison stops at
`2026-09-21T09:20:52Z`.

| Pattern and change since September 19 | Exact sample and covered range | Support, contradictions, lead time, and grade |
| --- | --- | --- |
| Tibo promises as prospective signals, strengthened but mechanism-split | `n=1` new banked-grant promise on Sep 19; prior hard-reset matched sample remains `n=2` from Sep 7 through 12, with unresolved Jun 29 and Aug 8/10 threads; canonical X, oEmbed, and prior verified observations; current cutoff. | The Tuesday statement is prospective and gives no exact hour, recipient set, or completion. It cannot extend the prior hard-reset lead-time range of `4h52m09.839s` to `6h03m50.593s` because it promises a banked grant, not a hard reset. Attribution Grade C, predictive value Grade D. |
| Completed language versus future promises, strengthened negative control | `n=16` newly validated candidates: one original and 15 replies, Sep 19 through 21, plus the current cutoff. | Fifteen are nonqualifying and one is future-tense banked-reset wording. There is no new completed-reset or completed-grant statement. Reply position supplied the only relevant signal, which contradicts any original-post-only rule. Canonical validation Grade A, generalization Grade D. |
| Incident phase linkage, unchanged | `n=0` Status incidents created after the Sep 19 cutoff. | There is no incident start, mitigation, resolution, compensation statement, or lead time to correlate. Absence is a finding, not evidence of reset delivery. Grade A chronology. |
| Credit, redemption, depletion, and enforcement contradictions, strengthened | `n=8` focused issue bodies among `n=284` created issues, Sep 19 through 21. | Reports cover expiry, failed redemption, rapid depletion, unintended agent consumption, plan migration, and capacity errors despite remaining quota. No staff-associated comment, common provider bound, or denominator resolves them. Grade B claims, Grade D prevalence and cause. |
| Release and implementation activity, strengthened only for presentation | `n=77` updated PRs, `n=835` created comments, and `n=7` releases after the prior cutoff. | No comment had owner, member, or collaborator association. Empty alpha notes change no mechanism. PR #46912 improves quota-warning persistence but supplies no reset delivery or accounting change. Grade A repository chronology, Grade D reset linkage. |
| Discovery and mirror completeness, strengthened for the preferred mirror and weakened for fallback | `n=16` X/oEmbed-validated candidates, Sep 19 through 21; feed discovery cutoff `2026-09-21T09:00:10.398Z`; two exact-DID mirrors. | Preferred coverage was 16/16 with 66.806 to 1,008.628 seconds lag. Fallback coverage was 1/16 and omitted every reply, including the banked-reset promise. One prior mirror-only item gained a canonical ID two days late. Grade A canonical validation, Grade B current discovery, Grade D completeness. |
| Cadence, cooldown, weekday, and UTC hour, unchanged | This source lane adds no verified observation or eligible reset gap. The published base remains `n=15` heterogeneous transitions and `n=14` gaps, Aug 8 through Sep 19. | A future Tuesday grant promise is not an event timestamp. It cannot support reset cadence, cooldown, weekday, or time-of-day inference. Grade D. |

## Daily assessment

The strongest supported predictors remain provider-owned reset anchors and
bounded observer transitions from the published dataset. Canonical operator
promises are useful prospective tests, but the new promise concerns a banked
grant and must not be merged into the hard-reset sample. Incident proximity,
original-versus-reply position, release volume, and public complaint volume
remain unsupported predictors. The current sample is too small and too mixed
to infer a probability, cadence, cooldown, weekday effect, UTC-hour effect, or
population-wide delivery rate.

The next observable test is Tuesday's promised banked reset. Record
source-native completion wording, grant timestamps, plan and workspace
eligibility, expiry, recipient and nonrecipient counts, and any observer
credit-count changes.
Keep grants, redemptions, automatic resets, purchased credits, and display-only
changes separate.

## Deterministic refresh implication

The full live refresh at `2026-09-21T09:21:13.836Z` retained 15 verified
observations, four approved public sources, four Codex-relevant official
incidents, zero rejected records, and zero duplicates. The new pending issue
did not enter the source feature set. Repository code produced dataset
`events-15-cutoff-2026-09-21-be693eb2` and forecast `fc_20260921092113`.
All 1, 3, 6, 12, and 24-hour estimates are `1.0159648236358542%`, with
confidence D and the unchanged September 26 `03:41:39Z` through `12:38:39Z`
likely interval.

No deterministic event or approved-source input changed. Time-dependent
features advanced, issue-report volume aged out of the six-hour window, and
two older forecasts matured. Performance increased from `n=44` to `n=46`;
model and baseline Brier both improved from `0.10341818181818187` to
`0.10091956521739136`. The equality blocks promotion. No third-party forecast,
classifier, mirror record, pending post, or historical rewrite entered the
calculation.
