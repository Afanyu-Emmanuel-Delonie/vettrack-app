import { HiOutlineEye, HiOutlineFlag } from "react-icons/hi2";
import Blossom from "@/components/Blossom";

const pillars = [
  {
    icon: HiOutlineFlag,
    title: "Our Mission",
    description:
      "To revolutionize animal health and management through technology-driven innovation. At VetTrack, we provide smart tracking devices, AI-powered disease prediction, and an integrated digital platform where farmers can buy feeds, medicines, and sell animals while connecting directly with veterinarians. Our mission is to empower farmers, improve livestock productivity, and support the government's efforts to monitor the national animal population efficiently and accurately.",
    colored: true,
  },
  {
    icon: HiOutlineEye,
    title: "Our Vision",
    description:
      "To become Africa's leading smart animal health and management service, combining IoT and Artificial Intelligence to build a healthier, more sustainable livestock sector. We envision a future where every farmer in Rwanda and beyond benefits from digital veterinary access, real-time disease reporting and prediction, and a connected agricultural marketplace that drives productivity and strengthens public health.",
    colored: false,
  },
] as const;

export default function MissionVision() {
  return (
    <section className="bg-ink-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`relative flex flex-col gap-4 overflow-hidden rounded-3xl p-8 sm:p-10 ${
                  pillar.colored
                    ? "bg-brand-600 text-white"
                    : "border border-white/10 text-white"
                }`}
              >
                {pillar.colored && (
                  <Blossom className="pointer-events-none absolute -bottom-12 -right-12 h-56 w-56 text-white/10" />
                )}

                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-xl ${
                    pillar.colored ? "bg-white/15 text-white" : "bg-white/5 text-brand-400"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="relative font-display text-2xl font-semibold">{pillar.title}</h2>
                <p
                  className={`relative text-sm leading-7 ${
                    pillar.colored ? "text-white/80" : "text-ink-400"
                  }`}
                >
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
