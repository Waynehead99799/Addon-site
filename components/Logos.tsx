import type { ReactNode } from "react";

const L: Record<string, ReactNode> = {
  openai: (
    <svg viewBox="0 0 120 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-7 w-auto">
      <path d="M27.2 11.8a7.2 7.2 0 0 0-.6-5.9 7.3 7.3 0 0 0-7.9-3.5 7.3 7.3 0 0 0-5.5-2.4 7.3 7.3 0 0 0-7 5A7.3 7.3 0 0 0 1.3 9.5a7.3 7.3 0 0 0 .9 8.6A7.3 7.3 0 0 0 3 24a7.3 7.3 0 0 0 7.8 3.5 7.3 7.3 0 0 0 5.5 2.4 7.3 7.3 0 0 0 7-5.1 7.3 7.3 0 0 0 4.9-3.6 7.3 7.3 0 0 0-.9-8.6zm-10.9 15.2a5.4 5.4 0 0 1-3.5-1.2l.2-.1 5.8-3.4a1 1 0 0 0 .5-.8v-8.3l2.4 1.4v6.8a5.4 5.4 0 0 1-5.4 5.6zM4.7 22.4a5.4 5.4 0 0 1-.6-3.6v-.1l5.8 3.3c.3.2.7.2 1 0l7.1-4.1v2.8l-5.8 3.4a5.4 5.4 0 0 1-7.5-1.7zM3.2 10.4a5.4 5.4 0 0 1 2.8-2.4v7c0 .3.1.6.5.8l7 4-2.4 1.4-5.9-3.4a5.4 5.4 0 0 1-2-7.4zm20.1 4.7-7-4 2.4-1.4 5.9 3.4a5.4 5.4 0 0 1-.8 9.8v-7a1 1 0 0 0-.5-.8zm2.4-3.6-5.8-3.3a1 1 0 0 0-1 0l-7 4V9.3l5.7-3.3a5.4 5.4 0 0 1 8 5.6zM11.6 16.2 9.2 14.8V8a5.4 5.4 0 0 1 8.9-4.2l-.2.1-5.8 3.4a1 1 0 0 0-.5.8zm1.3-2.8 3.2-1.8 3.2 1.8v3.6l-3.2 1.8-3.2-1.8z" />
      <text x="34" y="20" fontSize="15" fontWeight="600" fill="currentColor" fontFamily="Geist, sans-serif">OpenAI</text>
    </svg>
  ),
  nvidia: (
    <svg viewBox="0 0 110 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
      <text x="0" y="18" fontSize="18" fontWeight="700" letterSpacing="1" fill="currentColor" fontFamily="Geist, sans-serif">NVIDIA</text>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 110 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-7 w-auto">
      <path d="M14 1.8a12.2 12.2 0 0 0-3.9 23.8c.6.1.8-.3.8-.6v-2.2c-3.4.7-4.1-1.6-4.1-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.6-1.3-5.6-6 0-1.3.5-2.4 1.3-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.3a12 12 0 0 1 6 0c2.3-1.6 3.3-1.3 3.3-1.3.6 1.7.2 3 .1 3.3.8.9 1.3 2 1.3 3.3 0 4.7-2.9 5.7-5.6 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12.2 12.2 0 0 0 14 1.8z" />
      <text x="32" y="19" fontSize="15" fontWeight="700" fill="currentColor" fontFamily="Geist, sans-serif">GitHub</text>
    </svg>
  ),
  stripe: (
    <svg viewBox="0 0 70 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
      <text x="0" y="18" fontSize="18" fontWeight="700" fill="currentColor" fontStyle="italic" fontFamily="Geist, sans-serif">stripe</text>
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 90 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
      <path d="M12 2 22 20H2z" />
      <text x="28" y="18" fontSize="16" fontWeight="700" fill="currentColor" fontFamily="Geist, sans-serif">Vercel</text>
    </svg>
  ),
  linear: (
    <svg viewBox="0 0 90 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
      <circle cx={12} cy={12} r={10} fill="none" stroke="currentColor" strokeWidth={2} />
      <path d="M6 10l12 6M8 6l10 10" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="28" y="18" fontSize="16" fontWeight="600" fill="currentColor" fontFamily="Geist, sans-serif">Linear</text>
    </svg>
  ),
  nike: (
    <svg viewBox="0 0 80 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
      <path d="M2 14 22 4C12 4 6 10 2 14zM26 4l-8 10c0-5 4-8 8-10z" opacity="0.95" />
      <text x="34" y="18" fontSize="16" fontWeight="800" fill="currentColor" fontStyle="italic" fontFamily="Geist, sans-serif">NIKE</text>
    </svg>
  ),
  shopify: (
    <svg viewBox="0 0 100 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
      <path d="M14 3c-3 0-5 2-6 5l-4 1v13l12 1 8-2V6c-1-2-4-3-6-3h-4zm-2 6c0-1 1-2 2-2v3l-2 1V9z" />
      <text x="30" y="18" fontSize="16" fontWeight="700" fill="currentColor" fontFamily="Geist, sans-serif">Shopify</text>
    </svg>
  ),
  notion: (
    <svg viewBox="0 0 95 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
      <rect x={2} y={3} width={18} height={18} rx={2} fill="none" stroke="currentColor" strokeWidth={2} />
      <path d="M7 8v8M7 8l6 8M13 8v8" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="26" y="18" fontSize="15" fontWeight="600" fill="currentColor" fontFamily="Geist, sans-serif">Notion</text>
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 85 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
      <circle cx={8} cy={4} r={3.5} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <circle cx={8} cy={12} r={3.5} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <circle cx={8} cy={20} r={3.5} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <circle cx={15} cy={12} r={3.5} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <text x="24" y="18" fontSize="15" fontWeight="600" fill="currentColor" fontFamily="Geist, sans-serif">Figma</text>
    </svg>
  ),
};

export default function Logos() {
  const keys = ["openai", "nvidia", "github", "stripe", "vercel", "linear", "nike", "shopify", "notion", "figma"];
  const rowKeys = [...keys, ...keys.map((k) => k + "-2")];
  return (
    <section className="relative border-t border-b border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10 grid md:grid-cols-12 gap-6 md:gap-10 items-center">
        <div className="md:col-span-3">
          <div className="eyebrow">Technologies </div>
          <div className="mt-1 serif-italic text-[14px] text-white/70">
            The stack we ship with, every day.
          </div>
        </div>
        <div className="md:col-span-9 overflow-hidden marquee-mask logos-strip">
          <div className="flex items-center gap-14 ticker w-max text-white/55">
            {rowKeys.map((k) => (
              <div key={k} className="logo-item shrink-0 opacity-75">
                {L[k.replace(/-2$/, "")]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
