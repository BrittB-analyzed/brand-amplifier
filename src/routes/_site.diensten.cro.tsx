import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Search,
  Lightbulb,
  FlaskConical,
  Wrench,
  LineChart,
  Repeat,
  Gift,
  Flag,
  Star,
  Award,
  Heart,
  Timer,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_site/diensten/cro")({
  head: () => ({
    meta: [
      { title: "CRO — Meer omzet uit hetzelfde verkeer | Expose Your Brand" },
      { name: "description", content: "Conversie-optimalisatie (CRO): frictieloze funnels, A/B-tests en gedragspsychologie. Meer klanten uit het verkeer dat je al hebt — datagedreven en meetbaar." },
      { property: "og:title", content: "CRO — Meer omzet uit hetzelfde verkeer | Expose Your Brand" },
      { property: "og:description", content: "Geen extra advertentiebudget, geen extra verkeer — alleen slimmer overtuigen." },
      { property: "og:url", content: "/diensten/cro" },
    ],
    links: [{ rel: "canonical", href: "/diensten/cro" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Conversion Rate Optimization",
          provider: { "@type": "Organization", name: "Expose Your Brand" },
        }),
      },
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
  component: CroPage,
});

const forWho = [
  "Sites met 5K+ bezoekers per maand en een duidelijk conversie-doel.",
  "Bedrijven die meer willen halen uit het verkeer dat ze al hebben.",
  "Ondernemers die liever testen dan gokken op meningen.",
];

const benefits = [
  "Volledige funnel-audit met heatmaps en sessie-opnames.",
  "Hypothesen geprioriteerd op ICE-score (impact × confidence × effort).",
  "A/B-tests met statistisch zekere uitkomsten.",
  "Formulier- en checkout-optimalisatie op micro-niveau.",
  "Conversie-tracking en attributie correct ingericht.",
];

const funnelBefore = [
  { label: "Bezoeker landt", n: 10000, drop: "100% · top of funnel" },
  { label: "Scrollt onder de fold", n: 3500, drop: "↓ 65% drop-off" },
  { label: "Opent productpagina", n: 1400, drop: "↓ 60% drop-off" },
  { label: "Begint checkout", n: 500, drop: "↓ 64% drop-off" },
  { label: "Rondt af", n: 200, drop: "→ 2,0% totale CR" },
];

const funnelAfter = [
  { label: "Bezoeker landt", n: 10000, drop: "100% · top of funnel" },
  { label: "Scrollt onder de fold", n: 4200, drop: "↓ 58% drop-off" },
  { label: "Opent productpagina", n: 1900, drop: "↓ 55% drop-off" },
  { label: "Begint checkout", n: 850, drop: "↓ 55% drop-off" },
  { label: "Rondt afgesloten", n: 498, drop: "→ 5,0% totale CR" },
];

const principles = [
  {
    icon: Gift,
    num: "01",
    title: "Wederkerigheid",
    sub: "reciprocity",
    body: "Mensen voelen zich verplicht iets terug te doen voor wie hen iets gaf. Geef eerst, vraag pas daarna.",
    demo: "Gratis audit · twv €395",
  },
  {
    icon: Flag,
    num: "02",
    title: "Commitment",
    sub: "commitment & consistency",
    body: "Wie een kleine stap zet, neemt vaker de volgende. Begin met micro-commitment en bouw op.",
    demo: "Stap 1 van 3 · 33% voltooid",
  },
  {
    icon: Star,
    num: "03",
    title: "Sociaal bewijs",
    sub: "social proof",
    body: "Mensen kijken naar wat anderen doen voordat ze beslissen. Toon dat anderen je vertrouwen.",
    demo: "★★★★★ 4,9 · 312 reviews",
  },
  {
    icon: Award,
    num: "04",
    title: "Autoriteit",
    sub: "authority",
    body: "Expertise en autoriteit verhogen vertrouwen. Toon kunde — niet verkooppraat.",
    demo: "14 jaar ervaring · 200+ trajecten",
  },
  {
    icon: Heart,
    num: "05",
    title: "Sympathie",
    sub: "liking",
    body: "Mensen kopen liever van mensen die ze sympathiek vinden. Persoonlijkheid en gezicht helpen.",
    demo: "Eerlijke kop op Zoom · geen ghosting",
  },
  {
    icon: Timer,
    num: "06",
    title: "Schaarste",
    sub: "scarcity",
    body: "Wat schaars is, wordt waardevoller gevonden. Beperkte beschikbaarheid versnelt beslissingen.",
    demo: "Nog 3 plekken open in Q3",
  },
];

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Research & data-analyse",
    short: "Waar haken bezoekers af?",
    desc: "Voordat één test draait brengen we volledig in kaart wat er nu gebeurt. Kwantitatieve data uit GA4 én kwalitatieve data uit user-recordings — samen het probleem-statement.",
    bullets: [
      "Funnel-drop analyse over alle kanalen.",
      "Heatmaps, scroll-maps en sessie-opnames.",
      "Klantinterviews en on-site surveys.",
      "Concurrentie- en best-practice scan.",
    ],
    tools: ["GA4", "Hotjar", "Microsoft Clarity", "Maze", "SurveyMonkey", "GSC"],
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "Hypothesen",
    short: "Geprioriteerd op ICE-score",
    desc: "Iedere observatie wordt een testbare hypothese. Geprioriteerd op impact, confidence en effort — zo testen we eerst wat de meeste omzet beweegt.",
    bullets: [
      "Eén hypothese per pijnpunt — concreet en meetbaar.",
      "ICE-score bepaalt volgorde van de roadmap.",
      "Verwachte lift en KPI vooraf vastgelegd.",
      "Mapping tegen funnelstap waar het effect telt.",
    ],
    tools: ["Notion roadmap", "ICE-scoring", "Eigen testlog"],
  },
  {
    num: "03",
    icon: FlaskConical,
    title: "Test-design",
    short: "Statistisch correct opgezet",
    desc: "Een A/B-test met te weinig sample of de verkeerde KPI is verloren geld. We berekenen vooraf benodigd verkeer, looptijd en betrouwbaarheid.",
    bullets: [
      "Sample size berekend per hypothese.",
      "Primary en guardrail-metrics gedefinieerd.",
      "Mobile en desktop apart geëvalueerd.",
      "QA op events, attributie en data-flow.",
    ],
    tools: ["VWO", "Convert", "GA4 experiments", "Statsig"],
  },
  {
    num: "04",
    icon: Wrench,
    title: "Implementatie & QA",
    short: "Schoon gebouwd, snel live",
    desc: "Varianten worden technisch zuiver gebouwd: geen flicker, geen layout-shift, geen vertraging in Core Web Vitals. QA over devices en browsers vóór we live gaan.",
    bullets: [
      "Geen flicker · geen CLS-impact.",
      "Cross-device en cross-browser QA.",
      "Tracking-events live geverifieerd.",
      "Fallback bij elke storing klaar.",
    ],
    tools: ["GTM", "BrowserStack", "Lighthouse", "Eigen QA-checklist"],
  },
  {
    num: "05",
    icon: LineChart,
    title: "Statistische analyse",
    short: "Pas concluderen als het mag",
    desc: "Geen peeking, geen 'we zien een trend'. We wachten op statistische significantie en kijken naar segment-effecten — niet alleen de gemiddelde uplift.",
    bullets: [
      "Significantie ≥ 95% voor we winners draaien.",
      "Segment-analyse op device, bron en nieuw vs terugkerend.",
      "Effect op omzet en marge — niet alleen CR.",
      "Heldere learnings, ook bij verloren tests.",
    ],
    tools: ["Bayesiaanse analyse", "GA4 BigQuery", "Looker Studio"],
  },
  {
    num: "06",
    icon: Repeat,
    title: "Rollout & iteratie",
    short: "Winners schalen, doorgaan",
    desc: "Winnaars worden permanent uitgerold en gedocumenteerd in het playbook. De cyclus herhaalt zich — elke maand een nieuwe sprint, elke maand een meetbare beweging.",
    bullets: [
      "Winning varianten permanent doorgevoerd.",
      "Playbook met learnings voor je team.",
      "Maandelijkse rapportage op omzet-impact.",
      "Nieuwe testronde op de volgende hypothese.",
    ],
    tools: ["Notion playbook", "Looker Studio", "GA4", "Maandelijkse review"],
  },
] as const;

const resultStats = [
  { stat: "+54%", label: "gemiddelde lift in conversion rate" },
  { stat: "−42%", label: "lagere bounce rate op kernpagina's" },
  { stat: "+€420k", label: "extra omzet per jaar bij MKB-klant" },
];

const cases = [
  { client: "Cliënt A · B2B SaaS", title: "Demo-aanvragen bijna verdrievoudigd", metric1: "+187%", metric1l: "qualified demos", metric2: "+62%", metric2l: "form completion", metric3: "5 mnd", metric3l: "trajectduur" },
  { client: "Cliënt B · e-commerce", title: "Checkout-frictie weggehaald, marge omhoog", metric1: "+38%", metric1l: "checkout-CR", metric2: "−27%", metric2l: "cart abandonment", metric3: "8 mnd", metric3l: "trajectduur" },
  { client: "Cliënt C · D2C", title: "Productpagina-redesign met meetbare lift", metric1: "+71%", metric1l: "add-to-cart", metric2: "+24%", metric2l: "AOV", metric3: "6 mnd", metric3l: "trajectduur" },
];

const faq = [
  {
    q: "Wat is CRO precies?",
    a: "Conversion Rate Optimization is het structureel verbeteren van het percentage bezoekers dat een gewenste actie uitvoert — een aankoop, een aanvraag, een download. Geen losse meningen, maar onderzoek, hypothesen en A/B-tests met statistisch significante uitkomsten.",
  },
  {
    q: "Hoeveel verkeer heb ik nodig voor A/B-tests?",
    a: "Voor betrouwbare tests adviseren we minimaal 5.000 unieke bezoekers per maand op de pagina die je test, met minstens 200 conversies per variant. Bij minder verkeer schakelen we naar kwalitatief onderzoek, heuristische optimalisaties en sequentieel testen.",
  },
  {
    q: "Hoe lang duurt een gemiddelde A/B-test?",
    a: "Doorgaans 2 tot 4 weken per test. De looptijd wordt vooraf berekend op basis van verwachte lift, baseline-conversie en sample size. We stoppen niet eerder — peeking vertroebelt het resultaat.",
  },
  {
    q: "Wanneer zie ik de eerste resultaten?",
    a: "De eerste hypothesen draaien binnen 3 tot 4 weken na de research-fase. Meetbare omzet-impact volgt meestal in maand 2 tot 3, afhankelijk van het aantal tests dat parallel kan lopen.",
  },
  {
    q: "Wat is het verschil tussen CRO en UX-design?",
    a: "UX-design is breder en vaak op gevoel. CRO is gericht op meetbare conversie en wordt gevalideerd met data. Een goede CRO-aanpak gebruikt UX-principes, maar onderbouwt elke keuze met een test of bewijs.",
  },
  {
    q: "Werken jullie ook met onze bestaande tooling?",
    a: "Ja. We stappen in op GA4, GTM, Hotjar, Clarity, VWO, Convert of welke stack je ook gebruikt. Ontbreekt er iets essentieels, dan adviseren we — maar we forceren geen tool-switch.",
  },
  {
    q: "Hoe rapporteren jullie de impact?",
    a: "Maandelijks via een live Looker Studio-dashboard met conversie, omzet en testresultaten. Plus een korte schriftelijke samenvatting met learnings — ook van de tests die niet wonnen.",
  },
  {
    q: "Wat kost een CRO-traject?",
    a: "Maatwerk en maandelijks opzegbaar. Tijdens het gratis adviesgesprek krijg je een concreet voorstel met scope, prijs en verwachte business case.",
  },
];

function CroPage() {
  return (
    <>
      <PageHero
        eyebrow="CRO · conversie-optimalisatie"
        title={<>Meer verkeer is <span className="text-molten italic">niets</span> waard zonder conversie.</>}
        description="Geen extra advertentiebudget. Geen extra verkeer. Alleen slimmer overtuigen. Wij bouwen frictieloze funnels en testen wat écht beweegt — datagedreven, statistisch zuiver en met focus op omzet."
      >
        <CTAButton to="/contact" variant="molten">
          Plan gratis CRO-adviesgesprek <ArrowRight className="size-4" />
        </CTAButton>
      </PageHero>

      <ForWhoSection />

      {/* Stat strip */}
      <section className="py-12 px-6 -mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { stat: "+1%", label: "conversie = vaak 6-cijferige extra omzet" },
            { stat: "70%", label: "van B2B-formulieren laat onnodig veel liggen" },
            { stat: "3,4×", label: "meer leads zonder extra verkeer mogelijk" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 ring-1 ring-black/5 flex items-center gap-4">
              <div className="font-display text-4xl font-semibold text-molten">{s.stat}</div>
              <div className="text-sm text-body-text">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <FunnelSection />
      <PrinciplesSection />
      <StepsSection />
      <ResultsSection />
      <CasesSection />
      <FaqSection />

      <PreFooterCTA />
    </>
  );
}

function ForWhoSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl p-8 md:p-10 ring-1 ring-black/5">
          <div className="text-molten font-bold text-xs uppercase tracking-widest mb-3">Voor wie</div>
          <h2 className="font-display text-3xl text-twilight font-semibold mb-6">Geschikt als…</h2>
          <ul className="space-y-3">
            {forWho.map((w) => (
              <li key={w} className="flex gap-3 items-start text-twilight">
                <Check className="size-5 text-molten shrink-0 mt-0.5" /> <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-molten font-bold text-xs uppercase tracking-widest mb-3">Wat je krijgt</div>
          <h2 className="font-display text-3xl text-twilight font-semibold mb-6">Concreet en meetbaar.</h2>
          <ul className="space-y-3">
            {benefits.map((b) => (
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

function FunnelSection() {
  const max = Math.max(...funnelBefore.map((f) => f.n));
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">de funnel-multiplier</div>
        <SectionHeader
          title={<>Klein gat in elke stap <span className="text-molten italic">= catastrofe</span> aan de uitgang.</>}
          description="In een funnel van 5 stappen verlies je vermenigvuldigd. Een lift van slechts +20% per stap is geen +20% conversie aan het einde — het is een verdrievoudiging van je klanten uit hetzelfde verkeer."
        />

        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          <FunnelCard label="Voor CRO" tone="cold" data={funnelBefore} max={max} totalLabel="2,0% totale CR" total="200" />
          <FunnelCard label="Na CRO" tone="molten" data={funnelAfter} max={max} totalLabel="5,0% totale CR" total="498" />
        </div>

        <div className="mt-10 grid sm:grid-cols-4 gap-4">
          {[
            { k: "Bezoekers", v: "10.000" },
            { k: "Baseline CR", v: "2,0%" },
            { k: "Per stap", v: "+20%" },
            { k: "Klanten na CRO", v: "498" },
          ].map((x) => (
            <div key={x.k} className="bg-silver rounded-xl p-5 ring-1 ring-black/5">
              <div className="text-[10px] font-bold uppercase tracking-widest text-twilight/60">{x.k}</div>
              <div className="font-display text-2xl font-semibold text-twilight mt-1">{x.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FunnelCard({
  label,
  tone,
  data,
  max,
  totalLabel,
  total,
}: {
  label: string;
  tone: "cold" | "molten";
  data: { label: string; n: number; drop: string }[];
  max: number;
  totalLabel: string;
  total: string;
}) {
  const isMolten = tone === "molten";
  return (
    <div className={cn("rounded-2xl p-8 ring-1", isMolten ? "bg-twilight text-white ring-twilight" : "bg-silver text-twilight ring-black/5")}>
      <div className="flex items-center justify-between mb-6">
        <span className={cn("text-[10px] font-bold uppercase tracking-widest", isMolten ? "text-molten" : "text-twilight/60")}>{label}</span>
        <span className={cn("font-display text-2xl font-semibold", isMolten ? "text-white" : "text-twilight")}>{total} klanten</span>
      </div>
      <div className="space-y-3">
        {data.map((s, i) => {
          const pct = (s.n / max) * 100;
          return (
            <div key={i}>
              <div className="flex items-baseline justify-between text-xs mb-1">
                <span className={cn("font-medium", isMolten ? "text-white/90" : "text-twilight")}>{i + 1}. {s.label}</span>
                <span className={cn(isMolten ? "text-white/60" : "text-body-text")}>{s.drop}</span>
              </div>
              <div className={cn("relative h-8 rounded-md overflow-hidden", isMolten ? "bg-white/10" : "bg-white")}>
                <div
                  className={cn("h-full rounded-md flex items-center justify-end px-3 text-xs font-bold", isMolten ? "bg-molten text-white" : "bg-twilight text-white")}
                  style={{ width: `${Math.max(pct, 8)}%` }}
                >
                  {s.n.toLocaleString("nl-NL")}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={cn("mt-6 pt-4 border-t flex items-center justify-between", isMolten ? "border-white/10" : "border-black/10")}>
        <span className={cn("text-xs uppercase tracking-widest", isMolten ? "text-white/60" : "text-twilight/60")}>Totale conversie</span>
        <span className={cn("font-display text-xl font-semibold", isMolten ? "text-molten" : "text-molten")}>{totalLabel}</span>
      </div>
    </div>
  );
}

function PrinciplesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">brein bij conversie</div>
        <SectionHeader
          title={<>Zes psychologische principes — <span className="text-molten italic">geen truc, wel werkzaam</span>.</>}
          description="Robert Cialdini onderzocht zes universele principes die menselijk koopgedrag verklaren. Wij vertalen ze naar concrete elementen op landingspagina's, formulieren en checkouts."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <article key={p.num} className="group p-7 bg-white rounded-2xl ring-1 ring-black/5 hover:ring-molten/30 hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-twilight/40">{p.num}</span>
                  <div className="size-10 rounded-lg bg-molten/10 text-molten flex items-center justify-center">
                    <Icon className="size-5" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-twilight">{p.title}</h3>
                <div className="text-xs text-molten italic mb-3">{p.sub}</div>
                <p className="text-sm text-body-text leading-relaxed">{p.body}</p>
                <div className="mt-5 pt-4 border-t border-black/5 text-xs font-mono text-twilight bg-silver rounded-lg px-3 py-2 inline-block">
                  {p.demo}
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
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Icon = step.icon;
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">onze werkwijze</div>
        <SectionHeader
          title={<>Zes stappen. Van eerste hypothese tot <span className="text-molten italic">structurele lift</span>.</>}
          description="Geen losse 'we hebben de knop oranje gemaakt'. Iedere test is een hypothese, een experiment, een statistische uitkomst — gedocumenteerd zoals een wetenschapper het zou doen."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-2">
            {steps.map((s, i) => {
              const StepIcon = s.icon;
              return (
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
                  <span className="font-display text-2xl font-semibold shrink-0 text-molten">{s.num}</span>
                  <div className="min-w-0 flex-1">
                    <div className="font-display font-semibold flex items-center gap-2">
                      <StepIcon className="size-4 opacity-70" /> {s.title}
                    </div>
                    <div className={cn("text-sm mt-1", i === active ? "text-white/70" : "text-body-text")}>{s.short}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 p-8 md:p-10 bg-silver rounded-2xl ring-1 ring-black/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-10 rounded-lg bg-molten/10 text-molten flex items-center justify-center">
                <Icon className="size-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-molten">Stap {step.num} van 06</div>
            </div>
            <h3 className="font-display text-3xl font-semibold text-twilight mb-4">{step.title}</h3>
            <p className="text-body-text leading-relaxed mb-6">{step.desc}</p>
            <ul className="space-y-3 mb-8">
              {step.bullets.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <span className="shrink-0 mt-1 size-5 rounded-full bg-molten/10 text-molten flex items-center justify-center">
                    <Check className="size-3" />
                  </span>
                  <span className="text-sm text-twilight">{b}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-black/10">
              <div className="text-[10px] font-bold uppercase tracking-widest text-twilight/60 mb-3">Tools die we in deze stap inzetten</div>
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

function ResultsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">voor en na</div>
        <SectionHeader
          title={<>Zelfde product, zelfde aanbod — <span className="text-molten italic">anders gebracht</span>.</>}
          description="Een CRO-redesign verandert niets aan wat je verkoopt. Wel aan hoe overtuigend, helder en frictieloos het overkomt. Resultaten die we regelmatig zien:"
        />
        <div className="grid sm:grid-cols-3 gap-5 mt-12">
          {resultStats.map((s) => (
            <div key={s.label} className="bg-twilight text-white rounded-2xl p-8">
              <div className="font-display text-5xl font-semibold text-molten">{s.stat}</div>
              <div className="text-sm text-white/80 mt-3">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">cases</div>
        <SectionHeader
          title={<>Echte CRO-cases <span className="text-molten italic">uit ons portfolio</span>.</>}
          description="Een selectie van klantcases waar CRO meetbare omzet bewoog. Cijfers, periode en aanpak per traject — definitieve invulling volgt."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {cases.map((c) => (
            <article key={c.title} className="p-8 bg-silver rounded-2xl ring-1 ring-black/5 hover:ring-molten/30 hover:-translate-y-1 transition-all">
              <div className="text-[10px] font-bold uppercase tracking-widest text-molten mb-2">{c.client}</div>
              <h3 className="font-display text-xl font-semibold text-twilight mb-6 min-h-[3.5rem]">{c.title}</h3>
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-black/5">
                {[
                  { v: c.metric1, l: c.metric1l },
                  { v: c.metric2, l: c.metric2l },
                  { v: c.metric3, l: c.metric3l },
                ].map((m) => (
                  <div key={m.l}>
                    <div className="font-display text-xl font-semibold text-molten">{m.v}</div>
                    <div className="text-[10px] uppercase tracking-wide text-body-text mt-1 leading-tight">{m.l}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton to="/cases" variant="outline-navy">
            Bekijk alle cases <ArrowRight className="size-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
