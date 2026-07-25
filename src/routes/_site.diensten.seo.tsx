import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Zap, FileText, MousePointer2, Award, Compass, Info, Navigation, Scale, Wallet } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { Sparkle } from "@/components/site/Sparkle";
import { cn } from "@/lib/utils";
import { T, useLang, pick } from "@/lib/i18n";

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
    title: { nl: "Consistente, engaging content", en: "Consistent, engaging content" },
    subtitle: { nl: "De motor", en: "The engine" },
    question: { nl: "Publiceer je structureel het beste antwoord?", en: "Are you consistently publishing the best answer?" },
    body: {
      nl: "Eén goede pagina ranken lukt soms. Een onderwerp domineren lukt alleen door blijven publiceren van content die de zoekvraag beter beantwoordt dan wie dan ook. Regelmaat en relevantie samen bouwen het momentum waar Google op afrekent.",
      en: "Ranking one good page can happen by chance. Dominating a topic only happens by consistently publishing content that answers the search query better than anyone else. Consistency and relevance together build the momentum Google rewards.",
    },
    chips: {
      nl: ["Publicatieritme", "Zoekintentie", "Content-diepte", "Freshness", "Semantische dekking"],
      en: ["Publishing rhythm", "Search intent", "Content depth", "Freshness", "Semantic coverage"],
    },
  },
  {
    key: "techniek",
    icon: Zap,
    title: { nl: "Techniek", en: "Technology" },
    subtitle: { nl: "Versterker — zodat Google je content kán lezen", en: "Amplifier — so Google can actually read your content" },
    question: { nl: "Komt Google moeiteloos bij je content?", en: "Can Google reach your content effortlessly?" },
    body: {
      nl: "De beste content is waardeloos als Google er niet bij komt. Crawlability, indexering, snelheid en gestructureerde data vormen de leidingen waardoor je content naar de SERP stroomt.",
      en: "Even the best content is worthless if Google can't reach it. Crawlability, indexing, speed and structured data are the pipes through which your content flows into the SERP.",
    },
    chips: {
      nl: ["Crawlability", "Indexering", "Schema.org", "XML-sitemap", "Mobile-first", "HTTPS"],
      en: ["Crawlability", "Indexing", "Schema.org", "XML sitemap", "Mobile-first", "HTTPS"],
    },
  },
  {
    key: "autoriteit",
    icon: Award,
    title: { nl: "Autoriteit", en: "Authority" },
    subtitle: { nl: "Versterker — zodat Google je content vertrouwt", en: "Amplifier — so Google trusts your content" },
    question: { nl: "Verwijzen anderen in je vakgebied naar je?", en: "Do others in your field reference you?" },
    body: {
      nl: "Goede content trekt vanzelf vermeldingen aan — maar je kunt het versnellen. Relevante backlinks uit je eigen vakgebied, brand-mentions en een sterke interne linkstructuur vertellen Google dat jouw content gezag heeft.",
      en: "Great content naturally attracts mentions — but you can accelerate it. Relevant backlinks from your own field, brand mentions and a strong internal link structure tell Google your content carries authority.",
    },
    chips: {
      nl: ["Relevante backlinks", "Brand mentions", "Digital PR", "Domain authority", "Interne links"],
      en: ["Relevant backlinks", "Brand mentions", "Digital PR", "Domain authority", "Internal links"],
    },
  },
  {
    key: "ux",
    icon: MousePointer2,
    title: { nl: "Gebruikerssignalen", en: "User signals" },
    subtitle: { nl: "Versterker — zodat Google ziet dat het werkt", en: "Amplifier — so Google sees that it works" },
    question: { nl: "Blijven mensen hangen na de klik?", en: "Do visitors stick around after the click?" },
    body: {
      nl: "Na de klik kijkt Google mee. Blijven mensen hangen, scrollen ze door, klikken ze niet meteen terug? Dat gedrag bevestigt — of ontkracht — dat jouw pagina het antwoord was.",
      en: "After the click, Google keeps watching. Do people stay, keep scrolling, avoid clicking straight back? That behaviour confirms — or disproves — that your page was the answer.",
    },
    chips: {
      nl: ["Core Web Vitals", "Dwell time", "Pogo-sticking", "Page experience", "Mobile UX"],
      en: ["Core Web Vitals", "Dwell time", "Pogo-sticking", "Page experience", "Mobile UX"],
    },
  },
] as const;

const intents = [
  {
    key: "informational",
    icon: Info,
    glyph: "○",
    label: { nl: "informationeel", en: "informational" },
    headline: { nl: "Iemand wil iets begrijpen", en: "Someone wants to understand something" },
    body: {
      nl: "Boven in de funnel. De zoeker heeft een vraag en wil leren, nog niet kopen. Geen directe omzet, wél hét moment om vertrouwen en autoriteit op te bouwen.",
      en: "Top of the funnel. The searcher has a question and wants to learn, not yet buy. No immediate revenue, but exactly the moment to build trust and authority.",
    },
    examples: {
      nl: ["wat is GEO?", "hoe werkt GEO?", "hoe meet je GEO?"],
      en: ["what is GEO?", "how does GEO work?", "how do you measure GEO?"],
    },
    pageType: { nl: "Kennisartikel · uitleg · gids", en: "Knowledge article · explainer · guide" },
  },
  {
    key: "navigational",
    icon: Navigation,
    glyph: "→",
    label: { nl: "navigationeel", en: "navigational" },
    headline: { nl: "Iemand zoekt jou specifiek", en: "Someone is searching for you specifically" },
    body: {
      nl: "De zoeker kent je naam en wil direct naar je toe. Win deze altijd door je merk sterk te maken — wie jou intypt, hoort bij jou te landen, niet bij een concurrent.",
      en: "The searcher knows your name and wants to go straight to you. Always win these by making your brand strong — whoever types your name should land on you, not a competitor.",
    },
    examples: {
      nl: ["contact opnemen", "reviews", "cases"],
      en: ["contact us", "reviews", "cases"],
    },
    pageType: { nl: "Homepage · over-ons · contact", en: "Homepage · about us · contact" },
  },
  {
    key: "commercial",
    icon: Scale,
    glyph: "⚖",
    label: { nl: "commercieel", en: "commercial" },
    headline: { nl: "Iemand vergelijkt opties", en: "Someone is comparing options" },
    body: {
      nl: "Bijna koopklaar, maar nog aan het wikken. Vergelijkingen, reviews en 'beste'-zoekopdrachten. Hoogwaardig verkeer met sterke conversiekans.",
      en: "Almost ready to buy, but still weighing it up. Comparisons, reviews and 'best' searches. High-value traffic with strong conversion potential.",
    },
    examples: {
      nl: ["beste GEO bureau", "beste SEO bureau", "GEO bureau X vergelijken"],
      en: ["best GEO agency", "best SEO agency", "GEO agency X comparison"],
    },
    pageType: { nl: "Vergelijking · cases · reviews", en: "Comparison · cases · reviews" },
  },
  {
    key: "transactional",
    icon: Wallet,
    glyph: "€",
    label: { nl: "transactioneel", en: "transactional" },
    headline: { nl: "Iemand wil nu actie", en: "Someone wants to act now" },
    body: {
      nl: "Klaar om te converteren: inhuren, aanvragen, boeken. De hoogste commerciële waarde — en je krijgt zelden een tweede kans.",
      en: "Ready to convert: hire, request, book. The highest commercial value — and you rarely get a second chance.",
    },
    examples: {
      nl: ["GEO expert inhuren", "SEO specialist voor MKB", "GEO audit aanvragen"],
      en: ["hire a GEO expert", "SEO specialist for SMBs", "request a GEO audit"],
    },
    pageType: { nl: "Dienstpagina · offerte · contact", en: "Service page · quote · contact" },
  },
] as const;

const steps = [
  {
    num: "01",
    title: { nl: "Nulmeting & positionering", en: "Baseline & positioning" },
    short: { nl: "Waar staan we vandaag?", en: "Where do we stand today?" },
    desc: {
      nl: "Voordat we ook maar één pagina aanraken, brengen we je complete uitgangspositie in kaart: positionering, technische gezondheid, huidige rankings, content-gaten en concurrentie. We bepalen wie je bent in de markt en op welke zoektermen daadwerkelijk omzet te halen valt.",
      en: "Before we touch a single page, we map your complete starting position: positioning, technical health, current rankings, content gaps and competitors. We determine who you are in the market and which search terms actually generate revenue.",
    },
    bullets: {
      nl: [
        "Merk- en positioneringsscan — wie ben je en waarop wil je gevonden worden?",
        "Technische audit met 200+ checkpunten.",
        "Concurrentie-analyse op commerciële zoektermen en content-gaten.",
        "Rank-baseline tot op keyword-niveau.",
      ],
      en: [
        "Brand and positioning scan — who are you, and what do you want to be found for?",
        "Technical audit with 200+ checkpoints.",
        "Competitor analysis on commercial keywords and content gaps.",
        "Rank baseline down to keyword level.",
      ],
    },
    tools: ["Screaming Frog", "Ahrefs", "Google Search Console", "PageSpeed Insights", "SE Ranking"],
  },
  {
    num: "02",
    title: { nl: "Keyword- & intentiestrategie", en: "Keyword & intent strategy" },
    short: { nl: "Welke termen leveren omzet op?", en: "Which terms generate revenue?" },
    desc: {
      nl: "We vertalen de markt naar een concrete kaart: welke zoektermen leveren omzet op, hoeveel concurrentie staat erop, en welk paginatype hoort bij welke zoekintentie. Zo bouwen we alleen pagina's die een reële kans maken én converteren.",
      en: "We translate the market into a concrete map: which search terms generate revenue, how much competition they carry, and which page type fits which search intent. That way we only build pages that stand a real chance and convert.",
    },
    bullets: {
      nl: [
        "Keyword-onderzoek op zoekvolume, moeilijkheid én omzetpotentie.",
        "Indeling per zoekintentie (informationeel → transactioneel).",
        "Topical map: welke clusters maken je dé autoriteit in je vakgebied?",
        "Prioritering op snelste route naar resultaat.",
      ],
      en: [
        "Keyword research on volume, difficulty and revenue potential.",
        "Categorisation by search intent (informational → transactional).",
        "Topical map: which clusters make you the authority in your field?",
        "Prioritisation on the fastest route to results.",
      ],
    },
    tools: ["Ahrefs", "SE Ranking", "Google Search Console"],
  },
  {
    num: "03",
    title: { nl: "Technisch fundament", en: "Technical foundation" },
    short: { nl: "Skelet op orde brengen", en: "Getting the skeleton right" },
    desc: {
      nl: "We maken de site klaar zodat Google je content moeiteloos kan crawlen, begrijpen en laden. Geen content-strategie op een wankele basis — eerst het skelet op orde.",
      en: "We prepare the site so Google can effortlessly crawl, understand and load your content. No content strategy on a shaky foundation — the skeleton comes first.",
    },
    bullets: {
      nl: [
        "Crawlability, indexering en sitemap-hygiëne.",
        "Core Web Vitals naar Google's groene zone.",
        "Schema.org structured data op kern- en dienstpagina's.",
        "Schone interne structuur en canonicals.",
      ],
      en: [
        "Crawlability, indexing and sitemap hygiene.",
        "Core Web Vitals into Google's green zone.",
        "Schema.org structured data on core and service pages.",
        "Clean internal structure and canonicals.",
      ],
    },
    tools: ["Screaming Frog", "PageSpeed Insights", "Google Search Console"],
  },
  {
    num: "04",
    title: { nl: "Content-motor op gang", en: "Getting the content engine running" },
    short: { nl: "Consistent het beste antwoord publiceren", en: "Consistently publishing the best answer" },
    desc: {
      nl: "Hier komt je belangrijkste rankingfactor tot leven: consistent publiceren van content die de zoekvraag beter beantwoordt dan wie dan ook. We bouwen de juiste pagina's én zetten een ritme neer dat blijft draaien.",
      en: "This is where your most important ranking factor comes to life: consistently publishing content that answers the search query better than anyone else. We build the right pages and set a rhythm that keeps running.",
    },
    bullets: {
      nl: [
        "Pillar- en supporting-content rond je sterkste thema's.",
        "Schrijven op zoekintentie, citeerbaar voor zowel Google als AI.",
        "Vast publicatieritme in plaats van eenmalige sprints.",
        "Bestaande pagina's updaten en uitbouwen waar dat sneller rendeert.",
      ],
      en: [
        "Pillar and supporting content around your strongest themes.",
        "Written for search intent, citable for both Google and AI.",
        "A fixed publishing rhythm instead of one-off sprints.",
        "Updating and expanding existing pages where that pays off faster.",
      ],
    },
    tools: ["Ahrefs", "SE Ranking"],
  },
  {
    num: "05",
    title: { nl: "Autoriteit opbouwen", en: "Building authority" },
    short: { nl: "Relevante links & brand-mentions", en: "Relevant links & brand mentions" },
    desc: {
      nl: "Goede content trekt vanzelf vermeldingen — maar we versnellen het. Relevante links uit je eigen vakgebied, brand-mentions en digital PR vertellen Google dat jouw content gezag heeft.",
      en: "Great content naturally attracts mentions — but we accelerate it. Relevant links from your own field, brand mentions and digital PR tell Google your content carries authority.",
    },
    bullets: {
      nl: [
        "Backlink-analyse en gap met je concurrenten.",
        "Relevante linkbuilding (kwaliteit boven aantallen).",
        "Digital PR en het omzetten van losse merkvermeldingen naar links.",
        "Sterke interne linkstructuur die autoriteit doorgeeft.",
      ],
      en: [
        "Backlink analysis and gap versus your competitors.",
        "Relevant link building (quality over quantity).",
        "Digital PR and converting unlinked brand mentions into links.",
        "A strong internal link structure that passes on authority.",
      ],
    },
    tools: ["Ahrefs", "SE Ranking"],
  },
  {
    num: "06",
    title: { nl: "Meten, bijsturen, opschalen", en: "Measure, adjust, scale" },
    short: { nl: "Doorontwikkelen wat werkt", en: "Doubling down on what works" },
    desc: {
      nl: "Geen blackbox: je ziet maandelijks wat er gebeurt en waarom. We sturen door op wat werkt, laten los wat niet werkt en schalen de winnaars op.",
      en: "No black box: every month you see what's happening and why. We double down on what works, drop what doesn't, and scale the winners.",
    },
    bullets: {
      nl: [
        "Maandelijkse rapportage in je eigen dashboard.",
        "Positie- en verkeersontwikkeling per cluster.",
        "A/B op titels en content waar dat verschil maakt.",
        "Opschalen van bewezen thema's naar nieuwe clusters.",
      ],
      en: [
        "Monthly reporting in your own dashboard.",
        "Position and traffic development per cluster.",
        "A/B testing titles and content where it moves the needle.",
        "Scaling proven themes into new clusters.",
      ],
    },
    tools: ["Google Search Console", "SE Ranking", "Ahrefs"],
  },
] as const;

const healthChecks = {
  nl: [
    "Crawlability — robots.txt klopt en blokkeert niets wat moet ranken",
    "XML-sitemap aanwezig, schoon en ingediend in Search Console",
    "Volledig responsive en mobile-first opgebouwd",
    "HTTPS met een geldig SSL-certificaat",
    "Schema.org markup op je kern- en dienstpagina's",
    "Core Web Vitals binnen Google's groene zone",
    "Hreflang correct waar je meerdere talen of regio's bedient",
    "Canonicals en indexatie laten geen dubbele of verspilde pagina's toe",
  ],
  en: [
    "Crawlability — robots.txt is correct and blocks nothing that should rank",
    "XML sitemap present, clean and submitted in Search Console",
    "Fully responsive and built mobile-first",
    "HTTPS with a valid SSL certificate",
    "Schema.org markup on your core and service pages",
    "Core Web Vitals within Google's green zone",
    "Hreflang correctly set up where you serve multiple languages or regions",
    "Canonicals and indexation leave no duplicate or wasted pages",
  ],
};

const cases = [
  {
    client: { nl: "Meubel & Outlet Weert · e-commerce / retail", en: "Meubel & Outlet Weert · e-commerce / retail" },
    title: { nl: "Van lokale bekendheid naar bovenaan Google én in AI-aanbevelingen", en: "From local recognition to the top of Google and AI recommendations" },
    metric1: "164",
    metric1l: { nl: "zoekwoorden op #1", en: "keywords ranking #1" },
    metric2: "929",
    metric2l: { nl: "in de top 10", en: "in the top 10" },
    metric3: "±1.484",
    metric3l: { nl: "organische bezoeken / mnd", en: "organic visits / month" },
  },
  {
    client: { nl: "Vogelvoerkopen.nl · e-commerce", en: "Vogelvoerkopen.nl · e-commerce" },
    title: { nl: "Van onzichtbaar in AI naar standaard onderdeel van het antwoord", en: "From invisible in AI to a standard part of the answer" },
    metric1: "1.771",
    metric1l: { nl: "zoekwoorden op #1", en: "keywords ranking #1" },
    metric2: "5.226",
    metric2l: { nl: "in de top 10", en: "in the top 10" },
    metric3: "±4.868",
    metric3l: { nl: "organische bezoeken / mnd", en: "organic visits / month" },
  },
];

const forWho = {
  nl: [
    "Je bedrijf draait €500K+ omzet en elke klant vertegenwoordigt een serieuze waarde.",
    "Je klanten oriënteren zich online voordat ze contact opnemen of kopen.",
    "Je bent klaar met maandrapporten vol grafieken waar geen omzet uit volgt.",
  ],
  en: [
    "Your business generates €500K+ revenue and every client represents serious value.",
    "Your customers research online before they get in touch or buy.",
    "You're done with monthly reports full of charts that don't lead to revenue.",
  ],
};

function SeoPage() {
  const lang = useLang();
  return (
    <>
      <PageHero
        eyebrow={pick(lang, { nl: "SEO · structurele vindbaarheid", en: "SEO · structural findability" })}
        title={lang === "en"
          ? <>Ranking at the top of Google is no accident. It's a <span className="text-molten italic">system</span>.</>
          : <>Bovenaan Google staan is geen toeval. Het is een <span className="text-molten italic">systeem</span>.</>}
        description={pick(lang, {
          nl: "95% van alle zoekopdrachten in Nederland verloopt via Google — en 70% van de klikken gaat naar de eerste drie resultaten. Sta je daar niet voor de termen die jouw klanten intypen, dan bestaat je aanbod online nauwelijks. Wij bouwen rankings die blijven: aangedreven door content waar mensen écht iets aan hebben, gedragen door een technisch gezonde site en bekrachtigd door autoriteit die Google serieus neemt.",
          en: "95% of all searches in the Netherlands go through Google — and 70% of clicks go to the top three results. If you're not there for the terms your customers type in, your offering barely exists online. We build rankings that last: powered by content people genuinely benefit from, carried by a technically healthy site, and reinforced by authority Google takes seriously.",
        })}
      >
        <CTAButton to="/contact" variant="molten">
          <T nl="Plan een gratis SEO-adviesgesprek" en="Book a free SEO consultation" /> <ArrowRight className="size-4" />
        </CTAButton>
      </PageHero>

      <ForWhoSection />

      {/* Stat strip */}
      <section className="py-12 px-6 -mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { stat: "95%", label: { nl: "van alle zoekopdrachten in NL gaat via Google", en: "of all searches in the Netherlands go through Google" } },
            { stat: "70%", label: { nl: "van alle klikken gaat naar de top-3", en: "of all clicks go to the top 3" } },
            { stat: "200+", label: { nl: "rankingfactoren — maar één weegt het zwaarst", en: "ranking factors — but one weighs heaviest" } },
          ].map((s) => (
            <div key={s.stat} className="bg-white rounded-2xl p-6 ring-1 ring-black/5 flex items-center gap-4">
              <div className="font-display text-4xl font-semibold text-molten">{s.stat}</div>
              <div className="text-sm text-body-text">{pick(lang, s.label)}</div>
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
  const lang = useLang();
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl p-8 md:p-10 ring-1 ring-black/5">
          <div className="text-molten font-bold text-xs uppercase tracking-widest mb-3"><T nl="Voor wie" en="Who it's for" /></div>
          <h2 className="font-display text-3xl text-twilight font-semibold mb-6"><T nl="Voor wie werkt dit het beste?" en="Who does this work best for?" /></h2>
          <ul className="space-y-3">
            {pick(lang, forWho).map((w) => (
              <li key={w} className="flex gap-3 items-start text-twilight">
                <Check className="size-5 text-molten shrink-0 mt-0.5" /> <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-molten font-bold text-xs uppercase tracking-widest mb-3"><T nl="Wat je krijgt" en="What you get" /></div>
          <h2 className="font-display text-3xl text-twilight font-semibold mb-6"><T nl="Wat je concreet in handen krijgt." en="What you concretely get in return." /></h2>
          <ul className="space-y-3">
            {pick(lang, {
              nl: [
                "Een keyword-strategie gebouwd op zoekintentie én omzetpotentie — niet op zoekvolume alleen.",
                "Een technische audit met een prioriteitenlijst die je morgen kunt oppakken.",
                "Content die zo geschreven is dat zowel Google als AI-zoekmachines (ChatGPT, Gemini, AI Overviews) je citeren.",
                "Linkbuilding gericht op relevantie en autoriteit binnen jouw vakgebied — kwaliteit boven aantallen.",
                "Maandelijks inzicht in je eigen dashboard: posities, verkeer en wat we deden en waarom.",
              ],
              en: [
                "A keyword strategy built on search intent and revenue potential — not search volume alone.",
                "A technical audit with a priority list you can pick up tomorrow.",
                "Content written so that both Google and AI search engines (ChatGPT, Gemini, AI Overviews) cite you.",
                "Link building focused on relevance and authority within your field — quality over quantity.",
                "Monthly insight in your own dashboard: positions, traffic and what we did and why.",
              ],
            }).map((b) => (
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
  const lang = useLang();
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3"><T nl="de kern van het algoritme" en="the core of the algorithm" /></div>
        <SectionHeader
          title={lang === "en"
            ? <>Google weighs 200+ factors. <span className="text-molten italic">One</span> sets all the others in motion.</>
            : <>Google weegt 200+ factoren. <span className="text-molten italic">Eén</span> zet alle andere in beweging.</>}
          description={pick(lang, {
            nl: "Het algoritme verandert continu, maar het patroon eronder niet. Van alle ruim 200 rankingfactoren is er één die structureel het verschil maakt: het consequent publiceren van content die mensen daadwerkelijk boeit en helpt. Wie dat volhoudt, voedt automatisch de drie factoren die de rest versterken. Wie het laat liggen, verliest terrein — hoe goed de techniek ook is.",
            en: "The algorithm changes constantly, but the underlying pattern doesn't. Of the 200+ ranking factors, one consistently makes the difference: consistently publishing content that genuinely engages and helps people. Keep that up and you automatically feed the three factors that amplify the rest. Neglect it and you lose ground — no matter how good your technology is.",
          })}
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
                      {pick(lang, p.title)}
                      <span className={cn("font-normal text-base ml-2", isMotor ? "text-white/70" : "text-body-text")}>— {pick(lang, p.subtitle)}</span>
                    </h3>
                    <p className="text-sm text-molten italic mt-1">{pick(lang, p.question)}</p>
                  </div>
                </div>
                <p className={cn("mt-5 leading-relaxed", isMotor ? "text-white/90" : "text-body-text")}>{pick(lang, p.body)}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {pick<readonly string[]>(lang, p.chips).map((c) => (
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
  const lang = useLang();
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
          <Compass className="size-4" /> <T nl="zoekintentie" en="search intent" />
        </div>
        <SectionHeader
          title={lang === "en"
            ? <>Behind every search term lies an intention. <span className="text-molten italic">Four</span>, to be exact.</>
            : <>Achter elke zoekterm zit een bedoeling. <span className="text-molten italic">Vier</span>, om precies te zijn.</>}
          description={pick(lang, {
            nl: "Niet elke zoekopdracht vraagt om hetzelfde antwoord. Beantwoord je een koopklare zoekterm met een blog, dan rank je nooit — en andersom jaag je leergierige bezoekers weg met een offertepagina. De helft van het werk is simpelweg het juiste paginatype koppelen aan de juiste intentie.",
            en: "Not every search needs the same kind of answer. Answer a ready-to-buy search term with a blog post and you'll never rank — and conversely, you'll scare off curious visitors with a quote page. Half the job is simply matching the right page type to the right intent.",
          })}
        />
        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {intents.map((i) => {
            const Icon = i.icon;
            return (
              <article key={i.key} className="p-8 bg-white rounded-2xl ring-1 ring-black/5 hover:ring-molten/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="size-10 rounded-lg bg-twilight text-white flex items-center justify-center font-display text-lg">{i.glyph}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-molten">{pick(lang, i.label)}</span>
                  </div>
                  <Icon className="size-5 text-body-text/60" />
                </div>
                <h3 className="font-display text-xl font-semibold text-twilight mb-3">{pick(lang, i.headline)}</h3>
                <p className="text-sm text-body-text leading-relaxed mb-5">{pick(lang, i.body)}</p>
                <div className="border-t border-black/5 pt-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-twilight/60 mb-2"><T nl="Voorbeelden" en="Examples" /></div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pick<readonly string[]>(lang, i.examples).map((e) => (
                      <span key={e} className="text-xs font-mono px-2.5 py-1 bg-silver rounded text-twilight">{e}</span>
                    ))}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-twilight/60 mb-1"><T nl="Pagina-type" en="Page type" /></div>
                  <div className="text-sm text-twilight font-medium">{pick(lang, i.pageType)}</div>
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
  const lang = useLang();
  const [active, setActive] = useState(0);
  const step = steps[active];
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3"><T nl="onze werkwijze" en="our approach" /></div>
        <SectionHeader
          title={lang === "en"
            ? <>Six steps from baseline to rankings that <span className="text-molten italic">last</span>.</>
            : <>Zes stappen van nulmeting naar rankings die <span className="text-molten italic">blijven staan</span>.</>}
          description={pick(lang, {
            nl: "Geen vaag 'we gaan optimaliseren'. Een vast traject waarin elke stap voortbouwt op de vorige, en waarin je maandelijks ziet wat er gebeurt en wat het oplevert.",
            en: "No vague 'we'll optimise it'. A fixed process where every step builds on the last, and where you see monthly what's happening and what it delivers.",
          })}
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
                  <div className="font-display font-semibold">{pick(lang, s.title)}</div>
                  <div className={cn("text-sm mt-1", i === active ? "text-white/70" : "text-body-text")}>{pick(lang, s.short)}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 p-8 md:p-10 bg-silver rounded-2xl ring-1 ring-black/5">
            <div className="text-xs font-bold uppercase tracking-widest text-molten mb-2"><T nl={`Stap ${step.num} van 06`} en={`Step ${step.num} of 06`} /></div>
            <h3 className="font-display text-3xl font-semibold text-twilight mb-4">{pick(lang, step.title)}</h3>
            <p className="text-body-text leading-relaxed mb-6">{pick(lang, step.desc)}</p>
            <ul className="space-y-3 mb-8">
              {pick<readonly string[]>(lang, step.bullets).map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <span className="shrink-0 mt-1 size-5 rounded-full bg-molten/10 text-molten flex items-center justify-center">
                    <Check className="size-3" />
                  </span>
                  <span className="text-sm text-twilight">{b}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-black/10">
              <div className="text-[10px] font-bold uppercase tracking-widest text-twilight/60 mb-3"><T nl="Tools die we in deze stap inzetten" en="Tools we use in this step" /></div>
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
  const lang = useLang();
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3"><T nl="technisch fundament" en="technical foundation" /></div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-twilight leading-tight text-balance">
              {lang === "en" ? (
                <>A healthy site is <span className="text-molten italic">not a luxury</span>.<br />It's the price of entry.</>
              ) : (
                <>Een gezonde site is <span className="text-molten italic">geen luxe</span>.<br />Het is de voorwaarde om mee te doen.</>
              )}
            </h2>
            <p className="mt-6 text-lg text-body-text leading-relaxed">
              <T
                nl="Voordat enige contentstrategie effect heeft, moet Google je site moeiteloos kunnen crawlen, begrijpen en laden. Core Web Vitals, indexering, schema en een schone structuur bepalen of je content een kans krijgt — of onzichtbaar blijft."
                en="Before any content strategy can work, Google needs to be able to crawl, understand and load your site effortlessly. Core Web Vitals, indexing, schema and a clean structure determine whether your content gets a chance — or stays invisible."
              />
            </p>

            <ul className="mt-8 space-y-3">
              {pick(lang, healthChecks).map((c) => (
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
                <div className="text-[10px] uppercase tracking-widest text-body-text mt-1"><T nl="site-health" en="site health" /></div>
              </div>
              <div className="col-span-3 grid grid-cols-3 gap-3">
                {[
                  { k: "LCP", v: "1.2s", s: { nl: "Goed", en: "Good" } },
                  { k: "INP", v: "112ms", s: { nl: "Goed", en: "Good" } },
                  { k: "CLS", v: "0.02", s: { nl: "Goed", en: "Good" } },
                ].map((m) => (
                  <div key={m.k} className="bg-silver rounded-xl p-3">
                    <div className="text-[10px] uppercase tracking-widest text-body-text">{m.k}</div>
                    <div className="font-display text-xl font-semibold text-twilight">{m.v}</div>
                    <div className="text-[10px] font-bold text-green-600 mt-0.5">● {pick(lang, m.s)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 space-y-2.5">
              {[
                { icon: "🤖", label: { nl: "robots.txt geconfigureerd", en: "robots.txt configured" } },
                { icon: "🗺", label: { nl: "XML-sitemap aanwezig & ingediend", en: "XML sitemap present & submitted" } },
                { icon: "📱", label: { nl: "Mobile-friendly", en: "Mobile-friendly" } },
                { icon: "🔒", label: { nl: "HTTPS · valide certificaat", en: "HTTPS · valid certificate" } },
                { icon: "{ }", label: { nl: "Schema.org structured data", en: "Schema.org structured data" } },
                { icon: "🌐", label: { nl: "Hreflang correct ingesteld", en: "Hreflang correctly set up" } },
              ].map((row) => (
                <div key={row.icon} className="flex items-center justify-between p-2.5 rounded-lg hover:bg-silver transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-base w-5 text-center">{row.icon}</span>
                    <span className="text-sm text-twilight">{pick(lang, row.label)}</span>
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
  const lang = useLang();
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3"><T nl="cases" en="case studies" /></div>
        <SectionHeader
          title={lang === "en"
            ? <>Results from real engagements — <span className="text-molten italic">verified, not invented</span>.</>
            : <>Resultaten uit echte trajecten — <span className="text-molten italic">geverifieerd, niet verzonnen</span>.</>}
          description={pick(lang, {
            nl: "Twee webshops, twee keer hetzelfde patroon: van afhankelijk van de eigen naam naar structureel vindbaar — in Google én in de AI-assistenten waar steeds meer klanten hun aanbeveling vandaan halen. Cijfers rechtstreeks uit de ranking-exports.",
            en: "Two webshops, the same pattern twice: from relying on brand recognition to being structurally findable — on Google and in the AI assistants more and more customers get recommendations from. Figures straight from the ranking exports.",
          })}
        />
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {cases.map((c) => (
            <article key={c.client.nl} className="p-8 bg-silver rounded-2xl ring-1 ring-black/5 hover:ring-molten/30 hover:-translate-y-1 transition-all">
              <div className="text-[10px] font-bold uppercase tracking-widest text-molten mb-2">{pick(lang, c.client)}</div>
              <h3 className="font-display text-xl font-semibold text-twilight mb-6 min-h-[3.5rem]">{pick(lang, c.title)}</h3>
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-black/5">
                {[
                  { v: c.metric1, l: c.metric1l },
                  { v: c.metric2, l: c.metric2l },
                  { v: c.metric3, l: c.metric3l },
                ].map((m) => (
                  <div key={m.l.nl}>
                    <div className="font-display text-xl font-semibold text-molten">{m.v}</div>
                    <div className="text-[10px] uppercase tracking-wide text-body-text mt-1 leading-tight">{pick(lang, m.l)}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton to="/cases" variant="outline-navy">
            <T nl="Bekijk alle cases" en="View all cases" /> <ArrowRight className="size-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
