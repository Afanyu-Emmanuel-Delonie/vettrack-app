import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Roadmap from "@/components/Roadmap";
import TopVets from "@/components/TopVets";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Impact />
      <Services />
      <Roadmap />
      <Pricing />
      <WhyUs />
      <TopVets />
      <Testimonials />
      <Faq />
      <Cta />
    </div>
  );
}
