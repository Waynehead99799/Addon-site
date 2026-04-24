import type { Metadata } from "next";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import IndexList from "@/components/templates/IndexList";
import PageCTA from "@/components/templates/PageCTA";
import { SERVICES_DATA } from "@/components/pagesData";

export const metadata: Metadata = {
  title: "Technology Services | Addon Web Solutions",
  description:
    "Nine service lines covering every stage of the product lifecycle — mobile, web, IoT, blockchain, cloud, digital transformation, and more.",
};

export default function ServicesHub() {
  const rows = SERVICES_DATA.map((s) => ({
    href: `/services/${s.slug}`,
    title: s.title,
    desc: s.subtitle,
    tags: s.techStack.slice(0, 3),
  }));

  return (
    <PageShell>
      <PageHero
        eyebrow="Services / Full-spectrum technology"
        title="Technology services that scale with you."
        italicWord="scale with you."
        subtitle="From mobile-first applications to enterprise cloud infrastructure, our nine service lines cover every stage of the product lifecycle. Deep technical expertise, proven delivery."
      />
      <IndexList
        eyebrow="01 / Service lines"
        kicker="Nine briefs, one team."
        title="Nine service lines, one seamless experience."
        italicWord="one seamless experience."
        rows={rows}
      />
      <PageCTA
        eyebrow="07 / Enquire"
        title="Let's build your next digital product."
        italicWord="next digital product."
        body="Tell us about your project and receive a detailed technical proposal, timeline, and cost estimate within 48 hours — no commitment required."
        primaryLabel="Request a proposal"
        primaryHref="/contact"
        secondaryLabel="or hire developers"
        secondaryHref="/hire-dedicated-developers"
      />
    </PageShell>
  );
}
