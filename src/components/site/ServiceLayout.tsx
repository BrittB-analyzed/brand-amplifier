import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "./PageHero";
import { CTAButton } from "./CTAButton";
import { Sparkle } from "./Sparkle";
import { SectionHeader } from "./SectionHeader";
import { PreFooterCTA } from "./PreFooterCTA";

interface Props {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  bullets: string[];
  forWho: string[];
  approach: { title: string; desc: string }[];
  ctaLabel?: string;
  faq?: { q: string; a: string }[];
}

export function ServiceLayout({ eyebrow, title, intro, bullets, forWho, approach, ctaLabel = "Plan gratis adviesgesprek", faq }: Props) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={intro}>
        <CTAButton to="/contact" variant="molten">{ctaLabel} <ArrowRight className="size-4" /></CTAButton>
      </PageHero>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <SectionHeader eyebrow="Wat je krijgt" title="Concreet en meetbaar." />
            <ul className="mt-8 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <Sparkle className="shrink-0 mt-1" size="sm" />
                  <span className="text-twilight">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 ring-1 ring-black/5">
            <div className="text-molten font-bold text-xs uppercase tracking-widest mb-3">Voor wie</div>
            <h3 className="font-display text-2xl text-twilight font-semibold mb-5">Geschikt als…</h3>
            <ul className="space-y-2">
              {forWho.map((w) => (
                <li key={w} className="flex gap-2 items-start text-sm">
                  <Check className="size-4 text-molten shrink-0 mt-1" /> <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Onze aanpak" title="Zo pakken we het aan." align="center" className="mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {approach.map((a, i) => (
              <div key={a.title} className="p-6 bg-silver rounded-xl ring-1 ring-black/5">
                <div className="font-display text-3xl font-semibold text-molten mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h4 className="font-display font-semibold text-twilight mb-2">{a.title}</h4>
                <p className="text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {faq && faq.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeader eyebrow="FAQ" title="Veelgestelde vragen." />
            <div className="mt-8 space-y-3">
              {faq.map((f) => (
                <details key={f.q} className="group p-6 bg-white rounded-xl ring-1 ring-black/5">
                  <summary className="cursor-pointer font-display font-semibold text-twilight flex items-center justify-between">
                    {f.q}
                    <span className="text-molten transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <PreFooterCTA />
    </>
  );
}