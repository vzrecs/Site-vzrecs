import { AboutSection } from "@/components/sections/AboutSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PositioningSection } from "@/components/sections/PositioningSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PositioningSection />
      <PortfolioSection />
      <div className={styles.closingFlow}>
        <AboutSection />
        <FinalCtaSection />
      </div>
    </main>
  );
}
