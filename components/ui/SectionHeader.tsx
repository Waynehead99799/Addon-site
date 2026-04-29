import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import Kicker from "./Kicker";
import Headline from "./Headline";

/**
 * The 3/9 editorial header used at the top of every body section. Renders the
 * left margin (Eyebrow + Kicker) and the right body (Headline + optional
 * children) in a 12-col grid that collapses to single column on mobile.
 *
 *   <SectionHeader
 *     number={1}
 *     eyebrow="Services"
 *     kicker="The shortlist."
 *     title="One partner, six ways to ship."
 *     accent="six ways"
 *   />
 *
 * For richer markup pass `headline` directly (e.g. line breaks).
 */
export default function SectionHeader({
  number,
  eyebrow,
  kicker,
  title,
  accent,
  headline,
  children,
  size = "section",
  className = "",
}: {
  number?: number;
  eyebrow: string;
  kicker?: string;
  title?: string;
  accent?: string;
  /** Override the auto-generated headline with custom JSX */
  headline?: ReactNode;
  /** Optional supporting copy / extras placed under the headline */
  children?: ReactNode;
  size?: "display" | "section" | "sub";
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14 ${className}`.trim()}>
      <div className="col-span-12 md:col-span-3">
        <Eyebrow number={number}>{eyebrow}</Eyebrow>
        {kicker && <Kicker>{kicker}</Kicker>}
      </div>
      <div className="col-span-12 md:col-span-9">
        {headline ?? <Headline size={size} text={title} accent={accent} />}
        {children}
      </div>
    </div>
  );
}
