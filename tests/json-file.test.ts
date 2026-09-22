import assert from "node:assert/strict";
import test from "node:test";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { readJsonFile } from "../lib/json-file";

test("JSON reader falls back only for a missing file", async (context) => {
  const directory = await mkdtemp(join(tmpdir(), "codex-reset-monitor-json-"));
  context.after(() => rm(directory, { recursive: true, force: true }));
  const missing = pathToFileURL(join(directory, "missing.json"));
  assert.deepEqual(await readJsonFile(missing, { fallback: true }), { fallback: true });

  const malformed = pathToFileURL(join(directory, "malformed.json"));
  await writeFile(malformed, '{"recoverable":"history"');
  await assert.rejects(readJsonFile(malformed, []), SyntaxError);
});
