"use client";
import { useState } from "react";
import { Icon } from "../icons";

const SUGGESTIONS = [
  "AI agent for our support inbox",
  "Replatform our web app on Next.js",
  "Mobile MVP in 6 weeks",
  "Tech audit on our current stack",
];

export default function CTAConversational() {
  const [value, setValue] = useState("");
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="eyebrow mb-6">Enquire</div>
        <h2 className="text-[44px] md:text-[64px] lg:text-[80px] font-semibold tracking-[-0.02em] leading-[1.0] max-w-4xl mx-auto">
          What are you{" "}
          <span className="serif-italic font-normal text-white/80">building?</span>
        </h2>
        <p className="mt-6 text-[16px] text-white/65 max-w-xl mx-auto leading-[1.55]">
          One sentence is plenty. A real engineer reads every line.{" "}
          <span className="serif-italic text-white/85">We reply in under 4 hours.</span>
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-2 flex items-center gap-2 hover:border-white/25 transition focus-within:border-white/35">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="An AI assistant that can read our internal docs…"
              className="flex-1 bg-transparent px-5 py-4 text-[16px] md:text-[18px] text-white placeholder-white/35 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full accent-grad p-[1.5px]"
              aria-label="Send"
            >
              <span className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-black">
                <span className="text-[14px] font-medium">Send</span>
                <Icon.Arrow width={13} height={13} />
              </span>
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11.5px] uppercase tracking-[0.18em] font-mono text-white/45 mr-1">
              Try
            </span>
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setValue(s)}
                className="px-3.5 py-1.5 rounded-full text-[12.5px] text-white/70 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:text-white transition"
              >
                {s}
              </button>
            ))}
          </div>
          <div className="mt-10 inline-flex items-center gap-2 text-[12.5px] text-white/45">
            <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 dot-pulse" />
            Q3 2026 · two slots open
            <span className="text-white/25">·</span>
            <a href="mailto:hello@addonweb.com" className="hover:text-white/85 transition">
              hello@addonweb.com
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
