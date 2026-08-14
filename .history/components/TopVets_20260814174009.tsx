"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookingGateModal from "@/components/BookingGateModal";

const vets = [
  {
    name: "Dr. Amara Osei",
    specialty: "Livestock & herd health",
    photo: "/img/vets/vet-1.png",
  },
  {
    name: "Dr. Jean-Paul Habimana",
    specialty: "Poultry & swine",
    photo: "/img/vets/vet-1.png",
  },
  {
    name: "Dr. Sarah Uwimana",
    specialty: "Reproduction & breeding",
    photo: "/img/vets/vet-1.png",
  },
  {
    name: "Dr. Marcus Nkurunziza",
    specialty: "Emergency & field care",
    photo: "/img/vets/vet-1.png",
  },
] as const;

export default function TopVets() {
  const [selectedVet, setSelectedVet] = useState<string | null>(null);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
          Meet our top vets
        </h2>
        <p className="text-sm leading-6 text-ink-500">
          Licensed veterinarians ready for a video consultation the moment you need one.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {vets.map((vet) => (
          <div key={vet.name} className="flex flex-col">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ink-100">
              <Image
                src={vet.photo}
                alt={vet.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg text-center font-semibold text-ink-900">{vet.name}</h3>
            <p className="text-sm text-center text-ink-500">{vet.specialty}</p>
            <button
              type="button"
              onClick={() => setSelectedVet(vet.name)}
              className="mt-5 self-start rounded-full w-full bg-brand-600 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Book a consultation
            </button>
          </div>
        ))}
      </div>

      <BookingGateModal
        open={selectedVet !== null}
        onClose={() => setSelectedVet(null)}
        vetName={selectedVet ?? undefined}
      />
    </section>
  );
}
