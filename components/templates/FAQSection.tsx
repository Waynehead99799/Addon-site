"use client";
import { useState } from "react";
import { Reveal } from "../Reveal";

export type FAQItem = { question: string; answer: string };

/**
 * Editorial accordion that doubles as an `FAQPage` schema source. Pages that
 * render this component should also emit `<JsonLd data={faqSchema(items)} />`
 * with the same `items` array so Google's rich result eligibility lines up
 * with what's actually visible.
 *
 * One panel open at a time. Keyboard-accessible via native button semantics.
 */
export default function FAQSection({
  eyebrow,
  title,
  italicWord,
  items,
}: {
  eyebrow: string;
  title: string;
  italicWord?: string;
  items: FAQItem[];
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  if (items.length === 0) return null;

  const renderTitle = () => {
    if (italicWord && title.includes(italicWord)) {
      const [head, ...rest] = title.split(italicWord);
      const tail = rest.join(italicWord);
      return (
        <>
          {head}
          <span className="serif-italic font-normal text-white/70">{italicWord}</span>
          {tail}
        </>
      );
    }
    return title;
  };

  return (
    <section className="relative py-14 md:py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-3">
          <div className="eyebrow">{eyebrow}</div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="text-[28px] sm:text-[32px] md:text-[44px] lg:text-[52px] font-semibold tracking-[-0.02em] leading-[1.05] mb-8 md:mb-10">
            {renderTitle()}
          </h2>

          <ul className="border-t border-white/10">
            {items.map((it, i) => {
              const isOpen = openIdx === i;
              return (
                <Reveal key={it.question} delay={i * 50} y={12}>
                  <li className="border-b border-white/10">
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="w-full flex items-start justify-between gap-4 sm:gap-6 py-5 md:py-6 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-baseline gap-3 sm:gap-4 flex-1 min-w-0">
                        <span className="serif-italic text-[18px] md:text-[22px] text-white/40 leading-none mt-1 shrink-0">
                          {String(i + 1).padStart(2, "0")}.
                        </span>
                        <span className="text-[16px] sm:text-[18px] md:text-[20px] font-medium tracking-[-0.01em] leading-[1.3]">
                          {it.question}
                        </span>
                      </span>
                      <span
                        className={`shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/15 grid place-items-center text-white/55 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden
                      >
                        <svg width={14} height={14} viewBox="0 0 16 16" fill="none">
                          <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 md:pb-7 pl-9 sm:pl-11 pr-2 text-[14px] md:text-[15.5px] text-white/65 leading-[1.7] max-w-3xl">
                          {it.answer}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
