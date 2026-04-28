# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Next.js dev server on port **3010** (http://localhost:3010)
- `npm run build` — production build
- `npm run start` — serve production build (default Next.js port **3000**, not 3010 — matches Vercel conventions)
- `npm run lint` — Next.js ESLint

Screenshot utilities (require a running dev server; pass the URL as the first arg):
- `node screenshot.mjs http://localhost:3010/ screenshots` — captures each top-level `<section>` in **both `dark` and `light` themes** (written to `screenshots/dark/` and `screenshots/light/`), plus full-page desktop and mobile shots. The script forces theme by setting `localStorage.theme` and `data-theme` on `<html>` before navigation.
- `node nav-shots.mjs` — captures the Nav at 7 viewport widths (URL hardcoded to `localhost:3333`; edit the file for other targets).

## Architecture

Next.js 14 App Router + TypeScript + Tailwind for the Addon Web Solutions marketing site. It began as a single-page port of an earlier design handoff in `../website/` (not in this repo) and has since grown into a multi-route site.

### Page surface

The home route [app/page.tsx](app/page.tsx) composes section components in a fixed order:

`CursorGlow → Nav → Hero → Logos → Services → Stats → CaseStudies → AboutTeaser → Testimonials → CTA → Footer → ThemeToggle → WhatsAppButton`

`screenshot.mjs` selects sections by `section:nth-of-type(n)` (1–8) plus `footer`. **Reordering, inserting, or removing a `<section>` on the home page shifts those indices** — update the `specs` array in `screenshot.mjs` to match.

Inner routes under `app/`:
- `/about`, `/contact`, `/why-us`, `/hire-dedicated-developers` — bespoke pages
- `/services`, `/services/[slug]` — service index + detail
- `/industries`, `/industries/[slug]` — industry index + detail
- `/case-studies`, `/blog`, `/addonai` — index + dynamic content
- Internal design previews (excluded from indexing via `robots.txt` / `noindex`): `/theme-preview`, `/carousel-preview`, `/wordmark-preview`

Inner pages render through reusable templates in [components/templates/](components/templates/): `PageShell`, `PageHero`, `PageCTA`, `IndexList`, `ServiceDetail`, `IndustryDetail`, `ArticleDetail`, `CaseStudyDetail`.

### Content vs. presentation

- [components/data.ts](components/data.ts) — copy for home-page sections (services, stats, case studies, etc.) as typed `as const` arrays.
- [components/pagesData.ts](components/pagesData.ts) — structured content for inner routes (`AI_SERVICES`, services, industries, case studies, blog articles). Detail-page slugs come from here.
- [components/icons.tsx](components/icons.tsx) and [components/featureIcons.tsx](components/featureIcons.tsx) — inline SVG icons looked up by string id (e.g. `icon: "Truck"` in data).

Edit copy in `data.ts`/`pagesData.ts` rather than inlining strings in JSX.

### Theming

- Theme is controlled by `data-theme="light" | "dark"` on `<html>`, default `dark`.
- An inline pre-hydration script in [app/layout.tsx](app/layout.tsx) reads `localStorage.theme` (falling back to `prefers-color-scheme`) and sets `data-theme` before paint to avoid a flash. [components/ThemeToggle.tsx](components/ThemeToggle.tsx) flips the attribute and persists the choice.
- Light-theme overrides live under `html[data-theme="light"]` blocks in [app/globals.css](app/globals.css). Both themes share the same `--*` token names — adding a new token usually means defining it in both blocks.

### Styling system

- Tailwind scans `./app` and `./components` only.
- [app/globals.css](app/globals.css) defines `:root` CSS variables **twice**. The second block (steel-azure → stormy-teal → shamrock → emerald) wins for `--g1/--g2/--g3` and `--accent*`; the first block is legacy. Edit the second block for brand colors. Utility classes `.accent-grad` / `.accent-text` consume `--g1/--g2/--g3`.
- Fonts in [app/layout.tsx](app/layout.tsx) load via `next/font/google`: **Inter** (CSS var `--font-geist-sans`), **JetBrains Mono** (`--font-geist-mono`), **Spectral** (`--font-instrument-serif`). All three CSS var names are historical (the fonts behind them are Inter, JetBrains Mono, and Spectral — not Geist or Instrument Serif). Spectral is loaded at weights 400/500/600, normal + italic; `.serif-italic` in [app/globals.css](app/globals.css) uses weight 500.
- TS path alias `@/*` maps to the project root (see [tsconfig.json](tsconfig.json)).

### Client-only pieces

`CursorGlow`, `WaveMesh`, `FloatingTriangles`, `FlowField`, `Aurora`, `Reveal`, `ThemeToggle`, `WhatsAppButton`, and `ContactForm` start with `"use client"`. Keep section components server-rendered unless they genuinely need client hooks.

### Pre-launch wiring

Per [README.md](README.md), verify before pointing a real domain at this:
- `WHATSAPP_NUMBER` and `DEFAULT_MESSAGE` in [components/WhatsAppButton.tsx](components/WhatsAppButton.tsx) (currently `91 9879003017`).
- Footer email in [components/Footer.tsx](components/Footer.tsx) (placeholder `hello@addonweb.com`).
- Site metadata (title/description) in [app/layout.tsx](app/layout.tsx).
- Favicon / OG image in `public/` (none by default).
