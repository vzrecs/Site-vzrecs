import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  children,
  className = ""
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`flex min-h-[100svh] items-center px-5 py-20 sm:px-8 lg:py-28 ${className}`}
    >
      <div className="relative z-10 mx-auto w-full max-w-site">{children}</div>
    </section>
  );
}
