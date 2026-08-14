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

            <p className="mt-4 text-xl leading-9 text-ink-600">
              Founded in 2020, VetTrack set out to revolutionize animal health management in
              Rwanda through technology and expert care.
            </p>
            <p className="mt-4 text-xl leading-9 text-ink-600">
              We&apos;ve grown from a small local clinic into a comprehensive animal health
              platform — partnering with licensed veterinarians for video consultations, and with
              clinics for vaccinations and diagnostics, all logged straight to your animal&apos;s
              record.
            </p>
          </div>

          <div className="relative aspect-square w-full">
            <Image
              src="/img/team/vet-story.png"
              alt="A member of the VetTrack team"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain rounded-[2.5rem]"
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
