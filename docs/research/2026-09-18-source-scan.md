# Source scan for 2026-09-18

Research and forecast cutoff: `2026-09-18T13:57:06.541Z` UTC. The prior
published cutoff was `2026-09-16T20:20:48.457Z`; the September 17 run did not
publish a new snapshot. This note uses only the configured public sources and
the privacy-minimized observer status. Later discovery does not alter earlier
feature snapshots.

## Evidence and decisions

No completed reset, new reset promise, banked-credit grant or redemption,
historical inference, supported cause, or correction qualified. The local
observer's latest saved sample was `2026-09-17T15:15:12.123Z`: the
individual-paid Codex bucket was 92% used, not exhausted, with the unchanged
`2026-09-19T08:09:56Z` provider anchor. One banked reset remained available.
There were 14 published detections and no pending publication. The sample is
one account's state and is almost a day older than the forecast cutoff.

The [official Status API](https://status.openai.com/api/v2/incidents.json)
added two resolved incidents after the prior cutoff. [ChatGPT Work
errors](https://status.openai.com/incidents/01M2RC0WHGTX8EHDH7D60JJ7FC)
ran from September 17 `19:03:17Z` to `20:24:45Z`; [API model
errors](https://status.openai.com/incidents/01M2RMCS2HVBXGBFKEZ9RZR4FA)
ran from `21:29:35Z` to `21:50:36Z`. Neither incident describes a quota reset,
credit, or compensation. The [banked-reset Help
article](https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work)
still separates automatic resets from saved credits and says a successful
redemption refreshes eligible windows. Its relative update label does not
establish a revision timestamp. The official
[changelog](https://learn.chatgpt.com/docs/changelog) and [release
notes](https://openai.com/products/release-notes/) exposed no dated September
17–18 reset-policy entry in this review.

The public [openai/codex issue
search](https://github.com/openai/codex/issues) returned 320 issues created
from the prior cutoff through the discovery feed's September 18
`13:36:28.477Z` fetch time. This run screened their public titles and selected
permanent issue metadata. Several titles form a capacity-error cluster,
including [#46103](https://github.com/openai/codex/issues/46103),
[#46194](https://github.com/openai/codex/issues/46194),
[#46211](https://github.com/openai/codex/issues/46211), and
[#46344](https://github.com/openai/codex/issues/46344). Separate claims
concern [usage display and enforcement](https://github.com/openai/codex/issues/46384),
[unexpected consumption](https://github.com/openai/codex/issues/46286),
and [purchased-credit consumption](https://github.com/openai/codex/issues/46254).
These are public claims with no common provider-bounded reset transition or
staff diagnosis. The issue-title sweep cannot establish prevalence. Recent
[pull-request titles](https://github.com/openai/codex/pulls) and
[releases](https://github.com/openai/codex/releases) disclosed no reset
mechanism change in this window. Project issue counts stayed at 14
`verified-observation`, four `approved-public-source`, and 43 `pending-review`.
[Replacement-credit issue #56](https://github.com/KyleStay/codex-reset-monitor/issues/56)
still has zero comments and remains pending; #60 and #61 have no label or
comment change.

## Configured social watch

The exact [@thsottiaux profile](https://x.com/thsottiaux) loaded publicly with
2,976 posts and showed the newest original. Its Replies tab remained
login-gated. The approved [discovery
feed](https://www.willcodexquotareset.com/api/forecast) reported
`fetchedAt=2026-09-18T13:36:28.477Z`, `sourceErrors.tibo=null`, and nine new
numeric IDs after the prior cutoff. Only those fields and raw `tiboPosts` were
read; its classifier and forecast were not used. All nine passed X-owned
[oEmbed](https://publish.twitter.com/oembed) author, canonical URL, public
text, and calendar-date checks. Exact UTC is derived from each X Snowflake ID
because oEmbed lacks `created_at`. The feed's whole-second `pubDate` values
agree after truncation. No mismatched author, URL, date, or text was found.

| Canonical X ID | ID-derived UTC | Classification |
| --- | --- | --- |
| [2100363668051603608](https://x.com/thsottiaux/status/2100363668051603608) | `2026-09-16T23:18:15.990Z` | Original quoting a delayed product launch. Nonqualifying. |
| [2100461541145587999](https://x.com/thsottiaux/status/2100461541145587999) | `2026-09-17T05:47:10.754Z` | Social reply. Nonqualifying. |
| [2100461944860020851](https://x.com/thsottiaux/status/2100461944860020851) | `2026-09-17T05:48:47.007Z` | Product reply. Nonqualifying. |
| [2100473666635280768](https://x.com/thsottiaux/status/2100473666635280768) | `2026-09-17T06:35:21.696Z` | Revenue reply. Nonqualifying. |
| [2100474737420111956](https://x.com/thsottiaux/status/2100474737420111956) | `2026-09-17T06:39:36.991Z` | Social reply. Nonqualifying. |
| [2100474870044016922](https://x.com/thsottiaux/status/2100474870044016922) | `2026-09-17T06:40:08.611Z` | Product reply. Nonqualifying. |
| [2100645454245720513](https://x.com/thsottiaux/status/2100645454245720513) | `2026-09-17T17:57:59.054Z` | Original about model style guides. Nonqualifying. |
| [2100649624860254629](https://x.com/thsottiaux/status/2100649624860254629) | `2026-09-17T18:14:33.406Z` | DevDay reply. Nonqualifying. |
| [2100821375812530458](https://x.com/thsottiaux/status/2100821375812530458) | `2026-09-18T05:37:02.024Z` | Event reply. Nonqualifying. |

The preferred [exact-DID
mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcaom2u2hfsm3aqab5dfvhxs&limit=100)
matched 9/9 texts, with indexing lag 54.106–945.753 seconds against
ID-derived X time. The [fallback exact-DID
mirror](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcelwndiefenpjvnm6uood4t&limit=100)
covered 2/9 originals at 234.419–280.081 seconds and omitted every reply.
The feed covered these 9/9 candidates, but neither it nor the mirrors prove
timeline completeness or reply context. Discovery time is the feed's stated
fetch time; all validation occurred before the research cutoff.

## Historical decisions and point-in-time pattern audit

Rechecked canonical attribution for the [June 29 reset-plus-credit
promise](https://x.com/thsottiaux/status/2071740419030053227), [July 28
completion](https://x.com/thsottiaux/status/2081940052154933696), [August 1
completion](https://x.com/thsottiaux/status/2083395449814229287), [August 8
Monday promise](https://x.com/thsottiaux/status/2086189414292865249), and
[August 10 ordinary-reset context](https://x.com/thsottiaux/status/2086800639120888014).
The July 29 gap, [issue #56](https://github.com/KyleStay/codex-reset-monitor/issues/56),
and September 12 delivery breadth were compared with the new Status and
public-report window. No new independent receipt closes the June 29 or Monday
promise; July 28/29 and August 1 still lack a delivery denominator and cause.
No historical ledger or earlier feature snapshot changed. Coverage remains
anchored to the August 7–8, 2025 public launch; this run revisited the named
2026 gaps, not a new full-range sweep.

Grades describe evidence, not probabilities: A is provider or observer
chronology, B is a public repository claim, C is an attributed operator
statement, and D is a proposed predictor, cause, or population inference.
Every row is evaluated at the `2026-09-18T13:57:06.541Z` cutoff. Only public
or approved evidence available by each earlier forecast cutoff is considered
for prospective comparison.

| Pattern, change since prior run | Sample and covered range | Support, missing cases, lead time, grade |
| --- | --- | --- |
| Bounded primary-bucket transition, unchanged | 14 verified observer issues, Aug 8–Sep 12, 2026; 13 reset gaps; latest saved sample Sep 17. | No fifteenth transition. Meter/access recovery plus a materially advanced stable anchor confirms one account after the fact, Grade A. Gap range remains 11h09m42.937s–195h30m43.288s; population prediction Grade D. |
| Banked redemption distinction, unchanged | Two verified paired credit-count/full-window transitions, Sep 10–11, 2026; issues #57/#58. | Both reduced the bank by one and advanced the anchor. One credit remains available. Other credit complaints lack a comparable receipt. Grade A for the pair; generalization Grade D. |
| Future promise before observed delivery, unchanged and sparse | Two prospective X/oEmbed promise episodes with later observer bounds, Sep 7–12, 2026. | Promise-to-upper-bound lead range 4h52m09.839s–6h03m50.593s. June 29 and Aug 8/10 promises lack matched completion, so success-only selection would mislead. Attributed statement Grade C; predictive value Grade D. |
| Completed wording and original/reply position, unchanged | Two completed-action statements near observer bounds, two future promises, Sep 7–12; nine new X/oEmbed negatives, Sep 16–18, comprising two originals and seven replies. | Sep 7 completion followed its observer by 2h37m05.099s; Sep 12 completion wording fell 3m28.168s before the bound's upper sample. New 0/9 qualify. No original-versus-reply effect or population breadth is established. Attribution Grade A; generalization Grade D. |
| Incident timing as reset signal, strengthened negative control | Two new resolved Status incidents, Sep 17; five Codex-relevant incidents retained in the refresh. | New Work/API error incidents have no reset or compensation language. No pre-reset lead time. Incident timing Grade A; reset linkage Grade D. |
| Capacity, usage display, depletion, and credit claims, strengthened contradictions | Seven named public issue titles among 320 new issues, Sep 16–18. | Capacity errors with stated remaining usage, mismatched weekly/five-hour displays, fast depletion, and disputed credits are separate. No shared provider bound, prevalence denominator, staff cause, or defensible reset lead time. Claim Grade B; predictor Grade D. |
| Discovery completeness, unchanged | Nine X/oEmbed-validated posts, Sep 16–18; feed fetched Sep 18 13:36:28Z. | Feed 9/9; preferred mirror 9/9 at 54.106–945.753s lag; fallback 2/9 at 234.419–280.081s and no replies. Mirror completeness remains Grade D. |
| Anchor, cooldown, weekday, and UTC hour, unchanged | 14 heterogeneous transitions and 13 gaps, Aug 8–Sep 12; Sep 17 provider sample. | Two scheduled, 11 out-of-cycle, and credit-coupled events mix mechanisms. The Sep 19 anchor is a schedule input; no stable special-reset weekday, UTC hour, gap, or cooldown pattern follows. Grade D. |

The strongest supported detection signals are a bounded primary-bucket
meter/access transition, a stable provider-anchor advance, and credit-count
movement for a redemption. They classify one account's event after it happens.
Promises, completed wording, incident timing, release context, public-report
volume, and mirror timing remain too sparse or contradictory as independent
forecast features. Next tests are the September 19 scheduled anchor with the
remaining credit tracked separately, recipient/nonrecipient bounds for
September 12, and source-owned resolution of the older promises and the
new capacity/display contradictions.

## Deterministic refresh

`npm run update:data` completed healthy at `2026-09-18T13:57:06.541Z` with
14 verified observations, five retained Codex-relevant incidents, four
approved sources, zero rejected records, and zero duplicates. No new source
or observation entered the model. Repository code generated
`events-14-cutoff-2026-09-18-e059a0ed` and `fc_20260918135706`:
1/3/6/12/24-hour estimates of 19.64/22.25/26.61/36.72/59.36%, confidence
D. The likely interval remains September 19 `01:53:44Z–14:26:08Z`. The
rise is the scheduled anchor entering the forecast horizons, not a new
special-reset signal. One negative outcome matured; performance is n=44,
with model and baseline Brier both 0.10341818181818187. No model promotion
or historical rewrite occurred.
