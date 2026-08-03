# Source scan: 2025-11-01–2025-12-31 and 2026-08-02–2026-08-03

Research completed `2026-08-03T09:24:44Z`. This note separates reset evidence from incidents, product/mechanism changes, accounting or display defects, and unsupported causes. It does not create a confirmed observation or model label.

## Scope and searches

- Recent monitoring covered records published after the prior run cutoff (`2026-08-02T09:22:00Z`) through `2026-08-03T09:24:44Z`.
- Historical backfill covered `2025-11-01T00:00:00Z` through `2025-12-31T23:59:59Z`, continuing the prior broad scan that ended October 31.
- Searched source-native OpenAI Status incident pages; OpenAI announcements, Help, and developer documentation for `Codex`, `usage limit`, `weekly`, `reset`, `rate limit`, `credits`, `quota`, and dated variants; public `openai/codex` issues, comments, pull requests, and releases through GitHub's native API; and the configured OpenAI Community host for the same date and term families.
- No unconfigured social source was opened or treated as evidence. Social links embedded in GitHub or Community records remain unverified unless the configured permanent page itself preserves the relevant statement.

## Ledger comparison and result

The repository already contains five inferred-reset records in this historical range: November 2, November 5, November 23, December 3, and December 17. The scan rechecked their principal threads, surrounding reports, and official incidents.

- The November 2 record remains grade C with unknown cause: two independent reports describe a full weekly allocation and a moved renewal date, but no official explanation was found.
- The November 5 record remains grade B: [official Status](https://status.openai.com/incidents/01K9ARX310CM6V219R0GF7RNC9) documents the outage and the configured [Community archive](https://community.openai.com/t/1364782/38) preserves the outage-resolution/reset statement.
- The November 23 record remains grade A with an attributed outage-compensation cause. [Official Status](https://status.openai.com/incidents/01KAPG4EE5JWEV04TPZ2SNNK8X) documents the weekend Codex outage; the existing repository-staff explanation and independent reports remain aligned.
- The December 3 record remains grade A. An OpenAI contributor stated that the team had reset limits for everyone as the first mitigation for variable dates and available usage in [issue #7354](https://github.com/openai/codex/issues/7354#issuecomment-3605009727), published `2025-12-03T04:09:43Z`. This independently agrees with the already-ledgered staff statement in issue #5999. The same-day [Codex task-creation incident](https://status.openai.com/incidents/01KBGV0B1KYJAGHRD705NWNZXE) remains temporally adjacent, not the stated cause.
- The December 17 record remains grade A. [Official Status](https://status.openai.com/incidents/01KCM7PAMQMCM8KAB6ZCWPKNK1) documents elevated Codex and Responses API errors across December 16–17. A later OpenAI contributor explanation in [issue #8367](https://github.com/openai/codex/issues/8367#issuecomment-3679232916), published `2025-12-21T18:13:48Z`, adds durable corroboration that the outage compensation reset both usage amount and the window date. It strengthens the existing record's mechanism detail but does not establish a new event, exact completion time, or universal affected-account scope.

Result: **no new inferred reset and no correction to an existing event is warranted from this scan**. The December 3 and December 17 sources above are additional corroboration for existing records. One new qualifying historical mechanism change was found and is described next.

## New qualifying mechanism change: percentage display flipped to remaining

[PR #6482](https://github.com/openai/codex/pull/6482), merged `2025-11-11T01:13:10Z`, changed the CLI status card from `percent used` to `percent remaining` and relabeled the summary from “used” to “left.” OpenAI contributor etraut-openai then stated in [issue #6635](https://github.com/openai/codex/issues/6635#issuecomment-3530366186), published `2025-11-14T01:00:47Z`, that usage display across Codex CLI, the VS Code extension, and web had been made consistent and now represented usage remaining.

Assessment: this is a source-backed **mechanism/presentation change**, not a reset. Evidence grade A; cause confidence confirmed for the display-semantics change. It materially affects historical interpretation because a transition from `0% used` to `100% left` can describe identical allowance state rather than a restored quota. A durable ledger mechanism record would prevent pre- and post-November reports from being normalized under the wrong percentage convention.

Contradictions and limits: the issue reporter also said the client offered a mini-model fallback while showing 100% free. That separate enforcement/display mismatch was not resolved by the semantic change and should not be treated as proof that a reset occurred.

Future detection signals: retain the source surface and version with every percentage; normalize explicit `used` versus `left` labels before comparing values; compare raw server `percent_used` separately from rendered progress bars; and require enforcement state plus `reset_at` movement before interpreting a percentage inversion as a reset.

## Historical non-qualifying leads and contradictions

- [Issue #6429](https://github.com/openai/codex/issues/6429), opened `2025-11-09T16:30:46Z`, reports a weekly reset date moving from November 9 to November 12, but no completed restoration. It is another schedule inconsistency, not an inferred reset.
- [Issue #7354](https://github.com/openai/codex/issues/7354) and related [issue #7402](https://github.com/openai/codex/issues/7402) contain independent reports from November 27 through December 1 of reset dates and remaining percentages oscillating across CLI, IDE, and web. Repository staff initially characterized the behavior as likely client-side display inconsistency, then used the December 3 all-account reset as mitigation. These reports support the existing December 3 record and preserve the contradiction between display and enforcement; they do not establish separate daily resets.
- [Issue #7718](https://github.com/openai/codex/issues/7718), opened `2025-12-08T03:26:17Z`, and [issue #7764](https://github.com/openai/codex/issues/7764), opened `2025-12-09T07:12:21Z`, report web/CLI discrepancies. OpenAI contributor comments explicitly track both as the same underlying inconsistency. Neither supplies a new reset event.
- [Issue #8367](https://github.com/openai/codex/issues/8367), opened `2025-12-20T18:58:27Z`, reports an early reset. The later staff explanation ties it to the prior week's service outage and therefore corroborates the existing December 17 event rather than creating a December 20 event.
- [Issue #8386](https://github.com/openai/codex/issues/8386), opened `2025-12-21T09:01:04Z`, describes carried usage with a newly anchored date after resubscription. It is a single account lifecycle report with no staff confirmation in the historical window.
- [Issue #8581](https://github.com/openai/codex/issues/8581), opened `2025-12-28T08:29:43Z`, reports immediate Plus exhaustion after a Pro-to-Plus downgrade. Later comments discuss applying existing weekly use to the smaller plan allowance, but the source-native 2025 record does not establish an official mechanism or reset.
- The November and December official incidents were kept separate unless a staff source made the reset link. Other searched Codex incidents—including [November 4 web degradation](https://status.openai.com/incidents/01K96HVTZ8JZRGWPCADHQ9N061), [November 18 task-creation errors](https://status.openai.com/incidents/01KACCE2MY2Z917Q4J9ZKXZ9F1), [December 9 web/code-review issues](https://status.openai.com/incidents/01KC2CJTQMDW8ZX3S4S4Q8PPNQ), and [December 11–12 GitHub connector errors](https://status.openai.com/incidents/01KC6WSFM4ECT1Y5XBPF2AMXV9)—contain no reset or compensation statement.
- OpenAI's [GPT-5.1-Codex-Max announcement](https://openai.com/index/gpt-5-1-codex-max/), published `2025-11-19`, establishes a default-model/product change and describes the model as more token-efficient. It does not announce a quota reset, new reset window, or limit amount.

## Recent monitoring: no qualifying reset after the prior cutoff

No official OpenAI Status incident, announcement, Help/developer update, repository-staff reset statement, or configured Community record published in the recent window established a new reset.

- [Issue #36708](https://github.com/openai/codex/issues/36708), opened `2026-08-03T08:53:20Z`, reports remote enforcement returning quota exceeded while the dashboard and `/status` showed 58% weekly remaining. This is a single enforcement/entitlement contradiction, not restoration evidence.
- One account posted the same report to [issue #34360](https://github.com/openai/codex/issues/34360#issuecomment-5162537504) and [issue #34865](https://github.com/openai/codex/issues/34865#issuecomment-5162539605) at `2026-08-03T05:11Z`: the UI showed 100% weekly remaining while enforcement rejected requests and purchased credits were consumed. Duplicate posts by one account are not independent corroboration and do not demonstrate a reset.
- A comment in [issue #21216](https://github.com/openai/codex/issues/21216#issuecomment-5158634164), published `2026-08-02T14:46:46Z`, reports a Pro account rendered as Pro Lite, rapid weekly depletion, and a moved future reset date. It is a plan-entitlement/accounting lead with no staff confirmation.
- [Issue #36665](https://github.com/openai/codex/issues/36665), opened `2026-08-03T03:06:15Z`, provides a detailed public report of compaction-driven token consumption in one session. It may be useful for investigating usage drain, but it neither observes a reset nor establishes a server-side causal assessment.
- [Issue #36710](https://github.com/openai/codex/issues/36710), opened `2026-08-03T09:18:06Z`, proposes banking scheduled weekly resets. It describes desired behavior, not current mechanism evidence.

Recent cause confidence: **unknown** for the enforcement/entitlement contradictions. No configured official or staff source attributes them to the August 1 inferred reset, a plan migration, or a backend incident.

Future detection signals: compare enforcement with both UI surfaces; retain plan tier returned by the server; distinguish included allowance from purchased-credit consumption; capture old and new absolute reset timestamps; treat cross-posts by one account as one report; and seek a permanent staff statement before attributing entitlement or reconciliation behavior.

## Coverage gaps

- GitHub's issue search is strongest for issue and pull-request records; the repository comments endpoint was scanned after the recent cutoff, but a relevant historical comment in an unrelated thread may remain undiscovered.
- Mutable Help and developer pages do not expose complete point-in-time revision histories. Current wording was not used to assert historical behavior.
- Community search produced corroborating records already represented in the ledger, but no additional independent November–December event cluster.
- Official Status records incidents, not account-level compensation completion. An incident alone remains insufficient reset evidence.
- No project `verified-observation` issue was created or inferred from this public research. Confirmed model-label count is unchanged.
