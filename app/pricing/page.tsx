import type { Metadata } from "next";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing — VetTrack",
  description: "Simple, transparent pricing for farms of every size, billed in Rwandan francs.",
};

export default function PricingPage() {
  return <Pricing />;
}
