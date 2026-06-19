import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Quote, BarChart3, Search, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { Sparkle } from "@/components/site/Sparkle";

export const Route = createFileRoute("/_site/diensten/geo")({
  head: () => ({
    meta: [
      { title: "GEO optimalisatie — Word het antwoord van AI | Expose Your Brand" },
      { name: "description", content: "Met GEO optimalisatie word jouw bedrijf het antwoord dat ChatGPT, Gemini en Perplexity aan jouw klanten geven. Vraag een gratis GEO-audit aan." },
      { property: "og:title", content: "GEO optimalisatie — Word het antwoord van AI" },
      { property: "og:description", content: "Word zichtbaar in ChatGPT, Gemini en Perplexity met een meetbare GEO-strategie in 5 fasen." },
      { property: "og:url", content: "/diensten/geo" },
    ],
    links: [{ rel: "canonical", href: "/diensten/geo" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Generative Engine Optimization",
        provider: { "@type": "Organization", name: "Expose Your Brand" },
      }),
    }],
  }),
  component: GeoPage,
});

const forWho = [
  {
    title: "Je bedrijf is actief in B2B dienstverlening of high-end B2C services",
    body: "Bijvoorbeeld: advocaten, accountants, consultants, privéklinieken, IT-bedrijven, recruitment.",
  },
  {
    title: "Je doelgroep zoekt online voordat ze contact opnemen",
    body: "Klanten Googlen (en vragen AI) voor ze contact opnemen. Jij wilt als antwoord verschijnen.",
  },
  {
    title: "Je beoogde klanten hebben een behoorlijke waarde",
    body: "Je hoeft niet voor elke zoekterm te ranken. Je wilt voor de juiste termen zichtbaar zijn waar je marge hoog is.",
  },
  {
    title: "Je bent al actief met online marketing",
    body: "GEO werkt beter als je al SEO doet.",
  },
];

const stats = [
  { v: "347", l: "AI-vermeldingen voor onze klanten in ChatGPT, Gemini en Perplexity in de afgelopen 6 maanden." },
  { v: "92%", l: "van de doelgroep krijgt minstens 1x per week een vraag waar onze klant het antwoord zou moeten zijn." },
  { v: "Top 3", l: "positie in AI-vermeldingen voor belangrijke vragen." },
];

const phases = [
  {
    num: "01",
    title: "GEO-audit & nulmeting",
    body: "We meten hoe vaak jij momenteel wordt geciteerd in AI (jouw Visibility Score). We analyseren je top 3 concurrenten en bepalen wat je Share of LLM Voice is.",
    out: "Een volledig beeld van waar je nu staat en waar je concurrenten je voorbijlopen.",
  },
  {
    num: "02",
    title: "Content & autoriteitsanalyse",
    body: "Niet alle content is optimaal voor AI-modellen. We analyseren welke vragen gebruikers werkelijk invoeren in ChatGPT/Gemini, welke bronnen AI nu citeert in jouw niche en welke topical authority je op moet bouwen.",
    out: "Een onderwerpenmap als basis voor AI-zichtbaarheid in specifieke onderwerpen.",
  },
  {
    num: "03",
    title: "GEO-contentstrategie",
    body: "We creëren content die tegelijk rankt én geciteerd wordt: technische opmaak (schema markup), pagina-optimalisatie voor perfecte scanbaarheid door AI en vermeldingen op autoriteitsites.",
    out: "Content waardoor AI jouw bedrijf makkelijker kan vinden en citeren.",
  },
  {
    num: "04",
    title: "Implementatie & publicatie",
    body: "Jouw website krijgt de ultieme GEO-implementatie: perfecte robots.txt voor AI-crawlers, llms.txt (het nieuwe robots.txt voor AI) en schema markup met structured data. Daarna publiceren we content die door AI-modellen wordt opgemerkt.",
    out: "Een website die volledig AI-ready is.",
  },
  {
    num: "05",
    title: "Monitoring, optimalisatie & rapportage",
    body: "Je krijgt een maandelijks rapport: Share of LLM Voice, citaties per platform, sentiment-analyse (hoe praat AI over jouw merk) en drift-detectie (technische issues). We optimaliseren continu.",
    out: "Zicht op je vooruitgang en de werkzaamheden die wij voor je uitvoeren.",
  },
];

const results = [
  { v: "+183%", t: "Share of LLM Voice in 6 maanden", d: "Je merk gaat van 1 citatie per 50 zoeken naar 1 per 15 zoeken in AI-interfaces." },
  { v: "+42%", t: "Unlinked brand mentions", d: "Meer autoriteitssites noemen je bedrijf, onafhankelijk van backlinks." },
  { v: "+28%", t: "Hogere lead-kwaliteit", d: "Leads die je via AI vinden, converteren beter — ze zijn al overtuigd." },
];

const faq = [
  {
    q: "Hoe lang duurt het voordat mijn bedrijf zichtbaar wordt in AI?",
    a: "Realistisch: 6-12 weken tot je eerste citaties ziet, 16-24 weken voor een solide positie. Hangt af van je niche (concurrentie) en hoe bekend je al bent. Daarom garanderen we resultaat binnen 90 dagen, of we werken gratis door.",
  },
  {
    q: "Wat is het verschil tussen SEO en GEO?",
    a: "SEO optimaliseert voor kliks naar jouw website (Google). GEO optimaliseert ervoor dat je bedrijf wordt vermeld als antwoord in AI-interfaces (ChatGPT, Gemini). Ze delen dezelfde basis (autoriteit, content, techniek), maar de uitkomst is anders. Je wilt allebei.",
  },
  {
    q: "Werkt GEO voor alle industrieën?",
    a: "Nee. GEO werkt het best voor B2B services en high-end B2C waar klanten onderzoek doen voordat ze contact opnemen. Voor e-commerce of bedrijven met impuls-aankopen is klassieke SEO sneller. We checken dit gratis in de audit.",
  },
  {
    q: "Hoe meten jullie succes?",
    a: "Met je eigen dashboard: Share of LLM Voice (hoeveel % van AI-antwoorden jij bent), citaties per AI-model, welke prompts je bereiken, trend-positie versus concurrenten en sentiment (hoe positief AI over je spreekt). Niks verborgen. Niks geschat. Gemeten.",
  },
  {
    q: "Hoeveel kost GEO optimalisatie?",
    a: "Hangt af van je niche, hoe bekend je nu bent en hoeveel content nodig is. Gemiddeld €1K tot €5K per maand. We stellen een maatwerkpakket samen tijdens je adviesgesprek. Je betaalt alleen voor wat werkelijk bijdraagt.",
  },
];

function GeoPage() {
  return (
    <>
      <PageHero
        eyebrow="GEO · Generative Engine Optimization"
        title={<>Word het <span className="text-molten italic">antwoord</span> dat AI geeft aan jouw klanten.</>}
        description="Ontdek wat GEO optimalisatie voor jouw bedrijf kan betekenen. Wij zorgen dat jouw merk verschijnt in de antwoorden van ChatGPT, Gemini en Perplexity — niet als ranking, maar als de bron die geciteerd wordt."
      >
        <div className="flex flex-wrap gap-3">
          <CTAButton to="/contact" variant="molten">Vraag je gratis GEO-audit aan <ArrowRight className="size-4" /></CTAButton>
          <CTAButton to="/contact" variant="outline-navy">Download onze GEO-whitepaper</CTAButton>
        </div>
      </PageHero>

      {/* Wat is GEO */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Wat is GEO"
            title={<>Generative Engine <span className="text-molten italic">Optimization</span>.</>}
            description="Jouw potentiële klanten stellen vragen aan ChatGPT, Gemini en Perplexity. Ze zien AI-gegenereerde antwoorden met verwijzingen naar bronnen. Maar jouw bedrijf staat er niet tussen. Daar lossen wij iets aan op. Waar SEO zorgt dat jij wordt getoond in Google, zorgt GEO dat jij zichtbaar wordt in AI-antwoorden."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-8 rounded-2xl bg-silver ring-1 ring-black/5">
              <div className="flex items-center gap-2 mb-4">
                <Search className="size-5 text-btn-blue" />
                <div className="text-btn-blue font-bold text-xs uppercase tracking-widest">SEO · Klassieke zoekmachine</div>
              </div>
              <h3 className="font-display text-2xl text-twilight font-semibold mb-4">Optimalisatie voor kliks</h3>
              <ul className="space-y-2 text-sm text-body-text">
                <li>· Gebruiker voert een zoekopdracht in</li>
                <li>· Google toont organische resultaten</li>
                <li>· Jouw website verschijnt — of niet</li>
                <li>· Klik naar je site = conversiekans</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-twilight text-white">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="size-5 text-molten" />
                <div className="text-molten font-bold text-xs uppercase tracking-widest">GEO · AI-antwoord</div>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Optimalisatie voor vermeldingen</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>· Gebruiker stelt een vraag aan AI</li>
                <li>· AI genereert een samengevat antwoord</li>
                <li>· De AI citeert 2-3 bronnen</li>
                <li>· Jouw bedrijf is het directe antwoord</li>
                <li>· Jij bent gevalideerd door AI</li>
              </ul>
            </div>
          </div>

          <p className="text-center mt-10 text-body-text">
            Wat je mist zonder GEO: <span className="text-twilight font-semibold">zichtbaarheid in tot 50% van de zoekopdrachten.</span>
          </p>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Voor wie"
            title="Voor wie is GEO optimalisatie nuttig?"
            description="GEO werkt niet voor iedereen. Voldoet jouw bedrijf aan onderstaande kenmerken, dan is het een no-brainer."
          />
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {forWho.map((w) => (
              <div key={w.title} className="p-6 bg-white rounded-2xl ring-1 ring-black/5">
                <div className="flex gap-3 items-start">
                  <span className="shrink-0 size-7 rounded-full bg-molten/10 text-molten flex items-center justify-center">
                    <Check className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-twilight mb-1">{w.title}</h3>
                    <p className="text-sm text-body-text">{w.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-body-text">
            Niet zeker? <CTAButton to="/contact" variant="molten" className="ml-2">Vraag gratis jouw GEO-audit aan <ArrowRight className="size-4" /></CTAButton>
          </p>
          <p className="mt-4 text-center text-sm text-body-text">We analyseren in 1 uur of GEO voor jouw bedrijf zinvol is.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Resultaten"
            title="Dit hebben onze klanten behaald met GEO optimalisatie."
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.l} className="p-8 bg-silver rounded-2xl ring-1 ring-black/5 text-center">
                <div className="font-display text-5xl font-semibold text-molten mb-3">{s.v}</div>
                <p className="text-sm text-body-text">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto p-8 md:p-10 bg-twilight text-white rounded-2xl relative">
            <Quote className="size-8 text-molten mb-4" />
            <p className="text-lg md:text-xl leading-relaxed text-pretty">
              "Binnen 2 maanden zagen we onszelf teruggekomen in AI-antwoorden. Niet als één bron van tien, maar als nummer 2 en 3. Dat vertaalt zich direct in leads."
            </p>
            <div className="mt-6 text-sm text-white/70">— Klant van Expose Your Brand</div>
          </div>
        </div>
      </section>

      {/* Aanpak */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Onze aanpak"
            title="Hoe wij jouw bedrijf zichtbaar maken in AI."
            description="We geloven niet in standaardpakketten. Samen ontwikkelen we een strategische route, onderverdeeld in 5 fasen. Maatwerk, ingericht op jouw doelen en jouw doelgroep."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {phases.map((p) => (
              <div key={p.num} className="p-8 bg-white rounded-2xl ring-1 ring-black/5">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-display text-3xl font-semibold text-molten">{p.num}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-body-text">Fase {p.num}</span>
                </div>
                <h3 className="font-display text-xl text-twilight font-semibold mb-3">{p.title}</h3>
                <p className="text-sm text-body-text mb-4 leading-relaxed">{p.body}</p>
                <div className="pt-4 border-t border-black/5 flex gap-2 items-start text-sm">
                  <Sparkle size="sm" className="shrink-0 mt-0.5" />
                  <span className="text-twilight"><strong>Uitkomst:</strong> {p.out}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultaten */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Resultaten"
            title="Resultaten, geen beloften."
            description="Je hoeft ons niet op ons woord te geloven. Je ziet het zelf in je dashboard: Share of LLM Voice, citaties per AI-model, trending positie, sentiment-analyse en een vergelijking met je concurrenten."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {results.map((r) => (
              <div key={r.t} className="p-8 bg-silver rounded-2xl ring-1 ring-black/5">
                <BarChart3 className="size-5 text-molten mb-3" />
                <div className="font-display text-4xl font-semibold text-molten mb-2">{r.v}</div>
                <div className="font-display font-semibold text-twilight mb-2">{r.t}</div>
                <p className="text-sm text-body-text">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Klantcase"
            title="Hoe een klant top 3 bereikte in AI-antwoorden."
          />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-2xl ring-1 ring-black/5">
              <h3 className="font-display text-xl text-twilight font-semibold mb-4">Setup</h3>
              <ul className="text-sm space-y-2 text-body-text">
                <li><strong className="text-twilight">Niche:</strong> Vermogensbeheer</li>
                <li><strong className="text-twilight">Doelstelling:</strong> Top 3 positie in AI-antwoorden voor "beste vermogensadviseur Amsterdam"</li>
                <li><strong className="text-twilight">Startpunt:</strong> 0 AI-citaties, niet zichtbaar</li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-2xl ring-1 ring-black/5">
              <h3 className="font-display text-xl text-twilight font-semibold mb-4">Het probleem</h3>
              <p className="text-sm text-body-text leading-relaxed">
                Potentiële klanten gingen direct naar concurrenten. Die verschenen in ChatGPT-antwoorden op vragen als "wie is een goede vermogensadviseur?". Goede website, tientallen backlinks — maar AI-modellen citeerden haar niet. Klassieke SEO werkte, GEO was onbekend terrein.
              </p>
            </div>
          </div>

          <div className="mt-6 p-8 bg-white rounded-2xl ring-1 ring-black/5">
            <h3 className="font-display text-xl text-twilight font-semibold mb-4">Onze aanpak</h3>
            <ul className="text-sm space-y-3 text-body-text">
              <li><strong className="text-twilight">Maand 1-2:</strong> Audit, nulmeting en strategische topical map. We identificeerden 6 high-value prompts waar ze ontbrak en 3 concurrenten die wel werden geciteerd.</li>
              <li><strong className="text-twilight">Maand 2-3:</strong> Herstructurering van bestaande content + 8 nieuwe artikelen, gerichte schema markup, passage optimization en entity stacking op Wikipedia en LinkedIn.</li>
              <li><strong className="text-twilight">Maand 3-4:</strong> Distributie en autoriteitboost via webinars, whitepapers en expert quotes in branche-publicaties. LLM Pulse-monitoring actief.</li>
            </ul>
          </div>

          <div className="mt-6 grid sm:grid-cols-4 gap-4">
            {[
              { v: "0 → 8,2%", l: "Share of LLM Voice" },
              { v: "12", l: "Prompts waarin teruggekomen" },
              { v: "#2-3", l: "Positie kernzoekterm" },
              { v: "+47", l: "Leads uit AI-referrals" },
            ].map((r) => (
              <div key={r.l} className="p-6 bg-silver rounded-xl text-center ring-1 ring-black/5">
                <div className="font-display text-2xl font-semibold text-molten mb-1">{r.v}</div>
                <div className="text-xs text-body-text">{r.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-8 bg-twilight text-white rounded-2xl">
            <Quote className="size-6 text-molten mb-3" />
            <p className="leading-relaxed text-pretty">
              "Ik dacht: AI is hype. Toen zag ik dat potentiële klanten erover spraken. Na 4 maanden begrijp ik: dit is niet de toekomst, dit is nú. En Expose Your Brand zag het eerder dan we dachten."
            </p>
            <div className="mt-4 text-sm text-white/70">— Founder, vermogensadvies</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title="Veelgestelde vragen over GEO." />
          <div className="mt-8 space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="group p-6 bg-silver rounded-xl ring-1 ring-black/5">
                <summary className="cursor-pointer font-display font-semibold text-twilight flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-molten transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-body-text">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}