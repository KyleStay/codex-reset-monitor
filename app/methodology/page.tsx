import type { Metadata } from "next";

export const metadata: Metadata = { title: "Methodology, privacy & limitations" };

export default function MethodologyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="kicker">Open methods</p>
          <h1>What we know—and what we don’t.</h1>
          <p className="lede">The monitor is an unofficial experiment built from observed events and approved public context. It cannot see your Codex account or OpenAI’s internal systems.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell content-grid">
          <nav className="side-nav" aria-label="On this page">
            <a href="#method">Forecast method</a><a href="#labels">Evidence labels</a><a href="#privacy">Privacy</a><a href="#limitations">Limitations</a><a href="#sources">Sources</a><a href="#attribution">Attribution</a>
          </nav>
          <div className="prose">
            <section id="method"><p className="section-label">Method</p><h2>Two deliberately simple models</h2><p>With no verified resets, the dashboard publishes a fixed broad prior of 4%, 12%, 22%, 39%, and 63% for 1, 3, 6, 12, and 24 hours. It is a declared heuristic, not a learned schedule, and no likely interval is shown. Once at least two verified observations exist, the schedule-only baseline estimates reset hazard from historical timing and time since the last confirmed reset. A later explainable candidate may add official incident state and recency, approved public-source activity, weighted report volume, source trust, and data-quality features.</p><p>Every real forecast stores its full point-in-time feature snapshot, model and dataset versions, horizon probabilities, likely interval when available, and explanation factors. Outcomes are scored only after the full 24-hour window closes. Historical backtests admit only records that were published, retrieved, and verified by the forecast cutoff.</p><h3>Promotion rule</h3><p>Below 20 confirmed events, promotion is blocked. Later candidates use time-aware holdout evaluation and must beat both the active model and baseline on declared probabilistic and timing metrics without unacceptable calibration, false-alarm, or missed-event regression.</p></section>
            <section id="labels"><p className="section-label">Evidence</p><h2>Labels are not interchangeable</h2><ul><li><b>Confirmed observation:</b> reviewed evidence of availability returning after a limit.</li><li><b>Inferred event:</b> plausible timing reconstructed from incomplete evidence.</li><li><b>Forecast:</b> an estimate made before the outcome.</li><li><b>Incident:</b> an official service-status record, not a personal reset.</li><li><b>Public signal:</b> an approved post or announcement.</li><li><b>Correction:</b> an append-only change that preserves the original record.</li></ul></section>
            <section id="privacy"><p className="section-label">Privacy</p><h2>Event timing, not account contents</h2><p>We never ask for Codex prompts, responses, source code, API credentials, cookies, session tokens, private repository data, screenshots, logs, or other account contents. Reports contain UTC event times, the stated time zone, surface, optional generalized plan tier, detection method, confidence, and optional short timing notes.</p><p>Reports are public GitHub issues and are associated with the submitter’s GitHub account under GitHub’s privacy terms. The published dataset deliberately omits author identity. GitHub provides authenticated submission and platform abuse controls; maintainers provide verification labels. Git history preserves corrections.</p></section>
            <section id="limitations"><p className="section-label">Limitations</p><h2>Not a promise of access</h2><p>Observed resets may differ by product surface, plan, geography, account, policy, and unobserved OpenAI behavior. Community reports are selected and noisy. Official incidents can correlate with failures without causing usage-limit resets. With no verified reset history, the published prior is not evidence of predictive skill.</p><div className="notice"><b>Forecasts are experimental estimates, never guarantees.</b> Do not plan critical work around them.</div></section>
            <section id="sources"><p className="section-label">Sources</p><h2>Compliant by design</h2><p>The automated official adapter reads OpenAI’s public status JSON and stores provenance, publication/retrieval times, canonical URL, minimal excerpt, normalized features, and a deduplication hash. Reset observations are collected from GitHub issues only after a repository maintainer adds the protected verification label. Public posts require the separate approval label. No “Tibo” account is guessed and no social site is scraped.</p></section>
            <section id="attribution"><p className="section-label">Attribution</p><h2>Unofficial open-source project</h2><p>Codex and OpenAI are trademarks of their respective owner. This project is not affiliated with, endorsed by, or operated by OpenAI. Public-source summaries link to their originals and retain only minimal metadata or excerpts.</p></section>
          </div>
        </div>
      </section>
    </>
  );
}
