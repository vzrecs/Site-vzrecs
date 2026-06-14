"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const carouselPhotos = [
  "/assets/images/fotoscarrosel/foto-vertical-02.jpg",
  "/assets/images/fotoscarrosel/foto-vertical-03.jpg",
  "/assets/images/fotoscarrosel/foto-vertical-04.jpg",
  "/assets/images/fotoscarrosel/foto-vertical-05.jpg",
  "/assets/images/fotoscarrosel/IMG_0574.webp",
  "/assets/images/fotoscarrosel/IMG_0655.JPG.webp",
  "/assets/images/fotoscarrosel/IMG_3242.JPG.webp",
  "/assets/images/fotoscarrosel/IMG_6081.webp",
  "/assets/images/fotoscarrosel/IMG_7863.webp",
  "/assets/images/fotoscarrosel/IMG_8070.webp",
  "/assets/images/fotoscarrosel/IMG_8093.webp"
] as const;

export function DifferentialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 3) % carouselPhotos.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <SectionShell id="portfolio" className="relative scroll-mt-0 overflow-hidden bg-ink-black">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:-top-32" />
      <Reveal className="relative z-10 mx-auto mb-12 max-w-[720px] text-center lg:mb-16">
        <h2 className="font-display text-6xl uppercase leading-[0.9] tracking-[-0.006em] text-white [text-shadow:none] sm:text-7xl lg:text-[5.7rem]">
          Portfólio
        </h2>
      </Reveal>
      <Reveal className="relative z-10 mx-auto grid max-w-[980px] justify-items-center gap-5 md:grid-cols-3">
        {[0, 1, 2].map((offset) => {
          const imageIndex = (activeIndex + offset) % carouselPhotos.length;
          const isHiddenOnMobile = offset > 0;

          return (
            <div
              key={offset}
              className={`w-full max-w-[300px] ${isHiddenOnMobile ? "hidden md:block" : ""}`}
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[6px] bg-white/[0.03] shadow-cinematic">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={carouselPhotos[imageIndex]}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.025, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.99, y: -8 }}
                    transition={{ duration: 0.88, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={carouselPhotos[imageIndex]}
                      alt="Portfólio fotográfico da VZ RECS"
                      fill
                      sizes="(min-width: 768px) 300px, 92vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </Reveal>
    </SectionShell>
  );
}
