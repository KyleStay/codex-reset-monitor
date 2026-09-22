import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { browserTimeZone, localDateTimeToUtc } from "../lib/time-zone";

test("submission timezone comes from a valid browser IANA timezone", () => {
  assert.equal(browserTimeZone("America/Los_Angeles"), "America/Los_Angeles");
  assert.equal(browserTimeZone(""), null);
  assert.equal(browserTimeZone("not-a-timezone"), null);
});

test("datetime-local conversion rejects missing or invalid values", () => {
  assert.throws(() => localDateTimeToUtc(""), /valid date and time/i);
  assert.throws(() => localDateTimeToUtc("not-a-date"), /valid date and time/i);
  assert.match(localDateTimeToUtc("2026-08-01T10:00"), /^2026-08-01T\d{2}:00:00\.000Z$/);
});

test("datetime-local conversion rejects DST gaps and ambiguous wall times", () => {
  const script = `
    const { localDateTimeToUtc } = await import("./lib/time-zone.ts");
    const convert = (value) => {
      try { return localDateTimeToUtc(value); } catch (error) { return error.message; }
    };
    console.log(JSON.stringify({
      gap: convert("2026-03-08T02:30"),
      ambiguous: convert("2026-11-01T01:30"),
      normal: convert("2026-01-15T10:00"),
    }));
  `;
  const child = spawnSync(process.execPath, [
    "--import", "tsx",
    "--input-type=module",
    "--eval", script,
  ], {
    cwd: process.cwd(),
    env: { ...process.env, TZ: "America/New_York" },
    encoding: "utf8",
  });
  assert.equal(child.status, 0, child.stderr);
  assert.deepEqual(JSON.parse(child.stdout), {
    gap: "Enter a valid date and time.",
    ambiguous: "Enter an unambiguous date and time.",
    normal: "2026-01-15T15:00:00.000Z",
  });
});

test("datetime-local conversion rejects half-hour DST ambiguity", () => {
  const script = `
    const { localDateTimeToUtc } = await import("./lib/time-zone.ts");
    try {
      console.log(localDateTimeToUtc("2026-04-05T01:45"));
    } catch (error) {
      console.log(error.message);
    }
  `;
  const child = spawnSync(process.execPath, [
    "--import", "tsx",
    "--input-type=module",
    "--eval", script,
  ], {
    cwd: process.cwd(),
    env: { ...process.env, TZ: "Australia/Lord_Howe" },
    encoding: "utf8",
  });
  assert.equal(child.status, 0, child.stderr);
  assert.equal(child.stdout.trim(), "Enter an unambiguous date and time.");
});
