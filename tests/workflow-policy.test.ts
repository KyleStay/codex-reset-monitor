import assert from "node:assert/strict";
import test from "node:test";
import { readFile, readdir } from "node:fs/promises";

test("GitHub Actions is reserved exclusively for push-triggered Pages deployment", async () => {
  const workflowDirectory = new URL("../.github/workflows/", import.meta.url);
  const workflows = (await readdir(workflowDirectory)).filter((name) => name.endsWith(".yml") || name.endsWith(".yaml"));
  assert.deepEqual(workflows, ["pages.yml"]);

  const pages = await readFile(new URL("pages.yml", workflowDirectory), "utf8");
  assert.match(pages, /name: Deploy GitHub Pages/);
  assert.match(pages, /\bpush:/);
  assert.match(pages, /branches: \[main\]/);
  assert.match(pages, /actions\/deploy-pages@/);
  assert.doesNotMatch(pages, /\bworkflow_dispatch:/);
  assert.doesNotMatch(pages, /\bschedule:/);
  assert.doesNotMatch(pages, /\bpull_request:/);
  assert.doesNotMatch(pages, /update:data|npm test|npm run verify/);
  assert.doesNotMatch(pages, /contents:\s*write|issues:\s*write/);
});
