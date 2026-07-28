import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-brand">Codex Reset Monitor</p>
          <p>An unofficial open-source research project. Not affiliated with or endorsed by OpenAI.</p>
        </div>
        <nav aria-label="Footer">
          <Link href="/methodology#privacy">Privacy</Link>
          <Link href="/methodology#limitations">Limitations</Link>
          <Link href="/methodology#attribution">Attribution</Link>
          <Link href="/feed.xml">RSS feed</Link>
        </nav>
      </div>
    </footer>
  );
}
