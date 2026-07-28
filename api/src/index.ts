import type { D1Database } from "@cloudflare/workers-types";
import { observationDedupeKey, stableDigest, validateObservation } from "../../lib/validation";

interface Env {
  DB: D1Database;
  ADMIN_KEY?: string;
  RATE_LIMIT_HMAC_KEY?: string;
  ALLOWED_ORIGIN: string;
}

const json = (body: unknown, status = 200, origin = "*") => new Response(JSON.stringify(body), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "access-control-allow-origin": origin, "access-control-allow-headers": "content-type,x-admin-key", "access-control-allow-methods": "GET,POST,PATCH,OPTIONS", "vary": "Origin" },
});

function allowedOrigin(request: Request, env: Env) {
  const origin = request.headers.get("origin") ?? "";
  return origin === env.ALLOWED_ORIGIN ? origin : env.ALLOWED_ORIGIN;
}

async function equalSecret(provided: string, expected: string) {
  const [a, b] = await Promise.all([stableDigest(provided), stableDigest(expected)]);
  let result = 0;
  for (let index = 0; index < a.length; index += 1) result |= a.charCodeAt(index) ^ b.charCodeAt(index);
  return result === 0;
}

async function rateLimit(request: Request, env: Env) {
  const keyMaterial = env.RATE_LIMIT_HMAC_KEY;
  if (!keyMaterial) return { allowed: false, reason: "Submission service is not configured" };
  const address = request.headers.get("cf-connecting-ip") ?? "local";
  const day = new Date().toISOString().slice(0, 10);
  const digest = await stableDigest(`${keyMaterial}|${day}|${address}`);
  const window = new Date();
  window.setUTCMinutes(0, 0, 0);
  const windowStart = window.toISOString();
  const expires = new Date(window.getTime() + 2 * 3_600_000).toISOString();
  const existing = await env.DB.prepare("SELECT request_count FROM rate_limit_buckets WHERE key_digest = ? AND window_start_utc = ?").bind(digest, windowStart).first<{ request_count: number }>();
  if ((existing?.request_count ?? 0) >= 5) return { allowed: false, reason: "Too many submissions. Try again after the hour changes." };
  await env.DB.prepare(`
    INSERT INTO rate_limit_buckets (key_digest, window_start_utc, request_count, expires_at_utc)
    VALUES (?, ?, 1, ?)
    ON CONFLICT(key_digest, window_start_utc) DO UPDATE SET request_count = request_count + 1
  `).bind(digest, windowStart, expires).run();
  return { allowed: true };
}

async function submitObservation(request: Request, env: Env) {
  const limit = await rateLimit(request, env);
  if (!limit.allowed) return json({ error: limit.reason }, limit.reason?.startsWith("Too many") ? 429 : 503, allowedOrigin(request, env));
  try {
    const input = validateObservation(await request.json());
    const id = `obs_${crypto.randomUUID()}`;
    const auditId = `aud_${crypto.randomUUID()}`;
    const createdAt = new Date().toISOString();
    const dedupeKey = await observationDedupeKey(input);
    const insert = env.DB.prepare(`
      INSERT INTO reset_observations (
        id, limit_reached_at_utc, observed_reset_at_utc, stated_time_zone,
        preceding_forecast_id, codex_surface, plan_tier, incident_ids_json,
        source_ids_json, submitter_notes, detection_method, verification_state,
        confidence, trust_weight, dedupe_key, created_at_utc
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?, 0.15, ?, ?)
    `).bind(
      id, input.limitReachedAtUtc, input.observedResetAtUtc, input.statedTimeZone,
      input.precedingForecastId ?? null, input.codexSurface, input.planTier ?? null,
      JSON.stringify(input.relatedIncidentIds), JSON.stringify(input.relatedSourceIds),
      input.submitterNotes ?? null, input.detectionMethod, input.confidence, dedupeKey, createdAt,
    );
    const audit = env.DB.prepare(`
      INSERT INTO observation_audit (id, observation_id, action, actor_class, reason, before_json, after_json, created_at_utc)
      VALUES (?, ?, 'created', 'anonymous_submitter', 'Community submission received', NULL, ?, ?)
    `).bind(auditId, id, JSON.stringify({ ...input, verificationState: "pending", trustWeight: 0.15 }), createdAt);
    await env.DB.batch([insert, audit]);
    return json({ id, verificationState: "pending" }, 201, allowedOrigin(request, env));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid submission";
    const duplicate = /unique|dedupe/i.test(message);
    return json({ error: duplicate ? "A matching observation is already under review" : message }, duplicate ? 409 : 400, allowedOrigin(request, env));
  }
}

async function administerObservation(request: Request, env: Env, id: string) {
  if (!env.ADMIN_KEY) return json({ error: "Administration is not configured" }, 503, allowedOrigin(request, env));
  if (!(await equalSecret(request.headers.get("x-admin-key") ?? "", env.ADMIN_KEY))) return json({ error: "Not authorized" }, 401, allowedOrigin(request, env));
  const payload = await request.json() as { verificationState?: string; reason?: string; observedResetAtUtc?: string };
  const allowedStates = new Set(["confirmed", "inferred", "rejected", "corrected"]);
  if (!payload.verificationState || !allowedStates.has(payload.verificationState)) return json({ error: "Invalid verification state" }, 400, allowedOrigin(request, env));
  if (!payload.reason?.trim() || payload.reason.trim().length > 300) return json({ error: "A concise reason is required" }, 400, allowedOrigin(request, env));
  const before = await env.DB.prepare("SELECT * FROM reset_observations WHERE id = ?").bind(id).first<Record<string, unknown>>();
  if (!before) return json({ error: "Observation not found" }, 404, allowedOrigin(request, env));
  const now = new Date().toISOString();
  const nextReset = payload.observedResetAtUtc ? new Date(payload.observedResetAtUtc).toISOString() : String(before.observed_reset_at_utc);
  const after = { ...before, observed_reset_at_utc: nextReset, verification_state: payload.verificationState, corrected_at_utc: now };
  await env.DB.batch([
    env.DB.prepare("UPDATE reset_observations SET observed_reset_at_utc = ?, verification_state = ?, corrected_at_utc = ? WHERE id = ?").bind(nextReset, payload.verificationState, now, id),
    env.DB.prepare("INSERT INTO observation_audit (id, observation_id, action, actor_class, reason, before_json, after_json, created_at_utc) VALUES (?, ?, ?, 'administrator', ?, ?, ?, ?)")
      .bind(`aud_${crypto.randomUUID()}`, id, payload.verificationState, payload.reason.trim(), JSON.stringify(before), JSON.stringify(after), now),
  ]);
  return json({ id, verificationState: payload.verificationState, auditCreated: true }, 200, allowedOrigin(request, env));
}

const api = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("origin");
    if (origin && origin !== env.ALLOWED_ORIGIN) return json({ error: "Origin not allowed" }, 403, env.ALLOWED_ORIGIN);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: { "access-control-allow-origin": allowedOrigin(request, env), "access-control-allow-headers": "content-type,x-admin-key", "access-control-allow-methods": "GET,POST,PATCH,OPTIONS" } });
    const url = new URL(request.url);
    if (url.pathname === "/health" && request.method === "GET") return json({ status: "ok", writesConfigured: Boolean(env.RATE_LIMIT_HMAC_KEY), adminConfigured: Boolean(env.ADMIN_KEY) }, 200, allowedOrigin(request, env));
    if (url.pathname === "/observations" && request.method === "POST") return submitObservation(request, env);
    const adminMatch = url.pathname.match(/^\/admin\/observations\/([^/]+)$/);
    if (adminMatch && request.method === "PATCH") return administerObservation(request, env, decodeURIComponent(adminMatch[1]));
    return json({ error: "Not found" }, 404, allowedOrigin(request, env));
  },
};

export default api;
