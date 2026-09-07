import Image from "next/image";
import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-ink-black px-5 pt-28 sm:px-8 lg:pt-32"
    >
      <Image
        src={hero.image}
        alt="Cena cinematográfica de produção audiovisual"
        fill
        priority
        sizes="100vw"
        className="scale-[1.08] object-cover object-center blur-[7px]"
      />
      <div className="absolute inset-0 bg-black/68" />
      <div className="absolute inset-0 bg-radial-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-transparent to-transparent" />

      <div className="absolute inset-0 z-10 flex items-center justify-center px-5">
        <Reveal duration={0.84} y={14} blur={6}>
          <Image
            src="/assets/images/logo-vz-recs-transparent.png"
            alt="Logo Vz Recs"
            width={1024}
            height={1024}
            sizes="(min-width: 1024px) 34rem, 78vw"
            className="heartbeat-logo h-[min(52vw,22rem)] w-[min(52vw,22rem)] object-contain lg:h-[28rem] lg:w-[28rem]"
            priority
            unoptimized
          />
        </Reveal>
      </div>
    </section>
  );
}
