import Image from "next/image";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const team = [
  {
    name: "Dr. Theophile Niyonizeye",
    role: "CEO & Founder",
    photo: "/img/team/ceo.png",
    email: "ceo@vettrack.rw",
    whatsapp: "https://wa.me/250700000001",
    instagram: "https://instagram.com/vettrack",
  },
  {
    name: "Dr. Benitte Ikuzwe",
    role: "Co-founder & Managing Director",
    photo: "/img/team/managing-dirrector.png",
    email: "md@vettrack.rw",
    whatsapp: "https://wa.me/250700000002",
    instagram: "https://instagram.com/vettrack",
  },
  {
    name: "Dr. Gerard Sano",
    role: "Chief Financial Officer",
    photo: "/img/team/finance.png",
    email: "finance@vettrack.rw",
    whatsapp: "https://wa.me/250700000003",
    instagram: "https://instagram.com/vettrack",
  },
  {
    name: "Dr. Charline Rutagengwa",
    role: "Marketing Officer",
    photo: "/img/team/marketing.png",
    email: "marketing@vettrack.rw",
    whatsapp: "https://wa.me/250700000004",
    instagram: "https://instagram.com/vettrack",
  },
  // {
  //   name: "Dr. Mentor Name",
  //   role: "Mentor",
  //   photo: "/img/team/mentor.png",
  //   email: "mentor@vettrack.rw",
  //   whatsapp: "https://wa.me/250700000005",
  //   instagram: "https://instagram.com/vettrack",
  // },
] as const;

export default function Team() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        Meet the team
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-ink-500">
        The people building VetTrack day to day.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.role}
            className="relative overflow-hidden rounded-3xl border border-brand-200"
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />

              {/* bottom gradient + name/role overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-700/90 via-brand-600/50 to-transparent px-4 pb-5 pt-20">
                <h3 className="text-sm font-semibold text-white sm:text-base">{member.name}</h3>
                <p className="text-xs text-white/70">{member.role}</p>
              </div>

              {/* social icons top-right */}
              <div className="absolute right-3 top-3 flex flex-col gap-1.5">
                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                >
                  <FaEnvelope className="h-3 w-3" />
                </a>
                <a
                  href={member.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${member.name}`}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                >
                  <FaWhatsapp className="h-3 w-3" />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram for ${member.name}`}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                >
                  <FaInstagram className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
