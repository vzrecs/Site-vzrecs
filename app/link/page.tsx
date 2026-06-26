import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Anton } from "next/font/google";
import type { ReactElement } from "react";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

export const metadata: Metadata = {
  title: "VZ RECS | Links",
  robots: {
    index: false,
    follow: false
  }
};

const whatsappBudgetUrl =
  "https://wa.me/553598423283?text=Vim%20do%20instagram%20e%20gostar%C3%ADa%20de%20fazer%20um%20or%C3%A7amento!";

const whatsappProjectUrl =
  whatsappBudgetUrl;

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
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
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
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
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
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25 7.5V5.75c0-1.1.9-2 2-2h3.5c1.1 0 2 .9 2 2V7.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M4.25 7.5h15.5v11.25H4.25V7.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M4.25 12.25h5.5M14.25 12.25h5.5M9.75 11h4.5v2.5h-4.5V11Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function UserIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12.25a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M4.75 20.25c.75-3.35 3.38-5.35 7.25-5.35s6.5 2 7.25 5.35"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
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
    label: "Nosso site",
    href: "https://vzrecs.com.br/",
    icon: GlobeIcon,
    external: true
  },
  {
    label: "Iniciar um projeto",
    href: whatsappProjectUrl,
    icon: BriefcaseIcon,
    external: true
  },
  {
    label: "Sobre nós",
    href: "/",
    icon: UserIcon
  }
];

function LinkButton({ href, label, icon: Icon, external }: LinkCard) {
  const className =
    "group relative grid min-h-[72px] grid-cols-[44px_1fr_44px] items-center overflow-hidden rounded-[20px] border border-white/[0.14] bg-[linear-gradient(135deg,rgba(255,255,255,0.105),rgba(255,255,255,0.025)_42%,rgba(0,0,0,0.22))] px-5 text-white shadow-[0_18px_46px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-accent-red/60 hover:bg-white/[0.08] hover:shadow-[0_26px_72px_rgba(0,0,0,0.42),0_0_26px_rgba(255,35,35,0.16),inset_0_1px_0_rgba(255,255,255,0.16)] focus:outline-none focus:ring-2 focus:ring-accent-red/70 focus:ring-offset-2 focus:ring-offset-ink-black sm:min-h-[76px]";

  const content = (
    <>
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)]" />
      <span className="pointer-events-none absolute left-0 top-1/2 h-10 w-px -translate-y-1/2 bg-[linear-gradient(180deg,transparent,rgba(255,35,35,0.8),transparent)] opacity-70 transition duration-300 group-hover:opacity-100" />
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.14] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_42%,rgba(0,0,0,0.34))] text-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_26px_rgba(0,0,0,0.24)] transition duration-300 group-hover:border-accent-red/65 group-hover:text-accent-red">
        <Icon className="h-6 w-6" />
      </span>
      <span className="relative px-3 text-center font-body text-lg font-black leading-tight text-white [font-style:italic] [font-weight:900] sm:text-xl">
        {label}
      </span>
      <span aria-hidden="true" className="relative flex justify-end">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-red/70 opacity-0 shadow-[0_0_14px_rgba(255,35,35,0.7)] transition duration-300 group-hover:opacity-100" />
      </span>
    </>
  );

  if (external) {
    return (
      <a className={className} href={href} rel="noopener noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {content}
    </Link>
  );
}

export default function LinkPage() {
  return (
    <main className="fixed inset-0 z-[60] min-h-svh overflow-y-auto bg-ink-black font-body text-white">
      <style>
        {`
          @keyframes vz-rec-bounce {
            0%, 100% {
              transform: translateY(0);
            }
            48% {
              transform: translateY(-0.32rem);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .vz-rec-dot {
              animation: none !important;
            }
          }
        `}
      </style>
      <div className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 py-6 sm:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-12%,rgba(255,35,35,0.14),transparent_31rem),radial-gradient(circle_at_50%_112%,rgba(255,35,35,0.08),transparent_24rem),linear-gradient(145deg,#050505_0%,#111111_44%,#050505_100%)]" />
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-red/[0.035] blur-3xl" />

        <section
          aria-labelledby="link-page-title"
          className="relative aspect-[9/19.5] max-w-[450px] overflow-visible rounded-[46px] border border-accent-red/80 bg-[linear-gradient(145deg,#260202_0%,#ff2323_18%,#5f0707_34%,#050505_54%,#b40d0d_78%,#ff5a5a_100%)] px-4 py-5 shadow-[0_34px_120px_rgba(0,0,0,0.72),0_0_44px_rgba(255,35,35,0.18),inset_0_0_0_1px_rgba(255,255,255,0.16)] backdrop-blur-2xl sm:px-6 sm:py-7"
          style={{
            width: "min(450px, calc(100svw - 2rem), calc((100svh - 1.5rem) * 9 / 19.5))"
          }}
        >
          <div className="pointer-events-none absolute -left-[5px] top-[18%] h-16 w-1.5 rounded-l-full bg-[linear-gradient(180deg,#4d0505,#ff2323,#190101)] shadow-[inset_-1px_0_1px_rgba(255,255,255,0.22),0_0_14px_rgba(255,35,35,0.22)]" />
          <div className="pointer-events-none absolute -left-[5px] top-[31%] h-11 w-1.5 rounded-l-full bg-[linear-gradient(180deg,#4d0505,#ff2323,#190101)] shadow-[inset_-1px_0_1px_rgba(255,255,255,0.22),0_0_14px_rgba(255,35,35,0.22)]" />
          <div className="pointer-events-none absolute -right-[5px] top-[25%] h-24 w-1.5 rounded-r-full bg-[linear-gradient(180deg,#4d0505,#ff2323,#190101)] shadow-[inset_1px_0_1px_rgba(255,255,255,0.22),0_0_14px_rgba(255,35,35,0.22)]" />

          <div className="pointer-events-none absolute inset-[6px] rounded-[40px] bg-[#050505] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10),inset_0_18px_34px_rgba(255,255,255,0.04)]" />
          <div className="pointer-events-none absolute inset-[12px] z-0 overflow-hidden rounded-[34px] bg-[#050505]">
            <Image
              alt=""
              aria-hidden="true"
              className="absolute -inset-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)] scale-105 object-cover blur-[4px] saturate-[0.92]"
              fill={false}
              height={1920}
              priority
              src="/assets/images/link-phone-bg.jpg"
              width={1080}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.46)_0%,rgba(5,5,5,0.38)_42%,rgba(5,5,5,0.72)_100%)]" />
          </div>
          <div className="pointer-events-none absolute inset-[12px] rounded-[34px] border border-white/[0.08]" />
          <div className="pointer-events-none absolute left-1/2 top-[18px] z-20 flex h-8 w-[116px] -translate-x-1/2 items-center justify-end rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_8px_22px_rgba(0,0,0,0.45)]">
            <span className="mr-3 h-2.5 w-2.5 rounded-full bg-[#071124] shadow-[0_0_8px_rgba(47,92,255,0.45)]" />
          </div>

          <div className="relative z-10 flex h-full flex-col text-center">
            <div className="flex -translate-y-14 flex-col items-center pt-28 sm:-translate-y-10 sm:pt-32">
              <h1
                id="link-page-title"
                className={`${anton.className} relative inline-block text-[5.15rem] leading-[0.88] tracking-normal text-white [text-shadow:0_0_10px_rgba(255,255,255,0.26),0_0_24px_rgba(255,255,255,0.14)] sm:text-[5.85rem]`}
              >
                <span>
                  VZ RECS
                </span>
                <span
                  aria-hidden="true"
                  className="vz-rec-dot absolute -top-1 left-full ml-3 h-5 w-5 rounded-full bg-accent-red shadow-[0_0_20px_rgba(255,35,35,0.78)] [animation:vz-rec-bounce_1.45s_ease-in-out_infinite] sm:-top-1.5 sm:ml-4 sm:h-6 sm:w-6"
                />
              </h1>
              <p className="mt-4 font-body text-[1.08rem] font-black leading-snug text-white/90 [font-style:italic] [font-weight:900] [text-shadow:0_0_10px_rgba(255,255,255,0.24),0_0_24px_rgba(255,255,255,0.12)] sm:text-[1.2rem]">
                Audiovisual · Fotografia · Conteúdo
              </p>
            </div>

            <div className="-mt-3 flex flex-col gap-5 sm:mt-0 sm:gap-6">
              {linkCards.map((item) => (
                <LinkButton key={item.label} {...item} />
              ))}
            </div>

            <div className="mx-auto mb-4 mt-auto flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
              <Image
                alt="VZ RECS"
                className="h-full w-full object-contain"
                height={144}
                priority
                src="/assets/images/logo-vz-recs-round-clean-v2.png"
                width={144}
              />
            </div>

            <p className="pb-12 pt-1 text-center font-body text-[0.68rem] font-black uppercase tracking-[0.14em] text-white/72 [font-style:italic] [font-weight:900] [text-shadow:0_0_10px_rgba(255,255,255,0.24),0_0_24px_rgba(255,255,255,0.12)] sm:pb-16 sm:text-xs sm:tracking-[0.16em]">
              Lavras - Minas Gerais
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
