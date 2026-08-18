# Source scan — 2026-08-18

**Research cutoff:** `2026-08-18T09:22:29Z` (terminal UTC clock for the
final read in this lane). This covers records discovered after the prior
cutoff, `2026-08-17T09:23:50Z`, plus bounded follow-up of the June 29,
July 28/29, August 1, August 8/10, August 13, and August 20 provider-anchor
leads. This is a research note only: it does not create a confirmed
observation, rewrite a prior feature snapshot, or import a third-party
forecast/classifier.

## Source boundary and retrieval

Only configured sources were reviewed: official OpenAI Status, Help,
developer documentation and changelog; source-native public `openai/codex`
issues, comments, releases, and pull requests; the exact configured X
account; X-owned oEmbed; and the two exact public Bluesky DIDs. Public
retrievals in this lane ran approximately `2026-08-18T09:18:32Z`–
`09:22:29Z`, except where a source's own freshness or publication timestamp
is shown.

| Surface | Permanent source and retrieval | Finding |
| --- | --- | --- |
| Status | [Incidents API](https://status.openai.com/api/v2/incidents.json), read at the cutoff; page `updated_at` remained `2026-08-13T23:58:22Z`. | `n=0` incidents created or updated after the prior cutoff. The latest Codex-relevant record remains [Increase in errors on API, Codex and Work Mode](https://status.openai.com/incidents/01KZSC0T66YTVM57N5T79SV8ZV), Aug 11, resolved Aug 11; it contains no reset, credit, or compensation-completion statement. |
| Help | [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-codex-and-chatgpt-plan-usage-limits) (`Updated: 4 days ago`) and [Using Credits for Flexible Usage](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-free-go-plus-pro-sora) (`Updated: 5 days ago`), read at the cutoff. | Current pages describe one shared Codex/Work/Workspace Agents pool, purchased credits as post-limit capacity, banked reset redemption as a separate action that restarts both the 5-hour and weekly windows, and an announced Aug 31 GPT-5.4 ChatGPT-account sunset. None gives a reset event, exact revision timestamp, or account-level completion. |
| Developer/changelog | [ChatGPT & Codex changelog](https://developers.openai.com/codex/changelog), which redirects to the canonical ChatGPT Learn page, read at the cutoff. | Visible August entries remain through Aug 13 (Computer History; Linux/agent imports; Daybreak). `n=0` new reset, grant, redemption, or compensation announcement after the prior cutoff. Exact page revision time is not exposed. |
| Releases | [Source-native `openai/codex` releases](https://github.com/openai/codex/releases) and [release API](https://api.github.com/repos/openai/codex/releases?per_page=20). | Newest is `rust-v0.148.0-alpha.21`, published `2026-08-17T19:27:11Z`; its body is the placeholder “Release 0.148.0-alpha.21”. `n=1` newer release and `n=0` reset/credit/completion claims. |
| Issues/comments/PRs | [Public issue feed](https://api.github.com/repos/openai/codex/issues?state=all&since=2026-08-17T09%3A23%3A50Z&per_page=100), focused issue pages and comment endpoints, read through the cutoff. | New reset/limit-related records are public claims, display/enforcement contradictions, account-attribution behavior, or context-window mechanism reports. No OpenAI staff comment, bounded before/after `account/rateLimits/read` transition, recipient denominator, or confirmed cause was found. `github-actions[bot]` duplicate notices are not staff evidence. |
| Project state | Public [verified-observation issue list](https://api.github.com/repos/KyleStay/codex-reset-monitor/issues?labels=verified-observation&state=all&per_page=100), [approved-source list](https://api.github.com/repos/KyleStay/codex-reset-monitor/issues?labels=approved-public-source&state=all&per_page=100), and [pending-review list](https://api.github.com/repos/KyleStay/codex-reset-monitor/issues?labels=pending-review&state=all&per_page=100). | Counts at retrieval: `4` verified observations (#1, #2, #4, #7), `1` approved public source (#3), and `8` pending-review public sources (#5, #6, #8–#13). No new project issue qualified in this research-only lane. |

## Configured Tibo account, discovery candidates, and validation

The exact configured [@thsottiaux profile](https://x.com/thsottiaux) was
reviewed through its public source-native surface. The profile/status HTML did
not expose a complete timeline, so the approved temporary discovery endpoint
was read only for `fetchedAt`, `sourceErrors.tibo`, and raw `tiboPosts`. It
returned `fetchedAt=` `2026-08-18T09:18:32.354Z` and
`sourceErrors.tibo=null`.

There were `n=4` new numeric candidates after the prior cutoff, spanning feed
whole-second `pubDate` values `2026-08-17T19:08:11Z`–
`2026-08-18T06:45:39Z`: `n=2` original posts and `n=2` replies. Every
candidate was checked against its exact canonical
`https://x.com/thsottiaux/status/<id>` URL and the redirected X-owned
[oEmbed endpoint](https://publish.twitter.com/oembed). All `4/4` returned
`author_name=Tibo`, `author_url=https://x.com/thsottiaux`, the matching
canonical URL, matching Aug 17 or Aug 18 calendar date, and matching public
text. No canonical validation failed. X oEmbed exposed only the calendar date;
the feed supplied whole-second `pubDate`, so the exact sub-second values below
are explicitly **ID-derived** from the X Snowflake because no official
`created_at` was available.

Classification of the four validated candidates:

- `n=0` completed hard resets;
- `n=0` explicit promised future resets;
- `n=0` completed banked-reset grants;
- `n=0` redemptions;
- `n=0` usage-limit, bucket-size, or reset-window changes;
- `n=0` incident/status statements; and
- `n=4` other commentary (two original posts and two replies).

| Canonical post | ID-derived UTC | Classification and point-in-time-safe interpretation |
| --- | --- | --- |
| [2089604619936956778](https://x.com/thsottiaux/status/2089604619936956778) | `2026-08-18T06:45:39.026Z` | Original song/parody commentary about Codex and failing tests; no reset, credit, or limit claim. |
| [2089500941842342287](https://x.com/thsottiaux/status/2089500941842342287) | `2026-08-17T23:53:40.242Z` | Original general question about what to build with Codex/API/models; no reset or usage-limit action. |
| [2089501754308337873](https://x.com/thsottiaux/status/2089501754308337873) | `2026-08-17T23:56:53.949Z` | Reply saying “Dax is obviously the CEO”; nonqualifying product/social commentary. |
| [2089429099693699073](https://x.com/thsottiaux/status/2089429099693699073) | `2026-08-17T19:08:11.739Z` | Reply “not yet” in a general product thread; parent context does not make it an explicit reset promise or completion. |

No feed-derived title, classification, probability, forecast, `tiboSignal`,
or persisted third-party score was read into the project. The four new IDs
were preserved as discovery candidates only until canonical validation, then
classified as nonqualifying attributed commentary.

## Exact Bluesky mirror freshness

The preferred unofficial
[@thsottiaux-mirr.selfhosted.social](https://bsky.app/profile/thsottiaux-mirr.selfhosted.social)
feed, exact DID `did:plc:rcaom2u2hfsm3aqab5dfvhxs`, returned 100 records. It
contained `n=4` records after the prior cutoff; its newest record was created
at `2026-08-18T06:45:39Z` and indexed at
`2026-08-18T06:47:34.766Z` (lag `1m55.766s`). Its 100-record window reached
back to `2026-08-09T00:01:48Z`. It carries current text but strips or
inconsistently preserves canonical X numeric IDs and reply-parent context.

The fallback
[@thsottiaux-bot.eurosky.social](https://bsky.app/profile/thsottiaux-bot.eurosky.social)
feed, exact DID `did:plc:rcelwndiefenpjvnm6uood4t`, also returned 100 records.
It contained `n=2` records after the prior cutoff; its newest record was
created at `2026-08-18T06:45:39Z` and indexed at
`2026-08-18T06:48:54.667Z` (lag `3m15.667s`). Its window reached back to
`2026-07-27T20:28:19Z`, but it omitted the two current replies and several
other records. Both mirrors remain unofficial discovery/corroboration aids
only: neither establishes authorship, a completed reset, cause, universal
delivery, or a model label.

## Carried-forward promises and historical gaps

The canonical promise thread remains unresolved as an intended future action,
not a completed reset. X oEmbed was rechecked for:

1. [2086189414292865249](https://x.com/thsottiaux/status/2086189414292865249),
   ID-derived `2026-08-08T20:34:50.549Z`, “I'll do another performative reset
   on Monday”;
2. [2086800050630676504](https://x.com/thsottiaux/status/2086800050630676504),
   ID-derived `2026-08-10T13:01:17.597Z`, contextual “Good morning”; and
3. [2086800639120888014](https://x.com/thsottiaux/status/2086800639120888014),
   ID-derived `2026-08-10T13:03:37.904Z`, “Just like any other reset, but
   picture me doing a little dance with it,” strengthening the ordinary-reset
   interpretation.

The post-promise verified observations (#4 on Aug 11 and #7 on Aug 13) provide
bounded account-level transitions but no source-native attribution, recipient
denominator, universal scope, or credit-delivery confirmation tying either
event to the Aug 8/10 promise. The Aug 20 provider anchor from issue #7 remains
`2026-08-20T07:23:15Z`; no qualifying transition at that anchor was available
in the public project records at this cutoff.

The [June 29 canonical promise](https://x.com/thsottiaux/status/2071740419030053227)
still describes two promised actions (a full reset within one hour and one
banked credit within 24 hours), with no staff completion statement, receipt
denominator, or independent bounded transition. Completion, breadth, and cause
remain unknown. The recovered canonical originals for [July 28](https://x.com/thsottiaux/status/2081940052154933696),
[July 29](https://x.com/thsottiaux/status/2082317452755751098), and
[August 1](https://x.com/thsottiaux/status/2083395449814229287) remain
forecast-ineligible pending public-source approval and independent
recipient/nonrecipient evidence. The [August 13 acknowledgement](https://x.com/thsottiaux/status/2087960561728569362)
still has no later completion, breadth, or credit statement.

## New source-native public GitHub signals

These are pending-review public claims, contradictions, or mechanism reports,
not confirmed observations or accepted forecast inputs:

| Issue/PR | Created | Classification and evidence limits |
| --- | --- | --- |
| [#39167](https://github.com/openai/codex/issues/39167) | `2026-08-18T08:03:05Z` | A Pro 20x user claims the weekly meter moved from 88% used to 100% during an approximately nine-hour idle period, with an unchanged Aug 20 provider date and no Aug 18 dashboard activity. The detailed single-account report separates this from window-shifting cases, but it has no independent recipient/nonrecipient pair, staff confirmation, or bounded observer transition. This strengthens depletion/display/enforcement contradiction evidence only. |
| [#39139](https://github.com/openai/codex/issues/39139) | `2026-08-18T04:58:12Z` | A ChatGPT-authenticated CLI user reports `/status` has no limits data and `/usage` asks them to sign in. No meter values, provider anchor, transition, or cause; display/authentication contradiction only. |
| [#39096](https://github.com/openai/codex/issues/39096) | `2026-08-17T22:52:40Z` | A Remote Control report says a turn submitted from account B executes against an exhausted host task bound to account A. A public nonstaff comment describes this as host-session account binding; neither establishes a reset or universal delivery. This is account-attribution/enforcement evidence. |
| [#39144](https://github.com/openai/codex/issues/39144) | `2026-08-18T05:44:13Z` | A user reports GPT-5.6 Sol receives a smaller server-delivered context profile than Terra/Luna after the long-context rollout. This is a model-entitlement/mechanism contradiction, not a usage-window reset. |
| [#39102](https://github.com/openai/codex/pull/39102) | `2026-08-17T23:08:29Z` | Source-native PR raises GPT-5.6 model context-window override limits to 872K. It is a mechanism/product change with no reset, grant, redemption, or compensation claim. |

Comments reviewed on #39167, #39139, and #39096 were reporter follow-up,
duplicate-bot notices, or nonstaff discussion. No OpenAI staff comment
establishes reset scope, credit delivery, universal breadth, or cause. The
latest release [alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21)
is likewise a placeholder release and not reset evidence.

## Point-in-time pattern audit

This audit compares only information available by each evaluated cutoff with
the subsequent outcome. Changes are relative to the 2026-08-17 note. The four
new Tibo candidates and new GitHub reports discovered after
`2026-08-17T09:23:50Z` are not inserted into earlier feature snapshots.

| Pattern | Exact sample, range, classes, cutoff | Support, contradictions, lead time, grade, change |
| --- | --- | --- |
| Provider-owned transition | `n=4` project-verified detections, Aug 8–13; privacy-minimized observer transitions and provider anchors; public issue state checked through `2026-08-18T09:22:29Z`. | The strongest usable predictor remains an exhausted-to-available or near-zero meter transition with a materially advanced provider anchor. The Aug 20 anchor alone, Spark/other-bucket zeroes, and an unchanged anchor in #39167 are negative controls. **Grade A for a bounded transition; unchanged.** |
| Explicit future announcements | `n=7` inherited canonical promise/action records, June 16–Aug 8; attributed posts, sanitized anchors, and later verified bounds; each discovery cutoff preserved. Current scan adds `n=0` explicit promises and `n=2` ambiguous/nonqualifying replies. | Historical later-signal range remains about `17m34s–51h28m`; July 9 missed its stated hour, June 29 remains unresolved, and Aug 13 was retrospective. The Aug 8/10 promise remains unattributed to a particular verified transition. **Grade C directional / A only when independently verified; unchanged.** |
| Completed versus future wording | `n=10` inherited records, June 4–Aug 11; canonical completed-action statements, inferences, public reports, and verified observations; cutoff-safe labels. New Tibo set has `n=0` completed statements. | Completed wording supports an attributed operator action but not universal delivery; July 28/29/Aug 1 originals and current nonrecipient/display claims preserve breadth contradictions. **Grade A wording / B some delivery / C–D breadth; unchanged.** |
| Originals versus replies | Current validated Tibo sample `n=4` (2 originals, 2 replies), Aug 17–18; raw discovery records plus X oEmbed, cutoff at this scan. | All current records are nonqualifying. The “not yet” reply has no reset parent context, and mirrors omit or split reply context. **Grade B classification / D completeness; unchanged.** |
| Incident and milestone context | `n=10` inherited incident/reset contexts, June 3–Aug 13; official Status incidents, public reports, and attributed statements; no new post-cutoff Status incident. | Current Help's Aug 31 model-sunset note, alpha.21, and long-context rollout are product/mechanism changes, not reset incidents. Incident timing remains context rather than cause. **Grade B context / D cause; unchanged.** |
| Provider anchors and out-of-cycle resets | `n=4` verified events, Aug 8–13 (`n=1` scheduled, `n=3` out of cycle); latest public anchor Aug 20 `07:23:15Z`. New public contradiction #39167 reports an unchanged anchor during a claimed 88%→100% jump. | The new single-account claim is unbounded and cannot upgrade the event sample. Sliding timestamps, anchor-only reads, and separate buckets remain non-events. **Grade A transition / B display contradiction / D prevalence; contradiction evidence strengthened, event evidence unchanged.** |
| Hard reset versus banked credit | `n=5` mixed action/grant records, June 12–July 13; canonical posts, Help mechanism context, implementation evidence, and nonreceipt reports; current scan adds `n=0` completed grants/redemptions. | Help continues to distinguish purchased credits and full banked resets. June 29 still has `n=0` completion/receipt denominators; no new grant or redemption. **Grade A mechanism / B–C delivery; unchanged.** |
| Gaps, cooldown, UTC/day | `n=4` verified detections and `n=3` upper-bound gaps, Aug 8–13: `11h09m42.937s`, `51h29m50.496s`, `55h20m37.071s`; UTC weekdays Saturday, Tuesday, Thursday. | No new confirmed event; sample remains too small for cadence, cooldown, weekday, or time-of-day inference. **Grade D; unchanged.** |
| Public-report clustering and contradictions | New focused source-native set `n=4` unique issue bodies (#39167, #39139, #39096, #39144), Aug 17–18, plus one nonstaff #39096 comment and one #39167 reporter follow-up; inherited divergence set `n=18`; no staff corroboration. | Reports strengthen evidence of display, entitlement, account-attribution, and delayed-depletion divergence across Pro/Plus, Windows/CLI/Desktop/Remote surfaces, but do not establish same-event denominators or delivery prevalence. **Grade B divergence / D delivery prevalence; contradiction coverage strengthened.** |
| Discovery and mirror lag | Current discovery `n=4`, feed freshness `2026-08-18T09:18:32.354Z`; preferred exact-DID feed `n=4` post-cutoff and newest lag `1m55.766s`; fallback `n=2` and newest lag `3m15.667s`. | Preferred mirror was both more complete and fresher for the newest item; fallback omitted both current replies. Neither supplies evidence of reset delivery. **Grade B current freshness / D historical completeness; freshness strengthened, completeness distinction unchanged.** |
| Context-window mechanism change | `n=2` canonical Tibo originals, Aug 16–17; X oEmbed plus current official docs/changelog; new [#39102](https://github.com/openai/codex/pull/39102) and [#39144](https://github.com/openai/codex/issues/39144) extend/contradict the rollout context. | These records concern GPT-5.6 context configuration and entitlement, not usage-window resets, credits, or compensation. **Grade B mechanism / D reset linkage; strengthened mechanism coverage, non-predictive.** |

## Deterministic inputs, forecast status, and next detection tests

The contemporaneous generated snapshot is owned by the main refresh lane. This
research-only lane made no forecast or data changes. The public project still
shows four verified observations and the Aug 20 provider anchor from issue #7;
the new candidates and issue reports are not forecast-eligible. No third-party
forecast field, mirror classifier, or discovery-feed score was imported.

Next observable tests are:

1. Compare the Aug 20 provider anchor with a bounded usage/enforcement
   transition, not the timestamp alone; preserve the #39167 unchanged-anchor
   report as a negative control.
2. Seek an independent before/after sample and nonrecipient for #39167 and
   determine whether its delayed depletion is the same mechanism as #38789,
   #38332, or #38901, without treating account logs as a universal event.
3. Seek an independent recipient denominator and later completion statement
   for the Aug 13 action; keep the Aug 8/10 promise unresolved.
4. Resolve the June 29 hard-reset versus banked-credit completion question.
5. Obtain independent recipient/nonrecipient evidence for July 28, July 29,
   and August 1 canonical posts before any historical inference changes.
6. Check whether the conditional extra-credit offer in
   [2089206566998405162](https://x.com/thsottiaux/status/2089206566998405162)
   becomes a source-native completed grant or remains conditional.
7. Continue measuring feed/mirror lag and reply completeness while keeping
   post-discovery evidence out of earlier forecasts.

No new completed hard reset, completed banked-credit grant, redemption,
supported cause, verified observation, or accepted public source qualified in
this pass. Coverage gaps remain mutable Help/changelog revision history,
universal delivery and nonrecipient denominators, the June 29 credit
lifecycle, August 13 completion/breadth, July/August canonical receipt
evidence, the Aug 20 anchor transition, and the cause of recurrent
display/entitlement/depletion contradictions.
