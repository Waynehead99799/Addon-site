"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Icon } from "../icons";
import { Reveal } from "../Reveal";

export type IndexRow = {
  href: string;
  title: string;
  desc: string;
  tags?: string[];
  meta?: string; // right-side meta (e.g. "4.8 · App store")
  cover?: string; // optional image shown floating with the cursor on hover
};

export default function IndexList({
  rows,
  eyebrow,
  kicker,
  title,
  italicWord,
}: {
  rows: IndexRow[];
  eyebrow: string;
  kicker: string;
  title: string;
  italicWord?: string;
}) {
  const renderTitle = () => {
    if (italicWord && title.includes(italicWord)) {
      const idx = title.indexOf(italicWord);
      return (
        <>
          {title.slice(0, idx)}
          <span className="serif-italic font-normal text-white/70">{italicWord}</span>
          {title.slice(idx + italicWord.length)}
        </>
      );
    }
    return title;
  };

  const hasCovers = rows.some((r) => r.cover);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Cursor position relative to the rows container — sprung for a soft trailing feel.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 28, mass: 0.6 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const activeCover = activeIdx != null ? rows[activeIdx]?.cover : undefined;

  return (
    <section className="section-reveal relative py-14 md:py-20 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">{eyebrow}</div>
            <div className="mt-3 serif-italic text-white/55 text-[15px]">{kicker}</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[28px] sm:text-[32px] md:text-[48px] lg:text-[56px] font-semibold tracking-[-0.02em] leading-[1.04]">
              {renderTitle()}
            </h2>
          </div>
        </div>

        <div
          ref={containerRef}
          onMouseMove={hasCovers ? onMove : undefined}
          onMouseLeave={hasCovers ? () => setActiveIdx(null) : undefined}
          className="relative border-t border-white/10"
        >
          {rows.map((r, i) => (
            <Reveal key={r.href} delay={i * 30} y={14}>
              <Link
                href={r.href}
                onMouseEnter={() => r.cover && setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx((cur) => (cur === i ? null : cur))}
                className="index-row group block border-b border-white/10 px-2 md:px-4 py-6 md:py-7"
              >
                <div className="grid grid-cols-12 gap-4 md:gap-8 items-start md:items-center">
                  <div className="col-span-2 md:col-span-1 eyebrow text-white/40">
                    / {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="text-[22px] md:text-[28px] lg:text-[32px] font-semibold tracking-[-0.02em] leading-[1.1]">
                      {r.title.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="serif-italic font-normal text-white/75">
                        {r.title.split(" ").slice(-1)}
                      </span>
                    </h3>
                  </div>
                  <p className="col-span-12 md:col-span-4 text-[13.5px] md:text-[14px] text-white/55 leading-relaxed">
                    {r.desc}
                  </p>
                  <div className="col-span-10 md:col-span-2 flex flex-wrap gap-1.5">
                    {(r.tags ?? []).slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10.5px] px-2 py-1 rounded-full bg-white/[0.04] text-white/55 border border-white/10 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                    {r.meta && !r.tags?.length && (
                      <span className="text-[11px] text-white/60 serif-italic">{r.meta}</span>
                    )}
                  </div>
                  <div className="hidden md:flex col-span-1 justify-end items-center">
                    <Icon.ArrowUpRight
                      width={18}
                      height={18}
                      className="index-arrow text-white/70"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}

          {hasCovers && (
            <motion.div
              aria-hidden
              className="hidden md:block pointer-events-none absolute top-0 left-0 z-20 -translate-x-1/2 -translate-y-1/2 will-change-transform"
              style={{ x: sx, y: sy }}
            >
              <AnimatePresence mode="wait">
                {activeCover && (
                  <motion.div
                    key={activeCover}
                    initial={{ opacity: 0, scale: 0.92, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 4 }}
                    transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
                    className="index-preview relative w-[180px] lg:w-[200px] aspect-square rounded-2xl overflow-hidden"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeCover}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
