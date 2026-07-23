import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TrendingUp, Search, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { Sparkle } from "@/components/site/Sparkle";
import { cn } from "@/lib/utils";
import { useLang, pick, T } from "@/lib/i18n";

export const Route = createFileRoute("/_site/cases")({
  head: () => ({
    meta: [
      { title: "GEO Cases — meetbare AI-zichtbaarheid | Expose Your Brand" },
      { name: "description", content: "Echte GEO cases met meetbaar resultaat: voor/na Visibility Score in ChatGPT, Gemini en Perplexity." },
      { property: "og:title", content: "GEO Cases" },
      { property: "og:description", content: "Klantverhalen: hoe zij aanbevolen werden door AI." },
      { property: "og:url", content: "/cases" },
    ],
    links: [{ rel: "canonical", href: "/cases" }],
  }),
  component: CasesPage,
});

type LS = { nl: string; en: string };
type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  sectorEn: string;
  challenge: LS;
  result: LS;
  before: number;
  after: number;
  highlight: LS;
  intro: LS;
  approach: LS;
  resultText: LS;
  kpis: { v: string; l: LS }[];
  rankings: LS[];
  geo: LS;
  closing: LS;
};

const cases: CaseStudy[] = [
  {
    slug: "meubel-outlet-weert",
    client: "Meubel & Outlet Weert",
    sector: "E-commerce / Retail",
    sectorEn: "E-commerce / Retail",
    challenge: {
      nl: "Sterk in de eigen winkel, maar buiten de regio en in AI-aanbevelingen nauwelijks zichtbaar.",
      en: "Strong inside their own store, but barely visible outside the region and in AI recommendations.",
    },
    result: {
      nl: "Genoemd door Perplexity, Gemini én ChatGPT bij vragen over meubels in Weert.",
      en: "Named by Perplexity, Gemini and ChatGPT for questions about furniture in Weert.",
    },
    before: 0,
    after: 67,
    highlight: {
      nl: "Top-positie in lokale meubelzoekopdrachten + aanbevolen door drie AI-assistenten.",
      en: "Top position for local furniture searches and recommended by three AI assistants.",
    },
    intro: {
      nl: "Meubel & Outlet Weert is een gevestigde naam in de regio: een ruime showroom met outlet-prijzen, design-meubels en een trouwe lokale klantenkring. Online lag daar een gat. De vindbaarheid leunde sterk op de eigen winkelnaam, terwijl de echte kansen zaten bij zoekers die nog geen winkel op het oog hadden — mensen die zoeken op 'meubelzaken in Weert', 'outlet meubels Limburg' of 'design eetkamerstoelen'. Tegelijk verschoof het zoekgedrag: steeds meer mensen vragen niet Google maar ChatGPT, Gemini of Perplexity om een aanbeveling. Wie daar niet genoemd wordt, bestaat in dat gesprek simpelweg niet.",
      en: "Meubel & Outlet Weert is a well-established name in the region: a spacious showroom with outlet prices, design furniture and a loyal local customer base. Online, however, there was a gap. Visibility leaned heavily on the store name itself, while the real opportunity sat with searchers who didn't yet have a store in mind — people searching for 'furniture stores in Weert', 'outlet furniture Limburg' or 'design dining chairs'. At the same time, search behaviour shifted: more and more people ask ChatGPT, Gemini or Perplexity for a recommendation instead of Google. If you're not mentioned there, you simply don't exist in that conversation.",
    },
    approach: {
      nl: "We hebben twee sporen tegelijk aangepakt. Voor klassieke SEO bouwden we de zichtbaarheid uit op de zoektermen die er commercieel toe doen: de lokale 'meubelzaak'-varianten, de outlet- en design-termen, en de specifieke productpagina's. Voor GEO — vindbaarheid in AI-antwoorden — zorgden we dat de informatie over de winkel, het assortiment en de unieke punten zo gestructureerd en consistent online staat dat AI-modellen Meubel & Outlet Weert oppikken en aanbevelen wanneer iemand naar meubels in Weert vraagt.",
      en: "We ran two tracks in parallel. For classic SEO we grew visibility on the searches that actually drive revenue: the local 'furniture store' variations, the outlet and design terms, and the specific product pages. For GEO — visibility inside AI answers — we made sure information about the store, the range and its unique selling points sits online in such a structured and consistent way that AI models pick up Meubel & Outlet Weert and recommend it whenever someone asks about furniture in Weert.",
    },
    resultText: {
      nl: "De site rankt inmiddels op 5.808 zoekwoorden in Google, waarvan 929 in de top 10 staan en 164 op positie 1. In totaal levert dat circa 1.484 organische bezoeken per maand op — bezoekers die de winkel anders niet had bereikt. In de aanloop naar deze meting stegen 391 zoekwoorden in positie.",
      en: "The site now ranks for 5,808 keywords on Google, with 929 in the top 10 and 164 in position 1. Combined that delivers around 1,484 organic visits a month — visitors the store would otherwise never have reached. In the run-up to this measurement, 391 keywords climbed in position.",
    },
    kpis: [
      { v: "5.808", l: { nl: "Zoekwoorden in Google", en: "Keywords on Google" } },
      { v: "929", l: { nl: "In de top 10", en: "In the top 10" } },
      { v: "164", l: { nl: "Op positie 1", en: "In position 1" } },
      { v: "1.484", l: { nl: "Organische bezoeken / maand", en: "Organic visits / month" } },
    ],
    rankings: [
      { nl: "Op 'meubel outlet weert' (480 zoekopdrachten/mnd) staat de site op positie 1 — goed voor zo'n 77 bezoeken per maand alleen op die ene term.", en: "For 'meubel outlet weert' (480 searches/mo) the site sits at position 1 — good for around 77 visits a month on that single term." },
      { nl: "'meubelzaken in Weert' klom van positie 2 naar 1.", en: "'meubelzaken in Weert' climbed from position 2 to 1." },
      { nl: "'meubelzaken Weert' en 'weert meubelzaak' schoven beide op naar positie 1.", en: "'meubelzaken Weert' and 'weert meubelzaak' both moved up to position 1." },
      { nl: "In de Google-zoekresultaten voor 'meubelzaak weert' staat meubeloutletweert.nl bovenaan de organische resultaten, vóór bekende regionale concurrenten.", en: "In Google's results for 'meubelzaak weert', meubeloutletweert.nl sits at the top of the organic listings, ahead of well-known regional competitors." },
    ],
    geo: {
      nl: "Bij 315 van de zoekwoorden verschijnt inmiddels een AI Overview in de zoekresultaten — precies het verschil tussen wél en niet meegenomen worden in het antwoord dat de zoeker te zien krijgt. En in de AI-zoekmachines zelf: Perplexity zet de winkel bovenaan zijn shortlist voor een goede prijs-kwaliteitverhouding in Weert, Gemini noemt de zaak als eerste bij design-meubels, en ChatGPT neemt hem mee in zijn overzicht van Weertse meubelwinkels.",
      en: "An AI Overview now appears in the search results for 315 of these keywords — exactly the difference between being included or excluded in the answer a searcher sees. And in the AI assistants themselves: Perplexity puts the store at the top of its shortlist for best value for money in Weert, Gemini names it first for design furniture, and ChatGPT includes it in its overview of furniture stores in Weert.",
    },
    closing: {
      nl: "Van een winkel die online vooral op de eigen naam dreef, naar een vindbare speler die opduikt zodra iemand — bij Google óf bij een AI-assistent — naar meubels in de regio zoekt.",
      en: "From a store that lived online mostly on its own name, to a discoverable player that shows up the moment someone — on Google or via an AI assistant — searches for furniture in the region.",
    },
  },
  {
    slug: "vogelvoerkopen",
    client: "Vogelvoerkopen.nl",
    sector: "E-commerce",
    sectorEn: "E-commerce",
    challenge: {
      nl: "ChatGPT noemde alleen de drie grote concurrenten — de webshop kwam niet voor.",
      en: "ChatGPT only named the three big competitors — the webshop wasn't in the conversation.",
    },
    result: {
      nl: "Genoemd in 67% van relevante prompts over vogelvoer kopen.",
      en: "Mentioned in 67% of relevant prompts about buying bird food.",
    },
    before: 0,
    after: 67,
    highlight: {
      nl: "Van onzichtbaar in AI-aanbevelingen naar standaard onderdeel van het gesprek.",
      en: "From invisible in AI recommendations to a default part of the conversation.",
    },
    intro: {
      nl: "Vogelvoerkopen.nl verkoopt hoogwaardig vogelvoer met dagelijks verse voorraad en uitstekende klantbeoordelingen. Het probleem zat niet in het product, maar in de zichtbaarheid op het beslissende moment. Wie aan een AI-assistent vroeg waar je het beste vogelvoer kunt kopen, kreeg vooral de drie grote, bekende namen terug. In een markt waar consumenten steeds vaker eerst een AI-aanbeveling vragen, betekende dat structureel gemiste aandacht — en gemiste klanten.",
      en: "Vogelvoerkopen.nl sells high-quality bird food with daily fresh stock and excellent customer reviews. The problem wasn't the product but visibility at the decisive moment. Anyone asking an AI assistant where to buy the best bird food mostly got the three big, familiar names back. In a market where consumers increasingly ask for an AI recommendation first, that meant structurally missed attention — and missed customers.",
    },
    approach: {
      nl: "We hebben de webshop op twee fronten tegelijk versterkt. Op SEO richtten we ons op de volle breedte van het vogelthema: niet alleen de directe koopzoekwoorden, maar ook de honderden informatieve zoekopdrachten rond vogelsoorten en voer, die nieuwsgierige tuinvogelliefhebbers naar de site trekken. Op GEO zorgden we dat Vogelvoerkopen.nl met heldere, consistente en goed gestructureerde informatie online staat — inclusief de onderscheidende punten zoals de verse voorraad, de hoge beoordeling en de gratis verzending — zodat AI-modellen de webshop herkennen en meenemen in hun antwoorden.",
      en: "We strengthened the webshop on two fronts at once. On SEO we targeted the full breadth of the bird theme: not just the direct commercial keywords, but also the hundreds of informational queries around bird species and feed that pull curious garden-bird lovers to the site. On GEO we made sure Vogelvoerkopen.nl is present online with clear, consistent and well-structured information — including the distinctive points like fresh daily stock, the high rating and free shipping — so AI models recognise the shop and include it in their answers.",
    },
    resultText: {
      nl: "De site rankt nu op maar liefst 19.299 zoekwoorden, met 5.226 daarvan in de top 10 en 1.771 op positie 1. Samen leveren die circa 4.868 organische bezoeken per maand op. In de meetperiode stegen 1.619 zoekwoorden in positie.",
      en: "The site now ranks for a remarkable 19,299 keywords, with 5,226 of them in the top 10 and 1,771 in position 1. Together they deliver around 4,868 organic visits a month. During the measurement period 1,619 keywords climbed in rank.",
    },
    kpis: [
      { v: "19.299", l: { nl: "Zoekwoorden in Google", en: "Keywords on Google" } },
      { v: "5.226", l: { nl: "In de top 10", en: "In the top 10" } },
      { v: "1.771", l: { nl: "Op positie 1", en: "In position 1" } },
      { v: "4.868", l: { nl: "Organische bezoeken / maand", en: "Organic visits / month" } },
    ],
    rankings: [
      { nl: "Op 'waar vogelvoer kopen online' staat de site bovenaan de organische resultaten, boven gespecialiseerde concurrenten.", en: "For 'waar vogelvoer kopen online' the site sits at the top of the organic results, above specialised competitors." },
      { nl: "'voer voor vogels' staat op positie 1.", en: "'voer voor vogels' ranks at position 1." },
      { nl: "'voer voor duiven' klom van positie 3 naar 1.", en: "'voer voor duiven' climbed from position 3 to 1." },
      { nl: "'strooivoer buitenvogels' maakte een sprong van positie 13 naar 1.", en: "'strooivoer buitenvogels' jumped from position 13 to 1." },
      { nl: "'vogelvoer' (2.900 zoekopdrachten/mnd) steeg van positie 8 naar 5 en is nu een van de grootste verkeersbronnen.", en: "'vogelvoer' (2,900 searches/mo) climbed from position 8 to 5 and is now one of the biggest traffic sources." },
      { nl: "Informatief: 'roodborstje' (10.800/mnd) levert ruim 100 bezoeken per maand op — bezoekers die kennismaken met het merk vóór ze iets nodig hebben.", en: "Informational: 'roodborstje' (10,800/mo) delivers over 100 visits a month — people who meet the brand before they need anything." },
    ],
    geo: {
      nl: "Bij 11.206 zoekwoorden draait inmiddels een AI Overview mee in de zoekresultaten. In de AI-assistenten zelf wordt Vogelvoerkopen.nl nu actief aanbevolen: Gemini zet de webshop in zijn rijtje van betrouwbaarste vogelvoer-shops van Nederland, en Claude noemt hem expliciet als snelle, goedbeoordeelde optie met gratis verzending.",
      en: "An AI Overview now runs alongside the search results for 11,206 keywords. In the AI assistants themselves Vogelvoerkopen.nl is actively recommended: Gemini places the shop in its list of the most trusted bird-food shops in the Netherlands, and Claude explicitly names it as a fast, highly-rated option with free shipping.",
    },
    closing: {
      nl: "Van onzichtbaar in AI-aanbevelingen — waar alleen de grote namen klonken — naar een webshop die zowel in Google als in de AI-assistenten standaard wordt meegenomen.",
      en: "From invisible in AI recommendations — where only the big names were heard — to a webshop that's now a default part of both Google and the AI assistants.",
    },
  },
];

function CasesPage() {
  const lang = useLang();
  const allLabel = pick(lang, { nl: "Alle", en: "All" });
  const sectors = [allLabel, ...Array.from(new Set(cases.map((c) => (lang === "en" ? c.sectorEn : c.sector))))];
  const [filter, setFilter] = useState<string>(allLabel);
  const visible = filter === allLabel ? cases : cases.filter((c) => (lang === "en" ? c.sectorEn : c.sector) === filter);

  return (
    <>
      <PageHero
        eyebrow={pick(lang, { nl: "Cases", en: "Cases" })}
        title={lang === "en"
          ? <>Results, <span className="text-molten italic">not promises.</span></>
          : <>Resultaten, <span className="text-molten italic">geen beloften.</span></>}
        description={pick(lang, {
          nl: "Twee echte klantverhalen met meetbare resultaten in Google én in AI-assistenten zoals ChatGPT, Gemini, Perplexity en Claude.",
          en: "Two real client stories with measurable results on Google and inside AI assistants like ChatGPT, Gemini, Perplexity and Claude.",
        })}
      />

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 flex-wrap mb-10">
            {sectors.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                  filter === s
                    ? "bg-twilight text-white"
                    : "bg-white ring-1 ring-black/5 text-body-text hover:ring-molten/30",
                )}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {visible.map((c) => (
              <a key={c.slug} href={`#${c.slug}`} className="group p-8 bg-white rounded-2xl ring-1 ring-black/5 hover:ring-molten/30 hover:-translate-y-1 transition-all block">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-molten mb-2">{lang === "en" ? c.sectorEn : c.sector}</div>
                    <h3 className="font-display font-semibold text-xl text-twilight">{c.client}</h3>
                  </div>
                  <Sparkle />
                </div>
                <p className="text-sm mb-6 min-h-[3rem]">{pick(lang, c.challenge)}</p>
                <div className="grid grid-cols-2 gap-4 p-4 bg-silver rounded-xl mb-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-body-text mb-1"><T nl="Voor (AI-vermeldingen)" en="Before (AI mentions)" /></div>
                    <div className="font-display text-2xl font-semibold text-twilight">{c.before}<span className="text-sm">%</span></div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-molten mb-1"><T nl="Na" en="After" /></div>
                    <div className="font-display text-2xl font-semibold text-molten">{c.after}<span className="text-sm">%</span></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-twilight font-medium">
                  <TrendingUp className="size-4 text-molten" /> {pick(lang, c.result)}
                </div>
                <div className="mt-6 pt-6 border-t border-black/5 text-xs font-bold uppercase tracking-wider text-molten inline-flex items-center gap-1">
                  <T nl="Lees volledige case ↓" en="Read full case ↓" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {cases.map((c, idx) => (
        <section
          key={c.slug}
          id={c.slug}
          className={cn("py-20 px-6 scroll-mt-24", idx % 2 === 0 ? "bg-white" : "bg-silver")}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-[10px] font-bold uppercase tracking-widest text-molten mb-3">
              <T nl="Case" en="Case" /> {idx + 1} — {lang === "en" ? c.sectorEn : c.sector}
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-twilight mb-4">
              {c.client}
            </h2>
            <p className="text-lg text-body-text leading-relaxed mb-10">{pick(lang, c.highlight)}</p>

            <div className="grid sm:grid-cols-4 gap-3 mb-12">
              {c.kpis.map((k) => (
                <div key={k.l.nl} className="p-5 bg-twilight text-white rounded-xl text-center">
                  <div className="font-display text-2xl font-semibold text-molten mb-1">{k.v}</div>
                  <div className="text-xs text-white/70">{pick(lang, k.l)}</div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-twilight mb-3"><T nl="De uitgangssituatie" en="Starting point" /></h3>
                <p className="leading-relaxed text-body-text">{pick(lang, c.intro)}</p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-twilight mb-3"><T nl="De aanpak" en="Our approach" /></h3>
                <p className="leading-relaxed text-body-text">{pick(lang, c.approach)}</p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-twilight mb-3"><T nl="Het resultaat in Google" en="The result on Google" /></h3>
                <p className="leading-relaxed text-body-text mb-5">{pick(lang, c.resultText)}</p>
                <ul className="space-y-3">
                  {c.rankings.map((r) => (
                    <li key={r.nl} className="flex gap-3 items-start">
                      <Search className="size-4 shrink-0 mt-1 text-molten" />
                      <span className="text-sm text-twilight">{pick(lang, r)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 md:p-8 bg-twilight text-white rounded-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="size-5 text-molten" />
                  <h3 className="font-display text-xl font-semibold"><T nl="Het resultaat in AI-assistenten" en="The result inside AI assistants" /></h3>
                </div>
                <p className="leading-relaxed text-white/90">{pick(lang, c.geo)}</p>
              </div>

              <div className="border-l-4 border-molten pl-5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-molten mb-2"><T nl="De kern" en="The takeaway" /></div>
                <p className="text-lg text-twilight leading-relaxed">{pick(lang, c.closing)}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <PreFooterCTA />
    </>
  );
}