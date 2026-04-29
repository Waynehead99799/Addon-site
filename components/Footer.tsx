import Link from "next/link";
import { Logo } from "./Logo";

export default function Footer() {
  const cols: { t: string; l: { label: string; href: string }[] }[] = [
    {
      t: "AddonAI",
      l: [
        { label: "AI Development", href: "/addonai/ai-development" },
        { label: "AI Consulting", href: "/addonai/ai-consulting" },
        { label: "Generative AI", href: "/addonai/generative-ai-development" },
        { label: "AI Chatbots", href: "/addonai/ai-chatbot-development" },
        { label: "AI Agents", href: "/addonai/ai-agents-development" },
        { label: "Machine Learning", href: "/addonai/machine-learning-development" },
        { label: "Computer Vision", href: "/addonai/computer-vision" },
        { label: "RAG Development", href: "/addonai/rag-development" },
      ],
    },
    {
      t: "Services",
      l: [
        { label: "Mobile Apps", href: "/services/mobile-app-development" },
        { label: "Web Development", href: "/services/web-development" },
        { label: "IoT Development", href: "/services/iot-development" },
        { label: "Blockchain", href: "/services/blockchain-solutions" },
        { label: "Cloud Services", href: "/services/cloud-services" },
        { label: "Digital Transformation", href: "/services/digital-transformation" },
        { label: "Quality Assurance", href: "/services/quality-assurance" },
        { label: "Outsourcing", href: "/services/outsourcing" },
      ],
    },
    {
      t: "Work",
      l: [
        { label: "Case studies", href: "/case-studies" },
        { label: "Industries", href: "/industries" },
        { label: "Field notes", href: "/blog" },
      ],
    },
    {
      t: "Company",
      l: [
        { label: "About", href: "/about" },
        { label: "Why us", href: "/why-us" },
        { label: "Hire developers", href: "/hire-dedicated-developers" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-14 pb-12 md:pb-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo size={36} />
              <span className="flex flex-col leading-none">
                <span className="font-semibold tracking-[-0.02em] text-lg">Addon Web</span>
                <span
                  className="text-[9.5px] font-mono tracking-[0.28em] uppercase mt-1"
                  style={{ color: "var(--ink-dim)" }}
                >
                  solutions · est. 2011
                </span>
              </span>
            </Link>
            <p className="mt-5 text-[14px] text-white/55 max-w-xs leading-relaxed">
              Engineering intelligent digital products.{" "}
              <span className="serif-italic text-white/75">Shipping since 2011.</span>
            </p>
            <div className="mt-6 text-[12.5px] text-white/45 font-mono">hello@addonweb.com</div>
          </div>
          {cols.map((c) => (
            <div key={c.t} className="md:col-span-2">
              <div className="eyebrow mb-5">{c.t}</div>
              <ul className="space-y-2.5">
                {c.l.map((i) => (
                  <li key={i.href}>
                    <Link
                      href={i.href}
                      className="text-[13.5px] text-white/65 hover:text-white transition"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[12px] text-white/40 font-mono">
            © 2026 Addon Web Solutions · All rights reserved
          </div>
          <div className="flex items-center gap-4 text-[12px] text-white/45">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> All systems operational
            </span>
            <a href="#" className="hover:text-white">
              Status
            </a>
            <a href="#" className="hover:text-white">
              X / Twitter
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white">
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-16 select-none">
          <div
            className="font-semibold tracking-[-0.05em] leading-[0.82] headline-grad opacity-[0.08] whitespace-nowrap"
            style={{ fontSize: "clamp(1.4rem, 7.2vw, 6.5rem)" }}
          >
            Addon Web<span className="serif-italic font-normal"> Solutions.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
