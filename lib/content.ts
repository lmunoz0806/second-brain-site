/**
 * Every word on the page lives here — sections import from this file,
 * so copy edits never touch JSX.
 */

/** Production domain on the Coolify host — feeds metadataBase and OG URLs. */
export const siteUrl = "https://secondbrain.luismunoz.xyz";

export const links = {
  repo: "https://github.com/lmunoz0806/second-brain-frontend",
  releases: "https://github.com/lmunoz0806/second-brain-frontend/releases",
  /** Direct DMG for the latest release — update per release. */
  download:
    "https://github.com/lmunoz0806/second-brain-frontend/releases/download/v1.2.0/Second.Brain_1.2.0_aarch64.dmg",
  issues: "https://github.com/lmunoz0806/second-brain-frontend/issues",
  license:
    "https://github.com/lmunoz0806/second-brain-frontend/blob/main/LICENSE",
} as const;

export const quickstart = `git clone ${links.repo} && cd second-brain-frontend && yarn && yarn dev`;

export const nav = {
  anchors: [
    { label: "Features", href: "#write" },
    { label: "Ask", href: "#ask" },
    { label: "Install", href: "#install" },
    { label: "FAQ", href: "#faq" },
  ],
  download: "Download",
} as const;

export const hero = {
  eyebrow: "Local-first · Open source · MIT",
  headline: ["Your notes, tasks, and AI.", "One vault. One machine."],
  subhead:
    "Second Brain turns a folder of Markdown into a command center — formatted writing, tasks and timers, a real terminal, and a local AI that answers from your notes with sources.",
  ctaPrimary: "Download for macOS →",
  ctaSecondary: "View on GitHub",
  quickstartLabel: "Or run it from source",
} as const;

export const localFirst = {
  eyebrow: "Privacy",
  headline: "Nothing leaves 127.0.0.1.",
  specs: [
    {
      value: "127.0.0.1",
      title: "Binds to localhost",
      body: "The server refuses non-loopback hosts by default. No accounts, no telemetry, no cloud between you and your notes.",
    },
    {
      value: "0 API keys",
      title: "Works fully offline",
      body: "Retrieval and generation run on local models through Ollama. Unplug the network and everything still works.",
    },
    {
      value: ".md files",
      title: "Plain Markdown on disk",
      body: "Your vault is a folder of files you already own. No proprietary database, no export step, no lock-in.",
    },
  ],
} as const;

export interface Feature {
  id: string;
  number: string;
  eyebrow: string;
  headline: string;
  body: string;
  points: readonly string[];
}

export const features: readonly Feature[] = [
  {
    id: "write",
    number: "01",
    eyebrow: "Write",
    headline: "Write formatted. Save nothing manually.",
    body: "A WYSIWYG Markdown editor that renders as you type — headings, tables, code blocks — while the file on disk stays plain Markdown.",
    points: [
      "Autosave with visible save state",
      "Version snapshot before destructive edits",
      "Tabs, live file tree, and a command palette",
    ],
  },
  {
    id: "connect",
    number: "02",
    eyebrow: "Connect",
    headline: "Every [[wikilink]] becomes a map.",
    body: "Link notes the way you think. The knowledge graph builds itself from your links and backlinks — no plugins, no setup.",
    points: [
      "Backlinks tracked across the whole vault",
      "3D graph overlay on ⌘G, 2D fallback",
      "Click any node to jump to the note",
    ],
  },
  {
    id: "execute",
    number: "03",
    eyebrow: "Execute",
    headline: "Notes that turn into work.",
    body: "Tasks and time tracking live next to the notes that spawned them — not in a separate app that forgets the context.",
    points: [
      "Today, Week, and Board views with drag and drop",
      "Concurrent timers across tasks",
      "Daily notes, one keystroke away",
    ],
  },
  {
    id: "terminal",
    number: "04",
    eyebrow: "Terminal",
    headline: "A real shell, in the same window.",
    body: "A full terminal — not a toy — wired to your machine. Run the project you just wrote about without leaving the vault.",
    points: [
      "Real PTY: vim, git, yarn all behave",
      "Opens in your active workspace directory",
      "Toggle with ⌘J, stays out of the way",
    ],
  },
  {
    id: "recover",
    number: "05",
    eyebrow: "Recover",
    headline: "Undo, but for your whole vault.",
    body: "Every edit is backed by automatic version history. Deleted notes land in a trash you can browse, not a void.",
    points: [
      "Per-version restore from the History popover",
      "Trash view with per-file recovery",
      "Save-conflict protection when files change on disk",
    ],
  },
  {
    id: "ask",
    number: "06",
    eyebrow: "Ask",
    headline: "Answers from your notes, not the internet.",
    body: "Ask questions in plain language. Second Brain retrieves the relevant passages from your vault and answers with citations you can click — or tells you honestly when your notes don't contain the answer.",
    points: [
      "Retrieval over your vault with Postgres + pgvector",
      "Local models through Ollama — nothing leaves your machine",
      "Every claim carries a clickable citation",
      "Per-workspace indexes with visible index health",
    ],
  },
] as const;

export const askPipeline = [
  "your vault",
  "embeddings · pgvector",
  "local model · Ollama",
  "cited answer",
] as const;

export const install = {
  eyebrow: "Install",
  headline: "Running in two minutes.",
  macos: {
    title: "Download for macOS",
    body: "Signed and notarized DMG. Open it, drag to Applications, done.",
    cta: "Download for macOS →",
  },
  source: {
    title: "Run from source",
    body: "Node 20+ and yarn. Postgres and Ollama are only needed if you turn on Ask.",
  },
} as const;

export const openSource = {
  eyebrow: "Open source",
  headline: "MIT. Read every line.",
  body: "Second Brain is open source under the MIT license. The code that touches your notes is code you can audit, fork, and make yours.",
  stats: [
    { value: "MIT", label: "License" },
    { value: "v1.2.0", label: "Latest release" },
    { value: "TypeScript", label: "Strict mode, end to end" },
  ],
  cta: "Star on GitHub",
} as const;

export interface FaqItem {
  q: string;
  a: string;
}

export const faq: readonly FaqItem[] = [
  {
    q: "Is it really offline?",
    a: "Yes. The app binds to 127.0.0.1 and refuses remote hosts by default. Ask runs retrieval and generation on local models through Ollama, so questions and answers never leave your machine.",
  },
  {
    q: "How is this different from Obsidian?",
    a: "Same respect for plain Markdown files, different scope. Second Brain builds tasks, time tracking, a real terminal, and a grounded local AI into one surface — things that are plugins or separate apps elsewhere. And the whole codebase is MIT, so nothing about it is a black box.",
  },
  {
    q: "What does Ask need to run?",
    a: "Docker (for Postgres with pgvector) and Ollama with two small models — one for embeddings, one for answers. Everything else works without them; Ask is opt-in.",
  },
  {
    q: "Where is my data stored?",
    a: "Your notes stay exactly where they are: a folder of Markdown files on your disk. The search index lives in a local Postgres database. Version history lives in a hidden folder inside the vault.",
  },
  {
    q: "Does it run on Windows or Linux?",
    a: "The desktop app is macOS-first. On Windows and Linux, run it from source — it is a Node web app at heart and works anywhere Node 20 does.",
  },
  {
    q: "Is the macOS app signed?",
    a: "Yes. The DMG is signed with an Apple Developer ID and notarized, so it opens without security warnings.",
  },
  {
    q: "Can I use my existing vault?",
    a: "Yes. Point Second Brain at any folder of Markdown files — including an existing Obsidian vault. It reads and writes plain Markdown and standard [[wikilinks]].",
  },
  {
    q: "Can I contribute?",
    a: "Please do. Issues and pull requests are open on GitHub, and the MIT license means you can also just fork it and build your own thing.",
  },
] as const;

export const finalCta = {
  headline: "Own your second brain.",
  body: "Free, open source, and yours — the way notes should be.",
  cta: "Download for macOS →",
} as const;

export const footer = {
  tagline: "Local-first command center for your Markdown vault.",
  columns: [
    {
      title: "Project",
      links: [
        { label: "GitHub", href: links.repo },
        { label: "Releases", href: links.releases },
        { label: "Issues", href: links.issues },
        { label: "License", href: links.license },
      ],
    },
    {
      title: "Page",
      links: [
        { label: "Features", href: "#write" },
        { label: "Ask", href: "#ask" },
        { label: "Install", href: "#install" },
        { label: "FAQ", href: "#faq" },
      ],
    },
  ],
  copyright: "© 2026 LCube Studios",
} as const;
