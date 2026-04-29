import type { ElementType, ReactNode } from "react";

type Size = "display" | "section" | "sub";

/**
 * Display headline with the canonical serif-italic accent split. This is the
 * single strongest signature of the brand — every section title flows through
 * this component so the rhythm stays identical.
 *
 * Two ways to author:
 *
 *   1. Pass `text` + `accent` — the accent string must occur in `text`. It will
 *      be replaced with the italic span:
 *
 *      <Headline size="section" text="One partner, six ways to ship." accent="six ways" />
 *
 *   2. Pass children directly when you need richer markup (line breaks, two
 *      accents, etc.) — wrap accents in `<HeadlineAccent>`:
 *
 *      <Headline size="section">
 *        Six shipped products,<br />
 *        <HeadlineAccent>six worlds</HeadlineAccent>.
 *      </Headline>
 */
export default function Headline({
  text,
  accent,
  size = "section",
  as: Tag = "h2",
  className = "",
  children,
}: {
  text?: string;
  accent?: string;
  size?: Size;
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}) {
  const sizeClass: Record<Size, string> = {
    display:
      "text-[44px] sm:text-[56px] md:text-[76px] lg:text-[96px] xl:text-[112px] leading-[0.9]",
    section:
      "text-[32px] sm:text-[40px] md:text-[56px] lg:text-[68px] leading-[1.04]",
    sub:
      "text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] leading-[1.08]",
  };
  const base = `font-semibold tracking-[-0.02em] ${sizeClass[size]} ${className}`.trim();

  if (children) {
    return <Tag className={base}>{children}</Tag>;
  }
  if (!text) return null;
  if (!accent || !text.includes(accent)) {
    // No accent specified or accent not found — italicize the last word.
    const words = text.split(" ");
    const tail = words.pop()!;
    return (
      <Tag className={base}>
        {words.join(" ")} <HeadlineAccent>{tail.replace(/\.$/, "")}</HeadlineAccent>
        {tail.endsWith(".") ? "." : ""}
      </Tag>
    );
  }
  const idx = text.indexOf(accent);
  return (
    <Tag className={base}>
      {text.slice(0, idx)}
      <HeadlineAccent>{accent}</HeadlineAccent>
      {text.slice(idx + accent.length)}
    </Tag>
  );
}

/** The serif-italic span used inside a Headline for accent words. */
export function HeadlineAccent({ children }: { children: ReactNode }) {
  return <span className="serif-italic font-normal text-white/75">{children}</span>;
}
