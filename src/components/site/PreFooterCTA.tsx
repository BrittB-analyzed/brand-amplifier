import { CTAButton } from "./CTAButton";
import { Sparkle } from "./Sparkle";
import berryPortrait from "@/assets/berry-portrait.jpg.asset.json";
import founderPortrait from "@/assets/founder-portrait.jpg.asset.json";

export function PreFooterCTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mesh-bg rounded-[32px] p-10 md:p-16 text-center ring-1 ring-black/5 relative overflow-hidden">
          <Sparkle className="absolute top-10 left-10 opacity-30" size="lg" animate />
          <Sparkle className="absolute bottom-10 right-10 opacity-30" size="lg" color="blue" animate />
          <Sparkle className="absolute top-1/2 right-1/4 opacity-20" size="md" animate />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-twilight mb-6 max-w-[20ch] mx-auto text-balance">
              Jouw concurrent is al zichtbaar in AI. Wanneer jij?
            </h2>
            <p className="text-body-text max-w-lg mx-auto mb-8">
              30 minuten, geen verkooppraat. Je krijgt direct inzicht in waar AI je vandaag al wel of niet noemt.
            </p>
            <CTAButton to="/contact" variant="molten" size="lg">
              Plan je gratis AI-adviesgesprek
            </CTAButton>
            <div className="mt-6 flex justify-center items-center gap-3">
              <div className="flex -space-x-2">
                <img src={berryPortrait.url} alt="Berry" className="size-9 rounded-full object-cover ring-2 ring-white" />
                <img src={founderPortrait.url} alt="Britt" className="size-9 rounded-full object-cover ring-2 ring-white" />
              </div>
              <span className="text-xs text-twilight/70">Gesprek met Berry of Britt</span>
            </div>
            <div className="mt-8 flex justify-center items-center gap-3 sm:gap-6 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-twilight/50 flex-wrap">
              <span>30+ jaar ervaring</span>
              <Sparkle size="sm" />
              <span>Beoordeeld door klanten</span>
              <Sparkle size="sm" />
              <span>Geen kleine lettertjes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}