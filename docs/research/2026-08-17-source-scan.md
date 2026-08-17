# Source scan — 2026-08-17

**Research cutoff:** `2026-08-17T09:23:50Z` (terminal UTC clock for the
final read in this lane). This covers records discovered after the prior
cutoff, `2026-08-16T09:23:26Z`, plus bounded follow-up of the June 29,
July 28/29, August 1, August 8/10, and August 13 leads. This is a research
note only: it does not create a confirmed observation, rewrite a prior
feature snapshot, or import a third-party forecast/classifier.

## Source boundary and retrieval

Only configured sources were reviewed: official OpenAI Status, Help,
developer documentation and changelog; source-native public `openai/codex`
issues, comments, releases, and pull requests; the exact configured X
account; X-owned oEmbed; and the two exact public Bluesky DIDs. Public
retrievals in this lane ran approximately `2026-08-17T09:19:33Z`–
`09:23:50Z`, except where a source's own freshness timestamp is shown.

| Surface | Permanent source and retrieval | Finding |
| --- | --- | --- |
| Status | [Incidents API](https://status.openai.com/api/v2/incidents.json), read in the cutoff window; page `updated_at` remained `2026-08-13T23:58:22Z`. | `n=0` incidents created or updated after the prior cutoff. The latest Codex-relevant record remains [Increase in errors on API, Codex and Work Mode](https://status.openai.com/incidents/01KZSC0T66YTVM57N5T79SV8ZV), Aug 11, resolved Aug 11; it contains no reset, credit, or compensation completion statement. |
| Help | [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-codex-and-chatgpt-plan-usage-limits) (`Updated: 3 days ago`) and [Using Credits for Flexible Usage](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-free-go-plus-pro-sora) (`Updated: 4 days ago`), read in the cutoff window. | The current pages describe a shared Codex/Work/Workspace Agents pool, purchased credits as post-limit capacity, and a full banked reset as a separate action that resets both the 5-hour and weekly windows. They still expose no exact revision/publication timestamp. This is mechanism context, not an event or forecast input. |
| Developer | [ChatGPT & Codex changelog](https://developers.openai.com/codex/changelog), which currently redirects to the canonical ChatGPT Learn page, read in the cutoff window. | The visible recent entries remain through Aug 13 (Computer History; Linux/agent imports; Daybreak; CLI 0.147.0). `n=0` new reset, grant, redemption, or compensation announcement after the prior cutoff. The exact page revision time is not exposed. |
| Releases | [Source-native `openai/codex` releases](https://github.com/openai/codex/releases) and [release API](https://api.github.com/repos/openai/codex/releases?per_page=20). | Latest is `rust-v0.148.0-alpha.20`, published `2026-08-16T00:21:59Z`; its body is the placeholder “Release 0.148.0-alpha.20”. `n=0` newer releases and `n=0` reset/credit/completion claims. |
| Issues/comments/PRs | [Public issue feed](https://api.github.com/repos/openai/codex/issues?state=all&since=2026-08-16T09%3A23%3A26Z&per_page=100), focused issue pages and comment endpoints, read through the cutoff. | New reports are public claims or UI/enforcement contradictions. Focused threads have no OpenAI staff corroboration, no bounded before/after `account/rateLimits/read` transition, and no confirmed cause. `github-actions[bot]` duplicate comments are not staff evidence. |
| Project state | Public [verified-observation issue list](https://api.github.com/repos/KyleStay/codex-reset-monitor/issues?labels=verified-observation&state=all&per_page=100), [approved-source list](https://api.github.com/repos/KyleStay/codex-reset-monitor/issues?labels=approved-public-source&state=all&per_page=100), and [pending-review list](https://api.github.com/repos/KyleStay/codex-reset-monitor/issues?labels=pending-review&state=all&per_page=100). | Counts at retrieval: `4` verified observations (#1, #2, #4, #7), `1` approved public source (#3), and `8` pending-review public sources (#5, #6, #8–#13). No new project issue qualified in this research-only lane. |

## Configured Tibo account, discovery candidates, and validation

The exact configured [@thsottiaux profile](https://x.com/thsottiaux) was
reviewed through its public source-native surface. The profile/status HTML
does not expose a complete timeline, so the approved temporary discovery
endpoint was read only for `fetchedAt`, `sourceErrors.tibo`, and raw
`tiboPosts`. It returned `fetchedAt=
2026-08-17T08:49:41.311Z` and `sourceErrors.tibo=null`.

There were `n=22` new numeric candidates after the prior cutoff, spanning
feed whole-second `pubDate` values `2026-08-16T18:57:17Z`–
`2026-08-17T05:23:23Z`: `n=5` original posts and `n=17` replies. Every
candidate was checked against its exact canonical
`https://x.com/thsottiaux/status/<id>` URL and [X-owned oEmbed](https://publish.twitter.com/oembed).
All `22/22` returned `author_name=Tibo`,
`author_url=https://x.com/thsottiaux`, the matching canonical URL, and the
matching August 16 or August 17 calendar date. The rendered public text was
present for every item; the checklist exception for
[2089149255382438340](https://x.com/thsottiaux/status/2089149255382438340)
was only HTML `<br>`/emoji normalization, not a text mismatch. No
canonical validation failed. X oEmbed exposes only the calendar date here;
the feed supplies whole-second `pubDate`, and any exact sub-second value
below is explicitly **ID-derived** from the Snowflake because no official
`created_at` was available.

Classification of the 22 validated candidates:

- `n=0` completed hard resets;
- `n=0` explicit promised future resets;
- `n=0` completed banked-reset grants;
- `n=0` redemptions;
- `n=0` usage-limit, bucket-size, or reset-window changes;
- `n=2` mechanism/product commentary about the GPT-5.6 Sol 1M context
  window;
- `n=1` attributed offer of extra credits, not a completed grant or reset;
- `n=19` other commentary, including two ambiguous “Maybe” replies and a
  general “occasional resets” description.

Relevant validated items are:

| Canonical post | ID-derived UTC | Classification and point-in-time-safe interpretation |
| --- | --- | --- |
| [2089143488696705077](https://x.com/thsottiaux/status/2089143488696705077) | `2026-08-17T00:13:16.771Z` | Product/mechanism statement: GPT-5.6 Sol 1M context was enabled for ChatGPT-account usage. No quota or reset action. |
| [2089149255382438340](https://x.com/thsottiaux/status/2089149255382438340) | `2026-08-17T00:36:11.656Z` | General commentary (“Almost 100% reliable”, “Occasional resets”, open source). It does not claim a current completed reset or universal delivery. |
| [2089206566998405162](https://x.com/thsottiaux/status/2089206566998405162) | `2026-08-17T04:23:55.810Z` | Reply offering to send a user “some extra credits” after feedback. This is a promised/conditional credit offer, not evidence of a banked reset-credit grant, redemption, or completed delivery. |
| [2089217426378653864](https://x.com/thsottiaux/status/2089217426378653864) | `2026-08-17T05:07:04.888Z` | General fan commentary, nonqualifying. |
| [2089082893804896524](https://x.com/thsottiaux/status/2089082893804896524) | `2026-08-16T20:12:29.823Z` | Product/mechanism documentation for a 1M-token context setting, not a reset. |
| [2089063967301730789](https://x.com/thsottiaux/status/2089063967301730789) | `2026-08-16T18:57:17.393Z` | “Maybe” reply to a question about a reset at 20M users; ambiguous commentary, not an explicit promise. |
| [2089078284487139347](https://x.com/thsottiaux/status/2089078284487139347) | `2026-08-16T19:54:10.876Z` | “Maybe” reply in a reset-discussion thread; ambiguous commentary, not a completed reset or explicit promise. |

The remaining validated IDs, all nonqualifying commentary, are:
`2089221530320519620`, `2089220940345585839`, `2089216314498027657`,
`2089215083163599231`, `2089207201701544359`, `2089156180740379132`,
`2089152954519433599`, `2089150288758243801`, `2089149434235900033`,
`2089146141388505191`, `2089141897017057754`, `2089103028204765350`,
`2089102679217742081`, `2089080720396317053`, `2089078705230377033`.
Each was checked at its canonical ID URL under the exact configured account
and was included in the `22/22` oEmbed validation count. No feed-derived title,
classification, probability, forecast, `tiboSignal`, or persisted
third-party score was read into the project.

## Exact Bluesky mirror freshness

The preferred unofficial
[@thsottiaux-mirr.selfhosted.social](https://bsky.app/profile/thsottiaux-mirr.selfhosted.social)
feed, exact DID `did:plc:rcaom2u2hfsm3aqab5dfvhxs`, returned 100 records.
It contained `n=22` records after the prior cutoff; its newest record was
created at `2026-08-17T05:23:23Z` and indexed at
`2026-08-17T05:33:46.463Z` (lag `10m23.463s`). Its 100-record window
reached back to `2026-08-08T20:22:24Z`. It carries current text but strips
or inconsistently preserves canonical X numeric IDs and reply-parent
context.

The fallback
[@thsottiaux-bot.eurosky.social](https://bsky.app/profile/thsottiaux-bot.eurosky.social)
feed, exact DID `did:plc:rcelwndiefenpjvnm6uood4t`, also returned 100 records.
It contained `n=8` records after the prior cutoff; its newest record was
created at `2026-08-17T00:36:11Z` and indexed at
`2026-08-17T00:38:36.975Z` (lag `2m25.975s`). Its window reached back to
`2026-07-26T18:21:30Z`, but it omitted most current replies and stopped
earlier than the preferred mirror. Both mirrors remain unofficial
discovery/corroboration aids only: neither establishes authorship, a
completed reset, cause, universal delivery, or a model label.

## Carried-forward promises and historical gaps

The canonical promise thread remains unresolved as an intended future
action, not a completed reset. X oEmbed validation remains recorded for:

1. [2086189414292865249](https://x.com/thsottiaux/status/2086189414292865249),
   ID-derived `2026-08-08T20:34:50.549Z`, “another performative reset on
   Monday”;
2. [2086800050630676504](https://x.com/thsottiaux/status/2086800050630676504),
   ID-derived `2026-08-10T13:01:17.597Z`, contextual “Good morning”; and
3. [2086800639120888014](https://x.com/thsottiaux/status/2086800639120888014),
   ID-derived `2026-08-10T13:03:37.904Z`, strengthening the ordinary-reset
   interpretation.

The public project still has only four verified observations (#1, #2, #4,
#7). No new observation issue appeared after the prior cutoff. The public
project issue #7 bounds its latest individual-paid meter reset at
`2026-08-13T01:00:17.086Z`–`07:23:16Z`, with `62%` to `0%` usage and the
provider anchor advancing to `2026-08-20T07:23:15Z`; it remains out of cycle
and does not establish another event here.

The [June 29 canonical promise](https://x.com/thsottiaux/status/2071740419030053227)
still describes two promised actions (a hard reset within one hour and one
banked credit within 24 hours), with no staff completion statement, receipt
denominator, or independent bounded transition. Completion, breadth, and
cause remain unknown. The recovered canonical originals for [July 28](https://x.com/thsottiaux/status/2081940052154933696),
[July 29](https://x.com/thsottiaux/status/2082317452755751098), and
[August 1](https://x.com/thsottiaux/status/2083395449814229287) remain
forecast-ineligible pending public-source approval and independent
recipient/nonrecipient evidence. The [August 13 acknowledgement](https://x.com/thsottiaux/status/2087960561728569362)
still has no later completion, breadth, or credit statement.

## New source-native public GitHub signals

These are pending-review public claims or contradictions, not confirmed
observations or accepted forecast inputs:

| Issue | Created | Classification and evidence limits |
| --- | --- | --- |
| [#38910](https://github.com/openai/codex/issues/38910) | `2026-08-16T22:44:17Z` | A Plus user claims a recently announced global reset did not apply: 100% weekly usage, no Codex use since Aug 13, and normal Aug 20 anchor. A short “Same here” reply adds no structured evidence. No source URL, meter transition, denominator, or staff confirmation. Nonrecipient/display contradiction only. |
| [#38901](https://github.com/openai/codex/issues/38901) / superseded [#38900](https://github.com/openai/codex/issues/38900) | `2026-08-16T20:32:08Z` / `20:30:04Z` | One Plus CLI timeline claims 97% remaining then an unsolicited refill to 100%, with displayed weekly dates moving Aug 14 → Aug 16 → Aug 19 → Aug 21. #38900 was closed by its author as superseded by #38901, not resolved. No bounded rate-limit samples or independent recipient/nonrecipient pair. One unique account timeline; possible early-refill/window-anchor contradiction, not an inferred reset. |
| [#38966](https://github.com/openai/codex/issues/38966) | `2026-08-17T08:33:05Z` | A Plus Windows user says a referral did not yield an expected limit reset and two prior unused resets disappeared. No before/after meter, provider anchor, eligibility details, or receipt evidence. Public claim only. |
| [#38952](https://github.com/openai/codex/issues/38952) | `2026-08-17T06:30:58Z` | A Pro renewal report says Usage shows 56% weekly remaining while Codex remains blocked until Aug 20; Spark still shows 100%. This is entitlement/enforcement synchronization evidence, not a reset. |
| [#38892](https://github.com/openai/codex/issues/38892) | `2026-08-16T19:09:38Z` | A Plus workspace reportedly shows 1,000 credits and 100% weekly remaining while both Codex and Work are blocked as out of credits. This is a cross-surface credit/display contradiction, not evidence of a reset or credit redemption. |

Focused comments were either duplicate-bot notices, the short public “Same
here” reply on #38910, or a reporter hypothesis. No OpenAI staff comment
establishes cause, reset scope, credit delivery, or universal breadth.

## Point-in-time pattern audit

This audit compares only information available by each evaluated cutoff with
the subsequent outcome. Changes are relative to the 2026-08-16 note. New
records discovered on Aug 17 are not inserted into earlier feature snapshots.

| Pattern | Exact sample, range, classes, cutoff | Support, contradictions, lead time, grade, change |
| --- | --- | --- |
| Provider-owned transition | `n=4` project-verified detections, Aug 8–13; privacy-minimized observer meter transitions and provider anchors; public issue state checked through `2026-08-17T09:23:50Z`. | The strongest usable predictor remains an exhausted-to-available or near-zero meter transition with a materially advanced provider anchor. The Aug 20 anchor alone and the separate Spark bucket are negative controls. No new transition or reset issue. **Grade A for a bounded transition; unchanged.** |
| Explicit future announcements | `n=7` inherited canonical promise/action records, June 16–Aug 8; attributed posts, sanitized anchors, and later verified bounds; each discovery cutoff preserved. Current scan adds `n=0` explicit promises and `n=2` ambiguous “Maybe” replies. | Historical later-signal range remains about `17m34s–51h28m`; July 9 missed its stated hour, June 29 remains unresolved, and Aug 13 was retrospective. Ambiguous replies do not change the predictor. **Grade C directional / A only when independently verified; unchanged.** |
| Completed versus future wording | `n=10` inherited records, June 4–Aug 11; canonical completed-action statements, inferences, public reports, and verified observations; cutoff-safe labels. New Tibo set has `n=0` completed statements. | Completed wording supports an attributed operator action but not universal delivery; recovered July 28/29/Aug 1 originals and current nonrecipient claims preserve breadth contradictions. **Grade A wording / B some delivery / C–D breadth; unchanged.** |
| Originals versus replies | Current validated Tibo sample `n=22` (5 originals, 17 replies), Aug 16–17; raw discovery records plus X oEmbed, cutoff at this scan. | All current records are nonqualifying. The extra-credit offer is in a reply and remains conditional; reply threads omit parent/scope in mirrors. **Grade B classification / D completeness; unchanged.** |
| Incident and milestone context | `n=10` inherited incident/reset contexts, June 3–Aug 13; official Status incidents, public reports, and attributed statements; no new post-cutoff Status incident. | New 1M-context posts are product/mechanism releases, not reset incidents. No new mitigation, compensation, or milestone-reset statement. Incident timing remains context rather than cause. **Grade B context / D cause; unchanged.** |
| Provider anchors and out-of-cycle resets | `n=4` verified events, Aug 8–13 (`n=1` scheduled, `n=3` out of cycle); latest public anchor Aug 20 `07:23:15Z`. New public reports: one unique unsolicited-refill timeline (#38901/#38900) and three nonrecipient/entitlement contradictions (#38910, #38966, #38952). | The unique refill timeline is unbounded and cannot upgrade the event sample. Sliding timestamps, anchor-only reads, and other-bucket zeroes remain non-events. **Grade A transition / B display correction / D prevalence; contradiction evidence strengthened, event evidence unchanged.** |
| Hard reset versus banked credit | `n=5` mixed action/grant records, June 12–July 13; canonical posts, Help mechanism context, implementation evidence, and nonreceipt reports. Current scan adds `n=1` conditional extra-credit offer and #38892/#38966 credit/reset contradictions. | Help continues to distinguish purchased credits and full banked resets. No new completed grant or redemption; June 29 still has `n=0` completion/receipt denominators. **Grade A mechanism / B–C delivery; mechanism and contradiction coverage strengthened, event evidence unchanged.** |
| Gaps, cooldown, UTC/day | `n=4` verified detections and `n=3` upper-bound gaps, Aug 8–13: `11h09m42.937s`, `51h29m50.496s`, `55h20m37.071s`; UTC weekdays Saturday, Tuesday, Thursday. | No new confirmed event; sample remains too small for cadence, cooldown, weekday, or time-of-day inference. **Grade D; unchanged.** |
| Public-report clustering and contradictions | New focused source-native set `n=5` unique issue bodies (#38910, #38901, #38966, #38952, #38892), Aug 16–17, plus one short #38910 reply; inherited divergence set `n=18`; no staff corroboration. | The reports strengthen evidence of display, entitlement, credit-ledger, and early-anchor divergence across Plus/Pro and App/CLI/Web surfaces, but do not establish a same-event denominator or delivery prevalence. **Grade B divergence / D delivery prevalence; strengthened contradiction only.** |
| Discovery and mirror lag | Current discovery `n=22`, feed freshness `2026-08-17T08:49:41.311Z`; preferred exact-DID feed `n=22` post-cutoff and latest lag `10m23.463s`; fallback `n=8` and latest lag `2m25.975s`. | The preferred mirror remains more complete but was slower at its newest record than the prior sample; fallback was fresher but omitted most current replies. Neither supplies evidence of reset delivery. **Grade B current freshness / D historical completeness; preferred freshness weakened, completeness distinction unchanged.** |
| Context-window mechanism change | `n=2` canonical Tibo originals, Aug 16–17 (`2089082893804896524`, `2089143488696705077`); X oEmbed plus current official docs/changelog; cutoff-safe. | Both describe GPT-5.6 Sol 1M context configuration/availability, not usage-window resets, credits, or compensation. This is a new mechanism/product signal with no forecast value. **Grade B mechanism / D reset linkage; new, non-predictive.** |

## Deterministic inputs, forecast status, and next detection tests

The contemporaneous generated snapshot at
`2026-08-17T09:19:07.321Z` reports four confirmed observations, zero
scheduled events, three out-of-cycle events, and the latest public provider
anchor `2026-08-20T07:23:15Z`; it uses model
`provider-anchor-baseline-0.3.0` and dataset
`events-4-cutoff-2026-08-17-bf546d8e`. Probabilities remained `1%` at every
1/3/6/12/24-hour horizon, with likely interval
`2026-08-20T03:11:15Z`–`11:35:15Z` and confidence `D`. No candidate in this
research scan is forecast-eligible, no third-party field was imported, and
no historical feature snapshot changed. The performance summary remains
`n=13`, Brier `0.0948385`, with no model promotion.

Next observable tests are:

1. Compare the Aug 20 provider anchor with a bounded usage/enforcement
   transition, not the timestamp alone.
2. Seek an independent before/after sample and nonrecipient for the
   #38901 early-refill timeline and verify whether it is the same mechanism
   as #38789/#38332 or a distinct account state.
3. Seek a recipient denominator and later completion statement for the Aug
   13 action; keep the Aug 8/10 promise unresolved.
4. Resolve the June 29 hard-reset versus banked-credit completion question.
5. Obtain independent recipient/nonrecipient evidence for July 28, July 29,
   and August 1 canonical posts before any historical inference changes.
6. Check whether the extra-credit offer in
   [2089206566998405162](https://x.com/thsottiaux/status/2089206566998405162)
   becomes a source-native completed grant or remains a conditional offer.
7. Continue measuring feed/mirror lag and reply completeness while keeping
   post-discovery evidence out of earlier forecasts.

No new completed hard reset, completed banked-credit grant, redemption,
supported cause, verified observation, or accepted public source qualified in
this pass. Coverage gaps remain mutable Help/changelog revision history,
universal delivery and nonrecipient denominators, the June 29 credit
lifecycle, August 13 completion/breadth, July/August canonical receipt
evidence, and the cause of recurrent display/entitlement contradictions.
