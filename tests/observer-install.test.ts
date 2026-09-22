import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

test("scheduled observer does not retain quota samples in a persistent stdout log", async () => {
  const installer = await readFile(new URL("../scripts/install-local-observer.mjs", import.meta.url), "utf8");

  assert.match(
    installer,
    /<key>StandardOutPath<\/key><string>\$\{xml\("\/dev\/null"\)\}<\/string>/,
  );
  assert.match(installer, /<key>StandardErrorPath<\/key>.*local-observer\.error\.log/);
  assert.match(installer, /unlink\(legacyStdoutLogPath\)/);
});
