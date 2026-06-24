import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Zap, Target, TrendingUp, Search, Settings, FileText, Wallet, BarChart3, X } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { Sparkle } from "@/components/site/Sparkle";

export const Route = createFileRoute("/_site/diensten/sea")({
  head: () => ({
    meta: [
      { title: "SEA optimalisatie — morgen al klanten via Google Ads | Expose Your Brand" },
      { name: "description", content: "Vandaag een advertentie aanzetten, morgen koopklare bezoekers op je site. Wij maken Google Ads winstgevend voor MKB — strategisch, meetbaar en zonder budgetlekken." },
      { property: "og:title", content: "SEA optimalisatie — morgen al klanten via Google Ads" },
      { property: "og:description", content: "Vandaag aan, morgen koopklaar verkeer. Winstgevende Google Ads voor MKB." },
      { property: "og:url", content: "/diensten/sea" },
    ],
    links: [{ rel: "canonical", href: "/diensten/sea" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "SEA — Google Ads optimalisatie",
        provider: { "@type": "Organization", name: "Expose Your Brand" },
      }),
    }],
  }),
  component: SeaPage,
});

const reasons = [
  {
    icon: Zap,
    title: "Snelheid",
    body: "SEO en GEO bouwen waarde op de lange termijn. SEA is direct: campagne aan vandaag, koopklare bezoekers morgen. Geen weken wachten op organische groei.",
  },
  {
    icon: Target,
    title: "Precisie",
    body: "Je advertentie verschijnt alleen voor mensen die exact zoeken naar wat jij verkoopt. Hoge intentie, lage twijfel — dit is verkeer dat al overtuigd is dat het iets nodig heeft.",
  },
  {
    icon: TrendingUp,
    title: "Schaal & controle",
    body: "Groeit je bedrijf? Knop omhoog. Even minder vraag nodig? Knop omlaag. Elke dag bij te sturen, geen onnodige kosten en altijd transparant per euro.",
  },
] as const;

const checklist = [
  { t: "Gemiddelde klantwaarde €150+", d: "Bij die marge betaalt elke klik in Google Ads zichzelf snel terug." },
  { t: "Product-marktfit op orde", d: "SEA versnelt wat al verkoopt. Het compenseert geen aanbod waar nog geen vraag naar is." },
  { t: "Voldoende zoekvolume", d: "Je markt zoekt actief naar wat jij biedt — anders heeft adverteren geen podium." },
  { t: "Realistisch budget vanaf €1.000/mnd", d: "Onder dat niveau bereik je simpelweg niet genoeg mensen om iets te leren of te schalen." },
] as const;

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Strategie & keyword-onderzoek",
    desc: "We analyseren welke zoekopdrachten je klanten echt gebruiken, welke zoekwoorden waarde hebben en wat je concurrenten doen. Geen lijst van 500 willekeurige termen — wél de selectie waarmee jij gaat winnen.",
    out: "Een keyword-strategie gericht op klanten, niet op verkeer.",
  },
  {
    num: "02",
    icon: Settings,
    title: "Account inrichten & optimalisatie",
    desc: "Campagnestructuur op basis van producten, diensten en doelen. Conversion tracking zorgvuldig ingericht, want zonder meten is sturen onmogelijk. We controleren ook je landingspagina's op relevantie, snelheid en actiegerichtheid.",
    out: "Campagnes die vanaf dag één optimaal staan.",
  },
  {
    num: "03",
    icon: FileText,
    title: "Advertentieteksten & testen",
    desc: "Het verschil zit in de copy. Niet ‘Wij bieden vermogensbeheer’, maar ‘Vermogensopbouw zonder gedoe. Gemiddeld +8% per jaar. Plan je gratis advies.’ Elke maand testen we nieuwe varianten — winnaars schalen we op, verliezers gaan eruit.",
    out: "Advertenties die werkelijk nieuwe klanten opleveren.",
  },
  {
    num: "04",
    icon: Wallet,
    title: "Budgetoptimalisatie",
    desc: "Google Ads kan zomaar je budget verbranden. Wij sturen op biedstrategie, negatieve zoekwoorden en budgetverdeling tussen campagnes — zodat elke euro naar de campagne gaat die het meeste oplevert.",
    out: "Budget dat optimaal wordt ingezet — geen lekken.",
  },
  {
    num: "05",
    icon: BarChart3,
    title: "Maandelijkse voortgang",
    desc: "Dagelijks zicht op performance in je eigen dashboard. Maandelijks bespreken we doelen, resultaten, werkzaamheden, kansen en experimenten. Dit is geen ‘setup en vergeten’ — dit is ‘setup en blijven verbeteren’.",
    out: "Continue optimalisatie en korte lijnen.",
  },
] as const;

const faq = [
  { q: "Hoe snel staat mijn campagne live?", a: "Binnen 24 uur. Vandaag bouwen we de campagne in, morgen verschijn je boven de organische resultaten. Echt sterk presteren (na optimalisatie) duurt 4–12 weken." },
  { q: "Welk budget heb ik nodig?", a: "Minimaal €1.000–1.500 per maand om iets te leren. €1,5K–3K: testen en kleine scaling. €3K–7K: solide performance. €7K+: serieus lead-volume. Begin klein, schaal wat werkt." },
  { q: "Is mijn niche te klein voor Google Ads?", a: "Waarschijnlijk niet. Low-volume zoekwoorden (10–50/maand) zijn vaak goedkoper en converteren hoger. Hoge intentie + lage concurrentie is het beste scenario voor SEA." },
  { q: "Welk budget levert hoeveel leads op?", a: "Sterk afhankelijk van niche, concurrentie en landingspagina. Ruwe richtlijn: €2K/mnd → 5–15 leads, €5K/mnd → 15–40 leads, €10K/mnd → 40–100 leads. Onze audit maakt het concreet voor jouw markt." },
  { q: "Wat als Google Ads mijn budget opslokt?", a: "Dat gebeurt alleen bij slechte inrichting. Wij budgetteren per dag, gebruiken negatieve zoekwoorden en optimaliseren op cost-per-acquisition. Je houdt de teugels in handen." },
  { q: "Kan SEA samen met SEO en GEO?", a: "Sterker nog: dat móét. SEA brengt snelle leads vandaag, SEO en GEO bouwen gratis verkeer op voor morgen. Samen groeien ze sneller dan apart." },
  { q: "Wat als we stoppen met SEA?", a: "Ads stoppen, leads stoppen. Maar je SEO- en GEO-werk loopt door, dus organisch verkeer blijft. Veel klanten gebruiken SEA 1–2 jaar om snel te schalen en leunen daarna meer op SEO." },
  { q: "Mag ik mijn bestaande Google Ads-account behouden?", a: "Ja. We nemen het over en optimaliseren door. Alleen als het account écht onherstelbaar is, starten we nieuw — eerste optie is minder disruptief." },
];

function SeaPage() {
  return (
    <>
      <PageHero
        eyebrow="SEA · betaalde zoekadvertenties"
        title={<>Vandaag aan, <span className="text-molten italic">morgen klanten</span> via Google.</>}
        description="SEO en GEO bouwen aan duurzame zichtbaarheid. SEA levert ondertussen direct verkeer dat al koopklaar is. Wij richten je Google Ads strategisch in, sturen elke maand bij en zorgen dat geen euro budget verloren gaat aan klikken die niets opleveren."
      >
        <div className="flex flex-wrap gap-3">
          <CTAButton to="/contact" variant="molten">
            Plan je gratis SEA-adviesgesprek <ArrowRight className="size-4" />
          </CTAButton>
          <CTAButton to="/diensten/seo-geo-audit" variant="outline-navy">
            Vraag een gratis SEA-audit aan
          </CTAButton>
        </div>
      </PageHero>

      {/* Stat strip */}
      <section className="py-12 px-6 -mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { stat: "24u", label: "campagne live na strategie en setup" },
            { stat: "100%", label: "high-intent verkeer — zoekers met koopvraag" },
            { stat: "€1K+", label: "realistisch maandbudget om écht te schalen" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 ring-1 ring-black/5 flex items-center gap-4">
              <div className="font-display text-4xl font-semibold text-molten">{s.stat}</div>
              <div className="text-sm text-body-text">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why SEA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Waarom SEA"
            title={<>Direct in beeld bij <span className="text-molten italic">mensen die nu zoeken.</span></>}
            description="Op social media wek je interesse — bezoekers scrollen. Op Google vangen we vraag die er al is. Drie redenen waarom SEA voor de meeste MKB-bedrijven de snelste hefboom is naast SEO en GEO."
          />
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <article key={r.title} className="p-8 bg-silver rounded-2xl ring-1 ring-black/5 hover:ring-molten/30 hover:-translate-y-1 transition-all">
                  <div className="size-12 rounded-xl bg-molten/10 text-molten flex items-center justify-center mb-5">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-twilight mb-3">{r.title}</h3>
                  <p className="text-sm text-body-text leading-relaxed">{r.body}</p>
                </article>
              );
            })}
          </div>

          {/* SEA vs SEO compare */}
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            <div className="p-8 rounded-2xl ring-1 ring-black/5 bg-silver">
              <div className="text-molten font-bold text-xs uppercase tracking-widest mb-2">Organisch (SEO/GEO)</div>
              <h4 className="font-display text-xl font-semibold text-twilight mb-3">Gratis verkeer — maar het kost tijd</h4>
              <ul className="space-y-2 text-sm text-body-text">
                <li className="flex gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> €0 per klik (je investeert in optimalisatie)</li>
                <li className="flex gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> 12–16 weken tot zichtbaar resultaat</li>
                <li className="flex gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> Compoundend rendement op de lange termijn</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl ring-1 ring-molten/30 bg-twilight text-white">
              <div className="text-molten font-bold text-xs uppercase tracking-widest mb-2">Betaald (SEA)</div>
              <h4 className="font-display text-xl font-semibold text-white mb-3">Direct podium — zolang je adverteert</h4>
              <ul className="space-y-2 text-sm text-white/85">
                <li className="flex gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> Per klik (afhankelijk van concurrentie)</li>
                <li className="flex gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> Morgen live, direct meetbaar</li>
                <li className="flex gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> Schaalbaar met de knop omhoog of omlaag</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-body-text max-w-2xl mx-auto">
            <span className="text-twilight font-medium">Onze advies:</span> doe beide. SEA voor directe omzet vandaag, SEO en GEO voor continue stroom van gratis verkeer morgen.
          </p>
        </div>
      </section>

      {/* For whom checklist */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">voor wie</div>
            <h2 className="font-display text-3xl md:text-4xl text-twilight font-semibold mb-4">SEA werkt — maar niet voor iedereen.</h2>
            <p className="text-body-text leading-relaxed mb-6">
              We zijn liever vooraf eerlijk. SEA levert voorspelbaar resultaat als deze vier voorwaarden kloppen. Herken je ze? Dan halen we vrijwel zeker een positieve ROAS uit je campagnes.
            </p>
            <CTAButton to="/diensten/seo-geo-audit" variant="molten">
              Check je situatie in een gratis audit <ArrowRight className="size-4" />
            </CTAButton>
          </div>
          <div className="space-y-3">
            {checklist.map((c) => (
              <div key={c.t} className="p-5 bg-white rounded-xl ring-1 ring-black/5 flex gap-4">
                <span className="shrink-0 mt-0.5 size-7 rounded-full bg-molten text-white flex items-center justify-center text-sm">
                  <Check className="size-4" />
                </span>
                <div>
                  <div className="font-display font-semibold text-twilight">{c.t}</div>
                  <p className="text-sm text-body-text mt-1">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach 5 steps */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="onze aanpak"
            title={<>Zo maken we jouw Google Ads <span className="text-molten italic">winstgevend.</span></>}
            description="Geen budget in de wind gooien. Een strategische roadmap, continue optimalisatie en bewijs in je eigen dashboard dat het werkt."
            align="center"
            className="mb-12"
          />
          <div className="space-y-5">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.num} className="p-7 md:p-8 bg-silver rounded-2xl ring-1 ring-black/5 grid md:grid-cols-[auto_1fr_auto] gap-6 items-start">
                  <div className="flex items-center gap-4">
                    <div className="font-display text-4xl font-semibold text-molten">{s.num}</div>
                    <div className="size-12 rounded-xl bg-white text-molten flex items-center justify-center ring-1 ring-black/5">
                      <Icon className="size-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-twilight mb-2">{s.title}</h3>
                    <p className="text-sm text-body-text leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="md:max-w-[220px] md:text-right">
                    <div className="text-molten font-bold text-[10px] uppercase tracking-widest mb-1">Resultaat</div>
                    <p className="text-sm text-twilight font-medium">{s.out}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ad copy compare */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="copy maakt het verschil"
            title={<>Goed geschreven advertenties <span className="text-molten italic">verdienen zichzelf terug.</span></>}
          />
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            <div className="p-7 rounded-2xl ring-1 ring-black/5 bg-white">
              <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-widest mb-3">
                <X className="size-4" /> Slecht
              </div>
              <p className="font-display text-twilight">"We bieden vermogensbeheer."</p>
              <p className="text-xs text-body-text mt-3">Geen aanleiding om te klikken. Geen onderscheid. Verbrandt budget.</p>
            </div>
            <div className="p-7 rounded-2xl ring-1 ring-molten/30 bg-twilight text-white">
              <div className="flex items-center gap-2 text-molten font-bold text-xs uppercase tracking-widest mb-3">
                <Check className="size-4" /> Goed
              </div>
              <p className="font-display">"Vermogensopbouw zonder gedoe. Gemiddeld +8% per jaar. Plan je gratis advies in."</p>
              <p className="text-xs text-white/70 mt-3">Belofte, bewijs, actie. Hoger klikpercentage én hogere conversie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title="Veelgestelde vragen over SEA." />
          <div className="mt-8 space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="group p-6 bg-silver rounded-xl ring-1 ring-black/5">
                <summary className="cursor-pointer font-display font-semibold text-twilight flex items-center justify-between">
                  {f.q}
                  <span className="text-molten transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-body-text">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA banner */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto bg-twilight text-white rounded-[28px] p-10 md:p-14 ring-1 ring-black/5 relative overflow-hidden">
          <Sparkle className="absolute top-6 right-8 opacity-50" size="md" animate />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold">Benieuwd wat SEA voor jou kan opleveren?</h3>
              <p className="text-white/70 mt-2">Een gratis audit laat zien waar budget lekt en wat het potentieel is.</p>
            </div>
            <CTAButton to="/diensten/seo-geo-audit" variant="molten" size="lg">
              Vraag je gratis SEA-audit aan <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}