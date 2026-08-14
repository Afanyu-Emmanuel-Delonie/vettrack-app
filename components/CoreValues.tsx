import {
  HiOutlineGlobeAsiaAustralia,
  HiOutlineHandRaised,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const values = [
  {
    icon: HiOutlineLightBulb,
    title: "Innovation",
    description:
      "We build practical technology — IoT, AI, and mobile-first tools — that solves real problems for real farmers.",
  },
  {
    icon: HiOutlineHandRaised,
    title: "Farmer empowerment",
    description:
      "Every feature is designed to put more control, more information, and more income back in farmers' hands.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Integrity",
    description:
      "Licensed vets, verified listings, and honest data — trust is the foundation of everything we build.",
  },
  {
    icon: HiOutlineGlobeAsiaAustralia,
    title: "Sustainability",
    description:
      "We support responsible, sustainable livestock practices that protect the land and the animals on it.",
  },
] as const;

export default function CoreValues() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-sm bg-brand-600" />
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
          Our core values
        </span>
      </div>
      <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        What guides how we build
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <div key={value.title} className="rounded-2xl border border-ink-100 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink-900">{value.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-500">{value.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
