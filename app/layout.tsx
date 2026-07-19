import type { Metadata } from "next";
import type { ReactNode } from "react";
import { links, siteUrl } from "@/lib/content";
import "./globals.css";

const title = "Second Brain — local-first command center for your Markdown vault";
const description =
  "Open-source, local-first workspace connecting notes, tasks, a terminal, and a local AI that answers from your vault with cited sources. Binds to 127.0.0.1 — works fully offline.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "second brain",
    "local-first",
    "markdown",
    "obsidian alternative",
    "pkm",
    "rag",
    "ollama",
    "pgvector",
    "ai notes",
    "task management",
    "knowledge graph",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Second Brain",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Second Brain",
  operatingSystem: "macOS",
  applicationCategory: "ProductivityApplication",
  license: "https://opensource.org/license/mit",
  downloadUrl: links.releases,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-paper font-sans text-fg-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="absolute left-4 top-4 z-50 -translate-y-24 bg-ink px-4 py-2 text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
