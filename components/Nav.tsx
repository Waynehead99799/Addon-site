"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Icon } from "./icons";
import { AI_SERVICES, SERVICES_DATA } from "./pagesData";

type NavItem =
  | { label: string; href: string }
  | { label: string; href: string; children: { label: string; href: string }[] };

const NAV: NavItem[] = [
  {
    label: "AddonAI",
    href: "/addonai",
    children: AI_SERVICES.map((s) => ({ label: s.title, href: `/addonai/${s.slug}` })),
  },
  {
    label: "Services",
    href: "/services",
    children: SERVICES_DATA.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Hire", href: "/hire-dedicated-developers" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const pathname = usePathname() || "/";
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 md:pt-6 px-3 sm:px-6 md:px-8 pointer-events-none">
      <div
        className={`pointer-events-auto transition-all duration-500 ${
          scrolled ? "max-w-5xl" : "max-w-7xl"
        } w-full`}
      >
        <div
          className={`glass rounded-full pl-4 pr-2 py-2 flex items-center gap-4 lg:gap-6 transition-[background,border-color,box-shadow] duration-500 ${
            scrolled ? "nav-scrolled" : ""
          }`}
        >
          {/* logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <span className="logo-mount inline-flex">
              <Logo size={56} />
            </span>
            <span className="wordmark-mount inline-flex flex-col leading-none">
              <span className="font-semibold tracking-[-0.02em] text-[20px] whitespace-nowrap">
                Addon Web
              </span>
              <span
                className="flex justify-between w-full mt-[5px] text-[10px] font-mono uppercase"
                style={{ color: "var(--ink-dim)" }}
                aria-label="solutions"
              >
                {"SOLUTIONS".split("").map((c, i) => (
                  <span key={i}>{c}</span>
                ))}
              </span>
            </span>
          </Link>

          {/* desktop links */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 min-w-0">
            {NAV.map((n) => {
              const hasChildren = "children" in n;
              const active = isActive(n.href);
              return (
                <div
                  key={n.href}
                  className="relative"
                  onMouseEnter={() => hasChildren && setActiveDropdown(n.label)}
                  onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                >
                  <Link
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    className={`nav-tab px-3 py-2 rounded-full text-[13.5px] font-medium tracking-[-0.005em] whitespace-nowrap flex items-center gap-1 ${
                      active ? "is-active" : ""
                    }`}
                  >
                    {n.label}
                    {hasChildren && (
                      <svg
                        width={10}
                        height={10}
                        viewBox="0 0 12 12"
                        fill="none"
                        className="nav-tab-caret"
                      >
                        <path
                          d="m2 4 4 4 4-4"
                          stroke="currentColor"
                          strokeWidth={1.7}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>
                  {hasChildren && activeDropdown === n.label && (
                    <div className="nav-dropdown absolute top-full left-0 -translate-x-2 pt-3 w-[280px] z-50">
                      <div className="nav-dropdown-panel rounded-2xl p-2 max-h-[70vh] overflow-y-auto">
                        <Link
                          href={n.href}
                          className="nav-sub-all flex items-center justify-between px-3 py-2.5 rounded-xl text-[13px] font-semibold text-white/95"
                        >
                          <span className="serif-italic font-normal">All {n.label}</span>
                          <Icon.ArrowUpRight width={13} height={13} className="nav-sub-arrow shrink-0" />
                        </Link>
                        <div className="mt-1 border-t border-white/10 pt-1">
                          {n.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="nav-sub group/sub flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-[13px] text-white/70"
                            >
                              <span className="nav-sub-label inline-flex items-center gap-2">
                                <span className="nav-sub-dot" aria-hidden />
                                {c.label}
                              </span>
                              <Icon.ArrowUpRight width={11} height={11} className="nav-sub-arrow shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* right cluster */}
          <div className="hidden lg:flex items-center gap-3 ml-auto flex-shrink-0">
            <Link href="/contact" className="nav-cta group relative rounded-full accent-grad p-[1.5px]">
              <span
                className="nav-cta-inner block rounded-full px-4 py-1.5 text-[13px] font-medium whitespace-nowrap"
                style={{ background: "var(--bg)", color: "var(--ink)" }}
              >
                Start a project
              </span>
            </Link>
          </div>

          {/* tablet — only CTA */}
          <Link
            href="/contact"
            className="nav-cta hidden md:inline-flex lg:hidden ml-auto rounded-full accent-grad p-[1.5px] flex-shrink-0"
          >
            <span
              className="nav-cta-inner block rounded-full px-4 py-1.5 text-[13px] font-medium whitespace-nowrap"
              style={{ background: "var(--bg)", color: "var(--ink)" }}
            >
              Start a project
            </span>
          </Link>

          {/* mobile burger */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden ml-auto w-11 h-11 rounded-full glass-lite grid place-items-center flex-shrink-0"
            aria-label="Toggle menu"
          >
            {open ? <Icon.X width={18} height={18} /> : <Icon.Menu width={18} height={18} />}
          </button>
        </div>

        {/* mobile + tablet drawer */}
        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-3 flex flex-col gap-0.5 max-h-[80vh] overflow-y-auto">
            {NAV.map((n) => {
              const hasChildren = "children" in n;
              const isOpen = mobileOpen === n.label;
              return (
                <div key={n.href}>
                  <div className="flex items-center">
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="flex-1 px-3 py-3 rounded-xl text-[15px] text-white/80 hover:bg-white/5"
                    >
                      {n.label}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={() => setMobileOpen(isOpen ? null : n.label)}
                        className="w-11 h-11 rounded-xl hover:bg-white/5 grid place-items-center"
                        aria-label={`Toggle ${n.label} sub-menu`}
                      >
                        <svg
                          width={11}
                          height={11}
                          viewBox="0 0 12 12"
                          fill="none"
                          className={`text-white/60 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        >
                          <path
                            d="m2 4 4 4 4-4"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                  {hasChildren && isOpen && (
                    <div className="pl-3 pb-2 space-y-0.5 border-l border-white/10 ml-4 mt-1">
                      {n.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block px-3 py-2.5 rounded-lg text-[14px] text-white/55 hover:text-white hover:bg-white/5"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="nav-cta mt-2 rounded-xl accent-grad p-[1.5px]"
            >
              <span
                className="nav-cta-inner block rounded-[10px] px-3 py-3 text-[15px] font-medium text-center"
                style={{ background: "var(--bg)", color: "var(--ink)" }}
              >
                Start a project
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
