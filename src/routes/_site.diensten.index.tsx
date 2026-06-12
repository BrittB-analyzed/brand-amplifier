import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Sparkle } from "@/components/site/Sparkle";
import { CTAButton } from "@/components/site/CTAButton";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";

export const Route = createFileRoute("/_site/diensten/")({
  head: () => ({
    meta: [
      { title: "Diensten — SEO, GEO, SEA & CRO | Expose Your Brand" },
      { name: "description", content: "Vier specialisaties, één geïntegreerde funnel: SEO, GEO, SEA en CRO. Voor MKB-bedrijven die nú zichtbaar willen zijn in AI." },
      { property: "og:title", content: "Onze diensten | Expose Your Brand" },
      { property: "og:description", content: "SEO · GEO · SEA · CRO — meetbaar, transparant, maatwerk." },
      { property: "og:url", content: "/diensten" },
    ],
    links: [{ rel: "canonical", href: "/diensten" }],
  }),
  component: DienstenIndex,
});

const services = [
  { to: "/diensten/geo", label: "GEO", color: "molten" as const, desc: "Word geciteerd in ChatGPT, Gemini, Perplexity en AI Overviews." },
  { to: "/diensten/seo", label: "SEO", color: "blue" as const, desc: "Klassieke zoekmachine dominantie op de termen die omzet opleveren." },
  { to: "/diensten/sea", label: "SEA + AI Ads", color: "molten" as const, desc: "Google Ads, Shopping en opkomende AI-advertenties." },
  { to: "/diensten/cro", label: "CRO", color: "blue" as const, desc: "Frictieloze funnels die elke bezoeker een stap dichter bij conversie zetten." },
];

function DienstenIndex() {
  return (
    <>
      <PageHero
        eyebrow="Onze diensten"
        title={<>Vier specialisaties, <span className="text-molten italic">één funnel.</span></>}
        description="Geen losse trucs maar een geïntegreerde aanpak: van eerste AI-citatie tot betalende klant. Stel je pakket samen — maandelijks aanpasbaar."
      >
        <CTAButton to="/contact" variant="molten">Plan gratis adviesgesprek <ArrowRight className="size-4" /></CTAButton>
      </PageHero>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link key={s.to} to={s.to} className="group p-8 bg-white ring-1 ring-black/5 rounded-2xl hover:ring-molten/30 hover:-translate-y-1 transition-all">
              <div className={`size-12 rounded-xl flex items-center justify-center mb-5 ${s.color === "molten" ? "bg-molten/10" : "bg-btn-blue/10"}`}>
                <Sparkle color={s.color} />
              </div>
              <h2 className="font-display font-semibold text-2xl text-twilight mb-3">{s.label}</h2>
              <p className="leading-relaxed mb-6">{s.desc}</p>
              <span className={`text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 ${s.color === "molten" ? "text-molten" : "text-btn-blue"}`}>
                Bekijk dienst <ArrowRight className="size-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <PreFooterCTA />
    </>
  );
}