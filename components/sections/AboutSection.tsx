import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/lib/site-content";
import { AboutScrollText, AboutScrollTitle } from "./AboutScrollText";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  const { about } = siteContent;

  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headingReveal}>
          <div className={styles.heading}>
            <AboutScrollTitle text={about.title} />
          </div>
        </div>

        <div className={styles.stage}>
          <Reveal x={24} y={22} blur={7} className={styles.mediaReveal}>
            <div className={styles.media}>
              <Image
                src={about.image}
                alt="Vz Recs durante uma produção audiovisual"
                fill
                sizes="(min-width: 1024px) 68vw, 100vw"
                className={styles.image}
              />
              <div className={styles.imageShade} />
            </div>
          </Reveal>

          <div className={styles.copy}>
            <AboutScrollText paragraphs={about.paragraphs} />
          </div>
        </div>
      </div>
    </section>
  );
}
