import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";

const origin = process.env.APP_ORIGIN || "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const socialImage = `${origin.replace(/\/$/, "")}${basePath}/og.png`;
const favicon = `${basePath}/favicon.svg`;

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: "Codex Reset Monitor",
    template: "%s · Codex Reset Monitor",
  },
  description: "An unofficial, open-source experiment estimating when observed Codex usage-limit resets may occur.",
  icons: { icon: favicon, shortcut: favicon },
  openGraph: {
    title: "Codex Reset Monitor",
    description: "Calm, transparent, experimental reset estimates—never guarantees.",
    type: "website",
    images: [{ url: socialImage, width: 1536, height: 1024, alt: "Codex Reset Monitor — Experimental estimates. Never guarantees." }],
  },
  twitter: { card: "summary_large_image", images: [socialImage] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
