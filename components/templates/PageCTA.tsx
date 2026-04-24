import Link from "next/link";
import { Icon } from "../icons";

export default function PageCTA({
  eyebrow = "Next step",
  title = "Let's build something worth shipping.",
  italicWord = "worth shipping.",
  body,
  primaryLabel = "Start a project",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title?: string;
  italicWord?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const renderTitle = () => {
    if (italicWord && title.includes(italicWord)) {
      const idx = title.indexOf(italicWord);
      return (
        <>
          {title.slice(0, idx)}
          <span className="serif-italic font-normal text-white/80">{italicWord}</span>
          {title.slice(idx + italicWord.length)}
        </>
      );
    }
    return title;
  };

  return (
    <section className="relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">{eyebrow}</div>
            <div className="mt-3 serif-italic text-white/55 text-[15px]">Correspondence.</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[40px] md:text-[60px] lg:text-[72px] font-semibold tracking-[-0.02em] leading-[1.02]">
              {renderTitle()}
            </h2>
            {body && (
              <p className="mt-6 text-[16px] md:text-[18px] text-white/65 max-w-2xl leading-[1.55]">
                {body}
              </p>
            )}
            <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link href={primaryHref} className="group relative rounded-full isolate">
                <div className="relative rounded-full glass-lite p-[3px]">
                  <div className="flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-white text-black">
                    <span className="text-[14.5px] font-medium">{primaryLabel}</span>
                    <span className="w-7 h-7 rounded-full accent-grad grid place-items-center text-white">
                      <Icon.Arrow width={13} height={13} />
                    </span>
                  </div>
                </div>
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="text-[14px] text-white/70 hover:text-white px-4 py-2.5"
                >
                  {secondaryLabel} <span className="serif-italic text-white/90">→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
