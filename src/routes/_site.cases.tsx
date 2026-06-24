import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TrendingUp, Check, Search, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { Sparkle } from "@/components/site/Sparkle";
import { cn } from "@/lib/utils";

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

type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  challenge: string;
  result: string;
  before: number;
  after: number;
  highlight: string;
  intro: string;
  approach: string;
  resultText: string;
  kpis: { v: string; l: string }[];
  rankings: string[];
  geo: string;
  closing: string;
};

const cases: CaseStudy[] = [
  {
    slug: "meubel-outlet-weert",
    client: "Meubel & Outlet Weert",
    sector: "E-commerce / Retail",
    challenge: "Sterk in de eigen winkel, maar buiten de regio en in AI-aanbevelingen nauwelijks zichtbaar.",
    result: "Genoemd door Perplexity, Gemini én ChatGPT bij vragen over meubels in Weert.",
    before: 0,
    after: 67,
    highlight: "Top-positie in lokale meubelzoekopdrachten + aanbevolen door drie AI-assistenten.",
    intro:
      "Meubel & Outlet Weert is een gevestigde naam in de regio: een ruime showroom met outlet-prijzen, design-meubels en een trouwe lokale klantenkring. Online lag daar een gat. De vindbaarheid leunde sterk op de eigen winkelnaam, terwijl de echte kansen zaten bij zoekers die nog geen winkel op het oog hadden — mensen die zoeken op 'meubelzaken in Weert', 'outlet meubels Limburg' of 'design eetkamerstoelen'. Tegelijk verschoof het zoekgedrag: steeds meer mensen vragen niet Google maar ChatGPT, Gemini of Perplexity om een aanbeveling. Wie daar niet genoemd wordt, bestaat in dat gesprek simpelweg niet.",
    approach:
      "We hebben twee sporen tegelijk aangepakt. Voor klassieke SEO bouwden we de zichtbaarheid uit op de zoektermen die er commercieel toe doen: de lokale 'meubelzaak'-varianten, de outlet- en design-termen, en de specifieke productpagina's. Voor GEO — vindbaarheid in AI-antwoorden — zorgden we dat de informatie over de winkel, het assortiment en de unieke punten zo gestructureerd en consistent online staat dat AI-modellen Meubel & Outlet Weert oppikken en aanbevelen wanneer iemand naar meubels in Weert vraagt.",
    resultText:
      "De site rankt inmiddels op 5.808 zoekwoorden in Google, waarvan 929 in de top 10 staan en 164 op positie 1. In totaal levert dat circa 1.484 organische bezoeken per maand op — bezoekers die de winkel anders niet had bereikt. In de aanloop naar deze meting stegen 391 zoekwoorden in positie.",
    kpis: [
      { v: "5.808", l: "Zoekwoorden in Google" },
      { v: "929", l: "In de top 10" },
      { v: "164", l: "Op positie 1" },
      { v: "1.484", l: "Organische bezoeken / maand" },
    ],
    rankings: [
      "Op 'meubel outlet weert' (480 zoekopdrachten/mnd) staat de site op positie 1 — goed voor zo'n 77 bezoeken per maand alleen op die ene term.",
      "'meubelzaken in Weert' klom van positie 2 naar 1.",
      "'meubelzaken Weert' en 'weert meubelzaak' schoven beide op naar positie 1.",
      "In de Google-zoekresultaten voor 'meubelzaak weert' staat meubeloutletweert.nl bovenaan de organische resultaten, vóór bekende regionale concurrenten.",
    ],
    geo:
      "Bij 315 van de zoekwoorden verschijnt inmiddels een AI Overview in de zoekresultaten — precies het verschil tussen wél en niet meegenomen worden in het antwoord dat de zoeker te zien krijgt. En in de AI-zoekmachines zelf: Perplexity zet de winkel bovenaan zijn shortlist voor een goede prijs-kwaliteitverhouding in Weert, Gemini noemt de zaak als eerste bij design-meubels, en ChatGPT neemt hem mee in zijn overzicht van Weertse meubelwinkels.",
    closing:
      "Van een winkel die online vooral op de eigen naam dreef, naar een vindbare speler die opduikt zodra iemand — bij Google óf bij een AI-assistent — naar meubels in de regio zoekt.",
  },
  {
    slug: "vogelvoerkopen",
    client: "Vogelvoerkopen.nl",
    sector: "E-commerce",
    challenge: "ChatGPT noemde alleen de drie grote concurrenten — de webshop kwam niet voor.",
    result: "Genoemd in 67% van relevante prompts over vogelvoer kopen.",
    before: 0,
    after: 67,
    highlight: "Van onzichtbaar in AI-aanbevelingen naar standaard onderdeel van het gesprek.",
    intro:
      "Vogelvoerkopen.nl verkoopt hoogwaardig vogelvoer met dagelijks verse voorraad en uitstekende klantbeoordelingen. Het probleem zat niet in het product, maar in de zichtbaarheid op het beslissende moment. Wie aan een AI-assistent vroeg waar je het beste vogelvoer kunt kopen, kreeg vooral de drie grote, bekende namen terug. In een markt waar consumenten steeds vaker eerst een AI-aanbeveling vragen, betekende dat structureel gemiste aandacht — en gemiste klanten.",
    approach:
      "We hebben de webshop op twee fronten tegelijk versterkt. Op SEO richtten we ons op de volle breedte van het vogelthema: niet alleen de directe koopzoekwoorden, maar ook de honderden informatieve zoekopdrachten rond vogelsoorten en voer, die nieuwsgierige tuinvogelliefhebbers naar de site trekken. Op GEO zorgden we dat Vogelvoerkopen.nl met heldere, consistente en goed gestructureerde informatie online staat — inclusief de onderscheidende punten zoals de verse voorraad, de hoge beoordeling en de gratis verzending — zodat AI-modellen de webshop herkennen en meenemen in hun antwoorden.",
    resultText:
      "De site rankt nu op maar liefst 19.299 zoekwoorden, met 5.226 daarvan in de top 10 en 1.771 op positie 1. Samen leveren die circa 4.868 organische bezoeken per maand op. In de meetperiode stegen 1.619 zoekwoorden in positie.",
    kpis: [
      { v: "19.299", l: "Zoekwoorden in Google" },
      { v: "5.226", l: "In de top 10" },
      { v: "1.771", l: "Op positie 1" },
      { v: "4.868", l: "Organische bezoeken / maand" },
    ],
    rankings: [
      "Op 'waar vogelvoer kopen online' staat de site bovenaan de organische resultaten, boven gespecialiseerde concurrenten.",
      "'voer voor vogels' staat op positie 1.",
      "'voer voor duiven' klom van positie 3 naar 1.",
      "'strooivoer buitenvogels' maakte een sprong van positie 13 naar 1.",
      "'vogelvoer' (2.900 zoekopdrachten/mnd) steeg van positie 8 naar 5 en is nu een van de grootste verkeersbronnen.",
      "Informatief: 'roodborstje' (10.800/mnd) levert ruim 100 bezoeken per maand op — bezoekers die kennismaken met het merk vóór ze iets nodig hebben.",
    ],
    geo:
      "Bij 11.206 zoekwoorden draait inmiddels een AI Overview mee in de zoekresultaten. In de AI-assistenten zelf wordt Vogelvoerkopen.nl nu actief aanbevolen: Gemini zet de webshop in zijn rijtje van betrouwbaarste vogelvoer-shops van Nederland, en Claude noemt hem expliciet als snelle, goedbeoordeelde optie met gratis verzending.",
    closing:
      "Van onzichtbaar in AI-aanbevelingen — waar alleen de grote namen klonken — naar een webshop die zowel in Google als in de AI-assistenten standaard wordt meegenomen.",
  },
];

const sectors = ["Alle", ...Array.from(new Set(cases.map((c) => c.sector)))];

function CasesPage() {
  const [filter, setFilter] = useState<string>("Alle");
  const visible = filter === "Alle" ? cases : cases.filter((c) => c.sector === filter);

  return (
    <>
      <PageHero
        eyebrow="Cases"
        title={<>Resultaten, <span className="text-molten italic">geen beloften.</span></>}
        description="Twee echte klantverhalen met meetbare resultaten in Google én in AI-assistenten zoals ChatGPT, Gemini, Perplexity en Claude."
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
                    <div className="text-[10px] font-bold uppercase tracking-widest text-molten mb-2">{c.sector}</div>
                    <h3 className="font-display font-semibold text-xl text-twilight">{c.client}</h3>
                  </div>
                  <Sparkle />
                </div>
                <p className="text-sm mb-6 min-h-[3rem]">{c.challenge}</p>
                <div className="grid grid-cols-2 gap-4 p-4 bg-silver rounded-xl mb-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-body-text mb-1">Voor (AI-vermeldingen)</div>
                    <div className="font-display text-2xl font-semibold text-twilight">{c.before}<span className="text-sm">%</span></div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-molten mb-1">Na</div>
                    <div className="font-display text-2xl font-semibold text-molten">{c.after}<span className="text-sm">%</span></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-twilight font-medium">
                  <TrendingUp className="size-4 text-molten" /> {c.result}
                </div>
                <div className="mt-6 pt-6 border-t border-black/5 text-xs font-bold uppercase tracking-wider text-molten inline-flex items-center gap-1">
                  Lees volledige case ↓
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
              Case {idx + 1} — {c.sector}
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-twilight mb-4">
              {c.client}
            </h2>
            <p className="text-lg text-body-text leading-relaxed mb-10">{c.highlight}</p>

            <div className="grid sm:grid-cols-4 gap-3 mb-12">
              {c.kpis.map((k) => (
                <div key={k.l} className="p-5 bg-twilight text-white rounded-xl text-center">
                  <div className="font-display text-2xl font-semibold text-molten mb-1">{k.v}</div>
                  <div className="text-xs text-white/70">{k.l}</div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-twilight mb-3">De uitgangssituatie</h3>
                <p className="leading-relaxed text-body-text">{c.intro}</p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-twilight mb-3">De aanpak</h3>
                <p className="leading-relaxed text-body-text">{c.approach}</p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-twilight mb-3">Het resultaat in Google</h3>
                <p className="leading-relaxed text-body-text mb-5">{c.resultText}</p>
                <ul className="space-y-3">
                  {c.rankings.map((r) => (
                    <li key={r} className="flex gap-3 items-start">
                      <Search className="size-4 shrink-0 mt-1 text-molten" />
                      <span className="text-sm text-twilight">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 md:p-8 bg-twilight text-white rounded-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="size-5 text-molten" />
                  <h3 className="font-display text-xl font-semibold">Het resultaat in AI-assistenten</h3>
                </div>
                <p className="leading-relaxed text-white/90">{c.geo}</p>
              </div>

              <div className="border-l-4 border-molten pl-5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-molten mb-2">De kern</div>
                <p className="text-lg text-twilight leading-relaxed">{c.closing}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <PreFooterCTA />
    </>
  );
}