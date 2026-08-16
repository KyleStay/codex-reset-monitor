# Source scan — 2026-08-16

**Research cutoff:** `2026-08-16T09:23:26Z` (terminal UTC clock for the
final read in this lane). This covers records discovered after the prior
cutoff, `2026-08-15T09:26:01Z`, plus bounded follow-up of the June 29,
July 28/29, August 1, August 8/10, and August 13 leads. This is a research
note; it does not create a confirmed observation, rewrite a prior feature
snapshot, or import a third-party forecast/classifier.

## Source boundary and retrieval

Only configured sources were reviewed: official OpenAI Status, Help,
developer documentation and changelog; source-native public `openai/codex`
issues, comments, releases, and pull requests; the exact configured X
account; X-owned oEmbed; and the two exact public Bluesky DIDs. Retrievals
were made during `2026-08-16T09:19:46Z`–`09:23:26Z` unless a source's own
freshness timestamp is shown below.

| Surface | Permanent source and retrieval | Finding |
| --- | --- | --- |
| Status | [Incidents API](https://status.openai.com/api/v2/incidents.json), read in the cutoff window; page `updated_at` `2026-08-13T23:58:22Z`. | `n=0` incidents created or updated after the prior cutoff. The resolved API/Codex/Work Mode incident `01KZSC0T66YTVM57N5T79SV8ZV` (Aug 11) remains the latest Codex-relevant Status record; no reset, credit, or compensation statement was added. |
| Help | [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-codex-and-chatgpt-plan-usage-limits) and [Using Credits for Flexible Usage](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-free-go-plus-pro-sora), read in the cutoff window; the pages say **Updated: 2 days ago** and **Updated: 3 days ago**, respectively, but expose no exact revision timestamp. | Current documentation says Codex, Work, Workspace Agents, and related surfaces can draw from one agentic pool; eligible Plus/Pro users may purchase credits and configure auto top-up; and a full banked reset separately resets both 5-hour and weekly windows, moving the weekly date about seven days. Purchased credits are post-limit capacity, not a full reset. This is mechanism context, not an event. Preserve the missing revision times. |
| Developer | [ChatGPT & Codex changelog](https://developers.openai.com/codex/changelog), read in the cutoff window. | Latest entries are Aug 13 Computer History, Aug 11 Linux/agent imports, Aug 10 Daybreak, and Aug 7 CLI 0.147.0. `n=0` new reset, grant, redemption, or compensation announcement. |
| Releases | [`openai/codex` releases](https://github.com/openai/codex/releases), read in the cutoff window. | `0.148.0-alpha.20` published Aug 16 `00:21Z`; alpha.19 Aug 15 `02:21Z`. The release bodies are placeholders and contain no reset/credit/completion claim. |
| Issues/comments/PRs | [Public GitHub API feed](https://api.github.com/repos/openai/codex/issues?state=all&since=2026-08-15T09%3A26%3A01Z&per_page=100), plus source-native issue pages and comments. | New usage-limit records are public claims only. The only comments on the focused issues were `github-actions[bot]` duplicate notices; no OpenAI staff corroboration, bounded meter transition, credit transaction, or cause statement appeared. |

## Tibo account and discovery candidates

The exact configured [@thsottiaux profile](https://x.com/thsottiaux) was
reviewed through the public source-native surface. The profile/status HTML is
not a complete timeline, so the approved temporary discovery endpoint was
used only for its permitted fields. The response had
`fetchedAt=2026-08-16T09:19:52.733Z`, `sourceErrors.tibo=null`, and 24 new
numeric candidates after the prior cutoff. The candidates span
`2026-08-15T20:31:00Z`–`2026-08-16T06:41:05Z` by the feed's whole-second
`pubDate`, with `n=4` originals and `n=20` replies.

All 24 candidates were checked against their exact canonical
`https://x.com/thsottiaux/status/<id>` URL and
[X-owned oEmbed](https://publish.twitter.com/oembed). Every response returned
`author_name=Tibo`, `author_url=https://x.com/thsottiaux`, matching public
text, and the August 15 or August 16 calendar date. No oEmbed validation
failed. The feed's derived text, classifications, probability, and forecast
fields were not read into the project. Where an exact sub-second UTC value is
needed, it remains explicitly ID-derived; the oEmbed response itself exposes
the calendar date only.

All 24 are **nonqualifying commentary**: `n=0` completed hard resets, `n=0`
promised future resets, `n=0` banked-reset grants, `n=0` redemptions, and
`n=0` usage-window or bucket changes. One post,
[2088763063495450791](https://x.com/thsottiaux/status/2088763063495450791),
mentions usage being good “even without my regular resets”; this is a
general comparison, not an announcement of a current action. Replies about
models, tokens, pricing, and organizations cannot establish delivery, scope,
cause, or account-wide completion.

The preferred unofficial mirror,
[@thsottiaux-mirr.selfhosted.social](https://bsky.app/profile/thsottiaux-mirr.selfhosted.social)
with exact DID `did:plc:rcaom2u2hfsm3aqab5dfvhxs`, returned 100 public records.
Its newest copied content was created at `06:41:05Z` and indexed at
`06:48:48.973Z` (about 7m44s); a six-record content match sample had roughly
7m00s–11m44s indexing lag. It strips canonical X numeric IDs from the
displayed records and omits some parent context. The fallback
[@thsottiaux-bot.eurosky.social](https://bsky.app/profile/thsottiaux-bot.eurosky.social)
with exact DID `did:plc:rcelwndiefenpjvnm6uood4t` also returned 100 records;
its newest item was created at `06:36:02Z` and indexed at `06:38:56.069Z`
(about 2m54s). It split the long token post into numbered parts and exposed
older X IDs, but no current candidate ID. These are freshness/discovery
checks only. Neither mirror establishes authorship, a completed reset, or
universal delivery.

## Carried-forward promises and historical gaps

The canonical promise thread remains unresolved as an intended future action,
not a completed reset. X oEmbed was revalidated during this pass for:

1. [2086189414292865249](https://x.com/thsottiaux/status/2086189414292865249),
   ID-derived `2026-08-08T20:34:50.549Z`, “another performative reset on
   Monday”;
2. [2086800050630676504](https://x.com/thsottiaux/status/2086800050630676504),
   ID-derived `2026-08-10T13:01:17.597Z`, contextual “Good morning”; and
3. [2086800639120888014](https://x.com/thsottiaux/status/2086800639120888014),
   ID-derived `2026-08-10T13:03:37.904Z`, clarifying the ordinary-reset
   interpretation.

The committed observer state was also checked against the live main-lane
read at `2026-08-16T09:16:29.972Z`: four published detections, no pending
publication or credit, Codex `64%`, and unchanged scheduled anchor
`2026-08-20T09:49:08Z`. Spark's separate zero-use/rolling bucket remains a
negative control. No new exhausted-to-available or near-zero meter transition
was observed in this pass. The anchor is not evidence of a fifth reset.

The [June 29 canonical promise](https://x.com/thsottiaux/status/2071740419030053227)
was revalidated as two promised actions (a hard reset within one hour and one
banked credit within 24 hours). There is still no staff completion statement,
receipt denominator, or independent bounded transition. Completion, breadth,
and cause remain unknown. The recovered canonical originals for [July 28](https://x.com/thsottiaux/status/2081940052154933696),
[July 29](https://x.com/thsottiaux/status/2082317452755751098), and [August 1](https://x.com/thsottiaux/status/2083395449814229287)
remain forecast-ineligible pending public-source review and independent
recipient/nonrecipient evidence. The [August 13 acknowledgement](https://x.com/thsottiaux/status/2087960561728569362)
still has `n=0` later completion or breadth statements.

## New public GitHub signals

These records are pending-review public reports, not confirmed observations:

- [#38789](https://github.com/openai/codex/issues/38789), created
  `2026-08-15T17:37:17Z`, says a Pro account reset early while 80–90% remained
  and its displayed weekly date moved from Aug 18 to Aug 21. It has no
  before/after rate-limit samples, recipient denominator, or staff cause. It
  is a possible out-of-cycle/display contradiction, not an inferred event.
- [#38853](https://github.com/openai/codex/issues/38853), created
  `2026-08-16T09:19:21Z`, says weekly limits last less than two days. It has
  no reset timestamp, meter transition, scope beyond one Pro report, or
  independent corroboration. Classify as depletion commentary only.
- [#38829](https://github.com/openai/codex/issues/38829), created
  `2026-08-16T03:01:44Z`, reports ChatGPT desktop Voice unexpectedly entering
  Work/Codex and consuming shared quota. This is an enforcement/scope
  contradiction, not reset evidence. [#38810](https://github.com/openai/codex/issues/38810)
  and [#38804](https://github.com/openai/codex/issues/38804) add client-specific
  HTTP 429/display contradictions without bounded resets.

No issue in this set qualifies as `verified-observation`; no issue was added
to the project from this research-only lane.

## Point-in-time pattern audit

The audit compares only information available by each evaluated cutoff with
the subsequent outcome. New evidence is labeled relative to the 2026-08-15
note.

| Pattern | Exact sample, range, classes, cutoff | Support, contradictions, lead time, grade, change |
| --- | --- | --- |
| Provider-owned transition | `n=4` project-verified detections, Aug 8–13; sanitized observer meter transitions and provider anchors; observer cutoff `2026-08-16T09:16:29.972Z`. | The strongest usable predictor remains an exhausted-to-available or near-zero meter transition with a materially advanced provider anchor. The unchanged Aug 20 anchor and separate Spark bucket are negative controls; no new event. **A bounded transition/B schedule correction; unchanged.** |
| Explicit future announcements | `n=7`, June 16–Aug 8; canonical attributed promises, public account/bucket reports, sanitized anchors, and later verified transitions; each post's discovery cutoff is preserved. | Later-signal range remains about 17m34s–51h28m; July 9 missed its stated hour, June 29 remains unresolved, and Aug 13 was retrospective. No current candidate is a promise. **C directional/A only when independently verified; unchanged.** |
| Completed versus future wording | `n=10`, June 4–Aug 11; canonical completed-action statements, inferences, public reports, and verified observations; cutoff-safe labels. | Recovered July 28/29/Aug 1 originals improve attribution but do not prove universal delivery. **A wording/B some delivery/C–D breadth; unchanged.** |
| Originals versus replies | Current scan `n=24` canonical candidates, Aug 15–16 (`n=4` originals, `n=20` replies), plus inherited historical samples; cutoff is this scan's discovery time. | All current items are nonqualifying. Replies can carry operational context but are more likely to omit parent/scope; mirrors split or omit context. **B classification/D completeness; unchanged.** |
| Incident and milestone context | `n=10` inherited incident/reset contexts, June 3–Aug 13; Status incidents, public reports, and attributed statements; no new post-cutoff Status event. | No new phase or compensation statement. Resolution-to-first reset statement remains historical context, not cause. **B context/D cause; unchanged.** |
| Provider anchors and out-of-cycle resets | `n=4` verified events, Aug 8–13 (`n=1` scheduled, `n=3` out of cycle), plus `n=1` Aug 15 anchor correction; observer cutoff above. | #38789 is a one-account unbounded report and cannot upgrade the sample. Sliding timestamps, other-bucket zeroes, and this unchanged anchor remain non-events. **A transition/B display correction/D prevalence; unchanged.** |
| Hard reset versus banked credit | `n=5` mixed action/grant records, June 12–July 13; canonical posts, Help mechanism context, implementation evidence, and nonreceipt reports. | The Help revision strengthens the mechanism distinction: adding credits or applying a banked reset is not proof of an automatic full reset. June 29 still has `n=0` completion/receipt denominators; no new grant or redemption. **A mechanism/B–C delivery; strengthened mechanism, unchanged event evidence.** |
| Gaps, cooldown, UTC/day | `n=4` verified detections and `n=3` upper-bound gaps, Aug 8–13: 11h09m42.937s, 51h29m50.496s, 55h20m37.071s; UTC weekdays Saturday, Tuesday, Thursday. | Too sparse for cadence, cooldown, weekday, or time-of-day inference. **D; unchanged.** |
| Public-report clustering and contradictions | `n=5` new focused GitHub reports, Aug 15–16, plus inherited divergence set `n=18`; source-native issue bodies/comments, no staff corroboration. | #38789, #38829, #38810, and #38804 strengthen display/enforcement/early-anchor contradictions; #38853 adds depletion language. No denominator or bounded same-event cluster. **B divergence/D delivery prevalence; strengthened contradiction only.** |
| Discovery and mirror lag | `n=24` current canonical candidates, 09:19:52.733Z feed freshness; mirror content match sample `n=10` across exact DIDs. | Preferred lag about 7m00s–11m44s in the sample and fallback about 2m54s for the newest item; preferred records omit X IDs and fallback omits current IDs/replies. Useful discovery, not delivery timing. **B current freshness/D historical completeness; unchanged.** |

## Deterministic inputs, forecast status, and next tests

No candidate in this scan is forecast-eligible. No third-party forecast or
classifier field was imported. The main refresh at
`2026-08-16T09:23:55.303Z` retained four verified observations, two
Codex-relevant incidents, one approved public source, zero rejected records,
and zero duplicates. Dataset `events-4-cutoff-2026-08-16-bf546d8e` remains at
1% for every horizon, with the unchanged likely interval
`2026-08-20T03:11:15Z`–`11:35:15Z` and confidence D. One additional forecast
matured negative, so performance changed from `n=12`, Brier `0.1027333`, to
`n=13`, Brier `0.0948385`; no model was promoted. The live observer's four
published records and current provider anchor remain the only account-level
inputs. No deterministic probability, historical feature snapshot, or model
selection changed.

Next detection tests are: (1) compare the Aug 20 provider anchor with a
bounded usage/enforcement transition, not the timestamp alone; (2) seek an
independent before/after sample and nonrecipient for #38789; (3) seek a later
completion and recipient denominator for the Aug 13 statement; (4) resolve the
June 29 hard-reset versus banked-credit completion question; (5) obtain
recipient/nonrecipient evidence for the July 28/29 and Aug 1 canonical posts;
and (6) continue measuring discovery/mirror lag while keeping post-discovery
evidence out of earlier forecast snapshots.

No new completed reset, banked-credit grant/redemption, supported cause,
verified observation, or accepted public source qualified in this research
pass. Coverage gaps remain mutable Help revision history, universal delivery
and nonrecipient denominators, the June 29 credit lifecycle, August 13
completion/breadth, and canonical historical receipt evidence.
