"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "@/hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Onboard your farm",
    detail: "Add your animals, staff, and farm details to set up your dashboard.",
  },
  {
    title: "Track & monitor",
    detail: "Location, vitals, and health alerts update automatically as things change.",
  },
  {
    title: "Consult a vet",
    detail: "Talk to a certified vet by video the moment something looks off.",
  },
  {
    title: "Stay ahead",
    detail: "Review records, catch issues early, and keep your whole herd healthy.",
  },
] as const;

function Checkmark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="check-path h-5 w-5">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="check-stroke"
      />
    </svg>
  );
}

export default function Roadmap() {
  const headingRef = useScrollReveal({ animation: "fadeUp" });
  const stepsRef = useRef<HTMLOListElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ol = stepsRef.current;
    const line = lineRef.current;
    if (!ol || !line) return;

    const items = Array.from(ol.querySelectorAll<HTMLElement>(".step-item"));
    const circles = Array.from(ol.querySelectorAll<HTMLElement>(".step-circle"));
    const checks = Array.from(ol.querySelectorAll<SVGPathElement>(".check-stroke"));
    const texts = Array.from(ol.querySelectorAll<HTMLElement>(".step-text"));

    // Prep check stroke on last step only
    const lastCheck = checks[checks.length - 1];
    if (lastCheck) {
      const len = lastCheck.getTotalLength?.() ?? 30;
      gsap.set(lastCheck, { strokeDasharray: len, strokeDashoffset: len });
    }

    // Prep items
    gsap.set(items, { opacity: 0, y: 28 });
    gsap.set(line, { scaleX: 0, transformOrigin: "left center" });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: ol, start: "top 80%" },
    });

    // Line fills across all 4 steps
    tl.to(line, { scaleX: 1, duration: 1.6, ease: "power2.inOut" }, 0);

    // Each step fades in, circle pops; last step also draws the tick
    items.forEach((item, i) => {
      const circle = circles[i];
      const text = texts[i];
      const at = i * 0.32;
      const isLast = i === items.length - 1;

      tl.to(item, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, at)
        .to(circle, { scale: 1.15, duration: 0.15, ease: "power2.out" }, at + 0.3)
        .to(circle, { scale: 1, duration: 0.2, ease: "back.out(3)" }, at + 0.45)
        .fromTo(text, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, at + 0.2);

      if (isLast && lastCheck) {
        tl.to(lastCheck, { strokeDashoffset: 0, duration: 0.5, ease: "power2.out" }, at + 0.35);
      }
    });

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <section className="bg-ink-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={headingRef} className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How we work
          </h2>
          <p className="text-sm leading-6 text-white/60">
            From sign-up to your first alert, here&apos;s what to expect when you bring VetTrack to
            your farm.
          </p>
        </div>

        <ol ref={stepsRef} className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Animated fill line — only visible on lg */}
          <div
            ref={lineRef}
            className="pointer-events-none absolute inset-x-6 top-6 hidden h-px origin-left bg-brand-500 lg:block"
          />
          {/* Static dim line underneath */}
          <div className="pointer-events-none absolute inset-x-6 top-6 hidden h-px bg-white/10 lg:block" />

          {steps.map((step, index) => (
            <li key={step.title} className="step-item relative flex flex-col gap-3">
              <div className="step-circle relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-900/40">
                {index === steps.length - 1 ? (
                  <Checkmark />
                ) : (
                  <span className="font-display text-lg font-semibold">{index + 1}</span>
                )}
              </div>
              <div className="step-text flex flex-col gap-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-400">
                  Step {index + 1}
                </span>
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-6 text-white/60">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
