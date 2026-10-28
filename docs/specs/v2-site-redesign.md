# Site redesign for v2.6.0

Status: draft, 2026-10-27. Grilled with Luis the same day (rounds 1–3).
Layout reference: Google AI Edge Foresight (developers.google.com/edge/foresight).

## Why

The page describes the v1 app. It sells features deleted in v2.0.0 (Tasks,
timers, Terminal, Graph, version history), says "open source · MIT" and links
to a private GitHub repo that returns 404 to visitors, and claims "0 API keys"
when Ask can now use Claude or Codex. The download points at the 1.4.0 DMG.

## Decisions

- The site name stays **Second Brain**. The DMG and app may say Cubicl Vault.
- Every open-source surface goes: the OpenSource section, the `git clone`
  quickstart, the GitHub, Releases, Issues and License links, and the FAQ
  answers about contributing and running from source.
- Apple silicon only, macOS 15 or later, stated in the hero line, Install copy
  and FAQ.
- Real screenshots of the v2.6.0 app replace all seven CSS mockups, which are
  deleted. They are captured headlessly in light theme from a copy of the
  42-note eval fixture vault (`second-brain-frontend/test/fixtures/eval-vault`),
  so no personal vault data appears.
- LCube flat design rules still hold: no gradients, no glass, no emoji, no
  decorative starfield.

## Page, top to bottom

1. **Hero**: full viewport, `#181A18`. Headline "Your notes, connected / to
   everything you know". Line: "Runs locally on your Mac • Works offline".
   One yellow button: Download for macOS.
2. **Capture**: "Drop it in, it files itself." Inbox and Meetings. Inbox
   screenshot, Meetings as a second image.
3. **Sources**: "It learns what you know." A folder of Markdown, PDFs and
   images, browsed in Tree, List or Grid, written in a live editor. Sources
   screenshot.
4. **Ask**: "Answers from your own notes." Every answer cites the note it came
   from; ask by voice too. Ask screenshot with a cited answer and the passage
   panel open.
5. **Powered by**: "Local by default. Search, embeddings and answers run on
   your Mac with Ollama and work offline. Already pay for Claude or ChatGPT?
   Connect your subscription through Claude Code or Codex and Ask uses it
   instead."
6. **Install**: the DMG only. "Free download for Apple silicon Macs · macOS 15
   or later." Signed and notarized.
7. **FAQ**, six questions:
   - Does it work offline?
   - Can I use my Claude or ChatGPT subscription? The answer states that with
     Claude or Codex, the cited excerpts go to that provider.
   - What files does it read?
   - What Mac do I need?
   - Can I use my existing Obsidian vault?
   - Is the app signed?
8. **Final CTA**: "Get Second Brain for your Mac" plus Download.
9. **Footer**: page anchors, "Built by LCube Studios" linking
   https://www.lcubestudios.io/, and "© 2026 LCube Studios LLC. All rights
   reserved." No contact email.

The site repo's own `LICENSE` (MIT) covers the site source, not the app, and is
out of scope.

## Done

- `yarn lint` and `yarn build` pass, and the static export renders.
- No link on the page points at github.com.
- The download link returns 200 to an anonymous `curl -I` after the DMG is on
  the volume, and the site deploys from main through the Coolify webhook.
- Luis looks at the live page.

## Rollback

Revert the merge commit on main; Coolify redeploys on push.
