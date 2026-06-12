import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "molten" | "navy" | "outline-navy" | "outline-molten";

const variants: Record<Variant, string> = {
  molten:
    "bg-molten text-white ring-1 ring-molten hover:brightness-110 shadow-lg shadow-molten/20",
  navy:
    "bg-btn-blue text-white ring-1 ring-btn-blue hover:brightness-110 shadow-lg shadow-btn-blue/20",
  "outline-navy":
    "border-2 border-twilight/15 text-twilight hover:bg-twilight hover:text-white",
  "outline-molten":
    "border-2 border-molten text-molten hover:bg-molten hover:text-white",
};

interface Props {
  to?: string;
  href?: string;
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
}

export function CTAButton({ to, href, variant = "molten", size = "md", className, children }: Props) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 active:scale-[0.98] hover:-translate-y-0.5",
    size === "lg" ? "h-14 px-8 text-base" : "h-12 px-6 text-sm",
    variants[variant],
    className,
  );
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={href ?? "#"} className={cls}>{children}</a>;
}