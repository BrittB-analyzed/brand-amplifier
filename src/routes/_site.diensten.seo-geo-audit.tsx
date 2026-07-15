import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Search, Sparkles, BarChart3, Target, FileSearch, Trophy, ShieldCheck, Eye } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Sparkle } from "@/components/site/Sparkle";
import { CTAButton } from "@/components/site/CTAButton";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";

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

const pains = [
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

const seoChecks = [
  { title: "Techniek & crawlability", desc: "Kan Google je site moeiteloos lezen, indexeren en laden?" },
  { title: "Core Web Vitals", desc: "Snelheid en stabiliteit binnen Google's groene grens." },
  { title: "Content & zoekintentie", desc: "Beantwoorden je pagina's de juiste vraag, met genoeg diepgang?" },
  { title: "Zoekwoord- & positiescan", desc: "Waar sta je nu, en op welke commerciële termen liggen de kansen?" },
  { title: "Interne structuur & autoriteit", desc: "Linkstructuur, backlinks en domeinkracht." },
];

const geoChecks = [
  { title: "AI-zichtbaarheidsmeting", desc: "Word je genoemd in ChatGPT, Gemini, Perplexity en Claude bij de prompts die jouw klanten stellen?" },
  { title: "Entity-herkenning", desc: "Begrijpen AI-modellen wie je bent, wat je doet en waar je voor staat?" },
  { title: "Gestructureerde data", desc: "Schema.org en je aanwezigheid in bronnen die AI vertrouwt." },
  { title: "Citeerbaarheid van content", desc: "Staat je content in een vorm die AI direct kan overnemen als antwoord?" },
  { title: "Crawl-toegang voor AI", desc: "Mogen de AI-bots je site überhaupt lezen (robots.txt, llms.txt)?" },
  { title: "Brand-mentions & bronnen", desc: "Word je op autoritaire plekken genoemd waar AI z'n antwoorden vandaan haalt?" },
];

const outcomes = [
  { icon: BarChart3, title: "Je AI Visibility Score", desc: "Eén helder cijfer dat laat zien waar je staat in AI-antwoorden, naast je klassieke SEO-gezondheid." },
  { icon: Trophy, title: "Concurrentie-benchmark", desc: "Hoe scoor jij versus je drie belangrijkste concurrenten in Google én in AI?" },
  { icon: Sparkles, title: "Quick wins", desc: "De aanpassingen met de grootste impact en de minste moeite, als eerste." },
  { icon: Target, title: "Geprioriteerd groeiplan", desc: "Wat eerst, wat daarna, en waarom — afgestemd op omzet, niet vanity-cijfers." },
  { icon: FileSearch, title: "Bewijs uit de bron", desc: "Screenshots van echte AI-antwoorden waarin je wél of (nog) niet voorkomt." },
  { icon: ShieldCheck, title: "Live dashboard", desc: "Toegang tot je dashboard zodat je je score na de audit ziet meebewegen." },
];

const steps = [
  { t: "Aanvraag & intake", d: "Je vertelt waar je naartoe wilt; wij bepalen de belangrijkste zoektermen en prompts." },
  { t: "Dubbele meting", d: "We scannen je SEO-gezondheid én meten je aanwezigheid in de AI-assistenten." },
  { t: "Analyse & benchmark", d: "We leggen je resultaten naast je concurrenten en sporen de grootste gaten op." },
  { t: "Rapport & score", d: "Je ontvangt je AI Visibility Score, je quick wins en het groeiplan." },
  { t: "Adviesgesprek", d: "We lopen de uitkomsten samen door, zonder verkooppraat. Je weet daarna precies wat je te doen staat." },
];

const why = [
  { t: "AI-first, niet AI-erbij", d: "GEO zit in onze kern, niet als bijzaak achter klassieke SEO." },
  { t: "Bewijs boven mening", d: "Je beoordeelt ons op een live dashboard met echte cijfers, niet op mooie praatjes." },
  { t: "Beide werelden in één meting", d: "SEO en GEO los van elkaar laten meten kost je tijd en samenhang — wij doen het in één keer." },
  { t: "Eén vast aanspreekpunt", d: "30+ jaar gecombineerde ervaring, bereikbaar via je eigen Slack-kanaal." },
  { t: "Geen kleine lettertjes", d: "Je ziet precies wat we meten en waarom." },
];

const faq = [
  { q: "Wat is het verschil tussen SEO en GEO?", a: "SEO zorgt dat je gevonden wordt in de zoekresultaten van Google. GEO zorgt dat je genoemd en aanbevolen wordt in de antwoorden van AI-assistenten zoals ChatGPT, Gemini en Perplexity. Ze versterken elkaar: een gezonde SEO-basis maakt je ook beter vindbaar voor AI." },
  { q: "Hoe meten jullie of ik in AI-antwoorden voorkom?", a: "We stellen de assistenten dezelfde vragen die jouw klanten stellen en leggen vast of, en hoe, je merk in het antwoord verschijnt — onderbouwd met screenshots. Daarnaast monitoren we je aandeel in die antwoorden over tijd (je Share of LLM Voice)." },
  { q: "Hoe lang duurt de audit?", a: "Doorgaans 5 tot 10 werkdagen, afhankelijk van de grootte van je site en het aantal markten." },
  { q: "Krijg ik ook concrete actiepunten of alleen een analyse?", a: "Allebei. Je ontvangt naast de analyse een geprioriteerde lijst met quick wins en een groeiplan — zodat je direct kunt starten, met of zonder ons." },
  { q: "Werkt dit ook als mijn site technisch nog niet op orde is?", a: "Juist dan. De audit legt precies bloot welke technische zaken je content en AI-zichtbaarheid in de weg zitten, zodat je in de juiste volgorde bouwt." },
  { q: "Moet ik daarna een traject afnemen?", a: "Nee. De audit staat op zichzelf. Wil je daarna zelf aan de slag, dan kan dat. Wil je dat wij het oppakken, dan heb je de meting al als startpunt." },
];

function AuditForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const bedrijf = String(fd.get("bedrijf") ?? "").trim();
    const url = String(fd.get("url") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const hp = String(fd.get("_hp") ?? "");
    const errs: Record<string, string> = {};
    if (!bedrijf) errs.bedrijf = "Vul je bedrijfsnaam in";
    if (!url) errs.url = "Vul je website-URL in";
    if (!email) errs.email = "Vul je e-mailadres in";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Geen geldig e-mailadres";
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
      setErrors({ email: err instanceof Error ? err.message : "Verzenden mislukt." });
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="p-8 bg-molten/5 ring-1 ring-molten/20 rounded-xl text-center">
        <Sparkle className="mb-3" size="lg" />
        <p className="font-display text-xl text-twilight font-semibold mb-2">Aanvraag ontvangen</p>
        <p className="text-sm text-body-text">We nemen binnen 1 werkdag contact op via e-mail.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <input name="bedrijf" placeholder="Naam bedrijf" className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
        {errors.bedrijf && <p className="text-xs text-molten mt-1">{errors.bedrijf}</p>}
      </div>
      <div>
        <input name="url" placeholder="Website-URL" className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
        {errors.url && <p className="text-xs text-molten mt-1">{errors.url}</p>}
      </div>
      <div>
        <input name="email" type="email" required placeholder="Zakelijk e-mailadres *" className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
        {errors.email && <p className="text-xs text-molten mt-1">{errors.email}</p>}
      </div>
      <input type="text" name="_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button type="submit" disabled={submitting} className="w-full bg-molten text-white font-medium h-12 rounded-md hover:brightness-110 transition-all mt-2 inline-flex items-center justify-center gap-2 disabled:opacity-60">
        {submitting ? "Verzenden…" : (<>Vraag je SEO & GEO Audit aan <ArrowRight className="size-4" /></>)}
      </button>
      <p className="text-[11px] text-body-text text-center pt-2">Binnen 1 werkdag antwoord. Geen verkooppraat.</p>
    </form>
  );
}

function AuditPage() {
  return (
    <>
      <PageHero
        eyebrow="SEO & GEO Audit · je nulmeting"
        title={<>Word jij al gevonden door Google — én <span className="text-molten italic">aanbevolen</span> door AI?</>}
        description="95% van de zoekopdrachten loopt nog via Google, maar steeds meer klanten vragen eerst ChatGPT, Gemini of Perplexity om een aanbeveling. Onze SEO & GEO Audit laat zwart-op-wit zien waar je vandaag staat in beide werelden, waar je onzichtbaar bent, en wat de snelste route naar de top is. Geen onderbuik — een meting."
      >
        <div className="flex flex-wrap gap-3">
          <CTAButton href="#aanvraag" variant="molten">Vraag je audit aan <ArrowRight className="size-4" /></CTAButton>
          <CTAButton to="/contact" variant="outline-navy">Plan eerst een adviesgesprek</CTAButton>
        </div>
        <p className="mt-6 text-xs text-twilight/60 font-medium tracking-wide">
          30+ jaar gecombineerde ervaring ✦ Meting op ChatGPT · Gemini · Perplexity · Claude · AI Overviews ✦ Nederlands team
        </p>
      </PageHero>

      {/* Probleem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="De verschuiving" title="Bovenaan Google staan is niet meer genoeg." description="Het zoekgedrag verandert sneller dan de meeste sites bijhouden. Vroeger typten mensen drie woorden in Google en kregen een lijstje blauwe links. Nu stellen ze een volledige vraag aan een AI-assistent — en krijgen één antwoord terug, met een handvol merken erin. Sta je daar niet tussen, dan besta je in dat gesprek simpelweg niet, hoe goed je klassieke SEO ook is." />
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
          <SectionHeader align="center" eyebrow="In het kort" title="Eén meting, twee werelden: klassieke vindbaarheid én AI-zichtbaarheid." description="SEO bepaalt of je gevonden wordt in de zoekresultaten. GEO (Generative Engine Optimization) bepaalt of je genoemd en aanbevolen wordt in de antwoorden van AI-assistenten. Onze audit beoordeelt beide tegelijk: hoe gezond je site technisch is, hoe goed je content de zoekvraag beantwoordt, én hoe herkenbaar je merk is voor de modellen achter ChatGPT, Gemini, Perplexity en Google's AI Overviews. Geen rapport dat in een la verdwijnt — een heldere score met een prioriteitenlijst die je morgen kunt oppakken." />
        </div>
      </section>

      {/* Wat we onderzoeken */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader align="center" eyebrow="De scan" title="We kijken naar alles wat bepaalt of je gevonden én geciteerd wordt." className="mb-12" />
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-8 bg-silver rounded-2xl ring-1 ring-black/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-lg bg-twilight text-white flex items-center justify-center"><Search className="size-5" /></div>
                <h3 className="font-display text-xl font-semibold text-twilight">SEO-readiness</h3>
                <span className="text-xs text-twilight/50">gevonden in Google</span>
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
                <h3 className="font-display text-xl font-semibold">GEO-readiness</h3>
                <span className="text-xs text-white/50">aanbevolen door AI</span>
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
          <SectionHeader align="center" eyebrow="De uitkomst" title="Geen losse cijfers. Een score, je quick wins en een plan." className="mb-12" />
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
            <CTAButton href="#aanvraag" variant="molten">Vraag je audit aan <ArrowRight className="size-4" /></CTAButton>
          </div>
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader align="center" eyebrow="Het traject" title="Van aanvraag naar concreet plan — binnen 10 werkdagen." className="mb-12" />
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
          <SectionHeader eyebrow="Onze edge" title="Wij meten AI-zichtbaarheid waar de meeste bureaus nog raden." />
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
            <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">Aan de slag</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-balance mb-6">
              Je weet pas waar je staat als je het meet.
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Vraag je SEO & GEO Audit aan en ontdek binnen 10 werkdagen of Google én AI jouw merk vandaag al aanbevelen — en wat de snelste route naar de top is.
            </p>
            <ul className="space-y-3">
              {["AI Visibility Score + SEO-gezondheid", "Benchmark vs. 3 concurrenten", "Quick wins + geprioriteerd groeiplan", "Persoonlijk adviesgesprek"].map((t) => (
                <li key={t} className="flex gap-3 text-white/90">
                  <Check className="size-5 text-molten shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-white/60">
              Liever eerst sparren?{" "}
              <Link to="/contact" className="text-molten hover:underline">Plan een gratis adviesgesprek met Berry of Britt.</Link>
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 ring-1 ring-black/5 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Sparkle size="sm" />
              <span className="text-molten font-bold text-xs uppercase tracking-widest">Vraag aan</span>
            </div>
            <h3 className="font-display text-2xl font-semibold text-twilight mb-6">Start je audit</h3>
            <AuditForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title="Veelgestelde vragen." />
          <div className="mt-8 space-y-3">
            {faq.map((f) => (
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