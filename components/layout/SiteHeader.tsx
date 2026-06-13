import Image from "next/image";
import Link from "next/link";
import { navigationItems } from "@/lib/navigation";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.1] bg-ink-black/78 shadow-[0_18px_70px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
      <div className="relative mx-auto flex h-16 w-full items-center px-5 sm:h-18 sm:px-8 lg:h-20 lg:pr-28 xl:pl-12 xl:pr-36">
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
            className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14 lg:h-16 lg:w-16"
            priority
          />
        </Link>

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
    </header>
  );
}
