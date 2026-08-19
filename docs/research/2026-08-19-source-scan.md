# Source scan — 2026-08-19

**Research cutoff:** `2026-08-19T09:23:32Z` (terminal UTC clock after the
final source read). This covers records discovered after the prior cutoff,
`2026-08-18T09:22:29Z`, plus bounded follow-up of the June 29, July 28/29,
August 1, August 8/10, August 13, conditional-credit, and August 20
provider-anchor leads. This note preserves discovery time and evidence class;
it does not turn a public claim into a confirmed observation or rewrite an
earlier forecast snapshot.

## Source boundary and retrieval

Only configured sources were used: official OpenAI Status and Help, the
official Codex documentation/changelog, source-native public `openai/codex`
issues/comments/releases/PRs, the exact configured X account, X-owned oEmbed,
the approved discovery feed, and the two exact public Bluesky DIDs.

| Surface | Retrieval and finding |
| --- | --- |
| OpenAI Status | The [incidents API](https://status.openai.com/api/v2/incidents.json) was read through the cutoff. One incident was created after the prior cutoff: [Elevated errors deploying Sites](https://status.openai.com/incidents/01M0B4WSV41BCFZ9VDWKSMQVSP), `2026-08-18T19:17:12Z`–`19:37:24Z`. It was Sites-only and contains no Codex reset, credit, compensation, or usage-window statement. The live adapter still retains `n=2` Codex-relevant historical incidents. |
| OpenAI Help | [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-codex-and-chatgpt-plan-usage-limits) said `Updated: 5 days ago`. [Using Credits for Flexible Usage](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-free-go-plus-pro-sora) said `Updated: 14 hours ago` at retrieval. The latter now explains that concurrent work can drive a purchased-credit balance negative and later purchases may first offset that balance. Purchased credits remain post-limit capacity, not a hard reset or banked reset. Neither mutable page exposes an exact revision timestamp or an account-level reset event. |
| Official docs/changelog | The [ChatGPT & Codex changelog](https://developers.openai.com/codex/changelog) exposed no new reset, grant, redemption, or compensation-completion entry after the prior cutoff. |
| Official repository releases | Four releases were published after the prior cutoff: `0.148.0-alpha.22`, `0.148.0-alpha.23`, stable [`0.148.0`](https://github.com/openai/codex/releases/tag/rust-v0.148.0), and `0.149.0-alpha.1`. Stable 0.148.0 adds estimated thread credits/cost to eligible status surfaces and automatic-review implementation changes. These are usage-visibility and product mechanisms, not reset events. |
| Project issue state | At retrieval the project had `n=4` `verified-observation` issues (#1, #2, #4, #7), `n=1` approved public source (#3), and initially `n=8` pending public sources (#5, #6, #8–#13). This run created pending issue [#14](https://github.com/KyleStay/codex-reset-monitor/issues/14), bringing pending review to `n=9`; it is not forecast-eligible. |

## Exact Tibo account and canonical validation

The exact configured [@thsottiaux profile](https://x.com/thsottiaux) returned
HTTP 200, but its public HTML did not expose a complete source-native timeline.
The approved discovery endpoint was therefore read only for `fetchedAt`,
`sourceErrors.tibo`, and raw `tiboPosts`. It was healthy at
`fetchedAt=2026-08-19T09:17:02.331Z` with `sourceErrors.tibo=null`.

There were `n=8` new numeric candidates after the prior cutoff, spanning
`2026-08-19T01:47:18Z`–`06:36:05Z`: `n=2` originals and `n=6` replies. Every
canonical `https://x.com/thsottiaux/status/<id>` URL was checked through
X-owned oEmbed. All `8/8` matched `author_name=Tibo`,
`author_url=https://x.com/thsottiaux`, the canonical URL, public text, and the
August 19 calendar date. No validation failed. Because oEmbed exposed only the
calendar date, exact timestamps are explicitly X-ID-derived.

Classification of the validated candidates:

- `n=0` completed hard resets;
- `n=0` explicit promised future resets;
- `n=0` completed banked-reset grants;
- `n=0` redemptions;
- `n=0` usage-limit or bucket-size changes;
- `n=1` ambiguous reset-capability/mechanism statement; and
- `n=7` nonqualifying safety, product, model, or social commentary.

| Canonical post | ID-derived UTC | Classification |
| --- | --- | --- |
| [2089891927659585918](https://x.com/thsottiaux/status/2089891927659585918) | `2026-08-19T01:47:18.525Z` | Original safety-update thread about destructive-action protections; product/safety change, not a reset or usage-limit statement. |
| [2089898146642157657](https://x.com/thsottiaux/status/2089898146642157657) | `2026-08-19T02:12:01.246Z` | Reply about feedback quality; nonqualifying commentary. |
| [2089898255597580328](https://x.com/thsottiaux/status/2089898255597580328) | `2026-08-19T02:12:27.223Z` | Reply to a model-release caveat; nonqualifying commentary. |
| [2089941380336644295](https://x.com/thsottiaux/status/2089941380336644295) | `2026-08-19T05:03:48.962Z` | “I was gifted a very fancy new reset button today.” This suggests capability or mechanism context only. It does not identify Codex scope, promise an action, say the button was used, establish a completed reset, grant a credit, or prove delivery. Recorded as pending public-source issue #14 with the `2026-08-19T09:17:02.331Z` discovery cutoff. |
| [2089942538769793355](https://x.com/thsottiaux/status/2089942538769793355) | `2026-08-19T05:08:25.154Z` | Social reply; no reset context. |
| [2089961732689326311](https://x.com/thsottiaux/status/2089961732689326311) | `2026-08-19T06:24:41.341Z` | Social reply; no reset or credit claim. |
| [2089963353674486142](https://x.com/thsottiaux/status/2089963353674486142) | `2026-08-19T06:31:07.814Z` | Reply about a possible model/harness blind spot; not a reset or limit action. |
| [2089964604172673121](https://x.com/thsottiaux/status/2089964604172673121) | `2026-08-19T06:36:05.956Z` | Reply saying “we have compute” to an Anthropic-limit post; no OpenAI reset promise, scope, timing, or completed action. |

No discovery-feed forecast, probability, `tiboSignal`, assessment, persisted
classification, or derived score was used.

## Mirror freshness and completeness

The preferred exact-DID mirror,
`did:plc:rcaom2u2hfsm3aqab5dfvhxs`, returned 100 records reaching back to
`2026-08-11T00:28:16Z`. It had `n=8` post-cutoff records corresponding to the
eight candidates, with indexing lag from `2m12.600s` to `15m00.168s`; its
newest item lagged `11m12.070s`. The long safety original appeared only as a
trailing split fragment in the returned record, demonstrating context loss.

The fallback exact-DID mirror,
`did:plc:rcelwndiefenpjvnm6uood4t`, returned 100 records reaching back to
`2026-07-29T04:09:08Z`. It represented only the two originals: the reset-button
post lagged `3m34.165s`, and the safety post was split into 11 records beginning
after `2m07.577s`. It omitted all six current replies and every newer item after
`05:03:48Z`. The preferred mirror was more complete for current replies; the
fallback was faster for the reset-button original but split the long thread.
Both remain unofficial discovery aids and cannot prove authorship, use of a
button, delivery, breadth, cause, or a model label.

## Recent source-native repository signals

Focused review found the following new public claims. None contains a
maintainer/staff confirmation, a project observer transition, or a recipient
denominator.

| Record | Evidence-safe interpretation |
| --- | --- |
| [`openai/codex` #39260](https://github.com/openai/codex/issues/39260) | One Pro account reports a purchased-credit history frozen since Aug 8 while balances continued to decrement. A later self-comment links #39167 and other reports as a possible cluster, but one author cross-linking reports is not independent same-event corroboration. Purchased-credit accounting contradiction only. |
| [`openai/codex` #39398](https://github.com/openai/codex/issues/39398) | One account reports that starting a new paid subscription period did not reset an exhausted weekly window. This is a plan-transition/nonreset claim and a useful negative control against treating billing renewal as a reset trigger. No staff response. |
| [`openai/codex` #39408](https://github.com/openai/codex/issues/39408) | One Windows account attributes high usage to repeated automatic-review calls triggered by sandbox retries. This is a possible usage-consumption mechanism, not a reset, delivery record, or confirmed cause for other accounts. |
| [`openai/codex` #39444](https://github.com/openai/codex/issues/39444) | One account reports that CLI work consumed shared allowance while remaining invisible in Desktop. This supports cross-surface attribution/display divergence, not a reset. |
| [#39428](https://github.com/openai/codex/issues/39428), [#39438](https://github.com/openai/codex/issues/39438), [#39455](https://github.com/openai/codex/issues/39455) | Three accounts reported “Selected model is at capacity” between `06:32Z` and `09:15Z`. These are availability reports with no reset/credit statement and no matching Codex Status incident by the cutoff. |

Follow-up on #39167 found one new cross-link from the #39260 reporter, not an
independent bounded transition. #38901, #38789, and #38332 had no new comments
after the prior cutoff. No new evidence resolves the delayed-depletion cluster
or establishes a shared reset event.

## Carried-forward unresolved leads

X oEmbed again validated all carried canonical URLs. The [June 29
announcement](https://x.com/thsottiaux/status/2071740419030053227) still
promises two separate actions—a full reset within one hour and a banked credit
within 24 hours—with no source-native completion statement or receipt
denominator. The [July 28](https://x.com/thsottiaux/status/2081940052154933696),
[July 29](https://x.com/thsottiaux/status/2082317452755751098), and [August
1](https://x.com/thsottiaux/status/2083395449814229287) completed-action posts
remain pending-review and cannot rewrite earlier forecasts. Their historical
inferences retain breadth and nonrecipient contradictions.

The August 8/10 thread remains an intended future reset, not a delivery label:
[the promise](https://x.com/thsottiaux/status/2086189414292865249) at
`2026-08-08T20:34:50.549Z`, the contextual [August 10 greeting](https://x.com/thsottiaux/status/2086800050630676504)
at `13:01:17.597Z`, and the [ordinary-reset interpretation](https://x.com/thsottiaux/status/2086800639120888014)
at `13:03:37.904Z`. The Aug 11 and Aug 13 observer transitions occur after the
promise but still lack a source-native attribution tying either event to it.

The [August 13 rollout promise](https://x.com/thsottiaux/status/2087706104814023111)
and later [anomaly acknowledgement](https://x.com/thsottiaux/status/2087960561728569362)
still lack a completion/breadth statement. The [conditional extra-credit
offer](https://x.com/thsottiaux/status/2089206566998405162) remains an offer,
not a completed grant. The new reset-button post does not resolve any of these
older actions.

## Observer and provider-anchor state

The privacy-minimized local observer was healthy at
`2026-08-19T09:17:07.128Z`, with 3,184 retained samples since Aug 3, four
published detections, no pending publication, and no available reset credit.
The primary Codex bucket was 76% used with a current provider timestamp of
`2026-08-20T09:49:08Z`; this is a continuation of previously recorded anchor
drift, not a fifth reset. The separate Spark bucket remained at 0% and was
excluded. The public confirmed issue #7 still supplies the forecast dataset's
Aug 20 `07:23:15Z` anchor. Neither timestamp alone is reset evidence; the next
test requires a bounded usage or enforcement transition.

## Point-in-time pattern audit

Only evidence available by each evaluated cutoff is compared with later
outcomes. Changes are relative to the 2026-08-18 note.

| Pattern | Exact sample, range, classes, cutoff | Support, contradictions, lead time, grade, change |
| --- | --- | --- |
| Provider-owned transition | `n=4` project-verified detections, Aug 8–13; observer transitions and provider anchors; checked through `2026-08-19T09:23:32Z`. | An exhausted-to-available transition or near-zero meter transition plus a materially advanced anchor remains the strongest reset evidence. The Aug 20 anchor alone, current 76% usage, the separate Spark zero, and #39167 remain negative controls. **Grade A; unchanged.** |
| Explicit future announcements | `n=7` inherited canonical promise/action records, June 16–Aug 8; attributed posts, later verified bounds, and preserved discovery cutoffs. Current scan adds `n=0` explicit promises and `n=1` ambiguous capability statement. | Historical later-signal lead range remains about `17m34s–51h28m`; July 9 missed its stated hour, June 29 remains unresolved, and Aug 13 was retrospective to this project. The new reset button has no promised action or clock and must not enter the promise sample. **Grade C directional / A only with independent verification; unchanged.** |
| Completed versus future wording | `n=10` inherited records, June 4–Aug 11; canonical completed-action statements, public reports, inferences, and verified observations. Current candidates add `n=0` completed statements. | Completed wording supports an attributed operator action but not universal delivery. The new button statement is neither completed action nor future promise. July/August nonrecipient and display contradictions remain. **Grade A wording / B some delivery / C–D breadth; unchanged.** |
| Originals versus replies | Current candidate sample `n=8` (`n=2` originals, `n=6` replies), Aug 19; discovery feed plus X oEmbed; cutoff at this scan. | One original is a safety update, one is the ambiguous button statement, and all six replies are nonqualifying. Preferred mirror covered eight records but lost long-thread context; fallback covered only two originals and omitted replies. **Grade B classification / D mirror completeness; strengthened sample, unchanged predictive value.** |
| Incident start, mitigation, resolution, and compensation | `n=11` incident/reset contexts, June 3–Aug 18; official Status, attributed statements, and public reports. Current addition is one Sites-only incident with identified/mitigated/resolved timestamps over 20m12s. | The new incident has no Codex component or compensation statement. Three public capacity errors have no matching Codex Status record. Incident timing remains context, not reset cause. **Grade A incident chronology / D reset linkage; negative-control set strengthened.** |
| Provider anchors and out-of-cycle resets | `n=4` verified events, Aug 8–13 (`n=1` scheduled, `n=3` out of cycle), plus the current private sample and public Aug 20 anchor. | The deterministic forecast rises as the public anchor approaches, but an anchor is not itself a completed reset. Current private drift to `09:49:08Z` occurred without a qualifying transition. **Grade A transition / D anchor-alone event inference; unchanged.** |
| Hard reset, banked reset, and purchased credits | `n=5` inherited hard-reset/banked-credit action records, June 12–July 13; official Help/repository mechanisms plus public delivery contradictions. Current scan adds `n=0` completed grants/redemptions and `n=2` purchased-credit/accounting reports (#39260, #39408). | Updated Help explains shared purchased-credit balances can go negative and later purchases can offset them. This strengthens separation of purchased credits from both active-window resets and banked reset credits. June 29 still has no completion denominator. **Grade A mechanism / B–C delivery; mechanism strengthened, reset-event evidence unchanged.** |
| Gaps, cooldown, UTC/day | `n=4` verified detections and `n=3` upper-bound gaps, Aug 8–13: `11h09m42.937s`, `51h29m50.496s`, `55h20m37.071s`; observed UTC weekdays Saturday, Tuesday, Thursday. | No fifth event. The sample remains too small for cadence, cooldown, weekday, or time-of-day inference. **Grade D; unchanged.** |
| Public-report clustering, nonrecipients, display/enforcement contradictions | Current focused set `n=7` unique issue bodies (#39167, #39260, #39398, #39408, #39444, #38901, #38789), Aug 15–19, plus `n=3` capacity-error bodies; no staff corroboration or same-event denominator. | New reports strengthen evidence that billing periods, purchased-credit ledgers, automatic review, external CLI work, and UI visibility can diverge. A shared reporter cross-link does not establish independent clustering or prevalence. **Grade B divergence / D delivery prevalence; strengthened.** |
| Discovery/mirror lag | Current discovery `n=8`, feed fetched `2026-08-19T09:17:02.331Z`; preferred mirror `n=8`, lag `2m12.600s–15m00.168s`; fallback represented `n=2` originals, split one into 11 records, and omitted six replies. | Preferred remains more complete for current replies; fallback was faster for the button original. Both distort context and remain discovery-only. **Grade B current freshness / D completeness; completeness weakened.** |
| Renewal or plan change as a trigger | `n=1` new detailed report (#39398), Aug 17–19, plus inherited plan/entitlement contradictions; public reports only; cutoff at this scan. | The report says a new billing period did not reset the existing weekly window. This is a negative control against treating payment or renewal as a reset predictor, but one account is too sparse for prevalence. **Grade C negative control / D generalization; new.** |

## Strongest predictors, weak signals, and forecast changes

The strongest supported signal remains a bounded provider-owned usage or
enforcement transition with an advanced stable anchor. An approaching provider
anchor is a deterministic scheduling input, not completed-event evidence.
Explicit promises are directionally useful only when independently paired with
a later transition. Completed wording is good evidence of operator action but
not universal receipt.

Signals that remain weak, failed, or too sparse are: the reset-button noun
without an action; billing renewal; a sliding or merely approaching provider
timestamp; isolated capacity errors; milestone, release, or incident context;
mirror presence; and cadence/weekday/cooldown inference from only four verified
events. No probability is assigned to these by this research note.

The live deterministic refresh produced dataset
`events-4-cutoff-2026-08-19-bf546d8e`. Counts remain four verified
observations, two Codex-relevant official incidents, one approved source, zero
rejected records, and zero duplicates. With the Aug 20 public provider anchor
now about 22 hours away, repository code changed the 1/3/6/12/24-hour
probabilities from approximately `1%/1%/1%/1.46%/5.79%` to
`6.53%/8.12%/11.17%/20.21%/49.22%`. The interval remains
`2026-08-20T03:11:15Z`–`11:35:15Z`, confidence D. Two negative forecasts
matured; performance is `n=16`, Brier `0.07711875`. No model was promoted and
no prior feature snapshot was rewritten. Pending issue #14 is absent from the
feature snapshot.

## Next observable tests and coverage gaps

1. At the Aug 20 anchor, require a bounded meter or access transition; record
   nontransition and subsequent anchor drift as negative evidence.
2. Test whether the new reset-button capability statement is followed by an
   explicit canonical action. Do not infer a use from the button's existence.
3. Seek independent before/after and nonrecipient evidence for the
   #39167/#39260/#38901/#38789 cluster without treating cross-links by the same
   reporter as independence.
4. Resolve June 29's hard-reset completion separately from the banked-credit
   grant; preserve the zero receipt denominator.
5. Seek completion/breadth evidence for August 13 and independent
   recipient/nonrecipient evidence for July 28/29 and August 1.
6. Follow the conditional extra-credit offer only if a canonical completed
   grant appears.
7. Preserve the exact discovery cutoff for issue #14 and continue measuring
   reply omissions, thread splitting, and mirror lag.

Coverage gaps remain exact mutable-Help revision history, universal-delivery
denominators, the June 29 credit lifecycle, August 13 completion/breadth,
independent July/August receipt evidence, the Aug 20 transition, and staff
confirmation for recurrent credit-ledger, depletion, capacity, display, and
cross-surface attribution reports.
