# second-brain-site

Marketing landing page for [Second Brain](https://github.com/lmunoz0806/second-brain-frontend) — the local-first command center for your Markdown vault.

Static Next.js export on the LCube design system (flat black `#181A18` + single yellow `#FFCB05` accent, Helvetica Neue, hairlines instead of shadows). No backend, no analytics, one client component (the copy button).

## Develop

```bash
yarn install
yarn dev        # http://localhost:3000
yarn lint
yarn build      # emits static site to out/
yarn serve      # serve out/ on http://localhost:3999
```

All page copy lives in `lib/content.ts`. Design tokens live in `app/globals.css` (`@theme`), mirrored from the product repo's `lcube-design.md` — change them there first if the brand evolves.

The OG image is committed at `public/og.png`; regenerate after editing `scripts/og.svg`:

```bash
npx @resvg/resvg-js-cli scripts/og.svg public/og.png
```

## Deploy (Coolify)

The site ships as a static bundle served by nginx (see `Dockerfile` + `nginx.conf`).

Quick version: New Resource → this repo, branch `main` → Build Pack **Dockerfile** → port **80** → domain + Let's Encrypt → auto-deploy. No env vars.

Full walkthrough, post-deploy verification, and the `siteUrl` follow-up: **[docs/DEPLOY.md](docs/DEPLOY.md)**.

## License

MIT
