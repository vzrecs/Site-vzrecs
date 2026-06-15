"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const carouselPhotos = [
  "/assets/images/fotoscarrosel/IMG_8093.webp",
  "/assets/images/fotoscarrosel/foto-vertical-03.jpg",
  "/assets/images/fotoscarrosel/IMG_0574.webp",
  "/assets/images/fotoscarrosel/IMG_7863.webp",
  "/assets/images/fotoscarrosel/foto-vertical-05.jpg",
  "/assets/images/fotoscarrosel/IMG_3242.JPG.webp",
  "/assets/images/fotoscarrosel/foto-vertical-02.jpg",
  "/assets/images/fotoscarrosel/IMG_8070.webp",
  "/assets/images/fotoscarrosel/IMG_0655.JPG.webp",
  "/assets/images/fotoscarrosel/IMG_6081.webp",
  "/assets/images/fotoscarrosel/foto-vertical-04.jpg"
] as const;

const carouselLoop = [...carouselPhotos, ...carouselPhotos];

export function DifferentialsSection() {
  const shouldReduceMotion = useReducedMotion();
  const compactGroups = [carouselPhotos, carouselPhotos] as const;
  const compactAnimation = shouldReduceMotion
    ? undefined
    : "vz-photo-marquee-compact 44s linear infinite";

  return (
    <SectionShell id="portfolio" className="relative scroll-mt-0 overflow-hidden bg-ink-black">
      <style>
        {`
          @keyframes vz-photo-marquee-compact {
            from {
              transform: translate3d(0, 0, 0);
            }

            to {
              transform: translate3d(-50%, 0, 0);
            }
          }
        `}
      </style>
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:-top-32" />
      <Reveal className="relative z-10 mx-auto mb-12 max-w-[720px] text-center lg:mb-16">
        <h2 className="font-display text-6xl uppercase leading-[0.9] tracking-[-0.006em] text-white [text-shadow:none] sm:text-7xl lg:text-[5.7rem]">
          Portfólio
        </h2>
      </Reveal>
      <Reveal className="relative left-1/2 z-10 w-screen -translate-x-1/2 overflow-hidden xl:hidden">
        <div
          className="flex w-max"
          style={{ animation: compactAnimation }}
        >
          {compactGroups.map((group, groupIndex) => (
            <div
              key={`compact-group-${groupIndex}`}
              className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5 lg:gap-6 lg:pr-6"
            >
              {group.map((photo, photoIndex) => (
                <div
                  key={`compact-${photo}-${groupIndex}`}
                  className="relative aspect-[9/16] w-[78vw] shrink-0 overflow-hidden rounded-[6px] bg-ink-panel shadow-cinematic sm:w-[44vw] lg:w-[31vw]"
                >
                  <Image
                    src={photo}
                    alt="Portfólio fotográfico da VZ RECS"
                    fill
                    sizes="(min-width: 1024px) 31vw, (min-width: 640px) 44vw, 78vw"
                    className="object-cover"
                    priority={groupIndex === 0 && photoIndex < 4}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className="relative z-10 mx-auto hidden w-full max-w-[920px] overflow-hidden xl:block">
        <motion.div
          className="flex w-max gap-4"
          animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{
            duration: 58,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {carouselLoop.map((photo, index) => (
            <div
              key={`wide-${photo}-${index}`}
              className="relative aspect-[9/16] w-[268px] shrink-0 overflow-hidden rounded-[6px] bg-ink-panel shadow-cinematic"
            >
              <div className="absolute inset-0">
                <Image
                  src={photo}
                  alt="Portfólio fotográfico da VZ RECS"
                  fill
                  sizes="268px"
                  className="object-cover"
                  priority={index < 4}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </Reveal>
    </SectionShell>
  );
}
