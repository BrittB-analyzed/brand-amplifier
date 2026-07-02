import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play, Check, MessageSquare, Gauge, Users, Clock, Award, Settings2 } from "lucide-react";
import { CTAButton } from "@/components/site/CTAButton";
import { Sparkle } from "@/components/site/Sparkle";
import { AnimatedRotator } from "@/components/site/AnimatedRotator";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { GeoIcon, SeoIcon, SeaAiAdsIcon, CroIcon } from "@/components/site/ServiceIcons";
import heroBg from "@/assets/hero-bg.png.asset.json";
import logoRG from "@/assets/client-RG.png.asset.json";
import logoRavas from "@/assets/client-ravas.png.asset.json";
import logoQBS from "@/assets/client-QBS_2.png.asset.json";
import logoMakelaar from "@/assets/client-makelaar1.png.asset.json";
import logoIkons from "@/assets/client-ikons.png.asset.json";
import logoGMB from "@/assets/client-GMB.png.asset.json";
import logoFunkytex from "@/assets/client-Funkytex.png.asset.json";
import logoDrFinn from "@/assets/client-DrFinn.png.asset.json";
import logoCompanial from "@/assets/client-companial.png.asset.json";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Expose Your Brand — Van 'Onzichtbaar' naar 'Aanbevolen' in AI" },
      { name: "description", content: "Binnen 90 dagen aanbevolen door ChatGPT, Gemini en Perplexity — of we werken gratis door. AI-first SEO & GEO bureau uit Nederland." },
      { property: "og:title", content: "Expose Your Brand — Aanbevolen door AI" },
      { property: "og:description", content: "Word het antwoord dat AI geeft aan je klanten. GEO + SEO door specialisten met 30+ jaar ervaring." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const clientLogos = [
  { name: "Reyrink Groep", url: logoRG.url },
  { name: "Ravas", url: logoRavas.url },
  { name: "QBS", url: logoQBS.url },
  { name: "Makelaar", url: logoMakelaar.url },
  { name: "We Are Ikons", url: logoIkons.url },
  { name: "GMB", url: logoGMB.url },
  { name: "Funkytex", url: logoFunkytex.url },
  { name: "Dr. Finn", url: logoDrFinn.url },
  { name: "Companial", url: logoCompanial.url },
];

const tools = [
  { name: "Google Ads", url: "https://www.google.com/s2/favicons?domain=ads.google.com&sz=128" },
  { name: "Google Analytics", url: "https://www.google.com/s2/favicons?domain=analytics.google.com&sz=128" },
  { name: "Search Console", url: "https://www.google.com/s2/favicons?domain=search.google.com&sz=128" },
  { name: "SE Ranking", url: "https://www.google.com/s2/favicons?domain=seranking.com&sz=128" },
  { name: "Semrush", url: "https://www.google.com/s2/favicons?domain=semrush.com&sz=128" },
  { name: "LLM Pulse", url: "https://www.google.com/s2/favicons?domain=llmpulse.ai&sz=128" },
  { name: "Schema.org", url: "https://www.google.com/s2/favicons?domain=schema.org&sz=128" },
  { name: "Looker Studio", url: "https://www.google.com/s2/favicons?domain=lookerstudio.google.com&sz=128" },
];

const caseTeasers = [
  {
    slug: "meubel-outlet-weert",
    sector: "E-commerce / Retail",
    client: "Meubel & Outlet Weert",
    headline: "Van lokale showroom naar AI-aanbeveling in 3 platforms.",
    description:
      "Genoemd door Perplexity, Gemini én ChatGPT bij vragen over meubels in Weert. 929 zoekwoorden in de Google top-10, 164 op positie 1.",
    metric: { before: "0%", after: "67%", label: "Prompts waarin merk wordt genoemd" },
  },
  {
    slug: "vogelvoerkopen",
    sector: "E-commerce",
    client: "Vogelvoerkopen.nl",
    headline: "Van onzichtbaar tussen de grote 3 naar standaard AI-shortlist.",
    description:
      "Gemini en Claude noemen de webshop nu actief. 5.226 zoekwoorden in de top-10, 1.771 op positie 1, ~4.868 organische bezoeken per maand.",
    metric: { before: "0%", after: "67%", label: "Prompts waarin merk wordt genoemd" },
  },
];

const services = [
  { to: "/diensten/geo", label: "GEO", color: "molten" as const, desc: "Word de autoriteit die AI citeert in ChatGPT, Gemini en Google AI Overviews.", icon: GeoIcon },
  { to: "/diensten/seo", label: "SEO", color: "blue" as const, desc: "Klassieke zoekmachine dominantie voor de termen waar jouw klanten op zoeken.", icon: SeoIcon },
  { to: "/diensten/sea", label: "SEA + AI Ads", color: "molten" as const, desc: "Claim direct de belangrijkste plekken in Google Ads, Shopping en opkomende AI-advertenties.", icon: SeaAiAdsIcon },
  { to: "/diensten/cro", label: "CRO", color: "blue" as const, desc: "Frictieloze funnels die van elke AI-lead een betalende klant maken.", icon: CroIcon },
];

const usps = [
  { icon: Gauge, title: "Resultaten, geen beloften", text: "Je beoordeelt ons op je eigen live dashboard. Geen mooie praatjes, harde cijfers." },
  { icon: Settings2, title: "Geen kleine lettertjes", text: "Live inzicht in je performance én in precies wat we voor je doen." },
  { icon: Users, title: "Je eigen specialist", text: "Eén vast aanspreekpunt dat jouw bedrijf, markt en doelen kent." },
  { icon: MessageSquare, title: "Altijd bereikbaar", text: "Dezelfde dag antwoord via je eigen Slack-kanaal." },
  { icon: Clock, title: "30+ jaar voorsprong", text: "AI-gebruik is nieuw, wij beginnen niet bij nul." },
  { icon: Award, title: "Stel je pakket samen", text: "Maatwerk, maandelijks aanpasbaar. Betaal alleen voor wat bijdraagt." },
];

const steps = [
  { n: "01", title: "Intakegesprek", desc: "Knelpunten, online kansen en harde doelen scherpstellen." },
  { n: "02", title: "Strategische nulmeting", desc: "Visibility Score voor SEO én GEO incl. 3 belangrijkste concurrenten." },
  { n: "03", title: "Fundering & tracking", desc: "Search Console, Analytics, GEO-monitoring (Share of LLM Voice), conversie-baseline." },
  { n: "04", title: "Content- & prompt-analyse", desc: "Welke prompts gebruikers stellen, welke bronnen AI citeert → Topical Map." },
  { n: "05", title: "Technische GEO-stack", desc: "robots.txt, llms.txt, triple-stack schema (Article + FAQPage + ItemList)." },
  { n: "06", title: "On-page & passage", desc: "Directe antwoorden bovenaan voor AI, sterke CTA's voor mensen." },
  { n: "07", title: "Autoriteit & entity stacking", desc: "Backlinks + unlinked brand mentions op autoritaire bronnen." },
  { n: "08", title: "Maandelijkse AI-monitoring", desc: "Posities per platform (ChatGPT/Perplexity/Gemini) + sentiment + drift-detectie." },
];

const reviews = [
  { quote: "Binnen 60 dagen werden we al genoemd in ChatGPT-antwoorden over onze niche. Game changer.", author: "Marcel D.", role: "CEO, Klinieksector" },
  { quote: "Eindelijk een bureau dat geen rookgordijn optrekt. Live dashboard, korte lijnen, harde cijfers.", author: "Joëlle V.", role: "Marketing Director, B2B Tech" },
  { quote: "We zijn nu hét antwoord dat Perplexity geeft in onze regio. Direct meer aanvragen.", author: "Thomas B.", role: "Eigenaar, Advocatuur" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-20 pb-24 md:pb-32 px-6 relative overflow-hidden bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg.url})` }}
      >
        <Sparkle className="absolute top-16 right-[12%] opacity-60" size="lg" animate />
        <Sparkle className="absolute bottom-10 left-[8%] opacity-50" size="md" color="blue" animate />
        <div className="max-w-7xl mx-auto relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white ring-1 ring-black/5 rounded-full mb-8">
            <Sparkle size="sm" />
            <span className="text-molten text-[10px] font-bold tracking-widest uppercase">
              Get ahead. Be seen by AI.
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-twilight leading-[1.05] text-balance max-w-[18ch] mb-6">
            Van 'Onzichtbaar' naar <span className="text-molten italic">'Aanbevolen'</span> in <AnimatedRotator />
          </h1>

          <p className="text-lg md:text-xl max-w-[56ch] mb-10 text-pretty leading-relaxed">
            Word het antwoord dat AI geeft aan je klanten. Binnen 90 dagen aanbevolen door ChatGPT, Gemini en Perplexity — <span className="text-twilight font-medium">of we werken gratis door totdat dat wel zo is</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton to="/contact" variant="molten" size="lg">
              Plan gratis adviesgesprek <ArrowRight className="size-4" />
            </CTAButton>
          </div>

          <div className="mt-12 flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-twilight/50 flex-wrap">
            <span className="flex items-center gap-2"><Sparkle size="sm" /> 30+ jaar ervaring</span>
            <span className="flex items-center gap-2"><Sparkle size="sm" /> Live AI dashboard</span>
            <span className="flex items-center gap-2"><Sparkle size="sm" /> Nederlands team</span>
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <section className="bg-white py-12 border-y border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-twilight/40 mb-8">
            Vertrouwd door marktleiders
          </p>
        </div>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max gap-20 animate-marquee items-center">
            {[...clientLogos, ...clientLogos].map((c, i) => (
              <img
                key={`${c.name}-${i}`}
                src={c.url}
                alt={c.name}
                className="h-20 md:h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Probleem / urgentie */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="De realiteit"
            title={<>Elke dag vraagt je klant aan AI <span className="text-molten italic">wie de beste is.</span></>}
            description={<>Staat jouw bedrijf er niet tussen en je concurrent wel? Dan loop je klanten mis. Wachten = voorsprong weggeven. AI is geen experiment meer — het is de nieuwe zoekmachine.</>}
            align="center"
          />
        </div>
      </section>

      {/* Diensten */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Diensten"
            title="Specialistische focus, samen één funnel"
            description="Geen vage marketingpraat, maar meetbare groei in de bronnen waar jouw klanten hun informatie vandaan halen."
            align="center"
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group p-6 rounded-2xl bg-silver ring-1 ring-black/5 hover:ring-molten/30 hover:bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-twilight/5"
              >
                <div className={`size-12 rounded-xl flex items-center justify-center mb-5 ${s.color === "molten" ? "bg-molten/10 text-molten" : "bg-btn-blue/10 text-btn-blue"}`}>
                  <s.icon className="size-6" />
                </div>
                <h3 className="font-display font-semibold text-xl text-twilight mb-2">{s.label}</h3>
                <p className="text-sm leading-relaxed mb-5">{s.desc}</p>
                <span className={`text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 ${s.color === "molten" ? "text-molten" : "text-btn-blue"}`}>
                  Lees meer <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Grand Slam Offer */}
      <section className="py-24 px-6 bg-silver">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-[24px] ring-1 ring-black/5 shadow-sm relative overflow-hidden">
            <Sparkle className="absolute top-4 right-6 opacity-10" size="xl" />
            <div className="relative z-10">
              <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-4">
                Het aanbod
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-twilight mb-8 text-balance max-w-[28ch] leading-tight">
                Binnen 90 dagen aanbevolen door AI, of we werken <span className="text-molten italic">gratis door.</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-4">
                  {[
                    "Live inzicht in je AI Visibility Score dashboard.",
                    "Eén vast aanspreekpunt met 30+ jaar ervaring.",
                    "Direct antwoord via je eigen Slack-kanaal.",
                    "Maandelijks aanpasbaar — geen lange contracten.",
                    "Maatwerk: betaal alleen voor wat bijdraagt.",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Sparkle className="shrink-0 mt-1" size="sm" />
                      <span className="text-sm text-twilight">{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-molten/5 p-6 rounded-[16px] ring-1 ring-molten/10">
                  <p className="text-molten font-bold text-xs tracking-widest uppercase mb-4">
                    Bonus pakket bij start
                  </p>
                  <ul className="text-sm space-y-3 mb-6 text-twilight">
                    <li className="flex items-start gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> Gratis funnel-audit <span className="text-xs opacity-60">(t.w.v. €599)</span></li>
                    <li className="flex items-start gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> AI-zichtbaarheidstraining voor je team</li>
                    <li className="flex items-start gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> 3 kant-en-klare blogartikelen</li>
                  </ul>
                  <div className="flex items-center gap-2 text-molten font-bold text-sm pt-4 border-t border-molten/10">
                    <span className="flex h-2 w-2 rounded-full bg-molten animate-pulse" />
                    Nog maar 5 plekken beschikbaar deze maand
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-black/5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <p className="text-sm text-body-text max-w-md">
                  Start met een gratis adviesgesprek. Geen verkooppraat — wel concrete cijfers en een plan.
                </p>
                <CTAButton to="/contact" variant="molten">
                  Plan je gesprek <ArrowRight className="size-4" />
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8-stappen werkwijze */}
      <section className="py-24 px-6 bg-twilight text-white relative overflow-hidden">
        <Sparkle className="absolute top-10 right-10 opacity-30" size="lg" animate />
        <Sparkle className="absolute bottom-20 left-10 opacity-20" size="md" color="white" animate />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <SectionHeader
                eyebrow="Werkwijze"
                tone="dark"
                title={<>De 8 fasen naar <span className="text-molten italic">AI-dominantie</span></>}
                description="Geen zwarte doos. Een bewezen pad van eerste meting tot maandelijkse Share-of-LLM-Voice monitoring."
              />
            </div>
            <div className="grid grid-cols-2 gap-6 self-end">
              <div>
                <div className="font-display text-4xl font-semibold text-molten mb-1">30+</div>
                <div className="text-xs uppercase tracking-widest text-white/40">Jaar ervaring</div>
              </div>
              <div>
                <div className="font-display text-4xl font-semibold text-molten mb-1">98%</div>
                <div className="text-xs uppercase tracking-widest text-white/40">Klantretentie</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.n} className="p-6 rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-molten/40 transition-colors">
                <div className="font-display text-3xl font-semibold text-molten mb-3">{s.n}</div>
                <h4 className="font-display font-medium text-white mb-2">{s.title}</h4>
                <p className="text-xs text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-molten/10 ring-1 ring-molten/20 text-center">
            <p className="text-sm text-white/80">
              <span className="text-molten font-bold">SEO vs GEO:</span> SEO optimaliseert voor de klik, GEO voor de <em>citatie</em> — waarbij jouw merk het antwoord wordt.
            </p>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Beoordeeld door klanten"
            title="Resultaten, niet beloften."
            align="center"
            className="mb-16"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <figure key={r.author} className="p-8 bg-white ring-1 ring-black/5 rounded-2xl">
                <div className="flex gap-1 mb-4 text-molten">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <blockquote className="text-twilight font-display text-lg leading-snug mb-6">
                  "{r.quote}"
                </blockquote>
                <figcaption className="text-xs uppercase tracking-widest text-body-text">
                  <span className="text-twilight font-bold">{r.author}</span> · {r.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Partners */}
      <section className="py-20 px-6 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Onze stack"
            title={<>De tools & partners <span className="text-molten italic">achter de resultaten.</span></>}
            description="Van Google Ads en Search Console tot SE Ranking en LLM Pulse — we combineren de beste tools voor klassieke SEO, advertenties én AI-zichtbaarheid."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tools.map((t) => (
              <div
                key={t.name}
                className="flex flex-col items-center justify-center gap-3 p-6 bg-silver rounded-xl ring-1 ring-black/5 hover:ring-molten/30 transition-all"
              >
                <img src={t.url} alt={t.name} className="h-10 w-10 object-contain" loading="lazy" />
                <span className="text-xs font-bold uppercase tracking-wider text-twilight text-center">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kernwaarden / USPs */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Waarom Expose Your Brand"
            title="Zes redenen om vandaag te beginnen."
            align="center"
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usps.map((u) => (
              <div key={u.title} className="p-6 rounded-2xl bg-silver ring-1 ring-black/5">
                <div className="size-10 rounded-lg bg-molten/10 text-molten grid place-items-center mb-4">
                  <u.icon className="size-5" />
                </div>
                <h3 className="font-display font-semibold text-twilight mb-2 flex items-center gap-2">
                  <Sparkle size="sm" /> {u.title}
                </h3>
                <p className="text-sm leading-relaxed">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases teaser */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <SectionHeader
              eyebrow="Cases"
              title={<>Zo ziet groei er bij onze klanten <span className="text-molten italic">uit.</span></>}
            />
            <Link to="/cases" className="text-molten font-bold text-sm uppercase tracking-wider inline-flex items-center gap-1">
              Alle cases <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {caseTeasers.map((c) => (
              <Link
                key={c.slug}
                to="/cases"
                hash={c.slug}
                className="group p-8 bg-white ring-1 ring-black/5 rounded-2xl hover:ring-molten/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-twilight/5 flex flex-col"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-molten mb-3">{c.sector}</div>
                <h3 className="font-display text-2xl font-semibold text-twilight group-hover:text-molten transition-colors leading-snug mb-2">
                  {c.client}
                </h3>
                <p className="text-twilight font-medium mb-4">{c.headline}</p>
                <p className="text-sm leading-relaxed text-body-text mb-6">{c.description}</p>
                <div className="mt-auto pt-6 border-t border-black/5 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-twilight/50 mb-1">
                      {c.metric.label}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-2xl font-semibold text-twilight/40 line-through">
                        {c.metric.before}
                      </span>
                      <ArrowRight className="size-4 text-molten" />
                      <span className="font-display text-3xl font-semibold text-molten">
                        {c.metric.after}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-molten inline-flex items-center gap-1 shrink-0">
                    Lees case <ArrowRight className="size-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}