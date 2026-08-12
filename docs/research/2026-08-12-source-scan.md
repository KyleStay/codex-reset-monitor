# Source scan: 2026-08-11–2026-08-12

Research cutoff: `2026-08-12T09:28:06Z`. This draft covers records published
after the prior research cutoff, `2026-08-11T09:27:59Z`, and bounded follow-up
on the unresolved June 29, July 28, July 29, and August 1 leads. It separates
future hints, completed hard resets, banked-reset credits, incidents, mechanism
changes, and account-level contradictions. It does not create a confirmed
observation, approve a public source, calculate a probability, or rewrite a
past feature snapshot.

## Collection boundary and source inventory

All URLs below were rechecked during the run ending
`2026-08-12T09:28:06Z`. Source-owned publication and indexing times are stated
where available; that final timestamp is the retrieval cutoff when a source did
not expose a separate response time.

- The public source-native [`@thsottiaux`](https://x.com/thsottiaux) profile
  loaded without a usable historical-search surface but exposed the newest
  original posts and their canonical numeric status URLs. A focused historical
  X search for July 28–August 1 redirected to sign-in at
  `2026-08-12T09:23:04Z`; no authenticated or evasive collection was attempted.
- The approved temporary discovery endpoint was fetched through
  [`/api/forecast`](https://www.willcodexquotareset.com/api/forecast), but the
  read was projected to only `fetchedAt`, `sourceErrors.tibo`, and raw
  `tiboPosts`. Its source payload was stamped `2026-08-12T09:07:21.630Z`, had
  `sourceErrors.tibo=null`, contained 21 raw posts, and contained 14 posts after
  the prior cutoff. No forecast, probability, classifier, score, or derived
  signal from the service was read or used.
- X-owned
  [`publish.twitter.com/oembed`](https://publish.twitter.com/oembed?url=https%3A%2F%2Fx.com%2Fthsottiaux%2Fstatus%2F2087423996115681767&omit_script=true)
  validated the one new reset-relevant candidate against the canonical URL,
  author name `Tibo`, author URL `https://x.com/thsottiaux`, public text, and
  August 12 calendar date. Exact UTC below is labeled **X-ID-derived**.
- The two exact configured AT Protocol identities were revalidated through
  [`app.bsky.actor.getProfile`](https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=did%3Aplc%3Arcaom2u2hfsm3aqab5dfvhxs)
  and their public author feeds: preferred DID
  [`did:plc:rcaom2u2hfsm3aqab5dfvhxs`](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcaom2u2hfsm3aqab5dfvhxs&limit=100)
  still resolved to `thsottiaux-mirr.selfhosted.social`; fallback DID
  [`did:plc:rcelwndiefenpjvnm6uood4t`](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcelwndiefenpjvnm6uood4t&limit=100)
  still resolved to `thsottiaux-bot.eurosky.social`. Both profiles explicitly
  identify themselves as unofficial mirrors.
- Official OpenAI Status, Help, ChatGPT/Codex changelog, announcement surfaces,
  and the public `openai/codex` issues, comments, commits, pull requests, and
  releases were checked source-natively. GitHub searches over records created
  after the cutoff returned overlapping raw totals of 13 for `reset`, 2 for
  `quota`, 8 for `"usage limit"`, and 0 for `"reset credit"` before relevant
  candidates were inspected. The absence of a search hit is bounded by GitHub
  indexing and edited-comment limitations.
- Project issue state was checked only to preserve point-in-time approval:
  [public-source issue #6](https://github.com/KyleStay/codex-reset-monitor/issues/6)
  was created at `2026-08-12T09:23:37Z` with `public-source` and
  `pending-review`. It remained unapproved at the cutoff. No issue was created
  or changed as part of this research draft.

## New reset-relevant evidence after the prior cutoff

### August 13 milestone surprise hint: attributed and pending, not completion

The canonical post
[`2087423996115681767`](https://x.com/thsottiaux/status/2087423996115681767)
was public at X-ID-derived `2026-08-12T06:20:37.793Z`. It refers back to the
operator's earlier per-million-user reset promise, notes that Codex passed the
10-million threshold, and hints at a surprise on August 13. The statement does
not explicitly promise a reset, specify recipient plans, distinguish an active
window from a banked credit, or say that an action is complete.

The source-native X profile and X-owned oEmbed independently matched the exact
configured author and canonical numeric URL. The approved raw discovery feed
also contained the same ID and whole-second publication time. Project issue #6
records the candidate as `pending-review` from `2026-08-12T09:23:37Z`. For
point-in-time evaluation, the post may not enter any snapshot before that
project discovery time and may not enter any forecast while it remains
unapproved. Its defensible class at this cutoff is **attributed ambiguous future
hint**, not explicit reset promise, completed hard reset, banked-credit grant,
or model label.

No source-native completion statement, verified project transition, new
provider reset anchor, or credit grant followed the hint by the research
cutoff, 3 hours 7 minutes 28.207 seconds after publication. The next observation
test is therefore prospective: separately check for an explicit action and an
independent account transition on August 13, without treating the hint itself
as the outcome.

### Discovery freshness and completeness

Both configured DIDs carried the new hint. The fallback mirror indexed it at
`2026-08-12T06:23:46.364Z`, 3 minutes 8.571 seconds after the exact X time. The
preferred mirror indexed it at `2026-08-12T06:30:15.669Z`, 9 minutes 37.876
seconds later. Thus redundant discovery was healthy for this new original, but
the preferred source was slower on this check.

As an internal freshness control, both feeds also contained the canonical
August 12 original `2087438544323420273` and its reply
`2087439859493617908`. Across those two control records, fallback lag was about
55 seconds to 1 minute 4 seconds and preferred lag was about 6 minutes 34
seconds to 11 minutes 47 seconds. These controls do not add reset evidence; they
show that both exact DIDs were current through `2026-08-12T07:23:39Z` rather
than merely replaying the reset-related hint.

Freshness does not establish completeness. The 100-record preferred page
reached `2026-07-31T23:20:34Z`, while the 100-record fallback page reached
`2026-07-18T02:47:51Z`; pagination depth therefore differed materially. The
preferred mirror still omitted the July 28/29 records that the fallback
preserved, while both mirrors preserved August 1 wording without a canonical X
ID. Neither mirror proves X authorship or account-level delivery.

## Official and repository-native monitoring

### OpenAI Status

The only new Codex-relevant official incident was
[`01KZSC0T66YTVM57N5T79SV8ZV`](https://status.openai.com/incidents/01KZSC0T66YTVM57N5T79SV8ZV),
“Increase in errors on API, Codex and Work Mode.” It began
`2026-08-11T21:35:23Z`, entered monitoring after mitigation at
`22:16:14Z`, and resolved at `22:42:26Z`. Its permanent page currently says no
components were marked affected despite the title. Updates state only elevated
errors, mitigation, monitoring, and recovery; they contain no reset, credit,
compensation, delivery, or cause statement. It is incident context, not reset
evidence.

Three other post-cutoff incidents were checked and excluded from Codex-reset
interpretation: ChatGPT-only
[`01KZRE6ZA1RE1ZH4HQ111CX1S8`](https://status.openai.com/incidents/01KZRE6ZA1RE1ZH4HQ111CX1S8),
ChatGPT Go incident `01KZRJHTR75WDXCMC0ZERX6YJC`, and Ads Manager incident
`01KZRXPE0NGXA12FJNP8WZF8D7`. None supplies a reset or compensation statement.

### Help, changelog, announcements, pull requests, and releases

The mutable official
[`Using Codex with your ChatGPT plan`](https://help.openai.com/en/articles/11369540-codex-and-chatgpt-plan-usage-limits)
page still distinguishes waiting for an ordinary reset, applying an available
banked reset, and adding credits. It also states that redeeming a full banked
reset restarts both the five-hour and weekly windows. It contains no dated
August 11 or August 12 broad-reset action. The official
[`ChatGPT & Codex changelog`](https://developers.openai.com/codex/changelog)
had August 10 as its newest dated entry and no new reset announcement. No new
OpenAI announcement described a completed hard reset or a banked-credit grant.

Merged [PR #38024](https://github.com/openai/codex/pull/38024) and
[commit `edcec13`](https://github.com/openai/codex/commit/edcec133726dd41be19dc54377ce4a5cff96a866)
added structured `usageLimitExceeded` metadata with an optional reset timestamp
for **image generation**. The PR merged at `2026-08-11T15:42:09Z`; the commit is
timestamped `15:33:40Z`. That is a separate image-generation limit and cannot
support a Codex agent-usage reset.

Three post-cutoff prereleases—
[`0.148.0-alpha.7`](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.7)
at `2026-08-11T15:29:55Z`,
[`0.148.0-alpha.8`](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.8)
at `18:41:32Z`, and
[`0.148.0-alpha.9`](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.9)
at `2026-08-12T01:35:53Z`—had placeholder-only bodies and no reset note.
Post-cutoff commit searches returned two raw `reset` hits, one `usage-limit`
hit, and zero `quota`, `reset-credit`, or `rate-limit` hits; inspection reduced
those to unrelated environment wording and the image-generation change above.

### Account-level reports are contradictions, not broad delivery evidence

[Issue #38019](https://github.com/openai/codex/issues/38019), opened
`2026-08-11T15:14:40Z`, says one Plus-to-Pro upgrade did not reset the displayed
meter. It has no staff explanation and does not establish what plan migration
should do, so it remains a single account claim.

Other post-cutoff comments add separate display, enforcement, or consumption
contradictions: [#23994](https://github.com/openai/codex/issues/23994#issuecomment-5264524281)
reports a false exhausted banner while messages still worked;
[#29243](https://github.com/openai/codex/issues/29243#issuecomment-5264660864)
reports cloud 429 responses while web showed remaining Pro quota; and
[#37455](https://github.com/openai/codex/issues/37455#issuecomment-5264764504)
continues a desktop-display-versus-server-state mismatch. New
[#38143](https://github.com/openai/codex/issues/38143) reports rapid depletion
after the reporter had reset quota, but does not identify the reset path or
provide a project-observed transition. These records support keeping display,
enforcement, plan mapping, consumption, and actual reset delivery distinct.
No staff-associated reset-relevant comment after the cutoff supplied a broad
completion or cause.

## Unresolved historical follow-up

### June 29 hard-reset completion and banked-credit breadth

The canonical June 29 post
[`2071740419030053227`](https://x.com/thsottiaux/status/2071740419030053227),
published at X-ID-derived `2026-06-29T23:39:41.629Z`, promised a full hard reset
within one hour and a separate banked credit within 24 hours. Exact-ID and exact-
wording GitHub searches still found no staff-authored completion comment and no
precise independent June 29 transition.

The surviving account reports remain mixed:

- [Issue #30680](https://github.com/openai/codex/issues/30680) reported weekly
  usage still near exhaustion and a zero bank balance around
  `2026-06-30T06:06Z`.
- [Issue #30641 and its first comment](https://github.com/openai/codex/issues/30641#issuecomment-4839142506)
  reported that neither the June 28 nor the newest hard reset appeared while a
  separate Spark bucket did reset.
- [Issue #30726](https://github.com/openai/codex/issues/30726) said hard resets
  had worked during the broader incident period but banked-credit accrual had
  not. It cannot isolate June 28 from June 29.
- [A #30660 comment](https://github.com/openai/codex/issues/30660#issuecomment-4840688777)
  ambiguously reported a credit/reset state after an app update while fast
  depletion continued; it does not distinguish active-window reset from credit
  display.
- [A later #30686 comment](https://github.com/openai/codex/issues/30686#issuecomment-4861400899)
  reported extra reset quota appearing by July 2 but cannot attribute it
  uniquely to June 29.

The official
[`Codex Usage Limits Depleting Faster Than Expected`](https://status.openai.com/incidents/01KW2E6W0503W4NXJNCVAG8V6T)
incident resolved about 6 hours 33 minutes before the promise and contains no
reset or credit-delivery statement. The hard-reset completion therefore remains
unresolved rather than assigned an invented time. Some delivery is plausible,
but there is no recipient denominator or breadth estimate. Banked-credit
delivery is contradicted for multiple accounts, with only ambiguous delayed
receipt in another. Universal delivery and one exclusive cause remain
unsupported.

### July 28, July 29, and August 1 canonical numeric IDs

No canonical numeric X ID was recovered for any of the three mirror-only
records. The bounded search checked the exact configured mirrors, X's native
historical search, and source-native GitHub issues/comments from July 27 through
August 2, including issues
[#35952](https://github.com/openai/codex/issues/35952),
[#36170](https://github.com/openai/codex/issues/36170),
[#36436](https://github.com/openai/codex/issues/36436),
[#36468](https://github.com/openai/codex/issues/36468),
[#36481](https://github.com/openai/codex/issues/36481), and
[#36488](https://github.com/openai/codex/issues/36488). None preserved an exact
`x.com/thsottiaux/status/<numeric-id>` URL.

The mirror-only records remain:

| Mirror creation time | Mirror wording class | Disposition at cutoff |
| --- | --- | --- |
| `2026-07-28T00:27:37Z` and `03:09:23Z` | Future hint, then claimed all-paid-user completion | Discovery only; no X oEmbed candidate exists without a numeric ID. |
| `2026-07-29T04:09:02Z` | Claimed all-user completion followed by a split 11-part mechanism thread | Discovery only; fallback mirror is more complete than preferred, but neither is author proof. |
| `2026-08-01T03:32:37Z` | Claimed completed Codex and ChatGPT Work reset | Discovery only; both mirrors agree on wording/time, but cannot upgrade the independently inferred August 1 event. |

An X Snowflake's lower bits cannot be reconstructed from a whole-second mirror
timestamp, so guessing an ID is prohibited. The August 1 inferred reset remains
supported independently by issues #36436, #36481, and #36468, with its existing
scope and cause uncertainty. July 28 and July 29 remain unaccepted. X sign-in
and GitHub indexing/edit limitations are recorded uncertainty, not permission to
promote mirror text.

## Point-in-time-safe pattern audit

This update applies only evidence public before the evaluated outcome and uses
the project's later discovery/approval time when that is the operative cutoff.
The audit imports no third-party forecast or classifier field.

### 1. Explicit future promises followed by independently visible delivery — unchanged; new hint excluded pending outcome

- **Exact sample and date range:** `n=7` canonical explicit future-promise
  posts, June 16–August 8, evaluated against outcomes visible through
  `2026-08-11`; one new August 12 ambiguous hint is tracked outside the sample.
- **Evidence classes:** attributed operator posts, source-native public
  account/bucket reports, sanitized server anchors, and one project-verified
  transition for the prospectively recorded August promise.
- **Point-in-time cutoff:** each promise publication time; the project first
  recorded the August 8 promise at `2026-08-10T15:09:55.421Z`. The new hint was
  project-visible at `2026-08-12T09:23:37Z` and had no outcome by the research
  cutoff `09:28:06Z`.
- **Supporting cases and lead range:** July 10's two-reset/24-hour promise
  aligns with one account's server anchors about 6 hours 15 minutes and 11 hours
  56 minutes later; July 11's 30-minute statement aligns with an anchor 17
  minutes 34 seconds later; the August 8 promise precedes the verified August
  10/11 transition by 48 hours 13 minutes 37.239 seconds to 51 hours 27 minutes
  48.380 seconds from publication.
- **Contradictory or missing cases:** June 16's completion wording arrived about
  29 hours 20 minutes after its 24-hour promise; the surviving July 9 transition
  is about 14 hours 22 minutes after a one-hour statement; June 26 lacks a
  precise independent transition; June 29 remains unresolved with nonreceipt
  and bucket divergence. The August 12 post is not explicit enough to count as
  an eighth promise.
- **Grade:** C for direction and timing across the heterogeneous historical
  sample; A for the single project-verified August outcome. No probability is
  defensible.
- **Change label:** **unchanged**. The new hint creates a future test, not a
  completed data point.

### 2. Short explicit rollout windows — unchanged and one-account only

- **Exact sample and date range:** `n=3` canonical announcements with testable
  windows from July 9–11 and `n=4` later server-window transitions from one
  public account.
- **Evidence classes:** attributed operator promises plus sanitized
  source-native server rate-limit records.
- **Point-in-time cutoff:** announcement times
  `2026-07-09T21:24:11.842Z`, `2026-07-10T05:30:53.796Z`, and
  `2026-07-11T05:54:25.045Z`; the transition record became public July 12 and
  cannot enter earlier snapshots. Audit cutoff is `2026-08-12T09:28:06Z`.
- **Supporting cases and lead range:** the July 10 anchors arrived about 6 hours
  15 minutes and 11 hours 56 minutes into the 24-hour window; the July 11 anchor
  arrived about 17 minutes 34 seconds into the 30-minute window.
- **Contradictory or missing cases:** July 9's surviving transition was about 14
  hours 22 minutes after a one-hour claim; one account cannot establish rollout
  breadth; a fourth July 12 transition coincided with bucket removal and cannot
  be classified safely as a hard reset.
- **Grade:** B for temporal alignment, C for generalization.
- **Change label:** **unchanged**. The August 12 hint contains no explicit
  rollout window.

### 3. Completed language versus future language — unchanged

- **Exact sample and date range:** `n=7` canonically validated completed-hard-
  reset statements from June 4–August 11: five in the June 4–July 14 historical
  corpus and two aligned with the project's August out-of-cycle observations.
- **Evidence classes:** X-owned canonical validation, inferred historical
  events, source-native public reports, and project verified observations.
- **Point-in-time cutoff:** each statement publication time; historically
  discovered records remain retrospective only. Audit cutoff is
  `2026-08-12T09:28:06Z`.
- **Supporting cases and lead range:** all five historical completed-language
  records have some later public support. The August 8 statement fell inside
  its observation bound and about four seconds after the provider anchor; the
  August 11 explicit completion statement followed its verified observation
  upper bound by 25 minutes 37.172 seconds.
- **Contradictory or missing cases:** broad completed wording repeatedly
  coexists with plan, bucket, display, enforcement, and nonrecipient reports.
  It supports an initiated operator action, not universal delivery. No new
  completed-language statement appeared after the cutoff.
- **Grade:** A for attributed action wording, B for some delivery, C for
  universal-delivery claims.
- **Change label:** **unchanged**.

### 4. Hard resets versus banked credits — unchanged mechanism; June 29 breadth still unresolved

- **Exact sample and date range:** `n=5` explicit mixed-action or grant records
  from June 12–July 13: mechanism rollout, June 18 hard-reset-plus-credit
  action, June 29 reset-plus-credit promise, and standalone July 12 and July 13
  banked grants.
- **Evidence classes:** canonical operator posts, official Help, merged
  repository implementation, and source-native nonreceipt reports.
- **Point-in-time cutoff:** each source publication time; audit cutoff
  `2026-08-12T09:28:06Z`.
- **Supporting cases:** official and implementation sources consistently model
  a hard reset as replacing active windows and a banked reset as a separately
  redeemable credit. The August 11 verified transition advanced an active
  provider anchor while no available banked credit was present.
- **Contradictory or missing cases:** June 17/18 and June 29 show divergent
  active-window and credit-ledger receipt; August 11 credit-read failures obscure
  balance display but are not grants or redemptions; current Help describes the
  mechanism but does not certify campaign delivery. Lead time is not applicable
  to this mechanism-comparison dimension.
- **Grade:** A for the mechanism distinction; B/C for account-level grant
  delivery.
- **Change label:** **unchanged**. The post-cutoff scan found no new grant or
  redemption evidence.

### 5. Incident phase, launch/milestone context, and cause — one new negative case; causal grade unchanged

- **Exact sample and date range:** `n=6` contexts from June 3–August 11: three
  clearly linked incident-resolution/reset-statement sequences, the July 10
  GPT-5.6 launch context, the August 10–11 ChatGPT-error context, and the new
  August 11 API/Codex/Work Mode incident.
- **Evidence classes:** official Status, attributed operator statements,
  source-native public reports, and project verified observations.
- **Point-in-time cutoff:** each official update or announcement time; audit
  cutoff `2026-08-12T09:28:06Z`.
- **Supporting cases and lead range:** in the three clearly linked historical
  sequences, incident resolution preceded the first reset statement by about 2
  hours 34 minutes to 13 hours 17 minutes. Launch and milestone messages have
  also accompanied resets.
- **Contradictory or missing cases:** the August 8 promise predated the
  coincident ChatGPT-only incident; June 29 rejected one central cause;
  promotions occur without incidents. The new Codex/Work incident began 21
  hours 7 minutes 7 seconds after the August 11 explicit completion statement
  and ended without compensation language. It is not a precursor to that
  already completed event, and no later reset was visible by cutoff.
- **Grade:** B for contextual association, D for causal or universal claims.
- **Change label:** **one additional negative/context-only case; causal
  assessment unchanged**.

### 6. Original posts versus replies; cadence and UTC timing — unchanged and too sparse

- **Exact sample and date range:** `n=3` project verified resets from August
  8–11, producing only `n=2` reset-to-reset gaps and `n=3` UTC/day-of-week
  observations. The prior classified historical post corpus remains `n=15`
  canonical June 4–July 14 records. One new August 12 original hint is a pending
  future candidate, not an outcome.
- **Evidence classes:** project verified observations and canonical attributed
  posts.
- **Point-in-time cutoff:** `2026-08-12T09:28:06Z`; the new hint became
  project-visible only at `09:23:37Z`.
- **Supporting cases and lead range:** reply monitoring mattered for the one
  prospectively recorded August 8 promise, while original posts supplied clear
  completed wording. The two verified gaps remain 11 hours 9 minutes 42.937
  seconds and 51 hours 29 minutes 50.496 seconds.
- **Contradictory or missing cases:** two gaps cannot establish cooldown or
  cadence, three verified events cannot establish UTC-hour or weekday effects,
  and the historical post corpus has no comparable reply sample. The new
  original has no outcome yet.
- **Grade:** D.
- **Change label:** **unchanged/too sparse**.

### 7. Public-report clustering and delivery contradictions — slightly strengthened for divergence, not prevalence

- **Exact sample and date range:** the event-cluster base remains `n=5`
  recurrent divergence sequences from June 17–August 11. A separate post-cutoff
  set of `n=5` account-level records—#38019, #23994, #29243, #37455, and
  #38143—adds plan-migration, display, enforcement, and consumption
  contradictions but does not form a sixth independently bounded reset event.
- **Evidence classes:** attributed operator statements, official Help,
  source-native GitHub reports, and project verified transitions.
- **Point-in-time cutoff:** each report's publication time; retrospective
  reports cannot be backfilled into earlier forecasts. Audit cutoff is
  `2026-08-12T09:28:06Z`.
- **Supporting cases:** across the five event clusters, sources repeatedly
  distinguish account, plan, bucket, active window, credit ledger, display, and
  enforcement outcomes. The five newer reports independently reinforce those
  category boundaries.
- **Contradictory or missing cases and lead range:** complaint volume is not a
  delivery rate, reporters are self-selected, and the newer reports are not all
  tied to the August 11 operator action. Historical cluster reports appeared
  from minutes to more than a day after announcements, so they are not exact
  delivery bounds.
- **Grade:** B for recurrent divergence; D for population prevalence.
- **Change label:** **slightly strengthened for divergence; unchanged for
  breadth**.

### 8. Discovery-feed and mirror lag/completeness — freshness confirmed; historical completeness unchanged

- **Exact sample and date range:** combined recent relevant-original sample is
  `n=3` canonically validated August 11–12 posts across two exact mirrors,
  yielding `n=6` mirror copies: the two August 11 completion originals plus the
  August 12 milestone hint. The current raw feed contained `n=21` posts total,
  `n=14` after the prior cutoff, and one new reset-relevant candidate.
- **Evidence classes:** approved raw discovery metadata, exact-DID AT Protocol
  records, source-native X profile, and X-owned oEmbed validation.
- **Point-in-time cutoff:** feed `fetchedAt`
  `2026-08-12T09:07:21.630Z`; project candidate discovery
  `2026-08-12T09:23:37Z`; audit retrieval cutoff `09:28:06Z`.
- **Supporting cases and lag range:** the August 11 mirror-copy lag was about 30
  seconds to 5 minutes 2 seconds. The new hint widened the combined recent
  original-post lag range to about 30 seconds through 9 minutes 37.876 seconds.
  Both exact mirrors were otherwise current through a 07:23:39Z control reply.
- **Contradictory or missing cases:** the preferred mirror's 100-record page
  covered only back to July 31 while the fallback reached July 18; the preferred
  source omitted July 28/29 material; neither source preserved canonical X IDs
  for July 28, July 29, or August 1. No historical completeness percentage can
  be calculated, and mirror text remains non-evidence without canonical X
  validation.
- **Grade:** B for recent redundant discovery; D for historical completeness.
- **Change label:** **freshness confirmed and observed lag range widened;
  historical completeness unchanged**.

## Findings and next bounded tests

No new completed hard reset, banked-credit grant, or confirmed project
observation qualified after `2026-08-11T09:27:59Z`. The only new attributed
reset-relevant signal is the August 12 milestone surprise hint. It is canonical
and source-native but ambiguous, pending review, and outcome-free at this
cutoff. The only new official Codex incident contains no compensation language
and occurred after the already completed August 11 action.

The strongest pattern remains an explicit canonical reset promise with a stated
window followed by source-native completion language and an independent account
transition. The new hint does not yet meet that definition. Completed language
continues to support operator action rather than universal delivery; hard resets
and banked credits remain distinct; incident or milestone context alone does
not establish cause; and three verified events remain far too sparse for
cadence, UTC, weekday, or recurring-probability claims.

## Observer and deterministic refresh

The privacy-safe observer status at `2026-08-12T09:03:18.442Z` retained 1,683
samples and the same three published deterministic resets. No new transition or
pending publication existed, the individual-paid primary bucket was 34% used
and available, and no banked reset credit was present. Its live primary reset
timestamp was `2026-08-18T00:05:51Z`, 3 minutes 13 seconds later than the
`2026-08-18T00:02:38Z` anchor retained with verified issue #4. Because there
was no qualifying usage drop, exhaustion recovery, or new detected reset, this
is a small post-event anchor drift to preserve for future checks, not a fourth
reset. A separate Spark bucket was 0% used with a
`2026-08-19T09:03:18Z` reset timestamp and must not be collapsed into the
primary bucket.

The live `npm run update:data` cutoff was `2026-08-12T09:20:51.319Z`. It kept
three verified observations, one approved public source, two Codex-relevant
official incidents, zero rejected records, and zero duplicates. Pending issues
#5 and #6 remained forecast-ineligible. Deterministic inputs changed only with
elapsed time and the new resolved official incident: hours since the last
confirmed reset rose from about 9.36 to 33.30, incident recency fell from about
433.48 to 11.76 hours, and the current-window explanation moved from 159 to 135
hours until the retained anchor. Outputs did not change: all five horizons
remain 1%, the likely interval remains `2026-08-17T19:50:38Z` through
`2026-08-18T04:14:38Z`, confidence remains D, eight scored forecasts retain
Brier `0.12955`, and no model was promoted.

Next bounded checks are:

1. After August 13 begins, look for an explicit canonical action following post
   `2087423996115681767`, preserve the pending source's approval time, and seek
   an independent provider-anchor transition before classifying an outcome.
2. Keep June 29 open until a precise source-native transition or staff
   completion statement appears; preserve hard-reset and bank-credit breadth
   separately.
3. Continue to fail closed on July 28, July 29, and August 1 unless a canonical
   numeric X URL is recovered and passes X-owned validation.
4. Treat the August 11 API/Codex/Work Mode incident and new display/enforcement
   reports as context and contradictions, not cause or completed-reset proof.
