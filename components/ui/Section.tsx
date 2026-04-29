import type { ReactNode } from "react";

/**
 * Canonical section wrapper. Every body section on the site uses this rhythm:
 *   - top hairline `border-t border-white/5`
 *   - vertical padding `py-14 md:py-20 lg:py-28` (mobile-aware)
 *   - 7xl-max-width inner container with `px-6 md:px-8`
 *
 * Pass `tighter` for a denser band (stat strip, ticker, nav-adjacent strip).
 * Pass `noBorder` for the hero / first section that touches the page edge.
 *
 * Pass `inner={false}` if you need to control the inner container yourself
 * (e.g. full-bleed canvas backgrounds with constrained content above).
 */
export default function Section({
  id,
  children,
  className = "",
  tighter = false,
  noBorder = false,
  inner = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tighter?: boolean;
  noBorder?: boolean;
  inner?: boolean;
}) {
  const padding = tighter ? "py-12 md:py-16 lg:py-20" : "py-14 md:py-20 lg:py-28";
  const border = noBorder ? "" : "border-t border-white/5";
  const body = inner ? (
    <div className="max-w-7xl mx-auto px-6 md:px-8">{children}</div>
  ) : (
    children
  );
  return (
    <section
      id={id}
      className={`relative ${padding} ${border} ${className}`.trim()}
    >
      {body}
    </section>
  );
}
