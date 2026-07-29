import { collectionHealth, currentForecast } from "../../lib/seed";

const repo = "https://github.com/KyleStay/codex-reset-monitor";

export function AdminPanel() {
  const confirmedCount = currentForecast.featureSnapshot.confirmedEventCount;
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <p className="footer-brand">Administration</p>
        <span className="chip">GitHub-protected actions</span>
        <nav aria-label="Administration">
          <a href="#review">Review queue</a>
          <a href="#sources">Source health</a>
          <a href="#models">Models</a>
        </nav>
      </aside>
      <div className="admin-main">
        <p className="section-label">Review queue</p>
        <h1 style={{ fontSize: "3.2rem" }}>Real reports, reviewed in GitHub</h1>
        <div className="notice">
          The queue is publicly auditable, but only repository collaborators can
          apply verification labels or push publishing commits. No admin
          secret is embedded in this static site.
        </div>
        <div id="review" className="admin-link-grid">
          <a className="review-card" href={`${repo}/issues?q=is%3Aissue+is%3Aopen+label%3Apending-review`}>
            <div><span className="chip">Needs review</span><h3>Pending reports and sources</h3><p>Validate timestamps, privacy, duplicates, and provenance before approval.</p></div>
            <strong aria-hidden="true">↗</strong>
          </a>
          <a className="review-card" href={`${repo}/issues?q=is%3Aissue+label%3Averified-observation`}>
            <div><span className="chip">Published evidence</span><h3>Verified reset observations</h3><p>The daily collector reads only issues with this protected label.</p></div>
            <strong aria-hidden="true">↗</strong>
          </a>
          <a className="review-card" href={`${repo}/issues?q=is%3Aissue+label%3Aapproved-public-source`}>
            <div><span className="chip">Approved context</span><h3>Approved public sources</h3><p>Only minimal metadata and canonical URLs are published.</p></div>
            <strong aria-hidden="true">↗</strong>
          </a>
        </div>

        <section id="sources" style={{ marginTop: "4rem" }}>
          <p className="section-label">Source health</p>
          <h2>Daily collectors</h2>
          <div className="review-card">
            <div><span className="chip">{collectionHealth.officialStatus.status}</span><h3>OpenAI public status</h3><p>{collectionHealth.officialStatus.message}</p></div>
            <small>{new Date(collectionHealth.officialStatus.checkedAtUtc).toISOString()}</small>
          </div>
          <div className="review-card">
            <div><span className="chip">{collectionHealth.observations.status}</span><h3>Verified GitHub issues</h3><p>{collectionHealth.observations.message}</p></div>
            <small>{confirmedCount} verified</small>
          </div>
        </section>

        <section id="models" style={{ marginTop: "4rem" }}>
          <p className="section-label">Models and publishing</p>
          <h2>{confirmedCount < 20 ? "Retraining remains blocked" : "Eligible for candidate evaluation"}</h2>
          <div className="notice">
            <b>{confirmedCount} confirmed event{confirmedCount === 1 ? "" : "s"}.</b>{" "}
            Candidate training requires at least 20. Active model: {currentForecast.modelVersion}.
            No model can be promoted or rolled back from client-side code.
          </div>
          <div className="form-actions">
            <a className="button" href={`${repo}/actions/workflows/pages.yml`}>View Pages deployments</a>
            <a className="button secondary" href={`${repo}/commits/main/data/generated/forecast-history.json`}>Review forecast history</a>
          </div>
        </section>
      </div>
    </div>
  );
}
