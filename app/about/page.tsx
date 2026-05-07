import type { Metadata } from "next";
import CursorGlow from "@/components/CursorGlow";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import HomeSectionReveal from "@/components/HomeSectionReveal";
import ScrollCue from "@/components/ScrollCue";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutStats from "@/components/about/AboutStats";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us · Engineers First Since 2011",
  description:
    "A 35+ engineer team based in Ahmedabad, India. 300+ projects shipped for 150+ clients in 10+ countries. ISO 9001 certified, partnership-driven, AI-fluent.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Addon Web Solutions",
    description:
      "Engineers-first since 2011. 35+ team based in Ahmedabad, India. 300+ projects shipped for 150+ clients in 10+ countries.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="relative">
      <ScrollCue />
      <CursorGlow />
      <Nav />
      <HomeSectionReveal />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <AboutCTA />
      <Footer />
      <ThemeToggle />
    </div>
  );
}
