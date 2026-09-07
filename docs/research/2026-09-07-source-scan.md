# Daily source scan for September 7, 2026

Research cutoff: `2026-09-07T09:22:56.371Z` (latest local observer sample)

Prior cutoff: `2026-09-06T09:20:06.675Z`

This source-only scan covers new public evidence between the two cutoffs and
rechecks the unresolved June 29, July 28/29, August 1, August 8/10, and
August 30/31 threads. It keeps provider-bound observations, inferred events,
promised actions, banked credits, user reports, incidents, and mechanism
context separate. Public reports and operator statements remain ineligible
for the confirmed dataset without the required provider-bound evidence and
project label.

## Coverage and source boundary

I reviewed the configured official OpenAI sources, the public `openai/codex`
repository, the exact Tibo X account, and the approved discovery feed and
exact-DID mirrors. Online source checks were completed by the cutoff above;
the discovery feed itself reported `fetchedAt=2026-09-07T09:01:55.718Z`.

I read only the approved discovery fields `fetchedAt`, `sourceErrors.tibo`,
and raw `tiboPosts`. I did not read or retain private Codex activity,
conversations, prompts, responses, account identifiers, credentials,
cookies, session history, logs, or third-party forecast, classifier,
probability, signal, or score fields. The observer output used here is the
privacy-minimized official rate-limit status permitted by the project policy.

| Source | Freshness and result |
| --- | --- |
| [OpenAI Status API](https://status.openai.com/api/v2/incidents.json) | No incident was created or updated after the prior cutoff (`count=0`). Existing September 3–4 incidents remain resolved context and do not mention reset, credit, compensation, or quota restoration. |
| [How banked Codex resets work](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work) | Displayed `Updated: 13 hours ago`. The current text describes the September 3/4 GPT-6 Astra banked-reset promotion, new-account time cutoffs, several-hour delivery variability, saved-credit behavior, and explicit selection before use. It distinguishes banked resets from automatic resets and says Support does not provide manual or courtesy replacements. This is eligibility and mechanism evidence, not proof of universal delivery. |
| [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275) | Displayed `Updated: 31 minutes ago`. It documents the gradual GPT-6 Astra rollout, plan-specific availability, and use of the existing Work/Codex allowance. Astra may consume allowance faster than Sol depending on task, output, reasoning, and speed settings. This is product and metering context, not reset evidence. |
| [Credits for flexible usage](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-freego-pluspro-sora) | Displayed `Updated: 21 hours ago`. Credits are separate from included usage and banked resets, are used after included limits, and expire after 12 months. No redemption or account event was inferred from this general policy page. |
| [Paid weekly Work and Codex resets](https://help.openai.com/en/articles/20001507-paid-weekly-work-and-codex-rate-limit-resets) | Displayed `Updated: 7 days ago`. It still documents the user-requested Plus/Pro paid reset, distinct from automatic resets, credits, and banked resets. No purchase receipt or account event was available in the approved evidence. |
| [Codex app-server documentation](https://learn.chatgpt.com/docs/app-server) | The current contract exposes named `rateLimitsByLimitId` buckets, `usedPercent`, `windowDurationMins`, `resetsAt`, and separate `rateLimitResetCredits`; explicit credit consumption is followed by another rate-limit read. This is a mechanism contract only. |
| [GPT-6 Astra safety overview](https://openai.com/index/safety-overview-gpt-6-astra/) and [OpenAI release notes](https://openai.com/products/release-notes/) | Official September 3 material describes additional safety monitoring for Astra tool-using inference and a gradual Codex rollout. It does not state that this monitoring changes subscription quota accounting, so it is mechanism context rather than a confirmed cause. |
| [Public `openai/codex` issues](https://github.com/openai/codex/issues) | The API returned 24 `rate-limits`-labeled issues created after the prior cutoff. They are user reports or feature requests. Seven representative comment sets had no OpenAI maintainer association or staff diagnosis. |
| [Codex releases](https://github.com/openai/codex/releases) and [repository commits](https://github.com/openai/codex/commits/main) | No release was published after the prior cutoff. A 22-commit and 22-closed-PR review found normal TUI, worktree, MCP, model-provider, and background-task changes, but no reset-policy or quota-restoration change. |
| [OpenAI Community rate-limit topic](https://community.openai.com/t/codex-rate-limits-discussion-thread/1378553.json) | Current topic metadata reported `posts_count=720`, `created_at=2026-04-04T22:54:52.751Z`, and `last_posted_at=2026-09-07T09:07:07.637Z`. It remains low-trust discovery/corroboration: no shared denominator, provider bound, or staff-owned diagnosis was established. |

## Canonical Tibo evidence

The source-native [Tibo profile](https://x.com/thsottiaux) rendered the exact
account `@thsottiaux Codex & ChatGPT` and `2,890 posts`. The visible profile
window showed current Astra product commentary but no new completed reset or
banked-reset delivery statement. Unauthenticated replies are not exposed by
the profile view.

The approved discovery feed returned 18 raw Tibo records newer than the prior
cutoff, with `sourceErrors.tibo=null`. Each of the following 18 IDs passed
X-owned [oEmbed validation](https://publish.twitter.com/oembed) for the exact
canonical URL, author name `Tibo`, author URL, public text, and displayed
calendar date:

`2096847737153012204`, `2096835256611393924`, `2096775311790899620`,
`2096775056336859637`, `2096698561971064864`, `2096765806818509047`,
`2096717905614524491`, `2096730328090189914`, `2096730186360463414`,
`2096718427658629329`, `2096700527753245068`, `2096698720440213943`,
`2096692856543182879`, `2096692394435752258`, `2096689792281117103`,
`2096689650257805558`, `2096688770523467947`, and `2096686370848989558`.

X oEmbed exposed a date but not an exact time. Exact UTC times used for
point-in-time ordering therefore come from the X Snowflake IDs, with the feed
timestamps treated as corroboration. The most relevant records are:

| Post | ID-derived UTC | Classification |
| --- | --- | --- |
| [Astra usage improvement](https://x.com/thsottiaux/status/2096717905614524491) | `2026-09-06T21:51:18.490Z` | Tibo says a logged-in Astra improvement can draw up to “3-4X less usage” on the long tail. This is a product-efficiency claim, not a reset, delivery, or quota-window event. |
| [Astra versus Sol guidance](https://x.com/thsottiaux/status/2096688770523467947) | `2026-09-06T19:55:32.143Z` | Model/reasoning guidance. No reset or credit claim. |
| [Before/after-reset reply](https://x.com/thsottiaux/status/2096686370848989558) | `2026-09-06T19:46:00.016Z` | Commentary that usage is not different before versus after a reset. It supplies no account, meter, or delivery evidence. |
| [Ambiguous reset reply](https://x.com/thsottiaux/status/2096692394435752258) | `2026-09-06T20:09:56.151Z` | “Who says it won't reset in a while” is an ambiguous reply, not a promise, completion, or scope statement. |
| [CLI availability reply](https://x.com/thsottiaux/status/2096730186360463414) | `2026-09-06T22:40:06.448Z` | Product availability guidance, not reset evidence. |
| [“RESTLE?” reply](https://x.com/thsottiaux/status/2096730328090189914) | `2026-09-06T22:40:40.239Z` | Nonqualifying commentary. |

The other 12 validated records are replies or unrelated Astra/NVIDIA/product
commentary. None is a completed hard reset, future hard-reset promise,
banked-credit grant, redemption, usage-window change, cause statement, or
universal-delivery proof. The new Tibo evidence therefore adds no ledger event
or forecast signal.

The preferred exact-DID [Bluesky author feed](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcaom2u2hfsm3aqab5dfvhxs&limit=100)
covered all 18/18 discovery candidates and returned two additional
mirror-only records without canonical X IDs. Its `indexedAt-createdAt` lag
ranged from `109.663s` to `1313.961s`. The fallback exact-DID
[mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcelwndiefenpjvnm6uood4t&limit=100)
covered 4/18 candidates, with lag from `59.462s` to `223.969s`. Mirrors are
discovery and freshness corroboration only; they do not establish X identity,
delivery, or causation.

## Observer-confirmed transition

The shared local observer recorded a new tenth provider-owned exhausted-to-
available transition since the prior cutoff:

- limit reached at `2026-09-06T13:21:46.537Z`;
- reset observed at `2026-09-07T02:28:38.855Z`;
- previous primary usage `100%`, current primary usage `0%`;
- provider anchor advanced from `2026-09-07T02:28:25Z` to
  `2026-09-14T02:28:38Z`;
- classified `access-restored`, `scheduled`, with `scheduledLeadMinutes=0`;
- reset-credit count stayed at three before and after the transition, with all
  three credits available and unredeemed.

The latest status read at `2026-09-07T09:22:56.371Z` showed the primary paid
bucket at `1%` with a future weekly anchor of `2026-09-14T02:32:39Z`; that
later anchor drift is not a second reset. The observer reports
`publishedResetCount=10` and `pendingPublication=false`. This tenth transition
is provider-bound confirmation for the observed account, not evidence about
population breadth or cause. The parent refresh lane should carry it into
the generated dataset; this source lane does not edit generated data.

The observer's authenticated maintainer publication is [issue #48](https://github.com/KyleStay/codex-reset-monitor/issues/48).
Pending-review issues [#49](https://github.com/KyleStay/codex-reset-monitor/issues/49),
[#50](https://github.com/KyleStay/codex-reset-monitor/issues/50), and
[#51](https://github.com/KyleStay/codex-reset-monitor/issues/51) correspond to
the ambiguous reset hint, allowance-mechanism reply, and Astra usage-draw
improvement post, respectively. They remain corroboration leads and do not
enter the confirmed dataset until the required review.

## New public repository signals

All 24 new issues remain unverified public claims or requests. The most
relevant reports were:

- [#43364](https://github.com/openai/codex/issues/43364) reports a Plus Terra
  High workflow moving from a fresh five-hour meter at `0%` to `100%` in
  4m51.948s, with 30 continuation updates and high cache reuse. It lacks a
  provider diagnosis and is not a reset observation.
- [#43351](https://github.com/openai/codex/issues/43351) reports faster Pro 5x
  weekly depletion, including apparent idle-period decreases. It provides no
  shared provider denominator or staff confirmation.
- [#43287](https://github.com/openai/codex/issues/43287) reports substantial
  quota use alongside auto-review turns and separate tool events. The author
  does not claim that every review turn is billed one-to-one.
- [#43230](https://github.com/openai/codex/issues/43230) claims Astra High
  declined roughly 20% after a reset on Pro 20x. This is a user-reported
  depletion rate, not a provider-bound before/after transition.
- [#43223](https://github.com/openai/codex/issues/43223) claims idle weekly
  depletion and purchased credits disappearing. It supplies no usage
  attribution or credit-ledger proof.
- [#43389](https://github.com/openai/codex/issues/43389) reports Spark showing
  a full five-hour and weekly allowance while the session remains blocked by
  a usage error. This is a display/enforcement contradiction.
- [#43403](https://github.com/openai/codex/issues/43403) requests dynamic
  five-hour limits based on capacity. It is a feature request, not evidence
  of current reset behavior.

Comment checks on seven representative new issues, including #43364, #43351,
#43287, #43252, #43230, #43389, and #43403, found no `MEMBER` association and
no OpenAI staff diagnosis. The issue sample strengthens the contradiction
record but supplies no shared event denominator, verified population breadth,
or supported cause.

## Historical leads and ledger decision

The canonical June 29 reset-plus-credit promise, July 28/29 reset thread,
August 1 thread, and August 8/10 reset thread remain validated through the
existing X/oEmbed records. The current scan found no new completion statement,
recipient/nonrecipient set, banked-credit receipt, Business or 20X breadth,
or staff diagnosis for any of them. The August 30/31 attributed completion
remains a Grade C, day-precision inferred reset for at least some paid
accounts, not a project-confirmed observation or universal-delivery claim.

The September 3/4 official Astra promotion and September 5 operator wording
remain distinct from automatic hard-reset records. The three local credits
granted on August 22, September 4, and September 5 remain available and
unredeemed. No new inferred event, redemption, supported cause, or ledger
correction was added. Astra's official safety-monitoring description, Tibo's
usage-efficiency post, and new user reports do not prove a quota mechanism or
cause.

## Point-in-time-safe pattern audit

Only evidence available by each evaluated cutoff is compared with later
outcomes. The current observer transition and post-cutoff public records do
not rewrite earlier forecast snapshots.

| Pattern | Exact sample and range | Point-in-time-safe status |
| --- | --- | --- |
| Provider-owned bounded hard reset | `n=10` verified observations, August 8–September 7; usage/access transitions, stable provider anchors, and credit state. | Strengthened as a transition gate by the scheduled September 7 event. Grade A transition, Grade D population. Still not a cadence or universal-delivery model. |
| Attributed hard-reset wording | Two paired August 30/31 promise/completion records plus earlier qualified leads; canonical X/oEmbed and observer bounds where available. | No new current completion. Grade A attribution, Grade C directionality, Grade D delivery breadth. Unchanged for universal delivery. |
| Banked-reset promotion and local availability | Three September 3–5 public grant promises; three local available credit records spanning August 22–September 5. | Credits remain unredeemed. Promise-to-grant mapping and population breadth remain unknown. Grade A local mechanism, Grade C attribution, Grade D population. |
| Current social discovery | `n=18` post-cutoff feed records; all 18 X/oEmbed canonical validations; preferred mirror covered 18/18 plus 2 mirror-only records, fallback covered 4/18. | Current records are mostly replies/product commentary. Grade A X attribution, Grade B freshness, Grade D completeness and predictive value. No reset signal. |
| Hard reset versus banked credit | Three available credits tracked across later provider observations, August 22–September 7. | No redemption or credit-count decrease. Grade A local distinction, Grade D breadth. Unchanged. |
| Public clustering and contradictions | `n=24` new rate-limit-labeled issues, seven representative comment checks, after September 6 cutoff. | Wrong-bucket, idle-drain, rapid-depletion, display, and consent-boundary reports expand contradiction coverage. No denominator, provider bound, or staff cause. Grade B divergence, Grade D prevalence/cause. |
| Incident chronology | `n=0` new/updated Status incidents after the prior cutoff. | No reset-linked incident. Grade A chronology, Grade D reset linkage. Unchanged negative control. |
| Reset gaps, cooldown, UTC time, weekday | `n=10` provider observations and nine heterogeneous gaps, August 8–September 7. | Too sparse and mixed between scheduled and out-of-cycle events for cadence, cooldown, hour, or weekday inference. Grade D. Unchanged. |

The strongest bounded predictor remains a provider-owned meter or access
transition paired with a materially advanced stable anchor. Credit state
distinguishes a banked redemption from an automatic reset for the observed
account. Tibo wording identifies an attributed watch window, but independent
provider evidence decides delivery.

Signals that remain failed or too sparse include cadence, weekday, UTC hour,
cooldown, milestone context alone, incidents without quota language, mirror
text without canonical validation, anchor movement without a qualifying usage
transition, display changes without a provider-bound event, UI/API changes,
and public reports without provider bounds. The new Astra-related reports are
useful contradiction and investigation leads, not forecast inputs.

## Next observable tests

1. Follow the September 14 future provider anchor for a qualifying usage or
   enforcement transition, keeping partial adjustments separate.
2. Recheck the three available credits after the Help article's stated
   delivery window. Record only privacy-minimized count, grant/expiry
   metadata, and explicit redemption outcome.
3. Seek independent eligible/noneligible account evidence for the September
   3/4 promotion without inferring a denominator.
4. Capture a banked redemption or paid reset only with explicit consent,
   before/after usage and anchor bounds, credit-count change, and post-action
   enforcement recovery.
5. Seek staff diagnosis and provider bounds for the representative issue
   reports without retaining private diagnostics.
6. Continue breadth work on June 29, July 28/29, August 1, August 8/10,
   Business, 20X, and August 30/31 without rewriting earlier snapshots.

## Deterministic refresh

The final live refresh at `2026-09-07T09:33:43.617Z` generated dataset
`events-10-cutoff-2026-09-07-471be847` and forecast
`fc_20260907093343`. It retained 10 verified observations, four official
incidents, three approved public sources, zero rejected records, and zero
duplicates. Pending issues #49 through #51 remain forecast-ineligible.

The scheduled September 7 transition replaced the expired-anchor fallback
with the provider-anchor model. Repository code now reports `1%` at each of
the 1, 3, 6, 12, and 24 hour horizons, with a likely interval from
`2026-09-13T20:12:26Z` through `2026-09-14T08:44:50Z`, confidence D. The
performance sample grew from 32 to 34. Model and baseline Brier scores both
moved from `0.083396875` to `0.0992`, so no model was promoted. No third-party
forecast or classifier entered the calculation, and no historical feature
snapshot was rewritten.
