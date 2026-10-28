"use client";

/**
 * Adds a subtle fade-up effect to every element marked with `data-reveal`.
 *
 * A single IntersectionObserver handles the whole page, so section components
 * can stay server components. Nothing is hidden when the visitor prefers
 * reduced motion or when JavaScript does not run (see globals.css).
 */

import { useEffect } from "react";

export default function RevealOnScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll("[data-reveal]"));

    // Mark elements already in the viewport before hiding the rest,
    // so above-the-fold content never flickers.
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add("is-visible");
      }
    });
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    elements
      .filter((element) => !element.classList.contains("is-visible"))
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
