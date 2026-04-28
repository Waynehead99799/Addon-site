"use client";
import { useEffect, useRef } from "react";
import MockBrowser from "./MockBrowser";

// Single browser window, gently floats up-down forever, with cursor parallax
// adding a tiny rotation/translate so the dashboard feels like it's hovering.
export default function HeroFloating() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
    };
    const tick = () => {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      el.style.setProperty("--mx", `${cx * 14}px`);
      el.style.setProperty("--my", `${cy * 8}px`);
      el.style.setProperty("--rx", `${cy * -3}deg`);
      el.style.setProperty("--ry", `${cx * 4}deg`);
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="relative h-[420px] md:h-[520px] grid place-items-center" style={{ perspective: "1200px" }}>
      {/* ambient bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 40% at 50% 60%, rgba(52,203,150,0.18), transparent 70%)",
        }}
      />
      <div
        className="relative w-[78%] aspect-[16/10] hero-float"
        style={{
          transform:
            "translate(var(--mx,0), var(--my,0)) rotateX(var(--rx,0)) rotateY(var(--ry,0))",
          transformStyle: "preserve-3d",
        }}
      >
        <MockBrowser tone="shamrock" label="dashboard.veritrack.io" />
      </div>
    </div>
  );
}
