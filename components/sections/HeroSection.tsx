import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  const { hero, whatsappUrl } = siteContent;

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-ink-black px-5 pt-28 sm:px-8 lg:pt-32"
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

      <div className="relative z-10 flex min-h-[calc(100svh-7rem)] w-full max-w-[760px] flex-col justify-center pb-16 pt-8 lg:ml-10 xl:ml-14 2xl:ml-20">
        <div className="max-w-[620px]">
          <Reveal duration={0.72} y={16} blur={5}>
            <p className="mb-4 font-body text-sm font-semibold uppercase leading-none tracking-[0.08em] text-white/78 sm:text-[0.95rem]">
              Vz Recs — Produção audiovisual
            </p>
          </Reveal>
          <Reveal duration={1} y={28} blur={10}>
          <h1
            className="max-w-[560px] py-[0.06em] font-display text-[3.35rem] uppercase leading-[1.05] tracking-[-0.004em] text-white [text-shadow:none] sm:text-[4.75rem] lg:text-[5.95rem] xl:text-[6.35rem]"
            aria-label="Vídeos que posicionam"
          >
            <span className="block py-[0.04em]">Vídeos que</span>
            <span className="hero-word-write block w-fit -skew-x-12 py-[0.04em] text-transparent [-webkit-text-stroke:1.5px_#FF2323] lg:[-webkit-text-stroke:2px_#FF2323]">
              <span className="hero-word-write__ghost italic">posicionam</span>
              <span className="hero-word-write__text italic" aria-hidden="true">
                posicionam
              </span>
            </span>
          </h1>
          </Reveal>
          <Reveal delay={0.16} duration={0.82} y={22} blur={6}>
            <div className="mt-7 max-w-[580px] space-y-4 text-justify text-[1.04rem] font-medium leading-7 text-ink-muted [text-align-last:left] sm:text-[1.08rem] lg:text-[1.16rem] lg:leading-8">
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
          className="mt-14 flex w-full flex-wrap items-center justify-start gap-x-8 gap-y-4"
        >
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex min-h-12 origin-left items-center text-[0.98rem] font-bold uppercase tracking-[0.08em] text-white transition duration-300 ease-out after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent-red after:transition after:duration-500 after:ease-out hover:scale-[1.035] hover:text-white hover:after:scale-x-100 sm:text-[1.05rem]"
          >
            SOLICITAR ORÇAMENTO
          </Link>
          <Link
            href="#posicionamento"
            className="group relative inline-flex min-h-12 origin-left items-center text-[0.98rem] font-bold uppercase tracking-[0.08em] text-white transition duration-300 ease-out after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent-red after:transition after:duration-500 after:ease-out hover:scale-[1.035] hover:text-white hover:after:scale-x-100 sm:text-[1.05rem]"
          >
            SAIBA MAIS
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
