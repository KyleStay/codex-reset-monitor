# Source scan: 2025-09-03–2025-10-31 and 2026-07-15–2026-08-01

Research completed 2026-08-01. This note separates reset evidence from incidents, product/mechanism changes, and unsupported causes. It does not create a confirmed observation or model label.

## Scope and searches

- Searched OpenAI Status incident pages and write-ups for Codex-affected incidents in both date ranges; the current Status API feed did not return the older 2025 records, so permanent incident URLs and their embedded UTC timestamps were checked directly.
- Searched official OpenAI announcements, Help, developer documentation, and the Codex changelog for `Codex`, `usage limit`, `weekly`, `reset`, `rate limit`, `credits`, and dated variants.
- Searched public `openai/codex` issues, comments, releases, and pull requests with GitHub's native API for records created in `2025-09-03..2025-10-31` and `2026-07-15..2026-08-01`, using `reset`, `limits`, `usage`, and `quota`, then inspected candidate issue comments and relevant pull requests.
- Searched the configured OpenAI Community host for the same date/term families. Community material was used only for corroboration or leads.
- No unconfigured social source was opened or treated as evidence.

## Historical findings: 2025-09-03–2025-10-31

### Possible September 24 meter reset: minimum report count met, event still ambiguous

Two independent GitHub accounts reported the weekly meter returning to zero on September 24: one at [2025-09-24T04:23:59Z](https://github.com/openai/codex/issues/4103#issuecomment-3326418406), and a second account confirmed the reset at [2025-09-24T07:13:57Z](https://github.com/openai/codex/issues/4103#issuecomment-3326922963). This meets the protocol's minimum count of two independent public reports for a possible inferred reset.

It is not strong evidence of an operator-initiated reset. A different account reported at [2025-09-24T04:28:28Z](https://github.com/openai/codex/issues/4103#issuecomment-3326428963) that its meter showed zero usage while enforcement still blocked requests, and another reported at [2025-09-24T10:34:09Z](https://github.com/openai/codex/issues/4103#issuecomment-3327684626) that no reset had occurred. Repository contributor aibrahim-oai later said at [2025-09-24T16:27:21Z](https://github.com/openai/codex/issues/4103#issuecomment-3329774794) that version 0.40.0 had not itself reset rate limits and that a high percentage could simply be near its normal reset time.

Assessment: a **low-confidence, day-precision inferred meter/window reset lead**, scope limited to some reported Pro accounts; exact time, breadth, and trigger are unknown. It may combine normal scheduled rollovers, stale display state, and/or a backend action. Do not attribute it to the September 22 incident, GPT-5-Codex, or a quota change without stronger evidence.

Detection signals: multiple accounts changing from a high weekly-used percentage to zero within hours; enforcement state checked separately from the displayed meter; unchanged versus advanced `reset_at`; and an official or repository-staff statement identifying any server-side action.

### Durable mechanism and telemetry changes, not reset events

- [PR #3977](https://github.com/openai/codex/pull/3977), merged `2025-09-21T17:20:50Z`, added TUI rate-limit graphs and warnings.
- [PR #4053](https://github.com/openai/codex/pull/4053), merged `2025-09-22T18:13:35Z`, added rate limits to `/status`.
- [PR #4111](https://github.com/openai/codex/pull/4111), merged `2025-09-24T15:31:08Z`, parsed reset headers and displayed reset timing. These September PRs expose client-side visibility; they do **not** establish that OpenAI reset an allowance.
- [PR #5304](https://github.com/openai/codex/pull/5304), merged `2025-10-18T00:39:38Z`, switched stored reset information from relative offsets to absolute timestamps to stop resumed sessions from recalculating and moving displayed reset times. This directly addressed [issue #4761](https://github.com/openai/codex/issues/4761), opened `2025-10-05T06:04:53Z`.
- [PR #5302](https://github.com/openai/codex/pull/5302), merged `2025-10-20T21:11:55Z`, added `account/rateLimits/read` so app-server clients could read current rate limits without first sending a message.
- OpenAI's [Codex general-availability announcement](https://openai.com/index/codex-now-generally-available/), published `2025-10-06`, said Codex cloud tasks would begin counting toward Codex usage on `2025-10-20`. This is an accounting/scope change, not a reset.

### Official incidents, kept separate from reset evidence

- [Increased error rate for ChatGPT](https://status.openai.com/incidents/01K5SPYMA9ZPZW5RGZ8BZ9P4JQ), which listed Codex as affected, ran from the investigating update at `2025-09-22T21:58:19.208Z` to resolution at `2025-09-23T00:56:50.585Z`. No source links it causally to the September 24 meter reports.
- [Enterprise/Edu RBAC partial outage](https://status.openai.com/incidents/01K6KAAN7WXN69E8JET8PYB0D5) began on `2025-10-02`; incident updates span `2025-10-02T19:32:00Z` through resolution at `2025-10-03T17:28:57.510Z`. The [official write-up](https://status.openai.com/incidents/01K6KAAN7WXN69E8JET8PYB0D5/write-up) attributes missing or incorrectly enabled Codex access to a permissions-backfill misconfiguration. It contains no reset claim.
- [Service degradation](https://status.openai.com/incidents/01K72C2CYFJ5GDBAXDQMHT3E90), with Codex affected, ran `2025-10-08T16:07:00Z`–`2025-10-08T18:05:00Z`. It contains no reset or compensation statement.

### Non-qualifying historical leads and contradictions

- [Issue #5999](https://github.com/openai/codex/issues/5999), opened `2025-10-30T22:36:07Z`, and two independent comments on [2025-10-31T14:54:07Z](https://github.com/openai/codex/issues/5999#issuecomment-3473449086) and [2025-10-31T15:49:11Z](https://github.com/openai/codex/issues/5999#issuecomment-3473710567) report reset dates moving from November 3 to November 7 without allowance restoration. This is evidence of a displayed-schedule inconsistency, not a completed reset. The matching [Community thread](https://community.openai.com/t/weekly-limits-reset-date-suddenly-changed/1364615) was posted `2025-10-31T16:04:00Z` by the same reporter and is not independent corroboration.
- [Issue #4199](https://github.com/openai/codex/issues/4199), opened `2025-09-24T23:57:40Z`, claimed limits were halved. OpenAI contributor ae-openai replied at [2025-09-25T17:06:01Z](https://github.com/openai/codex/issues/4199#issuecomment-3335110000) that no limit change had been made, and the reporter later said behavior appeared better. This does not establish a reset or a quota reduction.
- The [October 31 Community discussion](https://community.openai.com/t/issue-with-gpt-5-codex-limits-despite-having-pro-subscription/1359497?page=2) contains one report that an empty quota later showed 99%, but lacks a second independent same-event observation or staff confirmation in the scanned window.

## Recent check: 2026-07-15–2026-08-01

### Reset leads remain pending; none meets the two-independent-observation threshold

- [Issue #36170](https://github.com/openai/codex/issues/36170), opened `2026-07-30T14:33:54Z`, says one Plus account did **not** receive a reportedly distributed July 29 reset.
- [Issue #36426](https://github.com/openai/codex/issues/36426), opened `2026-08-01T03:53:12Z`, refers to a July 28 global reset but derives that claim from an unconfigured social URL and does not supply an independent account-level observation. The social URL was not used as evidence.
- [Issue #35952](https://github.com/openai/codex/issues/35952), opened `2026-07-29T13:21:41Z`, reports a reset date moving to August 5 while the meter remained fully used—a contradiction to successful allowance restoration.
- [Issue #36436](https://github.com/openai/codex/issues/36436), opened `2026-08-01T05:32:16Z`, documents one account's weekly meter changing from 32% used to 0% between `2026-08-01T03:36:07Z` and `2026-08-01T03:36:23Z` (converted from the source's JST timeline), with a new seven-day anchor and no local consume call. The report explicitly cannot distinguish an automatic banked reset, global reset, expiry, or backend defect.

Together these reports are contradictory and do not provide two independent observations of the same July 28/29 or August 1 event. No official OpenAI announcement, Help article, Status record, or repository-staff statement confirming a broad reset was located in the approved sources. Cause and scope remain unknown.

Detection signals to preserve: synchronized meter restoration across independent accounts; banked-credit count before/after; presence of `account/rateLimitResetCredit/consume`; an absolute `reset_at` transition; plan and surface scope; and an official/staff statement with an effective timestamp.

### Recent official incidents, not reset evidence

- [Some users are unable to access Codex](https://status.openai.com/incidents/01KXT44TAQQ2R0AZDDVSJGAC4H): access-denied errors in desktop and CLI, `2026-07-18T08:05:37.238Z`–`2026-07-18T12:58:14.016Z`.
- [Elevated errors affecting ChatGPT](https://status.openai.com/incidents/01KXXDNEAKEPRGFM661SBJJAM6/write-up): the write-up says some Codex requests failed during the July 19 regional identity-service capacity incident; the incident page updates span `2026-07-19T14:49:42.482Z`–`2026-07-19T17:05:02.474Z`.
- [Elevated Errors in Codex Review](https://status.openai.com/incidents/qw645fke): `2026-07-24T07:55:28.019Z`–`2026-07-24T09:35:02.304Z`.

None of these incident records announces compensation or a rate-limit reset, so no causal link should be inferred.

## Coverage gaps

- GitHub issue search does not reliably index every comment body; candidate threads were inspected directly, but an unmentioned comment in a non-candidate thread remains possible.
- The current Status API feed omitted the older 2025 incidents; permanent indexed incident pages and embedded timestamps were used instead.
- Mutable Help and changelog pages do not expose complete point-in-time revision histories, so present text cannot prove what wording was visible on every historical date.
- The reported July 28/29 reset depends on an unconfigured social source and conflicting account reports. It should remain pending unless a configured official/staff source or a second independent same-event observation is found.
