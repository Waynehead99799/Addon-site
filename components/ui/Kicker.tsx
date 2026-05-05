import type { ReactNode } from "react";

/**
 * The serif-italic line that previously sat below an Eyebrow. Hidden site-wide
 * — kept as a no-op render so any consumer (e.g. SectionHeader) still
 * compiles. Restore by returning the original markup if you want kickers back.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Kicker(_: { children: ReactNode; className?: string }) {
  return null;
}
