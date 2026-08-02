import { execFileSync, spawnSync } from "node:child_process";
import { chmod, mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDir, "..");
const observerScript = resolve(scriptDir, "local-reset-observer.ts");
const esbuildPath = resolve(repositoryRoot, "node_modules", "esbuild", "bin", "esbuild");
const label = "com.kylestay.codex-reset-monitor.local-observer";
const uid = process.getuid?.();
if (uid === undefined) throw new Error("The local observer installer requires macOS");
const domain = `gui/${uid}`;
const launchAgentsDir = resolve(homedir(), "Library", "LaunchAgents");
const logsDir = resolve(homedir(), "Library", "Logs", "Codex Reset Monitor");
const supportDir = resolve(homedir(), "Library", "Application Support", "Codex Reset Monitor");
const runtimeDir = resolve(supportDir, "runtime");
const runtimeObserver = resolve(runtimeDir, "local-reset-observer.mjs");
const statePath = resolve(supportDir, "local-observer.json");
const plistPath = resolve(launchAgentsDir, `${label}.plist`);

const xml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

function commandPath(name) {
  return execFileSync("/usr/bin/which", [name], { encoding: "utf8" }).trim();
}

if (process.argv.includes("--uninstall")) {
  spawnSync("launchctl", ["bootout", domain, plistPath], { stdio: "ignore" });
  await unlink(plistPath).catch(() => undefined);
  console.log(JSON.stringify({ status: "uninstalled", label, plistPath }));
  process.exit(0);
}

const nodePath = process.execPath;
const codexPath = process.env.CODEX_BIN ?? commandPath("codex");
const ghPath = process.env.GH_BIN ?? commandPath("gh");
const environmentPath = [dirname(nodePath), dirname(codexPath), dirname(ghPath), "/usr/local/bin", "/opt/homebrew/bin", "/usr/bin", "/bin"].join(":");
const plist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>${xml(label)}</string>
  <key>ProgramArguments</key>
  <array>
    <string>${xml(nodePath)}</string>
    <string>${xml(runtimeObserver)}</string>
    <string>--publish</string>
  </array>
  <key>WorkingDirectory</key><string>${xml(runtimeDir)}</string>
  <key>EnvironmentVariables</key>
  <dict>
    <key>PATH</key><string>${xml(environmentPath)}</string>
    <key>HOME</key><string>${xml(homedir())}</string>
    <key>CODEX_BIN</key><string>${xml(codexPath)}</string>
    <key>CODEX_RESET_MONITOR_STATE_PATH</key><string>${xml(statePath)}</string>
    <key>GH_BIN</key><string>${xml(ghPath)}</string>
    <key>GITHUB_REPOSITORY</key><string>KyleStay/codex-reset-monitor</string>
  </dict>
  <key>RunAtLoad</key><true/>
  <key>StartInterval</key><integer>300</integer>
  <key>ProcessType</key><string>Background</string>
  <key>StandardOutPath</key><string>${xml(resolve(logsDir, "local-observer.log"))}</string>
  <key>StandardErrorPath</key><string>${xml(resolve(logsDir, "local-observer.error.log"))}</string>
</dict>
</plist>
`;

await mkdir(launchAgentsDir, { recursive: true });
await mkdir(logsDir, { recursive: true });
await mkdir(runtimeDir, { recursive: true, mode: 0o700 });
await chmod(observerScript, 0o755);
execFileSync(esbuildPath, [
  observerScript,
  "--bundle",
  "--platform=node",
  "--format=esm",
  "--target=node22",
  `--outfile=${runtimeObserver}`,
], { stdio: "ignore" });
await chmod(runtimeObserver, 0o700);
const previous = await readFile(plistPath, "utf8").catch(() => null);
if (previous !== plist) await writeFile(plistPath, plist, { mode: 0o644 });
spawnSync("launchctl", ["bootout", domain, plistPath], { stdio: "ignore" });
const bootstrapped = spawnSync("launchctl", ["bootstrap", domain, plistPath], { encoding: "utf8" });
if (bootstrapped.status !== 0) throw new Error(bootstrapped.stderr.trim() || "launchctl bootstrap failed");
const kicked = spawnSync("launchctl", ["kickstart", "-k", `${domain}/${label}`], { encoding: "utf8" });
if (kicked.status !== 0) throw new Error(kicked.stderr.trim() || "launchctl kickstart failed");
console.log(JSON.stringify({ status: "installed", label, plistPath, intervalSeconds: 300 }));
