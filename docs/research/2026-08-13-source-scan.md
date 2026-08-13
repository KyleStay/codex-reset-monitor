# Source scan — 2026-08-13

**Research cutoff:** `2026-08-13T11:52:35Z` (final retrieval clock). The
approved discovery feed was successfully read at `2026-08-13T11:37:49.280Z`;
its `sourceErrors.tibo` was `null` and its raw `tiboPosts` array held 28
records. This note covers public material from the preceding research cutoff
`2026-08-12T09:28:06Z` through this cutoff, plus bounded re-checks of the June
29 and July/August historical gaps. The source-audit lane made no external
publication; the main daily lane separately recorded its verified-observation
and deterministic refresh results below.

## Evidence and source boundaries

I read the approved raw discovery fields (`fetchedAt`, `sourceErrors.tibo`, and
`tiboPosts`) and the two exact configured Bluesky DIDs. The independent feed
and mirrors were used solely to discover a candidate and assess freshness.
The candidate was then validated through X-owned oEmbed. No tracker forecast,
classification, or mirror text is evidence by itself. Public GitHub issues are
account claims, not confirmed observations. No identities beyond the configured
`@thsottiaux` watchlist were inferred.

Official checks covered the current [OpenAI Status incident
feed](https://status.openai.com/api/v2/incidents.json), [Codex/ChatGPT plan
usage Help article](https://help.openai.com/en/articles/11369540-codex-and-chatgpt-plan-usage-limits),
[Codex changelog](https://developers.openai.com/codex/changelog), and public
`openai/codex` issues, comments, pull requests, commits, and
[releases](https://github.com/openai/codex/releases). The historical bounded
pass revisited the June 29 promise and the July 28/29 and August 1
mirror-only records.

## New August 13 candidate and independent follow-up

The raw approved feed discovered one reset-relevant original:
[`2087706104814023111`](https://x.com/thsottiaux/status/2087706104814023111).
X-owned [oEmbed validation](https://publish.twitter.com/oembed?omit_script=true&url=https%3A%2F%2Fx.com%2Fthsottiaux%2Fstatus%2F2087706104814023111)
matched the configured author, canonical URL, and text. Its Snowflake-derived
UTC time is `2026-08-13T01:01:37.748Z` (the discovery/mirror copies preserve
whole-second `01:01:37Z`). It announces a reset for “everyone” to land in the
next hour. This is an **attributed explicit future reset announcement**; it
does not specify a plan denominator, prove a particular account's delivery,
or distinguish a hard reset from any other mechanism.

The prior ambiguous [August 12 milestone hint](https://x.com/thsottiaux/status/2087423996115681767)
remains canonically validated. The August 13 announcement is a plausible
prospective resolution of that hint, but it did not say that explicitly, so the
link is contextual rather than a confirmed causal chain.

One independent public account report, [issue #38332](https://github.com/openai/codex/issues/38332),
was opened at `2026-08-13T08:38:09Z`. It describes a Plus account's weekly
meter becoming 100% with a new reset date approximately seven days later at
about `10:30` CEST (`08:30Z`) and says no banked reset was intentionally
redeemed. It remains a public report rather than evidence of population
breadth.

More importantly, the privacy-minimized local observer produced verified issue
#7: a deterministic meter-reset bound of `2026-08-13T01:00:17.086Z` through
`2026-08-13T07:23:16Z`, with the primary meter moving from 62% used to 0%, the
provider reset anchor advancing from `2026-08-18T00:05:51Z` to
`2026-08-20T07:23:15Z`, and no banked credit. It is an individual-paid,
out-of-cycle full reset (lead 6,763 minutes), not a population result or a
credit grant. The announcement's timestamp falls inside that broad verified
bound; because the project discovered the post **after** the outcome, it is
retrospective context only and cannot be a predictor in any historical feature
snapshot. The main lane created pending public-source issue #8 for the post;
it remains forecast-ineligible until maintainer approval.

## Discovery freshness and gaps

For the new original, both exact mirrors carried matching discovery text but
remain discovery-only. The preferred `selfhosted.social` mirror had created
time `01:01:37Z` and indexed time `01:15:14.966Z` (lag about 13 minutes 38
seconds). The fallback `eurosky.social` mirror indexed it at
`01:04:05.071Z` (lag about 2 minutes 28 seconds). Thus both were current for
this original, with the fallback materially faster on this check. The approved
feed was healthy but was only fetched much later, so it gives no near-real-time
delivery bound.

The combined recent validated-original control set is now `n=4` originals
(two August 11 completion originals, the August 12 hint, and this August 13
announcement), with `n=8` exact-mirror copies. The observed mirror-index lag
range is about 30 seconds to 13 minutes 38 seconds. This confirms recent
redundant discovery, not completeness or source authorship.

The current raw-feed page does not retain the old July/August candidates. The
fallback mirror still carries its old July 28/29 mirror text, but it provides
no canonical numeric X URL. No independently discovered canonical URL was
available for a compliant oEmbed validation of the July 28, July 29, or August
1 records in this run. Those records therefore remain **mirror-only,
discovery-only**. In particular, a whole-second mirror timestamp cannot safely
reconstruct an X Snowflake ID. The known gap is not closed.

## Official and repository-native monitoring

OpenAI Status had no new incident after the prior cutoff. The latest
Codex/Work item remains [“Increase in errors on API, Codex and Work Mode”](https://status.openai.com/incidents/01KZSC0T66YTVM57N5T79SV8ZV),
resolved at `2026-08-11T22:42:26Z`; its updates describe mitigation and
recovery, not reset, credit, compensation, or cause.

The mutable Help article still keeps waiting for a normal reset, adding
credits, and applying an available reset distinct. It states that a redeemed
full banked reset restarts both five-hour and weekly windows; this explains a
mechanism but does not certify any August delivery. The changelog had no dated
August 12 or 13 reset announcement. The new
[0.148.0-alpha.11 prerelease](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.11)
was published at `2026-08-13T04:11Z` with a placeholder release body and no
reset note. A bounded post-cutoff scan of public commits, pull requests, and
releases found no merged mechanism change or staff completion statement about
the August 13 action.

Post-cutoff GitHub reports add contradictions, not delivery breadth:

- [#38309](https://github.com/openai/codex/issues/38309) reports a visible
  quota drop after an asserted reset, without an independently bounded reset
  time.
- [#38335](https://github.com/openai/codex/issues/38335) and
  [#38352](https://github.com/openai/codex/issues/38352) report unexpectedly
  rapid consumption; neither is a completed-reset record.
- [#38354](https://github.com/openai/codex/issues/38354) reports 100% shown
  while enforcement still says the limit is reached.

No staff-associated comment in the bounded results supplied a broad completion,
credit grant, or causal explanation. These public claims reinforce the need to
keep meter display, enforcement, consumption, plan entitlement, active-window
reset, and banked-credit state separate.

## Historical follow-up

### June 29 hard-reset completion and banked-credit breadth — unchanged

The canonical [June 29 promise](https://x.com/thsottiaux/status/2071740419030053227)
still promises a hard reset within one hour and a separate banked credit within
24 hours. Bounded exact-ID/exact-wording repository review found neither a
staff completion statement nor a precise independent transition. The existing
mixed reports—[#30680](https://github.com/openai/codex/issues/30680),
[#30641](https://github.com/openai/codex/issues/30641#issuecomment-4839142506),
[#30726](https://github.com/openai/codex/issues/30726),
[#30660](https://github.com/openai/codex/issues/30660#issuecomment-4840688777),
and [#30686](https://github.com/openai/codex/issues/30686#issuecomment-4861400899)—
remain divergent about active window, bucket, and credit receipt. The official
[depletion incident](https://status.openai.com/incidents/01KW2E6W0503W4NXJNCVAG8V6T)
does not state reset or credit delivery. Completion time, recipient breadth,
and one exclusive cause remain unresolved.

### July 28/29 and August 1 canonical-ID gap — unchanged/fail closed

The exact configured mirrors still preserve discovery-only wording for July 28,
July 29, and August 1, but no current raw-feed candidate or source-native
GitHub reference yielded a canonical `x.com/thsottiaux/status/<numeric-id>`
URL. The existing independent August 1 inference may retain its prior public
issue support and uncertainty, but the mirror claims cannot upgrade it. July
28 and July 29 remain unaccepted until a canonical candidate can be discovered
through an allowed path and X-owned oEmbed confirms it.

## Point-in-time-safe pattern audit

This audit uses only material public before the evaluated outcome and marks the
later project discovery/approval time as the operative feature cutoff. It does
not import tracker forecasts, tracker classifications, or unverified public
claims into historic forecast snapshots.

### 1. Explicit future announcements and later delivery signals — unchanged predictive sample; one retrospective context case

- **Sample, range, and classes:** `n=7` point-in-time-eligible canonical
  explicit future-reset announcements, June 16–August 8; attributed operator
  posts, public account/bucket reports, sanitized anchors, and
  project-verified transitions. The August 13 post is outside the predictive
  sample because the project discovered it after issue #7's outcome.
- **Cutoff:** each post's public and project-discovery time. The August 13 post
  cannot be inserted into issue #7 or any earlier feature snapshot.
- **Support and lead range:** July 10 had one account's anchors about 6h15m
  and 11h56m later; July 11 had one about 17m34s later; the August 8 promise
  preceded the August 10/11 verified transition by about 48h13m–51h28m. The
  new announcement falls within, rather than before, issue #7's 6h22m59s
  bound, so it supplies no defensible lead time.
- **Contradictions/missing evidence:** June 16 completion wording arrived
  roughly 29h20m after its 24-hour promise; July 9's surviving report is about
  14h22m after a one-hour claim; June 26 lacks a precise transition; June 29
  remains unresolved. The August 13 post was discovered after the confirmed
  outcome; the public report is one account and lacks population scope.
- **Grade/status:** C for directional temporal association, A only for the
  single project-verified August outcome; no probability is defensible.
  **Predictive sample unchanged; new retrospective contextual case.**

### 2. Short stated rollout windows — unchanged; August 13 cannot evaluate the window prospectively

- **Sample, range, and classes:** `n=3` point-in-time-eligible testable-window
  announcements from July 9–11 plus `n=4` historical one-account
  server-window transitions. The August 13 one-hour announcement is
  retrospective-only for issue #7.
- **Cutoff:** announcement/public-report times, with retrospective records
  excluded from earlier feature snapshots.
- **Support and lead range:** the July 10/11 anchors fell about 17m34s to
  11h56m after their statements. The August 13 event bound begins before its
  newly discovered one-hour wording, so it cannot measure timely delivery.
- **Contradictions/missing evidence:** July 9 was about 14h22m after a
  one-hour statement; no account denominator exists; the August 13 event has
  a broad observer bound and cannot show rollout breadth.
- **Grade/status:** B for some temporal alignment, C for generalization and
  exact stated windows. **Unchanged; new announcement excluded from
  prospective window evaluation.**

### 3. Completed versus future wording — unchanged distinction

- **Sample/range/classes:** `n=7` canonical completed-language statements,
  June 4–August 11; X validation, inferred historical events, public reports,
  and project observations.
- **Cutoff/support:** statement publication times; completed language has
  aligned with some later public support, including the August observations.
- **Contradictions/lead range:** completed wording remains compatible with
  plan, bucket, display, enforcement, and nonrecipient divergence; lead time
  is not applicable to already-completed wording. The August 13 post is future
  wording and adds no completed-language case.
- **Grade/status:** A for attributed action wording, B for some delivery, C
  for universal delivery. **Unchanged.**

### 4. Hard reset versus banked credit — unchanged

- **Sample/range/classes:** `n=5` explicit mixed-action/grant records, June
  12–July 13; canonical posts, official Help, implementation evidence, and
  public nonreceipt reports.
- **Cutoff/support:** source publication times; Help consistently separates an
  active-window reset from a separately redeemable banked reset.
- **Contradictions/lead range:** June 17/18 and June 29 show divergent
  active-window and credit-ledger outcomes; issue #7 advanced an active anchor
  with no available credit, while the public report also denies a deliberate
  credit redemption. Lead time is not applicable.
- **Grade/status:** A for mechanism distinction; B/C for account-level grant
  delivery. **Unchanged.**

### 5. Incident, milestone, and cause context — unchanged causal grade

- **Sample/range/classes:** `n=7` contexts, June 3–August 13: three
  historical incident-resolution/reset sequences, launch/milestone contexts,
  the August 10–11 error period, the August 11 Codex/Work incident, and the
  August 13 15M milestone announcement.
- **Cutoff/support/lead range:** official update and post times; historical
  incident resolution preceded first reset statements by about 2h34m–13h17m.
- **Contradictions:** the August 13 post supplies milestone context but no
  outage/compensation statement; Status had no new incident. Promotions and
  milestones can occur without a reset and do not establish cause.
- **Grade/status:** B for context, D for causal or universal claims.
  **Unchanged; one new milestone-context case.**

### 6. Originals, replies, cadence, and UTC timing — still too sparse

- **Sample/range/classes:** `n=4` project-verified resets from August 8–13
  now yield `n=3` reset-to-reset intervals; the first two remain
  11h09m42.937s and 51h29m50.496s, while the newest is bounded rather than an
  exact event time. The classified canonical post corpus remains `n=15` June
  4–July 14, with the August 13 original retrospective to the new outcome.
- **Cutoff/support:** observation/post times through this scan. Originals have
  supplied clear wording; reply review helped with August 8 context.
- **Contradictions/lead range:** three gaps cannot establish cadence, cooldown,
  UTC hour, or weekday effects. The newest event is out of cycle by 6,763
  minutes and has a broad observation bound, so it adds no precise timing
  predictor.
- **Grade/status:** D. **Unchanged/too sparse.**

### 7. Public-report clustering and contradiction classes — strengthened for divergence only

- **Sample/range/classes:** `n=5` bounded historical divergence clusters,
  June 17–August 11; `n=9` post-cutoff display/enforcement/consumption/plan
  reports now include the prior five plus #38309, #38335, #38352, and #38354.
- **Cutoff/support:** report publication times. Those reports repeatedly keep
  active window, visible meter, enforcement, capacity, plan, and consumption
  separate.
- **Contradictions/lead range:** self-selected reports have no denominator and
  are not a delivery rate; historical reports range from minutes to over a day
  after statements and are not exact delivery bounds.
- **Grade/status:** B for recurrent divergence, D for prevalence.
  **Strengthened for divergence; unchanged for breadth.**

### 8. Discovery-feed and mirror lag — strengthened for present freshness, weak historically

- **Sample/range/classes:** `n=4` recent canonically validated originals and
  `n=8` exact mirror copies, August 11–13; approved raw-feed metadata, exact
  DID mirror records, and X-owned validation.
- **Cutoff/support:** raw feed `fetchedAt=2026-08-13T11:37:49.280Z`; the
  August 13 original appears in both mirrors with about 2m28s–13m38s lag.
  Across the combined sample, observed lag is about 30s–13m38s.
- **Contradictions/lead range:** the raw feed's current page has only 28
  records and has dropped historic candidates; the preferred and fallback
  mirrors have unequal depth and preserve no canonical numeric URL for the
  three open historical gaps. No completeness percentage is defensible.
- **Grade/status:** B for recent redundant discovery, D for historical
  completeness. **Strengthened for present freshness; historical weakness
  unchanged.**

## Conclusion and next tests

The strongest supported signal remains an explicit canonical future-reset
announcement correlated later with an independently observable transition.
Today adds a verified individual-paid full-meter reset with an advanced provider
anchor and no credit; the validated 15M announcement is retrospective context
because discovery came after the reset bound. It does not establish timely
one-hour delivery, universal scope, a banked-credit grant, a population event,
or cause. The most important negative evidence is that current public reports
continue to show visible-meter, enforcement, and consumption divergence even
near reset claims.

Next bounded checks:

1. Look for a staff/official completion statement and independent account
   reports for the August 13 announcement; keep its announcement, later
   project-discovery, and issue #7 bound distinct.
2. Preserve June 29's hard-reset completion and banked-credit breadth as
   separate unresolved questions.
3. Continue to fail closed on July 28, July 29, and August 1 unless an allowed
   discovery path supplies a canonical numeric X URL that passes oEmbed.
4. Treat #38309/#38335/#38352/#38354 as contradiction and mechanism-debugging
   signals, not reset counts or prevalence evidence.

## Deterministic refresh result

The main daily lane refreshed deterministically at
`2026-08-13T11:52:58.425Z`. It retained four verified observations, two
Codex-relevant official incidents, one approved public source, zero rejected
records, and zero duplicates. Pending sources #5, #6, and #8 remain ineligible.
All five horizons remain 1%; the likely interval moved to
`2026-08-20T03:11Z`–`2026-08-20T11:35Z`, confidence is D, 10 scored samples
have Brier `0.12326`, and no model was promoted.
