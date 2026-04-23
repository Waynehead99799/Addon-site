# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Next.js dev server on port **3010** (http://localhost:3010)
- `npm run build` — production build
- `npm run start` — serve production build on port 3010
- `npm run lint` — Next.js ESLint

Screenshot utilities (require a running dev server; defaults target port 3333, pass your own URL):
- `node screenshot.mjs http://localhost:3010/ screenshots` — captures each top-level `<section>` plus full-page desktop + mobile shots via Playwright
- `node nav-shots.mjs` — captures the Nav at 7 viewport widths (hardcoded to `localhost:3333`)

## Architecture

This is a single-page marketing site for "Addon Web Solutions", Next.js 14 App Router + TypeScript + Tailwind. It is a port of an earlier design handoff in `../website/` (not in this repo).

The entire page is assembled in [app/page.tsx](app/page.tsx) as a fixed sequence of section components from [components/](components/):

`CursorGlow → Nav → Hero → Logos → Manifesto → Services → Stats → CaseStudies → Process → Testimonials → CTA → Footer`

The `screenshot.mjs` script relies on this order — it captures `section:nth-of-type(1..9)` by index, so **reordering or inserting sections breaks screenshot naming**. Update the `specs` array in `screenshot.mjs` when changing section order.

### Content vs. presentation

All structured copy (services, stats, case studies, etc.) lives in [components/data.ts](components/data.ts) as typed `as const` arrays. Section components import from there; edit data there rather than inlining copy in JSX.

[components/icons.tsx](components/icons.tsx) holds inline SVG icons referenced by string id from data.ts (e.g. case study `icon: "Truck"`).

### Styling system

- Tailwind scans `./app` and `./components` only.
- Design tokens live as CSS variables in [app/globals.css](app/globals.css) `:root` — note the file defines the palette **twice**, and the second block (steel-azure → teal → shamrock → emerald brand palette) wins. Edit the second block for brand colors; the first is legacy. Utility classes `.accent-grad` and `.accent-text` consume `--g1/--g2/--g3`.
- Fonts are loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx): Inter (exposed as `--font-geist-sans`), JetBrains Mono (`--font-geist-mono`), Instrument Serif (`--font-instrument-serif`). The `geistSans`/`geistMono` variable names are historical — the actual fonts are Inter/JetBrains.
- TS path alias `@/*` maps to the project root (see [tsconfig.json](tsconfig.json)).

### Client-only pieces

`CursorGlow`, `WaveMesh`, `FloatingTriangles`, and `Reveal` are interactive/animation helpers; they use `"use client"`. Keep section components server-rendered unless they genuinely need client hooks.
