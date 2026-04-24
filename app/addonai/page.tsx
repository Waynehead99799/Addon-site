import type { Metadata } from "next";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import IndexList from "@/components/templates/IndexList";
import PageCTA from "@/components/templates/PageCTA";
import { AI_SERVICES } from "@/components/pagesData";

export const metadata: Metadata = {
  title: "AddonAI — Enterprise AI Solutions | Addon Web Solutions",
  description:
    "Production-grade AI: development, consulting, generative AI, chatbots, agents, machine learning, computer vision, RPA, and RAG.",
};

export default function AddonAIHub() {
  const rows = AI_SERVICES.map((s) => ({
    href: `/addonai/${s.slug}`,
    title: s.title,
    desc: s.subtitle,
    tags: s.techStack.slice(0, 3),
  }));

  return (
    <PageShell>
      <PageHero
        eyebrow="AddonAI / Intelligence at scale"
        title="Enterprise AI solutions that drive results."
        italicWord="drive results."
        subtitle="We design, build, and deploy production-grade artificial intelligence systems that automate operations, generate insights, and create competitive advantages. From strategy to deployment — we handle the complexity so you can focus on growth."
      />
      <IndexList
        eyebrow="01 / AI service lines"
        kicker="Nine specialisations."
        title="Nine specialised AI service lines."
        italicWord="AI service lines."
        rows={rows}
      />
      <PageCTA
        eyebrow="Next step"
        title="Start your AI journey today."
        italicWord="AI journey today."
        body="Book a free 30-minute AI strategy session with our experts. We'll assess your use case, recommend an approach, and outline a clear path to production."
        primaryLabel="Book AI consultation"
        primaryHref="/contact"
      />
    </PageShell>
  );
}
