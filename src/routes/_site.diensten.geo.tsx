import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Quote, BarChart3, Search, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { Sparkle } from "@/components/site/Sparkle";
import { T, useLang, pick } from "@/lib/i18n";

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
    title: { nl: "Je bedrijf is actief in B2B dienstverlening of high-end B2C services", en: "Your business operates in B2B services or high-end B2C" },
    body: { nl: "Bijvoorbeeld: advocaten, accountants, consultants, privéklinieken, IT-bedrijven, recruitment.", en: "Think: lawyers, accountants, consultants, private clinics, IT companies, recruitment." },
  },
  {
    title: { nl: "Je doelgroep zoekt online voordat ze contact opnemen", en: "Your audience researches online before reaching out" },
    body: { nl: "Klanten Googlen (en vragen AI) voor ze contact opnemen. Jij wilt als antwoord verschijnen.", en: "Prospects Google (and ask AI) before making contact. You want to be the answer they get." },
  },
  {
    title: { nl: "Je beoogde klanten hebben een behoorlijke waarde", en: "Your target customers carry decent value" },
    body: { nl: "Je hoeft niet voor elke zoekterm te ranken. Je wilt voor de juiste termen zichtbaar zijn waar je marge hoog is.", en: "You don't need to rank for every term. You want visibility for the right, high-margin terms." },
  },
  {
    title: { nl: "Je bent al actief met online marketing", en: "You're already active in online marketing" },
    body: { nl: "GEO werkt beter als je al SEO doet.", en: "GEO works even better on top of an existing SEO foundation." },
  },
];

const stats = [
  { v: "347", l: { nl: "AI-vermeldingen voor onze klanten in ChatGPT, Gemini en Perplexity in de afgelopen 6 maanden.", en: "AI mentions for our clients across ChatGPT, Gemini and Perplexity in the past 6 months." } },
  { v: "92%", l: { nl: "van de doelgroep krijgt minstens 1x per week een vraag waar onze klant het antwoord zou moeten zijn.", en: "of the audience gets asked, at least weekly, a question our client should be the answer to." } },
  { v: "Top 3", l: { nl: "positie in AI-vermeldingen voor belangrijke vragen.", en: "ranking in AI mentions for key questions." } },
];

const phases = [
  {
    num: "01",
    title: { nl: "GEO-audit & nulmeting", en: "GEO audit & baseline" },
    body: { nl: "We meten hoe vaak jij momenteel wordt geciteerd in AI (jouw Visibility Score). We analyseren je top 3 concurrenten en bepalen wat je Share of LLM Voice is.", en: "We measure how often you're currently cited by AI (your Visibility Score), analyse your top 3 competitors and establish your Share of LLM Voice." },
    out: { nl: "Een volledig beeld van waar je nu staat en waar je concurrenten je voorbijlopen.", en: "A complete picture of where you stand today and where competitors are outpacing you." },
  },
  {
    num: "02",
    title: { nl: "Content & autoriteitsanalyse", en: "Content & authority analysis" },
    body: { nl: "Niet alle content is optimaal voor AI-modellen. We analyseren welke vragen gebruikers werkelijk invoeren in ChatGPT/Gemini, welke bronnen AI nu citeert in jouw niche en welke topical authority je op moet bouwen.", en: "Not all content works well for AI models. We analyse the actual questions users type into ChatGPT/Gemini, which sources AI currently cites in your niche, and the topical authority you need to build." },
    out: { nl: "Een onderwerpenmap als basis voor AI-zichtbaarheid in specifieke onderwerpen.", en: "A topical map as the foundation for AI visibility in your specific subjects." },
  },
  {
    num: "03",
    title: { nl: "GEO-contentstrategie", en: "GEO content strategy" },
    body: { nl: "We creëren content die tegelijk rankt én geciteerd wordt: technische opmaak (schema markup), pagina-optimalisatie voor perfecte scanbaarheid door AI en vermeldingen op autoriteitsites.", en: "We create content built to both rank and get cited: technical markup (schema), page optimisation for perfect AI scannability, and mentions on authority sites." },
    out: { nl: "Content waardoor AI jouw bedrijf makkelijker kan vinden en citeren.", en: "Content that makes it easier for AI to find and cite your business." },
  },
  {
    num: "04",
    title: { nl: "Implementatie & publicatie", en: "Implementation & publishing" },
    body: { nl: "Jouw website krijgt de ultieme GEO-implementatie: perfecte robots.txt voor AI-crawlers, llms.txt (het nieuwe robots.txt voor AI) en schema markup met structured data. Daarna publiceren we content die door AI-modellen wordt opgemerkt.", en: "Your website receives the full GEO implementation: a proper robots.txt for AI crawlers, llms.txt (the new robots.txt for AI) and schema markup with structured data. We then publish content designed to get noticed by AI models." },
    out: { nl: "Een website die volledig AI-ready is.", en: "A website that is fully AI-ready." },
  },
  {
    num: "05",
    title: { nl: "Monitoring, optimalisatie & rapportage", en: "Monitoring, optimisation & reporting" },
    body: { nl: "Je krijgt een maandelijks rapport: Share of LLM Voice, citaties per platform, sentiment-analyse (hoe praat AI over jouw merk) en drift-detectie (technische issues). We optimaliseren continu.", en: "You get a monthly report: Share of LLM Voice, citations per platform, sentiment analysis (how AI talks about your brand) and drift detection (technical issues). We keep optimising continuously." },
    out: { nl: "Zicht op je vooruitgang en de werkzaamheden die wij voor je uitvoeren.", en: "Full visibility into your progress and the work we carry out for you." },
  },
];

const results = [
  { v: "+183%", t: { nl: "Share of LLM Voice in 6 maanden", en: "Share of LLM Voice in 6 months" }, d: { nl: "Je merk gaat van 1 citatie per 50 zoeken naar 1 per 15 zoeken in AI-interfaces.", en: "Your brand goes from 1 citation per 50 searches to 1 per 15 across AI interfaces." } },
  { v: "+42%", t: { nl: "Unlinked brand mentions", en: "Unlinked brand mentions" }, d: { nl: "Meer autoriteitssites noemen je bedrijf, onafhankelijk van backlinks.", en: "More authority sites mention your business, independent of backlinks." } },
  { v: "+28%", t: { nl: "Hogere lead-kwaliteit", en: "Higher lead quality" }, d: { nl: "Leads die je via AI vinden, converteren beter — ze zijn al overtuigd.", en: "Leads that find you via AI convert better — they're already convinced." } },
];

const faq = [
  {
    q: { nl: "Hoe lang duurt het voordat mijn bedrijf zichtbaar wordt in AI?", en: "How long until my business becomes visible in AI?" },
    a: { nl: "Realistisch: 6-12 weken tot je eerste citaties ziet, 16-24 weken voor een solide positie. Hangt af van je niche (concurrentie) en hoe bekend je al bent. Daarom garanderen we resultaat binnen 90 dagen, of we werken gratis door.", en: "Realistically: 6-12 weeks for your first citations, 16-24 weeks for a solid position. It depends on your niche (competition) and how established you already are. That's why we guarantee results within 90 days, or we keep working for free." },
  },
  {
    q: { nl: "Wat is het verschil tussen SEO en GEO?", en: "What's the difference between SEO and GEO?" },
    a: { nl: "SEO optimaliseert voor kliks naar jouw website (Google). GEO optimaliseert ervoor dat je bedrijf wordt vermeld als antwoord in AI-interfaces (ChatGPT, Gemini). Ze delen dezelfde basis (autoriteit, content, techniek), maar de uitkomst is anders. Je wilt allebei.", en: "SEO optimises for clicks to your website (Google). GEO optimises for your business being mentioned as the answer inside AI interfaces (ChatGPT, Gemini). They share the same foundation (authority, content, technology), but the outcome differs. You want both." },
  },
  {
    q: { nl: "Werkt GEO voor alle industrieën?", en: "Does GEO work for every industry?" },
    a: { nl: "Nee. GEO werkt het best voor B2B services en high-end B2C waar klanten onderzoek doen voordat ze contact opnemen. Voor e-commerce of bedrijven met impuls-aankopen is klassieke SEO sneller. We checken dit gratis in de audit.", en: "No. GEO works best for B2B services and high-end B2C where customers research before making contact. For e-commerce or impulse-purchase businesses, classic SEO delivers faster. We check this for free during the audit." },
  },
  {
    q: { nl: "Hoe meten jullie succes?", en: "How do you measure success?" },
    a: { nl: "Met je eigen dashboard: Share of LLM Voice (hoeveel % van AI-antwoorden jij bent), citaties per AI-model, welke prompts je bereiken, trend-positie versus concurrenten en sentiment (hoe positief AI over je spreekt). Niks verborgen. Niks geschat. Gemeten.", en: "With your own dashboard: Share of LLM Voice (what % of AI answers you are), citations per AI model, which prompts reach you, trend position versus competitors, and sentiment (how positively AI talks about you). Nothing hidden. Nothing estimated. Measured." },
  },
  {
    q: { nl: "Hoeveel kost GEO optimalisatie?", en: "What does GEO optimisation cost?" },
    a: { nl: "Hangt af van je niche, hoe bekend je nu bent en hoeveel content nodig is. Gemiddeld €1K tot €5K per maand. We stellen een maatwerkpakket samen tijdens je adviesgesprek. Je betaalt alleen voor wat werkelijk bijdraagt.", en: "It depends on your niche, current visibility and how much content is required. On average €1K to €5K per month. We put together a tailored package during your consultation. You only pay for what genuinely contributes." },
  },
];

function GeoPage() {
  const lang = useLang();
  return (
    <>
      <PageHero
        eyebrow="GEO · Generative Engine Optimization"
        title={lang === "en"
          ? <>Become the <span className="text-molten italic">answer</span> AI gives your customers.</>
          : <>Word het <span className="text-molten italic">antwoord</span> dat AI geeft aan jouw klanten.</>}
        description={pick(lang, {
          nl: "Ontdek wat GEO optimalisatie voor jouw bedrijf kan betekenen. Wij zorgen dat jouw merk verschijnt in de antwoorden van ChatGPT, Gemini en Perplexity — niet als ranking, maar als de bron die geciteerd wordt.",
          en: "Discover what GEO optimisation can do for your business. We make sure your brand appears in the answers of ChatGPT, Gemini and Perplexity — not as a ranking, but as the source that gets cited.",
        })}
      >
        <div className="flex flex-wrap gap-3">
          <CTAButton to="/contact" variant="molten"><T nl="Vraag je gratis GEO-audit aan" en="Request your free GEO audit" /> <ArrowRight className="size-4" /></CTAButton>
          <CTAButton to="/contact" variant="outline-navy"><T nl="Download onze GEO-whitepaper" en="Download our GEO whitepaper" /></CTAButton>
        </div>
      </PageHero>

      {/* Wat is GEO */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Wat is GEO", en: "What is GEO" })}
            title={lang === "en"
              ? <>Generative Engine <span className="text-molten italic">Optimization</span>.</>
              : <>Generative Engine <span className="text-molten italic">Optimization</span>.</>}
            description={pick(lang, {
              nl: "Jouw potentiële klanten stellen vragen aan ChatGPT, Gemini en Perplexity. Ze zien AI-gegenereerde antwoorden met verwijzingen naar bronnen. Maar jouw bedrijf staat er niet tussen. Daar lossen wij iets aan op. Waar SEO zorgt dat jij wordt getoond in Google, zorgt GEO dat jij zichtbaar wordt in AI-antwoorden.",
              en: "Your potential customers ask questions to ChatGPT, Gemini and Perplexity. They see AI-generated answers with references to sources. But your business isn't among them. That's what we fix. Where SEO gets you shown on Google, GEO gets you visible inside AI answers.",
            })}
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-8 rounded-2xl bg-silver ring-1 ring-black/5">
              <div className="flex items-center gap-2 mb-4">
                <Search className="size-5 text-btn-blue" />
                <div className="text-btn-blue font-bold text-xs uppercase tracking-widest"><T nl="SEO · Klassieke zoekmachine" en="SEO · Classic search engine" /></div>
              </div>
              <h3 className="font-display text-2xl text-twilight font-semibold mb-4"><T nl="Optimalisatie voor kliks" en="Optimised for clicks" /></h3>
              <ul className="space-y-2 text-sm text-body-text">
                <li>· <T nl="Gebruiker voert een zoekopdracht in" en="User types a search query" /></li>
                <li>· <T nl="Google toont organische resultaten" en="Google shows organic results" /></li>
                <li>· <T nl="Jouw website verschijnt — of niet" en="Your website appears — or doesn't" /></li>
                <li>· <T nl="Klik naar je site = conversiekans" en="Click to your site = chance to convert" /></li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-twilight text-white">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="size-5 text-molten" />
                <div className="text-molten font-bold text-xs uppercase tracking-widest"><T nl="GEO · AI-antwoord" en="GEO · AI answer" /></div>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4"><T nl="Optimalisatie voor vermeldingen" en="Optimised for mentions" /></h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>· <T nl="Gebruiker stelt een vraag aan AI" en="User asks AI a question" /></li>
                <li>· <T nl="AI genereert een samengevat antwoord" en="AI generates a summarised answer" /></li>
                <li>· <T nl="De AI citeert 2-3 bronnen" en="AI cites 2-3 sources" /></li>
                <li>· <T nl="Jouw bedrijf is het directe antwoord" en="Your business is the direct answer" /></li>
                <li>· <T nl="Jij bent gevalideerd door AI" en="You're validated by AI" /></li>
              </ul>
            </div>
          </div>

          <p className="text-center mt-10 text-body-text">
            <T nl="Wat je mist zonder GEO:" en="What you miss out on without GEO:" /> <span className="text-twilight font-semibold"><T nl="zichtbaarheid in tot 50% van de zoekopdrachten." en="visibility in up to 50% of searches." /></span>
          </p>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Voor wie", en: "Who it's for" })}
            title={pick(lang, { nl: "Voor wie is GEO optimalisatie nuttig?", en: "Who benefits from GEO optimisation?" })}
            description={pick(lang, {
              nl: "GEO werkt niet voor iedereen. Voldoet jouw bedrijf aan onderstaande kenmerken, dan is het een no-brainer.",
              en: "GEO isn't for everyone. If your business matches the characteristics below, it's a no-brainer.",
            })}
          />
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {forWho.map((w) => (
              <div key={w.title.nl} className="p-6 bg-white rounded-2xl ring-1 ring-black/5">
                <div className="flex gap-3 items-start">
                  <span className="shrink-0 size-7 rounded-full bg-molten/10 text-molten flex items-center justify-center">
                    <Check className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-twilight mb-1">{pick(lang, w.title)}</h3>
                    <p className="text-sm text-body-text">{pick(lang, w.body)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-body-text">
            <T nl="Niet zeker?" en="Not sure?" /> <CTAButton to="/contact" variant="molten" className="ml-2"><T nl="Vraag gratis jouw GEO-audit aan" en="Request your free GEO audit" /> <ArrowRight className="size-4" /></CTAButton>
          </p>
          <p className="mt-4 text-center text-sm text-body-text"><T nl="We analyseren in 1 uur of GEO voor jouw bedrijf zinvol is." en="We assess in one hour whether GEO makes sense for your business." /></p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Resultaten", en: "Results" })}
            title={pick(lang, { nl: "Dit hebben onze klanten behaald met GEO optimalisatie.", en: "What our clients have achieved with GEO optimisation." })}
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.l.nl} className="p-8 bg-silver rounded-2xl ring-1 ring-black/5 text-center">
                <div className="font-display text-5xl font-semibold text-molten mb-3">{s.v}</div>
                <p className="text-sm text-body-text">{pick(lang, s.l)}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto p-8 md:p-10 bg-twilight text-white rounded-2xl relative">
            <Quote className="size-8 text-molten mb-4" />
            <p className="text-lg md:text-xl leading-relaxed text-pretty">
              <T nl={`"Binnen 2 maanden zagen we onszelf teruggekomen in AI-antwoorden. Niet als één bron van tien, maar als nummer 2 en 3. Dat vertaalt zich direct in leads."`} en={`"Within two months we saw ourselves showing up in AI answers. Not as one source out of ten, but as number 2 and 3. That translates directly into leads."`} />
            </p>
            <div className="mt-6 text-sm text-white/70">— <T nl="Klant van Expose Your Brand" en="Expose Your Brand client" /></div>
          </div>
        </div>
      </section>

      {/* Aanpak */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Onze aanpak", en: "Our approach" })}
            title={pick(lang, { nl: "Hoe wij jouw bedrijf zichtbaar maken in AI.", en: "How we make your business visible in AI." })}
            description={pick(lang, {
              nl: "We geloven niet in standaardpakketten. Samen ontwikkelen we een strategische route, onderverdeeld in 5 fasen. Maatwerk, ingericht op jouw doelen en jouw doelgroep.",
              en: "We don't believe in off-the-shelf packages. Together we develop a strategic route across 5 phases. Tailor-made, built around your goals and your audience.",
            })}
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {phases.map((p) => (
              <div key={p.num} className="p-8 bg-white rounded-2xl ring-1 ring-black/5">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-display text-3xl font-semibold text-molten">{p.num}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-body-text"><T nl="Fase" en="Phase" /> {p.num}</span>
                </div>
                <h3 className="font-display text-xl text-twilight font-semibold mb-3">{pick(lang, p.title)}</h3>
                <p className="text-sm text-body-text mb-4 leading-relaxed">{pick(lang, p.body)}</p>
                <div className="pt-4 border-t border-black/5 flex gap-2 items-start text-sm">
                  <Sparkle size="sm" className="shrink-0 mt-0.5" />
                  <span className="text-twilight"><strong><T nl="Uitkomst:" en="Outcome:" /></strong> {pick(lang, p.out)}</span>
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
            eyebrow={pick(lang, { nl: "Resultaten", en: "Results" })}
            title={pick(lang, { nl: "Resultaten, geen beloften.", en: "Results, not promises." })}
            description={pick(lang, {
              nl: "Je hoeft ons niet op ons woord te geloven. Je ziet het zelf in je dashboard: Share of LLM Voice, citaties per AI-model, trending positie, sentiment-analyse en een vergelijking met je concurrenten.",
              en: "You don't have to take our word for it. You see it yourself in your dashboard: Share of LLM Voice, citations per AI model, trending position, sentiment analysis and a comparison with your competitors.",
            })}
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {results.map((r) => (
              <div key={r.t.nl} className="p-8 bg-silver rounded-2xl ring-1 ring-black/5">
                <BarChart3 className="size-5 text-molten mb-3" />
                <div className="font-display text-4xl font-semibold text-molten mb-2">{r.v}</div>
                <div className="font-display font-semibold text-twilight mb-2">{pick(lang, r.t)}</div>
                <p className="text-sm text-body-text">{pick(lang, r.d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Klantcase", en: "Client case" })}
            title={pick(lang, { nl: "Hoe een klant top 3 bereikte in AI-antwoorden.", en: "How a client reached the top 3 of AI answers." })}
          />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-2xl ring-1 ring-black/5">
              <h3 className="font-display text-xl text-twilight font-semibold mb-4"><T nl="Setup" en="Setup" /></h3>
              <ul className="text-sm space-y-2 text-body-text">
                <li><strong className="text-twilight"><T nl="Niche:" en="Niche:" /></strong> <T nl="Vermogensbeheer" en="Wealth management" /></li>
                <li><strong className="text-twilight"><T nl="Doelstelling:" en="Goal:" /></strong> <T nl={`Top 3 positie in AI-antwoorden voor "beste vermogensadviseur Amsterdam"`} en={`Top 3 in AI answers for "best wealth advisor Amsterdam"`} /></li>
                <li><strong className="text-twilight"><T nl="Startpunt:" en="Starting point:" /></strong> <T nl="0 AI-citaties, niet zichtbaar" en="0 AI citations, invisible" /></li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-2xl ring-1 ring-black/5">
              <h3 className="font-display text-xl text-twilight font-semibold mb-4"><T nl="Het probleem" en="The problem" /></h3>
              <p className="text-sm text-body-text leading-relaxed">
                <T nl={`Potentiële klanten gingen direct naar concurrenten. Die verschenen in ChatGPT-antwoorden op vragen als "wie is een goede vermogensadviseur?". Goede website, tientallen backlinks — maar AI-modellen citeerden haar niet. Klassieke SEO werkte, GEO was onbekend terrein.`} en={`Prospects were going straight to the competition. Those competitors appeared inside ChatGPT answers to questions like "who is a good wealth advisor?". Good website, dozens of backlinks — but AI models weren't quoting her. Classic SEO worked; GEO was uncharted territory.`} />
              </p>
            </div>
          </div>

          <div className="mt-6 p-8 bg-white rounded-2xl ring-1 ring-black/5">
            <h3 className="font-display text-xl text-twilight font-semibold mb-4"><T nl="Onze aanpak" en="Our approach" /></h3>
            <ul className="text-sm space-y-3 text-body-text">
              <li><strong className="text-twilight"><T nl="Maand 1-2:" en="Month 1-2:" /></strong> <T nl="Audit, nulmeting en strategische topical map. We identificeerden 6 high-value prompts waar ze ontbrak en 3 concurrenten die wel werden geciteerd." en="Audit, baseline measurement and a strategic topical map. We identified 6 high-value prompts where she was missing and 3 competitors who were being cited instead." /></li>
              <li><strong className="text-twilight"><T nl="Maand 2-3:" en="Month 2-3:" /></strong> <T nl="Herstructurering van bestaande content + 8 nieuwe artikelen, gerichte schema markup, passage optimization en entity stacking op Wikipedia en LinkedIn." en="Restructuring existing content plus 8 new articles, targeted schema markup, passage optimisation and entity stacking on Wikipedia and LinkedIn." /></li>
              <li><strong className="text-twilight"><T nl="Maand 3-4:" en="Month 3-4:" /></strong> <T nl="Distributie en autoriteitboost via webinars, whitepapers en expert quotes in branche-publicaties. LLM Pulse-monitoring actief." en="Distribution and authority boost through webinars, whitepapers and expert quotes in industry publications. LLM Pulse monitoring live." /></li>
            </ul>
          </div>

          <div className="mt-6 grid sm:grid-cols-4 gap-4">
            {[
              { v: "0 → 8,2%", l: { nl: "Share of LLM Voice", en: "Share of LLM Voice" } },
              { v: "12", l: { nl: "Prompts waarin teruggekomen", en: "Prompts now surfacing in" } },
              { v: "#2-3", l: { nl: "Positie kernzoekterm", en: "Position on core search term" } },
              { v: "+47", l: { nl: "Leads uit AI-referrals", en: "Leads from AI referrals" } },
            ].map((r) => (
              <div key={r.l.nl} className="p-6 bg-silver rounded-xl text-center ring-1 ring-black/5">
                <div className="font-display text-2xl font-semibold text-molten mb-1">{r.v}</div>
                <div className="text-xs text-body-text">{pick(lang, r.l)}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-8 bg-twilight text-white rounded-2xl">
            <Quote className="size-6 text-molten mb-3" />
            <p className="leading-relaxed text-pretty">
              <T nl={`"Ik dacht: AI is hype. Toen zag ik dat potentiële klanten erover spraken. Na 4 maanden begrijp ik: dit is niet de toekomst, dit is nú. En Expose Your Brand zag het eerder dan we dachten."`} en={`"I thought: AI is hype. Then I saw prospects talking about it. After four months I understood: this isn't the future, this is now. And Expose Your Brand saw it before we did."`} />
            </p>
            <div className="mt-4 text-sm text-white/70">— <T nl="Founder, vermogensadvies" en="Founder, wealth advisory" /></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title={pick(lang, { nl: "Veelgestelde vragen over GEO.", en: "Frequently asked questions about GEO." })} />
          <div className="mt-8 space-y-3">
            {faq.map((f) => (
              <details key={f.q.nl} className="group p-6 bg-silver rounded-xl ring-1 ring-black/5">
                <summary className="cursor-pointer font-display font-semibold text-twilight flex items-center justify-between gap-4">
                  {pick(lang, f.q)}
                  <span className="text-molten transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-body-text">{pick(lang, f.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}
