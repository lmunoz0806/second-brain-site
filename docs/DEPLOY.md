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

## As deployed (2026-07-30)

The app exists and serves on the Coolify host. Setup below is a record, not
a to-do.

| | |
|---|---|
| App uuid | `er2h7c9rjyqjd3jqa1tfbpy5` |
| Project / server / env | `Apps` / `localhost` (coolify-prod) / `production` |
| Source | **Public GitHub** → `lmunoz0806/second-brain-site@main` |
| Build pack | **Dockerfile**, `ports_exposes=80`, ~60–90s, no OOM on 4 GB |
| Domain | `secondbrain.luismunoz.xyz` (+ the generated sslip.io host) |
| Auto deploy | GitHub push webhook `658737114` → `/webhooks/source/github/events/manual` |
| Health check | `GET /` → `200`, 30s interval |
| Env / volumes | none |

Source is the **Public GitHub** provider rather than a GitHub App, because
this repo is public and that avoids per-installation repo-scope entirely.
The tradeoff is that the push webhook is created manually (it is), instead of
Coolify managing it. Auto deploy is verified: commit `3206858` was built and
swapped with no manual trigger.

### TLS — Origin CA, not Let's Encrypt

This domain serves the **Cloudflare Origin CA wildcard** (`*.luismunoz.xyz`,
valid to 2041), not a Let's Encrypt cert. That is deliberate on the host and
worth understanding before you go chasing a "missing" LE cert:

`/data/coolify/proxy/dynamic/origin-ca.yaml` loads that wildcard into
Traefik's file-provider TLS store. When a router carries
`certresolver=letsencrypt`, Traefik first checks whether a loaded cert
already matches the SNI — the wildcard does, so **ACME is never attempted**
(no challenge appears in the proxy log at all). Only domains whose LE cert
predates 2026-07-29 (`luismunoz.xyz`, `coolify.luismunoz.xyz`,
`cryptorepair.com`) still serve exact-CN LE certs from `acme.json`.

Keep it. Cloudflare trusts its own Origin CA certs under SSL **Full
(strict)**, and the 15-year expiry removes the HTTP-01-renewal-behind-proxy
risk that `linode-infra/docs/runbooks/site-migration.md` flags. Forcing LE
would mean scoping or removing that wildcard, which changes cert fallback
for every site on the host.

### Verified on the origin

Origin checks pass over both IPv4 and IPv6 (`--resolve` pinned, `--insecure`
expected since Origin CA is not publicly trusted):

- `/` → `200` over HTTP/2; `/nope` → `404` (Next's `404.html`).
- `http://` → `302` → `https://`.
- `/_next/static/*` → `Cache-Control: public, max-age=31536000, immutable`,
  `Content-Encoding: gzip`.
- `X-Content-Type-Options: nosniff`.
- `og:url` / `og:image` emit `https://secondbrain.luismunoz.xyz`.

### Still pending: Cloudflare proxy

`A`/`AAAA` for `secondbrain` are **DNS-only (grey)**, pointing straight at
`45.79.159.8` / `2600:3c03::2000:8fff:fef4:a059`. Deliberately not flipped
to orange yet — see the pre-launch gate below. When it is time: flip both
records to proxied, confirm zone SSL mode is **Full (strict)**, then verify
`200` with a `cf-ray` header and run the URL through an unfurl checker
(Slack paste, or opengraph.xyz) for the dark 1200×630 card.

## PRE-LAUNCH GATE: every GitHub link 404s for the public

**Do not make this site public until this is resolved.** The product repo
`lmunoz0806/second-brain-frontend` is **private**, so every outbound link on
the page returns `404` to anyone who is not signed in as the owner:

```
404  .../second-brain-frontend                                  (View on GitHub)
404  .../second-brain-frontend/releases                          (Releases)
404  .../releases/download/v1.2.1/Second.Brain_1.2.1_aarch64.dmg (primary CTA)
404  .../blob/main/LICENSE                                       (MIT link)
404  .../second-brain-frontend/issues                            (Issues)
```

That kills **"Download for macOS →"**, the page's primary CTA, in both the
hero and the install section. The `git clone` in the quickstart block fails
the same way. The "MIT. Read every line." section and the claim that the code
is something you can *"audit, fork, and make yours"* are also untrue while
the repo is private.

Verify anonymously — never with `gh` or a logged-in browser, both of which
authenticate and return `200`, which is exactly how this was missed the first
time:

```bash
curl -sS -o /dev/null -w '%{http_code}\n' \
  https://github.com/lmunoz0806/second-brain-frontend/releases
```

Two ways out, both a decision rather than a fix:

1. **Make `second-brain-frontend` public.** Matches what the page already
   claims and every link starts working with no site change. Audit git
   history for committed secrets first.
2. **Keep it private** — then repoint the download CTA at a genuinely public
   artifact and rewrite the open-source / MIT / quickstart copy so the page
   stops promising a repo nobody can open.

Nothing about the deployment is implicated; this is purely repo visibility.

## Local verification (same artifacts as production)

```bash
yarn build && yarn serve                 # static export on :3999
docker build -t second-brain-site . \
  && docker run --rm -p 8080:80 second-brain-site   # the real image on :8080
```

## Rollback

Coolify keeps previous deployments — use **Redeploy** on the last good one.
Or `git revert` the bad commit and push; auto-deploy does the rest.
