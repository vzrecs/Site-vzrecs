import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { VideoFrame } from "@/components/ui/VideoFrame";

export function PositioningSection() {
  const { positioning } = siteContent;

  return (
    <SectionShell
      id="posicionamento"
      className="relative overflow-hidden bg-ink-black"
    >
      <div className="relative z-10 grid items-start gap-9 lg:grid-cols-[minmax(260px,320px)_minmax(0,560px)] lg:justify-center lg:gap-14 xl:gap-16">
        <div className="max-w-[560px] lg:order-2">
          <Reveal y={30} blur={8}>
          <h2
            className="max-w-[560px] font-display text-6xl uppercase leading-[0.9] tracking-[-0.006em] text-white sm:text-7xl lg:text-[5.15rem] xl:text-[5.55rem]"
            aria-label={positioning.title}
          >
            Sua marca
          </h2>
          </Reveal>
          <Reveal delay={0.12} y={22} blur={6}>
            <div className="mt-7 max-w-[540px] space-y-7 whitespace-pre-line text-justify text-[1.04rem] leading-7 text-ink-muted [text-align-last:left] lg:text-[1.14rem] lg:leading-8">
              <p>{positioning.body}</p>
              <p>
                {positioning.support.split("\n\n")[0]}
                <span className="mt-5 block whitespace-pre-line text-white">
                  {positioning.support.split("\n\n")[1]}
                </span>
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal
          delay={0.14}
          x={18}
          y={24}
          scale={0.985}
          className="w-full max-w-[320px] justify-self-center lg:order-1"
        >
          <VideoFrame src="/assets/videos/sua-marca-v2.mp4" />
        </Reveal>
      </div>
    </SectionShell>
  );
}
