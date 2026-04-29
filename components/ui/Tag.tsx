import type { ReactNode } from "react";

type TagVariant = "mono" | "tech" | "tinted";

/**
 * Small chip / pill used for service tags ("React", "AWS"), category badges,
 * and meta labels.
 *
 *   <Tag>IoT · Enterprise</Tag>                 // mono uppercase, glass border
 *   <Tag variant="tech">React</Tag>             // mono lowercase, dim text
 *   <Tag variant="tinted" tint="#34cb96">Live</Tag>  // brand-tinted overlay
 */
export default function Tag({
  children,
  variant = "mono",
  tint,
  className = "",
}: {
  children: ReactNode;
  variant?: TagVariant;
  /** Hex color used by the `tinted` variant for background + border at low opacity. */
  tint?: string;
  className?: string;
}) {
  if (variant === "tinted" && tint) {
    return (
      <span
        className={`inline-flex items-center text-[10.5px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-full ${className}`.trim()}
        style={{ background: tint + "1F", border: `1px solid ${tint}55`, color: tint }}
      >
        {children}
      </span>
    );
  }
  if (variant === "tech") {
    return (
      <span
        className={`inline-flex items-center text-[12px] font-mono px-3 py-1.5 rounded-full bg-white/[0.04] text-white/65 border border-white/10 ${className}`.trim()}
      >
        {children}
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center text-[10.5px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/70 ${className}`.trim()}
    >
      {children}
    </span>
  );
}

/** Wrap many <Tag>s in this so they wrap cleanly on mobile. */
export function TagRow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`flex flex-wrap gap-2 ${className}`.trim()}>{children}</div>;
}
