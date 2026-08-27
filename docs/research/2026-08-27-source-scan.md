# Source scan, 2026-08-27

**Public-source research cutoff:** `2026-08-27T09:24:49.486Z`. The previous
cutoff was `2026-08-26T09:23:35.622Z`, which bounds the recent monitoring
window. This scan also rechecks the June 29 reset-plus-credit question, the
July 28/29 and August 1 delivery gaps, the August 8/10 promise, August 13
breadth, the August 20M credit, the August 24-26 activity, and the August 31
model migration. Publication, discovery, approval, and observation times stay
separate.

## Source boundary and retrieval

I checked official OpenAI Status, Help, pricing and changelog material, the
public `openai/codex` repository, the exact configured `@thsottiaux` account,
the restricted discovery feed, and both exact-DID mirrors. The local observer
supplied only privacy-minimized quota state. I did not read private Codex
activity, credentials, account identifiers, logs, or any third-party forecast,
classifier, probability, signal assessment, or derived score.

| Surface | Retrieval and finding |
| --- | --- |
| [OpenAI Status history](https://status.openai.com/history) and the [official incidents API](https://status.openai.com/api/v2/incidents.json) | The Status page and API had no new incident after the previous cutoff. The API's `page.updated_at` remains `2026-08-21T23:15:09Z`; it contains no August 26 or 27 Codex reset, compensation, credit, or quota-policy statement. |
| [Codex Help article](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan) | The mutable page said `Updated: 16 hours ago` at retrieval. It currently says that a full banked reset refreshes both the five-hour and weekly windows **and changes the weekly reset date**. It also says an active turn may continue after a limit, and retains the August 31 GPT-5.4 and GPT-5.4 mini migration to GPT-5.6 Terra and Luna. The exact revision timestamp is not exposed. |
| [ChatGPT and Codex changelog](https://learn.chatgpt.com/docs/changelog) | No August 26 or 27 quota entry appeared. The dated June 11 entry documents rate-limit reset banking for Plus and Pro, and the August 31 entry documents GPT-5.4 and GPT-5.4 mini retirement in ChatGPT-authenticated Codex. |
| [Codex releases](https://github.com/openai/codex/releases) | Stable `0.150.1` was released on August 27 at about `01:56Z`; its only note is a retained-image remote-compaction token-budget fix. `0.151.0-alpha.4` was released at about `02:47Z` with no quota note. Neither release announces a reset, credit grant, redemption, compensation, or usage-window change. |
| [Configured X account](https://x.com/thsottiaux) | The source-native profile loaded with `2,749 posts`. Its Replies tab still duplicated the Posts list. The three relevant new status pages named Tibo and `@thsottiaux`, preserved their canonical URLs and public text, and displayed their dates. X-owned oEmbed validation also succeeded for all three. |
| Approved temporary discovery feed | Only `fetchedAt=2026-08-27T08:52:06.360Z`, `sourceErrors.tibo=null`, and raw `tiboPosts` were read. The feed located the three canonical records below. No forecast, `tiboSignal`, `tweetAssessment`, persisted classification, probability, or derived score was read or used. |
| Preferred mirror, exact DID `did:plc:rcaom2u2hfsm3aqab5dfvhxs` | It carried all three records. Approximate indexing lag was 45 seconds for the reset hint, 10 minutes 8 seconds for the Luna reply, and 10 minutes 3 seconds for the recovery reply. |
| Fallback mirror, exact DID `did:plc:rcelwndiefenpjvnm6uood4t` | It carried only the reset hint, about 3 minutes 14 seconds after its ID-derived X time, and omitted both replies. Mirrors remain discovery and corroboration aids, not authorship or reset proof. |

The recent monitoring range was `2026-08-26T09:23:35.622Z` through
`2026-08-27T09:24:49.486Z`. Historical rechecks covered the public launch of
ChatGPT-plan Codex limits through the cutoff, with focused checks on all gaps
listed above. No source closed the June 29 completion question or supplied a
recipient denominator for July 28/29, August 1, August 13, the 20M credit, or
Business delivery.

## Canonical X evidence

The three new records were validated on their canonical X pages and through
X-owned oEmbed. No official API `created_at` was available, so the exact UTC
values use the X Snowflake ID and are labeled ID-derived. The profile and
canonical pages were reviewed during this run. These records were filed as
forecast-ineligible pending-review issues [#29](https://github.com/KyleStay/codex-reset-monitor/issues/29),
[#30](https://github.com/KyleStay/codex-reset-monitor/issues/30), and
[#31](https://github.com/KyleStay/codex-reset-monitor/issues/31). Their
discovery cutoff stays later than any earlier forecast snapshot.

| Canonical post | Timestamp basis | Classification and boundary |
| --- | --- | --- |
| [2092862554632826968](https://x.com/thsottiaux/status/2092862554632826968) | X displayed `2:31 AM · Aug 27, 2026`; ID-derived `2026-08-27T06:31:31.187Z` | Tibo referred to a long gap since pressing the reset button, then wrote, "Intrigued to see if I can find it tomorrow and dust it up." This is an attributed future-reset hint, not a completed reset. The wording is playful and does not define plan, bucket, recipient set, or delivery time. |
| [2092818923075092957](https://x.com/thsottiaux/status/2092818923075092957) | X displayed `11:38 PM · Aug 26, 2026`; ID-derived `2026-08-27T03:38:08.613Z` | Reply to a public question about a `5.6 Luna reserve` after a limit was reached. Tibo replied, "Luna!" This is an attributed model-reserve or usage-limit mechanism statement. It is not a reset, credit grant, redemption, or proof of plan-wide rollout. |
| [2092675679724978506](https://x.com/thsottiaux/status/2092675679724978506) | X displayed `2:08 PM · Aug 26, 2026`; ID-derived `2026-08-26T18:08:56.737Z` | Reply saying, "Dear Viktor, it's all forgiven. Glad you found your usage back. Let's build!" This acknowledges another user's reported recovery after an accounting or workflow problem. It is attributed recovery context, not an independently bounded reset and not evidence of universal delivery or cause. |

The reset hint is the only new record that can choose a prospective observation
window. The Luna reply narrows a possible fallback or reserve behavior but says
nothing about eligibility, duration, accounting, or whether a five-hour meter
was restored. The recovery reply does not identify the transition that restored
the other user's access. All three remain outside the live forecast until a
maintainer approves them, and approval would not turn any of them into a
confirmed observation.

## Observer and evidence state

At `2026-08-27T09:22:01.308Z`, the local observer reported `19%` used, the
unchanged weekly anchor `2026-09-01T14:13:48Z`, one available unredeemed reset
credit, seven published resets, and no pending publication. There was no new
meter or access transition after verified issue #25 by the cutoff. The reset
hint therefore remains unresolved, about 2 hours 50 minutes before the latest
observer sample. The credit remains queued capacity, not a completed reset or
redemption.

Project issues now contain seven verified observations, one approved public
source, and twenty-three pending-review public sources. The three new pending
records do not enter the live dataset.

The current evidence still distinguishes three states:

1. A provider-owned meter or access transition can confirm one monitored
   account's reset when bounded by the observer validator.
2. A banked credit can remain available across automatic hard resets.
3. An operator statement can describe a mechanism, promise, or another user's
   recovery without proving delivery to this account or to the wider user
   population.

The current Help wording says redemption changes the weekly reset date. The
previous scan captured wording that said a banked reset left the scheduled
weekly date unchanged. The page is mutable and gives no revision history, so
this is a documentation contradiction to preserve, not a basis for choosing
which behavior occurred in this account.

## Historical follow-up and contradictions

No new primary source resolves the June 29 promised reset-plus-credit
completion, July 28/29 breadth, August 1 breadth, August 13 recipient set, or
the August 20M credit's recipient set. The August 8 promise remains resolved
only for the monitored account through later independent transitions. The
August 24-26 activity adds an operator hint, a Luna reserve statement, and a
recovery acknowledgement, but no new observer transition or recipient
denominator.

The clearest current contradiction is still the separation between automatic
hard resets, banked resets, and credits. The local credit count stayed at one
through the two later hard resets. The current Help article says that redeeming
a full banked reset changes the weekly date, while the observer's automatic
hard resets re-anchored the provider window without consuming the credit. These
actions must not be collapsed. Public issue reports also describe display
restoration without request authorization, stale retry dates, rapid depletion,
and usage that returned after workflow or accounting problems. None provides a
controlled before-and-after provider record for a population of accounts.

## Recent repository-native signals

The bounded post-cutoff pass reviewed **n=10** focused public `openai/codex`
issue records with quota, usage, compaction, or paid-workflow implications:
[#40862](https://github.com/openai/codex/issues/40862),
[#40880](https://github.com/openai/codex/issues/40880),
[#40916](https://github.com/openai/codex/issues/40916),
[#40957](https://github.com/openai/codex/issues/40957),
[#40965](https://github.com/openai/codex/issues/40965),
[#40970](https://github.com/openai/codex/issues/40970),
[#40977](https://github.com/openai/codex/issues/40977),
[#40980](https://github.com/openai/codex/issues/40980),
[#41016](https://github.com/openai/codex/issues/41016), and
[#41049](https://github.com/openai/codex/issues/41049). The focused range is
August 26 through August 27, with discovery during the current cutoff window.
All substantive records are user-authored. No OpenAI member or owner comment
confirmed a reset, credit event, provider anchor, accounting change, or cause.

The strongest usage reports are:

- [#40880](https://github.com/openai/codex/issues/40880) reports a Plus meter
  moving from 100% to 84% after a 6 minute 20 second basic task on GPT-5.6
  Terra Medium, and says similar depletion occurred after switching away from
  GPT-5.6 Sol. It has no provider ledger, comparison account, or staff
  diagnosis.
- [#40862](https://github.com/openai/codex/issues/40862) reports a usage-limit
  message almost an hour after the displayed reset time, but provides no
  bounded meter or access transition.
- [#40916](https://github.com/openai/codex/issues/40916) asks `/status` to show
  absolute units and per-turn deductions. It explicitly says official API
  pricing and rate limits do not establish the product-plan units.
- [#40965](https://github.com/openai/codex/issues/40965) reports paid usage
  consumed by repeated workflow regressions and asks for usage visibility and
  compensation review. It is an account claim, not a reset observation.

Additional records connect usage loss to late safety blocking, context
compaction, cross-thread response retrieval, transport failures, or model
handshake problems. They are useful detection candidates, but do not show a
shared quota transition. The release check found no quota-related PR or
release note in the bounded range.

## Point-in-time-safe pattern audit

The audit compares only evidence public, discovered, or approved before each
evaluated cutoff with later outcomes. The current cutoff is
`2026-08-27T09:24:49.486Z`. The three new X records and the unchanged observer
state do not alter any earlier forecast feature snapshot.

| Pattern | Exact sample, date range, evidence classes, and cutoff | Support, contradictions, grade, and change since August 26 |
| --- | --- | --- |
| Provider-owned bounded transition | `n=7` verified observations, August 8-25; sanitized observer meter/access transitions and provider anchors; current cutoff. | The seventh event remains the latest valid transition. No new transition followed the reset hint. Five of seven events are out of cycle, so recurring timing is not established. **Grade A, unchanged.** |
| Explicit future reset promises and hints | `n=11` canonical promise or future-action records, June 16-August 27; X canonical pages and oEmbed, discovery times, and later observer bounds; current cutoff. | Prior independently bounded lead times remain about 17 minutes 34 seconds to 51 hours 28 minutes. The new hint has no completed outcome by the cutoff, so it is a watch-window signal only. June 29 remains unresolved and July 9 missed its stated hour. **Grade C directional, strengthened as a detection window.** |
| Future mechanism and usage-limit statements | `n=4` canonical mechanism records, August 25-27; X originals/replies plus current Help; current cutoff. | The Luna reply adds a model-reserve statement to the previous five-hour, Business-plan, and banked-credit statements. Scope, eligibility, accounting, and rollout remain unknown. **Grade C directional, strengthened.** |
| Completed versus future wording | `n=24` attributed wording records, June 4-August 27; X canonical originals/replies, credits, inferred records, and verified observations; current cutoff. | The new reset-button line is future language. The recovery reply acknowledges another user's result but does not prove a transition. Classification still cleanly separates hints, acknowledgements, credits, and verified resets. **Grade A attribution, C-D delivery prediction, strengthened.** |
| Banked credit versus hard reset | `n=1` available local credit tracked across two later hard resets, August 22-27; observer credit snapshots, current Help, X mechanism statements, and public contradictions; current cutoff. | The credit stayed available and unredeemed while automatic hard resets occurred. The current Help wording gives a weekly-date effect for redemption, but its conflict with yesterday's captured wording lowers documentation consistency. **Grade A local distinction, D breadth, strengthened with a documentation contradiction.** |
| Incident chronology and reset linkage | `n=16` incident/reset contexts, June 3-August 25; official Status chronology, observer events, attributed posts, and public reports; current cutoff. | Status has no new incident after August 21 and no official source assigns a cause to the latest reset. **Grade A chronology, D reset linkage, unchanged.** |
| Recent depletion and accounting candidates | `n=10` focused GitHub records, August 26-27; user issue bodies/comments, source-native release check, and no staff confirmation; current cutoff. | Fast Terra/Sol depletion, stale limit messages, `/status` opacity, late safety blocks, compaction, transport, and model-handshake failures are heterogeneous. There is no common transition, denominator, or staff diagnosis. **Grade B candidate mechanisms, D prevalence/cause, strengthened.** |
| Public clustering and contradictions | `n=13` current records, August 26-27; three X records plus the ten focused GitHub records; current cutoff. | The records cluster around renewed five-hour enforcement and delivery/accounting uncertainty, but they contradict universal timing and consistent enforcement. No population denominator or common-event proof exists. **Grade B divergence, D prevalence, strengthened.** |
| Originals versus replies | `n=3` new canonical records, August 26-27; one original and two replies, X canonical pages, oEmbed, discovery feed, and mirrors; current cutoff. | The original gives a prospective reset hint. Replies carry the Luna reserve and recovery details. Replies remain high-value for context, but the profile's Replies tab did not expose them. **Grade A attribution, C timing, D delivery prediction, strengthened.** |
| Discovery and mirror freshness | `n=3` validated records; feed fetched `2026-08-27T08:52:06.360Z`, exact-DID mirror reads, and current cutoff. | The preferred mirror covered all three with about 45 seconds to 10 minutes 8 seconds of lag. The fallback covered only the hint at about 3 minutes 14 seconds and omitted both replies. **Grade B measured freshness, D completeness, unchanged.** |
| Reset gaps, cooldown, UTC time, and weekday | `n=7` observations, August 8-25, yielding six gaps: `11h09m42.937s`, `51h29m50.496s`, `55h20m37.071s`, `170h25m58.932s`, `85h58m44.404s`, and `37h26m14.123s`; observer transitions and anchors; current cutoff. | No new event changes the heterogeneous sample. It remains too small for cadence, cooldown, weekday, or UTC-hour inference. **Grade D, unchanged.** |
| August 31 migration context | `n=2` dated official records, current Help and changelog, first published before the current cutoff; current cutoff. | Both identify GPT-5.4 and GPT-5.4 mini retirement in ChatGPT-authenticated Codex and replacements by Terra and Luna. Neither describes a reset or altered quota window. **Grade A product-change context, D reset-cause linkage, unchanged.** |

The strongest predictor remains a bounded provider-owned transition paired with a
materially advanced stable provider anchor. Promises and hints help choose when
to watch, not whether every account received an action. Credit counts identify
queued capacity and redemption state. They are not reset labels.

Signals that failed or remain sparse include anchor-only drift, reset-button
wording without a later transition, Luna reserve wording without scope or
meter evidence, universal rollout language without recipient denominators,
Status incidents, mirror presence, cache or relaying explanations, background
model anecdotes, compaction and routing failures, and cadence, weekday, or UTC
hour effects. The seven-event sample is still too small for a defensible
schedule pattern.

## Changes, next tests, and deterministic forecast

Since the prior scan:

- a new X future-reset hint, Luna reserve reply, and recovery acknowledgement
  were canonical and oEmbed validated, then held pending review;
- the configured discovery feed remained healthy at
  `2026-08-27T08:52:06.360Z`, while the profile Replies tab remained
  incomplete;
- the preferred mirror covered all three new records, but the fallback omitted
  both replies;
- the observer stayed at seven published resets, one available unredeemed
  credit, 19% used, and the unchanged September 1 anchor;
- official Status added no incident, and the new stable release changed
  compaction budgeting only;
- the current Help article's banked-reset wording now conflicts with the prior
  scan's captured weekly-date wording; no artificial revision timestamp was
  created.

Next observable tests:

1. Observe the Plus five-hour bucket separately from the weekly anchor after
   the reset hint. Record visible enforcement, plan scope, and
   display/provider contradictions.
2. Track the banked-credit count and scheduled weekly date through an actual
   redemption. Require both before and after states, and preserve the Help
   wording contradiction until a dated source resolves it.
3. Test the September 1 provider anchor and the August 31 model migration
   without treating migration as reset cause.
4. Seek independent Business receipt and nonreceipt evidence, plus June 29,
   July 28/29, August 1, August 13, and 20M-credit recipient bounds.
5. Follow focused accounting, crash, compaction, routing, and model-fallback
   issues for staff diagnosis and paired provider evidence.
6. Recheck X, oEmbed, the discovery feed, and both exact-DID mirrors. Preserve
   reply omissions and discovery lag.

The deterministic refresh produced dataset
`events-7-cutoff-2026-08-27-74ea586e` and forecast `fc_20260827092449`.
Confirmed, scheduled, and out-of-cycle event counts remain `7`, `1`, and `5`.
The forecast remains `1%` at 1, 3, 6, 12, and 24 hours, with likely interval
`2026-09-01T12:43:48Z` through `2026-09-01T15:43:48Z`, confidence `D`.
No pending X record is forecast-eligible, so forecast inputs, probabilities,
and the likely interval did not change. Two older forecasts matured. The
August 25 forecast received a verified reset within 6, 12, and 24 hours, while
the August 26 forecast matured negative. Performance therefore changed from
`n=21` and Brier `0.0710285714` to `n=23` and Brier
`0.09042608695652174`. The model and baseline remain equal. There is no
evaluation win and no model promotion. No earlier feature snapshot was
rewritten.

## Coverage gaps and blockers

Universal delivery denominators remain unavailable. June 29 credit completion,
July 28/29 and August 1 breadth, August 13 breadth, the 20M credit recipient
set, and Business scope remain unresolved. The X profile's Replies tab did not
expose replies, although canonical pages and oEmbed remained readable. Mirror
coverage was split and incomplete. Mutable Help and pricing pages lack a full
revision history. No official source confirms a cause for the latest reset or
the public cache, compaction, routing, background-use, crash-consumption, or
rapid-depletion reports.
