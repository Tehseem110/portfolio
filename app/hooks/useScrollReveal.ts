"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";

interface RevealOptions {
  /** CSS selector for child elements to animate. Default: direct children */
  targets?: string;
  /** Stagger delay between each element (seconds). Default: 0.1 */
  stagger?: number;
  /** Y offset to start from (px). Default: 40 */
  y?: number;
  /** Animation duration (seconds). Default: 0.7 */
  duration?: number;
  /** Trigger when this % of the element is in view. Default: "top 88%" */
  start?: string;
  /** Easing. Default: "power3.out" */
  ease?: string;
  /** Delay before the first element animates. Default: 0 */
  delay?: number;
}

/**
 * Attaches a GSAP ScrollTrigger fade-up reveal to the returned ref.
 * Attach the ref to the container — children matching `targets` will animate in.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: RevealOptions = {}
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!ref.current) return;

    let ctx: { revert: () => void } | null = null;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const {
        targets = "> *",
        stagger = 0.1,
        y = 40,
        duration = 0.7,
        start = "top 88%",
        ease = "power3.out",
        delay = 0,
      } = options;

      const el = ref.current;
      if (!el) return;

      const children = el.querySelectorAll(targets);
      if (!children.length) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          children,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration,
            stagger,
            ease,
            delay,
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: "play none none none",
            },
          }
        );
      }, el);
    })();

    return () => ctx?.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
