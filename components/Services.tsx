import { SERVICES } from "./data";
import { Icon, type IconName } from "./icons";
import { Reveal } from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">01 / Services</div>
            <div className="mt-3 serif-italic text-white/55 text-[15px]">
              The shortlist.
            </div>
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

        {/* editorial index */}
        <div className="border-t border-white/10">
          {SERVICES.map((s, i) => {
            const IconC = Icon[s.icon as IconName];
            return (
              <Reveal key={s.id} delay={i * 40} y={18}>
                <a
                  href="#contact"
                  className="index-row group block border-b border-white/10 px-2 md:px-4 py-7 md:py-8"
                >
                  <div className="grid grid-cols-12 gap-4 md:gap-8 items-start md:items-center">
                    <div className="col-span-2 md:col-span-1 eyebrow text-white/40">
                      / 0{i + 1}
                    </div>
                    <div className="col-span-10 md:col-span-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg glass-lite grid place-items-center shrink-0">
                        <IconC width={17} height={17} className="text-white/80" />
                      </div>
                      <h3 className="text-[26px] md:text-[34px] lg:text-[40px] font-semibold tracking-[-0.02em] leading-none">
                        {s.title.split(" ").slice(0, -1).join(" ")}{" "}
                        <span className="serif-italic font-normal text-white/70">
                          {s.title.split(" ").slice(-1)}
                        </span>
                      </h3>
                    </div>
                    <p className="col-span-12 md:col-span-4 text-[14px] text-white/60 leading-relaxed">
                      {s.desc}
                    </p>
                    <div className="col-span-10 md:col-span-2 flex flex-wrap gap-1.5">
                      {s.stack.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10.5px] px-2 py-1 rounded-full bg-white/[0.04] text-white/55 border border-white/10 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="hidden md:flex col-span-1 justify-end items-center">
                      <Icon.ArrowUpRight width={18} height={18} className="index-arrow text-white/70" />
                    </div>
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
