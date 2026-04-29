---
name: addon-design-system
description: Follow Addon Web Solutions' editorial dark-theme design system when adding any UI, page, or section. Trigger on any UI / styling / page / section / template work in this repo — services, addonai, industries, case studies, blog, hire, why-us, contact, or new routes. Also trigger when the user mentions "consistent", "match home page", "add a section", "new page", "design", "styling", "rhythm", "spacing", "headline", "CTA", "Reveal", "framer-motion", "border", or "match the home". Reference [design.md](design.md) for the canonical token table.
---

# Addon Web Solutions — Design System Skill

This site has a strong editorial design language. The home page is the source of truth. Every inner page must inherit these conventions or it will feel off-brand within seconds. Use this skill any time you add or modify a page, section, or component.

## Step 1 — read [design.md](design.md) first

[design.md](design.md) is the authoritative token table. Open it once at the start of UI work and refer back. This skill is the *operational* layer on top of those tokens — what to do, in what order, with what defaults.

If something below conflicts with design.md, design.md wins.

### Companion skills

This skill works with two siblings — load all three:

- [.claude/skills/ui-primitives/SKILL.md](.claude/skills/ui-primitives/SKILL.md) — **use the primitives in [components/ui/](components/ui/) instead of writing inline class strings.** `Section`, `SectionHeader`, `Headline`, `StatNumeric`, `Tag`, `Card`, `Button`. Always reach for those before authoring any styling.
- [.claude/skills/mobile-responsive/SKILL.md](.claude/skills/mobile-responsive/SKILL.md) — every feature must pass the mobile checklist before it's done.

In any conflict, the primitives win over inline classes; the mobile rules win over desktop layout choices.

### The "box rule"

Every rectangular surface on the site — service tile, case-study card, feature panel, industry card, blog row, anything that reads as a *tile* — is **one component**: `<Card variant="accent">` from [components/ui/Card.tsx](components/ui/Card.tsx). The hover affordance, accent border, animated radial overlay, icon well, tag chip, stack chips, and arrow are all built in. The reference implementation is [components/Services.tsx](components/Services.tsx) — bento grid with one hero card + five satellites. Use that pattern for any new tile grid. **Never** hand-roll `border border-white/10 bg-white/[0.02] rounded-2xl p-6 …`. That's `<Card>` already.

---

## Step 2 — the non-negotiables

These are the load-bearing patterns. Skip any of them and the page reads wrong.

### A. Section skeleton

Every body section follows this exact wrapper:

```tsx
<section className="relative py-20 md:py-28 border-t border-white/5">
  <div className="max-w-7xl mx-auto px-6">
    {/* 12-col grid with 3/9 split */}
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
    {/* body */}
  </div>
</section>
```

Rules:
- `border-t border-white/5` for section breaks. `border-white/10` only for *inner row dividers* inside the section.
- `py-20 md:py-28` for vertical padding. Don't substitute Tailwind's `py-24` or arbitrary values.
- `max-w-7xl mx-auto px-6` for the outer wrapper.
- 3/9 split: left column for eyebrow + serif-italic kicker, right column for the display headline + body.
- Eyebrow is numbered (`NN / …`) and incremented in document order.
- Display headline always: `font-semibold tracking-[-0.02em] leading-[1.02]` + the split italic accent.

### B. Headline pattern — non-negotiable

Every display headline ends with a serif-italic accent word, optionally followed by a period.

```tsx
<h2>Headline <span className="serif-italic font-normal text-white/70">accent</span>.</h2>
```

For two-line headlines, italicize the second line:

```tsx
<h2>Six shipped products,<br />
  <span className="serif-italic font-normal text-white/70">six worlds</span>.</h2>
```

The negative letter-spacing `tracking-[-0.02em]` is load-bearing. Don't drop below.

### C. Display numerics ("150+", "01", etc.)

```tsx
<div className="text-[120px] md:text-[180px] lg:text-[220px]
                font-semibold tracking-[-0.05em] leading-[0.85]
                num-grad">
  150+
</div>
```

`.num-grad` is a rose-gold metallic gradient defined in [globals.css](app/globals.css). Tracking `-0.05em` is non-negotiable.

For smaller stats use `text-[44px] md:text-[56px]` + `tracking-[-0.03em]` + `num-grad`.

### D. Scroll entrance animations

There are **two** sanctioned patterns. Use the one whose ergonomics fit.

**Pattern 1 — `Reveal` wrapper** (default):
```tsx
import { Reveal } from "@/components/Reveal";

<Reveal y={20} delay={i * 60}>
  <h2>…</h2>
</Reveal>
```
- Default duration 550ms, easing baked in
- Use this for staggered lists, simple fade-up

**Pattern 2 — `motion.div` with `whileInView`** (richer):
```tsx
import { motion, useReducedMotion } from "framer-motion";

const reduced = useReducedMotion();
const itemVariants = {
  hidden: { opacity: 0, y: reduced ? 0 : 36, scale: reduced ? 1 : 0.985 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "0px 0px -120px 0px" }}
  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
>
  {items.map(it => (
    <motion.div
      key={it.id}
      variants={itemVariants}
      transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
    >…</motion.div>
  ))}
</motion.div>
```
- Use for card grids, hero entrances, anything needing parallax later
- Always honour `useReducedMotion()`

Don't write hand-rolled `useEffect + IntersectionObserver` entrances. There are exactly two patterns, pick one.

### E. CTA closing block

Every page ends with `<CTA />` from [components/CTA.tsx](components/CTA.tsx). It's the canonical "Let's build / something worth shipping" block — full editorial headline, 2-col contact form, offices/email/expectations sidebar. Don't recreate, don't substitute, don't replace with a custom button.

```tsx
import CTA from "@/components/CTA";
…
<CTA />
```

### F. Page shell

Every route uses `PageShell` so Nav, CursorGlow, ThemeToggle, WhatsAppButton, and Footer are present and consistent.

```tsx
import PageShell from "@/components/templates/PageShell";

return <PageShell>{/* sections */}</PageShell>;
```

### G. Hero pattern (page top)

Inner pages use `PageHero`:
```tsx
<PageHero
  eyebrow="Services / Cloud-native"
  title="Cloud Services"
  italicWord="Services"  // optional — defaults to last word
  subtitle="One-line description."
  crumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Cloud Services", href: "/services/cloud-services" },
  ]}
/>
```

Don't write a custom hero per route. If `PageHero` lacks an option, extend `PageHero` itself, don't fork.

### H. Listing pages (hubs)

Hubs (`/services`, `/industries`, `/case-studies`, `/blog`) use `IndexList`:
```tsx
<IndexList
  eyebrow="01 / Industries"
  kicker="Where we work."
  title="Twelve industries, one operating method."
  italicWord="one operating method."
  rows={data.map(d => ({
    href: `/industries/${d.slug}`,
    title: d.title,
    desc: d.subtitle,
    tags: d.techStack?.slice(0, 3),
    meta: d.eyebrow,
  }))}
/>
```

Hover state for rows is provided by `.index-row` — don't reinvent.

---

## Step 3 — the colour rule

Use Tailwind `white/NN` opacity utilities (e.g. `text-white/65`, `bg-white/5`, `border-white/10`). They are auto-rewritten to ink-on-paper under `html[data-theme="light"]` in [globals.css](app/globals.css). Don't write `rgba(255,255,255,X)` inline — it won't flip on light theme.

For brand colours always use the CSS variables: `var(--accent)`, `var(--accent-2)`, `var(--g1/g2/g3)`. Never hex-code a brand colour in component CSS.

---

## Step 4 — when adding a new page

1. Create `app/<route>/page.tsx`
2. Wrap in `<PageShell>`
3. Top: `<PageHero ... />`
4. Body sections: each one a `<section>` following the skeleton above
5. Bottom: `<CTA />`
6. If it's a hub with multiple items, use `<IndexList />` instead of a custom card grid
7. If it's a detail page (service / industry / case-study / article), use the matching template in [components/templates/](components/templates/)

The matrix:

| Route shape | Template |
|---|---|
| `/<section>` (hub) | `IndexList` |
| `/services/[slug]` | `ServiceDetail` |
| `/addonai/[slug]` | `ServiceDetail` |
| `/industries/[slug]` | `IndustryDetail` |
| `/case-studies/[slug]` | `CaseStudyDetail` |
| `/blog/[slug]` | `ArticleDetail` |
| Bespoke route | Inline sections, but every section follows the skeleton |

---

## Step 5 — when adding new content

Content lives in two files:
- [components/data.ts](components/data.ts) — home-page section copy and the home `CASE_STUDIES` carousel
- [components/pagesData.ts](components/pagesData.ts) — typed content for inner detail routes (`SERVICES_DATA`, `AI_SERVICES`, `INDUSTRIES`, `CASE_STUDIES_DATA`, `ARTICLES`)

Edit copy there, not in JSX. Slugs in `pagesData.ts` map 1:1 to URL segments.

---

## Step 6 — case-study screenshots

Project screenshots live under `public/case-studies/<slug>/`:

```
public/case-studies/<slug>/
├── web-1.png       (1200×750 recommended)
├── web-2.png
├── mobile-1.png    (portrait, ~768×1664)
└── …
```

Reference them in JSX as `/case-studies/<slug>/web-1.png`. Use plain `<img>` with `loading="lazy"`, not `next/image` (saves the remotePatterns config dance).

---

## Step 7 — verification before declaring done

After any UI change:

1. Run `npx tsc --noEmit` — must pass with no output.
2. Run `npm run build` if you changed routing or data shape.
3. If you added a new section: confirm it follows the skeleton in §A.
4. If you touched a hero: confirm `PageHero` is still used or extended (not forked).
5. If you touched a closing CTA: confirm `<CTA />` is still the only thing there.
6. Ensure no inline `rgba(255,255,255,X)` was added — use `text-white/NN` instead.
7. Ensure no new `cubic-bezier()` curves snuck in — use `[0.2, 0.8, 0.2, 1]`.

If running `npm run dev`, port is `3010` (per [CLAUDE.md](CLAUDE.md)).

---

## Step 8 — do / don't quick reference

**Do**
- Reuse `PageShell`, `PageHero`, `CTA`, `IndexList`, the four detail templates.
- Open every section with `border-t border-white/5` and `py-20 md:py-28`.
- Split every display headline with a serif-italic accent.
- Use `Reveal` or `motion.div + whileInView` for entrances.
- Edit copy in `data.ts` / `pagesData.ts`.
- Save brand colours to CSS variables; reference via `var(--…)`.
- Honour `useReducedMotion()` in any `motion.div` you author.

**Don't**
- Don't add new gradients, keyframes, or hex colours outside [globals.css](app/globals.css).
- Don't substitute `<button>` for the home `<CTA />` block.
- Don't write `cursor: none` or custom-cursor follower components — performance regressions documented in conversation history.
- Don't fork `PageHero` per route. Extend it.
- Don't drop `tracking-[-0.02em]` on display type or `tracking-[-0.05em]` on `.num-grad` numerics.
- Don't use `rgba(255,255,255,X)` directly — use `text-white/NN` so the light theme flip works.
- Don't write per-section bespoke CSS. If you need it twice, add it to [globals.css](app/globals.css) and document it in [design.md](design.md).
- Don't import from `pagesData.ts` into client components unless necessary — it bundles ~30 KB to the client. `Nav.tsx` is currently the one exception (acknowledged trade-off).

---

## Step 9 — file index for fast lookup

| Need to … | Open … |
|---|---|
| Tokens, gradients, animations | [app/globals.css](app/globals.css) |
| Token table, type scale, do/don't | [design.md](design.md) |
| Add a route | [app/](app/) — copy an existing one |
| Edit hub copy | [components/data.ts](components/data.ts) |
| Edit detail-page copy | [components/pagesData.ts](components/pagesData.ts) |
| New icon glyph | [components/icons.tsx](components/icons.tsx) (core) or [components/featureIcons.tsx](components/featureIcons.tsx) (extended) |
| Page shell / hero / CTA / list | [components/templates/](components/templates/) |
| Scroll entrance wrapper | [components/Reveal.tsx](components/Reveal.tsx) |
| Home-page CTA (used everywhere) | [components/CTA.tsx](components/CTA.tsx) |

When in doubt: open [design.md](design.md), find the closest existing pattern, copy it. Don't invent.
