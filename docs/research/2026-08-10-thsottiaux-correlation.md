# Correlating the maintainer-confirmed `@thsottiaux` reset signal

Research completed `2026-08-10`. The repository maintainer confirmed that
[`https://x.com/thsottiaux`](https://x.com/thsottiaux) is the public account to
evaluate. This removes the prior identity ambiguity for this exact handle; it
does not turn its posts into project observations or prove account-level
delivery.

## Method and source boundary

Only canonical `x.com/thsottiaux/status/<id>` URLs were accepted. Post bodies
were verified through X's public first-party embed response for those canonical
URLs. X's own [ID documentation](https://docs.x.com/fundamentals/x-ids) states
that each 64-bit Snowflake ID encodes the object's creation timestamp; the UTC
times below are decoded from the canonical post IDs at millisecond precision.
X's embed output exposes the calendar date but not the full timestamp, so the
decoded times are labeled as ID-derived rather than copied from a displayed
timestamp.

GitHub issues and configured OpenAI Community pages were used to discover
canonical URLs and find delivery contradictions. Search snippets were not used
as evidence. No authenticated timeline, alternate frontend, access-control
bypass, cookie, or private account data was used.

## Canonical posts located

| ID-derived UTC time | Canonical post | Source-native claim | Correlation/disposition |
| --- | --- | --- | --- |
| `2025-11-05T20:19:29.788Z` | [Post `1986166501435711936`](https://x.com/thsottiaux/status/1986166501435711936) | A Codex outage was resolved and rate limits had been reset. | Strengthens existing `research-reset-2025-11-05`; the action is explicit, but account-by-account completion and exact breadth remain unknown. |
| `2026-03-11T05:38:13.280Z` | [Post `2031605592352313567`](https://x.com/thsottiaux/status/2031605592352313567) | Codex was stable again; the reset button had been pressed and users should see it shortly. | New historical candidate. [Issue #14329](https://github.com/openai/codex/issues/14329), opened `2026-03-11T10:00:05Z`, reports Business nonreceipt and links this exact post. |
| `2026-04-07T23:13:48.132Z` | [Post `2041655710346572085`](https://x.com/thsottiaux/status/2041655710346572085) | The account announced three million weekly users and said rate limits were being reset in celebration. | New promotional-reset candidate. [Issue #17157](https://github.com/openai/codex/issues/17157), opened `2026-04-08T20:47:02Z`, reports Business nonreceipt and links the post. |
| `2026-04-28T05:28:43.167Z` | [Post `2048997818673537399`](https://x.com/thsottiaux/status/2048997818673537399) | Limits had been reset for all paid plans to celebrate a good week and allow more GPT-5.5 use. | Strong direct support for existing `research-reset-2026-04-28` and its promotional motivation. [Issue #19987](https://github.com/openai/codex/issues/19987) independently observed an early window restart; [staff explained the reset behavior](https://github.com/openai/codex/issues/19987#issuecomment-4336950477). |
| `2026-05-15T15:56:00.402Z` | [Post `2055316274394300829`](https://x.com/thsottiaux/status/2055316274394300829) | The team was investigating reports of degraded GPT-5.5 behavior; no conclusion had been reached and systems appeared healthy. | Precursor only; it supports investigation state, not a reset or cause. |
| `2026-05-16T00:31:50.844Z` | [Post `2055446089957036402`](https://x.com/thsottiaux/status/2055446089957036402) | Two issues had been fixed, monitoring continued, and usage would be reset that evening. | Strengthens the planned-mitigation attribution for `research-reset-2026-05-16`, but the post is a promise rather than completion evidence. Later [issue #23063](https://github.com/openai/codex/issues/23063) reported display restoration with stale enforcement, while [issue #23206](https://github.com/openai/codex/issues/23206) independently reported a changed allocation. |
| `2026-05-23T20:14:35.618Z` | [Post `2058280452851638313`](https://x.com/thsottiaux/status/2058280452851638313) | A compaction optimization had reduced cache-hit rates, was rolled back, and usage limits had been reset for all accounts. | Strong direct support for `research-reset-2026-05-23` and its narrow cache-regression attribution. The [Status incident](https://status.openai.com/incidents/tcc95qa3) independently documents increased Codex rate-limit exhaustion but does not itself announce the reset. |
| `2026-06-04T00:25:58.496Z` | [Post `2062329981548802523`](https://x.com/thsottiaux/status/2062329981548802523) | Three small Codex-reliability incidents had occurred in 24 hours, and limits had been reset across all paid plans. | Strong direct support for `research-reset-2026-06-04`; the [official incident write-up](https://status.openai.com/incidents/01KT5XJ5ATD6RMYP908WS69FVD/write-up) independently documents erroneous Codex 429s from a rate-limit dependency. Universal completion still is not established. |
| `2026-06-12T16:17:20.023Z` | [Post `2065468501750649006`](https://x.com/thsottiaux/status/2065468501750649006) | Future resets would let users choose when the reset applied. | Direct support for `research-mechanism-2026-06-12`; this is reset-banking mechanism evidence, not a completed reset. Merged [PR #28143](https://github.com/openai/codex/pull/28143) and [PR #28154](https://github.com/openai/codex/pull/28154) independently establish implementation. |
| `2026-06-16T18:49:52.426Z` | [Post `2066956441173323943`](https://x.com/thsottiaux/status/2066956441173323943) | A fix was complete and rate limits across all plans would be reset within 24 hours. | Strong scope and intent support for `research-reset-2026-06-17`, but not exact completion. [Issues #28811](https://github.com/openai/codex/issues/28811) and [#28837](https://github.com/openai/codex/issues/28837) preserve immediate-versus-banked and missing-credit contradictions. |
| `2026-06-28T23:54:07.968Z` | [Post `2071381664853319742`](https://x.com/thsottiaux/status/2071381664853319742) | Everyone's Codex usage had been hard-reset during an ongoing investigation; existing banked resets were left for user-timed redemption. | New hard-reset candidate, distinct from a banked-credit grant. It falls during the [official fast-depletion incident](https://status.openai.com/incidents/01KW2E6W0503W4NXJNCVAG8V6T), but the post says investigation was ongoing and does not identify one exclusive cause. |
| `2026-06-29T23:39:41.629Z` | [Post `2071740419030053227`](https://x.com/thsottiaux/status/2071740419030053227) | Limits would be fully reset again within an hour and an additional banked reset credited within 24 hours; the investigation found no single central issue. | New, explicitly separate reset-plus-credit candidate. Do not collapse the promised hard reset and later banked grant into one completed event or assign a single cause. [Issue #30726](https://github.com/openai/codex/issues/30726) links both June posts while reporting missing banked credits. |
| `2026-07-12T17:59:57.945Z` | [Post `2076365965915467978`](https://x.com/thsottiaux/status/2076365965915467978) | The five-hour restriction was being temporarily removed for Plus, Business, and Pro plans alongside efficiency work. | Mechanism/promotion signal, not reset evidence. It should remain separate from seven-day-window restoration. |
| `2026-07-13T18:29:31.013Z` | [Post `2076735790567338203`](https://x.com/thsottiaux/status/2076735790567338203) | A banked reset had been added to everyone's account for a seven-million-user milestone, redeemable in desktop or web to replenish weekly usage. | Banked-credit grant, not a completed active-window reset. [Issue #32972](https://github.com/openai/codex/issues/32972) reports nonreceipt and links the post. |
| `2026-07-14T19:34:54.638Z` | [Post `2077114635308986427`](https://x.com/thsottiaux/status/2077114635308986427) | At eight million active Codex and ChatGPT Work users, usage limits were again being reset for all; the five-hour limit remained removed. | Materially strengthens `research-reset-2026-07-14` and replaces a previously unsupported milestone hypothesis with a direct attributed announcement. [Issue #33513](https://github.com/openai/codex/issues/33513) reports an automatic weekly restoration, while [issue #33344](https://github.com/openai/codex/issues/33344) reports Business nonreceipt and links the exact post. |
| `2026-08-08T20:29:22.056Z` | [Post `2086188036493344823`](https://x.com/thsottiaux/status/2086188036493344823) | Limits had been reset for all paid ChatGPT Work and Codex users. | Exceptionally tight correlation with project [verified observation #2](https://github.com/KyleStay/codex-reset-monitor/issues/2): its samples bound the transition to `20:27:39.534Z`–`20:32:48.433Z`, and the provider reset anchor became `2026-08-15T20:29:18Z`, four seconds before the post timestamp. This supports an attributed operator action, not proof of universal delivery or a replacement for the verified observation. |

The short [May 23 precursor post](https://x.com/thsottiaux/status/2057980213854921096)
at ID-derived `2026-05-23T00:21:33.063Z` says only "OK" in reply to a reset
request. It is not independently meaningful reset evidence; the later explicit
completion post is the durable source.

## Correlation changes recommended

### Existing records that become materially stronger

- `research-reset-2025-11-05`: keep inferred, but replace archive-only
  ambiguity with the canonical post and exact statement time. The post directly
  joins service recovery and the operator action; it still does not verify each
  account.
- `research-reset-2026-04-28`, `research-reset-2026-05-23`, and
  `research-reset-2026-06-04`: canonical staff posts directly support the
  announced scope and narrow motivation. Preserve nonrecipient and rollout
  contradictions.
- `research-reset-2026-05-16` and `research-reset-2026-06-17`: the posts support
  a planned reset and its announced scope, not exact completion time. Completion
  still depends on later independent reports.
- `research-mechanism-2026-06-12`: the canonical post directly supports the
  banked-reset design, corroborated by repository implementation.
- `research-reset-2026-07-14`: the eight-million-user promotion is no longer an
  unsupported hypothesis. The direct post supports the operator's stated
  motivation and intended scope; observed delivery remains mixed.
- Verified observation #2 remains the only account-level confirmation for the
  August 8 transition. The post supplies an external operator signal with near-
  exact temporal alignment, not a second observation label.

### New historical candidates

The March 11, April 7, June 28, and June 29 posts each support a distinct
historical candidate because they are explicit staff reset statements and do
not duplicate an existing ledger date. March 11 and April 7 have source-native
nonrecipient reports. June 28 explicitly says a hard reset already occurred;
June 29 separately promises another hard reset plus a banked credit. Additions
should preserve statement time versus completion time and avoid converting the
June 29 promise into an exact observed reset timestamp.

### Claims still unresolved

No canonical `@thsottiaux` post was located for the claimed July 28/29 or August
1 broad resets. The August 1 inferred event therefore remains supported by
[issues #36436](https://github.com/openai/codex/issues/36436),
[#36481](https://github.com/openai/codex/issues/36481), and
[#36468](https://github.com/openai/codex/issues/36468), with cause unknown and
scope limited to the reporting accounts. A separate [issue #36488](https://github.com/openai/codex/issues/36488)
attributes it to this account without providing a canonical post URL; that
attribution remains unaccepted.

The November 2025, March 11, April 7, April 28, May 23, June 4, June 28, June
29, July 14, and August 8 posts announce broad scope, while GitHub reports show
that some Business, Plus, or other accounts did not receive or immediately
reflect actions. The post is authoritative for the operator's statement, not
for universal completion.

## Recommended source classification

The exact account is now configured in the social allowlist as a
maintainer-confirmed staff social source with attributed-operator trust, under
these constraints:

1. Accept only exact canonical `https://x.com/thsottiaux/status/<numeric-id>`
   URLs whose public first-party X response matches `@thsottiaux`. Do not infer
   identity from a display name, repost, screenshot, Community quote, or search
   snippet.
2. Store the canonical URL, numeric ID as a string, ID-derived UTC creation
   time, neutral minimal summary, retrieval time, public response hash, and any
   edit/deletion/correction state. Keep the timestamp derivation explicit.
3. Classify a post as an **official staff public signal**. It may establish
   that an operator announced or attributed an action, its intended plan scope,
   and its stated motivation. It may not establish account-level delivery,
   simultaneous completion, or a project confirmed observation.
4. Distinguish completed hard reset, promised future reset, banked-credit grant,
   banked-credit redemption, limit-size change, temporary bucket removal, and
   incident status. Do not collapse them into a generic reset.
5. Preserve nonrecipient reports and display/enforcement contradictions next to
   broad wording such as "everyone" or "all plans."

## Leakage and promotion gates

- Point-in-time features may use a post only when its publication time is at or
  before the forecast cutoff. A post discovered later must not be backfilled
  into an earlier forecast as if it had been known then.
- Corrections, edits, or deletions are append-only evidence changes. Preserve
  the prior content hash and first-seen time; never silently rewrite history.
- A staff post can corroborate an inferred reset or stated cause, but only a
  repository issue carrying `verified-observation` can become a confirmed model
  label. Social evidence never self-verifies.
- Temporal proximity is not causation. The August 8 four-second alignment is a
  strong operator-action correlation; it does not prove every paid account was
  reset or that the post caused the observed transition.
- No post creates a probability, recurring-reset prior, or model-promotion win.
  Deterministic repository code and declared time-aware evaluation remain the
  only authority for forecasts, scoring, and promotion.
- Out-of-cycle actions must remain separate from scheduled cadence. Promised
  future actions use the statement time as publication metadata, not fabricated
  completion time; banked grants enter no cadence until a verified redemption
  or full-reset transition exists.

## Gaps

- Public X page availability varied: direct manual browser review exposed the
  profile and selected canonical post bodies, while X's public first-party
  embed response supplied the complete historical set. Full times were decoded
  from the documented Snowflake IDs. If neither source-native view is
  available, collection should fail closed rather than switch to an evasive or
  unconfigured mirror.
- Canonical posts for the July 28/29 and August 1 claims remain missing.
- Broad announcements do not expose per-account completion, reset-credit
  transactions, or server reset anchors. Those require verified observer data
  or appropriately reviewed public reports.
