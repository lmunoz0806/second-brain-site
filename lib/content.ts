/**
 * Every word on the page lives here — sections import from this file,
 * so copy edits never touch JSX.
 */

/** Production domain on the Coolify host — feeds metadataBase and OG URLs. */
export const siteUrl = "https://secondbrain.luismunoz.xyz";

export const links = {
  /**
   * Direct DMG for the latest release — update per release.
   * Self-hosted on the Coolify volume mounted at /usr/share/nginx/html/dl.
   * The app's repo is private, so a GitHub release asset would 404 for
   * every visitor. See "Hosting the desktop DMG" in docs/DEPLOY.md.
   */
  download: "https://secondbrain.luismunoz.xyz/dl/Second-Brain_2.6.0_aarch64.dmg",
  lcube: "https://www.lcubestudios.io/",
} as const;

export const nav = {
  anchors: [
    { label: "Capture", href: "#capture" },
    { label: "Sources", href: "#sources" },
    { label: "Ask", href: "#ask" },
    { label: "FAQ", href: "#faq" },
  ],
  download: "Download",
} as const;

export const hero = {
  headline: ["Your notes, connected", "to everything you know"],
  line: ["Runs locally on your Mac", "Works offline"],
  cta: "Download for macOS",
} as const;

export interface Screenshot {
  src: string;
  alt: string;
}

export interface Feature {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  points: readonly string[];
  screens: readonly Screenshot[];
}

export const features: readonly Feature[] = [
  {
    id: "capture",
    eyebrow: "Capture",
    headline: "Drop it in, it files itself.",
    body: "Add notes, transcripts and files to the Inbox. Second Brain reads each one, writes a summary, and suggests where it belongs in your vault. You approve it, and it is filed. Meeting notes land in Meetings, grouped by day and filterable by client and people.",
    points: [
      "Process with a local model, or with Claude or Codex",
      "Review every suggestion before anything moves",
      "Meetings by week, month or custom range",
    ],
    screens: [
      {
        src: "/screens/inbox.webp",
        alt: "The Inbox with three captured items and a filing suggestion summarizing Northwind portal feedback",
      },
      {
        src: "/screens/meetings.webp",
        alt: "Meetings grouped by day, each tagged with its client and attendees",
      },
    ],
  },
  {
    id: "sources",
    eyebrow: "Sources",
    headline: "It learns what you know.",
    body: "Point Second Brain at a folder of Markdown, PDFs and images. It indexes your notes on your Mac and keeps up as they change. Browse in Tree, List or Grid, and write in an editor that renders as you type while the file on disk stays plain Markdown.",
    points: [
      "Your vault is a folder of files you already own",
      "Tree, List, Grid and Recent views",
      "Works with an existing Obsidian vault",
    ],
    screens: [
      {
        src: "/screens/sources.webp",
        alt: "A meeting note open in the Sources editor with a breadcrumb and note toolbar",
      },
    ],
  },
  {
    id: "ask",
    eyebrow: "Ask",
    headline: "Answers from your own notes.",
    body: "Ask a question in plain language. Second Brain finds the passages in your vault that answer it, replies with numbered citations, and opens the exact passage when you click one. When your notes don't hold the answer, it says so.",
    points: [
      "Every claim links to the note it came from",
      "Ask by voice with push-to-talk",
      "Runs on a local model or your Claude or Codex subscription",
    ],
    screens: [
      {
        src: "/screens/ask.webp",
        alt: "An answer about choosing an SMS vendor, with numbered citations and the cited passage open beside it",
      },
    ],
  },
] as const;

export const poweredBy = {
  eyebrow: "Powered by",
  headline: "Local by default.",
  body: "Search, embeddings and answers run on your Mac with Ollama and work offline. Already pay for Claude or ChatGPT? Connect your subscription through Claude Code or Codex and Ask uses it instead.",
  specs: [
    {
      value: "127.0.0.1",
      title: "Binds to localhost",
      body: "The app refuses remote connections. No account, no telemetry, no cloud between you and your notes.",
    },
    {
      value: "Ollama",
      title: "Local models, built in",
      body: "The engine and the database ship inside the app. Once the models are downloaded, unplug the network and search and Ask keep working.",
    },
    {
      value: "Claude · Codex",
      title: "Or your subscription",
      body: "Pick Claude Code or Codex in Settings. Your vault stays on disk; only the passages a question needs are sent.",
    },
  ],
} as const;

export const install = {
  eyebrow: "Install",
  headline: "Running in two minutes.",
  title: "Free download for Apple silicon Macs",
  body: "macOS 15 or later. Signed and notarized: open the DMG, drag the app to Applications, and pick a folder of notes. The first setup downloads the local models.",
  cta: "Download for macOS",
} as const;

export interface FaqItem {
  q: string;
  a: string;
}

export const faq: readonly FaqItem[] = [
  {
    q: "Does it work offline?",
    a: "Yes. Search, embeddings and Ask run on your Mac with Ollama, and the app only listens on 127.0.0.1. Unplug the network and you can still search and ask your notes. The Inbox uses Claude by default; switch it to Local in Settings to keep that offline too.",
  },
  {
    q: "Can I use my Claude or ChatGPT subscription?",
    a: "Yes. With Claude Code or Codex installed and signed in, pick it in Settings and Ask and the Inbox use it. When you do, the passages retrieved for each question, and the Inbox items you process, go to that provider (Anthropic or OpenAI). Embeddings and search stay on your Mac either way.",
  },
  {
    q: "What files does it read?",
    a: "Markdown notes, PDFs, images, JSON and plain text, in a folder on your disk. Ask answers from your Markdown and text notes; the rest open in Sources.",
  },
  {
    q: "What Mac do I need?",
    a: "A Mac with Apple silicon (M1 or later) running macOS 15 or later. Intel Macs are not supported.",
  },
  {
    q: "Can I use my existing Obsidian vault?",
    a: "Yes. Point Second Brain at any folder of Markdown files, including an Obsidian vault. It reads and writes plain Markdown and keeps your [[wikilinks]].",
  },
  {
    q: "Is the app signed?",
    a: "Yes. The DMG is signed with an Apple Developer ID and notarized by Apple, so it opens without security warnings.",
  },
] as const;

export const finalCta = {
  headline: "Get Second Brain for your Mac.",
  body: "Free for Apple silicon Macs. Your notes stay yours.",
  cta: "Download for macOS",
} as const;

export const footer = {
  tagline: "Local-first memory for your Markdown notes.",
  columns: [
    {
      title: "Page",
      links: [
        { label: "Capture", href: "#capture" },
        { label: "Sources", href: "#sources" },
        { label: "Ask", href: "#ask" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Studio",
      links: [{ label: "Built by LCube Studios", href: links.lcube }],
    },
  ],
  copyright: "© 2026 LCube Studios LLC. All rights reserved.",
} as const;
