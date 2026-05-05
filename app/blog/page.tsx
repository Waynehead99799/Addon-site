import type { Metadata } from "next";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import IndexList from "@/components/templates/IndexList";
import CTA from "@/components/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { ARTICLES } from "@/components/pagesData";
import { itemListSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Field Notes — Engineering Insights",
  description:
    "Thought leadership on AI, custom software, cloud, and product engineering — written by the team building production systems daily.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Field Notes — Addon Web Solutions",
    description:
      "Thought leadership on AI, custom software, cloud, and product engineering.",
  },
};

export default function BlogHub() {
  const rows = ARTICLES.map((a) => ({
    href: `/blog/${a.slug}`,
    title: a.title,
    desc: a.subtitle,
    meta: `${a.date} · ${a.readTime}`,
    cover: a.cover ?? `/blog/${a.slug}/cover.png`,
  }));

  return (
    <PageShell>
      <JsonLd
        data={itemListSchema({
          path: "/blog",
          title: "Field Notes — Engineering Insights",
          items: ARTICLES.map((a) => ({
            name: a.title,
            url: `/blog/${a.slug}`,
            description: a.subtitle,
          })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Field Notes", href: "/blog" },
        ])}
      />
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
