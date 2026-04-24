import type { Metadata } from "next";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get in Touch | Addon Web Solutions",
  description: "Ready to start a conversation? We'd love to hear from you. Average first reply under four hours.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact / Correspondence"
        title="Let's build something worth shipping."
        italicWord="worth shipping."
        subtitle="Tell us what you're building. A real engineer on the call, fifteen minutes, no slide decks."
      />
      <ContactForm />
    </PageShell>
  );
}
