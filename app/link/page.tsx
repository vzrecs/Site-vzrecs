import Image from "next/image";
import type { Metadata } from "next";
import { Anton } from "next/font/google";
import { LinkCards } from "./LinkCards";

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

export default function LinkPage() {
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
              padding-top: max(4.65rem, calc(env(safe-area-inset-top) + 4.15rem)) !important;
              padding-bottom: max(1rem, calc(env(safe-area-inset-bottom) + 0.75rem)) !important;
            }

            .vz-link-title {
              font-size: clamp(3rem, 17vw, 4.55rem) !important;
            }

            .vz-link-subtitle,
            .vz-link-footer {
              font-size: clamp(0.88rem, 3.9vw, 1.05rem) !important;
            }

            .vz-link-logo {
              height: 10rem !important;
              width: 10rem !important;
              margin-top: 0.35rem !important;
              margin-bottom: -0.35rem !important;
            }

            .vz-link-footer {
              padding-bottom: 0 !important;
              transform: translateY(-2.25rem) !important;
            }
          }

          body > header,
          body > footer {
            display: none;
          }

          @keyframes vz-logo-float {
            0%, 100% {
              transform: translateY(-0.65rem);
            }
            50% {
              transform: translateY(-1.15rem);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .vz-rec-dot,
            .vz-logo-float {
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

      <div className="vz-page-stage relative flex h-full items-center justify-center overflow-hidden px-3 py-2 max-md:p-0 min-[390px]:px-4 min-[390px]:py-3 sm:px-6 sm:py-6 md:min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-12%,rgba(255,35,35,0.14),transparent_31rem),radial-gradient(circle_at_50%_112%,rgba(255,35,35,0.08),transparent_24rem),linear-gradient(145deg,#050505_0%,#111111_44%,#050505_100%)]" />
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-red/[0.035] blur-3xl" />

        <section
          aria-labelledby="link-page-title"
          className="vz-phone-shell relative aspect-[9/19.5] w-full max-w-[450px] overflow-visible rounded-[38px] border border-accent-red/80 bg-[linear-gradient(145deg,#260202_0%,#ff2323_18%,#5f0707_34%,#050505_54%,#b40d0d_78%,#ff5a5a_100%)] px-3 py-4 shadow-[0_30px_100px_rgba(0,0,0,0.72),0_0_36px_rgba(255,35,35,0.16),inset_0_0_0_1px_rgba(255,255,255,0.16)] backdrop-blur-2xl max-md:h-[100dvh] max-md:w-screen max-md:max-w-none max-md:aspect-auto max-md:overflow-hidden max-md:rounded-none max-md:border-0 max-md:bg-transparent max-md:p-0 max-md:shadow-none min-[390px]:rounded-[46px] min-[390px]:px-4 min-[390px]:py-5 sm:px-6 sm:py-7"
          style={{
            width: "min(450px, calc(100vw - 1.5rem), calc((100dvh - 1rem) * 9 / 19.5))"
          }}
        >
          <div className="vz-phone-side-button pointer-events-none absolute -left-[5px] top-[18%] h-14 w-1.5 rounded-l-full bg-[linear-gradient(180deg,#4d0505,#ff2323,#190101)] shadow-[inset_-1px_0_1px_rgba(255,255,255,0.22),0_0_14px_rgba(255,35,35,0.22)] max-md:hidden sm:h-16" />
          <div className="vz-phone-side-button pointer-events-none absolute -left-[5px] top-[31%] h-10 w-1.5 rounded-l-full bg-[linear-gradient(180deg,#4d0505,#ff2323,#190101)] shadow-[inset_-1px_0_1px_rgba(255,255,255,0.22),0_0_14px_rgba(255,35,35,0.22)] max-md:hidden sm:h-11" />
          <div className="vz-phone-side-button pointer-events-none absolute -right-[5px] top-[25%] h-20 w-1.5 rounded-r-full bg-[linear-gradient(180deg,#4d0505,#ff2323,#190101)] shadow-[inset_1px_0_1px_rgba(255,255,255,0.22),0_0_14px_rgba(255,35,35,0.22)] max-md:hidden sm:h-24" />

          <div className="vz-phone-core pointer-events-none absolute inset-[5px] rounded-[33px] bg-[#050505] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10),inset_0_18px_34px_rgba(255,255,255,0.04)] max-md:hidden min-[390px]:inset-[6px] min-[390px]:rounded-[40px]" />
          <div className="vz-phone-bg pointer-events-none absolute inset-[10px] z-0 overflow-hidden rounded-[28px] bg-[#050505] max-md:inset-0 max-md:rounded-none min-[390px]:inset-[12px] min-[390px]:rounded-[34px]">
            <Image
              alt=""
              aria-hidden="true"
              className="absolute -inset-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)] scale-105 object-cover blur-[4px] saturate-[0.92]"
              height={1920}
              priority
              src="/assets/images/link-phone-bg.jpg"
              width={1080}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.46)_0%,rgba(5,5,5,0.38)_42%,rgba(5,5,5,0.72)_100%)]" />
          </div>
          <div className="vz-phone-border pointer-events-none absolute inset-[10px] rounded-[28px] border border-white/[0.08] max-md:hidden min-[390px]:inset-[12px] min-[390px]:rounded-[34px]" />
          <div className="vz-phone-notch pointer-events-none absolute left-1/2 top-[15px] z-20 flex h-7 w-[102px] -translate-x-1/2 items-center justify-end rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_8px_22px_rgba(0,0,0,0.45)] max-md:hidden min-[390px]:top-[18px] min-[390px]:h-8 min-[390px]:w-[116px]">
            <span className="mr-3 h-2.5 w-2.5 rounded-full bg-[#071124] shadow-[0_0_8px_rgba(47,92,255,0.45)]" />
          </div>

          <div className="vz-phone-scroll relative z-10 flex h-full min-h-0 flex-col overflow-y-auto overflow-x-hidden px-1 pb-7 pt-24 text-center [scrollbar-width:none] max-md:px-5 max-md:pb-8 max-md:pt-20 min-[390px]:px-2 min-[390px]:pb-8 min-[390px]:pt-28 sm:px-0 sm:pb-10 sm:pt-28">
            <div className="flex -translate-y-4 flex-col items-center max-md:!translate-y-0 min-[390px]:-translate-y-5 sm:-translate-y-8">
              <h1
                id="link-page-title"
                className={`${anton.className} vz-link-title relative inline-block text-[clamp(3.65rem,18vw,5.85rem)] leading-[0.88] tracking-normal text-white [text-shadow:0_0_10px_rgba(255,255,255,0.26),0_0_24px_rgba(255,255,255,0.14)]`}
              >
                <span>
                  <span className="text-transparent [-webkit-text-stroke:2.2px_#ff2323] [text-shadow:0_0_6px_rgba(255,35,35,0.22)] min-[390px]:[-webkit-text-stroke:3px_#ff2323] sm:[-webkit-text-stroke:3.4px_#ff2323]">
                    VZ
                  </span>{" "}
                  RECS
                </span>
                <span
                  aria-hidden="true"
                  className="vz-rec-dot absolute -top-0.5 left-full ml-2.5 h-4 w-4 rounded-full bg-accent-red shadow-[0_0_18px_rgba(255,35,35,0.72)] [animation:vz-logo-float_3.8s_ease-in-out_infinite] min-[390px]:ml-3 min-[390px]:h-5 min-[390px]:w-5 sm:-top-1 sm:ml-4 sm:h-6 sm:w-6"
                />
              </h1>
              <p className="vz-link-subtitle mt-3 max-w-full font-body text-[clamp(0.92rem,4.3vw,1.2rem)] font-black leading-snug text-white/90 [font-style:italic] [font-weight:900] [text-shadow:0_0_10px_rgba(255,255,255,0.24),0_0_24px_rgba(255,255,255,0.12)] min-[390px]:mt-4">
                Audiovisual <span className="align-middle text-[1.35em] leading-none text-accent-red">·</span>{" "}
                Fotografia <span className="align-middle text-[1.35em] leading-none text-accent-red">·</span>{" "}
                Conteúdo
              </p>
            </div>

            <LinkCards />

            <div className="vz-logo-float vz-link-logo relative mx-auto mb-2 mt-auto flex h-36 w-36 -translate-y-2 items-center justify-center [animation:vz-logo-float_3.8s_ease-in-out_infinite] min-[390px]:h-44 min-[390px]:w-44 sm:h-48 sm:w-48 sm:-translate-y-4">
              <span className="pointer-events-none absolute inset-7 -z-10 rounded-full bg-accent-red/12 blur-xl" />
              <Image
                alt="VZ RECS"
                className="relative z-10 h-full w-full object-contain"
                height={144}
                priority
                src="/assets/images/logo-vz-recs-transparent.png"
                width={144}
              />
            </div>

            <p className="vz-link-footer -translate-y-6 pb-5 pt-0 text-center font-body text-[clamp(0.98rem,4.4vw,1.25rem)] font-black tracking-normal text-white/90 [font-style:italic] [font-weight:900] [text-shadow:0_0_10px_rgba(255,255,255,0.24),0_0_24px_rgba(255,255,255,0.12)] min-[390px]:-translate-y-8 sm:-translate-y-10 sm:pb-6">
              Lavras <span className="align-middle text-[1.35em] leading-none text-accent-red">·</span>{" "}
              Minas Gerais <span className="align-middle text-[1.35em] leading-none text-accent-red">·</span>{" "}
              Brasil
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
