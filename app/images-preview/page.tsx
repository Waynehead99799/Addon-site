import type { Metadata } from "next";
import HeroFloating from "@/components/image-options/HeroFloating";
import HeroDeviceStack from "@/components/image-options/HeroDeviceStack";
import HeroCardFan from "@/components/image-options/HeroCardFan";
import HeroIsometric from "@/components/image-options/HeroIsometric";
import HeroSingleShot from "@/components/image-options/HeroSingleShot";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Hero imagery — preview",
};

const OPTIONS = [
  {
    id: 1,
    name: "Floating Browser",
    note: "Single dashboard mockup that gently floats and tilts toward the cursor — confident, minimal, easy to swap a real screenshot into.",
    Component: HeroFloating,
  },
  {
    id: 2,
    name: "Device Stack",
    note: "Three product mockups staggered with depth; each tilts on cursor parallax for a layered, dimensional feel.",
    Component: HeroDeviceStack,
  },
  {
    id: 3,
    name: "Card Fan",
    note: "Four product cards fanned like a hand. Hover lifts a card forward — reads as 'pick a project.'",
    Component: HeroCardFan,
  },
  {
    id: 4,
    name: "Isometric Drift",
    note: "Six UI fragments arranged on an isometric grid; each drifts on its own slow loop — busy, but no single element steals focus.",
    Component: HeroIsometric,
  },
  {
    id: 5,
    name: "Single Hero Screenshot",
    note: "One large mockup centered, with a slow ken-burns zoom and a soft sheen sweep. Quietly cinematic.",
    Component: HeroSingleShot,
  },
];

export default function ImagesPreview() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      <header className="border-b border-white/10 px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow text-white/50">Internal preview</div>
          <h1 className="mt-3 text-[34px] md:text-[44px] font-semibold tracking-[-0.02em]">
            Hero imagery —{" "}
            <span className="serif-italic font-normal text-white/70">animation options</span>
          </h1>
          <p className="mt-3 text-white/55 text-[14px] max-w-2xl leading-relaxed">
            Five options for adding a visual to the Hero. Mockups are placeholder
            &quot;browser windows&quot; — swap them with real product screenshots once you have them.
            All animations work with reduced-motion preference.
          </p>
        </div>
      </header>

      {OPTIONS.map(({ id, name, note, Component }) => (
        <div key={id} className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 pt-12 pb-2">
            <div className="flex items-baseline gap-4 flex-wrap">
              <span className="eyebrow text-white/40">/ 0{id}</span>
              <h2 className="text-[20px] md:text-[24px] font-semibold tracking-[-0.01em]">
                {name}
              </h2>
            </div>
            <p className="mt-2 text-white/55 text-[13px] max-w-3xl">{note}</p>
          </div>
          <div className="px-6 py-8">
            <div className="max-w-7xl mx-auto">
              <Component />
            </div>
          </div>
        </div>
      ))}

      <ThemeToggle />
    </div>
  );
}
