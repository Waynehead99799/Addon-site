import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import ServiceDetail from "@/components/templates/ServiceDetail";
import RelatedSection from "@/components/templates/RelatedSection";
import CTA from "@/components/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { AI_SERVICES } from "@/components/pagesData";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return AI_SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const s = AI_SERVICES.find((x) => x.slug === params.slug);
  if (!s) return { title: "AI service not found" };
  const path = `/addonai/${s.slug}`;
  const firstSentence = s.subtitle.split(". ")[0];
  const seoTitle = `${s.title} — ${firstSentence}`;
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

export default function AIServicePage({ params }: { params: { slug: string } }) {
  const s = AI_SERVICES.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const path = `/addonai/${s.slug}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "AddonAI", href: "/addonai" },
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
        eyebrow={`AddonAI / ${s.eyebrow}`}
        title={s.title}
        subtitle={s.subtitle}
        crumbs={crumbs}
      />
      <ServiceDetail
        features={s.features}
        process={s.process}
        techStack={s.techStack}
        featuresTitle={`What production ${s.title.toLowerCase()} requires.`}
        featuresItalic="requires."
      />
      <RelatedSection
        eyebrow="More AI capabilities"
        title="Other AddonAI specialisations."
        italicWord="specialisations."
        items={AI_SERVICES
          .filter((x) => x.slug !== s.slug)
          .slice(0, 3)
          .map((x) => ({
            href: `/addonai/${x.slug}`,
            title: x.title,
            desc: x.subtitle,
            meta: x.eyebrow,
          }))}
      />
      <CTA />
    </PageShell>
  );
}
