"use client";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "./data";
import { Icon } from "./icons";

const COMPANIES = [
  { short: "Camera Telematics", color: "#5392df", rgb: "83,146,223", region: "UK & Ireland", tenure: "12+ years" },
  { short: "Nature Checkout",   color: "#5dd5ab", rgb: "93,213,171", region: "USA",          tenure: "App partner" },
  { short: "Road Devil",        color: "#ff6b5b", rgb: "255,107,91", region: "UK & Ireland", tenure: "Hardware + Platform" },
  { short: "Nyaay AI",          color: "#2dbcd2", rgb: "45,188,210", region: "USA",          tenure: "App partner" },
];

// Full testimonial text shown in the expanded modal
const EXTENDED: Record<number, string[]> = {
  0: [
    "We have worked with Addon Web Solutions for over 12 years, during which time they have been responsible for the design and ongoing development of the software platform underpinning third-party camera systems central to our operations.",
    "Over this period, Addon have become a key technology partner, providing a stable and dependable platform that we rely on day-to-day. Their technical capability, particularly in backend platform development, has been critical in supporting the performance and continuity of our systems.",
    "The team are consistently professional, responsive, and solutions-focused. They deal with requirements efficiently, maintain a high level of attention to detail, and are proactive in resolving issues. Importantly, they have always been available to provide support whenever needed.",
    "We would have no hesitation in recommending Addon Web Solutions as a trusted and capable long-term technology partner.",
  ],
  1: [
    "I highly recommend Addon Web Solutions for outstanding app development services. They successfully developed both a cleaning app and a grocery app for my business with professionalism, creativity, and strong technical execution.",
    "The team was exceptional to work with — responsive, solution-oriented, and deeply committed to delivering quality at every stage of the project. They translated my vision into functional, user-friendly applications while offering valuable improvements along the way.",
    "What impressed me most was their reliability, attention to detail, and dedication to meeting business objectives. If you are looking for a trusted development partner that delivers real results, Addon Web Solutions is an excellent choice.",
  ],
  2: [
    "We came to Addon with a genuinely complex brief. Road Devil operates at the intersection of proprietary hardware, embedded AI, and a multi-tenant SaaS platform — and we needed a technology partner who wouldn't flinch at any layer of that stack.",
    "On the hardware side, they engineered a purpose-built device architecture that slots perfectly into our commercial vehicle deployment model. It's robust, it's scalable, and critically, it preserves our full IP ownership — something non-negotiable for us as a business built on defensible technology.",
    "Their PaaS solution was equally impressive. Addon built and deployed a platform that supports our per-vehicle SaaS model, handles structured data ingestion across telematics and fleet ecosystems, and gives us the API-led flexibility to onboard partners — whether that's insurers, OEMs, or fleet operators — without friction.",
    "The architecture they delivered is clean, well-documented, and built to grow with us.",
    "Beyond the technical delivery, Addon brought genuine consultative thinking to every stage. They asked the right questions, challenged assumptions where it mattered, and consistently delivered on time. For a company like ours — where the platform is the product — that level of engineering rigour and commercial awareness made all the difference.",
    "I wouldn't hesitate to recommend Addon Web Solutions to any technology business that needs a partner capable of operating across hardware, infrastructure, and platform delivery simultaneously.",
    "As our journey continues with Addon, we look forward to future developments with the talented team, who have become friends along the way.",
  ],
  3: [
    "Addon Web Solutions delivered exceptional results on my app project. Their team was responsive and supportive throughout the entire process.",
    "Every feature was developed on time and executed flawlessly — they understood the requirements and delivered exactly what was promised. The quality of work and attention to detail was impressive.",
    "The final output exceeded my expectations and works perfectly. I'd highly recommend them to anyone needing reliable app development or customised software development.",
  ],
};

function TestimonialModal({
  t, c, activeIndex, onClose,
}: {
  t: typeof TESTIMONIALS[number];
  c: typeof COMPANIES[number];
  activeIndex: number;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [handleEsc]);

  if (!mounted) return null;

  const paragraphs = EXTENDED[activeIndex];

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[90] bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ x: "-50%", y: "-50%" }}
        className="fixed z-[100] w-[calc(100%-32px)] max-w-4xl left-1/2 top-1/2"
      >
        <div
          className="test-modal-card rounded-t-2xl md:rounded-2xl border overflow-hidden flex max-h-[88svh]"
          style={{ borderColor: `rgba(${c.rgb}, 0.25)` }}
        >
          {/* Sidebar — hidden on mobile */}
          <div
            className="hidden md:flex flex-col justify-between w-60 flex-shrink-0 p-7 border-r border-white/5"
            style={{ background: `rgba(${c.rgb}, 0.05)` }}
          >
            <div>
              <div
                className="w-11 h-11 rounded-xl grid place-items-center font-mono text-[13px] font-bold mb-6"
                style={{ background: `rgba(${c.rgb}, 0.14)`, color: c.color, border: `1px solid rgba(${c.rgb}, 0.35)` }}
              >
                {c.short.split(" ").map((s) => s[0]).join("").slice(0, 2)}
              </div>

              <div className="test-modal-sidebar-label text-[10.5px] font-mono uppercase tracking-[0.14em] text-white/30 mb-1">Client</div>
              <div className="text-[14px] font-semibold leading-snug">{t.n}</div>
              <div className="text-[11.5px] text-white/45 mt-0.5 serif-italic">{t.r}</div>

              <div className="mt-5 pt-5 border-t border-white/5">
                <div className="test-modal-sidebar-label text-[10.5px] font-mono uppercase tracking-[0.14em] text-white/30 mb-1">Company</div>
                <div className="text-[13px] font-medium">{c.short}</div>
                <div className="text-[12px] text-white/35 mt-0.5">{c.region}</div>
              </div>

              <div className="mt-5 pt-5 border-t border-white/5">
                <div className="test-modal-sidebar-label text-[10.5px] font-mono uppercase tracking-[0.14em] text-white/30 mb-1">Partnership</div>
                <div className="text-[13px] font-medium">{c.tenure}</div>
              </div>
            </div>

            {/* Avatar at bottom */}
            <div className="flex items-center gap-2.5 mt-8">
              <div className="w-9 h-9 rounded-full accent-grad grid place-items-center text-[11px] font-semibold text-black/80 shrink-0">
                {t.n.split(" ").map((s) => s[0]).slice(0, 2).join("")}
              </div>
              <div className="text-[12px] text-white/40 serif-italic leading-tight">{t.n}</div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col flex-1 min-w-0">
            {/* Header */}
            <div className="test-modal-header flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/5 flex-shrink-0">
              {/* Mobile-only: show name here */}
              <div className="flex items-center gap-3 md:hidden">
                <div
                  className="w-8 h-8 rounded-xl grid place-items-center font-mono text-[11px] font-bold shrink-0"
                  style={{ background: `rgba(${c.rgb}, 0.14)`, color: c.color, border: `1px solid rgba(${c.rgb}, 0.35)` }}
                >
                  {c.short.split(" ").map((s) => s[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="text-[13px] font-semibold leading-none">{t.n}</div>
                  <div className="text-[11px] text-white/40 mt-0.5 serif-italic">{c.short}</div>
                </div>
              </div>
              <div className="hidden md:block text-[13px] font-semibold text-white/70">Full testimonial</div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-8 h-8 rounded-full border border-white/10 grid place-items-center text-white/40 hover:text-white hover:border-white/25 active:bg-white/5 transition flex-shrink-0 ml-auto"
              >
                <Icon.X width={13} height={13} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto px-6 pt-6 pb-8 md:px-9 md:pt-8 md:pb-10">
              <span
                className="serif-italic text-[56px] md:text-[72px] leading-none block -mb-2"
                style={{ color: `rgba(${c.rgb}, 0.40)` }}
                aria-hidden
              >
                &ldquo;
              </span>

              {paragraphs ? (
                <div className="space-y-5">
                  {paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="serif-italic text-[16px] sm:text-[18px] md:text-[19px] leading-[1.68] text-white/85"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              ) : (
                <blockquote className="serif-italic text-[20px] sm:text-[24px] leading-[1.3] tracking-[-0.01em] text-white/90">
                  {t.q}
                </blockquote>
              )}
            </div>

            {/* iOS safe area */}
            <div className="md:hidden flex-shrink-0" style={{ paddingBottom: "env(safe-area-inset-bottom)" }} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const t = TESTIMONIALS[active];
  const c = COMPANIES[active] ?? COMPANIES[0];

  return (
    <section id="testimonials" className="section-reveal relative py-14 md:py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 md:gap-10 mb-10 md:mb-12">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Trusted</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[32px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-semibold tracking-[-0.02em] leading-[1.05]">
              The kind of partner{" "}
              <span className="serif-italic font-normal text-white/70">you rehire</span>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Client list */}
          <div className="col-span-12 md:col-span-5">
            <div className="grid grid-cols-1 gap-3">
              {COMPANIES.map((co, i) => {
                const isActive = active === i;
                const person = TESTIMONIALS[i];
                const initials = person.n
                  .split(" ")
                  .map((s) => s[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();
                return (
                  <button
                    key={person.n}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`test-tile flex items-center gap-4 p-5 rounded-2xl border bg-white/[0.02] text-left ${
                      isActive ? "is-active" : "border-white/10"
                    }`}
                    style={{
                      ["--svc" as string]: co.color,
                      ["--svc-rgb" as string]: co.rgb,
                    }}
                  >
                    <div
                      className="test-mono w-12 h-12 rounded-xl grid place-items-center font-mono text-[14px] font-bold shrink-0"
                      style={{
                        background: `rgba(${co.rgb}, 0.14)`,
                        color: co.color,
                        border: `1px solid rgba(${co.rgb}, 0.40)`,
                      }}
                    >
                      {initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[14px] sm:text-[15px] font-semibold truncate">{TESTIMONIALS[i].n}</div>
                      <div className="text-[12px] sm:text-[13px] text-white/55 mt-0.5 truncate">{co.short}</div>
                    </div>
                    <span className="test-tile-arrow text-white/35 flex-shrink-0">→</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active quote panel */}
          <div className="col-span-12 md:col-span-7">
            <div
              key={t.n}
              className="test-panel rounded-2xl border bg-white/[0.02] p-6 sm:p-8 md:p-10 h-full flex flex-col justify-center"
              style={{ borderColor: `rgba(${c.rgb}, 0.30)` }}
            >
              <span
                className="test-quote-mark serif-italic text-[32px] sm:text-[48px] md:text-[80px] leading-none mb-2"
                style={{ color: `rgba(${c.rgb}, 0.35)` }}
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="test-quote serif-italic text-[20px] sm:text-[24px] md:text-[34px] leading-[1.35] sm:leading-[1.28] md:leading-[1.18] tracking-[-0.01em] text-white/90 -mt-4">
                {t.q}
              </blockquote>
              <div className="test-cite mt-7 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full accent-grad grid place-items-center text-[13px] font-semibold text-black/80 shrink-0">
                  {t.n.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[14.5px] font-medium">{t.n}</div>
                  <div className="text-[12.5px] text-white/55 serif-italic">{t.r}</div>
                </div>
                {(EXTENDED[active] || true) && (
                  <button
                    onClick={() => setModalOpen(true)}
                    className="test-read-more flex-shrink-0 text-[12.5px] text-white/45 hover:text-white/80 transition-colors underline underline-offset-2 decoration-white/20 hover:decoration-white/50"
                  >
                    Read more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <TestimonialModal t={t} c={c} activeIndex={active} onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
}
