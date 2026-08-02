import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, open, readFile, rename, stat, unlink, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import {
  advanceLocalObserver,
  emptyLocalObserverState,
  markLocalCandidatePublished,
  type LocalObserverState,
  type LocalResetCandidate,
  type SafeRateLimitSample,
} from "../lib/local-observer";
import { validateObservation } from "../lib/validation";

const args = new Set(process.argv.slice(2));
const publish = args.has("--publish");
const repository = process.env.GITHUB_REPOSITORY ?? "KyleStay/codex-reset-monitor";
const statePath = process.env.CODEX_RESET_MONITOR_STATE_PATH
  ?? join(homedir(), "Library", "Application Support", "Codex Reset Monitor", "local-observer.json");
const lockPath = `${statePath}.lock`;
// UTC satisfies the observation schema without publishing the device's locale.
const timeZone = "UTC";
console.log(JSON.stringify({ status: "starting", mode: publish ? "publish" : "read-only" }));

interface AppServerRateLimitsResponse {
  rateLimits?: {
    primary?: { usedPercent?: number; windowDurationMins?: number | null; resetsAt?: number | null } | null;
    planType?: string | null;
    rateLimitReachedType?: string | null;
  };
}

async function acquireLock() {
  await mkdir(dirname(statePath), { recursive: true, mode: 0o700 });
  try {
    return await open(lockPath, "wx", 0o600);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "EEXIST") throw error;
    const ageMs = Date.now() - (await stat(lockPath)).mtimeMs;
    if (ageMs < 10 * 60_000) return null;
    await unlink(lockPath);
    return open(lockPath, "wx", 0o600);
  }
}

async function readState(): Promise<LocalObserverState> {
  try {
    const parsed = JSON.parse(await readFile(statePath, "utf8")) as LocalObserverState;
    if (parsed.schemaVersion !== 1) throw new Error("Unsupported local observer state version");
    return parsed;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return emptyLocalObserverState();
    throw error;
  }
}

async function writeState(state: LocalObserverState) {
  const temporary = `${statePath}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(state, null, 2)}\n`, { mode: 0o600 });
  await rename(temporary, statePath);
}

function generalizedPlanTier(value: string | null | undefined): SafeRateLimitSample["planTier"] {
  const normalized = value?.toLowerCase() ?? "";
  if (normalized.includes("free") || normalized === "go") return "free";
  if (["plus", "pro"].some((part) => normalized.includes(part))) return "individual-paid";
  if (["business", "team", "enterprise", "edu"].some((part) => normalized.includes(part))) return "team-or-enterprise";
  return "unknown";
}

async function readRateLimitSample(): Promise<SafeRateLimitSample> {
  const executable = process.env.CODEX_BIN ?? "codex";
  const child = spawn(executable, ["app-server", "--stdio"], {
    stdio: ["pipe", "pipe", "ignore"],
  });
  child.stdout.setEncoding("utf8");
  let buffer = "";

  const result = await new Promise<AppServerRateLimitsResponse>((resolve, reject) => {
    let settled = false;
    const timer = setTimeout(() => finish(() => reject(new Error("Codex rate-limit read timed out"))), 20_000);
    const finish = (callback: () => void) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      child.kill();
      callback();
    };
    child.on("error", (error) => finish(() => reject(error)));
    child.on("exit", (code) => {
      finish(() => reject(new Error(`Codex app-server exited before returning rate limits (status ${code ?? "unknown"})`)));
    });
    child.stdout.on("data", (chunk: string) => {
      buffer += chunk;
      let newline = buffer.indexOf("\n");
      while (newline >= 0) {
        const line = buffer.slice(0, newline).trim();
        buffer = buffer.slice(newline + 1);
        newline = buffer.indexOf("\n");
        if (!line) continue;
        let message: { id?: number; result?: AppServerRateLimitsResponse; error?: { message?: string } };
        try {
          message = JSON.parse(line) as typeof message;
        } catch {
          continue;
        }
        if (message.id === 1) {
          child.stdin.write(`${JSON.stringify({ method: "initialized" })}\n`);
          child.stdin.write(`${JSON.stringify({ method: "account/rateLimits/read", id: 2 })}\n`);
        } else if (message.id === 2) {
          if (message.error) finish(() => reject(new Error(message.error?.message ?? "Codex rate-limit read failed")));
          else finish(() => resolve(message.result ?? {}));
        }
      }
    });
    child.stdin.write(`${JSON.stringify({
      method: "initialize",
      id: 1,
      params: {
        clientInfo: { name: "codex-reset-monitor", title: "Codex Reset Monitor", version: "0.1.0" },
        capabilities: null,
      },
    })}\n`);
  });

  const snapshot = result.rateLimits;
  const primary = snapshot?.primary;
  if (!primary || !Number.isFinite(primary.usedPercent)) {
    throw new Error("Codex did not return a primary rate-limit window");
  }
  const resetsAt = Number.isFinite(primary.resetsAt) && Number(primary.resetsAt) > 0
    ? new Date(Number(primary.resetsAt) * 1000).toISOString()
    : null;
  const usedPercent = Number(primary.usedPercent);
  return {
    sampledAtUtc: new Date().toISOString(),
    usedPercent,
    resetsAtUtc: resetsAt,
    windowDurationMinutes: Number.isFinite(primary.windowDurationMins) ? Number(primary.windowDurationMins) : null,
    exhausted: snapshot?.rateLimitReachedType === "rate_limit_reached" || usedPercent >= 100,
    planTier: generalizedPlanTier(snapshot?.planType),
  };
}

function candidateKey(candidate: LocalResetCandidate) {
  return createHash("sha256")
    .update([candidate.observationKind, candidate.limitReachedAtUtc ?? candidate.priorSampleAtUtc, candidate.observedResetAtUtc, candidate.statedTimeZone].join("|"))
    .digest("hex");
}

function issueBody(candidate: LocalResetCandidate, key: string) {
  const tier = {
    free: "Free",
    "individual-paid": "Individual paid",
    "team-or-enterprise": "Team or enterprise",
    unknown: "Prefer not to say / unknown",
  }[candidate.planTier ?? "unknown"];
  const common = [
    `<!-- local-observer-key: ${key} -->`,
    "### Observation kind", candidate.observationKind === "meter-reset" ? "Locally observed meter reset" : "Access restored after limit reached",
  ];
  const timing = candidate.observationKind === "meter-reset"
    ? [
      "### Prior sample time", candidate.priorSampleAtUtc ?? "_No response_",
      "### Observed reset time", candidate.observedResetAtUtc,
      "### Previous used percent", `${candidate.previousUsedPercent}%`,
      "### Current used percent", `${candidate.currentUsedPercent}%`,
      "### Previous reset time", candidate.previousResetsAtUtc ?? "_No response_",
      "### Current reset time", candidate.currentResetsAtUtc ?? "_No response_",
    ]
    : [
      "### Limit reached time", candidate.limitReachedAtUtc ?? "_No response_",
      "### Access returned time", candidate.observedResetAtUtc,
    ];
  return [
    ...common,
    ...timing,
    "### Time zone", candidate.statedTimeZone,
    "### Codex surface", "Other — account-level local telemetry",
    "### Generalized plan tier", tier,
    "### Detection method", "Local observer",
    "### Confidence", "100%",
    "### Preceding forecast ID", "_No response_",
    "### Related incident IDs", "_No response_",
    "### Related public-source IDs", "_No response_",
    "### Notes", candidate.submitterNotes ?? "Privacy-safe local observation.",
  ].join("\n\n");
}

async function runGh(args: string[], stdin?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const child = spawn(process.env.GH_BIN ?? "gh", args, { stdio: ["pipe", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    const timer = setTimeout(() => {
      child.kill();
      reject(new Error("GitHub publication timed out; the candidate remains pending"));
    }, 30_000);
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (chunk: string) => { stdout += chunk; });
    child.stderr.on("data", (chunk: string) => { stderr += chunk; });
    child.on("error", (error) => {
      clearTimeout(timer);
      reject(error);
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      if (code === 0) resolve(stdout);
      else reject(new Error(stderr.trim() || `gh exited with status ${code}`));
    });
    if (stdin) child.stdin.write(stdin);
    child.stdin.end();
  });
}

async function publishCandidate(candidate: LocalResetCandidate, key: string) {
  const existingRaw = await runGh([
    "api", `repos/${repository}/issues`, "--method", "GET",
    "-f", "state=all", "-f", "labels=verified-observation", "-f", "per_page=100",
  ]);
  const existing = (JSON.parse(existingRaw) as Array<{ number: number; html_url: string; body?: string | null }>)
    .find((issue) => issue.body?.includes(`local-observer-key: ${key}`));
  if (existing) return { number: existing.number, url: existing.html_url, reused: true };

  const titleTime = candidate.observedResetAtUtc.replace(/\.\d{3}Z$/, "Z");
  const eventLabel = candidate.observationKind === "meter-reset" ? "meter reset" : "rate-limit recovery";
  const payload = JSON.stringify({
    title: `[Reset observation] Local ${eventLabel} ${titleTime}`,
    body: issueBody(candidate, key),
    labels: ["reset-observation", "verified-observation"],
  });
  const createdRaw = await runGh([
    "api", `repos/${repository}/issues`, "--method", "POST", "--input", "-",
  ], payload);
  const created = JSON.parse(createdRaw) as { number: number; html_url: string };
  return { number: created.number, url: created.html_url, reused: false };
}

const lock = await acquireLock();
if (!lock) {
  console.log(JSON.stringify({ status: "skipped", reason: "observer already running" }));
  process.exit(0);
}

try {
  await lock.writeFile(new Date().toISOString());
  let state = await readState();
  let publishedIssue: { number: number; url: string; reused: boolean } | null = null;

  if (publish && state.pendingCandidate) {
    publishedIssue = await publishCandidate(state.pendingCandidate, state.pendingCandidate.key);
    state = markLocalCandidatePublished(state, state.pendingCandidate.key);
    await writeState(state);
  }

  const sample = await readRateLimitSample();
  const advanced = advanceLocalObserver(state, sample, timeZone);
  state = advanced.state;
  if (advanced.candidate) {
    const validated = validateObservation(advanced.candidate);
    const candidate = { ...advanced.candidate, ...validated };
    const key = candidateKey(candidate);
    if (!state.publishedKeys.includes(key)) state.pendingCandidate = { ...candidate, key };
  }
  await writeState(state);

  if (publish && state.pendingCandidate) {
    publishedIssue = await publishCandidate(state.pendingCandidate, state.pendingCandidate.key);
    state = markLocalCandidatePublished(state, state.pendingCandidate.key);
    await writeState(state);
  }

  console.log(JSON.stringify({
    status: "ok",
    sampledAtUtc: sample.sampledAtUtc,
    usedPercent: sample.usedPercent,
    exhausted: sample.exhausted,
    resetsAtUtc: sample.resetsAtUtc,
    pendingPublication: Boolean(state.pendingCandidate),
    publishedIssue,
  }));
} finally {
  await lock.close();
  await unlink(lockPath).catch(() => undefined);
}
