import type { Metadata } from "next";
import { ObservationForm } from "./ObservationForm";

export const metadata: Metadata = { title: "Report a reset" };

export default function SubmitPage() {
  return (
    <>
      <section className="page-hero"><div className="shell"><p className="kicker">Community observation</p><h1>Report the moment access returned.</h1><p className="lede">Share only event timing and broad context. A pending report cannot create a high-confidence public warning.</p></div></section>
      <section className="section"><div className="shell two-col"><div><p className="section-label">Privacy first</p><h2>Keep private work private.</h2><p className="section-intro">We validate, deduplicate, rate-limit, and review every report before it can become confirmed evidence.</p><ul className="privacy-list"><li>No prompts or responses</li><li>No source code</li><li>No API credentials</li><li>No cookies or tokens</li><li>No account identifiers</li><li>No private links</li></ul></div><ObservationForm /></div></section>
    </>
  );
}
