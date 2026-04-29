import type { ReactNode } from "react";

type StatSize = "hero" | "large" | "medium" | "small";

/**
 * Big numeric value rendered with the rose-gold metallic gradient (.num-grad).
 * Used for "150+", "01", "99.7%", etc.
 *
 *   <StatNumeric size="hero">150+</StatNumeric>
 *   <StatNumeric size="medium" label="Years in business" sublabel="building since 2011" />
 *
 * If only `value` is given, renders just the number. Pass `label` and/or
 * `sublabel` to render the standard editorial pairing (number on top, mono
 * uppercase label below, optional serif-italic sub on bottom).
 */
export default function StatNumeric({
  size = "medium",
  value,
  label,
  sublabel,
  className = "",
  children,
}: {
  size?: StatSize;
  value?: string;
  label?: string;
  sublabel?: string;
  className?: string;
  /** Falls back to children if `value` not given (lets you pass JSX). */
  children?: ReactNode;
}) {
  const sizeClass: Record<StatSize, string> = {
    hero: "text-[88px] sm:text-[120px] md:text-[180px] lg:text-[220px] tracking-[-0.05em] leading-[0.85]",
    large: "text-[56px] md:text-[76px] tracking-[-0.04em] leading-[0.9]",
    medium: "text-[40px] md:text-[56px] tracking-[-0.03em] leading-none",
    small: "text-[28px] md:text-[36px] tracking-[-0.02em] leading-none",
  };

  return (
    <div className={className}>
      <div className={`font-semibold num-grad ${sizeClass[size]}`}>
        {children ?? value}
      </div>
      {label && (
        <div className="mt-3 text-[11.5px] font-mono uppercase tracking-[0.18em] text-white/50">
          {label}
        </div>
      )}
      {sublabel && (
        <div className="mt-1 text-[12.5px] text-white/45 serif-italic">{sublabel}</div>
      )}
    </div>
  );
}
