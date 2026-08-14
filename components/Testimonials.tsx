"use client";

import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "Before VetTrack I was losing 2–3 animals every season without knowing why. The disease alerts caught an outbreak early and I saved the whole herd.",
    name: "Jean-Pierre Habimana",
    role: "Cattle farmer, Eastern Province",
    initials: "JH",
  },
  {
    quote:
      "The vet consultation feature alone is worth it. I used to drive 40km to the nearest clinic. Now I get a diagnosis in 10 minutes from my phone.",
    name: "Consolée Uwimana",
    role: "Dairy farmer, Southern Province",
    initials: "CU",
  },
  {
    quote:
      "We manage over 800 animals across two sites. VetTrack gave us one place to see everything. Our team response time to health issues dropped by 60%.",
    name: "Emmanuel Nkurunziza",
    role: "Farm manager, Musanze",
    initials: "EN",
  },
] as const;

const PER_VIEW = 3;

export default function Testimonials() {
  const pageCount = Math.ceil(testimonials.length / PER_VIEW);
  const [page, setPage] = useState(0);

  const goTo = (i: number) => setPage(((i % pageCount) + pageCount) % pageCount);
  const visible = testimonials.slice(page * PER_VIEW, page * PER_VIEW + PER_VIEW);

  const headingRef = useScrollReveal({ animation: "fadeUp" });
  const gridRef = useScrollReveal({ animation: "stagger" });

  return (
    <section className="bg-ink-900 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div ref={headingRef} className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">
            Testimonials
          </p>
          <h2 className="max-w-lg font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Farmers who made the switch
          </h2>
        </div>

        <div ref={gridRef} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-brand-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-white/70">&ldquo;{t.quote}&rdquo;</p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-xs font-semibold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-ink-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
            >
              <HiChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === page ? "w-6 bg-brand-500" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(page + 1)}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
            >
              <HiChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
