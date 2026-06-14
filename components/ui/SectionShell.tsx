import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function SectionShell({
  id,
  children,
  className = "",
  innerClassName = "max-w-site"
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`flex min-h-[92svh] items-center px-5 py-16 sm:px-8 lg:py-24 ${className}`}
    >
      <div className={`relative z-10 mx-auto w-full ${innerClassName}`}>{children}</div>
    </section>
  );
}
