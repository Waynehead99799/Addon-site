"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "../icons";

type ButtonVariant = "primary" | "accent" | "ghost" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

/**
 * Canonical button / link affordance. Variants match the four families that
 * already appear on the site:
 *
 *   primary   — white pill that crossfades to brand gradient on hover (hero CTA)
 *   accent    — solid brand-gradient pill, white text, used in dense areas
 *   ghost     — transparent pill with white/10 hairline, hover fades fill in
 *   secondary — text + arrow only, no chrome, "See full portfolio →" style
 *
 * Pass `href` to render as a Next/Link, omit for a `<button>`. The arrow icon
 * is rendered automatically and animated by `.btn-arrow` on hover.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  arrow = true,
  type,
  onClick,
  disabled,
  ariaLabel,
  newTab,
}: {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Render the trailing arrow glyph (default true). Set false for icon-only buttons. */
  arrow?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  newTab?: boolean;
}) {
  const sizeText: Record<ButtonSize, string> = {
    sm: "text-[12.5px]",
    md: "text-[14px]",
    lg: "text-[14.5px]",
  };
  const sizePadding: Record<ButtonSize, string> = {
    sm: "py-1.5 pl-4 pr-1",
    md: "py-2 pl-5 pr-2",
    lg: "py-2.5 pl-6 pr-[6px]",
  };
  const sizeArrow: Record<ButtonSize, string> = {
    sm: "w-6 h-6",
    md: "w-7 h-7",
    lg: "w-7 h-7",
  };

  if (variant === "secondary") {
    const inner = (
      <span
        className={`group inline-flex items-center gap-2 ${sizeText[size]} text-white/70 hover:text-white transition ${className}`.trim()}
      >
        {children}
        {arrow && <Icon.ArrowUpRight width={13} height={13} className="btn-arrow" />}
      </span>
    );
    if (href) {
      return (
        <Link href={href} target={newTab ? "_blank" : undefined} aria-label={ariaLabel}>
          {inner}
        </Link>
      );
    }
    return (
      <button type={type ?? "button"} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
        {inner}
      </button>
    );
  }

  if (variant === "ghost") {
    const inner = (
      <span
        className={`group inline-flex items-center gap-2 px-5 py-2 rounded-full ${sizeText[size]} font-medium border border-white/15 text-white/85 hover:bg-white/[0.06] hover:border-white/25 active:bg-white/[0.10] transition ${className}`.trim()}
      >
        {children}
        {arrow && <Icon.Arrow width={13} height={13} className="btn-arrow" />}
      </span>
    );
    if (href) {
      return (
        <Link href={href} target={newTab ? "_blank" : undefined} aria-label={ariaLabel}>
          {inner}
        </Link>
      );
    }
    return (
      <button type={type ?? "button"} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
        {inner}
      </button>
    );
  }

  if (variant === "accent") {
    const inner = (
      <span
        className={`group inline-flex items-center gap-2 ${sizePadding[size]} rounded-full accent-grad text-white ${sizeText[size]} font-medium hover:opacity-95 active:scale-[0.98] transition ${className}`.trim()}
      >
        {children}
        {arrow && (
          <span className={`${sizeArrow[size]} rounded-full bg-white/20 grid place-items-center`}>
            <Icon.Arrow width={13} height={13} className="btn-arrow" />
          </span>
        )}
      </span>
    );
    if (href) {
      return (
        <Link href={href} target={newTab ? "_blank" : undefined} aria-label={ariaLabel}>
          {inner}
        </Link>
      );
    }
    return (
      <button type={type ?? "button"} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
        {inner}
      </button>
    );
  }

  // primary — white/ink pill that fills with brand gradient on hover
  const inner = (
    <span className="group relative cta-pulse rounded-full isolate inline-flex">
      <span
        className={`hero-cta-pill inline-flex items-center gap-2 ${sizePadding[size]} rounded-full bg-white text-black leading-none ${className}`.trim()}
      >
        <span className={`hero-cta-text ${sizeText[size]} font-medium`}>{children}</span>
        {arrow && (
          <span
            className={`hero-cta-arrow ${sizeArrow[size]} rounded-full accent-grad grid place-items-center text-white btn-arrow flex-shrink-0`}
          >
            <Icon.Arrow width={13} height={13} />
          </span>
        )}
      </span>
    </span>
  );
  if (href) {
    return (
      <Link href={href} target={newTab ? "_blank" : undefined} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
