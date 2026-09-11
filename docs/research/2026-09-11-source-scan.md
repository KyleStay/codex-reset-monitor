# Source scan for 2026-09-11

Research cutoff: `2026-09-11T09:20:37Z` (UTC). The prior cutoff was
`2026-09-10T09:25:03.300Z`. This note is a bounded, point-in-time-safe source
audit. It records the new observer-confirmed event and public evidence without
turning social discovery, community reports, incidents, or third-party
forecasts into confirmed population resets. This source-only lane wrote this
note only; it did not run `update:data`, create issues, or publish.

## Result

One new maintainer-labeled observation qualified. Issue
[#57](https://github.com/KyleStay/codex-reset-monitor/issues/57) records a
privacy-minimized local transition from `99%` used to `0%` between
`2026-09-10T13:46:27.782Z` and `2026-09-10T13:51:33.628Z`. The provider reset
anchor advanced from `2026-09-15T01:26:01Z` to `2026-09-17T13:51:33Z`, and the
available reset-credit count fell from `3` to `2`. This is classified as a
verified banked-reset redemption/full-window refresh for one individual-paid
account. It is distinct from an automatic/global reset; it does not establish
delivery to other accounts or a population cause. The observer records the
credit transition but not a user-interface action, so the redemption
classification is account-state evidence rather than proof of the user's
button-click sequence.

No new public source establishes a second account's delivery, a recipient
denominator, or a cause. The configured Tibo feed exposed 17 post-cutoff
candidates; all 17 were validated through X-owned oEmbed as Tibo, but none is
a qualifying reset promise or completion. A generic reply mentions “the
occasional reset,” and an original explains that $200 Pro subscriptions were
paused to protect Astra capacity; both remain attributed context only.

## Retrieval record and source boundary

All times are UTC. Dynamic pages can change after retrieval. I retained only
canonical URLs, public publication/update times, neutral summaries,
classifications, retrieval times, and the observer fields allowed by the
project contract. I did not read or retain conversations, prompts, responses,
credentials, cookies, account identifiers, session history, screenshots, or
logs. The approved discovery feed was read only for `fetchedAt`,
`sourceErrors.tibo`, and raw `tiboPosts`; its forecast, probabilities,
classifier fields, `tiboSignal`, `tweetAssessment`, and derived scores were
not used.

| Source | Bounded result |
| --- | --- |
| [OpenAI Status incidents API](https://status.openai.com/api/v2/incidents.json) and [ChatGPT Work incident](https://status.openai.com/incidents/01M26DX2PP1AFHGJK5E4M6S2J6) | Five records were created or updated after the prior cutoff: an existing shared-project incident updated at `14:28:15Z`, ChatGPT Work errors (`19:49:49Z–21:30:02Z`), support-response delays (`19:53:26Z–21:48:32Z`), Europe ChatGPT errors (`07:53:08Z` onward, monitoring at `08:37:26Z`), and GPT-5.6 Sol API errors (`09:08:15Z` onward). None mentions a quota reset, credit, compensation, or usage-meter restoration. The September 9 unexpected-reset incident remains the relevant prior negative/positive control. |
| [Banked Codex resets Help](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work) | Retrieved through the cutoff; page says “Updated: 2 days ago.” It distinguishes a user-applied banked reset from an automatic/global reset, says a full banked reset refreshes five-hour and weekly windows and changes the weekly date, and says eligibility/delivery vary. It remains mechanism evidence, not an account receipt. |
| [Codex App Server documentation](https://learn.chatgpt.com/docs/app-server) | The official contract documents `account/rateLimits/read`, named buckets, usage percentage, window duration, reset timestamp, and `rateLimitResetCredits.availableCount`. It separately documents `account/rateLimitResetCredit/consume` outcomes and instructs clients to refetch limits afterward. This supports the observer evidence class and the credit-count interpretation; it is not itself an event. |
| [OpenAI News](https://openai.com/news/) and [Release notes](https://openai.com/products/release-notes/) | September 10 News items cover ChatGPT for Financial Services, GPT-Live-1, and the Agents API. The release-note page has no September 10–11 reset, quota, or credit-accounting entry; the latest visible Codex entry is September 3. These are rollout/product context, not reset evidence. |
| Public [openai/codex issue feed](https://api.github.com/repos/openai/codex/issues?state=all\&since=2026-09-10T09%3A25%3A03Z\&per_page=100), [commits](https://github.com/openai/codex/commits/main/), [pull requests](https://github.com/openai/codex/pulls), and [releases](https://github.com/openai/codex/releases) | The bounded API returned 86 non-PR issue records, 43 keyword-matched for reset/limit/usage/credit/capacity terms, 62 commits, 63 first-page PR records updated after the cutoff, and nine releases. User reports add contradictions; no reviewed comment supplied OpenAI staff diagnosis or a provider-bounded second-account transition. The client commit [102fc57e](https://github.com/openai/codex/commit/102fc57e4ac485f7a669d3bc6a8994335c3fbe46) distinguishes HTTP quota errors from rate-limit errors; it changes error mapping, not ChatGPT reset accounting. |
| [Configured Tibo profile](https://x.com/thsottiaux) and X-owned [oEmbed](https://publish.twitter.com/oembed) | Source-native X rendered `Tibo (@thsottiaux)`, `2,935 posts`, and the newest original post. All 17 post-cutoff candidate URLs passed oEmbed with author `Tibo`, author URL `https://x.com/thsottiaux`, matching canonical URL, public text, and matching calendar date. Exact UTC was derived from each X Snowflake ID because oEmbed does not expose `created_at`. |
| [Approved discovery feed](https://www.willcodexquotareset.com/api/forecast) | `fetchedAt=2026-09-11T08:59:41.725Z`, `sourceErrors.tibo=null`, 33 raw Tibo posts, 17 after the prior cutoff. Only raw posts were used for candidate discovery. |
| [Preferred exact-DID Bluesky mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcaom2u2hfsm3aqab5dfvhxs\&limit=100) and [fallback exact-DID mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcelwndiefenpjvnm6uood4t\&limit=100) | Preferred mirror contained all 17 post-cutoff records; indexing lag ranged from about 28 seconds to 14m55s and one long post was truncated. Fallback contained 7/17, split the Pro-capacity post into three parts, and omitted current replies. Both remain discovery/corroboration aids only. |

## Verified observer transition

The latest permitted observer status was sampled at
`2026-09-11T09:18:52.304Z`:

- primary `codex` bucket: `usedPercent=59`, `windowDurationMinutes=10080`,
  `resetsAtUtc=2026-09-17T13:51:40Z`, `exhausted=false`, generalized plan
  `individual-paid`;
- `8,593` retained samples from `2026-08-03T10:16:12.586Z` onward;
- `12` published/detected full-reset transitions, latest issue #57;
- `2` available reset credits, both still `available`, granted September 4
  and 5 and not shown as redeemed through the latest sample;
- separate Spark five-hour and weekly buckets were at zero use and remain
  excluded from the primary Codex event count.

Issue #57 is a verified observation because it carries both
`reset-observation` and `verified-observation`, and its structured fields pass
the repository transition gate. The 99%→0% meter change and material anchor
advance establish a full-window refresh for this account. The simultaneous
3→2 credit-count change supports classifying it as a banked-reset redemption;
it does not prove population delivery, a specific UI action, or cause.

## New attributed public signals

The 17 validated candidates and their ID-derived UTC times were:

| Post | ID-derived UTC | Classification |
| --- | --- | --- |
| [Occasional-reset reply](https://x.com/thsottiaux/status/2098300424520687965) | `2026-09-11T06:39:40.399Z` | Generic commentary replying to a user about service; not a promise, completion, or delivery receipt. |
| [Spark retirement](https://x.com/thsottiaux/status/2098300998968357218) | `2026-09-11T06:41:57.358Z` | Product/mechanism context: says GPT-5.3-Codex-Spark will be retired next week; no reset statement. |
| [Astra capacity / Pro pause](https://x.com/thsottiaux/status/2098113585683808624) | `2026-09-10T18:17:14.549Z` | Attributed capacity and subscription-availability statement. It says existing accounts are unaffected; it does not establish a reset or cause. |
| [Astra unchanged reply](https://x.com/thsottiaux/status/2098127460567232568) and [follow-up](https://x.com/thsottiaux/status/2098131108001181952) | `18:12:22.579Z` and `19:26:52.195Z` | Attributed “no changes since launch” mechanism context, not quota evidence. |
| Remaining 13 candidates | `2026-09-10T17:43:21.912Z`–`2026-09-11T06:59:05.013Z` | Product, launch, reply, or general commentary; none qualifies as a reset promise, completion, grant, redemption, or usage-window change. |

The preferred mirror reproduced the candidates but sometimes omitted parent or
long-post context. The fallback split the Pro pause into three records and
missed all current replies. Neither mirror can establish X authorship, account
delivery, plan breadth, or causation.

## Public reports and contradictions

The bounded public issue set remains user evidence, not confirmed reset data.
Representative new or updated records include:

- [#44703](https://github.com/openai/codex/issues/44703) reports apparent idle
  depletion after September 9 on separate Pro and Plus accounts. It is a
  useful cross-account accounting hypothesis, but has no provider samples,
  controlled before/after bounds, or staff diagnosis.
- [#44685](https://github.com/openai/codex/issues/44685) reports a Business
  weekly meter going from 0% to 100% in under nine hours and requests a
  server-ledger audit. A follow-up adds another user report; neither is a
  provider receipt.
- [#44663](https://github.com/openai/codex/issues/44663) describes a Pro 20x
  lockout followed by restored access and conflicting reset dates. The report
  explicitly keeps the date mismatch separate from the September 9 incident
  and has no independent observer transition.
- [#44199](https://github.com/openai/codex/issues/44199) retains a cluster of
  abrupt 0% reports and later partial restorations. Follow-ups include both
  nonrenewal/display explanations and users saying stored resets were not
  consumed, so the cluster is contradictory and cannot establish one cause.
- [#44673](https://github.com/openai/codex/issues/44673) and [#44719](https://github.com/openai/codex/issues/44719)
  describe unusually rapid consumption or possible cross-surface double
  counting. They are depletion/accounting leads, not reset observations.

Reviewed comments were GitHub duplicate notices or user follow-ups. No OpenAI
staff diagnosis, account-bound transition, recipient denominator, or
maintainer `verified-observation` label appeared in this public issue set.

## Historical leads and ledger decision

The source-native rechecks found no post-cutoff change resolving the June 29
reset-plus-credit question ([#30726](https://github.com/openai/codex/issues/30726)),
the July 28/29 breadth and nonrecipient contradictions ([#35952](https://github.com/openai/codex/issues/35952),
[#36170](https://github.com/openai/codex/issues/36170)), August 1 delivery and
metering contradictions ([#36436](https://github.com/openai/codex/issues/36436),
[#36468](https://github.com/openai/codex/issues/36468), [#36481](https://github.com/openai/codex/issues/36481)),
or the August 8/10 promise thread ([promise](https://x.com/thsottiaux/status/2086189414292865249),
[context](https://x.com/thsottiaux/status/2086800050630676504),
[interpretation](https://x.com/thsottiaux/status/2086800639120888014)).
The September 9 compensation statement remains pending issue
[#56](https://github.com/KyleStay/codex-reset-monitor/issues/56): it promises
replacement banked resets after failed applications, but no replacement
receipt or affected-user denominator was found. No historical feature snapshot
was rewritten.

## Point-in-time-safe pattern audit

Grades are descriptive evidence grades, not probabilities: `A` is
provider/observer-owned, `B` is public repository/report evidence, `C` is an
attributed public statement or support mechanism reply, and `D` is a
population, causal, or predictive inference.

| Pattern | Exact sample, range, cutoff, and evidence classes | Support, contradiction, lead time, grade | Change |
| --- | --- | --- | --- |
| Provider-owned bounded transition | `n=12` verified observations, `2026-08-08T09:23:05.496Z`–`2026-09-10T13:51:33.628Z`; observer transitions, anchors, credit state, and verified issues; evaluated at the current cutoff. Eleven gaps span `11h09m42.937s`–`195h30m43.288s`, with the new latest gap `60h22m45.249s`. | The 99%→0% change plus a stable advanced anchor is `A` for this account. Population breadth remains `D`; no second account was verified. The strongest detector remains a bounded meter/access transition, not the anchor alone. | **Strengthened** |
| Verified banked-reset redemption/full-window refresh | `n=1` paired credit/meter event on September 10; issue #57 and read-only observer fields; cutoff above. | Credit count fell `3→2` while usage fell `99%→0%` and the weekly anchor advanced by `6,454` minutes. This supports a local banked-reset redemption/full-window refresh (`A` account state), but no UI action, recipient breadth, or cause beyond that account state (`D`). | **New** |
| Automatic/global versus banked reset | `n=12` transitions, August 8–September 10; Help mechanism text plus observer credit snapshots. Prior recorded transitions with credit snapshots were unchanged; #57 is the first paired count decrease in the retained ledger. | The local credit count is now a useful discriminator, but the new event weakens any blanket rule that every observed reset is automatic. Help still clearly separates the mechanisms; population inference remains `D`. | **Strengthened discriminator; prior simple separation weakened** |
| Attributed Tibo signals | `n=17` new candidates, `2026-09-10T17:43:21.912Z`–`2026-09-11T06:59:05.013Z`; X source-native profile, oEmbed, feed discovery, and mirrors; cutoff above. | `17/17` author/URL/text/date validations passed. One generic reset reply and one capacity statement supplied no independent receipt or qualifying promise. Mirror coverage was 17/17 preferred and 7/17 fallback, with reply/context loss. Grade `A` for attribution, `D` for delivery/prediction. | **Unchanged as a predictor; strengthened as a negative-control set** |
| Status incident linkage | `n=5` created/updated records after the prior cutoff; Status chronology and observer event; cutoff above. | Work, support, Europe, Sol API, and shared-project records contain no quota-reset or compensation statement. The September 9 unexpected-reset incident remains a separate prior episode; no source links it to issue #57. Grade `A` chronology, `D` reset/cause linkage. | **Strengthened negative controls** |
| Public usage/depletion clustering | `n=43` keyword-matched non-PR issue records among `n=86` non-PR records, `2026-09-10T09:25:03Z`–`2026-09-11T09:11:28Z`; issue bodies/comments; cutoff above. | New reports cover idle depletion, rapid consumption, possible overcounting, lockout/date mismatch, and restored access. No provider denominator, staff diagnosis, or controlled transition; reports are contradictory. Grade `B` for divergence, `D` for prevalence/cause. | **Strengthened contradiction coverage** |
| Releases and implementation activity | `n=62` commits, `n=63` first-page PR updates, `n=9` releases; same bounded interval. | No reset-policy, quota-restoration, or credit-accounting change. The HTTP quota-error mapping commit is an API error-classification change only. Grade `A` chronology, `D` event linkage. | **Unchanged** |
| Cadence, cooldown, weekday, and UTC time | `n=12` heterogeneous observer transitions and `n=11` gaps, August 8–September 10; observer/verified issues; current cutoff. | Gaps and timing classes mix scheduled, out-of-cycle, and now credit-coupled events. The range is too small and heterogeneous for a cadence or weekday rule. Grade `D`; no reliable prospective lead time. | **Unchanged; simple rule remains refuted** |

## Predictors, failures, and next detection tests

The strongest supported detector remains an exhausted-to-available transition or
a near-zero meter transition paired with a materially advanced, stable provider
anchor. The new event adds a second state variable: a simultaneous decrease in
`rateLimitResetCredits.availableCount` supports local banked-redemption
classification, while unchanged credits support—but do not prove—an automatic
or global reset. Neither signal establishes delivery to other accounts.

Signals that remain failed or too sparse are cadence/weekday/UTC rules, public
issue volume, Astra demand or capacity context, product launches/retirements,
mirror text without canonical validation, display-only changes, and broad
attributed announcements. The generic “occasional reset” reply is not a
prospective promise. The September 9 incident, September 10 Work incident,
and September 10–11 capacity reports should remain separate candidate
episodes unless provider evidence links them.

Next observable tests:

1. Follow the primary account through the September 17 anchor and require a
   bounded usage/access transition before labeling another reset. Track the
   two available credits separately and record any future count change only
   from the read-only observer fields.
2. Recheck issue #56 and the canonical replacement statement for a receipt or
   correction. A promise remains a banked-reset grant signal, not completed
   delivery.
3. Seek an independent recipient/nonrecipient pair for the September 9
   incident and for the September 10–11 Astra-capacity period. Preserve plan,
   bucket, enforcement, display, and credit state separately.
4. Continue the June 29, July 28/29, August 1, and August 8/10 historical
   checks without inserting late-discovered social evidence into earlier
   feature snapshots.

## Forecast and verification impact

This lane did not run `npm run update:data` or `npm run verify`, and it made no
generated-data or source-registry change. The parent live refresh already
includes 12 verified observations, five official incidents, four approved
public sources, and no rejected or duplicate records. Repository code reports
`1%` at all 1/3/6/12/24-hour horizons, with a likely interval of
`2026-09-17T07:35:21Z–20:07:45Z`, confidence `D`; performance is `n=37` with
model and baseline Brier `0.09646216216216223`. No model was promoted and no
earlier point-in-time feature snapshot was rewritten. Public Tibo candidates,
GitHub reports, incidents, mirrors, and the September 9 replacement promise
remain outside approved reset-signal inputs unless the repository's promotion
and labeling gates later accept qualifying evidence.
