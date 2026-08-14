"use client";

import Image from "next/image";
import Link from "next/link";
import { vets } from "@/lib/vets";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function TopVets() {
  const headingRef = useScrollReveal({ animation: "fadeUp" });
  const gridRef = useScrollReveal({ animation: "stagger" });

  return (
    <section id="vets" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div ref={headingRef} className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
          Meet our top vets
        </h2>
        <p className="text-sm leading-6 text-ink-500">
          Licensed veterinarians ready for a video consultation the moment you need one.
        </p>
      </div>

      <div ref={gridRef} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {vets.map((vet) => (
          <Link
            key={vet.slug}
            href={`/vets/${vet.slug}`}
            className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ink-100"
          >
            <Image
              src={vet.photo}
              alt={vet.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5">
              <div>
                <h3 className="text-base font-semibold text-white">{vet.name}</h3>
                <p className="text-sm text-white/70">{vet.specialty}</p>
              </div>
              <span className="w-full rounded-full bg-white px-4 py-2.5 text-center text-xs font-semibold text-ink-900 transition-colors group-hover:bg-brand-50">
                Book a consultation
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
