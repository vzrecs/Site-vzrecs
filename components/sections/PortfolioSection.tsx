import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { SeamlessVideo } from "@/components/ui/SeamlessVideo";

export function PortfolioSection() {
  const { portfolio } = siteContent;

  return (
    <SectionShell
      id="videos"
      className="relative scroll-mt-[-2rem] overflow-hidden bg-ink-black"
    >
      <div className="relative z-10 grid items-start gap-9 lg:grid-cols-[minmax(0,560px)_minmax(260px,320px)] lg:justify-center lg:gap-14 xl:gap-16">
        <div className="max-w-[560px]">
          <Reveal y={30} blur={8}>
          <h2
            className="max-w-[560px] font-display text-6xl uppercase leading-[0.9] tracking-[-0.006em] text-white sm:text-7xl lg:text-[5.15rem] xl:text-[5.55rem]"
            aria-label={portfolio.title}
          >
            Venda mais
          </h2>
          </Reveal>
          <Reveal delay={0.12} y={22} blur={6}>
            <p className="mt-7 max-w-[540px] whitespace-pre-line text-justify text-[1.04rem] leading-7 text-ink-muted [text-align-last:left] lg:text-[1.14rem] lg:leading-8">
              {portfolio.subtitle}
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.14}
          x={18}
          y={24}
          scale={0.985}
          className="w-full max-w-[320px] justify-self-center"
        >
          <article className="overflow-hidden rounded-[6px] shadow-cinematic">
            <SeamlessVideo
              src="/assets/videos/venda-mais-v2.mp4"
              className="aspect-[9/16] w-full object-cover"
              preload="metadata"
              loopStart={0.18}
              loopBeforeEnd={0.55}
            />
          </article>
        </Reveal>
      </div>

    </SectionShell>
  );
}
