import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/ServiceLayout";

export const Route = createFileRoute("/_site/diensten/seo")({
  head: () => ({
    meta: [
      { title: "SEO diensten voor MKB — laat je SEO doen | Expose Your Brand" },
      { name: "description", content: "SEO laten doen door specialisten. Onze SEO diensten voor ondernemers en MKB combineren klassieke SEO met AI-zichtbaarheid. Meetbaar resultaat in je eigen dashboard." },
      { property: "og:title", content: "SEO diensten | Expose Your Brand" },
      { property: "og:description", content: "SEO voor MKB die wil scoren in Google én in AI." },
      { property: "og:url", content: "/diensten/seo" },
    ],
    links: [{ rel: "canonical", href: "/diensten/seo" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "SEO diensten",
        provider: { "@type": "Organization", name: "Expose Your Brand" },
      }),
    }],
  }),
  component: SeoPage,
});

function SeoPage() {
  return (
    <ServiceLayout
      eyebrow="SEO Diensten"
      title={<>SEO die <span className="text-molten italic">omzet</span> oplevert, niet alleen verkeer.</>}
      intro="Klassieke zoekmachine-optimalisatie voor ondernemers en MKB die scoren waar hun klanten écht zoeken. Geen rankings om de rankings — we sturen op leads en omzet."
      bullets={[
        "Keyword-strategie op zoekintentie en omzetpotentie.",
        "Technische SEO-audit en concrete fix-lijst.",
        "Content die direct citeerbaar is voor AI Overviews.",
        "Linkbuilding met focus op autoriteit, niet volume.",
        "Maandelijkse rapportage in je eigen dashboard.",
      ]}
      forWho={[
        "MKB met €500K+ omzet en hoge klantwaarde.",
        "Bedrijven waarvan klanten online research doen voor ze beslissen.",
        "Ondernemers die genoeg hebben van rapportages zonder resultaat.",
      ]}
      approach={[
        { title: "Nulmeting", desc: "Audit van techniek, content en autoriteit." },
        { title: "Strategie", desc: "Keyword- en topical map gericht op omzet." },
        { title: "Uitvoering", desc: "Tech-fixes, content en linkbuilding." },
        { title: "Monitoring", desc: "Maandelijkse rapportage met dashboard." },
      ]}
      faq={[
        { q: "Hoe lang duurt het voor ik resultaat zie?", a: "Eerste verbeteringen vaak binnen 4-8 weken na technische fixes. Substantiële groei in posities meestal binnen 3-6 maanden." },
        { q: "Wat is het verschil met andere SEO bureaus?", a: "Wij rapporteren live op een eigen dashboard, communiceren via Slack en koppelen SEO altijd aan AI-zichtbaarheid (GEO)." },
      ]}
    />
  );
}