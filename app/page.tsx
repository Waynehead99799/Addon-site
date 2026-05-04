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
