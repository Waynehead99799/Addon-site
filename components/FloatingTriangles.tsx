"use client";
import { useEffect, useRef } from "react";

type Tri = {
  id: string;
  size: number;       // px (triangle bounding box)
  x: number;          // % from left
  y: number;          // % from top
  blur: number;       // px
  opacity: number;
  rotate: number;     // base degrees
  parallax: number;   // px per normalized mouse unit
  dur: number;        // float animation seconds
  delay: number;      // seconds
  face: "left" | "right" | "inner";  // which logo face shape to use
  flip?: boolean;     // mirror horizontally
};

const TRIS: Tri[] = [
  { id: "t1", size: 520, x: 6,  y: 8,  blur: 32, opacity: 0.42, rotate: -12, parallax: 22, dur: 18, delay: 0,   face: "left" },
  { id: "t2", size: 420, x: 72, y: 20, blur: 24, opacity: 0.48, rotate: 18,  parallax: 34, dur: 22, delay: -6,  face: "right" },
  { id: "t3", size: 260, x: 58, y: 62, blur: 12, opacity: 0.55, rotate: -22, parallax: 46, dur: 14, delay: -3,  face: "left", flip: true },
  { id: "t4", size: 180, x: 18, y: 58, blur: 8,  opacity: 0.6,  rotate: 26,  parallax: 58, dur: 16, delay: -9,  face: "inner" },
  { id: "t5", size: 130, x: 86, y: 76, blur: 5,  opacity: 0.65, rotate: -6,  parallax: 72, dur: 11, delay: -2,  face: "right", flip: true },
];

// Paths are normalized to a 512-viewBox — the same geometry as the logo faces.
const PATHS: Record<Tri["face"], string> = {
  left:  "M256 32 L56 432 L160 432 L256 260 Z",
  right: "M256 32 L456 432 L352 432 L256 260 Z",
  inner: "M256 260 L160 432 L220 432 L256 368 Z",
};

export default function FloatingTriangles() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let raf = 0;
    let tx = 0, ty = 0;    // target (from mouse)
    let cx = 0, cy = 0;    // current (eased)

    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;   // -0.5 … 0.5
      ty = (e.clientY - r.top) / r.height - 0.5;
    };

    const tick = () => {
      // easing toward target so parallax feels buttery, not snappy
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      const nodes = root.querySelectorAll<HTMLElement>("[data-parallax]");
      nodes.forEach((n) => {
        const p = parseFloat(n.dataset.parallax || "0");
        n.style.setProperty("--mx", `${cx * p}px`);
        n.style.setProperty("--my", `${cy * p}px`);
      });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* ambient brand wash underneath */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 25% 25%, rgba(75,163,227,0.18), transparent 60%)," +
            "radial-gradient(55% 50% at 78% 65%, rgba(52,203,150,0.18), transparent 60%)",
        }}
      />

      {TRIS.map((t, i) => (
        <div
          key={t.id}
          data-parallax={t.parallax}
          className="absolute"
          style={{
            left: `${t.x}%`,
            top: `${t.y}%`,
            width: t.size,
            height: t.size,
            transform: "translate(var(--mx,0), var(--my,0))",
            willChange: "transform",
          }}
        >
          <div
            className={`ft-float ft-float-${(i % 3) + 1}`}
            style={{
              width: "100%",
              height: "100%",
              animationDuration: `${t.dur}s`,
              animationDelay: `${t.delay}s`,
            }}
          >
            <svg
              viewBox="0 0 512 512"
              width="100%"
              height="100%"
              style={{
                filter: `blur(${t.blur}px)`,
                opacity: t.opacity,
                transform: `rotate(${t.rotate}deg)${t.flip ? " scaleX(-1)" : ""}`,
                transformOrigin: "50% 50%",
              }}
            >
              <defs>
                <linearGradient id={`ftg-${t.id}`} x1="0.5" y1="0" x2={t.face === "right" ? "0.8" : "0.2"} y2="1">
                  <stop offset="0%"   stopColor={t.face === "right" ? "#1B5FAA" : "#4BA3E3"} />
                  <stop offset="45%"  stopColor={t.face === "right" ? "#1b717e" : "#2dbcd2"} />
                  <stop offset="100%" stopColor={t.face === "right" ? "#2DA862" : "#34cb96"} />
                </linearGradient>
              </defs>
              <path d={PATHS[t.face]} fill={`url(#ftg-${t.id})`} />
            </svg>
          </div>
        </div>
      ))}

      {/* subtle center darken so headline stays readable — doesn't kill triangles */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 40% at 50% 45%, rgba(14,11,10,0.45) 0%, transparent 75%)",
        }}
      />
      {/* soft edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 80% at 50% 50%, transparent 55%, var(--bg) 100%)",
        }}
      />
    </div>
  );
}
