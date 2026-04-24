import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import ServiceDetail from "@/components/templates/ServiceDetail";
import PageCTA from "@/components/templates/PageCTA";
import { AI_SERVICES } from "@/components/pagesData";

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
  return {
    title: `${s.title} | AddonAI`,
    description: s.subtitle,
  };
}

export default function AIServicePage({ params }: { params: { slug: string } }) {
  const s = AI_SERVICES.find((x) => x.slug === params.slug);
  if (!s) notFound();

  return (
    <PageShell>
      <PageHero
        eyebrow={`AddonAI / ${s.eyebrow}`}
        title={s.title}
        subtitle={s.subtitle}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "AddonAI", href: "/addonai" },
          { label: s.title, href: `/addonai/${s.slug}` },
        ]}
      />
      <ServiceDetail
        features={s.features}
        process={s.process}
        techStack={s.techStack}
        featuresTitle={`What production ${s.title.toLowerCase()} requires.`}
        featuresItalic="requires."
      />
      <PageCTA
        eyebrow="Next step"
        title={`Ship ${s.title.toLowerCase()}, for real.`}
        italicWord="for real."
        body="A real engineer on the call. Fifteen minutes, no slides."
        primaryLabel="Book a 15-min call"
        primaryHref="/contact"
      />
    </PageShell>
  );
}
