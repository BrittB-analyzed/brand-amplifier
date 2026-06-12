import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/ServiceLayout";

export const Route = createFileRoute("/_site/diensten/sea")({
  head: () => ({
    meta: [
      { title: "SEA optimalisatie — Google Ads, Shopping & AI Ads | Expose Your Brand" },
      { name: "description", content: "SEA optimalisatie voor MKB. Google Ads, Google Shopping en opkomende AI-advertenties — claim nu de juiste termen voor je markt." },
      { property: "og:title", content: "SEA optimalisatie" },
      { property: "og:description", content: "Adverteren in Google én in AI." },
      { property: "og:url", content: "/diensten/sea" },
    ],
    links: [{ rel: "canonical", href: "/diensten/sea" }],
  }),
  component: SeaPage,
});

function SeaPage() {
  return (
    <ServiceLayout
      eyebrow="SEA + AI Ads"
      title={<>Adverteren in Google én <span className="text-molten italic">straks ook in AI.</span></>}
      intro="Google Ads en Shopping efficiënt inrichten — en nu al positioneren voor het tijdperk van AI-advertenties. De juiste termen claim je vandaag, niet morgen."
      bullets={[
        "Google Search & Performance Max campagnes.",
        "Google Shopping voor e-commerce.",
        "Voorbereiding op advertenties in AI-platforms.",
        "Conversie-tracking gekoppeld aan echte omzet.",
        "Heldere CPA en ROAS rapportage.",
      ]}
      forWho={[
        "E-commerce met marge voor betaald verkeer.",
        "B2B met meetbare lead-waarde.",
        "Bedrijven die snel willen schalen naast SEO/GEO.",
      ]}
      approach={[
        { title: "Account audit", desc: "Wat werkt, wat lekt budget?" },
        { title: "Structuur", desc: "Campagnes opbouwen op intentie." },
        { title: "Tracking", desc: "GA4, conversies, server-side waar nodig." },
        { title: "Optimaliseren", desc: "Wekelijkse iteratie op ROAS." },
      ]}
    />
  );
}
