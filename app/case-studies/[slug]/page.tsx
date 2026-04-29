import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import CaseStudyDetail from "@/components/templates/CaseStudyDetail";
import CTA from "@/components/CTA";
import { CASE_STUDIES_DATA } from "@/components/pagesData";

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
  return {
    title: `${c.title} | Case Study`,
    description: c.subtitle,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const c = CASE_STUDIES_DATA.find((x) => x.slug === params.slug);
  if (!c) notFound();

  return (
    <PageShell>
      <PageHero
        eyebrow={`Work / ${c.industry}`}
        title={c.title}
        subtitle={c.subtitle}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: c.industry, href: `/case-studies/${c.slug}` },
        ]}
      />
      <CaseStudyDetail cs={c} />
      <CTA />
    </PageShell>
  );
}
