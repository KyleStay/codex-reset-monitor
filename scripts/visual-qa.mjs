import { mkdir } from "node:fs/promises";
import { chromium } from "playwright-core";

const baseUrl = process.env.QA_BASE_URL || "http://localhost:3000";
const outputDir = process.env.QA_OUTPUT_DIR || "/private/tmp/codex-reset-visual-qa";
const executablePath = process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true, executablePath });
const results = [];

async function check(name, fn) {
  try {
    await fn();
    results.push({ name, status: "pass" });
  } catch (error) {
    results.push({ name, status: "fail", error: error instanceof Error ? error.message : String(error) });
  }
}

const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 }, colorScheme: "light" });
await desktop.goto(baseUrl, { waitUntil: "networkidle" });
await desktop.screenshot({ path: `${outputDir}/desktop-home.png` });
await check("desktop hero and probabilities", async () => {
  if (await desktop.locator(".probability").count() !== 5) throw new Error("Expected five probability arcs");
  if (!(await desktop.getByText(/experimental estimate, never a guarantee/i).isVisible())) throw new Error("Guarantee disclaimer is not visible");
});
await desktop.locator(".section-tint").scrollIntoViewIfNeeded();
await desktop.screenshot({ path: `${outputDir}/desktop-history.png` });
await desktop.locator(".section-ink").scrollIntoViewIfNeeded();
await desktop.screenshot({ path: `${outputDir}/desktop-forecast-history.png` });
await desktop.locator(".theme-toggle").click();
await check("dark mode", async () => {
  if (await desktop.locator("html").getAttribute("data-theme") !== "dark") throw new Error("Theme did not change");
});
await desktop.screenshot({ path: `${outputDir}/desktop-dark.png` });
await desktop.keyboard.press("Tab");
await check("visible keyboard focus", async () => {
  const outline = await desktop.evaluate(() => getComputedStyle(document.activeElement).outlineStyle);
  if (outline === "none") throw new Error("Focused control has no visible outline");
});
await desktop.screenshot({ path: `${outputDir}/desktop-focus.png` });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, deviceScaleFactor: 1, colorScheme: "light" });
await mobile.goto(baseUrl, { waitUntil: "networkidle" });
await check("no page-level mobile overflow", async () => {
  const dimensions = await mobile.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
  if (dimensions.scroll > dimensions.client + 1) throw new Error(`Page width ${dimensions.scroll}px exceeds viewport ${dimensions.client}px`);
});
await mobile.screenshot({ path: `${outputDir}/mobile-home.png` });
await mobile.locator(".nav-toggle").click();
await check("mobile menu opens", async () => {
  if (!(await mobile.locator("#primary-nav").isVisible())) throw new Error("Menu is not visible");
});
await mobile.screenshot({ path: `${outputDir}/mobile-menu.png` });
await mobile.locator(".nav-toggle").click();
await mobile.locator(".section-tint").scrollIntoViewIfNeeded();
await mobile.screenshot({ path: `${outputDir}/mobile-history.png` });

for (const route of ["/performance", "/methodology", "/admin"]) {
  await desktop.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
  await check(`route ${route}`, async () => {
    if (!(await desktop.locator("main").isVisible())) throw new Error("Main content did not render");
  });
  await desktop.screenshot({ path: `${outputDir}/${route.slice(1)}.png` });
}
await check("admin protection language", async () => {
  if (!(await desktop.getByText(/GitHub-protected actions/i).isVisible())) throw new Error("Protected label missing");
  if (!(await desktop.getByText(/only repository collaborators/i).isVisible())) throw new Error("Protection explanation missing");
});

await desktop.goto(`${baseUrl}/submit`, { waitUntil: "networkidle" });
let preparedSubmissionUrl = "";
await desktop.route("https://github.com/**", async (route) => {
  preparedSubmissionUrl = route.request().url();
  await route.abort();
});
for (const id of ["limitReached", "resetAt", "timezone", "surface", "tier", "method", "confidence", "notes"]) {
  await check(`form label ${id}`, async () => {
    if (!(await desktop.locator(`label[for="${id}"]`).isVisible())) throw new Error(`Missing visible label for ${id}`);
  });
}
await desktop.locator("#limitReached").fill("2026-07-27T10:00");
await desktop.locator("#resetAt").fill("2026-07-27T12:00");
await desktop.locator("#notes").fill("Synthetic QA timing note.");
await desktop.screenshot({ path: `${outputDir}/submit-form.png` });
await desktop.getByRole("button", { name: "Continue on GitHub" }).click();
await check("submission prepares structured GitHub issue", async () => {
  if (!preparedSubmissionUrl.includes("template=reset-observation.yml")) throw new Error("Issue template was not selected");
  if (!preparedSubmissionUrl.includes("limit_reached=")) throw new Error("Limit time was not prefilled");
  if (!preparedSubmissionUrl.includes("access_returned=")) throw new Error("Reset time was not prefilled");
});

await browser.close();
console.log(JSON.stringify({ status: results.every((row) => row.status === "pass") ? "pass" : "fail", outputDir, results }, null, 2));
if (results.some((row) => row.status === "fail")) process.exitCode = 1;
