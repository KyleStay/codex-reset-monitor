# Detecting the 2026-08-08 out-of-cycle reset

Research completed `2026-08-08T21:11:15Z`. This note evaluates how the local
observer can distinguish a completed full-window reset from a queued reset
credit or a partial quota adjustment. It does not assign a server-side cause,
change a prediction, or create a new observation.

## Primary-source contract

The official Codex app-server contract defines `usedPercent` as current usage
inside an OpenAI quota window, `windowDurationMins` as that window's length,
`resetsAt` as the Unix time of its next reset, and `rateLimitReachedType` as the
backend-classified reached-limit state. It also returns earned reset credits in
a separate `rateLimitResetCredits` object. Its `availableCount` is authoritative
even when the backend caps or omits credit detail rows. Reset-credit data is
snapshot-only, while rate-limit update notifications are sparse and must be
merged with or replaced by a fresh read. See the official
[`openai/codex` app-server contract](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md#7-rate-limits-chatgpt).

The same contract exposes a separate
`account/rateLimitResetCredit/consume` mutation. A `reset` result means that a
credit was consumed; clients are instructed to refetch `account/rateLimits/read`
instead of inferring the new limits from the consume response. This means a
meter transition can establish that a reset completed, but meter fields alone
cannot establish whether the backend applied it automatically or a banked
credit was redeemed. See
[`account/rateLimitResetCredit/consume`](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md#8-earned-rate-limit-resets-chatgpt).

OpenAI's current product documentation likewise treats a banked reset as
something the user applies from the usage menu, and distinguishes applying a
reset from adding spend credits or waiting for the ordinary limit to reset.
See [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan).
OpenAI's promotion terms state separately that rate-limit resets and temporary
usage windows are not credits and do not create a transferable or API credit
balance. See
[Codex Referral Promotions](https://help.openai.com/en/articles/20001271-codex-referral-promotions).

## What the local record establishes

The sanitized observer status read after the event contains this detected
transition for the ordinary `codex` weekly bucket:

| Field | Before | After |
| --- | ---: | ---: |
| Sample bound | `2026-08-08T20:27:39.534Z` | `2026-08-08T20:32:48.433Z` |
| Used percentage | `10` | `0` |
| Official next-reset time | `2026-08-15T09:19:41Z` | `2026-08-15T20:29:18Z` |
| Window duration | `10080` minutes | `10080` minutes at the latest read |

This is a strong full-window signature under the repository's existing
[local classification contract](../LOCAL_TELEMETRY_BRIDGE.md#reset-classification):
usage returned to near zero and the official next-reset timestamp advanced by
far more than timestamp jitter. The event completed approximately 6 days 12
hours before the prior scheduled boundary, so it is out of cycle relative to
the previous window. The new next-reset time is approximately seven days after
the transition bound, consistent with a newly anchored 10,080-minute window.

This classification is an inference from the official field semantics and the
adjacent local samples; it does **not** identify a promotion, compensation,
manual redemption, bug correction, or other server-side cause.

The latest read reported `rateLimitResetCredits.availableCount = 0` and no
credit rows. That proves no reset credit was available at that read, but the
observer currently retains only the latest credit snapshot. It therefore
cannot prove whether the count was also zero immediately before the event or
whether one credit disappeared as the reset occurred.

## Detection rule

Keep completion and cause as separate classifications.

Classify a **completed full reset** for one stable `limitId` and window duration
when adjacent full `account/rateLimits/read` snapshots show either:

1. backend-classified exhaustion followed by availability; or
2. used percentage falling to at most 5%, by at least five percentage points,
   while `resetsAt` advances by more than the polling/jitter tolerance.

Classify that completed reset as **out of cycle** when the transition's upper
sample bound is materially earlier than the prior `resetsAt`. Confirm the new
anchor by checking that the new `resetsAt` is approximately one reported
`windowDurationMins` after the transition. Compare like-for-like `limitId`
records; a healthy named bucket must not mask another exhausted bucket. The
app-server contract supports multiple quota records and identifies the window
and reset fields used for this comparison. See the official
[rate-limit response shape and field notes](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md#7-rate-limits-chatgpt).

Classify **likely banked-credit redemption** only when the same bounded event
also has stronger read-only credit evidence: an authoritative `availableCount`
decrease from immediately before to immediately after the reset, without an
expiry or other observed lifecycle explanation. A missing detail row is
insufficient because the official contract allows detail rows to be absent or
capped while the count remains authoritative. Without that before/after
evidence, use **cause unknown**, even though the completed reset itself is
confirmed. The observer must remain read-only; it must not call the separate
consume mutation merely to improve classification.

Classify a **partial adjustment, migration, or ambiguous change**, not a full
reset, when usage merely decreases but remains above the near-zero threshold;
the next-reset anchor does not advance; the limit ID or window duration changes
without a stable like-for-like comparison; or only one inconsistent/sparse
view changes. Refetch a full `account/rateLimits/read` snapshot before deciding,
because the official contract says update notifications are sparse.

## Prediction implications

- Accept this transition as a real completed reset time bound and as the new
  current-window anchor. The next scheduled-window projection should use the
  new official `resetsAt`, not extrapolate from the superseded August 15
  `09:19:41Z` anchor.
- Preserve `scheduled` versus `out-of-cycle` as an event feature orthogonal to
  cause. Record the signed lead/lag from the prior scheduled boundary and the
  before/after reset anchors.
- Do not let one unexplained out-of-cycle event redefine the ordinary cadence
  or manufacture a recurrence probability. The repository requires
  deterministic forecast code and blocks statistical promotion below 20
  confirmed events; see
  [Forecast and evaluation gates](../PRODUCT_AND_ARCHITECTURE.md#forecast-and-evaluation-gates).
- Evaluate a future special-reset component only after enough similarly
  classified events or an official signal exists. Until then, the active
  schedule baseline should treat this reset as a discontinuity that re-anchors
  the current window, while its cause remains unknown.

## Minimum observer evidence still missing

For future events, retain a bounded before/after reset-credit snapshot alongside
the detected reset: `availableCount`, safe detail status/grant/expiry metadata,
sample times, and the matching rate-limit bucket IDs. The current repository
contract already permits these privacy-minimized fields; see
[Local telemetry bridge](../LOCAL_TELEMETRY_BRIDGE.md#local-contract). A short
credit-snapshot history or a copy embedded in each detected event is necessary
to distinguish automatic out-of-cycle resets from banked-credit redemption
after the fact. No account identifier, conversation content, consume call, or
other private signal is needed.
