import CursorGlow from "@/components/CursorGlow";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutStats from "@/components/about/AboutStats";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="relative">
      <CursorGlow />
      <Nav />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <AboutCTA />
      <Footer />
      <ThemeToggle />
      <WhatsAppButton />
    </div>
  );
}
