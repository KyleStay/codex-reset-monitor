import type { Metadata } from "next";
import { ObservationForm } from "./ObservationForm";

export const metadata: Metadata = { title: "Report a reset" };

export default function SubmitPage() {
  return (
    <>
      <section className="page-hero"><div className="shell"><p className="kicker">Community observation</p><h1>Report the moment access returned.</h1><p className="lede">Share only event timing and broad context. The form continues to a public GitHub issue for review; an unverified report never enters the forecast.</p></div></section>
      <section className="section"><div className="shell two-col"><div><p className="section-label">Privacy first</p><h2>Keep private work private.</h2><p className="section-intro">GitHub authentication supplies basic abuse controls. Maintainers validate, deduplicate, and label every report before the daily collector can publish it.</p><ul className="privacy-list"><li>No prompts or responses</li><li>No source code</li><li>No API credentials</li><li>No cookies or tokens</li><li>No account identifiers in the form</li><li>No private links</li></ul><div className="notice"><b>Reports are public GitHub issues.</b> GitHub will associate the issue with your GitHub account. Do not submit anything you do not want public.</div></div><ObservationForm /></div></section>
    </>
  );
}
