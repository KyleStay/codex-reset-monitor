# Primary-source scan for 2026-09-22

Research cutoff: `2026-09-22T12:28:43Z` UTC. The prior cutoff was
`2026-09-21T09:20:52Z`. This note uses only official OpenAI pages and public
records owned by `openai/codex`. User-authored GitHub issues remain public
claims, not provider confirmation.

## Search coverage

| Source | Exact range and sample | Result |
| --- | --- | --- |
| [OpenAI Status incidents API](https://status.openai.com/api/v2/incidents.json) | Incidents created or updated after `2026-09-21T09:20:52Z`; `n=1` | One Plus/Pro incident, described below. |
| [Banked-reset Help](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work), [Codex plan Help](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan), and [Astra usage Help](https://help.openai.com/en/articles/20001516-managing-usage-with-gpt-6-astra-in-work-and-codex) | Three current pages retrieved before the cutoff | No new dated reset, grant, redemption, or compensation announcement. |
| [Codex App Server documentation](https://developers.openai.com/codex/app-server) | Current rate-limit and earned-reset protocol reference retrieved before the cutoff | Confirms that credit availability, redemption outcome, and refreshed quota windows are separate records. No dated event. |
| [ChatGPT and Codex changelog](https://developers.openai.com/codex/changelog), [OpenAI news](https://openai.com/news/), and [release notes](https://openai.com/products/release-notes/) | Current listings plus `n=23` focused official-domain searches retrieved before the cutoff | The changelog still ends at September 18. News has two September 21 company posts, and release notes end at September 17. None concerns limits, resets, credits, or accounting. |
| [`openai/codex` issues](https://github.com/openai/codex/issues) | `n=197` issues created after the prior cutoff; `n=9` reset, usage, credit, display, or enforcement reports read in full | One new Tuesday banked-reset display or delivery contradiction. No confirmed grant or reset. |
| [`openai/codex` issue comments](https://github.com/openai/codex/issues) | `n=566` comments created after the prior cutoff | `n=416` had `NONE`, `n=150` had `CONTRIBUTOR`, and `n=0` had owner, member, or collaborator association. |
| [`openai/codex` pull requests](https://github.com/openai/codex/pulls) | `n=86` pull requests updated after the prior cutoff | Two usage or credit presentation changes, no reset mechanism or delivery change. |
| [`openai/codex` releases](https://github.com/openai/codex/releases) | `n=10` releases published after the prior cutoff, `0.155.0-alpha.16.1`, `0.156.0-alpha.16` to `.17`, and `0.157.0-alpha.1` to `.7` | Each has only its generated release label. None documents a reset, grant, redemption, or accounting change. |

## New official evidence

[OpenAI Status incident `01M348TX2DX7KPM9X857N4APNV`](https://status.openai.com/incidents/01M348TX2DX7KPM9X857N4APNV)
reported increased errors for Plus and Pro users from `2026-09-22T09:58:28Z`
to `10:37:42Z`, a 39 minute 14 second interval. The listed affected component
was ChatGPT Conversations, not a Codex component. The incident says all
affected services recovered. It does not mention a usage reset, banked reset,
credit grant, redemption, compensation, metering correction, or affected-user
denominator. This is incident chronology only. It cannot establish or explain
Tuesday's promised banked reset.

The three Help pages preserve the mechanism boundary. A banked reset must be
saved and applied by the user, while an automatic or global reset applies
directly. A successful banked redemption refreshes at least one eligible
window and changes the weekly reset date. Eligibility, delivery timing, and
expiration may vary, and future resets are not guaranteed. The pages expose
only relative update labels, not exact revision timestamps. Nothing on the
current pages announces a new September 22 grant.

The App Server reference gives the cleanest machine-readable distinction.
`account/rateLimits/read` reports quota-window state and a separate
`rateLimitResetCredits` object with authoritative `availableCount` plus
optional grant and expiry details. Consuming a credit can return `reset`,
`alreadyRedeemed`, `nothingToReset`, or `noCredit`; clients must reread the
rate limits after a successful consume call instead of inferring refreshed
windows from the redemption response. This supports the existing evidence
gate. A notice or credit count alone is not a completed reset.

## New `openai/codex` evidence

The clearest Tuesday result is [issue #47251](https://github.com/openai/codex/issues/47251),
created `2026-09-22T10:57:57Z`. One Pro 5x user reports repeated notices that a
new rate-limit reset is available, but says the reset list contains none. The
report arrived 20 minutes 15 seconds after the Status incident resolved. That
timing is descriptive, not causal. The issue has no staff comment, grant
timestamp, account receipt, reset-credit count transition, or successful
redemption. Classify it as a banked-reset display or delivery contradiction,
not a completed grant.

The other eight focused reports span `2026-09-21T11:03:31Z` through
`2026-09-22T09:47:49Z`:

- [#47000](https://github.com/openai/codex/issues/47000) says three reset
  credits disappeared after a client update. Its pasted Support exchange is
  user-supplied and cannot be authenticated as an official Support statement.
  It preserves an unresolved grant, availability, redemption, and expiry
  sequence.
- [#47032](https://github.com/openai/codex/issues/47032),
  [#47047](https://github.com/openai/codex/issues/47047),
  [#47052](https://github.com/openai/codex/issues/47052), and
  [#47061](https://github.com/openai/codex/issues/47061) report rapid depletion,
  a quota falling to zero without visible work, or a five-hour limit returning
  soon after a reported renewal. They lack provider bounds and staff diagnosis.
- [#47221](https://github.com/openai/codex/issues/47221) reports that the
  Windows Usage page is absent while the browser page works. This is a client
  display contradiction, not a reset.
- [#47237](https://github.com/openai/codex/issues/47237) and
  [#47238](https://github.com/openai/codex/issues/47238) report capacity errors
  while weekly allowance remained. One #47237 comment records an 88% used
  header before a `server_overloaded` error. These reports show that capacity
  enforcement and displayed quota can diverge. They do not show a reset or
  credit event.

An exact-title search found `n=20` newly created "Selected model is at
capacity" reports from `2026-09-21T09:24:28Z` through
`2026-09-22T09:47:49Z`. Every report predates the Status incident's
`09:58:28Z` start. The cluster strengthens the capacity-versus-quota
contradiction, especially where users report remaining allowance, but it does
not establish a reset signal or a causal link to the later Conversations
incident.

[PR #47096](https://github.com/openai/codex/pull/47096) changes TUI placement
and fitting for usage notices. [PR #47086](https://github.com/openai/codex/pull/47086)
formats analytics credit amounts consistently. Neither changes how a reset is
granted, delivered, redeemed, or applied.

## Historical follow-up

Eight named public records were checked for updates:
[June 29 #30726](https://github.com/openai/codex/issues/30726),
[July 28 #36426](https://github.com/openai/codex/issues/36426),
[July 29 #36170](https://github.com/openai/codex/issues/36170) and
[#35952](https://github.com/openai/codex/issues/35952), and August 1
[#36436](https://github.com/openai/codex/issues/36436),
[#36481](https://github.com/openai/codex/issues/36481),
[#36468](https://github.com/openai/codex/issues/36468), and
[#36488](https://github.com/openai/codex/issues/36488). Their latest update is
`2026-08-26T07:33:13Z`; `n=0/8` changed after the prior cutoff.

- June 29 still lacks a source-native completion record for either promised
  action, the near-term hard reset and the separate banked-credit grant.
- July 28 and 29 still lack a delivery denominator and bounded recipient
  transitions. Nonreceipt and meter-display contradictions remain.
- August 1 remains supported for some paid accounts, not universal delivery.
  No new record separates automatic delivery from banked redemption.
- The August 8 and 10 ordinary-reset promise still has no new official receipt,
  scope correction, cause statement, or independently bounded Monday delivery
  in this source set.
- The September 12 completion still has no new official breadth or cause
  evidence. Nothing found ties that hard reset to a replacement banked grant.
- Tuesday's promised banked reset remains unresolved. Issue #47251 is a useful
  negative case, but no official announcement, staff-associated GitHub comment,
  account credit-count transition, or successful redemption confirms delivery.

## Point-in-time result

This lane adds `n=1` official incident and `n=9` focused user reports, but no
completed hard reset, completed banked-reset grant, redemption, limit-size
change, supported cause, historical inference, or correction. The incident's
Plus/Pro scope and the nearby capacity reports justify watching for temporary
availability problems. They do not support incident-to-reset causation.

The strongest deterministic signals remain provider reset anchors and bounded
observer transitions. Notification text, issue volume, capacity errors, Help
page relative update labels, and prerelease volume remain weak or invalid
delivery signals. No forecast input or historical feature snapshot should
change from this primary-source scan.
