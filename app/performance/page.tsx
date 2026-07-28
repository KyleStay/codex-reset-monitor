import type { Metadata } from "next";
import { forecastHistory, performance } from "../../lib/seed";

export const metadata: Metadata = { title: "Model performance" };

const pct = (value: number | null) => value === null ? "—" : `${Math.round(value * 100)}%`;
const number = (value: number | null, digits = 3) => value === null ? "—" : value.toFixed(digits);

export default function PerformancePage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="kicker">Transparent evaluation</p>
          <h1>Performance, including the misses.</h1>
          <p className="lede">Scores appear only after real forecasts have a complete 24-hour outcome window. Unfavorable results remain visible.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="notice" role="note"><b>{performance.sampleCount} scored real forecast{performance.sampleCount === 1 ? "" : "s"}.</b> {performance.sampleCount === 0 ? "No performance claim can be made yet." : "Confidence intervals remain wide and results are preliminary."}</div>
          <div className="metric-grid" style={{ marginTop: "2rem" }}>
            <div className="metric"><span>Brier score</span><strong>{number(performance.brier)}</strong><small>Lower is better</small></div>
            <div className="metric"><span>Schedule-only baseline</span><strong>{number(performance.baselineBrier)}</strong><small>No promoted candidate</small></div>
            <div className="metric"><span>6h precision / recall</span><strong>{pct(performance.precision6h)} / {pct(performance.recall6h)}</strong><small>Threshold: 50%</small></div>
            <div className="metric"><span>Median timing error</span><strong>{performance.medianTimingErrorMinutes === null ? "—" : `${performance.medianTimingErrorMinutes}m`}</strong><small>Likely-window midpoint</small></div>
            <div className="metric"><span>False-alarm rate</span><strong>{pct(performance.falseAlarmRate)}</strong><small>6-hour window</small></div>
            <div className="metric"><span>Missed-event rate</span><strong>{pct(performance.missedEventRate)}</strong><small>6-hour window</small></div>
            <div className="metric"><span>Scored forecasts</span><strong>{performance.sampleCount}</strong><small>Pending excluded</small></div>
            <div className="metric"><span>Promotion state</span><strong>Blocked</strong><small>Fewer than 20 events</small></div>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="shell two-col">
          <div>
            <p className="section-label">Calibration</p>
            <h2>Do stated probabilities match reality?</h2>
            <p className="section-intro">Bars compare mean predicted probability with the observed frequency in each bucket. Small samples can make these values swing sharply.</p>
            <div className="legend"><span><i /> Predicted</span><span><i className="actual" /> Observed</span></div>
          </div>
          <div className="chart" role="img" aria-label={performance.calibration.length ? "Calibration chart comparing predicted and observed reset frequency" : "Calibration unavailable because no real forecasts have been scored"}>
            {performance.calibration.map((row) => (
              <div className="chart-group" key={row.bucket}>
                <div className="bars">
                  <span className="bar" style={{ height: `${row.predicted * 100}%` }} title={`Predicted ${pct(row.predicted)}`} />
                  <span className="bar actual" style={{ height: `${row.observed * 100}%` }} title={`Observed ${pct(row.observed)}`} />
                </div>
                <span>{row.bucket}<br />n={row.n}</span>
              </div>
            ))}
            {!performance.calibration.length && <p className="muted">Calibration will appear after real forecasts are scored.</p>}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <p className="section-label">Scoring record</p>
          <h2>Recent outcomes</h2>
          <div className="table-wrap" style={{ color: "var(--ink)", borderColor: "var(--line)" }}>
            <table>
              <thead><tr><th>Forecast</th><th>6-hour estimate</th><th>Outcome</th><th>Brier score</th></tr></thead>
              <tbody>
                {forecastHistory.map((row) => <tr key={row.id}><td>{row.id}</td><td>{pct(row.p6)}</td><td>{row.outcome}</td><td>{row.brier ?? "Pending"}</td></tr>)}
                {!forecastHistory.length && <tr><td colSpan={4}>No real forecast has been published yet.</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
