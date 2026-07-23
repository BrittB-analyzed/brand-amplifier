import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { useLang, pick, T } from "@/lib/i18n";

const faqNL = [
  { q: "Wat is GEO (Generative Engine Optimization)?", a: "GEO is het optimaliseren van content, autoriteit en techniek zodat AI-zoekmachines zoals ChatGPT, Gemini en Perplexity jouw merk citeren als antwoord op gebruikersvragen." },
  { q: "Hoe meet je AI-zichtbaarheid?", a: "Met de Share of LLM Voice metric: het percentage relevante prompts waarin jouw merk wordt genoemd door grote AI-modellen, gemeten in vaste tijdsintervallen." },
  { q: "Hoe lang duurt het voordat ik resultaat zie?", a: "Eerste signalen vaak binnen 30 dagen na technische implementatie. Volledige GEO-effecten meestal binnen 90 dagen — vandaar onze garantie." },
  { q: "Werkt GEO ook als ik nu al goed scoor in Google?", a: "Ja, en het is juist dan extra belangrijk: AI-modellen pakken hun bronnen anders. Een topranking in Google is geen garantie voor een citatie in ChatGPT." },
  { q: "Wat is het verschil met een gewoon SEO-bureau?", a: "Wij rapporteren live op een eigen dashboard, communiceren via Slack en koppelen elke SEO-actie aan AI-zichtbaarheid." },
  { q: "Wat kost een traject?", a: "Maatwerk en maandelijks aanpasbaar. Tijdens het gratis adviesgesprek krijg je een concreet voorstel met prijs en verwacht resultaat." },
];

const faqEN = [
  { q: "What is GEO (Generative Engine Optimization)?", a: "GEO is optimizing content, authority and technology so AI search engines like ChatGPT, Gemini and Perplexity cite your brand when answering user questions." },
  { q: "How do you measure AI visibility?", a: "Using the Share of LLM Voice metric: the percentage of relevant prompts in which your brand is mentioned by major AI models, measured at fixed intervals." },
  { q: "How long before I see results?", a: "First signals often within 30 days of technical implementation. Full GEO effects usually within 90 days — hence our guarantee." },
  { q: "Does GEO also work if I already rank well in Google?", a: "Yes, and it's especially important then: AI models pick their sources differently. A top Google ranking is no guarantee of a citation in ChatGPT." },
  { q: "What sets you apart from a regular SEO agency?", a: "We report live on our own dashboard, communicate via Slack and tie every SEO action to AI visibility." },
  { q: "What does a project cost?", a: "Tailored and adjustable monthly. During the free advisory call you get a concrete proposal with price and expected outcome." },
];

export const Route = createFileRoute("/_site/kennis/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Veelgestelde vragen over GEO en SEO | Expose Your Brand" },
      { name: "description", content: "Antwoorden op de meest gestelde vragen over GEO, AI-zichtbaarheid, SEO en samenwerking met Expose Your Brand." },
      { property: "og:title", content: "FAQ" },
      { property: "og:url", content: "/kennis/faq" },
    ],
    links: [{ rel: "canonical", href: "/kennis/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqNL.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const lang = useLang();
  const faq = lang === "en" ? faqEN : faqNL;
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<T nl={<>Antwoorden, <span className="text-molten italic">direct.</span></>} en={<>Answers, <span className="text-molten italic">straight up.</span></>} />}
        description={pick(lang, { nl: "De vragen die we het vaakst krijgen — zonder marketingpraat.", en: "The questions we get most often — without marketing fluff." })}
      />
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-3">
          {faq.map((f) => (
            <details key={f.q} className="group p-6 bg-white rounded-xl ring-1 ring-black/5">
              <summary className="cursor-pointer font-display font-semibold text-twilight flex items-center justify-between">
                {f.q}
                <span className="text-molten transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-4 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <PreFooterCTA />
    </>
  );
}