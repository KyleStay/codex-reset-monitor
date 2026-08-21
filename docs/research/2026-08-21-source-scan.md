# Source scan, 2026-08-21

**Research cutoff:** `2026-08-21T09:26:17Z`. The previous forecast/source
cutoff was `2026-08-20T09:51:35Z`; recent monitoring therefore covers the
interval after that cutoff through the final retrieval clock. This note also
rechecks the unresolved June 29, July 28/29, August 1, August 8/10, August 13,
and conditional-credit records. Discovery and approval times are preserved.
No public claim is promoted to a verified observation, no historical feature
snapshot is rewritten, and no third-party forecast or classification is used.

## Source boundary and retrieval

The exact configured sources were used: official OpenAI Status and Help,
official OpenAI developer/ChatGPT documentation and changelog, source-native
public `openai/codex` issues, comments, releases, and pull requests, the
configured `@thsottiaux` X account and X-owned oEmbed validator, and the two
configured Bluesky mirrors. The X profile page did not expose a usable public
timeline in this retrieval, so the approved discovery feed was used only for
the permitted raw fields (`fetchedAt`, `sourceErrors.tibo`, and `tiboPosts`).

| Surface | Retrieval and finding |
| --- | --- |
| [OpenAI Status incidents API](https://status.openai.com/api/v2/incidents.json) and [incident pages](https://status.openai.com/history) | The API was current through `2026-08-20T17:52:16Z`. Two incidents were published after the prior cutoff: [Elevated Errors for Thinking mode in ChatGPT](https://status.openai.com/incidents/01M0FQAR3NNH3ANVTQMBRD47DC), `2026-08-20T13:56:21Z`–`16:51:51Z`, and [Elevated Codex API authentication errors](https://status.openai.com/incidents/01M0G1RZER839AZXWMYKSZF3GR), `16:58:53Z`–`17:52:16Z`. They describe service errors and mitigation/recovery only; neither states a quota reset, credit grant, compensation, or usage-window change. |
| [Codex plan usage Help](https://help.openai.com/en/articles/11369540-codex-and-chatgpt-plan-usage-limits) | The mutable page displayed `Updated: 12 hours ago`. It continues to distinguish included allowance, purchased credits, full banked resets, and one-time automatic resets. It says a full banked reset restarts both five-hour and weekly windows, and that support does not directly reset limits. No account event, exact revision timestamp, population denominator, or August delivery record is exposed. |
| [Flexible-usage credits Help](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-free-go-plus-pro-sora) | The mutable page displayed `Updated: yesterday`. It says included usage is used first, purchased credits are a shared balance across supported agentic features, auto top-up is available to eligible Plus/Pro users, and credits can go negative when concurrent tasks finish after the balance is depleted. This documents mechanisms, not a reset or grant. |
| [Official pricing and usage documentation](https://learn.chatgpt.com/docs/pricing) | The current page says ChatGPT Work and Codex share usage, and documents token/credit accounting, model-dependent rates, higher Fast-mode consumption, and image-generation multipliers. It also says local-message and cloud-chat usage share a five-hour window and that additional weekly limits may apply. This is a mechanism reference and a useful interpretation guard for public burn-rate reports, not an event. |
| [ChatGPT and Codex changelog](https://learn.chatgpt.com/docs/changelog) | The August 20 section lists Apple Messages, Site collaboration/URLs, Computer History, shared thread snapshots, unified pinned threads, and Codex CLI `0.149.0`. The entries contain no reset, grant, redemption, compensation, or quota-window announcement. |
| [Public Codex releases](https://github.com/openai/codex/releases) | Releases published after the previous cutoff include `rust-v0.149.0`, `rust-v0.149.0-alpha.7`, `rust-v0.150.0-alpha.1`, `rust-v0.149.0-alpha.4.1`, `rust-v0.150.0-alpha.2`, and `rust-v0.149.0-alpha.7.1`. Their bodies are release notes or placeholders; none announces a reset, credit, or quota-policy change. |
| Public `openai/codex` issues/comments/PRs | The read-only GitHub API search covered issues created from `2026-08-20T09:51:35Z` through `2026-08-21T09:26:17Z`, plus comments on relevant records and 61 PRs opened in the interval. Eleven rate-limit-labeled issue bodies were reset-adjacent; none had staff confirmation of a reset or cause. Relevant merged PRs were telemetry or client behavior, including [#39722](https://github.com/openai/codex/pull/39722) (multi-agent spawn telemetry), [#39741](https://github.com/openai/codex/pull/39741) (model-specific auto-review instructions), and [#39785](https://github.com/openai/codex/pull/39785) (turn-cost telemetry for custom providers). No PR changes the subscription reset mechanism. |

The recent source range searched was `2026-08-20T09:51:35Z`–
`2026-08-21T09:26:17Z`. Historical source-native rechecks covered June 29
through August 17, including the June 29 promise/credit question, July 28,
July 29, August 1, the August 8/10 promise, August 13, and the conditional
extra-credit offer. The absence of a public source-native completion or
recipient denominator is itself a finding.

## Exact Tibo account and canonical validation

The configured public [@thsottiaux profile](https://x.com/thsottiaux) exposed
no usable timeline in this retrieval. The approved discovery response was
fetched at `2026-08-21T09:12:39.605Z`, with `sourceErrors.tibo=null` and 22 raw
`tiboPosts`. Seven numeric candidates were newer than the previous cutoff.
The feed was used only to locate canonical status URLs, public text, reply
context, and discovery time. Its forecast, signal, assessment,
classification, probability, and derived-score fields were not read into the
project.

All `7/7` candidate URLs returned X-owned [oEmbed](https://publish.twitter.com/oembed)
records naming `Tibo`, linking to the exact `https://x.com/thsottiaux/status/<id>`
URL, and showing the matching calendar date. Snowflake-derived times below are
used because oEmbed did not expose a source-native `created_at`; the timestamp
basis is explicitly **X-ID-derived UTC**. The long usage-limit post's oEmbed
HTML is abbreviated by the validator, so its visible prefix was checked and
the item remains an attributed mechanism statement only. No candidate failed
canonical validation, but none can establish universal delivery or a confirmed
cause.

| Canonical post | X-ID-derived UTC | Evidence-safe classification |
| --- | --- | --- |
| [2090517433199247741](https://x.com/thsottiaux/status/2090517433199247741) | `2026-08-20T19:12:50.667Z` | ChatGPT Site/product context (“More context, better help”); no reset, promise, grant, redemption, or limit change. |
| [2090518287532916854](https://x.com/thsottiaux/status/2090518287532916854) | `2026-08-20T19:16:14.356Z` | ChatGPT Site/product announcement; nonqualifying for reset research. |
| [2090631723302469995](https://x.com/thsottiaux/status/2090631723302469995) | `2026-08-21T02:46:59.551Z` | GPT-Image-2/product announcement; nonqualifying for reset research. |
| [2090632208872853889](https://x.com/thsottiaux/status/2090632208872853889) | `2026-08-21T02:48:55.320Z` | Reply asking about funding; ordinary commentary, no reset or usage-limit claim. |
| [2090675027670978569](https://x.com/thsottiaux/status/2090675027670978569) | `2026-08-21T05:39:04.117Z` | Attributed usage-limit/enforcement mechanism statement. It says investigated differences were associated in many affected reports with unsupported subscription-to-API relaying and fraud-prevention flags, while stating that ordinary Sign in with ChatGPT use is supported. This is not a reset, future promise, grant, redemption, bucket-size change, or confirmed cause for all users. The main lane filed pending-review issue [#16](https://github.com/KyleStay/codex-reset-monitor/issues/16); it is forecast-ineligible. |
| [2090677311276499164](https://x.com/thsottiaux/status/2090677311276499164) | `2026-08-21T05:48:08.571Z` | Reply asking what viewers would like to see; nonqualifying commentary. |
| [2090677537072652418](https://x.com/thsottiaux/status/2090677537072652418) | `2026-08-21T05:49:02.405Z` | Reply saying “Codex has nothing to hide”; nonqualifying commentary. |

The seven candidates contain four originals and three replies. None uses
completed-reset or future-reset wording. The only reset-adjacent text is the
usage-limit/enforcement statement, which may support an attributed public
signal after its discovery cutoff but cannot support an account-level event,
universal delivery, causation, or model promotion. No source-native X
`created_at` or edit history was available; all exact times above preserve the
ID-derived basis and retrieval context.

## Mirror freshness and completeness

The preferred exact-DID mirror
`did:plc:rcaom2u2hfsm3aqab5dfvhxs` (`@thsottiaux-mirr.selfhosted.social`)
covered all seven candidate timestamps, with indexing lag of approximately
`1m16.423s`–`15m11.899s`. Its feed view represented only the final segment of
the long usage-limit post, so text and thread completeness remain limited.

The fallback exact-DID mirror
`did:plc:rcelwndiefenpjvnm6uood4t`
(`@thsottiaux-bot.eurosky.social`) returned six records representing four of
the seven canonical candidates: the long post split into three records, the
image post, and the two Site/product posts. It omitted three replies. Its
indexing lag was approximately `1m45.496s`–`6m16.369s`. Both mirrors are
unofficial discovery/corroboration aids; neither proves authorship, delivery,
cause, scope, or model state. The exact X URLs and X-owned oEmbed records remain
the only basis for attributing the seven posts.

## Historical follow-up and unresolved delivery

The carried canonical records were revalidated through X-owned oEmbed for
author, URL, and calendar date:

- The [June 29 promise](https://x.com/thsottiaux/status/2071740419030053227)
  (`2026-06-29T23:39:41.629Z`, ID-derived) describes a full reset within one
  hour and a separate banked reset within 24 hours. The same-thread reply
  [2071742134785294587](https://x.com/Yinielin/status/2071742134785294587)
  appeared about `6m49.068s` later, before either promised window, and has no
  before/after meter, provider anchor, credit receipt, or recipient denominator.
  Completion of both actions remains unresolved.
- The completed-action wording in the [July 28](https://x.com/thsottiaux/status/2081940052154933696),
  [July 29](https://x.com/thsottiaux/status/2082317452755751098), and
  [August 1](https://x.com/thsottiaux/status/2083395449814229287) posts remains
  attributed public evidence and pending-review context. The records lack
  independent recipient/nonrecipient evidence and a bounded provider
  transition. They cannot rewrite earlier feature snapshots.
- The [August 8 promise](https://x.com/thsottiaux/status/2086189414292865249)
  at `2026-08-08T20:34:50.549Z`, the contextual [August 10 post](https://x.com/thsottiaux/status/2086800050630676504),
  and the [ordinary-reset interpretation](https://x.com/thsottiaux/status/2086800639120888014)
  remain an intended future reset thread, not a completed delivery label.
- The [August 13 one-hour announcement](https://x.com/thsottiaux/status/2087706104814023111)
  remains retrospective context for the existing verified transition because
  project discovery followed that outcome. It still lacks a population
  denominator and a source-native completion/breadth statement.
- The [August 13 acknowledgement](https://x.com/thsottiaux/status/2087960561728569362)
  has no later completion or breadth evidence. The [conditional extra-credit
  offer](https://x.com/thsottiaux/status/2089206566998405162) remains an offer,
  not a completed grant or banked reset.

No new independent evidence resolved any of these delivery questions. Inferred
events stay distinct from the five project-verified observations, and causes
remain unknown unless directly supported.

## Local observer and project evidence state

The privacy-minimized observer was healthy at `2026-08-21T09:19:50.341Z` with
`3,702` retained samples, five detected and published resets, no pending
publication, and no available banked reset credit. The primary Codex bucket
was 8% used and reported `2026-08-27T09:49:25Z` as its next weekly reset. The
separate Spark bucket remained excluded.

The primary anchor moved 11 seconds after the August 20 transition while usage
rose from 0% to 8%. That is ordinary timestamp drift, not a reset: there was no
near-zero transition, exhausted-to-available recovery, or newly advanced
seven-day window. No sixth observation qualified.

After pending issue #16 was filed, project state was `n=5` verified
observations, `n=1` approved public source, and `n=10` pending-review sources.
The pending record is excluded from generated forecast features.

## New repository-native public signals

These are public claims or mechanism reports, not verified observations,
approved forecast inputs, or staff-confirmed causes. The following eleven
rate-limit-labeled issue bodies were opened after the prior cutoff; two pairs
are explicitly non-independent or duplicated and are not counted as separate
accounts.

| Record | Evidence-safe interpretation |
| --- | --- |
| [#39699](https://github.com/openai/codex/issues/39699) | One Plus report says comparable development workflows consumed the weekly allowance more than twice as quickly, while acknowledging that local records cannot expose the complete server accounting. One public claim; no transition or cause. |
| [#39701](https://github.com/openai/codex/issues/39701) | One Plus report says 250 purchased credits were no longer visible and that the usage page lacked transaction history. Purchased-credit ledger/display contradiction only. |
| [#39750](https://github.com/openai/codex/issues/39750) and [#39751](https://github.com/openai/codex/issues/39751) | Two issue bodies repeat the same feedback/workflow context about broad testing and usage burn. Treat as one non-independent public report, not two recipients. |
| [#39760](https://github.com/openai/codex/issues/39760) | One report says a banked reset disappeared while the local client was inactive and a subsequent quota snapshot showed a new weekly anchor. No provider-side transition, redemption event, or staff confirmation is available; banked-reset lifecycle contradiction only. |
| [#39763](https://github.com/openai/codex/issues/39763) | One report says 6% usage was consumed in about 90 minutes, but the body itself warns that the explanation offered was speculative and that the complete account breakdown is unavailable. Burn-rate claim only. |
| [#39796](https://github.com/openai/codex/issues/39796) | One report says the weekly meter fell from near-full to about 5% in four hours alongside severe local resource pressure. No bounded reset or server ledger. |
| [#39808](https://github.com/openai/codex/issues/39808) | A feature request hypothesizes that subagent fan-out multiplies fixed context/tool overhead. User follow-up is anecdotal. Candidate mechanism, not established prevalence or causation. |
| [#39818](https://github.com/openai/codex/issues/39818) | One Windows/Luna report says the weekly quota dropped about 40% in one day despite light use. No independent account denominator or transition. |
| [#39854](https://github.com/openai/codex/issues/39854) | One report attributes approximately 678.5M locally logged tokens to repeated multi-agent polling while editing several resume versions. It is a public self-report of a possible depletion mechanism, not evidence that the same mechanism affected other accounts. |
| [#39894](https://github.com/openai/codex/issues/39894) | One Pro report alleges subagents used Fast mode after the user disabled it and consumed additional credits. It is an unconfirmed Fast-mode billing claim. |
| [#39888](https://github.com/openai/codex/issues/39888) | Abusive/non-specific title and body; excluded as non-evidence. |

Public comments on these records were GitHub automation or user replies; no
OpenAI staff comment supplied a reset, credit grant, population breadth, or
cause confirmation. The six prior-run capacity-error reports and these new
records strengthen divergence and metering-contradiction monitoring only.

## Point-in-time-safe pattern audit

The audit compares only evidence public and approved before the evaluated
cutoff with subsequent outcomes. New August 20/21 posts and issue bodies were
discovered after `2026-08-20T09:51:35Z`; they may affect later forecasts only
after approval and never enter earlier snapshots. No tracker forecast,
tracker classifier, mirror-only text, or unverified public claim is a feature.

| Pattern | Exact sample, date range, evidence classes, and cutoff | Support, contradictions, lead time, grade, and change since 2026-08-20 |
| --- | --- | --- |
| Provider-owned transition | `n=5` verified observations, August 8–20; observer transition bounds and provider anchors; prior evaluated cutoff `2026-08-20T09:51:35Z`. | The fifth event was an exhausted-to-available transition with a materially advanced anchor and a `6.932s` post-anchor bound. No new observer event is established by this source-only scan. **Grade A; unchanged.** |
| Explicit future announcements | `n=7` point-in-time-eligible canonical future-reset announcements, June 16–August 8; X validation, preserved discovery cutoffs, later independent bounds. Current scan adds `n=0` promises. | Later-signal lead range remains approximately `17m34s`–`51h28m`; June 29 remains unresolved and July 9 missed its stated hour. August 13 is retrospective to its outcome and excluded from the predictive sample. **Grade C directional, Grade A only with independent verification; unchanged.** |
| Completed versus future wording | `n=10` inherited canonical completed/future records, June 4–August 11; X posts, inferred events, public reports, and verified observations. Current scan adds `n=0` completed statements. | Completed wording supports attributed operator action but not universal receipt. The new August 21 operator statement is neither completed wording nor a promise. **Grade A wording, B some delivery, C–D breadth; unchanged.** |
| Reset-button capability | `n=2` paired canonical originals, August 19; X oEmbed and X-ID-derived UTC; project discovery cutoff `2026-08-20T09:27:47Z`. | “It has not been used yet” followed the capability post by `11h35m46.158s`; the next verified event was ordinary scheduled delivery. **Grade A for attributed non-use, Grade D as a predictor; unchanged/refuted for this episode.** |
| Incident chronology and reset linkage | `n=14` incident/reset contexts, June 3–August 20: official Status events, attributed posts, and public reports; evaluated cutoff `2026-08-21T09:26:17Z`. | Two new official incidents add complete identification/mitigation/recovery chronology but no reset, credit, compensation, or Codex usage-window statement. **Grade A chronology, Grade D reset linkage; negative-control set strengthened.** |
| Hard reset versus banked reset versus purchased credits | `n=6` mixed hard-reset/banked-reset records, June 12–August 20, plus `n=1` new purchased-credit display report; Help mechanisms, canonical posts, public claims, and delivery contradictions. | Official Help separates mechanisms. June 29 remains unresolved; #39760 adds a banked-ledger contradiction without redemption proof; #39701 concerns purchased credits, not a full reset. **Grade A mechanism, B–C account delivery, D breadth; lifecycle contradictions strengthened, completion unchanged.** |
| Automatic-review/subagent depletion candidate | `n=6` mechanism contexts, June 29–August 21: one canonical operator diagnosis, two prior independent public reports, #39808 hypothesis, #39854 report, and #39894 Fast-mode report; cutoff `2026-08-21T09:26:17Z`. | Repeated review/polling, fan-out overhead, and Fast-mode billing are plausible candidate mechanisms, but reports are unverified, heterogeneous, and lack staff confirmation or a common transition. **Grade B for a candidate mechanism, Grade D prevalence/cross-account cause; strengthened but not causal.** |
| Public-report clustering and contradictions | `n=17` focused issue bodies from August 19–21: six prior capacity reports plus eleven new rate-limit-labeled bodies; public claims only; cutoff `2026-08-21T09:26:17Z`. #39750/#39751 are one duplicated context; no staff confirmation or common-event denominator. | New reports strengthen display, enforcement, banked-credit, purchased-credit, burn-rate, Fast-mode, and subagent divergence. They do not establish a shared reset, delivery prevalence, or cause. **Grade B divergence, Grade D prevalence; strengthened.** |
| Originals versus replies | `n=7` newly discovered canonical posts after the cutoff: four originals and three replies, fetched/discovered at `2026-08-21T09:12:39.605Z`; X/oEmbed validation; evaluated cutoff `2026-08-21T09:26:17Z`. | All four originals and three replies are non-reset; the only reset-adjacent original is the mechanism statement. Reply context does not add completion evidence. **Grade A attribution, Grade D prediction; new negative/control set.** |
| Discovery and mirror lag/completeness | Discovery `n=7`, preferred mirror `7/7` candidates with `1m16.423s`–`15m11.899s` lag, fallback six records covering `4/7` with `1m45.496s`–`6m16.369s` lag; feed fetched `2026-08-21T09:12:39.605Z`. | Preferred mirror is fresher/more complete but split the long post; fallback omitted three replies and split the same post into three records. **Grade A canonical validation, Grade D mirror completeness; completeness remains weak.** |
| Rate card, Fast mode, and usage-depletion context | `n=1` current official pricing page plus `n=2` mutable Help pages; retrieved by `2026-08-21T09:26:17Z`; mechanism documentation, not events. | Official docs explicitly say credits vary by model/context/tools and Fast mode consumes faster; this makes high-burn reports plausible without proving a meter defect or reset. Revision history is not exposed. **Grade A mechanism documentation, Grade D event prediction; strengthened as an interpretation guard.** |
| Reset gaps, cooldown, UTC hour, and weekday | `n=5` verified detections, August 8–20, yielding `n=4` gaps: `11h09m42.937s`, `51h29m50.496s`, `55h20m37.071s`, and `170h25m58.932s`; observer transitions/anchors; prior cutoff `2026-08-20T09:51:35Z`. | The latest gap is near a weekly interval, but five events and four gaps remain too sparse for cadence, cooldown, weekday, or UTC-hour inference. **Grade D; unchanged.** |

The strongest currently supported predictor remains a bounded provider-owned
usage/enforcement transition paired with a materially advanced stable provider
anchor. A provider anchor is a scheduling input, not event evidence. Explicit
promises are directionally useful only when followed by an independently
verified transition. Completed wording is strong evidence of an attributed
operator statement but weak evidence of universal delivery.

Signals that looked predictive but failed or remain sparse are the reset-button
noun without an action, a sliding or merely approaching timestamp, billing or
credit changes, Fast-mode/subagent anecdotes, isolated capacity errors,
incident/milestone context, mirror presence, and cadence/weekday inference.
The new attributed usage-limit statement is a mechanism/enforcement signal,
not a reset predictor.

## Changes, next tests, and deterministic forecast status

What changed since the prior scan:

- Official Status added two resolved service-error incidents after the last
  forecast cutoff, both negative controls for reset linkage.
- Seven new canonical Tibo candidates were found and validated; all are
  non-reset, with one pending-review usage-limit/enforcement statement.
- Mirror freshness is currently good for the preferred mirror but completeness
  and long-post/thread context remain limited; the fallback omitted three
  replies.
- New public reports strengthened metering, credit-ledger, Fast-mode, and
  subagent-overhead contradiction classes. No report is staff-confirmed.
- Today's official pricing read supplies explicit model/context/tool and
  Fast-mode consumption context; this informs interpretation but does not
  change the evidence labels.

Next observable detection tests are:

1. Test the August 27 provider anchor against a bounded exhausted-to-available
   or near-zero meter transition. Preserve early, late, missing, and
   nonrecipient outcomes.
2. Keep the August 21 usage-limit statement separate from resets unless a
   later canonical post supplies a concrete action and independent transition.
3. Seek staff diagnosis and bounded before/after evidence for #39760,
   #39818, #39854, #39894, and the duplicated #39750/#39751 context; do not
   treat same-reporter cross-links as independent recipients.
4. Resolve June 29's hard-reset completion separately from the banked-credit
   grant. The early same-thread reply is not completion evidence.
5. Seek independent receipt/nonreceipt and provider anchors for July 28/29,
   August 1, and August 13. Follow the conditional credit offer only if a
   canonical completed grant appears.
6. Continue measuring discovery-feed and mirror lag, reply omissions, and
   split-thread context against canonical X validation.

The live refresh at `2026-08-21T09:23:48.383Z` produced dataset
`events-5-cutoff-2026-08-21-4333ea99`. It retained five verified observations,
two current Codex-relevant official incidents, one approved source, zero
rejected records, and zero duplicates. The new pending source and all current
public claims stayed out of the feature snapshot.

Repository code kept every 1/3/6/12/24-hour probability at 1%. The likely
interval remains `2026-08-27T08:19:14Z`–`11:19:14Z`, confidence D. The new
resolved authentication incident shortened incident recency to about 16.42
hours, but no active incident or approved post entered the forecast. Hours
since the last confirmed reset advanced normally; no historical snapshot was
rewritten. Performance stayed at `n=17`, Brier `0.07618823529411765`, equal to
the baseline. No model was promoted.

## Coverage gaps and blockers

The exact mutable revision history of Help/pricing pages, universal delivery
denominators, independent July/August recipient evidence, June 29 credit
lifecycle, August 13 completion/breadth, and staff confirmation of recurrent
depletion/display/credit/Fast-mode mechanisms remain unavailable. The X
timeline was not exposed in the public profile retrieval; the approved feed
and exact mirrors supplied discovery only. No credentials, private Codex
activity, account identifiers, prompts, responses, logs, or prohibited
scrapers were used.
