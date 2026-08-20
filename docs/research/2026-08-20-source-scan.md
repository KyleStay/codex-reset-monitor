# Source scan, 2026-08-20

**Research cutoff:** `2026-08-20T09:51:35Z`, after the post-anchor observer
sample, final source reads, and live refresh. Recent monitoring begins after
the prior cutoff, `2026-08-19T09:23:32Z`. Historical follow-up rechecks June 29, July 28/29,
August 1, August 8/10, August 13, the conditional-credit offer, and the August
20 provider anchor. This note preserves discovery and approval time. It does
not convert a public claim into a verified observation or rewrite an earlier
forecast snapshot.

## Source boundary and retrieval

Only configured sources were reviewed: official OpenAI Status and Help, the
official ChatGPT and Codex changelog, source-native public `openai/codex`
issues and releases, the exact configured X account, X-owned canonical post
pages, the approved discovery feed when available, and the two configured
Bluesky mirrors when available.

| Surface | Retrieval and finding |
| --- | --- |
| OpenAI Status | [Status history](https://status.openai.com/history), the [official incidents API](https://status.openai.com/api/v2/incidents.json), and the new [ChatGPT login incident](https://status.openai.com/incidents/01M0E7K87VJNMGW0QTMHPEQQ39) were read on August 20. The incident ran from `2026-08-20T00:02:08Z` to `00:54:17Z`, with identification, mitigation, monitoring, and resolution updates. It affected ChatGPT login and contains no Codex reset, credit, compensation, or usage-window statement. |
| OpenAI Help | [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-codex-and-chatgpt-plan-usage-limits) and [Using Credits for Flexible Usage](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-free-go-plus-pro-sora) both displayed `Updated: 9 hours ago` during review. Current text distinguishes included allowance, purchased credits, and full banked resets. It also says Work, Codex, Excel, Workspace Agents, and Work/Codex tasks started through Voice may share the agentic allowance where supported. The mutable pages expose no exact revision timestamp or account-level reset event. |
| Official changelog | The [ChatGPT and Codex changelog](https://learn.chatgpt.com/docs/changelog) now lists August 18 iOS and Codex CLI 0.148.0 entries after the August 13 material. Neither entry announces a reset, grant, redemption, compensation, or usage-window change. |
| Official repository releases | The newest release at review was [`0.149.0-alpha.3`](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.3), published August 20 at `02:27Z`. Its body is only `Release 0.149.0-alpha.3`; it is not reset evidence. |
| Project issue state | Before the scheduled-anchor follow-up, the project had `n=4` verified observations, `n=1` approved public source, and `n=9` pending-review sources. Observer issue [#15](https://github.com/KyleStay/codex-reset-monitor/issues/15) raised the verified count to `n=5`. Approved and pending counts stayed `n=1` and `n=9`. The canonical correction was appended to pending issue [#14](https://github.com/KyleStay/codex-reset-monitor/issues/14#issuecomment-5354266515); it remains forecast-ineligible. |

## Exact Tibo account and canonical validation

The exact configured [@thsottiaux profile](https://x.com/thsottiaux) was
reviewed through its public source-native page. Unlike the prior run, the page
exposed current originals. The first sandboxed discovery and mirror requests
failed closed. A narrow host read later succeeded. The discovery feed was
healthy at `fetchedAt=2026-08-20T09:45:45.317Z` with
`sourceErrors.tibo=null`.

The feed contained `n=7` new numeric candidates after the prior cutoff,
`n=2` originals and `n=5` replies, from `2026-08-19T16:39:35Z` through
`2026-08-20T06:04:32Z`. All `7/7` canonical URLs validated through X-owned
oEmbed as Tibo / `@thsottiaux`, with the matching URL, public text, and calendar
date. The two originals also matched the exact public profile and canonical X
pages. No validation failed. Exact UTC values are labeled **X-ID-derived**
because oEmbed exposed only the calendar date.

| Canonical post | X-ID-derived UTC | Classification |
| --- | --- | --- |
| [2090116476414136830](https://x.com/thsottiaux/status/2090116476414136830) | `2026-08-19T16:39:35.120Z` | Original says, "It has not been used yet, but would you look at that. Codex for scale." This is a direct correction to the earlier reset-button ambiguity. It states no use, promise, completed reset, grant, redemption, or delivery. Discovery cutoff is `2026-08-20T09:27:47Z`. |
| [2090117067584491653](https://x.com/thsottiaux/status/2090117067584491653) | `2026-08-19T16:41:56.066Z` | Reply asking whether another person would break the reset button. The parent speculates about a regular reset. Tibo's reply does not promise an action or claim delivery. |
| [2090134827450421604](https://x.com/thsottiaux/status/2090134827450421604) | `2026-08-19T17:52:30.348Z` | Reply with an image depicting receipt of the button. Social follow-up only; no use, promise, reset, grant, or redemption. |
| [2090173536010957128](https://x.com/thsottiaux/status/2090173536010957128) | `2026-08-19T20:26:19.188Z` | Original about previewing Private Safety Processing for Zero Data Retention. Product and safety statement only; no reset, credit, or usage-limit action. |
| [2090297429107278000](https://x.com/thsottiaux/status/2090297429107278000) | `2026-08-20T04:38:37.604Z` | Reply that GPT-5.6 is a good model. Nonqualifying model commentary. |
| [2090297494286774295](https://x.com/thsottiaux/status/2090297494286774295) | `2026-08-20T04:38:53.144Z` | Reply about revenue accounting and double counting. Nonqualifying business commentary. |
| [2090319049767174249](https://x.com/thsottiaux/status/2090319049767174249) | `2026-08-20T06:04:32.371Z` | Reply saying "Leading vs lagging indicator" in a revenue thread. No reset or usage-limit statement. |

The reset-button pair is now explicit. The [August 19 capability
post](https://x.com/thsottiaux/status/2089941380336644295) at
`2026-08-19T05:03:48.962Z` was followed `11h35m46.158s` later by the statement
that the button had not been used. The pair must not enter a promise or
completed-action sample. No discovery-feed forecast, probability, Tibo signal,
persisted classification, or derived score was used.

## Mirror freshness and completeness

The preferred mirror, exact DID
`did:plc:rcaom2u2hfsm3aqab5dfvhxs`, returned 85 records reaching back to
`2026-07-19T04:25:10Z`. It had only `n=2` post-cutoff records, the correction
original and its image reply. Their indexing lag was `7m42.267s` to
`9m50.572s`. Its newest record was created at `2026-08-19T17:52:30Z`,
`15h53m15.317s` before the discovery feed fetch. It omitted the safety original
and all four other replies.

The fallback mirror, exact DID
`did:plc:rcelwndiefenpjvnm6uood4t`, returned 100 records reaching back to
`2026-07-29T04:45:22Z`. It had `n=5` post-cutoff records representing the two
current originals and the image reply. The long safety original was split into
three records. Indexing lag was `1m30.470s` to `4m42.365s`. Its newest record
was created at `2026-08-19T20:26:21Z`, `13h19m24.317s` before the discovery
feed fetch. It omitted the reset-button question reply and all three August 20
replies. Both mirrors are stale and incomplete for this cutoff. They remain
discovery aids only.

## Historical follow-up and unresolved delivery

All carried canonical Tibo URLs remained public on X. The June 29 post at
[2071740419030053227](https://x.com/thsottiaux/status/2071740419030053227),
X-ID-derived `2026-06-29T23:39:41.629Z`, promises a full reset within one hour
and one banked reset within 24 hours. It also describes an earlier reset while
fixes rolled out. Those are separate actions.

A same-thread public reply at
[2071742134785294587](https://x.com/Yinielin/status/2071742134785294587),
X-ID-derived `2026-06-29T23:46:30.697Z`, says the "previous reset and reset was
enough." It appeared only `6m49.068s` after the future promise, before the stated
one-hour and 24-hour windows. It has no before/after meter, provider anchor,
banked-credit receipt, or independent recipient denominator. It therefore does
not establish completion of either promised future action. The June 29 hard
reset and banked-credit completion question remains open.

The [July 28](https://x.com/thsottiaux/status/2081940052154933696),
[July 29](https://x.com/thsottiaux/status/2082317452755751098), and
[August 1](https://x.com/thsottiaux/status/2083395449814229287) completed-action
posts remain pending-review. They cannot rewrite earlier forecast features.
Their inferred historical events retain breadth, nonrecipient, and cause
uncertainty.

The August 8/10 thread remains an intended future reset rather than a delivery
label: [the promise](https://x.com/thsottiaux/status/2086189414292865249) at
`2026-08-08T20:34:50.549Z`, the contextual
[greeting](https://x.com/thsottiaux/status/2086800050630676504) at
`2026-08-10T13:01:17.597Z`, and the
[ordinary-reset interpretation](https://x.com/thsottiaux/status/2086800639120888014)
at `2026-08-10T13:03:37.904Z`. The August 11 and 13 verified transitions still
lack a source-native statement tying either event to this promise. The
[August 13 acknowledgement](https://x.com/thsottiaux/status/2087960561728569362)
still lacks a later completion or breadth statement. The
[conditional extra-credit offer](https://x.com/thsottiaux/status/2089206566998405162)
remains an offer, not a completed grant.

## New source-native repository signals

These are public claims or mechanism reports, not verified observations or
approved forecast inputs.

| Record | Evidence-safe interpretation |
| --- | --- |
| [`openai/codex` #39626](https://github.com/openai/codex/issues/39626), `2026-08-20T06:52:13Z` | One Linux Pro user reports a persistent sandbox-startup failure leading to 601 automatic-review turns over nine days, 599 approvals, and large locally recorded reviewer input. The reporter warns that cached input totals are not exact billable usage. This is a detailed possible internal-consumption mechanism, not a reset or confirmed cause for another account. |
| [`openai/codex` #39603](https://github.com/openai/codex/issues/39603), `2026-08-20T05:47:14Z` | One user describes a limit banner rolling its retry date forward after a prior date passes while usage is available again. The reproduction uses a future August 27 example. This supports display/timestamp contradiction only and cannot establish an August 20 event. |
| [`openai/codex` #39577](https://github.com/openai/codex/issues/39577), `2026-08-20T04:16:44Z` | One account reports four already-visible banked resets disappearing after a brief subscription lapse and reactivation, without redemption. Support reportedly confirmed the plan entitlement but not the reset-ledger cause. Banked-credit lifecycle contradiction only. |
| [#39571](https://github.com/openai/codex/issues/39571), [#39643](https://github.com/openai/codex/issues/39643), and [#39651](https://github.com/openai/codex/issues/39651) | Three new Pro reports between `03:15Z` and `07:44Z` say models returned "Selected model is at capacity." #39643 reports cross-device, account-specific behavior and some model exceptions. Together with the three prior-run reports, this is an `n=6` public capacity-error cluster with no staff confirmation, common transition, or matching Codex Status incident. |

The new automatic-review report is independent of the Windows report in
[#39408](https://github.com/openai/codex/issues/39408), but the platform and
sandbox failure differ. Both support a detection test for repeated internal
review work. They do not prove that automatic review caused other accounts'
depletion. The canonical June 29 operator post separately attributes some
historical consumption to more proactive automatic review and excess
subagent/background work.

## Scheduled anchor and observer outcome

At `2026-08-20T09:18:51.181Z`, the privacy-minimized local observer was healthy
with 3,435 retained samples, four published detections, no pending publication
or available banked credit, and the primary Codex bucket exhausted at 100%.
The provider timestamp remained `2026-08-20T09:49:08Z`. The separate Spark
bucket was excluded. This pre-anchor sample proves that the older public
`07:23:15Z` anchor did not itself restore access.

The observer bounded an exhausted-to-available transition between the last
exhausted sample and `2026-08-20T09:49:14.932Z`. Usage fell from 100% to 0%,
the provider timestamp advanced from `2026-08-20T09:49:08Z` to
`2026-08-27T09:49:14Z`, and no banked reset credit appeared. The observed
transition was `6.932s` after the corrected provider anchor and was classified
as scheduled. The observer published verified issue #15 at `09:49:16Z`.

The later status read at `2026-08-20T09:49:40.676Z` retained 3,442 samples,
five detected and published resets, no pending publication, and no available
banked reset. This is the first verified scheduled transition since the
out-of-cycle August 8, 11, and 13 events. Tibo's canonical non-use statement
prevents attributing this ordinary scheduled transition to the reset button.

## Point-in-time pattern audit

Only evidence available by each evaluated cutoff is compared with later
outcomes. Changes are relative to the August 19 note.

| Pattern | Exact sample, range, classes, cutoff | Support, contradictions, lead time, grade, change |
| --- | --- | --- |
| Provider-owned transition | `n=5` verified detections, August 8 to 20; observer transitions and provider anchors; cutoff `2026-08-20T09:51:35Z`. | The fifth event moved from 100% exhausted to 0%, advanced the weekly anchor, and landed `6.932s` after the corrected anchor. The stale public `07:23:15Z` anchor, pre-event exhausted state, and separate Spark zero remain negative controls. **Grade A; strengthened with one scheduled transition.** |
| Explicit future announcements | `n=7` inherited canonical promise/action records, June 16 to August 8; attributed posts, later verified bounds, and preserved discovery cutoffs. Current scan adds `n=0` promises. | Historical later-signal lead range remains about `17m34s` to `51h28m`; July 9 missed its stated hour and June 29 remains unresolved. The reset-button pair is explicitly outside this sample. **Grade C directional, Grade A only with independent verification; unchanged.** |
| Completed versus future wording | `n=10` inherited records, June 4 to August 11; canonical completed-action statements, public reports, inferences, and verified observations. Current scan adds `n=0` completed statements. | Completed wording supports attributed operator action but not universal receipt. The reset-button correction is neither completed action nor promise. **Grade A wording, Grade B some delivery, Grade C to D breadth; unchanged.** |
| Reset-button capability | `n=2` paired canonical originals, August 19; X oEmbed, exact X pages, and X-ID-derived UTC; project discovery cutoff `2026-08-20T09:27:47Z`. | The capability statement was followed `11h35m46.158s` later by "It has not been used yet." The next verified event was an ordinary scheduled transition. **Grade A for attributed non-use, Grade D as predictor; new and refuted for this episode.** |
| Incident start, mitigation, resolution, and compensation | `n=12` incident/reset contexts, June 3 to August 20; official Status chronology, attributed posts, and public reports. Current addition is one 52-minute ChatGPT login incident. | The new incident had identification, mitigation, monitoring, and resolution phases, but no Codex component or compensation statement. Capacity reports had no matching Codex Status event. **Grade A chronology, Grade D reset linkage; negative-control set strengthened.** |
| Hard reset, banked reset, and purchased credits | `n=5` inherited mixed action/grant records, June 12 to July 13; current Help mechanisms, canonical posts, and delivery contradictions; plus `n=1` newly located June 29 same-thread reply. | The reply arrived 6m49s after the promise and before its action windows. It does not establish the promised hard reset or banked credit. #39577 adds one already-granted-credit loss report. **Grade A mechanism, Grade B to C delivery, Grade D breadth; lifecycle contradictions strengthened, completion unchanged.** |
| Automatic-review depletion mechanism | `n=3` contexts, June 29 to August 20: one canonical operator diagnosis and two independent public reports on Windows and Linux; cutoff at final source read. | All three identify excess automatic review or retry work as possible consumption. The two current reports have different sandbox causes and no staff confirmation. **Grade B mechanism, Grade D prevalence and cross-account cause; strengthened.** |
| Public-report clustering and contradictions | Current focused set includes `n=6` capacity-error bodies, August 19 to 20; plus #39603, #39577, and inherited depletion/display reports; no staff corroboration or same-event denominator. | Reports strengthen capacity, display, entitlement, banked-credit, and cross-surface divergence. They do not establish a shared reset event or delivery prevalence. **Grade B divergence, Grade D prevalence; strengthened.** |
| Discovery and mirror lag | Discovery feed `n=7`, two originals and five replies, fetched `2026-08-20T09:45:45.317Z`; preferred mirror `n=2`; fallback `n=5` split records; exact X and oEmbed validation. | Both mirrors stopped before the three August 20 replies. Preferred omitted five candidates, fallback omitted four and split one original. **Grade A canonical validation, Grade D mirror completeness; weakened.** |
| Gaps, cooldown, UTC, and weekday | `n=5` detections and `n=4` upper-bound gaps, August 8 to 20. Prior gaps were `11h09m42.937s`, `51h29m50.496s`, and `55h20m37.071s`; the new gap is `170h25m58.932s`. Observed UTC weekdays are Saturday, Tuesday, Thursday, Thursday. | The new gap is close to a weekly window, but five events and four gaps remain too small for cadence, cooldown, weekday, or time-of-day inference. **Grade D; sample strengthened, inference unchanged.** |

## Strongest predictors, failed signals, and next tests

The strongest supported signal remains a bounded provider-owned usage or
enforcement transition with a materially advanced stable anchor. An anchor is
a scheduling input, not an event. Explicit promises are directionally useful
only when a later transition independently verifies delivery. Completed
wording supports operator action but not universal receipt.

The reset-button noun failed as a signal in this episode because the canonical
follow-up says it had not been used. Other weak or sparse signals remain a
sliding timestamp, billing renewal, capacity errors, incident or milestone
context, mirror presence, and cadence or weekday inference from the small
verified sample.

Next observable tests are:

1. Test the August 27 provider anchor against another bounded transition and
   preserve any lag, early reset, or nontransition.
2. Keep the reset-button pair out of promises and completed actions unless a
   later canonical post states an actual use.
3. Seek staff diagnosis and bounded before/after evidence for the six-report
   capacity cluster, #39626/#39408 automatic-review mechanisms, and #39603's
   rolling retry-date display.
4. Resolve June 29 hard-reset completion separately from the banked-credit
   grant. The reply found today is too early and too ambiguous.
5. Seek completion and breadth evidence for August 13 and independent receipt
   or nonreceipt for July 28/29 and August 1.
6. Follow the conditional extra-credit offer only if a canonical completed
   grant appears.

## Deterministic refresh and forecast change

The live refresh at `2026-08-20T09:51:15.216Z` produced dataset
`events-5-cutoff-2026-08-20-4333ea99`. It retained `n=5` verified observations,
`n=2` Codex-relevant official incidents, `n=1` approved public source, zero
rejected records, and zero duplicates. Pending issue #14 and all current public
reports remain absent from forecast features.

Repository code changed the 1/3/6/12/24-hour forecast from
`6.53%/8.12%/11.17%/20.21%/49.22%` to `1%` at every horizon after the verified
scheduled reset. The next provider anchor is `2026-08-27T09:49:14Z`; the likely
interval is `2026-08-27T08:19:14Z` to `11:19:14Z`, confidence D. The feature
snapshot now has five confirmed events, one explicit scheduled event, three
out-of-cycle events, and a 170.43-hour median cycle.

The August 19 forecast matured negative at every horizon because the verified
reset occurred `24h25m24.142s` after its cutoff, 25 minutes outside the 24-hour
scoring window, though it fell inside the wider displayed likely interval.
Performance is now `n=17`, Brier `0.07618823529411765`. The baseline matches;
no model was promoted and no historical feature snapshot was rewritten.
