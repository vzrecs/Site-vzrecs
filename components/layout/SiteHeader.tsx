"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationItems } from "@/lib/navigation";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#inicio");

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const sectionItems = navigationItems.filter((item) => item.href.startsWith("#"));
    let animationFrame = 0;

    const updateActiveHref = () => {
      const marker = Math.min(Math.max(window.innerHeight * 0.28, 132), 260);
      let currentItem = sectionItems[0];

      for (const item of sectionItems) {
        const section = document.querySelector(item.href);

        if (!(section instanceof HTMLElement)) {
          continue;
        }

        const bounds = section.getBoundingClientRect();
        if (bounds.top <= marker) currentItem = item;
        if (bounds.top <= marker && bounds.bottom > marker) break;
      }

      setActiveHref(currentItem?.href ?? "#inicio");
    };

    const scheduleUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateActiveHref();
      });
    };

    updateActiveHref();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "border-b border-white/[0.1] bg-ink-black/78 shadow-[0_18px_70px_rgba(0,0,0,0.34)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent shadow-none backdrop-blur-0"
      }`}
    >
      <div
        className={`relative mx-auto flex w-full items-center px-5 transition-all duration-500 ease-out sm:px-8 lg:pr-28 xl:pl-12 xl:pr-36 ${
          isScrolled ? "h-16 sm:h-18 lg:h-20" : "h-28 sm:h-32 lg:h-40"
        }`}
      >
        <Link
          href="#inicio"
          className="hidden shrink-0 items-center transition duration-300 hover:opacity-85 sm:flex"
          aria-label="Vz Recs - voltar ao início"
        >
          <Image
            src="/assets/images/logo-vz-recs.png"
            alt=""
            width={152}
            height={152}
            className={`rounded-full object-cover transition-all duration-500 ease-out ${
              isScrolled
                ? "h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                : "h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36"
            }`}
            priority
          />
        </Link>

        <nav
          className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center gap-2.5 rounded-full border border-white/10 bg-[#030303] p-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.48)] backdrop-blur-xl sm:gap-3.5"
          aria-label="Principal"
        >
          {navigationItems.map((item) => {
            const opensInNewTab = item.href.startsWith("https://");
            const isActive = activeHref === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                target={opensInNewTab ? "_blank" : undefined}
                rel={opensInNewTab ? "noopener noreferrer" : undefined}
                aria-label={`Ir para ${item.label}`}
                aria-current={isActive ? "page" : undefined}
                className={`group/nav relative flex h-12 w-12 items-center overflow-hidden rounded-full border font-body text-sm font-bold uppercase tracking-[0.04em] text-white transition-[width,background-color,border-color,color] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red/80 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-black sm:h-[3.25rem] sm:w-[3.25rem] sm:hover:w-[11rem] sm:focus-visible:w-[11rem] ${
                  isActive
                    ? "border-white/10 bg-accent-red/10"
                    : "border-white/10 bg-[#050505] hover:border-accent-red/50 hover:bg-accent-red/12 focus-visible:border-accent-red/60 focus-visible:bg-accent-red/12"
                }`}
              >
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center sm:h-[3.25rem] sm:w-[3.25rem]">
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-[2px] rounded-full border-2 border-[#ff2323] transition-[opacity,transform] duration-300 motion-reduce:transition-none ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-0"
                    }`}
                  />
                  <Image
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                    unoptimized
                  />
                </span>
                <span className="hidden max-w-0 -translate-x-2 whitespace-nowrap opacity-0 transition-[max-width,opacity,transform] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-hover/nav:max-w-28 group-hover/nav:translate-x-0 group-hover/nav:opacity-100 group-focus-visible/nav:max-w-28 group-focus-visible/nav:translate-x-0 group-focus-visible/nav:opacity-100 sm:inline-block">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
