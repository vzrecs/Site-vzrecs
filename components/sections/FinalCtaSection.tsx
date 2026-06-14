import Link from "next/link";
import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function FinalCtaSection() {
  const { finalCta, whatsappUrl } = siteContent;

  return (
    <SectionShell id="contato" className="scroll-mt-0 border-y border-white/10 bg-ink-panel">
      <div className="relative overflow-hidden px-0 py-10 text-center">
        <Reveal y={16} blur={4}>
          <div className="mx-auto mb-10 h-px w-24 bg-accent-red" />
        </Reveal>
        <Reveal delay={0.1} y={30} blur={8}>
        <h2 className="mx-auto max-w-[880px] font-display text-6xl uppercase leading-[0.9] tracking-[-0.006em] text-white sm:text-7xl lg:text-[5.7rem]">
          {finalCta.title}
        </h2>
        </Reveal>
        <Reveal delay={0.22} y={18} blur={5} className="mt-12">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex min-h-12 origin-center items-center text-[0.98rem] font-bold uppercase tracking-[0.08em] text-white transition duration-300 ease-out after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent-red after:transition after:duration-500 after:ease-out hover:scale-[1.035] hover:text-white hover:after:scale-x-100 sm:text-[1.05rem]"
          >
            SOLICITAR ORÇAMENTO
          </Link>
        </Reveal>
      </div>
    </SectionShell>
  );
}
