"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch/coarse pointers
    if (typeof window !== "undefined" && !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }
    const el = ref.current;
    if (!el) return;

    let tx = -9999, ty = -9999;
    let cx = -9999, cy = -9999;
    let raf = 0;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) {
        el.style.opacity = "1";
        visible = true;
      }
    };
    const onLeave = () => {
      el.style.opacity = "0";
      visible = false;
    };

    // The browser reports pointer coords at the cursor's hotspot (top-left of the arrow).
    // Offset the glow so its center lines up with the cursor's visual center instead.
    const HOTSPOT_X = 8;
    const HOTSPOT_Y = 10;
    const SIZE = 170;
    const HALF = SIZE / 2;

    const tick = () => {
      // Tight follow — just enough easing to smooth sub-pixel jitter, not enough to trail
      cx += (tx - cx) * 0.55;
      cy += (ty - cy) * 0.55;
      el.style.transform = `translate3d(${cx - HALF + HOTSPOT_X}px, ${cy - HALF + HOTSPOT_Y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    el.style.opacity = "0";
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden />;
}
