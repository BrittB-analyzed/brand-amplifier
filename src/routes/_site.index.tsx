import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageSquare, Gauge, Users, Clock, Award, Settings2 } from "lucide-react";
import { CTAButton } from "@/components/site/CTAButton";
import { Sparkle } from "@/components/site/Sparkle";
import { AnimatedRotator } from "@/components/site/AnimatedRotator";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { GeoIcon, SeoIcon, SeaAiAdsIcon, CroIcon } from "@/components/site/ServiceIcons";
import { useT } from "@/lib/i18n";
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
  { name: "Google Ads", url: "https://www.gstatic.com/images/branding/product/2x/ads_96dp.png" },
  { name: "Google Analytics", url: "https://www.gstatic.com/images/branding/product/2x/analytics_96dp.png" },
  { name: "Search Console", url: "https://www.gstatic.com/images/branding/product/2x/search_console_96dp.png" },
  { name: "SE Ranking", url: "https://www.google.com/s2/favicons?domain=seranking.com&sz=128" },
  { name: "Semrush", url: "https://www.google.com/s2/favicons?domain=semrush.com&sz=128" },
  { name: "LLM Pulse", url: "https://www.google.com/s2/favicons?domain=llmpulse.ai&sz=128" },
  { name: "Schema.org", url: "https://www.google.com/s2/favicons?domain=schema.org&sz=128" },
  { name: "Looker Studio", url: "https://www.google.com/s2/favicons?domain=lookerstudio.google.com&sz=128" },
];

function HomePage() {
  const t = useT({
    badge: { nl: "Get ahead. Be seen by AI.", en: "Get ahead. Be seen by AI." },
    h1Pre: { nl: "Van 'Onzichtbaar' naar ", en: "From 'Invisible' to " },
    h1Mid: { nl: "'Aanbevolen'", en: "'Recommended'" },
    h1Post: { nl: " in ", en: " in " },
    heroDesc: {
      nl: <>Word het antwoord dat AI geeft aan je klanten. Binnen 90 dagen aanbevolen door ChatGPT, Gemini en Perplexity — <span className="text-twilight font-medium">of we werken gratis door totdat dat wel zo is</span>.</>,
      en: <>Become the answer AI gives your customers. Recommended by ChatGPT, Gemini and Perplexity within 90 days — <span className="text-twilight font-medium">or we keep working for free until it happens</span>.</>,
    },
    heroCta: { nl: "Plan gratis adviesgesprek", en: "Book free strategy call" },
    yrs: { nl: "30+ jaar ervaring", en: "30+ years of experience" },
    dashboard: { nl: "Live AI dashboard", en: "Live AI dashboard" },
    dutch: { nl: "Nederlands team", en: "Dutch team" },
    trustedBy: { nl: "Vertrouwd door marktleiders", en: "Trusted by market leaders" },
    urgencyEyebrow: { nl: "De realiteit", en: "The reality" },
    urgencyTitle: {
      nl: <>Elke dag vraagt je klant aan AI <span className="text-molten italic">wie de beste is.</span></>,
      en: <>Every day your customer asks AI <span className="text-molten italic">who's the best.</span></>,
    },
    urgencyDesc: {
      nl: "Staat jouw bedrijf er niet tussen en je concurrent wel? Dan loop je klanten mis. Wachten = voorsprong weggeven. AI is geen experiment meer, het is de nieuwe zoekmachine.",
      en: "Not listed while your competitor is? Then you're losing customers. Waiting means giving away your lead. AI isn't an experiment anymore, it's the new search engine.",
    },
    servicesEyebrow: { nl: "Diensten", en: "Services" },
    servicesTitle: { nl: "Specialistische focus, één onderbouwde aanpak", en: "Specialist focus, one grounded approach" },
    servicesDesc: { nl: "SEO eerst, dan GEO naar SEA + AI ads en dan CRO.", en: "SEO first, then GEO to SEA + AI ads and then CRO." },
    seoDesc: { nl: "Klassieke zoekmachine dominantie voor de termen waar jouw klanten op zoeken.", en: "Classic search-engine dominance for the terms your customers actually search." },
    geoDesc: { nl: "Word de autoriteit die AI citeert in ChatGPT, Gemini en Google AI Overviews.", en: "Become the authority AI cites in ChatGPT, Gemini and Google AI Overviews." },
    seaDesc: { nl: "Claim direct de belangrijkste plekken in Google Ads, Shopping en opkomende AI-advertenties.", en: "Instantly claim the top spots in Google Ads, Shopping and emerging AI advertising." },
    croDesc: { nl: "Converterende funnels die van elke AI-lead een betalende klant maken.", en: "Converting funnels that turn every AI lead into a paying customer." },
    readMore: { nl: "Lees meer", en: "Read more" },
    offerEyebrow: { nl: "Het aanbod", en: "The offer" },
    offerTitle: {
      nl: <>Binnen 90 dagen aanbevolen door AI, of we werken <span className="text-molten italic">gratis door.</span></>,
      en: <>Recommended by AI within 90 days, or we <span className="text-molten italic">keep working for free.</span></>,
    },
    offerPoint1: { nl: "Live inzicht in je AI Visibility Score dashboard.", en: "Live insight in your AI Visibility Score dashboard." },
    offerPoint2: { nl: "Je eigen vaste aanspreekpunt.", en: "Your own dedicated point of contact." },
    offerPoint3: { nl: "Dagelijks antwoord via je eigen kanaal.", en: "Daily replies via your own channel." },
    offerPoint4: { nl: "Maatwerk: betaal alleen voor wat werkt.", en: "Tailored: pay only for what works." },
    bonusTitle: { nl: "Bonus pakket bij start", en: "Bonus package at kick-off" },
    bonus1: { nl: <>Gratis funnel-audit <span className="text-xs opacity-60">(t.w.v. €599)</span></>, en: <>Free funnel audit <span className="text-xs opacity-60">(worth €599)</span></> },
    bonus2: { nl: "Gratis concurrentie-analyse", en: "Free competitor analysis" },
    bonus3: { nl: "3 kant-en-klare blogartikelen", en: "3 ready-to-publish blog articles" },
    scarcity: { nl: "Nog maar 5 plekken beschikbaar deze maand", en: "Only 5 spots left this month" },
    offerFoot: {
      nl: "Start met een gratis adviesgesprek. Geen verkooppraat — wel concrete cijfers en een plan.",
      en: "Start with a free strategy call. No sales talk — just concrete numbers and a plan.",
    },
    planCall: { nl: "Plan je gesprek", en: "Book your call" },
    workEyebrow: { nl: "Werkwijze", en: "How we work" },
    workTitle: { nl: <>De 8 fasen naar <span className="text-molten italic">AI-dominantie</span></>, en: <>The 8 phases to <span className="text-molten italic">AI dominance</span></> },
    workDesc: { nl: "Een bewezen pad van 0-meting naar live inzicht in de zichtbaarheid van jouw bedrijf.", en: "A proven path from baseline measurement to live insight into your company's visibility." },
    yrsExp: { nl: "Jaar ervaring", en: "Years of experience" },
    retention: { nl: "Klantretentie", en: "Client retention" },
    seovsgeo: {
      nl: <><span className="text-molten font-bold">SEO vs GEO:</span> SEO optimaliseert voor de klik, GEO voor de <em>citatie</em> — waarbij jouw merk het antwoord wordt.</>,
      en: <><span className="text-molten font-bold">SEO vs GEO:</span> SEO optimises for the click, GEO for the <em>citation</em> — where your brand becomes the answer.</>,
    },
    reviewsEyebrow: { nl: "Beoordeeld door klanten", en: "Rated by clients" },
    reviewsTitle: { nl: "Resultaten, niet beloften.", en: "Results, not promises." },
    stackEyebrow: { nl: "Onze stack", en: "Our stack" },
    stackTitle: { nl: <>De tools & partners <span className="text-molten italic">achter de resultaten.</span></>, en: <>The tools & partners <span className="text-molten italic">behind the results.</span></> },
    stackDesc: {
      nl: "Van Search Console en Analytics tot SE Ranking en LLM Pulse. We combineren de beste tools voor klassieke SEO, advertenties én AI-zichtbaarheid.",
      en: "From Search Console and Analytics to SE Ranking and LLM Pulse. We combine the best tools for classic SEO, ads and AI visibility.",
    },
    whyEyebrow: { nl: "Waarom Expose Your Brand", en: "Why Expose Your Brand" },
    whyTitle: { nl: "Zes redenen om vandaag te beginnen.", en: "Six reasons to start today." },
    casesEyebrow: { nl: "Cases", en: "Cases" },
    casesTitle: { nl: <>Zo ziet groei er bij onze klanten <span className="text-molten italic">uit.</span></>, en: <>This is what growth looks like <span className="text-molten italic">for our clients.</span></> },
    allCases: { nl: "Alle cases", en: "All cases" },
    readCase: { nl: "Lees case", en: "Read case" },
    metricLabel: { nl: "Prompts waarin merk wordt genoemd", en: "Prompts mentioning the brand" },
    reviews: {
      nl: [
        { quote: "Binnen 60 dagen werden we al genoemd in ChatGPT-antwoorden over onze niche. Game changer.", author: "Marcel D.", role: "CEO, Klinieksector" },
        { quote: "Eindelijk een bureau dat geen rookgordijn optrekt. Live dashboard, korte lijnen, harde cijfers.", author: "Joëlle V.", role: "Marketing Director, B2B Tech" },
        { quote: "We zijn nu hét antwoord dat Perplexity geeft in onze regio. Direct meer aanvragen.", author: "Thomas B.", role: "Eigenaar, Advocatuur" },
      ],
      en: [
        { quote: "Within 60 days we were mentioned in ChatGPT answers about our niche. Game changer.", author: "Marcel D.", role: "CEO, Healthcare" },
        { quote: "Finally an agency that doesn't throw up a smokescreen. Live dashboard, short lines, hard numbers.", author: "Joëlle V.", role: "Marketing Director, B2B Tech" },
        { quote: "We're now the answer Perplexity gives in our region. Immediately more leads.", author: "Thomas B.", role: "Owner, Legal" },
      ],
    },
    usps: {
      nl: [
        { icon: Gauge, title: "Resultaten, geen beloften", text: "Je beoordeelt ons op je eigen live dashboard. Geen mooie praatjes, harde cijfers." },
        { icon: Settings2, title: "Geen kleine lettertjes", text: "Live inzicht in je performance én in precies wat we voor je doen." },
        { icon: Users, title: "Je eigen specialist", text: "Eén vast aanspreekpunt dat jouw bedrijf, markt en doelen kent." },
        { icon: MessageSquare, title: "Altijd bereikbaar", text: "Dezelfde dag antwoord via je eigen kanaal." },
        { icon: Clock, title: "30+ jaar voorsprong", text: "AI-gebruik is nieuw, wij beginnen niet bij nul." },
        { icon: Award, title: "Stel je pakket samen", text: "Betaal alleen voor wat werkt voor jouw bedrijf." },
      ],
      en: [
        { icon: Gauge, title: "Results, not promises", text: "You judge us on your own live dashboard. No talk, only hard numbers." },
        { icon: Settings2, title: "No small print", text: "Live insight into your performance and exactly what we're doing for you." },
        { icon: Users, title: "Your own specialist", text: "One dedicated point of contact who knows your company, market and goals." },
        { icon: MessageSquare, title: "Always reachable", text: "Same-day replies via your own channel." },
        { icon: Clock, title: "30+ years of head start", text: "AI usage is new, we don't start from scratch." },
        { icon: Award, title: "Compose your package", text: "Pay only for what works for your business." },
      ],
    },
    steps: {
      nl: [
        { n: "01", title: "Intakegesprek", desc: "Knelpunten, online kansen en meetbare doelen scherpstellen." },
        { n: "02", title: "Strategische nulmeting", desc: "Visibility Score voor SEO én GEO incl. 3 belangrijkste concurrenten." },
        { n: "03", title: "Fundering & tracking", desc: "Inrichting tools statistieken: Search Console, Analytics, GEO-monitoring (met LLM Pulse), conversie-baseline." },
        { n: "04", title: "Content- & prompt-analyse", desc: "Welke vragen stellen gebruikers en welke bronvermeldingen citeert AI → Topical Map." },
        { n: "05", title: "Technische GEO-stack", desc: "robots.txt, llms.txt, triple-stack schema (Article + FAQPage + ItemList)." },
        { n: "06", title: "On-page optimalisatie: kort & duidelijk", desc: "Directe antwoorden bovenaan voor AI, sterke call to actions voor bezoekers." },
        { n: "07", title: "Autoriteit & entity stacking", desc: "Backlinks + unlinked brand mentions op autoritaire bronnen." },
        { n: "08", title: "24/7 AI-monitoring", desc: "Dagelijks live inzicht in eigen dashboard. Posities per platform (ChatGPT/Perplexity/Gemini) + sentiment + drift-detectie. Maandelijks overleg." },
      ],
      en: [
        { n: "01", title: "Intake call", desc: "Sharpen bottlenecks, online opportunities and measurable goals." },
        { n: "02", title: "Strategic baseline", desc: "Visibility Score for SEO and GEO incl. 3 key competitors." },
        { n: "03", title: "Foundations & tracking", desc: "Set up tooling: Search Console, Analytics, GEO monitoring (with LLM Pulse), conversion baseline." },
        { n: "04", title: "Content & prompt analysis", desc: "Which questions users ask and which sources AI cites → Topical Map." },
        { n: "05", title: "Technical GEO stack", desc: "robots.txt, llms.txt, triple-stack schema (Article + FAQPage + ItemList)." },
        { n: "06", title: "On-page optimisation: short & clear", desc: "Direct answers up top for AI, strong calls-to-action for visitors." },
        { n: "07", title: "Authority & entity stacking", desc: "Backlinks + unlinked brand mentions on authoritative sources." },
        { n: "08", title: "24/7 AI monitoring", desc: "Daily live insight in your own dashboard. Positions per platform (ChatGPT/Perplexity/Gemini) + sentiment + drift detection. Monthly review." },
      ],
    },
    caseTeasers: {
      nl: [
        {
          slug: "meubel-outlet-weert",
          sector: "E-commerce / Retail",
          client: "Meubel & Outlet Weert",
          logo: "https://www.google.com/s2/favicons?domain=meubeloutletweert.nl&sz=128",
          headline: "Van lokale showroom naar AI-aanbeveling in 3 platforms.",
          description: "Genoemd door Perplexity, Gemini én ChatGPT bij vragen over meubels in Weert. 929 zoekwoorden in de Google top-10, 164 op positie 1.",
          before: "0%", after: "85%",
        },
        {
          slug: "vogelvoerkopen",
          sector: "E-commerce",
          client: "Vogelvoerkopen.nl",
          logo: "https://www.google.com/s2/favicons?domain=vogelvoerkopen.nl&sz=128",
          headline: "Van onzichtbaar tussen de grote 3 naar standaard AI-shortlist.",
          description: "Gemini en Claude noemen de webshop nu actief. 5.226 zoekwoorden in de top-10, 1.771 op positie 1, ~4.868 organische bezoeken per maand.",
          before: "0%", after: "67%",
        },
      ],
      en: [
        {
          slug: "meubel-outlet-weert",
          sector: "E-commerce / Retail",
          client: "Meubel & Outlet Weert",
          logo: "https://www.google.com/s2/favicons?domain=meubeloutletweert.nl&sz=128",
          headline: "From local showroom to AI recommendation across 3 platforms.",
          description: "Mentioned by Perplexity, Gemini and ChatGPT for furniture queries in Weert. 929 keywords in Google's top 10, 164 in position 1.",
          before: "0%", after: "85%",
        },
        {
          slug: "vogelvoerkopen",
          sector: "E-commerce",
          client: "Vogelvoerkopen.nl",
          logo: "https://www.google.com/s2/favicons?domain=vogelvoerkopen.nl&sz=128",
          headline: "From invisible next to the big three to a default AI shortlist.",
          description: "Gemini and Claude now actively mention the shop. 5,226 keywords in the top 10, 1,771 in position 1, ~4,868 organic visits per month.",
          before: "0%", after: "67%",
        },
      ],
    },
  });

  const services = [
    { to: "/diensten/seo", label: "SEO", color: "blue" as const, desc: t.seoDesc, icon: SeoIcon },
    { to: "/diensten/geo", label: "GEO", color: "molten" as const, desc: t.geoDesc, icon: GeoIcon },
    { to: "/diensten/sea", label: "SEA + AI Ads", color: "molten" as const, desc: t.seaDesc, icon: SeaAiAdsIcon },
    { to: "/diensten/cro", label: "CRO", color: "blue" as const, desc: t.croDesc, icon: CroIcon },
  ];

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
            <span className="text-molten text-[10px] font-bold tracking-widest uppercase">{t.badge}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-twilight leading-[1.05] text-balance max-w-[18ch] mb-6">
            {t.h1Pre}<span className="text-molten italic">{t.h1Mid}</span>{t.h1Post}<AnimatedRotator />
          </h1>

          <p className="text-lg md:text-xl max-w-[56ch] mb-10 text-pretty leading-relaxed">{t.heroDesc}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton to="/contact" variant="molten" size="lg">
              {t.heroCta} <ArrowRight className="size-4" />
            </CTAButton>
          </div>

          <div className="mt-12 flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-twilight/50 flex-wrap">
            <span className="flex items-center gap-2"><Sparkle size="sm" /> {t.yrs}</span>
            <span className="flex items-center gap-2"><Sparkle size="sm" /> {t.dashboard}</span>
            <span className="flex items-center gap-2"><Sparkle size="sm" /> {t.dutch}</span>
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <section className="bg-white py-12 border-y border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-twilight/40 mb-8">
            {t.trustedBy}
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

      {/* Urgentie */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow={t.urgencyEyebrow} title={t.urgencyTitle} description={t.urgencyDesc} align="center" />
        </div>
      </section>

      {/* Diensten */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow={t.servicesEyebrow} title={t.servicesTitle} description={t.servicesDesc} align="center" className="mb-16" />
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
                  {t.readMore} <ArrowRight className="size-3" />
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
              <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-4">{t.offerEyebrow}</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-twilight mb-8 text-balance max-w-[28ch] leading-tight">
                {t.offerTitle}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-4">
                  {[t.offerPoint1, t.offerPoint2, t.offerPoint3, t.offerPoint4].map((txt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Sparkle className="shrink-0 mt-1" size="sm" />
                      <span className="text-sm text-twilight">{txt}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-molten/5 p-6 rounded-[16px] ring-1 ring-molten/10">
                  <p className="text-molten font-bold text-xs tracking-widest uppercase mb-4">{t.bonusTitle}</p>
                  <ul className="text-sm space-y-3 mb-6 text-twilight">
                    <li className="flex items-start gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> {t.bonus1}</li>
                    <li className="flex items-start gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> {t.bonus2}</li>
                    <li className="flex items-start gap-2"><Check className="size-4 text-molten shrink-0 mt-0.5" /> {t.bonus3}</li>
                  </ul>
                  <div className="flex items-center gap-2 text-molten font-bold text-sm pt-4 border-t border-molten/10">
                    <span className="flex h-2 w-2 rounded-full bg-molten animate-pulse" />
                    {t.scarcity}
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-black/5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <p className="text-sm text-body-text max-w-md">{t.offerFoot}</p>
                <CTAButton to="/contact" variant="molten">
                  {t.planCall} <ArrowRight className="size-4" />
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-24 px-6 bg-twilight text-white relative overflow-hidden">
        <Sparkle className="absolute top-10 right-10 opacity-30" size="lg" animate />
        <Sparkle className="absolute bottom-20 left-10 opacity-20" size="md" color="white" animate />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <SectionHeader eyebrow={t.workEyebrow} tone="dark" title={t.workTitle} description={t.workDesc} />
            </div>
            <div className="grid grid-cols-2 gap-6 self-end">
              <div>
                <div className="font-display text-4xl font-semibold text-molten mb-1">30+</div>
                <div className="text-xs uppercase tracking-widest text-white/40">{t.yrsExp}</div>
              </div>
              <div>
                <div className="font-display text-4xl font-semibold text-molten mb-1">98%</div>
                <div className="text-xs uppercase tracking-widest text-white/40">{t.retention}</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.steps.map((s) => (
              <div key={s.n} className="p-6 rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-molten/40 transition-colors">
                <div className="font-display text-3xl font-semibold text-molten mb-3">{s.n}</div>
                <h4 className="font-display font-medium text-white mb-2">{s.title}</h4>
                <p className="text-xs text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-molten/10 ring-1 ring-molten/20 text-center">
            <p className="text-sm text-white/80">{t.seovsgeo}</p>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow={t.reviewsEyebrow} title={t.reviewsTitle} align="center" className="mb-16" />
          <div className="grid md:grid-cols-3 gap-6">
            {t.reviews.map((r) => (
              <figure key={r.author} className="p-8 bg-white ring-1 ring-black/5 rounded-2xl">
                <div className="flex gap-1 mb-4 text-molten">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <blockquote className="text-twilight font-display text-lg leading-snug mb-6">"{r.quote}"</blockquote>
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
          <SectionHeader eyebrow={t.stackEyebrow} title={t.stackTitle} description={t.stackDesc} align="center" className="mb-12" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center justify-center gap-3 p-6 bg-silver rounded-xl ring-1 ring-black/5 hover:ring-molten/30 transition-all">
                <img src={tool.url} alt={tool.name} className="h-10 w-10 object-contain" loading="lazy" />
                <span className="text-xs font-bold uppercase tracking-wider text-twilight text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow={t.whyEyebrow} title={t.whyTitle} align="center" className="mb-16" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.usps.map((u) => (
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
            <SectionHeader eyebrow={t.casesEyebrow} title={t.casesTitle} />
            <Link to="/cases" className="text-molten font-bold text-sm uppercase tracking-wider inline-flex items-center gap-1">
              {t.allCases} <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {t.caseTeasers.map((c) => (
              <Link
                key={c.slug}
                to="/cases"
                hash={c.slug}
                className="group p-8 bg-white ring-1 ring-black/5 rounded-2xl hover:ring-molten/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-twilight/5 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={c.logo} alt={`${c.client} logo`} className="size-8 rounded-md object-contain ring-1 ring-black/5 bg-white" loading="lazy" />
                  <div className="text-[10px] font-bold uppercase tracking-widest text-molten">{c.sector}</div>
                </div>
                <h3 className="font-display text-2xl font-semibold text-twilight group-hover:text-molten transition-colors leading-snug mb-2">
                  {c.client}
                </h3>
                <p className="text-twilight font-medium mb-4">{c.headline}</p>
                <p className="text-sm leading-relaxed text-body-text mb-6">{c.description}</p>
                <div className="mt-auto pt-6 border-t border-black/5 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-twilight/50 mb-1">{t.metricLabel}</div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-2xl font-semibold text-twilight/40 line-through">{c.before}</span>
                      <ArrowRight className="size-4 text-molten" />
                      <span className="font-display text-3xl font-semibold text-molten">{c.after}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-molten inline-flex items-center gap-1 shrink-0">
                    {t.readCase} <ArrowRight className="size-3" />
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
