import { CTAButton } from "./CTAButton";
import { Sparkle } from "./Sparkle";
import { useT } from "@/lib/i18n";
import berryPortrait from "@/assets/berry-portrait.jpg.asset.json";
import founderPortrait from "@/assets/founder-portrait.jpg.asset.json";

export function PreFooterCTA() {
  const t = useT({
    title: {
      nl: "Jouw concurrent is al zichtbaar in AI. Wanneer jij?",
      en: "Your competitor is already visible in AI. When will you be?",
    },
    desc: {
      nl: "30 minuten, geen verkooppraat. Je krijgt direct inzicht in waar AI je vandaag al wel of niet noemt.",
      en: "30 minutes, no sales talk. You'll get instant insight into where AI already does — or doesn't — mention you.",
    },
    cta: { nl: "Plan je gratis AI-adviesgesprek", en: "Book your free AI strategy call" },
    with: { nl: "Gesprek met Berry of Britt", en: "Talk directly with Berry or Britt" },
    yrs: { nl: "30+ jaar ervaring", en: "30+ years of experience" },
    rated: { nl: "Beoordeeld door klanten", en: "Rated by clients" },
    noSmall: { nl: "Geen kleine lettertjes", en: "No small print" },
  });
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mesh-bg rounded-[32px] p-10 md:p-16 text-center ring-1 ring-black/5 relative overflow-hidden">
          <Sparkle className="absolute top-10 left-10 opacity-30" size="lg" animate />
          <Sparkle className="absolute bottom-10 right-10 opacity-30" size="lg" color="blue" animate />
          <Sparkle className="absolute top-1/2 right-1/4 opacity-20" size="md" animate />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-twilight mb-6 max-w-[20ch] mx-auto text-balance">
              {t.title}
            </h2>
            <p className="text-body-text max-w-lg mx-auto mb-8">
              {t.desc}
            </p>
            <CTAButton to="/contact" variant="molten" size="lg">
              {t.cta}
            </CTAButton>
            <div className="mt-6 flex justify-center items-center gap-3">
              <div className="flex -space-x-2">
                <img src={berryPortrait.url} alt="Berry" className="size-9 rounded-full object-cover ring-2 ring-white" />
                <img src={founderPortrait.url} alt="Britt" className="size-9 rounded-full object-cover ring-2 ring-white" />
              </div>
              <span className="text-xs text-twilight/70">{t.with}</span>
            </div>
            <div className="mt-8 flex justify-center items-center gap-3 sm:gap-6 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-twilight/50 flex-wrap">
              <span>{t.yrs}</span>
              <Sparkle size="sm" />
              <span>{t.rated}</span>
              <Sparkle size="sm" />
              <span>{t.noSmall}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}