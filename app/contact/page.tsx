"use client";

import { useState, type FormEvent } from "react";

const locations = [
  {
    city: "Austin, TX",
    address: "412 Riverside Dr, Suite 200",
    hours: "Mon–Fri, 8am–6pm",
  },
  {
    city: "Denver, CO",
    address: "88 Larimer St, Floor 3",
    hours: "Mon–Fri, 8am–6pm",
  },
  {
    city: "Raleigh, NC",
    address: "1500 Glenwood Ave, Suite 110",
    hours: "Mon–Fri, 8am–6pm",
  },
] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Contact us
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Questions about booking, billing, or partnering with VetTrack? Send us a message.
        </p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
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
          {locations.map((location) => (
            <div key={location.city} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-base font-semibold text-slate-900">{location.city}</h2>
              <p className="mt-2 text-sm text-slate-600">{location.address}</p>
              <p className="mt-1 text-sm text-slate-600">{location.hours}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
