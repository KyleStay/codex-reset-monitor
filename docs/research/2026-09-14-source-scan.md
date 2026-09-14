# Source scan for 2026-09-14

Research cutoff: `2026-09-14T09:25:56Z` (UTC). The prior cutoff was
`2026-09-13T09:25:43Z`. This is a bounded, point-in-time-safe audit of sources
approved by `data/source-policy.json`. It also rechecks the named historical
gaps without moving later-discovered evidence into an earlier forecast
snapshot. This lane wrote this note only. It did not create or relabel issues,
alter forecast data or code, run `update:data`, commit, or push.

## Result

No new completed reset, future-reset promise, banked-reset grant, redemption,
or official mechanism change qualified after the prior cutoff. The observer
also recorded no new transition. At `2026-09-14T09:16:06.890Z`, its allowed
status fields showed the primary bucket at `71%` used, the same
`2026-09-19T08:09:56Z` provider anchor, one available banked reset, `14`
published reset detections, and no pending publication.

Official Status added three resolved incidents. Two affected Codex surfaces,
but none mentions a reset, quota restoration, credit, compensation, meter, or
allowance change. They are incident context only.

The exact [Tibo profile](https://x.com/thsottiaux) loaded source-natively with
`2,951 posts` and showed the newest original post. X required login when the
public Replies tab was selected, so the profile did not provide a complete
reply timeline. The approved discovery feed contained exactly four candidates
after the prior cutoff. All four passed X-owned oEmbed validation for author,
author URL, canonical URL, public text, and calendar date. One was an original
and three were replies. All four are nonqualifying commentary.

Public `openai/codex` issue #45236 is the most useful new contradiction. Its
author reports that a weekly provider anchor moved to September 19 without a
banked-reset redemption while two credits remained available. The account then
remained locked out. This strengthens the rule that an anchor move alone is not
reset evidence and weakens any claim of uniform September 12 delivery. It is
still one unverified public report with no provider-bounded samples or staff
diagnosis.

## Retrieval record and source boundary

All times are UTC. I retained only public source text and metadata plus the
privacy-minimized observer fields allowed by project policy. I did not read or
retain private account material, prompts, responses, conversations,
credentials, cookies, logs, or session history. From the configured third-party
feed I read only `fetchedAt`, `sourceErrors.tibo`, and raw `tiboPosts`. I did not
use its forecast, classifier, `tiboSignal`, `tweetAssessment`, probability, or
score.

| Source | Bounded result |
| --- | --- |
| [OpenAI Status incidents API](https://status.openai.com/api/v2/incidents.json) | Retrieved during this audit; `page.updated_at=2026-09-14T03:57:19Z`. Three incidents were created after the prior cutoff. The two Codex-related records and one ChatGPT-Europe record are operational incidents, not resets. |
| [Banked-reset Help](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work) and [ChatGPT-plan Codex Help](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan) | The official web retrieval still shows the existing separation between automatic resets, user-redeemed banked resets, and purchased credits. It still says a successful banked redemption refreshes eligible windows and changes the weekly reset date. Direct HTTP retrieval returned a Cloudflare `403`, and the pages expose only relative update labels, so this run assigns no exact revision time and infers no content change. |
| [ChatGPT and Codex changelog](https://developers.openai.com/codex/changelog) | Retrieved at `2026-09-14T09:23:49Z`; HTTP metadata reported `Last-Modified: 2026-09-13T21:21:04Z` and ETag `a293bb62794fb7d171ce7d6565c94733`. The newest displayed dated entry remains September 11. No September 13 or 14 reset, usage-window, credit, or quota-accounting entry appeared. |
| [OpenAI release notes](https://openai.com/products/release-notes/) and [News](https://openai.com/news/) | Direct HTML retrieval returned Cloudflare `403`. The official page sitemap reports release-notes `lastmod=2026-09-14T07:51:02.235Z`, so its post-cutoff content status is unresolved and needs recheck. The official [News RSS](https://openai.com/news/rss.xml), built `2026-09-14T08:45:01Z`, contained one post-cutoff item about Perplexity using Astra. It has no reset, limit, credit, or quota statement. |
| Public [openai/codex issues](https://github.com/openai/codex/issues), [pull requests](https://github.com/openai/codex/pulls), [commits](https://github.com/openai/codex/commits/main/), and [releases](https://github.com/openai/codex/releases) | `179` new non-pull-request issues appeared after the prior cutoff. Thirteen title-keyword matches included ten usage, reset, credit, or capacity-adjacent records after removing three API-key, credential-reset, and conversation-reset homonyms. Forty rate-limit-labeled threads were updated; their reviewed post-cutoff comments supplied no staff diagnosis. Across the broader issue set, `491` comments had zero `MEMBER`, `OWNER`, or `COLLABORATOR` authors. The same interval had eight commits, nine updated pull requests, and zero releases. |
| [Configured Tibo profile](https://x.com/thsottiaux) and X-owned [oEmbed](https://publish.twitter.com/oembed) | The public profile loaded `2,951 posts` and showed the newest original. Its Replies tab was login-gated. All `4/4` discovered candidates passed oEmbed author, URL, text, and date validation as Tibo at `https://x.com/thsottiaux`. Exact UTC came from each X Snowflake ID because oEmbed has no `created_at`. |
| [Approved discovery feed](https://www.willcodexquotareset.com/api/forecast) | `fetchedAt=2026-09-14T09:02:50.829Z`, `sourceErrors.tibo=null`, and exactly four raw post-cutoff candidates. The feed is discovery only. |
| [Preferred exact-DID mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcaom2u2hfsm3aqab5dfvhxs&limit=100) and [fallback exact-DID mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcelwndiefenpjvnm6uood4t&limit=100) | The preferred mirror represented `4/4` candidates with indexing lags from `1m44.661s` to `15m58.857s`. The fallback represented `1/4`, the original, after `14.363s`; it omitted all three replies. Both remain unofficial discovery aids. |

## Official incidents

- [Codex GitHub Review and Pull Request Failures](https://status.openai.com/incidents/01M2D1CZG0862JB4JHVW56QF89)
  began at `2026-09-13T09:26:00Z`. OpenAI identified an upstream GitHub
  disruption at `09:32:51Z`, posted recovery updates at `09:53:42Z` and
  `09:55:55Z`, and posted its final resolved update at `10:53:10Z`. The record
  concerns review publication and pull-request creation, not limits.
- [Elevated errors for ChatGPT users in Europe](https://status.openai.com/incidents/01M2DV6788RRSDZ5K98S5HN0A8)
  ran from `2026-09-13T16:56:41Z` to `17:47:55Z`. It is a ChatGPT-only
  negative control.
- [Elevated error rates for Codex and ChatGPT Work](https://status.openai.com/incidents/01M2EWYR55J47M2BPG9WC76VEG)
  ran from `2026-09-14T02:46:48Z` to `03:57:19Z`, with monitoring beginning at
  `03:42:18Z`. The record reports errors, mitigation, and recovery only. No
  source links it to a reset or account-level quota change.

## Canonically validated Tibo candidates

| Canonical post | ID-derived UTC | Classification |
| --- | --- | --- |
| [2099393115241300166](https://x.com/thsottiaux/status/2099393115241300166) | `2026-09-14T07:01:38.168Z` | Original asking which Codex feature should be removed. Nonqualifying product feedback. |
| [2099393997026582791](https://x.com/thsottiaux/status/2099393997026582791) | `2026-09-14T07:05:08.402Z` | Reply, "lol." Nonqualifying commentary. |
| [2099394367744356554](https://x.com/thsottiaux/status/2099394367744356554) | `2026-09-14T07:06:36.788Z` | Reply, "We will fix this," to criticism of the Chat, Work, and Codex separation. Product promise, not a reset or usage-limit promise. |
| [2099394561076568290](https://x.com/thsottiaux/status/2099394561076568290) | `2026-09-14T07:07:22.882Z` | Reply asking for a design critique. Nonqualifying commentary. |

The discovery feed rounded each source timestamp to whole seconds. oEmbed
matched all four visible texts and the September 14 calendar date. The
source-native Posts tab showed the original, but X's login requirement blocked
a public profile-level count for the three replies. That is a retrieval gap,
not evidence of omission or deletion.

## Public reports and contradictions

The ten reset, usage, credit, or capacity-adjacent new issue titles are public
claims, not verified observations. The useful records are:

- [#45236](https://github.com/openai/codex/issues/45236), created
  `2026-09-13T14:52:56Z`, reports a Pro 20x weekly date moving from September
  15 to September 19. The implied new anchor is September 12 `08:54Z`. The
  author says no reset was used, two banked credits remained, and the account
  was still locked out. This is a strong anchor and enforcement contradiction.
  It is possible independent corroboration of a September 12 out-of-cycle
  state change, but it cannot confirm a beneficial reset, breadth, cause, or a
  link to the September 9 incident.
- [#45363](https://github.com/openai/codex/issues/45363) reports that a Pro
  weekly allowance was consumed the day after a reset. It gives no exact reset
  bound, account-side denominator, or staff reply.
- [#45303](https://github.com/openai/codex/issues/45303) reports repeated Astra
  Extra High weekly depletion in roughly `2` to `2.5` days. The author
  explicitly does not claim proof of a billing error.
- [#45368](https://github.com/openai/codex/issues/45368) and
  [#45376](https://github.com/openai/codex/issues/45376) report full displayed
  quota or multiple models alongside capacity errors. Timing does not prove a
  connection to the September 14 Status incident.
- [#45292](https://github.com/openai/codex/issues/45292) reports an error on the
  credit-purchase route. It is a purchase UI failure, not a grant, redemption,
  or reset.
- [#45301](https://github.com/openai/codex/issues/45301) proposes that the
  usage dashboard groups daily totals in UTC. It is a display-accounting
  hypothesis only.
- [#45383](https://github.com/openai/codex/issues/45383) reports that resuming
  after a limit interruption consumes allowance while reconstructing task
  state. It has no reset event or provider bounds.
- [#45338](https://github.com/openai/codex/issues/45338) requests a discounted
  slow mode. It does not document a current mechanism.
- [#45395](https://github.com/openai/codex/issues/45395) reports approval-review
  capacity errors rendered as risk rejections. It is capacity and error-handling
  context, not quota or reset evidence.

No reviewed comment supplied an OpenAI staff diagnosis, recipient denominator,
provider-bounded transition, or correction. Issue clustering remains useful
for finding capacity, depletion, anchor, display, purchase, and enforcement
contradictions. It cannot measure prevalence or predict reset delivery.

The eight commits and nine updated pull requests concern packaging, sandbox
setup, worktree sessions, terminal behavior, session creation, request
metadata, and skill paths. None changes reset policy, quota restoration, meter
accounting, or banked-credit behavior. No release was published after the prior
cutoff.

## Historical leads and ledger decision

X oEmbed again matched author, canonical URL, public text, and date for the
[June 29 promise](https://x.com/thsottiaux/status/2071740419030053227),
[July 28 completion](https://x.com/thsottiaux/status/2081940052154933696),
[July 29 completion](https://x.com/thsottiaux/status/2082317452755751098),
[August 1 completion](https://x.com/thsottiaux/status/2083395449814229287),
[August 8 completion](https://x.com/thsottiaux/status/2086188036493344823),
the [August 8 Monday promise](https://x.com/thsottiaux/status/2086189414292865249),
the [August 10 context post](https://x.com/thsottiaux/status/2086800050630676504),
and the [August 10 ordinary-reset interpretation](https://x.com/thsottiaux/status/2086800639120888014).

The July 28, July 29, and August 1 canonical records remain completed-action
statements with unresolved delivery breadth, exact account completion, and
cause. The June 29 record still promises two separate actions, a hard reset
within an hour and a saved reset within 24 hours. No canonical completion or
recipient denominator closes either action. The August 8 and 10 promise thread
still lacks an independently bounded Monday delivery or canonical completion
statement.

Project [issues #56](https://github.com/KyleStay/codex-reset-monitor/issues/56),
[#60](https://github.com/KyleStay/codex-reset-monitor/issues/60), and
[#61](https://github.com/KyleStay/codex-reset-monitor/issues/61) remain open
with `public-source` and `pending-review`, no comments, and no label change.
The project still has `14` verified observations, `4` approved public sources,
and `43` pending-review sources. No issue newer than #61 exists. Issue #56
still has no replacement-credit receipt.

Issue #45236 strengthens contradiction coverage for the September 12 episode.
It does not meet the project's confirmation gate and does not establish that
the September 12 action restored usable allowance on that account. No
historical inference, cause assessment, correction, or earlier feature snapshot
should change from this source lane.

## Point-in-time-safe pattern audit

Grades describe evidence, not probability. Grade A is provider, observer, or
source-native chronology. Grade B is public repository evidence. Grade C is an
attributed statement used directionally. Grade D is a population, causal, or
predictive inference.

| Pattern | Exact sample, range, cutoff, and evidence | Support, contradiction, lead time, grade | Change since September 13 |
| --- | --- | --- | --- |
| Provider-owned bounded transition | `n=14` verified observations from `2026-08-08T09:23:05.496Z` through `2026-09-12T08:12:46.020Z`; `n=13` gaps; observer fields and maintainer-verified issues; cutoff `2026-09-14T09:25:56Z`. | No fifteenth transition appeared. Gaps still span `11h09m42.937s` to `195h30m43.288s`. A meter or access transition plus a stable advanced anchor remains Grade A for this account. Population breadth is Grade D. | Unchanged. |
| Banked-reset redemption | `n=2` paired credit and meter events from `2026-09-10T13:51:33.628Z` through `2026-09-11T19:02:05.530Z`; verified issues #57 and #58; current cutoff. | Both events lowered available credits by one while restoring a full window and advancing the anchor. Issue #45236 supplies the opposite signature, an unchanged credit count and an anchor shift without reported restored access. Grade A account-state evidence for the verified pair; Grade B contradiction for #45236. | Strengthened contradiction coverage. |
| Tibo promise to independently observed delivery | `n=2` point-in-time episodes from `2026-09-07T19:24:57.786Z` through `2026-09-12T08:12:46.020Z`; canonical X/oEmbed promises, later observer bounds, and completion wording; current cutoff. | Promise-to-observer-upper-bound lead times remain `6h03m50.593s` and `4h52m09.839s`, a range of `4h52m09.839s` to `6h03m50.593s`. Grade C directional evidence. Two episodes and one observed account cannot establish a general rule, universal delivery, or cause. | Unchanged; today's four posts add no reset signal. |
| Completed wording versus future wording | `n=4` qualifying statements, two promises and two completions, from `2026-09-07T19:24:57.786Z` through `2026-09-12T08:09:17.852Z`; canonical X/oEmbed plus observer bounds; current cutoff. | The September 7 completion followed its observer transition by `2h37m05.099s`; the September 12 completion fell inside the observer interval and preceded its upper sample by `3m28.168s`. Completion wording is not an exact universal timestamp. Grade A wording and one-account chronology, Grade D breadth. | Unchanged. |
| Originals versus replies | `n=4` new candidates, one original and three replies, from `2026-09-14T07:01:38.168Z` through `07:07:22.882Z`; feed discovery plus X/oEmbed; discovery cutoff `2026-09-14T09:02:50.829Z`. | `0/4` qualifies. The replies are negative controls, and the original is product feedback. The sample is too small to infer relative predictive value. Attribution is Grade A; predictive inference is Grade D. | Strengthened as negative controls only. |
| Broad attributed completion versus observed breadth | `n=4` canonical completed-reset statements from July 28, July 29, August 1, and August 8, 2026; X/oEmbed, public issues, and one verified August 8 observer transition; current cutoff. | Only the August 8 episode has this project's provider-bounded account confirmation. Issue #45236 adds a September 12 nonbenefit contradiction, not a receipt. No cross-account completion lead-time range is available. Attribution is Grade A, contradictions Grade B, universal breadth Grade D. | Weakened broad-delivery interpretation. |
| Incident linkage | `n=3` official incidents in the current window, two touching Codex; Status API; current cutoff. The retained unexpected-reset comparison remains `n=1` incident on September 9. | None of the three current incidents mentions quota state, credits, compensation, or restoration. Capacity reports near the September 14 Codex incident lack a shared affected set or provider bounds. Status chronology is Grade A; linkage is Grade D. | Strengthened negative-control coverage only. |
| Public usage and accounting reports | `n=10` adjacent title matches among `n=179` new issues, `2026-09-13T14:52:56Z` through `2026-09-14T09:23:32Z`; issue bodies and comments; current cutoff. Forty rate-limit-labeled threads were updated, and the broader post-cutoff comment audit found `n=491` comments with zero staff-associated authors. | Reports cover anchor movement, rapid depletion, capacity despite displayed allowance, credit checkout failure, UTC display, and resume overhead. They lack provider bounds, staff diagnosis, and a population denominator. Grade B contradiction evidence, Grade D prevalence and cause. No reliable lead time. | Strengthened contradiction coverage. |
| Releases and implementation activity | `n=8` commits, `n=9` updated pull requests, and `n=0` releases after the prior cutoff; GitHub chronology; current cutoff. | No reset-policy, quota-restoration, meter-accounting, or credit-mechanism change appeared. Grade A chronology, Grade D event linkage. | Unchanged. |
| Discovery and mirror completeness | `n=4` candidates on September 14; feed, two exact-DID mirrors, source-native profile, and X/oEmbed; discovery cutoff `2026-09-14T09:02:50.829Z`. | Preferred coverage was `4/4` with `1m44.661s` to `15m58.857s` lag. Fallback coverage was `1/4` with `14.363s` lag and no replies. The profile exposed originals but login-gated replies. Canonical validation is Grade A; feed and mirror completeness are Grade D. | Strengthened preferred coverage; fallback completeness remains weak. |
| Cadence, cooldown, weekday, and UTC hour | `n=14` heterogeneous transitions and `n=13` gaps, August 8 through September 12; verified observer records; current cutoff. | The series still mixes scheduled, out-of-cycle, and credit-coupled events. The wide gap range and lack of a new event do not support a weekday, UTC-hour, or cooldown rule. Grade D. | Unchanged; simple cadence remains refuted. |

## Strongest predictors, failures, and next tests

The strongest detector remains a bounded exhausted-to-available or near-zero
meter transition paired with a material, stable provider-anchor advance. A
simultaneous credit-count decrease distinguished two observed banked-reset
redemptions from credit-unchanged out-of-cycle resets. The latest observer
sample has neither signature. Issue #45236 is a useful warning that the anchor
can move without reported restored access.

Canonically validated Tibo promises remain useful as short directional watch
windows in two point-in-time episodes. Today's four posts add no prediction.
Completion wording has landed on both sides of the observed account transition,
so it remains unsafe as a universal completion clock.

Signals that failed or remain too sparse are issue volume, weekday and UTC-hour
rules, reset-to-reset cooldown, launch or milestone context, incidents without
explicit quota linkage, reply activity, mirror text without canonical
validation, and display-only or anchor-only changes. Public issue clusters
expose contradictions but have not predicted a provider-bounded transition.

Next observable tests:

1. Follow the observed account to its September 19 `08:09:56Z` anchor. Require
   a bounded meter or access transition and a stable new anchor before labeling
   another reset. Track the remaining saved reset separately.
2. Seek an independent recipient and nonrecipient pair for the September 12
   episode. Recheck #45236 for a later staff response or account-side bound, and
   keep displayed usage, enforcement, anchor, plan, bucket, and credit state
   separate.
3. Recheck the September 14 Codex and ChatGPT Work incident against later
   provider-bounded observations. Do not infer quota restoration from service
   recovery language.
4. Recheck issues #60 and #61 after maintainer review. Their approval time, not
   publication time, controls future forecast eligibility.
5. Recheck issue #56 for an explicit replacement-credit receipt. A general
   automatic reset is not a replacement banked-reset grant.
6. Recheck the official release-notes page because its sitemap `lastmod`
   advanced after the prior cutoff while direct content retrieval was blocked.
7. Continue the June 29 completion and grant search, the July 28 and 29 and
   August 1 breadth checks, and the August 8 and 10 promised-action check. Do
   not rewrite an earlier feature snapshot with later-discovered evidence.

## Forecast impact

This source lane found no new approved reset signal, verified transition,
completed credit event, or mechanism change. The four new Tibo records are
nonqualifying. Project issues #56, #60, and #61 remain pending and
forecast-ineligible. The three Status incidents are incident context only, and
issue #45236 is unverified contradiction evidence. The research itself
therefore requires no deterministic forecast-input change and no historical
snapshot rewrite. Final generated counts, probability, performance, and
interval belong to the parent `update:data` refresh and are not claimed by this
source-only note.
