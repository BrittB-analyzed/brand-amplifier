import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, Handshake, Lock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTAButton } from "@/components/site/CTAButton";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { Sparkle } from "@/components/site/Sparkle";
import berryMood from "@/assets/berry-mood.jpg.asset.json";
import { useLang, pick, T } from "@/lib/i18n";

export const Route = createFileRoute("/_site/samenwerking")({
  head: () => ({
    meta: [
      { title: "White-label SEO/GEO samenwerking voor bureaus | Expose Your Brand" },
      { name: "description", content: "Bureau of internetbedrijf? Lever GEO en SEO white-label aan jouw klanten via Expose Your Brand. Zonder zelf op te schalen." },
      { property: "og:title", content: "Samenwerking voor bureaus" },
      { property: "og:url", content: "/samenwerking" },
    ],
    links: [{ rel: "canonical", href: "/samenwerking" }],
  }),
  component: SamenwerkingPage,
});

function SamenwerkingPage() {
  const lang = useLang();
  const benefits = pick(lang, {
    nl: [
      { icon: Building2, title: "Voor bureaus", text: "Aanvulling op je bestaande dienstverlening. Wij opereren achter de schermen." },
      { icon: Handshake, title: "Eerlijke marge", text: "Heldere afspraken, transparante tarieven, gezonde marge voor jou." },
      { icon: Lock, title: "Volledig white-label", text: "Rapportages en dashboard in jouw huisstijl. Jouw klant ziet jouw merk." },
    ],
    en: [
      { icon: Building2, title: "For agencies", text: "An extension of your existing services. We operate behind the scenes." },
      { icon: Handshake, title: "Fair margins", text: "Clear agreements, transparent rates, a healthy margin for you." },
      { icon: Lock, title: "Fully white-label", text: "Reports and dashboard in your brand style. Your client sees your brand." },
    ],
  });
  const steps = pick(lang, {
    nl: [
      { n: "01", t: "Kennismakingsgesprek", d: "We checken de fit: type klanten, gewenste service-level en marge." },
      { n: "02", t: "Onboarding klant", d: "Wij sluiten naadloos aan op jouw account management, dashboard volgt." },
      { n: "03", t: "Maandelijkse delivery", d: "Wij leveren, jij rapporteert in jouw merk en behoudt de klantrelatie." },
    ],
    en: [
      { n: "01", t: "Intro call", d: "We check the fit: client types, desired service level and margin." },
      { n: "02", t: "Client onboarding", d: "We slot seamlessly into your account management; dashboard follows." },
      { n: "03", t: "Monthly delivery", d: "We deliver, you report in your brand and keep the client relationship." },
    ],
  });
  return (
    <>
      <PageHero
        eyebrow={pick(lang, { nl: "Voor bureaus & internetbedrijven", en: "For agencies & digital firms" })}
        title={<T nl={<>White-label SEO & <span className="text-molten italic">GEO marketing.</span></>} en={<>White-label SEO & <span className="text-molten italic">GEO marketing.</span></>} />}
        description={pick(lang, { nl: "Lever AI-zichtbaarheid aan jouw klanten zonder zelf een GEO-team op te bouwen. Wij doen het werk, jij houdt de relatie.", en: "Deliver AI visibility to your clients without building your own GEO team. We do the work, you keep the relationship." })}
      >
        <CTAButton to="/contact" variant="molten">{pick(lang, { nl: "Maak kennis", en: "Get in touch" })} <ArrowRight className="size-4" /></CTAButton>
      </PageHero>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="p-8 bg-white rounded-2xl ring-1 ring-black/5">
              <div className="size-12 rounded-xl bg-molten/10 text-molten grid place-items-center mb-5">
                <b.icon className="size-5" />
              </div>
              <h3 className="font-display font-semibold text-xl text-twilight mb-2 flex items-center gap-2">
                <Sparkle size="sm" /> {b.title}
              </h3>
              <p className="text-sm">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow={pick(lang, { nl: "Hoe het werkt", en: "How it works" })} title={pick(lang, { nl: "Drie eenvoudige stappen.", en: "Three simple steps." })} />
          <div className="mt-10 grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
            <div className="rounded-2xl overflow-hidden ring-1 ring-black/5 aspect-[4/5] bg-silver">
              <img src={berryMood.url} alt={pick(lang, { nl: "Berry — kennismakingsgesprek", en: "Berry — intro call" })} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.n} className="p-6 bg-silver rounded-xl ring-1 ring-black/5 flex gap-6 items-center">
                <div className="font-display text-3xl font-semibold text-molten shrink-0">{s.n}</div>
                <div>
                  <h4 className="font-display font-semibold text-twilight">{s.t}</h4>
                  <p className="text-sm">{s.d}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}