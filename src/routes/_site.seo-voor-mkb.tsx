import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, TrendingUp, Users, Wallet, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { Sparkle } from "@/components/site/Sparkle";

export const Route = createFileRoute("/_site/seo-voor-mkb")({
  head: () => ({
    meta: [
      { title: "SEO voor MKB — Meer klanten via Google zonder marketingafdeling | Expose Your Brand" },
      { name: "description", content: "SEO speciaal voor het MKB. Vaste prijs, korte lijnen, en een dashboard waarop je iedere week ziet wat je investering oplevert. Geen jargon — wel klanten." },
      { property: "og:title", content: "SEO voor MKB | Expose Your Brand" },
      { property: "og:description", content: "Meer klanten via Google, zonder eigen marketingafdeling. Vaste prijs, helder rapport, snelle resultaten." },
      { property: "og:url", content: "/seo-voor-mkb" },
    ],
    links: [{ rel: "canonical", href: "/seo-voor-mkb" }],
  }),
  component: SeoMkbPage,
});

const benefits = [
  { icon: Wallet, title: "Vaste maandprijs", text: "Geen verrassingen achteraf. Je weet vooraf precies wat je krijgt — en wat het kost." },
  { icon: Clock, title: "Geen marketing-jargon", text: "Je krijgt een vast contactpersoon die uitlegt wat er gebeurt en waarom het werkt." },
  { icon: TrendingUp, title: "Resultaat binnen 90 dagen", text: "We starten met de quick wins die direct meer aanvragen opleveren — niet pas over een jaar." },
  { icon: Users, title: "Voor jouw type klant", text: "We optimaliseren niet voor zoekvolume, maar voor de zoekopdrachten van klanten die ook echt kopen." },
];

const includes = [
  "Volledige SEO-audit van je huidige website",
  "Zoekwoordenonderzoek toegespitst op jouw regio en doelgroep",
  "Technische optimalisaties (snelheid, mobiel, structuur)",
  "Maandelijkse content die je vindbaarheid versterkt",
  "Linkbuilding bij relevante Nederlandse bronnen",
  "Helder maandrapport: posities, verkeer, aanvragen",
];

function SeoMkbPage() {
  return (
    <>
      <PageHero
        eyebrow="SEO voor MKB"
        title={<>Meer klanten via Google — <span className="text-molten italic">zonder</span> eigen marketingafdeling.</>}
        description="SEO is geen luxe voor grote bedrijven. Met een vaste prijs, korte lijnen en een helder dashboard maken we Google ook voor het MKB een betrouwbaar verkoopkanaal."
      >
        <CTAButton to="/contact" variant="molten" size="lg">
          Plan gratis adviesgesprek <ArrowRight className="size-4" />
        </CTAButton>
      </PageHero>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Waarom MKB" title={<>SEO die <span className="text-molten italic">past</span> bij jouw bedrijf.</>} />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 ring-1 ring-black/5">
                <div className="size-10 rounded-lg bg-molten/10 grid place-items-center mb-4">
                  <b.icon className="size-5 text-molten" />
                </div>
                <h3 className="font-display text-xl text-twilight font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-body-text leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Sparkle size="sm" />
            <span className="text-molten font-bold text-xs uppercase tracking-widest">Inbegrepen</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-twilight font-semibold mb-8">Dit zit er in je MKB-pakket.</h2>
          <ul className="space-y-3">
            {includes.map((i) => (
              <li key={i} className="flex items-start gap-3 text-body-text">
                <Check className="size-5 text-molten shrink-0 mt-0.5" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}