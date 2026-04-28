"use client";
import { useEffect } from "react";

/**
 * Watches every element with the `.section-reveal` class on the home page and
 * adds `.is-in-view` once 12% of it has scrolled into the viewport. The class
 * is applied server-side on each section so there's no initial-paint flash.
 * CSS in app/globals.css drives the fade-up + brand-tinted top hairline.
 */
export default function HomeSectionReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section-reveal");
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return null;
}
