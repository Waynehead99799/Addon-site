"use client";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icon } from "./icons";
import { NAV } from "./data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div className={`pointer-events-auto transition-all duration-500 ${scrolled ? "max-w-3xl" : "max-w-6xl"} w-full`}>
        <div className={`glass rounded-full pl-4 pr-2 py-2 flex items-center gap-4 lg:gap-6 transition-[background,border-color,box-shadow] duration-500 ${scrolled ? "nav-scrolled" : ""}`}>
          {/* logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0 group">
            <span className="logo-mount inline-flex">
              <Logo size={56} />
            </span>
            <span className="wordmark-mount hidden sm:inline-flex flex-col leading-none">
              <span className="font-semibold tracking-[-0.02em] text-[20px] whitespace-nowrap">Addon Web</span>
              <span className="flex justify-between w-full mt-[5px] text-[10px] font-mono uppercase" style={{ color: "var(--ink-dim)" }} aria-label="solutions">
                {"SOLUTIONS".split("").map((c, i) => (
                  <span key={i}>{c}</span>
                ))}
              </span>
            </span>
          </a>

          {/* desktop links */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 min-w-0">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="px-3 py-1.5 rounded-full text-[13px] text-white/60 hover:text-white hover:bg-white/5 transition whitespace-nowrap"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* right cluster — collapses responsively */}
          <div className="hidden lg:flex items-center gap-3 ml-auto flex-shrink-0">
            <a href="#contact" className="nav-cta group relative rounded-full accent-grad p-[1.5px]">
              <span
                className="nav-cta-inner block rounded-full px-4 py-1.5 text-[13px] font-medium whitespace-nowrap"
                style={{ background: "var(--bg)", color: "var(--ink)" }}
              >
                Start a project
              </span>
            </a>
          </div>

          {/* tablet (md) — only CTA, no links, no booking chip */}
          <a
            href="#contact"
            className="nav-cta hidden md:inline-flex lg:hidden ml-auto rounded-full accent-grad p-[1.5px] flex-shrink-0"
          >
            <span
              className="nav-cta-inner block rounded-full px-4 py-1.5 text-[13px] font-medium whitespace-nowrap"
              style={{ background: "var(--bg)", color: "var(--ink)" }}
            >
              Start a project
            </span>
          </a>

          {/* mobile burger */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden ml-auto w-9 h-9 rounded-full glass-lite grid place-items-center flex-shrink-0"
            aria-label="Toggle menu"
          >
            {open ? <Icon.X width={16} height={16} /> : <Icon.Menu width={16} height={16} />}
          </button>
        </div>

        {/* mobile + tablet drawer */}
        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-xl text-sm text-white/70 hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="nav-cta mt-1 rounded-xl accent-grad p-[1.5px]"
            >
              <span
                className="nav-cta-inner block rounded-[10px] px-3 py-2 text-sm font-medium text-center"
                style={{ background: "var(--bg)", color: "var(--ink)" }}
              >
                Start a project
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
