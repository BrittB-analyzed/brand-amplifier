import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, HelpCircle, BookOpen } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTAButton } from "@/components/site/CTAButton";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/_site/kennis/")({
  head: () => ({
    meta: [
      { title: "Wat is GEO? Kenniscentrum | Expose Your Brand" },
      { name: "description", content: "Alles over Generative Engine Optimization (GEO), SEO vs GEO, llms.txt, schema markup en hoe AI-zoekmachines bronnen kiezen." },
      { property: "og:title", content: "GEO Kenniscentrum" },
      { property: "og:description", content: "Pillar page met alles over GEO en AI search." },
      { property: "og:url", content: "/kennis" },
    ],
    links: [{ rel: "canonical", href: "/kennis" }],
  }),
  component: KennisIndex,
});

function KennisIndex() {
  return (
    <>
      <PageHero
        eyebrow="Kenniscentrum"
        title={<>Alles over <span className="text-molten italic">GEO</span> & AI-zoekmachines</>}
        description="Generative Engine Optimization in heldere taal. Hoe AI bronnen kiest, hoe je geciteerd wordt en hoe je dit meet."
      />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Definitie"
            title="Wat is GEO?"
            description={<><strong className="text-twilight">GEO (Generative Engine Optimization)</strong> is het optimaliseren van je merk, content en autoriteit zodat AI-zoekmachines zoals ChatGPT, Gemini, Perplexity en Google AI Overviews jouw bedrijf citeren als antwoord op vragen van gebruikers. Waar SEO mikt op een <em>klik</em>, mikt GEO op een <em>citatie</em>.</>}
          />
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Verdieping" title="Kies je pad" align="center" className="mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { to: "/kennis/blog", icon: BookOpen, title: "Blog", desc: "Praktijkartikelen over GEO, SEO en AI search." },
              { to: "/kennis/faq", icon: HelpCircle, title: "FAQ", desc: "Antwoorden op de meest gestelde GEO-vragen." },
              { to: "/cases", icon: FileText, title: "Cases", desc: "Hoe klanten zichtbaar werden in AI-zoekmachines." },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="group p-8 bg-silver rounded-2xl ring-1 ring-black/5 hover:ring-molten/30 hover:-translate-y-1 transition-all">
                <div className="size-12 rounded-xl bg-molten/10 text-molten grid place-items-center mb-5">
                  <c.icon className="size-5" />
                </div>
                <h3 className="font-display font-semibold text-xl text-twilight mb-2">{c.title}</h3>
                <p className="text-sm">{c.desc}</p>
                <span className="mt-5 text-xs font-bold uppercase tracking-wider text-molten inline-flex items-center gap-1">Bekijk <ArrowRight className="size-3" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="SEO vs GEO" title="Het verschil in één blik." />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-2xl ring-1 ring-black/5">
              <div className="text-btn-blue font-bold text-xs uppercase tracking-widest mb-3">SEO</div>
              <h3 className="font-display text-2xl text-twilight font-semibold mb-3">Optimaliseren voor de klik</h3>
              <ul className="text-sm space-y-2">
                <li>· Doel: hogere ranking in Google</li>
                <li>· KPI: organisch verkeer</li>
                <li>· Output: gebruiker klikt door</li>
              </ul>
            </div>
            <div className="p-8 bg-twilight text-white rounded-2xl">
              <div className="text-molten font-bold text-xs uppercase tracking-widest mb-3">GEO</div>
              <h3 className="font-display text-2xl font-semibold mb-3">Optimaliseren voor de citatie</h3>
              <ul className="text-sm space-y-2 text-white/80">
                <li>· Doel: aanbevolen worden in AI-antwoorden</li>
                <li>· KPI: Share of LLM Voice</li>
                <li>· Output: jouw merk is het antwoord</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <CTAButton to="/contact" variant="molten">Plan een GEO-strategiegesprek <ArrowRight className="size-4" /></CTAButton>
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}