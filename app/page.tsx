import Link from "next/link";
import { ProbabilityArc } from "./components/ProbabilityArc";
import { Timeline } from "./components/Timeline";
import {
  collectionHealth,
  currentForecast,
  forecastHistory,
  historicalResearch,
  incidents,
  publicSignals,
  resetHistory,
} from "../lib/seed";

const formatUtc = (value: string) => new Intl.DateTimeFormat("en", {
  month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", timeZone: "UTC",
}).format(new Date(value));
const formatWindow = (start: string, end: string) => {
  const fmt = new Intl.DateTimeFormat("en", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: "UTC" });
  return `${fmt.format(new Date(start))}–${fmt.format(new Date(end))} UTC`;
};

export default function Home() {
  const confirmedCount = currentForecast.featureSnapshot.confirmedEventCount;
  const hasTimingHistory = currentForecast.likelyStartUtc && currentForecast.likelyEndUtc;
  return (
    <>
      <section className="hero">
        <div className="shell">
          <div className="eyebrow-row">
            <span className="eyebrow">Experimental public forecast</span>
            <span className="live-note"><i /> Live sources · {confirmedCount} verified reset{confirmedCount === 1 ? "" : "s"}</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="kicker">Current estimate</p>
              <h1>{hasTimingHistory ? <>A reset is most likely <em>within the next day.</em></> : <>There is <em>no learned reset schedule yet.</em></>}</h1>
              {hasTimingHistory ? (
                <p className="lede">
                  Based on verified observations, the likely window is
                  <strong> {formatWindow(currentForecast.likelyStartUtc!, currentForecast.likelyEndUtc!)}</strong>. This is an experimental estimate, never a guarantee.
                </p>
              ) : (
                <p className="lede">
                  {confirmedCount === 0
                    ? "No verified reset observations are available, so a likely time range is not published. "
                    : "One verified reset is available, but at least two are required to estimate a timing pattern, so a likely time range is not published. "}
                  The probabilities below are an explicitly labeled broad prior—not a result learned from demo or account data.
                  This is an experimental estimate, never a guarantee.
                </p>
              )}
              <div className="forecast-meta">
                <span><b>Confidence {currentForecast.confidenceGrade}</b> · {confirmedCount === 0 ? "No reset history" : "Limited history"}</span>
                <span>Updated <time dateTime={currentForecast.forecastAtUtc}>{formatUtc(currentForecast.forecastAtUtc)} UTC</time></span>
              </div>
            </div>
            <div className="signal-card">
              <div className="signal-card-head">
                <span>Data sufficiency</span>
                <strong>{confirmedCount} / 20 events</strong>
              </div>
              <div className="meter"><span style={{ width: `${Math.min(100, confirmedCount / 20 * 100)}%` }} /></div>
              <p><b>{currentForecast.dataSufficiencyLabel}.</b> At least 20 confirmed events are required before a statistical model can be considered for promotion.</p>
            </div>
          </div>
          <div className="probability-row">
            {([1, 3, 6, 12, 24] as const).map((hours) => (
              <ProbabilityArc key={hours} value={currentForecast.probabilities[hours]} label={`within ${hours}h`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell two-col">
          <div>
            <p className="section-label">Why this estimate</p>
            <h2>The strongest signals, in plain language</h2>
          </div>
          <div className="factor-list">
            {currentForecast.explanationFactors.map((factor, index) => (
              <article className="factor" key={factor.label}>
                <span className={`factor-icon factor-${factor.direction}`} aria-hidden="true">{index + 1}</span>
                <div>
                  <h3>{factor.label}</h3>
                  <p>{factor.detail}</p>
                </div>
                <span className="direction"><i aria-hidden="true">{factor.direction === "raises" ? "↑" : factor.direction === "lowers" ? "↓" : "→"}</i>{factor.direction}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint" id="evidence">
        <div className="shell">
          <div className="section-heading">
            <div><p className="section-label">Observed evidence</p><h2>Reset history</h2></div>
            <Link className="text-link" href="/methodology">How events are assessed <span aria-hidden="true">→</span></Link>
          </div>
          <Timeline items={resetHistory} empty="No reset observations yet." />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-label">Historical research</p>
              <h2>Past reset evidence and possible causes</h2>
            </div>
          </div>
          <p className="section-intro">
            These are inferred public events, not verified observations. Each entry states what the evidence supports,
            what remains unknown, and signals that could help detect similar events in the future.
          </p>
          <Timeline items={historicalResearch} empty="No historical reset research has passed validation." />
        </div>
      </section>

      <section className="section">
        <div className="shell split-timelines">
          <div>
            <p className="section-label">Official service context</p>
            <h2>Codex incident timeline</h2>
            <p className="section-intro">Official incidents are context signals, not reset confirmations.</p>
            <Timeline items={incidents} empty="No Codex-relevant official incidents were returned." />
            <p className="source-health"><b>Collector:</b> {collectionHealth.officialStatus.message}</p>
          </div>
          <div>
            <p className="section-label">Approved public context</p>
            <h2>Posts & announcements</h2>
            <p className="section-intro">Only administrator-approved URLs. No guessed accounts or brittle scraping.</p>
            <Timeline items={publicSignals} empty="No approved public signals." />
          </div>
        </div>
      </section>

      <section className="section section-ink">
        <div className="shell">
          <div className="section-heading">
            <div><p className="section-label">Permanent record</p><h2>Forecast history</h2></div>
            <Link className="text-link light" href="/performance">See model performance <span aria-hidden="true">→</span></Link>
          </div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Issued (UTC)</th><th>6-hour estimate</th><th>Likely interval</th><th>Outcome</th><th>Brier</th></tr></thead>
              <tbody>
                {forecastHistory.map((row) => (
                  <tr key={row.id}>
                    <td><time dateTime={row.at}>{formatUtc(row.at)}</time><small>{row.id}</small></td>
                    <td><b>{Math.round(row.p6 * 100)}%</b></td>
                    <td>{row.interval ?? "Unavailable—no timing history"}</td>
                    <td>{row.outcome}</td>
                    <td>{row.brier ?? "Pending"}</td>
                  </tr>
                ))}
                {!forecastHistory.length && <tr><td colSpan={5}>No real forecast has been published yet.</td></tr>}
              </tbody>
            </table>
          </div>
          <p className="table-note">Forecasts are immutable snapshots. Corrections affect future datasets, never the record of what was known at the time.</p>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell cta">
          <div><p className="section-label">Automatic by default</p><h2>Reset evidence should not depend on memory.</h2><p>The local telemetry bridge watches official quota counters, while the research agent reconstructs earlier events from durable sources. Manual reports remain optional corroboration.</p></div>
          <Link className="button" href="/methodology">See the method</Link>
        </div>
      </section>
    </>
  );
}
