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
      <
    </div>
  );
}
