"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ken Burns
      gsap.to(imageRef.current, {
        scale: 1.15,
        duration: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Hero content entrance
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15, delay: 0.3 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative -mt-16 flex h-svh min-h-[560px] max-h-[95vh] lg:max-h-[85vh] xl:max-h-[75vh] w-full items-center overflow-hidden">
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src="/img/hero-img.png"
          alt="A veterinarian caring for an animal"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-slate-950/60" />
      <div ref={contentRef} className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 pt-24 sm:pt-28">
        <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Know before you lose an animal.
        </h1>
        <p className="max-w-xl text-lg leading-8 text-slate-200">
          Real-time health and location tracking, vet consultations, and early disease alerts plus crop tracking for the rest of your farm.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/register"
            className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Get started
          </Link>
          <Link
            href="/vets"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Book a consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
