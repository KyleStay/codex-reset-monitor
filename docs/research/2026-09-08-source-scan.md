# Daily source scan for September 8, 2026

Research cutoff: `2026-09-08T09:31:02.032Z`

Prior cutoff: `2026-09-07T09:22:56.371Z`

This scan covers the September 7 to 8 reset episode and checks unresolved
evidence back to the public launch of Codex usage limits. It keeps verified
account transitions, official statements, operator promises, completed-action
wording, banked credits, incidents, and public reports separate. The official
primary-source lane is recorded in
[`2026-09-08-primary-source-scan.md`](./2026-09-08-primary-source-scan.md).

## Coverage and privacy boundary

I checked OpenAI Status and Help, official Codex documentation and releases,
public `openai/codex` issues, comments, commits, and pull requests, the exact
configured Tibo X profile, the approved discovery feed, and both exact-DID
Bluesky mirrors. Historical follow-up covered the June 29 reset-plus-credit
promise, July 28 and 29, August 1, August 8 and 10, August 30 and 31, Business,
20X, paid-reset, banked-credit, Astra-depletion, and staff-diagnosis gaps.

The discovery feed was read only for `fetchedAt`, `sourceErrors.tibo`, and raw
`tiboPosts`. I did not read or retain its forecast, classifier, probabilities,
signals, or scores. The observer data below comes only from the permitted
privacy-minimized rate-limit status. No conversations, prompts, responses,
code, account identifiers, credentials, cookies, session history, screenshots,
or logs were read or retained.

| Source | Range and result |
| --- | --- |
| [OpenAI Status API](https://status.openai.com/api/v2/incidents.json) | No incident was created or updated after the prior cutoff. Existing September 3 to 4 incidents remain resolved and contain no reset, credit, compensation, or quota-restoration statement. |
| [Banked-reset Help](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work) | Source-native `updatedAt=1788842007.365`, or `2026-09-08T04:33:27.365Z`. The page now says OpenAI provided a September 7 global reset to Plus, Pro, and Business users. It distinguishes the direct reset from saved banked resets and says eligibility and delivery can vary. |
| [Codex app-server documentation](https://learn.chatgpt.com/docs/app-server) | The current contract still exposes named rate-limit buckets, use percentage, window duration, next-reset time, and a separate earned-reset-credit ledger and consume action. This is mechanism evidence, not an account event. |
| [Codex releases](https://github.com/openai/codex/releases) | Pre-release `0.154.0-alpha.6` was published at `2026-09-07T18:03:36Z` with an empty release marker and no reset or quota note. |
| Public `openai/codex` repository | The bounded primary-source lane reviewed 68 post-cutoff commits/PRs. None changed reset policy, quota restoration, or credit accounting. The rate-limit label returned 37 newly created issues after the cutoff. |
| [Configured Tibo profile](https://x.com/thsottiaux) | The public source-native page rendered the exact `@thsottiaux Codex & ChatGPT` account and 2,902 posts. It showed both the promise and completion posts. The unauthenticated Replies view was not needed for discovery. |
| [Approved discovery feed](https://www.willcodexquotareset.com/api/forecast) | Healthy at `fetchedAt=2026-09-08T09:01:15.669Z`, with `sourceErrors.tibo=null`. It returned 12 post-cutoff numeric candidates. |
| [Preferred mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcaom2u2hfsm3aqab5dfvhxs&limit=100) | Covered 12 of 12 candidates. Observed indexing lag ranged from `82.693s` to `726.657s`. |
| [Fallback mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcelwndiefenpjvnm6uood4t&limit=100) | Covered 4 of 12 candidates, split the long promise into two posts, and omitted all current replies. Unique-candidate lag ranged from `83.665s` to `262.062s`. |

## Verified observer transition

The local observer published [verified issue #52](https://github.com/KyleStay/codex-reset-monitor/issues/52)
for an eleventh provider-owned reset:

- prior sample `2026-09-08T01:23:45.689Z`, at 13% used;
- observed reset `2026-09-08T01:28:48.379Z`, at 0% used;
- prior anchor `2026-09-14T02:32:39Z`;
- new anchor `2026-09-15T01:26:01Z`;
- 8,704 minutes early versus the prior anchor, so it is out of cycle;
- all three banked credits remained available before and after.

The latest sanitized sample at `2026-09-08T09:18:16.322Z` showed 5% used,
the same September 15 anchor, 7,788 retained samples, 11 published detections,
and no pending publication. The separate Spark five-hour and weekly buckets
remained at zero use and are not reset evidence for the primary paid bucket.

The unchanged credit count rules out a banked-credit redemption for this
account. One account does not establish simultaneous delivery, recipient
breadth, or cause.

## Canonical Tibo evidence

All 12 post-cutoff candidates returned X-owned oEmbed records with author
`Tibo`, author URL `https://x.com/thsottiaux`, the exact canonical status URL,
public text, and the matching calendar date. Exact UTC uses the X Snowflake ID
because oEmbed does not expose `created_at`.

| Post | ID-derived UTC | Classification and relation to the observer |
| --- | --- | --- |
| [Global reset promise](https://x.com/thsottiaux/status/2097043464538264003) | `2026-09-07T19:24:57.786Z` | Promised a global usage reset for paid subscriptions around 6pm PST. The PST label is ambiguous during September daylight time. The observer transition followed `6h03m50.593s` later. Pending issue [#53](https://github.com/KyleStay/codex-reset-monitor/issues/53). |
| [“We are so back”](https://x.com/thsottiaux/status/2097088586843816330) | `2026-09-07T22:24:15.782Z` | Ambiguous context only. It does not say a reset completed. |
| [Banked-use reply](https://x.com/thsottiaux/status/2097088648768635068) | `2026-09-07T22:24:30.546Z` | “My condolences” in reply to a user claiming a banked reset. It supplies no provider record or redemption proof. |
| [Completion announcement](https://x.com/thsottiaux/status/2097174560412246215) | `2026-09-08T04:05:53.478Z` | Attributed completed-hard-reset wording. It followed the observer transition by `2h37m05.099s`. Pending issue [#54](https://github.com/KyleStay/codex-reset-monitor/issues/54). |
| [Schedule reply](https://x.com/thsottiaux/status/2097175062566846501) | `2026-09-08T04:07:53.201Z` | “There is no schedule, only resets” is commentary, not a mechanism contract or event bound. |
| [Two-reset reply](https://x.com/thsottiaux/status/2097183639356489952) | `2026-09-08T04:41:58.067Z` | Says Tibo reset usage twice during an expensive request. The action type, account scope, credit state, and times are missing, so it remains nonqualifying action commentary. |

The other six validated posts concern internal tooling, Sign in with ChatGPT,
product jokes, a user's below-10% reset claim, or launch work. None is a hard
reset, future promise, banked grant, redemption, limit change, or supported
cause.

The preferred mirror reproduced all 12 records but truncated one long reply.
The fallback reproduced four originals, split the promise, and omitted replies.
Both remain discovery-only. Their text cannot establish X authorship, account
delivery, plan breadth, or causation.

## New official record

The Help revision supplies the first official statement for this episode. It
says the September 7 action was a global reset for Plus, Pro, and Business,
applied directly rather than banked. I created approved source issue
[#55](https://github.com/KyleStay/codex-reset-monitor/issues/55) with the exact
source-native revision timestamp and `completed_hard_reset` classification.
The source became eligible only after its current publication and discovery
cutoff. It does not rewrite earlier feature snapshots.

The official page narrows the mechanism question, but not breadth. It says
eligibility and delivery may vary by plan, region, workspace, and offer. The
page's event date, one provider-bound transition, and the canonical operator
thread support a day-precision inferred September 7 action for paid plans.
They do not support universal or simultaneous delivery.

## Public reports and contradictions

The 37 new rate-limit-labeled issues include 15 capacity-titled reports, 19
usage, limit, quota, burn, or token-titled reports, and six reset, credit, or
recharge-titled reports. These title groups overlap. Comment checks on 12
representative issues found no OpenAI staff diagnosis or provider-bound reset
evidence.

- [#43655](https://github.com/openai/codex/issues/43655) is a Plus nonreceipt
  report at `2026-09-08T02:42:50Z`, after either interpretation of the stated
  6pm clock but before the `04:05:53Z` completion announcement. It contradicts
  simultaneous delivery, not eventual delivery.
- [#43643](https://github.com/openai/codex/issues/43643) reports a voluntary
  banked redemption roughly 41 hours before the global reset. It illustrates
  interaction costs but does not identify the global delivery time.
- [#43549](https://github.com/openai/codex/issues/43549) alleges an unintended
  banked-credit consume call. It is a consent and redemption-result report,
  not evidence that the global action used banked credits.
- [#43574](https://github.com/openai/codex/issues/43574) initially reported a
  70% to 0% drop, then the author said the subscription had not renewed. It is
  a corrected entitlement/display case, not a reset.
- [#43682](https://github.com/openai/codex/issues/43682),
  [#43722](https://github.com/openai/codex/issues/43722), and
  [#43738](https://github.com/openai/codex/issues/43738) contain a large
  capacity-error cluster. Reports differ by account and bucket, and some show
  full remaining allowance while enforcement fails. OpenAI Status has no
  matching incident, and no staff comment gives a cause.

Three current `OpenAI_Support` Community replies acknowledge allowance and
reset-timing concerns but request private diagnostics, say a failed-task fix is
not confirmed, or forward feedback without a timeline. They establish support
awareness and uncertainty, not a reset event or cause.

## Historical leads and ledger decision

The scan found no new evidence that resolves the June 29 hard-reset and
separate banked-credit completion, July 28 and 29 breadth, August 1 breadth,
August 8 and 10 scope, August 30 and 31 nonrecipients, Business or 20X breadth,
or a staff-owned cause for depletion and capacity reports.

I added `research-reset-2026-09-07-global` as a day-precision, Grade A inferred
event. Its Grade A applies to the official event statement and observed-account
transition. Population breadth remains Grade D. The cause remains attributed,
not confirmed. No correction, paid-reset receipt, banked redemption, or other
historical event qualified.

## Point-in-time-safe pattern audit

Each row uses only evidence public or approved by the stated cutoff. Today's
posts, observer issue, and Help revision do not enter earlier snapshots.

| Pattern | Exact sample, range, and cutoff | Result |
| --- | --- | --- |
| Provider-owned hard resets | `n=11` verified observations from August 8 through September 8, yielding `n=10` gaps; observer transitions, anchors, and credit state; cutoff `2026-09-08T09:18:16.322Z`. | Strengthened by one 13% to 0% out-of-cycle transition. Grade A for the account transition, Grade D for population. Eight events are out of cycle, two scheduled, and the oldest lacks timing classification. This remains the strongest detection gate, not a cadence model. |
| Current promise to observed delivery | `n=1` promise, `n=1` independently observed transition, and `n=1` completion announcement from September 7 to 8; X/oEmbed, observer, and official Help; cutoff `2026-09-08T09:31:02.032Z`. | New and strengthened. Promise-to-observer lead was `6h03m50.593s`; observer-to-completion lag was `2h37m05.099s`; promise-to-completion was `8h40m55.692s`. Grade A attribution and account transition, Grade C timing direction, Grade D breadth. |
| Global versus banked reset | `n=3` available local credits tracked across the September 8 transition, plus `n=1` official global-reset statement; August 22 through September 8; current cutoff. | Strengthened. Credit count stayed three, so the observed action was not a redemption. Grade A local/mechanism distinction, Grade D breadth. |
| Current social discovery | `n=12` post-cutoff candidates; 12/12 X/oEmbed validations, preferred mirror 12/12, fallback 4/12; prior cutoff through discovery fetch `2026-09-08T09:01:15.669Z`. | Strengthened for current discovery freshness, unchanged as a predictor. Grade A X attribution, Grade B current mirror freshness, Grade D historical completeness and delivery value. |
| Public clustering and contradictions | `n=37` new rate-limit issues, with `n=12` representative comment sets; September 7 to 8; current cutoff. | Strengthened contradiction coverage. The Plus nonrecipient, banked-value, capacity, depletion, entitlement, and enforcement cases lack a shared provider denominator or staff cause. Grade B divergence, Grade D prevalence and cause. |
| Incident chronology | `n=0` Status incidents created or updated after the prior cutoff. | Unchanged negative control. Grade A chronology, Grade D reset linkage. |
| Release and implementation activity | `n=1` new pre-release and `n=68` bounded PR/commit records; prior cutoff through `2026-09-08T09:26:26Z`. | Unchanged. No reset-policy, quota-restoration, or credit-accounting change. Grade A repository chronology, Grade D event linkage. |
| Cadence, cooldown, UTC hour, and weekday | `n=11` verified observations and `n=10` heterogeneous gaps from August 8 through September 8; current observer cutoff. | Still too sparse and mixed between scheduled and out-of-cycle actions. Grade D, unchanged. |

The strongest supported predictor is still a provider-owned meter or access
transition paired with a materially advanced stable anchor. Credit state tells
whether a banked reset was redeemed for the observed account. A prospective
canonical promise supplies a useful watch window, and an official statement
can identify the mechanism and event date, but neither proves every account
received the action.

Signals that failed or remain too sparse are cadence, weekday, UTC hour,
cooldown, milestone context alone, status incidents without quota language,
mirror text without canonical validation, anchor movement without a qualifying
usage transition, UI changes, release activity, and public reports without
provider bounds. The current capacity cluster is worth watching, but calling it
a reset effect or Astra cause would outrun the evidence.

## Next observable tests

1. Seek another eligible recipient or nonrecipient with before-and-after usage,
   anchor, plan, bucket, and credit state for the September 7 action.
2. Recheck all three available credits and record a redemption only after an
   explicit user action and a before-and-after credit count and anchor change.
3. Follow the September 15 provider anchor for a real transition. Keep rolling
   Spark timestamps and partial adjustments separate.
4. Watch for an OpenAI Status record or staff diagnosis for the capacity and
   enforcement cluster. Do not infer cause from report volume.
5. Continue June 29, July 28 and 29, August 1, August 8 and 10, August 30 and
   31, Business, 20X, and paid-reset breadth work without rewriting history.

## Deterministic refresh

The final live refresh at `2026-09-08T09:31:02.032Z` generated dataset
`events-11-cutoff-2026-09-08-7d30df9c` and forecast `fc_20260908093102`.
It contains 11 verified observations, four official incidents, four approved
public sources, zero rejected records, and zero duplicates.

Repository code reports `1.0305487008264681%` at each 1, 3, 6, 12, and 24 hour
horizon. The likely interval moved to `2026-09-14T19:09:49Z` through
`2026-09-15T07:42:13Z`, confidence D. The official source changed the raw
probability from the 1% floor to about 1.03%, while the displayed value remains
1%. Performance grew from `n=34` to `n=35`; model and baseline Brier are both
`0.10196857142857149`, so no model was promoted. No earlier feature snapshot
was rewritten.
