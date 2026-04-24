"use client";
import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  px: number;
  py: number;
  life: number;
  maxLife: number;
  hue: number;
};

export default function FlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Seed with a flat clear on resize
      ctx.clearRect(0, 0, w, h);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Vector field: angle at (x, y, t). Smooth pseudo-noise using layered sines.
    const field = (x: number, y: number, t: number) => {
      const nx = x / Math.max(1, w);
      const ny = y / Math.max(1, h);
      const a =
        Math.sin(nx * 3.1 + t * 0.15) * 1.1 +
        Math.cos(ny * 2.4 - t * 0.12) * 1.1 +
        Math.sin((nx + ny) * 4.2 + t * 0.08) * 0.6 +
        Math.cos((nx - ny) * 3.7 + t * 0.05) * 0.5;
      return a * 0.9; // final angle (radians-ish)
    };

    // Seed particles
    const COUNT = 400;
    const particles: Particle[] = [];
    const spawn = (p?: Particle): Particle => {
      const maxLife = 120 + Math.random() * 140;
      const hue = Math.random(); // 0..1 — we map to brand palette
      const x = Math.random() * Math.max(1, w);
      const y = Math.random() * Math.max(1, h);
      if (p) {
        p.x = x;
        p.y = y;
        p.px = x;
        p.py = y;
        p.life = 0;
        p.maxLife = maxLife;
        p.hue = hue;
        return p;
      }
      return { x, y, px: x, py: y, life: 0, maxLife, hue };
    };
    for (let i = 0; i < COUNT; i++) particles.push(spawn());

    // Brand palette lookup: azure → teal → shamrock → emerald
    const darkStops = [
      [83, 146, 223],
      [45, 188, 210],
      [52, 203, 150],
      [62, 193, 112],
    ];
    // Light-theme particles use mid-saturation brand colours. The canvas is composited with
    // mix-blend-mode: multiply over the sky wash, so these read as soft brand tints on paper
    // instead of harsh black ink.
    const lightStops = [
      [65, 120, 195], // azure
      [45, 150, 175], // teal
      [50, 160, 120], // shamrock
      [65, 155, 100], // emerald
    ];
    const sampleColor = (hue: number, isLight: boolean) => {
      const stops = isLight ? lightStops : darkStops;
      const h = hue * (stops.length - 1);
      const i = Math.floor(h);
      const f = h - i;
      const a = stops[i];
      const b = stops[Math.min(i + 1, stops.length - 1)];
      return [
        Math.round(a[0] * (1 - f) + b[0] * f),
        Math.round(a[1] * (1 - f) + b[1] * f),
        Math.round(a[2] * (1 - f) + b[2] * f),
      ];
    };

    const t0 = performance.now();
    const draw = (now: number) => {
      const t = (now - t0) / 1000;
      const isLight =
        document.documentElement.getAttribute("data-theme") === "light";

      // Clear every frame — no trails at all
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      ctx.lineCap = "round";

      const speed = 1.4;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.px = p.x;
        p.py = p.y;

        const angle = field(p.x, p.y, t);
        p.x += Math.cos(angle) * speed;
        p.y += Math.sin(angle) * speed;
        p.life++;

        const offscreen = p.x < -20 || p.x > w + 20 || p.y < -20 || p.y > h + 20;
        if (p.life > p.maxLife || offscreen) {
          spawn(p);
          continue;
        }

        const [r, g, b] = sampleColor(p.hue, isLight);
        const lifeT = p.life / p.maxLife;
        const envelope = Math.sin(lifeT * Math.PI); // 0 → 1 → 0
        // Softer alpha on paper so the multiply blend doesn't crush the particles to ink
        const alpha = isLight ? envelope * 0.9 : envelope * 0.95;

        // Draw a short comet — segment from previous to current, then a head dot
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.lineWidth = isLight ? 1.2 : 1.1;
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, isLight ? 1.2 : 1.0, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full flow-enter" />;
}
