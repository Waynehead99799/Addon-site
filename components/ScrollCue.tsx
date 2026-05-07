"use client";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Hero scroll cue — a small vertical hint pinned to the bottom of the
 * viewport that fades out as the visitor starts scrolling. Standard
 * modern-editorial pattern (Apple, Stripe, Linear, Vercel): shown on every
 * arrival, gone by the time the second section is in view.
 */
export default function ScrollCue() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 80, 180], [1, 0.6, 0]);

  return (
    <motion.div
      aria-hidden
      style={{ opacity }}
      className="pointer-events-none fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
    >
      <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/45">
        Scroll
      </span>
      <div className="relative h-12 w-px bg-white/10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 h-1/3 accent-grad"
          initial={{ y: "-110%" }}
          animate={{ y: ["-110%", "330%"] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: [0.65, 0.05, 0.36, 1],
            repeatDelay: 0.15,
          }}
        />
      </div>
    </motion.div>
  );
}
