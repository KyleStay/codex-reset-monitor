"use client";

import { useState } from "react";

const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? "";
const pending = [
  { id: "obs-pending-17", limit: "Jul 28, 08:12 UTC", reset: "Jul 28, 12:36 UTC", surface: "CLI", trust: "0.15", note: "Manual retry; no sensitive content detected." },
  { id: "obs-pending-16", limit: "Jul 27, 19:44 UTC", reset: "Jul 28, 02:08 UTC", surface: "IDE", trust: "0.15", note: "Possible duplicate within the 15-minute dedupe window." },
];

export function AdminPanel() {
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("Read-only demonstration. Enter the server-side admin key to perform an audited action.");

  async function act(id: string, action: "confirmed" | "rejected") {
    if (!apiBase) {
      setMessage("The write API is not configured, so this static demonstration is read-only.");
      return;
    }
    try {
      const response = await fetch(`${apiBase}/admin/observations/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json", "x-admin-key": key },
        body: JSON.stringify({ verificationState: action, reason: action === "confirmed" ? "Administrator verified observation" : "Administrator rejected observation" }),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "Admin action failed");
      setMessage(`${id} marked ${action}. An immutable audit entry was created.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Admin action failed");
    }
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <p className="footer-brand">Administration</p><span className="chip">Protected area</span>
        <nav aria-label="Administration"><a href="#review">Review queue</a><a href="#sources">Source health</a><a href="#models">Models & rollback</a></nav>
      </aside>
      <div className="admin-main">
        <p className="section-label">Review queue</p><h1 style={{ fontSize: "3.2rem" }}>Pending observations</h1>
        <div className="admin-key"><label className="field" style={{ flex: 1 }}><span>Admin key</span><input type="password" value={key} onChange={(event) => setKey(event.target.value)} autoComplete="current-password" /></label></div>
        <p className="form-status" role="status">{message}</p>
        <div id="review">
          {pending.map((item) => (
            <article className="review-card" key={item.id}>
              <div><span className="chip">Pending · trust {item.trust}</span><h3>{item.surface} observation · {item.id}</h3><p>Limit reached {item.limit} · access returned {item.reset}</p><small>{item.note}</small></div>
              <div className="admin-actions"><button className="button" onClick={() => act(item.id, "confirmed")}>Verify</button><button className="button secondary" onClick={() => act(item.id, "rejected")}>Reject</button></div>
            </article>
          ))}
        </div>
        <section id="sources" style={{ marginTop: "4rem" }}><p className="section-label">Source health</p><h2>Collectors</h2><div className="review-card"><div><span className="chip">Fixture healthy</span><h3>OpenAI public status</h3><p>Live JSON endpoint is configured in the daily workflow. The local test path uses a realistic fixture.</p></div><div><small>Last fixture check<br /><b>14:00 UTC</b></small></div></div></section>
        <section id="models" style={{ marginTop: "4rem" }}><p className="section-label">Models & rollback</p><h2>Promotion is blocked</h2><div className="notice"><b>6 confirmed events.</b> Retraining requires at least 20. Active model: schedule baseline 0.1.0. Candidate: logistic 0.1.0 (evaluation only).</div><div className="form-actions"><button className="button secondary" onClick={() => setMessage("Retraining skipped: 14 more confirmed labels are required.")}>Start retraining</button><button className="button secondary" onClick={() => setMessage("Rollback preview: no production change was made in this demonstration.")}>Review rollback</button></div></section>
      </div>
    </div>
  );
}
