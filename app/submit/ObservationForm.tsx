"use client";

import { useState } from "react";

const issueUrl = "https://github.com/KyleStay/codex-reset-monitor/issues/new";

export function ObservationForm() {
  const [status, setStatus] = useState<{ kind: "idle" | "busy" | "success" | "error"; message: string }>({ kind: "idle", message: "" });

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const limitReached = new Date(String(form.get("limitReachedAtUtc")));
      const resetAt = new Date(String(form.get("observedResetAtUtc")));
      if (resetAt <= limitReached) throw new Error("Access-returned time must be later than the limit-reached time.");
      const surfaceLabels: Record<string, string> = {
        cli: "CLI",
        ide: "IDE extension",
        cloud: "Cloud tasks",
        web: "Web",
        other: "Other",
      };
      const tierLabels: Record<string, string> = {
        unknown: "Prefer not to say / unknown",
        free: "Free",
        "individual-paid": "Individual paid",
        "team-or-enterprise": "Team or enterprise",
      };
      const methodLabels: Record<string, string> = {
        "manual-retry": "Manual retry",
        "scheduled-check": "Scheduled check",
        other: "Other",
      };
      const params = new URLSearchParams({
        template: "reset-observation.yml",
        limit_reached: limitReached.toISOString(),
        access_returned: resetAt.toISOString(),
        time_zone: String(form.get("statedTimeZone")),
        surface: surfaceLabels[String(form.get("codexSurface"))] ?? "Other",
        plan_tier: tierLabels[String(form.get("planTier"))] ?? "Prefer not to say / unknown",
        detection_method: methodLabels[String(form.get("detectionMethod"))] ?? "Other",
        confidence: `${Math.round(Number(form.get("confidence")) * 100)}%`,
        notes: String(form.get("submitterNotes") ?? ""),
      });
      setStatus({ kind: "busy", message: "Opening the protected GitHub submission form…" });
      window.location.assign(`${issueUrl}?${params.toString()}`);
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "The report could not be prepared." });
    }
  }

  return (
    <form className="form-card" onSubmit={submit}>
      <div className="form-grid">
        <div className="field"><label htmlFor="limitReached">Limit reached</label><input id="limitReached" name="limitReachedAtUtc" type="datetime-local" required /><small>Use the time shown on your device.</small></div>
        <div className="field"><label htmlFor="resetAt">Access returned</label><input id="resetAt" name="observedResetAtUtc" type="datetime-local" required /></div>
        <div className="field"><label htmlFor="timezone">Time zone</label><input id="timezone" name="statedTimeZone" defaultValue="America/New_York" required /></div>
        <div className="field"><label htmlFor="surface">Codex surface</label><select id="surface" name="codexSurface" required><option value="cli">CLI</option><option value="ide">IDE extension</option><option value="cloud">Cloud tasks</option><option value="web">Web</option><option value="other">Other</option></select></div>
        <div className="field"><label htmlFor="tier">Generalized plan tier <span className="muted">(optional)</span></label><select id="tier" name="planTier"><option value="unknown">Prefer not to say / unknown</option><option value="free">Free</option><option value="individual-paid">Individual paid</option><option value="team-or-enterprise">Team or enterprise</option></select></div>
        <div className="field"><label htmlFor="method">How did you detect it?</label><select id="method" name="detectionMethod"><option value="manual-retry">Manual retry</option><option value="scheduled-check">Scheduled check</option><option value="other">Other</option></select></div>
        <div className="field full"><label htmlFor="confidence">How confident are you? <output id="confidence-output">80%</output></label><input id="confidence" name="confidence" type="range" min="0.1" max="1" step="0.1" defaultValue="0.8" onInput={(event) => { const output = document.getElementById("confidence-output"); if (output) output.textContent = `${Math.round(Number(event.currentTarget.value) * 100)}%`; }} /></div>
        <div className="field full"><label htmlFor="notes">Notes <span className="muted">(optional, 500 characters)</span></label><textarea id="notes" name="submitterNotes" maxLength={500} placeholder="Timing context only. Do not paste account content." /></div>
      </div>
      <div className="form-actions"><button className="button" type="submit" disabled={status.kind === "busy"}>Continue on GitHub</button><p className={`form-status ${status.kind === "error" ? "error" : ""}`} role="status">{status.message}</p></div>
    </form>
  );
}
