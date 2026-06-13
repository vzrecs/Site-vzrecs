import { siteContent } from "@/lib/site-content";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function ProcessSection() {
  const { process } = siteContent;

  return (
    <SectionShell
      id="processo"
      className="relative scroll-mt-[-4rem] overflow-hidden bg-ink-black"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:-top-36" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:-bottom-36" />
      <div className="relative z-10 pt-8 lg:pt-12">
        <div>
          <Reveal className="mx-auto mb-14 max-w-[760px] text-center lg:mb-20">
            <h2 className="font-display text-6xl uppercase leading-[0.9] text-white [text-shadow:none] sm:text-7xl lg:text-8xl">
              <span className="inline-block -skew-x-12 italic text-transparent [-webkit-text-stroke:1.5px_#FF2323] lg:[-webkit-text-stroke:2px_#FF2323]">
                Nosso
              </span>{" "}
              processo
            </h2>
          </Reveal>

          <RevealGroup className="grid gap-5 md:grid-cols-2" delay={0.06} stagger={0.075}>
            {process.steps.map((step, index) => (
              <RevealItem key={step.title}>
                <article className="group relative min-h-[135px] overflow-hidden rounded-[18px] border border-white/[0.12] bg-white/[0.055] p-4 shadow-[0_28px_100px_rgba(0,0,0,0.34)] backdrop-blur-[30px] transition duration-300 before:pointer-events-none before:absolute before:inset-px before:rounded-[17px] before:bg-gradient-to-br before:from-white/[0.22] before:via-white/[0.055] before:to-transparent before:opacity-90 after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_14%_0%,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_88%_24%,rgba(255,35,35,0.1),transparent_30%)] hover:-translate-y-1 hover:border-white/[0.2] hover:bg-white/[0.075] hover:shadow-[0_34px_120px_rgba(0,0,0,0.42)]">
                  <div className="relative flex h-full flex-col justify-center">
                    <div className="flex items-baseline gap-2">
                      <span className="font-body text-2xl font-bold leading-none tracking-[-0.03em] text-white sm:text-3xl">
                        {index + 1}
                        <span className="text-white">.</span>
                      </span>
                      <h3 className="font-body text-2xl font-bold leading-none tracking-[-0.02em] text-white sm:text-3xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-justify text-sm leading-5 text-ink-muted">
                      {step.description}
                    </p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </SectionShell>
  );
}
