import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import IndustryDetail from "@/components/templates/IndustryDetail";
import PageCTA from "@/components/templates/PageCTA";
import { INDUSTRIES } from "@/components/pagesData";

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
  return {
    title: `${i.title} | Addon Web Solutions`,
    description: i.subtitle,
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const i = INDUSTRIES.find((x) => x.slug === params.slug);
  if (!i) notFound();

  return (
    <PageShell>
      <PageHero
        eyebrow={`Industries / ${i.eyebrow}`}
        title={i.title}
        subtitle={i.subtitle}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: i.title, href: `/industries/${i.slug}` },
        ]}
      />
      <IndustryDetail
        challenges={i.challenges}
        solutions={i.solutions}
        stats={i.stats}
      />
      <PageCTA
        eyebrow="Next step"
        title={`Transform your ${i.title.toLowerCase()} business.`}
        italicWord={`${i.title.toLowerCase()} business.`}
        body="Let us show you how our technology solutions can address your specific industry challenges."
        primaryLabel="Schedule consultation"
        primaryHref="/contact"
        secondaryLabel="or view case studies"
        secondaryHref="/case-studies"
      />
    </PageShell>
  );
}
