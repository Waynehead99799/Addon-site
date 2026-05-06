import type { Metadata } from "next";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import IndexList from "@/components/templates/IndexList";
import CTA from "@/components/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { CASE_STUDIES_DATA } from "@/components/pagesData";
import { itemListSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Case Studies — Selected Work",
  description:
    "Real-world results from partnerships across IoT, healthcare, marketplaces, and enterprise. Owned hardware to multi-region brand platforms.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    type: "website",
    url: "/case-studies",
    title: "Case Studies — Addon Web Solutions",
    description:
      "Real-world results from partnerships across IoT, healthcare, marketplaces, and enterprise.",
  },
};

export default function CaseStudiesHub() {
  const rows = CASE_STUDIES_DATA.map((c) => ({
    href: `/case-studies/${c.slug}`,
    title: c.title,
    desc: c.subtitle,
    tags: c.categories.slice(0, 2),
    cover: c.profile ?? c.gallery?.hero ?? `/case-studies/${c.slug}/image.png`,
  }));

  return (
    <PageShell>
      <JsonLd
        data={itemListSchema({
          path: "/case-studies",
          title: "Case Studies — Selected Work",
          items: CASE_STUDIES_DATA.map((c) => ({
            name: c.title,
            url: `/case-studies/${c.slug}`,
            description: c.subtitle,
          })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
        ])}
      />
      <PageHero
        eyebrow="Work / Selected engagements"
        title="Software Development Case Studies."
        italicWord="Case Studies."
        subtitle="Real problems, measured outcomes. A selection of recent work across IoT, healthcare, marketplaces, eCommerce, and enterprise CRM."
      />
      <IndexList
        eyebrow="Case studies"
        kicker="The receipts."
        title="Seven projects, measurable outcomes."
        italicWord="measurable outcomes."
        rows={rows}
      />
      <CTA />
    </PageShell>
  );
}
