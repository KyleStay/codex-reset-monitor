# Source scan: 2025-07-01–2025-09-02 and 2026-08-01–2026-08-02

Research completed `2026-08-02T09:22:00Z`. This note separates reset evidence from incidents, product/mechanism changes, and unsupported causes. It does not create a confirmed observation or model label.

## Scope and searches

- Recent monitoring covered records published after the prior run cutoff (`2026-08-01T09:18:57Z`) through `2026-08-02T09:22:00Z`.
- Historical backfill covered `2025-07-01T00:00:00Z` through `2025-09-02T23:59:59Z`, extending the searched boundary backward from September 3 toward the public launch of ChatGPT-plan usage limits in Codex CLI.
- Searched official OpenAI Status incident pages; OpenAI announcements and Help/developer documentation for `Codex`, `usage limit`, `weekly`, `5h`, `reset`, `rate limit`, `credits`, and dated variants; and public `openai/codex` issues, comments, releases, and pull requests through GitHub's native API for `reset`, `limit`, `usage`, and `quota`.
- Searched the configured OpenAI Community host for the same date and term families. Community results supplied no independent qualifying evidence and were not promoted.
- No unconfigured social source was opened or treated as evidence. Several GitHub comments linked social posts; those links remain unverified leads, not source support.

## Recent finding: inferred August 1 reset, day precision

Three independent public GitHub reports now support a reset affecting at least some accounts on August 1, 2026:

- Issue [#36436](https://github.com/openai/codex/issues/36436), published `2026-08-01T05:32:16Z`, reports one account's weekly meter changing from 32% used to 0% between `2026-08-01T03:36:07Z` and `2026-08-01T03:36:23Z`, with a new seven-day anchor and no local consume call.
- Issue [#36481](https://github.com/openai/codex/issues/36481), published `2026-08-01T14:23:14Z`, independently reports 32% used changing to 0% at approximately `2026-08-01T03:48:34Z`, followed by stabilization of a new reset timestamp. Its stated Plus-plan scope and timing are compatible with #36436.
- Issue [#36468](https://github.com/openai/codex/issues/36468), published `2026-08-01T11:50:12Z`, reports a Pro allowance at 100% remaining after an August 1 reset. It is less time-precise but independently corroborates the date.

Assessment: this meets the historical protocol's minimum of two independent public reports for a **day-precision inferred reset** on `2026-08-01`, with evidence grade best treated as moderate rather than confirmed. It is not a project `verified-observation`, must not enter model labels, and does not prove a universal reset. Scope is limited to some self-reported Plus and Pro accounts. Exact trigger, breadth, and operator intent are unknown.

Cause confidence: **unknown**. Issue #36436 explicitly could not distinguish an automatic banked reset, a broad reset, expiry, or a backend defect. Later reports call the event global or attributed to an announcement, but do not provide a configured permanent official/staff source for that claim. No official OpenAI announcement, Help article, Status incident, or repository-staff comment confirming the reset or its cause was located in the scanned window.

### Contradictions and non-qualifying recent leads

- Issue [#35952](https://github.com/openai/codex/issues/35952), published `2026-07-29T13:21:41Z`, reported a reset date moving to August 5 while the meter remained fully used; this remains a contradiction to a uniformly restored allowance.
- Issue [#36170](https://github.com/openai/codex/issues/36170), published `2026-07-30T14:33:54Z`, reported that one Plus account did not receive the reportedly distributed July 29 reset.
- Issue [#36481](https://github.com/openai/codex/issues/36481) says the post-reset meter later jumped from 16% to 75% after a five-hour interval with no local request, and briefly moved backward to 74%. This may reflect delayed reconciliation or another ledger effect, but the cause is unsupported.
- Issue [#36488](https://github.com/openai/codex/issues/36488), published `2026-08-01T15:05:54Z`, reports rapid post-reset Pro consumption and calls the event a global reset announced by a named person, but supplies no configured permanent source for the announcement. Its metering complaint is a public signal; its global/cause claim is not accepted.
- Issue [#36528](https://github.com/openai/codex/issues/36528), published `2026-08-01T22:01:52Z`, reports a meter moving from 0% to 97% used on August 1 and several earlier reset-window changes. One comment at [2026-08-02T00:02:03Z](https://github.com/openai/codex/issues/36528#issuecomment-5154093393) reports a separate large same-day usage drop, but neither source identifies the server-side ledger cause.
- Issue [#36510](https://github.com/openai/codex/issues/36510), published `2026-08-01T17:42:42Z`, reports stored reset credits decreasing from four to one without known manual redemption. The reporter later acknowledged at [2026-08-01T18:03:44Z](https://github.com/openai/codex/issues/36510#issuecomment-5152697703) that expiration could explain it. This is a reset-credit lifecycle lead, not evidence of the August 1 allowance event.
- Issue [#36578](https://github.com/openai/codex/issues/36578), published `2026-08-02T09:00:35Z`, shows only that an exhausted account displayed an August 8 reset time. It does not independently observe an August 1 reset.

Future detection signals: synchronized used-percentage drops across independent accounts; old and new absolute `resets_at` values; unchanged seven-day `window_minutes`; allowance/banked-reset count before and after; presence or absence of `account/rateLimitResetCredit/consume`; enforcement returning separately from meter display; plan and surface scope; delayed meter reconciliation; and a permanent official or repository-staff statement with an effective timestamp.

## Historical backfill: July 1–September 2, 2025

### Public launch boundary and initial limit mechanism

- Before August 7, [issue #1458](https://github.com/openai/codex/issues/1458), opened `2025-07-03T20:46:57Z`, requested that Codex CLI usage be included in ChatGPT subscriptions. This is evidence that subscription-backed CLI usage was not yet publicly available to the reporter, not a reset event.
- OpenAI's [Introducing GPT-5](https://openai.com/index/introducing-gpt-5/) announcement, published `2025-08-07`, states that Pro, Plus, and Team users could start coding with GPT-5 in Codex CLI by signing in with ChatGPT. The matching repository documentation [PR #1948](https://github.com/openai/codex/pull/1948) was merged `2025-08-07T18:20:53Z`.
- The first searched usage-limit reports immediately followed that launch. [Issue #1985](https://github.com/openai/codex/issues/1985), opened `2025-08-08T01:55:10Z`, records the CLI message that limits reset every five hours and every week. [Issue #1986](https://github.com/openai/codex/issues/1986), opened `2025-08-08T02:17:41Z`, separately requested global usage and exact reset timing for both guardrails.

Assessment: August 7–8 is the source-backed public launch boundary for the ChatGPT-plan Codex CLI usage-limit mechanism in this scan. It is a **mechanism/product change**, not a reset. The July search found no qualifying subscription-limit reset event before that boundary.

### August limit/accounting changes

- Codex [release 0.21.0](https://github.com/openai/codex/releases/tag/rust-v0.21.0), published `2025-08-12T04:43:24Z`, added a prompt cache key for better caching/token efficiency. This supports an efficiency change, not a quota reset.
- [PR #2266](https://github.com/openai/codex/pull/2266), merged `2025-08-13T22:43:54Z`, made the client wait for the server-requested delay on rate-limit errors.
- In [issue #2022](https://github.com/openai/codex/issues/2022#issuecomment-3217443480), repository contributor gpeal stated at `2025-08-23T22:11:02Z` that further rate-limit adjustments had been made and linked an unconfigured social announcement describing a 50% Plus increase. The contributor statement supports an attributed mechanism adjustment by that date, but the linked percentage and exact effective time remain unverified because the underlying social source is outside the configured policy.
- [PR #2611](https://github.com/openai/codex/pull/2611), merged `2025-08-25T02:56:25Z`, fixed nondeterministic MCP tool ordering that broke prompt caching and could cause unusually fast usage-limit consumption. This is a supported client-side contributing mechanism for some MCP workloads, not a universal explanation for all limit reports.
- [PR #2695](https://github.com/openai/codex/pull/2695), merged `2025-08-26T04:42:10Z`, began using server-provided fields to show when a ChatGPT rate limit would reset. Codex [release 0.24.0](https://github.com/openai/codex/releases/tag/rust-v0.24.0), published `2025-08-26T17:40:56Z`, included that change.
- In [issue #1985](https://github.com/openai/codex/issues/1985#issuecomment-3250023276), repository contributor gpeal stated at `2025-09-03T16:53:42Z`—just outside the searched end date—that rate limits were then much higher than when the issue was created. This corroborates cumulative adjustment, but not a discrete reset timestamp.

Cause confidence: **attributed** only for the narrow MCP prompt-cache defect fixed by #2611 and for the existence of rate-limit adjustments stated by repository contributors. The causes of individual account lockouts, delayed weekly recovery, and any allowance restoration remain unknown.

### Historical incidents kept separate

- [502 Gateway Errors](https://status.openai.com/incidents/01K1ZF6W0MH8KNBGFQZ8ZDV3P1), affecting Codex among other components, ran from the first identified update at `2025-08-06T10:35:39.923Z` through resolution at `2025-08-06T23:53:00.804Z`.
- [Increased failure rate for Codex tasks](https://status.openai.com/incidents/01K2DBA1G47XEGSEKQ8HBWC9KC) ran `2025-08-11T19:56:51.587Z`–`2025-08-11T22:02:43.951Z`.
- [Codex errors](https://status.openai.com/incidents/01K2NH8P5QAQDD1G9R36PH0B4B) ran `2025-08-15T00:14:54.134Z`–`2025-08-15T01:06:00Z`.

None of these official incident pages announces compensation, a quota restoration, or a usage-limit reset. No causal link to a reset should be inferred.

### Non-qualifying historical reset leads and contradictions

- [Issue #2213](https://github.com/openai/codex/issues/2213), opened `2025-08-12T07:44:02Z`, says usage had not restarted after a day. It supplies no observed restoration time and therefore cannot establish a reset.
- [Issue #2448](https://github.com/openai/codex/issues/2448#issuecomment-3205805163) contains a single report at `2025-08-20T11:30:22Z` that CLI access returned after being blocked earlier that day. It lacks a second independent same-event report, precise meter transition, or staff confirmation.
- [Issue #2669](https://github.com/openai/codex/issues/2669), opened `2025-08-25T08:14:29Z`, reports being blocked on a Monday morning despite no recent use. This contradicts a calendar-week interpretation and is compatible with an account-anchored rolling weekly window; it does not observe a reset.
- User reports in issues #1985, #2022, #2205, and #2448 conflict on whether five-hour allowances restored on time. They establish confusing early behavior and opaque weekly windows, but do not provide a pair of source-native reports precise enough to cluster into a specific inferred reset event.

## Coverage gaps

- GitHub issue search indexes issue and pull-request records more reliably than every comment body; candidate threads were inspected directly, but a relevant comment in an unrelated thread may remain undiscovered.
- Mutable Help and developer pages do not expose complete point-in-time revision histories. Present wording was not used to assert what a Help page said on a historical date.
- Social links embedded in public GitHub comments were not opened because no social account or collection method is configured. Claims depending on them remain attributed hearsay or unresolved leads.
- Official Status records distinguish incidents but do not disclose account-level allowance restoration or compensation unless explicitly stated.
- The August 1, 2026 event now clears the inference threshold, but its exact time, breadth, banked-reset involvement, and cause remain unresolved. A configured permanent official/staff source would materially improve the assessment.
