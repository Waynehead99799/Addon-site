# Addon Web Solutions — Company Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3010.

## Production build

```bash
npm run build
npm start
```

`npm start` uses the default Next.js port (3000) so it matches Vercel / serverless hosting conventions.

## Structure

- `app/` — routes, layout, global CSS
- `components/` — page sections (Nav, Hero, Logos, Services, Stats, CaseStudies, AboutTeaser, Process, Testimonials, CTA, Footer) plus floating widgets (CursorGlow, ThemeToggle, WhatsAppButton)
- `app/about/` — full About page
- Internal design previews (disallowed in `robots.txt`, `noindex` in metadata):
  - `app/theme-preview/` — light-theme background palette options
  - `app/carousel-preview/` — ticker-band style options
  - `app/wordmark-preview/` — logo lockup variations

## Deploying to Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. Go to https://vercel.com/new, pick the repo, and import.
3. Vercel auto-detects Next.js — no configuration changes required. Defaults:
   - **Framework preset:** Next.js
   - **Build command:** `next build`
   - **Output directory:** `.next`
   - **Install command:** `npm install`
4. Click **Deploy**. First build takes ~1–2 min. Subsequent deploys are incremental.

### Custom domain

After deploy, in the project's Vercel dashboard → **Settings → Domains** → add your domain (e.g. `addonwebsolutions.com`). Vercel shows the DNS records to set at your registrar (A record for apex, CNAME `cname.vercel-dns.com` for `www`).

### Environment variables

None required for the current site. If you add any (analytics, form backends, CMS keys), put them in Vercel's **Settings → Environment Variables** — they're read from `process.env` at build and runtime.

### Things to verify before shipping to prod

- **WhatsApp number** in [components/WhatsAppButton.tsx](components/WhatsAppButton.tsx) (`WHATSAPP_NUMBER` + `DEFAULT_MESSAGE`) — currently set to 91 9879003017.
- **Footer email** in [components/Footer.tsx](components/Footer.tsx) (`hello@addonweb.com` placeholder).
- **Nav "About" link** in [components/data.ts](components/data.ts) points to `/about`.
- **Metadata** in [app/layout.tsx](app/layout.tsx) — title/description.
- **Favicon / social OG image** — add to `public/` if desired (not present by default).

## Screenshot utilities

- `node screenshot.mjs http://localhost:3010/ screenshots` — captures each top-level `<section>` in both dark and light themes.
- `node nav-shots.mjs` — captures the nav at 7 viewport widths.

If section order changes in [app/page.tsx](app/page.tsx), update the `specs` array in `screenshot.mjs` — it targets `section:nth-of-type(n)` by index.
