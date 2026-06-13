"use client";

import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const moments = [
  {
    type: "image",
    title: "Momentos",
    image: "/assets/images/nosso-olhar-esquerda.jpg",
    alt: "Registro fotografico da Vz Recs"
  },
  {
    type: "video",
    title: "que ficam",
    video: "/assets/videos/nosso-olhar-meio.mp4"
  },
  {
    type: "image",
    title: "eternizados",
    image: "/assets/images/nosso-olhar-direita.jpg",
    alt: "Registro fotografico da Vz Recs"
  }
] as const;

export function DifferentialsSection() {
  return (
    <SectionShell id="portfolio" className="relative scroll-mt-0 overflow-hidden bg-ink-black">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:-top-32" />
      <RevealGroup
        className="relative z-10 grid justify-items-center gap-6 md:grid-cols-3"
        delay={0.04}
        stagger={0.085}
      >
        {moments.map((item) => (
          <RevealItem
            key={item.title}
            className="w-full max-w-[320px]"
          >
            <h2 className="mb-2 text-center font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl">
              {item.title === "eternizados" ? (
                <span className="inline-block -skew-x-12 italic text-transparent [-webkit-text-stroke:1.5px_#FF2323] lg:[-webkit-text-stroke:2px_#FF2323]">
                  {item.title}
                </span>
              ) : (
                item.title
              )}
            </h2>
            <div
              className="group relative aspect-[9/16] w-full overflow-hidden rounded-[6px] bg-white/[0.03] shadow-cinematic"
            >
              {item.type === "image" ? (
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 320px, 92vw"
                  className="object-cover"
                />
              ) : (
                <video
                  src={item.video}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  onTimeUpdate={(event) => {
                    const video = event.currentTarget;

                    if (video.duration - video.currentTime < 0.35) {
                      video.currentTime = 0;
                      void video.play();
                    }
                  }}
                />
              )}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </SectionShell>
  );
}
