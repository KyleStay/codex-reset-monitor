# Daily source scan for September 6, 2026

**Research cutoff:** `2026-09-06T09:20:06.675Z`  
**Prior cutoff:** `2026-09-05T09:21:55Z`

This bounded scan keeps observer-confirmed hard-reset transitions, inferred
resets, promised actions, banked-credit grants, redemptions, incidents,
mechanism changes, and public contradictions separate. Public reports and
operator statements cannot become confirmed observations without the required
provider-bound evidence or project label.

## Coverage and source boundary

Recent monitoring covered the interval between the two cutoffs. Historical
follow-up retained the public-launch review and rechecked the June 29
reset-plus-credit promise, July 28/29, August 1, the August 8/10 thread,
August 30/31 delivery, Business and 20X scope, the Astra promotion, banked
credit lifecycle, paid resets, and staff-diagnosis gaps.

I read only the configured public sources. I did not read or retain private
Codex activity, conversations, prompts, responses, account identifiers,
credentials, cookies, session history, logs, or third-party forecasts,
classifiers, probabilities, signals, or scores. The approved discovery feed
was inspected only for `fetchedAt`, `sourceErrors.tibo`, and raw `tiboPosts`.

| Source | Result |
| --- | --- |
| [OpenAI Status API](https://status.openai.com/api/v2/incidents.json) | No incident was created after the prior cutoff. Existing September 3–4 records remain resolved incident context and do not mention a reset, credit grant, compensation, or quota restoration. |
| [Banked Codex resets Help](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work) | The page currently says eligible existing Plus, Pro, and Business users should receive a banked reset on September 3 and 4, with new-account cutoffs and delivery that may take several hours. It distinguishes a saved banked reset from an automatic reset and says Support does not provide manual or courtesy resets. The page displayed `Updated: yesterday`; no exact revision timestamp was exposed. This is promotion/mechanism evidence, not proof of account delivery. |
| [ChatGPT Work and Codex Help](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex) | The page displayed `Updated: 11 hours ago`. It documents a gradual GPT-6 Astra rollout, says availability can differ across Chat, Work, and Codex, and says Astra uses the plan's existing Work/Codex allowance. This is rollout and metering context, not reset evidence. |
| [Paid weekly Work and Codex resets](https://help.openai.com/en/articles/20001507-paid-weekly-work-and-codex-rate-limit-resets) | The page displayed `Updated: 6 days ago`. It still describes an immediate, user-purchased Plus/Pro personal reset, distinct from credits, banked resets, and automatic resets. No purchase receipt or account event was found. |
| [Codex app-server documentation](https://learn.chatgpt.com/docs/app-server) | The current contract still separates named `rateLimitsByLimitId` buckets and `rateLimitResetCredits`; redemption is explicit and should be followed by another rate-limit read. This is telemetry/mechanism documentation only. |
| [Codex releases](https://github.com/openai/codex/releases) | No release was published after the prior cutoff. |
| [Configured X profile](https://x.com/thsottiaux) | Source-native profile rendered `2,870 posts`. Unauthenticated replies were not exposed. The latest visible relevant posts were previously seen Astra rollout/banked-reset commentary; no new completed hard-reset statement appeared in the visible profile window. |
| Approved discovery feed | Fetched at `2026-09-06T09:01:18.294Z`; `sourceErrors.tibo=null`. Two raw post candidates were newer than the prior cutoff. No forecast or classifier field was read. |
| Preferred exact-DID Bluesky mirror `did:plc:rcaom2u2hfsm3aqab5dfvhxs` | Matched both current discovery candidates. `indexedAt-createdAt` lag was `138.161s` to `962.901s`; the mirror remains discovery/corroboration only. |
| Fallback exact-DID Bluesky mirror `did:plc:rcelwndiefenpjvnm6uood4t` | Returned no post-cutoff record for either candidate. This is an omission/freshness finding, not evidence that the posts did not exist. |
| Public [openai/codex issues](https://github.com/openai/codex/issues) | GitHub's API returned 18 `rate-limits`-labeled issues created from `2026-09-05T09:40:43Z` through `2026-09-06T09:15:41Z`. Six focused bodies are summarized below; all are user reports or feature requests. A comment check found no OpenAI maintainer diagnosis in this sample. |
| Configured [OpenAI Community discussion](https://community.openai.com/t/codex-rate-limits-discussion-thread/1378553/) | The public topic rendered 712 posts and a latest-reply link about 35 minutes old. It remains low-trust discovery/corroboration with no provider-bound denominator or staff-owned diagnosis. |

## Canonical social evidence

The two post-cutoff discovery candidates both passed X-owned
[oEmbed validation](https://publish.twitter.com/oembed) for canonical URL,
author `Tibo`, author URL `https://x.com/thsottiaux`, public text, and displayed
date. oEmbed exposed only the calendar date, so exact times below use the X
Snowflake-ID basis.

| ID | Exact UTC | Basis | Classification |
| --- | --- | --- | --- |
| [`2096308922294652979`](https://x.com/thsottiaux/status/2096308922294652979) | `2026-09-05T18:46:09.268Z` | X Snowflake ID | Reply saying “150?”; nonqualifying commentary with no reset, grant, redemption, or quota-window claim. |
| [`2096494725318762951`](https://x.com/thsottiaux/status/2096494725318762951) | `2026-09-06T07:04:28.161Z` | X Snowflake ID | Reply saying “You’re welcome”; nonqualifying commentary with no reset, grant, redemption, or quota-window claim. |

The preferred mirror represented both items with the exact approved DID and
matching created-at dates. The fallback represented neither. The visible X
profile also showed an earlier Astra-product post (`2096101429832552872`,
ID-derived `2026-09-05T05:01:39.210Z`), but it predates the prior cutoff and
is retained as already-reviewed rollout commentary, not a new signal.

No post in the current cutoff window is a completed hard reset, promised
future hard reset, banked-credit grant, redemption, usage-window change,
cause statement, or universal-delivery proof. The three September 3–5 banked
grant promises remain the previously reviewed records and are not completed
resets.

## Observer and project evidence

The shared local observer status at this run remains **9 verified hard-reset
observations**, **98% weekly usage**, the unchanged private provider anchor
`2026-09-07T02:28:25Z`, and **three available unredeemed banked credits**.
There was no new exhausted-to-available or near-zero full-meter transition and
no redemption. The available credits remain queued-credit evidence, not hard
reset observations.

The official Help promotion supports a September 3/4 banked-credit rollout and
several-hour delivery lag, but does not establish that all eligible accounts
received a credit. No new independent recipient/nonrecipient denominator,
provider-bound transition, or staff completion statement closes that gap.

## New public repository signals

The six focused records below are public claims or requests, not reset
observations and not causal evidence:

- [#42982](https://github.com/openai/codex/issues/42982) reports a reset being consumed without a prompt; a follow-up alleges additional unintended consumption. It has no maintainer confirmation or sanitized independent project observation.
- [#43008](https://github.com/openai/codex/issues/43008) reports a reset being consumed while the displayed usage remained at 8%. This is a display/enforcement contradiction, not proof that the backend failed to reset.
- [#43118](https://github.com/openai/codex/issues/43118) reports an agent consuming a banked Full reset without explicit confirmation. It is a consent-boundary and credit-lifecycle report, not a confirmed project redemption.
- [#43136](https://github.com/openai/codex/issues/43136) reports several concurrent sessions receiving a wrong, unused rate-limit bucket while other sessions received the active bucket. The report supplies no repository verification and must not be used as a reset transition.
- [#43141](https://github.com/openai/codex/issues/43141) reports rapid Astra depletion after one reset through a third-party client, while explicitly lacking a provider-bound before/after meter record.
- [#43166](https://github.com/openai/codex/issues/43166) reports usage falling during an Astra session after the task was stopped, with no reproducible provider evidence. It is an unverified depletion/display claim.

Issues [#43135](https://github.com/openai/codex/issues/43135) and
[#43190](https://github.com/openai/codex/issues/43190) are feature requests
about five-hour enforcement and multi-account usage, respectively. They are
mechanism context only. No visible issue comment in the 18-record sample came
from an OpenAI maintainer, and no record supplies a shared event denominator,
verified population breadth, or confirmed cause.

## Historical leads and ledger decision

The canonical June 29 promise, July 28/29, August 1, and August 8/10 records
remain validated through X-owned oEmbed. No new completion statement,
recipient/nonrecipient set, banked-credit receipt, Business/20X denominator,
or staff diagnosis closes those gaps. The August 30/31 attributed completion
remains a Grade C, day-precision inferred reset for at least some paid
accounts, not a project-confirmed observation; the local partial adjustment
remains a contradiction to universal delivery.

The September banked-credit promotion is distinct from those hard-reset
records. No new inferred event, automatic hard reset, redemption, supported
cause, or ledger correction was added in this scan.

## Point-in-time-safe pattern audit

Only evidence public, discovered, or approved before each evaluated cutoff is
compared with later outcomes. The two new social replies, current Help wording,
the 18 new issues, and the current observer state were unavailable to the
prior cutoff and cannot rewrite earlier forecast snapshots.

| Pattern | Exact sample, range, classes, and cutoff | Support, contradiction, grade, and change |
| --- | --- | --- |
| Provider-owned bounded hard reset | `n=9` verified observations, August 8–29; observer meters/access transitions, anchors, and credit state; current cutoff. | No tenth transition. Usage is 98% and the private September 7 anchor is unchanged. **Grade A transition gate, D population; unchanged as the strongest hard-reset predictor.** |
| Attributed hard-reset wording | `n=2` paired August 30/31 promise/completion records plus earlier qualified leads; canonical X/oEmbed, observer bounds, and public reports; current cutoff. | No new completion statement and no independent full transition. **Grade A attribution, C directionality, D delivery; unchanged for universal delivery.** |
| Banked-grant promotion and local availability | `n=3` canonical September 3–5 grant promises, official Help promotion, and `n=2` observer count increases; current cutoff. | Three credits remain available and unredeemed. Promise-to-grant mapping and population breadth remain unknown. **Grade A local mechanism, C attribution, D population; unchanged.** |
| Original posts versus replies | `n=2` new candidates, September 5–6, both replies; X/oEmbed, feed, and exact-DID mirrors; current cutoff. | Both are nonqualifying. Preferred mirror coverage 2/2; fallback 0/2. **Grade A attribution, B current discovery, D completeness; freshness sample updated, predictive value unchanged.** |
| Hard reset versus banked credit | `n=3` available credits tracked through later hard-reset observations; observer metadata and official Help; August 22–September 6. | No redemption and no credit-count decrease. **Grade A local distinction, D breadth; unchanged.** |
| Public clustering and contradictions | `n=18` new rate-limit-labeled issue records, September 5–6; `n=6` focused event/contradiction bodies plus feature requests, public claims only; current cutoff. | Unauthorized redemption, stale display, wrong-bucket, rapid-depletion, and idle-drain claims strengthen contradiction coverage but have no shared provider bound, denominator, or staff cause. **Grade B divergence, D prevalence/cause; strengthened as contradiction coverage, not prediction.** |
| Incident chronology and reset linkage | No new official Status record after the prior cutoff; inherited incident contexts through September 4. | No new incident/reset correlation. **Grade A chronology, D reset linkage; unchanged negative control.** |
| Discovery and mirror freshness | `n=2` current feed candidates; feed `2026-09-06T09:01:18.294Z`; exact-DID mirror metadata. | Preferred lag `138.161s`–`962.901s`; fallback omitted both. **Grade B freshness, D completeness; preferred corroboration persists, fallback coverage weakened.** |
| Reset gaps, cooldown, UTC time, and weekday | `n=9` hard-reset observations, August 8–29, with eight heterogeneous gaps; current cutoff. | No new hard-reset gap. Sample remains too small for cadence, cooldown, UTC-hour, or weekday inference. **Grade D; unchanged.** |

## Predictors, failed signals, and next tests

The strongest hard-reset predictor remains a bounded provider-owned meter or
access transition paired with a materially advanced stable provider anchor.
Credit state distinguishes an automatic hard reset from a banked redemption
for the observed account. Canonical operator wording identifies a watch window
and attributed scope, but independent provider evidence decides delivery.

Signals that failed or remain too sparse include cadence, weekday, UTC hour,
cooldown, milestone context alone, incidents without quota language, mirror
text without canonical validation, anchor movement without a qualifying usage
transition, display changes without a provider-bound event, UI/API changes,
and public reports without provider bounds. The unauthorized-redemption and
wrong-bucket reports are important safety and telemetry contradictions, but
they cannot establish a completed redemption or hard reset in this project.

Next observable tests are:

1. Follow the September 7 private provider anchor for a qualifying usage or enforcement transition, keeping all partial adjustments separate.
2. Recheck the three available credits after the Help article's several-hour delivery window; record only privacy-minimized count, grant/expiry metadata, and explicit redemption outcome.
3. Seek independent eligible/noneligible account evidence for the September 3/4 Astra promotion without inferring a denominator.
4. Capture a banked redemption or paid reset only with explicit consent, before/after usage and anchor bounds, credit-count change, and post-action enforcement recovery.
5. Seek staff diagnosis and provider bounds for #42982, #43008, #43118, #43136, #43141, and #43166 through public channels without retaining private diagnostics.
6. Continue June 29, July 28/29, August 1, August 8/10, Business, 20X, and August 30/31 breadth work without rewriting earlier snapshots.

## Deterministic refresh

The shared local refresh currently reports dataset
`events-9-cutoff-2026-09-06-8eb4bd44` and forecast `fc_20260906092006`.
It retains 9 verified observations, no newly qualifying social signal, and no
new official Status incident. The refresh retains 4 official incidents, 3
approved public sources, zero rejected records, and zero duplicates. The
published-anchor timing input is now past,
so the deterministic published-prior fallback currently displays 1h
`57.591563%`, 3h `75.954735%`, 6h `88.748685%`, 12h `93.025101%`, and 24h
`93.259983%`, confidence D. These values are repository calculation only; no
third-party forecast or classifier was imported and no model was promoted.
Performance remains `n=32`, with model and baseline Brier both
`0.083396875`.
