"use client";

import { useState } from "react";
import VetCard from "@/components/VetCard";
import BookingGateModal from "@/components/BookingGateModal";

const vets = [
  {
    name: "Dr. Amara Osei",
    specialty: "General practice",
    bio: "10+ years treating dogs and cats, with a focus on preventive care and nutrition.",
  },
  {
    name: "Dr. Liam Chen",
    specialty: "Exotic & small animals",
    bio: "Specializes in rabbits, birds, and reptiles, with a background in exotic animal medicine.",
  },
  {
    name: "Dr. Priya Nair",
    specialty: "Dermatology",
    bio: "Focused on skin conditions, allergies, and chronic itch management in dogs and cats.",
  },
  {
    name: "Dr. Marcus Webb",
    specialty: "Behavior & wellness",
    bio: "Helps with anxiety, aggression, and training-related concerns alongside routine care.",
  },
] as const;

export default function VetsPage() {
  const [selectedVet, setSelectedVet] = useState<string | null>(null);

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Our vets
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Licensed veterinarians across a range of specialties, available for video consultations.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {vets.map((vet) => (
          <VetCard key={vet.name} {...vet} onBook={() => setSelectedVet(vet.name)} />
        ))}
      </div>

      <BookingGateModal
        open={selectedVet !== null}
        onClose={() => setSelectedVet(null)}
        vetName={selectedVet ?? undefined}
      />
    </div>
  );
}
