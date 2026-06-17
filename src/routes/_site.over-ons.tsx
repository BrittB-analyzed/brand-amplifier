import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { Sparkle } from "@/components/site/Sparkle";
import berryPortrait from "@/assets/berry-portrait.jpg.asset.json";
import founderPortrait from "@/assets/founder-portrait.jpg.asset.json";

export const Route = createFileRoute("/_site/over-ons")({
  head: () => ({
    meta: [
      { title: "Over Expose Your Brand — AI-first SEO/GEO bureau Nederland" },
      { name: "description", content: "Expose Your Brand is een Nederlands AI-first SEO en GEO bureau met 30+ jaar ervaring. Ons team, onze missie en onze waarden." },
      { property: "og:title", content: "Over ons | Expose Your Brand" },
      { property: "og:url", content: "/over-ons" },
    ],
    links: [{ rel: "canonical", href: "/over-ons" }],
  }),
  component: OverOnsPage,
});

const team = [
  {
    name: "Berry",
    role: "Founder & GEO Lead",
    bio: "30+ jaar ervaring in zoekmachine-marketing. Vertaalt complexe AI-search naar concrete groei voor het MKB.",
    photo: berryPortrait.url,
  },
  {
    name: "Britt",
    role: "Strategy & Conversie",
    bio: "Brengt strategie, conversie en klantrelatie samen. Zorgt dat elke citatie in AI ook daadwerkelijk omzet wordt.",
    photo: founderPortrait.url,
  },
];

function OverOnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Over ons"
        title={<>30+ jaar <span className="text-molten italic">voorsprong</span> in een nieuw tijdperk.</>}
        description="AI-search is nieuw. Wij niet. We bundelen drie decennia aan zoekmachine-expertise met een obsessie voor wat AI vandaag mogelijk maakt."
      />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Onze missie" title="Het Nederlandse MKB zichtbaar maken in AI." description="We geloven dat ambitieuze ondernemers niet hoeven te wachten op grote consultancy's. AI-zichtbaarheid moet meetbaar, betaalbaar en eerlijk zijn." />
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Waarden" title="Waar we voor staan." className="mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Eerlijkheid boven verkoop", d: "Liever een 'nee' dan een traject dat niet past." },
              { t: "Cijfers boven praatjes", d: "Live dashboard. Geen interpretatie nodig." },
              { t: "Lange termijn relaties", d: "98% klantretentie. We bouwen, we draaien niet door." },
            ].map((v) => (
              <div key={v.t} className="p-8 bg-silver rounded-2xl ring-1 ring-black/5">
                <Sparkle className="mb-4" />
                <h3 className="font-display font-semibold text-xl text-twilight mb-2">{v.t}</h3>
                <p className="text-sm">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Team" title="Je vaste aanspreekpunten." className="mb-12" />
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((m) => (
              <div key={m.name} className="p-6 bg-white rounded-2xl ring-1 ring-black/5">
                <div className="aspect-[4/5] rounded-xl mb-5 overflow-hidden bg-silver">
                  <img src={m.photo} alt={`${m.name} — ${m.role}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h4 className="font-display font-semibold text-twilight text-xl">{m.name}</h4>
                <p className="text-xs uppercase tracking-widest text-molten font-bold mt-1 mb-3">{m.role}</p>
                <p className="text-sm leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}