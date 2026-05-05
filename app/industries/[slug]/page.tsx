import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import IndustryDetail from "@/components/templates/IndustryDetail";
import CTA from "@/components/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { INDUSTRIES } from "@/components/pagesData";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const i = INDUSTRIES.find((x) => x.slug === params.slug);
  if (!i) return { title: "Industry not found" };
  const path = `/industries/${i.slug}`;
  const seoTitle = `${i.title} Software & AI Development`;
  return {
    title: seoTitle,
    description: i.subtitle,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: seoTitle,
      description: i.subtitle,
    },
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const i = INDUSTRIES.find((x) => x.slug === params.slug);
  if (!i) notFound();

  const path = `/industries/${i.slug}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: i.title, href: path },
  ];

  return (
    <PageShell>
      <JsonLd
        data={serviceSchema({
          path,
          title: `${i.title} Software & AI Solutions`,
          description: i.subtitle,
          serviceType: i.title,
        })}
      />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow={`Industries / ${i.eyebrow}`}
        title={i.title}
        subtitle={i.subtitle}
        crumbs={crumbs}
      />
      <IndustryDetail
        challenges={i.challenges}
        solutions={i.solutions}
        stats={i.stats}
      />
      <CTA />
    </PageShell>
  );
}
