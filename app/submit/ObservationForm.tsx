"use client";

import { useState } from "react";

const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? "";

export function ObservationForm() {
  const [status, setStatus] = useState<{ kind: "idle" | "busy" | "success" | "error"; message: string }>({ kind: "idle", message: "" });

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!apiBase) {
      setStatus({ kind: "error", message: "Submissions are unavailable in this static demonstration. Configure the write API to enable them." });
      return;
    }
    const form = new FormData(event.currentTarget);
    const payload = {
      limitReachedAtUtc: new Date(String(form.get("limitReachedAtUtc"))).toISOString(),
      observedResetAtUtc: new Date(String(form.get("observedResetAtUtc"))).toISOString(),
      statedTimeZone: String(form.get("statedTimeZone")),
      codexSurface: String(form.get("codexSurface")),
      planTier: String(form.get("planTier")),
      detectionMethod: String(form.get("detectionMethod")),
      confidence: Number(form.get("confidence")),
      submitterNotes: String(form.get("submitterNotes") ?? ""),
      relatedIncidentIds: [],
      relatedSourceIds: [],
    };
    setStatus({ kind: "busy", message: "Submitting…" });
    try {
      const response = await fetch(`${apiBase}/observations`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "Submission failed");
      event.currentTarget.reset();
      setStatus({ kind: "success", message: "Observation received for review. It will not affect the public forecast until verified." });
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Submission failed" });
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
      <div className="form-actions"><button className="button" type="submit" disabled={status.kind === "busy"}>Submit for review</button><p className={`form-status ${status.kind === "error" ? "error" : ""}`} role="status">{status.message}</p></div>
    </form>
  );
}
