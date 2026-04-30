"use client";
import { useState } from "react";
import { TESTIMONIALS } from "./data";

// Each testimonial is paired 1:1 with its company in source order. We synthesise
// a styled monogram tile rather than sourcing real client logos — drop in real
// SVGs in `mark` if/when you have them.
const COMPANIES = [
  { short: "Lumen Health", color: "#5dd5ab", rgb: "93,213,171" },
  { short: "Veritrack",    color: "#5392df", rgb: "83,146,223" },
  { short: "Handywise",    color: "#3ec170", rgb: "62,193,112" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];
  const c = COMPANIES[active] ?? COMPANIES[0];

  return (
    <section id="testimonials" className="section-reveal relative py-14 md:py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-12">
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
          {/* Logo wall — clickable / hoverable */}
          <div className="col-span-12 md:col-span-5">
            <div className="grid grid-cols-1 gap-3">
              {COMPANIES.map((co, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={co.short}
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
                      {co.short.split(" ").map((s) => s[0]).join("").slice(0, 2)}
                    </div>
                    <div className="flex-1">
                      <div className="text-[15px] font-semibold">{co.short}</div>
                      <div className="text-[12px] text-white/55 mt-0.5">
                        {TESTIMONIALS[i].r.split(",").slice(-1)[0].trim()}
                      </div>
                    </div>
                    <span className="test-tile-arrow text-white/35">→</span>
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
                className="test-quote-mark serif-italic text-[48px] sm:text-[60px] md:text-[80px] leading-none mb-2"
                style={{ color: `rgba(${c.rgb}, 0.35)` }}
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="test-quote serif-italic text-[20px] sm:text-[24px] md:text-[34px] leading-[1.22] md:leading-[1.18] tracking-[-0.01em] text-white/90 -mt-4">
                {t.q}
              </blockquote>
              <div className="test-cite mt-7 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full accent-grad grid place-items-center text-[13px] font-semibold text-black/80">
                  {t.n.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-[14.5px] font-medium">{t.n}</div>
                  <div className="text-[12.5px] text-white/55 serif-italic">{t.r}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
