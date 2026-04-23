import CursorGlow from "@/components/CursorGlow";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutTeaser from "@/components/AboutTeaser";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <CursorGlow />
      <Nav />
      <Hero />
      <Logos />
      <Manifesto />
      <Services />
      <Stats />
      <CaseStudies />
      <AboutTeaser />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
      <ThemeToggle />
      <WhatsAppButton />
    </div>
  );
}
