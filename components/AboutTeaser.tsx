import { Icon } from "./icons";
import { Reveal } from "./Reveal";

export default function AboutTeaser() {
  return (
    <section id="about" className="section-reveal relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-3">
          <div className="eyebrow">About us</div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <Reveal y={22}>
            <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-semibold tracking-[-0.02em] leading-[1.05]">
              We&apos;re a <span className="serif-italic font-normal" style={{ color: "var(--accent)" }}>custom software &amp; AI</span>{" "}
              <span className="headline-sweep">agency.</span>
            </h2>
          </Reveal>

          <Reveal delay={120} y={20}>
            <p className="mt-8 text-[16px] md:text-[18px] text-white/70 leading-[1.7] max-w-[46rem]">
              Founded in 2011, we&apos;re a team of 35+ engineers across India, Canada, and the USA. We&apos;ve shipped 300+ projects for 150+ clients in 10+ countries — from seed-stage founders to ISO-audited enterprises. AI is the newest tool in our kit. The discipline of making software actually work isn&apos;t.
            </p>
          </Reveal>

          <Reveal delay={200} y={18}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/55 font-mono mb-3">Founded</div>
                <div className="text-[40px] md:text-[52px] lg:text-[60px] font-semibold tracking-[-0.03em] leading-none num-grad">2011</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/55 font-mono mb-3">Team</div>
                <div className="text-[40px] md:text-[52px] lg:text-[60px] font-semibold tracking-[-0.03em] leading-none num-grad">35+</div>
                <div className="mt-2 text-[12px] text-white/45 serif-italic">engineers</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/55 font-mono mb-3">Reach</div>
                <div className="text-[40px] md:text-[52px] lg:text-[60px] font-semibold tracking-[-0.03em] leading-none num-grad">3</div>
                <div className="mt-2 text-[12px] text-white/45 serif-italic">continents · India · Canada · USA</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/55 font-mono mb-3">Certified</div>
                <div className="text-[40px] md:text-[52px] lg:text-[60px] font-semibold tracking-[-0.03em] leading-none num-grad">ISO</div>
                <div className="mt-2 text-[12px] text-white/45 serif-italic">9001 quality standard</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={280} y={14}>
            <div className="mt-10">
              <a
                href="/about"
                className="group inline-flex items-center gap-2 text-[14.5px] font-medium"
                style={{ color: "var(--ink)" }}
              >
                <span className="serif-italic" style={{ color: "var(--accent)" }}>Read</span>
                <span>the full story</span>
                <span className="w-7 h-7 rounded-full accent-grad grid place-items-center text-white btn-arrow">
                  <Icon.Arrow width={13} height={13} />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
