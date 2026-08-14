"use client";

import {
  HiOutlineShieldCheck,
  HiOutlineBoltSlash,
  HiOutlineDevicePhoneMobile,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  {
    icon: HiOutlineShieldCheck,
    title: "Built for African farms",
    description:
      "Most farm software is built for Europe or North America. VetTrack is designed around the realities of African livestock farming — local vets, local breeds, local conditions.",
  },
  {
    icon: HiOutlineBoltSlash,
    title: "Early warning, not late regret",
    description:
      "Our disease monitoring catches anomalies before they become outbreaks. You get an alert the moment something looks wrong — not after you've already lost animals.",
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: "Works on any device",
    description:
      "No expensive hardware required. VetTrack runs on the phone already in your pocket, with offline support for farms with unreliable connectivity.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Data that actually helps",
    description:
      "Every record, every vet visit, every alert feeds into reports that help you make better decisions — from which animals to sell to when to vaccinate.",
  },
];

export default function WhyUs() {
  const headingRef = useScrollReveal({ animation: "fadeUp" });
  const gridRef = useScrollReveal({ animation: "stagger" });
  const ctaRef = useScrollReveal({ animation: "fadeUp" });

  return (
    <section className="bg-ink-900 px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div ref={headingRef} className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">
            Why VetTrack
          </p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-lg font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The farm management platform built to last
            </h2>
            <p className="max-w-sm text-sm leading-6 text-ink-400">
              We didn't just build another dashboard. We built a system that works the way farmers actually work.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-white/10" />

        {/* Reasons grid */}
        <div ref={gridRef} className="mt-10 grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-brand-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-ink-500">0{i + 1}</span>
                </div>
                <h3 className="text-base font-semibold text-white">{reason.title}</h3>
                <p className="text-sm leading-6 text-ink-400">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div ref={ctaRef} className="mt-16 flex flex-col items-center justify-between gap-4 rounded-2xl bg-white/5 px-8 py-6 ring-1 ring-white/10 sm:flex-row">
          <p className="text-sm font-medium text-white">
            Join 12,000+ farms already running on VetTrack.
          </p>
          <a
            href="/register"
            className="shrink-0 rounded-full bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-400"
          >
            Start for free →
          </a>
        </div>

      </div>
    </section>
  );
}
