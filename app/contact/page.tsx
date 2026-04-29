import type { Metadata } from "next";
import PageShell from "@/components/templates/PageShell";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Get in Touch | Addon Web Solutions",
  description:
    "Ready to start a conversation? We'd love to hear from you. Average first reply under four hours.",
};

/**
 * /contact renders the same canonical CTA block used at the bottom of every other
 * page so the form, copy, and editorial framing are identical site-wide.
 * The hero is intentionally omitted — the CTA block already carries its own
 * "Let's build / something worth shipping." display headline.
 */
export default function ContactPage() {
  return (
    <PageShell>
      <div className="pt-28 md:pt-32">
        <CTA />
      </div>
    </PageShell>
  );
}
