"use client";
import { useState } from "react";
import { CASE_STUDIES, type CaseStudy } from "./data";
import { Icon, ProjectIcon } from "./icons";

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const cs = CASE_STUDIES[active];
  const [c1] = cs.palette;
  const IconC = ProjectIcon[cs.icon];

  return (
    <section id="work" className="section-reveal relative section-py border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Selected work</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                Six shipped products.<br />
                <span style={{ color: c1 }} className="case-headline-accent">
                  Six different worlds.
                </span>
              </h2>
              <a
                href="#"
                className="group text-[13px] text-white/60 hover:text-white inline-flex items-center gap-2 shrink-0"
              >
                See full portfolio{" "}
                <Icon.ArrowUpRight
                  width={13}
                  height={13}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Index list (sticky scrub) */}
          <ul className="col-span-12 md:col-span-5 border-t border-white/10">
            {CASE_STUDIES.map((c, i) => {
              const isActive = active === i;
              return (
                <li key={c.id} className="border-b border-white/10">
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`case-row w-full text-left flex items-center gap-4 py-5 px-2 transition-colors ${
                      isActive ? "is-active text-white" : "text-white/55 hover:text-white/85"
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
                      <span className="case-row-title block text-[19px] md:text-[22px] font-semibold tracking-[-0.01em] leading-[1.2]">
                        {c.title}
                      </span>
                      <span className="block mt-0.5 text-[11.5px] text-white/45 font-mono uppercase tracking-[0.14em]">
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

          {/* Sticky detail panel */}
          <div className="col-span-12 md:col-span-7">
            <div
              key={cs.id}
              className="case-panel md:sticky md:top-24 rounded-3xl border bg-white/[0.02] overflow-hidden"
              style={{ borderColor: c1 + "33" }}
            >
              {/* artwork */}
              <Artwork cs={cs} />

              {/* details */}
              <div className="p-6 md:p-8">
                <div className="case-panel-fade flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl grid place-items-center"
                      style={{ background: c1 + "22", color: c1, border: `1px solid ${c1}55` }}
                    >
                      <IconC width={20} height={20} />
                    </div>
                    <div>
                      <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-white/55">
                        {cs.tag}
                      </div>
                      <div className="text-[14.5px] font-medium" style={{ color: c1 }}>
                        {cs.kpi}
                      </div>
                    </div>
                  </div>
                  <div className="text-[10.5px] font-mono text-white/40">
                    {String(active + 1).padStart(2, "0")} / {String(CASE_STUDIES.length).padStart(2, "0")}
                  </div>
                </div>

                <h3 className="case-panel-fade mt-6 text-[26px] md:text-[32px] font-semibold tracking-[-0.01em] leading-[1.08]">
                  {cs.title}
                </h3>
                <p className="case-panel-fade mt-3 text-[14.5px] md:text-[15.5px] text-white/65 leading-[1.6]">
                  {cs.desc}
                </p>

                <div className="case-panel-fade mt-7 flex items-center gap-4">
                  <a
                    href="#"
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
                  </a>
                  <div className="flex gap-1.5">
                    {cs.palette.map((p) => (
                      <span key={p} className="w-3 h-3 rounded-sm" style={{ background: p }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Artwork({ cs }: { cs: CaseStudy }) {
  const [c1, c2, c3] = cs.palette;
  const Icon = ProjectIcon[cs.icon];
  return (
    <div
      className="case-art relative h-56 md:h-72 overflow-hidden"
      style={{ background: c3 }}
    >
      <div
        className="absolute inset-0 case-art-wash"
        style={{ background: `linear-gradient(135deg, ${c1} 0%, ${c2} 50%, ${c3} 100%)` }}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.4) 100%)" }} />
      <div
        className="absolute bottom-5 left-5 w-14 h-14 rounded-2xl grid place-items-center backdrop-blur-sm case-art-icon"
        style={{ background: c3 + "BB", border: `1px solid ${c1}55`, color: c1 }}
      >
        <Icon width={26} height={26} />
      </div>
      <div className="absolute top-5 right-5 flex gap-1.5">
        {cs.palette.map((c) => (
          <span key={c} className="w-3 h-3 rounded-sm" style={{ background: c }} />
        ))}
      </div>
    </div>
  );
}
