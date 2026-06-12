import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/ServiceLayout";

export const Route = createFileRoute("/_site/diensten/cro")({
  head: () => ({
    meta: [
      { title: "CRO — Conversie optimalisatie bureau & specialist | Expose Your Brand" },
      { name: "description", content: "Conversie optimalisatie (CRO): conversieratio optimaliseren en conversie verhogen op je website. Meer verkeer is niets waard zonder conversie." },
      { property: "og:title", content: "Conversie optimalisatie" },
      { property: "og:description", content: "Frictieloze funnels die verkeer omzetten in klanten." },
      { property: "og:url", content: "/diensten/cro" },
    ],
    links: [{ rel: "canonical", href: "/diensten/cro" }],
  }),
  component: CroPage,
});

function CroPage() {
  return (
    <ServiceLayout
      eyebrow="Conversie Optimalisatie"
      title={<>Meer verkeer is <span className="text-molten italic">niets</span> waard zonder conversie.</>}
      intro="We bouwen frictieloze funnels en formulieren die je bezoekers omzetten in betalende klanten. Datagedreven, met hypotheses en A/B tests."
      bullets={[
        "Volledige funnel-audit met heatmaps en sessie-opnames.",
        "Hypothesen prioriteren op impact en effort.",
        "A/B tests met statistisch zekere uitkomsten.",
        "Formulier-optimalisatie en frictie-reductie.",
        "Conversie-tracking en attributie ingericht.",
      ]}
      forWho={[
        "Sites met 5K+ bezoekers per maand.",
        "Bedrijven met een duidelijk conversie-doel.",
        "Ondernemers die meer willen halen uit huidig verkeer.",
      ]}
      approach={[
        { title: "Onderzoek", desc: "Heatmaps, sessies, analytics, klantinterviews." },
        { title: "Hypothesen", desc: "Prioriteren op ICE-score." },
        { title: "Test", desc: "A/B testen met goede statistiek." },
        { title: "Implementeren", desc: "Winners doorvoeren, cyclus herhalen." },
      ]}
    />
  );
}