"use client";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { CASE_STUDIES } from "./data";
import { Icon, ProjectIcon } from "./icons";

/**
 * Home portfolio section — scroll-animated grid of case study cards backed by
 * framer-motion's `whileInView`. Each card lazily animates in once it enters
 * the viewport (set `once: true` so we don't replay on scroll-back).
 *
 * Image field on CASE_STUDIES is a placeholder URL — swap in real screenshots
 * when ready (1200×750 recommended). Cards link to /case-studies/{slug}.
 */
export default function CaseStudies() {
  const reduced = useReducedMotion();

  // Card entrance — fade + slight slide + scale settle
  const cardVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 36, scale: reduced ? 1 : 0.985 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="work" className="relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16"
        >
          <div className="col-span-12 md:col-span-3">
            <motion.div
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              className="eyebrow"
            >
              03 / Selected work
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-3 serif-italic text-white/55 text-[15px]"
            >
              Six worlds, one team.
            </motion.div>
          </div>
          <div className="col-span-12 md:col-span-9 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-[40px] md:text-[56px] lg:text-[68px] font-semibold tracking-[-0.02em] leading-[1.02]"
            >
              Six shipped products,{" "}
              <span className="serif-italic font-normal text-white/70">six worlds</span>.
            </motion.h2>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Link
                href="/case-studies"
                className="group inline-flex items-center gap-2 text-[13px] text-white/60 hover:text-white whitespace-nowrap"
              >
                See full portfolio
                <Icon.ArrowUpRight
                  width={13}
                  height={13}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Card grid — staggered scroll-in */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -120px 0px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {CASE_STUDIES.map((cs, i) => {
            const [c1] = cs.palette;
            const IconC = ProjectIcon[cs.icon];
            return (
              <motion.div
                key={cs.id}
                variants={cardVariants}
                transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group block relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.015] hover:border-white/20 transition-colors"
                >
                  {/* Screenshot */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cs.image}
                      alt={cs.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.04]"
                    />
                    {/* Gradient veil so text below the image stays readable */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(14,11,10,0) 35%, rgba(14,11,10,0.55) 100%)",
                      }}
                    />
                    {/* Tag chip */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span
                        className="w-7 h-7 rounded-lg grid place-items-center backdrop-blur-md"
                        style={{ background: c1 + "33", border: `1px solid ${c1}55`, color: c1 }}
                      >
                        <IconC width={13} height={13} />
                      </span>
                      <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-white/85 px-2.5 py-1 rounded-full glass-lite">
                        {cs.tag}
                      </span>
                    </div>
                    {/* Hover arrow */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass grid place-items-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <Icon.ArrowUpRight width={14} height={14} className="text-white/90" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 md:p-7">
                    <h3 className="text-[20px] md:text-[22px] font-semibold tracking-[-0.01em] leading-[1.2] group-hover:text-white transition-colors">
                      {cs.title.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="serif-italic font-normal text-white/75">
                        {cs.title.split(" ").slice(-1)}
                      </span>
                      .
                    </h3>
                    <p className="mt-3 text-[13.5px] text-white/55 leading-relaxed line-clamp-3">
                      {cs.desc}
                    </p>
                    <div className="mt-5 pt-4 border-t border-white/10 flex items-baseline justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/35">
                          Outcome
                        </div>
                        <div
                          className="mt-1 text-[15px] font-semibold tracking-[-0.005em]"
                          style={{ color: c1 }}
                        >
                          {cs.kpi}
                        </div>
                      </div>
                      <div className="text-[11px] font-mono text-white/30">
                        {String(i + 1).padStart(2, "0")} / {String(CASE_STUDIES.length).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
