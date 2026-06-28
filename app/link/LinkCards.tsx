"use client";

import Link from "next/link";
import { useState, type ReactElement } from "react";

const whatsappBudgetUrl =
  "https://wa.me/5535984232883?text=Vim%20do%20instagram%20e%20gostar%C3%ADa%20de%20fazer%20um%20or%C3%A7amento!";

type IconProps = {
  className?: string;
};

type LinkCard = {
  label: string;
  href: string;
  icon: (props: IconProps) => ReactElement;
  external?: boolean;
};

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M12.03 3.5A8.45 8.45 0 0 0 4.8 16.34L3.75 20.2l3.98-1.03A8.45 8.45 0 1 0 12.03 3.5Zm0 1.7a6.75 6.75 0 0 1 5.72 10.34 6.75 6.75 0 0 1-8.4 2.26l-.4-.2-2.37.62.63-2.3-.24-.38A6.75 6.75 0 0 1 12.03 5.2Z"
        fillRule="evenodd"
      />
      <path d="M9.8 8.6c-.15-.34-.31-.35-.46-.36h-.4c-.14 0-.36.05-.55.26-.2.22-.73.72-.73 1.74 0 1.03.75 2.03.85 2.17.1.14 1.44 2.3 3.58 3.12 1.78.7 2.15.56 2.54.52.39-.04 1.25-.51 1.43-1 .18-.5.18-.92.13-1-.05-.1-.2-.15-.4-.25l-1.45-.72c-.2-.1-.36-.15-.5.1-.15.24-.57.72-.7.87-.13.15-.26.17-.48.06-.22-.1-.9-.33-1.72-1.06-.64-.57-1.07-1.28-1.2-1.5-.12-.22-.01-.33.1-.44.1-.1.22-.26.33-.39.1-.13.15-.22.22-.37.08-.15.04-.27-.02-.38L9.8 8.6Z" />
    </svg>
  );
}

function GlobeIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 20.25a8.25 8.25 0 1 0 0-16.5 8.25 8.25 0 0 0 0 16.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M3.75 12h16.5M12 3.75c2.1 2.25 3.15 5 3.15 8.25s-1.05 6-3.15 8.25C9.9 18 8.85 15.25 8.85 12S9.9 6 12 3.75Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.25 7.5V5.75c0-1.1.9-2 2-2h3.5c1.1 0 2 .9 2 2V7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="M4.25 7.5h15.5v11.25H4.25V7.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="M4.25 12.25h5.5M14.25 12.25h5.5M9.75 11h4.5v2.5h-4.5V11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}

function UserIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12.25a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="M4.75 20.25c.75-3.35 3.38-5.35 7.25-5.35s6.5 2 7.25 5.35" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}

const linkCards: LinkCard[] = [
  {
    label: "Fazer orçamento",
    href: whatsappBudgetUrl,
    icon: WhatsAppIcon,
    external: true
  },
  {
    label: "Iniciar um projeto",
    href: "/iniciar-projeto",
    icon: BriefcaseIcon
  },
  {
    label: "Nosso site",
    href: "https://vzrecs.com.br/",
    icon: GlobeIcon,
    external: true
  }
];

const cardClassName =
  "group relative grid min-h-[64px] grid-cols-[40px_minmax(0,1fr)_18px] items-center overflow-hidden rounded-[18px] border border-white/[0.14] bg-[linear-gradient(135deg,rgba(255,255,255,0.105),rgba(255,255,255,0.025)_42%,rgba(0,0,0,0.22))] px-3.5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-accent-red/60 hover:bg-white/[0.08] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] focus:outline-none focus:ring-2 focus:ring-accent-red/70 focus:ring-offset-2 focus:ring-offset-ink-black max-md:min-h-[58px] max-md:grid-cols-[38px_minmax(0,1fr)_12px] max-md:px-3 min-[390px]:min-h-[70px] min-[390px]:grid-cols-[44px_minmax(0,1fr)_28px] min-[390px]:rounded-[20px] min-[390px]:px-5 sm:min-h-[76px] sm:grid-cols-[44px_minmax(0,1fr)_44px]";

type CardContentProps = Pick<LinkCard, "label" | "icon"> & {
  decorativeLines?: boolean;
};

function CardContent({ label, icon: Icon, decorativeLines = true }: CardContentProps) {
  return (
    <>
      {decorativeLines ? (
        <>
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)]" />
          <span className="pointer-events-none absolute left-0 top-1/2 h-10 w-px -translate-y-1/2 bg-[linear-gradient(180deg,transparent,rgba(255,35,35,0.8),transparent)] opacity-70 transition duration-300 group-hover:opacity-100" />
        </>
      ) : null}
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.14] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_42%,rgba(0,0,0,0.34))] text-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_26px_rgba(0,0,0,0.24)] transition duration-300 group-hover:border-accent-red/65 group-hover:text-accent-red max-md:h-9 max-md:w-9 min-[390px]:h-11 min-[390px]:w-11">
        <Icon className="h-5 w-5 max-md:h-[1.15rem] max-md:w-[1.15rem] min-[390px]:h-6 min-[390px]:w-6" />
      </span>
      <span className="relative flex min-w-0 max-w-full items-center font-body text-[clamp(0.98rem,4.35vw,1.25rem)] font-black italic leading-tight text-white [font-weight:900] max-md:text-[0.98rem]">
        <span aria-hidden="true" className="mx-2 -translate-y-0.5 text-center text-[1.45rem] leading-none text-accent-red/90 max-md:mx-1.5 max-md:text-[1.35rem] min-[390px]:mx-3 min-[390px]:text-2xl sm:text-[1.7rem]">
          |
        </span>
        <span className="min-w-0 whitespace-nowrap">{label}</span>
      </span>
      <span aria-hidden="true" className="relative flex justify-end">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-red/70 opacity-0 shadow-[0_0_14px_rgba(255,35,35,0.7)] transition duration-300 group-hover:opacity-100" />
      </span>
    </>
  );
}

function LinkButton({ href, label, icon, external }: LinkCard) {
  if (external) {
    return (
      <a className={cardClassName} href={href} rel="noopener noreferrer" target="_blank">
        <CardContent icon={icon} label={label} />
      </a>
    );
  }

  return (
    <Link className={cardClassName} href={href}>
      <CardContent icon={icon} label={label} />
    </Link>
  );
}

function AboutAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-[18px] border border-white/[0.14] bg-[linear-gradient(135deg,rgba(255,255,255,0.105),rgba(255,255,255,0.025)_42%,rgba(0,0,0,0.22))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition duration-300 hover:border-accent-red/60 hover:bg-white/[0.08] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] min-[390px]:rounded-[20px]">
      <button
        aria-expanded={isOpen}
        className="relative grid min-h-[64px] w-full grid-cols-[40px_minmax(0,1fr)_18px] items-center px-3.5 text-left focus:outline-none max-md:min-h-[58px] max-md:grid-cols-[38px_minmax(0,1fr)_12px] max-md:px-3 min-[390px]:min-h-[70px] min-[390px]:grid-cols-[44px_minmax(0,1fr)_28px] min-[390px]:px-5 sm:min-h-[76px] sm:grid-cols-[44px_minmax(0,1fr)_44px]"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <CardContent decorativeLines={false} icon={UserIcon} label="Sobre nós" />
      </button>

      {isOpen ? (
        <div className="border-t border-white/[0.055] px-4 pb-4 pt-3 min-[390px]:px-5 min-[390px]:pb-5 min-[390px]:pt-4">
          <p className="text-left font-body text-[0.82rem] font-semibold leading-relaxed text-white/78 min-[390px]:text-sm sm:text-[0.95rem]">
            Do planejamento à entrega, nosso compromisso é garantir um trabalho bem executado, com processos claros,
            atenção aos detalhes e respeito aos prazos acordados.
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function LinkCards() {
  return (
    <div className="mt-4 flex w-full flex-col gap-3.5 max-md:mt-3 max-md:gap-2.5 min-[390px]:mt-5 min-[390px]:gap-[1.125rem] sm:mt-6 sm:gap-6 md:mt-0">
      {linkCards.map((item) => (
        <LinkButton key={item.label} {...item} />
      ))}
      <AboutAccordion />
    </div>
  );
}
