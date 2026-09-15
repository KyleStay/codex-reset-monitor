# Source scan for 2026-09-15

Research cutoff: `2026-09-15T09:20:57.683Z` (UTC). The prior cutoff was
`2026-09-14T09:25:56Z`. This note records a bounded, point-in-time-safe audit
of sources approved by `data/source-policy.json`. Later discoveries were not
inserted into earlier forecast snapshots. This research lane created this note
only. It did not create or relabel issues, modify data or code, commit, or push.

## Result

No new completed reset, future-reset promise, banked-reset grant, redemption,
official reset mechanism change, historical inference, supported cause, or
correction qualified in this window.

The privacy-minimized observer also recorded no fifteenth transition. At
`2026-09-15T09:19:53.091Z`, the individual-paid Codex bucket was `86%` used,
was not exhausted, and retained its `2026-09-19T08:09:56Z` provider anchor.
One banked reset remained available. The observer had `14` published
detections and no pending publication.

The exact [Tibo profile](https://x.com/thsottiaux) loaded source-natively with
`2,956 posts` and exposed the newest original post. X presented a login prompt
instead of a public Replies timeline. The approved discovery feed supplied
exactly five post-cutoff candidates, one original and four replies. All five
passed X-owned oEmbed validation for the configured author, canonical URL,
public text, and date. All five are nonqualifying commentary.

Three new official incidents are operational negative controls. None mentions
a reset, quota restoration, banked credit, compensation, meter change, or
allowance change. Public `openai/codex` issues add useful contradictions around
capacity, meter display, delivery, model entitlement, credit state, and
enforcement. They do not supply a provider-bounded second account or a staff
diagnosis.

## Retrieval record and source boundary

All times are UTC. I retained only public source text and metadata plus the
observer fields allowed by project policy. I did not read or retain private
account material, prompts, responses, conversations, credentials, cookies,
logs, account identifiers, or session history. From the configured third-party
feed I read only `fetchedAt`, `sourceErrors.tibo`, and raw `tiboPosts`. Its
forecast, classifier, `tiboSignal`, `tweetAssessment`, probability, and score
were not read or used.

| Source | Bounded result |
| --- | --- |
| [OpenAI Status incidents API](https://status.openai.com/api/v2/incidents.json) | Retrieved for this audit; `page.updated_at=2026-09-15T07:53:36Z`. Three resolved incidents were created after the prior cutoff. None describes quota restoration or reset delivery. |
| [Banked-reset Help](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work) and [ChatGPT-plan Codex Help](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan) | The source-visible text still separates automatic resets, user-redeemed banked resets, and purchased credits. It says a successful banked redemption refreshes eligible windows and changes the weekly reset date. The banked-reset page showed only `Updated: 6 days ago`; direct HTTP retrieval remained Cloudflare-blocked, so this run assigns no exact revision timestamp. |
| [ChatGPT and Codex changelog](https://developers.openai.com/codex/changelog) | Retrieved through its official redirect to ChatGPT Learn. HTTP metadata reported `Last-Modified: 2026-09-15T02:20:20Z`; the newest displayed dated entry remained September 11. No September 14 or 15 reset, quota, allowance, or credit-accounting entry appeared. |
| [OpenAI release notes](https://openai.com/products/release-notes/) and [News RSS](https://openai.com/news/rss.xml) | The canonical release-notes page loaded in the web retriever and resolved yesterday's content-visibility gap. Its newest displayed item remained September 11 and contained no reset or quota change. Direct command-line retrieval still returned Cloudflare `403`. News RSS was built `2026-09-15T08:54:17Z` and added one post-cutoff Fyxer customer story, which is unrelated to limits. |
| Public [openai/codex issues](https://github.com/openai/codex/issues), [comments](https://github.com/openai/codex/issues), [pull requests](https://github.com/openai/codex/pulls), [commits](https://github.com/openai/codex/commits/main/), and [releases](https://github.com/openai/codex/releases) | Exactly `192` non-pull-request issues were created after the prior cutoff and no later than the current cutoff. A focused manual set contained `25` reset, usage, quota, credit, allowance, capacity, display, or enforcement-adjacent reports. The same interval contained `601` issue comments and zero comments by `MEMBER`, `OWNER`, or `COLLABORATOR` authors. It also contained `65` commits, `66` updated pull requests, and `4` alpha releases. |
| [Configured Tibo profile](https://x.com/thsottiaux) and X-owned [oEmbed](https://publish.twitter.com/oembed) | The public profile showed `2,956 posts` and the newest original, but login-gated Replies. All `5/5` candidates passed oEmbed validation as Tibo at `https://x.com/thsottiaux`. Exact UTC came from each X Snowflake ID because oEmbed exposes a calendar date, not `created_at`. |
| [Approved discovery feed](https://www.willcodexquotareset.com/api/forecast) | `fetchedAt=2026-09-15T09:02:17.694Z`, `sourceErrors.tibo=null`, and exactly five raw post-cutoff candidates. This endpoint remained discovery only. |
| [Preferred exact-DID mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcaom2u2hfsm3aqab5dfvhxs&limit=100) and [fallback exact-DID mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcelwndiefenpjvnm6uood4t&limit=100) | The preferred mirror represented `5/5` candidates with indexing lag from `9m00.297s` to `14m38.122s`, calculated against ID-derived X time. The fallback represented only the original, `1/5`, after `4m33.658s` and omitted all four replies. Both remain unofficial discovery aids. |

## Official incidents

- [Elevated errors affecting Work Mode in ChatGPT](https://status.openai.com/incidents/01M2GA8XTS6VB3QCDEGZ0HNAQ5)
  began at `2026-09-14T15:58:48Z`. OpenAI reported that some ChatGPT Plus
  users had errors starting or resuming Work tasks or limited access to tools
  and files. Additional mitigation appeared at `19:42:08Z`; resolution was
  posted at `2026-09-15T03:11:36Z`. The incident says nothing about limits.
- [Degraded Performance affecting Agents API](https://status.openai.com/incidents/01M2H3J1D6Y7RHAP49GRWGJAY0)
  ran from `2026-09-14T23:20:41Z` to `23:39:21Z`. OpenAI described managed
  session delays and failures to start turns. It is an API negative control.
- [Elevated errors from GPT-5.6 and GPT-5.6 Instant on paid plans](https://status.openai.com/incidents/01M2HYH64J2CZMZ63HEV2FCQFA)
  ran from `2026-09-15T07:12:04Z` to `07:53:36Z`, with mitigation at
  `07:24:26Z`. Eight focused public issues used the exact selected-model
  capacity wording from `04:08:44Z` through `09:11:25Z`. Five preceded the
  incident and three followed resolution; none was created during the incident.
  The nearby timing merits follow-up, but the sequence and model scope do not
  prove that the issue cluster and incident share a cause. Neither is reset
  evidence.

## Canonically validated Tibo candidates

| Canonical post | ID-derived UTC | Classification |
| --- | --- | --- |
| [2099741116925096020](https://x.com/thsottiaux/status/2099741116925096020) | `2026-09-15T06:04:28.235Z` | Reply about computer-use agents playing video games. Nonqualifying commentary. |
| [2099744972195131850](https://x.com/thsottiaux/status/2099744972195131850) | `2026-09-15T06:19:47.403Z` | Original teasing a week of DevDay-level product shipping. It is a launch hint, not a reset, usage-limit, credit, or mechanism promise. |
| [2099745615118991548](https://x.com/thsottiaux/status/2099745615118991548) | `2026-09-15T06:22:20.688Z` | Reply joking about margins. Nonqualifying commentary. |
| [2099756963429245110](https://x.com/thsottiaux/status/2099756963429245110) | `2026-09-15T07:07:26.336Z` | One-word reply about a future voice-mode prediction. Nonqualifying commentary. |
| [2099757649730691202](https://x.com/thsottiaux/status/2099757649730691202) | `2026-09-15T07:10:09.963Z` | Reply asking whether a referenced system was Astra or Luna. Nonqualifying model commentary. |

The discovery feed rounded source timestamps to whole seconds. oEmbed matched
all visible texts and the September 15 calendar date. The source-native Posts
tab showed the original. X's login prompt prevented a profile-level check of
the four replies. That is a retrieval gap, not evidence of deletion.

## Public reports, implementation, and contradictions

The focused issue set is `n=25` among `n=192` new issues. These are public
claims, not verified observations. The most useful records are:

- [#45570](https://github.com/openai/codex/issues/45570) reports one Pro 5x
  account with two earlier apparent credit-coupled resets, zero remaining
  credits, a September 14 `0%` weekly meter, and a provider anchor advanced to
  September 21 `01:22:13Z`. By September 15 the same meter was `10%` used with
  the anchor unchanged. This is an unverified, hour-precision out-of-cycle
  account-state claim. It is not the same bound as #45236 or this project's
  September 12 observer transition, so it does not meet the two-report
  historical-inference gate.
- [#45632](https://github.com/openai/codex/issues/45632) says a reset restored
  ordinary conversation use while automatic approval review still returned a
  usage-limit error. It has no exact reset bound or before-and-after provider
  samples. It strengthens enforcement contradiction coverage only.
- [#45574](https://github.com/openai/codex/issues/45574) reports a Work account
  remaining at `0%` available with the reset time stuck at "now" more than an
  hour after the displayed deadline. It is one unbounded nonreceipt report.
- [#45619](https://github.com/openai/codex/issues/45619) reports that a
  subscription renewal did not reset the weekly allowance. It is useful
  negative evidence against treating a billing-cycle boundary as a reset.
- [#45644](https://github.com/openai/codex/issues/45644) records one Pro 20x
  weekly meter rising from `25%` to `55%` to `69%` used while the September 19
  provider anchor remained stable. It supports depletion monitoring, not a
  reset or entitlement ratio.
- [#45638](https://github.com/openai/codex/issues/45638),
  [#45613](https://github.com/openai/codex/issues/45613), and
  [#45594](https://github.com/openai/codex/issues/45594) are three account-level
  reports that a dedicated Spark bucket displayed full availability while the
  model was unavailable or the general Codex gate remained closed. They
  strengthen the rule that a displayed secondary bucket does not prove usable
  access.
- [#45510](https://github.com/openai/codex/issues/45510) reports about `73`
  percentage points of one five-hour Work window used by three prompts.
  [#45411](https://github.com/openai/codex/issues/45411) reports two full
  five-hour windows exhausted while continuing one implementation task.
  [#45633](https://github.com/openai/codex/issues/45633) reports qualitatively
  faster weekly depletion after a reset. Different surfaces, workloads, and
  missing baselines prevent a shared cause or prevalence estimate.
- [#45617](https://github.com/openai/codex/issues/45617) reports Terra usage in
  analytics without a knowingly initiated Terra task. It raises scheduled-task
  and model-attribution questions but supplies no reset transition.
- [#45444](https://github.com/openai/codex/issues/45444) reports active turns
  stopping at exhaustion despite current Help text saying a turn may continue,
  subject to fair-use limits. This is an enforcement/documentation
  contradiction, not reset timing evidence.

The entire `n=601` post-cutoff issue-comment set contained zero staff-associated
authors. No reviewed report supplied a confirmed affected population, root
cause, or provider-bounded second-account transition.

One merged implementation record deserves separate classification.
[PR #45602](https://github.com/openai/codex/pull/45602) and
[commit 31ffe2b](https://github.com/openai/codex/commit/31ffe2b) changed client
error handling so `slow_down` is a retryable rate-limit condition, while
`credit_balance_exhausted` and organization or project spend-limit errors end
as `UsageLimitExceeded` without retries. This is a product/error-classification
mechanism change. It does not change reset delivery, allowance size, credit
granting, credit redemption, or account metering.

The other `64` commits, `65` updated pull requests, and four alpha releases did
not disclose a reset-policy or quota-accounting change. The alpha release
bodies contained titles only.

## Historical leads and ledger decision

X oEmbed again matched author, canonical URL, public text, and date for the
[June 29 promise](https://x.com/thsottiaux/status/2071740419030053227),
[July 28 completion](https://x.com/thsottiaux/status/2081940052154933696),
[July 29 completion](https://x.com/thsottiaux/status/2082317452755751098),
[August 1 completion](https://x.com/thsottiaux/status/2083395449814229287),
[August 8 completion](https://x.com/thsottiaux/status/2086188036493344823),
[August 8 Monday promise](https://x.com/thsottiaux/status/2086189414292865249),
[August 10 context](https://x.com/thsottiaux/status/2086800050630676504), and
[August 10 ordinary-reset interpretation](https://x.com/thsottiaux/status/2086800639120888014).
The September 12 [promise](https://x.com/thsottiaux/status/2098612714704891959)
and [completion wording](https://x.com/thsottiaux/status/2098685367058612394)
also remained canonical and unchanged.

The June 29 record still promises two actions, a hard reset within one hour and
a saved reset within 24 hours. No canonical completion or recipient denominator
closes either promise. July 28, July 29, and August 1 remain completed-action
statements with unresolved delivery breadth and cause. The August 8 and 10
Monday promise still lacks an independently bounded Monday delivery or a
canonical completion statement for that promise. The September 12 wording is
already correlated with one project observer transition, but it cannot prove
universal delivery or cause.

Project [issues #56](https://github.com/KyleStay/codex-reset-monitor/issues/56),
[#60](https://github.com/KyleStay/codex-reset-monitor/issues/60), and
[#61](https://github.com/KyleStay/codex-reset-monitor/issues/61) remain open
with `public-source` and `pending-review`, zero comments, and no label changes.
The project still has `14` verified observations, `4` approved public sources,
`43` pending-review sources, and zero rejected sources. No source reviewed in
this lane supports a ledger change or an earlier feature-snapshot rewrite.

## Point-in-time-safe pattern audit

Grades describe evidence, not probability. Grade A is provider, observer, or
source-native chronology. Grade B is public repository evidence. Grade C is an
attributed statement used directionally. Grade D is a population, causal, or
predictive inference.

| Pattern | Exact sample, range, cutoff, and evidence | Support, contradiction, lead time, grade | Change since September 14 |
| --- | --- | --- | --- |
| Provider-owned bounded transition | `n=14` verified observations from `2026-08-08T09:23:05.496Z` through `2026-09-12T08:12:46.020Z`; `n=13` gaps; observer fields and maintainer-verified issues; cutoff `2026-09-15T09:20:57.683Z`. | No fifteenth transition appeared. Gaps remain `11h09m42.937s` through `195h30m43.288s`. A meter or access transition plus a stable advanced anchor remains Grade A for this account. Population breadth is Grade D. | Unchanged. |
| Banked-reset redemption | `n=2` verified paired credit and meter events from `2026-09-10T13:51:33.628Z` through `2026-09-11T19:02:05.530Z`; issues #57 and #58; current cutoff. | Both lowered the available-credit count by one while restoring a full window and advancing the anchor. The current observer credit count and anchor remained unchanged. #45570 adds an unverified two-redemption claim with no source-owned trigger record. Grade A for the verified pair, Grade B for the contradiction. | Strengthened contradiction coverage only. |
| Tibo promise to independently observed delivery | `n=2` point-in-time episodes from `2026-09-07T19:24:57.786Z` through `2026-09-12T08:12:46.020Z`; canonical X/oEmbed promises, later observer bounds, and completion wording; current cutoff. | Promise-to-observer-upper-bound lead times remain `6h03m50.593s` and `4h52m09.839s`, a range of `4h52m09.839s` through `6h03m50.593s`. Grade C directional evidence. Two episodes and one account cannot establish a general rule, universal delivery, or cause. | Unchanged. |
| Completed wording versus future wording | `n=4` qualifying statements, two promises and two completions, from `2026-09-07T19:24:57.786Z` through `2026-09-12T08:09:17.852Z`; canonical X/oEmbed plus observer bounds; current cutoff. | The September 7 completion followed its observer transition by `2h37m05.099s`. The September 12 completion fell inside the observer interval and preceded its upper sample by `3m28.168s`. Completion wording is not an exact universal timestamp. Grade A wording and one-account chronology, Grade D breadth. | Unchanged. |
| Originals versus replies | `n=5` new candidates, one original and four replies, from `2026-09-15T06:04:28.235Z` through `07:10:09.963Z`; discovery feed plus X/oEmbed; discovery cutoff `2026-09-15T09:02:17.694Z`. | `0/5` qualifies. The original is a product-launch hint and the replies are negative controls. The sample cannot establish relative predictive value. Attribution is Grade A; prediction is Grade D. | Strengthened as negative controls only. |
| Broad attributed completion versus observed breadth | `n=4` canonical completed-action statements from July 28, July 29, August 1, and August 8, 2026; X/oEmbed, public issues, and one verified August 8 observer transition; current cutoff. | Only August 8 has this project's provider-bounded account confirmation. The other three retain breadth and cause gaps. #45574 and #45632 add later nonreceipt and partial-enforcement contradictions, not matched recipients. Attribution is Grade A, contradictions Grade B, universal breadth Grade D. | Unchanged; contradiction coverage strengthened. |
| Incident linkage | `n=3` official incidents created in the current window, one affecting paid GPT-5.6 surfaces, one Work, and one Agents API; Status API; current cutoff. | None mentions quota state, credits, compensation, or reset delivery. The `n=8` capacity-title cluster overlaps the GPT-5.6 incident but begins before and continues after it. Status chronology is Grade A; shared cause and reset linkage are Grade D. | Strengthened negative-control and timing coverage. |
| Public usage and accounting reports | `n=25` focused records among `n=192` new issues, `2026-09-14T11:39:17Z` through `2026-09-15T09:11:25Z`; issue bodies and `n=601` comments; current cutoff. | Records cover displayed-reset nonreceipt, apparent out-of-cycle state change, rapid depletion, full secondary buckets without access, billing-cycle nonreset, model attribution, capacity, and active-turn interruption. Zero staff comments, no common provider bounds, and no denominator prevent prevalence or cause claims. Grade B contradictions, Grade D prevalence and causation. | Strengthened contradiction coverage. |
| Releases and implementation activity | `n=65` commits, `n=66` updated pull requests, and `n=4` alpha releases after the prior cutoff; GitHub chronology; current cutoff. | PR #45602 changes retry and terminal classification for throttle and credit/spend errors. It does not change reset behavior. No release body or other reviewed record disclosed a reset-policy or allowance change. Grade A implementation chronology, Grade D event linkage. | Strengthened mechanism separation only. |
| Discovery and mirror completeness | `n=5` candidates on September 15; feed, two exact-DID mirrors, source-native profile, and X/oEmbed; discovery cutoff `2026-09-15T09:02:17.694Z`. | Preferred coverage was `5/5` with `9m00.297s` through `14m38.122s` lag. Fallback coverage was `1/5` at `4m33.658s` and omitted every reply. The profile exposed the original but login-gated replies. Canonical validation is Grade A; feed and mirror completeness are Grade D. | Preferred coverage remained complete; fallback remained weak. |
| Cadence, cooldown, weekday, and UTC hour | `n=14` heterogeneous transitions and `n=13` gaps, August 8 through September 12; verified observer records; current cutoff. | The series mixes scheduled, out-of-cycle, and credit-coupled events. The gap range and lack of a new event still do not support a weekday, UTC-hour, or cooldown rule. Grade D. | Unchanged; simple cadence remains refuted. |

## Strongest predictors, failed signals, and next tests

The strongest detector remains a bounded exhausted-to-available or near-zero
meter transition paired with a material, stable provider-anchor advance. A
simultaneous credit-count decrease separated two verified banked redemptions
from credit-unchanged automatic or out-of-cycle transitions. Provider state is
still more informative than announcement wording, incident timing, a displayed
secondary bucket, or an anchor move by itself.

Signals that failed or remain too sparse are unchanged. Tibo promises have only
two prospectively usable one-account episodes. Canonical completion wording is
not an exact delivery timestamp or proof of breadth. Incidents supply negative
controls, not reset labels. Billing renewal, a timer reaching "now," full Spark
display, release cadence, day of week, UTC hour, and raw reset-to-reset gaps do
not predict usable delivery from the current samples. The `n=14` event series
is still too small and heterogeneous for a defensible cadence or cooldown
pattern.

What changed since yesterday is bounded:

- Five canonically validated Tibo candidates added five negative controls.
- Three official incidents and 25 focused public issues strengthened capacity,
  depletion, display, entitlement, and enforcement contradiction coverage.
- PR #45602 made throttle, credit exhaustion, and spend-limit errors more
  distinguishable in client behavior. It did not change reset mechanics.
- The canonical release-notes page became readable in the web retriever. Its
  newest item is still September 11 and is unrelated to limits.
- No accepted source, historical inference, cause assessment, correction, or
  verified observation changed.

The next observable tests are to capture any primary-bucket transition around
the September 19 provider anchor; distinguish credit redemption by a one-count
decrease and both window changes; check whether #45570, #45574, #45632, or
#45236 gains staff diagnosis or source-owned bounds; compare recipient and
nonrecipient evidence for September 12; and continue looking for canonical
completion or receipt evidence for June 29 and the August 8/10 promise.

## Deterministic forecast impact

The refresh at `2026-09-15T09:20:57.683Z` produced dataset
`events-14-cutoff-2026-09-15-e059a0ed` and forecast `fc_20260915092057`.
Repository code returned raw probability `0.010095488444291824` at every
horizon, displayed near `1%`, with the unchanged likely interval
`2026-09-19T01:53:44Z` through `2026-09-19T14:26:08Z` and confidence D.

The retained official-incident count changed from six to five because the
August 20 incident aged out. Inputs otherwise remain `14` verified
observations, `4` approved sources, zero rejected records, and zero duplicates.
Performance remains `n=41`, with model and baseline Brier scores both
`0.11096341463414638`. No model was promoted. No source found in this lane
changed a deterministic forecast input, probability, score, or historical
feature snapshot.
