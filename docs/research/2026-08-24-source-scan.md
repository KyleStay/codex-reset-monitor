# Source scan, 2026-08-24

**Research cutoff:** `2026-08-24T09:21:26.518Z`. The previous
forecast/source cutoff was `2026-08-23T09:21:02.266Z`, so the recent-monitoring
window is bounded to that interval. This scan also rechecks the unresolved June
29, July 28/29, August 1, August 8/10, August 13, and credit records. Discovery
time, source publication time, and approval time remain separate. No social
post, mirror record, or public claim becomes a verified observation by itself.

## Source boundary and retrieval

I checked the configured official OpenAI sources, source-native public
`openai/codex` records, the exact configured `@thsottiaux` account, and the two
exact-DID Bluesky mirrors. The privacy-minimized local observer supplied the
account-level transition below. No credentials, private activity, prompts,
responses, logs, account identifiers, or third-party forecast fields were
read.

| Surface | Retrieval and finding |
| --- | --- |
| [OpenAI Status incidents API](https://status.openai.com/api/v2/incidents.json) and [history](https://status.openai.com/history) | The API was still updated through `2026-08-21T23:15:09Z`. No incident was added in this scan window. The existing resolved logout incident remains a ChatGPT web negative control, with no Codex reset, credit grant, compensation, or usage-window statement. |
| [Codex Help article](https://help.openai.com/en/articles/11369540-codex-and-chatgpt-plan-usage-limits) | The page reported `Updated: 2 days ago`. It still distinguishes automatic one-time resets from banked resets, says redeeming a full banked reset restarts both five-hour and weekly windows, and says support does not directly reset limits. It continues to announce the August 31 GPT-5.4 and GPT-5.4 mini transition to GPT-5.6 Terra and Luna. This is current product documentation, not a reset record. |
| [Codex pricing](https://learn.chatgpt.com/docs/pricing) and [ChatGPT/Codex changelog](https://learn.chatgpt.com/docs/changelog) | The current pricing page says usage varies by model, context, reasoning, tools, retrieval, and caching, and lists model-specific five-hour ranges. The changelog added Codex CLI `0.149.1` on August 24. Neither page reports a reset or compensation event. Mutable page content has no complete historical revision trail. |
| [Public Codex releases](https://github.com/openai/codex/releases) | Release `0.149.1` was published at `2026-08-24T00:28Z`. Its release page and changelog contain no reset, credit, or quota-policy change. |
| Public `openai/codex` issues, comments, and PRs | The bounded issue search found two new `rate-limits` records: [#40259](https://github.com/openai/codex/issues/40259), opened `2026-08-23T17:21:11Z`, and [#40318](https://github.com/openai/codex/issues/40318), opened `2026-08-24T03:09:08Z`. Their only comments were `github-actions[bot]` duplicate notices. The bounded PR search found no quota-policy change. Compaction and image-budget work in [#40280](https://github.com/openai/codex/pull/40280), [#40273](https://github.com/openai/codex/pull/40273), and [#40275](https://github.com/openai/codex/pull/40275) is mechanism context only. |
| [Configured X account](https://x.com/thsottiaux) and [canonical post](https://x.com/thsottiaux/status/2091688655828246890) | The public profile was available in the source-native browser this run. It showed `2,712 posts` and the new reset-propagation post below. The profile replies timeline itself returned "Something went wrong," so replies were checked from the canonical post page. The approved discovery feed was not needed because the profile was available; a direct browser request to the feed was blocked by the client, and no forecast, classifier, or derived-score fields were read. |
| [Preferred mirror profile](https://bsky.app/profile/did:plc:rcaom2u2hfsm3aqab5dfvhxs) | Exact DID `did:plc:rcaom2u2hfsm3aqab5dfvhxs` resolved to `@thsottiaux-mirr.selfhosted.social`, showed `492 posts`, and displayed the new reset-propagation text at August 23, 8:48 PM local browser time. It is an unofficial mirror and cannot establish authorship, scope, cause, delivery, or model state. |
| [Fallback mirror profile](https://bsky.app/profile/did:plc:rcelwndiefenpjvnm6uood4t) | Exact DID `did:plc:rcelwndiefenpjvnm6uood4t` resolved to `@thsottiaux-bot.eurosky.social`, showed `296 posts`, and displayed the same new text at August 23, 8:46 PM local browser time. It exposed split threads and remains a secondary discovery aid. |

The recent source range searched was `2026-08-23T09:21:02.266Z` through
`2026-08-24T09:21:26.518Z`. Historical source-native rechecks covered June 29
through August 24, including the June 29 reset-plus-credit question, July
28/29, August 1, August 8/10, August 13, the conditional extra-credit offer,
and the 20M milestone credit. No source supplies a recipient denominator for
those records. That absence remains a finding.

## New canonical X evidence

The source-native X profile and canonical post page both named Tibo and
`@thsottiaux`, showed the exact canonical status URL, and exposed the full
public text. The X page displayed `8:46 PM · Aug 23, 2026`. Because no
`created_at` field was exposed, the exact UTC timestamp is derived from the X
Snowflake ID and labeled as ID-derived.

| Canonical post | Timestamp basis | Classification and evidence boundary |
| --- | --- | --- |
| [2091688655828246890](https://x.com/thsottiaux/status/2091688655828246890) | X profile displayed `8:46 PM · Aug 23, 2026`; Snowflake ID-derived UTC `2026-08-24T00:46:51.902Z` | Completed hard-reset propagation statement: "Good Sunday. Reset has been propagated to accounts and we landed some fixes to usage for things mentioned yesterday as issues we found. You should feel a positive difference. More to come tomorrow and will keep communicating." This is an attributed completion statement, not proof that every paid account received the reset. It appeared `1m07.434s` before the independent local transition below. X-owned oEmbed was not available in this browser retrieval, so the source-native profile and canonical post page are the validation basis. |

The carried August 23 promise [#19](https://github.com/KyleStay/codex-reset-monitor/issues/19)
was published at ID-derived `2026-08-23T06:11:36.368Z`. The independent reset
occurred `18h36m22.968s` later. It arrived about 20h12m before the intended
2 PM PDT clock, or about 21h12m before a literal PST conversion. The completion
post arrived just before the observer transition. This timing supports the
post as a useful attributed signal around this account's event, but it does
not establish universal delivery or cause.

The canonical post page exposed three public replies. They are user claims,
not independent observer evidence:

- [2091689270499217416](https://x.com/vxbe_dev/status/2091689270499217416), ID-derived `2026-08-24T00:49:18.451Z`, says the reset reached that account two minutes after the user redeemed a saved reset. This is a possible credit/reset interaction, not a bounded server transition.
- [2091689764638384415](https://x.com/ieqr_/status/2091689764638384415), ID-derived `2026-08-24T00:51:16.263Z`, asks whether the reset was supposed to land the next day. This is a timing-confusion contradiction.
- [2091691767267774755](https://x.com/hooftly/status/2091691767267774755), ID-derived `2026-08-24T00:59:13.727Z`, says business accounts were excluded despite "all paid users" wording. This is a scope contradiction.

The new post is therefore classified as attributed completed-reset language,
with independent local confirmation for one monitored account and unresolved
scope. Pending-review [issue #21](https://github.com/KyleStay/codex-reset-monitor/issues/21)
preserves the discovery and approval cutoff. It remains forecast-ineligible.

## Mirror freshness and completeness

The preferred mirror displayed the new text at 8:48 PM local browser time,
about two minutes after the X page's displayed 8:46 PM. The fallback displayed
the same text in the 8:46 PM minute. These minute-level page displays do not
support a stronger lag estimate. The preferred profile contained the full
reset-propagation text and a parent link to the August 23 mechanism thread;
the fallback split the mechanism thread and reported zero replies on the new
post. Both exact-DID pages were inspected. Neither mirror can validate the X
author or prove delivery. The direct `/api/forecast` and AT Protocol API
requests were blocked by the browser client during this retrieval, so no
`fetchedAt` or API indexing metadata is claimed here.

## Historical follow-up and unresolved delivery

The canonical records for [June 29](https://x.com/thsottiaux/status/2071740419030053227),
[July 28](https://x.com/thsottiaux/status/2081940052154933696),
[July 29](https://x.com/thsottiaux/status/2082317452755751098),
[August 1](https://x.com/thsottiaux/status/2083395449814229287),
[August 8](https://x.com/thsottiaux/status/2086189414292865249),
[August 10 context](https://x.com/thsottiaux/status/2086800050630676504),
[August 10 ordinary-reset interpretation](https://x.com/thsottiaux/status/2086800639120888014),
[August 13 announcement](https://x.com/thsottiaux/status/2087706104814023111),
[August 13 acknowledgement](https://x.com/thsottiaux/status/2087960561728569362),
and the [conditional credit offer](https://x.com/thsottiaux/status/2089206566998405162)
remain unresolved for breadth, credit lifecycle, or exact completion except
where the observer independently bounds the August 8, 11, 13, 20, and 24
events. No new evidence closes the June 29 question or supplies independent
recipient/nonrecipient sets for July 28/29, August 1, or August 13. The August
8/10 promise thread is now followed by a confirmed August 24 transition, but
the new transition is not retroactively inserted into an earlier feature
snapshot and does not prove that the August 8 promise itself delivered.

The separate 20M milestone banked credit remains available locally. It is not
a reset redemption and did not change during the August 24 transition.

## Local observer and project evidence state

The privacy-minimized observer was healthy at
`2026-08-24T09:20:05.881Z` with `4,364` retained samples spanning
`2026-08-03T10:16:12.586Z` onward. It reported one available full-reset credit,
granted at `2026-08-22T00:20:05Z` and expiring at `2026-09-21T00:20:05Z`.

The sixth published deterministic reset is [project issue #20](https://github.com/KyleStay/codex-reset-monitor/issues/20):

- observed at `2026-08-24T00:47:59.336Z`;
- prior sample `2026-08-24T00:42:56.178Z`, with `55%` used;
- current value `0%` used;
- previous provider anchor `2026-08-27T09:49:25Z`;
- new provider anchor `2026-08-31T00:47:59Z`;
- out-of-cycle, `4,861` minutes before the prior anchor;
- available-credit count `1` before and `1` after.

This is a provider-owned bounded transition and is the only basis for treating
the event as confirmed. The observer now has six published resets: August 8
09:23:05.496Z, August 8 20:32:48.433Z, August 11 00:02:38.929Z, August 13
07:23:16Z, August 20 09:49:14.932Z, and August 24 00:47:59.336Z. Four are
out-of-cycle and two are scheduled. The separate Spark bucket remains excluded.

The project state after the main refresh and issue filing is six verified
observations, one approved public source, and fourteen pending-review public
sources. The new canonical post is not an approved forecast source.

## New repository-native public signals

[Issue #40259](https://github.com/openai/codex/issues/40259) was opened at
`2026-08-23T17:21:11Z`. It compares two separate accounts that both moved from
100% to 10% weekly remaining while the reported token totals differed by about
two to one. The report is a single-account-pair display or accounting claim.
It has no reset transition, staff diagnosis, or recipient denominator. The
GitHub Actions bot linked it to #40067 and #40045 as possible duplicates.

[Issue #40318](https://github.com/openai/codex/issues/40318) was opened at
`2026-08-24T03:09:08Z`. A Windows Plus user says Codex Analytics showed 232
GPT-5.6 Luna turns and 124 Sol turns on August 16 despite selecting Sol, and
reports local telemetry for ephemeral Luna sessions. This is a possible hidden
background or model-routing consumption signal. It is not a reset, and its
only comment was a GitHub Actions duplicate notice linking [#40223](https://github.com/openai/codex/issues/40223).

No OpenAI staff comment on these new records established a reset, credit
redemption, scope, or cause. They remain public claims and are forecast-
ineligible.

## Point-in-time-safe pattern audit

This audit uses only evidence public or approved before each evaluated cutoff,
then checks later outcomes. The current cutoff is
`2026-08-24T09:21:26.518Z`. The August 24 canonical post and the two new GitHub
issues were not available to the August 23 snapshot and do not alter it.

| Pattern | Exact sample, date range, evidence classes, and cutoff | Support, contradictions, grade, and change since 2026-08-23 |
| --- | --- | --- |
| Provider-owned bounded transition | `n=6` verified observations, August 8 to August 24; observer access/meter transitions and provider anchors; evaluated through the current cutoff. | The new 55% to 0% transition advanced the anchor and is independently confirmed. It is the strongest usable reset evidence. The event was out-of-cycle and does not establish recurring timing. **Grade A, strengthened.** |
| Explicit future reset promises | `n=9` canonical promise records, June 16 to August 23; X-validated attributed posts, preserved discovery times, and later observer bounds. | The August 23 promise now has one independently observed same-account outcome, with an `18h36m22.968s` promise-to-transition interval. Historical independent lead times remain about `17m34s` to `51h28m`; June 29 remains unresolved and July 9 missed its stated hour. Promise language remains directional and cannot prove universal delivery. **Grade C directional, strengthened as a testable signal.** |
| Completed versus future wording | `n=15` attributed wording records, June 4 to August 24; canonical X posts, public replies, inferred events, credits, and verified observations. | The new "reset has been propagated" statement is followed within `1m07.434s` by the local bounded transition, but three replies preserve timing and business-scope contradictions. **Grade A for wording and local timing, C to D for breadth; strengthened.** |
| Banked credit versus completed reset | One available local credit, grant `2026-08-22T00:20:05Z`, plus the prior four canonical banked-credit statements and the August 24 transition; observer metadata, X statements, and public missing-credit reports. | Credit count stayed `1` before and after reset #20. This is direct evidence that a queued credit and a hard reset are separate states. No redemption is established. **Grade A for the local distinction, D for universal delivery; strengthened.** |
| Incident chronology and reset linkage | `n=15` incident/reset contexts, June 3 to August 24; official Status chronology, observer events, attributed posts, and public claims. | No new Status incident appeared. The logout incident remains a negative control. The August 24 reset has no official incident linkage. **Grade A chronology, D reset linkage; unchanged.** |
| Cache, image, compaction, background, and model-routing mechanisms | `n=15` candidate contexts, June 29 to August 24; attributed operator statements, public issue bodies, and relevant implementation PRs. | The new #40259 and #40318 reports add account-specific display, token-allocation, hidden-model, and background-use leads. They remain heterogeneous with no shared transition or staff confirmation. **Grade B candidate mechanism, D prevalence/cause; strengthened, not causal.** |
| Public-report clustering and contradictions | `n=32` focused issue bodies, August 19 to August 24; rate-limit, depletion, credit, display, model, and routing reports. | New issues add a two-account percentage contradiction and possible hidden Luna consumption. Three new X replies add a saved-reset timing claim, a "tomorrow" contradiction, and a business-account scope complaint. No denominator or common-event proof exists. **Grade B divergence, D prevalence; strengthened.** |
| Originals versus replies | One new canonical original plus three public replies, August 24; source-native X profile/status page and exact-DID mirror pages. | The original contains completed-reset wording. Replies add timing and scope contradictions but no independent meter. **Grade A attribution, C timing, D delivery prediction; new, with no promotion value.** |
| Discovery and mirror freshness/completeness | One new canonical post; preferred mirror displayed it around two minutes later and fallback in the same displayed minute; direct feed/API metadata unavailable at retrieval. | Both exact-DID profiles were inspected. The mirrors corroborate text timing but remain unofficial and incomplete, with split threads and no authorship proof. **Grade C freshness, D completeness; unchanged limitation.** |
| Reset gaps, cooldown, UTC hour, and weekday | `n=6` verified observations, August 8 to August 24, yielding `n=5` gaps: `11h09m42.937s`, `51h29m50.496s`, `55h20m37.071s`, `170h25m58.932s`, and `85h58m44.404s`; observer transitions and anchors; current cutoff. | The sixth event adds an out-of-cycle gap but does not make cadence, cooldown, weekday, or UTC-hour inference defensible. **Grade D, unchanged.** |

The strongest supported predictor remains a bounded provider-owned transition
paired with a materially advanced stable provider anchor. The new event
strengthens that predictor. A provider anchor alone remains a scheduling input,
not reset evidence. A promise can identify a detection window, but it cannot
prove account-by-account delivery. A banked credit count is queued capacity,
not a completed reset or redemption.

Signals that looked predictive but failed or remain sparse include reset-button
wording without a transition, sliding timestamps, universal banked-credit
language, cache-hit and relaying explanations, Fast-mode and subagent
anecdotes, background and compaction reports, isolated Status incidents,
mirror presence, and cadence or weekday inference. The new post strengthens
the promise-to-transition test for one account, while the three replies show
why breadth still needs independent evidence.

## Changes, next tests, and deterministic forecast status

Changes since the prior scan:

- A sixth confirmed, out-of-cycle meter reset occurred at `2026-08-24T00:47:59.336Z` and re-anchored the monitored bucket to August 31.
- The exact canonical post [2091688655828246890](https://x.com/thsottiaux/status/2091688655828246890) reported propagation `1m07.434s` before the local transition. It remains an attributed signal, not a universal-delivery label.
- Three public replies supplied saved-reset timing and business-scope contradictions.
- The X profile was available this run. The preferred mirror lagged by about two displayed minutes and the fallback showed the same displayed minute, but both remained discovery-only.
- Codex CLI `0.149.1` was released on August 24 with no quota-policy change. Two new rate-limit issue bodies added accounting and hidden-model leads without staff confirmation.
- The 20M milestone credit remained available and was not redeemed by the reset.

Next observable tests are:

1. Continue checking for a bounded post-reset transition and the new August 31 provider anchor. Keep the out-of-cycle event separate from recurring-cadence estimation.
2. Track the available credit count and its bounded before/after value. A decrement would support redemption analysis, but it is not a full reset without a qualifying meter or access transition.
3. Seek independent receipt and nonreceipt evidence for the 20M credit, June 29, July 28/29, August 1, August 13, and the "all paid users" scope claim. Preserve the business-account contradiction separately.
4. Seek staff diagnosis and paired before/after evidence for #40259, #40318, #40223, #40067, #40045, and the image/compaction reports. Treat bot duplicate notices as non-evidence.
5. Watch the August 31 GPT-5.4 to GPT-5.6 model transition for provider-bucket, usage-window, or display changes. The mutable Help page is not a historical publication timestamp.
6. Recheck the X profile, canonical status pages, exact-DID mirrors, and feed/API availability. Keep mirror lag, reply omissions, and blocked retrievals explicit.

The main refresh at the current cutoff produced forecast ID
`fc_20260824092126` and dataset version
`events-6-cutoff-2026-08-24-edec6cd4`. The deterministic model reports `1%` at
each 1, 3, 6, 12, and 24-hour horizon, likely interval
`2026-08-30T23:17:59Z` through `2026-08-31T02:17:59Z`, and confidence grade `D`.
Its feature snapshot has six confirmed events, one scheduled event, four
out-of-cycle events, `medianCycleHours=170.43`, `cycleDispersionHours=2`, no
active incident, `approvedPostCount24h=0`, `weightedReportVolume6h=0`, and
`dataQuality=0.24`. The new confirmed event changed the provider-anchor
forecast input and feature values, but it did not raise the published
probabilities or promote a model. No third-party forecast or classifier was
used, and no earlier feature snapshot was rewritten.

Performance matured to `n=20` with Brier `0.074575`, equal to the baseline
`0.074575`. There is no declared evaluation win and no model promotion.

## Coverage gaps and blockers

Universal delivery denominators remain unavailable. The June 29 credit
lifecycle, independent July 28/29 and August 1 receipt/nonreceipt sets, the
August 13 breadth, the 20M credit recipient set, and the business-account
scope remain unresolved. The three new replies are public contradictions, not
independent account telemetry. The X replies timeline and approved discovery
feed were blocked or incomplete in this retrieval, although the public X
profile and canonical post page were available. The exact-DID mirror profiles
were readable, but direct API metadata was unavailable and their completeness
is weak. No official source confirms cache-hit, compaction, Computer History,
conversation-title, model-routing, Fast-mode, or background-worker causes.
