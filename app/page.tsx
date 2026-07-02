import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { Stats } from "@/components/sections/Stats";
import { Benefits } from "@/components/sections/Benefits";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { faqs } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Stats />
      <Benefits />
      <Process />
      <Portfolio />
      <Testimonials limit={3} />
      <PricingTeaser />
      <FAQSection items={faqs.slice(0, 5)} />
      <CTASection />
    </>
  );
}
