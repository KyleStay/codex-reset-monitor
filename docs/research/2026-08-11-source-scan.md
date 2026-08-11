# Source scan: 2026-06-01–2026-07-14 and 2026-08-10–2026-08-11

Research completed `2026-08-11T09:27:59Z`. This note separates completed
hard resets, future reset promises, banked-reset grants, mechanism changes,
incidents, and nonqualifying commentary. It does not create a model label or
calculate a forecast.

## Scope, cutoffs, and collection boundary

- Recent monitoring covered records published after the prior automation
  cutoff, `2026-08-10T09:18:35Z`, through `2026-08-11T09:27:59Z`.
- Historical backfill covered `2026-06-01T00:00:00Z` through
  `2026-07-14T23:59:59Z`, closing the oldest interval identified as uncovered
  by the August 10 source scan.
- Sources checked were the exact configured [`@thsottiaux`](https://x.com/thsottiaux)
  profile and canonical status URLs, X-owned oEmbed, the approved temporary
  discovery feed, both exact configured AT Protocol mirrors, official OpenAI
  Status/Help/announcement surfaces, public source-native `openai/codex`
  issues/comments/pull requests/releases through GitHub's API, and existing
  configured Community archives. The public X profile returned no usable
  timeline, so candidate discovery followed the configured fallback chain.
- Native `openai/codex` searches across the historical range returned raw,
  overlapping totals of 842 `reset`, 381 `limits`, 285 `quota`, and 1,070
  `usage` records before relevant candidates were inspected. Relevant
  implementation included [PR #28143](https://github.com/openai/codex/pull/28143),
  [#28154](https://github.com/openai/codex/pull/28154),
  [#28793](https://github.com/openai/codex/pull/28793),
  [#30395](https://github.com/openai/codex/pull/30395), and
  [#30488](https://github.com/openai/codex/pull/30488). These establish
  separate credit count/details, expiry, redemption, refresh, and active-window
  state, not that a grant or reset reached an account.
- From the temporary discovery feed, only `fetchedAt`, `sourceErrors.tibo`, and
  raw `tiboPosts` were read. No forecast, probability, signal, classification,
  or score from that service was used.
- Exact X times are decoded from numeric Snowflake IDs under X's documented ID
  construction because oEmbed exposes only the calendar date. They are labeled
  **ID-derived**. Discovery or mirror records without a canonical numeric X ID
  remain discovery-only and fail closed.

## Recent monitoring: the Monday promise resolved

The approved discovery response was fetched at
`2026-08-11T09:10:19.549Z`, reported no `sourceErrors.tibo` value, and exposed
two new relevant numeric candidates:

1. [`2086972802457063486`](https://x.com/thsottiaux/status/2086972802457063486)
   at ID-derived `2026-08-11T00:27:44.842Z` says that the promised action was
   done.
2. [`2086972933566857393`](https://x.com/thsottiaux/status/2086972933566857393)
   at ID-derived `2026-08-11T00:28:16.101Z` explicitly says usage limits had
   been reset for all paid ChatGPT Work and Codex users.

X-owned oEmbed independently matched both canonical URLs, `Tibo`,
`https://x.com/thsottiaux`, the public text, and the August 11 date. The second
post is therefore an attributed **completed hard-reset announcement**, not a
future promise or banked-reset grant. It is recorded as
[pending public-source issue #5](https://github.com/KyleStay/codex-reset-monitor/issues/5)
and cannot affect a forecast until approved. The broad statement establishes
the operator's claim and intended scope; it does not prove simultaneous or
universal account-level delivery.

Project [verified-observation issue #4](https://github.com/KyleStay/codex-reset-monitor/issues/4)
independently bounds access returning on one individual paid account between
`2026-08-10T20:48:27.788Z` and `2026-08-11T00:02:38.929Z`. The validated
observer state moved the provider reset anchor from `2026-08-15T20:29:18Z` to
`2026-08-18T00:02:38Z`, an out-of-cycle lead of 6,987 minutes, and showed no
available banked reset credit. This is the confirmed project label. The
explicit completion post came 25 minutes 37.172 seconds after the observation
upper bound, so it corroborates the operator action but does not replace the
observer evidence.

The original Monday promise at
[`2086189414292865249`](https://x.com/thsottiaux/status/2086189414292865249)
was public at ID-derived `2026-08-08T20:34:50.549Z` and was first discovered by
this project at `2026-08-10T15:09:55.421Z`. Relative to the observer interval,
publication-to-delivery lead is bounded at 48 hours 13 minutes 37.239 seconds
through 51 hours 27 minutes 48.380 seconds. Discovery-to-delivery lead is
bounded at 5 hours 38 minutes 32.367 seconds through 8 hours 52 minutes 43.508
seconds. The promise was therefore a successful prospectively recorded signal
for this one event, but one success is too small a sample for a probability or
recurring rule.

### Discovery redundancy and lag

The preferred exact mirror, DID
`did:plc:rcaom2u2hfsm3aqab5dfvhxs`, indexed the short completion post at
`00:31:17.665Z` and the explicit post at `00:33:17.970Z`, approximately 3
minutes 34 seconds and 5 minutes 2 seconds after their whole-second X times.
The secondary exact mirror, DID `did:plc:rcelwndiefenpjvnm6uood4t`, indexed
them at `00:28:42.372Z` and `00:28:46.373Z`, approximately 58 seconds and 30
seconds later. Both covered these original posts; neither proves authorship or
delivery without the canonical X validation and independent observation.

## Other recent source-native records

The official [August 10–11 increased-error incident](https://status.openai.com/incidents/01KZNZTPWMV06Z6TQNMY1R1QDR)
began at `2026-08-10T14:04:37Z`, entered monitoring at `15:07:54Z`, and resolved
at `2026-08-11T02:48:20Z`. Its permanent page lists only ChatGPT and contains no
Codex usage-reset or compensation statement. The observer reset occurred after
mitigation and before resolution, but the reset promise predated the incident;
this is temporal overlap, not supported causation.

Three independent source-native reports document a separate banked-credit read
failure after the hard reset: [issue #37934](https://github.com/openai/codex/issues/37934)
and its comments show the reset-credit endpoint returning HTTP 429 on Pro and
Plus accounts while ordinary rate-limit data remained available;
[issue #37928](https://github.com/openai/codex/issues/37928) and
[issue #37951](https://github.com/openai/codex/issues/37951) show the same
"couldn't load" state. These are reset-credit availability/display
contradictions, not evidence that a banked credit was redeemed or that the hard
reset failed. No repository staff or official OpenAI source had supplied a
cause by the research cutoff.

The current mutable [Codex plan Help page](https://help.openai.com/en/articles/11369540-codex-and-chatgpt-plan-usage-limits)
still distinguishes waiting for an ordinary reset, applying an available
banked reset, and adding credits. It supplies no dated statement about the
August 11 operator action. No new official Help, developer, or OpenAI
announcement source described a broad completed reset in the recent window.

## Historical audit: June 1–July 14

The audit rechecked the six ledger entries already in this interval—June 4,
June 12, June 17, June 28, July 9, and July 14—against permanent sources. It
also found seven canonically valid `@thsottiaux` posts missed by the August 10
correlation note. X-owned oEmbed matched the configured author, canonical URL,
public text, and date for every ID below.

| ID-derived UTC | Canonical post | Classification and disposition |
| --- | --- | --- |
| `2026-06-18T00:10:10.387Z` | [`2067399435009622521`](https://x.com/thsottiaux/status/2067399435009622521) | Completed double action: a full hard reset plus a separate banked-reset grant. It materially strengthens the June 17 event while preserving nonreceipt in [issue #28837](https://github.com/openai/codex/issues/28837). |
| `2026-06-26T23:39:48.068Z` | [`2070653282440405046`](https://x.com/thsottiaux/status/2070653282440405046) | Future reset promised to all Codex users within the next few hours during continued monitoring; not completion evidence by itself. |
| `2026-07-09T21:24:11.842Z` | [`2075330198887940337`](https://x.com/thsottiaux/status/2075330198887940337) | Full reset announced as propagating within the next hour. This gives the existing July 9 event an exact attributed statement time but not universal delivery. |
| `2026-07-10T05:30:53.796Z` | [`2075452680760443190`](https://x.com/thsottiaux/status/2075452680760443190) | Two future resets promised across ChatGPT Work and Codex over 24 hours for the GPT-5.6 Sol launch. |
| `2026-07-10T17:59:43.835Z` | [`2075641131002700120`](https://x.com/thsottiaux/status/2075641131002700120) | One completed reset plus another future reset later that day; completion and promise must remain separate. |
| `2026-07-11T05:54:25.045Z` | [`2075820987833274448`](https://x.com/thsottiaux/status/2075820987833274448) | Another reset announced for all ChatGPT Work and Codex users, expected within 30 minutes. |
| `2026-07-12T21:28:59.055Z` | [`2076418567143408112`](https://x.com/thsottiaux/status/2076418567143408112) | A banked reset added to 500,000 users plus mechanism/rollout commentary. It is a credit grant, not an active-window reset. |

The July 9 and July 12 numeric IDs passed source-native X validation, but an
exact-ID hit was not recovered in the configured GitHub/Community discovery
searches and the currently configured feed retained only August 8–11. Preserve
that discovery-provenance gap and keep those two records pending for ingestion
rather than treating canonical validation as proof that the approved discovery
chain was complete.

The official [ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
record the June 11 reset-banking launch, one free launch reset, eligible
Plus/Pro referral rewards, and 30-day validity. This is stronger official
mechanism provenance than the previously used Community archive, but it still
does not prove account-level grant or redemption. Official Status coverage also
included the June 2–3 rate-limit-dependency failure, June 11 GPT-5.5 errors,
June 16 capacity errors, June 25 access-token problems, June 26–29 fast
depletion, and the June 29–July 11 FedRAMP incident. Only the fast-depletion
incident directly contextualizes the June 29 promise; none confirms reset or
credit delivery.

A source-native public comment in
[issue #9508](https://github.com/openai/codex/issues/9508#issuecomment-4952895210),
published `2026-07-12T21:46:38Z`, supplies sanitized server reset-window
transitions for one account. New seven-day anchors imply active-window starts
at `2026-07-10T11:45:52Z`, `2026-07-10T17:26:43Z`, and
`2026-07-11T06:11:59Z`. The first two are approximately 6 hours 15 minutes and
11 hours 56 minutes after the July 10 two-reset promise; the third is 17
minutes 34 seconds after the July 11 30-minute announcement. This is unusually
specific independent public corroboration, but it remains one account and is
not a project `verified-observation` label. The same comment shows another
server-side window replacement around `2026-07-12T19:08:30Z` alongside removal
of the five-hour bucket; mechanism and hard-reset interpretations must remain
distinct.

### June 29 completion remains unresolved

The canonical June 29 post
[`2071740419030053227`](https://x.com/thsottiaux/status/2071740419030053227)
promised a full reset within one hour and a separate banked credit within 24
hours. [Issue #30726](https://github.com/openai/codex/issues/30726) says hard
resets worked for that account during the broader incident but that the June 29
banked credit never appeared. It does not distinguish the promised June 29 hard
reset from the already completed June 28 hard reset. No precise independent
transition or source-native completion statement for the June 29 hard-reset
promise was located. Therefore:

- hard-reset completion remains pending rather than inferred at an invented
  time;
- banked-credit delivery is contradicted for at least one account;
- the official [fast-depletion incident](https://status.openai.com/incidents/01KW2E6W0503W4NXJNCVAG8V6T)
  resolved at `2026-06-29T17:06:33.013Z`, about 6 hours 33 minutes before the
  promise, but does not announce either reset action;
- the post itself says no single central issue was found, so no exclusive cause
  is supported.

Post-cutoff public reports are mixed. [Issue #30641](https://github.com/openai/codex/issues/30641)
and its [first comment](https://github.com/openai/codex/issues/30641#issuecomment-4839142506)
reported that neither the June 28 nor latest hard reset appeared while a
separate Spark bucket did reset. [Issue #30680](https://github.com/openai/codex/issues/30680)
reported weekly usage still near exhaustion and a zero bank balance.
[Issue #30726](https://github.com/openai/codex/issues/30726) said hard resets
worked during the incident period but banked accrual did not, without isolating
June 28 from June 29. A later
[issue #30686 comment](https://github.com/openai/codex/issues/30686#issuecomment-4861400899)
reported an extra reset quota appearing but could not uniquely attribute it to
June 29. This supports some delivery and strong account/bucket divergence, not
an exact completion timestamp.

### July 28/29 and August 1 canonical gaps

The exact configured mirrors expose stronger discovery records but no canonical
numeric X IDs:

- July 28: a future-reset hint at `2026-07-28T00:27:37Z`, followed by mirror
  text claiming completion for all paid Codex and ChatGPT Work users at
  `03:09:23Z` (2 hours 41 minutes 46 seconds later).
- July 29: secondary-mirror text at `2026-07-29T04:09:02Z` claims another
  completed all-user reset and begins an 11-part usage/mechanism thread.
- August 1: both mirrors reproduce completed-reset wording at
  `2026-08-01T03:32:37Z`; the secondary indexed it at `03:34:08.971Z` and the
  preferred mirror at `03:45:42.463Z`.

These mirror records are discovery/corroboration only. No permanent canonical
`x.com/thsottiaux/status/<numeric-id>` URL was recovered through configured
sources, so X oEmbed validation is impossible and all three fail closed. July
28/29 remain unaccepted. The August 1 inferred reset remains supported by
[issues #36436](https://github.com/openai/codex/issues/36436),
[#36481](https://github.com/openai/codex/issues/36481), and
[#36468](https://github.com/openai/codex/issues/36468); mirror text cannot
upgrade its cause or evidence class. [Issue #36488](https://github.com/openai/codex/issues/36488)
still supplies an attribution without a canonical URL.

## Point-in-time-safe pattern audit

This audit uses only evidence public before the evaluated outcome and applies
the project's actual discovery/approval time where that is later. It does not
import any third-party classifier or forecast.

### 1. Explicit future promises followed by independently visible delivery — strengthened

- **Sample:** seven canonical future-promise posts tested against later
  source-native evidence: June 16, June 26, June 29, July 9, July 10, July 11,
  and August 8; covered `2026-06-16`–`2026-08-11`.
- **Evidence classes:** attributed operator posts, public GitHub account/bucket
  reports, sanitized public server anchors, and one project verified observer
  transition.
- **Cutoff:** each promise publication time. For actual project-prospective
  evaluation, only the August 8 promise was documented before its outcome,
  first discovered `2026-08-10T15:09:55.421Z`; later historical discovery must
  not enter earlier feature snapshots.
- **Support and lead time:** July 10's 24-hour/two-reset promise aligns with one
  account's two server anchors about 6 hours 15 minutes and 11 hours 56 minutes
  later; July 11's 30-minute promise aligns with an anchor 17 minutes 34
  seconds later; the August promise precedes the verified transition by 48
  hours 14 minutes to 51 hours 28 minutes from publication.
- **Contradictions/missing cases:** June 16's later completion post arrived
  about 29 hours 20 minutes after its 24-hour promise; the surviving July 9
  precise transition is about 14 hours 22 minutes after a one-hour propagation
  statement; June 29 remains unresolved with bucket and account nonreceipt;
  June 26 lacks a precise independent transition. Only August has a project
  verified label.
- **Grade:** C for direction and exact timing, A for the single August observer
  outcome. The sample remains too small and heterogeneous for a probability.

### 2. Short explicit rollout windows — strengthened, but one-account only

- **Sample:** three canonical July announcements with testable rollout windows,
  covering `2026-07-09`–`2026-07-11`; four subsequent server-window
  transitions from one public account.
- **Evidence classes:** attributed operator promises plus sanitized public
  server rate-limit records.
- **Cutoff:** `2026-07-09T21:24:11.842Z`,
  `2026-07-10T05:30:53.796Z`, and `2026-07-11T05:54:25.045Z`; the transition
  record became public on July 12 and must not be inserted into earlier
  forecast snapshots.
- **Support and lead time:** two July 10 transitions occurred about 6 hours 15
  minutes and 11 hours 56 minutes into a 24-hour/two-reset promise; the July 11
  transition occurred about 17 minutes 34 seconds into a 30-minute
  announcement.
- **Contradictions/missing cases:** one account cannot establish rollout breadth
  or universal delivery; July 9's transition was about 14 hours 22 minutes
  after its one-hour statement; the record does not expose reset-credit
  transactions; an additional July 12 transition coincides with a
  bucket-removal mechanism change and is not safely classifiable as another
  hard reset.
- **Grade:** B for temporal alignment, C for generalization.

### 3. Completed language versus future language — strengthened

- **Sample:** five completed-hard-reset posts in the bounded June 4–July 14
  historical corpus (June 4, June 18, June 28, July 10, July 14), plus two
  canonically completed announcements aligned with the project's August 8 and
  August 11 verified observations.
- **Evidence classes:** X-owned canonical validation, inferred historical
  events, public reports, and two project verified observations.
- **Cutoff:** each post's publication time; later-discovered historical posts
  are retrospective only.
- **Support and lead time:** all five historical completed-language posts have
  later public support, although not project labels. Completed language aligns
  tightly with both verified events:
  August 8's post fell inside its observation bound and four seconds after the
  provider anchor; August 11's post followed its observation upper bound by 25
  minutes 37 seconds. The newly found June 18 and July 10 completion posts
  resolve their wording as completed actions rather than promises.
- **Contradictions/missing cases:** broad completed wording repeatedly coexists
  with nonrecipient or enforcement/display contradictions. A completed post is
  good evidence that an operator initiated an action, not that every account
  received it.
- **Grade:** B for some delivery, A for attributed action wording, and C for
  universal delivery.

### 4. Hard resets versus banked credits — strengthened

- **Sample:** five explicit mixed-action/grant records from June 12 through July
  13: June 12 mechanism rollout, June 18 full-plus-banked double action, June
  29 hard-reset-plus-credit promise, and separate July 12 and July 13 banked
  grants.
- **Evidence classes:** canonical operator posts, merged repository
  implementation, official/current Help mechanism, and public nonreceipt
  reports.
- **Cutoff:** each source publication time.
- **Support:** the sources consistently describe a hard reset as replacing the
  active window and a banked reset as a separately redeemable credit. The
  August 11 observer transition changed the active provider anchor while no
  available credit was present.
- **Contradictions/missing cases:** June 17/18 and June 29 reports show that
  hard-reset delivery and credit-ledger delivery can diverge; the August 11
  reset-credit endpoint outage obscures balances but is not itself a grant,
  redemption, or loss event.
- **Grade:** A for the mechanism distinction, B/C for account-level grant
  delivery. Lead time is not applicable because this pattern compares paths,
  not a promised delivery clock.

### 5. Incident phase, launch/milestone context, and cause — unchanged

- **Sample:** three clearly linked incident-resolution/reset-statement sequences
  (June 3–4, June 16, and June 29), plus July 10 GPT-5.6 launch and August
  10–11 ChatGPT-error contexts; covered `2026-06-03`–`2026-08-11`.
- **Evidence classes:** official Status, attributed operator posts, public
  reports, and verified observations.
- **Cutoff:** the relevant incident update or announcement time.
- **Support and lead time:** in the three clearly linked incident sequences,
  incident resolution preceded the first reset statement by roughly 2 hours 34
  minutes to 13 hours 17 minutes. July 10 launch messaging preceded repeated
  resets; June 4 followed documented reliability failures.
- **Contradictions/missing cases:** the August promise predated the coincident
  ChatGPT-only incident, June 29 explicitly rejected one central issue, and
  promotional milestone resets occur without incidents. Context is not a
  confirmed cause or a reliable standalone predictor.
- **Grade:** B for contextual association, D for causal or universal claims.

### 6. Original posts versus replies; cadence and UTC timing — unchanged/too sparse

- **Sample:** 15 classified canonical Tibo posts from June 4 through July 14
  (five completed hard resets, six future promises, two standalone banked
  grants/remediations, and two mechanism/product changes), plus three project
  verified resets: the August 8 `09:23:05.496Z` scheduled recovery, August 8
  `20:32:48.433Z` out-of-cycle meter reset, and August 11 `00:02:38.929Z`
  out-of-cycle recovery. They create only two reset-to-reset gaps and three UTC
  times/days-of-week observations. The successful August promise was one reply,
  while both out-of-cycle completion announcements were original posts.
- **Evidence classes:** verified observations and canonical operator posts.
- **Cutoff:** `2026-08-11T09:27:59Z`.
- **Support and lead time:** reply monitoring mattered because the one
  project-prospective promise was a reply; original posts supplied clear
  completed wording. The two verified gaps are 11 hours 9 minutes 42.937
  seconds and 51 hours 29 minutes 50.496 seconds.
- **Contradictions/missing cases:** two gaps cannot establish cooldown or
  cadence; three events cannot establish UTC hour/day effects; the historical
  accepted sample is overwhelmingly original posts and has no comparable reply
  sample.
- **Grade:** D; no defensible timing or cadence pattern yet.

### 7. Public-report clustering and delivery contradictions — strengthened

- **Sample:** five recurrent divergence sequences from `2026-06-17` through
  `2026-08-11`: June 17/18 hard-reset versus missing bank credit; June 29
  Spark-only/nonrecipient reports; July 9 old-counter rollout; July 14 Business
  nonreceipt; August 11 bank-credit endpoint/display failure.
- **Evidence classes:** attributed operator posts, official Support for July 9,
  source-native GitHub account reports, one verified observer transition, and
  current Help mechanism.
- **Cutoff:** each report's source-native publication time; the cluster is
  retrospective and cannot be backfilled into an earlier forecast cutoff.
- **Support:** multiple reports cluster around announced actions and repeatedly
  separate account, plan, bucket, active-window, credit-ledger, display, and
  enforcement outcomes.
- **Contradictions/missing cases:** complaint volume is not delivery rate;
  reporter populations are self-selected; August 11's credit-read outage does
  not contradict the independently verified hard reset; no broad statement has
  complete recipient/nonrecipient sampling.
- **Lead time and grade:** report publication ranged from minutes to more than a
  day after announcements and is not an exact delivery bound. Grade B for
  recurrent divergence, D for population prevalence.

### 8. Discovery-feed and mirror lag/completeness — strengthened for recent originals, historical completeness unknown

- **Sample:** two canonically validated August 11 completion originals across
  two exact mirrors (`n=4` mirror copies), plus the temporary feed's August 8–11
  raw window; historical mirror checks covered July 28–August 1.
- **Evidence classes:** approved discovery metadata, exact AT Protocol mirror
  records, and X-owned canonical validation.
- **Cutoff:** feed `fetchedAt` `2026-08-11T09:10:19.549Z`; mirror retrieval by
  the research cutoff `2026-08-11T09:27:59Z`.
- **Support and lag:** recent original-post indexing lag ranged from 30 seconds
  to 5 minutes 2 seconds, better than the prior 11–15 minute reply lag.
- **Contradictions/missing cases:** the feed's raw records covered only August
  8–11; the preferred mirror omitted part of the July 29 split thread while the
  fallback preserved it; neither mirror preserved canonical X IDs for July
  28/29 or August 1. No historical completeness percentage can be calculated.
- **Grade:** B for recent redundant discovery, D for historical completeness;
  mirrors remain non-evidence without canonical validation.

## Daily pattern summary and next tests

The strongest currently supported signal is an explicit, canonically validated
future-reset promise with a stated delivery window, followed by a source-native
completed statement and an independent provider-anchor transition. The new
August observer outcome strengthens that association prospectively for one
case, while the July transition record strengthens it retrospectively for one
additional account. Completed operator language is strong evidence of an
initiated action but still fails as proof of universal delivery.

Since the August 10 run, the Monday promise changed from unresolved to one
verified account transition plus a canonically validated completion statement;
the June–July audit added seven missed canonical posts and precise one-account
July anchors; and June 29 remained unresolved after explicit nonrecipient and
bucket-divergence checks.

Signals that remain weak or failed are incident coincidence as cause,
milestone/launch context by itself, UTC time or weekday, a recurring cooldown,
and mirror-only text without a canonical X ID. June 29 remains the clearest
failed/unresolved promise-plus-credit test. Nonrecipient reports and
display/enforcement contradictions remain necessary counterevidence rather
than noise.

Next observable tests are:

1. preserve pre/post provider anchors, both usage buckets, exhausted state, and
   banked-credit count around every explicit promise;
2. measure promise publication, project discovery, provider transition, and
   completion-announcement time separately;
3. test account and plan breadth with verified observations or independently
   reviewed reports, including nonrecipients;
4. distinguish active-window reset, credit grant, credit redemption, and
   reset-credit endpoint failure;
5. continue attempting canonical ID recovery for July 28/29 and August 1
   through configured sources only.

The subsequent deterministic `npm run update:data` accepted verified issue #4
and kept pending issue #5 ineligible. Confirmed inputs increased from two to
three, out-of-cycle inputs from one to two, and the provider anchor moved from
`2026-08-15T20:29:18Z` to `2026-08-18T00:02:38Z`. Probabilities remained 1%
at 1/3/6/12/24 hours; the likely interval moved to August 17
`19:50:38Z`–August 18 `04:14:38Z`. The matured August 10 forecast recorded the
verified event only inside its 24-hour horizon, with Brier `0.1961` and timing
error 6,987 minutes; aggregate Brier moved from `0.1200428571` over seven
samples to `0.12955` over eight. No model was promoted.

## Disposition and remaining gaps

- **Accepted confirmed evidence:** verified observer issue #4, one individual
  paid account, bounded transition only.
- **Pending public evidence:** issue #5 for the explicit August 11 completion
  post; no new non-official record is approved by this note.
- **Historical improvements:** seven additional canonical June–July posts and
  the July one-account transition record materially strengthen the existing
  June 17/July 9 evidence and identify further promised/completed/grant actions.
  The historical ledger expanded from 29 to 32 inferred/mechanism records with
  three separately bounded July 10–11 account transitions; June 17 and July 9
  gained the new canonical corroboration without becoming confirmed labels.
- **No promoted cause:** the August action is operator-attributed and
  out-of-cycle; the coincident ChatGPT incident is not a supported cause.
- **Coverage gaps:** canonical IDs for July 28/29 and August 1; precise June 29
  hard-reset completion; June 29 banked-credit breadth; universal delivery for
  broad announcements; mutable Help revision history; reset-credit endpoint
  cause; and sparse verified-event count.
