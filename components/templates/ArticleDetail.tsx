import { Reveal } from "../Reveal";
import type { Article } from "../pagesData";

export default function ArticleDetail({ article }: { article: Article }) {
  return (
    <section className="relative py-14 md:py-20 lg:py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11.5px] sm:text-[12px] font-mono uppercase tracking-[0.18em] text-white/40 mb-8 md:mb-10 pb-6 border-b border-white/10">
          <span>{article.date}</span>
          <span className="text-white/20">·</span>
          <span>{article.readTime}</span>
        </div>

        <article className="space-y-10 md:space-y-12">
          {article.sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 60} y={16}>
              <div>
                <div className="eyebrow mb-4">§ {String(i + 1).padStart(2, "0")}</div>
                <h2 className="text-[22px] sm:text-[24px] md:text-[30px] font-semibold tracking-[-0.02em] leading-[1.15] mb-4 md:mb-5">
                  <span className="serif-italic font-normal text-white/90">{s.heading}.</span>
                </h2>
                <p className="text-[15px] md:text-[17px] text-white/70 leading-[1.7]">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </article>
      </div>
    </section>
  );
}
