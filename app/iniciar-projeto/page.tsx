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
    <main className="fixed inset-0 z-[60] h-[100dvh] overflow-hidden bg-ink-black font-body text-white md:relative md:inset-auto md:min-h-screen md:overflow-x-hidden">
      <style>
        {`
          @media (max-width: 767px) {
            html,
            body {
              overflow: hidden;
            }

            .vz-phone-shell {
              width: 100vw !important;
              max-width: 100vw !important;
              height: 100dvh !important;
              max-height: 100dvh !important;
              aspect-ratio: auto !important;
              overflow: hidden !important;
              border: 0 !important;
              border-radius: 0 !important;
              background: transparent !important;
              box-shadow: none !important;
              padding: 0 !important;
              transform: none;
            }

            .vz-page-stage {
              padding: 0 !important;
            }

            .vz-phone-side-button,
            .vz-phone-core,
            .vz-phone-border,
            .vz-phone-notch {
              display: none !important;
            }

            .vz-phone-bg {
              inset: 0 !important;
              border-radius: 0 !important;
            }

            .vz-phone-scroll {
              padding-left: 1.25rem !important;
              padding-right: 1.25rem !important;
              padding-top: max(3.25rem, calc(env(safe-area-inset-top) + 2.75rem)) !important;
              padding-bottom: max(1rem, calc(env(safe-area-inset-bottom) + 0.75rem)) !important;
            }

            .vz-project-title {
              font-size: clamp(3.7rem, 16.5vw, 4.85rem) !important;
            }

            .vz-project-copy {
              font-size: clamp(0.82rem, 3.75vw, 1rem) !important;
              margin-bottom: 0.75rem !important;
              margin-top: 0 !important;
            }

            .vz-project-bg {
              background:
                radial-gradient(circle at 50% 0%, rgba(255, 35, 35, 0.15), transparent 18rem),
                radial-gradient(circle at 100% 48%, rgba(255, 35, 35, 0.10), transparent 16rem),
                linear-gradient(180deg, #050505 0%, #111111 44%, #050505 100%) !important;
            }

            .vz-project-bg img {
              display: none !important;
            }
          }

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

          @media (min-width: 768px) {
            .vz-phone-shell {
              width: min(450px, calc(100vw - 3rem), calc((100dvh - 3rem) * 9 / 19.5)) !important;
            }

            .vz-phone-scroll {
              padding-top: 5.75rem !important;
              padding-bottom: 1.25rem !important;
            }
          }
        `}
      </style>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-12%,rgba(255,35,35,0.14),transparent_31rem),radial-gradient(circle_at_50%_112%,rgba(255,35,35,0.08),transparent_24rem),linear-gradient(145deg,#050505_0%,#111111_44%,#050505_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-red/[0.035] blur-3xl" />

      <div className="vz-page-stage relative flex h-full items-center justify-center overflow-hidden px-3 py-2 max-md:p-0 min-[390px]:px-4 min-[390px]:py-3 sm:px-6 sm:py-6 md:min-h-screen">
        <section
          aria-labelledby="start-project-title"
          className="vz-phone-shell relative aspect-[9/19.5] w-full max-w-[450px] overflow-visible rounded-[38px] border border-accent-red/80 bg-[linear-gradient(145deg,#260202_0%,#ff2323_18%,#5f0707_34%,#050505_54%,#b40d0d_78%,#ff5a5a_100%)] px-3 py-4 shadow-[0_30px_100px_rgba(0,0,0,0.72),0_0_36px_rgba(255,35,35,0.16),inset_0_0_0_1px_rgba(255,255,255,0.16)] backdrop-blur-2xl max-md:h-[100dvh] max-md:w-screen max-md:max-w-none max-md:aspect-auto max-md:overflow-hidden max-md:rounded-none max-md:border-0 max-md:bg-transparent max-md:p-0 max-md:shadow-none min-[390px]:rounded-[46px] min-[390px]:px-4 min-[390px]:py-5 sm:px-6 sm:py-7"
          style={{
            width: "min(450px, calc(100vw - 1.5rem), calc((100dvh - 1rem) * 9 / 19.5))"
          }}
        >
          <div className="vz-phone-side-button pointer-events-none absolute -left-[5px] top-[18%] h-14 w-1.5 rounded-l-full bg-[linear-gradient(180deg,#4d0505,#ff2323,#190101)] shadow-[inset_-1px_0_1px_rgba(255,255,255,0.22),0_0_14px_rgba(255,35,35,0.22)] max-md:hidden sm:h-16" />
          <div className="vz-phone-side-button pointer-events-none absolute -left-[5px] top-[31%] h-10 w-1.5 rounded-l-full bg-[linear-gradient(180deg,#4d0505,#ff2323,#190101)] shadow-[inset_-1px_0_1px_rgba(255,255,255,0.22),0_0_14px_rgba(255,35,35,0.22)] max-md:hidden sm:h-11" />
          <div className="vz-phone-side-button pointer-events-none absolute -right-[5px] top-[25%] h-20 w-1.5 rounded-r-full bg-[linear-gradient(180deg,#4d0505,#ff2323,#190101)] shadow-[inset_1px_0_1px_rgba(255,255,255,0.22),0_0_14px_rgba(255,35,35,0.22)] max-md:hidden sm:h-24" />

          <div className="vz-phone-core pointer-events-none absolute inset-[5px] rounded-[33px] bg-[#050505] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10),inset_0_18px_34px_rgba(255,255,255,0.04)] max-md:hidden min-[390px]:inset-[6px] min-[390px]:rounded-[40px]" />
          <div className="vz-phone-bg vz-project-bg pointer-events-none absolute inset-[10px] z-0 overflow-hidden rounded-[28px] bg-[#050505] max-md:inset-0 max-md:rounded-none min-[390px]:inset-[12px] min-[390px]:rounded-[34px]">
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
          <div className="vz-phone-border pointer-events-none absolute inset-[10px] rounded-[28px] border border-white/[0.08] max-md:hidden min-[390px]:inset-[12px] min-[390px]:rounded-[34px]" />
          <div className="vz-phone-notch pointer-events-none absolute left-1/2 top-[15px] z-20 flex h-7 w-[102px] -translate-x-1/2 items-center justify-end rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_8px_22px_rgba(0,0,0,0.45)] max-md:hidden min-[390px]:top-[18px] min-[390px]:h-8 min-[390px]:w-[116px]">
            <span className="mr-3 h-2.5 w-2.5 rounded-full bg-[#071124] shadow-[0_0_8px_rgba(47,92,255,0.45)]" />
          </div>

          <div className="vz-phone-scroll relative z-10 flex h-full min-h-0 flex-col overflow-y-auto overflow-x-hidden px-1 pb-7 pt-24 text-center [scrollbar-width:none] max-md:px-5 max-md:pb-8 max-md:pt-20 min-[390px]:px-2 min-[390px]:pb-8 min-[390px]:pt-24 sm:px-0 sm:pb-10 sm:pt-28">
            <div className="mb-3 flex -translate-y-4 flex-col items-center max-md:!translate-y-0 min-[390px]:mb-4 min-[390px]:-translate-y-5 sm:mb-5 sm:-translate-y-8">
              <h1
                id="start-project-title"
                className={`${anton.className} vz-project-title relative inline-block text-[clamp(3.15rem,15vw,4.85rem)] leading-[0.88] tracking-normal text-white [text-shadow:0_0_10px_rgba(255,255,255,0.26),0_0_24px_rgba(255,255,255,0.14)]`}
              >
                <span>Formulário</span>
              </h1>
            </div>

            <p className="vz-project-copy mx-auto mb-5 mt-1 w-[min(20.7rem,calc(100%-1.25rem))] text-center font-body text-[clamp(0.95rem,4.25vw,1.25rem)] font-black italic leading-tight text-white/90 [font-weight:900] min-[390px]:mb-6 min-[390px]:mt-2 md:-mt-11 md:mb-4">
              <span className="block">Conte sua ideia e receba</span>
              <span className="block whitespace-nowrap">uma proposta personalizada.</span>
            </p>

            <ProjectBriefingForm />
          </div>
        </section>
      </div>
    </main>
  );
}
