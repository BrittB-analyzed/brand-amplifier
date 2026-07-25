import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, TrendingUp, Users, Wallet, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { Sparkle } from "@/components/site/Sparkle";
import { T, useLang, pick } from "@/lib/i18n";

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
  { 
    icon: Wallet, 
    title: { nl: "Vaste maandprijs", en: "Fixed monthly price" }, 
    text: { 
      nl: "Geen verrassingen achteraf. Je weet vooraf precies wat je krijgt — en wat het kost.", 
      en: "No surprises afterwards. You know exactly what you get — and what it costs." 
    } 
  },
  { 
    icon: Clock, 
    title: { nl: "Geen marketing-jargon", en: "No marketing jargon" }, 
    text: { 
      nl: "Je krijgt een vast contactpersoon die uitlegt wat er gebeurt en waarom het werkt.", 
      en: "You get a dedicated contact person who explains what is happening and why it works." 
    } 
  },
  { 
    icon: TrendingUp, 
    title: { nl: "Resultaat binnen 90 dagen", en: "Results within 90 days" }, 
    text: { 
      nl: "We starten met de quick wins die direct meer aanvragen opleveren — niet pas over een jaar.", 
      en: "We start with quick wins that generate more leads immediately — not a year from now." 
    } 
  },
  { 
    icon: Users, 
    title: { nl: "Voor jouw type klant", en: "For your type of customer" }, 
    text: { 
      nl: "We optimaliseren niet voor zoekvolume, maar voor de zoekopdrachten van klanten die ook echt kopen.", 
      en: "We don't optimize for search volume, but for searches from customers who actually buy." 
    } 
  },
];

const includes = [
  { nl: "Volledige SEO-audit van je huidige website", en: "Full SEO audit of your current website" },
  { nl: "Zoekwoordenonderzoek toegespitst op jouw regio en doelgroep", en: "Keyword research tailored to your region and target audience" },
  { nl: "Technische optimalisaties (snelheid, mobiel, structuur)", en: "Technical optimizations (speed, mobile, structure)" },
  { nl: "Maandelijkse content die je vindbaarheid versterkt", en: "Monthly content that strengthens your visibility" },
  { nl: "Linkbuilding bij relevante Nederlandse bronnen", en: "Link building at relevant sources" },
  { nl: "Helder maandrapport: posities, verkeer, aanvragen", en: "Clear monthly report: positions, traffic, leads" },
];

function SeoMkbPage() {
  const lang = useLang();
  return (
    <>
      <PageHero
        eyebrow={pick(lang, { nl: "SEO voor MKB", en: "SEO for SMBs" })}
        title={lang === 'en' 
          ? <>More customers via Google — <span className="text-molten italic">without</span> your own marketing department.</>
          : <>Meer klanten via Google — <span className="text-molten italic">zonder</span> eigen marketingafdeling.</>
        }
        description={pick(lang, {
          nl: "SEO is geen luxe voor grote bedrijven. Met een vaste prijs, korte lijnen en een helder dashboard maken we Google ook voor het MKB een betrouwbaar verkoopkanaal.",
          en: "SEO is not a luxury for large corporations. With a fixed price, direct communication, and a clear dashboard, we make Google a reliable sales channel for SMBs too."
        })}
      >
        <CTAButton to="/contact" variant="molten" size="lg">
          <T nl="Plan gratis adviesgesprek" en="Schedule free consultation" /> <ArrowRight className="size-4" />
        </CTAButton>
      </PageHero>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            eyebrow={pick(lang, { nl: "Waarom MKB", en: "Why SMB" })} 
            title={lang === 'en'
              ? <>SEO that <span className="text-molten italic">fits</span> your business.</>
              : <>SEO die <span className="text-molten italic">past</span> bij jouw bedrijf.</>
            } 
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {benefits.map((b) => (
              <div key={pick(lang, b.title)} className="bg-white rounded-2xl p-6 ring-1 ring-black/5">
                <div className="size-10 rounded-lg bg-molten/10 grid place-items-center mb-4">
                  <b.icon className="size-5 text-molten" />
                </div>
                <h3 className="font-display text-xl text-twilight font-semibold mb-2">{pick(lang, b.title)}</h3>
                <p className="text-sm text-body-text leading-relaxed">{pick(lang, b.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Sparkle size="sm" />
            <span className="text-molten font-bold text-xs uppercase tracking-widest">
              <T nl="Inbegrepen" en="Included" />
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-twilight font-semibold mb-8">
            <T nl="Dit zit er in je MKB-pakket." en="This is what's in your SMB package." />
          </h2>
          <ul className="space-y-3">
            {includes.map((i) => (
              <li key={pick(lang, i)} className="flex items-start gap-3 text-body-text">
                <Check className="size-5 text-molten shrink-0 mt-0.5" />
                <span>{pick(lang, i)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PreFooterCTA />
    </>
  );
}
