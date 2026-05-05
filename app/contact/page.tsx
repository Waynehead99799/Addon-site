import type { Metadata } from "next";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import CTA from "@/components/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact — Start a Project",
  description:
    "Talk to a senior engineer about your project. Average first reply under 24 hours. Discovery to kickoff in seven days.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact Addon Web Solutions",
    description:
      "Talk to a senior engineer about your project. Reply under 24 hours.",
  },
};

/**
 * /contact renders a PageHero (so the page has a proper H1 for SEO) followed
 * by the canonical CTA block used at the bottom of every other page. The
 * hero copy is route-specific; the CTA below carries the shared form +
 * sidebar identical to home.
 */
export default function ContactPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact / Start a project"
        title="Talk to a senior engineer."
        italicWord="senior engineer."
        subtitle="Tell us what you're building. Average first reply under 24 hours, discovery to kickoff in seven days."
      />
      <CTA />
    </PageShell>
  );
}
