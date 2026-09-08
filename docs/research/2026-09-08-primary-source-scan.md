# Daily primary-source scan for September 8, 2026

Research cutoff: `2026-09-08T09:26:26Z` (local UTC retrieval clock; public
records can continue to change after this point)

Prior cutoff: `2026-09-07T09:22:56.371Z`

This source-only scan covers official OpenAI material and the public
`openai/codex` repository since the prior cutoff. It also checks the
configured OpenAI Community source for staff-owned replies. Provider-bound
observations, official policy statements, promises, banked credits, user
reports, incidents, and product context remain separate. No public report or
support reply is treated as a confirmed reset without the project's required
provider-bound evidence and maintainer label.

## Coverage and source boundary

All online checks below were retrieved between approximately
`2026-09-08T09:20Z` and `2026-09-08T09:26Z`. Relative “Updated” labels on Help
pages are recorded as displayed, not converted into publication timestamps.
The prior source note and automation memory supplied the prior cutoff; no
private account activity, conversations, prompts, responses, credentials,
identifiers, logs, or third-party forecasts were read or retained.

| Source and exact query/range | Result and evidence status |
| --- | --- |
| [OpenAI Status API](https://status.openai.com/api/v2/incidents.json), current JSON retrieved at the scan cutoff; inspect incident `created_at` and `updated_at` after `2026-09-07T09:22:56.371Z` | No incident was created or updated after the prior cutoff. The current list still contains resolved September 3–4 service incidents, including elevated errors across ChatGPT and Codex and an APAC incident. None contains reset, credit, compensation, or quota-restoration language. Negative incident control; no reset event. |
| [How banked Codex resets work](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work), current page at retrieval; displayed `Updated: 4 hours ago` | **New qualifying official mechanism/announcement evidence:** the page states that on September 7, 2026, OpenAI provided a global reset to Plus, Pro, and Business users; it applies immediately, cannot be saved, and does not appear as a banked reset. The page also says eligibility and delivery can vary. This is not proof of universal delivery or an account-level receipt. |
| [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275), current page; displayed `Updated: 8 hours ago` | Documents the GPT-6 Astra rollout and plan-specific availability. Work/Codex uses the plan allowance; Astra can consume allowance faster than Sol depending on task, output, reasoning, and speed. Product/metering context only; no reset event or cause. |
| [Credits for flexible usage](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-freego-pluspro-sora), current page; displayed `Updated: 14 hours ago`, and [paid weekly Work/Codex resets](https://help.openai.com/en/articles/20001507-paid-weekly-work-and-codex-rate-limit-resets), displayed `Updated: 8 days ago` | Reconfirm that purchased credits, paid weekly resets, automatic resets, and banked resets are separate mechanisms. No purchase, redemption, or account event was inferred from either policy page. |
| [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540), current page; displayed `Updated: 8 days ago` | Reconfirms dashboard usage/reset visibility, shared Work/Codex/Excel allowance, direct automatic resets, and separate banked resets. General policy context only. |
| [OpenAI news](https://openai.com/news/), [release notes](https://openai.com/products/release-notes/), [GPT-6 Astra announcement](https://openai.com/index/gpt-6-astra/), and [Astra safety overview](https://openai.com/index/safety-overview-gpt-6-astra/) | No September 7–8 announcement or release-note entry. September 3 Astra material describes rollout, Codex efficiency, and additional safety monitoring but does not state a quota-accounting change or reset cause. |
| [Codex app-server documentation](https://learn.chatgpt.com/docs/app-server), current contract | Reconfirms `account/rateLimits/read`, `account/rateLimits/updated`, named `rateLimitsByLimitId` buckets, `usedPercent`, `windowDurationMins`, `resetsAt`, and separate reset-credit status/consume outcomes. Mechanism contract, not an account event. |
| [Codex pricing](https://learn.chatgpt.com/docs/pricing) and [Codex changelog](https://learn.chatgpt.com/docs/changelog), current pages | Current pricing documents plan/model allowance differences, shared agentic usage, Fast-mode consumption, and weekly limits. Changelog has no September 7–8 reset or quota entry; its latest relevant CLI entry is September 1. Mutable product context, not point-in-time reset evidence. |
| [Codex releases](https://github.com/openai/codex/releases), current page | Newest entry is pre-release `rust-v0.154.0-alpha.6`, displayed as released September 7 at 18:03. Its body contains only a release marker and no reset/quota change. It is not stable-release evidence. |
| [Codex commit API](https://api.github.com/repos/openai/codex/commits?since=2026-09-07T09:22:56Z&until=2026-09-08T09:26:26Z&per_page=100) and [pull-request search](https://github.com/openai/codex/pulls), exact range `since=2026-09-07T09:22:56Z` through `2026-09-08T09:26:26Z` | The commit query returned 68 commits; the pull-request search `repo:openai/codex type:pr updated:>=2026-09-07T09:22:56Z` returned 68 PRs. The sampled changes cover Guardian, user verification, voice UI, app-server versioning/updates, telemetry, and worktrees; none changes reset policy, rate-limit restoration, or credit accounting. |
| [Rate-limit-labeled issue query](https://api.github.com/repos/openai/codex/issues?labels=rate-limits&state=all&since=2026-09-07T09:22:56Z&per_page=100), filtered to `created_at > 2026-09-07T09:22:56Z`; representative comment queries at `/issues/{number}/comments?per_page=100` | 37 new labeled issues were returned. They are public user reports or requests, not verified observations. Comment sets for 12 representative issues were checked; none contained an OpenAI staff diagnosis or provider-bound reset evidence. |
| [OpenAI Community support reply 1](https://community.openai.com/t/potential-usage-double-counting-codex-desktop-app-consumes-high-quota-while-idle-and-using-vscode-extension/1379696/2), [reply 2](https://community.openai.com/t/codex-weekly-usage-disappearing-on-failed-or-extremely-slow-tasks/1389618/3), and [reply 3](https://community.openai.com/t/codex-rate-limits-reset-for-all-paid-plans-april-28-2026/1379921/10) | Official `OpenAI_Support` replies were created at `2026-09-07T16:25:42.443Z`, `2026-09-07T18:44:45.363Z`, and `2026-09-07T20:57:30.079Z`. They request private dashboard/task details, acknowledge allowance concerns, say a failed/slow-task fix is not confirmed, and forward reset-timing feedback without a timeline. Staff-owned uncertainty/support context; no reset confirmation or cause. |

## Strongest new official evidence: September 7 global reset

The current banked-reset Help article is the only material new official
statement in this window. Its September 7 paragraph says a global reset was
provided to Plus, Pro, and Business users, applied immediately, not saved for
later, and not shown as a banked reset. The same page says eligibility can
vary by plan, region, workspace, and offer, delivery timing can vary, and
future resets are not guaranteed.

This should be recorded as an official automatic/global-reset mechanism and
event-date statement. It does not establish the eligible population's
denominator, universal delivery, exact account timing, or whether a specific
account received it. It does, however, provide official context for the
provider-owned tenth transition already recorded in the prior scan. It must
remain distinct from the three local banked reset credits, which are saved
credits consumed through an explicit action.

The page's relative update age has no exact revision timestamp. The September
7 statement is therefore point-in-time evidence of what the page said during
this scan, not a claim that the wording was published at a known time or was
visible in the prior snapshot.

## Status and official product context

The Status API has no new or updated incident after the prior cutoff. The
resolved September 3–4 incidents remain useful negative controls: they
document service errors but do not connect them to resets, credits, or quota
restoration.

The current Help pages distinguish four relevant paths: automatic/global
resets applied directly, user-selected paid weekly resets, saved banked
resets, and purchased flexible-usage credits. The app-server contract exposes
the separate rate-limit and reset-credit state needed to distinguish them.
None of these general pages is an account receipt, and no account-level
credit redemption or paid reset was observed in this source lane.

The Astra Help page says Astra may consume an allowance faster than Sol. The
Astra announcement and safety overview describe rollout and monitoring but
do not attribute quota behavior to safety monitoring. This narrows, but does
not resolve, the cause question raised by recent user reports.

## Codex releases, commits, and pull requests

The latest release is the pre-release
[0.154.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.6),
displayed as September 7 at 18:03. Its body has no reset or quota language.
The 68 post-cutoff PRs/commits are predominantly unrelated implementation
work. Examples include [#43619](https://github.com/openai/codex/pull/43619)
(stable TUI/app-server version comparison),
[#43621](https://github.com/openai/codex/pull/43621) (worktree telemetry),
[#43622](https://github.com/openai/codex/pull/43622) (older connected-service
warning), and the September 8 voice/user-verification series. None changes
the reset policy, quota restoration, or credit ledger.

## New public issue signals

The 37 new `rate-limits`-labeled issues expand the contradiction and
investigation record, but none qualifies for the confirmed dataset. Examples:

| Issue | Public claim | Limitation |
| --- | --- | --- |
| [#43413](https://github.com/openai/codex/issues/43413) | Pro5x user asks to reconcile three full weekly allowances across Sol/Astra. | No provider-side meter, exact reset timestamps, or shared denominator; the author explicitly frames it as a reconciliation request. |
| [#43484](https://github.com/openai/codex/issues/43484) and [#43506](https://github.com/openai/codex/issues/43506) | Astra users report unusually rapid subscription depletion. | User-estimated consumption only; no staff diagnosis or provider-bound before/after state. |
| [#43549](https://github.com/openai/codex/issues/43549) | User says a banked reset was used without requesting approval. | Contradicts the documented explicit-selection mechanism only as an allegation; no reset-credit consume record or account proof. |
| [#43574](https://github.com/openai/codex/issues/43574) | Meter reportedly changed from roughly 70% to 0%. | The author's later edit notes non-renewal can set the UI to 0%, an unresolved alternate explanation. |
| [#43643](https://github.com/openai/codex/issues/43643) and [#43655](https://github.com/openai/codex/issues/43655) | Complaints that a global reset could nullify banked value, or was not seen on Plus. | Feature/eligibility reports without provider-bound account delivery or breadth. |
| [#43731](https://github.com/openai/codex/issues/43731) | Same-account Sol/Astra comparison estimates lower Astra dollar-equivalent capacity. | Estimates are not backend accounting; raw server usage and model-weight evidence are absent. |
| [#43738](https://github.com/openai/codex/issues/43738) and [#43769](https://github.com/openai/codex/issues/43769) | Reports purported widespread Astra capacity errors and Work-only capacity errors while Chat works. | Public compilation/individual report; linked third-party identities were not used, and no provider incident or staff diagnosis was found. |

The 12 checked comment sets were on #43413, #43455, #43484, #43506, #43549,
#43566, #43574, #43643, #43655, #43731, #43738, and #43769. They contained
user follow-ups and automation notices but no OpenAI maintainer/staff
diagnosis. No private diagnostics or sensitive paths from issue bodies were
retained.

## Official Support replies

The configured Community source produced three staff-owned replies in the
window:

- In [the double-counting topic](https://community.openai.com/t/potential-usage-double-counting-codex-desktop-app-consumes-high-quota-while-idle-and-using-vscode-extension/1379696/2), `OpenAI_Support` (`2026-09-07T16:25:42.443Z`) explains that several Codex/Work activities can share limits, but says that alone does not explain a charge and requests dashboard timestamps privately.
- In [the failed/slow-task topic](https://community.openai.com/t/codex-weekly-usage-disappearing-on-failed-or-extremely-slow-tasks/1389618/3), `OpenAI_Support` (`2026-09-07T18:44:45.363Z`) acknowledges tasks consuming allowance without useful results and says a fix has not been confirmed.
- In [the reset-timing topic](https://community.openai.com/t/codex-rate-limits-reset-for-all-paid-plans-april-28-2026/1379921/10), `OpenAI_Support` (`2026-09-07T20:57:30.079Z`) acknowledges the need for predictable reset timing and forwards feedback to the product team, with no timeline or reset commitment.

These replies establish support awareness and unresolved diagnosis, not a
reset event, universal policy, or confirmed cause.

## Historical leads and ledger decision

No new source-backed completion, banked-credit receipt, Business/20X breadth,
or staff diagnosis was found for the June 29, July 28/29, August 1, August
8/10, or August 30/31 leads. The September 7 global-reset statement is new
official context, but it does not retroactively convert those leads into
confirmed observations. The prior scan's tenth provider-owned transition and
three available, unredeemed local credits remain unchanged.

No new inferred event, redemption, supported cause, or forecast signal is
added by this scan. The current evidence supports an automatic/global reset
statement for September 7, not a population-wide delivery claim. Astra's
official consumption context and public depletion reports remain
cause-investigation leads only.

## Point-in-time-safe pattern audit

| Pattern | Current evidence | Status at this cutoff |
| --- | --- | --- |
| Provider-owned hard reset | Prior `n=10` observed transitions through September 7; no new local sample in this source lane. | Grade A for the observed account's transitions, Grade D for population breadth. The Help article strengthens attribution of the September 7 event date but not universal delivery. |
| Automatic/global versus banked reset | Official Help explicitly separates the September 7 global reset from saved banked resets; three local credits remain available/unredeemed. | Grade A mechanism distinction; no redemption or breadth evidence. |
| Astra metering | Official Help says Astra may consume allowance faster than Sol; 37 new public issues report depletion/capacity concerns. | Official mechanism context, but no provider-bound cause or model-weight proof. |
| Incidents | `count=0` Status incidents created/updated after prior cutoff. | Negative control; no reset linkage. |
| Repository and support signals | 68 post-cutoff PR/commit records; 37 new rate-limit-labeled issues; three staff replies. | No code or staff diagnosis changes the reset ledger. |
| Cadence, weekday, UTC hour, cooldown | Existing heterogeneous observations remain sparse. | Grade D; no new inference. |

The strongest predictor remains a provider-owned exhausted-to-available or
enforcement transition paired with a materially advanced stable anchor.
Automatic/global wording is attribution context, not an account receipt.
Public issue volume, page updates, release activity, mirror text, display
changes, and support acknowledgments remain insufficient on their own.

## Next observable tests

1. Check the September 7 global-reset statement against independently observed
   eligible/noneligible accounts without inventing a denominator.
2. Recheck the three available reset credits; record only privacy-minimized
   count/status/grant/expiry metadata and explicit redemption outcomes.
3. Capture any paid or banked reset only with consent, before/after usage and
   anchor bounds, credit-count change, and post-action enforcement recovery.
4. Seek provider bounds and staff diagnosis for the Astra depletion,
   capacity-error, idle-drain, and unexpected-redemption reports.
5. Follow the next provider anchor around September 14 while keeping partial
   adjustments distinct from completed hard resets.
6. Continue the unresolved June 29, July 28/29, August 1, August 8/10,
   August 30/31, Business, and 20X breadth checks.

## Deterministic refresh

This lane did not run `npm run update:data`, tests, or any publication step.
No generated dataset, forecast, source registry, issue, commit, or push was
changed. The parent refresh lane may consume this note while preserving the
prior point-in-time snapshots.
