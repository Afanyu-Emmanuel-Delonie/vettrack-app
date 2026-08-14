import Image from "next/image";
import Link from "next/link";

type VetCardProps = {
  name: string;
  specialty: string;
  image?: string;
  href: string;
};

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}

export default function VetCard({ name, specialty, image, href }: VetCardProps) {
  return (
    <Link href={href} className="group relative block h-96 overflow-hidden rounded-3xl">
      {image ? (
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-brand-800" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-7xl font-semibold text-white/10">{initials(name)}</span>
          </div>
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-300">
          {specialty}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-white">{name}</h3>
        <span className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white/15 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition-all group-hover:bg-white group-hover:text-ink-900">
          Book a consultation
        </span>
      </div>
    </Link>
  );
}
