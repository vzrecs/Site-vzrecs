import { siteContent } from "@/lib/site-content";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function ProcessSection() {
  const { process } = siteContent;

  return (
    <SectionShell
      id="processo"
      className="relative scroll-mt-[-4rem] overflow-hidden bg-ink-black"
      innerClassName="max-w-[1360px]"
    >
      <div className="relative z-10 mx-auto w-full pt-0 lg:-mt-10">
        <div>
          <div className="pointer-events-none mx-auto mb-20 h-px w-full max-w-[1180px] bg-gradient-to-r from-transparent via-white/20 to-transparent lg:mb-24" />
          <Reveal className="mx-auto mb-16 max-w-[720px] text-center lg:mb-20">
            <h2 className="font-display text-6xl uppercase leading-[0.9] tracking-[-0.006em] text-white [text-shadow:none] sm:text-7xl lg:text-[5.7rem]">
              Nosso processo
            </h2>
          </Reveal>

          <RevealGroup className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-10" delay={0.06} stagger={0.075}>
            {process.steps.slice(0, 5).map((step, index) => (
              <RevealItem key={step.title}>
                <article className="pt-5">
                  <span className="font-display text-4xl uppercase leading-none tracking-[-0.006em] text-white sm:text-5xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-body text-sm font-extrabold uppercase leading-5 tracking-[0.02em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[260px] text-left text-sm font-semibold leading-6 text-ink-muted">
                    {step.description}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </SectionShell>
  );
}
