"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("crm-theme");
    const initial = saved === "dark" || (!saved && matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    const frame = requestAnimationFrame(() => setTheme(initial));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("crm-theme", next);
  }

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Codex Reset Monitor home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>Codex <b>Reset Monitor</b></span>
        </Link>
        <button className="nav-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
          Menu
        </button>
        <nav id="primary-nav" className={open ? "nav open" : "nav"} aria-label="Primary navigation">
          <Link href="/">Forecast</Link>
          <Link href="/performance">Performance</Link>
          <Link href="/submit">Report a reset</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/admin">Admin</Link>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
          <span aria-hidden="true">{theme === "light" ? "◐" : "◑"}</span>
        </button>
      </div>
    </header>
  );
}
