import VetCard from "@/components/VetCard";
import { vets } from "@/lib/vets";

export default function VetsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
          Our vets
        </h1>
        <p className="mt-4 text-lg leading-8 text-ink-600">
          Licensed veterinarians across a range of specialties, available for video consultations.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {vets.map((vet) => (
          <VetCard
            key={vet.slug}
            name={vet.name}
            specialty={vet.specialty}
            image={vet.photo}
            href={`/vets/${vet.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
