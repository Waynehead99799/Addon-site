import type { ReactNode } from "react";

/**
 * Eyebrow label — the small monospaced uppercase tag that opens
 * every editorial section ("Services").
 *
 * Pair with <Kicker> below it inside the left 3-col of the 12-col grid.
 */
export default function Eyebrow({
  children,
  className = "",
  number,
}: {
  children: ReactNode;
  className?: string;
  /** Deprecated: section numbers are no longer rendered. */
  number?: number;
}) {
  void number;
  return <div className={`eyebrow ${className}`.trim()}>{children}</div>;
}
