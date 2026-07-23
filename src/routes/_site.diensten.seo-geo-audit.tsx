import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Search, Sparkles, BarChart3, Target, FileSearch, Trophy, ShieldCheck, Eye } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Sparkle } from "@/components/site/Sparkle";
import { CTAButton } from "@/components/site/CTAButton";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { useLang, pick, T } from "@/lib/i18n";

export const Route = createFileRoute("/_site/diensten/seo-geo-audit")({
  head: () => ({
    meta: [
      { title: "SEO & GEO Audit — zie of Google én AI je aanbevelen | Expose Your Brand" },
      {
        name: "description",
        content:
          "Ontdek precies waar je staat in Google én in ChatGPT, Gemini, Perplexity en AI Overviews. Onze SEO & GEO Audit levert je AI Visibility Score, je quick wins en een concreet groeiplan.",
      },
      { property: "og:title", content: "SEO & GEO Audit | Expose Your Brand" },
      { property: "og:description", content: "Word jij al gevonden door Google — én aanbevolen door AI? Vraag je audit aan." },
      { property: "og:url", content: "https://expose-ai-shine.lovable.app/diensten/seo-geo-audit" },
    ],
    links: [{ rel: "canonical", href: "https://expose-ai-shine.lovable.app/diensten/seo-geo-audit" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: AuditPage,
});

const painsNL = [
  {
    icon: Eye,
    title: "Onzichtbaar in AI-antwoorden",
    desc: "Je concurrent wordt genoemd door ChatGPT, jij niet — en je merkt het niet eens.",
  },
  {
    icon: Search,
    title: "Verouderde SEO-tactiek",
    desc: "Tijd en budget in technieken die voor klassieke zoekresultaten werkten, maar AI-engines niet bereiken.",
  },
  {
    icon: FileSearch,
    title: "Ongestructureerde data",
    desc: "Je informatie staat zó online dat AI-modellen je merk niet betrouwbaar kunnen herkennen of citeren.",
  },
];
const painsEN = [
  { icon: Eye, title: "Invisible in AI answers", desc: "Your competitor gets mentioned by ChatGPT, you don't — and you don't even notice." },
  { icon: Search, title: "Outdated SEO tactics", desc: "Time and budget spent on techniques that worked for classic search results but never reach AI engines." },
  { icon: FileSearch, title: "Unstructured data", desc: "Your information is presented so that AI models can't reliably recognize or cite your brand." },
];

const seoChecksNL = [
  { title: "Techniek & crawlability", desc: "Kan Google je site moeiteloos lezen, indexeren en laden?" },
  { title: "Core Web Vitals", desc: "Snelheid en stabiliteit binnen Google's groene grens." },
  { title: "Content & zoekintentie", desc: "Beantwoorden je pagina's de juiste vraag, met genoeg diepgang?" },
  { title: "Zoekwoord- & positiescan", desc: "Waar sta je nu, en op welke commerciële termen liggen de kansen?" },
  { title: "Interne structuur & autoriteit", desc: "Linkstructuur, backlinks en domeinkracht." },
];
const seoChecksEN = [
  { title: "Tech & crawlability", desc: "Can Google read, index and load your site effortlessly?" },
  { title: "Core Web Vitals", desc: "Speed and stability within Google's green zone." },
  { title: "Content & search intent", desc: "Do your pages answer the right question with enough depth?" },
  { title: "Keyword & ranking scan", desc: "Where do you stand, and which commercial terms hold the opportunity?" },
  { title: "Internal structure & authority", desc: "Link structure, backlinks and domain strength." },
];

const geoChecksNL = [
  { title: "AI-zichtbaarheidsmeting", desc: "Word je genoemd in ChatGPT, Gemini, Perplexity en Claude bij de prompts die jouw klanten stellen?" },
  { title: "Entity-herkenning", desc: "Begrijpen AI-modellen wie je bent, wat je doet en waar je voor staat?" },
  { title: "Gestructureerde data", desc: "Schema.org en je aanwezigheid in bronnen die AI vertrouwt." },
  { title: "Citeerbaarheid van content", desc: "Staat je content in een vorm die AI direct kan overnemen als antwoord?" },
  { title: "Crawl-toegang voor AI", desc: "Mogen de AI-bots je site überhaupt lezen (robots.txt, llms.txt)?" },
  { title: "Brand-mentions & bronnen", desc: "Word je op autoritaire plekken genoemd waar AI z'n antwoorden vandaan haalt?" },
];
const geoChecksEN = [
  { title: "AI visibility measurement", desc: "Do you get mentioned in ChatGPT, Gemini, Perplexity and Claude on the prompts your customers actually ask?" },
  { title: "Entity recognition", desc: "Do AI models understand who you are, what you do, and what you stand for?" },
  { title: "Structured data", desc: "Schema.org and your presence in sources AI trusts." },
  { title: "Citability of content", desc: "Is your content in a form AI can pick up directly as an answer?" },
  { title: "Crawl access for AI", desc: "Are AI bots even allowed to read your site (robots.txt, llms.txt)?" },
  { title: "Brand mentions & sources", desc: "Are you mentioned in the authoritative places AI pulls its answers from?" },
];

const outcomesNL = [
  { icon: BarChart3, title: "Je AI Visibility Score", desc: "Eén helder cijfer dat laat zien waar je staat in AI-antwoorden, naast je klassieke SEO-gezondheid." },
  { icon: Trophy, title: "Concurrentie-benchmark", desc: "Hoe scoor jij versus je drie belangrijkste concurrenten in Google én in AI?" },
  { icon: Sparkles, title: "Quick wins", desc: "De aanpassingen met de grootste impact en de minste moeite, als eerste." },
  { icon: Target, title: "Geprioriteerd groeiplan", desc: "Wat eerst, wat daarna, en waarom — afgestemd op omzet, niet vanity-cijfers." },
  { icon: FileSearch, title: "Bewijs uit de bron", desc: "Screenshots van echte AI-antwoorden waarin je wél of (nog) niet voorkomt." },
  { icon: ShieldCheck, title: "Live dashboard", desc: "Toegang tot je dashboard zodat je je score na de audit ziet meebewegen." },
];
const outcomesEN = [
  { icon: BarChart3, title: "Your AI Visibility Score", desc: "One clear number showing where you stand in AI answers, next to your classic SEO health." },
  { icon: Trophy, title: "Competitive benchmark", desc: "How do you score versus your three main competitors in Google and in AI?" },
  { icon: Sparkles, title: "Quick wins", desc: "The changes with the biggest impact and least effort, first." },
  { icon: Target, title: "Prioritized growth plan", desc: "What first, what next, and why — tied to revenue, not vanity metrics." },
  { icon: FileSearch, title: "Evidence from the source", desc: "Screenshots of real AI answers where you do or don't (yet) appear." },
  { icon: ShieldCheck, title: "Live dashboard", desc: "Access to your dashboard so you can watch your score move after the audit." },
];

const stepsNL = [
  { t: "Aanvraag & intake", d: "Je vertelt waar je naartoe wilt; wij bepalen de belangrijkste zoektermen en prompts." },
  { t: "Dubbele meting", d: "We scannen je SEO-gezondheid én meten je aanwezigheid in de AI-assistenten." },
  { t: "Analyse & benchmark", d: "We leggen je resultaten naast je concurrenten en sporen de grootste gaten op." },
  { t: "Rapport & score", d: "Je ontvangt je AI Visibility Score, je quick wins en het groeiplan." },
  { t: "Adviesgesprek", d: "We lopen de uitkomsten samen door, zonder verkooppraat. Je weet daarna precies wat je te doen staat." },
];
const stepsEN = [
  { t: "Request & intake", d: "You tell us where you want to go; we pin down the key search terms and prompts." },
  { t: "Dual measurement", d: "We scan your SEO health and measure your presence across the AI assistants." },
  { t: "Analysis & benchmark", d: "We stack your results next to your competitors and spot the biggest gaps." },
  { t: "Report & score", d: "You get your AI Visibility Score, your quick wins and the growth plan." },
  { t: "Advisory call", d: "We walk through the results together, no sales pitch. You'll know exactly what to do next." },
];

const whyNL = [
  { t: "AI-first, niet AI-erbij", d: "GEO zit in onze kern, niet als bijzaak achter klassieke SEO." },
  { t: "Bewijs boven mening", d: "Je beoordeelt ons op een live dashboard met echte cijfers, niet op mooie praatjes." },
  { t: "Beide werelden in één meting", d: "SEO en GEO los van elkaar laten meten kost je tijd en samenhang — wij doen het in één keer." },
  { t: "Eén vast aanspreekpunt", d: "30+ jaar gecombineerde ervaring, bereikbaar via je eigen Slack-kanaal." },
  { t: "Geen kleine lettertjes", d: "Je ziet precies wat we meten en waarom." },
];
const whyEN = [
  { t: "AI-first, not AI-on-the-side", d: "GEO sits at our core, not tacked on behind classic SEO." },
  { t: "Evidence over opinion", d: "You judge us on a live dashboard with real numbers, not on nice talk." },
  { t: "Both worlds in one measurement", d: "Measuring SEO and GEO separately costs you time and coherence — we do it in one pass." },
  { t: "One fixed point of contact", d: "30+ years of combined experience, reachable via your own Slack channel." },
  { t: "No small print", d: "You see exactly what we measure and why." },
];

const faq = [
  { q: "Wat is het verschil tussen SEO en GEO?", a: "SEO zorgt dat je gevonden wordt in de zoekresultaten van Google. GEO zorgt dat je genoemd en aanbevolen wordt in de antwoorden van AI-assistenten zoals ChatGPT, Gemini en Perplexity. Ze versterken elkaar: een gezonde SEO-basis maakt je ook beter vindbaar voor AI." },
  { q: "Hoe meten jullie of ik in AI-antwoorden voorkom?", a: "We stellen de assistenten dezelfde vragen die jouw klanten stellen en leggen vast of, en hoe, je merk in het antwoord verschijnt — onderbouwd met screenshots. Daarnaast monitoren we je aandeel in die antwoorden over tijd (je Share of LLM Voice)." },
  { q: "Hoe lang duurt de audit?", a: "Doorgaans 5 tot 10 werkdagen, afhankelijk van de grootte van je site en het aantal markten." },
  { q: "Krijg ik ook concrete actiepunten of alleen een analyse?", a: "Allebei. Je ontvangt naast de analyse een geprioriteerde lijst met quick wins en een groeiplan — zodat je direct kunt starten, met of zonder ons." },
  { q: "Werkt dit ook als mijn site technisch nog niet op orde is?", a: "Juist dan. De audit legt precies bloot welke technische zaken je content en AI-zichtbaarheid in de weg zitten, zodat je in de juiste volgorde bouwt." },
  { q: "Moet ik daarna een traject afnemen?", a: "Nee. De audit staat op zichzelf. Wil je daarna zelf aan de slag, dan kan dat. Wil je dat wij het oppakken, dan heb je de meting al als startpunt." },
];
const faqEN = [
  { q: "What's the difference between SEO and GEO?", a: "SEO makes sure you're found in Google's search results. GEO makes sure you're mentioned and recommended in the answers of AI assistants like ChatGPT, Gemini and Perplexity. They reinforce each other: a healthy SEO base also makes you more visible to AI." },
  { q: "How do you measure whether I appear in AI answers?", a: "We ask the assistants the same questions your customers ask and record whether — and how — your brand appears in the answer, backed by screenshots. We also monitor your share of those answers over time (your Share of LLM Voice)." },
  { q: "How long does the audit take?", a: "Typically 5 to 10 business days, depending on the size of your site and the number of markets." },
  { q: "Do I get concrete actions or only analysis?", a: "Both. Alongside the analysis you get a prioritized list of quick wins and a growth plan — so you can get started right away, with or without us." },
  { q: "Does this work if my site isn't yet technically in order?", a: "Especially then. The audit pinpoints exactly which technical issues stand between your content and AI visibility, so you build in the right order." },
  { q: "Do I have to sign up for a project afterwards?", a: "No. The audit stands on its own. If you want to run with it yourself, go for it. If you want us to pick it up, you already have the measurement as a starting point." },
];

function AuditForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const lang = useLang();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const bedrijf = String(fd.get("bedrijf") ?? "").trim();
    const url = String(fd.get("url") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const hp = String(fd.get("_hp") ?? "");
    const errs: Record<string, string> = {};
    if (!bedrijf) errs.bedrijf = pick(lang, { nl: "Vul je bedrijfsnaam in", en: "Please enter your company name" });
    if (!url) errs.url = pick(lang, { nl: "Vul je website-URL in", en: "Please enter your website URL" });
    if (!email) errs.email = pick(lang, { nl: "Vul je e-mailadres in", en: "Please enter your email" });
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = pick(lang, { nl: "Geen geldig e-mailadres", en: "Not a valid email address" });
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    try {
      const { sendFormSubmission } = await import("@/lib/send-form.functions");
      await sendFormSubmission({
        data: {
          formName: "SEO & GEO Audit",
          name: bedrijf,
          email,
          url: /^https?:\/\//i.test(url) ? url : `https://${url}`,
          _hp: hp,
        },
      });
      setSent(true);
    } catch (err) {
      setErrors({ email: err instanceof Error ? err.message : pick(lang, { nl: "Verzenden mislukt.", en: "Failed to send." }) });
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="p-8 bg-molten/5 ring-1 ring-molten/20 rounded-xl text-center">
        <Sparkle className="mb-3" size="lg" />
        <p className="font-display text-xl text-twilight font-semibold mb-2">{pick(lang, { nl: "Aanvraag ontvangen", en: "Request received" })}</p>
        <p className="text-sm text-body-text">{pick(lang, { nl: "We nemen binnen 1 werkdag contact op via e-mail.", en: "We'll be in touch via email within 1 business day." })}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <input name="bedrijf" placeholder={pick(lang, { nl: "Naam bedrijf", en: "Company name" })} className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
        {errors.bedrijf && <p className="text-xs text-molten mt-1">{errors.bedrijf}</p>}
      </div>
      <div>
        <input name="url" placeholder={pick(lang, { nl: "Website-URL", en: "Website URL" })} className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
        {errors.url && <p className="text-xs text-molten mt-1">{errors.url}</p>}
      </div>
      <div>
        <input name="email" type="email" required placeholder={pick(lang, { nl: "Zakelijk e-mailadres *", en: "Business email *" })} className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
        {errors.email && <p className="text-xs text-molten mt-1">{errors.email}</p>}
      </div>
      <input type="text" name="_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button type="submit" disabled={submitting} className="w-full bg-molten text-white font-medium h-12 rounded-md hover:brightness-110 transition-all mt-2 inline-flex items-center justify-center gap-2 disabled:opacity-60">
        {submitting ? pick(lang, { nl: "Verzenden…", en: "Sending…" }) : (<>{pick(lang, { nl: "Vraag je SEO & GEO Audit aan", en: "Request your SEO & GEO Audit" })} <ArrowRight className="size-4" /></>)}
      </button>
      <p className="text-[11px] text-body-text text-center pt-2">{pick(lang, { nl: "Binnen 1 werkdag antwoord. Geen verkooppraat.", en: "Reply within 1 business day. No sales pitch." })}</p>
    </form>
  );
}

function AuditPage() {
  const lang = useLang();
  const pains = lang === "en" ? painsEN : painsNL;
  const seoChecks = lang === "en" ? seoChecksEN : seoChecksNL;
  const geoChecks = lang === "en" ? geoChecksEN : geoChecksNL;
  const outcomes = lang === "en" ? outcomesEN : outcomesNL;
  const steps = lang === "en" ? stepsEN : stepsNL;
  const why = lang === "en" ? whyEN : whyNL;
  const faqList = lang === "en" ? faqEN : faq;
  return (
    <>
      <PageHero
        eyebrow={pick(lang, { nl: "SEO & GEO Audit · je nulmeting", en: "SEO & GEO Audit · your baseline" })}
        title={<T nl={<>Word jij al gevonden door Google — én <span className="text-molten italic">aanbevolen</span> door AI?</>} en={<>Are you found by Google — and <span className="text-molten italic">recommended</span> by AI?</>} />}
        description={pick(lang, { nl: "95% van de zoekopdrachten loopt nog via Google, maar steeds meer klanten vragen eerst ChatGPT, Gemini of Perplexity om een aanbeveling. Onze SEO & GEO Audit laat zwart-op-wit zien waar je vandaag staat in beide werelden, waar je onzichtbaar bent, en wat de snelste route naar de top is. Geen onderbuik — een meting.", en: "95% of searches still go through Google, but more and more customers first ask ChatGPT, Gemini or Perplexity for a recommendation. Our SEO & GEO Audit shows in black and white where you stand today in both worlds, where you're invisible, and the fastest route to the top. Not a gut feeling — a measurement." })}
      >
        <div className="flex flex-wrap gap-3">
          <CTAButton href="#aanvraag" variant="molten">{pick(lang, { nl: "Vraag je audit aan", en: "Request your audit" })} <ArrowRight className="size-4" /></CTAButton>
          <CTAButton to="/contact" variant="outline-navy">{pick(lang, { nl: "Plan eerst een adviesgesprek", en: "Book an intro call first" })}</CTAButton>
        </div>
        <p className="mt-6 text-xs text-twilight/60 font-medium tracking-wide">
          {pick(lang, { nl: "30+ jaar gecombineerde ervaring ✦ Meting op ChatGPT · Gemini · Perplexity · Claude · AI Overviews ✦ Nederlands team", en: "30+ years of combined experience ✦ Measured across ChatGPT · Gemini · Perplexity · Claude · AI Overviews ✦ Dutch team" })}
        </p>
      </PageHero>

      {/* Probleem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "De verschuiving", en: "The shift" })}
            title={pick(lang, { nl: "Bovenaan Google staan is niet meer genoeg.", en: "Ranking at the top of Google is no longer enough." })}
            description={pick(lang, { nl: "Het zoekgedrag verandert sneller dan de meeste sites bijhouden. Vroeger typten mensen drie woorden in Google en kregen een lijstje blauwe links. Nu stellen ze een volledige vraag aan een AI-assistent — en krijgen één antwoord terug, met een handvol merken erin. Sta je daar niet tussen, dan besta je in dat gesprek simpelweg niet, hoe goed je klassieke SEO ook is.", en: "Search behaviour is changing faster than most sites can keep up. People used to type three words into Google and get a list of blue links. Now they ask an AI assistant a full question — and get a single answer back, with a handful of brands in it. If you're not one of them, you simply don't exist in that conversation, no matter how strong your classic SEO is." })}
          />
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {pains.map((p) => (
              <div key={p.title} className="p-6 bg-silver rounded-2xl ring-1 ring-black/5">
                <div className="size-10 rounded-lg bg-molten/10 text-molten flex items-center justify-center mb-4">
                  <p.icon className="size-5" />
                </div>
                <h3 className="font-display font-semibold text-twilight mb-2">{p.title}</h3>
                <p className="text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat is het */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            align="center"
            eyebrow={pick(lang, { nl: "In het kort", en: "In short" })}
            title={pick(lang, { nl: "Eén meting, twee werelden: klassieke vindbaarheid én AI-zichtbaarheid.", en: "One measurement, two worlds: classic findability and AI visibility." })}
            description={pick(lang, { nl: "SEO bepaalt of je gevonden wordt in de zoekresultaten. GEO (Generative Engine Optimization) bepaalt of je genoemd en aanbevolen wordt in de antwoorden van AI-assistenten. Onze audit beoordeelt beide tegelijk: hoe gezond je site technisch is, hoe goed je content de zoekvraag beantwoordt, én hoe herkenbaar je merk is voor de modellen achter ChatGPT, Gemini, Perplexity en Google's AI Overviews. Geen rapport dat in een la verdwijnt — een heldere score met een prioriteitenlijst die je morgen kunt oppakken.", en: "SEO decides whether you're found in the search results. GEO (Generative Engine Optimization) decides whether you're mentioned and recommended in the answers of AI assistants. Our audit assesses both at once: how technically healthy your site is, how well your content answers the search intent, and how recognizable your brand is to the models behind ChatGPT, Gemini, Perplexity and Google's AI Overviews. Not a report that ends up in a drawer — a clear score with a priority list you can start on tomorrow." })}
          />
        </div>
      </section>

      {/* Wat we onderzoeken */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader align="center" eyebrow={pick(lang, { nl: "De scan", en: "The scan" })} title={pick(lang, { nl: "We kijken naar alles wat bepaalt of je gevonden én geciteerd wordt.", en: "We look at everything that decides whether you're found and cited." })} className="mb-12" />
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-8 bg-silver rounded-2xl ring-1 ring-black/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-lg bg-twilight text-white flex items-center justify-center"><Search className="size-5" /></div>
                <h3 className="font-display text-xl font-semibold text-twilight">{pick(lang, { nl: "SEO-readiness", en: "SEO readiness" })}</h3>
                <span className="text-xs text-twilight/50">{pick(lang, { nl: "gevonden in Google", en: "found in Google" })}</span>
              </div>
              <ul className="space-y-4">
                {seoChecks.map((c) => (
                  <li key={c.title} className="flex gap-3">
                    <Check className="size-4 text-molten mt-1 shrink-0" />
                    <div>
                      <div className="font-medium text-twilight text-sm">{c.title}</div>
                      <div className="text-sm text-body-text">{c.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-twilight text-white rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-lg bg-molten text-white flex items-center justify-center"><Sparkles className="size-5" /></div>
                <h3 className="font-display text-xl font-semibold">{pick(lang, { nl: "GEO-readiness", en: "GEO readiness" })}</h3>
                <span className="text-xs text-white/50">{pick(lang, { nl: "aanbevolen door AI", en: "recommended by AI" })}</span>
              </div>
              <ul className="space-y-4">
                {geoChecks.map((c) => (
                  <li key={c.title} className="flex gap-3">
                    <Check className="size-4 text-molten mt-1 shrink-0" />
                    <div>
                      <div className="font-medium text-white text-sm">{c.title}</div>
                      <div className="text-sm text-white/70">{c.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wat je krijgt */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader align="center" eyebrow={pick(lang, { nl: "De uitkomst", en: "The outcome" })} title={pick(lang, { nl: "Geen losse cijfers. Een score, je quick wins en een plan.", en: "Not stray numbers. A score, your quick wins and a plan." })} className="mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((o) => (
              <div key={o.title} className="p-6 bg-white rounded-2xl ring-1 ring-black/5">
                <div className="size-10 rounded-lg bg-molten/10 text-molten flex items-center justify-center mb-4">
                  <o.icon className="size-5" />
                </div>
                <h3 className="font-display font-semibold text-twilight mb-2">{o.title}</h3>
                <p className="text-sm">{o.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton href="#aanvraag" variant="molten">{pick(lang, { nl: "Vraag je audit aan", en: "Request your audit" })} <ArrowRight className="size-4" /></CTAButton>
          </div>
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader align="center" eyebrow={pick(lang, { nl: "Het traject", en: "The process" })} title={pick(lang, { nl: "Van aanvraag naar concreet plan — binnen 10 werkdagen.", en: "From request to concrete plan — within 10 business days." })} className="mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={s.t} className="p-6 bg-silver rounded-xl ring-1 ring-black/5">
                <div className="font-display text-3xl font-semibold text-molten mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h4 className="font-display font-semibold text-twilight mb-2">{s.t}</h4>
                <p className="text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12">
          <SectionHeader eyebrow={pick(lang, { nl: "Onze edge", en: "Our edge" })} title={pick(lang, { nl: "Wij meten AI-zichtbaarheid waar de meeste bureaus nog raden.", en: "We measure AI visibility where most agencies are still guessing." })} />
          <ul className="space-y-4">
            {why.map((w) => (
              <li key={w.t} className="p-5 bg-white rounded-xl ring-1 ring-black/5 flex gap-4">
                <Sparkle className="shrink-0 mt-1" size="sm" />
                <div>
                  <div className="font-display font-semibold text-twilight">{w.t}</div>
                  <div className="text-sm text-body-text">{w.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Aanvraag formulier */}
      <section id="aanvraag" className="py-20 px-6 bg-twilight scroll-mt-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-white">
            <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">{pick(lang, { nl: "Aan de slag", en: "Let's go" })}</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-balance mb-6">
              {pick(lang, { nl: "Je weet pas waar je staat als je het meet.", en: "You only know where you stand when you measure it." })}
            </h2>
            <p className="text-white/70 text-lg mb-8">
              {pick(lang, { nl: "Vraag je SEO & GEO Audit aan en ontdek binnen 10 werkdagen of Google én AI jouw merk vandaag al aanbevelen — en wat de snelste route naar de top is.", en: "Request your SEO & GEO Audit and find out within 10 business days whether Google and AI already recommend your brand — and the fastest route to the top." })}
            </p>
            <ul className="space-y-3">
              {pick(lang, {
                nl: ["AI Visibility Score + SEO-gezondheid", "Benchmark vs. 3 concurrenten", "Quick wins + geprioriteerd groeiplan", "Persoonlijk adviesgesprek"],
                en: ["AI Visibility Score + SEO health", "Benchmark vs. 3 competitors", "Quick wins + prioritized growth plan", "Personal advisory call"],
              }).map((t) => (
                <li key={t} className="flex gap-3 text-white/90">
                  <Check className="size-5 text-molten shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-white/60">
              {pick(lang, { nl: "Liever eerst sparren? ", en: "Prefer to talk first? " })}
              <Link to="/contact" className="text-molten hover:underline">{pick(lang, { nl: "Plan een gratis adviesgesprek met Berry of Britt.", en: "Book a free advisory call with Berry or Britt." })}</Link>
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 ring-1 ring-black/5 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Sparkle size="sm" />
              <span className="text-molten font-bold text-xs uppercase tracking-widest">{pick(lang, { nl: "Vraag aan", en: "Request" })}</span>
            </div>
            <h3 className="font-display text-2xl font-semibold text-twilight mb-6">{pick(lang, { nl: "Start je audit", en: "Start your audit" })}</h3>
            <AuditForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title={pick(lang, { nl: "Veelgestelde vragen.", en: "Frequently asked questions." })} />
          <div className="mt-8 space-y-3">
            {faqList.map((f) => (
              <details key={f.q} className="group p-6 bg-white rounded-xl ring-1 ring-black/5">
                <summary className="cursor-pointer font-display font-semibold text-twilight flex items-center justify-between">
                  {f.q}
                  <span className="text-molten transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}