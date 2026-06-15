import { siteContent } from "@/lib/site-content";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import Link from "next/link";

export function AboutSection() {
  const { about, whatsappUrl } = siteContent;

  return (
    <SectionShell id="sobre" className="relative scroll-mt-0 overflow-hidden bg-ink-black">
      <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,560px)_minmax(320px,380px)] lg:justify-center lg:gap-12 xl:gap-16">
        <div className="contents lg:order-1 lg:flex lg:max-w-[560px] lg:self-stretch lg:flex-col">
          <div className="contents lg:flex lg:flex-1 lg:flex-col lg:justify-center">
            <Reveal y={30} blur={8} className="order-1 w-[min(82vw,340px)] justify-self-center text-center lg:w-auto lg:max-w-[560px] lg:justify-self-auto lg:text-left">
            <h2
              className="max-w-[560px] font-display text-6xl uppercase leading-[0.9] tracking-[-0.006em] text-white sm:text-7xl lg:text-[5.15rem] xl:text-[5.55rem]"
              aria-label={about.title}
            >
              Sobre nós
            </h2>
            </Reveal>
            <Reveal delay={0.12} y={22} blur={6} className="order-3 max-w-[560px]">
              <div className="max-w-[540px] space-y-5 text-justify text-[1.04rem] leading-7 text-ink-muted [text-align-last:left] lg:mt-7 lg:text-[1.14rem] lg:leading-8">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.16} y={18} blur={5} className="order-4 justify-self-center lg:justify-self-auto">
            <div className="mt-14 flex w-[min(82vw,340px)] justify-center lg:mt-0 lg:block lg:w-auto">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex min-h-12 origin-center items-center text-[0.98rem] font-bold uppercase tracking-[0.08em] text-white transition duration-300 ease-out after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent-red after:transition after:duration-500 after:ease-out hover:scale-[1.035] hover:text-white hover:after:scale-x-100 sm:text-[1.05rem] lg:origin-left"
              >
                SOLICITAR ORÇAMENTO
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal
          delay={0.14}
          x={18}
          y={24}
          scale={0.985}
          className="order-2 w-[min(82vw,340px)] max-w-none justify-self-center lg:order-2 lg:w-[380px]"
        >
          <div className="lg:translate-x-10 xl:translate-x-0">
            <MediaFrame src={about.image} alt="Retrato da Vz Recs" aspect="reel" />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
