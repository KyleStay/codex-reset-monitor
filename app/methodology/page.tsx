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
            <section id="method"><p className="section-label">Method</p><h2>Two deliberately simple models</h2><p>The schedule-only baseline estimates reset hazard from historical timing and time since the last confirmed reset. The explainable candidate adds official incident state and recency, approved public-source activity, weighted report volume, source trust, and data-quality features.</p><p>Every forecast stores its full point-in-time feature snapshot, model and dataset versions, horizon probabilities, likely interval, and explanation factors. Outcomes are scored later. Historical backtests admit only records that were published, retrieved, verified, and uncorrected by the forecast cutoff.</p><h3>Promotion rule</h3><p>Below 20 confirmed events, promotion is blocked. Later candidates use time-aware holdout evaluation and must beat both the active model and baseline on declared probabilistic and timing metrics without unacceptable calibration, false-alarm, or missed-event regression.</p></section>
            <section id="labels"><p className="section-label">Evidence</p><h2>Labels are not interchangeable</h2><ul><li><b>Confirmed observation:</b> reviewed evidence of availability returning after a limit.</li><li><b>Inferred event:</b> plausible timing reconstructed from incomplete evidence.</li><li><b>Forecast:</b> an estimate made before the outcome.</li><li><b>Incident:</b> an official service-status record, not a personal reset.</li><li><b>Public signal:</b> an approved post or announcement.</li><li><b>Correction:</b> an append-only change that preserves the original record.</li></ul></section>
            <section id="privacy"><p className="section-label">Privacy</p><h2>Event timing, not account contents</h2><p>We never ask for or intentionally collect Codex prompts, responses, source code, API credentials, cookies, session tokens, private repository data, or other account contents. Reports contain UTC event times, the stated time zone, surface, optional generalized plan tier, detection method, confidence, and short notes.</p><p>Abuse controls use a rotating keyed digest rather than storing raw IP addresses. Rejected payload content is minimized; audit decisions and correction history are retained for integrity.</p></section>
            <section id="limitations"><p className="section-label">Limitations</p><h2>Not a promise of access</h2><p>Observed resets may differ by product surface, plan, geography, account, policy, and unobserved OpenAI behavior. Community reports are selected and noisy. Official incidents can correlate with failures without causing usage-limit resets. The demonstration dataset is not evidence of real predictive skill.</p><div className="notice"><b>Forecasts are experimental estimates, never guarantees.</b> Do not plan critical work around them.</div></section>
            <section id="sources"><p className="section-label">Sources</p><h2>Compliant by design</h2><p>The first automated adapter targets OpenAI’s public status JSON and stores provenance, publication/retrieval times, canonical URL, minimal excerpt, normalized features, and a deduplication hash. Social watchlists are administrator-configured. No “Tibo” account is guessed. When automation is unavailable, administrators may approve canonical post URLs manually.</p></section>
            <section id="attribution"><p className="section-label">Attribution</p><h2>Unofficial open-source project</h2><p>Codex and OpenAI are trademarks of their respective owner. This project is not affiliated with, endorsed by, or operated by OpenAI. Public-source summaries link to their originals and retain only minimal metadata or excerpts.</p></section>
          </div>
        </div>
      </section>
    </>
  );
}
