import Link from "next/link";
import { Reveal } from "../Reveal";
import { Icon } from "../icons";

export type RelatedItem = {
  href: string;
  title: string;
  desc: string;
  meta?: string;
};

/**
 * "You might also be interested in" rail used at the foot of every detail
 * page. Three compact cards in a row on desktop, single column on mobile.
 *
 * Internal-linking pass: every detail page should pass three sibling-or-
 * adjacent items so the crawler discovers the rest of the section. Helps
 * topic clustering and keeps users moving deeper into the site.
 */
export default function RelatedSection({
  eyebrow,
  title,
  italicWord,
  items,
}: {
  eyebrow: string;
  title: string;
  italicWord?: string;
  items: RelatedItem[];
}) {
  if (items.length === 0) return null;

  const renderTitle = () => {
    if (italicWord && title.includes(italicWord)) {
      const [head, ...rest] = title.split(italicWord);
      const tail = rest.join(italicWord);
      return (
        <>
          {head}
          <span className="serif-italic font-normal text-white/70">{italicWord}</span>
          {tail}
        </>
      );
    }
    return title;
  };

  return (
    <section className="relative py-14 md:py-20 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-12">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">{eyebrow}</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[28px] sm:text-[32px] md:text-[44px] lg:text-[52px] font-semibold tracking-[-0.02em] leading-[1.04]">
              {renderTitle()}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((it, i) => (
            <Reveal key={it.href} delay={i * 60} y={16}>
              <Link
                href={it.href}
                className="group block h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6 hover:border-white/25 transition-colors"
              >
                {it.meta && (
                  <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-white/45 mb-3">
                    {it.meta}
                  </div>
                )}
                <h3 className="text-[18px] md:text-[20px] font-semibold tracking-[-0.01em] leading-[1.2]">
                  {it.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="serif-italic font-normal text-white/75">
                    {it.title.split(" ").slice(-1)}
                  </span>
                </h3>
                <p className="mt-3 text-[13.5px] md:text-[14px] text-white/60 leading-relaxed line-clamp-3">
                  {it.desc}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-[12.5px] font-mono uppercase tracking-[0.18em] text-white/55 group-hover:text-white transition-colors">
                  Read more
                  <Icon.ArrowUpRight
                    width={12}
                    height={12}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
