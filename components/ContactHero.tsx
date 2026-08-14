"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Quatrefoil from "@/components/Quatrefoil";

export default function ContactHero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12, delay: 0.2 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative -mt-16 flex min-h-[70vh] w-full items-center overflow-hidden bg-ink-900">
      <Quatrefoil className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 text-white/10 sm:h-80 sm:w-80" />
      <Quatrefoil className="pointer-events-none absolute -bottom-24 -right-14 h-72 w-72 rotate-45 text-white/10 sm:h-96 sm:w-96" />
      <Quatrefoil className="pointer-events-none absolute right-1/3 top-1/4 hidden h-20 w-20 text-white/10 lg:block" />

      <div
        ref={contentRef}
        className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-6 pt-16 text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-200">
          Contact us
        </span>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          We&apos;re here whenever you need us.
        </h1>
        <p className="max-w-xl text-base leading-7 text-white/70 sm:text-lg">
          Questions about booking, billing, or partnering with VetTrack? Send us a message and
          we&apos;ll get back to you within one business day.
        </p>
      </div>
    </section>
  );
}
