import { SERVICES } from "./data";
import { Icon, type IconName } from "./icons";
import { Reveal } from "./Reveal";

// Per-service accent colors (kept inside the brand palette so the section stays cohesive).
// Each card sets --svc / --svc-rgb inline; the .svc-* rules in app/globals.css consume them.
const SERVICE_ACCENTS: Record<string, { hex: string; rgb: string }> = {
  ai:      { hex: "#34cb96", rgb: "52,203,150" },
  web:     { hex: "#5392df", rgb: "83,146,223" },
  mobile:  { hex: "#2dbcd2", rgb: "45,188,210" },
  cloud:   { hex: "#3ec170", rgb: "62,193,112" },
  iot:     { hex: "#2877d7", rgb: "40,119,215" },
  product: { hex: "#5dd5ab", rgb: "93,213,171" },
};

const accentStyle = (id: string) => {
  const a = SERVICE_ACCENTS[id] ?? SERVICE_ACCENTS.ai;
  return { ["--svc" as string]: a.hex, ["--svc-rgb" as string]: a.rgb } as React.CSSProperties;
};

// Bento spans — service[0] (AI) takes the 2x2 hero block; the rest fill a 4-col grid.
const SPANS = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

export default function Services() {
  return (
    <section id="services" className="section-reveal relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Services</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[40px] md:text-[56px] lg:text-[68px] font-semibold tracking-[-0.02em] leading-[1.02]">
              One partner, <span className="serif-italic font-normal text-white/70">six ways</span> to ship.
            </h2>
            <p className="mt-5 max-w-lg text-white/60 text-[15px] leading-relaxed">
              From the first prototype to a platform at scale. Pick the brief that fits — we&apos;ve run every one of these more than once.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-[220px] gap-4">
          {SERVICES.map((s, i) => {
            const IconC = Icon[s.icon as IconName];
            const accent = SERVICE_ACCENTS[s.id] ?? SERVICE_ACCENTS.ai;
            const isLarge = i === 0;
            return (
              <Reveal key={s.id} delay={i * 50} y={18} className={SPANS[i]}>
                <a
                  href="#contact"
                  style={accentStyle(s.id)}
                  className={`svc-card relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col overflow-hidden${isLarge ? " is-hero" : ""}`}
                >
                  {isLarge && (
                    <div
                      className="svc-hero-glow absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(70% 60% at 80% 20%, rgba(${accent.rgb},0.22), transparent 60%), radial-gradient(60% 50% at 10% 90%, rgba(83,146,223,0.16), transparent 60%)`,
                      }}
                    />
                  )}
                  <div className="relative flex items-center justify-between">
                    <div className={`svc-icon rounded-lg grid place-items-center ${isLarge ? "w-12 h-12" : "w-10 h-10"}`}>
                      <IconC width={isLarge ? 20 : 16} height={isLarge ? 20 : 16} />
                    </div>
                    <span className="svc-tag text-[10px] tracking-[0.18em] uppercase font-mono px-2 py-1 rounded-full border">{s.tag}</span>
                  </div>
                  <h3
                    className={`relative mt-auto pt-6 font-semibold tracking-[-0.02em] leading-[1.02] ${
                      isLarge ? "text-[42px] md:text-[52px]" : "text-[22px] md:text-[26px]"
                    }`}
                  >
                    {s.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="serif-italic font-normal text-white/70">
                      {s.title.split(" ").slice(-1)}
                    </span>
                  </h3>
                  {isLarge && (
                    <p className="relative mt-3 text-[14px] text-white/60 leading-relaxed max-w-md">{s.desc}</p>
                  )}
                  <div className="relative mt-4 flex items-end justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {s.stack.slice(0, isLarge ? 4 : 2).map((t) => (
                        <span
                          key={t}
                          className="svc-stack-chip text-[10.5px] px-2 py-1 rounded-full bg-white/[0.04] text-white/55 border border-white/10 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Icon.ArrowUpRight width={16} height={16} className="svc-arrow shrink-0" />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
