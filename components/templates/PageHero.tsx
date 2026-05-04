import Link from "next/link";
import { Reveal } from "../Reveal";

type Crumb = { label: string; href: string };

export default function PageHero({
  eyebrow,
  title,
  italicWord,
  subtitle,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  // If italicWord provided, render it as serif-italic inline within the title.
  // Otherwise split the last word as an italic accent for visual rhythm.
  const renderTitle = () => {
    if (italicWord && title.includes(italicWord)) {
      const [before, after] = title.split(italicWord);
      return (
        <>
          {before}
          <span className="serif-italic font-normal text-white/80">{italicWord}</span>
          {after}
        </>
      );
    }
    const words = title.split(" ");
    if (words.length < 2) return title;
    const head = words.slice(0, -1).join(" ");
    const tail = words[words.length - 1];
    return (
      <>
        {head} <span className="serif-italic font-normal text-white/80">{tail}</span>
      </>
    );
  };

  return (
    <section className="section-reveal relative pt-28 md:pt-36 lg:pt-44 pb-12 md:pb-20 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {crumbs && crumbs.length > 0 && (
          <Reveal y={10}>
            <nav className="flex items-center gap-2 text-[11.5px] font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
              {crumbs.map((c, i) => (
                <span key={c.href} className="flex items-center gap-2">
                  <Link href={c.href} className="hover:text-white/80 transition">
                    {c.label}
                  </Link>
                  {i < crumbs.length - 1 && <span className="text-white/20">/</span>}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        <Reveal y={14}>
          <div className="eyebrow mb-6">{eyebrow}</div>
        </Reveal>
        <Reveal delay={80} y={20}>
          <h1 className="font-semibold tracking-[-0.02em] leading-[0.98] text-[36px] sm:text-[48px] md:text-[72px] lg:text-[86px] max-w-5xl">
            {renderTitle()}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={160} y={18}>
            <p className="mt-6 md:mt-8 text-[15px] md:text-[18px] text-white/65 max-w-[44rem] leading-[1.55]">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
