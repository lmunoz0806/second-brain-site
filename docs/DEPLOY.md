# Deploying second-brain-site to Coolify

The site is a fully static Next.js export served by nginx from a Docker image.
No backend, no database, no environment variables. Deploys are: push to
`main` → CI goes green → Coolify rebuilds the Dockerfile and swaps the
container.

## What ships

- `Dockerfile` — stage 1 builds the static export (`node:20-alpine`,
  `yarn build` → `out/`); stage 2 serves it with `nginx:1.27-alpine`.
- `nginx.conf` — port 80, `try_files` routing, Next's `404.html`, gzip,
  immutable 1-year caching for `/_next/static/`, `X-Content-Type-Options`.
- `.github/workflows/ci.yml` — lint + build + export assertion on every
  push/PR, plus a Docker build smoke test on `main`. Treat red CI as a
  blocked deploy.

## One-time Coolify setup

1. Coolify → **New Resource** → Application → Public Repository (or the
   GitHub App if installed) → `https://github.com/lmunoz0806/second-brain-site`,
   branch `main`.
2. **Build Pack: Dockerfile** — not nixpacks, not static. The Dockerfile at
   the repo root is the whole build.
3. **Ports Exposed: `80`**.
4. Domains: attach the real domain (e.g. `secondbrain.example.com`).
   Coolify provisions Let's Encrypt automatically once DNS points at the
   server (A/AAAA record → Coolify host IP).
5. Enable **Auto Deploy** so every push to `main` redeploys via webhook.
6. Health check (optional but recommended): `GET /` expecting `200`.
7. No environment variables, volumes, or secrets are needed.

## After the domain is live — required follow-up

`lib/content.ts` holds a placeholder site URL:

```ts
export const siteUrl = "https://secondbrain.lcubestudios.dev";
```

Replace it with the real domain and push. It feeds `metadataBase`, the
canonical OG/Twitter URLs, and JSON-LD. Until then, page content is correct
but social unfurls advertise the placeholder host.

Then verify:

1. `curl -sI https://<domain>/` → `200`, and
   `curl -s https://<domain>/ | grep og:image` shows the real domain.
2. Run the URL through an unfurl checker (Slack paste, or
   opengraph.xyz) — the dark 1200×630 card should render.
3. `curl -sI https://<domain>/_next/static/...` (any asset from view-source)
   → `Cache-Control: public, max-age=31536000, immutable`.

## Known dependency: the download CTA

"Download for macOS" links to
`https://github.com/lmunoz0806/second-brain-frontend/releases`. That page
currently has **no DMG asset** — the signed/notarized DMG lives on the
unmerged `feat/tauri-desktop-v1.1` branch of the product repo. The link is
correct and safe today (it lands on the releases page), but publish the DMG
asset when the desktop release ships to complete the story. No site change
is needed when that happens.

## Local verification (same artifacts as production)

```bash
yarn build && yarn serve                 # static export on :3999
docker build -t second-brain-site . \
  && docker run --rm -p 8080:80 second-brain-site   # the real image on :8080
```

## Rollback

Coolify keeps previous deployments — use **Redeploy** on the last good one.
Or `git revert` the bad commit and push; auto-deploy does the rest.
