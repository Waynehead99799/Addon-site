"use client";
import { useEffect, useRef } from "react";
import MockBrowser from "./MockBrowser";

// Three devices staggered/fanned. Each tilts at a slightly different rate on
// cursor parallax so the stack feels dimensional, not flat.
export default function HeroDeviceStack() {
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
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.setProperty("--cx", `${cx}`);
      el.style.setProperty("--cy", `${cy}`);
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
    <div ref={ref} className="relative h-[420px] md:h-[520px] grid place-items-center" style={{ perspective: "1400px" }}>
      <div className="relative w-[82%] aspect-[16/10]" style={{ transformStyle: "preserve-3d" }}>
        {/* back card */}
        <div
          className="absolute inset-0 transition-transform duration-300"
          style={{
            transform: "translate3d(calc(var(--cx,0) * 30px - 60px), calc(var(--cy,0) * 14px - 30px), -120px) rotateY(calc(var(--cx,0) * 8deg + 6deg)) rotateX(calc(var(--cy,0) * -5deg))",
            opacity: 0.65,
          }}
        >
          <MockBrowser tone="azure" label="lumen-health.app" />
        </div>
        {/* mid card */}
        <div
          className="absolute inset-0 transition-transform duration-300"
          style={{
            transform: "translate3d(calc(var(--cx,0) * 22px - 30px), calc(var(--cy,0) * 10px - 14px), -60px) rotateY(calc(var(--cx,0) * 6deg + 3deg)) rotateX(calc(var(--cy,0) * -4deg))",
            opacity: 0.85,
          }}
        >
          <MockBrowser tone="teal" label="handywise.com" />
        </div>
        {/* front card */}
        <div
          className="absolute inset-0 transition-transform duration-300"
          style={{
            transform: "translate3d(calc(var(--cx,0) * 14px), calc(var(--cy,0) * 6px), 0) rotateY(calc(var(--cx,0) * 5deg)) rotateX(calc(var(--cy,0) * -3deg))",
          }}
        >
          <MockBrowser tone="shamrock" label="addonai.dev" />
        </div>
      </div>
    </div>
  );
}
