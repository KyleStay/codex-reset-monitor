# Primary-source scan for 2026-09-10

Research cutoff: `2026-09-10T09:25:03.300Z` (UTC). The prior cutoff was
`2026-09-09T09:25:57.593Z`. This bounded audit covers only records first
available in that interval, while rechecking the unresolved June 29,
July 28/29, August 1, and August 8/10 questions. No issue, dataset,
`update:data`, commit, push, or publication was made by this source-only lane.

## Result

OpenAI published one provider-owned incident explicitly titled
"Investigating unexpected usage limit resets." It ran from
`2026-09-09T17:29:55Z` to `2026-09-09T17:54:12Z` and said that some Codex
users might experience unexpected resets. This confirms an official incident,
not a completed reset for any particular account or population. The local
observer's latest permitted sample was still one account at `94%` used with
the September 15 anchor, `n=11` detected full-reset transitions, and three
available reset credits; no twelfth transition appeared in the interval.

The configured Tibo profile exposed eight new canonical candidates after the
prior cutoff. All eight passed X-owned oEmbed validation as Tibo/
@thsottiaux. Only one is reset-related: attributed correction language said
some banked resets did not fully apply in ChatGPT Work and Codex, and that
affected users would receive another reset and an apology email. It is a
staff-adjacent attributed public signal, not a delivery receipt. Pending source
issue [#56](https://github.com/KyleStay/codex-reset-monitor/issues/56) keeps it
outside approved forecast inputs.

## Retrieval record and source boundary

All times are UTC unless marked otherwise. Dynamic pages can change after
retrieval. I retained only source URLs, publication/update times, neutral
summaries, classifications, and the permitted observer fields. I did not
read or retain conversations, prompts, responses, code, account identifiers,
credentials, cookies, session history, screenshots, or logs.

| Source and bounded query | Result |
|---|---|
| [OpenAI Status incidents API](https://status.openai.com/api/v2/incidents.json), current response through the cutoff | New incident `01M23KG62KKK448RN434CQ64Z8`: created `17:29:55Z`, identified `17:40:47Z`, monitoring `17:45:25Z`, resolved `17:54:12Z`. The API and [canonical incident page](https://status.openai.com/incidents/01M23KG62KKK448RN434CQ64Z8) say "Some Codex users may be experiencing unexpected usage limit resets," then "All impacted services have now fully recovered." No affected component, account denominator, reset breadth, or root cause is given. |
| [Banked-reset Help](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work) | Retrieved during the cutoff window; updated about 13 hours earlier. It says a banked reset is saved and user-applied, while an automatic/global reset applies directly and does not create a saved reset. It also says a successful banked reset refreshes eligible windows and changes the weekly date, and that eligibility, delivery timing, and affected limits vary. The September 7 global-reset paragraph remains policy/context evidence, not a new account event. |
| [ChatGPT Work and Codex Help](https://help.openai.com/en/articles/20001275), [paid weekly reset Help](https://help.openai.com/en/articles/20001507), [credits Help](https://help.openai.com/en/articles/12642688), and [Using Codex Help](https://help.openai.com/en/articles/11369540) | Current mechanism pages distinguish plan usage, purchased resets, banked resets, and flexible-usage credits. None supplies an account receipt or a population delivery denominator for the September 9 incident. |
| [Codex app-server documentation](https://learn.chatgpt.com/docs/app-server) | The public contract documents `account/rateLimits/read`, bucket usage/window/reset fields, and the separate `rateLimitResetCredits` ledger and consume outcomes. This supports the observer evidence classes but is not an event. |
| [OpenAI News](https://openai.com/news/), [GPT-6 Astra article](https://openai.com/index/gpt-6-astra-next-generation-work/), and [release notes](https://openai.com/products/release-notes/) | GPT-6 Astra was published September 9 and is available in Work/Codex; the material describes rollout and capacity context but no reset, compensation, or quota-accounting change. Release notes had no September 9–10 reset entry. |
| Public [openai/codex commits](https://github.com/openai/codex/commits/main/), [pull requests](https://github.com/openai/codex/pulls), [releases](https://github.com/openai/codex/releases), and [rate-limit issues](https://github.com/openai/codex/issues?q=label%3Arate-limits) | Read-only API counts: `67` commits in the bounded interval, `100` first-page updated PR records, and `95` rate-limit issue records returned. Exactly `70` rate-limit issues were created after the prior cutoff, from `2026-09-09T10:13:25Z` through `2026-09-10T08:33:21Z`. Representative reports include [#44234](https://github.com/openai/codex/issues/44234), [#44251](https://github.com/openai/codex/issues/44251), [#44254](https://github.com/openai/codex/issues/44254), [#44262](https://github.com/openai/codex/issues/44262), [#44264](https://github.com/openai/codex/issues/44264), [#44274](https://github.com/openai/codex/issues/44274), [#44300](https://github.com/openai/codex/issues/44300), [#44356](https://github.com/openai/codex/issues/44356), [#44443](https://github.com/openai/codex/issues/44443), and [#44468](https://github.com/openai/codex/issues/44468). Titles and bodies report quota jumps, stale/multiple windows, lockouts, partial recovery, or capacity errors; they remain user claims. Representative comment checks found GitHub Actions duplicate notices and user followups, but no OpenAI staff diagnosis or maintainer `verified-observation`. The new `0.154.0` release body lists product/features and no reset-policy or quota-accounting change. |
| Configured [OpenAI Developer Community](https://community.openai.com/c/codex/37) | The topic [Codex usage limits drop without activity](https://community.openai.com/t/codex-usage-limits-drop-without-activity/1396200) records a user report of a drop from about 75% remaining to 0% after three idle hours and links the resolved Status incident. It is corroboration of public confusion only. In [usage quotas changed to monthly?](https://community.openai.com/t/usage-quotas-changed-to-monthly/1382696), `OpenAI_Support` says moving reset dates without usage returning requires an account-specific check and that cause/fix timing is unconfirmed. In [Banked Codex capacity wiped by reset?](https://community.openai.com/t/banked-codex-capacity-wiped-by-reset/1384020), `OpenAI_Support` restates the banked-reset mechanism and says it has not confirmed why another reset appeared early. These replies support mechanism and uncertainty, not a population reset label. |
| Exact configured [Tibo profile](https://x.com/thsottiaux) and [canonical post](https://x.com/thsottiaux/status/2097752790177370535) | Source-native X rendered `@thsottiaux Codex & ChatGPT`, 2,918 posts, and the exact public text/author. The post's X Snowflake ID gives `2026-09-09T18:23:34.197Z` UTC; X displayed `2:23 PM · Sep 9, 2026` in the browser locale. All eight candidates passed X-owned oEmbed validation. The relevant post was indexed by the preferred mirror `8m56.467s` after its ID-derived time and by the fallback `4m35.971s` after it. |
| Approved discovery feed and exact-DID Bluesky mirrors | Feed `fetchedAt` was `2026-09-10T09:00:23.284Z`, `sourceErrors.tibo=null`, and it returned eight candidates after the prior cutoff. The preferred exact-DID mirror covered `8/8`; the fallback covered `4/8` and split one privacy-related thread. Both remain discovery/corroboration aids only. |

## Provider and attributed evidence

### Official incident: unexpected usage-limit resets

The Status incident is a new official incident class, separate from a
confirmed account observation. Its four updates provide an exact chronology:

1. `17:29:55Z`: some Codex users may be experiencing unexpected usage-limit
   resets.
2. `17:40:47Z`: issue identified and a fix in progress.
3. `17:45:25Z`: mitigation applied; recovery monitored.
4. `17:54:12Z`: all impacted services fully recovered.

The incident does not say whether the unexpected behavior was a full hard
reset, a partial/window-selection change, a display/enforcement mismatch, or
an affected banked-reset path. It does not establish that every user received
the same result. Cause remains unknown.

### Canonical Tibo correction

The source-native post [2097752790177370535](https://x.com/thsottiaux/status/2097752790177370535)
states that "some banked resets" did not fully apply when used in ChatGPT Work
and Codex, and says affected users would receive another one and an apology
email. This is classified as `banked_reset_grant`, specifically attributed
future compensation, not `completed_hard_reset`: it promises a replacement and
does not show that a replacement was granted, consumed, or applied. It was
published `53m39.197s` after the Status incident began and `29m22.197s` after
the incident was marked resolved. That temporal overlap is a candidate
correlation only; neither source explicitly links the post to the incident.

The same profile's visible latest posts included unrelated product/social
commentary and the earlier Astra-demand post
([2097559315150426222](https://x.com/thsottiaux/status/2097559315150426222));
there was no new promise of a broad automatic reset in the visible interval.

### Observer state

The permitted local observer sample at `2026-09-10T09:22:09.559Z` recorded:

- primary Codex bucket `usedPercent=94`, `exhausted=false`,
  `windowDurationMinutes=10080`, `resetsAtUtc=2026-09-15T01:26:01Z`;
- `n=11` detected full-reset transitions, latest
  `2026-09-08T01:28:48.379Z`;
- `availableCount=3` reset credits, all still `available`;
- no detected transition or credit redemption in the bounded interval.

This proves the observer account's current state only. It cannot establish
population delivery, affected-plan breadth, or cause, and the unchanged credit
count argues against a credit redemption for this account during the incident.

## Historical gap decisions

The source-native rechecks produced no new account-level denominator or
provider receipt for the unresolved records:

- **June 29 reset-plus-credit question:** the canonical June 28/29-era
  operator action ([post](https://x.com/thsottiaux/status/2071381664853319742))
  and [issue #30726](https://github.com/openai/codex/issues/30726) still leave
  hard-reset delivery versus a separate banked-credit grant unresolved.
- **July 28/29:** the attributed announcements
  ([July 28](https://x.com/thsottiaux/status/2081940052154933696),
  [July 29](https://x.com/thsottiaux/status/2082317452755751098)) remain
  day-precision inferred actions; [#35952](https://github.com/openai/codex/issues/35952)
  and [#36170](https://github.com/openai/codex/issues/36170) preserve meter and
  nonreceipt contradictions. No universal delivery denominator exists.
- **August 1:** the attributed weekend announcement
  ([post](https://x.com/thsottiaux/status/2083395449814229287)) and independent
  issues [#36436](https://github.com/openai/codex/issues/36436),
  [#36468](https://github.com/openai/codex/issues/36468), and
  [#36481](https://github.com/openai/codex/issues/36481) support a
  day-precision inferred reset for some paid accounts, not universal delivery
  or a banked-credit redemption.
- **August 8/10:** the resolved promise thread remains
  [2086189414292865249](https://x.com/thsottiaux/status/2086189414292865249),
  with contextual [2086800050630676504](https://x.com/thsottiaux/status/2086800050630676504)
  and strengthening [2086800639120888014](https://x.com/thsottiaux/status/2086800639120888014).
  Later account-level evidence is already classified separately; this scan
  found no new provider receipt, simultaneous-delivery denominator, or cause
  correction.

No historical record was promoted, rewritten, or added in this source-only
lane. Retrospective discoveries remain excluded from earlier feature snapshots.

## Point-in-time pattern audit

Evidence grades in this table are descriptive, not probabilities: `A` is
provider/observer-owned, `B` is public repository/report evidence without
provider confirmation, `C` is an attributed public statement or staff
mechanism reply, and `D` is a population, cause, or predictive inference.

| Pattern | Exact sample, range, and cutoff | Support, contradictions, lead time, and grade | Change |
|---|---|---|---|
| Official unexpected-reset incident | `n=1`, `2026-09-09T17:29:55Z–17:54:12Z`; cutoff `2026-09-10T09:25:03.300Z` | Status chronology is `A`; it names unexpected Codex resets but gives no scope, denominator, account result, or cause. No predictive lead time; incident existence `A`, delivery/cause inference `D`. | **New** |
| Incident and banked-reset correction overlap | `n=1` incident plus `n=1` canonical Tibo correction; `53m39.197s` from incident start to post, `29m22.197s` post-resolve; same cutoff | Status is `A`; Tibo post and two Support replies are `C`. Contradictions: replacement is promised, not observed; no explicit source linkage; no population breadth. Lead time is post-incident, so it is not a forecast signal. Pending source issue #56 keeps it outside approved inputs. | **New watch signal; not a predictor** |
| Provider-owned account transition | `n=11` transitions from `2026-08-08T09:23:05.496Z` through `2026-09-08T01:28:48.379Z`; latest sample `2026-09-10T09:22:09.559Z` | Observer meter/anchor and credit fields are `A`; no new transition, anchor remains Sep 15, credits remain 3. Confirmation is zero lead time after an event; population inference `D`. | **Unchanged** |
| Public rate-limit report clustering | `n=70` newly created labeled issues, `2026-09-09T10:13:25Z–2026-09-10T08:33:21Z`; `n=95` returned records | User reports and bot duplicate notices are `B`; examples document jumps, rollback, lockout, and stale-window contradictions. No staff diagnosis or maintainer verification in representative comments. No reliable lead time; prevalence/cause `D`. | **Strengthened as contradiction coverage** |
| Community staff mechanism/uncertainty | `n=2` OpenAI_Support replies reviewed after the prior cutoff, plus `n=1` new user topic; June 17–September 9 source dates | Support confirms banked-reset semantics and explicitly leaves early/moving resets and cause unresolved (`C/A` mechanism, `D` cause). No reset event or fix timeline. | **Strengthened uncertainty** |
| Astra rollout/capacity context | `n=1` Sep 9 OpenAI News article plus current Help/release-note pages; cutoff above | Official rollout material is `A`; Tibo's earlier demand post is attributed `C`. Neither establishes a reset trigger. No lead time or causal confidence. | **Unchanged context** |
| Future promises and later delivery | Prior point-in-time corpus `n=7` explicit future-reset announcements, June 16–August 8, evaluated against outcomes through this cutoff | Existing lead range remains about `17m34s–51h28m` where an independent account signal exists; June 29 remains unresolved, and broad announcements coexist with nonrecipients/display-enforcement contradictions. Sample too small and heterogeneous for probability. | **Unchanged; too sparse** |
| Cadence, cooldown, weekday, and UTC time | `n=11` observer transitions, `n=10` gaps, Aug 8–Sep 8 | Eight out-of-cycle gaps and no new transition; no stable cadence or weekday rule. Grade `D`. | **Unchanged; refuted as a simple rule** |

## Predictors, failures, and next tests

The strongest usable detector remains a provider-owned exhausted-to-available
transition, or a near-zero used-meter transition paired with a material,
stable reset-anchor advance. It confirms an account event after the fact. The
September 9 incident is a new official trigger for heightened monitoring, but
the observer had no matching transition by the cutoff.

Signals that remain failed or too sparse are cadence/weekday rules, public
issue volume, capacity/demand context, Astra rollout, mirror freshness,
display-only changes, and broad attributed announcements. The Status incident,
Tibo correction, and user reports should be tested as one candidate episode,
but no cause or probability should be assigned from this single cluster.

Next detection tests:

1. Compare the next observer sample against the Sep 15 anchor and the three
   available-credit records; require a bounded meter/access transition before
   labeling a reset.
2. Recheck Status incident updates, official Help revisions, and OpenAI
   Support replies for a provider explanation of partial resets, window
   selection, or banked-reset compensation.
3. Revalidate any new Tibo reset or correction post through its canonical X
   URL and X-owned oEmbed when the endpoint is available; preserve ID-derived
   timestamp basis and mirror gaps.
4. Keep the June 29, July 28/29, August 1, and August 8/10 records separate
   until a provider-owned receipt or two independent account-level reports
   resolve delivery breadth and mechanism.

## Forecast and verification impact

This note is source-only. I did not run `npm run update:data` or `npm run
verify`, and did not change deterministic forecast inputs/outputs. The parent
refresh remained at `1%` for all horizons, with the interval unchanged,
`n=11` observations, `5` incidents, `4` approved sources, and performance
`n=37` with Brier `0.09646216216216223`. The official incident, attributed
compensation statement, Support replies, and public issue reports must remain
outside confirmed observations unless the repository's promotion gates and
maintainer labels accept a qualifying account transition.
