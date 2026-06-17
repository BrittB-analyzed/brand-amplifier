import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Zap, FileText, MousePointer2, Award, Compass, Info, Navigation, Scale, Wallet } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { Sparkle } from "@/components/site/Sparkle";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_site/diensten/seo")({
  head: () => ({
    meta: [
      { title: "SEO diensten — Van pagina 10 naar de top 5 in Google | Expose Your Brand" },
      { name: "description", content: "Van pagina 10 naar de top 5 in Google. Onze SEO diensten combineren techniek, content, UX en autoriteit met een meetbaar 6-stappenplan. Voor MKB en B2B." },
      { property: "og:title", content: "SEO diensten | Expose Your Brand" },
      { property: "og:description", content: "Van pagina 10 naar de top 5 in Google — met techniek, content, UX en autoriteit." },
      { property: "og:url", content: "/diensten/seo" },
    ],
    links: [{ rel: "canonical", href: "/diensten/seo" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "SEO diensten",
        provider: { "@type": "Organization", name: "Expose Your Brand" },
      }),
    }],
  }),
  component: SeoPage,
});

const pillars = [
  {
    key: "techniek",
    icon: Zap,
    title: "Techniek",
    subtitle: "Het fundament",
    question: "Kan Google je site überhaupt lezen?",
    body: "Zonder een gezonde technische basis vinden je content en links nooit hun weg naar de SERP. Crawlability, indexering, snelheid en structured data vormen samen het skelet waarop alles rust.",
    chips: ["Crawlability", "Indexering", "Schema.org", "XML-sitemap", "Mobile-first", "HTTPS"],
  },
  {
    key: "content",
    icon: FileText,
    title: "Content",
    subtitle: "De relevantie",
    question: "Is jouw pagina het beste antwoord?",
    body: "Google laat de pagina ranken die het beste de zoekintentie beantwoordt. Search intent, content-diepte en de juiste content-vorm bepalen of jij dat antwoord bent.",
    chips: ["Search intent", "E-E-A-T", "Content-diepte", "Freshness", "Semantische dekking"],
  },
  {
    key: "ux",
    icon: MousePointer2,
    title: "Gebruikservaring",
    subtitle: "Het gedrag",
    question: "Blijven mensen op je pagina hangen?",
    body: "Google meet hoe gebruikers zich gedragen na een klik. Pogo-sticking, dwell time, scroll-diepte en Core Web Vitals zijn signalen dat jouw pagina daadwerkelijk het antwoord is.",
    chips: ["Core Web Vitals", "Dwell time", "Pogo-sticking", "Page experience", "Mobile UX"],
  },
  {
    key: "autoriteit",
    icon: Award,
    title: "Autoriteit",
    subtitle: "Het vertrouwen",
    question: "Vinden anderen je ook?",
    body: "Backlinks zijn nog steeds een top-3 rankingsignaal. Het gaat niet om volume maar om relevantie: links uit jouw vakgebied, gecombineerd met brand-mentions en sterke interne linkstructuur.",
    chips: ["Relevante backlinks", "Brand mentions", "Digital PR", "Domain authority", "Anchor diversity"],
  },
] as const;

const intents = [
  {
    key: "informational",
    icon: Info,
    glyph: "○",
    label: "informational",
    headline: "Iemand wil iets weten",
    body: "De zoeker bevindt zich aan het begin van de funnel. Stelt een vraag, wil leren of begrijpen. Geen koopintentie — wél een kans om vertrouwen op te bouwen.",
    examples: ["wat is data analyse", "hoe werkt google analytics", "looker studio uitleg"],
    pageType: "Kennisbank-artikel · gids · uitlegvideo",
  },
  {
    key: "navigational",
    icon: Navigation,
    glyph: "→",
    label: "navigational",
    headline: "Iemand zoekt iets specifieks",
    body: "De zoeker kent jou (of een merk) en wil rechtstreeks naar jouw site of een specifieke pagina. Brand-bouwen rendeert hier — als ze je naam typen win je deze altijd.",
    examples: ["b-analyzed contact", "b-analyzed cases", "b-analyzed reviews"],
    pageType: "Homepage · over-ons · contactpagina",
  },
  {
    key: "commercial",
    icon: Scale,
    glyph: "⚖",
    label: "commercial",
    headline: "Iemand vergelijkt opties",
    body: "De zoeker is bijna klaar om te kopen, maar oriënteert zich nog. Reviews, vergelijkingen en 'beste' zoekopdrachten — hoogwaardig commercieel verkeer met sterke conversiepotentie.",
    examples: ["beste data analyse bureau", "ga4 bureau vs freelancer", "data analytics bureau reviews"],
    pageType: "Vergelijkingspagina · cases · reviews",
  },
  {
    key: "transactional",
    icon: Wallet,
    glyph: "€",
    label: "transactional",
    headline: "Iemand wil nu actie ondernemen",
    body: "De zoeker is klaar om te converteren. Wil bestellen, inhuren, boeken of een offerte aanvragen. Hoogste commerciële waarde — hier krijg je geen tweede kans.",
    examples: ["data analist inhuren", "ga4 audit aanvragen", "data analytics prijs"],
    pageType: "Dienstpagina · offerte · checkout",
  },
] as const;

const steps = [
  {
    num: "01",
    title: "Discovery, audit & positionering",
    short: "Waar staan we vandaag?",
    desc: "Voordat we ook maar één pagina aanraken brengen we de complete uitgangspositie in kaart: positionering, technische gezondheid, huidige rankings, content-gaten en concurrentie. We bepalen wie je bent in de markt en welke zoektermen daadwerkelijk omzet brengen.",
    bullets: [
      "Merk- en positioneringsscan — wie ben je en waarop wil je gevonden worden?",
      "Technische audit met 200+ checkpunten.",
      "Concurrentie-analyse op geldzinnen en content-gaten.",
      "Rank-baseline tot keyword-niveau.",
    ],
    tools: ["Screaming Frog", "Ahrefs", "Google Search Console", "PageSpeed Insights", "SE Ranking"],
  },
  {
    num: "02",
    title: "Keyword-strategie",
    short: "Waar gaan we op ranken?",
    desc: "Een keyword-map gebouwd op zoekintentie en commerciële waarde. Geen lange lijst termen, maar een gestructureerd plan van pillar-pages, supporting content en commerciële landingspagina's.",
    bullets: [
      "Topical map gericht op omzet, niet alleen volume.",
      "Search intent-classificatie per term.",
      "Long-tail clusters rondom kern-onderwerpen.",
      "Prioritering op kans × moeite × waarde.",
    ],
    tools: ["SE Ranking", "Keyword Surfer", "Google Keyword Planner", "AlsoAsked", "GSC Performance"],
  },
  {
    num: "03",
    title: "Technische basis",
    short: "Foundation op orde brengen",
    desc: "Crawlability, Core Web Vitals, indexering en structured data — we fixen het fundament voordat we content of links bouwen. Anders bouw je een paleis op moeras.",
    bullets: [
      "Crawl-budget en indexering optimaliseren.",
      "Core Web Vitals binnen Google's groene grens.",
      "Schema.org markup voor producten, FAQ en organisatie.",
      "Interne linkstructuur en site-architectuur.",
    ],
    tools: ["Search Console", "Schema.org Validator", "Screaming Frog", "Eigen dashboard"],
  },
  {
    num: "04",
    title: "Contentproductie",
    short: "De juiste pagina's bouwen",
    desc: "Content die direct het beste antwoord is — semantisch volledig, citeerbaar voor AI Overviews en geschreven om te converteren. Geen SEO-spam, wel meetbare diepgang.",
    bullets: [
      "Custom briefs per pagina met intent, structuur en entiteiten.",
      "Pillar-pages plus supporting content rondom kern-thema's.",
      "Optimalisatie voor AI Overviews en featured snippets.",
      "Iteratie op basis van GSC-data en posities.",
    ],
    tools: ["NeuronWriter", "Claude", "GSC", "SE Ranking", "Custom briefs"],
  },
  {
    num: "05",
    title: "Autoriteit opbouwen",
    short: "Linkbuilding & digital PR",
    desc: "Relevante links uit jouw vakgebied — verdiend, niet gekocht. Combinatie van digital PR, brand-mentions en gerichte outreach naar autoritaire bronnen.",
    bullets: [
      "Linkbuilding op relevantie, niet volume.",
      "Digital PR-campagnes en HARO-pitches.",
      "Brand-mentions converteren naar links.",
      "Anchor-diversiteit en risicobeheer.",
    ],
    tools: ["Ahrefs Site Explorer", "BuzzStream", "HARO", "Hunter.io", "GSC Links", "Presscloud"],
  },
  {
    num: "06",
    title: "Monitoren en schaal",
    short: "Doorontwikkelen wat werkt",
    desc: "Maandelijkse rapportage in je eigen dashboard. We schalen wat werkt, snijden wat niet werkt en koppelen elke beweging aan omzet — niet aan vanity-metrics.",
    bullets: [
      "Live dashboard met posities, verkeer en conversies.",
      "Maandelijkse strategie-call met concrete acties.",
      "A/B-testen op titles, snippets en content.",
      "Doorlopende doorontwikkeling per cluster.",
    ],
    tools: ["GSC", "Looker Studio", "SE Ranking", "Keyword Surfer", "GA4"],
  },
] as const;

const healthChecks = [
  "Crawlability — robots.txt correct geconfigureerd",
  "XML-sitemap aanwezig en ingediend",
  "Mobile-friendly · responsive op alle devices",
  "HTTPS met valide SSL-certificaat",
  "Schema.org structured data op kernpagina's",
  "Core Web Vitals binnen Google's groene grens",
  "Hreflang correct ingesteld waar nodig",
  "Canonicals en indexering kloppen",
];

const cases = [
  { client: "Cliënt A · industrie", title: "Van pagina 8 naar top-3 in 7 maanden", metric1: "+312%", metric1l: "organisch verkeer", metric2: "top-3", metric2l: "voor 24 geldzinnen", metric3: "7 mnd", metric3l: "trajectduur" },
  { client: "Cliënt B · e-commerce", title: "Productpagina's met top-3 dominantie", metric1: "+184%", metric1l: "organische omzet", metric2: "60+", metric2l: "top-3 posities", metric3: "9 mnd", metric3l: "trajectduur" },
  { client: "Cliënt C · B2B SaaS", title: "Pillar-strategie bracht qualified demos", metric1: "+421%", metric1l: "organische demo's", metric2: "x4", metric2l: "branded search", metric3: "12 mnd", metric3l: "trajectduur" },
];

const forWho = [
  "MKB met €500K+ omzet en hoge klantwaarde.",
  "Bedrijven waarvan klanten online research doen voor ze beslissen.",
  "Ondernemers die genoeg hebben van rapportages zonder resultaat.",
];

function SeoPage() {
  return (
    <>
      <PageHero
        eyebrow="SEO · klassieke vindbaarheid"
        title={<>Van pagina 10 naar de <span className="text-molten italic">top 5</span> in Google.</>}
        description="93% van het Nederlandse zoekverkeer loopt nog via Google. Wie niet in de top 5 staat voor zijn belangrijkste zoektermen, mist het overgrote deel van de markt. Wij bouwen rankings die blijven staan — met techniek, content en autoriteit."
      >
        <CTAButton to="/contact" variant="molten">
          Plan gratis SEO-adviesgesprek <ArrowRight className="size-4" />
        </CTAButton>
      </PageHero>

      {/* Stat strip */}
      <section className="py-12 px-6 -mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { stat: "93%", label: "van NL zoekt nog via Google" },
            { stat: "75%", label: "van alle clicks gaat naar de top 5" },
            { stat: "500+", label: "rankingfactoren in één algoritme" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 ring-1 ring-black/5 flex items-center gap-4">
              <div className="font-display text-4xl font-semibold text-molten">{s.stat}</div>
              <div className="text-sm text-body-text">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Pillars */}
      <PillarsSection />

      {/* Search Intent Compass */}
      <IntentCompassSection />

      {/* 6 Steps */}
      <StepsSection />

      {/* Technical health */}
      <TechnicalHealthSection />

      {/* Cases */}
      <CasesSection />

      <PreFooterCTA />
    </>
  );
}

function PillarsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">het google-spel</div>
        <SectionHeader
          title={<>Google heeft 500+ rankingfactoren. Daarachter zitten slechts <span className="text-molten italic">4 pijlers</span>.</>}
          description="Algoritme-updates komen en gaan. De fundamenten waarop Google haar rankings bouwt blijven al ruim 20 jaar hetzelfde. Beheers deze 4, en je rankings overleven elke update."
        />
        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <article key={p.key} className="group relative p-8 rounded-2xl bg-silver ring-1 ring-black/5 hover:ring-molten/30 hover:-translate-y-1 transition-all">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 size-14 rounded-xl bg-molten/10 text-molten flex items-center justify-center">
                    <Icon className="size-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-twilight">
                      {p.title}
                      <span className="text-body-text font-normal text-base ml-2">— {p.subtitle}</span>
                    </h3>
                    <p className="text-sm text-molten italic mt-1">{p.question}</p>
                  </div>
                </div>
                <p className="mt-5 text-body-text leading-relaxed">{p.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.chips.map((c) => (
                    <span key={c} className="text-xs font-medium px-3 py-1 bg-white rounded-full text-twilight ring-1 ring-black/5">
                      {c}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IntentCompassSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
          <Compass className="size-4" /> search intent kompas
        </div>
        <SectionHeader
          title={<>Een zoekterm is niet één pagina. Het is <span className="text-molten italic">vier soorten intentie</span>.</>}
          description="Elke zoekterm valt in één van vier kwadranten. Behandel je een commerciële zoekterm met een blogartikel? Dan ga je nooit ranken. Het juiste content-type voor de juiste intentie is de helft van het werk."
        />
        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {intents.map((i) => {
            const Icon = i.icon;
            return (
              <article key={i.key} className="p-8 bg-white rounded-2xl ring-1 ring-black/5 hover:ring-molten/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="size-10 rounded-lg bg-twilight text-white flex items-center justify-center font-display text-lg">{i.glyph}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-molten">{i.label}</span>
                  </div>
                  <Icon className="size-5 text-body-text/60" />
                </div>
                <h3 className="font-display text-xl font-semibold text-twilight mb-3">{i.headline}</h3>
                <p className="text-sm text-body-text leading-relaxed mb-5">{i.body}</p>
                <div className="border-t border-black/5 pt-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-twilight/60 mb-2">Voorbeelden (b-analyzed.com)</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {i.examples.map((e) => (
                      <span key={e} className="text-xs font-mono px-2.5 py-1 bg-silver rounded text-twilight">{e}</span>
                    ))}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-twilight/60 mb-1">Pagina-type</div>
                  <div className="text-sm text-twilight font-medium">{i.pageType}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">onze werkwijze</div>
        <SectionHeader
          title={<>Zes stappen. Van eerste audit tot <span className="text-molten italic">structurele top-rankings</span>.</>}
          description="Geen blackbox, geen 'we gaan wat optimaliseren'. Een gestructureerd traject waarin elke stap bouwt op de vorige — en jij elke maand weet wat er gebeurt en waarom."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          {/* Step tabs */}
          <div className="lg:col-span-5 space-y-2">
            {steps.map((s, i) => (
              <button
                key={s.num}
                onClick={() => setActive(i)}
                className={cn(
                  "w-full text-left p-5 rounded-xl ring-1 transition-all flex items-start gap-4",
                  i === active
                    ? "bg-twilight text-white ring-twilight shadow-lg"
                    : "bg-silver ring-black/5 hover:ring-molten/30 text-twilight",
                )}
              >
                <span
                  className={cn(
                    "font-display text-2xl font-semibold shrink-0",
                    i === active ? "text-molten" : "text-molten",
                  )}
                >
                  {s.num}
                </span>
                <div className="min-w-0">
                  <div className="font-display font-semibold">{s.title}</div>
                  <div className={cn("text-sm mt-1", i === active ? "text-white/70" : "text-body-text")}>{s.short}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Step detail */}
          <div className="lg:col-span-7 p-8 md:p-10 bg-silver rounded-2xl ring-1 ring-black/5">
            <div className="text-xs font-bold uppercase tracking-widest text-molten mb-2">Stap {step.num} van 06</div>
            <h3 className="font-display text-3xl font-semibold text-twilight mb-4">{step.title}</h3>
            <p className="text-body-text leading-relaxed mb-6">{step.desc}</p>
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
            <div className="pt-6 border-t border-black/10">
              <div className="text-[10px] font-bold uppercase tracking-widest text-twilight/60 mb-3">Tools die we in deze stap inzetten</div>
              <div className="flex flex-wrap gap-2">
                {step.tools.map((t) => (
                  <span key={t} className="text-xs font-medium px-3 py-1.5 bg-white rounded-full text-twilight ring-1 ring-black/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnicalHealthSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">technical seo</div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-twilight leading-tight text-balance">
              Een gezonde site is <span className="text-molten italic">geen optie</span>.<br />
              Het is de randvoorwaarde.
            </h2>
            <p className="mt-6 text-lg text-body-text leading-relaxed">
              Voordat één ranking-strategie effect heeft, moet je site technisch in orde zijn. Core Web Vitals, indexering, schema en crawlability bepalen of Google jouw content überhaupt kán waarderen.
            </p>

            <ul className="mt-8 space-y-3">
              {healthChecks.map((c) => (
                <li key={c} className="flex gap-3 items-start">
                  <span className="shrink-0 mt-0.5 size-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <span className="text-twilight">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mock health dashboard - Expose Your Brand */}
          <div className="bg-white rounded-2xl p-6 md:p-8 ring-1 ring-black/5 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-black/5">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-body-text">domain:</span>
                <span className="text-xs font-mono font-bold text-twilight">exposeyourbrand.nl</span>
              </div>
              <Sparkle size="sm" />
            </div>

            <div className="grid grid-cols-4 gap-4 py-6 border-b border-black/5">
              <div className="col-span-1 flex flex-col items-center justify-center p-4 bg-silver rounded-xl">
                <div className="font-display text-4xl font-semibold text-molten">98</div>
                <div className="text-[10px] uppercase tracking-widest text-body-text mt-1">site-health</div>
              </div>
              <div className="col-span-3 grid grid-cols-3 gap-3">
                {[
                  { k: "LCP", v: "1.4s", s: "Goed" },
                  { k: "INP", v: "128ms", s: "Goed" },
                  { k: "CLS", v: "0.04", s: "Goed" },
                ].map((m) => (
                  <div key={m.k} className="bg-silver rounded-xl p-3">
                    <div className="text-[10px] uppercase tracking-widest text-body-text">{m.k}</div>
                    <div className="font-display text-xl font-semibold text-twilight">{m.v}</div>
                    <div className="text-[10px] font-bold text-green-600 mt-0.5">● {m.s}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 space-y-2.5">
              {[
                { icon: "🤖", label: "robots.txt geconfigureerd" },
                { icon: "🗺", label: "XML-sitemap aanwezig & ingediend" },
                { icon: "📱", label: "Mobile-friendly" },
                { icon: "🔒", label: "HTTPS · valide certificaat" },
                { icon: "{ }", label: "Schema.org structured data" },
                { icon: "🌐", label: "Hreflang correct ingesteld" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between p-2.5 rounded-lg hover:bg-silver transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-base w-5 text-center">{row.icon}</span>
                    <span className="text-sm text-twilight">{row.label}</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-green-600">
                    <Check className="size-3.5" strokeWidth={3} /> OK
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">cases</div>
        <SectionHeader
          title={<>Echte SEO-cases <span className="text-molten italic">uit ons portfolio</span>.</>}
          description="Een selectie van klantcases — meetbare resultaten met cijfers, periode en aanpak per traject. (Definitieve invulling volgt.)"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {cases.map((c) => (
            <article key={c.title} className="p-8 bg-silver rounded-2xl ring-1 ring-black/5 hover:ring-molten/30 hover:-translate-y-1 transition-all">
              <div className="text-[10px] font-bold uppercase tracking-widest text-molten mb-2">{c.client}</div>
              <h3 className="font-display text-xl font-semibold text-twilight mb-6 min-h-[3.5rem]">{c.title}</h3>
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-black/5">
                {[
                  { v: c.metric1, l: c.metric1l },
                  { v: c.metric2, l: c.metric2l },
                  { v: c.metric3, l: c.metric3l },
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