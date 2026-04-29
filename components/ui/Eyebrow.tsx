import type { ReactNode } from "react";

/**
 * Numbered eyebrow label — the small monospaced uppercase tag that opens
 * every editorial section ("01 / Services").
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
  /** Optional numeric prefix. Pass `1` and it becomes "01 / children". */
  number?: number;
}) {
  return (
    <div className={`eyebrow ${className}`.trim()}>
      {number !== undefined && (
        <>
          {String(number).padStart(2, "0")} <span className="opacity-50">/</span>{" "}
        </>
      )}
      {children}
    </div>
  );
}
