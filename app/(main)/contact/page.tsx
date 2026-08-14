"use client";

import { useState, type FormEvent } from "react";
import { HiOutlineClock, HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import ContactHero from "@/components/ContactHero";
import Offices from "@/components/Offices";
import Faq from "@/components/Faq";

const contactInfo = [
  {
    icon: HiOutlinePhone,
    title: "Phone",
    lines: ["+250 780 721 800"],
    href: "tel:+250780721800",
  },
  {
    icon: HiOutlineEnvelope,
    title: "Email",
    lines: ["info@vettrack.rw"],
    href: "mailto:info@vettrack.rw",
  },
  {
    icon: HiOutlineClock,
    title: "Business Hours",
    lines: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Emergency Contact: 24/7"],
  },
] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col">
      <ContactHero />

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-ink-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-ink-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-ink-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Send message
            </button>
            {submitted && (
              <p className="text-sm font-medium text-brand-700" role="status">
                Thanks — we&apos;ll get back to you within one business day.
              </p>
            )}
          </form>

          <div className="flex flex-col gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const body = (
                <>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-ink-900">{item.title}</h2>
                    {item.lines.map((line) => (
                      <p key={line} className="mt-1 text-sm text-ink-500">
                        {line}
                      </p>
                    ))}
                  </div>
                </>
              );

              return "href" in item ? (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-colors hover:border-brand-200"
                >
                  {body}
                </a>
              ) : (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6"
                >
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Offices />

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="relative h-96 w-full overflow-hidden rounded-3xl border border-ink-100">
          <iframe
            title="VetTrack location — Nyagatare, Rwanda"
            src="https://www.google.com/maps?q=Nyagatare,Rwanda&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Faq />
    </div>
  );
}
