---
name: ui-primitives
description: Use the centralised UI primitives in `components/ui/` for every reusable element (sections, headlines, eyebrows, kickers, stat numerics, tags, cards, buttons) instead of re-declaring inline class strings. Trigger on any task that involves authoring or editing JSX with repeating patterns — buttons, CTAs, cards, section headers, big numbers, tag chips, hover affordances, list rows. Also trigger when the user mentions "centralize", "reusable component", "consistent", "buttons", "cards", "headline", "primitive", "component library", "DRY", "duplicate styles", "repeated pattern", or "looks slightly different on this page".
---

# UI Primitives Skill

This site has a centralised primitive library at [components/ui/](components/ui/). Every reusable visual element on the site lives there: section wrappers, headlines, eyebrows, kickers, big numerics, tags, cards, buttons. Use them.

This skill rides on top of [addon-design-system](.claude/skills/addon-design-system/SKILL.md) and [mobile-responsive](.claude/skills/mobile-responsive/SKILL.md). Those tell you *what* the system looks like; this tells you *which file to import*.

---

## Step 1 — when to use a primitive

If you're about to type any of the following inline, stop and reach for a primitive:

- `className="font-semibold tracking-[-0.02em] leading-[1.04] …"` → **`Headline`**
- `className="eyebrow"` → **`Eyebrow`**
- `className="serif-italic text-white/55 text-[15px] mt-3"` → **`Kicker`**
- `className="grid grid-cols-12 gap-6 md:gap-10"` for a 3/9 split → **`SectionHeader`**
- `className="num-grad font-semibold tracking-[-0.05em] …"` → **`StatNumeric`**
- `className="px-2.5 py-1 rounded-full bg-white/[0.05] border …"` for a chip → **`Tag`**
- `className="card-hover bg-white/[0.015] border border-white/10 rounded-2xl …"` → **`Card`**
- `className="hero-cta-pill bg-white text-black …"` for a CTA → **`Button`**

If you find yourself copying a 4+ class string from another component, that's a primitive missing from this folder. Add one and document it here.

---

## Step 2 — the import pattern

One import line per primitive group, via the barrel:

```tsx
import { Section, SectionHeader, Headline, StatNumeric, Tag, Card, Button } from "@/components/ui";
```

Don't import primitives one-by-one from their individual files unless you're inside another `components/ui/*.tsx` file. The barrel ([components/ui/index.ts](components/ui/index.ts)) is the public surface.

---

## Step 3 — primitive reference

### `<Section>` — section wrapper

Standard rhythm + 7xl container in one component.

```tsx
<Section number={1}>          {/* number is just the visual eyebrow id, not a real prop */}
  <SectionHeader … />
  {/* body */}
</Section>
```

Props:
- `tighter` — denser padding for stat strips / nav-adjacent bands
- `noBorder` — drop the top hairline (first section after hero)
- `inner={false}` — author your own inner container (full-bleed backgrounds)
- `id` — anchor target

### `<SectionHeader>` — 3/9 editorial header

The most-reached-for primitive. Renders the canonical eyebrow + kicker (left 3 cols) and headline (right 9 cols).

```tsx
<SectionHeader
  number={1}
  eyebrow="Services"
  kicker="The shortlist."
  title="One partner, six ways to ship."
  accent="six ways"            // becomes the serif-italic span
  size="section"               // "display" | "section" | "sub"
/>
```

For richer markup (line breaks, two accents) pass `headline` directly:

```tsx
<SectionHeader
  number={3}
  eyebrow="Selected work"
  kicker="Six worlds, one team."
  headline={
    <Headline size="section">
      Six shipped products,<br />
      <HeadlineAccent>six worlds</HeadlineAccent>.
    </Headline>
  }
/>
```

### `<Eyebrow>` and `<Kicker>` — used standalone too

If you need just one of the pair (rare):

```tsx
<Eyebrow number={2}>Receipts</Eyebrow>
<Kicker>What fifteen years looks like.</Kicker>
```

### `<Headline>` — display heading with split italic accent

Three sizes:

| Size | Use | Mobile → desktop |
|---|---|---|
| `display` | Hero only | 44px → 112px |
| `section` | Section H2 | 32px → 68px |
| `sub` | Sub-section H3 | 24px → 44px |

```tsx
<Headline size="display" text="Software that thinks." accent="that" />
```

If the accent string is missing or omitted, the **last word** is automatically italicised. That's the safe default.

### `<StatNumeric>` — big rose-gold numbers

```tsx
<StatNumeric size="hero" value="150+" />
<StatNumeric size="medium" value="35+" label="In-house resources" sublabel="senior engineers" />
```

Sizes: `hero` (88–220px), `large` (56–76px), `medium` (40–56px), `small` (28–36px). Always paired with `tracking-[-0.0Xem]` and the `num-grad` rose-gold gradient.

### `<Tag>` and `<TagRow>` — chips

```tsx
<TagRow>
  <Tag>IoT · Enterprise</Tag>           {/* default — mono uppercase */}
  <Tag variant="tech">React</Tag>       {/* tech stack chip */}
  <Tag variant="tinted" tint="#34cb96">Live</Tag>  {/* brand-tinted */}
</TagRow>
```

`TagRow` adds `flex flex-wrap gap-2` so chips wrap cleanly on mobile — required for the mobile-responsive skill.

### `<Card>` — the canonical box

**This is THE box style of the site.** Every card / panel / "rectangular surface" — services, case studies, industries, features grid, anything that looks like a tile — uses this. The `accent` variant is the default for a reason. Don't write rectangles with `border border-white/10 bg-white/[0.02] rounded-2xl p-6` by hand any more — that's `<Card>` already.

```tsx
import { Card, CardHeader, CardIcon, CardTag, CardTitle, CardDesc, CardFooter, CardChipRow, ACCENTS } from "@/components/ui";
import { Icon } from "@/components/icons";

<Card href="/services/ai-development" accent={ACCENTS.shamrock} hero>
  <CardHeader>
    <CardIcon size="lg"><Icon.Bot width={20} height={20} /></CardIcon>
    <CardTag>AI × Automation</CardTag>
  </CardHeader>
  <CardTitle hero>Artificial Intelligence</CardTitle>
  <CardDesc>LLM apps, agents, and RAG systems grounded in your data.</CardDesc>
  <CardFooter>
    <CardChipRow chips={["OpenAI", "Anthropic", "LangChain", "Pinecone"]} max={4} />
  </CardFooter>
</Card>
```

**Required props for accent cards:**
- `accent` — pick from `ACCENTS.azure / teal / shamrock / emerald / brandAzure / rose`, or pass `{ hex, rgb }` of your own. Drives `--svc / --svc-rgb` CSS variables that paint icon, tag, chip, arrow, and hover affordances. Without this, hover is dead.
- `hero` — only on the bento "hero" card in a grid. Adds the `.is-hero` modifier and renders the radial-gradient overlay; `CardTitle hero` scales the headline. Set on at most one card per grid.

**Composable inner slots — use them instead of raw class strings:**

| Slot | Purpose |
|---|---|
| `<CardHeader>` | Top row: icon left, tag right |
| `<CardIcon size="sm\|md\|lg">` | Brand-tinted icon well |
| `<CardTag>` | Top-right chip — section, family, mono uppercase |
| `<CardTitle>` (children: string) | Title with serif-italic last-word accent. Pass `hero` for bento sizing. |
| `<CardDesc>` | Body paragraph, max-w-md, 60% white |
| `<CardFooter arrow>` | Bottom row: chips left, arrow right |
| `<CardChipRow chips={[...]} max={4} />` | Stack-of-tech chips |

**Variants:**
- `accent` (default) — the canonical box. Brand-tinted hover, animated radial overlay, lift shadow.
- `plain` — flat hairline border, no accent. Use only in dense grids where many `accent` cards would compete (e.g. blog index, industries chip grid).
- `manifesto` — top-bordered editorial card with translateY(-3px) + azure glow. Used in `AboutValues` etc.

**Bento layout — when you want one big hero card + smaller satellites:**

```tsx
const SPANS = [
  "md:col-span-2 md:row-span-2",   // hero
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

<div className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-[220px] gap-4">
  {items.map((it, i) => (
    <Reveal key={it.id} delay={i * 50} y={18} className={SPANS[i]}>
      <Card href={it.href} accent={ACCENTS[it.accentKey]} hero={i === 0}>
        …slots…
      </Card>
    </Reveal>
  ))}
</div>
```

Only `Services` uses bento today; copy this pattern for any new grid that wants the same visual hierarchy.

Pass `href` to make the whole card a `Link`. Don't wrap a Card in a Link — that's nested links and breaks accessibility.

### `<Button>` — the four button families

```tsx
<Button variant="primary" href="/contact">Book a 15-min call</Button>
<Button variant="accent" href="/contact" size="lg">Start a project</Button>
<Button variant="ghost" href="/case-studies">View work</Button>
<Button variant="secondary" href="/case-studies">See full portfolio</Button>
```

| Variant | Look | Use for |
|---|---|---|
| `primary` | White / ink pill, gradient fills on hover | Hero CTA, primary call-to-action |
| `accent` | Solid brand-gradient pill | Dense areas where primary would compete |
| `ghost` | Transparent + hairline, fills on hover | Secondary in pairs ("View work" next to "Start a project") |
| `secondary` | Text + arrow only, no chrome | "See full portfolio →" inline links |

All variants honour the documented motion curve (`cubic-bezier(0.2, 0.8, 0.2, 1)`) via the existing `.btn-arrow` and `.cta-pulse` utility classes. Don't add custom transitions.

For form submits:
```tsx
<Button type="submit" variant="primary">Send brief</Button>
```

For icon-only buttons or buttons without a trailing arrow:
```tsx
<Button variant="ghost" arrow={false}>Close</Button>
```

---

## Step 4 — composing a section from primitives

The whole pattern flow for adding a new section:

```tsx
import { Section, SectionHeader, Card, Tag, TagRow, Button } from "@/components/ui";

export default function MyNewSection() {
  return (
    <Section number={4}>
      <SectionHeader
        number={4}
        eyebrow="Capabilities"
        kicker="What we deliver."
        title="Six capabilities, one team."
        accent="one team"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((it) => (
          <Card key={it.id} href={it.href}>
            <h3 className="text-[20px] md:text-[22px] font-semibold tracking-[-0.01em]">
              {it.title}
            </h3>
            <p className="mt-3 text-[14px] text-white/55 leading-relaxed">{it.desc}</p>
            <TagRow className="mt-5">
              {it.tags.map((t) => <Tag key={t} variant="tech">{t}</Tag>)}
            </TagRow>
          </Card>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button variant="primary" href="/contact">Get started</Button>
      </div>
    </Section>
  );
}
```

Notice: zero raw class strings for buttons, headers, tags, or cards. All inline classes left are for *layout-of-this-specific-section* — never visual styling that's already a primitive.

---

## Step 5 — adding a new primitive

You have a new repeating pattern? Promote it to a primitive instead of duplicating:

1. Add a file to `components/ui/<Name>.tsx`
2. Default-export the component, with named exports for any sub-pieces (e.g. `HeadlineAccent`)
3. Add the export to [components/ui/index.ts](components/ui/index.ts)
4. Add a section to this skill in §3 with: signature, when-to-use, copy-paste example
5. If it introduces a new visual token (gradient, easing, breakpoint), also update [design.md](design.md) and [globals.css](app/globals.css)

Do **not** create primitives for one-off layouts. The bar is "I'll need this in three places".

---

## Step 6 — refactoring existing components

When touching an existing file:
- If a primitive matches a pattern you see, swap it in. One swap per visit, not a sweeping rewrite — minimise churn.
- If you spot a pattern that should be a primitive but isn't, leave a `// TODO(ui-primitive)` comment and finish the immediate task. Promote later.
- Do not migrate everything at once. The conversation has shown that mass refactors cause regressions.

The primitives are **additive** — old inline styles still work. They're the canonical pattern for new code, and gradually the standard for old code.

---

## Step 7 — file index

| Need to … | Open … |
|---|---|
| Use a primitive | `import { … } from "@/components/ui"` (via [components/ui/index.ts](components/ui/index.ts)) |
| Section wrapper | [components/ui/Section.tsx](components/ui/Section.tsx) |
| Eyebrow + kicker + headline header | [components/ui/SectionHeader.tsx](components/ui/SectionHeader.tsx) |
| Editorial display headline | [components/ui/Headline.tsx](components/ui/Headline.tsx) |
| Numbered eyebrow | [components/ui/Eyebrow.tsx](components/ui/Eyebrow.tsx) |
| Serif-italic kicker | [components/ui/Kicker.tsx](components/ui/Kicker.tsx) |
| Big rose-gold number | [components/ui/StatNumeric.tsx](components/ui/StatNumeric.tsx) |
| Tag / chip | [components/ui/Tag.tsx](components/ui/Tag.tsx) |
| Card surface | [components/ui/Card.tsx](components/ui/Card.tsx) |
| Button / CTA | [components/ui/Button.tsx](components/ui/Button.tsx) |
| Token reference | [design.md](design.md) |
| Design conventions | [.claude/skills/addon-design-system/SKILL.md](.claude/skills/addon-design-system/SKILL.md) |
| Mobile rules | [.claude/skills/mobile-responsive/SKILL.md](.claude/skills/mobile-responsive/SKILL.md) |

---

## Step 8 — do / don't

**Do**
- Reach for `Section`, `SectionHeader`, `Headline`, `StatNumeric`, `Tag`, `Card`, `Button` before writing any styling.
- Import via `@/components/ui` barrel.
- Promote any 3-times-repeated inline class string to a new primitive.
- Document the new primitive in this skill in the same commit.

**Don't**
- Don't re-declare `font-semibold tracking-[-0.02em] leading-[1.04]` inline — that's `Headline size="section"`.
- Don't duplicate the `.eyebrow + .serif-italic kicker` pair — that's `SectionHeader` with `eyebrow` + `kicker` props.
- Don't write a new "Card" with custom hover by hand — extend `Card` via a new `variant`.
- Don't fork `Button` per route. Add a variant if needed.
- Don't import primitives one-by-one — use the barrel.
- Don't mass-migrate every existing component on first sight. Migrate incrementally, one file per visit.
