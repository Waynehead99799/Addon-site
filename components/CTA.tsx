import { Icon } from "./icons";

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">07 / Enquire</div>
            <div className="mt-3 serif-italic text-white/55 text-[15px]">
              Correspondence.
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-lite text-[11.5px] text-white/70 mb-5">
              <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 dot-pulse" />
              Accepting engagements — Q3 2026 · two slots remaining
            </div>
            <h2 className="text-[44px] md:text-[68px] lg:text-[84px] font-semibold tracking-[-0.02em] leading-[0.98]">
              Let&apos;s build<br />
              <span className="serif-italic font-normal text-white/80">something worth shipping.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 border-t border-white/10 pt-10">
          <div className="col-span-12 md:col-span-7">
            <p className="text-[17px] md:text-[19px] text-white/75 max-w-xl leading-[1.55]">
              Tell us what you&apos;re building. We&apos;ll tell you how we&apos;d ship it.{" "}
              <span className="serif-italic text-white/90">Fifteen minutes, no decks, a real engineer on the call.</span>
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a href="#" className="group relative cta-pulse rounded-full isolate">
                <div className="relative rounded-full glass-lite p-[3px]">
                  <div className="flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-white text-black">
                    <span className="text-[14.5px] font-medium">Book a 15-min call</span>
                    <span className="w-7 h-7 rounded-full accent-grad grid place-items-center text-white btn-arrow">
                      <Icon.Arrow width={13} height={13} />
                    </span>
                  </div>
                </div>
              </a>
              <a href="mailto:hello@addonweb.com" className="text-[14px] text-white/70 hover:text-white px-4 py-2.5">
                or write to <span className="serif-italic text-white/90">hello@addonweb.com</span> →
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:border-l md:border-white/10 md:pl-10">
            <div className="eyebrow mb-5">What to expect</div>
            <div className="space-y-3">
              {[
                { l: "Avg. first reply", v: "< 4 hours" },
                { l: "Discovery to kickoff", v: "7 days" },
                { l: "First working build", v: "2 weeks" },
                { l: "Typical engagement", v: "3–9 months" },
              ].map((r, i) => (
                <div key={r.l} className="flex items-baseline justify-between py-3 border-b border-white/10">
                  <span className="text-[13px] text-white/55">
                    <span className="eyebrow mr-2">{String.fromCharCode(97 + i)}.</span>
                    {r.l}
                  </span>
                  <span className="serif-italic text-[20px] text-white">{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
