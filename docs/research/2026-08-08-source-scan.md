# Source scan: 2026-01-01–2026-02-28 and 2026-08-03–2026-08-08

Research completed `2026-08-08T16:23:02Z`. This note separates completed resets from incidents, promotions, reset-credit actions, accounting/display defects, and unsupported causes. It does not create a confirmed observation or model label.

## Scope and searches

- Recent monitoring covered source records published from `2026-08-03T09:30:00Z` through `2026-08-08T16:23:02Z`.
- Historical backfill covered `2026-01-01T00:00:00Z` through `2026-02-28T23:59:59Z`. Existing notes broadly covered July–December 2025 but did not cover January–February 2026; the ledger had no event in this interval.
- Searched source-native OpenAI Status incident pages and the current Status API; OpenAI Help, release notes, developer documentation, announcements, and pricing; and public `openai/codex` issues, comments, pull requests, and discussions for `reset`, `usage limit`, `rate limit`, `weekly`, `quota`, `credits`, and related terms.
- No Community record is used as evidence in this note. No unconfigured social source was opened or treated as evidence.

## Result

No new inferred reset qualifies in either range. No recent record supplies an official or repository-staff statement that a broad reset occurred, and no cluster of two independent public reports describes the same completed allowance restoration. This public-source research created no confirmed model label. Separately, today's live collector imported the project's first `verified-observation` from the installed local observer; that confirmed event is not inferred from this scan.

The historical scan did find two durable mechanism changes that are suitable for ledger representation: the February 2 promotional limit increase and the February 11 introduction of named, multiple rate-limit buckets. Neither is a reset event.

## Historical backfill: January–February 2026

### February 2 promotional 2x limits: qualifying mechanism change

OpenAI's [ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) dated `2026-02-02` announced the Codex app and a limited-time promotion: Free and Go received included Codex access, while Plus and Pro received 2x Codex rate limits. The [Enterprise and Edu release notes](https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes) separately stated on `2026-02-02` that eligible Enterprise/Edu users without flexible pricing received 2x Codex rate limits. OpenAI repository contributor etraut-openai clarified in the answered [discussion #11406](https://github.com/openai/codex/discussions/11406) on `2026-02-11` that the increase applied regardless of whether the user worked in the app.

Assessment: **mechanism/promotion change**, day precision `2026-02-02`, evidence grade A. Cause confidence is **confirmed** for a product-launch promotion. It changes the size of applicable limit windows; it does not prove a reset occurred on February 2, does not establish an individual account's effective allocation, and must not be a confirmed observation.

Contradictions: [issue #10663](https://github.com/openai/codex/issues/10663), opened `2026-02-04T19:17:42Z`, and [issue #11785](https://github.com/openai/codex/issues/11785), opened `2026-02-13T21:24:04Z`, each reported that the promotion did not appear effective for one account. In a comment on #11785, etraut-openai stated on `2026-02-13` that the 2x limits were in effect, while noting that percentage-only reporting, model, reasoning level, and task complexity made account-level comparison difficult. These reports preserve rollout/accounting uncertainty; they do not negate the official promotion or establish a reset.

Future detection signals: retain the plan and effective promotion period; compare absolute allowance where officially exposed rather than percentages alone; distinguish five-hour and seven-day buckets; record surface and model; and preserve staff statements about whether an offer applies globally or only to one client.

### February 11 named multiple rate-limit buckets: qualifying mechanism change

OpenAI contributor xl-openai's [PR #11260](https://github.com/openai/codex/pull/11260), merged `2026-02-11T04:09:31Z`, added end-to-end support for multiple named limits, including `additional_rate_limits`, per-name snapshots, `rate_limits_by_name`, and bucket-specific error messages. [PR #11557](https://github.com/openai/codex/pull/11557), opened `2026-02-12T07:43:12Z`, then fixed inheritance of a `limit_name` between snapshots.

Assessment: **telemetry/enforcement mechanism change**, exact merge precision for #11260, evidence grade A. Cause confidence is **confirmed** for representing independent named quota buckets. It is not a reset.

Future detection signals: retain `limit_name`; compare the bucket named by an enforcement error with the bucket displayed by `/status`; do not infer restoration from one healthy bucket when another remains exhausted; and detect stale inherited names across consecutive snapshots.

### Historical reset leads that do not qualify

- [Issue #8998](https://github.com/openai/codex/issues/8998), opened `2026-01-09T20:11:31Z`, is one account's report that access returned after a quota reset while a stale IDE banner remained. Contributor etraut-openai described the extension's 60-second quota-data TTL and polling behavior at [2026-01-09T21:31:34Z](https://github.com/openai/codex/issues/8998#issuecomment-3730637020), but did not corroborate the account event. One report is below the inference threshold.
- [Issue #9508](https://github.com/openai/codex/issues/9508), opened `2026-01-20T00:22:44Z`, requested a deterministic weekly anchor and alleged that a new period began on first post-expiry use. The opening record has no independent same-event report or staff confirmation and is a mechanism lead, not a completed reset.
- [Issue #11879](https://github.com/openai/codex/issues/11879), opened `2026-02-16T01:24:31Z`, independently described a first-use-anchored weekly period, but did not identify the same account event or restoration time as #9508. The two reports support investigation of rolling-window anchoring, not clustering into a reset.
- [Issue #12747](https://github.com/openai/codex/issues/12747), opened `2026-02-25T05:45:20Z`, reported remaining usage falling before a scheduled reset. That is depletion or display inconsistency, not restoration.

Cause confidence for these leads is **unknown**. A fixed calendar boundary, rolling first-use anchor, stale display state, enforcement mismatch, and account-specific behavior remain distinct possibilities.

### Official incidents kept separate

The scan found official Codex-affecting incidents at [January 8](https://status.openai.com/incidents/01KEDP2078ND35EQG75BVDZE5E) (`2026-01-08T02:13:04.359Z`–`02:30:50.869Z`), [January 22](https://status.openai.com/incidents/01KFK1A9AAJ246K5G966PSQQJK) (`2026-01-22T14:21:44.137Z`–`14:55:44.881Z`), [January 27](https://status.openai.com/incidents/01KFZB0A5C1D3TQED136VXFT9W) (`2026-01-27T09:01:56.267Z`–`11:03:26.719Z`), [February 3](https://status.openai.com/incidents/01KGJK9Q6PDB3C3VX6MPCY6106), [February 4](https://status.openai.com/incidents/01KGMVV926ZSCD1MSDBS07AWYA), [February 5](https://status.openai.com/incidents/01KGNJACX0T5CYY1YWS8RNW6S6), [February 9](https://status.openai.com/incidents/01KH1KTV2VBD62R0MRZFJ13XNE) (`2026-02-09T16:30:24.858Z`–`20:22:27.160Z`), [February 16](https://status.openai.com/incidents/eyeambp4) (`2026-02-16T17:27:35.085Z`–`17:47:39.790Z`), and [February 25](https://status.openai.com/incidents/01KJB80QA8P62R9X3B71YAZEAK) (`2026-02-25T18:15:00Z`–`21:05:00Z`). None of these permanent incident pages announces allowance restoration, compensation, or a rate-limit reset. They are incidents only; no causal reset claim is supported.

## Recent monitoring: August 3–8, 2026

### Individual banked-reset actions are public signals, not a broad reset

- One Pro Lite account reported redeeming a banked reset at approximately `2026-08-05T13:11` local time in [issue #34865](https://github.com/openai/codex/issues/34865#issuecomment-5189008189), published `2026-08-05T07:41:31Z`. The display showed a new seven-day window and 93% remaining, while enforcement still referenced the exhausted pre-reset window. This is one self-reported manual action and an enforcement contradiction, not a verified observation.
- [Issue #37250](https://github.com/openai/codex/issues/37250), opened `2026-08-06T10:00:21Z`, separately reports a manual weekly reset reaching 100% before intermittent requests were blocked. Because it is another user-triggered reset on another account and time, it does not independently corroborate the same event as #34865.
- [Issue #37396](https://github.com/openai/codex/issues/37396), opened `2026-08-07T07:06:30Z`, reports an in-app notice that a new reset was available without the banked-reset count increasing; redeeming the older reset restored the weekly display to 100% and reduced the count to zero. This is a missing-credit lifecycle report, not proof that the advertised grant existed or that a broad reset completed.

Cause confidence is **unknown**. The sources support a visible divergence between reset-credit balance, quota display, and enforcement, but no staff source identifies the server-side cause.

### Other recent contradictions and nonqualifying evidence

- [Issue #37442](https://github.com/openai/codex/issues/37442), opened `2026-08-07T13:47:41Z`, initially claimed a weekly reset was late; the reporter later corrected the interpretation at [2026-08-07T19:23:17Z](https://github.com/openai/codex/issues/37442#issuecomment-5221161224), explaining that the UI omitted the date and the reset was scheduled for August 8. It is not a missed reset.
- [Issue #37455](https://github.com/openai/codex/issues/37455), opened `2026-08-07T15:07:25Z`, reports the desktop panel showing 1% remaining while the server response and VS Code showed 19%. Successful requests contradicted the panel. This is display evidence, not a reset.
- [Issue #37532](https://github.com/openai/codex/issues/37532), opened `2026-08-08T04:23:03Z`, reports 86% remaining dropping to 1% near an older scheduled weekly boundary after a manual reset. Independent comments at [2026-08-08T04:41:50Z](https://github.com/openai/codex/issues/37532#issuecomment-5224551150) and [2026-08-08T15:04:10Z](https://github.com/openai/codex/issues/37532#issuecomment-5226674263) describe similar abrupt depletion. These records may form a coordinated accounting-defect lead, but they observe allowance loss, not restoration, and therefore are not an inferred reset.
- The official [ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) state on `2026-08-06` that the GPT-5.6 ChatGPT update did not change Work or Codex. The current [Codex referral promotion terms](https://help.openai.com/en/articles/20001271), retrieved `2026-08-08T16:23:02Z`, clarify that rate-limit resets are not credits and that a banked reset normally expires after 30 days unless an offer states otherwise. These are mechanism clarifications, not evidence of a recent completed reset.
- Recent official Status records included [August 4 ChatGPT conversation errors](https://status.openai.com/incidents/01KZ6CT9K9Q52S3707W75MNBGB), [August 5 image-generation errors](https://status.openai.com/incidents/01KZ96S5HEWX0CX26W2WFYFKE6), and [August 5 Custom GPT action issues](https://status.openai.com/incidents/01KZ9DMQD2GJ8JJWDN7572RH78). None announces Codex reset compensation or allowance restoration, so no causal link is supported.

Recent detection signals: compare old and new absolute `reset_at`; retain the reset-credit count before and after redemption; record the redemption method and timestamp; compare the bucket named by the rejection with every displayed named bucket; verify enforcement separately from percentages; preserve the date as well as local time in UI text; and seek synchronized restoration across independent accounts or a permanent staff statement before inferring a broad reset.

## Coverage gaps

- GitHub issue search does not reliably index every comment body. The recent repository comments endpoint was scanned after the cutoff, but a relevant historical comment in an unrelated thread may remain undiscovered.
- Mutable Help and pricing pages do not expose complete point-in-time revision histories. Retrieval time and dated release-note sections were preserved; current wording was not used to invent a historical publication time.
- Status incidents document service availability, not account-level compensation. An incident remains insufficient reset evidence unless its page or a staff source explicitly links it to allowance restoration.
- The January–February scan found no qualifying inferred reset. The strongest unresolved historical lead is whether weekly windows were first-use anchored; it needs a staff statement or event-level reports with old/new server timestamps.
- The August 5–8 banked-reset reports need staff corroboration and cross-account server-timestamp evidence before any mechanism cause or broad event can be accepted.
