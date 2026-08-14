"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Quatrefoil from "@/components/Quatrefoil";

type CtaProps = {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function Cta({
  heading = "Ready to keep every animal healthy?",
  description = "Join thousands of farms already running on VetTrack. Set up your first animal record in minutes — no contracts, no surprise fees.",
  primaryLabel = "Get started free",
  primaryHref = "/register",
  secondaryLabel = "Talk to sales",
  secondaryHref = "/contact",
}: CtaProps) {
  const sectionRef = useScrollReveal<HTMLElement>({ start: "top 90%" });

  return (
    <section ref={sectionRef} className="reveal-scale relative mx-4 my-6 overflow-hidden rounded-2xl bg-brand-600 px-6 py-16 sm:mx-6 sm:rounded-3xl sm:px-12 sm:py-20">
      <Quatrefoil className="pointer-events-none absolute -left-14 -top-14 h-56 w-56 text-white/10 sm:h-72 sm:w-72" />
      <Quatrefoil className="pointer-events-none absolute -bottom-16 -right-10 h-64 w-64 rotate-45 text-white/10 sm:h-80 sm:w-80" />
      <Quatrefoil className="pointer-events-none absolute right-1/4 top-0 hidden h-24 w-24 -translate-y-1/2 text-white/10 lg:block" />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="max-w-lg text-sm leading-6 text-white/70 sm:text-base">{description}</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
