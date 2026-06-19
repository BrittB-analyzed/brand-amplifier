import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Quote, Phone, Mail } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTAButton } from "@/components/site/CTAButton";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { SectionHeader } from "@/components/site/SectionHeader";
import { GeoIcon, SeoIcon, SeaAiAdsIcon, CroIcon } from "@/components/site/ServiceIcons";

const services = [
  {
    to: "/diensten/seo",
    label: "SEO",
    title: "SEO: Zichtbaarheid in Google",
    color: "blue" as const,
    icon: SeoIcon,
    cta: "Ontdek onze SEO-aanpak",
    desc: "Je bent nu beperkt zichtbaar in Google. Binnen 6 maanden wil je in de top 3 staan voor jouw belangrijkste zoekopdrachten. SEO werkt — als je het goed doet: sterke techniek, relevante content en echte autoriteit.",
    bullets: [
      "Technische website-audit en optimalisatie",
      "Contentstrategie gericht op belangrijke zoekwoorden",
      "Autoriteitsopbouw via linkbuilding",
      "Inzicht in de performance met je eigen dashboard",
    ],
  },
  {
    to: "/diensten/geo",
    label: "GEO",
    title: "GEO: Zichtbaarheid in AI-antwoorden",
    color: "molten" as const,
    icon: GeoIcon,
    cta: "Ontdek onze GEO-aanpak",
    desc: "Potentiële klanten stellen vragen aan ChatGPT en Gemini. Ze zien AI-gegenereerde antwoorden met bronvermeldingen. Staat jouw bedrijf er niet tussen? Dan verlies je klanten aan concurrenten die wél genoemd worden. GEO zorgt ervoor dat jij het antwoord bent dat AI geeft. Binnen 90 dagen zie je resultaat — of we werken gratis door.",
    bullets: [
      "GEO-audit: hoe AI momenteel jouw merk ziet",
      "Onderwerpenmap: waar je autoriteit op moet bouwen",
      "GEO-optimalisatie: schema, content, entity stacking",
      "Inzicht in de performance met je eigen dashboard",
    ],
  },
  {
    to: "/diensten/sea",
    label: "SEA",
    title: "SEA: Effectieve advertenties in Google",
    color: "molten" as const,
    icon: SeaAiAdsIcon,
    cta: "Ontdek onze SEA-aanpak",
    desc: "Wil je snel resultaat voor je bedrijf? Dan gebruik je advertenties in Google en Bing. Maar zomaar Google budget geven werkt niet. Wij bouwen gestructureerde campagnes op basis van jouw doelgroep, kernwaarden en doelstellingen. Elke euro moet iets opleveren.",
    bullets: [
      "Uitgebreid zoekwoordenonderzoek voor jouw bedrijf",
      "Advertenties geschreven in jouw stijl",
      "Dagelijkse budget-monitoring en real-time optimalisatie",
      "Inzicht in de performance met je eigen dashboard",
    ],
  },
  {
    to: "/diensten/cro",
    label: "CRO",
    title: "CRO: Van bezoeker naar klant",
    color: "blue" as const,
    icon: CroIcon,
    cta: "Ontdek onze CRO-aanpak",
    desc: "Je hebt duizend bezoekers per maand. Maar hoeveel hiervan worden klant? Het probleem zit niet bij de bezoekers, maar bij de conversie. Elke 1% verbetering verdubbelt bijna het aantal klantaanvragen. CRO is geen onderbuikgevoel. Het is testen, meten, optimaliseren — gebruiksvriendelijke formulieren, overtuigende teksten en een knop op de juiste plek.",
    bullets: [
      "Conversiefunnel-audit: waar haken bezoekers af?",
      "A/B-tests van formulieren, pagina-indelingen, teksten en design",
      "Inzicht in de performance met je eigen dashboard",
    ],
  },
];

const faq = [
  {
    q: "Heb ik alle diensten nodig of kunnen we met één beginnen?",
    a: "We beginnen waar je grootste pijn zit. Snel behoefte aan verkeer? SEA. Veel bezoekers maar lage conversie? CRO. Onzichtbaar in Google? SEO. Onzichtbaar in AI? GEO. Dat gezegd: ze werken samen. Klanten die alle vier doen, groeien sneller. We bouwen een roadmap op basis van jouw situatie.",
  },
  {
    q: "Hoe lang duurt het tot we resultaat zien?",
    a: "SEA: morgen zie je de eerste bezoekers (aanzetten en monitoren). CRO: afhankelijk van het aantal bezoekers zie je na ± 8 weken verschil in het conversieratio. SEO: vanaf 3 maanden. GEO: binnen 90 dagen zichtbaar resultaat.",
  },
  {
    q: "Hoe weten we wat het oplevert?",
    a: "Je ziet de performance direct in je eigen dashboard. Niks geschat. Niks verborgen. Gemeten.",
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
  return (
    <>
      <PageHero
        eyebrow="Onze diensten"
        title={<>Alle diensten van Expose your Brand <span className="text-molten italic">overzichtelijk</span> op een rij.</>}
        description="Van organische zichtbaarheid in Google, op maat gemaakte advertenties en conversie-optimalisatie van jouw website tot verbetering van je zichtbaarheid in AI. Wij bieden alles wat jouw bedrijf nodig heeft voor online groei."
      >
        <CTAButton to="/contact" variant="molten">Plan gratis adviesgesprek <ArrowRight className="size-4" /></CTAButton>
      </PageHero>

      {/* Introductie */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Hier zijn we goed in"
            title={<>Jouw bedrijf verdient <span className="text-molten italic">beter.</span></>}
            description={
              <>
                We combineren vier online kernkrachten — <strong className="text-twilight">SEO, GEO, SEA en CRO</strong> — in één strategische aanpak. Sommige bureaus kiezen één specialiteit. Wij niet. Omdat groei niet uit één kanaal komt.
              </>
            }
          />
          <div className="mt-8 space-y-5 text-body-text leading-relaxed">
            <p>
              Je wilt zichtbaar zijn in Google (SEO), getoond worden in AI (GEO), snel leads binnenhalen via advertenties (SEA) én ervoor zorgen dat bezoekers daadwerkelijk converteren (CRO).
            </p>
            <p>
              We denken niet in hokjes. Je krijgt één toegewezen specialist die jouw bedrijf, markt en doelen kent. Iemand die weet dat advertenties alleen werken als je website converteert. Dat GEO zonder SEO-fundament niet werkt.
            </p>
            <p className="text-twilight font-semibold">
              Resultaat? Klanten die sneller groeien, en minder gedoe met verschillende bureaus.
            </p>
          </div>
        </div>
      </section>

      {/* Diensten cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Onze diensten"
            title="Vier specialisaties, één geïntegreerde aanpak."
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.to} className="p-8 bg-white ring-1 ring-black/5 rounded-2xl flex flex-col">
                <div className={`size-12 rounded-xl flex items-center justify-center mb-5 ${s.color === "molten" ? "bg-molten/10 text-molten" : "bg-btn-blue/10 text-btn-blue"}`}>
                  <s.icon className="size-6" />
                </div>
                <h3 className="font-display font-semibold text-2xl text-twilight mb-3">{s.title}</h3>
                <p className="leading-relaxed text-body-text mb-5">{s.desc}</p>
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-twilight mb-3">Wat je krijgt</div>
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
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
                  {s.cta} <ArrowRight className="size-3" />
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
            eyebrow="Social proof"
            title="Wat klanten over ons zeggen."
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { v: "120+", l: "MKB-klanten geholpen met groei" },
              { v: "340+", l: "Top-10 posities in Google" },
              { v: "347", l: "AI-vermeldingen voor klanten" },
            ].map((s) => (
              <div key={s.l} className="p-8 bg-silver rounded-2xl ring-1 ring-black/5 text-center">
                <div className="font-display text-5xl font-semibold text-molten mb-2">{s.v}</div>
                <div className="text-sm text-body-text">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto p-8 md:p-10 bg-twilight text-white rounded-2xl">
            <Quote className="size-8 text-molten mb-4" />
            <p className="text-lg md:text-xl leading-relaxed text-pretty">
              "Eindelijk een bureau dat SEO, advertenties én conversie samen aanpakt. We zien het maandelijks terug in nieuwe aanvragen."
            </p>
            <div className="mt-6 text-sm text-white/70">— Klant van Expose Your Brand</div>
          </div>
        </div>
      </section>

      {/* Klantcase */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Klantcase"
            title="Hoe een klant top 3 bereikte in AI-antwoorden."
          />

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-2xl ring-1 ring-black/5">
              <h3 className="font-display text-xl text-twilight font-semibold mb-4">Setup</h3>
              <ul className="text-sm space-y-2 text-body-text">
                <li><strong className="text-twilight">Niche:</strong> Vermogensbeheer</li>
                <li><strong className="text-twilight">Doelstelling:</strong> Top 3 positie in AI-antwoorden voor "beste vermogensadviseur Amsterdam"</li>
                <li><strong className="text-twilight">Startpunt:</strong> 0 AI-citaties, niet zichtbaar</li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-2xl ring-1 ring-black/5">
              <h3 className="font-display text-xl text-twilight font-semibold mb-4">Het probleem</h3>
              <p className="text-sm text-body-text leading-relaxed">
                Potentiële klanten gingen direct naar concurrenten. Die verschenen in ChatGPT-antwoorden op vragen als "wie is een goede vermogensadviseur?". Goede website, tientallen backlinks — maar AI-modellen citeerden haar niet. Klassieke SEO werkte, GEO was onbekend terrein.
              </p>
            </div>
          </div>

          <div className="mt-6 p-8 bg-white rounded-2xl ring-1 ring-black/5">
            <h3 className="font-display text-xl text-twilight font-semibold mb-4">Onze aanpak</h3>
            <ul className="text-sm space-y-3 text-body-text">
              <li><strong className="text-twilight">Maand 1-2:</strong> Audit, nulmeting en strategische topical map. We identificeerden 6 high-value prompts waar ze ontbrak en 3 concurrenten die wel werden geciteerd.</li>
              <li><strong className="text-twilight">Maand 2-3:</strong> Herstructurering van bestaande content + 8 nieuwe artikelen, gerichte schema markup, passage optimization en entity stacking op Wikipedia en LinkedIn.</li>
              <li><strong className="text-twilight">Maand 3-4:</strong> Distributie en autoriteitboost via webinars, whitepapers en expert quotes in branche-publicaties. LLM Pulse-monitoring actief.</li>
            </ul>
          </div>

          <div className="mt-6 grid sm:grid-cols-4 gap-4">
            {[
              { v: "0 → 8,2%", l: "Share of LLM Voice" },
              { v: "12", l: "Prompts waarin teruggekomen" },
              { v: "#2-3", l: "Positie kernzoekterm" },
              { v: "+47", l: "Leads uit AI-referrals" },
            ].map((r) => (
              <div key={r.l} className="p-6 bg-silver rounded-xl text-center ring-1 ring-black/5">
                <div className="font-display text-2xl font-semibold text-molten mb-1">{r.v}</div>
                <div className="text-xs text-body-text">{r.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-8 bg-twilight text-white rounded-2xl">
            <Quote className="size-6 text-molten mb-3" />
            <p className="leading-relaxed text-pretty">
              "Ik dacht: AI is hype. Toen zag ik dat potentiële klanten erover spraken. Na 4 maanden begrijp ik: dit is niet de toekomst, dit is nú. En Expose Your Brand zag het eerder dan we dachten."
            </p>
            <div className="mt-4 text-sm text-white/70">— Founder, vermogensadvies</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title="Veelgestelde vragen over onze diensten." />
          <div className="mt-8 space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="group p-6 bg-silver rounded-xl ring-1 ring-black/5">
                <summary className="cursor-pointer font-display font-semibold text-twilight flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-molten transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-body-text">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            eyebrow="Aan de slag"
            title={<>Ben jij klaar om samen met ons je <span className="text-molten italic">bedrijf te laten groeien?</span></>}
            align="center"
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <CTAButton to="/contact" variant="molten">Vraag je gratis adviesgesprek aan <ArrowRight className="size-4" /></CTAButton>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a href="tel:06" className="flex items-center gap-3 p-5 bg-white rounded-xl ring-1 ring-black/5 hover:ring-molten/30 transition-all">
              <span className="size-10 rounded-lg bg-molten/10 text-molten flex items-center justify-center"><Phone className="size-4" /></span>
              <div className="text-left">
                <div className="text-xs text-body-text">Liever even bellen?</div>
                <div className="font-display font-semibold text-twilight">06 – nummer volgt</div>
              </div>
            </a>
            <a href="mailto:onlinegroeien@expose-your-brand.com" className="flex items-center gap-3 p-5 bg-white rounded-xl ring-1 ring-black/5 hover:ring-molten/30 transition-all">
              <span className="size-10 rounded-lg bg-molten/10 text-molten flex items-center justify-center"><Mail className="size-4" /></span>
              <div className="text-left min-w-0">
                <div className="text-xs text-body-text">Mailen kan ook</div>
                <div className="font-display font-semibold text-twilight text-sm break-all">onlinegroeien@expose-your-brand.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}
