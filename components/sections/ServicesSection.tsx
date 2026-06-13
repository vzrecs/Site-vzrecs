import Image from "next/image";
import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function ServicesSection() {
  const { services } = siteContent;

  return (
    <SectionShell id="servicos" className="relative scroll-mt-0 overflow-hidden bg-ink-black">
      <div className="relative z-10 grid min-h-[360px] items-center gap-10 lg:min-h-[460px] lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal delay={0.08} className="order-2 w-full max-w-[320px] justify-self-center lg:order-1">
          <div className="relative aspect-[9/16] overflow-hidden rounded-[6px] shadow-cinematic">
            <Image
              src="/assets/images/servicos-card.jpg"
              alt="Producao audiovisual da Vz Recs"
              fill
              sizes="(min-width: 1024px) 320px, 92vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="order-1 max-w-[760px] lg:order-2 lg:pl-8 xl:pl-12">
          <h2
            className="font-display text-6xl uppercase leading-[0.9] text-white sm:text-7xl lg:max-w-[980px] lg:text-[5.45rem] xl:text-[5.95rem]"
            aria-label={services.title}
          >
            Produção{" "}
            <span className="inline-block -skew-x-12 italic text-transparent [-webkit-text-stroke:1.5px_#FF2323] lg:[-webkit-text-stroke:2px_#FF2323]">
              audiovisual
            </span>
          </h2>
          <div className="mt-8 max-w-[680px] space-y-4 text-justify text-base leading-7 text-ink-muted">
            {services.subtitle.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
