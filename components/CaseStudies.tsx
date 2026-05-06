"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES, type CaseStudy } from "./data";
import { Icon, ProjectIcon } from "./icons";

/**
 * Hover-driven home portfolio. Hovering or clicking a list row on the left
 * swaps the panel on the right. The panel is sticky on desktop so the row
 * list scrolls naturally while the active project preview stays visible.
 *
 * - Per-project accent paints the case-row bar, panel rim, and the moving
 *   conic glow ring (--case-glow-rgb).
 * - AnimatePresence cross-fades the panel content between projects.
 * - Real screenshots load from public/case-studies/<slug>/. Falls back to a
 *   synthetic gradient `Artwork` when no image is set.
 */
export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const cs = CASE_STUDIES[active];
  const [c1] = cs.palette;
  const c1rgb = hexToRgb(c1);
  const IconC = ProjectIcon[cs.icon];
  const N = CASE_STUDIES.length;

  return (
    <section
      id="work"
      className="section-reveal relative py-14 md:py-20 lg:py-28 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Selected work</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
              <h2 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-semibold tracking-[-0.02em] leading-[1.04]">
                Six shipped products,{" "}
                <span
                  className="serif-italic font-normal case-headline-accent case-accent-text"
                  style={{ ["--accent-raw" as string]: c1 }}
                >
                  six different worlds
                </span>
                .
              </h2>
              <Link
                href="/case-studies"
                className="group text-[13px] text-white/60 hover:text-white inline-flex items-center gap-2 shrink-0"
              >
                See full portfolio
                <Icon.ArrowUpRight
                  width={13}
                  height={13}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* List + panel */}
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Index list — hover/focus/click sets active project */}
          <ul className="col-span-12 md:col-span-4">
            {CASE_STUDIES.map((c, i) => {
              const isActive = active === i;
              return (
                <li
                  key={c.id}
                  className={i === N - 1 ? "" : "border-b border-white/10"}
                >
                  <div
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className={`case-row relative w-full flex items-center gap-4 py-4 md:py-5 px-2 transition-colors ${
                      isActive
                        ? "is-active text-white"
                        : "text-white/55 hover:text-white/85"
                    }`}
                    style={{ ["--accent-raw" as string]: c.palette[0] }}
                  >
                    <span className="case-row-bar" aria-hidden />
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="flex-1 min-w-0 text-left flex items-center gap-4"
                    >
                      <span
                        className={`case-row-num text-[10.5px] font-mono uppercase tracking-[0.2em] w-10 shrink-0 ${
                          isActive ? "case-accent-text" : ""
                        }`}
                      >
                        / 0{i + 1}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="case-row-title block text-[17px] md:text-[20px] font-semibold tracking-[-0.01em] leading-[1.2]">
                          {c.title}
                        </span>
                        <span className="block mt-0.5 text-[11px] md:text-[11.5px] text-white/45 font-mono uppercase tracking-[0.14em]">
                          {c.tag}
                        </span>
                      </span>
                    </button>
                    <Link
                      href={`/case-studies/${c.slug}`}
                      aria-label={`Open ${c.title} case study`}
                      className={`group/arrow shrink-0 grid place-items-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/15 text-white/55 hover:text-white hover:border-white/40 transition-colors ${
                        isActive ? "case-accent-text case-accent-border" : ""
                      }`}
                    >
                      <Icon.ArrowUpRight
                        width={14}
                        height={14}
                        className="transition-transform group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Sticky panel that swaps as `active` changes */}
          <div className="col-span-12 md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
                className="case-panel md:sticky md:top-24 rounded-3xl bg-white/[0.02] overflow-hidden"
                style={{
                  ["--case-glow-rgb" as string]: c1rgb,
                  ["--accent-raw" as string]: c1,
                }}
              >
                <Artwork cs={cs} />
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-xl grid place-items-center shrink-0 case-accent-text case-accent-tint case-accent-border border">
                        <IconC width={20} height={20} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-white/55 truncate">
                          {cs.tag}
                        </div>
                        <div className="text-[14.5px] font-medium truncate case-accent-text">
                          {cs.kpi}
                        </div>
                      </div>
                    </div>
                    <div className="text-[10.5px] font-mono text-white/40 shrink-0">
                      {String(active + 1).padStart(2, "0")} /{" "}
                      {String(N).padStart(2, "0")}
                    </div>
                  </div>

                  <p className="mt-6 text-[14.5px] md:text-[15.5px] text-white/65 leading-[1.6]">
                    {cs.desc}
                  </p>

                  <div className="mt-7 flex items-center gap-4 flex-wrap">
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13.5px] font-medium transition case-accent-text case-accent-tint case-accent-border border"
                    >
                      Read the case study
                      <Icon.ArrowUpRight
                        width={13}
                        height={13}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                    <div className="flex gap-1.5">
                      {cs.palette.map((p) => (
                        <span
                          key={p}
                          className="w-3 h-3 rounded-sm"
                          style={{ background: p }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */

/** "#5392df" → "83,146,223" — used to feed `rgb()` colour-mixers from a palette. */
function hexToRgb(hex: string): string {
  const m = hex.replace("#", "");
  const v = m.length === 3 ? m.split("").map((c) => c + c).join("") : m;
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  return `${r},${g},${b}`;
}

function Artwork({ cs }: { cs: CaseStudy }) {
  const [c1, c2, c3] = cs.palette;
  const IconC = ProjectIcon[cs.icon];

  // Real screenshot path — drop the cover image at /case-studies/<slug>/<file>
  if (cs.image) {
    return (
      <div className="case-art relative aspect-[16/10] md:h-[380px] lg:h-[380px] md:aspect-auto overflow-hidden bg-[#090909]">
        <Image
          src={cs.image}
          alt={cs.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 800px"
          className="object-cover"
        />
        {/* Theme-aware bottom fade — uses --bg so it ends in the page colour
            on both dark and the sky-wash light theme. No hard-coded blacks. */}
        <div
          className="case-art-fade absolute inset-0 pointer-events-none"
          aria-hidden
        />
        <div
          className="case-art-icon absolute bottom-5 left-5 w-12 h-12 rounded-2xl grid place-items-center backdrop-blur-md"
          style={{
            border: `1px solid ${c1}66`,
            color: c1,
          }}
        >
          <IconC width={22} height={22} />
        </div>
      </div>
    );
  }

  // Fallback synthetic gradient — used while a project's screenshots are pending
  return (
    <div
      className="case-art relative aspect-[16/10] md:h-[280px] lg:h-[320px] md:aspect-auto overflow-hidden"
      style={{ background: c3 }}
    >
      <div
        className="absolute inset-0 case-art-wash"
        style={{
          background: `linear-gradient(135deg, ${c1} 0%, ${c2} 50%, ${c3} 100%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />
      <div
        className="absolute bottom-5 left-5 w-14 h-14 rounded-2xl grid place-items-center backdrop-blur-sm case-art-icon"
        style={{
          background: c3 + "BB",
          border: `1px solid ${c1}55`,
          color: c1,
        }}
      >
        <IconC width={26} height={26} />
      </div>
      <div className="absolute top-5 right-5 flex gap-1.5">
        {cs.palette.map((c) => (
          <span key={c} className="w-3 h-3 rounded-sm" style={{ background: c }} />
        ))}
      </div>
    </div>
  );
}
