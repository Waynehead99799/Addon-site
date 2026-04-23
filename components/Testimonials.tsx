import { TESTIMONIALS } from "./data";
import { Reveal } from "./Reveal";

export default function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS;
  return (
    <section id="about" className="relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">06 / Trusted</div>
            <div className="mt-3 serif-italic text-white/55 text-[15px]">
              The kind of partner you rehire.
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="flex items-center gap-3 text-[13px] text-white/60">
              <div className="flex -space-x-2">
                {["#4BA3E3", "#2E8BC0", "#2DA862", "#3DBD6F"].map((c) => (
                  <div key={c} className="w-7 h-7 rounded-full border-2 border-black" style={{ background: c }} />
                ))}
              </div>
              <span className="serif-italic text-[15px] text-white/75">150+ teams &nbsp;·&nbsp; since 2011</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* featured pull-quote */}
          <Reveal y={28} className="col-span-12 md:col-span-7">
            <div className="pt-8 border-t border-white/15">
              <div className="eyebrow mb-6">A conversation</div>
              <blockquote className="serif-italic text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.01em] text-white/90">
                &ldquo;{featured.q}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full accent-grad grid place-items-center text-[13px] font-semibold text-black/80">
                  {featured.n.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-[14px] font-medium">{featured.n}</div>
                  <div className="text-[12px] text-white/50">{featured.r}</div>
                </div>
              </figcaption>
            </div>
          </Reveal>

          {/* secondary */}
          <div className="col-span-12 md:col-span-5 flex flex-col">
            {rest.map((t, i) => (
              <Reveal key={t.n} delay={i * 100} y={20}>
                <div className="pt-8 pb-8 border-t border-white/15">
                  <div className="eyebrow mb-4">{["B", "C"][i]} / Reference</div>
                  <p className="text-[16px] md:text-[18px] leading-[1.45] text-white/80">
                    &ldquo;{t.q}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-white/15 grid place-items-center text-[11px] font-mono text-white/70">
                      {t.n.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                    </div>
                    <div className="text-[12.5px]">
                      <span className="text-white/85">{t.n}</span>{" "}
                      <span className="text-white/45 serif-italic">— {t.r}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
