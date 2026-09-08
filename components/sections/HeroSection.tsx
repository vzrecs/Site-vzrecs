import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { HeroFrames } from "@/components/sections/HeroFrames";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-[linear-gradient(180deg,#A51D1D_0%,#891515_32%,#4A0B0B_68%,#050505_100%)] px-5 pt-28 sm:px-8 lg:pt-32"
    >
      <HeroFrames />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.14)_42%,rgba(0,0,0,0.48)_78%,rgba(5,5,5,0.96)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,5,5,0.01),rgba(5,5,5,0.3)_72%,rgba(5,5,5,0.54)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-ink-black via-ink-black/55 to-transparent" />

      <div className="absolute inset-0 z-10 flex items-center justify-center px-5">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[min(76vw,36rem)] w-[min(76vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.3)_44%,rgba(0,0,0,0.1)_64%,transparent_78%)] blur-2xl"
        />
        <Reveal duration={0.84} y={14} blur={6} className="relative z-10">
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
