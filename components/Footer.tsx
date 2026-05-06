"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

export default function Footer() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme") || "dark";
    setTheme(currentTheme);

    const observer = new MutationObserver(() => {
      const newTheme = htmlElement.getAttribute("data-theme") || "dark";
      setTheme(newTheme);
    });

    observer.observe(htmlElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const cols: { t: string; l: { label: string; href: string }[] }[] = [
    {
      t: "AddonAI",
      l: [
        { label: "AI Consulting", href: "/addonai/ai-consulting" },
        { label: "Generative AI", href: "/addonai/generative-ai-development" },
        { label: "AI Chatbots", href: "/addonai/ai-chatbot-development" },
        { label: "AI Agents", href: "/addonai/ai-agents-development" },
        { label: "Machine Learning", href: "/addonai/machine-learning-development" },
        { label: "RAG Development", href: "/addonai/rag-development" },
      ],
    },
    {
      t: "Services",
      l: [
        { label: "Mobile Apps", href: "/services/mobile-app-development" },
        { label: "Web Development", href: "/services/web-development" },
        { label: "IoT Development", href: "/services/iot-development" },
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
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-12 md:pt-14 pb-12 md:pb-14">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-2 md:col-span-4 flex flex-col">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo size={36} />
              <span className="flex flex-col leading-none">
                <span className="font-semibold tracking-[-0.02em] text-lg">Addon Web</span>
                <span
                  className="flex justify-between w-full mt-[5px] text-[10px] font-mono uppercase"
                  style={{ color: "var(--ink-dim)" }}
                >
                  {"SOLUTIONS".split("").map((c, i) => (
                    <span key={i}>{c}</span>
                  ))}
                </span>
              </span>
            </Link>
            <div className="mt-4 space-y-3 text-[12.5px] text-white/45 font-mono mb-2 w-[48ch] max-w-full">
              <a href={`mailto:${SITE.email}`} className="block hover:text-white/75 transition">
                {SITE.email}
              </a>
              <address className="not-italic leading-relaxed">
                {SITE.address.formatted}
              </address>
            </div>
            <div className="w-[48ch] max-w-full rounded-lg overflow-hidden border border-white/10 h-fit">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address.formatted)}&z=15&output=embed`}
                width="100%"
                height="140"
                style={{
                  border: 0,
                  display: 'block',
                  filter: theme === 'dark' ? 'invert(0.9) hue-rotate(200deg)' : 'none'
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t} className="col-span-1 md:col-span-2">
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

        <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[12px] text-white/40 font-mono">
            © 2026 Addon Web Solutions · All rights reserved
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-white/45">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> All systems operational
            </span>
          </div>
        </div>

        <div className="mt-12 md:mt-16 select-none overflow-hidden">
          <div
            className="font-semibold tracking-[-0.05em] leading-[0.82] num-grad opacity-[0.08] whitespace-nowrap"
            style={{ fontSize: "clamp(1.4rem, 7.2vw, 6.5rem)" }}
          >
            Addon Web<span className="serif-italic font-normal"> Solutions.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
