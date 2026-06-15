"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationItems } from "@/lib/navigation";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled || isMenuOpen
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
          className="flex shrink-0 items-center transition duration-300 hover:opacity-85"
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

        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/90 transition duration-300 hover:border-accent-red/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-red/70 focus:ring-offset-2 focus:ring-offset-ink-black lg:hidden"
        >
          <span className="relative h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-current transition duration-300 ease-out ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-6 bg-current transition duration-300 ease-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-px w-6 bg-current transition duration-300 ease-out ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <nav className="ml-auto hidden items-center justify-end gap-8 lg:flex xl:gap-10" aria-label="Principal">
          {navigationItems.map((item) => {
            const opensInNewTab = item.href.startsWith("https://");

            return (
              <Link
                key={item.href}
                href={item.href}
                target={opensInNewTab ? "_blank" : undefined}
                rel={opensInNewTab ? "noopener noreferrer" : undefined}
                className="group relative py-2 font-body text-sm font-bold uppercase tracking-[0.04em] text-white/[0.76] transition duration-300 hover:text-white xl:text-base"
              >
                <span>{item.label}</span>
                <span className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-accent-red opacity-80 transition duration-300 group-hover:scale-x-100" />
              </Link>
            );
          })}
        </nav>

      </div>
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/10 bg-ink-black/92 backdrop-blur-2xl transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          isMenuOpen ? "max-h-[calc(100svh-4rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-8 sm:px-8" aria-label="Menu mobile">
          {navigationItems.map((item) => {
            const opensInNewTab = item.href.startsWith("https://");

            return (
              <Link
                key={item.href}
                href={item.href}
                target={opensInNewTab ? "_blank" : undefined}
                rel={opensInNewTab ? "noopener noreferrer" : undefined}
                onClick={() => setIsMenuOpen(false)}
                className="group relative flex min-h-14 items-center border-b border-white/[0.08] font-body text-lg font-bold uppercase tracking-[0.08em] text-white/82 transition duration-300 last:border-b-0 hover:text-white"
              >
                <span>{item.label}</span>
                <span className="ml-auto h-px w-8 origin-right scale-x-0 bg-accent-red transition duration-300 group-hover:scale-x-100" />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
