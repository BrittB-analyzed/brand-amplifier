import type { ReactNode } from "react";
import { Sparkle } from "./Sparkle";
import heroBg from "@/assets/hero-bg.png.asset.json";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section
      className="pt-20 pb-20 md:pb-24 px-6 relative overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg.url})` }}
    >
      <Sparkle className="absolute top-16 right-[12%] opacity-60" size="lg" animate />
      <Sparkle className="absolute bottom-10 left-[8%] opacity-50" size="md" color="blue" animate />
      <div className="max-w-4xl mx-auto relative z-10 animate-fade-in-up">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white ring-1 ring-black/5 rounded-full mb-6">
            <Sparkle size="sm" />
            <span className="text-molten text-[10px] font-bold tracking-widest uppercase">{eyebrow}</span>
          </div>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-semibold text-twilight leading-[1.1] text-balance mb-6">
          {title}
        </h1>
        {description && <p className="text-lg md:text-xl text-body-text max-w-2xl leading-relaxed text-pretty">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}