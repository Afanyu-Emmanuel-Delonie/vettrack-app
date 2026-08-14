"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scale: 1.15,
        duration: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative -mt-20 flex h-screen min-h-160 w-full items-center overflow-hidden">
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
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6">
        
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Book a vet, track your animal&apos;s health, in one place.
        </h1>
        <p className="max-w-xl text-lg leading-8 text-slate-200">
          VetTrack connects you with licensed veterinarians for video consultations and keeps
          every record, reminder, and prescription organized for you.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/register"
            className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Get started free
          </Link>
          <Link
            href="/vets"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Browse our vets
          </Link>
        </div>
      </div>
    </section>
  );
}
