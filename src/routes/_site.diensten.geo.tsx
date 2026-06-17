import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Sparkles, Quote, Database, BarChart3, Building2, ShoppingBag, MapPin, Briefcase } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { cn } from "@/lib/utils";
import geoEcosystem from "@/assets/geo-ecosystem-branded.png.asset.json";

export const Route = createFileRoute("/_site/diensten/geo")({
  head: () => ({
    meta: [
      { title: "GEO — Vindbaar in ChatGPT, Perplexity & Gemini | Expose Your Brand" },
      { name: "description", content: "Generative Engine Optimization: word geciteerd als bron door ChatGPT, Perplexity, Gemini en Claude. Een meetbaar 6-stappenplan voor merk-zichtbaarheid in AI-antwoorden." },
      { property: "og:title", content: "GEO — Vindbaar in ChatGPT, Perplexity & Gemini | Expose Your Brand" },
      { property: "og:description", content: "Word de bron die AI citeert — met een meetbaar 6-stappen GEO-traject." },
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

const heroStats = [
  { stat: "36%", label: "van zoekopdrachten via AI in 2026 (NL)" },
  { stat: "22+", label: "grote LLM's om in te ranken" },
  { stat: "7.8×", label: "hogere doorklik met bronvermelding" },
];

const visions = [
  {
    num: "01",
    title: "LLM's belonen autoriteit, niet keywords",
    body: "Pure keyword-density werkt niet meer. AI-tools beoordelen content op coherentie, expertise en hoe vaak je elders genoemd wordt. Brand-building krijgt voorrang.",
  },
  {
    num: "02",
    title: "Geen bronvermelding zonder bronwaarde",
    body: "LLM's citeren niet wat ze nergens vinden. Originele data, eigen onderzoek en uniek perspectief zijn de sleutels. Niet meer overschrijven wat al bestaat.",
  },
  {
    num: "03",
    title: "Meten gaat anders dan rankings tracken",
    body: "Je kunt geen positie meten in een chat-antwoord. Mention-share, citatie-frequentie en sentiment in LLM-output worden de nieuwe KPI's.",
  },
];

const segments = [
  {
    key: "b2b",
    icon: Building2,
    title: "B2B-bedrijven",
    sub: "Decision-makers gebruiken AI voor research en vergelijken",
    prio: "ChatGPT",
    bars: [
      { name: "ChatGPT", v: 52 },
      { name: "Perplexity", v: 28 },
      { name: "Claude", v: 12 },
      { name: "Gemini", v: 6 },
      { name: "AI Overviews", v: 2 },
    ],
    focus: [
      "Diepe vergelijkings-content publiceren",
      "Klantcases met meetbare resultaten",
      "Gastposts op autoriteits-blogs in je niche",
      "Originele data en benchmarks",
    ],
    insight: "B2B-kopers vragen LLM's eerder om \"vergelijk X en Y\" dan om \"wat is de beste X\". Optimaliseer voor vergelijkings-queries, niet alleen brand-queries.",
  },
  {
    key: "ecom",
    icon: ShoppingBag,
    title: "E-commerce",
    sub: "Productzoekers gebruiken Google AI Overviews",
    prio: "AI Overviews",
    bars: [
      { name: "AI Overviews", v: 48 },
      { name: "Gemini", v: 22 },
      { name: "ChatGPT", v: 18 },
      { name: "Perplexity", v: 8 },
      { name: "Claude", v: 4 },
    ],
    focus: [
      "Product- en review-schema impeccable",
      "FAQ-blokken voor productvragen",
      "\"Beste X voor Y\"-content uitwerken",
      "Merchant feed-optimalisatie voor Gemini",
    ],
    insight: "AI Overviews tonen producten met goede schema-markup direct in de SERP. Technische product-data is je grootste hefboom.",
  },
  {
    key: "local",
    icon: MapPin,
    title: "Lokale dienstverlening",
    sub: "\"Bij mij in de buurt\"-zoekers",
    prio: "AI Overviews",
    bars: [
      { name: "AI Overviews", v: 65 },
      { name: "Gemini", v: 18 },
      { name: "ChatGPT", v: 12 },
      { name: "Perplexity", v: 3 },
      { name: "Claude", v: 2 },
    ],
    focus: [
      "Google Business Profile vol uitbouwen",
      "LocalBusiness-schema",
      "Buurt- en wijkspecifieke landingspagina's",
      "Reviews + Q&A actief beheren",
    ],
    insight: "Voor lokaal is klassiek lokaal SEO 80% van het werk. Pure GEO-investering komt op de tweede plek — Google's ecosysteem domineert hier.",
  },
  {
    key: "enterprise",
    icon: Briefcase,
    title: "Enterprise",
    sub: "Complex onderzoek + Claude als zakelijke tool",
    prio: "Claude + ChatGPT",
    bars: [
      { name: "Claude", v: 38 },
      { name: "ChatGPT", v: 35 },
      { name: "Perplexity", v: 18 },
      { name: "Gemini", v: 6 },
      { name: "AI Overviews", v: 3 },
    ],
    focus: [
      "Whitepapers en research-reports",
      "Thought-leadership van leiderschap",
      "Vakblad-publicaties",
      "Authoritatieve domains die LLM's vertrouwen",
    ],
    insight: "Claude wint terrein binnen enterprise omdat het beter omgaat met lange documenten. Investeer in long-form content waar Claude graag uit citeert.",
  },
] as const;

const steps = [
  {
    num: "01",
    phase: "Fase 1",
    title: "Baseline-meting",
    short: "Waar sta je nu in elke LLM?",
    desc: "Voordat we iets veranderen leggen we vast hoe vaak en hoe je merk nu opduikt in elk groot LLM. We meten citatie-frequentie, mention-context (positief/neutraal/negatief) en concurrent-positie per platform.",
    bullets: [
      "Baseline-rapport met citatie-frequentie per LLM.",
      "Concurrent-benchmark: wie wordt vaker geciteerd dan jij?",
      "Top-50 zoekqueries waar je merk wel/niet verschijnt.",
      "Sentiment-analyse van mentions.",
    ],
    meta: { Duur: "2 weken", Tools: "Profound · custom prompts · Otterly" },
  },
  {
    num: "02",
    phase: "Fase 1",
    title: "Content-audit",
    short: "Welke pagina's zijn citeerbaar?",
    desc: "We doorlichten je bestaande content op LLM-vriendelijkheid. Welke pagina's hebben de juiste structuur om geciteerd te worden? Welke missen de basics?",
    bullets: [
      "50–200 pagina's gescoord op citation-readiness.",
      "Quick-wins lijst: pagina's die met kleine fixes direct beter scoren.",
      "Content-gap analyse per niche.",
      "Prioriteringsmatrix voor revisie-werk.",
    ],
    meta: { Duur: "3 weken", Tools: "Screaming Frog · custom audit-tools" },
  },
  {
    num: "03",
    phase: "Fase 2",
    title: "Structuur & schema",
    short: "De technische GEO-laag",
    desc: "Technische laag implementeren die LLM's helpt je content correct te interpreteren. llms.txt, FAQ-schema, Article-schema en Q&A-blokken op alle kernpagina's.",
    bullets: [
      "llms.txt-bestand correct geïmplementeerd op je domein.",
      "JSON-LD schema uitgerold op pillars.",
      "Q&A-blokken toegevoegd aan top-30 pagina's.",
      "Schema-validatie via Google Rich Results en Schema.org tester.",
    ],
    meta: { Duur: "4 weken", Output: "Implementatie + validatie" },
  },
  {
    num: "04",
    phase: "Fase 2",
    title: "Originele data publiceren",
    short: "Word zelf de bron",
    desc: "De #1 manier om geciteerd te worden: zorg dat jíj de bron bent. Eigen onderzoek, benchmarks of cases die nergens anders bestaan.",
    bullets: [
      "Onderzoeksopzet: vraagstelling, methodologie, sample.",
      "Dataverzameling en analyse.",
      "Publicatie met cijfers, grafieken en heldere conclusies.",
      "PR-pitch naar vakmedia voor eerste bronvermeldingen.",
    ],
    meta: { Duur: "8–12 weken per onderzoek", Frequentie: "Min. 2× per jaar" },
  },
  {
    num: "05",
    phase: "Fase 3",
    title: "Brand-signals versterken",
    short: "Mention-share opbouwen",
    desc: "LLM's halen training-data uit het web. Hoe vaker je merk op autoritaire bronnen genoemd wordt, hoe vaker je wordt geciteerd.",
    bullets: [
      "Gastbijdragen op 3–5 autoritaire vakplatforms per kwartaal.",
      "PR-campagnes voor branche-relevante media.",
      "Wikipedia-aanwezigheid (waar toepasbaar).",
      "Strategische backlinks van high-trust domains.",
    ],
    meta: { Duur: "Doorlopend", Maandbudget: "Afhankelijk van scope" },
  },
  {
    num: "06",
    phase: "Fase 3",
    title: "Monitoring & iteratie",
    short: "Wekelijks meten, maandelijks bijsturen",
    desc: "GEO is geen set-and-forget. Wekelijkse tracking, maandelijkse review en kwartaal-aanpassing van strategie op basis van data.",
    bullets: [
      "Wekelijks dashboard met citatie-trends per LLM.",
      "Maandelijkse stand-up met learnings en next steps.",
      "Kwartaal-strategiereview: wat aanpassen?",
      "Concurrent-monitoring: wie pakt jouw plek af?",
    ],
    meta: { Ritme: "Wekelijks meten · maandelijks reviewen", Tools: "Profound · AthenaHQ · custom dashboards" },
  },
] as const;

const results = [
  { v: "+38%", l: "Citatie-frequentie in LLM's na 6 mnd" },
  { v: "3,4×", l: "Brand-mentions in AI-output" },
  { v: "+24%", l: "Referral-traffic vanuit AI-bronnen" },
  { v: "10wk", l: "Eerste meetbaar resultaat" },
];

const cases = [
  { client: "Cliënt A · B2B SaaS", title: "Van onzichtbaar naar primary source in ChatGPT", m1: "+412%", l1: "citaties in ChatGPT", m2: "8 mnd", l2: "trajectduur", m3: "#1", l3: "source op kerntopic" },
  { client: "Cliënt B · zakelijke dienstverlening", title: "Brand-mentions verviervoudigd in Perplexity", m1: "4,1×", l1: "brand-mentions", m2: "6 mnd", l2: "trajectduur", m3: "+62%", l3: "AI referral-traffic" },
  { client: "Cliënt C · e-commerce", title: "AI Overviews-dominantie op productqueries", m1: "+278%", l1: "AI-clicks", m2: "9 mnd", l2: "trajectduur", m3: "32", l3: "queries als bron" },
];

const forWho = [
  "Bedrijven waarvan klanten AI gebruiken in hun research-fase.",
  "Sectoren met hoge LTV: klinieken, advocatuur, vermogensbeheer, IT, SaaS.",
  "Ondernemers die niet willen wachten tot de concurrent er staat.",
];

function GeoPage() {
  return (
    <>
      <PageHero
        eyebrow="GEO · Generative Engine Optimization"
        title={<>Vindbaar in <span className="text-molten italic">ChatGPT</span>, Perplexity en Gemini.</>}
        description="GEO is geen toekomstmuziek. In 2026 verloopt een groeiend deel van alle zoekopdrachten via AI-tools. Wij zorgen dat jouw merk verschijnt in de bronvermeldingen van de grote LLM's — niet als ranking, maar als antwoord."
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-3">
            <CTAButton to="/contact" variant="molten">
              Vraag gratis GEO-audit aan <ArrowRight className="size-4" />
            </CTAButton>
          </div>

          <img
            src={geoEcosystem.url}
            alt="GEO-ecosysteem: Expose Your Brand als bron in ChatGPT, Perplexity, Gemini, AI Overviews en Claude"
            width={1344}
            height={768}
            className="w-full rounded-2xl ring-1 ring-black/5 shadow-2xl shadow-twilight/10 bg-white"
          />
        </div>
      </PageHero>

      <ForWhoSection />

      {/* Stats strip */}
      <section className="py-12 px-6 -mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {heroStats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 ring-1 ring-black/5 flex items-center gap-4">
              <div className="font-display text-4xl font-semibold text-molten">{s.stat}</div>
              <div className="text-sm text-body-text">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <WhatIsGeoSection />
      <SegmentsSection />
      <VisionSection />
      <StepsSection />
      <ResultsSection />
      <CasesSection />

      <PreFooterCTA />
    </>
  );
}

function ForWhoSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl p-8 md:p-10 ring-1 ring-black/5">
          <div className="text-molten font-bold text-xs uppercase tracking-widest mb-3">Voor wie</div>
          <h2 className="font-display text-3xl text-twilight font-semibold mb-6">Geschikt als…</h2>
          <ul className="space-y-3">
            {forWho.map((w) => (
              <li key={w} className="flex gap-3 items-start text-twilight">
                <Check className="size-5 text-molten shrink-0 mt-0.5" /> <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-molten font-bold text-xs uppercase tracking-widest mb-3">Wat je krijgt</div>
          <h2 className="font-display text-3xl text-twilight font-semibold mb-6">Concreet en meetbaar.</h2>
          <ul className="space-y-3">
            {[
              "Nulmeting van je brand-visibility in alle grote LLM's.",
              "Topical map op basis van échte prompts van je doelgroep.",
              "Technische GEO-stack: llms.txt, schema, Q&A-blokken.",
              "Originele data en PR-aanpak voor brand-mentions.",
              "Maandelijkse Share of LLM Voice-rapportage.",
            ].map((b) => (
              <li key={b} className="flex gap-3 items-start text-twilight">
                <span className="shrink-0 mt-1 size-5 rounded-full bg-molten/10 text-molten flex items-center justify-center">
                  <Check className="size-3" />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function WhatIsGeoSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">01 · wat is geo?</div>
        <SectionHeader
          title={<>Optimaliseren voor <span className="text-molten italic">AI-zoekmachines</span>, niet alleen Google.</>}
          description="GEO draait om zichtbaarheid in de output van AI-tools. Niet alleen op posities ranken, maar als bron geciteerd worden in de antwoorden die LLM's genereren. Google is niet verdwenen — er is een tweede gevechtsterrein bijgekomen."
        />

        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          {/* Mock ChatGPT answer */}
          <div className="rounded-2xl ring-1 ring-black/5 bg-silver p-6 md:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-black/5 mb-5">
              <div className="flex items-center gap-2">
                <span className="size-7 rounded-md bg-twilight text-white flex items-center justify-center font-display text-sm">G</span>
                <span className="text-xs font-display font-semibold text-twilight">ChatGPT</span>
                <span className="text-[10px] text-body-text">· OpenAI</span>
              </div>
              <span className="text-[10px] font-bold text-molten tracking-widest">LIVE</span>
            </div>
            <div className="text-sm text-twilight font-medium mb-3">Wat is GEO en hoe verschilt het van klassieke SEO?</div>
            <p className="text-sm text-body-text leading-relaxed mb-5">
              Generative Engine Optimization (GEO) is het optimaliseren van content zodat deze geciteerd wordt door AI-tools zoals ChatGPT en Perplexity. Anders dan klassieke SEO — waar je op posities in Google rankt — draait GEO om <em className="text-twilight not-italic font-semibold">bronvermelding in AI-antwoorden</em>.
            </p>
            <div className="rounded-xl bg-white p-4 ring-1 ring-black/5 flex items-start gap-3">
              <span className="shrink-0 size-8 rounded-md bg-molten/10 text-molten flex items-center justify-center font-display text-sm">E</span>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-widest text-body-text">Bron</div>
                <div className="text-sm font-display font-semibold text-twilight">exposeyourbrand.nl/diensten/geo</div>
                <div className="text-xs text-body-text mt-0.5">Onze visie op Generative Engine Optimization</div>
              </div>
            </div>
          </div>

          {/* Mock Perplexity answer */}
          <div className="rounded-2xl ring-1 ring-black/5 bg-silver p-6 md:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-black/5 mb-5">
              <div className="flex items-center gap-2">
                <span className="size-7 rounded-md bg-twilight text-white flex items-center justify-center font-display text-sm">P</span>
                <span className="text-xs font-display font-semibold text-twilight">Perplexity</span>
                <span className="text-[10px] text-body-text">· Bronnen-first AI</span>
              </div>
              <span className="text-[10px] font-bold text-molten tracking-widest">LIVE</span>
            </div>
            <div className="text-sm text-twilight font-medium mb-3">Wat houdt Generative Engine Optimization in?</div>
            <p className="text-sm text-body-text leading-relaxed mb-5">
              GEO is een nieuwe discipline binnen digital marketing die zich richt op zichtbaarheid in AI-gedreven zoekmachines<sup className="text-molten">1</sup>. Waar SEO draait om hogere posities in Google, gaat GEO over het verschijnen in de antwoorden van LLM's<sup className="text-molten">2</sup>. De fundamenten — autoriteit, originele content en structured data — wegen zwaarder dan ooit<sup className="text-molten">1,3</sup>.
            </p>
            <div className="text-[10px] uppercase tracking-widest text-body-text mb-2">Bronnen · 3</div>
            <div className="space-y-2">
              {[
                { n: 1, dom: "exposeyourbrand.nl", t: "Onze visie op GEO" },
                { n: 2, dom: "searchengineland.com", t: "What is GEO?" },
                { n: 3, dom: "ahrefs.com", t: "AI Search Optimization" },
              ].map((s) => (
                <div key={s.n} className="flex items-start gap-3 text-xs">
                  <span className="shrink-0 size-5 rounded-full bg-molten/10 text-molten flex items-center justify-center font-bold">{s.n}</span>
                  <div className="min-w-0">
                    <div className="font-display font-semibold text-twilight">{s.dom}</div>
                    <div className="text-body-text">{s.t}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SegmentsSection() {
  const [active, setActive] = useState(0);
  const seg = segments[active];
  const Icon = seg.icon;
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">02 · llm-segmentatie</div>
        <SectionHeader
          title={<>Niet elke LLM is voor elk <span className="text-molten italic">marktsegment</span> even belangrijk.</>}
          description="Onze aanpak begint altijd met segmentatie. Een B2B-bedrijf moet anders prioriteren dan een lokale dienstverlener. Hieronder de dominante LLM's per markttype, gebaseerd op gemeten gebruik bij onze klanten."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {segments.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setActive(i)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold transition-all ring-1",
                i === active ? "bg-twilight text-white ring-twilight" : "bg-white text-twilight ring-black/5 hover:ring-molten/30",
              )}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-2xl p-8 ring-1 ring-black/5">
            <div className="flex items-start gap-4 mb-2">
              <div className="shrink-0 size-12 rounded-xl bg-molten/10 text-molten flex items-center justify-center">
                <Icon className="size-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-twilight">{seg.title}</h3>
                <p className="text-sm text-body-text">{seg.sub}</p>
              </div>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-molten mb-5">★ prio: {seg.prio}</div>
            <div className="space-y-3">
              {seg.bars.map((b) => (
                <div key={b.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-twilight">{b.name}</span>
                    <span className="font-bold text-twilight">{b.v}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-silver overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-molten to-molten/70 rounded-full" style={{ width: `${b.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-silver rounded-2xl p-8 ring-1 ring-black/5">
            <div className="text-xs font-bold uppercase tracking-widest text-molten mb-2">Onze aanpak</div>
            <h3 className="font-display text-2xl font-semibold text-twilight mb-5">Strategie voor {seg.title.toLowerCase()}</h3>
            <ul className="space-y-3 mb-6">
              {seg.focus.map((f) => (
                <li key={f} className="flex gap-3 items-start">
                  <span className="shrink-0 mt-1 size-5 rounded-full bg-molten/10 text-molten flex items-center justify-center">
                    <Check className="size-3" />
                  </span>
                  <span className="text-sm text-twilight">{f}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-white p-4 ring-1 ring-black/5">
              <div className="text-[10px] font-bold uppercase tracking-widest text-molten mb-1">Insight</div>
              <p className="text-sm text-twilight leading-relaxed">{seg.insight}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">03 · onze visie</div>
        <SectionHeader
          title={<>GEO is een <span className="text-molten italic">strategie</span>, geen trucje.</>}
          description="Veel bureaus verkopen GEO als losse tactiek. Ons standpunt: dat werkt niet. GEO is een strategische uitbreiding van wat je sowieso al goed moet doen — content, autoriteit, betrouwbaarheid."
        />
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {visions.map((v) => (
            <article key={v.num} className="p-8 bg-silver rounded-2xl ring-1 ring-black/5">
              <div className="font-display text-4xl font-semibold text-molten mb-4">{v.num}</div>
              <h3 className="font-display text-xl font-semibold text-twilight mb-3">{v.title}</h3>
              <p className="text-sm text-body-text leading-relaxed">{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">04 · onze werkwijze</div>
        <SectionHeader
          title={<>Zes stappen naar meetbare <span className="text-molten italic">GEO-resultaten</span>.</>}
          description="Geen vage frameworks. Een concrete werkwijze die we bij elke klant doorlopen, met meetbare deliverables per fase."
        />
        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-2">
            {steps.map((s, i) => (
              <button
                key={s.num}
                onClick={() => setActive(i)}
                className={cn(
                  "w-full text-left p-5 rounded-xl ring-1 transition-all flex items-start gap-4",
                  i === active ? "bg-twilight text-white ring-twilight shadow-lg" : "bg-white ring-black/5 hover:ring-molten/30 text-twilight",
                )}
              >
                <span className="font-display text-2xl font-semibold text-molten shrink-0">{s.num}</span>
                <div className="min-w-0">
                  <div className="font-display font-semibold">{s.title}</div>
                  <div className={cn("text-sm mt-1", i === active ? "text-white/70" : "text-body-text")}>{s.short}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 p-8 md:p-10 bg-white rounded-2xl ring-1 ring-black/5">
            <div className="text-xs font-bold uppercase tracking-widest text-molten mb-2">{step.phase} · stap {step.num} van 06</div>
            <h3 className="font-display text-3xl font-semibold text-twilight mb-4">{step.title}</h3>
            <p className="text-body-text leading-relaxed mb-6">{step.desc}</p>
            <div className="text-[10px] font-bold uppercase tracking-widest text-twilight/60 mb-3">Deliverables</div>
            <ul className="space-y-3 mb-8">
              {step.bullets.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <span className="shrink-0 mt-1 size-5 rounded-full bg-molten/10 text-molten flex items-center justify-center">
                    <Check className="size-3" />
                  </span>
                  <span className="text-sm text-twilight">{b}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-black/10 grid grid-cols-2 gap-4">
              {Object.entries(step.meta).map(([k, v]) => (
                <div key={k}>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-twilight/60 mb-1">{k}</div>
                  <div className="text-sm text-twilight font-medium">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section className="py-20 px-6 bg-twilight text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">05 · resultaten</div>
        <SectionHeader
          title={<>Wat GEO oplevert <span className="text-molten italic">in de praktijk</span>.</>}
          description="Gemiddelde resultaten uit onze GEO-trajecten van zes maanden of langer. Realistische verwachtingen, op basis van gemeten data."
          tone="dark"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          {results.map((r) => (
            <div key={r.l} className="p-8 rounded-2xl bg-white/5 ring-1 ring-white/10">
              <div className="font-display text-5xl font-semibold text-molten">{r.v}</div>
              <div className="text-sm text-white/70 mt-3 leading-snug">{r.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">06 · cases</div>
        <SectionHeader
          title={<>Echte GEO-cases <span className="text-molten italic">uit ons portfolio</span>.</>}
          description="Een selectie van klantcases met meetbare resultaten per traject. (Definitieve invulling volgt.)"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {cases.map((c) => (
            <article key={c.title} className="p-8 bg-silver rounded-2xl ring-1 ring-black/5 hover:ring-molten/30 hover:-translate-y-1 transition-all">
              <div className="text-[10px] font-bold uppercase tracking-widest text-molten mb-2">{c.client}</div>
              <h3 className="font-display text-xl font-semibold text-twilight mb-6 min-h-[3.5rem]">{c.title}</h3>
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-black/5">
                {[
                  { v: c.m1, l: c.l1 },
                  { v: c.m2, l: c.l2 },
                  { v: c.m3, l: c.l3 },
                ].map((m) => (
                  <div key={m.l}>
                    <div className="font-display text-xl font-semibold text-molten">{m.v}</div>
                    <div className="text-[10px] uppercase tracking-wide text-body-text mt-1 leading-tight">{m.l}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton to="/cases" variant="outline-navy">
            Bekijk alle cases <ArrowRight className="size-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
}