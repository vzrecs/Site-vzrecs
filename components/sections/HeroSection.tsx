import Image from "next/image";
import { siteContent } from "@/lib/site-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  const { hero, whatsappUrl } = siteContent;

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-ink-black px-5 pt-32 sm:px-8 lg:pt-36"
    >
      <Image
        src={hero.image}
        alt="Cena cinematográfica produzida pela Vz Recs"
        fill
        priority
        sizes="100vw"
        className="scale-[1.03] object-cover object-center blur-[2px]"
      />
      <div className="absolute inset-0 bg-black/68" />
      <div className="absolute inset-0 bg-radial-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-transparent to-transparent" />

      <div className="relative z-10 flex min-h-[calc(100svh-8rem)] w-full flex-col justify-center pb-20 pt-8 lg:pl-8 xl:pl-10 2xl:pl-12">
        <div className="max-w-[840px]">
          <Reveal duration={1} y={28} blur={10}>
          <h1
            className="max-w-[900px] font-display text-[3.15rem] uppercase leading-[0.9] text-white [text-shadow:none] sm:text-[4.45rem] lg:text-[6.2rem] xl:text-[6.85rem]"
            aria-label={hero.title}
          >
            Vídeos comerciais que{" "}
            <span className="hero-word-write -skew-x-12 text-transparent [-webkit-text-stroke:1.5px_#FF2323] lg:[-webkit-text-stroke:2px_#FF2323]">
              <span className="hero-word-write__ghost italic">posicionam</span>
              <span className="hero-word-write__text italic" aria-hidden="true">
                posicionam
              </span>
            </span>{" "}
            sua marca em outro nível
          </h1>
          </Reveal>
          <Reveal delay={0.16} duration={0.82} y={22} blur={6}>
            <div className="mt-7 max-w-[780px] space-y-4 text-justify text-base font-medium leading-7 text-ink-muted sm:text-[1.03rem] lg:text-[1.08rem]">
              {hero.subtitles.map((subtitle) => (
                <p key={subtitle}>{subtitle}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.28}
          duration={0.72}
          y={18}
          blur={5}
          className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <ButtonLink
            href={whatsappUrl}
            className="min-h-14 min-w-[280px] px-9 text-base shadow-[0_22px_60px_rgba(255,35,35,0.28)]"
          >
            {hero.primaryCta}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
