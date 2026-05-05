import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import CaseStudyDetail from "@/components/templates/CaseStudyDetail";
import RelatedSection from "@/components/templates/RelatedSection";
import CTA from "@/components/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { CASE_STUDIES_DATA } from "@/components/pagesData";
import { caseStudySchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return CASE_STUDIES_DATA.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const c = CASE_STUDIES_DATA.find((x) => x.slug === params.slug);
  if (!c) return { title: "Case study not found" };
  const path = `/case-studies/${c.slug}`;
  return {
    title: `${c.title} — Case Study`,
    description: c.subtitle,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: c.title,
      description: c.subtitle,
      images: c.gallery?.hero ? [{ url: c.gallery.hero }] : undefined,
    },
    twitter: {
      title: c.title,
      description: c.subtitle,
      images: c.gallery?.hero ? [c.gallery.hero] : undefined,
    },
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const c = CASE_STUDIES_DATA.find((x) => x.slug === params.slug);
  if (!c) notFound();

  const path = `/case-studies/${c.slug}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: c.title, href: path },
  ];

  return (
    <PageShell>
      <JsonLd
        data={caseStudySchema({
          path,
          title: c.title,
          description: c.subtitle,
          image: c.gallery?.hero ?? c.profile,
          industry: c.industry,
          client: c.client,
        })}
      />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow={`Work / ${c.industry}`}
        title={c.title}
        subtitle={c.subtitle}
        crumbs={crumbs}
      />
      <CaseStudyDetail cs={c} />
      <RelatedSection
        eyebrow="More work"
        title="Other engagements you might learn from."
        italicWord="learn from."
        items={CASE_STUDIES_DATA
          .filter((x) => x.slug !== c.slug)
          .slice(0, 3)
          .map((x) => ({
            href: `/case-studies/${x.slug}`,
            title: x.title,
            desc: x.subtitle,
            meta: x.industry,
          }))}
      />
      <CTA />
    </PageShell>
  );
}
