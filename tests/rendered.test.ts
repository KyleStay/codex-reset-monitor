import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

test("static export contains critical public and administrator journeys", async () => {
  const routes = ["index.html", "performance/index.html", "submit/index.html", "methodology/index.html", "admin/index.html"];
  for (const route of routes) {
    const html = await readFile(new URL(`../out/${route}`, import.meta.url), "utf8");
    assert.match(html, /Codex Reset Monitor/);
    assert.match(html, /<main/);
  }
  const home = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(home, /experimental estimate, never a guarantee/i);
  assert.match(home, /Reset history/);
  assert.match(home, /Past reset evidence and possible causes/);
  assert.match(home, /Repository staff/);
  assert.match(home, /Official status/);
  assert.match(home, /OpenAI Support/);
  assert.match(home, /Forecast history/);
  assert.match(home, /https:\/\/kylestay\.github\.io\/codex-reset-monitor\/og\.png/);
  assert.doesNotMatch(home, /http:\/\/localhost:3000/);
  assert.doesNotMatch(home, /Seeded demonstration data/i);
  const submit = await readFile(new URL("../out/submit/index.html", import.meta.url), "utf8");
  assert.match(submit, /No prompts or responses/);
  assert.match(submit, /Continue on GitHub/);
});
