import Link from "next/link";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Roadmap from "@/components/Roadmap";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <Services />
      <Roadmap />

      <section className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Ready to book your first consultation?
        </h2>
        <p className="max-w-xl text-slate-600">
          Sign up in minutes and get matched with a vet who fits your animal&apos;s needs.
        </p>
        <Link
          href="/register"
          className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Create your free account
        </Link>
      </section>
    </div>
  );
}
