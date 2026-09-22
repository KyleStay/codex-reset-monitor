import assert from "node:assert/strict";
import test from "node:test";
import type { D1Database, D1PreparedStatement, D1Result } from "@cloudflare/workers-types";
import api from "../api/src/index";
import { observationDedupeKey, validateObservation } from "../lib/validation";

const validObservation = () => ({
  observationKind: "access-restored",
  limitReachedAtUtc: "2026-08-01T10:00:00.000Z",
  observedResetAtUtc: "2026-08-01T10:05:00.000Z",
  statedTimeZone: "UTC",
  codexSurface: "cli",
  relatedIncidentIds: [],
  relatedSourceIds: [],
  detectionMethod: "manual-retry",
  confidence: 0.9,
});

const storedObservationRow = () => ({
  id: "obs_1",
  observation_kind: "access-restored",
  limit_reached_at_utc: "2026-08-01T10:00:00.000Z",
  prior_sample_at_utc: null,
  observed_reset_at_utc: "2026-08-01T10:05:00.000Z",
  previous_used_percent: null,
  current_used_percent: null,
  previous_resets_at_utc: null,
  current_resets_at_utc: null,
  stated_time_zone: "UTC",
  preceding_forecast_id: null,
  codex_surface: "cli",
  plan_tier: null,
  incident_ids_json: "[]",
  source_ids_json: "[]",
  submitter_notes: null,
  detection_method: "manual-retry",
  confidence: 0.9,
  dedupe_key: "stale-key",
});

function concurrentRateLimitDatabase(initialCount: number) {
  let requestCount = initialCount;
  const pendingReads: Array<(value: { request_count: number }) => void> = [];

  const prepare = (query: string) => ({
    bind: () => ({
      first: async () => {
        if (!query.includes("SELECT request_count")) return null;
        return new Promise<{ request_count: number }>((resolve) => {
          pendingReads.push(resolve);
          if (pendingReads.length === 2) {
            for (const complete of pendingReads) complete({ request_count: requestCount });
          }
        });
      },
      run: async () => {
        if (query.includes("DELETE FROM rate_limit_buckets")) {
          return { success: true, meta: { changes: 1 } } as D1Result;
        }
        if (!query.includes("rate_limit_buckets")) return { success: true, meta: { changes: 1 } } as D1Result;
        if (query.includes("WHERE request_count < 5") && requestCount >= 5) {
          return { success: true, meta: { changes: 0 } } as D1Result;
        }
        requestCount += 1;
        return { success: true, meta: { changes: 1 } } as D1Result;
      },
    }),
  }) as unknown as D1PreparedStatement;

  return {
    prepare,
    batch: async () => [],
    get requestCount() { return requestCount; },
  } as unknown as D1Database & { readonly requestCount: number };
}

test("submission rate limit admits only one concurrent request when one slot remains", async () => {
  const database = concurrentRateLimitDatabase(4);
  const env = {
    DB: database,
    RATE_LIMIT_HMAC_KEY: "test-rate-limit-key",
    ALLOWED_ORIGIN: "https://example.test",
  };
  const requests = [1, 2].map(() => new Request("https://api.example.test/observations", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "cf-connecting-ip": "192.0.2.1",
      origin: env.ALLOWED_ORIGIN,
    },
    body: JSON.stringify(validObservation()),
  }));

  const responses = await Promise.all(requests.map((request) => api.fetch(request, env)));
  assert.deepEqual(responses.map((response) => response.status).sort(), [201, 429]);
  assert.equal(database.requestCount, 5);
});

test("submission rate limit deletes expired buckets without splitting atomic admission", async () => {
  const queries: string[] = [];
  const database = {
    prepare: (query: string) => {
      queries.push(query);
      return {
        bind: () => ({
          run: async () => ({ success: true, meta: { changes: 1 } }) as D1Result,
        }),
      } as unknown as D1PreparedStatement;
    },
    batch: async () => [],
  } as unknown as D1Database;
  const env = {
    DB: database,
    RATE_LIMIT_HMAC_KEY: "test-rate-limit-key",
    ALLOWED_ORIGIN: "https://example.test",
  };
  const response = await api.fetch(new Request("https://api.example.test/observations", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "cf-connecting-ip": "192.0.2.1",
      origin: env.ALLOWED_ORIGIN,
    },
    body: JSON.stringify(validObservation()),
  }), env);

  assert.equal(response.status, 201);
  assert.ok(queries.some((query) => /DELETE FROM rate_limit_buckets[\s\S]*expires_at_utc <= \?/.test(query)));
  const admission = queries.find((query) => query.includes("INSERT INTO rate_limit_buckets")) ?? "";
  assert.match(admission, /ON CONFLICT\(key_digest, window_start_utc\) DO UPDATE/);
  assert.match(admission, /WHERE request_count < 5/);
});

test("admin correction rejects an invalid reset timestamp without throwing", async () => {
  const database = {
    prepare: (query: string) => ({
      bind: () => ({
        first: async () => query.includes("SELECT * FROM reset_observations")
          ? storedObservationRow()
          : null,
      }),
    }),
    batch: async () => assert.fail("invalid input must not write to the database"),
  } as unknown as D1Database;
  const env = {
    DB: database,
    ADMIN_KEY: "test-admin-key",
    ALLOWED_ORIGIN: "https://example.test",
  };
  const request = new Request("https://api.example.test/admin/observations/obs_1", {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      "x-admin-key": env.ADMIN_KEY,
      origin: env.ALLOWED_ORIGIN,
    },
    body: JSON.stringify({
      verificationState: "corrected",
      reason: "Correct the source timestamp",
      observedResetAtUtc: "not-a-date",
    }),
  });

  const response = await api.fetch(request, env);
  assert.equal(response.status, 400);
  assert.deepEqual(await response.json(), { error: "Observed reset time must be a valid date and time" });
});

test("admin timestamp correction keeps the observation dedupe key consistent", async () => {
  let updateQuery = "";
  let updateBindings: unknown[] = [];
  const database = {
    prepare: (query: string) => ({
      bind: (...bindings: unknown[]) => {
        if (query.includes("UPDATE reset_observations")) {
          updateQuery = query;
          updateBindings = bindings;
        }
        return {
          first: async () => query.includes("SELECT * FROM reset_observations")
            ? storedObservationRow()
            : null,
        };
      },
    }),
    batch: async () => [],
  } as unknown as D1Database;
  const env = {
    DB: database,
    ADMIN_KEY: "test-admin-key",
    ALLOWED_ORIGIN: "https://example.test",
  };
  const correctedResetAtUtc = "2026-08-01T10:20:00.000Z";
  const expectedDedupeKey = await observationDedupeKey(validateObservation({
    ...validObservation(),
    observedResetAtUtc: correctedResetAtUtc,
  }));
  const response = await api.fetch(new Request("https://api.example.test/admin/observations/obs_1", {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      "x-admin-key": env.ADMIN_KEY,
      origin: env.ALLOWED_ORIGIN,
    },
    body: JSON.stringify({
      verificationState: "corrected",
      reason: "Correct the source timestamp",
      observedResetAtUtc: correctedResetAtUtc,
    }),
  }), env);

  assert.equal(response.status, 200);
  assert.match(updateQuery, /dedupe_key/);
  assert.ok(updateBindings.includes(expectedDedupeKey));
});

test("admin endpoint returns 400 for malformed JSON", async () => {
  const env = {
    DB: { prepare: () => assert.fail("malformed JSON must not query the database") } as unknown as D1Database,
    ADMIN_KEY: "test-admin-key",
    ALLOWED_ORIGIN: "https://example.test",
  };
  for (const body of ["{", "null", "[]"]) {
    const response = await api.fetch(new Request("https://api.example.test/admin/observations/obs_1", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "x-admin-key": env.ADMIN_KEY,
        origin: env.ALLOWED_ORIGIN,
      },
      body,
    }), env);

    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { error: "A valid JSON object is required" });
  }
});

test("admin endpoint rejects a non-string reason before querying the database", async () => {
  const env = {
    DB: { prepare: () => assert.fail("invalid reasons must not query the database") } as unknown as D1Database,
    ADMIN_KEY: "test-admin-key",
    ALLOWED_ORIGIN: "https://example.test",
  };
  const response = await api.fetch(new Request("https://api.example.test/admin/observations/obs_1", {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      "x-admin-key": env.ADMIN_KEY,
      origin: env.ALLOWED_ORIGIN,
    },
    body: JSON.stringify({ verificationState: "corrected", reason: 42 }),
  }), env);

  assert.equal(response.status, 400);
  assert.deepEqual(await response.json(), { error: "A concise reason is required" });
});

test("admin endpoint returns 400 for a malformed encoded observation ID", async () => {
  const env = {
    DB: { prepare: () => assert.fail("malformed IDs must not query the database") } as unknown as D1Database,
    ADMIN_KEY: "test-admin-key",
    ALLOWED_ORIGIN: "https://example.test",
  };
  const response = await api.fetch(new Request("https://api.example.test/admin/observations/%E0%A4%A", {
    method: "PATCH",
    headers: { "x-admin-key": env.ADMIN_KEY, origin: env.ALLOWED_ORIGIN },
  }), env);

  assert.equal(response.status, 400);
  assert.deepEqual(await response.json(), { error: "Invalid observation ID" });
});

test("admin correction validates chronology and future-time constraints", async () => {
  const database = {
    prepare: (query: string) => ({
      bind: () => ({
        first: async () => query.includes("SELECT * FROM reset_observations") ? storedObservationRow() : null,
      }),
    }),
    batch: async () => assert.fail("invalid corrections must not write to the database"),
  } as unknown as D1Database;
  const env = {
    DB: database,
    ADMIN_KEY: "test-admin-key",
    ALLOWED_ORIGIN: "https://example.test",
  };

  for (const observedResetAtUtc of ["2026-08-01T09:55:00.000Z", "2999-01-01T00:00:00.000Z"]) {
    const response = await api.fetch(new Request("https://api.example.test/admin/observations/obs_1", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "x-admin-key": env.ADMIN_KEY,
        origin: env.ALLOWED_ORIGIN,
      },
      body: JSON.stringify({
        verificationState: "corrected",
        reason: "Correct the source timestamp",
        observedResetAtUtc,
      }),
    }), env);
    assert.equal(response.status, 400);
  }
});

test("admin correction returns 409 when its updated dedupe key collides", async () => {
  const database = {
    prepare: (query: string) => ({
      bind: () => ({
        first: async () => query.includes("SELECT * FROM reset_observations") ? storedObservationRow() : null,
      }),
    }),
    batch: async () => { throw new Error("UNIQUE constraint failed: reset_observations.dedupe_key"); },
  } as unknown as D1Database;
  const env = {
    DB: database,
    ADMIN_KEY: "test-admin-key",
    ALLOWED_ORIGIN: "https://example.test",
  };
  const response = await api.fetch(new Request("https://api.example.test/admin/observations/obs_1", {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      "x-admin-key": env.ADMIN_KEY,
      origin: env.ALLOWED_ORIGIN,
    },
    body: JSON.stringify({
      verificationState: "corrected",
      reason: "Correct the source timestamp",
      observedResetAtUtc: "2026-08-01T10:20:00.000Z",
    }),
  }), env);

  assert.equal(response.status, 409);
  assert.deepEqual(await response.json(), { error: "A matching observation already exists" });
});
