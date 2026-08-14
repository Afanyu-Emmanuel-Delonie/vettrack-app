import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiOutlineBanknotes, HiOutlineClock, HiOutlineLanguage } from "react-icons/hi2";
import { vets, getVetBySlug } from "@/lib/vets";
import BookingPanel from "@/components/BookingPanel";

export function generateStaticParams() {
  return vets.map((vet) => ({ slug: vet.slug }));
}

export async function generateMetadata(props: PageProps<"/vets/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const vet = getVetBySlug(slug);

  if (!vet) return {};

  return {
    title: `${vet.name} — VetTrack`,
    description: vet.bio,
  };
}

export default async function VetProfilePage(props: PageProps<"/vets/[slug]">) {
  const { slug } = await props.params;
  const vet = getVetBySlug(slug);

  if (!vet) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <Link href="/#vets" className="text-sm font-medium text-brand-600 hover:text-brand-700">
        ← Back to all vets
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-ink-100">
          <Image
            src={vet.photo}
            alt={vet.name}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            {vet.specialty}
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {vet.name}
          </h1>
          <p className="mt-2 text-sm font-medium text-ink-500">{vet.credentials}</p>

          <p className="mt-6 text-base leading-7 text-ink-600">{vet.bio}</p>

          <div className="mt-8 grid gap-6 rounded-2xl border border-ink-100 bg-white p-6 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 text-ink-400">
                <HiOutlineBanknotes className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wide">Fee</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-ink-900">{vet.consultationFee}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-ink-400">
                <HiOutlineClock className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wide">Availability</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-ink-900">{vet.availability}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-ink-400">
                <HiOutlineLanguage className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wide">Languages</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-ink-900">{vet.languages}</p>
            </div>
          </div>

          <BookingPanel
            vetName={vet.name}
            fee={vet.consultationFee}
            availability={vet.availability}
          />
        </div>
      </div>
    </div>
  );
}
