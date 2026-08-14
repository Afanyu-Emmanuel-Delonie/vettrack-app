"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Animation = "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "stagger";

type Options = {
  animation?: Animation;
  duration?: number;
  delay?: number;
  staggerAmount?: number;
  start?: string;
};

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: Options = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      animation = "fadeUp",
      duration = 0.8,
      delay = 0,
      staggerAmount = 0.12,
      start = "top 88%",
    } = options;

    const fromVars: gsap.TweenVars =
      animation === "fadeUp"
        ? { opacity: 0, y: 40 }
        : animation === "fadeLeft"
        ? { opacity: 0, x: -50 }
        : animation === "fadeRight"
        ? { opacity: 0, x: 50 }
        : animation === "scale"
        ? { opacity: 0, scale: 0.92 }
        : { opacity: 0, y: 32 }; // stagger base

    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      delay,
      ease: "power3.out",
    };

    if (animation === "stagger") {
      gsap.fromTo(el.children, fromVars, {
        ...toVars,
        stagger: staggerAmount,
        scrollTrigger: { trigger: el, start },
      });
    } else {
      gsap.fromTo(el, fromVars, {
        ...toVars,
        scrollTrigger: { trigger: el, start },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return ref;
}
