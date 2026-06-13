import { siteContent } from "@/lib/site-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function FinalCtaSection() {
  const { finalCta, whatsappUrl } = siteContent;

  return (
    <SectionShell id="contato" className="scroll-mt-0 border-y border-white/10 bg-ink-panel">
      <Reveal className="relative overflow-hidden px-0 py-10 text-center">
        <div className="mx-auto mb-10 h-px w-24 bg-accent-red" />
        <h2 className="mx-auto max-w-6xl font-display text-6xl uppercase leading-[0.9] text-white sm:text-7xl lg:text-8xl">
          {finalCta.title}
        </h2>
        <div className="mt-12">
          <ButtonLink href={whatsappUrl}>{finalCta.cta}</ButtonLink>
        </div>
      </Reveal>
    </SectionShell>
  );
}
