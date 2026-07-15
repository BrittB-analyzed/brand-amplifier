import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, X, Mail } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { Sparkle } from "@/components/site/Sparkle";
import { CTAButton } from "@/components/site/CTAButton";
import berryPortrait from "@/assets/berry-portrait-new.jpg.asset.json";
import berrySmiling from "@/assets/berry-smiling.jpg.asset.json";
import brittPortrait from "@/assets/britt-field.jpg.asset.json";
import brittLaptop from "@/assets/britt-laptop.jpg.asset.json";


export const Route = createFileRoute("/_site/over-ons")({
  head: () => ({
    meta: [
      { title: "Over Expose Your Brand — pragmatisch, direct, obsessed met AI, zichtbaarheid" },
      { name: "description", content: "Britt en Berry helpen MKB, bedrijven zichtbaar worden in Google én in AI. 30+ jaar ervaring, 150+ klanten, korte lijnen en bewijs in je eigen dashboard." },
      { property: "og:title", content: "Over ons | Expose Your Brand" },
      { property: "og:description", content: "Twee specialisten, één focus: jouw bedrijf zichtbaar in AI." },
      { property: "og:url", content: "/over-ons" },
    ],
    links: [{ rel: "canonical", href: "/over-ons" }],
  }),
  component: OverOnsPage,
});

const team = [
  {
    name: "Berry",
    role: "Strategie & marktinzicht",
    bio: "Sinds 2010 actief in online marketing — als interne marketeer, consultant, bij grote bureaus en uiteindelijk als eigenaar van zijn eigen bureau. Berry ziet patronen, voelt aan waar de markt heen gaat en vertaalt bedrijfsdoelen naar een concrete roadmap. Als je nog niet weet waar je moet beginnen, begin je met Berry.",
    specialism: "Strategie · marktinzicht · roadmap, building",
    photo: berryPortrait.url,
  },
  {
    name: "Britt",
    role: "Executie & client success",
    bio: "Bouwde sinds 2014 met B. Analyzed een online marketing, bureau met 50+ actieve klanten, een 9.8, rating en 386 #1, posities in Google. Britt is de motor: setup, implementatie, optimalisatie en rapportage. Niet theoretisch — praktisch. Niet morgen — vandaag als het kan. Je dashboard staat al op dag twee.",
    specialism: "Account, management · implementatie · optimalisatie · client, success",
    photo: brittPortrait.url,
  },
];

const stats = [
  { stat: "30+", label: "jaar gecombineerde ervaring" },
  { stat: "150+", label: "klanten zichtbaarder gemaakt" },
  { stat: "€50M+", label: "in totale klant, omzet gerealiseerd" },
];

const traits = [
  {
    num: "01",
    title: "Pragmatisch",
    body: "Geen jargon, geen marketing, taal. Wat werkt voor jóúw situatie, in normaal Nederlands. Heldere prioriteiten: dit doen we, dit levert het op.",
  },
  {
    num: "02",
    title: "Direct",
    body: "Korte lijnen. Je spreekt Berry of Britt — niet met juniors of accountmanagers. Afspraken zijn afspraken. Rapporten op tijd. Vragen beantwoord binnen werkdagen.",
  },
  {
    num: "03",
    title: "Scherp op resultaat",
    body: "Marketing draait om klanten, niet om creatief denken. Wat niet meetbaar is, doen we niet. Dashboard, zichtbaarheid vanaf dag één.",
  },
  {
    num: "04",
    title: "Betrokken",
    body: "We denken mee alsof het ons eigen bedrijf is. Eerlijke verwachtingen, geen loze beloftes. Werkt het niet? Dan zeggen we dat. Werkt het wel? Dan laten we het zien.",
  },
];

const timeline = [
  {
    year: "2014",
    title: "Google organisch (SEO)",
    body: "Britt start B. Analyzed. Online marketing draait om vindbaarheid in Google: rankings, content, backlinks. Klassieke SEO.",
  },
  {
    year: "2018",
    title: "Betaalde zoekopdrachten (SEA)",
    body: "Google Ads groeit hard. Snelle leads zijn nodig terwijl SEO opwarmt. SEA wordt de logische partner van SEO.",
  },
  {
    year: "2024",
    title: "AI, citaties (GEO)",
    body: "ChatGPT, Gemini, Perplexity. Antwoorden bovenop de blauwe links. Citaties zonder klikken. GEO wordt de nieuwe frontlinie — en hier focussen wij ons nu volledig op.",
  },
];

const specialisms = [
  { t: "GEO & AI, zichtbaarheid", d: "Geciteerd worden door ChatGPT, Perplexity, Gemini en AI Overviews. Passage, optimalisatie, SoLV, tracking, share of LLM voice." },
  { t: "Klassieke SEO", d: "Nog steeds 60–70% van de zoekmarkt. Rankings in Google, autoriteitsopbouw, technisch gezonde fundatie." },
  { t: "SEA (Google Ads)", d: "Snelle leads terwijl SEO en GEO opbouwen. Strategische campagne, inrichting, doorlopende optimalisatie." },
  { t: "Conversie, optimalisatie", d: "Verkeer is geen doel — een klant is dat. Formulieren, CTA's en landingspagina's die werkelijk converteren." },
];

const fitYes = [
  "Je bent MKB (10–150 medewerkers)",
  "Je hebt €500K+ jaaromzet",
  "Je hebt minstens €2K/maand marketingbudget",
  "Je begrijpt dat AI de spelregels verandert",
  "Je wilt expertise, geen standaard packages",
];

const fitNo = [
  "Startup zonder product, marktfit",
  "Geen budget voor serieuze marketing",
  "Op zoek naar goedkoop snel resultaat",
  "Je gelooft niet in AI",
];

const faq = [
  { q: "Werken jullie ook met kleine bedrijven?", a: "Ja, mits je minimaal €500K omzet hebt en €2K/maand marketingbudget. Daaronder is onze investering simpelweg te groot om eerlijk te zijn over het rendement." },
  { q: "Wat is het verschil met B. Analyzed?", a: "B. Analyzed is fullservice online marketing (SEO, Ads, content, links). Expose Your Brand heeft laser, focus op AI, zichtbaarheid (GEO + complementaire diensten). Beide worden door Britt beheerd." },
  { q: "Hoe snel zien we resultaat?", a: "Maand 1: audit, strategie en setup. Maand 2–3: eerste citaties zichtbaar. Maand 4+: solide momentum en opschaling. Realistisch: 12–16 weken voor voelbare vooruitgang." },
  { q: "Kunnen we langzaam starten?", a: "Niet echt. GEO werkt beter met momentum — maand 1 tot 3 zijn cruciaal. Half werk werkt tegen je." },
  { q: "Bieden jullie garantie?", a: "Voor GEO: binnen 90 dagen je bedrijf geciteerd in AI, of we werken gratis door. Voor andere diensten zijn performance, based opties bespreekbaar." },
  { q: "Hoe lang is de contractperiode?", a: "Maandelijks opzegbaar na de eerste 3 maanden — die zijn nodig om een eerlijke nulmeting van het resultaat te maken." },
];

function OverOnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Over Expose Your Brand"
        title={<>Pragmatisch, direct, <span className="text-molten italic">obsessed</span> met AI, zichtbaarheid.</>}
        description="Wij zijn Britt en Berry. Samen helpen we MKB, bedrijven zichtbaar worden in Google én waar het straks écht telt: ChatGPT, Gemini, Perplexity. Geen tussenlagen, maar direct contact met Britt of Berry."
      >
        <div className="flex flex-wrap gap-3">
          <CTAButton to="/contact" variant="molten">
            Plan een vrijblijvende kennismaking <ArrowRight className="size-4" />
          </CTAButton>
          <CTAButton to="/cases" variant="outline-navy">
            Bekijk onze cases
          </CTAButton>
        </div>
      </PageHero>

      {/* Stats strip */}
      <section className="py-12 px-6 -mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 ring-1 ring-black/5 flex items-center gap-4">
              <div className="font-display text-4xl font-semibold text-molten">{s.stat}</div>
              <div className="text-sm text-body-text">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Origin story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Onze missie"
            title={<>Eén missie sinds dag één: <span className="text-molten italic">zichtbare resultaten</span> die voor zich spreken.</>}
            description="Drie jaar geleden zaten we samen aan tafel. Beiden draaiden we een succesvol bureau. En we zagen iets veranderen: potentiële klanten zoeken steeds vaker niet in Google, maar vragen ChatGPT, Gemini of Perplexity. Bedrijven die daar zichtbaar zijn, groeien. De rest verdwijnt geruisloos."
          />
          <p className="mt-6 text-body-text leading-relaxed">
            We realiseerden ons dat 95% van de bureaus dit nog niet eens had opgemerkt — ze doen dezelfde dingen als vijf jaar geleden. Allemaal nuttig, maar onvolledig. Dus stopten we met ‘standaard packages’ en focusten ons laser, scherp op één ding: jouw bedrijf zichtbaar maken waar het straks telt. <span className="text-twilight font-medium">Zo werd Expose Your Brand geboren.</span>
          </p>
        </div>
      </section>

      {/* Lifestyle gallery */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-black/5">
            <img src={brittLaptop.url} alt="Britt aan het werk" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-black/5 md:translate-y-6">
            <img src={berrySmiling.url} alt="Berry in gesprek" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-black/5">
            <img src={brittPortrait.url} alt="Britt in het veld" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-black/5 md:translate-y-6">
            <img src={berryPortrait.url} alt="Berry portret" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* How we work — 4 traits */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Hoe wij werken"
            title={<>Vier eigenschappen die klanten <span className="text-molten italic">altijd</span> terughoren.</>}
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {traits.map((v) => (
              <div key={v.title} className="p-7 bg-white rounded-2xl ring-1 ring-black/5 hover:-translate-y-1 hover:ring-molten/30 transition-all">
                <div className="font-display text-3xl font-semibold text-molten mb-3">{v.num}</div>
                <h3 className="font-display font-semibold text-lg text-twilight mb-2">{v.title}</h3>
                <p className="text-sm text-body-text leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / route */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Onze route"
            title={<>Drie keer opnieuw nagedacht over <span className="text-molten italic">online zichtbaarheid.</span></>}
            description="SEO en SEA zijn niet ‘opeens slecht’ — ze zijn nog steeds essentieel. Maar AI, zichtbaarheid maakt vandaag het verschil tussen groei en stagnatie."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {timeline.map((t) => (
              <div key={t.year} className="p-7 bg-silver rounded-2xl ring-1 ring-black/5">
                <div className="font-display text-3xl font-semibold text-molten mb-2">{t.year}</div>
                <h4 className="font-display font-semibold text-twilight mb-2">{t.title}</h4>
                <p className="text-sm text-body-text leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialisms */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Specialisaties"
            title={<>Eén focus. <span className="text-molten italic">Vier disciplines</span> die elkaar versterken.</>}
            description="Bewust geen brede waaier met losse diensten. We werken diep op specialisaties die elkaar versterken — want technische SEO zonder content leidt nergens, content zonder GEO mist het AI-tijdperk, en groei zonder CRO blijft hangen in verkeer dat niet converteert."
          />
          <div className="grid md:grid-cols-2 gap-5 mt-12">
            {specialisms.map((s) => (
              <article key={s.t} className="p-7 bg-white rounded-2xl ring-1 ring-black/5">
                <Sparkle className="mb-4" />
                <h3 className="font-display font-semibold text-xl text-twilight mb-2">{s.t}</h3>
                <p className="text-sm text-body-text leading-relaxed">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / vision */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-twilight text-white rounded-[28px] p-10 md:p-14 ring-1 ring-black/5 relative overflow-hidden">
          <Sparkle className="absolute top-6 right-8 opacity-40" size="md" animate />
          <div className="text-molten font-bold text-xs uppercase tracking-widest mb-3">Onze visie</div>
          <p className="font-display text-2xl md:text-3xl leading-snug text-balance">
            “SEO, GEO en SEA zijn geen aparte werelden. Ze delen één fundament: een site waar potentiële klanten graag heen gaan, én waar machines — Google, ChatGPT, Perplexity — je merk graag citeren.”
          </p>
          <div className="mt-5 text-sm text-white/70">— Berry & Britt, Expose Your Brand</div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Team"
            title={<>Je vaste <span className="text-molten italic">aanspreekpunten.</span></>}
            description="Geen accountmanagers, geen tussenlagen. Je werkt rechtstreeks met de mensen die de strategie bouwen en uitvoeren."
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((m) => (
              <div key={m.name} className="p-6 bg-white rounded-2xl ring-1 ring-black/5 flex flex-col">
                <div className="aspect-[4/3] rounded-xl mb-5 overflow-hidden bg-silver">
                  <img src={m.photo} alt={`${m.name} — ${m.role}`} className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <h4 className="font-display font-semibold text-twilight text-xl">{m.name}</h4>
                <p className="text-xs uppercase tracking-widest text-molten font-bold mt-1 mb-3">{m.role}</p>
                <p className="text-sm leading-relaxed text-body-text">{m.bio}</p>
                <div className="mt-5 pt-5 border-t border-black/5 text-xs">
                  <span className="text-molten font-bold uppercase tracking-widest">Specialisme — </span>
                  <span className="text-twilight">{m.specialism}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit check */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Pasvorm, check"
            title={<>Passen wij <span className="text-molten italic">bij elkaar?</span></>}
            description="We zijn liever vooraf eerlijk. Voor wie zijn we wél, en voor wie zijn we niet de juiste partner?"
          />
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            <div className="p-8 rounded-2xl ring-1 ring-molten/30 bg-twilight text-white">
              <div className="text-molten font-bold text-xs uppercase tracking-widest mb-3">Goede match</div>
              <ul className="space-y-3">
                {fitYes.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className="size-5 text-molten shrink-0 mt-0.5" /> <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl ring-1 ring-black/5 bg-silver">
              <div className="text-twilight/60 font-bold text-xs uppercase tracking-widest mb-3">Minder geschikt</div>
              <ul className="space-y-3">
                {fitNo.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-body-text">
                    <X className="size-5 text-twilight/40 shrink-0 mt-0.5" /> <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-body-text italic">En dat is oké. Liever vooraf eerlijk dan halverwege ontevreden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title="Veelgestelde vragen over ons." />
          <div className="mt-8 space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="group p-6 bg-white rounded-xl ring-1 ring-black/5">
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

      {/* Kennismaking CTA */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto bg-twilight text-white rounded-[28px] p-10 md:p-14 ring-1 ring-black/5 relative overflow-hidden">
          <Sparkle className="absolute top-6 right-8 opacity-50" size="md" animate />
          <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <div className="text-molten font-bold text-xs uppercase tracking-widest mb-2">Kennismaking</div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold">30 minuten. Vrijblijvend. Geen sales, pitch.</h3>
              <p className="text-white/70 mt-2">Vertel waar je tegenaan loopt — wij denken meteen mee. Jij bepaalt, wij adviseren eerlijk.</p>
              <a href="mailto:groei@expose-your-brand.com" className="inline-flex items-center gap-2 mt-4 text-sm text-white/80 hover:text-white">
                <Mail className="size-4" /> groei@expose-your-brand.com
              </a>
            </div>
            <CTAButton to="/contact" variant="molten" size="lg">
              Plan een kennismaking <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}