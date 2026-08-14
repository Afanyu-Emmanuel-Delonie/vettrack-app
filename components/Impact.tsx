"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "@/hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Impact() {
  const gridRef = useScrollReveal({ animation: "stagger" });
  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const animate = (el: HTMLSpanElement | null, target: number) => {
      if (!el) return;
      const counter = { val: 0 };
      gsap.fromTo(
        counter,
        { val: 0 },
        {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate() { el.textContent = String(Math.round(counter.val)); },
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
    };
    animate(stat1Ref.current, 12);
    animate(stat2Ref.current, 10);
    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20">
      <div ref={gridRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[24rem]">
        <div className="relative h-96 w-full overflow-hidden rounded-3xl bg-ink-100 lg:h-full">
          <Image
            src="/img/heros-img.jpg"
            alt="A vet checking on cattle in a barn"
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="relative flex h-96 flex-col justify-end gap-3 overflow-hidden rounded-3xl bg-brand-600 p-8 lg:h-full">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:14px_14px]" />
          <span ref={stat1Ref} className="font-display text-5xl font-semibold text-white">0</span>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white">
            Active veterinarians
          </h3>
          <p className="text-sm leading-6 text-white/70">
            Licensed vets ready for consultations, available across Rwanda.
          </p>
        </div>

        <div className="relative h-96 w-full overflow-hidden rounded-3xl bg-ink-100 lg:h-full">
          <Image
            src="/img/vets/vet-1.png"
            alt="A vet in the field with farmers"
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="relative flex h-96 flex-col justify-end gap-3 overflow-hidden rounded-3xl bg-ink-900 p-8 lg:h-full">
          <span ref={stat2Ref} className="font-display text-5xl font-semibold text-white">0</span>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white">
            Farms onboarded
          </h3>
          <p className="text-sm leading-6 text-ink-400">
            Early adopters already tracking healthier herds and catching disease earlier.
          </p>
        </div>
      </div>
    </section>
  );
}
