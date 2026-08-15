# Historical reset research protocol

The agent maintains `data/research-history.json` as a public, source-backed
ledger of possible historical resets, mechanism changes, causes, and future
detection signals. This ledger is separate from verified reset observations and
does not automatically change forecast probabilities.

This backfill is a best-effort reconstruction and does not depend on manual
submissions. The agent should infer only what durable sources support, preserve
uncertainty explicitly, and prefer a coarse truthful date over a fabricated
exact time. Private conversation history is neither required nor permitted.

## Evidence classes

- **Confirmed observation:** only a project issue carrying
  `verified-observation`. These records enter reset timing and scoring.
- **Inferred reset:** public evidence suggests a reset occurred, but the event
  was not verified through this project's observation process.
- **Mechanism change:** an official source describes a change to how resets,
  windows, credits, or banking operate.
- **Incident:** an OpenAI Status event. It may be temporally related but is not
  itself a reset.
- **Cause assessment:** separately marked confirmed, attributed, hypothesis, or
  unknown. Correlation must never be written as causation.
- **Correction:** an append-only revision that preserves the prior claim and
  explains why the assessment changed.

## Research loop

Each run should make bounded progress on both recent monitoring and historical
backfill:

1. Search official OpenAI Status, Help, developer documentation, announcements,
   support statements, and the public `openai/codex` repository.
2. Search administrator-configured public sources, including permanent
   OpenAI Community archive URLs, for corroborating reports. An archived social
   post remains a public report unless the account identity and statement are
   independently established by an approved official source.
   Do not evade access controls, automate prohibited scraping, or infer the
   identity of an unnamed account.
   A canonical social account explicitly confirmed in `data/source-policy.json`
   may be reviewed manually through public source-native status URLs. Its posts
   remain attributed public signals: correlate their UTC timestamps with reset
   observation bounds, provider anchors, scope, and contradictions, but do not
   convert them into confirmed observations or automatic causal truth.
   Configured mirrors and independent trackers are discovery aids only. Use
   them to locate a canonical X status ID, then validate the author, URL, text,
   and date through X-owned oEmbed when available. A mirror timestamp may be
   checked against the timestamp deterministically encoded in the X status ID.
   Preserve gaps, edits, missing replies, split threads, and disagreements;
   never cite a mirror alone as staff corroboration.
3. Work backwards through uncovered date ranges. Prefer precise source-native
   timestamps and permanent URLs to search snippets.
4. Cluster records only when their timing, reported behavior, plan/surface
   scope, and mechanism plausibly match. Preserve contradictory reports.
5. Add an inferred event only with either one official/staff corroboration or
   two independent public reports. Grade evidence lower when time, scope, or
   cause is uncertain.
6. Record the observable signatures that preceded or accompanied the event:
   usage returning to 100%, a changed reset timestamp, window restart,
   coordinated report volume, official incident transitions, staff statements,
   or approved announcement activity.
   A reset timestamp that merely slides forward between reads, without a
   bounded usage or enforcement transition, is not reset evidence.
7. State the cause as unknown unless a source actually supports it. Keep
   outage compensation, promotions, metering corrections, plan migrations,
   product launches, and unrelated incidents distinct.
8. Run schema validation and tests. Historical research must never be inserted
   into `data/observations.json` or used as a confirmed model label.

For hour or exact precision, `eventTimeUtc` is required and must be a
source-backed UTC timestamp on `eventDate`. Date-only events must omit it.
Source provenance labels distinguish official Status, official announcements,
OpenAI Support, repository staff, and public reports.

## Coverage and stopping rule

The agent should continue backfill across daily runs until it has searched from
the present back to the public launch of Codex usage-limit behavior, recording
covered date ranges and unresolved leads in commit messages or run reports.
After broad coverage exists, prioritize new evidence, corrections,
contradictions, and better primary sources over repeatedly searching the same
queries.

An absence of public evidence is a finding, not permission to manufacture a
record. If an exact event time is unavailable, store a date-only event with
`datePrecision: "day"` rather than inventing a timestamp.
