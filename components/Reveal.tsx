"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  scale,
  duration = 550,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [once]);

  const parts: string[] = [];
  parts.push(shown ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`);
  if (typeof scale === "number") {
    parts.push(shown ? "scale(1)" : `scale(${scale})`);
  }

  const style: React.CSSProperties = {
    transform: parts.join(" "),
    opacity: shown ? 1 : 0,
    transition: `transform ${duration}ms cubic-bezier(.2,.8,.2,1) ${delay}ms, opacity ${Math.min(duration, 450)}ms ease ${delay}ms`,
    willChange: "transform, opacity",
  };
  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
