import type { Metadata } from "next";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import IndexList from "@/components/templates/IndexList";
import CTA from "@/components/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { INDUSTRIES } from "@/components/pagesData";
import { itemListSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Deep domain expertise across healthcare, fintech, ecommerce, logistics, manufacturing, and more — serving 10+ countries worldwide.",
  alternates: { canonical: "/industries" },
  openGraph: {
    type: "website",
    url: "/industries",
    title: "Industries We Serve | Addon Web Solutions",
    description:
      "Deep domain expertise across healthcare, fintech, ecommerce, logistics, manufacturing, and more.",
  },
};

export default function IndustriesHub() {
  const rows = INDUSTRIES.map((i) => ({
    href: `/industries/${i.slug}`,
    title: i.title,
    desc: i.subtitle,
    meta: i.eyebrow,
  }));

  return (
    <PageShell>
      <JsonLd
        data={itemListSchema({
          path: "/industries",
          title: "Industries We Serve",
          items: INDUSTRIES.map((i) => ({
            name: i.title,
            url: `/industries/${i.slug}`,
            description: i.subtitle,
          })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
        ])}
      />
      <PageHero
        eyebrow="Industries / Domain depth"
        title="Domain expertise across key industries."
        italicWord="key industries."
        subtitle="Deep vertical knowledge combined with technical excellence delivers solutions that address real-world industry challenges. Built across twelve verticals and ten-plus countries."
      />
      <IndexList
        eyebrow="01 / Industries"
        kicker="Where we work."
        title="Twelve industries, one operating method."
        italicWord="one operating method."
        rows={rows}
      />
      <CTA />
    </PageShell>
  );
}
