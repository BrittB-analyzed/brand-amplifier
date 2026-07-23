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
import { T, useLang, pick } from "@/lib/i18n";

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
    role: { nl: "Strategie & marktinzicht", en: "Strategy & market insight" },
    bio: {
      nl: "Sinds 2010 actief in online marketing — als interne marketeer, consultant, bij grote bureaus en uiteindelijk als eigenaar van zijn eigen bureau. Berry ziet patronen, voelt aan waar de markt heen gaat en vertaalt bedrijfsdoelen naar een concrete roadmap. Als je nog niet weet waar je moet beginnen, begin je met Berry.",
      en: "Active in online marketing since 2010 — as an in-house marketer, consultant, at large agencies and ultimately as owner of his own agency. Berry spots patterns, senses where the market is heading and translates business goals into a concrete roadmap. If you don't yet know where to begin, you begin with Berry.",
    },
    specialism: { nl: "Strategie · marktinzicht · roadmap building", en: "Strategy · market insight · roadmap building" },
    photo: berryPortrait.url,
  },
  {
    name: "Britt",
    role: { nl: "Executie & client success", en: "Execution & client success" },
    bio: {
      nl: "Bouwde sinds 2014 met B. Analyzed een online marketing bureau met 50+ actieve klanten, een 9.8 rating en 386 #1 posities in Google. Britt is de motor: setup, implementatie, optimalisatie en rapportage. Niet theoretisch — praktisch. Niet morgen — vandaag als het kan. Je dashboard staat al op dag twee.",
      en: "Since 2014 Britt has built B. Analyzed into an online marketing agency with 50+ active clients, a 9.8 rating and 386 #1 positions on Google. Britt is the engine: setup, implementation, optimisation and reporting. Not theoretical — practical. Not tomorrow — today if possible. Your dashboard is live on day two.",
    },
    specialism: { nl: "Account management · implementatie · optimalisatie · client success", en: "Account management · implementation · optimisation · client success" },
    photo: brittPortrait.url,
  },
];

const stats = [
  { stat: "30+", label: { nl: "jaar gecombineerde ervaring", en: "years of combined experience" } },
  { stat: "150+", label: { nl: "klanten zichtbaarder gemaakt", en: "clients made more visible" } },
  { stat: "€50M+", label: { nl: "in totale klantomzet gerealiseerd", en: "in total client revenue delivered" } },
];

const traits = [
  { num: "01", title: { nl: "Pragmatisch", en: "Pragmatic" }, body: { nl: "Geen jargon, geen marketingtaal. Wat werkt voor jóúw situatie, in normaal Nederlands. Heldere prioriteiten: dit doen we, dit levert het op.", en: "No jargon, no marketing speak. What works for your situation, in plain language. Clear priorities: here's what we do, here's what it delivers." } },
  { num: "02", title: { nl: "Direct", en: "Direct" }, body: { nl: "Korte lijnen. Je spreekt met Berry of Britt. Afspraken zijn afspraken. Rapporten op tijd. Vragen beantwoord binnen werkdagen.", en: "Short lines. You talk to Berry or Britt directly. Commitments are commitments. Reports on time. Questions answered within business days." } },
  { num: "03", title: { nl: "Scherp op resultaat", en: "Sharp on results" }, body: { nl: "Marketing draait om klanten, niet om creatief denken. Wat niet meetbaar is, doen we niet. Dashboardzichtbaarheid vanaf dag één.", en: "Marketing is about customers, not creative thinking. If it can't be measured, we don't do it. Dashboard visibility from day one." } },
  { num: "04", title: { nl: "Betrokken", en: "Committed" }, body: { nl: "We denken mee alsof het ons eigen bedrijf is. Eerlijke verwachtingen, geen loze beloftes. Werkt het niet? Dan zeggen we dat. Werkt het wel? Dan laten we het zien.", en: "We think along as if it were our own business. Honest expectations, no empty promises. Not working? We'll say so. Working? We'll show you." } },
];

const timeline = [
  { year: "2014", title: { nl: "Google organisch (SEO)", en: "Google organic (SEO)" }, body: { nl: "Britt start B. Analyzed. Online marketing draait om vindbaarheid in Google: rankings, content, backlinks. Klassieke SEO.", en: "Britt launches B. Analyzed. Online marketing revolves around Google visibility: rankings, content, backlinks. Classic SEO." } },
  { year: "2018", title: { nl: "Betaalde zoekopdrachten (SEA)", en: "Paid search (SEA)" }, body: { nl: "Google Ads groeit hard. Snelle leads zijn nodig terwijl SEO opwarmt. SEA wordt de logische partner van SEO.", en: "Google Ads grows fast. Quick leads are needed while SEO warms up. SEA becomes SEO's natural partner." } },
  { year: "2024", title: { nl: "AI citaties (GEO)", en: "AI citations (GEO)" }, body: { nl: "ChatGPT, Gemini, Perplexity. Antwoorden bovenop de blauwe links. Citaties zonder klikken. GEO wordt de nieuwe frontlinie — en hier focussen wij ons nu volledig op.", en: "ChatGPT, Gemini, Perplexity. Answers on top of the blue links. Citations without clicks. GEO becomes the new front line — and this is where we focus completely." } },
];

const specialisms = [
  { t: { nl: "GEO & AI zichtbaarheid", en: "GEO & AI visibility" }, d: { nl: "Geciteerd worden door ChatGPT, Perplexity, Gemini en AI Overviews. Passage-optimalisatie, SoLV tracking, share of LLM voice.", en: "Being cited by ChatGPT, Perplexity, Gemini and AI Overviews. Passage optimisation, SoLV tracking, share of LLM voice." } },
  { t: { nl: "Klassieke SEO", en: "Classic SEO" }, d: { nl: "Nog steeds 60–70% van de zoekmarkt. Rankings in Google, autoriteitsopbouw, technisch gezonde fundatie.", en: "Still 60–70% of the search market. Google rankings, authority building, a technically healthy foundation." } },
  { t: { nl: "SEA (Google Ads)", en: "SEA (Google Ads)" }, d: { nl: "Snelle leads terwijl SEO en GEO opbouwen. Strategische campagne-inrichting en doorlopende optimalisatie.", en: "Quick leads while SEO and GEO build up. Strategic campaign setup and ongoing optimisation." } },
  { t: { nl: "Conversie-optimalisatie", en: "Conversion optimisation" }, d: { nl: "Verkeer is geen doel, een nieuwe lead of sale is dat wel. Wij zorgen voor formulieren, CTA's en landingspagina's die werkelijk converteren.", en: "Traffic isn't the goal; a new lead or sale is. We deliver forms, CTAs and landing pages that actually convert." } },
];

const fitYes = [
  { nl: "Je bent MKB (10–150 medewerkers)", en: "You're an SMB (10–150 employees)" },
  { nl: "Je hebt €500K+ jaaromzet", en: "You have €500K+ annual revenue" },
  { nl: "Je hebt minstens €2K/maand marketingbudget", en: "You have at least €2K/month in marketing budget" },
  { nl: "Je begrijpt dat AI de spelregels verandert", en: "You understand AI is changing the rules" },
  { nl: "Je wilt expertise, geen standaard packages", en: "You want expertise, not standard packages" },
];

const fitNo = [
  { nl: "Startup zonder product-marktfit", en: "Startup without product-market fit" },
  { nl: "Geen budget voor serieuze marketing", en: "No budget for serious marketing" },
  { nl: "Op zoek naar goedkoop snel resultaat", en: "Looking for cheap, quick wins" },
  { nl: "Je gelooft niet in AI", en: "You don't believe in AI" },
];

const faq = [
  { q: { nl: "Hoe lang duurt het voordat ik resultaat zie?", en: "How long before I see results?" }, a: { nl: "Eerste signalen vaak binnen 30 dagen na technische implementatie. Volledige GEO-effecten meestal binnen 90 dagen — vandaar onze garantie.", en: "First signals typically within 30 days of technical implementation. Full GEO effects usually within 90 days — hence our guarantee." } },
  { q: { nl: "Werkt GEO ook als ik nu al goed scoor in Google?", en: "Does GEO work if I already rank well on Google?" }, a: { nl: "Ja, en het is juist dan extra belangrijk: AI-modellen pakken hun bronnen anders. Een topranking in Google is geen garantie voor een citatie in ChatGPT.", en: "Yes, and it's even more important then: AI models pick their sources differently. A top Google ranking is no guarantee of a citation in ChatGPT." } },
  { q: { nl: "Wat is het verschil met een gewoon SEO-bureau?", en: "How is this different from a normal SEO agency?" }, a: { nl: "Wij rapporteren live op een eigen dashboard, communiceren via Slack en koppelen elke SEO-actie aan AI-zichtbaarheid.", en: "We report live in your own dashboard, communicate through Slack and tie every SEO action to AI visibility." } },
  { q: { nl: "Wat kost een traject?", en: "What does a project cost?" }, a: { nl: "Maatwerk en maandelijks aanpasbaar. Tijdens het gratis adviesgesprek krijg je een concreet voorstel met prijs en verwacht resultaat.", en: "Tailored and adjustable month by month. During the free consult you get a concrete proposal with price and expected outcome." } },
];

function OverOnsPage() {
  const lang = useLang();
  return (
    <>
      <PageHero
        eyebrow={pick(lang, { nl: "Over Expose Your Brand", en: "About Expose Your Brand" })}
        title={lang === "en"
          ? <>Pragmatic, direct, <span className="text-molten italic">obsessed</span> with AI visibility.</>
          : <>Pragmatisch, direct, <span className="text-molten italic">obsessed</span> met AI-zichtbaarheid.</>}
        description={pick(lang, {
          nl: "Wij zijn Britt en Berry. Samen helpen we MKB-bedrijven zichtbaar worden in Google én waar het straks écht telt: ChatGPT, Gemini, Perplexity. Geen tussenlagen, maar direct contact met Britt of Berry.",
          en: "We're Britt and Berry. Together we help SMBs become visible on Google — and where it's really going to matter: ChatGPT, Gemini, Perplexity. No layers in between, direct contact with Britt or Berry.",
        })}
      >
        <div className="flex flex-wrap gap-3">
          <CTAButton to="/contact" variant="molten">
            <T nl="Plan een vrijblijvende kennismaking" en="Book a no-obligation intro" /> <ArrowRight className="size-4" />
          </CTAButton>
          <CTAButton to="/cases" variant="outline-navy">
            <T nl="Bekijk onze cases" en="View our cases" />
          </CTAButton>
        </div>
      </PageHero>

      <section className="py-12 px-6 -mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label.nl} className="bg-white rounded-2xl p-6 ring-1 ring-black/5 flex items-center gap-4">
              <div className="font-display text-4xl font-semibold text-molten">{s.stat}</div>
              <div className="text-sm text-body-text">{pick(lang, s.label)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Onze missie", en: "Our mission" })}
            title={lang === "en"
              ? <>One mission from day one: <span className="text-molten italic">visible results</span> that speak for themselves.</>
              : <>Eén missie sinds dag één: <span className="text-molten italic">zichtbare resultaten</span> die voor zich spreken.</>}
            description={pick(lang, {
              nl: "Een jaar geleden zaten we samen aan tafel en bespraken we onze kwaliteiten en de continu veranderende markt. Potentiële klanten zoeken steeds vaker niet in Google, maar vragen ChatGPT, Gemini of Perplexity. Bedrijven die daar zichtbaar zijn, groeien online.",
              en: "A year ago we sat down together and looked at our strengths and the way the market keeps shifting. Prospects increasingly skip Google and ask ChatGPT, Gemini or Perplexity instead. Businesses that are visible there are the ones that grow online.",
            })}
          />
          <p className="mt-6 text-body-text leading-relaxed">
            <T nl="We realiseerden ons dat 95% van de bureaus nog steeds hetzelfde doen als 5 jaar geleden. Allemaal nuttig, maar onvolledig. Wij stopten met 'standaard packages' en focusten laserscherp op één ding: jouw bedrijf zichtbaar maken waar het straks telt." en="We realised that 95% of agencies still do the same things they did five years ago. All useful, but incomplete. We dropped 'standard packages' and focused laser-sharp on one thing: making your business visible where it's about to matter." />
            {" "}
            <span className="text-twilight font-medium"><T nl="Zo werd Expose Your Brand geboren." en="That's how Expose Your Brand was born." /></span>
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-black/5">
            <img src={brittLaptop.url} alt={pick(lang, { nl: "Britt aan het werk", en: "Britt at work" })} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-black/5 md:translate-y-6">
            <img src={berrySmiling.url} alt={pick(lang, { nl: "Berry in gesprek", en: "Berry in conversation" })} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-black/5">
            <img src={brittPortrait.url} alt={pick(lang, { nl: "Britt in het veld", en: "Britt in the field" })} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-black/5 md:translate-y-6">
            <img src={berryPortrait.url} alt={pick(lang, { nl: "Berry portret", en: "Berry portrait" })} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Hoe wij werken", en: "How we work" })}
            title={lang === "en"
              ? <>Four traits clients <span className="text-molten italic">always</span> mention.</>
              : <>Vier eigenschappen die klanten <span className="text-molten italic">altijd</span> terughoren.</>}
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {traits.map((v) => (
              <div key={v.title.nl} className="p-7 bg-white rounded-2xl ring-1 ring-black/5 hover:-translate-y-1 hover:ring-molten/30 transition-all">
                <div className="font-display text-3xl font-semibold text-molten mb-3">{v.num}</div>
                <h3 className="font-display font-semibold text-lg text-twilight mb-2">{pick(lang, v.title)}</h3>
                <p className="text-sm text-body-text leading-relaxed">{pick(lang, v.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Onze route", en: "Our route" })}
            title={lang === "en"
              ? <>Three times rethinking <span className="text-molten italic">online visibility.</span></>
              : <>Drie keer opnieuw nagedacht over <span className="text-molten italic">online zichtbaarheid.</span></>}
            description={pick(lang, {
              nl: "SEO en SEA zijn nog steeds belangrijk. AI-zichtbaarheid maakt vandaag het verschil tussen groei en stagnatie.",
              en: "SEO and SEA still matter. AI visibility is what makes the difference today between growth and standing still.",
            })}
          />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {timeline.map((t) => (
              <div key={t.year} className="p-7 bg-silver rounded-2xl ring-1 ring-black/5">
                <div className="font-display text-3xl font-semibold text-molten mb-2">{t.year}</div>
                <h4 className="font-display font-semibold text-twilight mb-2">{pick(lang, t.title)}</h4>
                <p className="text-sm text-body-text leading-relaxed">{pick(lang, t.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Specialisaties", en: "Specialisms" })}
            title={lang === "en"
              ? <>One focus. <span className="text-molten italic">Four disciplines</span> that reinforce each other.</>
              : <>Eén focus. <span className="text-molten italic">Vier disciplines</span> die elkaar versterken.</>}
            description={pick(lang, {
              nl: "Bewust geen brede waaier met losse diensten. We werken diep op specialisaties die elkaar versterken, want technische SEO zonder content leidt tot niets, content zonder GEO mist het AI-tijdperk, en groei zonder CRO blijft hangen in verkeer dat niet converteert.",
              en: "Deliberately not a broad fan of loose services. We work deep on specialisms that reinforce each other, because technical SEO without content leads nowhere, content without GEO misses the AI era, and growth without CRO stays stuck in traffic that doesn't convert.",
            })}
          />
          <div className="grid md:grid-cols-2 gap-5 mt-12">
            {specialisms.map((s) => (
              <article key={s.t.nl} className="p-7 bg-white rounded-2xl ring-1 ring-black/5">
                <Sparkle className="mb-4" />
                <h3 className="font-display font-semibold text-xl text-twilight mb-2">{pick(lang, s.t)}</h3>
                <p className="text-sm text-body-text leading-relaxed">{pick(lang, s.d)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-twilight text-white rounded-[28px] p-10 md:p-14 ring-1 ring-black/5 relative overflow-hidden">
          <Sparkle className="absolute top-6 right-8 opacity-40" size="md" animate />
          <div className="text-molten font-bold text-xs uppercase tracking-widest mb-3"><T nl="Onze visie" en="Our vision" /></div>
          <p className="font-display text-2xl md:text-3xl leading-snug text-balance">
            <T nl="“SEO, GEO en SEA zijn geen aparte werelden. Ze delen één fundament: een site waar potentiële klanten graag heen gaan, én waar machines zoals Google, ChatGPT en Perplexity je merk graag citeren.”" en="“SEO, GEO and SEA aren't separate worlds. They share one foundation: a site that prospects genuinely enjoy visiting, and that machines like Google, ChatGPT and Perplexity are happy to cite.”" />
          </p>
          <div className="mt-5 text-sm text-white/70">— Berry & Britt, Expose Your Brand</div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Team", en: "Team" })}
            title={lang === "en"
              ? <>Your dedicated <span className="text-molten italic">points of contact.</span></>
              : <>Je vaste <span className="text-molten italic">aanspreekpunten.</span></>}
            description={pick(lang, {
              nl: "Geen accountmanagers, geen tussenlagen. Je werkt rechtstreeks met de mensen die de strategie bouwen en uitvoeren.",
              en: "No account managers, no layers in between. You work directly with the people who build and execute the strategy.",
            })}
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((m) => (
              <div key={m.name} className="p-6 bg-white rounded-2xl ring-1 ring-black/5 flex flex-col">
                <div className="aspect-[4/3] rounded-xl mb-5 overflow-hidden bg-silver">
                  <img src={m.photo} alt={`${m.name} — ${pick(lang, m.role)}`} className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <h4 className="font-display font-semibold text-twilight text-xl">{m.name}</h4>
                <p className="text-xs uppercase tracking-widest text-molten font-bold mt-1 mb-3">{pick(lang, m.role)}</p>
                <p className="text-sm leading-relaxed text-body-text">{pick(lang, m.bio)}</p>
                <div className="mt-5 pt-5 border-t border-black/5 text-xs">
                  <span className="text-molten font-bold uppercase tracking-widest"><T nl="Specialisme" en="Specialism" /> — </span>
                  <span className="text-twilight">{pick(lang, m.specialism)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Pasvormcheck", en: "Fit check" })}
            title={lang === "en"
              ? <>Are we a <span className="text-molten italic">match?</span></>
              : <>Passen wij <span className="text-molten italic">bij elkaar?</span></>}
            description={pick(lang, {
              nl: "We zijn liever vooraf eerlijk. Voor wie zijn we wél, en voor wie zijn we niet de juiste partner?",
              en: "We'd rather be honest up front. Who are we the right partner for — and who aren't we?",
            })}
          />
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            <div className="p-8 rounded-2xl ring-1 ring-molten/30 bg-twilight text-white">
              <div className="text-molten font-bold text-xs uppercase tracking-widest mb-3"><T nl="Goede match" en="Good match" /></div>
              <ul className="space-y-3">
                {fitYes.map((f) => (
                  <li key={f.nl} className="flex gap-3 text-sm">
                    <Check className="size-5 text-molten shrink-0 mt-0.5" /> <span>{pick(lang, f)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl ring-1 ring-black/5 bg-silver">
              <div className="text-twilight/60 font-bold text-xs uppercase tracking-widest mb-3"><T nl="Minder geschikt" en="Less of a fit" /></div>
              <ul className="space-y-3">
                {fitNo.map((f) => (
                  <li key={f.nl} className="flex gap-3 text-sm text-body-text">
                    <X className="size-5 text-twilight/40 shrink-0 mt-0.5" /> <span>{pick(lang, f)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-body-text italic"><T nl="En dat is oké. Liever vooraf eerlijk dan halverwege ontevreden." en="And that's OK. Better honest up front than unhappy halfway through." /></p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Veelgestelde vragen", en: "FAQ" })}
            title={lang === "en"
              ? <>Answers, <span className="text-molten italic">straight up.</span></>
              : <>Antwoorden, <span className="text-molten italic">direct.</span></>}
            description={pick(lang, {
              nl: "De vragen die we het vaakst krijgen — zonder marketingpraat.",
              en: "The questions we get most often — no marketing fluff.",
            })}
            className="mb-12"
          />
          <div className="space-y-3">
            {faq.map((f) => (
              <details key={f.q.nl} className="group p-6 bg-white rounded-xl ring-1 ring-black/5">
                <summary className="cursor-pointer font-display font-semibold text-twilight flex items-center justify-between">
                  {pick(lang, f.q)}
                  <span className="text-molten transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                </summary>
                <p className="mt-4 leading-relaxed">{pick(lang, f.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto bg-twilight text-white rounded-[28px] p-10 md:p-14 ring-1 ring-black/5 relative overflow-hidden">
          <Sparkle className="absolute top-6 right-8 opacity-50" size="md" animate />
          <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <div className="text-molten font-bold text-xs uppercase tracking-widest mb-2"><T nl="Kennismaking" en="Intro call" /></div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold"><T nl="30 minuten. Vrijblijvend. Geen salespitch." en="30 minutes. No obligation. No sales pitch." /></h3>
              <p className="text-white/70 mt-2"><T nl="Vertel waar je tegenaan loopt. Wij denken meteen mee. Jij bepaalt, wij adviseren eerlijk." en="Tell us where you're stuck. We'll think along right away. You decide, we advise honestly." /></p>
              <a href="mailto:groei@expose-your-brand.com" className="inline-flex items-center gap-2 mt-4 text-sm text-white/80 hover:text-white">
                <Mail className="size-4" /> groei@expose-your-brand.com
              </a>
            </div>
            <CTAButton to="/contact" variant="molten" size="lg">
              <T nl="Plan een kennismaking" en="Book an intro" /> <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}