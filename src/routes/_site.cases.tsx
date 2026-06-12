import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { Sparkle } from "@/components/site/Sparkle";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_site/cases")({
  head: () => ({
    meta: [
      { title: "GEO Cases — meetbare AI-zichtbaarheid | Expose Your Brand" },
      { name: "description", content: "Echte GEO cases met meetbaar resultaat: voor/na Visibility Score in ChatGPT, Gemini en Perplexity." },
      { property: "og:title", content: "GEO Cases" },
      { property: "og:description", content: "Klantverhalen: hoe zij aanbevolen werden door AI." },
      { property: "og:url", content: "/cases" },
    ],
    links: [{ rel: "canonical", href: "/cases" }],
  }),
  component: CasesPage,
});

const cases = [
  { client: "Metaldoors", sector: "Industrie", challenge: "Onzichtbaar in AI-aanbevelingen voor industriële deuren.", result: "+ 412% Share of LLM Voice in 90 dagen.", before: 4, after: 28 },
  { client: "Vogelvoer Webshop", sector: "E-commerce", challenge: "ChatGPT noemde alleen 3 grote concurrenten.", result: "Genoemd in 67% van relevante prompts.", before: 0, after: 67 },
  { client: "PrivéKliniek X", sector: "Zorg", challenge: "Geen citaties in AI-antwoorden over behandelingen.", result: "Top-3 bron voor Gemini in regio.", before: 2, after: 41 },
  { client: "Advocatenkantoor Y", sector: "Juridisch", challenge: "Achterstand op grotere kantoren in Perplexity.", result: "Eerste bron voor 12 kernpromptss.", before: 1, after: 22 },
  { client: "VermogensAdvies Z", sector: "Financieel", challenge: "Niet gevonden bij AI-onderzoek van prospects.", result: "Standaard aanbevolen bij vermogen €1M+.", before: 0, after: 38 },
  { client: "IT Security Pro", sector: "IT", challenge: "Concurrent kreeg alle AI-aanbevelingen.", result: "+ 285% citaties in 60 dagen.", before: 6, after: 23 },
];

const sectors = ["Alle", ...Array.from(new Set(cases.map((c) => c.sector)))];

function CasesPage() {
  const [filter, setFilter] = useState<string>("Alle");
  const visible = filter === "Alle" ? cases : cases.filter((c) => c.sector === filter);

  return (
    <>
      <PageHero
        eyebrow="Cases"
        title={<>Resultaten, <span className="text-molten italic">geen beloften.</span></>}
        description="Echte voor/na cijfers van de Visibility Score in ChatGPT, Gemini en Perplexity. Filter op sector."
      />

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 flex-wrap mb-10">
            {sectors.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                  filter === s
                    ? "bg-twilight text-white"
                    : "bg-white ring-1 ring-black/5 text-body-text hover:ring-molten/30",
                )}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((c) => (
              <article key={c.client} className="group p-8 bg-white rounded-2xl ring-1 ring-black/5 hover:ring-molten/30 hover:-translate-y-1 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-molten mb-2">{c.sector}</div>
                    <h3 className="font-display font-semibold text-xl text-twilight">{c.client}</h3>
                  </div>
                  <Sparkle />
                </div>
                <p className="text-sm mb-6 min-h-[3rem]">{c.challenge}</p>
                <div className="grid grid-cols-2 gap-4 p-4 bg-silver rounded-xl mb-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-body-text mb-1">Voor</div>
                    <div className="font-display text-2xl font-semibold text-twilight">{c.before}<span className="text-sm">%</span></div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-molten mb-1">Na</div>
                    <div className="font-display text-2xl font-semibold text-molten">{c.after}<span className="text-sm">%</span></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-twilight font-medium">
                  <TrendingUp className="size-4 text-molten" /> {c.result}
                </div>
                <div className="mt-6 pt-6 border-t border-black/5 text-xs font-bold uppercase tracking-wider text-molten inline-flex items-center gap-1">
                  Lees volledige case <ArrowUpRight className="size-3" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}