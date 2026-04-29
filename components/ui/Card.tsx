import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Icon } from "../icons";

/**
 * Canonical accent palette stops — keep all per-card brand tints inside the
 * brand family so the site stays cohesive. Pass any of these (or your own
 * `{ hex, rgb }` tuple) as the `accent` prop on `<Card>`.
 *
 *   import { Card, ACCENTS } from "@/components/ui";
 *   <Card accent={ACCENTS.shamrock} …>
 */
export const ACCENTS = {
  azure: { hex: "#5392df", rgb: "83,146,223" },
  teal: { hex: "#2dbcd2", rgb: "45,188,210" },
  shamrock: { hex: "#34cb96", rgb: "52,203,150" },
  emerald: { hex: "#3ec170", rgb: "62,193,112" },
  brandAzure: { hex: "#2877d7", rgb: "40,119,215" },
  rose: { hex: "#E2A892", rgb: "226,168,146" },
} as const;

export type Accent = { hex: string; rgb: string };

type CardVariant = "accent" | "plain" | "manifesto";

/**
 * Surface card. The default `accent` variant is the canonical "box" style used
 * across the site — accent-tinted hover affordances, lifted shadow, animated
 * `::before` radial overlay. The CSS lives in [globals.css](../../app/globals.css)
 * under `.svc-card`.
 *
 *   <Card accent={ACCENTS.shamrock} href="/services/ai-development" hero>
 *     <CardHeader>
 *       <CardIcon><BotIcon /></CardIcon>
 *       <CardTag>AI × Automation</CardTag>
 *     </CardHeader>
 *     <CardTitle>Artificial Intelligence</CardTitle>
 *     <CardDesc>LLM apps, agents, RAG systems …</CardDesc>
 *     <CardFooter>
 *       <CardChipRow chips={["OpenAI", "Anthropic"]} />
 *     </CardFooter>
 *   </Card>
 *
 * Use the helper sub-components — they wire up the `.svc-icon`, `.svc-tag`,
 * `.svc-stack-chip`, and `.svc-arrow` classes that consume the inline CSS
 * variables set by `accent`. Plain children also work; the helpers just save
 * typing.
 *
 * Variants:
 *   accent   — default. Brand-tinted hover. Use everywhere unless you need one of the others.
 *   plain    — flat hairline border, no accent. For dense grids where many cards would compete.
 *   manifesto — top-bordered editorial card with translateY(-3px) hover and azure glow.
 */
export default function Card({
  href,
  children,
  variant = "accent",
  accent = ACCENTS.azure,
  hero = false,
  heroGlow = true,
  className = "",
  padding = "p-6 md:p-7",
}: {
  href?: string;
  children: ReactNode;
  variant?: CardVariant;
  /** Brand accent tuple driving --svc / --svc-rgb on the card. */
  accent?: Accent;
  /** Bento "hero" sizing — adds the .is-hero modifier so headline scales up. */
  hero?: boolean;
  /** Render the hero radial-gradient overlay (only meaningful when hero is true). */
  heroGlow?: boolean;
  className?: string;
  /** Override the default `p-6 md:p-7`. Pass empty string for image-led cards. */
  padding?: string;
}) {
  const variantClass: Record<CardVariant, string> = {
    accent:
      "svc-card relative h-full rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col overflow-hidden",
    plain:
      "card-hover relative h-full rounded-2xl border border-white/10 bg-white/[0.015] flex flex-col overflow-hidden",
    manifesto:
      "manifesto-card pt-5 pb-5 px-4 -mx-4 rounded-lg border-t border-white/10 bg-transparent",
  };
  const cls = `block ${variantClass[variant]} ${variant === "accent" && hero ? "is-hero" : ""} ${padding} ${className}`.trim();

  const style: CSSProperties =
    variant === "accent"
      ? ({
          ["--svc" as string]: accent.hex,
          ["--svc-rgb" as string]: accent.rgb,
        } as CSSProperties)
      : {};

  const inner = (
    <>
      {variant === "accent" && hero && heroGlow && (
        <div
          className="svc-hero-glow absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(70% 60% at 80% 20%, rgba(${accent.rgb},0.22), transparent 60%), radial-gradient(60% 50% at 10% 90%, rgba(83,146,223,0.16), transparent 60%)`,
          }}
        />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${cls}`} style={style}>
        {inner}
      </Link>
    );
  }
  return (
    <div className={cls} style={style}>
      {inner}
    </div>
  );
}

/* ─── Composable inner slots ─────────────────────────────────────────────── */

/**
 * Top row of an accent card: icon on the left, tag chip on the right.
 *
 *   <CardHeader>
 *     <CardIcon><BotIcon /></CardIcon>
 *     <CardTag>AI × Automation</CardTag>
 *   </CardHeader>
 */
export function CardHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-between ${className}`.trim()}>
      {children}
    </div>
  );
}

export function CardIcon({
  children,
  size = "md",
  className = "",
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = { sm: "w-9 h-9", md: "w-10 h-10", lg: "w-12 h-12" };
  return (
    <div
      className={`svc-icon rounded-lg grid place-items-center ${sizes[size]} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export function CardTag({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`svc-tag text-[10px] tracking-[0.18em] uppercase font-mono px-2 py-1 rounded-full border ${className}`.trim()}
    >
      {children}
    </span>
  );
}

/**
 * Title with the canonical serif-italic accent on the last word. Auto-bottom
 * via `mt-auto pt-6` so multiple lines of body sit ABOVE the title in
 * accent-card layouts. Pass `hero` for the bento-hero sizing.
 */
export function CardTitle({
  children,
  hero = false,
  className = "",
}: {
  children: string;
  hero?: boolean;
  className?: string;
}) {
  const words = children.split(" ");
  const head = words.slice(0, -1).join(" ");
  const tail = words.at(-1) ?? "";
  return (
    <h3
      className={`relative mt-auto pt-6 font-semibold tracking-[-0.02em] leading-[1.02] ${
        hero ? "text-[36px] md:text-[42px] lg:text-[52px]" : "text-[20px] md:text-[24px] lg:text-[26px]"
      } ${className}`.trim()}
    >
      {head}{" "}
      <span className="serif-italic font-normal text-white/70">{tail}</span>
    </h3>
  );
}

export function CardDesc({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`relative mt-3 text-[14px] text-white/60 leading-relaxed max-w-md ${className}`.trim()}>
      {children}
    </p>
  );
}

/**
 * Footer row of an accent card: stack chips on the left, arrow on the right.
 * `arrow={false}` to suppress the arrow (e.g. for non-actionable cards).
 */
export function CardFooter({
  children,
  arrow = true,
  className = "",
}: {
  children?: ReactNode;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative mt-4 flex items-end justify-between gap-3 ${className}`.trim()}>
      <div className="flex flex-wrap gap-1.5">{children}</div>
      {arrow && <Icon.ArrowUpRight width={16} height={16} className="svc-arrow shrink-0" />}
    </div>
  );
}

export function CardChip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`svc-stack-chip text-[10.5px] px-2 py-1 rounded-full bg-white/[0.04] text-white/55 border border-white/10 font-mono ${className}`.trim()}
    >
      {children}
    </span>
  );
}

/** Convenience: render an array of strings as `CardChip`s. */
export function CardChipRow({
  chips,
  max,
}: {
  chips: readonly string[];
  /** Limit how many chips render. Useful when card has limited room. */
  max?: number;
}) {
  const items = max ? chips.slice(0, max) : chips;
  return (
    <>
      {items.map((c) => (
        <CardChip key={c}>{c}</CardChip>
      ))}
    </>
  );
}
