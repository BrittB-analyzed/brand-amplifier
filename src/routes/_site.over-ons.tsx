import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { Sparkle } from "@/components/site/Sparkle";

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
  { name: "Specialist 1", role: "Founder & GEO Lead" },
  { name: "Specialist 2", role: "SEO & Content Strategist" },
  { name: "Specialist 3", role: "Tech & Schema Architect" },
  { name: "Specialist 4", role: "Conversion Optimization" },
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
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Team" title="Je vaste aanspreekpunten." className="mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="p-6 bg-white rounded-2xl ring-1 ring-black/5">
                <div className="aspect-square bg-gradient-to-br from-peach-soft to-lavender rounded-xl mb-4" />
                <h4 className="font-display font-semibold text-twilight">{m.name}</h4>
                <p className="text-xs uppercase tracking-widest text-molten font-bold mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}