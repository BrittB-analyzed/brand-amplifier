import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Zap, Target, TrendingUp, Search, Settings, FileText, Wallet, BarChart3, X } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { Sparkle } from "@/components/site/Sparkle";
import { T, useLang, pick } from "@/lib/i18n";

export const Route = createFileRoute("/_site/diensten/sea")({
  head: () => ({
    meta: [
      { title: "SEA optimalisatie — morgen al klanten via Google Ads | Expose Your Brand" },
      { name: "description", content: "Vandaag een advertentie aanzetten, morgen koopklare bezoekers op je site. Wij maken Google Ads winstgevend voor MKB — strategisch, meetbaar en zonder budgetlekken." },
      { property: "og:title", content: "SEA optimalisatie — morgen al klanten via Google Ads" },
      { property: "og:description", content: "Vandaag aan, morgen koopklaar verkeer. Winstgevende Google Ads voor MKB." },
      { property: "og:url", content: "/diensten/sea" },
    ],
    links: [{ rel: "canonical", href: "/diensten/sea" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "SEA — Google Ads optimalisatie",
        provider: { "@type": "Organization", name: "Expose Your Brand" },
      }),
    }],
  }),
  component: SeaPage,
});

const reasons = [
  {
    icon: Zap,
    title: { nl: "Snelheid", en: "Speed" },
    body: {
      nl: "SEO en GEO bouwen waarde op de lange termijn. SEA is direct: campagne aan vandaag, koopklare bezoekers morgen. Geen weken wachten op organische groei.",
      en: "SEO and GEO build value over the long term. SEA is instant: switch on the campaign today, buy-ready visitors tomorrow. No weeks of waiting for organic growth.",
    },
  },
  {
    icon: Target,
    title: { nl: "Precisie", en: "Precision" },
    body: {
      nl: "Je advertentie verschijnt alleen voor mensen die exact zoeken naar wat jij verkoopt. Hoge intentie, lage twijfel — dit is verkeer dat al overtuigd is dat het iets nodig heeft.",
      en: "Your ad appears only for people searching for exactly what you sell. High intent, low hesitation — this is traffic that's already convinced it needs something.",
    },
  },
  {
    icon: TrendingUp,
    title: { nl: "Schaal & controle", en: "Scale & control" },
    body: {
      nl: "Groeit je bedrijf? Knop omhoog. Even minder vraag nodig? Knop omlaag. Elke dag bij te sturen, geen onnodige kosten en altijd transparant per euro.",
      en: "Business growing? Turn the dial up. Need less demand for a while? Turn it down. Adjustable daily, no wasted spend, and always transparent per euro.",
    },
  },
] as const;

const checklist = [
  {
    t: { nl: "Gemiddelde klantwaarde €150+", en: "Average customer value €150+" },
    d: { nl: "Bij die marge betaalt elke klik in Google Ads zichzelf snel terug.", en: "At that margin, every click in Google Ads pays for itself quickly." },
  },
  {
    t: { nl: "Product-marktfit op orde", en: "Solid product-market fit" },
    d: { nl: "SEA versnelt wat al verkoopt. Het compenseert geen aanbod waar nog geen vraag naar is.", en: "SEA accelerates what's already selling. It won't compensate for an offer nobody wants yet." },
  },
  {
    t: { nl: "Voldoende zoekvolume", en: "Sufficient search volume" },
    d: { nl: "Je markt zoekt actief naar wat jij biedt — anders heeft adverteren geen podium.", en: "Your market actively searches for what you offer — otherwise advertising has no stage." },
  },
  {
    t: { nl: "Realistisch budget vanaf €1.000/mnd", en: "Realistic budget from €1,000/month" },
    d: { nl: "Onder dat niveau bereik je simpelweg niet genoeg mensen om iets te leren of te schalen.", en: "Below that level you simply won't reach enough people to learn from or scale." },
  },
] as const;

const steps = [
  {
    num: "01",
    icon: Search,
    title: { nl: "Strategie & keyword-onderzoek", en: "Strategy & keyword research" },
    desc: {
      nl: "We analyseren welke zoekopdrachten je klanten echt gebruiken, welke zoekwoorden waarde hebben en wat je concurrenten doen. Geen lijst van 500 willekeurige termen — wél de selectie waarmee jij gaat winnen.",
      en: "We analyse which searches your customers actually use, which keywords carry value, and what your competitors are doing. Not a list of 500 random terms — the selection you'll actually win with.",
    },
    out: { nl: "Een keyword-strategie gericht op klanten, niet op verkeer.", en: "A keyword strategy built for customers, not just traffic." },
  },
  {
    num: "02",
    icon: Settings,
    title: { nl: "Account inrichten & optimalisatie", en: "Account setup & optimisation" },
    desc: {
      nl: "Campagnestructuur op basis van producten, diensten en doelen. Conversion tracking zorgvuldig ingericht, want zonder meten is sturen onmogelijk. We controleren ook je landingspagina's op relevantie, snelheid en actiegerichtheid.",
      en: "Campaign structure built around products, services and goals. Conversion tracking carefully set up — because without measuring, you can't steer. We also check your landing pages for relevance, speed and clarity of action.",
    },
    out: { nl: "Campagnes die vanaf dag één optimaal staan.", en: "Campaigns set up optimally from day one." },
  },
  {
    num: "03",
    icon: FileText,
    title: { nl: "Advertentieteksten & testen", en: "Ad copy & testing" },
    desc: {
      nl: "Het verschil zit in de copy. Niet ‘Wij bieden vermogensbeheer’, maar ‘Vermogensopbouw zonder gedoe. Gemiddeld +8% per jaar. Plan je gratis advies.’ Elke maand testen we nieuwe varianten — winnaars schalen we op, verliezers gaan eruit.",
      en: "The difference is in the copy. Not 'We offer wealth management', but 'Grow your wealth without the hassle. Average +8% a year. Book your free consult.' Every month we test new variants — winners get scaled, losers get cut.",
    },
    out: { nl: "Advertenties die werkelijk nieuwe klanten opleveren.", en: "Ads that genuinely bring in new customers." },
  },
  {
    num: "04",
    icon: Wallet,
    title: { nl: "Budgetoptimalisatie", en: "Budget optimisation" },
    desc: {
      nl: "Google Ads kan zomaar je budget verbranden. Wij sturen op biedstrategie, negatieve zoekwoorden en budgetverdeling tussen campagnes — zodat elke euro naar de campagne gaat die het meeste oplevert.",
      en: "Google Ads can easily burn through your budget. We manage bid strategy, negative keywords and budget allocation across campaigns — so every euro flows to the campaign performing best.",
    },
    out: { nl: "Budget dat optimaal wordt ingezet — geen lekken.", en: "Budget deployed optimally — no leaks." },
  },
  {
    num: "05",
    icon: BarChart3,
    title: { nl: "Maandelijkse voortgang", en: "Monthly progress" },
    desc: {
      nl: "Dagelijks zicht op performance in je eigen dashboard. Maandelijks bespreken we doelen, resultaten, werkzaamheden, kansen en experimenten. Dit is geen ‘setup en vergeten’ — dit is ‘setup en blijven verbeteren’.",
      en: "Daily insight into performance via your own dashboard. Monthly we discuss goals, results, work done, opportunities and experiments. This isn't 'set it and forget it' — it's 'set it and keep improving'.",
    },
    out: { nl: "Continue optimalisatie en korte lijnen.", en: "Continuous optimisation and short lines of communication." },
  },
] as const;

const faq = [
  {
    q: { nl: "Hoe snel staat mijn campagne live?", en: "How quickly will my campaign go live?" },
    a: { nl: "Binnen 24 uur. Vandaag bouwen we de campagne in, morgen verschijn je boven de organische resultaten. Echt sterk presteren (na optimalisatie) duurt 4–12 weken.", en: "Within 24 hours. We build the campaign today, and tomorrow you're appearing above the organic results. Truly strong performance (after optimisation) takes 4–12 weeks." },
  },
  {
    q: { nl: "Welk budget heb ik nodig?", en: "What budget do I need?" },
    a: { nl: "Minimaal €1.000–1.500 per maand om iets te leren. €1,5K–3K: testen en kleine scaling. €3K–7K: solide performance. €7K+: serieus lead-volume. Begin klein, schaal wat werkt.", en: "At least €1,000–1,500 a month to learn something. €1.5K–3K: testing and small-scale growth. €3K–7K: solid performance. €7K+: serious lead volume. Start small, scale what works." },
  },
  {
    q: { nl: "Is mijn niche te klein voor Google Ads?", en: "Is my niche too small for Google Ads?" },
    a: { nl: "Waarschijnlijk niet. Low-volume zoekwoorden (10–50/maand) zijn vaak goedkoper en converteren hoger. Hoge intentie + lage concurrentie is het beste scenario voor SEA.", en: "Probably not. Low-volume keywords (10–50/month) are often cheaper and convert higher. High intent plus low competition is the best possible scenario for SEA." },
  },
  {
    q: { nl: "Welk budget levert hoeveel leads op?", en: "What budget delivers how many leads?" },
    a: { nl: "Sterk afhankelijk van niche, concurrentie en landingspagina. Ruwe richtlijn: €2K/mnd → 5–15 leads, €5K/mnd → 15–40 leads, €10K/mnd → 40–100 leads. Onze audit maakt het concreet voor jouw markt.", en: "Highly dependent on niche, competition and landing page. Rough guide: €2K/mo → 5–15 leads, €5K/mo → 15–40 leads, €10K/mo → 40–100 leads. Our audit makes this concrete for your market." },
  },
  {
    q: { nl: "Wat als Google Ads mijn budget opslokt?", en: "What if Google Ads eats my whole budget?" },
    a: { nl: "Dat gebeurt alleen bij slechte inrichting. Wij budgetteren per dag, gebruiken negatieve zoekwoorden en optimaliseren op cost-per-acquisition. Je houdt de teugels in handen.", en: "That only happens with poor setup. We budget per day, use negative keywords and optimise for cost-per-acquisition. You stay in control." },
  },
  {
    q: { nl: "Kan SEA samen met SEO en GEO?", en: "Can SEA run alongside SEO and GEO?" },
    a: { nl: "Sterker nog: dat móét. SEA brengt snelle leads vandaag, SEO en GEO bouwen gratis verkeer op voor morgen. Samen groeien ze sneller dan apart.", en: "In fact, it should. SEA brings fast leads today, while SEO and GEO build free traffic for tomorrow. Together they grow faster than either alone." },
  },
  {
    q: { nl: "Wat als we stoppen met SEA?", en: "What happens if we stop SEA?" },
    a: { nl: "Ads stoppen, leads stoppen. Maar je SEO- en GEO-werk loopt door, dus organisch verkeer blijft. Veel klanten gebruiken SEA 1–2 jaar om snel te schalen en leunen daarna meer op SEO.", en: "Ads stop, leads stop. But your SEO and GEO work keeps running, so organic traffic remains. Many clients use SEA for 1–2 years to scale fast, then lean more on SEO afterwards." },
  },
  {
    q: { nl: "Mag ik mijn bestaande Google Ads-account behouden?", en: "Can I keep my existing Google Ads account?" },
    a: { nl: "Ja. We nemen het over en optimaliseren door. Alleen als het account écht onherstelbaar is, starten we nieuw — eerste optie is minder disruptief.", en: "Yes. We take it over and keep optimising. Only if the account is truly beyond repair do we start fresh — the first option is far less disruptive." },
  },
];

function SeaPage() {
  const lang = useLang();
  return (
    <>
      <PageHero
        eyebrow={pick(lang, { nl: "SEA · betaalde zoekadvertenties", en: "SEA · paid search advertising" })}
        title={lang === "en"
          ? <>On today, <span className="text-molten italic">customers tomorrow</span> via Google.</>
          : <>Vandaag aan, <span className="text-molten italic">morgen klanten</span> via Google.</>}
        description={pick(lang, {
          nl: "SEO en GEO bouwen aan duurzame zichtbaarheid. SEA levert ondertussen direct verkeer dat al koopklaar is. Wij richten je Google Ads strategisch in, sturen elke maand bij en zorgen dat geen euro budget verloren gaat aan klikken die niets opleveren.",
          en: "SEO and GEO build lasting visibility. SEA, meanwhile, delivers instant traffic that's already ready to buy. We set up your Google Ads strategically, fine-tune them every month, and make sure no euro of budget is wasted on clicks that go nowhere.",
        })}
      >
        <div className="flex flex-wrap gap-3">
          <CTAButton to="/contact" variant="molten">
            <T nl="Plan je gratis SEA-adviesgesprek" en="Book your free SEA consult" /> <ArrowRight className="size-4" />
          </CTAButton>
          <CTAButton to="/diensten/seo-geo-audit" variant="outline-navy">
            <T nl="Vraag een gratis SEA-audit aan" en="Request a free SEA audit" />
          </CTAButton>
        </div>
      </PageHero>

      {/* Stat strip */}
      <section className="py-12 px-6 -mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { stat: "24u", label: { nl: "campagne live na strategie en setup", en: "campaign live after strategy and setup" } },
            { stat: "100%", label: { nl: "high-intent verkeer — zoekers met koopvraag", en: "high-intent traffic — searchers with buying intent" } },
            { stat: "€1K+", label: { nl: "realistisch maandbudget om écht te schalen", en: "realistic monthly budget to truly scale" } },
          ].map((s) => (
            <div key={s.label.nl} className="bg-white rounded-2xl p-6 ring-1 ring-black/5 flex items-center gap-4">
              <div className="font-display text-4xl font-semibold text-molten">{s.stat}</div>
              <div className="text-sm text-body-text">{pick(lang, s.label)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why SEA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Waarom SEA", en: "Why SEA" })}
            title={lang === "en"
              ? <>Directly in front of <span className="text-molten italic">people searching right now.</span></>
              : <>Direct in beeld bij <span className="text-molten italic">mensen die nu zoeken.</span></>}
            description={pick(lang, {
              nl: "Op social media wek je interesse — bezoekers scrollen. Op Google vangen we vraag die er al is. Drie redenen waarom SEA voor de meeste MKB-bedrijven de snelste hefboom is naast SEO en GEO.",
              en: "On social media you spark interest — visitors scroll past. On Google we capture demand that already exists. Three reasons why SEA is the fastest lever for most SMBs, alongside SEO and GEO.",
            })}
          />
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <article key={r.title.nl} className="p-8 bg-silver rounded-2xl ring-1 ring-black/5 hover:ring-molten/30 hover:-translate-y-1 transition-all">
                  <div className="size-12 rounded-xl bg-molten/10 text-molten flex items-center justify-center mb-5">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-twilight mb-3">{pick(lang, r.title)}</h3>
                  <p className="text-sm text-body-text leading-relaxed">{pick(lang, r.body)}</p>
                </article>
              );
            })}
          </div>

          {/* SEA vs SEO compare */}
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            <div className="p-8 rounded-2xl ring-1 ring-black/5 bg-silver">
              <div className="text-molten font-bold text-xs uppercase tracking-widest mb-2"><T nl="Organisch (SEO/GEO)" en="Organic (SEO/GEO)" /></div>
              <h4 className="font-display text-xl font-semibold text-twilight mb-3"><T nl="Gratis verkeer — maar het kost tijd" en="Free traffic — but it takes time" /></h4>
              <ul className="space-y-2 text-sm text-body-text">
                <li className="flex gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> <T nl="€0 per klik (je investeert in optimalisatie)" en="€0 per click (you invest in optimisation)" /></li>
                <li className="flex gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> <T nl="12–16 weken tot zichtbaar resultaat" en="12–16 weeks until visible results" /></li>
                <li className="flex gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> <T nl="Compoundend rendement op de lange termijn" en="Compounding returns over the long term" /></li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl ring-1 ring-molten/30 bg-twilight text-white">
              <div className="text-molten font-bold text-xs uppercase tracking-widest mb-2"><T nl="Betaald (SEA)" en="Paid (SEA)" /></div>
              <h4 className="font-display text-xl font-semibold text-white mb-3"><T nl="Direct podium — zolang je adverteert" en="Instant stage — for as long as you advertise" /></h4>
              <ul className="space-y-2 text-sm text-white/85">
                <li className="flex gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> <T nl="Per klik (afhankelijk van concurrentie)" en="Per click (depending on competition)" /></li>
                <li className="flex gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> <T nl="Morgen live, direct meetbaar" en="Live tomorrow, instantly measurable" /></li>
                <li className="flex gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> <T nl="Schaalbaar met de knop omhoog of omlaag" en="Scalable with the dial up or down" /></li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-body-text max-w-2xl mx-auto">
            <span className="text-twilight font-medium"><T nl="Onze advies:" en="Our advice:" /></span> <T nl="doe beide. SEA voor directe omzet vandaag, SEO en GEO voor continue stroom van gratis verkeer morgen." en="do both. SEA for immediate revenue today, SEO and GEO for a continuous stream of free traffic tomorrow." />
          </p>
        </div>
      </section>

      {/* For whom checklist */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3"><T nl="voor wie" en="who it's for" /></div>
            <h2 className="font-display text-3xl md:text-4xl text-twilight font-semibold mb-4"><T nl="SEA werkt — maar niet voor iedereen." en="SEA works — but not for everyone." /></h2>
            <p className="text-body-text leading-relaxed mb-6">
              <T nl="We zijn liever vooraf eerlijk. SEA levert voorspelbaar resultaat als deze vier voorwaarden kloppen. Herken je ze? Dan halen we vrijwel zeker een positieve ROAS uit je campagnes." en="We'd rather be honest upfront. SEA delivers predictable results when these four conditions are met. Recognise them? Then we can almost always get a positive ROAS from your campaigns." />
            </p>
            <CTAButton to="/diensten/seo-geo-audit" variant="molten">
              <T nl="Check je situatie in een gratis audit" en="Check your situation with a free audit" /> <ArrowRight className="size-4" />
            </CTAButton>
          </div>
          <div className="space-y-3">
            {checklist.map((c) => (
              <div key={c.t.nl} className="p-5 bg-white rounded-xl ring-1 ring-black/5 flex gap-4">
                <span className="shrink-0 mt-0.5 size-7 rounded-full bg-molten text-white flex items-center justify-center text-sm">
                  <Check className="size-4" />
                </span>
                <div>
                  <div className="font-display font-semibold text-twilight">{pick(lang, c.t)}</div>
                  <p className="text-sm text-body-text mt-1">{pick(lang, c.d)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach 5 steps */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "onze aanpak", en: "our approach" })}
            title={lang === "en"
              ? <>How we make your Google Ads <span className="text-molten italic">profitable.</span></>
              : <>Zo maken we jouw Google Ads <span className="text-molten italic">winstgevend.</span></>}
            description={pick(lang, {
              nl: "Geen budget in de wind gooien. Een strategische roadmap, continue optimalisatie en bewijs in je eigen dashboard dat het werkt.",
              en: "No throwing budget to the wind. A strategic roadmap, continuous optimisation, and proof in your own dashboard that it's working.",
            })}
            align="center"
            className="mb-12"
          />
          <div className="space-y-5">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.num} className="p-7 md:p-8 bg-silver rounded-2xl ring-1 ring-black/5 grid md:grid-cols-[auto_1fr_auto] gap-6 items-start">
                  <div className="flex items-center gap-4">
                    <div className="font-display text-4xl font-semibold text-molten">{s.num}</div>
                    <div className="size-12 rounded-xl bg-white text-molten flex items-center justify-center ring-1 ring-black/5">
                      <Icon className="size-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-twilight mb-2">{pick(lang, s.title)}</h3>
                    <p className="text-sm text-body-text leading-relaxed">{pick(lang, s.desc)}</p>
                  </div>
                  <div className="md:max-w-[220px] md:text-right">
                    <div className="text-molten font-bold text-[10px] uppercase tracking-widest mb-1"><T nl="Resultaat" en="Result" /></div>
                    <p className="text-sm text-twilight font-medium">{pick(lang, s.out)}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ad copy compare */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "copy maakt het verschil", en: "copy makes the difference" })}
            title={lang === "en"
              ? <>Well-written ads <span className="text-molten italic">pay for themselves.</span></>
              : <>Goed geschreven advertenties <span className="text-molten italic">verdienen zichzelf terug.</span></>}
          />
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            <div className="p-7 rounded-2xl ring-1 ring-black/5 bg-white">
              <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-widest mb-3">
                <X className="size-4" /> <T nl="Slecht" en="Bad" />
              </div>
              <p className="font-display text-twilight"><T nl='"We bieden vermogensbeheer."' en='"We offer wealth management."' /></p>
              <p className="text-xs text-body-text mt-3"><T nl="Geen aanleiding om te klikken. Geen onderscheid. Verbrandt budget." en="No reason to click. No differentiation. Burns budget." /></p>
            </div>
            <div className="p-7 rounded-2xl ring-1 ring-molten/30 bg-twilight text-white">
              <div className="flex items-center gap-2 text-molten font-bold text-xs uppercase tracking-widest mb-3">
                <Check className="size-4" /> <T nl="Goed" en="Good" />
              </div>
              <p className="font-display"><T nl='"Vermogensopbouw zonder gedoe. Gemiddeld +8% per jaar. Plan je gratis advies in."' en='"Grow your wealth without the hassle. Average +8% a year. Book your free consult."' /></p>
              <p className="text-xs text-white/70 mt-3"><T nl="Belofte, bewijs, actie. Hoger klikpercentage én hogere conversie." en="Promise, proof, action. Higher click-through rate and higher conversion." /></p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow={pick(lang, { nl: "FAQ", en: "FAQ" })} title={pick(lang, { nl: "Veelgestelde vragen over SEA.", en: "Frequently asked questions about SEA." })} />
          <div className="mt-8 space-y-3">
            {faq.map((f) => (
              <details key={f.q.nl} className="group p-6 bg-silver rounded-xl ring-1 ring-black/5">
                <summary className="cursor-pointer font-display font-semibold text-twilight flex items-center justify-between">
                  {pick(lang, f.q)}
                  <span className="text-molten transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-body-text">{pick(lang, f.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA banner */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto bg-twilight text-white rounded-[28px] p-10 md:p-14 ring-1 ring-black/5 relative overflow-hidden">
          <Sparkle className="absolute top-6 right-8 opacity-50" size="md" animate />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold"><T nl="Benieuwd wat SEA voor jou kan opleveren?" en="Curious what SEA could do for you?" /></h3>
              <p className="text-white/70 mt-2"><T nl="Een gratis audit laat zien waar budget lekt en wat het potentieel is." en="A free audit shows where budget leaks and what the potential is." /></p>
            </div>
            <CTAButton to="/diensten/seo-geo-audit" variant="molten" size="lg">
              <T nl="Vraag je gratis SEA-audit aan" en="Request your free SEA audit" /> <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}
