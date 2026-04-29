import type { Metadata } from "next";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import IndexList from "@/components/templates/IndexList";
import CTA from "@/components/CTA";
import { ARTICLES } from "@/components/pagesData";

export const metadata: Metadata = {
  title: "Field Notes | Addon Web Solutions",
  description: "Thought leadership on AI, technology, and digital transformation from the team at Addon.",
};

export default function BlogHub() {
  const rows = ARTICLES.map((a) => ({
    href: `/blog/${a.slug}`,
    title: a.title,
    desc: a.subtitle,
    meta: `${a.date} · ${a.readTime}`,
  }));

  return (
    <PageShell>
      <PageHero
        eyebrow="Field Notes / Writing"
        title="Ideas from the build."
        italicWord="the build."
        subtitle="Thought leadership on AI, technology, and digital transformation from the engineers and strategists doing the work."
      />
      <IndexList
        eyebrow="01 / Articles"
        kicker="Long-form."
        title="Recent writing from the team."
        italicWord="from the team."
        rows={rows}
      />
      <CTA />
    </PageShell>
  );
}
