import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "light" | "dark";
}

export function SectionHeader({ eyebrow, title, description, align = "left", className, tone = "light" }: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-5xl font-semibold leading-tight text-balance",
          tone === "dark" ? "text-white" : "text-twilight",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed text-pretty",
            tone === "dark" ? "text-white/70" : "text-body-text",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}