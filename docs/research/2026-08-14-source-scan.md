# Source scan — 2026-08-14

**Research cutoff:** `2026-08-14T09:27:55Z`. This pass covers public material
published or updated after `2026-08-13T11:52:35Z`, plus bounded follow-up of
June 29 completion/credit and July 28–29/August 1 canonical-ID gaps. It is
research only: no public claim below is a confirmed observation, forecast
feature, or population-wide delivery result.

## Source boundary and retrieval record

Only sources configured in [`data/source-policy.json`](../../data/source-policy.json)
were used: OpenAI Status, official Help/developer material, public
source-native `openai/codex` records, configured `@thsottiaux`, and its exact
discovery/validation fallbacks. No unconfigured account, search snippet,
tracker forecast, or mirror wording is evidence. Public GitHub reports are not
identified or treated as verified observations.

| Surface | Retrieval / permanent source | Classification |
| --- | --- | --- |
| OpenAI Status | Read [incidents API](https://status.openai.com/api/v2/incidents.json) at `2026-08-14T09:20:26Z`; page `updated_at=2026-08-13T23:58:22Z`. Newest time-relevant item: [Free ChatGPT conversation errors](https://status.openai.com/incidents/01KZXVAJQ5XFH7PTM43XVPQWGJ), `2026-08-13T15:19:50Z`–`23:58:22Z`. | **Accepted incident / not a reset.** It describes downstream-provider mitigation for Free conversations, not Codex, credits, compensation, or a reset cause. |
| OpenAI Help | Direct read retried with host access at `2026-08-14T09:20:26Z`; [usage-limit article](https://help.openai.com/en/articles/11369540-codex-and-chatgpt-plan-usage-limits) returned HTTP 403 from Cloudflare. | **Fail closed.** No fresh mutable-Help claim is made. Earlier source-backed mechanism context remains unchanged: normal reset, credits, and applying a banked reset are distinct actions. |
| Official developer surface | Read [ChatGPT & Codex changelog](https://developers.openai.com/codex/changelog) at `2026-08-14T09:20:26Z`; the August 13 entry is “Computer History,” an opt-in desktop feature. | **Accepted non-reset record.** No August 13–14 reset, credit, quota, or compensation announcement. |
| `openai/codex` releases | Read [releases](https://github.com/openai/codex/releases) at `2026-08-14T09:20:26Z`; `rust-v0.148.0-alpha.12`–`.15` were published from `2026-08-13T06:43:33Z` through `2026-08-14T03:00:20Z` with placeholder bodies. | **Accepted non-reset repository evidence.** No release names a reset, credit, or completion. |
| Public issues/comments/PRs/commits | Source-native API pass through `2026-08-14T09:21:47Z`, bounded to post-cutoff records and exact historical threads. | **Accepted as public reports or implementation context only.** No staff-authored broad completion, credit grant, or causal statement was found. |

## Configured Tibo discovery, validation, and freshness

The permitted [`/api/forecast`](https://www.willcodexquotareset.com/api/forecast)
discovery endpoint was read at `2026-08-14T09:19:50Z`; main-lane confirmation
was `2026-08-14T09:19:07.060Z`, reporting `sourceErrors.tibo=null` and `n=29`
raw `tiboPosts` (28 in the preceding scan). It was used only to discover
canonical URLs; no tracker forecast, score, or classifier was imported.

The exact configured mirror profiles resolved as
[`thsottiaux-mirr.selfhosted.social`](https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=did%3Aplc%3Arcaom2u2hfsm3aqab5dfvhxs)
and [`thsottiaux-bot.eurosky.social`](https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=did%3Aplc%3Arcelwndiefenpjvnm6uood4t).
They are discovery-only. The preferred mirror indexed August 13 post
`2087706104814023111` about 13m38s after its `01:01:37Z` copy time; fallback
indexed it about 2m28s after the same whole-second time. This is freshness
information, not delivery timing or completeness proof.

Manual source-native review of [`@thsottiaux`](https://x.com/thsottiaux) at
about `2026-08-14T09:20Z` found new originals
[`2088133823619895712`](https://x.com/thsottiaux/status/2088133823619895712),
[`2088103609477238858`](https://x.com/thsottiaux/status/2088103609477238858),
[`2088019704803897705`](https://x.com/thsottiaux/status/2088019704803897705),
and [`2088017529587573025`](https://x.com/thsottiaux/status/2088017529587573025)
unrelated to reset/credits. X-owned oEmbed reads at `2026-08-14T09:19:50Z`
also confirmed configured author/canonical URLs for unrelated newest candidates
[`2088144272986108305`](https://publish.twitter.com/oembed?omit_script=true&url=https%3A%2F%2Fx.com%2Fthsottiaux%2Fstatus%2F2088144272986108305) and
[`2088144034372128901`](https://publish.twitter.com/oembed?omit_script=true&url=https%3A%2F%2Fx.com%2Fthsottiaux%2Fstatus%2F2088144034372128901).

The latest reset-relevant original remains
[`2087706104814023111`](https://x.com/thsottiaux/status/2087706104814023111),
published `2026-08-13T01:01:37.748Z` by Snowflake derivation and previously
validated through [X-owned oEmbed](https://publish.twitter.com/oembed?omit_script=true&url=https%3A%2F%2Fx.com%2Fthsottiaux%2Fstatus%2F2087706104814023111).
Two bounded thread facts remain **pending and forecast-ineligible**:

- [Reply `2087747795050467627`](https://x.com/thsottiaux/status/2087747795050467627)
  asks whether a team quota will reset. No visible Tibo response/completion
  statement was present. It is a scope/nonrecipient question, not delivery
  proof.
- [Reply `2087960561728569362`](https://x.com/thsottiaux/status/2087960561728569362),
  timestamped `2026-08-13T17:52:45.004Z` by X ID, replies to
  [`2087802393689817118`](https://x.com/thsottiaux/status/2087802393689817118),
  a user report that weekly allowance depletes in 1–2 days then appears full.
  Its canonical page validated author/text/thread/date, but oEmbed returned no
  usable payload. Tibo says only that the report seems odd and will be looked
  into. This is an attributed investigation acknowledgement, **not** a reset,
  completion, cause, or account-level confirmation. It became pending-review
  public-source issue #9 at `2026-08-14T09:22:12Z` and is forecast-ineligible.

The preferred mirror carried the latter reply at `17:52:45Z`, indexed
`18:01:19.964Z` (about 8m35s); fallback did not carry it in its recent feed.
The preferred mirror preserves some replies but lags about 8–16m; fallback
indexes originals quickly but splits long threads and omits replies. Neither
can close historical gaps.

## Recent repository and observer evidence

| Record | Classification | Reason |
| --- | --- | --- |
| [#38367](https://github.com/openai/codex/issues/38367), `2026-08-13T12:28:26Z`; [#38524](https://github.com/openai/codex/issues/38524), `2026-08-14T08:13:12Z` | Pending public reports | They allege plan/quota consumption or accounting mismatch, with no bounded full-meter transition, staff attribution, or breadth. |
| [#38379](https://github.com/openai/codex/issues/38379), `2026-08-13T13:43:04Z` | Pending contradiction | A newly upgraded Plus account reports a full displayed seven-day meter while enforcement rejects work and the displayed timestamp advances. This is entitlement/display/enforcement divergence, not a reset. |
| [#38497](https://github.com/openai/codex/issues/38497), `2026-08-14T05:20:12Z` | Pending contradiction | Business member reports usable workspace credits while member meter remains 0%; credit-pool capacity must not be counted as a hard reset. |
| [#38437](https://github.com/openai/codex/issues/38437), [#38453](https://github.com/openai/codex/issues/38453), [#38495](https://github.com/openai/codex/issues/38495) | Pending consumption reports | Long-running-work consumption reports do not establish reset completion or cause. |
| [#33344 comment `5283508387`](https://github.com/openai/codex/issues/33344#issuecomment-5283508387), `2026-08-13T16:31:25Z` | Pending nonrecipient/credit contradiction | A Business account reports unchanged weekly meter/anchor while tasks use promotional/referral credit, and says a coworker did not receive the claimed 15M reset. It is self-reported, can involve distinct buckets, and has no denominator; it neither disproves nor quantifies delivery. |
| Main-lane observer status, `2026-08-14T09:16:11.556Z` | Accepted local operational state; no new public event | Four published detections, no pending publication or available credit, primary meter 24%, anchor `2026-08-20T09:49:09Z`. Drift from issue #7's `07:23:15Z` anchor did not meet deterministic transition criteria, so it is not a reset. |

No row qualifies as a confirmed observation without a separately structured,
maintainer-labeled `verified-observation` issue. No candidate meets the
historical-inference threshold of one official/staff corroboration or two
independent same-event public reports. No probability, classifier import, or
model change follows.

## Bounded historical follow-up

### June 29 hard-reset completion and banked-credit breadth — unresolved

The canonical [June 29 announcement](https://x.com/thsottiaux/status/2071740419030053227) promised a hard reset within an hour and a separate banked reset within 24 hours. It is an **accepted attributed promise**, not proof that either action completed for all accounts. Exact-thread review found no staff completion statement. Existing [#30680](https://github.com/openai/codex/issues/30680), [#30641 comment `4839142506`](https://github.com/openai/codex/issues/30641#issuecomment-4839142506), [#30726](https://github.com/openai/codex/issues/30726), [#30660 comment `4840688777`](https://github.com/openai/codex/issues/30660#issuecomment-4840688777), and [#30686 comment `4861400899`](https://github.com/openai/codex/issues/30686#issuecomment-4861400899) remain mixed active-window, bucket, and credit reports. [#30641 comment `4839283792`](https://github.com/openai/codex/issues/30641#issuecomment-4839283792), `2026-06-30T02:17:58Z`, preserves account-specific nonreceipt alongside a same-tier recipient claim: divergence, not breadth. The official [fast-depletion incident](https://status.openai.com/incidents/01KW2E6W0503W4NXJNCVAG8V6T) does not document delivery. Completion time, recipient breadth, banked-credit breadth, and an exclusive cause remain **fail closed**.

### July 28–29 and August 1 canonical-ID gap — still fail closed

No configured discovery source supplied a canonical numeric `x.com/thsottiaux/status/<id>` URL for July 28, July 29, or August 1 mirror-only wording. A mirror whole-second time cannot safely reconstruct an X Snowflake. The existing August 1 inference retains its prior independent GitHub-report support and uncertainty, but mirrors cannot upgrade it; July 28 and July 29 remain unaccepted. The bounded current GitHub pass found no canonical URL, staff completion, or independent closure.

## Point-in-time-safe pattern audit

Counts include only material public and known to the project before the evaluated outcome. Publication and project discovery/approval time are both cutoffs; tracker forecasts/classifiers and retrospective discovery cannot enter older snapshots.

| Pattern | Exact `n`, range, classes | Cutoff, examples, lead-time range | Missing cases, confidence, change |
| --- | --- | --- | --- |
| Explicit future announcements and later signals | `n=7`, June 16–August 8; canonical attributed posts, public account/bucket reports, sanitized anchors, verified transitions. | Publication + project-discovery cutoff. July 10: about 6h15m/11h56m; July 11: about 17m34s; August 8 to Aug 10/11 bound: about 48h13m–51h28m. | June 16 about 29h20m after 24h promise; July 9 about 14h22m after one-hour claim; June 26 lacks exact transition; June 29 unresolved; Aug 13 retrospective. **C directional/A individual verification; unchanged.** |
| Short rollout windows | `n=3` testable announcements, July 9–11, plus `n=4` one-account server-window transitions. | Announcement/report cutoff; observed 17m34s–11h56m. | July 9 missed stated hour by about 14h22m; no denominator; Aug 13 bound predates project discovery. **B alignment/C generalization; unchanged.** |
| Completed versus future wording | `n=7`, June 4–August 11; canonical completion wording, inferences, reports, verified observations. | Statement-publication cutoff; no lead time for completed wording. | Meter/enforcement/plan/bucket/nonrecipient divergence; Aug 13 future wording only. **A wording/B some delivery/C universal scope; unchanged.** |
| Hard reset versus banked credit | `n=5`, June 12–July 13; canonical mixed action/grant records, Help mechanism context, implementation evidence, nonreceipt reports. | Publication cutoff; no lead time. #38497/#33344 show add-on/workspace/promotional credit can coexist with unchanged weekly display. | No receipt denominator or staff completion. **A mechanism/B–C delivery; strengthened for contradiction only.** |
| Incident, milestone, cause context | `n=8`, June 3–August 13; historical incident/reset sequences, launch/milestone contexts, August 10–11 errors, Aug 11 Codex/Work incident, Aug 13 15M post, Free-chat incident. | Official update/post cutoff; historical resolution-to-first-reset-statement about 2h34m–13h17m. | New incident is non-Codex and names no compensation. **B context/D cause or universal claim; strengthened by negative control.** |
| Cadence and UTC timing | `n=4` verified resets August 8–13; `n=3` reset intervals; classified canonical corpus `n=15`, June 4–July 14. | Observation/post cutoff; first two intervals 11h09m42.937s and 51h29m50.496s; newest bounded. | Gaps, 6,763-minute out-of-cycle event, and nonqualifying anchor drift do not establish hour/weekday/cooldown. **D; unchanged.** |
| Public-report contradictions | `n=6` divergence clusters, June 17–August 14; `n=14` post-cutoff display/enforcement/consumption/plan reports including #38367, #38379, #38437, #38453, #38495, #38497, #38524, #33344 comment. | Report-publication cutoff; reports minutes to over a day after statements, not delivery bounds. | Self-selection/no denominator prevent prevalence or delivery estimates. **B divergence/D prevalence; strengthened for divergence only.** |
| Discovery/mirror lag | `n=4` recent canonically validated originals and `n=8` exact mirror copies, August 11–13. | Feed `fetchedAt=2026-08-14T09:19:07.060Z`; observed lag about 30s–13m38s; new reply about 8m35s in preferred only. | Current `n=29` feed drops old candidates; mirrors omit/split replies and lack historic canonical URLs. **B recent discovery/D historical completeness; strengthened for explicit incompleteness.** |

## Deterministic refresh result

The main lane refreshed at `2026-08-14T09:19:30.800Z`: four verified observations, two Codex-relevant official incidents, one approved public source, zero rejected records, and zero duplicates. All horizons remain 1%; likely interval remains `2026-08-20T03:11Z`–`2026-08-20T11:35Z`, confidence D. Performance remains `n=10`, Brier `0.12326`; no model was promoted. This refresh does not make pending signals feature-eligible retroactively.

## Result and next test

No new reset, banked-credit grant, broad-rollout completion, official cause, or forecast-eligible public source qualified. New evidence reinforces separation among usage consumption, plan entitlement, credits, displayed meter, enforcement, and reset timing. The August 13 15M announcement remains a future attributed statement with individual verified transition only as retrospective context; new questions, acknowledgement, and nonrecipient report do not establish scope. Next: seek staff completion/credit evidence, independently timed transitions without mistaking credits for resets, and an allowed July 28/29/August 1 canonical URL; keep June 29's two actions separate.
