import type { Metadata } from "next";
import Image from "next/image";
import AboutHero from "@/components/AboutHero";
import MissionVision from "@/components/MissionVision";
import CoreValues from "@/components/CoreValues";
import Team from "@/components/Team";
import MentoredBy from "@/components/MentoredBy";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "About — VetTrack",
  description: "Why we built VetTrack and how we work with licensed veterinarians.",
};



export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />

      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-sm bg-brand-600" />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                Our story
              </span>
            </div>

            <p className="mt-4 text-lg leading-8 text-ink-600">
              Founded in 2020, VetTrack has been at the forefront of veterinary innovation in
              Rwanda. Our journey began with a simple vision: to revolutionize animal health
              management through technology and expert care.
            </p>
            <p className="mt-4 text-lg leading-8 text-ink-600">
              Over the years, we&apos;ve grown from a small local clinic to a comprehensive animal
              health service provider, thanks to our commitment to excellence and our passionate
              team of skilled veterinarians and technologists.
            </p>
            <p className="mt-4 text-lg leading-8 text-ink-600">
              Today, we partner with licensed veterinarians to offer video consultations, and with
              clinics for in-person services like vaccinations and diagnostics — all logged back
              to your animal&apos;s record automatically.
            </p>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-ink-100">
            <Image
              src="/img/heros-img.jpg"
              alt="A vet checking on cattle in a barn"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <MissionVision />
      <CoreValues />
      <Team />
      <MentoredBy />
      <Cta
        primaryLabel="Get started"
        secondaryLabel="Book a consultation"
        secondaryHref="/vets"
      />
    </div>
  );
}
