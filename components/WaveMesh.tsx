"use client";
import { useEffect, useRef } from "react";

export default function WaveMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = 0,
      h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const project = (x: number, y: number, z: number) => {
      const camY = 1.6;
      const pitch = 0.55;
      const cy = Math.cos(pitch),
        sy = Math.sin(pitch);
      const yr = y * cy - z * sy;
      const zr = y * sy + z * cy;
      const yc = yr - camY;
      const zc = zr + 2.2;
      if (zc <= 0.01) return null;
      const fov = 650;
      const px = (x / zc) * fov + w / 2;
      const py = (yc / zc) * fov + h * 0.32;
      return { x: px, y: py, s: 1 / zc };
    };

    const COLS = 70;
    const ROWS = 36;
    const SPAN_X = 6;
    const SPAN_Z = 7;

    let mouseX = 0,
      mouseY = 0;
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - r.left) / r.width - 0.5) * 2;
      mouseY = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove);

    const t0 = performance.now();
    const draw = (now: number) => {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);

      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const g = ctx.createRadialGradient(w * 0.5, h * 0.62, 10, w * 0.5, h * 0.62, Math.max(w, h) * 0.7);
      if (isLight) {
        // Painted with mix-blend-mode: multiply — strong brand tones deepen nicely on cream
        g.addColorStop(0, "rgba(40,115,195,0.55)");
        g.addColorStop(0.5, "rgba(35,175,130,0.35)");
        g.addColorStop(1, "rgba(255,255,255,0)");
      } else {
        g.addColorStop(0, "rgba(75,163,227,0.22)");
        g.addColorStop(0.5, "rgba(46,139,192,0.10)");
        g.addColorStop(1, "rgba(0,0,0,0)");
      }
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      const pts: Array<Array<ReturnType<typeof project>>> = new Array(ROWS);
      for (let j = 0; j < ROWS; j++) {
        pts[j] = new Array(COLS);
        for (let i = 0; i < COLS; i++) {
          const x = (i / (COLS - 1) - 0.5) * SPAN_X;
          const z = -((j / (ROWS - 1)) * SPAN_Z + 0.2);
          // Continuous bottom-up propagation — dominant depth wave + traveling pulse
          const pulse = Math.sin(z * 1.2 - t * 2.8); // travels from near (bottom) to far (top)
          const y =
            Math.sin(x * 1.3 + t * 1.6) * 0.12 +
            Math.sin(z * 2.2 - t * 2.4) * 0.28 +      // primary depth wave, upward travel
            Math.sin((x + z) * 1.5 - t * 2.1) * 0.20 + // diagonal ripple
            pulse * 0.10 +                              // additional traveling pulse
            Math.cos(x * 0.5 - z * 0.7 + t * 0.8) * 0.08 +
            mouseY * 0.05 * Math.exp(-((x - mouseX * 2) ** 2 + (z + 3) ** 2) * 0.3);
          pts[j][i] = project(x, y, z);
        }
      }

      ctx.lineWidth = isLight ? 1.5 : 1;
      for (let j = 0; j < ROWS; j++) {
        for (let i = 0; i < COLS; i++) {
          const p = pts[j][i];
          if (!p) continue;
          const pr = pts[j][i + 1];
          const pd = pts[j + 1] && pts[j + 1][i];

          const depthT = j / (ROWS - 1);
          // Light: flatter alpha falloff so far rows still read
          const alpha = isLight
            ? (1 - depthT) * 0.55 + 0.35
            : (1 - depthT) * 0.85 + 0.02;

          const xt = i / (COLS - 1);
          let r, gC, b, aMul;
          if (isLight) {
            // Deeper brand palette + multiply blend = strong teal/navy ink on cream
            r = Math.round(18 * (1 - xt) + 20 * xt);
            gC = Math.round(75 * (1 - xt) + 130 * xt);
            b = Math.round(150 * (1 - xt) + 95 * xt);
            aMul = 1.4;
          } else {
            r = Math.round(75 * (1 - xt) + 61 * xt);
            gC = Math.round(163 * (1 - xt) + 189 * xt);
            b = Math.round(227 * (1 - xt) + 111 * xt);
            aMul = 0.55;
          }
          ctx.strokeStyle = `rgba(${r},${gC},${b},${Math.min(1, alpha * aMul)})`;

          if (pr) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pr.x, pr.y);
            ctx.stroke();
          }
          if (pd) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pd.x, pd.y);
            ctx.stroke();
          }
        }
      }

      for (let j = 0; j < ROWS; j++) {
        const depthT = j / (ROWS - 1);
        if (depthT > (isLight ? 0.75 : 0.55)) continue;
        for (let i = 0; i < COLS; i += (isLight ? 1 : 2)) {
          const p = pts[j][i];
          if (!p) continue;
          const alpha = isLight ? (1 - depthT) * 0.85 + 0.15 : (1 - depthT) * 0.6;
          // Light mode: multiply blend + deep navy dot reads as a crisp printed dot on cream
          ctx.fillStyle = isLight ? `rgba(10,25,55,${Math.min(1, alpha)})` : `rgba(255,255,255,${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, (1 - depthT) * (isLight ? 2.2 : 1.6) + (isLight ? 0.6 : 0.3), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full wave-enter" />;
}
