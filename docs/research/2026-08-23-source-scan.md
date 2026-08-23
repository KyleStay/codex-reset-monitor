# Source scan, 2026-08-23

**Research cutoff:** `2026-08-23T09:21:02.266Z`. The previous
forecast/source cutoff was `2026-08-21T09:26:17Z`, so the recent-monitoring
window is bounded to that interval. This scan also rechecks the unresolved
June 29, July 28/29, August 1, August 8/10, August 13, and conditional-credit
records. Discovery and retrieval times remain separate from publication and
approval times. No public post becomes a verified observation, no earlier
feature snapshot is rewritten, and no tracker forecast or classification is
used.

## Source boundary and retrieval

I checked only the configured official OpenAI sources, source-native public
`openai/codex` records, the exact configured `@thsottiaux` account and
X-owned oEmbed validator, the two exact-DID Bluesky mirrors, and the
privacy-minimized local observer. The public X profile returned `403` and did
not expose a usable timeline. The approved discovery feed supplied only
`fetchedAt`, `sourceErrors.tibo`, and raw `tiboPosts`. Its forecast, signal,
assessment, persisted classification, probability, and derived score were not
read into this project.

| Surface | Retrieval and finding |
| --- | --- |
| [OpenAI Status incidents API](https://status.openai.com/api/v2/incidents.json) and [history](https://status.openai.com/history) | The API was updated through `2026-08-21T23:15:09Z`. One incident was added after the prior cutoff, [Unexpected logouts for some ChatGPT web users](https://status.openai.com/incidents/01M0JXWD740S0Y50DWJZS7SH75), `2026-08-21T19:48:34Z` to `23:15:09Z`. It affected ChatGPT web refreshes and contains no Codex reset, credit grant, compensation, or usage-window statement. No later Status incident was present by retrieval. |
| [Codex plan usage Help](https://help.openai.com/en/articles/11369540-codex-and-chatgpt-plan-usage-limits) | The mutable page displayed `Updated: yesterday`. It still separates included usage, purchased credits, automatic one-time resets, and full banked resets. It says redeeming a full banked reset restarts both five-hour and weekly windows, and that support does not directly reset limits. The current page also announces that GPT-5.4 and GPT-5.4 mini will leave ChatGPT-account Codex on August 31, with GPT-5.6 Terra and Luna as replacements. This is a current product/mechanism note, not a reset event or historical revision timestamp. |
| [ChatGPT and Codex pricing](https://learn.chatgpt.com/docs/pricing) and [changelog](https://learn.chatgpt.com/docs/changelog) | The pricing page continues to describe shared ChatGPT/Codex usage, model and context weighting, and five-hour and weekly windows. The latest changelog entry is August 20, including Codex CLI `0.149.0`; it does not announce a reset, credit grant, redemption, or quota-window change after the previous cutoff. |
| [Public Codex releases](https://github.com/openai/codex/releases) | Five releases were published after the cutoff: `rust-v0.150.0-alpha.3`, `.5`, `.6`, `rust-v0.149.0-alpha.7.2`, and `rust-v0.150.0-alpha.7`, from `2026-08-21T16:43:40Z` through `2026-08-22T21:26:34Z`. Their bodies contain no reset, credit, or rate-limit policy change. |
| Public `openai/codex` issues, comments, and PRs | The bounded API search covered new records from `2026-08-21T09:26:17Z` through `2026-08-23T09:21:02Z`, with focused rate-limit, usage, credit, reset, subagent, and compaction queries. Thirteen newly created issues carrying the `rate-limits` label were relevant. No OpenAI staff comment supplied a reset, recipient denominator, credit completion, or confirmed cause. Two post-cutoff PR search hits concerned Guardian review and content-kind annotations, not quota mechanics. |
| [Configured @thsottiaux profile](https://x.com/thsottiaux), [approved discovery feed](https://www.willcodexquotareset.com/api/forecast), and [X-owned oEmbed](https://publish.twitter.com/oembed) | The feed was fetched at `2026-08-23T09:11:09.288Z`, with `sourceErrors.tibo=null` and 39 raw records. It yielded 32 numeric candidates after the prior cutoff. All 32 canonical URLs returned oEmbed records naming `Tibo`, linking the exact configured profile and status URL, and showing the matching calendar date. Exact UTC values below use the X Snowflake ID because oEmbed did not expose `created_at`. |
| [Preferred Bluesky mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcaom2u2hfsm3aqab5dfvhxs) | Exact DID `did:plc:rcaom2u2hfsm3aqab5dfvhxs` covered all 32 post-cutoff records. Indexing lag was 40 to 932 seconds. It supplied unofficial discovery/corroboration only, not authorship, delivery, cause, scope, or model state. |
| [Fallback Bluesky mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcelwndiefenpjvnm6uood4t) | Exact DID `did:plc:rcelwndiefenpjvnm6uood4t` returned 16 records, including split threads and omitting most replies. Indexing lag was 17 to 270 seconds. It remains a secondary discovery aid. |

The recent source range searched was `2026-08-21T09:26:17Z` through
`2026-08-23T09:21:02Z`. Historical source-native rechecks covered June 29
through August 23, including the June 29 reset-plus-credit question, July
28/29, August 1, August 8/10, August 13, and the conditional extra-credit
offer. No source establishes a universal recipient denominator for those
records. That absence remains a finding.

## Exact Tibo account and canonical validation

The discovery feed contained 39 raw records, of which 32 were newer than the
prior cutoff. The 32 candidates were 7 originals and 25 replies. The raw feed's
content and reply-context fields were absent or null for this retrieval, so
canonical X/oEmbed supplied the text and date checks. All `32/32` exact
`https://x.com/thsottiaux/status/<id>` URLs returned `author_name=Tibo`,
`author_url=https://x.com/thsottiaux`, and the same canonical status URL. No
candidate failed closed validation. oEmbed HTML is abbreviated for long posts,
so the long posts remain attributed signals rather than proof of delivery.

The reset-relevant candidates are classified before correlation below. The
remaining 19 replies and 2 originals concern Sites, models, product launches,
or ordinary commentary and are nonqualifying for reset research.

| Canonical post | X-ID-derived UTC | Classification and evidence boundary |
| --- | --- | --- |
| [2090766694897619318](https://x.com/thsottiaux/status/2090766694897619318) | `2026-08-21T11:43:19.287Z` | Promised future banked-reset grant for every Codex and ChatGPT Work user, tied by the author to the 20M active-user milestone. It is a public attributed promise and motivation statement, not completed delivery. Pending-review issue [#17](https://github.com/KyleStay/codex-reset-monitor/issues/17) preserves the approval cutoff. |
| [2090767169889992755](https://x.com/thsottiaux/status/2090767169889992755) | `2026-08-21T11:45:12.534Z` | Reply acknowledging a banked reset for another participant. This is attributed anecdotal corroboration with no independent meter, credit receipt, or recipient denominator. |
| [2090947196107764189](https://x.com/thsottiaux/status/2090947196107764189) | `2026-08-21T23:40:34.129Z` | Promised the banked reset by "8pm PST" for all paid ChatGPT Work and Codex users. The clock label is ambiguous during daylight saving time. It remains a future promise, not proof of universal delivery. |
| [2090964822422949999](https://x.com/thsottiaux/status/2090964822422949999) | `2026-08-22T00:50:36.570Z` | Completed banked-reset grant claim, "has landed." This supports an attributed completion statement only. It does not prove that every paid account received a credit or that any account redeemed one. Pending-review issue [#18](https://github.com/KyleStay/codex-reset-monitor/issues/18) preserves the approval cutoff. |
| [2091033630147854385](https://x.com/thsottiaux/status/2091033630147854385) | `2026-08-22T05:24:01.610Z` | Attributed mechanism hypothesis: some users had worse cache-hit rates, which could increase usage burn. It is not a reset, grant, redemption, or confirmed cause. |
| [2091045457158103247](https://x.com/thsottiaux/status/2091045457158103247) | `2026-08-22T06:11:01.389Z` | Attributed propagation statement, "Should be all propagated," in a reply about banked resets. It supplies no denominator, account evidence, or provider transition. |
| [2091406082497552557](https://x.com/thsottiaux/status/2091406082497552557) | `2026-08-23T06:04:01.170Z` | Attributed mechanism/support statement that subscription-to-API relaying through sub2api is unsupported. It is not a reset and cannot explain all reported depletion. |
| [2091407991736332689](https://x.com/thsottiaux/status/2091407991736332689) | `2026-08-23T06:11:36.368Z` | Promised a full usage reset for all paid subscriptions as part of fixes planned "tomorrow." The post attributes possible burn to image/compaction inefficiency, high Computer History p95 usage, and conversation-title generation. These are attributed candidate mechanisms, not confirmed causes or completed delivery. Pending-review issue [#19](https://github.com/KyleStay/codex-reset-monitor/issues/19) preserves the approval cutoff. |
| [2091408930635436341](https://x.com/thsottiaux/status/2091408930635436341) | `2026-08-23T06:15:20.219Z` | Reply in the mechanism/explanation discussion. It adds no completed reset, credit, redemption, or bounded transition. |
| [2091412393368945027](https://x.com/thsottiaux/status/2091412393368945027) | `2026-08-23T06:29:05.799Z` | Reply narrowed the new full-reset promise to around 2pm PST tomorrow. It is a future promise with no independent delivery evidence. |
| [2091413240337326588](https://x.com/thsottiaux/status/2091413240337326588) | `2026-08-23T06:32:27.732Z` | Correction of the "14pm" wording to "2pm." It remains promise context, not a second event. |

The latest promised full reset is therefore expected no earlier than the
author's stated August 24 afternoon clock, subject to the PST/PDT ambiguity.
At the final observer sample it had not occurred. No candidate is a confirmed
reset observation, confirmed cause, universal delivery label, or model feature.

## Mirror freshness and completeness

The preferred exact-DID mirror represented all 32 post-cutoff candidates. Its
40 to 932 second lag was measured from the mirror's `createdAt` to
`indexedAt`. The fallback exact-DID mirror returned 16 records, split the long
rate-limit threads into segments, and omitted most replies. Its 17 to 270
second lag is not evidence of better completeness. Neither mirror can establish
authorship or delivery. The 32 canonical X/oEmbed records are the attribution
basis.

## Historical follow-up and unresolved delivery

The carried canonical records were revalidated through X-owned oEmbed for
author, URL, and date: [June 29](https://x.com/thsottiaux/status/2071740419030053227),
[July 28](https://x.com/thsottiaux/status/2081940052154933696),
[July 29](https://x.com/thsottiaux/status/2082317452755751098),
[August 1](https://x.com/thsottiaux/status/2083395449814229287),
[August 8](https://x.com/thsottiaux/status/2086189414292865249),
[August 10 context](https://x.com/thsottiaux/status/2086800050630676504),
[August 10 ordinary-reset interpretation](https://x.com/thsottiaux/status/2086800639120888014),
[August 13 announcement](https://x.com/thsottiaux/status/2087706104814023111),
[August 13 acknowledgement](https://x.com/thsottiaux/status/2087960561728569362),
and the [conditional extra-credit offer](https://x.com/thsottiaux/status/2089206566998405162).

- The June 29 post still promises a full reset within one hour and a separate
  banked reset within 24 hours. The early same-thread reply remains before both
  windows and has no before/after meter, provider anchor, credit receipt, or
  recipient denominator. Completion of both actions is unresolved.
- July 28, July 29, and August 1 completed-action wording remains attributed
  public evidence. No independent recipient/nonrecipient set or bounded
  provider transition resolves those records. They remain pending context and
  cannot rewrite earlier snapshots.
- The August 8 promise, August 10 context, and ordinary-reset interpretation
  remain an intended future reset thread, not a completed delivery label.
- The August 13 one-hour announcement is retrospective context for the existing
  verified transition. It supplies no population denominator. The later August
  13 acknowledgement has no completion or breadth evidence.
- The conditional extra-credit offer remains an offer. It is separate from the
  new 20M milestone banked-credit grant and is not a completed grant or
  redemption.

No new independent evidence resolved these delivery questions.

## Local observer and project evidence state

The sanitized observer was healthy at `2026-08-23T09:21:02.266Z` with
`4,119` retained samples spanning `2026-08-03T10:16:12.586Z` onward, five
published deterministic full-reset detections, no pending publication, and no
sixth transition. The primary Codex bucket was `18%` used with a current
provider anchor of `2026-08-27T09:49:25Z`; the separate Spark bucket remains
excluded.

The observer reported one available OpenAI-issued full-reset credit. It was
granted at `2026-08-22T00:20:05Z` and expires at `2026-09-21T00:20:05Z`.
The credit count did not decrease by the final sample, so there is no
redemption evidence. This is the first direct local evidence of a queued credit
for the monitored account and is not a completed full reset. The grant followed
the August 21 milestone promise by `12h36m45.713s`; the attributed "landed" post followed the promise by
`13h07m17.283s`, and appeared `30m31.570s` after the local grant. These are
same-account timing correlations, not universal delivery proof.

An independent main-lane observer check at `2026-08-23T09:15:59.716Z` showed
`4,118` samples, the same `18%` primary-bucket usage and
`2026-08-27T09:49:25Z` anchor, five published resets, and the same one available
credit. The credit remains separate from reset and redemption counts.

The observer's five detections remain:

1. `2026-08-08T09:23:05.496Z`, access restored, scheduled.
2. `2026-08-08T20:32:48.433Z`, meter reset, out of cycle.
3. `2026-08-11T00:02:38.929Z`, access restored, out of cycle.
4. `2026-08-13T07:23:16Z`, meter reset, out of cycle.
5. `2026-08-20T09:49:14.932Z`, access restored, scheduled.

After issues #17 through #19 were filed, project state was `n=5` verified
observations, `n=1` approved public source, and `n=13` pending-review public
sources. The three new records remain forecast-ineligible.

The latest weekly anchor drifted only with ordinary sampling, and the primary
meter rose from 0% after the August 20 event to 18%. A sliding or approaching
timestamp is not reset evidence.

## New repository-native public signals

The bounded search found 13 newly created issues carrying the `rate-limits`
label after the prior cutoff, from `2026-08-21T13:13:53Z` through
`2026-08-23T08:49:02Z`. They remain public claims or mechanism reports. None
is a verified observation, approved public source, staff-confirmed cause, or
forecast feature.

| Records | Evidence-safe interpretation |
| --- | --- |
| [#39929](https://github.com/openai/codex/issues/39929) and [#40082](https://github.com/openai/codex/issues/40082) | Usage-limit or banked-reset visibility reports on Android/macOS. Display omissions are not delivery evidence. |
| [#40016](https://github.com/openai/codex/issues/40016) | A subagent-routing report says full-history forks silently inherited another model/quota pool. It is a client/model-routing mechanism claim, not a reset. |
| [#40043](https://github.com/openai/codex/issues/40043) | One Sign in with ChatGPT report says a comparable run consumed roughly 35 to 40 weekly points in under four hours. It contradicts the sub2api explanation for that account but has no independent server transition. |
| [#40045](https://github.com/openai/codex/issues/40045) | One Pro 20x report asks whether effective capacity, context/compaction, retries, polling, or subagent overhead explain one-day weekly depletion. It explicitly does not claim a proven accounting defect. |
| [#40054](https://github.com/openai/codex/issues/40054), [#40058](https://github.com/openai/codex/issues/40058), and [#40076](https://github.com/openai/codex/issues/40076) | Three reports say an expected banked or reset credit was absent. They provide missing-recipient and ledger/display contradictions, not proof that a universal grant failed. |
| [#40056](https://github.com/openai/codex/issues/40056) | One report attributes roughly half a weekly allowance to an allegedly unauthorized priority/Fast-mode interval. It is a mode-accounting claim without independent provider evidence. |
| [#40067](https://github.com/openai/codex/issues/40067) | One Plus report says the weekly meter fell from about 99% remaining to 0% within hours and compares local activity with a larger profile total. It is a single-account depletion/accounting claim. |
| [#40110](https://github.com/openai/codex/issues/40110) | One report describes a runaway background memory worker and requests quota restoration. It is a candidate background-consumption mechanism, not a confirmed cause. |
| [#40208](https://github.com/openai/codex/issues/40208) | A source-level report says OTel labels total response tokens as `tool_token_count`. This is telemetry semantics, not a demonstrated quota change. |
| [#40213](https://github.com/openai/codex/issues/40213) | One closed report describes repeated automatic compaction and a weekly meter increase during a 76-minute failure. It is a compaction/depletion contradiction, not a reset observation. |

Comments on these records were user or automation replies. No OpenAI staff
comment established a reset, credit grant, recipient breadth, or cause. The
new reports strengthen monitoring for usage accounting, mode selection,
background workers, context-compaction, credit-ledger omissions, and display
contradictions. They do not establish a shared event or prevalence.

## Point-in-time-safe pattern audit

This audit uses only evidence public or approved before each evaluated cutoff,
then checks what happened afterward. The current cutoff is
`2026-08-23T09:21:02.266Z`. New X posts and GitHub issues were discovered after
`2026-08-21T09:26:17Z`, so none enters an earlier forecast snapshot.

| Pattern | Exact sample, date range, evidence classes, and cutoff | Support, contradictions, lead time, grade, and change since 2026-08-21 |
| --- | --- | --- |
| Provider-owned bounded transition | `n=5` verified observations, August 8 to 20; observer access/meter transitions and provider anchors; evaluated through `2026-08-23T09:21:02.266Z`. | All five remain the strongest reset evidence. No sixth transition followed the new promises or credit grant. The latest anchor is unchanged apart from sample-time drift. **Grade A, unchanged.** |
| Explicit future reset announcements | `n=9` canonical promise records, June 16 to August 23; X/oEmbed-validated attributed posts, preserved discovery times, and later observer bounds; current cutoff above. | Historical independent lead range remains about `17m34s` to `51h28m`; June 29 remains unresolved and July 9 missed its stated hour. The new August 23 promise has no outcome by cutoff. The 20M banked-credit promises have a `12h36m45.713s` local-grant lead and a `13h07m17.283s` attributed-completion lead, but those are credit timing, not full-reset timing. **Grade C directional, Grade A only with independent transition; strengthened as a testable signal.** |
| Banked credit versus completed full reset | `n=4` new canonical banked-credit statements, August 21 to 22, plus one local observer credit grant at `2026-08-22T00:20:05Z`; X statements, local queued-credit metadata, and three missing-credit issue bodies; cutoff above. | The local account has one available credit with no redemption. Three public missing-credit reports contradict universal delivery. The attributed "landed" statement cannot establish a recipient denominator or full reset. **Grade A for the local queued-credit fact, B for the attributed rollout, D for universal delivery; strengthened.** |
| Completed versus future wording | `n=14` inherited canonical wording records, June 4 to August 23; X posts, inferred events, public claims, credits, and verified observations. | The new "landed" wording is stronger attributed completion language, while the August 23 post and replies remain promises. Neither proves account-by-account delivery. **Grade A wording, B some delivery, C to D breadth; strengthened.** |
| Incident chronology and reset linkage | `n=15` incident/reset contexts, June 3 to August 21; official Status chronology, attributed posts, public claims, and observer events; cutoff above. | The new ChatGPT-web logout incident has clear investigation, mitigation, and resolution times but no Codex quota statement. It strengthens the incident negative-control set. **Grade A chronology, Grade D reset linkage; strengthened negative control.** |
| Automatic-review, subagent, compaction, and background depletion | `n=13` candidate contexts, June 29 to August 23; attributed operator mechanisms, six new rate-limit issue bodies, prior public reports, and issue #40213; cutoff above. | Cache-hit variation, image/compaction overhead, Computer History, title generation, routing, Fast mode, background-memory loops, and compaction failures are plausible mechanisms. They are heterogeneous, account-specific, and lack a common bounded transition or staff confirmation. **Grade B candidate mechanism, Grade D prevalence/cause; strengthened, not causal.** |
| Public-report clustering and contradictions | `n=30` focused issue bodies, August 19 to 23; rate-limit/depletion/credit/display issue bodies, including 13 new records; cutoff above. | New reports add missing-credit, abrupt depletion, priority-mode, background-worker, compaction, routing, and telemetry contradictions. They still provide no common-event denominator, universal delivery evidence, or confirmed cause. **Grade B divergence, Grade D prevalence; strengthened.** |
| Originals versus replies | `n=32` new canonical candidates, August 21 to 23; 7 originals and 25 replies, discovery feed plus X/oEmbed; cutoff above. | Four principal originals contain banked-credit or full-reset statements and one cache-hit mechanism statement. Reply wording adds timing and propagation claims but no independent transition. **Grade A attribution, Grade C timing, Grade D delivery prediction; strengthened sample, unchanged promotion value.** |
| Discovery and mirror lag/completeness | Discovery `n=32`; preferred exact-DID mirror `32/32` records with 40 to 932 seconds lag; fallback `n=16` split records with 17 to 270 seconds lag; feed fetched `2026-08-23T09:11:09.288Z`. | Canonical validation is complete. Mirror text is incomplete, especially for replies and split threads. **Grade A canonical validation, Grade D mirror completeness; strengthened freshness, completeness remains weak.** |
| Reset gaps, cooldown, UTC hour, and weekday | `n=5` verified observations, August 8 to 20, yielding `n=4` gaps: `11h09m42.937s`, `51h29m50.496s`, `55h20m37.071s`, and `170h25m58.932s`; observer transitions and anchors; current cutoff above. | The new banked credit and promises do not add full-reset events. Five events and four gaps remain too sparse for cadence, cooldown, weekday, or UTC-hour inference. **Grade D, unchanged.** |

The strongest supported predictor remains a bounded provider-owned
usage/enforcement transition paired with a materially advanced stable provider
anchor. A provider anchor is a scheduling input, not event evidence. Explicit
promises are useful directional signals only when a later independent
transition confirms them. A queued credit count is evidence of queued capacity,
not evidence of a completed reset. The August 23 promised reset is a prospective
detection test, not a current forecast label.

Signals that looked predictive but failed or remain sparse include a reset-button
noun without action, a merely sliding timestamp, universal banked-credit
wording, cache-hit or sub2api explanations, Fast-mode/subagent anecdotes,
context-compaction loops, isolated Status incidents, mirror presence, and
cadence or weekday inference. The new reports make the accounting questions
more concrete, but they do not answer them.

## Changes, next tests, and deterministic forecast status

What changed since the prior scan:

- The discovery feed was healthy and yielded 32 new post-cutoff candidates. All
  32 canonical URLs passed X-owned author, URL, date, and text validation. Four
  originals and several replies now document the 20M banked-credit rollout,
  cache-hit concerns, and an August 24 full-reset promise.
- The local observer recorded one available full-reset credit granted at
  `2026-08-22T00:20:05Z`, with no redemption. It still has five published full
  resets and no sixth transition.
- Preferred mirror coverage improved to all 32 records. The fallback remained
  split and incomplete. Neither mirror became evidence.
- OpenAI Status added one ChatGPT-web logout incident, a negative control. No
  Codex reset or compensation event was published.
- Thirteen new rate-limit-labeled GitHub issue bodies strengthened usage,
  credit-ledger, mode, background-worker, compaction, routing, and telemetry
  contradiction classes. No staff comment confirmed a cause.
- The mutable Help page now exposes an August 31 GPT-5.4-to-GPT-5.6 Terra/Luna
  model availability change. It is a mechanism/product watch item, not a reset
  input.

Next observable detection tests are:

1. Test the August 23 promise at its stated August 24 afternoon clock against a
   bounded observer transition. Preserve early, late, missing, and
   nonrecipient outcomes. Do not use the promise itself as completion.
2. Track the local available credit count and its bounded before/after value.
   A decrement can support redemption analysis, but never label redemption as a
   full reset without a qualifying meter or access transition.
3. Seek independent receipt and nonreceipt evidence for the 20M banked credit,
   June 29, July 28/29, August 1, and August 13. Keep the conditional offer
   separate from this milestone grant.
4. Seek staff diagnosis and bounded before/after evidence for #40043, #40045,
   #40056, #40067, #40110, and #40213. Treat #40054, #40058, and #40076 as
   credit-ledger/display contradictions until a denominator exists.
5. Check the August 31 model availability change for any provider-bucket,
   usage-window, or display change. The Help page's mutable date is not a
   historical publication timestamp.
6. Continue measuring discovery-feed and mirror lag, reply omissions, split
   threads, and canonical X validation.

The local generated snapshot inspected at the final observer window remains
the provider-anchor baseline with five verified observations, no active
Codex-relevant incident, and the August 27 provider anchor. All published
1/3/6/12/24-hour probabilities remain `1%`, the likely interval remains
`2026-08-27T08:19:14Z` to `2026-08-27T11:19:14Z`, and confidence remains `D`.
The new posts, mirror records, GitHub reports, and queued credit were not
approved forecast inputs. The main-lane live refresh at
`2026-08-23T09:19:58.153Z` produced
`events-5-cutoff-2026-08-23-4333ea99`. Compared with
`events-5-cutoff-2026-08-21-4333ea99`, time-dependent feature values changed:
`hoursSinceLastConfirmedReset` from `23.5759586` to `71.5120058`,
`incidentRecencyHours` from `16.4153842` to `64.3514314`, and displayed time
to the anchor from `144h` to `96h`. Outputs stayed at `1%` for every horizon,
with the same August 27 interval and confidence `D`. Performance matured from
`n=17` to `n=19`, with Brier/baseline changing from `0.0761882353` to
`0.0681789474`; the comparison remains a tie and no model was promoted. No
historical snapshot was rewritten.

## Coverage gaps and blockers

Universal delivery denominators, independent July/August recipient evidence,
the June 29 credit lifecycle, August 13 breadth, the 20M banked-credit
recipient set, and staff confirmation of cache-hit, sub2api, Fast-mode,
subagent, background-worker, or compaction causes remain unavailable. The
mutable Help/pricing pages do not expose exact revision history. The X profile
timeline remained unavailable, so the approved feed and exact mirrors supplied
discovery only. No credentials, private Codex activity, account identifiers,
prompts, responses, logs, or prohibited scrapers were used.
