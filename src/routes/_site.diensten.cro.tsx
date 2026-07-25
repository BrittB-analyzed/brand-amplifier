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
import { T, useLang, pick } from "@/lib/i18n";

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
            name: f.q.nl,
            acceptedAnswer: { "@type": "Answer", text: f.a.nl },
          })),
        }),
      },
    ],
  }),
  component: CroPage,
});

const forWho = [
  { nl: "Je hebt al verkeer, maar de conversie blijft achter.", en: "You already get traffic, but conversion is lagging behind." },
  { nl: "Je verkoopt een high-ticket product of dienst — elke 0,1% extra conversie verdient zichzelf terug.", en: "You sell a high-ticket product or service — every 0.1% extra conversion pays for itself." },
  { nl: "Je marketingbudget is gelimiteerd: meer halen uit hetzelfde verkeer in plaats van bijschalen.", en: "Your marketing budget is limited: get more out of the traffic you already have instead of scaling spend." },
  { nl: "Je hebt product-market fit — CRO maakt een goed aanbod overtuigender, niet een slecht aanbod beter.", en: "You have product-market fit — CRO makes a good offer more persuasive, it doesn't fix a weak one." },
  { nl: "Je bent bereid te testen: meten, hypothese, experiment, leren, herhalen.", en: "You're willing to test: measure, hypothesise, experiment, learn, repeat." },
];

const benefits = [
  { nl: "Conversie-audit met heatmaps, session recordings en duidelijke baseline.", en: "Conversion audit with heatmaps, session recordings and a clear baseline." },
  { nl: "Data-gedreven hypothesen op basis van échte bezoeker-gedrag — geen onderbuik.", en: "Data-driven hypotheses based on real visitor behaviour — never gut feeling." },
  { nl: "Maandelijks 2–4 A/B-tests met heldere winnaars en learnings.", en: "2–4 A/B tests a month with clear winners and learnings." },
  { nl: "Copy- en messaging-optimalisatie op headlines, CTA's en formulieren.", en: "Copy and messaging optimisation on headlines, CTAs and forms." },
  { nl: "Doorlopende monitoring en maandelijkse rapportage op conversie-impact.", en: "Ongoing monitoring and monthly reporting on conversion impact." },
];

const funnelBefore = [
  { label: { nl: "Bezoeker landt", en: "Visitor lands" }, n: 10000, drop: { nl: "100% · top of funnel", en: "100% · top of funnel" } },
  { label: { nl: "Scrollt onder de fold", en: "Scrolls below the fold" }, n: 3500, drop: { nl: "↓ 65% drop-off", en: "↓ 65% drop-off" } },
  { label: { nl: "Opent productpagina", en: "Opens product page" }, n: 1400, drop: { nl: "↓ 60% drop-off", en: "↓ 60% drop-off" } },
  { label: { nl: "Begint checkout", en: "Starts checkout" }, n: 500, drop: { nl: "↓ 64% drop-off", en: "↓ 64% drop-off" } },
  { label: { nl: "Rondt af", en: "Completes purchase" }, n: 200, drop: { nl: "→ 2,0% totale CR", en: "→ 2.0% total CR" } },
];

const funnelAfter = [
  { label: { nl: "Bezoeker landt", en: "Visitor lands" }, n: 10000, drop: { nl: "100% · top of funnel", en: "100% · top of funnel" } },
  { label: { nl: "Scrollt onder de fold", en: "Scrolls below the fold" }, n: 4200, drop: { nl: "↓ 58% drop-off", en: "↓ 58% drop-off" } },
  { label: { nl: "Opent productpagina", en: "Opens product page" }, n: 1900, drop: { nl: "↓ 55% drop-off", en: "↓ 55% drop-off" } },
  { label: { nl: "Begint checkout", en: "Starts checkout" }, n: 850, drop: { nl: "↓ 55% drop-off", en: "↓ 55% drop-off" } },
  { label: { nl: "Rondt afgesloten", en: "Completes purchase" }, n: 498, drop: { nl: "→ 5,0% totale CR", en: "→ 5.0% total CR" } },
];

const principles = [
  {
    icon: Gift,
    num: "01",
    title: { nl: "Wederkerigheid", en: "Reciprocity" },
    sub: "reciprocity",
    body: { nl: "Mensen voelen zich verplicht iets terug te doen voor wie hen iets gaf. Geef eerst, vraag pas daarna.", en: "People feel obliged to return a favour. Give something of value first, then ask." },
    demo: { nl: "Gratis audit · twv €395", en: "Free audit · worth €395" },
  },
  {
    icon: Flag,
    num: "02",
    title: { nl: "Commitment", en: "Commitment" },
    sub: "commitment & consistency",
    body: { nl: "Wie een kleine stap zet, neemt vaker de volgende. Begin met micro-commitment en bouw op.", en: "People who take a small step are more likely to take the next one. Start with a micro-commitment and build up." },
    demo: { nl: "Stap 1 van 3 · 33% voltooid", en: "Step 1 of 3 · 33% complete" },
  },
  {
    icon: Star,
    num: "03",
    title: { nl: "Sociaal bewijs", en: "Social proof" },
    sub: "social proof",
    body: { nl: "Mensen kijken naar wat anderen doen voordat ze beslissen. Toon dat anderen je vertrouwen.", en: "People look at what others do before deciding. Show that others trust you." },
    demo: { nl: "★★★★★ 4,9 · 312 reviews", en: "★★★★★ 4.9 · 312 reviews" },
  },
  {
    icon: Award,
    num: "04",
    title: { nl: "Autoriteit", en: "Authority" },
    sub: "authority",
    body: { nl: "Expertise en autoriteit verhogen vertrouwen. Toon kunde — niet verkooppraat.", en: "Expertise and authority increase trust. Show competence — not sales talk." },
    demo: { nl: "14 jaar ervaring · 200+ trajecten", en: "14 years' experience · 200+ projects" },
  },
  {
    icon: Heart,
    num: "05",
    title: { nl: "Sympathie", en: "Liking" },
    sub: "liking",
    body: { nl: "Mensen kopen liever van mensen die ze sympathiek vinden. Persoonlijkheid en gezicht helpen.", en: "People prefer to buy from people they like. Personality and a real face help." },
    demo: { nl: "Eerlijke kop op Zoom · geen ghosting", en: "An honest face on Zoom · no ghosting" },
  },
  {
    icon: Timer,
    num: "06",
    title: { nl: "Schaarste", en: "Scarcity" },
    sub: "scarcity",
    body: { nl: "Wat schaars is, wordt waardevoller gevonden. Beperkte beschikbaarheid versnelt beslissingen.", en: "What's scarce is perceived as more valuable. Limited availability speeds up decisions." },
    demo: { nl: "Nog 3 plekken open in Q3", en: "Only 3 spots left in Q3" },
  },
];

const steps = [
  {
    num: "01",
    icon: Search,
    title: { nl: "Research & data-analyse", en: "Research & data analysis" },
    short: { nl: "Waar haken bezoekers af?", en: "Where do visitors drop off?" },
    desc: { nl: "Voordat één test draait brengen we volledig in kaart wat er nu gebeurt. Kwantitatieve data uit GA4 én kwalitatieve data uit user-recordings — samen het probleem-statement.", en: "Before a single test runs, we map exactly what's happening today. Quantitative data from GA4 and qualitative data from user recordings — together they form the problem statement." },
    bullets: [
      { nl: "Funnel-drop analyse over alle kanalen.", en: "Funnel drop-off analysis across all channels." },
      { nl: "Heatmaps, scroll-maps en sessie-opnames.", en: "Heatmaps, scroll maps and session recordings." },
      { nl: "Klantinterviews en on-site surveys.", en: "Customer interviews and on-site surveys." },
      { nl: "Concurrentie- en best-practice scan.", en: "Competitor and best-practice scan." },
    ],
    tools: ["GA4", "Hotjar", "Microsoft Clarity", "Maze", "SurveyMonkey", "GSC"],
  },
  {
    num: "02",
    icon: Lightbulb,
    title: { nl: "Hypothesen", en: "Hypotheses" },
    short: { nl: "Geprioriteerd op ICE-score", en: "Prioritised by ICE score" },
    desc: { nl: "Iedere observatie wordt een testbare hypothese. Geprioriteerd op impact, confidence en effort — zo testen we eerst wat de meeste omzet beweegt.", en: "Every observation becomes a testable hypothesis, prioritised on impact, confidence and effort — so we test what moves the most revenue first." },
    bullets: [
      { nl: "Eén hypothese per pijnpunt — concreet en meetbaar.", en: "One hypothesis per pain point — concrete and measurable." },
      { nl: "ICE-score bepaalt volgorde van de roadmap.", en: "ICE score determines the roadmap order." },
      { nl: "Verwachte lift en KPI vooraf vastgelegd.", en: "Expected lift and KPI defined upfront." },
      { nl: "Mapping tegen funnelstap waar het effect telt.", en: "Mapped against the funnel step where it matters." },
    ],
    tools: ["Notion roadmap", "ICE-scoring", "Eigen testlog"],
  },
  {
    num: "03",
    icon: FlaskConical,
    title: { nl: "Test-design", en: "Test design" },
    short: { nl: "Statistisch correct opgezet", en: "Statistically sound setup" },
    desc: { nl: "Een A/B-test met te weinig sample of de verkeerde KPI is verloren geld. We berekenen vooraf benodigd verkeer, looptijd en betrouwbaarheid.", en: "An A/B test with too small a sample or the wrong KPI is wasted money. We calculate the required traffic, duration and confidence level upfront." },
    bullets: [
      { nl: "Sample size berekend per hypothese.", en: "Sample size calculated per hypothesis." },
      { nl: "Primary en guardrail-metrics gedefinieerd.", en: "Primary and guardrail metrics defined." },
      { nl: "Mobile en desktop apart geëvalueerd.", en: "Mobile and desktop evaluated separately." },
      { nl: "QA op events, attributie en data-flow.", en: "QA on events, attribution and data flow." },
    ],
    tools: ["VWO", "Convert", "GA4 experiments", "Statsig"],
  },
  {
    num: "04",
    icon: Wrench,
    title: { nl: "Implementatie & QA", en: "Implementation & QA" },
    short: { nl: "Schoon gebouwd, snel live", en: "Cleanly built, live fast" },
    desc: { nl: "Varianten worden technisch zuiver gebouwd: geen flicker, geen layout-shift, geen vertraging in Core Web Vitals. QA over devices en browsers vóór we live gaan.", en: "Variants are built cleanly: no flicker, no layout shift, no impact on Core Web Vitals. QA across devices and browsers before we go live." },
    bullets: [
      { nl: "Geen flicker · geen CLS-impact.", en: "No flicker · no CLS impact." },
      { nl: "Cross-device en cross-browser QA.", en: "Cross-device and cross-browser QA." },
      { nl: "Tracking-events live geverifieerd.", en: "Tracking events verified live." },
      { nl: "Fallback bij elke storing klaar.", en: "A fallback ready for every failure." },
    ],
    tools: ["GTM", "BrowserStack", "Lighthouse", "Eigen QA-checklist"],
  },
  {
    num: "05",
    icon: LineChart,
    title: { nl: "Statistische analyse", en: "Statistical analysis" },
    short: { nl: "Pas concluderen als het mag", en: "Only conclude when it's valid" },
    desc: { nl: "Geen peeking, geen 'we zien een trend'. We wachten op statistische significantie en kijken naar segment-effecten — niet alleen de gemiddelde uplift.", en: "No peeking, no \"we're seeing a trend\". We wait for statistical significance and look at segment effects — not just the average uplift." },
    bullets: [
      { nl: "Significantie ≥ 95% voor we winners draaien.", en: "Significance ≥ 95% before we roll out winners." },
      { nl: "Segment-analyse op device, bron en nieuw vs terugkerend.", en: "Segment analysis by device, source and new vs. returning." },
      { nl: "Effect op omzet en marge — niet alleen CR.", en: "Effect on revenue and margin — not just CR." },
      { nl: "Heldere learnings, ook bij verloren tests.", en: "Clear learnings, even from lost tests." },
    ],
    tools: ["Bayesiaanse analyse", "GA4 BigQuery", "Looker Studio"],
  },
  {
    num: "06",
    icon: Repeat,
    title: { nl: "Rollout & iteratie", en: "Rollout & iteration" },
    short: { nl: "Winners schalen, doorgaan", en: "Scale winners, keep going" },
    desc: { nl: "Winnaars worden permanent uitgerold en gedocumenteerd in het playbook. De cyclus herhaalt zich — elke maand een nieuwe sprint, elke maand een meetbare beweging.", en: "Winners get rolled out permanently and documented in the playbook. The cycle repeats — a new sprint every month, measurable movement every month." },
    bullets: [
      { nl: "Winning varianten permanent doorgevoerd.", en: "Winning variants implemented permanently." },
      { nl: "Playbook met learnings voor je team.", en: "Playbook with learnings for your team." },
      { nl: "Maandelijkse rapportage op omzet-impact.", en: "Monthly reporting on revenue impact." },
      { nl: "Nieuwe testronde op de volgende hypothese.", en: "A new round of testing on the next hypothesis." },
    ],
    tools: ["Notion playbook", "Looker Studio", "GA4", "Maandelijkse review"],
  },
] as const;

const resultStats = [
  { stat: "+54%", label: { nl: "gemiddelde lift in conversion rate", en: "average conversion rate lift" } },
  { stat: "−42%", label: { nl: "lagere bounce rate op kernpagina's", en: "lower bounce rate on core pages" } },
  { stat: "+€420k", label: { nl: "extra omzet per jaar bij MKB-klant", en: "extra revenue per year for an SME client" } },
];

const cases = [
  { client: { nl: "Cliënt A · B2B SaaS", en: "Client A · B2B SaaS" }, title: { nl: "Demo-aanvragen bijna verdrievoudigd", en: "Demo requests nearly tripled" }, metric1: "+187%", metric1l: { nl: "qualified demos", en: "qualified demos" }, metric2: "+62%", metric2l: { nl: "form completion", en: "form completion" }, metric3: { nl: "5 mnd", en: "5 mo" }, metric3l: { nl: "trajectduur", en: "project duration" } },
  { client: { nl: "Cliënt B · e-commerce", en: "Client B · e-commerce" }, title: { nl: "Checkout-frictie weggehaald, marge omhoog", en: "Checkout friction removed, margin up" }, metric1: "+38%", metric1l: { nl: "checkout-CR", en: "checkout CR" }, metric2: "−27%", metric2l: { nl: "cart abandonment", en: "cart abandonment" }, metric3: { nl: "8 mnd", en: "8 mo" }, metric3l: { nl: "trajectduur", en: "project duration" } },
  { client: { nl: "Cliënt C · D2C", en: "Client C · D2C" }, title: { nl: "Productpagina-redesign met meetbare lift", en: "Product page redesign with measurable lift" }, metric1: "+71%", metric1l: { nl: "add-to-cart", en: "add-to-cart" }, metric2: "+24%", metric2l: { nl: "AOV", en: "AOV" }, metric3: { nl: "6 mnd", en: "6 mo" }, metric3l: { nl: "trajectduur", en: "project duration" } },
];

const faq = [
  {
    q: { nl: "Hoe lang tot we resultaat zien?", en: "How long until we see results?" },
    a: { nl: "Eerste testresultaten zie je binnen 1–2 weken. De eerste trends worden zichtbaar na 4–6 weken. Een solide, structurele conversie-verbetering meestal na 8–12 weken. CRO is sneller dan SEO of GEO (die 12–16 weken nemen), maar langzamer dan SEA — die kan morgen leveren.", en: "You'll see first test results within 1–2 weeks. Initial trends appear after 4–6 weeks. A solid, structural conversion improvement usually lands after 8–12 weeks. CRO is faster than SEO or GEO (which take 12–16 weeks), but slower than SEA — which can deliver tomorrow." },
  },
  {
    q: { nl: "Wat als onze conversie al goed is?", en: "What if our conversion rate is already good?" },
    a: { nl: "Niemand heeft 'perfecte' conversie. Zelfs bedrijven die nu op 5% zitten kunnen vaak nog naar 7–8%. Tijdens de audit zien we direct waar de ruimte zit — en of het zinvol is om te starten.", en: "No one has a 'perfect' conversion rate. Even businesses at 5% can often reach 7–8%. During the audit we immediately see where the headroom is — and whether it's worth starting." },
  },
  {
    q: { nl: "Moeten we veel veranderingen doen?", en: "Do we need to make lots of changes?" },
    a: { nl: "Nee. We testen kleine dingen eerst — copy, kleur, volgorde van elementen. Grote redesigns zijn duur en riskant. Kleine, gerichte tests zijn goedkoop, snel en leveren cumulatief vaak meer op.", en: "No. We test small things first — copy, colour, the order of elements. Large redesigns are expensive and risky. Small, targeted tests are cheap, fast, and often deliver more cumulatively." },
  },
  {
    q: { nl: "Wat als een test mislukt?", en: "What if a test fails?" },
    a: { nl: "Dan weten we wat niet werkt. We stoppen ermee en testen het volgende. Niet elke test wint — dat hoort erbij. Als 40% van je tests positief uitvalt, stijgt je conversie-rate over de tijd flink.", en: "Then we know what doesn't work. We stop it and test the next thing. Not every test wins — that's part of the process. If 40% of your tests come out positive, your conversion rate climbs substantially over time." },
  },
  {
    q: { nl: "Kan CRO samen met SEO, SEA en GEO?", en: "Can CRO run alongside SEO, SEA and GEO?" },
    a: { nl: "Ja — sterker nog, ze versterken elkaar. SEA brengt je verkeer, CRO maakt dat verkeer rendabel. SEO levert organische bezoekers, CRO zorgt dat ze converteren. GEO brengt zichtbaarheid in AI, CRO oogst de klanten die binnenkomen.", en: "Yes — in fact they reinforce each other. SEA brings you traffic, CRO makes that traffic profitable. SEO delivers organic visitors, CRO makes sure they convert. GEO brings visibility in AI, CRO harvests the customers that come in." },
  },
  {
    q: { nl: "Hoeveel kost CRO?", en: "How much does CRO cost?" },
    a: { nl: "Afhankelijk van scope tussen €1.500 en €4.000 per maand. De ROI is gemiddeld 200–400%, dus een traject verdient zichzelf meestal binnen 1–2 maanden terug. Tijdens het adviesgesprek maken we een voorstel op maat.", en: "Depending on scope, between €1,500 and €4,000 per month. Average ROI is 200–400%, so a project usually pays for itself within 1–2 months. During the consult we put together a tailored proposal." },
  },
  {
    q: { nl: "Hebben we analytics en tracking nodig?", en: "Do we need analytics and tracking in place?" },
    a: { nl: "Ja. Zonder Google Analytics en correcte conversie-tracking kunnen we niets optimaliseren. Heb je dat nog niet (goed) staan? Dan richten we het eerst in — zodat elke test op betrouwbare data steunt.", en: "Yes. Without Google Analytics and correct conversion tracking we can't optimise anything. If it's not properly set up yet, we'll set it up first — so every test rests on reliable data." },
  },
  {
    q: { nl: "Kun je conversie voor álles optimaliseren?", en: "Can you optimise conversion for anything?" },
    a: { nl: "Nee. Als je product of dienst niet goed is, gaat CRO dat niet repareren. CRO werkt op goede aanbiedingen — we maken een sterk aanbod overtuigender, geen zwak aanbod beter. Twijfel je? Start eerst daar.", en: "No. If your product or service isn't good, CRO won't fix that. CRO works on good offers — we make a strong offer more persuasive, not a weak offer better. Not sure yet? Start there first." },
  },
];

function CroPage() {
  const lang = useLang();
  return (
    <>
      <PageHero
        eyebrow={pick(lang, { nl: "CRO · conversie-optimalisatie", en: "CRO · conversion rate optimisation" })}
        title={lang === "en"
          ? <>More customers from the traffic you <span className="text-molten italic">already have.</span></>
          : <>Meer klanten uit het verkeer dat je <span className="text-molten italic">al hebt.</span></>}
        description={pick(lang, {
          nl: "Je hebt duizend bezoekers per maand — maar hoeveel hiervan worden klant? Het probleem zit niet bij verkeer, maar bij conversie. Elke 1% verbetering verdubbelt bijna het aantal klantaanvragen. CRO gaat niet over meer verkeer, maar over slimmer overtuigen van het verkeer dat je al betaalt.",
          en: "You get a thousand visitors a month — but how many of them become customers? The problem isn't traffic, it's conversion. Every 1% improvement nearly doubles the number of inbound leads. CRO isn't about more traffic; it's about persuading the traffic you already pay for more effectively.",
        })}
      >
        <CTAButton to="/contact" variant="molten">
          <T nl="Plan gratis CRO-adviesgesprek" en="Book a free CRO consult" /> <ArrowRight className="size-4" />
        </CTAButton>
      </PageHero>

      <ForWhoSection />

      {/* Stat strip */}
      <section className="py-12 px-6 -mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { stat: "+1%", label: { nl: "conversie = vaak 6-cijferige extra omzet", en: "conversion = often 6-figure extra revenue" } },
            { stat: "70%", label: { nl: "van B2B-formulieren laat onnodig veel liggen", en: "of B2B forms leave unnecessary revenue on the table" } },
            { stat: "3,4×", label: { nl: "meer leads zonder extra verkeer mogelijk", en: "more leads possible without extra traffic" } },
          ].map((s) => (
            <div key={s.label.nl} className="bg-white rounded-2xl p-6 ring-1 ring-black/5 flex items-center gap-4">
              <div className="font-display text-4xl font-semibold text-molten">{s.stat}</div>
              <div className="text-sm text-body-text">{pick(lang, s.label)}</div>
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
  const lang = useLang();
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl p-8 md:p-10 ring-1 ring-black/5">
          <div className="text-molten font-bold text-xs uppercase tracking-widest mb-3"><T nl="Voor wie" en="Who it's for" /></div>
          <h2 className="font-display text-3xl text-twilight font-semibold mb-6"><T nl="Geschikt als…" en="A good fit if…" /></h2>
          <ul className="space-y-3">
            {forWho.map((w) => (
              <li key={w.nl} className="flex gap-3 items-start text-twilight">
                <Check className="size-5 text-molten shrink-0 mt-0.5" /> <span>{pick(lang, w)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-molten font-bold text-xs uppercase tracking-widest mb-3"><T nl="Wat je krijgt" en="What you get" /></div>
          <h2 className="font-display text-3xl text-twilight font-semibold mb-6"><T nl="Concreet en meetbaar." en="Concrete and measurable." /></h2>
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b.nl} className="flex gap-3 items-start text-twilight">
                <span className="shrink-0 mt-1 size-5 rounded-full bg-molten/10 text-molten flex items-center justify-center">
                  <Check className="size-3" />
                </span>
                <span>{pick(lang, b)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FunnelSection() {
  const lang = useLang();
  const max = Math.max(...funnelBefore.map((f) => f.n));
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3"><T nl="de funnel-multiplier" en="the funnel multiplier" /></div>
        <SectionHeader
          title={lang === "en"
            ? <>A small gap in each step <span className="text-molten italic">= a disaster</span> at the exit.</>
            : <>Klein gat in elke stap <span className="text-molten italic">= catastrofe</span> aan de uitgang.</>}
          description={pick(lang, {
            nl: "In een funnel van 5 stappen verlies je vermenigvuldigd. Een lift van slechts +20% per stap is geen +20% conversie aan het einde — het is een verdrievoudiging van je klanten uit hetzelfde verkeer.",
            en: "In a 5-step funnel, losses multiply. A lift of just +20% per step isn't +20% conversion at the end — it's nearly triple the customers from the same traffic.",
          })}
        />

        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          <FunnelCard label={pick(lang, { nl: "Voor CRO", en: "Before CRO" })} tone="cold" data={funnelBefore} max={max} totalLabel={pick(lang, { nl: "2,0% totale CR", en: "2.0% total CR" })} total="200" customersLabel={pick(lang, { nl: "klanten", en: "customers" })} />
          <FunnelCard label={pick(lang, { nl: "Na CRO", en: "After CRO" })} tone="molten" data={funnelAfter} max={max} totalLabel={pick(lang, { nl: "5,0% totale CR", en: "5.0% total CR" })} total="498" customersLabel={pick(lang, { nl: "klanten", en: "customers" })} />
        </div>

        <div className="mt-10 grid sm:grid-cols-4 gap-4">
          {[
            { k: { nl: "Bezoekers", en: "Visitors" }, v: "10.000" },
            { k: { nl: "Baseline CR", en: "Baseline CR" }, v: "2,0%" },
            { k: { nl: "Per stap", en: "Per step" }, v: "+20%" },
            { k: { nl: "Klanten na CRO", en: "Customers after CRO" }, v: "498" },
          ].map((x) => (
            <div key={x.k.nl} className="bg-silver rounded-xl p-5 ring-1 ring-black/5">
              <div className="text-[10px] font-bold uppercase tracking-widest text-twilight/60">{pick(lang, x.k)}</div>
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
  customersLabel,
}: {
  label: string;
  tone: "cold" | "molten";
  data: { label: { nl: string; en: string }; n: number; drop: { nl: string; en: string } }[];
  max: number;
  totalLabel: string;
  total: string;
  customersLabel: string;
}) {
  const lang = useLang();
  const isMolten = tone === "molten";
  return (
    <div className={cn("rounded-2xl p-8 ring-1", isMolten ? "bg-twilight text-white ring-twilight" : "bg-silver text-twilight ring-black/5")}>
      <div className="flex items-center justify-between mb-6">
        <span className={cn("text-[10px] font-bold uppercase tracking-widest", isMolten ? "text-molten" : "text-twilight/60")}>{label}</span>
        <span className={cn("font-display text-2xl font-semibold", isMolten ? "text-white" : "text-twilight")}>{total} {customersLabel}</span>
      </div>
      <div className="space-y-3">
        {data.map((s, i) => {
          const pct = (s.n / max) * 100;
          return (
            <div key={i}>
              <div className="flex items-baseline justify-between text-xs mb-1">
                <span className={cn("font-medium", isMolten ? "text-white/90" : "text-twilight")}>{i + 1}. {pick(lang, s.label)}</span>
                <span className={cn(isMolten ? "text-white/60" : "text-body-text")}>{pick(lang, s.drop)}</span>
              </div>
              <div className={cn("relative h-8 rounded-md overflow-hidden", isMolten ? "bg-white/10" : "bg-white")}>
                <div
                  className={cn("h-full rounded-md flex items-center justify-end px-3 text-xs font-bold", isMolten ? "bg-molten text-white" : "bg-twilight text-white")}
                  style={{ width: `${Math.max(pct, 8)}%` }}
                >
                  {s.n.toLocaleString(lang === "en" ? "en-US" : "nl-NL")}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={cn("mt-6 pt-4 border-t flex items-center justify-between", isMolten ? "border-white/10" : "border-black/10")}>
        <span className={cn("text-xs uppercase tracking-widest", isMolten ? "text-white/60" : "text-twilight/60")}><T nl="Totale conversie" en="Total conversion" /></span>
        <span className={cn("font-display text-xl font-semibold", isMolten ? "text-molten" : "text-molten")}>{totalLabel}</span>
      </div>
    </div>
  );
}

function PrinciplesSection() {
  const lang = useLang();
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3"><T nl="brein bij conversie" en="the psychology of conversion" /></div>
        <SectionHeader
          title={lang === "en"
            ? <>Six psychological principles — <span className="text-molten italic">no tricks, just what works</span>.</>
            : <>Zes psychologische principes — <span className="text-molten italic">geen truc, wel werkzaam</span>.</>}
          description={pick(lang, {
            nl: "Robert Cialdini onderzocht zes universele principes die menselijk koopgedrag verklaren. Wij vertalen ze naar concrete elementen op landingspagina's, formulieren en checkouts.",
            en: "Robert Cialdini researched six universal principles that explain human buying behaviour. We translate them into concrete elements on landing pages, forms and checkouts.",
          })}
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
                <h3 className="font-display text-xl font-semibold text-twilight">{pick(lang, p.title)}</h3>
                <div className="text-xs text-molten italic mb-3">{p.sub}</div>
                <p className="text-sm text-body-text leading-relaxed">{pick(lang, p.body)}</p>
                <div className="mt-5 pt-4 border-t border-black/5 text-xs font-mono text-twilight bg-silver rounded-lg px-3 py-2 inline-block">
                  {pick(lang, p.demo)}
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
  const lang = useLang();
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Icon = step.icon;
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3"><T nl="onze werkwijze" en="our approach" /></div>
        <SectionHeader
          title={lang === "en"
            ? <>Six steps. From first hypothesis to <span className="text-molten italic">structural lift</span>.</>
            : <>Zes stappen. Van eerste hypothese tot <span className="text-molten italic">structurele lift</span>.</>}
          description={pick(lang, {
            nl: "Geen losse 'we hebben de knop oranje gemaakt'. Iedere test is een hypothese, een experiment, een statistische uitkomst — gedocumenteerd zoals een wetenschapper het zou doen.",
            en: "No random \"we made the button orange\". Every test is a hypothesis, an experiment, a statistical outcome — documented the way a scientist would.",
          })}
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
                      <StepIcon className="size-4 opacity-70" /> {pick(lang, s.title)}
                    </div>
                    <div className={cn("text-sm mt-1", i === active ? "text-white/70" : "text-body-text")}>{pick(lang, s.short)}</div>
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
              <div className="text-xs font-bold uppercase tracking-widest text-molten"><T nl={`Stap ${step.num} van 06`} en={`Step ${step.num} of 06`} /></div>
            </div>
            <h3 className="font-display text-3xl font-semibold text-twilight mb-4">{pick(lang, step.title)}</h3>
            <p className="text-body-text leading-relaxed mb-6">{pick(lang, step.desc)}</p>
            <ul className="space-y-3 mb-8">
              {step.bullets.map((b) => (
                <li key={b.nl} className="flex gap-3 items-start">
                  <span className="shrink-0 mt-1 size-5 rounded-full bg-molten/10 text-molten flex items-center justify-center">
                    <Check className="size-3" />
                  </span>
                  <span className="text-sm text-twilight">{pick(lang, b)}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-black/10">
              <div className="text-[10px] font-bold uppercase tracking-widest text-twilight/60 mb-3"><T nl="Tools die we in deze stap inzetten" en="Tools we use in this step" /></div>
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
  const lang = useLang();
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3"><T nl="voor en na" en="before and after" /></div>
        <SectionHeader
          title={lang === "en"
            ? <>Same product, same offer — <span className="text-molten italic">presented differently</span>.</>
            : <>Zelfde product, zelfde aanbod — <span className="text-molten italic">anders gebracht</span>.</>}
          description={pick(lang, {
            nl: "Een CRO-redesign verandert niets aan wat je verkoopt. Wel aan hoe overtuigend, helder en frictieloos het overkomt. Resultaten die we regelmatig zien:",
            en: "A CRO redesign doesn't change what you sell. It changes how persuasive, clear and frictionless it comes across. Results we see regularly:",
          })}
        />
        <div className="grid sm:grid-cols-3 gap-5 mt-12">
          {resultStats.map((s) => (
            <div key={s.label.nl} className="bg-twilight text-white rounded-2xl p-8">
              <div className="font-display text-5xl font-semibold text-molten">{s.stat}</div>
              <div className="text-sm text-white/80 mt-3">{pick(lang, s.label)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  const lang = useLang();
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3"><T nl="cases" en="cases" /></div>
        <SectionHeader
          title={lang === "en"
            ? <>Real CRO cases <span className="text-molten italic">from our portfolio</span>.</>
            : <>Echte CRO-cases <span className="text-molten italic">uit ons portfolio</span>.</>}
          description={pick(lang, {
            nl: "Een selectie van klantcases waar CRO meetbare omzet bewoog. Cijfers, periode en aanpak per traject — definitieve invulling volgt.",
            en: "A selection of client cases where CRO moved measurable revenue. Figures, timeline and approach per project — final details to follow.",
          })}
        />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {cases.map((c) => (
            <article key={c.title.nl} className="p-8 bg-silver rounded-2xl ring-1 ring-black/5 hover:ring-molten/30 hover:-translate-y-1 transition-all">
              <div className="text-[10px] font-bold uppercase tracking-widest text-molten mb-2">{pick(lang, c.client)}</div>
              <h3 className="font-display text-xl font-semibold text-twilight mb-6 min-h-[3.5rem]">{pick(lang, c.title)}</h3>
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-black/5">
                {[
                  { v: c.metric1, l: c.metric1l },
                  { v: c.metric2, l: c.metric2l },
                  { v: c.metric3, l: c.metric3l },
                ].map((m, idx) => (
                  <div key={idx}>
                    <div className="font-display text-xl font-semibold text-molten">{typeof m.v === "string" ? m.v : pick(lang, m.v)}</div>
                    <div className="text-[10px] uppercase tracking-wide text-body-text mt-1 leading-tight">{pick(lang, m.l)}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton to="/cases" variant="outline-navy">
            <T nl="Bekijk alle cases" en="View all cases" /> <ArrowRight className="size-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const lang = useLang();
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-molten font-display font-bold text-xs tracking-[0.2em] uppercase mb-3"><T nl="faq" en="faq" /></div>
        <SectionHeader
          title={lang === "en"
            ? <>Frequently asked questions <span className="text-molten italic">about CRO</span>.</>
            : <>Veelgestelde vragen <span className="text-molten italic">over CRO</span>.</>}
          description={pick(lang, {
            nl: "De vragen die we het vaakst krijgen — kort, eerlijk en zonder marketingpraat.",
            en: "The questions we get asked most often — short, honest and without the marketing talk.",
          })}
        />
        <div className="mt-10 space-y-3">
          {faq.map((f) => (
            <details key={f.q.nl} className="group p-6 bg-white rounded-xl ring-1 ring-black/5">
              <summary className="cursor-pointer font-display font-semibold text-twilight flex items-center justify-between gap-4">
                <span>{pick(lang, f.q)}</span>
                <span className="text-molten transition-transform group-open:rotate-45 text-2xl leading-none shrink-0">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-body-text">{pick(lang, f.a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
