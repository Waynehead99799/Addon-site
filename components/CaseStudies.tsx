"use client";
import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import { CASE_STUDIES, type CaseStudy } from "./data";
import { Icon, ProjectIcon } from "./icons";

/**
 * Scroll-driven home portfolio.
 *
 * The section reserves N × 100svh of scroll length so that scrolling forward or
 * backward smoothly advances/recedes the active project. The list-and-panel UI
 * is sticky-pinned to the viewport while the user moves through that scroll
 * window. AnimatePresence transitions the right-hand panel as `active` flips.
 *
 * On `prefers-reduced-motion`, the scroll-jack is disabled and projects render
 * stacked one per screen (still readable, no surprise scroll behaviour).
 */
export default function CaseStudies() {
  const reduced = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const N = CASE_STUDIES.length;

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0..1) to active index. Setting state inside the motion
  // event would re-render every frame — guard with a ref so we only react when
  // the discrete index actually changes.
  const lastActiveRef = useRef(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(N - 1, Math.max(0, Math.floor(v * N)));
    if (idx !== lastActiveRef.current) {
      lastActiveRef.current = idx;
      setActive(idx);
    }
  });

  // Click a list row → smooth-scroll the page to that segment's centre
  const goTo = (i: number) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const rect = el.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const segment = el.offsetHeight / N;
    const target = sectionTop + i * segment + segment / 2 - window.innerHeight / 2;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const cs = CASE_STUDIES[active];
  const [c1] = cs.palette;
  const c1rgb = hexToRgb(c1);
  const IconC = ProjectIcon[cs.icon];

  return (
    <section id="work" className="relative border-t border-white/5 pb-20 md:pb-28">
      {/* Scroll-driven carousel — header is INSIDE the sticky pin so the title
          stays on screen while projects advance, instead of scrolling out the
          moment the pin engages.
          Per-project scroll length is 60svh so the whole carousel takes ~3.6
          viewport heights of scroll instead of the prior 6× — feels paced, not
          endless. Adjust by changing the multiplier below. */}
      <div
        ref={scrollRef}
        className="relative"
        style={{ height: reduced ? "auto" : `${N * 60}svh` }}
      >
        <div
          className={
            reduced
              ? "px-6 py-16"
              : "sticky top-0 h-screen flex flex-col will-change-transform"
          }
        >
          {/* Header — pinned with the carousel so it never disappears mid-scroll */}
          <div className="max-w-7xl mx-auto px-6 w-full pt-20 md:pt-24 pb-6 md:pb-8 shrink-0">
            <div className="grid grid-cols-12 gap-6 md:gap-10">
              <div className="col-span-12 md:col-span-3">
                <div className="eyebrow">Selected work</div>
                <div className="mt-3 serif-italic text-white/55 text-[15px]">
                  Six worlds, one team.
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
                  <h2 className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[52px] font-semibold tracking-[-0.02em] leading-[1.04]">
                    Six shipped products,{" "}
                    <span
                      className="serif-italic font-normal case-headline-accent"
                      style={{ color: c1 }}
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
          </div>

          {/* Carousel body — fills remaining height; flex-1 so it expands inside the pin */}
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-12 gap-6 md:gap-10">
                {/* Index list (acts as scroll-progress legend) */}
              <ul className="col-span-12 md:col-span-5 border-t border-white/10">
                {CASE_STUDIES.map((c, i) => {
                  const isActive = active === i;
                  return (
                    <li key={c.id} className="border-b border-white/10">
                      <button
                        onClick={() => goTo(i)}
                        className={`case-row w-full text-left flex items-center gap-4 py-4 md:py-5 px-2 transition-colors ${
                          isActive
                            ? "is-active text-white"
                            : "text-white/55 hover:text-white/85"
                        }`}
                        style={{ ["--accent" as string]: c.palette[0] }}
                      >
                        <span className="case-row-bar" aria-hidden />
                        <span
                          className="case-row-num text-[10.5px] font-mono uppercase tracking-[0.2em] w-10 shrink-0"
                          style={isActive ? { color: c.palette[0] } : undefined}
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
                        <Icon.ArrowUpRight
                          width={14}
                          height={14}
                          className="case-row-arrow text-white/35 shrink-0"
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Animated detail panel */}
              <div className="col-span-12 md:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={cs.id}
                    initial={{ opacity: 0, y: reduced ? 0 : 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduced ? 0 : -24 }}
                    transition={{ duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
                    className="case-panel rounded-3xl border bg-white/[0.02] overflow-hidden"
                    style={{
                      borderColor: c1 + "33",
                      ["--case-glow-rgb" as string]: c1rgb,
                    }}
                  >
                    <Artwork cs={cs} />
                    <div className="p-6 md:p-8">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className="w-12 h-12 rounded-xl grid place-items-center shrink-0"
                            style={{
                              background: c1 + "22",
                              color: c1,
                              border: `1px solid ${c1}55`,
                            }}
                          >
                            <IconC width={20} height={20} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-white/55 truncate">
                              {cs.tag}
                            </div>
                            <div
                              className="text-[14.5px] font-medium truncate"
                              style={{ color: c1 }}
                            >
                              {cs.kpi}
                            </div>
                          </div>
                        </div>
                        <div className="text-[10.5px] font-mono text-white/40 shrink-0">
                          {String(active + 1).padStart(2, "0")} /{" "}
                          {String(N).padStart(2, "0")}
                        </div>
                      </div>

                      <h3 className="mt-6 text-[24px] md:text-[30px] lg:text-[34px] font-semibold tracking-[-0.01em] leading-[1.08]">
                        {cs.title}
                      </h3>
                      <p className="mt-3 text-[14.5px] md:text-[15.5px] text-white/65 leading-[1.6]">
                        {cs.desc}
                      </p>

                      <div className="mt-7 flex items-center gap-4 flex-wrap">
                        <Link
                          href={`/case-studies/${cs.slug}`}
                          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13.5px] font-medium transition"
                          style={{
                            background: c1 + "1A",
                            color: c1,
                            border: `1px solid ${c1}55`,
                          }}
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

                {/* Scroll hint + progress dots */}
                {!reduced && (
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {CASE_STUDIES.map((c, i) => (
                        <span
                          key={c.id}
                          className="h-1 rounded-full transition-all duration-500"
                          style={{
                            width: active === i ? 22 : 8,
                            background:
                              active === i ? c1 : "rgba(255,255,255,0.18)",
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[10.5px] font-mono text-white/35 uppercase tracking-[0.18em]">
                      <span>scroll</span>
                      <span aria-hidden className="animate-pulse">↓</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
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
      <div className="case-art relative aspect-[16/10] md:h-[320px] lg:h-[360px] md:aspect-auto overflow-hidden bg-white/[0.02]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cs.image}
          alt={cs.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
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
      className="case-art relative aspect-[16/10] md:h-[320px] lg:h-[360px] md:aspect-auto overflow-hidden"
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
