import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Roadmap from "@/components/Roadmap";
import TopVets from "@/components/TopVets";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <Services />
      <Roadmap />
      <Pricing />
      <WhyUs />
      <TopVets />
      <Testimonials />
    </div>
  );
}
