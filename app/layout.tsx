import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Second Brain — local-first command center for your Markdown vault",
  description:
    "Open-source, local-first workspace connecting notes, tasks, a terminal, and a local AI that answers from your vault with cited sources. Binds to 127.0.0.1 — works fully offline.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-paper font-sans text-fg-1">
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
