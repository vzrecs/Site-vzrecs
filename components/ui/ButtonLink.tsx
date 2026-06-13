import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "border-accent-red bg-accent-red text-white hover:-translate-y-0.5 hover:bg-accent-red hover:shadow-[0_14px_38px_rgba(255,35,35,0.22)]"
      : "border-white/20 bg-white/5 text-white hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-card border px-6 text-sm font-bold uppercase transition duration-300 ${styles} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
