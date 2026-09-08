import Image from "next/image";
import styles from "./HeroFrames.module.css";

const frames = [
  "/assets/images/hero-frames/frame-01.png", // Botox
  "/assets/images/hero-frames/frame-bia.png", // Bia
  "/assets/images/hero-frames/frame-mariam.png", // Mariam
  "/assets/images/hero-frames/frame-02.png", // Carol
  "/assets/images/hero-frames/frame-04.png", // Diego — letterings
  "/assets/images/hero-frames/frame-11.png", // Wendel
  "/assets/images/hero-frames/frame-07.png" // Iago
];

export function HeroFrames() {
  return (
    <div className={styles.collage} aria-hidden="true">
      {frames.map((src, index) => (
        <div key={src} className={styles.frame}>
          <Image
            src={src}
            alt=""
            fill
            priority
            sizes="(max-width: 767px) 38vw, 18vw"
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}
