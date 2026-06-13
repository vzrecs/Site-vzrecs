import { siteContent } from "@/lib/site-content";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function AboutSection() {
  const { about } = siteContent;

  return (
    <SectionShell id="sobre" className="relative scroll-mt-0 bg-ink-black">
      <div className="grid items-center gap-12 lg:grid-cols-[1.18fr_0.82fr]">
        <Reveal className="max-w-[760px]">
          <h2
            className="font-display text-6xl uppercase leading-[0.9] text-white sm:text-7xl lg:text-8xl"
            aria-label={about.title}
          >
            Sobre a{" "}
            <span className="inline-block -skew-x-12 italic text-transparent [-webkit-text-stroke:1.5px_#FF2323] lg:[-webkit-text-stroke:2px_#FF2323]">
              Vz Recs
            </span>
          </h2>
          <div className="mt-8 space-y-5 text-justify text-base leading-7 text-ink-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08} className="w-full max-w-[320px] justify-self-center">
          <MediaFrame src={about.image} alt="Retrato da Vz Recs" aspect="reel" />
        </Reveal>
      </div>
    </SectionShell>
  );
}
