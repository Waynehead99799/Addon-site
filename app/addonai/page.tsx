import type { Metadata } from "next";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import IndexList from "@/components/templates/IndexList";
import CTA from "@/components/CTA";
import JsonLd from "@/components/seo/JsonLd";
import ScrollCue from "@/components/ScrollCue";
import { AI_SERVICES } from "@/components/pagesData";
import { itemListSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AddonAI — Enterprise AI Solutions",
  description:
    "Production-grade AI: consulting, generative AI, chatbots, autonomous agents, machine learning, and RAG. Strategy through deployment.",
  alternates: { canonical: "/addonai" },
  openGraph: {
    type: "website",
    url: "/addonai",
    title: "AddonAI — Enterprise AI Solutions",
    description:
      "Production-grade AI: consulting, generative AI, chatbots, autonomous agents, machine learning, and RAG.",
  },
};

export default function AddonAIHub() {
  const rows = AI_SERVICES.map((s) => ({
    href: `/addonai/${s.slug}`,
    title: s.title,
    desc: s.subtitle,
    tags: s.techStack.slice(0, 3),
  }));

  return (
    <>
      <ScrollCue />
      <PageShell>
      <JsonLd
        data={itemListSchema({
          path: "/addonai",
          title: "AddonAI — Enterprise AI Solutions",
          items: AI_SERVICES.map((s) => ({
            name: s.title,
            url: `/addonai/${s.slug}`,
            description: s.subtitle,
          })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "AddonAI", href: "/addonai" },
        ])}
      />
      <PageHero
        eyebrow="AddonAI / Intelligence at scale"
        title="Enterprise AI Development & Consulting."
        italicWord="& Consulting."
        subtitle="We design, build, and deploy production-grade artificial intelligence systems that automate operations, generate insights, and create competitive advantages. From strategy to deployment — we handle the complexity so you can focus on growth."
      />
      <IndexList
        eyebrow="AI service lines"
        kicker="Six specialisations."
        title="Six specialised AI service lines."
        italicWord="AI service lines."
        rows={rows}
      />
      <CTA />
      </PageShell>
    </>
  );
}
