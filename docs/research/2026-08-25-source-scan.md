# Source scan, 2026-08-25

**Public-source research cutoff:** `2026-08-25T09:27:34.997Z`. The previous
forecast/source cutoff was `2026-08-24T09:21:26.518Z`, so the recent-monitoring
window is bounded to that interval. This scan rechecks the unresolved June 29,
July 28/29, August 1, August 8/10, August 13, and 20M credit records. Discovery
time, source publication time, approval time, and timestamp basis remain
separate. No social post, mirror record, public claim, or third-party forecast
becomes a verified observation by itself.

## Source boundary and retrieval

I checked the configured official OpenAI sources, source-native public
`openai/codex` records, the exact configured `@thsottiaux` account, and both
exact-DID Bluesky mirrors. The privacy-minimized local observer supplied only
the account-level state described below. No credentials, private activity,
prompts, responses, logs, account identifiers, or third-party forecast,
classifier, probability, or derived-score fields were read.

| Surface | Retrieval and finding |
| --- | --- |
| [OpenAI Status incidents API](https://status.openai.com/api/v2/incidents.json) and [history](https://status.openai.com/history) | The API was still updated through `2026-08-21T23:15:09Z`. No incident was added in the current scan window. The resolved ChatGPT web logout incident remains a negative control and contains no Codex reset, credit grant, compensation, or usage-window statement. |
| [Codex Help usage-limits article](https://help.openai.com/en/articles/11369540-codex-and-chatgpt-plan-usage-limits) | The mutable page reported `Updated: 3 days ago`. It distinguishes automatic one-time resets from banked resets, says a full banked reset restarts both five-hour and weekly windows, and says Support cannot directly reset limits. It also describes the August 31 GPT-5.4/GPT-5.4 mini transition to GPT-5.6 Terra/Luna. These are current product rules, not historical reset records. |
| [Official pricing documentation](https://learn.chatgpt.com/docs/pricing) and [official changelog](https://learn.chatgpt.com/docs/changelog) | Current documentation says ChatGPT Work and Codex share usage and describes separate five-hour and weekly limits, model/context/reasoning/tool variation, and credits. The changelog lists the August 24 Codex MCP-server deprecation and Codex CLI `0.149.1`; neither reports a reset or compensation event. The pages are mutable and provide no complete historical revision trail. |
| [Official Codex usage documentation](https://developers.openai.com/codex/usage) | The developer page returned an internal error in this retrieval. No fact is inferred from the failed request; the Help, pricing, and changelog pages above are the available official documentation basis. |
| [Public Codex releases](https://github.com/openai/codex/releases) | Stable release `0.149.1` was published at about `2026-08-24T00:28Z`; prerelease `0.150.0-alpha.8` was published at `2026-08-24T22:11:43Z` with empty release notes. No visible release material contains a reset, credit, or quota-policy change. These are mechanism/release context only. |
| Public `openai/codex` issues, comments, and PRs | The bounded recent issue search found new public claims about background model usage, post-reset consumption, credit lifecycle, and 5h-limit policy. The recent PR search showed app-server refresh, conversation-title, and image analytics work, but no quota-policy change. No OpenAI staff comment established a reset, credit redemption, universal scope, or cause. |
| [Configured X account](https://x.com/thsottiaux) and [canonical post](https://x.com/thsottiaux/status/2092058556707344708) | The source-native public profile was available and showed `2,719 posts`; its replies timeline failed, so canonical status pages were used for reply context. The timeline exposed the new canonical post below. For the permitted temporary discovery check, only `fetchedAt=2026-08-25T09:08:06.311Z`, `sourceErrors.tibo=null`, and `raw tiboPosts` were read; no forecast, classifier, probability, or derived-score fields were read. X profile, canonical page, and [X-owned oEmbed](https://publish.twitter.com/oembed?url=https%3A%2F%2Fx.com%2Fthsottiaux%2Fstatus%2F2092058556707344708) validated author, canonical URL, full public text, and date. |
| [Preferred mirror profile](https://bsky.app/profile/did:plc:rcaom2u2hfsm3aqab5dfvhxs) | Exact DID `did:plc:rcaom2u2hfsm3aqab5dfvhxs` resolved to the unofficial `@thsottiaux-mirr.selfhosted.social` profile, which showed `501 posts`. It indexed the new mechanism thread at `2026-08-25T01:17:57.722Z`, about `1m14.578s` after the X ID-derived timestamp, and included both new replies. It is discovery/corroboration only and cannot establish X authorship, scope, cause, delivery, or a model label. |
| [Fallback mirror profile](https://bsky.app/profile/did:plc:rcelwndiefenpjvnm6uood4t) | Exact DID `did:plc:rcelwndiefenpjvnm6uood4t` resolved to the unofficial automated `@thsottiaux-bot.eurosky.social` profile, which showed `300 posts`. It indexed the full three-part mechanism thread by `2026-08-25T01:21:52.869Z`, about `5m09.725s` after the X ID-derived timestamp, but omitted the two replies. It is a secondary fallback only; thread splitting, reply omission, lag, and stoppage remain possible. |

The public source range searched was `2026-08-24T09:21:26.518Z` through
`2026-08-25T09:27:34.997Z`. Historical source-native rechecks covered the
public-launch research range through August 25, with focused follow-up on June
29, July 28/29, August 1, August 8/10, August 13, the conditional credit offer,
and the 20M milestone credit. No source supplies a recipient denominator or a
complete nonrecipient set for those records. That absence remains a finding.

## New canonical X evidence

The X profile and canonical status page both named Tibo and `@thsottiaux`,
showed the exact canonical status URL, and exposed the same public text. The
page displayed `9:16 PM · Aug 24, 2026`. Because no source-native
`created_at` field was exposed, the exact UTC timestamp is derived from the X
Snowflake ID and labeled as ID-derived.

| Canonical post | Timestamp basis | Classification and evidence boundary |
| --- | --- | --- |
| [2092058556707344708](https://x.com/thsottiaux/status/2092058556707344708) | X page displayed `9:16 PM · Aug 24, 2026`; Snowflake ID-derived UTC `2026-08-25T01:16:43.144Z`; X oEmbed validated the same text/date | Promised future usage-limit/mechanism change. Tibo says the five-hour limit will return “tomorrow” for Plus across ChatGPT Work and Codex, gives compute-smoothing and accidental-weekly-exhaustion reasons, and says Pro `$100` and `$200` remain excluded for the upcoming months. This is an attributed policy statement, not a reset, credit grant, completed delivery, cause proof, or universal account observation. |
| [2091709346371838240](https://x.com/thsottiaux/status/2091709346371838240) | X Snowflake ID-derived UTC `2026-08-24T02:09:04.912Z`; canonical X and oEmbed validated full text/date | Promised future propagation reply: Tibo says Business propagation should finish within five minutes. A recipient then replied that the reset landed, but that account report supplies no bounded meter transition or universal-delivery evidence. Classify as a promised future reset/scope statement, not a completed reset. |
| [2091957224302092394](https://x.com/thsottiaux/status/2091957224302092394) | X Snowflake ID-derived UTC `2026-08-24T18:34:03.616Z`; canonical X and oEmbed validated full text/date | Usage-drain remediation acknowledgement. It is a mechanism/incident statement and possible detection lead, not a reset, credit grant, causal proof, or confirmation that a fix reached all accounts. |

The new primary post became public about `8h10m51.853s` before this scan cutoff. It is
eligible only for forecasts generated after its public/discovery time; it must
not be inserted into earlier snapshots. “Tomorrow” has no explicit timezone
or rollout boundary, so the detection window remains intentionally unknown.
The new primary post is one future mechanism/limit statement. The Business
reply above does enter the reset-promise corpus as a separate attributed
record; it is not promoted to a live model label.

The canonical page exposed public user replies. They are commentary and
account-specific claims, not independent observer evidence. Replies questioning
the policy's casual-user rationale or saying the author is not a casual user
do not establish delivery, scope, or causation. No reply supplied a bounded
meter transition.

The carried August 24 completed-reset statement
[2091688655828246890](https://x.com/thsottiaux/status/2091688655828246890) remains
an attributed completion statement. It is independent of, and should not be
collapsed with, this new Plus five-hour-limit policy statement.

## Mirror freshness and completeness

The preferred mirror indexed the new mechanism thread at
`2026-08-25T01:17:57.722Z`, about `1m14.578s` after the X ID-derived time; the
fallback indexed the full three-part thread by `2026-08-25T01:21:52.869Z`, about
`5m09.725s` later. The preferred copy included both replies, while the fallback
omitted them. These are observable indexing bounds, not proof of complete
timeline delivery. Neither mirror can validate the X author or prove delivery.
The temporary discovery feed was fetched at `2026-08-25T09:08:06.311Z`; only
`fetchedAt`, `sourceErrors.tibo`, and `raw tiboPosts` were read, with
`sourceErrors.tibo=null`. No forecast, classifier, probability, or derived
score was ingested.

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
where the observer independently bounds events. No new evidence closes the
June 29 reset-plus-credit question or supplies independent recipient/nonrecipient
sets for July 28/29, August 1, or August 13. The August 8/10 promise thread and
the August 23/24 propagation sequence remain separate from the new Plus limit
announcement.

The separate 20M milestone banked credit remains available locally. It is not a
reset redemption, did not change during the August 24 transition, and should
remain a distinct credit state in future research.

## Local observer and project evidence state

At the latest read before the public cutoff, the local observer reported a
sample at `2026-08-25T09:22:44.692Z`: Codex used
`24%`, exhausted `false`, provider anchor `2026-08-31T02:00:26Z`, weekly window
`10080` minutes, and generalized plan tier `individual-paid`. It did not add a
seventh deterministic reset. The anchor had slid from the verified August 24
event's `2026-08-31T00:47:59Z` value without a qualifying usage transition, so
the drift remains schedule/display evidence rather than a reset. The observer
retained `4,595` samples from `2026-08-03T10:16:12.586Z` onward.

The available full-reset credit count remained `1`, granted at
`2026-08-22T00:20:05Z` and expiring at `2026-09-21T00:20:05Z`. No redemption is
established. The separate Spark bucket is excluded from Codex reset labels.
The six published deterministic observations remain August 8 09:23:05.496Z,
August 8 20:32:48.433Z, August 11 00:02:38.929Z, August 13 07:23:16Z, August
20 09:49:14.932Z, and August 24 00:47:59.336Z. No new approval or forecast
label was created. The project evidence state is `6` verified observations,
`1` approved public source, and `17`
pending-review public sources. The three newly filed, forecast-ineligible
pending records are [#22](https://github.com/KyleStay/codex-reset-monitor/issues/22),
[#23](https://github.com/KyleStay/codex-reset-monitor/issues/23), and
[#24](https://github.com/KyleStay/codex-reset-monitor/issues/24); they remain
outside live forecasting until the configured approval workflow permits them.

## New repository-native public signals

The current bounded issue search added these public, unverified records:

- [#40564](https://github.com/openai/codex/issues/40564), opened August 25,
  claims a third-party token plan and background GPT-5.6 Luna use while the
  author was not configuring Luna. It has no staff diagnosis and no bounded
  reset transition. This is a possible background/model-routing depletion lead.
- [#40527](https://github.com/openai/codex/issues/40527), opened August 25,
  claims that post-reset Pro 20x weekly consumption was materially higher than
  before. It supplies one user's percentages, not a controlled cohort or
  provider transition. This is an accounting/allocation contradiction lead.
- [#40524](https://github.com/openai/codex/issues/40524), opened August 25,
  requests an optional flexible mode after the announced Plus five-hour-limit
  restoration. It is policy commentary, not a rollout or reset observation.
- [#40453](https://github.com/openai/codex/issues/40453), opened August 24,
  reports a Pro Team user's expected weekly limit and credits appearing to
  disappear after credit use. It is an unverified credit-lifecycle claim with
  no staff response or bounded before/after transition.
- [#40574](https://github.com/openai/codex/issues/40574) and
  [#40510](https://github.com/openai/codex/issues/40510) add public
  model-routing/accounting claims. They provide no staff diagnosis or
  provider-owned transition and remain mechanism leads only.
- [#40400](https://github.com/openai/codex/issues/40400) reports crashes that
  consume usage. It is a public depletion claim without a bounded reset or
  causal confirmation.
- [#38503](https://github.com/openai/codex/issues/38503), updated in the recent
  rate-limit search, reports intermittent ChatGPT web “too many requests”
  blocking. It is an access/incident negative control, not evidence of a Codex
  reset.
- [#37445](https://github.com/openai/codex/issues/37445) and
  [#35226](https://github.com/openai/codex/issues/35226) remain public
  background-suggestion and compaction-loop depletion anecdotes. They are
  mechanism candidates only, with no staff confirmation.

The configured [OpenAI Community Business-users thread](https://community.openai.com/t/business-users-appear-to-be-missing-the-latest-usage-reset/1392215)
reports that some Business users did not see the August 24 propagation. It
contains no account denominator, bounded meter transition, or official scope
confirmation. It is an independent public contradiction, not a verified
observation. No public issue or community record above changes the confirmed
dataset. The earlier [#40259](https://github.com/openai/codex/issues/40259) and
[#40318](https://github.com/openai/codex/issues/40318) reports received no new
staff comments; no merged quota/reset PR was found.

## Point-in-time-safe pattern audit

This audit compares only evidence public or approved before each evaluated
cutoff with later outcomes. The current public cutoff is
`2026-08-25T09:27:34.997Z`. The observer sample at `09:22:44.692Z` is available
only to the new snapshot and cannot alter any earlier feature snapshot.

| Pattern | Exact sample, date range, evidence classes, and cutoff | Support, contradictions, grade, and change since 2026-08-24 |
| --- | --- | --- |
| Provider-owned bounded transition | `n=6` verified observations, August 8–24; sanitized observer meter transitions and provider anchors; evaluated through the current public cutoff. | No new transition qualified. The latest status moved the provider timestamp without a usage reset, reinforcing that anchor drift alone is insufficient. The strongest usable evidence remains a transition with a materially advanced stable anchor. **Grade A, unchanged.** |
| Explicit future reset promises | `n=10` canonical reset-promise records, June 16–August 24; X-validated attributed posts/replies, discovery times, and later observer bounds; evaluated through the current cutoff. | The August 24 Business reply adds a five-minute propagation promise, but the recipient's “landed” reply is not a bounded observer transition. Historical promise lead times remain about `17m34s` to `51h28m` where independently bounded; June 29 remains unresolved and July 9 missed its stated hour. **Grade C directional, strengthened as a testable signal.** |
| Future mechanism/usage-limit announcements | `n=1` new canonical X statement, August 25; source-native X page, ID-derived timestamp, exact public scope, and mirror discovery records; cutoff `2026-08-25T09:27:34.997Z`. | The Plus five-hour-limit announcement is a precise future detection test, but its timezone, rollout boundary, and execution are unknown. Pro $100/$200 exclusion is stated scope, not universal delivery evidence. **Grade C directional, new.** |
| Completed versus future wording | `n=18` attributed wording records, June 4–August 25; canonical X originals/replies, credits, inferred records, and verified observations; cutoff above. | The new primary adds future limit wording; the two validated replies add future propagation and remediation wording. None is collapsed with the August 24 completed-propagation statement. **Grade A for attribution/classification, C–D for delivery prediction; strengthened classification boundary.** |
| Banked credit versus completed reset | One available local credit, granted August 22, plus prior canonical banked-credit statements and the August 24 transition; observer metadata, X statements, and public credit reports; current cutoff. | Credit count remained `1` across the August 24 transition and latest sample. This supports the local distinction between queued credit and hard reset; no redemption or universal behavior is established. **Grade A local distinction, D breadth; unchanged.** |
| Incident chronology and reset linkage | `n=15` incident/reset contexts, June 3–August 24; official Status chronology, observer events, attributed posts, and public claims; current cutoff. | No new Status incident appeared. The logout incident remains a negative control, and no official incident explains the August 24 reset or the new Plus policy. **Grade A chronology, D reset linkage; unchanged.** |
| Cache, image, compaction, background, and model-routing mechanisms | `n=26` candidate contexts, July 24–August 25; attributed operator statements, official docs, public issue bodies, and relevant PR/release context; current cutoff. | #40564, #40527, #40453, #40574, #40510, #40400, the usage-drain acknowledgement, and older background/compaction reports add heterogeneous depletion and accounting leads. They have no shared transition, denominator, or staff diagnosis. **Grade B candidate mechanism, D prevalence/cause; strengthened, not causal.** |
| Public-report clustering and contradictions | `n=40` focused public records: inherited `n=32` corpus plus eight new focused records (seven GitHub reports and the Business community contradiction), August 19–25; issue/community bodies and public replies; current cutoff. | Business nonrecipient claims, post-reset consumption claims, credit-lifecycle claims, routing/crash reports, and access reports continue to conflict with universal rollout language. No denominator or common-event proof exists. **Grade B divergence, D prevalence; strengthened.** |
| Originals versus replies | Three newly validated Tibo records (one original and two operator replies), August 24–25; source-native X profile/status pages, oEmbed, and exact-DID mirror pages; current cutoff. | The original supplies an attributed future policy statement; one reply supplies a five-minute Business propagation promise and one acknowledges remediation. A recipient's “landed” reply supplies no independent meter transition. **Grade A attribution, C timing, D delivery prediction; strengthened, with no promotion value.** |
| Discovery and mirror freshness/completeness | Three newly validated X records, temporary feed `fetchedAt=2026-08-25T09:08:06.311Z`, and two exact-DID profiles; restricted feed fields only; current cutoff. | Preferred mirror indexed the mechanism thread `1m14.578s` after X and included both replies; fallback indexed the full thread `5m09.725s` after X but omitted replies. Feed freshness is known, while completeness remains unproven. **Grade B freshness, D completeness; strengthened measurement, unchanged limitation.** |
| Reset gaps, cooldown, UTC hour, and weekday | `n=6` verified observations, August 8–24, yielding `n=5` gaps: `11h09m42.937s`, `51h29m50.496s`, `55h20m37.071s`, `170h25m58.932s`, and `85h58m44.404s`; observer transitions and anchors; current cutoff. | The gaps remain heterogeneous and do not support cadence, cooldown, weekday, or UTC-hour inference. The later anchor drift is not a reset. **Grade D, unchanged.** |

The strongest currently supported predictor remains a bounded provider-owned
transition paired with a materially advanced stable provider anchor. The new
post adds a useful, scoped detection test for a Plus five-hour limit, but does
not alter reset probability or establish rollout. A promise identifies a test
window; it cannot prove account-by-account delivery. A banked credit count is
queued capacity, not a completed reset or redemption.

Signals that looked predictive but failed or remain sparse include reset-button
wording without a transition, future policy wording without rollout evidence,
provider-anchor drift alone, universal banked-credit language, cache-hit and
relaying explanations, Fast-mode/subagent anecdotes, background/model-routing
and compaction reports, isolated Status incidents, mirror presence, community
claims, and cadence or weekday inference. The new canonical post strengthens
classification and detection testing while leaving outcome evidence sparse.

## Changes, next tests, and deterministic forecast status

Changes since the prior scan:

- One new canonical X statement was validated as a future Plus five-hour-limit
  mechanism/usage-limit announcement at ID-derived `2026-08-25T01:16:43.144Z`.
  It is not a reset and is not added to the reset-promise count.
- The source-native X profile exposed posts, but its replies timeline failed.
  The configured feed was therefore read only for `fetchedAt`,
  `sourceErrors.tibo`, and raw `tiboPosts`. X-owned oEmbed validated all three
  canonical records.
- Both exact-DID mirrors were inspected. The fallback exposed split copies of
  the new announcement; neither mirror establishes authorship or delivery.
- No new Status incident, official quota-policy release note, verified
  observation, approved source, or model label was found.
- New public issue/community records strengthen background-use, accounting,
  credit-lifecycle, and Business-scope contradiction leads without staff
  confirmation.
- The observer remained at six deterministic resets and one available full-reset
  credit. Its provider timestamp slid without a qualifying transition.

Next observable tests are:

1. Check whether and when the Plus five-hour limit returns after the “tomorrow”
   statement. Record plan/bucket scope and separate policy enforcement from a
   full reset; do not assume an anchor shift is delivery.
2. Track the available credit count and a bounded before/after transition. A
   decrement supports redemption analysis only when paired with qualifying
   meter/access evidence.
3. Seek Business-account receipt/nonreceipt evidence for the August 24
   propagation statement and preserve the scope contradiction separately.
4. Seek staff responses and paired before/after telemetry for #40564, #40527,
   #40524, and #40453; treat silence and bot duplicate notices as no diagnosis.
5. Watch the August 31 GPT-5.4-to-Terra/Luna migration and Codex CLI alpha
   releases for usage-window or display changes; these are mechanism watches.
6. Continue the June 29, July 28/29, August 1, August 8/10, August 13, and 20M
   credit research without rewriting earlier feature snapshots.
7. Recheck the X profile, canonical status pages, exact-DID mirrors, and
   discovery-feed/oEmbed availability. Record retrieval time and omissions.

The live deterministic refresh at `2026-08-25T09:27:34.997Z` produced dataset
`events-6-cutoff-2026-08-25-edec6cd4` and forecast `fc_20260825092734`. The
verified-event, scheduled-event, out-of-cycle, approved-post, and active-incident
inputs remained `6`, `1`, `4`, `0`, and `false`. Time-dependent inputs advanced:
hours since the last confirmed reset rose to `32.6599`, and incident recency
rose to `112.4783` hours. Probabilities stayed `1%` at 1, 3, 6, 12, and 24
hours; the likely interval stayed `2026-08-30T23:17:59Z` through
`2026-08-31T02:17:59Z`, confidence `D`. Performance matured to `n=21`; model
and baseline Brier both improved to `0.0710285714`, so there is no evaluation
win or promotion. No pending source, third-party forecast, classifier, or
earlier feature rewrite affected the result.

## Coverage gaps and blockers

Universal delivery denominators remain unavailable. The June 29 credit
lifecycle, independent July 28/29 and August 1 receipt/nonreceipt sets, the
August 13 breadth, the 20M credit recipient set, and the Business-account scope
remain unresolved. The new GitHub and community records are public claims, not
independent account telemetry. X's replies timeline failed, but all three
known canonical records and X-owned oEmbed remained readable. The restricted
discovery feed was healthy, while its completeness remains unproven. The
exact-DID mirror profiles were readable but have weak completeness and no
source-authoritative created-at metadata. No official source confirms cache-hit,
compaction, conversation-title, model-routing, Fast-mode, or background-worker
causes.
