import type { Metadata } from "next";
import { forecastHistory, performance } from "../../lib/seed";

export const metadata: Metadata = { title: "Model performance" };

const pct = (value: number) => `${Math.round(value * 100)}%`;

export default function PerformancePage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="kicker">Transparent evaluation</p>
          <h1>Performance, including the misses.</h1>
          <p className="lede">Early scores on demonstration outcomes. The sample is too small for quality claims; unfavorable results stay visible.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="notice" role="note"><b>Only {performance.sampleCount} scored forecasts.</b> Confidence intervals would be too wide to be useful. All metrics below are illustrative until real, verified outcomes exist.</div>
          <div className="metric-grid" style={{ marginTop: "2rem" }}>
            <div className="metric"><span>Brier score</span><strong>{performance.brier.toFixed(3)}</strong><small>Lower is better</small></div>
            <div className="metric"><span>Schedule-only baseline</span><strong>{performance.baselineBrier.toFixed(3)}</strong><small>Candidate improvement: 5.7%</small></div>
            <div className="metric"><span>6h precision / recall</span><strong>{pct(performance.precision6h)} / {pct(performance.recall6h)}</strong><small>Threshold: 50%</small></div>
            <div className="metric"><span>Median timing error</span><strong>{performance.medianTimingErrorMinutes}m</strong><small>Likely-window midpoint</small></div>
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
          <div className="chart" role="img" aria-label="Calibration chart comparing predicted and observed reset frequency in five probability buckets">
            {performance.calibration.map((row) => (
              <div className="chart-group" key={row.bucket}>
                <div className="bars">
                  <span className="bar" style={{ height: `${row.predicted * 100}%` }} title={`Predicted ${pct(row.predicted)}`} />
                  <span className="bar actual" style={{ height: `${row.observed * 100}%` }} title={`Observed ${pct(row.observed)}`} />
                </div>
                <span>{row.bucket}<br />n={row.n}</span>
              </div>
            ))}
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
              <tbody>{forecastHistory.map((row) => <tr key={row.id}><td>{row.id}</td><td>{pct(row.p6)}</td><td>{row.outcome}</td><td>{row.brier ?? "Pending"}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
