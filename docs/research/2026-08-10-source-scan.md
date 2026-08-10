# Source scan: 2026-03-01–2026-05-31 and 2026-08-09–2026-08-10

Research completed `2026-08-10T09:23:20Z`. This note separates completed
resets from incidents, reset-credit behavior, allowance depletion, and
unsupported causes. It does not create a confirmed observation or model label.

## Scope and searches

- Recent monitoring covered source records published after the automation's
  prior-run cutoff, `2026-08-09T09:17:38Z`, through
  `2026-08-10T09:23:20Z`.
- Historical backfill audited `2026-03-01T00:00:00Z` through
  `2026-05-31T23:59:59Z`, the oldest interval not explicitly covered by an
  earlier source-scan note. Existing ledger records in that interval were
  checked against their permanent source-native URLs.
- The bounded search used OpenAI Status and permanent incident pages; dated or
  currently marked Help content; public `openai/codex` issues, comments, pull
  requests, and releases through GitHub's native API; and the configured public
  OpenAI Community archive. No unconfigured social page was opened or treated
  as evidence.

## Recent monitoring

No recent record qualifies as a new inferred reset. No official or repository-
staff source announces a broad completed reset, and no two independent public
reports describe the same completed restoration.

### Official mechanism clarification, not a reset event

The official [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-codex-and-chatgpt-plan-usage-limits)
page identified itself as updated the day before retrieval and states that
redeeming a full banked reset restarts both the five-hour and weekly windows,
moving the weekly reset date to approximately seven days after redemption.
This is acceptable as a current mechanism clarification retrieved on
`2026-08-10`; the mutable page does not provide a source-backed exact revision
timestamp and does not establish that any reset was redeemed in the recent
window.

### Public accounting and schedule leads remain pending

- [Issue #37776](https://github.com/openai/codex/issues/37776), opened
  `2026-08-10T04:04:19Z`, is one Plus user's report that a usage meter remained
  at 100% while its reset date kept moving. It provides no old/new server
  timestamps, redemption record, restoration transition, independent report,
  or staff explanation. It is a schedule/display lead, not an inferred reset.
- [Issue #37445](https://github.com/openai/codex/issues/37445) reports a
  controlled association between opening the desktop app, background activity,
  and weekly-allowance depletion. A second account independently reported a
  similar no-prompt depletion pattern in a
  [2026-08-10T08:16:30Z comment](https://github.com/openai/codex/issues/37445#issuecomment-5237639635).
  These are two public reports of allowance consumption, not restoration. They
  support a pending accounting investigation, but no configured official or
  repository-staff source confirms the proposed background-activity cause or
  general scope.

The official [August 10 ChatGPT incident](https://status.openai.com/incidents/01KZN8RYNZY8T4QQGB3JWMPYRW)
ran from `2026-08-10T07:21:42Z` to `2026-08-10T08:09:19Z` and lists only one
ChatGPT component. Its permanent page contains no Codex allowance, reset, or
compensation statement, so it is not linked to either public lead.

Recent assessment: **no accepted inferred event**. The Help text is an accepted
current mechanism clarification; #37776 and #37445 remain public signals only.

## Historical audit: March–May 2026

### March 3: all-user incident compensation reset

In [issue #13330](https://github.com/openai/codex/issues/13330), one Pro user
reported an early weekly reset. OpenAI repository contributor etraut-openai
stated at
[`2026-03-03T05:15:21Z`](https://github.com/openai/codex/issues/13330#issuecomment-3988712564)
that an earlier incident had affected some users, weekly usage was reset for all
users as compensation, remaining usage would return to 100%, and the weekly
window would restart on next use. This supports the existing day-precision
inferred event and confirmed compensation attribution. It does not supply the
incident's permanent Status URL or prove simultaneous account-level completion.

### March 4: Plus/Pro promotional-entitlement correction

In [issue #13186](https://github.com/openai/codex/issues/13186), etraut-openai
stated at
[`2026-03-04T21:30:36Z`](https://github.com/openai/codex/issues/13186#issuecomment-4000418998)
that a defect prevented the 2x promotional increase from applying to an
estimated 9% of Plus and Pro users, the defect had been fixed, and rate limits
were being reset for all users on those two plans. This supports the existing
hour-precision inferred reset and confirmed narrow cause. The timestamp is the
staff statement, not proof of simultaneous delivery; later comments in the same
thread reported continued high consumption or missing restoration, so rollout
and separate accounting symptoms remain contradictions rather than reasons to
broaden the causal claim.

### March 7: broad Plus/Pro reset amid multiple issues

OpenAI staff separately documented a cross-region usage-accounting
synchronization issue and account-specific resets in
[issue #13568](https://github.com/openai/codex/issues/13568#issuecomment-4015658187),
then announced at
[`2026-03-07T23:24:30Z`](https://github.com/openai/codex/issues/13568#issuecomment-4017630107)
that limits had been reset for all Plus and Pro users. One week later, the same
contributor explained in
[issue #14701](https://github.com/openai/codex/issues/14701#issuecomment-4060978626)
that a couple of service incidents had prompted resets of both the five-hour
and seven-day windows. These records support the existing hour-precision
inferred reset. Because staff discussed multiple concurrent incidents and did
not assign one exclusive cause to the broad action, the causal assessment must
remain attributed rather than singularly confirmed.

Public reports that Business accounts did not share later Plus/Pro remediation
appear in [issue #14329](https://github.com/openai/codex/issues/14329) and a
separate [April report](https://github.com/openai/codex/issues/17157). They
preserve plan-scope uncertainty for promotional or plan-limited resets; neither
configured source contains staff confirmation that Business was eligible for
the March 4 or March 7 actions.

### April 28: paid-plan promotional reset

The configured Community archive preserves a
[2026-04-28 public announcement](https://community.openai.com/t/codex-rate-limits-reset-for-all-paid-plans-april-28-2026/1379921)
claiming that all paid-plan limits had been reset. A separate account reported
an early weekly reset in
[issue #19987](https://github.com/openai/codex/issues/19987), where etraut-openai
confirmed at
[`2026-04-28T15:57:24Z`](https://github.com/openai/codex/issues/19987#issuecomment-4336950477)
that resetting limits restores remaining usage to 100% and restarts the
window. This supports the existing paid-plan inferred reset. The promotional
motivation remains **attributed**, because the configured archive embeds an
unconfigured social statement whose account identity was not independently
promoted under the source policy.

[Issue #20618](https://github.com/openai/codex/issues/20618), opened May 1,
reported 89% remaining before and after an older displayed boundary while the
future date changed. Because the April 28 action restarted the window, this is
compatible with a superseded old schedule or stale display; it does not
establish another completed reset or disprove the April 28 event.

### May 5: reset observed; specific outage remains unknown

[Issue #21226](https://github.com/openai/codex/issues/21226) reported weekly
remaining usage increasing from roughly 70% to 100% while the renewal date
moved. etraut-openai explained at
[`2026-05-05T18:36:17Z`](https://github.com/openai/codex/issues/21226#issuecomment-4381991662)
that this occurs when OpenAI resets usage limits and that such resets are
occasionally used to compensate for outages. This supports the existing
day-precision inferred reset. No source identifies a specific incident for
this action, so outage compensation remains possible/attributed rather than a
confirmed event-specific cause.

### May 16 and May 23: post-issue resets with delivery uncertainty

The configured Community archive preserves a
[May 16 promised reset](https://community.openai.com/t/1381065/1) after fixes
for GPT-5.5 behavior, and an OpenAI Support account acknowledged the expected
action in the [same archive](https://community.openai.com/t/1381065/2).
[Issue #23063](https://github.com/openai/codex/issues/23063), opened later that
day, reported that the display had returned to full while enforcement still
used the old exhausted allocation; [issue #23206](https://github.com/openai/codex/issues/23206)
independently reported a changed weekly allocation the next day. Together they
support the existing day-precision inferred event, while preserving
account-level enforcement and scope contradictions. Because the initiating
statement is archived from an unconfigured social source, its causal link
remains attributed.

OpenAI Status documented an
[increase in users hitting Codex rate limits](https://status.openai.com/incidents/tcc95qa3)
from `2026-05-22T16:37:50Z` until resolution on May 23. The configured Community
archive later preserved a
[May 23 statement](https://community.openai.com/t/1381065/5) that a
long-session compaction optimization had reduced cache hit rates, the change
was rolled back, and limits were reset for all accounts. These sources support
the existing day-precision inferred reset and an attributed cache-regression
cause. The canonical Status page confirms the incident but does not itself
state that a reset occurred, and the exact completion time for each account is
unknown.

## Detection signals and disposition

- Preserve old and new absolute reset timestamps, window durations, used or
  remaining percentage, plan, and enforcement state around any restoration.
- Record whether a reset was scheduled, operator initiated, or banked-credit
  redemption; the current Help mechanism says redemption restarts both active
  windows.
- Compare display restoration with enforcement returning; the May 16 evidence
  shows that the two can temporarily disagree.
- Keep usage depletion separate from restoration. The recent background-
  activity reports need reproducible staff or official corroboration before a
  cause assessment, and cannot become a reset label.
- Preserve plan eligibility and non-delivery reports. Broad wording such as
  "all users" or "all paid plans" does not prove simultaneous account-level
  completion.

Disposition: the March–May records already represented in
`data/research-history.json` remain supported with their existing uncertainty;
this audit found no new historical event requiring a separate ledger record.
No recent or historical public record in this scan becomes a project confirmed
observation.

## Remaining coverage gaps

- The next oldest interval without a dedicated bounded source-scan note is
  `2026-06-01` through `2026-07-14`; existing ledger entries there should be
  audited against source-native records on a future run.
- Mutable Help pages do not provide exact revision timestamps, and the
  configured Community archive can preserve an announcement without
  independently authenticating the embedded social identity.
- GitHub issue search is strongest for issue and pull-request records; a
  relevant comment in an unrelated historical thread may remain undiscovered.
