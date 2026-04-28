import { Icon } from "../icons";
import MockBrowser from "../image-options/MockBrowser";

export default function CTASplitImagery() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Enquire</div>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-lite text-[11.5px] text-white/70 mb-5">
                <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 dot-pulse" />
                Q3 2026 · two slots remaining
              </div>
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold tracking-[-0.02em] leading-[1.0]">
                Let&apos;s build{" "}
                <span className="serif-italic font-normal text-white/80">something worth shipping.</span>
              </h2>
              <p className="mt-6 text-[16px] text-white/70 max-w-md leading-[1.55]">
                Fifteen minutes, no decks, a real engineer on the call.{" "}
                <span className="serif-italic text-white/90">We&apos;ll tell you how we&apos;d ship it.</span>
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
                <a href="mailto:hello@addonweb.com" className="text-[14px] text-white/70 hover:text-white px-3 py-2">
                  hello@addonweb.com →
                </a>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="aspect-[16/11] hero-float">
                <MockBrowser tone="shamrock" label="addonweb.dashboard" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
