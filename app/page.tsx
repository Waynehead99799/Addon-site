import type { Metadata } from "next";
import CursorGlow from "@/components/CursorGlow";
import HomeSectionReveal from "@/components/HomeSectionReveal";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import AboutTeaser from "@/components/AboutTeaser";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI & Custom Software Development Agency",
  description:
    "Engineers-first AI and custom software agency since 2011. We ship production AI, web, mobile, and cloud platforms for founders, operators, and enterprises across three continents.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI & Custom Software Development Agency",
    description:
      "Engineers-first AI and custom software agency since 2011. Production AI, web, mobile, and cloud platforms for 150+ clients across 10+ countries.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="relative">
      <CursorGlow />
      <HomeSectionReveal />
      <Nav />
      <Hero />
      <Logos />
      <Services />
      <Stats />
      <CaseStudies />
      <AboutTeaser />
      <Testimonials />
      <CTA />
      <Footer />
      <ThemeToggle />
    </div>
  );
}
