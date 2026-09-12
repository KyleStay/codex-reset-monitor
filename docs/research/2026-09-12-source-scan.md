# Source scan for 2026-09-12

Research cutoff: `2026-09-12T09:25:41Z` (UTC). The prior cutoff was
`2026-09-11T09:20:37Z`. This is a bounded, point-in-time-safe audit of sources
approved by `data/source-policy.json`. It also rechecks the named historical
gaps without moving evidence across forecast cutoffs. This lane wrote this note
only. It did not create issues, alter data, run `update:data`, commit, or push.

## Result

Two new maintainer-verified observer transitions qualified.

- [Issue #58](https://github.com/KyleStay/codex-reset-monitor/issues/58)
  records access returning after exhaustion at `2026-09-11T19:02:05.530Z`.
  The weekly anchor advanced from `2026-09-17T13:51:40Z` to
  `2026-09-18T18:58:47Z`, while available reset credits fell from `2` to `1`.
  This is the second verified banked-reset redemption and full-window refresh
  for the observed individual-paid account. It does not prove a user-interface
  action or delivery to another account.
- [Issue #59](https://github.com/KyleStay/codex-reset-monitor/issues/59)
  records a `16%` to `0%` meter transition by
  `2026-09-12T08:12:46.020Z`. The anchor advanced from
  `2026-09-18T18:58:47Z` to `2026-09-19T08:09:56Z`, while the available credit
  count stayed at `1`. This is a verified out-of-cycle reset for the same
  account, distinct from a banked-reset redemption.

The exact [Tibo profile](https://x.com/thsottiaux) rendered publicly as
`Tibo (@thsottiaux)`, `Codex & ChatGPT @OpenAI`, with `2,944 posts`. It showed
the new reset completion as the newest original. The configured discovery feed
contained eight candidates after the prior cutoff. All eight passed X-owned
oEmbed validation for author, author URL, canonical URL, public text, and
calendar date.

Two originals qualify as attributed reset signals. The
[promise](https://x.com/thsottiaux/status/2098612714704891959), at ID-derived
`2026-09-12T03:20:36.181Z`, said an Astra reset was "landing by midnight
today." The [completion](https://x.com/thsottiaux/status/2098685367058612394),
at ID-derived `2026-09-12T08:09:17.852Z`, said "Reset all propagated. Sweet
dreams." The promise led the issue #59 upper observation bound by
`4h52m09.839s`. The completion fell inside the observer interval
`08:02:20.356Z` to `08:12:46.020Z` and preceded the upper sample by
`3m28.168s`.

That pairing is strong evidence that the attributed action and this account's
reset belong to the same episode. It is not proof that every intended account
received the reset by the post time. It also does not prove that the quality
fixes named in the promise caused the reset. The parent lane recorded the
completion as pending [issue #60](https://github.com/KyleStay/codex-reset-monitor/issues/60)
and the promise as pending [issue #61](https://github.com/KyleStay/codex-reset-monitor/issues/61).
Both remain forecast-ineligible unless a maintainer approves them.

## Retrieval record and source boundary

All times are UTC. I retained only public source text and metadata, the allowed
observer fields, and neutral classifications. I did not read or retain private
account data, prompts, responses, conversations, credentials, cookies, logs,
or session history. From the configured third-party feed I read only
`fetchedAt`, `sourceErrors.tibo`, and raw `tiboPosts`. I did not use its
forecast, classifier, `tiboSignal`, `tweetAssessment`, probability, or score.

| Source | Bounded result |
| --- | --- |
| [OpenAI Status incidents API](https://status.openai.com/api/v2/incidents.json) | Three incidents were created or updated after the prior cutoff. Europe ChatGPT errors resolved at `10:16:31Z`; GPT-5.6 Sol API errors resolved at `11:21:43Z`; and a new ChatGPT Work existing-thread error incident ran from `2026-09-11T16:22:49Z` through `2026-09-12T01:57:37Z`. None mentions a usage reset, banked reset, credit grant, compensation, or meter restoration. |
| [Banked-reset Help](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work) | The current page still separates user-applied banked resets from immediate automatic/global resets. It says successful banked redemption refreshes five-hour and weekly windows and changes the weekly date. It also says eligibility and delivery can vary. This is mechanism evidence, not a receipt for issues #58, #59, or #56. The page exposes only a relative update label, so no new exact publication time was inferred. |
| [OpenAI release notes](https://openai.com/products/release-notes/), [News](https://openai.com/news/), and [ChatGPT and Codex changelog](https://developers.openai.com/codex/changelog) | No September 11 or 12 official reset, reset-credit, quota-accounting, or compensation record appeared. The latest visible release-note entries were dated September 10. The changelog's latest dated entries were also September 10. |
| Public [openai/codex issues](https://github.com/openai/codex/issues), [pull requests](https://github.com/openai/codex/pulls), [commits](https://github.com/openai/codex/commits/main/), and [releases](https://github.com/openai/codex/releases) | The bounded issue API contained 185 non-PR records created after the cutoff. Fifteen had reset, limit, quota, usage, credit, allowance, depletion, meter, or capacity terms in the title. The repository also had 40 commits, 41 first-page PR records updated after the cutoff, and two releases published after it. No reviewed staff comment or implementation record diagnosed the public reset/accounting reports or supplied a second provider-bounded account transition. |
| [Configured Tibo profile](https://x.com/thsottiaux) and X-owned [oEmbed](https://publish.twitter.com/oembed) | The public profile rendered successfully. All `8/8` post-cutoff candidates validated as Tibo with author URL `https://x.com/thsottiaux`, matching canonical URLs, text, and September 12 date. Exact UTC came from each X Snowflake ID because oEmbed has no `created_at`. |
| [Approved discovery feed](https://www.willcodexquotareset.com/api/forecast) | `fetchedAt=2026-09-12T08:59:47.463Z`, `sourceErrors.tibo=null`, eight raw candidates after the prior cutoff. The candidates are discovery records, not evidence until canonical validation. |
| [Preferred exact-DID mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcaom2u2hfsm3aqab5dfvhxs&limit=100) and [fallback exact-DID mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcelwndiefenpjvnm6uood4t&limit=100) | The preferred mirror represented `8/8` candidates with indexing lag from `2m00.681s` to `13m21.057s`, but truncated long originals. The fallback represented `5/8` candidate originals, omitted all three replies, and split the reset promise into five posts. Its represented originals appeared roughly `2m03s` to `3m55s` later; the final promise segment arrived `3m33.065s` after the rounded source time. Both remain unofficial discovery aids. |

## Canonically validated Tibo candidates

| Canonical post | ID-derived UTC | Activity and classification |
| --- | --- | --- |
| [2098685691899027900](https://x.com/thsottiaux/status/2098685691899027900) | `2026-09-12T08:10:35.300Z` | Reply, "Tell me more." Nonqualifying commentary. |
| [2098685367058612394](https://x.com/thsottiaux/status/2098685367058612394) | `2026-09-12T08:09:17.852Z` | Original, completed hard-reset action statement. Pending issue #60. It supports attributed completion timing, not universal delivery. |
| [2098639827084480864](https://x.com/thsottiaux/status/2098639827084480864) | `2026-09-12T05:08:20.276Z` | Original, product and launch commentary. No reset or limit change. |
| [2098613228486152223](https://x.com/thsottiaux/status/2098613228486152223) | `2026-09-12T03:22:38.676Z` | Reply, nonqualifying event commentary. |
| [2098612714704891959](https://x.com/thsottiaux/status/2098612714704891959) | `2026-09-12T03:20:36.181Z` | Original, promised future reset by midnight. Pending issue #61. The same post describes Astra quality fixes, but it does not say those fixes caused the reset. |
| [2098590070102245712](https://x.com/thsottiaux/status/2098590070102245712) | `2026-09-12T01:50:37.287Z` | Reply saying Astra Pro limits had not changed. Mechanism context only. |
| [2098569976143806918](https://x.com/thsottiaux/status/2098569976143806918) | `2026-09-12T00:30:46.514Z` | Original, Git AI team announcement. No reset or usage-window change. |
| [2098569538510180712](https://x.com/thsottiaux/status/2098569538510180712) | `2026-09-12T00:29:02.174Z` | Original, ChatGPT Sites commentary. No reset or usage-window change. |

The feed rounded timestamps to whole seconds. oEmbed sometimes truncated long
text, but the canonical URL, author, visible text, and date agreed. The exact
profile supplied the current original-post order. No author, URL, date, or text
mismatch appeared.

## Observer state and event separation

The permitted observer status at `2026-09-12T09:18:43.970Z` showed the primary
Codex bucket at `0%` used with anchor `2026-09-19T08:09:56Z`. It retained
`8,847` samples, had published `14` full-reset detections, and showed one
available reset credit.

Issue #58 preceded the new Tibo promise by `8h18m30.651s` and consumed a
banked reset, so it is not evidence that the later promised reset had already
landed. Issue #59 kept the credit count unchanged and fell inside the public
promise-to-completion episode. The account evidence therefore separates the
two mechanisms cleanly:

1. banked redemption at `2026-09-11T19:02:05.530Z`, credit count `2` to `1`;
2. attributed future promise at `2026-09-12T03:20:36.181Z`;
3. attributed completion wording at `2026-09-12T08:09:17.852Z`;
4. observer-confirmed out-of-cycle meter reset by `2026-09-12T08:12:46.020Z`,
   credit count unchanged at `1`.

The sequence is useful because a banked reset and an out-of-cycle public reset
occurred within thirteen hours of each other. Collapsing them would create a
false completion time and a false mechanism label.

## Public reports and contradictions

The fifteen title-matched issues span `2026-09-11T10:34:30Z` through
`2026-09-12T07:34:50Z`. They are public claims, not verified observations.
The most relevant are:

- [#44951](https://github.com/openai/codex/issues/44951) reports a failed
  banked-reset redemption on one Pro 20X account. It includes a redemption
  request identifier but no later receipt, provider samples, or staff reply.
  It does not prove that issue #56's promised replacement was received.
- [#44894](https://github.com/openai/codex/issues/44894) reports faster Astra
  depletion after what the author calls a paid reset. It supplies self-reported
  before and after durations but no provider ledger or independent account.
- [#44992](https://github.com/openai/codex/issues/44992) and its one user
  follow-up report usage disappearing after a short task. No timestamps,
  reset anchors, or staff diagnosis bound the claimed depletion.
- [#44941](https://github.com/openai/codex/issues/44941) reports a weekly meter
  moving from about 25% remaining to exhausted. The reporter explicitly leaves
  delayed display and actual consumption unresolved.
- [#44876](https://github.com/openai/codex/issues/44876) reports disputed
  Business credit depletion after switching users on one machine. The author
  labels account-attribution persistence as a hypothesis. No provider audit or
  staff diagnosis appears.
- [#44874](https://github.com/openai/codex/issues/44874) and
  [#44994](https://github.com/openai/codex/issues/44994) add Pro 20X rapid-use
  claims. Neither includes a bounded reset transition.

Reviewed comments were duplicate notices or user follow-ups. None came from an
OpenAI staff member with a cause or account-level provider bounds. The issue
set strengthens evidence that display, enforcement, usage, purchased credits,
banked resets, and automatic resets can diverge. It does not establish
prevalence or a shared cause.

The 40 commits and 41 recently updated PRs had no reset policy or accounting
change. Commit [aee8a55a](https://github.com/openai/codex/commit/aee8a55ab6010f1d53e741edec74dbcffa07bcfe)
adds task token and usage estimates to the agent command center. That is a
presentation and estimation change, not a provider reset event. The two new
release records were prerelease builds and supplied no reset statement.

## Historical leads and ledger decision

X oEmbed again validated the same author, canonical URL, text, and date for the
[June 29 promise](https://x.com/thsottiaux/status/2071740419030053227),
[July 28 completion](https://x.com/thsottiaux/status/2081940052154933696),
[July 29 completion](https://x.com/thsottiaux/status/2082317452755751098),
[August 1 completion](https://x.com/thsottiaux/status/2083395449814229287), and
the [August 8](https://x.com/thsottiaux/status/2086189414292865249) and
[August 10](https://x.com/thsottiaux/status/2086800639120888014) promise thread.
No matching openai/codex issue among the named June, July, and August leads was
updated after the prior cutoff.

The June 29 post still promises two distinct actions, a hard reset within an
hour and a banked reset within 24 hours. No qualifying completion or recipient
denominator closes either action. The July 28, July 29, and August 1 originals
remain attributed completions with unresolved breadth and nonrecipient
contradictions. The August 8 and 10 thread remains an intended ordinary reset,
not proof of broad delivery.

Pending [issue #56](https://github.com/KyleStay/codex-reset-monitor/issues/56)
is unchanged, open, and has no comments. Today's generic "Reset all
propagated" statement does not say that failed September 9 banked-reset
redemptions received replacement credits. The replacement receipt and affected
denominator therefore remain unresolved.

No historical inference, cause assessment, correction, or earlier feature
snapshot should change from these rechecks. The new September 12 episode can be
represented prospectively after its actual discovery and approval times only.

## Point-in-time-safe pattern audit

Grades describe evidence, not probability. Grade A is provider, observer, or
source-native chronology. Grade B is public repository evidence. Grade C is an
attributed statement used directionally. Grade D is a population, causal, or
predictive inference.

| Pattern | Exact sample, range, cutoff, and evidence | Support, contradiction, lead time, grade | Change since September 11 |
| --- | --- | --- | --- |
| Provider-owned bounded transition | `n=14` verified observations from `2026-08-08T09:23:05.496Z` through `2026-09-12T08:12:46.020Z`; `n=13` gaps; observer fields and maintainer-verified issues; cutoff `2026-09-12T09:25:41Z`. | The gaps span `11h09m42.937s` to `195h30m43.288s`. The last two are `29h10m31.902s` and `13h10m40.490s`. Meter/access transition plus a stable advanced anchor remains Grade A for this account. Population breadth is Grade D. | Strengthened by two verified transitions. |
| Banked-reset redemption | `n=2` paired credit and meter events from `2026-09-10T13:51:33.628Z` through `2026-09-11T19:02:05.530Z`; verified issues #57 and #58; current cutoff. | Both events lowered available credits by one while restoring the full usage window and advancing the weekly anchor. This is Grade A account-state evidence. Neither event proves the exact UI action or broader delivery. Issue #44951 is a failure contradiction, not a receipt. | Strengthened from `n=1` to `n=2`. |
| Tibo promise to independently observed delivery | `n=2` qualifying originals in the current `n=8` candidate set, `2026-09-12T03:20:36.181Z` to `08:09:17.852Z`; X profile, oEmbed, ID-derived time, and issue #59; discovery cutoff `08:59:47.463Z`, audit cutoff above. | The promise led the observer upper bound by `4h52m09.839s`. Completion fell inside the `10m25.664s` observer interval and was `3m28.168s` before the upper sample. Grade A for attribution and this account's transition, C for directional promise value, D for universal delivery or cause. | New episode; strengthens short-window directional value. |
| Completed wording versus future wording | `n=2` current qualifying statements, one promise and one completion, over `4h48m41.671s`; same evidence and cutoffs. | The completion followed the promise and overlapped a verified transition. The words "all propagated" lack a recipient denominator and conflict with the broader history of nonreceipt and display divergence. Grade A wording, A one-account corroboration, D population scope. | Strengthened for one-account timing; universal reading remains unsupported. |
| Originals versus replies | `n=8` current candidates, `n=5` originals and `n=3` replies, September 12; oEmbed and source-native profile; current cutoff. | Both qualifying records were originals. All three replies were nonqualifying. One one-day set is too small to infer that originals are generally more predictive. Grade A attribution, D predictive inference. | New current split; still sparse. |
| Incident phase linkage | `n=3` official incidents created or updated from `2026-09-11T10:16:31Z` through `2026-09-12T01:57:37Z`; Status chronology; current cutoff. | Europe, Sol API, and ChatGPT Work incident updates mention errors and recovery, not quota reset or compensation. The Work incident resolved `1h23m00.181s` before the reset promise, but no source links the affected users or cause. Grade A chronology, D linkage. | Strengthened as negative controls. |
| Public usage and accounting reports | `n=15` title-matched new issues among `n=185` non-PR issues, `2026-09-11T10:34:30Z` through `2026-09-12T07:34:50Z`; issue bodies and comments; current cutoff. | Reports cover failed redemption, rapid depletion, meter jumps, account attribution, and credit accounting. They lack provider bounds, staff diagnosis, and a population denominator. Grade B contradiction evidence, D prevalence and cause. | Strengthened contradiction coverage only. |
| Releases and implementation activity | `n=40` commits, `n=41` first-page PR updates, and `n=2` releases after the prior cutoff; GitHub source-native chronology; current cutoff. | No reset-policy, quota-restoration, or credit-accounting implementation appeared. The usage-estimate UI change is not an event. Grade A chronology, D reset linkage. | Unchanged. |
| Discovery and mirror completeness | `n=8` candidates, September 12; feed, two exact-DID mirrors, X, and oEmbed; discovery cutoff `08:59:47.463Z`. | Preferred coverage was `8/8`; fallback was `5/8` and omitted all replies. Lag ranged from about two to thirteen minutes. Split and truncated long posts preserve context risk. Grade A canonical validation, B current discovery, D completeness. | Strengthened current coverage; fallback incompleteness unchanged. |
| Cadence, cooldown, weekday, and UTC hour | `n=14` heterogeneous transitions and `n=13` gaps, August 8 through September 12; verified observer records; current cutoff. | The series mixes two scheduled events, eleven out-of-cycle events, an initial event without prior classification, and two banked redemptions. Gap range remains wide. One Saturday promise/reset episode cannot support a weekday, UTC-hour, or cooldown rule. Grade D. | Unchanged; simple cadence remains refuted. |

## Strongest predictors, failures, and next tests

The strongest detector remains a bounded exhausted-to-available or near-zero
meter transition paired with a material, stable provider-anchor advance. A
simultaneous credit-count decrease now distinguishes two observed banked-reset
redemptions from the credit-unchanged September 12 out-of-cycle reset.

Today's canonically validated promise supplied a useful watch window. Its later
completion fell inside the observer interval and within minutes of the verified
upper sample. That is the strongest public-to-observer pairing in this run.
The right interpretation is narrow: attributed action plus one corroborated
account, not universal delivery.

Signals that failed or remain too sparse are issue volume, weekday and UTC-hour
rules, reset-to-reset cooldown, launch or milestone context, incidents without
quota language, quality-fix descriptions, reply activity, mirror text without
canonical validation, and display-only meter changes. Public issue clusters
continue to reveal contradictions but have not predicted a provider-bounded
transition. The phrase "all propagated" cannot replace recipient and
nonrecipient evidence.

Next observable tests:

1. Seek an independent recipient and nonrecipient pair for the September 12
   episode, preserving plan, workspace, bucket, credit state, meter display,
   enforcement, and provider anchor separately.
2. Follow the observed account to its new September 19
   `08:09:56Z` anchor. Require a bounded transition before labeling another
   event. Track the remaining banked credit separately.
3. Recheck issues #60 and #61 after maintainer review. Their approval time, not
   their publication time, controls future forecast eligibility.
4. Recheck issue #56 for an explicit replacement-credit receipt. A general
   out-of-cycle reset is not a replacement banked-reset grant.
5. Continue the June 29, July 28 and 29, August 1, and August 8 and 10 gaps.
   Do not rewrite an earlier feature snapshot with later-discovered evidence.

## Forecast impact

The parent refresh at `2026-09-12T09:20:41.044Z` contains `14` verified
observations, `4` retained Codex-relevant official incidents, and `4` approved
public sources. It reports no rejected or duplicate record. The two new pending
Tibo sources are not inputs.

The deterministic forecast now reports raw probability
`0.010586635002431049` at every `1/3/6/12/24` hour horizon, displayed near 1%.
The likely interval moved to `2026-09-19T01:53:44Z` through
`2026-09-19T14:26:08Z`, confidence `D`, because issue #59 supplied the newest
provider anchor. Performance is `n=38`; model and baseline Brier are both
`0.10940000000000005`. No model was promoted, no probability was assigned by
this research lane, and no historical feature snapshot was rewritten.
