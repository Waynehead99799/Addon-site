import type { ReactNode } from "react";

/**
 * The serif-italic line that sits below an Eyebrow ("The shortlist." /
 * "Built to ship, not to bill."). Caps section context; never longer than
 * about six words.
 */
export default function Kicker({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mt-3 serif-italic text-white/55 text-[15px] ${className}`.trim()}>
      {children}
    </div>
  );
}
