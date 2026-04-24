# Addon Web Solutions — Design System

A reference for the visual language of this site. Touch these primitives first, then reach for ad-hoc CSS. Every token here is already wired up in [app/globals.css](app/globals.css); this doc names the pattern and shows how to apply it.

> **Rule of thumb** — if you're about to write a new gradient, keyframe, or colour, check this file first. If you need a new one, add it here at the same time you add it to CSS.

---

## 1. Colour tokens

All colour is driven by CSS variables on `:root` and overridden under `html[data-theme="light"]`. Never hard-code hex codes in components — use the variable or a Tailwind utility that maps to it.

### Dark theme (default)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0E0B0A` | Page background |
| `--ink` | `#F5EFE6` | Primary text / headings |
| `--ink-dim` | `#B8B0A2` | Labels, wordmark caps |
| `--accent` | `#5dd5ab` (shamrock-400) | Italic accent word, status dots |
| `--accent-2` | `#3ec170` (emerald-500) | Gradient companion |
| `--g1 / g2 / g3` | azure → teal → shamrock | Brand gradient stops |
| `--brand-azure` | `#2877d7` | |
| `--brand-teal` | `#2dbcd2` | |
| `--brand-shamrock` | `#34cb96` | |
| `--brand-emerald` | `#3ec170` | |

### Light theme

Tokens switch but names stay. `--bg` becomes a **sky wash** (`#E4EDF3 → #D2DFE8`) and `--ink` flips to `#0B1218`. Saturated brand colours become deepened variants (`--brand-*-deep`) so they read on cream paper:

| Token | Value |
|---|---|
| `--bg` | `#E4EDF3` |
| `--bg-alt` | `#D2DFE8` |
| `--paper` | `#F0F5F9` |
| `--ink` | `#0B1218` |
| `--ink-dim` | `#4A5660` |
| `--hairline` | `rgba(11,18,24,0.10)` |
| `--brand-azure-deep` | `#1F5FAE` |
| `--brand-teal-deep` | `#1E8FA2` |
| `--brand-green-deep` | `#1EA874` |

### Tailwind `white/XX` → ink mapping

Under light theme, `text-white/60`, `bg-white/10`, `border-white/10` etc. are rewritten to use ink at matching opacity. **Keep using the Tailwind class** — the light-theme CSS flips it automatically. Don't write theme-branching inline styles.

### Palette usage rules

- **One accent per screen.** `--accent` owns the italic accent word in each section headline. Don't spray it across small UI.
- **Brand gradient (`g1/g2/g3`)** is reserved for: primary CTAs, nav CTA, logo, hero sweep, numeric stat headlines (`headline-grad`). Not for borders, backgrounds of large surfaces, or body text.
- **Hairlines** — divider lines use `border-white/10` (dark) / `border-white/5` at section breaks. Never `rgba(255,255,255,0.2)` by hand.

---

## 2. Typography

Three families, loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx):

| Family | CSS variable | Usage |
|---|---|---|
| **Inter** | `--font-geist-sans` *(historical name)* | All body, headlines, UI |
| **JetBrains Mono** | `--font-geist-mono` *(historical name)* | `.eyebrow`, tech tags, timestamps, nav meta |
| **Fraunces / Instrument Serif** | `--font-instrument-serif` | `.serif-italic`, `.serif` — editorial accents only |

> The `geistSans / geistMono` names are historical from an earlier design. Don't rename — [tsconfig.json](tsconfig.json) and CSS both reference them.

### Editorial "split headline" pattern

Every display headline follows the same rhythm: one sans word followed by one italic word, optionally closed with a period. This is the single strongest visual signature of the brand — use it on every page hero and section header.

```tsx
<h1 className="font-semibold tracking-[-0.02em] leading-[0.95] text-[56px] md:text-[96px]">
  <span className="block">Software</span>
  <span className="block">
    <span className="serif-italic font-normal" style={{ color: "var(--accent)" }}>that</span>{" "}
    <span className="headline-sweep">thinks.</span>
  </span>
</h1>
```

### Type scale (display → small)

Always pair `font-semibold` + `tracking-[-0.02em]` + `leading-[0.95-1.05]` on display type. The negative tracking is load-bearing — don't drop it.

| Role | Classes |
|---|---|
| Hero display | `text-[56px] sm:text-[76px] md:text-[96px] lg:text-[112px]` |
| Section headline | `text-[40px] md:text-[56px] lg:text-[68px]` |
| Sub-section | `text-[32px] md:text-[44px] lg:text-[52px]` |
| Card / row title | `text-[22px] md:text-[24px]` |
| Body large | `text-[16px] md:text-[18px]` `leading-[1.55]` |
| Body | `text-[14px] md:text-[15px]` `leading-relaxed` |
| Meta / eyebrow | `.eyebrow` — 11px mono, 0.22em tracking, uppercase |

### Utility classes

- `.serif-italic` — Fraunces italic 500, `-0.005em` tracking. Used for the accent word.
- `.serif` — Fraunces 400 regular. Rare; only the footer colophon uses it.
- `.eyebrow` — JetBrains Mono 11px, `0.22em` tracking, uppercase, `white/45` dim. Pairs with every section header.
- `.headline-sweep` — animated brand-gradient sweep across the italic tail word. Use sparingly (hero only).
- `.headline-grad` — static ink → accent → accent-2 vertical gradient. Use on large numeric stats and case-study result values.
- `.num-grad` — ink → 20% ink vertical fade. Used on process numerals (`01`, `02`…) in [components/Process.tsx](components/Process.tsx).

---

## 3. Gradients

Defined once in [globals.css](app/globals.css) lines 501-503. **Never redefine inline.**

| Class | Direction | Stops | Use |
|---|---|---|---|
| `.accent-grad` | 135° | `g1 → g2 → g3` | CTA arrow pills, logo wordmark chip, gradient dots |
| `.accent-text` | 135° | `g1 → g2 → g3` (clipped to text) | Inline accent text — currently unused, reserved |
| `.headline-grad` | 180° | `ink → ink → accent → accent-2` | Large numeric stats |
| `.headline-sweep` | 90° | sweep across cream text (dark) / ink-brand-ink (light) with animation | Hero italic tail word |

### Rules

1. **One gradient per component.** Don't stack `.accent-grad` inside `.headline-grad` inside a card with a gradient border. Pick one.
2. **Brand gradient direction is always 135°.** Don't rotate it.
3. **Gradient surfaces are small.** Buttons, chips, icon wells, and text clips. Not card backgrounds, not full sections.
4. **The hero-CTA hover pattern is canonical** — white/ink base pill that crossfades to full brand gradient on hover ([globals.css:223](app/globals.css#L223)). Reuse `.hero-cta-pill` structure if you need another "fill-on-hover" button.

---

## 4. Surfaces — glass, hairlines, noise

### Glass chrome

Two variants, both with `backdrop-blur`. Use on floating surfaces (nav, modals, FAB, dropdowns).

```css
.glass       /* rgba(20,16,14,0.5)  · blur 16px · 1px hairline */
.glass-lite  /* rgba(245,239,230,0.02) · blur 12px · 1px hairline */
```

In light theme both flip to `rgba(250,253,255,0.78)` with inset white highlight + soft ink shadow.

### Scrolled nav state

`.nav-scrolled` ([globals.css:602](app/globals.css#L602)) layers inset highlight + soft outer shadow + cyan/green outer glow ring. Applied by [components/Nav.tsx](components/Nav.tsx) once `scrollY > 20`.

### Hairlines

- `border-white/5` → section breaks
- `border-white/10` → intra-section rows, card borders, index-list rows
- `border-white/20` → hover-brighter state (rare)
- Never use black/pure-white borders.

### Noise + grain

- `.noise` — SVG turbulence at 8% alpha. Apply at hero level at `opacity-[0.3]`. In light theme opacity drops to 5% and blends `multiply`.
- `.grid-bg` — 56px × 56px faint grid. Use on sections that need subtle technical texture.

### Paper shadows (light theme only)

- `--shadow-card` — 1 + 12 + 40px, 5–9% ink — cards at rest
- `--shadow-elev` — 1 + 18 + 60px, 6–14% ink — elevated surfaces on hover

---

## 5. Motion

All easing comes from a small set of curves. Pick the one that matches the intent.

| Curve | Usage |
|---|---|
| `cubic-bezier(.2, .8, .2, 1)` | Almost everything — lift, pill hover, card translate |
| `cubic-bezier(.25, .6, .25, 1)` | Logo power-up, headline sweep |
| `cubic-bezier(.22, .8, .28, 1)` | Wave-rise, long-form entrances |
| `linear` | Marquees only |
| `ease-in-out` | Ambient loops (breathe, aurora) |

### Standard durations

| Intent | Duration |
|---|---|
| Hover lift / colour shift | **300ms** |
| Pill crossfade / reveal | **350–400ms** |
| Scroll-reveal entrance | **550ms** (see `Reveal` default) |
| Ambient breathe / pulse | **2.4–3.2s** |
| Headline sweep | **2200ms in, 9s loop** |

### Keyframes catalogue

All in [globals.css](app/globals.css):

| Animation | Where it lives | Purpose |
|---|---|---|
| `flow-fade-in` | `.flow-enter` on hero FlowField canvas | Canvas fades in on mount |
| `wave-rise-in` / `wave-breathe` | `.wave-enter` on WaveMesh | Rise + ambient breathe |
| `headline-sweep-in` / `headline-sweep-loop` | `.headline-sweep` | Gradient wash on hero tail word |
| `cta-breathe` | `.cta-pulse::before` | Ambient halo on primary CTA |
| `nav-cta-shimmer` | `.nav-cta:hover` | Gradient shift on nav button hover |
| `whatsapp-pulse` | `.whatsapp-fab-pulse` | Online ring |
| `logo-power-up` + `logo-glow` + `logo-ambient` | `.logo-mount` | Nav logo mount sequence |
| `ft-drift-1/2/3` | `.ft-float-1/2/3` | Floating triangle drift |
| `scroll-x` | `.ticker` | Marquee (40s linear) |
| `pulse` | `.dot-pulse::after` | Status dot |

### Reveal pattern

Every scroll-triggered entrance uses [components/Reveal.tsx](components/Reveal.tsx) — an `IntersectionObserver` wrapper with configurable `y` (translate), `scale`, `duration`, `delay`. Defaults: `y=28`, `duration=550ms`, `once=true`.

```tsx
<Reveal delay={80} y={20}>
  <h2>…</h2>
</Reveal>
```

Stagger via `delay={i * 60}` inside `.map`. Don't hand-roll entrance animations in components.

### Reduced motion

`@media (prefers-reduced-motion: reduce)` disables the WhatsApp FAB pulse. Apply the same pattern when adding infinite-loop ambient motion.

---

## 6. Hover effects (canonical recipes)

### Index row (services, listings)

The whole row is the target — not just the title. Single background tint + arrow translate.

```css
.index-row          /* transition background .25s, padding .25s */
.index-row:hover    /* background rgba(245,239,230,0.025) */
.index-row:hover .index-arrow  /* translate(4px,-4px); opacity 1 */
```

Applied in [components/Services.tsx](components/Services.tsx), [components/templates/IndexList.tsx](components/templates/IndexList.tsx).

### Card hover

Lift + border brighten. Never add shadow in dark theme (flat editorial).

```css
.card-hover               /* transition transform .4s, border .3s */
.card-hover:hover         /* translateY(-4px); border rgba(75,163,227,0.35) */
```

Light theme adds `var(--shadow-card)`.

### Manifesto card (top-bordered)

Slightly richer lift than `.card-hover` — used where the card is the primary affordance.

```css
.manifesto-card:hover {
  transform: translateY(-3px);
  border-color: rgba(75,163,227,0.45);
  background: rgba(245,239,230,0.02);
  box-shadow: 0 10px 40px rgba(75,163,227,0.08);
}
```

### Button arrows

Every CTA arrow glyph uses `.btn-arrow` inside a `.group`:

```css
.btn-arrow                      /* transition transform .3s */
.group:hover .btn-arrow         /* translateX(4px) */
```

### CTA "fill-on-hover" pill

Reuse `.hero-cta-pill` structure (a white/ink pill with an absolutely-positioned gradient `::before` that crossfades to `opacity: 1` on parent hover). This is the **only** way to make a primary fill-on-hover button in this system.

### Nav link underline

Not currently implemented — nav uses tint + background shift on `hover:bg-white/5 hover:text-white`. Keep it that way.

---

## 7. Layout

### Max widths

| Token | Width | Use |
|---|---|---|
| `max-w-7xl` | 1280px | Every section wrapper |
| `max-w-6xl` | 1152px | Reserved; currently unused |
| `max-w-5xl` | 1024px | Hero display block |
| `max-w-4xl` | 896px | Prose/content-heavy areas, case-study overview |
| `max-w-3xl` | 768px | Article bodies ([blog/[slug]](app/blog/[slug]/page.tsx)) |

Apply via `max-w-7xl mx-auto px-6` on the outer wrapper of every section.

### 12-column grid

Every two-column section layout uses Tailwind `grid grid-cols-12 gap-6 md:gap-10` with a **3/9 split**: a left margin of `col-span-12 md:col-span-3` for eyebrow + kicker, and a right body of `col-span-12 md:col-span-9` for headline + content. This is the editorial spine of the site — see [components/Services.tsx](components/Services.tsx), [components/Process.tsx](components/Process.tsx), [components/about/AboutValues.tsx](components/about/AboutValues.tsx).

```tsx
<div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-14">
  <div className="col-span-12 md:col-span-3">
    <div className="eyebrow">01 / Services</div>
    <div className="mt-3 serif-italic text-white/55 text-[15px]">The shortlist.</div>
  </div>
  <div className="col-span-12 md:col-span-9">
    <h2>…</h2>
  </div>
</div>
```

Don't break this rhythm. Sections that don't follow the 3/9 split feel off-brand within 30 seconds.

### Section rhythm

Every section has:
- `border-t border-white/5` on top (except hero)
- `py-20 md:py-28` vertical padding
- Eyebrow numbered `01 / …` through `07 / …` in order

### Spacing

Always use the Tailwind scale. Don't pass arbitrary px values for margins/paddings unless it's display type (headlines) or a pixel-perfect UI detail.

---

## 8. Icons

Two inline SVG libraries:

- [components/icons.tsx](components/icons.tsx) — core `Icon` set (~20 glyphs): `Arrow`, `ArrowUpRight`, `Zap`, `Menu`, `X`, `Sun`, `Moon`, `Play`, `Check`, `Bot`, `Cpu`, `Globe`, `Smartphone`, `Lightbulb`, `Star`, `Quote`. Import by `Icon.Name`.
- [components/featureIcons.tsx](components/featureIcons.tsx) — 60+ secondary glyphs looked up by string key via `getFeatureIcon(name)`. Data files reference icons by string (`icon: "Database"`) so they can be authored in plain JSON-like TS.

### Rules

- **Stroke-width 1.6** for secondary, **1.7–2.0** for primary (arrows, check).
- **Always** `strokeLinecap="round"` + `strokeLinejoin="round"`.
- 24-unit viewBox. Size via `width`/`height` props.
- Never hex-fill icons — use `currentColor` so theme inheritance works.
- Icon containers are `w-10 h-10` to `w-14 h-14` squares with `rounded-xl` or `rounded-2xl`, class `glass-lite` for default, or theme-tinted `bg-{brand}-50` in feature grids.

---

## 9. Component patterns

### Section template

Every body section follows this skeleton:

```tsx
<section className="relative py-20 md:py-28 border-t border-white/5">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-14">
      <div className="col-span-12 md:col-span-3">
        <div className="eyebrow">NN / Section name</div>
        <div className="mt-3 serif-italic text-white/55 text-[15px]">Kicker.</div>
      </div>
      <div className="col-span-12 md:col-span-9">
        <h2 className="text-[40px] md:text-[56px] lg:text-[68px] font-semibold tracking-[-0.02em] leading-[1.02]">
          Headline <span className="serif-italic font-normal text-white/70">accent</span>.
        </h2>
      </div>
    </div>
    {/* body — editorial dividers, 12-col subgrid, or full-width block */}
  </div>
</section>
```

### Hero

Full-viewport `min-h-[100svh] flex flex-col`. Three stacked absolute background layers (z-0 wash + vignette, z-1 `FlowField` particles, z-2 noise), content at `z-20`, ticker pinned at the foot via the flex column. See [components/Hero.tsx](components/Hero.tsx).

### Page templates

For new routes, reach for the templates in [components/templates/](components/templates/):
- `PageShell` — wraps Nav + Footer + CursorGlow + ThemeToggle + WhatsAppButton
- `PageHero` — standard top hero with optional breadcrumbs
- `ServiceDetail` / `IndustryDetail` / `CaseStudyDetail` / `ArticleDetail`
- `IndexList` — 12-column editorial row list (used for `/services`, `/industries`, `/case-studies`, `/blog` hubs)
- `PageCTA` — final call-to-action block

Don't build a new page layout from scratch — extend one of these.

---

## 10. Theme handling

### HTML attribute

The root `<html>` has `data-theme="dark" | "light"`. Set in [app/layout.tsx](app/layout.tsx) via an inline script that reads `localStorage.theme` then falls back to `prefers-color-scheme`. Never toggle theme from within React state — it desyncs on navigation.

### CSS pattern

All light-theme overrides live under `html[data-theme="light"] .selector { … }` in [globals.css](app/globals.css). When adding a new component:

1. Author dark theme first.
2. Add a light-theme override block directly underneath if colours/shadows don't read on paper.
3. Test both themes before shipping.

### Theme toggle

`<ThemeToggle />` ([components/ThemeToggle.tsx](components/ThemeToggle.tsx)) is a floating FAB. Writes `localStorage.theme` and flips the `data-theme` attribute. Don't add a second toggle anywhere else.

---

## 11. Do / Don't

**Do**
- Reuse the 3/9 editorial grid in every section.
- Split headlines with a `serif-italic` accent word.
- Use `Reveal` for every scroll entrance.
- Use the `card-hover` / `index-row` / `manifesto-card` hover recipes.
- Keep brand gradient usage sparing and at 135°.
- Write the dark theme first, then layer light overrides.

**Don't**
- Don't add new gradients, keyframes, or colour hexes outside `globals.css`.
- Don't use raw `rgba(255,255,255,X)` — use the Tailwind `white/NN` utilities so the light theme mapping works.
- Don't mix multiple bright accents in one section.
- Don't rename the historical font variables (`--font-geist-sans` / `--font-geist-mono`). They are Inter and JetBrains Mono despite the names.
- Don't create new page layouts; extend the templates in [components/templates/](components/templates/).
- Don't put ambient animations (breathe/sweep/float) on interactive elements — they fight hover state.

---

## 12. File index

| File | What it defines |
|---|---|
| [app/globals.css](app/globals.css) | All tokens, keyframes, utilities, theme overrides |
| [app/layout.tsx](app/layout.tsx) | Font registration, theme-init script |
| [components/data.ts](components/data.ts) | `NAV`, `SERVICES`, `STATS`, `CASE_STUDIES`, `PROCESS`, `TESTIMONIALS` |
| [components/pagesData.ts](components/pagesData.ts) | Typed content for service / industry / case-study / blog detail pages |
| [components/icons.tsx](components/icons.tsx) | Core icon set |
| [components/featureIcons.tsx](components/featureIcons.tsx) | Secondary icon lookup by string key |
| [components/Reveal.tsx](components/Reveal.tsx) | Scroll-triggered entrance wrapper |
| [components/templates/](components/templates/) | Reusable page templates |

Keep this file updated when you add a primitive or change a convention. A design system that isn't written down isn't a system.
