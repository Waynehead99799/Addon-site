import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import ServiceDetail from "@/components/templates/ServiceDetail";
import RelatedSection from "@/components/templates/RelatedSection";
import CTA from "@/components/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { SERVICES_DATA, CASE_STUDIES_DATA } from "@/components/pagesData";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const s = SERVICES_DATA.find((x) => x.slug === params.slug);
  if (!s) return { title: "Service not found" };
  const path = `/services/${s.slug}`;
  const seoTitle = `${s.title} Services — ${s.eyebrow}`;
  return {
    title: seoTitle,
    description: s.subtitle,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: seoTitle,
      description: s.subtitle,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = SERVICES_DATA.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const path = `/services/${s.slug}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: s.title, href: path },
  ];

  return (
    <PageShell>
      <JsonLd
        data={serviceSchema({
          path,
          title: s.title,
          description: s.subtitle,
          serviceType: s.eyebrow,
        })}
      />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow={`Services / ${s.eyebrow}`}
        title={s.title}
        subtitle={s.subtitle}
        crumbs={crumbs}
      />
      <ServiceDetail
        features={s.features}
        process={s.process}
        techStack={s.techStack}
        featuresTitle={`What ${s.title.toLowerCase()} looks like with us.`}
        featuresItalic="with us."
      />
      <RelatedSection
        eyebrow="In production"
        title="Case studies that used this work."
        italicWord="this work."
        items={CASE_STUDIES_DATA.slice(0, 3).map((c) => ({
          href: `/case-studies/${c.slug}`,
          title: c.title,
          desc: c.subtitle,
          meta: c.industry,
        }))}
      />
      <CTA />
    </PageShell>
  );
}
