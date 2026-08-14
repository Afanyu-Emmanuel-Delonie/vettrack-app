import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services — VetTrack",
  description: "Video consultations, vaccinations, diagnostics, and more from licensed vets.",
};

const services = [
  {
    id: "video-consultations",
    title: "Video consultations",
    description:
      "Connect face-to-face with a licensed vet from your phone or laptop. Get advice on symptoms, behavior, and general wellness without a trip to the clinic.",
  },
  {
    id: "vaccinations",
    title: "Vaccinations",
    description:
      "Book core and lifestyle vaccinations with a partner clinic near you, scheduled and tracked from your VetTrack portal.",
  },
  {
    id: "diagnostics",
    title: "Diagnostics & lab work",
    description:
      "Order lab panels and imaging through our partner network, with results delivered straight to your animal's record.",
  },
  {
    id: "prescriptions",
    title: "Prescriptions & refills",
    description:
      "Get prescriptions reviewed and renewed by a vet, with refill reminders so your animal never misses a dose.",
  },
  {
    id: "emergency-triage",
    title: "Emergency triage",
    description:
      "Not sure if it's urgent? A vet can help you assess symptoms and decide whether to monitor at home or seek in-person emergency care.",
  },
  {
    id: "wellness-plans",
    title: "Wellness plans",
    description:
      "Ongoing check-ins and personalized care plans for chronic conditions, senior animals, or multi-pet households.",
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Services
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          From routine care to urgent questions, VetTrack connects you with the right kind of
          veterinary support.
        </p>
      </div>

      <nav aria-label="Jump to service" className="mt-8 flex flex-wrap gap-2">
        {services.map((service) => (
          <a
            key={service.id}
            href={`#${service.id}`}
            className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-brand-600 hover:text-brand-700"
          >
            {service.title}
          </a>
        ))}
      </nav>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            icon={<span className="text-lg font-semibold">{service.title[0]}</span>}
          />
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start gap-4 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-xl font-semibold text-slate-900">Not sure which service fits?</h2>
        <p className="text-slate-600">
          Book a video consultation first — your vet can route you to the right next step.
        </p>
        <Link
          href="/vets"
          className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Browse our vets
        </Link>
      </div>
    </div>
  );
}
