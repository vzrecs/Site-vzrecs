import { AboutSection } from "@/components/sections/AboutSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PositioningSection } from "@/components/sections/PositioningSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PositioningSection />
      <ProcessSection />
      <PortfolioSection />
      <ServicesSection />
      <AboutSection />
      <DifferentialsSection />
      <FinalCtaSection />
    </main>
  );
}
