"use client";

import { useEffect } from "react";

/**
 * Runs page-load animations once: navbar slides down, hero content staggers in.
 * Mount this once in the root layout or page.
 */
export default function GSAPInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ctx: { revert: () => void } | null = null;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        /* ── 1. Navbar slides down from top ── */
        gsap.fromTo(
          "header",
          { y: -80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 }
        );

        /* ── 2. Hero badge + heading stagger ── */
        const heroRight = document.querySelector(
          "section.relative.min-h-screen .text-white"
        )?.closest("div");
        if (heroRight) {
          gsap.fromTo(
            heroRight.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.12,
              ease: "power3.out",
              delay: 0.4,
            }
          );
        }

        /* ── 3. 3D canvas box scales in ── */
        gsap.fromTo(
          "section.relative.min-h-screen .relative.h-\\[400px\\]",
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out", delay: 0.3 }
        );

        /* ── 4. Ticker strip slides up ── */
        gsap.fromTo(
          ".hero-ticker-track",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 1.1 }
        );

        /* ── 5. Section headings — scroll-triggered ── */
        document.querySelectorAll(".section-title, .section-divider").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: -24 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        /* ── 6. Glass cards fan in ── */
        document.querySelectorAll(".glass-card").forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none",
              },
              delay: (i % 4) * 0.06, // subtle stagger within each row
            }
          );
        });

        /* ── 7. Stat counters roll up ── */
        document.querySelectorAll(
          "section.relative.min-h-screen .text-xl.font-semibold"
        ).forEach((el) => {
          const raw = el.textContent ?? "";
          const num = parseFloat(raw.replace(/[^0-9.]/g, ""));
          if (isNaN(num)) return;
          const suffix = raw.replace(/[0-9.]/g, "");
          const obj = { val: 0 };
          gsap.to(obj, {
            val: num,
            duration: 1.8,
            ease: "power2.out",
            delay: 0.9,
            onUpdate: () => {
              el.textContent =
                (Number.isInteger(num)
                  ? Math.round(obj.val)
                  : obj.val.toFixed(1)) + suffix;
            },
          });
        });
      });
    })();

    return () => ctx?.revert();
  }, []);

  return null;
}
