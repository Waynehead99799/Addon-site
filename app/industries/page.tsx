import type { Metadata } from "next";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import IndexList from "@/components/templates/IndexList";
import PageCTA from "@/components/templates/PageCTA";
import { INDUSTRIES } from "@/components/pagesData";

export const metadata: Metadata = {
  title: "Industries We Serve | Addon Web Solutions",
  description:
    "Deep domain expertise across healthcare, fintech, ecommerce, logistics, manufacturing, and more — serving 10+ countries worldwide.",
};

export default function IndustriesHub() {
  const rows = INDUSTRIES.map((i) => ({
    href: `/industries/${i.slug}`,
    title: i.title,
    desc: i.subtitle,
    meta: i.eyebrow,
  }));

  return (
    <PageShell>
      <PageHero
        eyebrow="Industries / Domain depth"
        title="Domain expertise across key industries."
        italicWord="key industries."
        subtitle="Deep vertical knowledge combined with technical excellence delivers solutions that address real-world industry challenges. Built across twelve verticals and ten-plus countries."
      />
      <IndexList
        eyebrow="01 / Industries"
        kicker="Where we work."
        title="Twelve industries, one operating method."
        italicWord="one operating method."
        rows={rows}
      />
      <PageCTA
        eyebrow="Next step"
        title="Transform your industry."
        italicWord="your industry."
        body="Tell us which vertical you're in. We'll share patterns, pitfalls, and prior work that map to your problem."
        primaryLabel="Start a conversation"
        primaryHref="/contact"
        secondaryLabel="or browse case studies"
        secondaryHref="/case-studies"
      />
    </PageShell>
  );
}
