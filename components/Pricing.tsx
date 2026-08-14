"use client";

import { useState } from "react";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi2";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "RWF",
  maximumFractionDigits: 0,
});

const plans = [
  {
    name: "Base",
    monthly: 15000,
    description: "For small farms getting their records off paper.",
    features: [
      "Up to 50 animal records",
      "Farm management dashboard",
      "Email support",
      "Disease alerts",
      "Up to 3 users",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    monthly: 35000,
    description: "For growing farms that need real-time monitoring.",
    features: [
      "Up to 500 animal records",
      "Farm management dashboard",
      "Vet chat & video support",
      "Real-time disease alerts",
      "Up to 10 users",
    ],
    cta: "Get started with Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    monthly: 75000,
    description: "For large operations and cooperatives.",
    features: [
      "Unlimited animal records",
      "Farm management dashboard",
      "Priority vet support 24/7",
      "Real-time disease alerts",
      "Unlimited users",
    ],
    cta: "Get started",
    popular: false,
  },
] as const;

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const headingRef = useScrollReveal({ animation: "fadeUp" });
  const cardsRef = useScrollReveal({ animation: "stagger" });

  return (
    <div>
      {/* Hero header */}
      <div ref={headingRef} className="bg-white px-6 py-20 text-center" id="pricing">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">Pricing</p>
        <h1 className="mx-auto mt-3 max-w-xl font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
          Invest in your farm&apos;s future
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-ink-500">
          Transparent pricing, no contracts, no surprise fees. Scale up or down as your farm grows.
        </p>

        {/* Toggle */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1 rounded-full bg-ink-100 p-1">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                !yearly ? "bg-white text-ink-900 shadow-sm" : "text-ink-500 hover:text-ink-900"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                yearly ? "bg-white text-ink-900 shadow-sm" : "text-ink-500 hover:text-ink-900"
              }`}
            >
              Yearly
            </button>
          </div>
          <span className="text-xs font-medium text-brand-500">Save 2 months with yearly billing</span>
        </div>
      </div>

      {/* Cards */}
      <section className="bg-white px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div ref={cardsRef} className="grid items-start gap-4 lg:grid-cols-3 mt-8">
            {plans.map((plan) => {
              const price = yearly ? plan.monthly * 10 : plan.monthly;
              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-3xl p-8 ${
                    plan.popular
                      ? "bg-brand-600 text-white shadow-2xl ring-1 ring-brand-500/20"
                      : "border border-ink-100 bg-white text-ink-900 shadow-sm"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-white shadow-sm">
                      Most popular
                    </span>
                  )}

                  <h3 className={`text-xs font-semibold uppercase tracking-widest ${plan.popular ? "text-brand-200" : "text-ink-400"}`}>
                    {plan.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className={`font-display text-4xl font-semibold ${plan.popular ? "text-white" : "text-ink-900"}`}>
                      {currencyFormatter.format(price)}
                    </span>
                    <span className={`text-sm ${plan.popular ? "text-white/50" : "text-ink-400"}`}>
                      /{yearly ? "yr" : "mo"}
                    </span>
                  </div>

                  <p className={`mt-2 text-sm leading-6 ${plan.popular ? "text-brand-100" : "text-ink-500"}`}>
                    {plan.description}
                  </p>

                  <div className={`my-6 h-px ${plan.popular ? "bg-white/20" : "bg-ink-100"}`} />

                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm">
                        <HiCheckCircle className={`h-4 w-4 shrink-0 ${plan.popular ? "text-brand-200" : "text-brand-500"}`} />
                        <span className={plan.popular ? "text-white/80" : "text-ink-600"}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/register"
                    className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                      plan.popular
                        ? "bg-white text-brand-700 hover:bg-brand-50 shadow-lg shadow-brand-900/20"
                        : "border border-ink-200 bg-white text-ink-900 hover:border-ink-300 hover:bg-ink-50"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Contact sales CTA */}
          <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-3xl border border-ink-100 bg-ink-50 px-8 py-8 sm:flex-row">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">Custom plan</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink-900">
                Need something built for your operation?
              </h3>
              <p className="mt-1 text-sm text-ink-500">
                Multi-site farms, government cooperatives, and agri-businesses get a tailored setup — custom integrations, dedicated support, and flexible billing.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-700"
            >
              Contact sales →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
