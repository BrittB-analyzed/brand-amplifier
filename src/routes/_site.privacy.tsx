import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/_site/privacy")({
  head: () => ({
    meta: [
      { title: "Privacyverklaring | Expose Your Brand" },
      { name: "description", content: "Hoe Expose Your Brand omgaat met jouw persoonsgegevens, conform de AVG (GDPR)." },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Privacyverklaring" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-2xl text-twilight font-semibold mb-3">{title}</h2>
      <div className="space-y-3 text-body-text leading-relaxed">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title={<>Privacy<span className="text-molten italic">verklaring</span>.</>}
        description="We gaan zorgvuldig om met jouw persoonsgegevens. Hieronder lees je wat we verzamelen, waarom en hoelang."
      />
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 ring-1 ring-black/5">
          <Section title="1. Verwerkingsverantwoordelijke">
            <p>Expose Your Brand, gevestigd aan Visstraat 55K, 5211 DM Den Bosch, is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>KvK: 71474129 / 61944351</li>
              <li>BTW: NL001764651B24 / NL001846301B46</li>
              <li>E-mail: <a href="mailto:groei@expose-your-brand.com" className="text-molten hover:underline">groei@expose-your-brand.com</a></li>
            </ul>
          </Section>

          <Section title="2. Welke gegevens verwerken wij?">
            <ul className="list-disc pl-5 space-y-1">
              <li>Voor- en achternaam</li>
              <li>Bedrijfsnaam en functietitel</li>
              <li>E-mailadres en telefoonnummer</li>
              <li>Bezoekgegevens van onze website (IP-adres, browsertype, bezochte pagina's)</li>
              <li>Communicatie die je met ons voert (e-mail, contactformulier, afspraak)</li>
            </ul>
          </Section>

          <Section title="3. Doeleinden en grondslagen">
            <ul className="list-disc pl-5 space-y-1">
              <li>Het uitvoeren van onze overeenkomst en dienstverlening (uitvoering overeenkomst).</li>
              <li>Het beantwoorden van je vraag of adviesaanvraag (gerechtvaardigd belang).</li>
              <li>Het versturen van facturen en het voldoen aan wettelijke administratieplichten (wettelijke verplichting).</li>
              <li>Het verbeteren van onze website en dienstverlening (gerechtvaardigd belang).</li>
              <li>Het versturen van een nieuwsbrief, alleen na expliciete toestemming (toestemming).</li>
            </ul>
          </Section>

          <Section title="4. Bewaartermijnen">
            <p>Wij bewaren je gegevens niet langer dan noodzakelijk. Klantgegevens en correspondentie bewaren wij tot 2 jaar na het einde van de overeenkomst. Fiscale gegevens (facturen) bewaren wij 7 jaar conform de wettelijke bewaarplicht.</p>
          </Section>

          <Section title="5. Delen met derden">
            <p>We delen je gegevens alleen met derden als dat nodig is voor de uitvoering van onze overeenkomst of om te voldoen aan een wettelijke verplichting. Met verwerkers (zoals hostingpartijen, e-mail-, analytics- en facturatiediensten) sluiten wij een verwerkersovereenkomst. Wij verkopen je gegevens nooit.</p>
          </Section>

          <Section title="6. Doorgifte buiten de EER">
            <p>Sommige van onze tools (bijvoorbeeld analytics of AI-platformen) verwerken gegevens buiten de Europese Economische Ruimte. In dat geval baseren wij ons op passende waarborgen, zoals Standard Contractual Clauses van de Europese Commissie.</p>
          </Section>

          <Section title="7. Beveiliging">
            <p>We nemen passende technische en organisatorische maatregelen om je gegevens te beschermen tegen verlies of onrechtmatige verwerking, waaronder versleutelde verbindingen (TLS), toegangscontrole en minimale dataverzameling.</p>
          </Section>

          <Section title="8. Jouw rechten">
            <p>Je hebt het recht op inzage, rectificatie, verwijdering, beperking, dataportabiliteit en bezwaar tegen de verwerking van je persoonsgegevens. Stuur je verzoek naar <a href="mailto:groei@expose-your-brand.com" className="text-molten hover:underline">groei@expose-your-brand.com</a>. Je hebt daarnaast het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.</p>
          </Section>

          <Section title="9. Wijzigingen">
            <p>We kunnen deze privacyverklaring aanpassen. De meest recente versie vind je altijd op deze pagina.</p>
          </Section>
        </div>
      </section>
    </>
  );
}