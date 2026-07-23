import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Quote, Phone, Mail } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTAButton } from "@/components/site/CTAButton";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { SectionHeader } from "@/components/site/SectionHeader";
import { GeoIcon, SeoIcon, SeaAiAdsIcon, CroIcon } from "@/components/site/ServiceIcons";
import { T, useLang, pick } from "@/lib/i18n";

const services = [
  {
    to: "/diensten/seo",
    label: "SEO",
    title: { nl: "SEO: Zichtbaarheid in Google", en: "SEO: Visibility in Google" },
    color: "blue" as const,
    icon: SeoIcon,
    cta: { nl: "Ontdek onze SEO-aanpak", en: "Discover our SEO approach" },
    desc: {
      nl: "Je bent nu beperkt zichtbaar in Google. Binnen 6 maanden wil je in de top 3 staan voor jouw belangrijkste zoekopdrachten. SEO werkt — als je het goed doet: sterke techniek, relevante content en echte autoriteit.",
      en: "Right now you're barely visible on Google. Within six months you want to rank in the top 3 for your most important searches. SEO works — when done right: solid technology, relevant content and genuine authority.",
    },
    bullets: {
      nl: [
        "Technische website-audit en optimalisatie",
        "Contentstrategie gericht op belangrijke zoekwoorden",
        "Autoriteitsopbouw via linkbuilding",
        "Inzicht in de performance met je eigen dashboard",
      ],
      en: [
        "Technical website audit and optimisation",
        "Content strategy focused on the keywords that matter",
        "Authority building through link building",
        "Live performance insights in your own dashboard",
      ],
    },
  },
  {
    to: "/diensten/geo",
    label: "GEO",
    title: { nl: "GEO: Zichtbaarheid in AI-antwoorden", en: "GEO: Visibility in AI answers" },
    color: "molten" as const,
    icon: GeoIcon,
    cta: { nl: "Ontdek onze GEO-aanpak", en: "Discover our GEO approach" },
    desc: {
      nl: "Potentiële klanten stellen vragen aan ChatGPT en Gemini. Ze zien AI-gegenereerde antwoorden met bronvermeldingen. Staat jouw bedrijf er niet tussen? Dan verlies je klanten aan concurrenten die wél genoemd worden. GEO zorgt ervoor dat jij het antwoord bent dat AI geeft. Binnen 90 dagen zie je resultaat — of we werken gratis door.",
      en: "Potential customers ask ChatGPT and Gemini. They see AI-generated answers with cited sources. If your business isn't mentioned, you lose them to the competitors who are. GEO makes sure you become the answer AI gives. You'll see results within 90 days — or we keep working for free.",
    },
    bullets: {
      nl: [
        "GEO-audit: hoe AI momenteel jouw merk ziet",
        "Onderwerpenmap: waar je autoriteit op moet bouwen",
        "GEO-optimalisatie: schema, content, entity stacking",
        "Inzicht in de performance met je eigen dashboard",
      ],
      en: [
        "GEO audit: how AI currently sees your brand",
        "Topical map: where to build authority",
        "GEO optimisation: schema, content, entity stacking",
        "Live performance insights in your own dashboard",
      ],
    },
  },
  {
    to: "/diensten/sea",
    label: "SEA",
    title: { nl: "SEA: Effectieve advertenties in Google", en: "SEA: Effective advertising on Google" },
    color: "molten" as const,
    icon: SeaAiAdsIcon,
    cta: { nl: "Ontdek onze SEA-aanpak", en: "Discover our SEA approach" },
    desc: {
      nl: "Wil je snel resultaat voor je bedrijf? Dan gebruik je advertenties in Google en Bing. Maar zomaar Google budget geven werkt niet. Wij bouwen gestructureerde campagnes op basis van jouw doelgroep, kernwaarden en doelstellingen. Elke euro moet iets opleveren.",
      en: "Need results quickly? Then you advertise on Google and Bing. But simply handing Google a budget doesn't work. We build structured campaigns based on your audience, core values and goals. Every euro has to return something.",
    },
    bullets: {
      nl: [
        "Uitgebreid zoekwoordenonderzoek voor jouw bedrijf",
        "Advertenties geschreven in jouw stijl",
        "Dagelijkse budget-monitoring en real-time optimalisatie",
        "Inzicht in de performance met je eigen dashboard",
      ],
      en: [
        "In-depth keyword research tailored to your business",
        "Ad copy written in your tone of voice",
        "Daily budget monitoring and real-time optimisation",
        "Live performance insights in your own dashboard",
      ],
    },
  },
  {
    to: "/diensten/cro",
    label: "CRO",
    title: { nl: "CRO: Van bezoeker naar klant", en: "CRO: From visitor to customer" },
    color: "blue" as const,
    icon: CroIcon,
    cta: { nl: "Ontdek onze CRO-aanpak", en: "Discover our CRO approach" },
    desc: {
      nl: "Je hebt duizend bezoekers per maand. Maar hoeveel hiervan worden klant? Het probleem zit niet bij de bezoekers, maar bij de conversie. Elke 1% verbetering verdubbelt bijna het aantal klantaanvragen. CRO is geen onderbuikgevoel. Het is testen, meten, optimaliseren — gebruiksvriendelijke formulieren, overtuigende teksten en een knop op de juiste plek.",
      en: "You get a thousand visitors a month. But how many turn into customers? The problem isn't traffic — it's conversion. Every 1% improvement nearly doubles your inbound leads. CRO isn't gut feeling. It's testing, measuring and optimising — user-friendly forms, persuasive copy and a button in exactly the right place.",
    },
    bullets: {
      nl: [
        "Conversiefunnel-audit: waar haken bezoekers af?",
        "A/B-tests van formulieren, pagina-indelingen, teksten en design",
        "Inzicht in de performance met je eigen dashboard",
      ],
      en: [
        "Conversion funnel audit: where do visitors drop off?",
        "A/B tests on forms, page layouts, copy and design",
        "Live performance insights in your own dashboard",
      ],
    },
  },
];

const faq = [
  {
    q: { nl: "Heb ik alle diensten nodig of kunnen we met één beginnen?", en: "Do I need every service, or can we start with one?" },
    a: { nl: "We beginnen waar je grootste pijn zit. Snel behoefte aan verkeer? SEA. Veel bezoekers maar lage conversie? CRO. Onzichtbaar in Google? SEO. Onzichtbaar in AI? GEO. Dat gezegd: ze werken samen. Klanten die alle vier doen, groeien sneller. We bouwen een roadmap op basis van jouw situatie.", en: "We start where the pain is greatest. Need traffic fast? SEA. Plenty of visitors but low conversion? CRO. Invisible on Google? SEO. Invisible in AI? GEO. That said — they reinforce each other. Clients who run all four grow faster. We build a roadmap based on your situation." },
  },
  {
    q: { nl: "Hoe lang duurt het tot we resultaat zien?", en: "How long until we see results?" },
    a: { nl: "SEA: morgen zie je de eerste bezoekers (aanzetten en monitoren). CRO: afhankelijk van het aantal bezoekers zie je na ± 8 weken verschil in het conversieratio. SEO: vanaf 3 maanden. GEO: binnen 90 dagen zichtbaar resultaat.", en: "SEA: your first visitors tomorrow (switch on and monitor). CRO: depending on traffic, you'll see conversion movement after about eight weeks. SEO: from three months. GEO: visible results within 90 days." },
  },
  {
    q: { nl: "Hoe weten we wat het oplevert?", en: "How do we know what it delivers?" },
    a: { nl: "Je ziet de performance direct in je eigen dashboard. Niks geschat. Niks verborgen. Gemeten.", en: "You see performance directly in your own dashboard. Nothing estimated. Nothing hidden. Measured." },
  },
];

export const Route = createFileRoute("/_site/diensten/")({
  head: () => ({
    meta: [
      { title: "Alle diensten van Expose Your Brand — SEO, GEO, SEA & CRO" },
      { name: "description", content: "Van organische zichtbaarheid in Google tot advertenties op maat, conversie-optimalisatie en zichtbaarheid in AI. Alles voor de online groei van jouw bedrijf." },
      { property: "og:title", content: "Alle diensten van Expose Your Brand" },
      { property: "og:description", content: "SEO, GEO, SEA en CRO — in één strategische aanpak." },
      { property: "og:url", content: "/diensten" },
    ],
    links: [{ rel: "canonical", href: "/diensten" }],
  }),
  component: DienstenIndex,
});

function DienstenIndex() {
  const lang = useLang();
  return (
    <>
      <PageHero
        eyebrow={pick(lang, { nl: "Onze diensten", en: "Our services" })}
        title={lang === "en"
          ? <>Every Expose Your Brand service, <span className="text-molten italic">clearly</span> laid out.</>
          : <>Alle diensten van Expose your Brand <span className="text-molten italic">overzichtelijk</span> op een rij.</>}
        description={pick(lang, {
          nl: "Van organische zichtbaarheid in Google, op maat gemaakte advertenties en conversie-optimalisatie van jouw website tot verbetering van je zichtbaarheid in AI. Wij bieden alles wat jouw bedrijf nodig heeft voor online groei.",
          en: "From organic visibility on Google, tailor-made ads and website conversion optimisation to visibility inside AI answers. Everything your business needs to grow online.",
        })}
      >
        <CTAButton to="/contact" variant="molten"><T nl="Plan gratis adviesgesprek" en="Book a free consult" /> <ArrowRight className="size-4" /></CTAButton>
      </PageHero>

      {/* Introductie */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Hier zijn we goed in", en: "What we do best" })}
            title={lang === "en"
              ? <>Your business deserves <span className="text-molten italic">better.</span></>
              : <>Jouw bedrijf verdient <span className="text-molten italic">beter.</span></>}
            description={lang === "en" ? (
              <>We combine four online core disciplines — <strong className="text-twilight">SEO, GEO, SEA and CRO</strong> — into one strategic approach. Some agencies pick a single specialism. We don't. Because growth rarely comes from a single channel.</>
            ) : (
              <>
                We combineren vier online kernkrachten — <strong className="text-twilight">SEO, GEO, SEA en CRO</strong> — in één strategische aanpak. Sommige bureaus kiezen één specialiteit. Wij niet. Omdat groei niet uit één kanaal komt.
              </>
            )}
          />
          <div className="mt-8 space-y-5 text-body-text leading-relaxed">
            <p><T nl="Je wilt zichtbaar zijn in Google (SEO), getoond worden in AI (GEO), snel leads binnenhalen via advertenties (SEA) én ervoor zorgen dat bezoekers daadwerkelijk converteren (CRO)." en="You want to be visible on Google (SEO), surface inside AI (GEO), win leads quickly through advertising (SEA) and make sure your visitors actually convert (CRO)." /></p>
            <p><T nl="We denken niet in hokjes. Je krijgt één toegewezen specialist die jouw bedrijf, markt en doelen kent. Iemand die weet dat advertenties alleen werken als je website converteert. Dat GEO zonder SEO-fundament niet werkt." en="We don't think in silos. You get one dedicated specialist who knows your business, market and goals. Someone who knows that ads only work when your site converts, and that GEO without an SEO foundation goes nowhere." /></p>
            <p className="text-twilight font-semibold"><T nl="Resultaat? Klanten die sneller groeien, en minder gedoe met verschillende bureaus." en="The result? Clients who grow faster, with less hassle juggling multiple agencies." /></p>
          </div>
        </div>
      </section>

      {/* Diensten cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Onze diensten", en: "Our services" })}
            title={pick(lang, { nl: "Vier specialisaties, één geïntegreerde aanpak.", en: "Four specialisms, one integrated approach." })}
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.to} className="p-8 bg-white ring-1 ring-black/5 rounded-2xl flex flex-col">
                <div className={`size-12 rounded-xl flex items-center justify-center mb-5 ${s.color === "molten" ? "bg-molten/10 text-molten" : "bg-btn-blue/10 text-btn-blue"}`}>
                  <s.icon className="size-6" />
                </div>
                <h3 className="font-display font-semibold text-2xl text-twilight mb-3">{pick(lang, s.title)}</h3>
                <p className="leading-relaxed text-body-text mb-5">{pick(lang, s.desc)}</p>
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-twilight mb-3"><T nl="Wat je krijgt" en="What you get" /></div>
                  <ul className="space-y-2">
                    {pick(lang, s.bullets).map((b) => (
                      <li key={b} className="flex gap-2 items-start text-sm">
                        <Check className={`size-4 shrink-0 mt-1 ${s.color === "molten" ? "text-molten" : "text-btn-blue"}`} />
                        <span className="text-twilight">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={s.to}
                  className={`mt-auto inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider ${s.color === "molten" ? "text-molten" : "text-btn-blue"}`}
                >
                  {pick(lang, s.cta)} <ArrowRight className="size-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Social proof", en: "Social proof" })}
            title={pick(lang, { nl: "Wat klanten over ons zeggen.", en: "What clients say about us." })}
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { v: "120+", l: { nl: "MKB-klanten geholpen met groei", en: "SMBs helped to grow" } },
              { v: "340+", l: { nl: "Top-10 posities in Google", en: "Top-10 Google rankings" } },
              { v: "347", l: { nl: "AI-vermeldingen voor klanten", en: "AI mentions for our clients" } },
            ].map((s) => (
              <div key={s.l.nl} className="p-8 bg-silver rounded-2xl ring-1 ring-black/5 text-center">
                <div className="font-display text-5xl font-semibold text-molten mb-2">{s.v}</div>
                <div className="text-sm text-body-text">{pick(lang, s.l)}</div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto p-8 md:p-10 bg-twilight text-white rounded-2xl">
            <Quote className="size-8 text-molten mb-4" />
            <p className="text-lg md:text-xl leading-relaxed text-pretty">
              <T nl={`"Eindelijk een bureau dat SEO, advertenties én conversie samen aanpakt. We zien het maandelijks terug in nieuwe aanvragen."`} en={`"Finally an agency that tackles SEO, ads and conversion together. We see it every month in new enquiries."`} />
            </p>
            <div className="mt-6 text-sm text-white/70">— <T nl="Klant van Expose Your Brand" en="Expose Your Brand client" /></div>
          </div>
        </div>
      </section>

      {/* Klantcase */}
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
              <li><strong className="text-twilight"><T nl="Maand 1-2:" en="Month 1-2:" /></strong> <T nl="Audit, nulmeting en strategische topical map. We identificeerden 6 high-value prompts waar ze ontbrak en 3 concurrenten die wel werden geciteerd." en="Audit, baseline measurement and a strategic topical map. We identified 6 high-value prompts she was missing from, and 3 competitors that were being cited." /></li>
              <li><strong className="text-twilight"><T nl="Maand 2-3:" en="Month 2-3:" /></strong> <T nl="Herstructurering van bestaande content + 8 nieuwe artikelen, gerichte schema markup, passage optimization en entity stacking op Wikipedia en LinkedIn." en="Restructured existing content plus 8 new articles, targeted schema markup, passage optimisation and entity stacking on Wikipedia and LinkedIn." /></li>
              <li><strong className="text-twilight"><T nl="Maand 3-4:" en="Month 3-4:" /></strong> <T nl="Distributie en autoriteitboost via webinars, whitepapers en expert quotes in branche-publicaties. LLM Pulse-monitoring actief." en="Distribution and authority push through webinars, whitepapers and expert quotes in industry publications. LLM Pulse monitoring live." /></li>
            </ul>
          </div>

          <div className="mt-6 grid sm:grid-cols-4 gap-4">
            {[
              { v: "0 → 8,2%", l: { nl: "Share of LLM Voice", en: "Share of LLM Voice" } },
              { v: "12", l: { nl: "Prompts waarin teruggekomen", en: "Prompts she now appears in" } },
              { v: "#2-3", l: { nl: "Positie kernzoekterm", en: "Ranking on core term" } },
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
              <T nl={`"Ik dacht: AI is hype. Toen zag ik dat potentiële klanten erover spraken. Na 4 maanden begrijp ik: dit is niet de toekomst, dit is nú. En Expose Your Brand zag het eerder dan we dachten."`} en={`"I thought AI was hype. Then I saw prospects talking about it. Four months in, I get it: this isn't the future, this is now. And Expose Your Brand saw it before we did."`} />
            </p>
            <div className="mt-4 text-sm text-white/70">— <T nl="Founder, vermogensadvies" en="Founder, wealth advisory" /></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title={pick(lang, { nl: "Veelgestelde vragen over onze diensten.", en: "Frequently asked questions about our services." })} />
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

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Aan de slag", en: "Let's get started" })}
            title={lang === "en"
              ? <>Ready to grow your <span className="text-molten italic">business</span> with us?</>
              : <>Ben jij klaar om samen met ons je <span className="text-molten italic">bedrijf te laten groeien?</span></>}
            align="center"
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <CTAButton to="/contact" variant="molten"><T nl="Vraag je gratis adviesgesprek aan" en="Request your free consult" /> <ArrowRight className="size-4" /></CTAButton>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a href="tel:06" className="flex items-center gap-3 p-5 bg-white rounded-xl ring-1 ring-black/5 hover:ring-molten/30 transition-all">
              <span className="size-10 rounded-lg bg-molten/10 text-molten flex items-center justify-center"><Phone className="size-4" /></span>
              <div className="text-left">
                <div className="text-xs text-body-text"><T nl="Liever even bellen?" en="Prefer to call?" /></div>
                <div className="font-display font-semibold text-twilight"><T nl="06 – nummer volgt" en="06 – number to follow" /></div>
              </div>
            </a>
            <a href="mailto:groei@expose-your-brand.com" className="flex items-center gap-3 p-5 bg-white rounded-xl ring-1 ring-black/5 hover:ring-molten/30 transition-all">
              <span className="size-10 rounded-lg bg-molten/10 text-molten flex items-center justify-center"><Mail className="size-4" /></span>
              <div className="text-left min-w-0">
                <div className="text-xs text-body-text"><T nl="Mailen kan ook" en="Email works too" /></div>
                <div className="font-display font-semibold text-twilight text-sm break-all">groei@expose-your-brand.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}
