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
      { title: "SEO die updates overleeft — structurele top-posities in Google | Expose Your Brand" },
      { name: "description", content: "95% van Nederland zoekt via Google en 70% van de klikken gaat naar de top-3. Wij bouwen posities die blijven staan: consistente content, kloppende techniek en autoriteit die Google vertrouwt." },
      { property: "og:title", content: "SEO die updates overleeft | Expose Your Brand" },
      { property: "og:description", content: "Top-posities in Google die niet wegzakken bij de volgende update — met consistente content, techniek en autoriteit." },
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
    key: "content",
    icon: FileText,
    title: "Consistente, engaging content",
    subtitle: "De motor",
    question: "Publiceer je structureel het beste antwoord?",
    body: "Eén goede pagina ranken lukt soms. Een onderwerp domineren lukt alleen door blijven publiceren van content die de zoekvraag beter beantwoordt dan wie dan ook. Regelmaat en relevantie samen bouwen het momentum waar Google op afrekent.",
    chips: ["Publicatieritme", "Zoekintentie", "Content-diepte", "Freshness", "Semantische dekking"],
  },
  {
    key: "techniek",
    icon: Zap,
    title: "Techniek",
    subtitle: "Versterker — zodat Google je content kán lezen",
    question: "Komt Google moeiteloos bij je content?",
    body: "De beste content is waardeloos als Google er niet bij komt. Crawlability, indexering, snelheid en gestructureerde data vormen de leidingen waardoor je content naar de SERP stroomt.",
    chips: ["Crawlability", "Indexering", "Schema.org", "XML-sitemap", "Mobile-first", "HTTPS"],
  },
  {
    key: "autoriteit",
    icon: Award,
    title: "Autoriteit",
    subtitle: "Versterker — zodat Google je content vertrouwt",
    question: "Verwijzen anderen in je vakgebied naar je?",
    body: "Goede content trekt vanzelf vermeldingen aan — maar je kunt het versnellen. Relevante backlinks uit je eigen vakgebied, brand-mentions en een sterke interne linkstructuur vertellen Google dat jouw content gezag heeft.",
    chips: ["Relevante backlinks", "Brand mentions", "Digital PR", "Domain authority", "Interne links"],
  },
  {
    key: "ux",
    icon: MousePointer2,
    title: "Gebruikerssignalen",
    subtitle: "Versterker — zodat Google ziet dat het werkt",
    question: "Blijven mensen hangen na de klik?",
    body: "Na de klik kijkt Google mee. Blijven mensen hangen, scrollen ze door, klikken ze niet meteen terug? Dat gedrag bevestigt — of ontkracht — dat jouw pagina het antwoord was.",
    chips: ["Core Web Vitals", "Dwell time", "Pogo-sticking", "Page experience", "Mobile UX"],
  },
] as const;

const intents = [
  {
    key: "informational",
    icon: Info,
    glyph: "○",
    label: "informationeel",
    headline: "Iemand wil iets begrijpen",
    body: "Boven in de funnel. De zoeker heeft een vraag en wil leren, nog niet kopen. Geen directe omzet, wél hét moment om vertrouwen en autoriteit op te bouwen.",
    examples: ["wat is GEO?", "hoe werkt GEO?", "hoe meet je GEO?"],
    pageType: "Kennisartikel · uitleg · gids",
  },
  {
    key: "navigational",
    icon: Navigation,
    glyph: "→",
    label: "navigationeel",
    headline: "Iemand zoekt jou specifiek",
    body: "De zoeker kent je naam en wil direct naar je toe. Win deze altijd door je merk sterk te maken — wie jou intypt, hoort bij jou te landen, niet bij een concurrent.",
    examples: ["contact opnemen", "reviews", "cases"],
    pageType: "Homepage · over-ons · contact",
  },
  {
    key: "commercial",
    icon: Scale,
    glyph: "⚖",
    label: "commercieel",
    headline: "Iemand vergelijkt opties",
    body: "Bijna koopklaar, maar nog aan het wikken. Vergelijkingen, reviews en 'beste'-zoekopdrachten. Hoogwaardig verkeer met sterke conversiekans.",
    examples: ["beste GEO bureau", "beste SEO bureau", "GEO bureau X vergelijken"],
    pageType: "Vergelijking · cases · reviews",
  },
  {
    key: "transactional",
    icon: Wallet,
    glyph: "€",
    label: "transactioneel",
    headline: "Iemand wil nu actie",
    body: "Klaar om te converteren: inhuren, aanvragen, boeken. De hoogste commerciële waarde — en je krijgt zelden een tweede kans.",
    examples: ["GEO expert inhuren", "SEO specialist voor MKB", "GEO audit aanvragen"],
    pageType: "Dienstpagina · offerte · contact",
  },
] as const;

const steps = [
  {
    num: "01",
    title: "Nulmeting & positionering",
    short: "Waar staan we vandaag?",
    desc: "Voordat we ook maar één pagina aanraken, brengen we je complete uitgangspositie in kaart: positionering, technische gezondheid, huidige rankings, content-gaten en concurrentie. We bepalen wie je bent in de markt en op welke zoektermen daadwerkelijk omzet te halen valt.",
    bullets: [
      "Merk- en positioneringsscan — wie ben je en waarop wil je gevonden worden?",
      "Technische audit met 200+ checkpunten.",
      "Concurrentie-analyse op commerciële zoektermen en content-gaten.",
      "Rank-baseline tot op keyword-niveau.",
    ],
    tools: ["Screaming Frog", "Ahrefs", "Google Search Console", "PageSpeed Insights", "SE Ranking"],
  },
  {
    num: "02",
    title: "Keyword- & intentiestrategie",
    short: "Welke termen leveren omzet op?",
    desc: "We vertalen de markt naar een concrete kaart: welke zoektermen leveren omzet op, hoeveel concurrentie staat erop, en welk paginatype hoort bij welke zoekintentie. Zo bouwen we alleen pagina's die een reële kans maken én converteren.",
    bullets: [
      "Keyword-onderzoek op zoekvolume, moeilijkheid én omzetpotentie.",
      "Indeling per zoekintentie (informationeel → transactioneel).",
      "Topical map: welke clusters maken je dé autoriteit in je vakgebied?",
      "Prioritering op snelste route naar resultaat.",
    ],
    tools: ["Ahrefs", "SE Ranking", "Google Search Console"],
  },
  {
    num: "03",
    title: "Technisch fundament",
    short: "Skelet op orde brengen",
    desc: "We maken de site klaar zodat Google je content moeiteloos kan crawlen, begrijpen en laden. Geen content-strategie op een wankele basis — eerst het skelet op orde.",
    bullets: [
      "Crawlability, indexering en sitemap-hygiëne.",
      "Core Web Vitals naar Google's groene zone.",
      "Schema.org structured data op kern- en dienstpagina's.",
      "Schone interne structuur en canonicals.",
    ],
    tools: ["Screaming Frog", "PageSpeed Insights", "Google Search Console"],
  },
  {
    num: "04",
    title: "Content-motor op gang",
    short: "Consistent het beste antwoord publiceren",
    desc: "Hier komt je belangrijkste rankingfactor tot leven: consistent publiceren van content die de zoekvraag beter beantwoordt dan wie dan ook. We bouwen de juiste pagina's én zetten een ritme neer dat blijft draaien.",
    bullets: [
      "Pillar- en supporting-content rond je sterkste thema's.",
      "Schrijven op zoekintentie, citeerbaar voor zowel Google als AI.",
      "Vast publicatieritme in plaats van eenmalige sprints.",
      "Bestaande pagina's updaten en uitbouwen waar dat sneller rendeert.",
    ],
    tools: ["Ahrefs", "SE Ranking"],
  },
  {
    num: "05",
    title: "Autoriteit opbouwen",
    short: "Relevante links & brand-mentions",
    desc: "Goede content trekt vanzelf vermeldingen — maar we versnellen het. Relevante links uit je eigen vakgebied, brand-mentions en digital PR vertellen Google dat jouw content gezag heeft.",
    bullets: [
      "Backlink-analyse en gap met je concurrenten.",
      "Relevante linkbuilding (kwaliteit boven aantallen).",
      "Digital PR en het omzetten van losse merkvermeldingen naar links.",
      "Sterke interne linkstructuur die autoriteit doorgeeft.",
    ],
    tools: ["Ahrefs", "SE Ranking"],
  },
  {
    num: "06",
    title: "Meten, bijsturen, opschalen",
    short: "Doorontwikkelen wat werkt",
    desc: "Geen blackbox: je ziet maandelijks wat er gebeurt en waarom. We sturen door op wat werkt, laten los wat niet werkt en schalen de winnaars op.",
    bullets: [
      "Maandelijkse rapportage in je eigen dashboard.",
      "Positie- en verkeersontwikkeling per cluster.",
      "A/B op titels en content waar dat verschil maakt.",
      "Opschalen van bewezen thema's naar nieuwe clusters.",
    ],
    tools: ["Google Search Console", "SE Ranking", "Ahrefs"],
  },
] as const;

const healthChecks = [
  "Crawlability — robots.txt klopt en blokkeert niets wat moet ranken",
  "XML-sitemap aanwezig, schoon en ingediend in Search Console",
  "Volledig responsive en mobile-first opgebouwd",
  "HTTPS met een geldig SSL-certificaat",
  "Schema.org markup op je kern- en dienstpagina's",
  "Core Web Vitals binnen Google's groene zone",
  "Hreflang correct waar je meerdere talen of regio's bedient",
  "Canonicals en indexatie laten geen dubbele of verspilde pagina's toe",
];

const cases = [
  {
    client: "Meubel & Outlet Weert · e-commerce / retail",
    title: "Van lokale bekendheid naar bovenaan Google én in AI-aanbevelingen",
    metric1: "164",
    metric1l: "zoekwoorden op #1",
    metric2: "929",
    metric2l: "in de top 10",
    metric3: "±1.484",
    metric3l: "organische bezoeken / mnd",
  },
  {
    client: "Vogelvoerkopen.nl · e-commerce",
    title: "Van onzichtbaar in AI naar standaard onderdeel van het antwoord",
    metric1: "1.771",
    metric1l: "zoekwoorden op #1",
    metric2: "5.226",
    metric2l: "in de top 10",
    metric3: "±4.868",
    metric3l: "organische bezoeken / mnd",
  },
];

const forWho = [
  "Je bedrijf draait €500K+ omzet en elke klant vertegenwoordigt een serieuze waarde.",
  "Je klanten oriënteren zich online voordat ze contact opnemen of kopen.",
  "Je bent klaar met maandrapporten vol grafieken waar geen omzet uit volgt.",
];

function SeoPage() {
  return (
    <>
      <PageHero
        eyebrow="SEO · structurele vindbaarheid"
        title={<>Bovenaan Google staan is geen toeval. Het is een <span className="text-molten italic">systeem</span>.</>}
        description="95% van alle zoekopdrachten in Nederland verloopt via Google — en 70% van de klikken gaat naar de eerste drie resultaten. Sta je daar niet voor de termen die jouw klanten intypen, dan bestaat je aanbod online nauwelijks. Wij bouwen rankings die blijven: aangedreven door content waar mensen écht iets aan hebben, gedragen door een technisch gezonde site en bekrachtigd door autoriteit die Google serieus neemt."
      >
        <CTAButton to="/contact" variant="molten">
          Plan een gratis SEO-adviesgesprek <ArrowRight className="size-4" />
        </CTAButton>
      </PageHero>

      <ForWhoSection />

      {/* Stat strip */}
      <section className="py-12 px-6 -mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { stat: "95%", label: "van alle zoekopdrachten in NL gaat via Google" },
            { stat: "70%", label: "van alle klikken gaat naar de top-3" },
            { stat: "200+", label: "rankingfactoren — maar één weegt het zwaarst" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 ring-1 ring-black/5 flex items-center gap-4">
              <div className="font-display text-4xl font-semibold text-molten">{s.stat}</div>
              <div className="text-sm text-body-text">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <PillarsSection />
      <IntentCompassSection />
      <StepsSection />
      <TechnicalHealthSection />
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
          <h2 className="font-display text-3xl text-twilight font-semibold mb-6">Voor wie werkt dit het beste?</h2>
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
          <h2 className="font-display text-3xl text-twilight font-semibold mb-6">Wat je concreet in handen krijgt.</h2>
          <ul className="space-y-3">
            {[
              "Een keyword-strategie gebouwd op zoekintentie én omzetpotentie — niet op zoekvolume alleen.",
              "Een technische audit met een prioriteitenlijst die je morgen kunt oppakken.",
              "Content die zo geschreven is dat zowel Google als AI-zoekmachines (ChatGPT, Gemini, AI Overviews) je citeren.",
              "Linkbuilding gericht op relevantie en autoriteit binnen jouw vakgebied — kwaliteit boven aantallen.",
              "Maandelijks inzicht in je eigen dashboard: posities, verkeer en wat we deden en waarom.",
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

function PillarsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">de kern van het algoritme</div>
        <SectionHeader
          title={<>Google weegt 200+ factoren. <span className="text-molten italic">Eén</span> zet alle andere in beweging.</>}
          description="Het algoritme verandert continu, maar het patroon eronder niet. Van alle ruim 200 rankingfactoren is er één die structureel het verschil maakt: het consequent publiceren van content die mensen daadwerkelijk boeit en helpt. Wie dat volhoudt, voedt automatisch de drie factoren die de rest versterken. Wie het laat liggen, verliest terrein — hoe goed de techniek ook is."
        />
        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {pillars.map((p) => {
            const Icon = p.icon;
            const isMotor = p.key === "content";
            return (
              <article
                key={p.key}
                className={cn(
                  "group relative p-8 rounded-2xl ring-1 hover:-translate-y-1 transition-all",
                  isMotor
                    ? "bg-twilight text-white ring-twilight md:col-span-2 shadow-xl"
                    : "bg-silver ring-black/5 hover:ring-molten/30",
                )}
              >
                <div className="flex items-start gap-5">
                  <div className={cn(
                    "shrink-0 size-14 rounded-xl flex items-center justify-center",
                    isMotor ? "bg-molten/20 text-molten" : "bg-molten/10 text-molten",
                  )}>
                    <Icon className="size-7" />
                  </div>
                  <div>
                    <h3 className={cn("font-display text-2xl font-semibold", isMotor ? "text-white" : "text-twilight")}>
                      {p.title}
                      <span className={cn("font-normal text-base ml-2", isMotor ? "text-white/70" : "text-body-text")}>— {p.subtitle}</span>
                    </h3>
                    <p className="text-sm text-molten italic mt-1">{p.question}</p>
                  </div>
                </div>
                <p className={cn("mt-5 leading-relaxed", isMotor ? "text-white/90" : "text-body-text")}>{p.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.chips.map((c) => (
                    <span
                      key={c}
                      className={cn(
                        "text-xs font-medium px-3 py-1 rounded-full ring-1",
                        isMotor ? "bg-white/10 text-white ring-white/15" : "bg-white text-twilight ring-black/5",
                      )}
                    >
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
          <Compass className="size-4" /> zoekintentie
        </div>
        <SectionHeader
          title={<>Achter elke zoekterm zit een bedoeling. <span className="text-molten italic">Vier</span>, om precies te zijn.</>}
          description="Niet elke zoekopdracht vraagt om hetzelfde antwoord. Beantwoord je een koopklare zoekterm met een blog, dan rank je nooit — en andersom jaag je leergierige bezoekers weg met een offertepagina. De helft van het werk is simpelweg het juiste paginatype koppelen aan de juiste intentie."
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
                  <div className="text-[10px] font-bold uppercase tracking-widest text-twilight/60 mb-2">Voorbeelden</div>
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
          title={<>Zes stappen van nulmeting naar rankings die <span className="text-molten italic">blijven staan</span>.</>}
          description="Geen vaag 'we gaan optimaliseren'. Een vast traject waarin elke stap voortbouwt op de vorige, en waarin je maandelijks ziet wat er gebeurt en wat het oplevert."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
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
                <span className="font-display text-2xl font-semibold shrink-0 text-molten">
                  {s.num}
                </span>
                <div className="min-w-0">
                  <div className="font-display font-semibold">{s.title}</div>
                  <div className={cn("text-sm mt-1", i === active ? "text-white/70" : "text-body-text")}>{s.short}</div>
                </div>
              </button>
            ))}
          </div>

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
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">technisch fundament</div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-twilight leading-tight text-balance">
              Een gezonde site is <span className="text-molten italic">geen luxe</span>.<br />
              Het is de voorwaarde om mee te doen.
            </h2>
            <p className="mt-6 text-lg text-body-text leading-relaxed">
              Voordat enige contentstrategie effect heeft, moet Google je site moeiteloos kunnen crawlen, begrijpen en laden. Core Web Vitals, indexering, schema en een schone structuur bepalen of je content een kans krijgt — of onzichtbaar blijft.
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
                <div className="font-display text-4xl font-semibold text-molten">96</div>
                <div className="text-[10px] uppercase tracking-widest text-body-text mt-1">site-health</div>
              </div>
              <div className="col-span-3 grid grid-cols-3 gap-3">
                {[
                  { k: "LCP", v: "1.2s", s: "Goed" },
                  { k: "INP", v: "112ms", s: "Goed" },
                  { k: "CLS", v: "0.02", s: "Goed" },
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
          title={<>Resultaten uit echte trajecten — <span className="text-molten italic">geverifieerd, niet verzonnen</span>.</>}
          description="Twee webshops, twee keer hetzelfde patroon: van afhankelijk van de eigen naam naar structureel vindbaar — in Google én in de AI-assistenten waar steeds meer klanten hun aanbeveling vandaan halen. Cijfers rechtstreeks uit de ranking-exports."
        />
        <div className="grid md:grid-cols-2 gap-6 mt-12">
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
