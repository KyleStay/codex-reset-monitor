# Source scan, 2026-08-26

**Public-source research cutoff:** `2026-08-26T09:23:35.622Z`. The previous
cutoff was `2026-08-25T09:27:34.997Z`, which bounds the recent monitoring
window. This scan also rechecks the June 29 reset-plus-credit question, the
July 28/29 and August 1 delivery gaps, the August 8/10 promise, August 13
breadth, the 20M banked credit, the Plus five-hour-limit return, and the
August 31 model migration. Publication, discovery, approval, and observation
times stay separate.

## Source boundary and retrieval

I checked official OpenAI Status, Help, pricing, changelog, developer guidance,
public `openai/codex` records, the exact configured `@thsottiaux` account, the
restricted discovery feed, and both exact-DID mirrors. The local observer
supplied only privacy-minimized quota state. I did not read private Codex
activity, credentials, account identifiers, logs, or any third-party forecast,
classifier, probability, signal assessment, or derived score.

| Surface | Retrieval and finding |
| --- | --- |
| [OpenAI Status](https://status.openai.com/history) and the repository adapter | No new August 25 or 26 incident appeared. The refresh retained two Codex-relevant incidents, both resolved. No official incident links the new reset to compensation, a cause, a credit, or a usage-window change. |
| [Codex Help article](https://help.openai.com/en/articles/11369540-codex-and-chatgpt-plan-usage-limits) | The mutable page reported `Updated: 12 hours ago`. It says a full banked reset restarts both five-hour and weekly windows while leaving the scheduled weekly date unchanged. It separately describes automatic one-time resets, eligibility variation, and possible separate banked resets. It retains the August 31 GPT-5.4 and GPT-5.4 mini migration to GPT-5.6 Terra and Luna. These are current product rules, not a dated reset record. |
| [Official pricing](https://learn.chatgpt.com/docs/pricing), [changelog](https://learn.chatgpt.com/docs/changelog), and [model guidance](https://developers.openai.com/api/docs/guides/latest-model) | The current pages continue to distinguish shared usage, five-hour and weekly limits, credits, and model-dependent cost. No August 26 changelog entry or completed reset statement was found. GPT-5.6 model guidance is migration context, not reset evidence. |
| [Public Codex releases](https://github.com/openai/codex/releases) | The bounded release check found no source-native release note that announces a reset, credit grant, redemption, compensation event, or quota-policy change. |
| Public `openai/codex` issues, comments, and PRs | The bounded search found usage-accounting and enforcement reports but no staff-confirmed reset, shared cause, recipient denominator, or merged quota-policy change. The focused results are summarized below. |
| [Configured X account](https://x.com/thsottiaux) | The public source-native profile loaded and showed `2,740 posts`. It exposed recent originals, while the Replies tab continued to return the Posts list. Canonical pages and X-owned oEmbed validated the three relevant records below. |
| Approved temporary discovery feed | Only `fetchedAt=2026-08-26T08:49:57.098Z`, `sourceErrors.tibo=null`, and raw `tiboPosts` were read. Three new relevant numeric candidates were treated as discovery leads. No third-party forecast or classification field was read. |
| Preferred mirror, exact DID `did:plc:rcaom2u2hfsm3aqab5dfvhxs` | It reproduced the two relevant replies. The reset acknowledgement was indexed `13m25.784s` after its ID-derived X time, and the credit reply `10m01.126s` after X. The bounded two-page feed check did not return the Business Premium original. |
| Fallback mirror, exact DID `did:plc:rcelwndiefenpjvnm6uood4t` | It reproduced the Business Premium original as a split thread, starting `2m18.581s` after its ID-derived X time. The bounded check did not return the two relevant replies. |

The recent search range was `2026-08-25T09:27:34.997Z` through
`2026-08-26T09:23:35.622Z`. Historical rechecks covered the public launch of
ChatGPT-plan Codex limits through the cutoff, with focused checks on the gaps
listed above. No new source closed the June 29 completion question or supplied
a recipient denominator for July 28/29, August 1, August 13, the 20M credit, or
Business delivery.

## Canonical X evidence

Each item below was validated on its canonical X page and through
X-owned oEmbed. Both surfaces named Tibo and `@thsottiaux`, preserved the
canonical URL and public text, and agreed on the displayed date. No official
API `created_at` was available, so exact UTC uses the X Snowflake ID and is
labeled ID-derived. Retrieval completed at `2026-08-26T09:21:10Z`.

| Canonical post | Timestamp basis | Classification and boundary |
| --- | --- | --- |
| [2092316228497063958](https://x.com/thsottiaux/status/2092316228497063958) | X displayed `2:20 PM · Aug 25, 2026`; ID-derived `2026-08-25T18:20:36.886Z` | Reply to “Did we just get a random Codex reset?” saying “Not so random, but yes.” This is attributed completed hard-reset acknowledgement. It follows the independently verified local transition by `4h06m23.427s`, but cannot establish universal delivery, account scope, or cause. |
| [2092491252449366355](https://x.com/thsottiaux/status/2092491252449366355) | X displayed `1:56 AM · Aug 26, 2026`; ID-derived `2026-08-26T05:56:05.848Z` | Reply saying “Both” to a question asking whether a Full reset restarts the five-hour limit, weekly limit, or both. This is a banked reset-credit mechanism statement. It is not a grant, redemption, or completed reset. |
| [2092345330272780499](https://x.com/thsottiaux/status/2092345330272780499) | X displayed `4:16 PM · Aug 25, 2026`; ID-derived `2026-08-25T20:16:15.290Z` | Business Premium plan statement ending “No 5h limits.” This is a plan-specific usage-limit mechanism statement, not a reset. The canonical page, unlike the truncated oEmbed excerpt, exposed the full line. |

The new records were filed as pending-review issues
[#26](https://github.com/KyleStay/codex-reset-monitor/issues/26),
[#27](https://github.com/KyleStay/codex-reset-monitor/issues/27), and
[#28](https://github.com/KyleStay/codex-reset-monitor/issues/28). They are
forecast-ineligible unless a maintainer approves them. The previously promised
Plus five-hour-limit return remains distinct from the verified hard reset.
Public replies on the canonical pages report five-hour depletion, silent
rollout, and credit timing, but they are account claims without bounded meter
evidence.

## Observer and evidence state

Verified issue [#25](https://github.com/KyleStay/codex-reset-monitor/issues/25)
records the seventh deterministic observation:

- prior sample `2026-08-25T14:09:06.845Z`, `25%` used;
- observed transition `2026-08-25T14:14:13.459Z`, `0%` used;
- provider anchor advanced from `2026-08-31T02:00:26Z` to
  `2026-09-01T14:13:48Z`;
- `7,906` minutes before the prior schedule, so it is out of cycle;
- available banked-credit count stayed `1` before and after.

The transition came `12h57m30.315s` after the Plus five-hour-limit promise and
`4h06m23.427s` before the attributed acknowledgement. This timing makes the
promise a useful detection window for this monitored account. It does not
prove the reset and the five-hour policy were one action, establish cause, or
show which plans received either change.

The latest observer sample at `2026-08-26T09:18:45.568Z` reported `7%` used,
weekly anchor `2026-09-01T14:13:48Z`, one available unredeemed credit, seven
published resets, and no pending publication. It retained `4,855` samples from
`2026-08-03T10:16:12.586Z`. The separate Spark bucket remains excluded.
Project state after refresh is seven verified observations, one approved
public source, and twenty pending-review sources.

## Historical follow-up and contradictions

No new canonical or independent evidence resolves the June 29 promised
reset-plus-credit completion, July 28/29 breadth, August 1 breadth, or August
13 recipient set. The August 8 promise remains resolved only for the monitored
account through later independent transitions. The 20M banked credit remains
available and was not redeemed by either the August 24 or August 25 hard reset.

The strongest new contradiction is product-state separation. The observer saw
a hard reset while the banked credit count stayed unchanged. A later operator
reply said the banked Full reset affects both five-hour and weekly usage. The
Help page adds that redemption does not move the scheduled weekly date. These
facts describe different actions and must not be collapsed. Public replies
also report five-hour enforcement, rapid depletion, and a user spending a
banked reset shortly before the broad action. None supplies a controlled
before-and-after provider record.

## Recent repository-native signals

The bounded GitHub scan reviewed `n=27` distinct issue records with relevant
activity from `2026-08-25T09:27:34.997Z` through
`2026-08-26T09:21:50.300Z`. All substantive reports were user-authored. Bot
duplicate notices are not staff evidence. No OpenAI member or owner comment
confirmed a reset, credit event, provider anchor, accounting change, or cause.

High-signal contradictions include:

- [#40789](https://github.com/openai/codex/issues/40789), a report that a
  banked reset returned the display to 100% but new requests still received
  429s;
- [#40693](https://github.com/openai/codex/issues/40693), a user-reported reset
  followed by exhaustion after a 22-minute job, without timezone or provider
  bounds;
- [#32333](https://github.com/openai/codex/issues/32333), a claim that an
  orchestration flow consumed the last Full reset without explicit parent
  approval, contrasting with earlier failed redemption attempts;
- [#36426](https://github.com/openai/codex/issues/36426), a reimbursement policy
  request with an unverified report of banked redemption shortly before a
  server reset;
- [#31818](https://github.com/openai/codex/issues/31818), a display/accounting
  report where five-hour remaining rose from 38% to 98% and the displayed reset
  time moved earlier during use;
- [#37619](https://github.com/openai/codex/issues/37619),
  [#38829](https://github.com/openai/codex/issues/38829), and
  [#40792](https://github.com/openai/codex/issues/40792), three cross-platform
  reports that desktop Chat Voice was gated by Codex/Work usage while web Voice
  worked for the same account;
- [#40790](https://github.com/openai/codex/issues/40790) and
  [#40659](https://github.com/openai/codex/issues/40659), account-level claims
  of rapid Terra five-hour consumption without a provider ledger.

Recent merged PRs
[#40648](https://github.com/openai/codex/pull/40648),
[#40651](https://github.com/openai/codex/pull/40651),
[#40653](https://github.com/openai/codex/pull/40653),
[#40656](https://github.com/openai/codex/pull/40656), and
[#40668](https://github.com/openai/codex/pull/40668) concern turn settings and a
paginated history migration, not quota policy. Releases
[0.150.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.9),
[alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.10),
and [alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.11)
have empty release-note bodies. No GitHub candidate qualifies as an inferred
reset or confirmed cause.

## Point-in-time-safe pattern audit

The audit uses only evidence public, discovered, or approved before each
evaluated cutoff, then checks later outcomes. The current cutoff is
`2026-08-26T09:23:35.622Z`. The new X records and issue #25 do not alter an
earlier forecast snapshot.

| Pattern | Exact sample, date range, evidence classes, and cutoff | Support, contradictions, grade, and change since August 25 |
| --- | --- | --- |
| Provider-owned bounded transition | `n=7` verified observations, August 8 to 25; sanitized observer meter/access transitions and provider anchors; current cutoff. | The new 25% to 0% transition materially advanced the anchor and passed the dedicated validator. Five of seven events are out of cycle, so it does not establish recurring timing. **Grade A, strengthened.** |
| Explicit future reset promises | `n=10` canonical promise records, June 16 to August 24; X-validated attributed posts/replies, discovery times, and later observer bounds. | The Plus five-hour-limit promise was followed `12h57m30.315s` later by a local hard reset, but the promise concerned a limit mechanism and does not state that the reset was its delivery action. Independently bounded historical lead times remain about `17m34s` to `51h28m`. June 29 remains unresolved and July 9 missed its stated hour. **Grade C directional, strengthened as a detection window.** |
| Future mechanism and usage-limit statements | `n=3` canonical mechanism records, August 25 to 26; one Plus future-limit statement, one Business Premium scope statement, and one banked-credit behavior reply; current cutoff. | Public replies indicate the five-hour limit became visible, while the exact rollout boundary and enforcement population remain unknown. The Business Premium exception narrows scope. **Grade C directional, strengthened from one to three records.** |
| Completed versus future wording | `n=21` attributed wording records, June 4 to August 26; canonical X originals/replies, credits, inferred records, and verified observations. | The new acknowledgement follows a local reset by four hours. The credit and plan statements remain mechanism evidence. Classification is strong; breadth prediction remains weak. **Grade A attribution, C to D delivery prediction; strengthened.** |
| Banked credit versus hard reset | One available local credit, granted August 22, observed across two later hard resets, plus prior canonical credit statements and the new “Both” reply; observer metadata, official Help, X, and public reports. | Credit count stayed `1` across both hard resets. This is direct local evidence that a queued credit and automatic hard reset are distinct. No redemption is observed. **Grade A local distinction, D breadth; strengthened.** |
| Incident chronology and reset linkage | `n=16` incident/reset contexts, June 3 to August 25; official Status chronology, observer events, attributed posts, and public reports. | The seventh reset has no matching official incident. No official source assigns cause. **Grade A chronology, D reset linkage; strengthened negative control.** |
| Recent depletion and accounting mechanisms | `n=27` distinct GitHub issue records with relevant recent activity, August 8 to 26; user issue bodies/comments, bot duplicate notices excluded from evidence, plus source-native PR/release checks; current cutoff. | Five-hour enforcement, banked-reset authorization, Voice routing, rapid Terra consumption, background work, and display reports remain heterogeneous. There is no shared transition, denominator, or staff diagnosis. **Grade B mechanism candidates, D prevalence/cause; strengthened, not causal.** |
| Public clustering and contradictions | `n=44` focused records, August 19 to 26; inherited `n=40` plus four source-native replies about five-hour policy, fast depletion, silent rollout, and banked-credit timing. | The reports contradict universal timing and consistent enforcement, but no population denominator or common-event proof exists. **Grade B divergence, D prevalence; strengthened.** |
| Originals versus replies | Three newly validated records, one original and two replies, August 25 to 26; X canonical pages, oEmbed, discovery feed, and mirrors. | The original gives a plan exception. The replies give reset acknowledgement and credit behavior. Replies carried the highest-value details, and the public profile's Replies tab did not expose them. **Grade A attribution, C timing, D delivery prediction; strengthened.** |
| Discovery and mirror freshness | Three validated records; feed fetched `2026-08-26T08:49:57.098Z`; exact-DID API records; current cutoff. | Preferred mirror lag was `10m01.126s` to `13m25.784s` for replies and omitted the original in the bounded check. Fallback lagged `2m18.581s` for the split original and omitted both replies. **Grade B measured freshness, D completeness; weakened completeness.** |
| Reset gaps, cooldown, UTC time, and weekday | `n=7` observations, August 8 to 25, yielding `n=6` gaps: `11h09m42.937s`, `51h29m50.496s`, `55h20m37.071s`, `170h25m58.932s`, `85h58m44.404s`, and `37h26m14.123s`. | The added out-of-cycle gap increases the sample but leaves it too heterogeneous for cadence, cooldown, weekday, or UTC-hour inference. **Grade D, unchanged.** |

The strongest predictor remains a bounded provider-owned transition paired
with a materially advanced stable provider anchor. Promises help choose when
to watch, not whether every account received an action. Credit counts identify
queued capacity and redemption state. They are not reset labels.

Signals that failed or remain too sparse include provider-anchor drift without
a usage transition, reset-button wording without redemption evidence,
universal rollout language without recipient denominators, Status incidents,
mirror presence, cache and relaying explanations, background-model anecdotes,
and cadence, weekday, or UTC-hour effects. The seven-event sample is still too
small for a defensible schedule pattern.

## Changes, next tests, and deterministic forecast

Since the prior scan:

- a seventh verified out-of-cycle reset advanced the provider anchor;
- canonical X and oEmbed validated one reset acknowledgement and two mechanism
  statements;
- pending issues #26 to #28 preserved their discovery cutoff without changing
  forecasts;
- the local banked credit remained available and unredeemed;
- official Status added no matching incident;
- the Help page now explicitly says a banked reset leaves the scheduled weekly
  reset date unchanged.

Next observable tests:

1. Observe the Plus five-hour bucket separately from the weekly anchor. Record
   visible enforcement, plan scope, and display/provider contradictions.
2. Track the banked-credit count and scheduled weekly date across an actual
   redemption. Require both before and after states.
3. Test the September 1 provider anchor and August 31 model migration without
   treating migration as reset cause.
4. Seek independent Business receipt and nonreceipt evidence, plus June 29,
   July 28/29, August 1, August 13, and 20M-credit recipient bounds.
5. Follow focused accounting, crash, compaction, and routing issues for staff
   diagnosis and paired provider evidence.
6. Recheck X, oEmbed, the discovery feed, and both exact-DID mirrors. Preserve
   reply omissions and discovery lag.

The live refresh produced dataset
`events-7-cutoff-2026-08-26-74ea586e` and forecast `fc_20260826092335`.
Confirmed, scheduled, and out-of-cycle event counts are `7`, `1`, and `5`.
The active-incident input is `false`, approved posts in 24 hours remain `0`,
and data quality rose from `0.24` to `0.28`. Probabilities stayed `1%` at 1,
3, 6, 12, and 24 hours. The likely interval moved to
`2026-09-01T12:43:48Z` through `2026-09-01T15:43:48Z`, confidence `D`.
Performance remains `n=21`; model and baseline Brier are both
`0.0710285714`. There is no evaluation win and no model promotion. No earlier
feature snapshot was rewritten.

## Coverage gaps and blockers

Universal delivery denominators remain unavailable. June 29 credit completion,
July 28/29 and August 1 breadth, August 13 breadth, the 20M credit recipient
set, and Business scope remain unresolved. The X profile's Replies tab did not
expose replies, but canonical pages and oEmbed remained readable. Mirror
coverage was split and incomplete. Mutable Help and pricing pages lack a full
revision history. No official source confirms a cause for the new reset or the
public cache, compaction, routing, background-use, crash-consumption, or rapid
depletion reports.
