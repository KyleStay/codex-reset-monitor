# Local telemetry bridge

## Purpose

The bridge gives the recurring Codex agent a stable, privacy-minimized view of
the operator's completed full-reset transitions and OpenAI-issued queued reset
credits. It replaces dependence on manual reset reports for future observations.
It does not collect aggregate usage or attempt to identify which prompt, task,
repository, or model consumed tokens.

## Supported upstream interface

The bridge launches the official Codex app-server over stdio and uses one
read-only JSON-RPC method:

- `account/rateLimits/read` for current quota buckets, used percentage, window
  duration, next-reset timestamp, plan tier, reached-limit state, and
  `rateLimitResetCredits` metadata.

No browser scraping, ChatGPT database access, session parsing, or credential
handling is required.

The supported interface is documented in the official
[Codex App Server manual](https://learn.chatgpt.com/docs/app-server).

## Local contract

The private state file is
`~/Library/Application Support/Codex Reset Monitor/local-observer.json`. Schema
version 4 contains:

- the latest primary quota sample;
- up to 90 days of five-minute primary quota samples;
- the latest safe multi-bucket quota response;
- the latest OpenAI-issued queued reset-credit count and safe grant/expiry
  metadata, plus bounded before/after snapshots on newly detected resets;
- open exhaustion state;
- deterministic detected resets;
- pending publication and deduplication keys.

`npm run observe:local:status` is the read-only consumer interface. It returns a
sanitized JSON document from the existing state file and makes no network call.
Future agents should use this command instead of opening Codex or ChatGPT
conversation/session storage.

## Reset classification

A local event is confirmed only when either:

1. an exhausted sample is followed by an available sample; or
2. used percentage falls to 5% or less by at least five percentage points while
   the official next-reset timestamp advances by at least one minute.

The detected time is a sample bound, not an invented exact server timestamp.
Other suspicious changes can inform later analysis but cannot self-verify or be
published as confirmed.

Available reset credits are queued capacity issued by OpenAI. They are surfaced
separately and never treated as evidence that a full reset already completed.
An event is classified as out of cycle when it occurs materially before the
previous provider-issued reset anchor. Its new provider-issued anchor replaces
the superseded anchor in forecasts, while the exceptional event is excluded
from recurring-cadence estimation. Completion and cause remain separate: only
a bounded credit-count decrease can support later credit-redemption analysis.

## Historical limit

The bridge cannot reconstruct quota states from before it began retaining
samples. Earlier resets remain best-effort public-source inferences under
`docs/HISTORICAL_RESEARCH.md`, with explicit evidence grade, precision, scope,
contradictions, and cause uncertainty.
