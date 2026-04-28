"use client";
import MockBrowser from "./MockBrowser";

// A single hero screenshot, anchored confidently in the centre. Animation is
// minimal — a slow ken-burns zoom + a soft sheen sweep across the surface —
// so the screenshot itself is the focus.
export default function HeroSingleShot() {
  return (
    <div className="relative h-[420px] md:h-[520px] grid place-items-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 60%, rgba(52,203,150,0.16), transparent 70%)",
        }}
      />
      <div className="relative w-[78%] aspect-[16/10] hero-zoom">
        <MockBrowser tone="shamrock" label="addonweb.dashboard" />
        {/* sheen */}
        <div className="hero-sheen absolute inset-0 pointer-events-none rounded-xl overflow-hidden" />
      </div>
    </div>
  );
}
