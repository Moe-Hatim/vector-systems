import { FinalCtaSection } from "@/components/site/home/final-cta-section";
import { HomeHeroSection } from "@/components/site/home/hero-section";
import { IdealClientsSection } from "@/components/site/home/ideal-clients-section";
import { ProblemSection } from "@/components/site/home/problem-section";
import { ProcessSection } from "@/components/site/home/process-section";
import { ServicesSection } from "@/components/site/home/services-section";
import { WhySection } from "@/components/site/home/why-section";

export default function Home() {
  return (
    <main>
      <HomeHeroSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <WhySection />
      <IdealClientsSection />
      <FinalCtaSection />
    </main>
  );
}

