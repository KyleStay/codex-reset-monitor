# Source assessment for `@thsottiaux` posts

Research completed `2026-08-10`. This note evaluates compliant public ways to
discover posts from the maintainer-confirmed account
[`@thsottiaux`](https://x.com/thsottiaux). A discovery service can point to a
candidate; it does not replace the canonical X post, prove that an announced
reset reached any account, or create a confirmed observation.

## Finding

Use [`willcodexquotareset.com/api/forecast`](https://www.willcodexquotareset.com/api/forecast)
as the immediate **discovery feed**, but accept only its raw `tiboPosts` records
and follow each `link` to the canonical X status URL. Do not ingest the site's
forecast, signal score, or reset classification as evidence. The best durable
upgrade is X's official `GET /2/users/{id}/tweets` API. Until credentials for
that pay-per-use API are deliberately provisioned, combine the quota feed with
X's public first-party oEmbed response for individual canonical posts. A second
public Bluesky mirror at `selfhosted.social` currently supplies useful redundant
discovery, including replies, but it is explicitly unofficial. The Eurosky bot
and Bird.makeup ActivityPub bridge are less complete fallbacks.

## Sources evaluated

| Source | Observation on `2026-08-10` | Classification | Limits |
| --- | --- | --- | --- |
| [`www.willcodexquotareset.com/api/forecast`](https://www.willcodexquotareset.com/api/forecast) | A response fetched at `2026-08-10T15:09:55.421Z` exposed canonical numeric IDs, exact UTC `pubDate`, text, reply context, activity type, and `x.com/thsottiaux/status/<id>` links. It included the August 8 Monday promise and two August 10 replies through `13:03:37Z`, with no `sourceErrors.tibo` value. The [site UI](https://www.willcodexquotareset.com/) says its server checks sources every 30 minutes and describes the feed as best-effort. | **Discovery only; preferred temporary feed.** | The upstream collector is not disclosed in the response or UI, no public retention/completeness contract was found, and the same payload mixes raw posts with site-authored classifications and forecasts. A cache hit or empty error object is not proof of completeness. [Forward Future lists the site as its live forecast](https://forwardfuture.com/tools), while the site says it is not affiliated with OpenAI. |
| X canonical status URL plus [`publish.twitter.com/oembed`](https://publish.twitter.com/oembed) | X's first-party oEmbed response independently returned `author_name: Tibo`, `author_url: https://x.com/thsottiaux`, the post body, and calendar date for the [August 8 promise](https://x.com/thsottiaux/status/2086189414292865249), [August 10 greeting](https://x.com/thsottiaux/status/2086800050630676504), and [August 10 reset reply](https://x.com/thsottiaux/status/2086800639120888014). | **Evidence-grade for the attributed public statement after source-native verification.** | oEmbed is candidate-by-candidate, supplies only a calendar date in its rendered body, and does not provide a timeline or guarantee discovery. Preserve the canonical ID and label any exact time decoded from the ID as ID-derived. |
| [Official X User Posts API](https://docs.x.com/x-api/users/get-posts) | X documents `GET /2/users/{id}/tweets` for posts authored by a specific user, with `since_id`, pagination, replies, and optional `created_at`; its [integration guide](https://docs.x.com/x-api/posts/timelines/integrate) permits app-only authentication and up to 100 posts per page. | **Recommended primary collector and evidence-grade source.** | Requires an approved developer account, Project/App credentials, and a [pay-per-use plan](https://docs.x.com/x-api/overview). Credentials must be stored outside the repository and must not be improvised or exposed. This endpoint should be polled with `since_id`; excluding replies would miss reset-relevant replies. |
| [`@thsottiaux-mirr.selfhosted.social`](https://bsky.app/profile/thsottiaux-mirr.selfhosted.social) / [public author feed](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=thsottiaux-mirr.selfhosted.social&limit=50) | The profile declares itself an unofficial Twitter-to-Bluesky mirror and uses stable DID `did:plc:rcaom2u2hfsm3aqab5dfvhxs`. It contained the August 8 Monday promise and both August 10 replies. The `13:03:37Z` X reply was indexed at `13:16:16.872Z` (about 12 minutes 40 seconds later), and the `13:01:17Z` reply at `13:16:14.965Z` (about 15 minutes later). | **Best independent public mirror; discovery/corroboration only.** | The profile is not Tibo-owned or endorsed and asks the owner to claim it. Mirrored records do not consistently preserve the canonical X URL or parent reply context, so ID matching still needs the quota feed or canonical X source. |
| [`@thsottiaux-bot.eurosky.social`](https://bsky.app/profile/thsottiaux-bot.eurosky.social) / [public AT Protocol author feed](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Arcelwndiefenpjvnm6uood4t&limit=100) | The profile declares itself an “Unofficial mirror account” of the X account, is labeled as a bot, and uses stable DID `did:plc:rcelwndiefenpjvnm6uood4t`. Its public feed reproduced the August 8 reset post with X creation time `2026-08-08T20:29:22Z` and Bluesky index time `20:30:55.864Z`. Bluesky documents that `app.bsky.feed.getAuthorFeed` is public and needs no authentication. | **Independent discovery/corroboration fallback only.** | The bot is not controlled or endorsed by Tibo as far as the public profile shows. On this check its newest mirrored item was the August 9 `07:25:47Z` original post; it did not contain the August 10 replies that appeared in the quota feed. It can split long posts into numbered pieces and sometimes represents X quote context as text or image alt text. |
| [`@thsottiaux@bird.makeup`](https://bird.makeup/users/thsottiaux) | Its public ActivityPub actor is a `Service` and explicitly says the account is a Twitter replica whose author cannot see replies. Bird.makeup links its [public source repository](https://sr.ht/~cloutier/bird.makeup/). | **Low-priority Mastodon-compatible discovery fallback.** | No Tibo ownership or endorsement; federated availability and freshness vary. A public cache checked during this research lagged behind the August 10 replies and the Monday-promise reply, making it worse than the two Bluesky options for this monitor. |
| Source-owned Mastodon, Bluesky, RSS, or Atom feed | Public web and fediverse-oriented searches for the exact handle, display name, and bot variants found no Tibo-owned cross-post account and no source-owned RSS/Atom feed. | **No accepted source located.** | This is a search result, not proof that no private, unindexed, or future account exists. Do not substitute an arbitrary Nitter-style frontend, generic Twitter scraper, or newly generated feed without a policy and provenance review. |

## Freshness and coverage check

The quota endpoint was materially more current and more complete for replies on
this run. Its raw records preserved the sequence needed for today's lead:

1. [`2086189414292865249`](https://x.com/thsottiaux/status/2086189414292865249),
   published at ID-derived `2026-08-08T20:34:50.549Z`, promises another
   “performative reset on Monday.” This is a future-reset announcement, not
   completion.
2. [`2086800050630676504`](https://x.com/thsottiaux/status/2086800050630676504),
   published at ID-derived `2026-08-10T13:01:17.597Z`, replies “Good morning”
   to a user asking whether the action is still happening. It is contextual but
   not a renewed promise by itself.
3. [`2086800639120888014`](https://x.com/thsottiaux/status/2086800639120888014),
   published at ID-derived `2026-08-10T13:03:37.904Z`, describes the
   “performative” wording as an ordinary reset accompanied by a joke. It
   strengthens interpretation of the promise but still does not announce
   completion.

X oEmbed independently matched the author and text of all three canonical
records. The provisional feed supplied whole-second `pubDate` values; the
millisecond timestamps above were deterministically decoded from the canonical
numeric IDs and must retain that provenance unless later replaced by the
official X API's `created_at` field.

The `selfhosted.social` mirror covered all three promise-thread records with
roughly 11–15 minutes of observed indexing lag, but omitted their parent
contexts and canonical X IDs from the displayed record. The Eurosky bot mirrored
original posts with lower observed lag—the August 8 reset original was indexed
about 94 seconds after its X creation time—but did not mirror the later August 8
promise reply or either August 10 reply. Neither can be the only monitor when
reply context carries the operational meaning.

## Recommended collection order

1. Poll the official X User Posts endpoint once compliant API credentials are
   available. Request `created_at`, `referenced_tweets`, and reply fields; store
   the last seen post ID; do not exclude replies.
2. Until then, poll the quota site's `/api/forecast` and read only `fetchedAt`,
   `sourceErrors.tibo`, and raw `tiboPosts`. Treat every new numeric ID as a
   pending discovery candidate.
3. Verify candidates against the exact canonical X URL and X's first-party
   oEmbed response. Store retrieval time, body hash, canonical ID/URL, author,
   and whether the precise timestamp is API-supplied or ID-derived.
4. Query the `selfhosted.social` public Bluesky author feed as an independent
   fallback and lag check, then the Eurosky bot if needed. A match can
   corroborate discovery; a miss is not a contradiction because mirror coverage
   differs. Bird.makeup is a final Mastodon-compatible discovery fallback, not
   an evidence substitute.
5. Fail closed when the canonical X verification is unavailable. A mirror may
   trigger follow-up research, but it may not alone establish post authorship,
   universal reset delivery, a completed reset, cause, or a confirmed label.

## Operational guardrails

- Keep completed hard resets, future promises, banked-credit grants,
  redemptions, bucket changes, and incident commentary separate.
- Preserve the quota endpoint's `fetchedAt` as discovery time. Never backfill a
  later-discovered post into an earlier forecast cutoff.
- Never ingest `tiboSignal`, `tweetAssessment`, probability, or other derived
  fields from the quota service into deterministic project scoring.
- Compare broad announcements with observer transition bounds, provider reset
  anchors, official status records, and nonrecipient contradictions. Only a
  repository issue labeled `verified-observation` can become a confirmed model
  label.
- Recheck the quota feed's completeness periodically against the official API
  or source-native X view. A working endpoint is not a permanent source-quality
  guarantee.
