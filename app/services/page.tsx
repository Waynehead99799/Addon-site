import type { Metadata } from "next";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import IndexList from "@/components/templates/IndexList";
import CTA from "@/components/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { SERVICES_DATA } from "@/components/pagesData";
import { itemListSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Technology Services",
  description:
    "Eight service lines covering every stage of the product lifecycle — mobile, web, IoT, cloud, digital transformation, QA, product consulting, and outsourcing.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "/services",
    title: "Technology Services | Addon Web Solutions",
    description:
      "Eight service lines covering every stage of the product lifecycle. Deep technical expertise, proven delivery.",
  },
};

export default function ServicesHub() {
  const rows = SERVICES_DATA.map((s) => ({
    href: `/services/${s.slug}`,
    title: s.title,
    desc: s.subtitle,
    tags: s.techStack.slice(0, 3),
  }));

  return (
    <PageShell>
      <JsonLd
        data={itemListSchema({
          path: "/services",
          title: "Technology Services",
          items: SERVICES_DATA.map((s) => ({
            name: s.title,
            url: `/services/${s.slug}`,
            description: s.subtitle,
          })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Services / Full-spectrum technology"
        title="Custom Software Development Services."
        italicWord="Development Services."
        subtitle="From mobile-first applications to enterprise cloud infrastructure, our eight service lines cover every stage of the product lifecycle. Deep technical expertise, proven delivery."
      />
      <IndexList
        eyebrow="01 / Service lines"
        kicker="Eight briefs, one team."
        title="Eight service lines, one seamless experience."
        italicWord="one seamless experience."
        rows={rows}
      />
      <CTA />
    </PageShell>
  );
}
