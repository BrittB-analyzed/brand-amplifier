import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, HelpCircle, BookOpen } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTAButton } from "@/components/site/CTAButton";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { SectionHeader } from "@/components/site/SectionHeader";
import { T, useLang, pick } from "@/lib/i18n";

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
  const lang = useLang();
  const cards = pick(lang, {
    nl: [
      { to: "/kennis/blog" as const, icon: BookOpen, title: "Blog", desc: "Praktijkartikelen over GEO, SEO en AI search." },
      { to: "/kennis/faq" as const, icon: HelpCircle, title: "FAQ", desc: "Antwoorden op de meest gestelde GEO-vragen." },
      { to: "/cases" as const, icon: FileText, title: "Cases", desc: "Hoe klanten zichtbaar werden in AI-zoekmachines." },
    ],
    en: [
      { to: "/kennis/blog" as const, icon: BookOpen, title: "Blog", desc: "Practical articles on GEO, SEO and AI search." },
      { to: "/kennis/faq" as const, icon: HelpCircle, title: "FAQ", desc: "Answers to the most common GEO questions." },
      { to: "/cases" as const, icon: FileText, title: "Cases", desc: "How clients became visible in AI search engines." },
    ],
  });
  return (
    <>
      <PageHero
        eyebrow={pick(lang, { nl: "Kenniscentrum", en: "Knowledge hub" })}
        title={<T nl={<>Alles over <span className="text-molten italic">GEO</span> & AI-zoekmachines</>} en={<>Everything about <span className="text-molten italic">GEO</span> & AI search engines</>} />}
        description={pick(lang, { nl: "Generative Engine Optimization in heldere taal. Hoe AI bronnen kiest, hoe je geciteerd wordt en hoe je dit meet.", en: "Generative Engine Optimization in plain language. How AI picks sources, how you get cited, and how to measure it." })}
      />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow={pick(lang, { nl: "Definitie", en: "Definition" })}
            title={pick(lang, { nl: "Wat is GEO?", en: "What is GEO?" })}
            description={<T
              nl={<><strong className="text-twilight">GEO (Generative Engine Optimization)</strong> is het optimaliseren van je merk, content en autoriteit zodat AI-zoekmachines zoals ChatGPT, Gemini, Perplexity en Google AI Overviews jouw bedrijf citeren als antwoord op vragen van gebruikers. Waar SEO mikt op een <em>klik</em>, mikt GEO op een <em>citatie</em>.</>}
              en={<><strong className="text-twilight">GEO (Generative Engine Optimization)</strong> is optimizing your brand, content and authority so AI search engines like ChatGPT, Gemini, Perplexity and Google AI Overviews cite your business when answering user questions. Where SEO aims for a <em>click</em>, GEO aims for a <em>citation</em>.</>}
            />}
          />
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow={pick(lang, { nl: "Verdieping", en: "Go deeper" })} title={pick(lang, { nl: "Kies je pad", en: "Choose your path" })} align="center" className="mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((c) => (
              <Link key={c.to} to={c.to} className="group p-8 bg-silver rounded-2xl ring-1 ring-black/5 hover:ring-molten/30 hover:-translate-y-1 transition-all">
                <div className="size-12 rounded-xl bg-molten/10 text-molten grid place-items-center mb-5">
                  <c.icon className="size-5" />
                </div>
                <h3 className="font-display font-semibold text-xl text-twilight mb-2">{c.title}</h3>
                <p className="text-sm">{c.desc}</p>
                <span className="mt-5 text-xs font-bold uppercase tracking-wider text-molten inline-flex items-center gap-1">{pick(lang, { nl: "Bekijk", en: "View" })} <ArrowRight className="size-3" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="SEO vs GEO" title={pick(lang, { nl: "Het verschil in één blik.", en: "The difference at a glance." })} />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-2xl ring-1 ring-black/5">
              <div className="text-btn-blue font-bold text-xs uppercase tracking-widest mb-3">SEO</div>
              <h3 className="font-display text-2xl text-twilight font-semibold mb-3">{pick(lang, { nl: "Optimaliseren voor de klik", en: "Optimizing for the click" })}</h3>
              <ul className="text-sm space-y-2">
                <li>· <T nl="Doel: hogere ranking in Google" en="Goal: higher ranking in Google" /></li>
                <li>· <T nl="KPI: organisch verkeer" en="KPI: organic traffic" /></li>
                <li>· <T nl="Output: gebruiker klikt door" en="Output: user clicks through" /></li>
              </ul>
            </div>
            <div className="p-8 bg-twilight text-white rounded-2xl">
              <div className="text-molten font-bold text-xs uppercase tracking-widest mb-3">GEO</div>
              <h3 className="font-display text-2xl font-semibold mb-3">{pick(lang, { nl: "Optimaliseren voor de citatie", en: "Optimizing for the citation" })}</h3>
              <ul className="text-sm space-y-2 text-white/80">
                <li>· <T nl="Doel: aanbevolen worden in AI-antwoorden" en="Goal: get recommended in AI answers" /></li>
                <li>· <T nl="KPI: Share of LLM Voice" en="KPI: Share of LLM Voice" /></li>
                <li>· <T nl="Output: jouw merk is het antwoord" en="Output: your brand is the answer" /></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <CTAButton to="/contact" variant="molten">{pick(lang, { nl: "Plan een GEO-strategiegesprek", en: "Book a GEO strategy call" })} <ArrowRight className="size-4" /></CTAButton>
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}