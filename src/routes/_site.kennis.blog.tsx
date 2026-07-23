import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { useLang, pick, T } from "@/lib/i18n";

export const Route = createFileRoute("/_site/kennis/blog")({
  head: () => ({
    meta: [
      { title: "Blog — GEO, SEO en AI search | Expose Your Brand" },
      { name: "description", content: "Praktijkartikelen over Generative Engine Optimization, AI-zichtbaarheid, SEO en CRO voor MKB." },
      { property: "og:title", content: "Blog | Expose Your Brand" },
      { property: "og:url", content: "/kennis/blog" },
    ],
    links: [{ rel: "canonical", href: "/kennis/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const lang = useLang();
  const posts = pick(lang, {
    nl: [
      { cat: "GEO", title: "Wat is Generative Engine Optimization?", read: "8 min", excerpt: "GEO uitgelegd: wat het is, waarom het belangrijker wordt dan SEO en hoe je nu start." },
      { cat: "Strategie", title: "SEO vs GEO: het verschil en waarom je beide nodig hebt", read: "6 min", excerpt: "De zoekwereld splitst in tweeën. Hoe je in beide werelden wint." },
      { cat: "Tactisch", title: "llms.txt: het nieuwe robots.txt voor AI-crawlers", read: "5 min", excerpt: "De simpele tekstfile die bepaalt hoe AI-modellen jouw site begrijpen." },
      { cat: "Meten", title: "Share of LLM Voice: hoe meet je AI-zichtbaarheid?", read: "7 min", excerpt: "Een complete gids om jouw aanwezigheid in AI-antwoorden te meten." },
      { cat: "Content", title: "Schrijven voor AI: passage-optimalisatie in de praktijk", read: "9 min", excerpt: "Hoe je content opbouwt zodat ChatGPT er hele passages uit citeert." },
      { cat: "Techniek", title: "Triple-stack schema: Article + FAQPage + ItemList", read: "10 min", excerpt: "De drie schema-types die je altijd combineert voor maximale AI-leesbaarheid." },
    ],
    en: [
      { cat: "GEO", title: "What is Generative Engine Optimization?", read: "8 min", excerpt: "GEO explained: what it is, why it's becoming more important than SEO, and how to start now." },
      { cat: "Strategy", title: "SEO vs GEO: the difference and why you need both", read: "6 min", excerpt: "The search world is splitting in two. How to win in both." },
      { cat: "Tactical", title: "llms.txt: the new robots.txt for AI crawlers", read: "5 min", excerpt: "The simple text file that decides how AI models understand your site." },
      { cat: "Measuring", title: "Share of LLM Voice: how do you measure AI visibility?", read: "7 min", excerpt: "A complete guide to measuring your presence in AI answers." },
      { cat: "Content", title: "Writing for AI: passage optimization in practice", read: "9 min", excerpt: "How to structure content so ChatGPT quotes entire passages from it." },
      { cat: "Tech", title: "Triple-stack schema: Article + FAQPage + ItemList", read: "10 min", excerpt: "The three schema types you always combine for maximum AI readability." },
    ],
  });
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<T nl={<>Scherpe inzichten over <span className="text-molten italic">AI search.</span></>} en={<>Sharp insights on <span className="text-molten italic">AI search.</span></>} />}
        description={pick(lang, { nl: "Praktijk, geen theorie. Wat we leren van honderden GEO-trajecten, vertaald naar artikelen.", en: "Practice, not theory. What we learn from hundreds of GEO projects, translated into articles." })}
      />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link key={p.title} to="/kennis/blog" className="group p-8 bg-white rounded-2xl ring-1 ring-black/5 hover:ring-molten/30 hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between mb-4 text-[10px] font-bold uppercase tracking-widest">
                <span className="text-molten">{p.cat}</span>
                <span className="flex items-center gap-1 text-body-text"><Clock className="size-3" /> {p.read}</span>
              </div>
              <h2 className="font-display text-xl font-semibold text-twilight leading-snug mb-3 group-hover:text-molten transition-colors">{p.title}</h2>
              <p className="text-sm">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <PreFooterCTA />
    </>
  );
}