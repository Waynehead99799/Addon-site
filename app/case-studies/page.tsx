import type { Metadata } from "next";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import IndexList from "@/components/templates/IndexList";
import CTA from "@/components/CTA";
import { CASE_STUDIES_DATA } from "@/components/pagesData";

export const metadata: Metadata = {
  title: "Case Studies | Addon Web Solutions",
  description: "Real-world results from our partnerships with leading brands across IoT, healthcare, marketplace, and enterprise.",
};

export default function CaseStudiesHub() {
  const rows = CASE_STUDIES_DATA.map((c) => ({
    href: `/case-studies/${c.slug}`,
    title: c.title,
    desc: c.subtitle,
    tags: c.categories.slice(0, 2),
  }));

  return (
    <PageShell>
      <PageHero
        eyebrow="Work / Selected engagements"
        title="Our impact in action."
        italicWord="in action."
        subtitle="Real problems, measured outcomes. A selection of recent work across IoT, healthcare, marketplaces, eCommerce, and enterprise CRM."
      />
      <IndexList
        eyebrow="01 / Case studies"
        kicker="The receipts."
        title="Fourteen projects, measurable outcomes."
        italicWord="measurable outcomes."
        rows={rows}
      />
      <CTA />
    </PageShell>
  );
}
