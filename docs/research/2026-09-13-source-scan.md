# Source scan for 2026-09-13

Research cutoff: `2026-09-13T09:25:43Z` (UTC). The prior cutoff was
`2026-09-12T09:25:41Z`. This is a bounded, point-in-time-safe audit of sources
approved by `data/source-policy.json`. It also rechecks the named historical
gaps without moving later-discovered evidence into an earlier forecast
snapshot. This lane wrote this note only. It did not create or relabel issues,
alter data, run `update:data`, commit, or push.

## Result

No new completed reset, future-reset promise, banked-reset grant, redemption,
usage-window change, or official incident qualified after the prior cutoff.
The observer also recorded no new transition. At
`2026-09-13T09:15:26.100Z`, its allowed status fields showed the primary bucket
at `38%` used, the same `2026-09-19T08:09:56Z` provider anchor, one available
reset credit, `14` published reset detections, and no pending publication.

The exact [Tibo profile](https://x.com/thsottiaux) returned X's public
"This page is down" error during today's source-native browser review. I did
not substitute an unconfigured scraper. The approved discovery feed contained
exactly three candidates after the prior cutoff. All three were short replies,
all three passed X-owned oEmbed validation for author, author URL, canonical
URL, public text, and calendar date, and all three were nonqualifying
commentary. No new public-source issue is warranted.

Official Status contained no incident created or updated after the prior
cutoff. The official Help pages still separate automatic resets from saved
banked resets and say a successful banked redemption changes the weekly reset
date. The current official changelog gained a displayed September 11 desktop
entry since yesterday's scan, but it contains no usage-limit, reset, credit, or
quota-accounting change. Official release notes and News supplied no new
reset-relevant record.

Public `openai/codex` issues add useful contradictions, not a new event. The
bounded issue API returned `168` newly created non-pull-request issues, of which
`19` had reset, limit, quota, usage, credit, allowance, depletion, meter, or
capacity terms in the title. Reports cover a shifted weekly date after a banked
reset, credit use failing at a five-hour limit, rapid allowance depletion,
separate-bucket enforcement, and usage consumed after a blocked request. No
reviewed comment supplied an OpenAI staff diagnosis or a second
provider-bounded account transition.

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
| [OpenAI Status incidents API](https://status.openai.com/api/v2/incidents.json) | Retrieved during this audit. Zero incidents were created or updated after `2026-09-12T09:25:41Z`. The API therefore supplies no new incident, reset, compensation, or recovery record. |
| [Banked-reset Help](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work) and [ChatGPT-plan Codex Help](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan) | Retrieved on September 13. The pages still distinguish automatic resets from user-redeemed banked resets, say a full banked reset refreshes eligible windows and changes the weekly reset date, and warn that eligibility and delivery vary. The current pages expose only relative update labels, so I inferred no exact revision time. |
| [ChatGPT and Codex changelog](https://developers.openai.com/codex/changelog), [OpenAI release notes](https://openai.com/products/release-notes/), and [News](https://openai.com/news/) | The changelog now displays a September 11 desktop update first observed in this run. Its items concern Pets, Appshots, files, dictation, tabs, and response comments. The release-notes page still tops out at September 10. No September 12 or 13 reset, credit, usage-window, or accounting announcement appeared. |
| Public [openai/codex issues](https://github.com/openai/codex/issues), [pull requests](https://github.com/openai/codex/pulls), [commits](https://github.com/openai/codex/commits/main/), and [releases](https://github.com/openai/codex/releases) | After the prior cutoff, `168` new non-pull-request issues included `19` title-keyword matches. The same interval had `19` commits, `22` first-page pull requests updated, and zero releases. No reviewed staff comment or implementation record diagnosed the reports or changed reset policy. |
| [Configured Tibo profile](https://x.com/thsottiaux) and X-owned [oEmbed](https://publish.twitter.com/oembed) | The source-native profile returned X's public error page. All `3/3` feed candidates passed oEmbed author, URL, text, and date validation as Tibo at `https://x.com/thsottiaux`. Exact UTC came from each X Snowflake ID because oEmbed has no `created_at`. |
| [Approved discovery feed](https://www.willcodexquotareset.com/api/forecast) | `fetchedAt=2026-09-13T09:00:23.298Z`, `sourceErrors.tibo=null`, and exactly three raw post-cutoff candidates. The feed is discovery only. |
| [Preferred exact-DID mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcaom2u2hfsm3aqab5dfvhxs&limit=100) and [fallback exact-DID mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcelwndiefenpjvnm6uood4t&limit=100) | The preferred mirror represented `3/3` candidates with indexing lags of `5m52.458s`, `3m07.521s`, and `6m06.301s`. The fallback's latest 20 records represented `0/3`. Both remain unofficial discovery aids, and the fallback gap again shows why it cannot be the only monitor. |

## Canonically validated Tibo candidates

| Canonical post | ID-derived UTC | Classification |
| --- | --- | --- |
| [2098814684359270845](https://x.com/thsottiaux/status/2098814684359270845) | `2026-09-12T16:43:09.499Z` | Reply, "Thanks for doing your part Tibo." Nonqualifying commentary. |
| [2098905968096719251](https://x.com/thsottiaux/status/2098905968096719251) | `2026-09-12T22:45:53.238Z` | Reply, "Benefits All." Nonqualifying without parent context, reset wording, or an action statement. |
| [2098954268963479958](https://x.com/thsottiaux/status/2098954268963479958) | `2026-09-13T01:57:49.062Z` | Reply, "Is that a threat?" Nonqualifying commentary. |

The feed rounded each source timestamp to whole seconds. oEmbed matched all
three visible texts and calendar dates. The source-native profile failure means
today's profile-level post count and timeline order are unavailable. That is a
retrieval gap, not evidence of deletion, omission, or a quiet period.

## Public reports and contradictions

The `19` title-matched issues span `2026-09-12T10:58:26Z` through
`2026-09-13T08:08:39Z`. They are public claims, not verified observations.
Representative records are:

- [#45146](https://github.com/openai/codex/issues/45146) says a user-redeemed
  reset moved the weekly date forward and the account then consumed the new
  window. This matches the current Help mechanism at a high level, but the
  report treats the date change and lost token as unexpected. It has no
  provider before-and-after samples or staff reply.
- [#45193](https://github.com/openai/codex/issues/45193) reports that a Plus
  account with credits could not continue after reaching the five-hour limit
  and received a capacity message. The only comment is a bot translation.
- [#45195](https://github.com/openai/codex/issues/45195) explicitly reports no
  redemption. It asks the product to distinguish current allowance, automatic
  renewal, and optional saved resets. The supplied status showed 71% weekly
  allowance remaining and two saved resets.
- [#45086](https://github.com/openai/codex/issues/45086),
  [#45085](https://github.com/openai/codex/issues/45085),
  [#45073](https://github.com/openai/codex/issues/45073), and
  [#45067](https://github.com/openai/codex/issues/45067) report rapid depletion
  under Astra, Sol, or mixed use. They supply varying local token summaries and
  elapsed times, but no shared provider denominator or staff diagnosis.
- [#45029](https://github.com/openai/codex/issues/45029) reports the general
  weekly allowance at zero while separate Spark allowances appeared full, yet
  enforcement still cited the general reset date. This is a display and
  enforcement contradiction, not a reset.
- [#45015](https://github.com/openai/codex/issues/45015) reports allowance
  warnings continuing after a security-classifier block. It asks for a refund
  but records no grant, redemption, or restored window.

Reviewed comments were bot duplicate notices, translation, or user discussion.
No OpenAI staff member supplied a cause, receipt, correction, affected-set
denominator, or provider-bound transition. Report volume remains useful for
finding display, enforcement, and accounting contradictions. It cannot measure
prevalence or predict delivery.

The `19` commits and `22` recently updated pull requests contain no reset-policy
or quota-accounting change. Keyword matches in commit text referred to token
groups, configuration size limits, title cancellation, and history-token
estimation. Those are implementation homonyms, not usage-reset evidence. No
release was published after the prior cutoff.

## Historical leads and ledger decision

X oEmbed again matched author, canonical URL, public text, and date for the
[June 29 promise](https://x.com/thsottiaux/status/2071740419030053227),
[July 28 completion](https://x.com/thsottiaux/status/2081940052154933696),
[July 29 completion](https://x.com/thsottiaux/status/2082317452755751098),
[August 1 completion](https://x.com/thsottiaux/status/2083395449814229287),
[August 8 completion](https://x.com/thsottiaux/status/2086188036493344823),
and the [August 8 promise](https://x.com/thsottiaux/status/2086189414292865249)
and [August 10 interpretation](https://x.com/thsottiaux/status/2086800639120888014).

The canonical July 28, July 29, and August 1 records are no longer discovery
gaps. Their remaining gaps are delivery breadth, exact per-account completion,
and cause. None of the named public issues for June 29, July 28 and 29, or
August 1 was updated after the prior cutoff. The June 29 post still promises
two separate future actions, a hard reset within an hour and a saved reset
within 24 hours. No qualifying completion or recipient denominator closes
either action. The August 8 and 10 future-promise thread still lacks an
independently bounded Monday delivery or canonical completion statement.

Project [issues #56](https://github.com/KyleStay/codex-reset-monitor/issues/56),
[#60](https://github.com/KyleStay/codex-reset-monitor/issues/60), and
[#61](https://github.com/KyleStay/codex-reset-monitor/issues/61) remain open
with `public-source` and `pending-review`, no comments, and no label change.
No project evidence issue newer than #61 exists. Issue #56 still has no
replacement-credit receipt. The September 12 general completion does not say
that failed September 9 banked-reset redemptions received replacement credits.

No historical inference, cause assessment, correction, or earlier feature
snapshot should change from these rechecks.

## Point-in-time-safe pattern audit

Grades describe evidence, not probability. Grade A is provider, observer, or
source-native chronology. Grade B is public repository evidence. Grade C is an
attributed statement used directionally. Grade D is a population, causal, or
predictive inference.

| Pattern | Exact sample, range, cutoff, and evidence | Support, contradiction, lead time, grade | Change since September 12 |
| --- | --- | --- | --- |
| Provider-owned bounded transition | `n=14` verified observations from `2026-08-08T09:23:05.496Z` through `2026-09-12T08:12:46.020Z`; `n=13` gaps; observer fields and maintainer-verified issues; cutoff `2026-09-13T09:25:43Z`. | No fifteenth transition appeared. Gaps still span `11h09m42.937s` to `195h30m43.288s`. Meter or access transition plus a stable advanced anchor remains Grade A for this account. Population breadth is Grade D. | Unchanged. |
| Banked-reset redemption | `n=2` paired credit and meter events from `2026-09-10T13:51:33.628Z` through `2026-09-11T19:02:05.530Z`; verified issues #57 and #58; current cutoff. | Both events lowered available credits by one while restoring a full window and advancing the anchor. Grade A account-state evidence. Issue #45146 supplies a date-shift complaint but no provider bounds; #45193 supplies a failure claim. Neither is another receipt. | Unchanged; contradiction coverage strengthened. |
| Tibo promise to independently observed delivery | `n=2` point-in-time episodes from `2026-09-07T19:24:57.786Z` through `2026-09-12T08:12:46.020Z`; canonical X/oEmbed promises, later observer bounds, and completion wording; current cutoff. | Promise-to-observer-upper-bound lead times are `6h03m50.593s` and `4h52m09.839s`, a range of `4h52m09.839s` to `6h03m50.593s`. Both support short directional watch windows at Grade C. Two episodes and one observed account cannot establish a general rule, universal delivery, or cause, which remain Grade D. | Unchanged; today's three replies add no signal. |
| Completed wording versus future wording | `n=4` qualifying statements, two promises and two completions, from `2026-09-07T19:24:57.786Z` through `2026-09-12T08:09:17.852Z`; canonical X/oEmbed plus observer bounds; current cutoff. | The September 7 completion followed its observer transition by `2h37m05.099s`; the September 12 completion fell inside the observer interval and preceded its upper sample by `3m28.168s`. Completion wording therefore varies around account delivery and cannot be treated as an exact universal timestamp. Grade A wording and one-account chronology, Grade D breadth. | Unchanged. |
| Originals versus replies | `n=3` new candidates, all replies, from `2026-09-12T16:43:09.499Z` through `2026-09-13T01:57:49.062Z`; feed discovery plus X oEmbed; discovery cutoff `2026-09-13T09:00:23.298Z`. | `0/3` qualifies. This adds negative controls but is too small to conclude that replies are generally less useful. Attribution is Grade A; predictive inference is Grade D. | Strengthened as negative controls only. |
| Broad attributed completion versus observed breadth | `n=4` canonical completed-reset statements from July 28, July 29, August 1, and August 8, 2026; X/oEmbed, public issues, and one verified August 8 observer transition; current cutoff. | Only the August 8 episode has this project's provider-bounded account confirmation. July and August public reports preserve nonreceipt, display, and post-reset depletion contradictions. No cross-account completion lead-time range is available. Attribution is Grade A, reported contradictions Grade B, universal breadth Grade D. | Unchanged. |
| Incident linkage | `n=0` official incidents created or updated in the current cutoff window; Status API; current cutoff. The retained unexpected-reset comparison remains `n=1` incident on September 9. | No new phase chronology can be correlated. The retained incident resolved `29m22.197s` before a banked-reset replacement promise, but no source proves a shared affected set or cause. Status chronology is Grade A; linkage is Grade D. | Unchanged; no current incident support. |
| Public usage and accounting reports | `n=19` title-matched new issues among `n=168` new non-pull-request issues, `2026-09-12T10:58:26Z` through `2026-09-13T08:08:39Z`; issue bodies and comments; current cutoff. | Reports cover redemption confusion, failed credit use, rapid depletion, bucket enforcement, and usage after blocked output. They lack provider bounds, staff diagnosis, and a population denominator. Grade B contradiction evidence, Grade D prevalence and cause. No reliable lead time. | Strengthened contradiction coverage only. |
| Releases and implementation activity | `n=19` commits, `n=22` first-page pull-request updates, and `n=0` releases after the prior cutoff; GitHub chronology; current cutoff. | No reset-policy, quota-restoration, or credit-accounting change appeared. Grade A chronology, Grade D event linkage. | Unchanged. |
| Discovery and mirror completeness | `n=3` candidates from September 12 to 13; feed, two exact-DID mirrors, and X oEmbed; discovery cutoff `2026-09-13T09:00:23.298Z`. | Preferred coverage was `3/3` with `3m07.521s` to `6m06.301s` lag. Fallback coverage was `0/3`. The X profile itself failed. Canonical candidate validation remains Grade A; feed and mirror completeness remain Grade D. | Weakened source redundancy because the fallback and profile supplied no timeline. |
| Cadence, cooldown, weekday, and UTC hour | `n=14` heterogeneous transitions and `n=13` gaps, August 8 through September 12; verified observer records; current cutoff. | The series still mixes scheduled, out-of-cycle, and credit-coupled events. The wide gap range and lack of a new event do not support a weekday, UTC-hour, or cooldown rule. Grade D. | Unchanged; simple cadence remains refuted. |

## Strongest predictors, failures, and next tests

The strongest detector remains a bounded exhausted-to-available or near-zero
meter transition paired with a material, stable provider-anchor advance. A
simultaneous credit-count decrease has distinguished two observed banked-reset
redemptions from credit-unchanged out-of-cycle resets. The latest sample has
neither signature.

Canonically validated Tibo promises remain useful as short directional watch
windows in two point-in-time episodes. Today's replies add no prediction and
do not widen that sample. Completion wording has landed on both sides of the
observed account transition, so it is unsafe as a universal completion clock.

Signals that failed or remain too sparse are issue volume, weekday and UTC-hour
rules, reset-to-reset cooldown, launch or milestone context, incidents without
explicit quota linkage, reply activity, mirror text without canonical
validation, and display-only meter changes. Public issue clusters expose real
contradictions but have not predicted a provider-bounded transition.

Next observable tests:

1. Follow the observed account to its September 19 `08:09:56Z` anchor. Require
   a bounded meter or access transition and a stable new anchor before labeling
   another reset. Track the remaining saved reset separately.
2. Seek an independent recipient and nonrecipient pair for the September 12
   episode. Preserve plan, workspace, bucket, credit state, displayed meter,
   enforcement, and provider anchor separately.
3. Recheck issues #60 and #61 after maintainer review. Their approval time, not
   their publication time, controls future forecast eligibility.
4. Recheck issue #56 for an explicit replacement-credit receipt. A general
   automatic reset is not a replacement banked-reset grant.
5. Continue the June 29 completion and grant search, the July 28 and 29 and
   August 1 breadth checks, and the August 8 and 10 promised-action check. Do
   not rewrite an earlier feature snapshot with later-discovered evidence.

## Forecast impact

This source lane found no new approved reset signal, verified transition,
incident, or mechanism change. The three new Tibo records are nonqualifying,
and project issues #56, #60, and #61 remain pending and forecast-ineligible.
The research itself therefore requires no deterministic forecast-input change
and no historical snapshot rewrite. Final generated counts, probability,
performance, and interval belong to the parent `update:data` refresh and are
not claimed by this source-only note.
