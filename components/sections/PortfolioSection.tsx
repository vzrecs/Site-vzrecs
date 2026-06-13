import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function PortfolioSection() {
  const { portfolio } = siteContent;

  return (
    <SectionShell
      id="videos"
      className="relative scroll-mt-[-2rem] overflow-hidden bg-ink-black"
    >
      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.18fr_0.82fr]">
        <Reveal className="max-w-[760px]">
          <h2
            className="font-display text-6xl uppercase leading-[0.9] text-white sm:text-7xl lg:max-w-[980px] lg:text-[5.45rem] xl:text-[5.95rem]"
            aria-label={portfolio.title}
          >
            Vídeos que vendem de{" "}
            <span className="inline-block -skew-x-12 italic text-transparent [-webkit-text-stroke:1.5px_#FF2323] lg:[-webkit-text-stroke:2px_#FF2323]">
              verdade
            </span>
          </h2>
          <p className="mt-8 max-w-[680px] text-justify text-base leading-7 text-ink-muted">
            {portfolio.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="w-full max-w-[320px] justify-self-center">
          <article className="overflow-hidden rounded-[6px] shadow-cinematic">
            <video
              src="/assets/videos/video-premium.mp4"
              className="aspect-[9/16] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </article>
        </Reveal>
      </div>

    </SectionShell>
  );
}
