import type { IconType } from "react-icons";
import {
  HiOutlineBellAlert,
  HiOutlineClipboardDocumentList,
  HiOutlineMapPin,
  HiOutlineTag,
  HiOutlineVideoCamera,
} from "react-icons/hi2";

type Service = { icon: IconType; title: string; description: string };

// Second entry renders as the highlighted card, matching the middle-of-top-row emphasis in the reference layout.
const services: Service[] = [
  {
    icon: HiOutlineClipboardDocumentList,
    title: "Farm management (MIS)",
    description: "Track animals, manage staff, and log daily activities — your whole operation in one dashboard.",
  },
  {
    icon: HiOutlineVideoCamera,
    title: "Veterinary consultation",
    description: "Connect with a certified vet by video, any time, without the drive to a clinic.",
  },
  {
    icon: HiOutlineMapPin,
    title: "Livestock tracking",
    description: "Real-time location, vitals, and movement history for every animal on your farm.",
  },
  {
    icon: HiOutlineBellAlert,
    title: "Disease monitoring",
    description: "Early alerts the moment something looks off, before it spreads through your herd.",
  },
  {
    icon: HiOutlineTag,
    title: "Animal sales",
    description: "List and browse livestock with full health records attached to every listing.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
          Everything your farm needs, in one place
        </h2>
        <p className="text-sm leading-6 text-ink-500">
          From daily records to emergency vet care, VetTrack keeps your animals healthy and your
          operation running smoothly.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          const featured = index === 1;

          return (
            <div
              key={service.title}
              className={`flex min-h-64 w-full flex-col rounded-3xl border p-7 transition-colors sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] ${
                featured
                  ? "border-brand-700 bg-brand-600 text-white"
                  : "border-ink-100 bg-white text-ink-900 hover:border-brand-200"
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  featured ? "bg-white text-brand-600" : "bg-ink-50 text-brand-600"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{service.title}</h3>
              <p className={`mt-1 text-xs leading-5 ${featured ? "text-white/80" : "text-ink-500"}`}>
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
