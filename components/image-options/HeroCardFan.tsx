"use client";
import MockBrowser from "./MockBrowser";

// Four cards fanned out like a hand. Hovering a card lifts it forward and
// pushes neighbors slightly aside — feels like flipping through case studies.
const CARDS: { tone: "shamrock" | "azure" | "teal" | "emerald"; label: string }[] = [
  { tone: "azure",    label: "lumen-health.app" },
  { tone: "teal",     label: "handywise.com" },
  { tone: "shamrock", label: "addonai.dev" },
  { tone: "emerald",  label: "veritrack.io" },
];

const ROTATIONS = [-8, -3, 3, 8];
const X_OFFSETS = [-180, -60, 60, 180];

export default function HeroCardFan() {
  return (
    <div className="relative h-[420px] md:h-[520px] grid place-items-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(40% 40% at 50% 60%, rgba(45,188,210,0.16), transparent 70%)",
        }}
      />
      <div className="relative w-[80%] aspect-[16/10]" style={{ perspective: "1400px" }}>
        {CARDS.map((c, i) => (
          <div
            key={c.label}
            className="hero-fan-card absolute top-[8%] left-1/2 w-[55%] aspect-[16/10] -translate-x-1/2 transition-transform duration-500"
            style={{
              transform: `translateX(calc(-50% + ${X_OFFSETS[i]}px)) rotate(${ROTATIONS[i]}deg)`,
              zIndex: i + 1,
              ["--rot" as string]: `${ROTATIONS[i]}deg`,
              ["--x" as string]: `${X_OFFSETS[i]}px`,
            }}
          >
            <MockBrowser tone={c.tone} label={c.label} />
          </div>
        ))}
      </div>
    </div>
  );
}
