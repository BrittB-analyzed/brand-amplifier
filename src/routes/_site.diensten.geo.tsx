import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/ServiceLayout";

export const Route = createFileRoute("/_site/diensten/geo")({
  head: () => ({
    meta: [
      { title: "GEO optimalisatie — Generative Engine Optimization | Expose Your Brand" },
      { name: "description", content: "GEO marketing & generative engine optimization: word aanbevolen door ChatGPT, Gemini en Perplexity. GEO specialist inhuren? Gratis GEO-audit." },
      { property: "og:title", content: "GEO optimalisatie" },
      { property: "og:description", content: "Van SEO naar GEO: word het antwoord dat AI geeft." },
      { property: "og:url", content: "/diensten/geo" },
    ],
    links: [{ rel: "canonical", href: "/diensten/geo" }],
  }),
  component: GeoPage,
});

function GeoPage() {
  return (
    <ServiceLayout
      eyebrow="GEO Optimalisatie"
      title={<>Word <span className="text-molten italic">aanbevolen</span> door AI.</>}
      intro="Generative Engine Optimization is de discipline die ervoor zorgt dat AI-zoekmachines jouw merk citeren als antwoord. Niet meer wachten op een klik — je bent het antwoord zelf."
      bullets={[
        "Visibility Score nulmeting voor ChatGPT, Gemini en Perplexity.",
        "Topical Map gebaseerd op echte prompts van je doelgroep.",
        "Technische GEO-stack: llms.txt, triple-stack schema, passage optimization.",
        "Entity stacking & brand mentions op autoritaire bronnen.",
        "Maandelijkse Share of LLM Voice rapportage.",
      ]}
      forWho={[
        "Bedrijven waarvan klanten AI gebruiken in hun research-fase.",
        "Sectoren met hoge LTV: klinieken, advocatuur, vermogensbeheer, IT.",
        "Ondernemers die niet willen wachten tot de concurrent er staat.",
      ]}
      approach={[
        { title: "Audit", desc: "Hoe noemt AI je nu (of niet)?" },
        { title: "Topical Map", desc: "Prompts en bronnen analyseren." },
        { title: "GEO Stack", desc: "Technisch fundament voor AI-crawlers." },
        { title: "Autoriteit", desc: "Mentions op de juiste plekken." },
      ]}
      ctaLabel="Vraag gratis GEO-audit aan"
      faq={[
        { q: "Wat is het verschil tussen SEO en GEO?", a: "SEO optimaliseert voor klikken in klassieke zoekresultaten. GEO optimaliseert voor citaties in AI-antwoorden. We doen beide, want klanten gebruiken beide." },
        { q: "Werkt GEO ook voor mijn niche?", a: "Als jouw klanten AI gebruiken om informatie te verzamelen — en dat doen ze in vrijwel elke sector — dan werkt GEO. Wij meten dit vooraf zodat je geen geld in een wens stopt." },
      ]}
    />
  );
}