import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import ServiceDetail from "@/components/templates/ServiceDetail";
import PageCTA from "@/components/templates/PageCTA";
import { SERVICES_DATA } from "@/components/pagesData";

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
  return {
    title: `${s.title} | Addon Web Solutions`,
    description: s.subtitle,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = SERVICES_DATA.find((x) => x.slug === params.slug);
  if (!s) notFound();

  return (
    <PageShell>
      <PageHero
        eyebrow={`Services / ${s.eyebrow}`}
        title={s.title}
        subtitle={s.subtitle}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: s.title, href: `/services/${s.slug}` },
        ]}
      />
      <ServiceDetail
        features={s.features}
        process={s.process}
        techStack={s.techStack}
        featuresTitle={`What ${s.title.toLowerCase()} looks like with us.`}
        featuresItalic="with us."
      />
      <PageCTA
        eyebrow="Next step"
        title={`Ready to ship ${s.title.toLowerCase()}?`}
        italicWord={`${s.title.toLowerCase()}?`}
        body="Fifteen minutes, no decks, a real engineer on the call."
        primaryLabel="Book a 15-min call"
        primaryHref="/contact"
      />
    </PageShell>
  );
}
