"use client";
// Isometric drift — UI fragments float on an isometric grid. Each fragment
// drifts on its own slow loop so the scene feels alive without any single
// element pulling focus.
const FRAGMENTS = [
  { x: 8,  y: 18, w: 28, h: 18, color: "#5392df", dur: 14, delay: 0,    label: "Chart" },
  { x: 38, y: 6,  w: 32, h: 22, color: "#34cb96", dur: 18, delay: -4,   label: "Dashboard" },
  { x: 70, y: 14, w: 22, h: 14, color: "#2dbcd2", dur: 12, delay: -2,   label: "Card" },
  { x: 14, y: 50, w: 22, h: 14, color: "#3ec170", dur: 16, delay: -8,   label: "Stats" },
  { x: 44, y: 56, w: 28, h: 18, color: "#5dd5ab", dur: 13, delay: -6,   label: "Console" },
  { x: 76, y: 50, w: 20, h: 22, color: "#7eb1ec", dur: 15, delay: -10,  label: "Settings" },
];

export default function HeroIsometric() {
  return (
    <div className="relative h-[420px] md:h-[520px] overflow-hidden" style={{ perspective: "1600px" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.2) 100%), radial-gradient(50% 50% at 50% 50%, rgba(83,146,223,0.10), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          transform: "rotateX(48deg) rotateZ(-32deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {FRAGMENTS.map((f) => (
          <div
            key={f.label}
            className="absolute rounded-lg border border-white/10 hero-iso-drift"
            style={{
              left: `${f.x}%`,
              top: `${f.y}%`,
              width: `${f.w}%`,
              height: `${f.h}%`,
              background: `linear-gradient(135deg, ${f.color}33, ${f.color}11)`,
              boxShadow: `0 12px 30px ${f.color}33`,
              animationDuration: `${f.dur}s`,
              animationDelay: `${f.delay}s`,
            }}
          >
            <div
              className="absolute top-2 left-2 right-2 h-1.5 rounded-sm"
              style={{ background: `${f.color}77` }}
            />
            <div className="absolute bottom-2 left-2 text-[9px] font-mono text-white/65 uppercase tracking-wider">
              {f.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
