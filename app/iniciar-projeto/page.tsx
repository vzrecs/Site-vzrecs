import Image from "next/image";
import type { Metadata } from "next";
import { Anton } from "next/font/google";
import { ProjectBriefingForm } from "./ProjectBriefingForm";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

export const metadata: Metadata = {
  title: "VZ RECS | Iniciar um projeto",
  robots: {
    index: false,
    follow: false
  }
};

export default function StartProjectPage() {
  return (
    <main className="fixed inset-0 z-[60] min-h-svh overflow-y-auto bg-ink-black font-body text-white">
      <style>
        {`
          body > header,
          body > footer {
            display: none;
          }

          @keyframes vz-logo-float {
            0%, 100% {
              transform: translateY(-1rem);
            }
            50% {
              transform: translateY(-1.55rem);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .vz-rec-dot {
              animation: none !important;
            }
          }

          .vz-phone-scroll::-webkit-scrollbar {
            width: 0;
            height: 0;
          }
        `}
      </style>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-12%,rgba(255,35,35,0.14),transparent_31rem),radial-gradient(circle_at_50%_112%,rgba(255,35,35,0.08),transparent_24rem),linear-gradient(145deg,#050505_0%,#111111_44%,#050505_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-red/[0.035] blur-3xl" />

      <div className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 py-6 sm:px-6">
        <section
          aria-labelledby="start-project-title"
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
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.52)_0%,rgba(5,5,5,0.42)_36%,rgba(5,5,5,0.78)_100%)]" />
          </div>
          <div className="pointer-events-none absolute inset-[12px] rounded-[34px] border border-white/[0.08]" />
          <div className="pointer-events-none absolute left-1/2 top-[18px] z-20 flex h-8 w-[116px] -translate-x-1/2 items-center justify-end rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_8px_22px_rgba(0,0,0,0.45)]">
            <span className="mr-3 h-2.5 w-2.5 rounded-full bg-[#071124] shadow-[0_0_8px_rgba(47,92,255,0.45)]" />
          </div>

          <div className="vz-phone-scroll relative z-10 flex h-full min-h-0 flex-col overflow-y-auto overflow-x-hidden px-1 pb-10 pt-24 text-center [scrollbar-width:none] sm:px-0 sm:pb-12 sm:pt-28">
            <div className="mb-5 flex -translate-y-10 flex-col items-center sm:mb-6 sm:-translate-y-8">
              <h1
                id="start-project-title"
                className={`${anton.className} relative inline-block text-[4.35rem] leading-[0.88] tracking-normal text-white [text-shadow:0_0_10px_rgba(255,255,255,0.26),0_0_24px_rgba(255,255,255,0.14)] sm:text-[4.85rem]`}
              >
                <span>Formulario</span>
              </h1>
            </div>

            <p className="-mt-14 mb-3 mx-auto w-[18.6rem] max-w-[calc(100%-2.2rem)] text-center font-body text-lg font-black italic leading-tight text-white/90 [font-weight:900] sm:-mt-12 sm:mb-4 sm:w-[20.7rem] sm:text-xl">
              Nos conte a sua ideia e receba uma proposta personalizada.
            </p>

            <ProjectBriefingForm />
          </div>
        </section>
      </div>
    </main>
  );
}
