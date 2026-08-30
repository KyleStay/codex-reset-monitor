# Source scan, 2026-08-30

**Public-source research cutoff:** `2026-08-30T09:30:55Z`. The previous
cutoff was `2026-08-29T09:24:47Z`. This bounded scan rechecks the public
launch-era Codex usage-limit record and follows the June 29, July 28/29,
August 1, August 30 milestone, August 31 migration, and September 3 anchor
leads. Publication, discovery, approval, observation, and retrieval times
remain separate.

## Source boundary and retrieval

I checked official OpenAI Status, Help, developer, changelog, and release
material; public `openai/codex` issues and comments; the exact configured
`@thsottiaux` account; the approved temporary discovery feed; and both exact
DID Bluesky mirrors. The local observer was used only through its sanitized
public issue. I did not read private Codex activity, account identity,
credentials, conversations, prompts, responses, code, session history, logs,
or any third-party forecast, classifier, probability, signal, or score.

| Surface | Retrieval and finding |
| --- | --- |
| [OpenAI Status API](https://status.openai.com/api/v2/incidents.json) | No post-cutoff incident mentions a reset, credit, compensation, quota, or usage-window change. The latest relevant incident was the Aug. 27 Workspace Agents/ChatGPT Work error incident, resolved at `2026-08-27T22:14:44Z`; it contains no reset or compensation statement. |
| [Codex Help article](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan) | The mutable page still distinguishes banked full resets from automatic one-time resets, says banked resets refresh both windows and move the weekly reset date, and retains the Aug. 31 GPT-5.4/GPT-5.4 mini migration to Terra/Luna. |
| [Codex pricing documentation](https://developers.openai.com/codex/pricing) | Current documentation says ChatGPT Work and Codex share usage, credits, and usage limits. It supplies product context, not a dated delivery event. |
| [ChatGPT and Codex changelog](https://learn.chatgpt.com/docs/changelog) | The July 31 migration entry and June 11 reset-banking entry remain present. No new reset-policy or quota-window entry appeared after the prior cutoff. |
| [Codex `0.151.0` release](https://github.com/openai/codex/releases/tag/rust-v0.151.0) | Stable release published `2026-08-29T09:55:39Z`; release notes contain no reset, credit, quota, or usage-window policy note. The associated token-accounting changes are mechanism context only. The `0.152.0-alpha.1` scan likewise contained no such policy note. |
| [Configured X profile](https://x.com/thsottiaux) | Source-native profile loaded with identity `Tibo`, `@thsottiaux`, bio identifying Codex/ChatGPT at OpenAI, and `2,790 posts`. |
| Approved temporary discovery feed | Read only `fetchedAt=2026-08-30T09:18:00.350Z`, `sourceErrors.tibo=null`, and raw `tiboPosts`. It exposed 13 numeric candidates after the prior cutoff. No tracker forecast or derived field was read. |
| Preferred mirror, DID `did:plc:rcaom2u2hfsm3aqab5dfvhxs` | Public Author Feed retrieval around `2026-08-30T09:20:33Z` carried the reset announcement, landing reply, and follow-up. |
| Fallback mirror, DID `did:plc:rcelwndiefenpjvnm6uood4t` | Public Author Feed retrieval around `2026-08-30T09:20:47Z` carried all three relevant records, with the long announcement split into thread parts. |

The exact discovery command was a `curl` fetch of the forecast endpoint piped
to `jq` selecting only `fetchedAt`, `sourceErrors.tibo`, and `tiboPosts`. Each
candidate was then fetched from its canonical X URL and the X-owned
`publish.twitter.com/oembed` endpoint. Both Bluesky feeds were fetched from
`public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed` using only the exact
configured DIDs. Official Status, Help, changelog, pricing, release, and
public issue pages were read directly. These reads were point-in-time scans;
they did not alter repository or remote state.

## Canonical social evidence

The 13 newly surfaced numeric IDs were all checked against canonical X URLs.
All 13 canonical pages and X-owned oEmbed responses confirmed author Tibo,
the canonical URL, public text, and an August 29 or August 30 date. Where the
source-native page exposed `datePublished`, it is the timestamp basis below;
Snowflake-derived milliseconds are retained only as a cross-check.

- [Post `2093801758665715784`](https://x.com/thsottiaux/status/2093801758665715784), source-native `datePublished` `2026-08-29T20:43:34.000Z` and Snowflake-derived `2026-08-29T20:43:34.878Z`, is an attributed completed-reset announcement. It says usage is being reset for paid Codex and ChatGPT Work users and lists usage-efficiency and architectural fixes. This is a public operator claim, not proof of universal delivery, a recipient denominator, or a project observation. Pending [issue #38](https://github.com/KyleStay/codex-reset-monitor/issues/38) preserves its discovery cutoff and remains forecast-ineligible.
- [Reply `2093801838504186008`](https://x.com/thsottiaux/status/2093801838504186008), source-native `2026-08-29T20:43:53.000Z` and Snowflake-derived `2026-08-29T20:43:53.913Z`, says “Landing 2:30pm PST.” It is contextual timing, not independent completion evidence. The stated PST label is ambiguous for an August date, so it is not treated as an exact UTC anchor.
- [Post `2093811840258293947`](https://x.com/thsottiaux/status/2093811840258293947), source-native `2026-08-29T21:23:38.000Z` and Snowflake-derived `2026-08-29T21:23:38.517Z`, says the celebration moved because the button was already pressed that day. It strengthens the interpretation that the attributed action was an ordinary reset, but does not independently establish delivery.

The new social classifications are therefore: one attributed completed-reset
announcement, one attributed timing reply, and one attributed action
confirmation. None is a confirmed observation, banked-credit grant,
redemption, or confirmed cause. The remaining ten canonical candidates are
nonqualifying commentary, replies, or image-only material. The source-native
profile exposed the posts, so the earlier X Replies-view failure is not used
to fill missing context.

## Observer and public contradictions

[Verified observer issue #37](https://github.com/KyleStay/codex-reset-monitor/issues/37)
reports a sanitized transition from `25%` used at
`2026-08-29T20:22:23.918Z` to `0%` at
`2026-08-29T22:57:55.567Z`. The prior provider anchor was
`2026-09-03T16:26:52Z`; the new anchor is `2026-09-05T22:57:55Z`; the reset
was out of cycle by `6,809` minutes. The reset-credit count stayed at `1`.
This is one confirmed account-level transition, not evidence that every paid
user received the attributed reset. It is the ninth verified observation,
covering August 8 through August 29.

[Pending issue #38](https://github.com/KyleStay/codex-reset-monitor/issues/38)
records the canonical original, its source-native and Snowflake timestamp
bases, the raw text summary, and discovery cutoff
`2026-08-30T09:18:00.350Z`. It remains pending-review/public-source evidence
and cannot affect live forecasting until approved. No new inferred historical
event, cause assessment, correction, or credit redemption qualified.

Eight new public `openai/codex` issue reports are candidate contradictions or
mechanism signals, not verified events:

- [#41541](https://github.com/openai/codex/issues/41541) reports five old and
  five current sessions and estimates observed quota burn of `3.027` versus
  `4.740` percentage points per hour after the recent release.
- [#41553](https://github.com/openai/codex/issues/41553) reports that only a
  weekly limit is displayed after the five-hour limit returned.
- [#41605](https://github.com/openai/codex/issues/41605) proposes model-cycle
  or context-replay amplification after the Aug. 29 fixes.
- [#41607](https://github.com/openai/codex/issues/41607) reports an attempted
  banked-reset use without permission, stopped before completion.
- [#41593](https://github.com/openai/codex/issues/41593) reports alleged
  automatic banked-reset redemption after a natural-language request.
- [#41625](https://github.com/openai/codex/issues/41625) reports five-hour
  usage disappearing within 15 to 25 minutes.
- [#41628](https://github.com/openai/codex/issues/41628) reports purchased
  credits being drawn while the five-hour meter was exhausted but weekly
  usage still showed 84% remaining.
- [#41639](https://github.com/openai/codex/issues/41639) reports a banked reset
  being used without permission.

This focused issue sample is user-authored and lacks a common provider bound,
recipient denominator, or staff diagnosis. It cannot establish a reset,
redemption, cause, or population prevalence.

The mirrors corroborated discovery but exposed completeness limits. The
preferred mirror indexed the reset announcement at
`2026-08-29T20:47:16.912Z` (lag `3m42.912s`), the landing reply at
`2026-08-29T20:48:16.673Z` (lag `4m23.673s`), and the follow-up at
`2026-08-29T21:32:15.164Z` (lag `8m37.164s`). The fallback indexed the reset announcement at
`20:44:43.964Z` (lag `1m09.964s`) and the follow-up at
`21:25:11.070Z` (lag `1m33.070s`), and exposed the landing reply. Its long
announcement was split across thread parts. These unofficial feeds remain
discovery/corroboration aids only and cannot establish authorship, delivery,
cause, scope, or model labels.

## Point-in-time-safe pattern audit

Only evidence publicly available, discovered, or approved before each
evaluated cutoff is compared with what happened later. The current cutoff is
`2026-08-30T09:30:55Z`; pending issue #38 and its source remain outside prior
forecast snapshots.

| Pattern | Exact sample, range, evidence classes, and cutoff | Support, contradiction, grade, and change since Aug. 29 |
| --- | --- | --- |
| Provider-owned bounded transition | `n=9` verified observations, August 8-29; sanitized observer transitions, used percentages, reset timestamps, and provider anchors; current cutoff. | Seven of nine are out of cycle, one is scheduled, and the oldest lacks the anchor fields needed for timing classification. The new event adds a clean transition with an advanced anchor, but not universal delivery. **Grade A transition, D population; strengthened in sample, unchanged as the strongest predictor.** |
| Attributed reset wording and timing | `n=3` newly validated canonical records, August 29; one original announcement, one reply, and one follow-up, X source-native pages/oEmbed, discovery feed, and mirrors; current cutoff. | The announcement and follow-up use completed-action wording; the reply gives only ambiguous PST timing. The observer bound places the announcement 21m10.082s after the lower sample and at most 2h14m21.567s before the observed transition upper bound, so no exact promise-to-event lead time is claimed. Prior qualified lead times remain about 17m34s-51h28m. **Grade A attribution, C timing, D breadth; strengthened as a classification control, unchanged as a delivery predictor.** |
| Original posts versus replies | `n=13` newly checked canonical records, August 29-30; five originals and eight replies, canonical X, oEmbed, feed, and mirror records; current cutoff. | All canonical authorship/text/date checks passed. The landing timing is reply-only, and the preferred mirror omitted it. **Grade A attribution, C timing, D completeness; strengthened for canonical validation, unchanged for context completeness.** |
| Banked credit versus hard reset | `n=1` local credit tracked across four later hard resets, August 22-29; observer credit snapshots, issue #37, current Help, and public reports; current cutoff. | Credit stayed at one across the new hard-reset transition. Issues #41593, #41607, #41628, and #41639 allege redemption or accounting problems without provider bounds. **Grade A local distinction, D breadth; unchanged.** |
| Incident chronology and reset linkage | `n=17` incident/reset contexts, June 3-August 29; official Status phases, observer events, attributed posts, and public reports; current cutoff. | No new matching incident appeared. The latest relevant Aug. 27 incident has no reset or compensation language. **Grade A chronology, D reset linkage; unchanged as a negative control.** |
| Recent depletion and mechanism candidates | New focused `n=8` issue reports, August 29 14:29Z-August 30 08:59Z; public issue bodies/comments, no staff confirmation; current cutoff. | The reports cover fast depletion, display contradictions, possible context amplification, and banked-credit behavior. They do not share a provider bound or diagnosis. **Grade B candidate mechanisms, D prevalence/cause; strengthened as contradiction coverage, not as causal evidence.** |
| Public clustering and contradictions | New `n=11` records: three canonical Tibo records plus eight public issue reports, August 29-30; observer issue, attributed social text, and public claims; current cutoff. | One confirmed individual transition aligns with an attributed all-paid-user announcement, while reports show inconsistent display and credit behavior. No recipient denominator exists. **Grade B divergence, D prevalence; strengthened.** |
| Discovery and mirror freshness | `n=3` relevant social records; feed fetched `2026-08-30T09:18:00.350Z`, mirrors around 09:20Z, canonical X timestamps; current cutoff. | Measured mirror lag ranged `1m09.964s-8m37.164s` for the three relevant records. Both mirrors carried 3/3, but the fallback split the long announcement into thread parts. **Grade B freshness, D completeness; strengthened with current measurements.** |
| Reset gaps, cooldown, UTC time, and weekday | `n=9` observations, August 8-29, yielding eight gaps: `11h09m42.937s`, `51h29m50.496s`, `55h20m37.071s`, `170h25m58.932s`, `86h58m44.404s`, `37h26m14.123s`, `50h12m38.541s`, and `54h31m03.567s`; observer transitions and anchors; current cutoff. | The range remains heterogeneous and too small for cadence, cooldown, weekday, or UTC-hour inference. **Grade D; unchanged.** |
| August 31 migration context | `n=2` official records, current Help and dated changelog, public before the cutoff; current cutoff. | Both identify Terra and Luna replacements. Neither describes a reset or links the migration to the September 3/5 anchor. **Grade A product context, D reset-cause linkage; unchanged.** |

## Changes, predictors, and next tests

The strongest supported predictor remains a bounded provider-owned meter or
access transition with a materially advanced stable provider anchor. The new
issue #37 satisfies that observation gate for one account. Tibo’s canonical
announcement and follow-up can select a watch window and support attributed
scope or motivation, but cannot prove delivery, universal scope, or cause.
Credit state remains a useful local discriminator between an automatic hard
reset and a banked-credit redemption.

Signals that failed or remain too sparse include cadence, weekday, UTC hour,
cooldown, milestone context alone, incidents without quota statements,
mirror text without canonical validation, anchor movement without a usage
transition, and unbounded public depletion or redemption claims. The eight
heterogeneous gaps remain too small for a defensible timing pattern.

Since the prior scan, the evidence gained one verified observer transition,
three canonical reset-adjacent social records, eight candidate issue reports,
and the pending #38 record. It gained no approved public source, independent
universal-delivery proof, inferred historical event, supported cause,
correction, or credit redemption.

Next observable tests are:

1. Check the August 30 milestone window against a canonical completion claim,
   bounded provider transition, anchor movement, credit-count change, and
   recipient or nonrecipient reports.
2. Treat the August 31 Terra/Luna migration separately from reset delivery and
   the September 3 provider anchor.
3. Capture an actual banked-credit redemption with before-and-after weekly and
   five-hour anchors, then compare it with the public reports above.
4. Continue source-backed research on June 29, July 28/29, August 1, August
   13, the 20M credit, and Business scope. Do not retroactively rewrite
   feature snapshots.

## Deterministic refresh

The parent refresh generated forecast
`events-9-cutoff-2026-08-30-9a445484`. Repository code produced `1%` at all
horizons, with likely interval `2026-09-05T21:27:55Z` through
`2026-09-06T00:27:55Z`. Performance is `n=26`, Brier
`0.10261923076923075`. The new verified observer issue is eligible for the
refresh; the pending social issue, X records, mirrors, and public issue
reports are not forecast inputs. No model was promoted.
