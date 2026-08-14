import Image from "next/image";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const team = [
  {
    name: "Eric Mugisha",
    role: "Founder & CEO",
    photo: "/img/vets/vet-1.png",
    email: "eric@vettrack.rw",
    whatsapp: "https://wa.me/250700000001",
    instagram: "https://instagram.com/vettrack",
  },
  {
    name: "Dr. Grace Uwase",
    role: "Head of Veterinary Ops",
    photo: "/img/vets/vet-1.png",
    email: "grace@vettrack.rw",
    whatsapp: "https://wa.me/250700000002",
    instagram: "https://instagram.com/vettrack",
  },
  {
    name: "Kevin Ndayisenga",
    role: "Head of Engineering",
    photo: "/img/vets/vet-1.png",
    email: "kevin@vettrack.rw",
    whatsapp: "https://wa.me/250700000003",
    instagram: "https://instagram.com/vettrack",
  },
  {
    name: "Aline Mukamana",
    role: "Customer Success Lead",
    photo: "/img/vets/vet-1.png",
    email: "aline@vettrack.rw",
    whatsapp: "https://wa.me/250700000004",
    instagram: "https://instagram.com/vettrack",
  },
] as const;

export default function Team() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        Meet the team
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-ink-500">
        The farmers, vets, and engineers building VetTrack day to day.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="group relative aspect-[3/4] overflow-hidden rounded-t-[2rem] bg-ink-900"
          >
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/20 to-transparent" />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1 top-1/2 origin-left -translate-y-1/2 -rotate-90 whitespace-nowrap font-display text-4xl font-bold text-white/10 sm:text-5xl"
            >
              TEAM
            </span>

            <div className="absolute right-3 top-3 flex flex-col gap-1.5">
              <a
                href={`mailto:${member.email}`}
                aria-label={`Email ${member.name}`}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
              >
                <FaEnvelope className="h-3 w-3" />
              </a>
              <a
                href={member.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${member.name}`}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
              >
                <FaWhatsapp className="h-3 w-3" />
              </a>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram for ${member.name}`}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
              >
                <FaInstagram className="h-3 w-3" />
              </a>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-4">
              <h3 className="text-sm font-semibold text-white sm:text-base">{member.name}</h3>
              <p className="text-xs text-white/70">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
