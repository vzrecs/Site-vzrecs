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
      <div className="relative z-10 grid items-start gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
        <div className="max-w-[760px]">
          <Reveal y={30} blur={8}>
          <h2
            className="max-w-[760px] font-display text-6xl uppercase leading-[0.9] text-white sm:text-7xl lg:max-w-[980px] lg:text-[5.45rem] xl:text-[5.95rem]"
            aria-label={positioning.title}
          >
            Sua marca pode ser{" "}
            <span className="inline-block -skew-x-12 italic text-transparent [-webkit-text-stroke:1.5px_#FF2323] lg:[-webkit-text-stroke:2px_#FF2323]">
              excelente!
            </span>
          </h2>
          </Reveal>
          <Reveal delay={0.12} y={22} blur={6}>
            <div className="mt-8 max-w-[680px] space-y-5 text-justify text-base leading-7 text-ink-muted">
              <p>{positioning.body}</p>
              <p>{positioning.support}</p>
            </div>
          </Reveal>
        </div>
        <Reveal
          delay={0.14}
          x={18}
          y={24}
          scale={0.985}
          className="w-full max-w-[320px] justify-self-center"
        >
          <VideoFrame src="/assets/videos/video-vertical-01.mp4" />
        </Reveal>
      </div>
    </SectionShell>
  );
}
