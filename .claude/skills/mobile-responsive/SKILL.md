---
name: mobile-responsive
description: Make every feature, section, page, or component mobile-responsive in this Tailwind + Next.js project. Trigger on any UI work — adding sections, building cards, headlines, grids, forms, navigation, hero blocks. Also trigger when the user mentions "responsive", "mobile", "tablet", "breakpoint", "grid", "stack", "small screen", "phone", "iPad", "viewport", "scrolling on mobile", "doesn't fit", "touch", "tap target", or "looks broken on phone". This is a **non-optional** layer on top of [addon-design-system](.claude/skills/addon-design-system/SKILL.md) — every component must pass its checklist before it's done.
---

# Mobile-Responsive Skill

This site must look and feel hand-crafted on every device — phone, tablet, laptop, desktop. Mobile traffic is the default, not a fallback. Use this skill any time you author or modify a component, section, or page.

This skill rides alongside [addon-design-system](.claude/skills/addon-design-system/SKILL.md) — design system tells you *what* the look is; this tells you *how* to make it survive the smallest viewport.

---

## Step 1 — mobile-first, always

Write base classes for **mobile**, then layer up with `sm:` / `md:` / `lg:` / `xl:` modifiers. Never write desktop-first and add `max-` breakpoints to undo it.

```tsx
// ✅ Mobile-first
<h2 className="text-[36px] md:text-[56px] lg:text-[68px]">…</h2>

// ❌ Desktop-first — fragile, hard to read
<h2 className="text-[68px] max-md:text-[56px] max-sm:text-[36px]">…</h2>
```

---

## Step 2 — the breakpoint scale

Tailwind defaults, used consistently across this repo:

| Prefix | Min width | Typical device |
|---|---|---|
| (none) | 0 | Phones (portrait) |
| `sm:` | 640px | Phones (landscape), tiny tablets |
| `md:` | 768px | Tablets (portrait) |
| `lg:` | 1024px | Tablets (landscape), small laptops |
| `xl:` | 1280px | Laptops, desktops |
| `2xl:` | 1536px | Large desktops (rarely needed — stick to `max-w-7xl` instead) |

**Rule of thumb** — design at three sizes:
- **Phone** — base (320–414px)
- **Tablet** — `md:` (768–1024px)
- **Desktop** — `lg:` (1024px+)

Skip `sm:` and `xl:` unless you have a specific reason. Three breakpoints is enough; more is over-engineering.

---

## Step 3 — the canonical responsive recipes

### A. Section padding

The home / inner-page rhythm:

```tsx
<section className="py-14 md:py-20 lg:py-28">
```

Phones get tighter vertical breathing room (`py-14` ≈ 56px) so above-the-fold content doesn't get pushed below. Don't ship `py-28` on mobile — it wastes a third of the viewport.

For sections that contain **only** big stats / a single block, you can drop the lg step:

```tsx
<section className="py-16 md:py-24">
```

### B. Container

Always:

```tsx
<div className="max-w-7xl mx-auto px-6 md:px-8">
```

`px-6` (24px) on phones. Don't use `px-4` — it crowds the edges and makes the content feel stuffed. `px-8` from tablet up gives more breathing room for wider screens.

### C. Display headlines

Scale aggressively. The hero on mobile must still feel like a display, not a paragraph.

| Role | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero | `text-[44px]` | `md:text-[72px]` | `lg:text-[96px] xl:text-[112px]` |
| Section H2 | `text-[32px]` | `md:text-[48px]` | `lg:text-[64px]` |
| Card / row title | `text-[20px]` | `md:text-[24px]` | — |
| Body large | `text-[15px]` | `md:text-[18px]` | — |
| Body | `text-[14px]` | `md:text-[15px]` | — |

Always paired with `font-semibold tracking-[-0.02em] leading-[0.98]` — even on mobile.

### D. The 12-column grid (3/9 split)

The editorial signature of this site collapses cleanly to single column on phones:

```tsx
<div className="grid grid-cols-12 gap-6 md:gap-10">
  <div className="col-span-12 md:col-span-3">
    <div className="eyebrow">NN / Section</div>
    <div className="serif-italic text-white/55 text-[15px] mt-3">Kicker.</div>
  </div>
  <div className="col-span-12 md:col-span-9">
    <h2>…</h2>
  </div>
</div>
```

`col-span-12` on mobile = full width = single column. The split kicks in at `md:`.

### E. Card grids

Standard 1 → 2 → 3 collapse:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
```

For dense lists (industries, tags), 2-up on phone is fine if cards are small:

```tsx
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
```

### F. Two-column layouts that flip

When a section has side-by-side content on desktop but should stack on mobile:

```tsx
<div className="grid grid-cols-12 gap-6 md:gap-10">
  <div className="col-span-12 md:col-span-6">left</div>
  <div className="col-span-12 md:col-span-6 md:border-l md:border-white/10 md:pl-10">right</div>
</div>
```

Borders and padding only kick in at `md:` so mobile gets a clean stacked flow without orphan vertical rules.

### G. Hero pages

Inner page heroes use:
```tsx
<section className="pt-28 md:pt-36 lg:pt-44 pb-12 md:pb-20 lg:pb-24">
```
Top padding clears the fixed nav. The home hero uses `min-h-[100svh] flex flex-col` — `100svh` (small viewport height) is mandatory on mobile, otherwise iOS browser chrome causes a jump.

### H. Navigation

`Nav.tsx` already handles this — desktop nav at `lg:`, mobile drawer below. **Never** put more than one CTA in the mobile nav top bar. Burger + logo + one accent CTA max.

If you need to add a top-level link, it lives in the desktop nav and the mobile drawer — both have to be updated.

### I. Forms

Form inputs must be tap-friendly on phones:

```tsx
<input
  className="w-full bg-transparent border-b border-white/15
             focus:border-white/50 outline-none
             text-[16px] py-3
             placeholder-white/30 transition"
/>
```

- `text-[16px]` is the minimum on mobile — anything smaller triggers iOS auto-zoom on focus.
- `py-3` gives ≈48px touch height. Don't go below 44px.
- Stack labels above inputs on mobile, side-by-side on tablet+ if needed.

Two-up form rows:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
```

### J. Images

Always set an aspect ratio so layout doesn't jump as the image loads:

```tsx
<div className="relative aspect-[16/10] overflow-hidden">
  <img src="…" alt="…" loading="lazy"
       className="absolute inset-0 w-full h-full object-cover" />
</div>
```

For tall mobile screenshots in a card:
```tsx
<div className="relative aspect-[9/16] sm:aspect-[3/4] md:aspect-[16/10] overflow-hidden">
```

— phones get a portrait shape; desktop gets the standard 16:10. **Always** `loading="lazy"` for images below the fold.

### K. Hover and touch

Don't rely on hover for critical state. Phones don't have hover; iPad sort-of has it.

- For CTAs: hover style is the *enhancement*, not the primary affordance. The base button must already look clickable.
- Add `active:` and `focus:` states alongside `hover:` for keyboard + touch users:
  ```tsx
  className="hover:bg-white/10 active:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40"
  ```
- Touch targets: minimum **44×44 px**. For icon-only buttons that's `w-11 h-11` (44px). Anything smaller is hostile on touch.

### L. Typography for readability

- Body line-height: `leading-[1.55]` on mobile body text. Tighter than that and paragraphs feel cramped on small screens.
- Max line length: keep prose under ~70 characters per line. On mobile that's natural; on desktop use `max-w-2xl` / `max-w-3xl`.
- Don't go below `text-[12px]` for any non-meta text. For monospace eyebrows the existing `.eyebrow` (11px / 0.22em tracking) is fine because the tracking gives it room.

### M. Horizontal overflow

The single most common mobile bug.

- Always test by resizing to 320px wide. Anything that triggers a horizontal scroll is a bug.
- Common culprits: long URLs, code blocks, wide tables, fixed-width SVGs, tag chips that don't wrap.
- Fix with `overflow-hidden` on the parent **or** `flex-wrap` / `break-words` / `min-w-0` on the child.

Inline tags should always wrap:
```tsx
<div className="flex flex-wrap gap-2">
  {tags.map(t => <span>…</span>)}
</div>
```

### N. Show / hide on breakpoints

Use sparingly. If you find yourself rendering two versions of the same content for mobile vs desktop, consider whether a single layout that adapts would be cleaner.

```tsx
<span className="hidden md:inline">Some longer label</span>
<span className="md:hidden">Short</span>
```

Useful for: nav meta strings, secondary CTA copy, decorative blobs that don't read on small screens.

---

## Step 4 — animation on mobile

Less is more. Mobile devices have less GPU headroom and battery to burn.

- Don't run `mix-blend-mode` heavy effects on phones (e.g. the hero `FlowField` canvas already auto-disables on coarse pointers — preserve that).
- The cursor follower (`CursorGlow`) is already gated to `(hover: hover) and (pointer: fine)` — do **not** re-enable it on touch.
- Honour `useReducedMotion()` in any framer-motion component.
- Long parallax scrolls feel sluggish on iOS Safari — keep `whileInView` entrances short (≤ 700ms duration, ≤ 36px translate).

---

## Step 5 — Tailwind class hygiene

The Tailwind JIT only generates classes it can statically see in source. Don't build class names by string concatenation:

```tsx
// ❌ JIT can't see this — class won't be generated
const cols = `md:col-span-${count}`;

// ✅ Map explicitly
const colsByCount: Record<number, string> = {
  3: "md:col-span-4",
  4: "md:col-span-3",
  6: "md:col-span-2",
};
const cols = colsByCount[count] ?? "md:col-span-4";
```

Already used in [components/templates/IndustryDetail.tsx](components/templates/IndustryDetail.tsx) — same pattern any time breakpoint values come from data.

---

## Step 6 — pre-flight responsive checklist

Before declaring a feature done:

1. **320px wide** — open dev tools, set viewport to `iPhone SE` (375×667). Then narrower (320px). No horizontal scroll. No text clipped. Touch targets ≥ 44×44.
2. **768px wide** — `iPad Mini` portrait. The 12-col grid should already be in 3/9 layout. Ensure cards reflow to 2-up if appropriate.
3. **1024px+** — full desktop. The display headlines should hit their largest size.
4. **Tap test** — hover-only affordances must have a visible base state. Buttons must be tappable.
5. **Form fill on iPhone** — inputs ≥ 16px so iOS doesn't auto-zoom. `inputmode` and `autocomplete` set on email/phone fields if relevant.
6. **Image lazy-loading** — every below-the-fold `<img>` has `loading="lazy"`.
7. **Run** `npm run dev` (port 3010) and resize the browser. Watch for layout jumps as the breakpoint flips.

If anything fails, the feature isn't done.

---

## Step 7 — common patterns reference

### Sticky element that must release on mobile

```tsx
<div className="md:sticky md:top-24">
```
Sticky behaviour kicks in only at `md:` so phones don't get a fixed panel taking over the viewport.

### Mobile-only ticker / marquee

OK to ship — they read fine on small screens. The home page does this.

### Fixed positioning + safe area

For floating buttons (WhatsApp, theme toggle), add safe-area padding so they clear iPhone home indicators:

```tsx
className="fixed bottom-4 right-4 md:bottom-6 md:right-6
           pb-[env(safe-area-inset-bottom)]"
```

### Modal / overlay

Always full-screen on mobile, centred with backdrop on desktop:

```tsx
<div className="fixed inset-0 z-50
                md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
                md:max-w-2xl md:rounded-2xl">
```

---

## Step 8 — do / don't quick reference

**Do**
- Write base styles for mobile, layer with `sm:` / `md:` / `lg:`.
- Use `col-span-12` on mobile for any 12-col grid item.
- Set `aspect-[…]` on every image container so layout doesn't jump.
- Use `loading="lazy"` on below-the-fold images.
- Set form inputs to `text-[16px]` minimum.
- Touch targets ≥ 44×44 px.
- Use `gap-6 md:gap-10` for grid gaps.
- Test at 320px first, then scale up.
- Honour `useReducedMotion()` and `(hover: hover) and (pointer: fine)` media queries.

**Don't**
- Don't write desktop-first with `max-` breakpoints.
- Don't hard-code widths (use `max-w-…` instead, never `w-[1200px]`).
- Don't disable text wrapping unless you've tested at 320px.
- Don't put the cursor follower or any pointermove-based effects on touch.
- Don't use form inputs below 16px on mobile (iOS auto-zoom).
- Don't ship hover-only affordances — pair with `focus:` / `active:` / a base style.
- Don't build class names with string concatenation — JIT won't see them.
- Don't assume `100vh` works on mobile — use `100svh` for the small viewport unit.

---

## Step 9 — file index

| Need to … | Open … |
|---|---|
| See the canonical mobile-friendly hero | [components/Hero.tsx](components/Hero.tsx) |
| See a working mobile drawer / nav | [components/Nav.tsx](components/Nav.tsx) |
| See responsive stat hero | [components/Stats.tsx](components/Stats.tsx) |
| See responsive case-study card grid | [components/CaseStudies.tsx](components/CaseStudies.tsx) |
| See the contact form layout | [components/CTA.tsx](components/CTA.tsx) |
| Tailwind config / breakpoints | [tailwind.config.ts](tailwind.config.ts) |
| The other half of the design system | [.claude/skills/addon-design-system/SKILL.md](.claude/skills/addon-design-system/SKILL.md) |
| Token reference | [design.md](design.md) |

When in doubt: open one of the listed components, copy its responsive pattern, adapt to your case. Don't invent new breakpoint conventions.
