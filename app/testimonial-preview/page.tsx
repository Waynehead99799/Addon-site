"use client";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const PERSON = {
  n: "Stephen Kennedy",
  r: "Chairman, Camera Telematics Ltd · UK & Ireland",
  q: "We've worked with Addon for over twelve years — the platform underpinning our camera systems is theirs. Stable, dependable, and proactive. A trusted long-term technology partner.",
  color: "#5392df",
  rgb: "83,146,223",
  company: "Camera Telematics",
};

const PARAGRAPHS = [
  "We have worked with Addon Web Solutions for over 12 years, during which time they have been responsible for the design and ongoing development of the software platform underpinning third-party camera systems central to our operations.",
  "Over this period, Addon have become a key technology partner, providing a stable and dependable platform that we rely on day-to-day. Their technical capability, particularly in backend platform development, has been critical in supporting the performance and continuity of our systems.",
  "The team are consistently professional, responsive, and solutions-focused. They deal with requirements efficiently, maintain a high level of attention to detail, and are proactive in resolving issues. Importantly, they have always been available to provide support whenever needed.",
  "We would have no hesitation in recommending Addon Web Solutions as a trusted and capable long-term technology partner.",
];

// ─── Shared close button ───────────────────────────────────────────────────
function CloseBtn({ onClose }: { onClose: () => void }) {
  return (
    <button
      onClick={onClose}
      className="w-8 h-8 rounded-full border border-white/10 grid place-items-center text-white/40 hover:text-white hover:border-white/25 transition flex-shrink-0"
    >
      <svg viewBox="0 0 24 24" width={13} height={13} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
        <path d="M6 6l12 12M18 6l-12 12" />
      </svg>
    </button>
  );
}

// ─── Option A: Full-screen editorial overlay ──────────────────────────────
function OptionA({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [onClose]);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="a-bg"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        key="a-panel"
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
        className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-8 pointer-events-none"
      >
        <div
          className="pointer-events-auto w-full md:max-w-3xl max-h-[92svh] md:max-h-[85svh] flex flex-col rounded-t-3xl md:rounded-3xl overflow-hidden"
          style={{ background: "#0e0c0b", border: `1px solid rgba(${PERSON.rgb}, 0.2)` }}
        >
          {/* top accent bar */}
          <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, rgba(${PERSON.rgb},0) 0%, rgba(${PERSON.rgb},0.7) 50%, rgba(${PERSON.rgb},0) 100%)` }} />
          {/* header */}
          <div className="flex items-center justify-between px-7 pt-6 pb-5 border-b border-white/5 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full accent-grad grid place-items-center text-[13px] font-semibold text-black/80 shrink-0">
                {PERSON.n.split(" ").map(s => s[0]).slice(0, 2).join("")}
              </div>
              <div>
                <div className="text-[14px] font-semibold">{PERSON.n}</div>
                <div className="text-[12px] text-white/45 mt-0.5 italic">{PERSON.r}</div>
              </div>
            </div>
            <CloseBtn onClose={onClose} />
          </div>
          {/* scrollable body */}
          <div className="overflow-y-auto px-7 pt-8 pb-10 md:px-10 md:pt-10 md:pb-12">
            <span className="italic text-[64px] md:text-[88px] leading-none block -mb-3" style={{ color: `rgba(${PERSON.rgb}, 0.35)`, fontFamily: "var(--font-instrument-serif)" }}>&ldquo;</span>
            <div className="space-y-5 mt-2">
              {PARAGRAPHS.map((p, i) => (
                <p key={i} className="italic text-[17px] md:text-[20px] leading-[1.65] text-white/85" style={{ fontFamily: "var(--font-instrument-serif)" }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

// ─── Option B: Wide modal with sidebar ────────────────────────────────────
function OptionB({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [onClose]);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="b-bg"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        key="b-modal"
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ x: "-50%", y: "-50%" }}
        className="fixed z-[100] w-[calc(100%-32px)] max-w-4xl left-1/2 top-1/2"
      >
        <div className="rounded-2xl overflow-hidden flex max-h-[85svh]" style={{ background: "#0e0c0b", border: `1px solid rgba(${PERSON.rgb}, 0.2)` }}>
          {/* sidebar */}
          <div className="hidden md:flex flex-col justify-between w-64 flex-shrink-0 p-8 border-r border-white/5" style={{ background: `rgba(${PERSON.rgb}, 0.04)` }}>
            <div>
              <div className="w-12 h-12 rounded-xl grid place-items-center font-mono text-[13px] font-bold mb-6" style={{ background: `rgba(${PERSON.rgb}, 0.14)`, color: PERSON.color, border: `1px solid rgba(${PERSON.rgb}, 0.35)` }}>
                {PERSON.company.split(" ").map(s => s[0]).join("").slice(0, 2)}
              </div>
              <div className="text-[13px] text-white/45 uppercase tracking-[0.1em] mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>Client</div>
              <div className="text-[15px] font-semibold">{PERSON.n}</div>
              <div className="text-[12px] text-white/45 mt-1 italic" style={{ fontFamily: "var(--font-instrument-serif)" }}>{PERSON.r}</div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="text-[13px] text-white/45 uppercase tracking-[0.1em] mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>Company</div>
                <div className="text-[14px] font-medium">{PERSON.company}</div>
                <div className="mt-1 text-[12px] text-white/35">UK & Ireland</div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="text-[13px] text-white/45 uppercase tracking-[0.1em] mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>Partnership</div>
                <div className="text-[14px] font-medium">12+ years</div>
              </div>
            </div>
          </div>
          {/* main content */}
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-center justify-between px-7 pt-6 pb-4 border-b border-white/5 flex-shrink-0">
              <div className="text-[13px] font-semibold">Full Testimonial</div>
              <CloseBtn onClose={onClose} />
            </div>
            <div className="overflow-y-auto px-7 pt-7 pb-10 md:px-9">
              <span className="italic text-[56px] md:text-[72px] leading-none block -mb-2" style={{ color: `rgba(${PERSON.rgb}, 0.35)`, fontFamily: "var(--font-instrument-serif)" }}>&ldquo;</span>
              <div className="space-y-5">
                {PARAGRAPHS.map((p, i) => (
                  <p key={i} className="italic text-[16px] md:text-[18px] leading-[1.65] text-white/85" style={{ fontFamily: "var(--font-instrument-serif)" }}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

// ─── Option C: Right-side drawer ──────────────────────────────────────────
function OptionC({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [onClose]);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="c-bg"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        key="c-drawer"
        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        className="fixed right-0 top-0 bottom-0 z-[100] w-full md:w-[480px] flex flex-col"
        style={{ background: "#0e0c0b", borderLeft: `1px solid rgba(${PERSON.rgb}, 0.2)` }}
      >
        {/* accent bar */}
        <div className="h-0.5 w-full flex-shrink-0" style={{ background: `linear-gradient(90deg, transparent, rgba(${PERSON.rgb},0.8))` }} />
        <div className="flex items-center justify-between px-7 pt-6 pb-5 border-b border-white/5 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl grid place-items-center font-mono text-[12px] font-bold shrink-0" style={{ background: `rgba(${PERSON.rgb}, 0.14)`, color: PERSON.color, border: `1px solid rgba(${PERSON.rgb}, 0.35)` }}>
              {PERSON.company.split(" ").map(s => s[0]).join("").slice(0, 2)}
            </div>
            <div>
              <div className="text-[13px] font-semibold">{PERSON.n}</div>
              <div className="text-[11.5px] text-white/45 mt-0.5 italic" style={{ fontFamily: "var(--font-instrument-serif)" }}>{PERSON.r}</div>
            </div>
          </div>
          <CloseBtn onClose={onClose} />
        </div>
        <div className="overflow-y-auto flex-1 px-7 pt-8 pb-10">
          <span className="italic text-[56px] leading-none block -mb-2" style={{ color: `rgba(${PERSON.rgb}, 0.35)`, fontFamily: "var(--font-instrument-serif)" }}>&ldquo;</span>
          <div className="space-y-5">
            {PARAGRAPHS.map((p, i) => (
              <p key={i} className="italic text-[16px] md:text-[18px] leading-[1.65] text-white/85" style={{ fontFamily: "var(--font-instrument-serif)" }}>{p}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

// ─── Option D: Expand in place ────────────────────────────────────────────
function OptionDPanel() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-2xl border p-6 sm:p-8 flex flex-col"
      style={{ borderColor: `rgba(${PERSON.rgb}, 0.30)`, background: "rgba(255,255,255,0.02)" }}
    >
      <span className="italic text-[48px] leading-none mb-2" style={{ color: `rgba(${PERSON.rgb}, 0.35)`, fontFamily: "var(--font-instrument-serif)" }}>&ldquo;</span>
      <blockquote className="italic text-[20px] sm:text-[24px] leading-[1.22] tracking-[-0.01em] text-white/90 -mt-4" style={{ fontFamily: "var(--font-instrument-serif)" }}>
        {PERSON.q}
      </blockquote>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 mt-6 pt-6 border-t border-white/5">
              {PARAGRAPHS.map((p, i) => (
                <p key={i} className="italic text-[16px] leading-[1.65] text-white/75" style={{ fontFamily: "var(--font-instrument-serif)" }}>{p}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-7 flex items-center gap-3">
        <div className="w-11 h-11 rounded-full accent-grad grid place-items-center text-[13px] font-semibold text-black/80 shrink-0">
          {PERSON.n.split(" ").map(s => s[0]).slice(0, 2).join("")}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[14.5px] font-medium">{PERSON.n}</div>
          <div className="text-[12.5px] text-white/55 italic" style={{ fontFamily: "var(--font-instrument-serif)" }}>{PERSON.r}</div>
        </div>
        <button
          onClick={() => setExpanded(v => !v)}
          className="flex-shrink-0 text-[12.5px] text-white/45 hover:text-white/80 transition-colors underline underline-offset-2 decoration-white/20 hover:decoration-white/50"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </div>
    </div>
  );
}

// ─── Preview page ──────────────────────────────────────────────────────────
const OPTIONS = [
  { id: "A", label: "Full-screen editorial overlay", tag: "Recommended", component: OptionA },
  { id: "B", label: "Wide modal + sidebar", tag: "Context-rich", component: OptionB },
  { id: "C", label: "Right-side drawer", tag: "App-like", component: OptionC },
];

export default function TestimonialPreviewPage() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0908] text-white px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-3 font-mono text-[11px] tracking-[0.18em] uppercase text-white/35">Design Preview</div>
        <h1 className="text-[32px] md:text-[48px] font-semibold tracking-[-0.02em] leading-[1.05] mb-3">
          Testimonial{" "}
          <span className="italic font-normal text-white/60" style={{ fontFamily: "var(--font-instrument-serif)" }}>Read more</span>{" "}
          options
        </h1>
        <p className="text-white/50 text-[15px] mb-14 max-w-xl">
          Click each "Read more" button below to preview how the expanded testimonial will look. Pick your favourite and let us know.
        </p>

        {/* Options A, B, C — modal triggers */}
        <div className="space-y-6 mb-16">
          {OPTIONS.map(({ id, label, tag, component: Modal }) => (
            <div key={id}>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/30">Option {id}</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 text-white/40">{tag}</span>
                <span className="text-[13px] text-white/65">{label}</span>
              </div>
              <div
                className="rounded-2xl border p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5"
                style={{ borderColor: `rgba(${PERSON.rgb}, 0.20)`, background: "rgba(255,255,255,0.02)" }}
              >
                <div>
                  <p className="italic text-[17px] md:text-[20px] leading-[1.3] text-white/85 max-w-lg" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                    &ldquo;{PERSON.q}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full accent-grad grid place-items-center text-[11px] font-semibold text-black/80 shrink-0">
                      {PERSON.n.split(" ").map(s => s[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <div className="text-[13px] font-medium">{PERSON.n}</div>
                      <div className="text-[11.5px] text-white/45 italic" style={{ fontFamily: "var(--font-instrument-serif)" }}>{PERSON.r}</div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setOpenModal(id)}
                  className="flex-shrink-0 text-[13px] font-medium px-5 py-2.5 rounded-full border transition"
                  style={{ borderColor: `rgba(${PERSON.rgb}, 0.4)`, color: PERSON.color, background: `rgba(${PERSON.rgb}, 0.08)` }}
                  onMouseEnter={e => (e.currentTarget.style.background = `rgba(${PERSON.rgb}, 0.15)`)}
                  onMouseLeave={e => (e.currentTarget.style.background = `rgba(${PERSON.rgb}, 0.08)`)}
                >
                  Read more →
                </button>
              </div>
              {openModal === id && <Modal onClose={() => setOpenModal(null)} />}
            </div>
          ))}
        </div>

        {/* Option D — inline */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/30">Option D</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 text-white/40">Minimal</span>
            <span className="text-[13px] text-white/65">Expand in-place (no modal)</span>
          </div>
          <OptionDPanel />
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-white/5 text-[13px] text-white/30">
          Preview page — not indexed. Tell us which option you want and we&apos;ll wire it into the live Testimonials section.
        </div>
      </div>
    </div>
  );
}
