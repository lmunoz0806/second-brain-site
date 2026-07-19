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

1. Coolify → New Resource → this GitHub repo, branch `main`.
2. Build Pack: **Dockerfile** (not nixpacks).
3. Ports Exposed: **80**. No environment variables needed.
4. Attach the domain + Let's Encrypt, enable auto-deploy on push.
5. Health check: `GET /` expecting `200`.

When the final domain is decided, update `siteUrl` in `lib/content.ts` (it feeds `metadataBase` and the OG URLs) and redeploy.

## License

MIT
