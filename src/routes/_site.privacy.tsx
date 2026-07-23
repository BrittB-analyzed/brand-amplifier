import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useLang, pick, T } from "@/lib/i18n";

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

function Section({ title, children }: { title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-2xl text-twilight font-semibold mb-3">{title}</h2>
      <div className="space-y-3 text-body-text leading-relaxed">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  const lang = useLang();
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title={<T nl={<>Privacy<span className="text-molten italic">verklaring</span>.</>} en={<>Privacy <span className="text-molten italic">statement</span>.</>} />}
        description={pick(lang, { nl: "We gaan zorgvuldig om met jouw persoonsgegevens. Hieronder lees je wat we verzamelen, waarom en hoelang.", en: "We handle your personal data with care. Below is what we collect, why, and for how long." })}
      />
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 ring-1 ring-black/5">
          <Section title={pick(lang, { nl: "1. Verwerkingsverantwoordelijke", en: "1. Data controller" })}>
            <p><T nl="Expose Your Brand, gevestigd aan Visstraat 55K, 5211 DM Den Bosch, is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring." en="Expose Your Brand, based at Visstraat 55K, 5211 DM Den Bosch (Netherlands), is responsible for processing personal data as described in this privacy statement." /></p>
            <ul className="list-disc pl-5 space-y-1">
              <li><T nl="KvK: 71474129 / 61944351" en="Chamber of Commerce: 71474129 / 61944351" /></li>
              <li><T nl="BTW: NL001764651B24 / NL001846301B46" en="VAT: NL001764651B24 / NL001846301B46" /></li>
              <li><T nl="E-mail" en="Email" />: <a href="mailto:groei@expose-your-brand.com" className="text-molten hover:underline">groei@expose-your-brand.com</a></li>
            </ul>
          </Section>

          <Section title={pick(lang, { nl: "2. Welke gegevens verwerken wij?", en: "2. Which data do we process?" })}>
            <ul className="list-disc pl-5 space-y-1">
              <li><T nl="Voor- en achternaam" en="First and last name" /></li>
              <li><T nl="Bedrijfsnaam en functietitel" en="Company name and job title" /></li>
              <li><T nl="E-mailadres en telefoonnummer" en="Email address and phone number" /></li>
              <li><T nl="Bezoekgegevens van onze website (IP-adres, browsertype, bezochte pagina's)" en="Website visit data (IP address, browser type, pages viewed)" /></li>
              <li><T nl="Communicatie die je met ons voert (e-mail, contactformulier, afspraak)" en="Communication you have with us (email, contact form, appointments)" /></li>
            </ul>
          </Section>

          <Section title={pick(lang, { nl: "3. Doeleinden en grondslagen", en: "3. Purposes and legal bases" })}>
            <ul className="list-disc pl-5 space-y-1">
              <li><T nl="Het uitvoeren van onze overeenkomst en dienstverlening (uitvoering overeenkomst)." en="Performing our agreement and services (contract performance)." /></li>
              <li><T nl="Het beantwoorden van je vraag of adviesaanvraag (gerechtvaardigd belang)." en="Answering your question or advisory request (legitimate interest)." /></li>
              <li><T nl="Het versturen van facturen en het voldoen aan wettelijke administratieplichten (wettelijke verplichting)." en="Sending invoices and meeting statutory record-keeping duties (legal obligation)." /></li>
              <li><T nl="Het verbeteren van onze website en dienstverlening (gerechtvaardigd belang)." en="Improving our website and services (legitimate interest)." /></li>
              <li><T nl="Het versturen van een nieuwsbrief, alleen na expliciete toestemming (toestemming)." en="Sending a newsletter, only with explicit consent (consent)." /></li>
            </ul>
          </Section>

          <Section title={pick(lang, { nl: "4. Bewaartermijnen", en: "4. Retention periods" })}>
            <p><T nl="Wij bewaren je gegevens niet langer dan noodzakelijk. Klantgegevens en correspondentie bewaren wij tot 2 jaar na het einde van de overeenkomst. Fiscale gegevens (facturen) bewaren wij 7 jaar conform de wettelijke bewaarplicht." en="We do not keep your data longer than necessary. We retain client data and correspondence for up to 2 years after the end of the agreement. Tax data (invoices) is retained for 7 years in line with the statutory retention obligation." /></p>
          </Section>

          <Section title={pick(lang, { nl: "5. Delen met derden", en: "5. Sharing with third parties" })}>
            <p><T nl="We delen je gegevens alleen met derden als dat nodig is voor de uitvoering van onze overeenkomst of om te voldoen aan een wettelijke verplichting. Met verwerkers (zoals hostingpartijen, e-mail-, analytics- en facturatiediensten) sluiten wij een verwerkersovereenkomst. Wij verkopen je gegevens nooit." en="We share your data with third parties only when required to perform our agreement or comply with a legal obligation. We conclude a data processing agreement with processors (such as hosting, email, analytics and invoicing providers). We never sell your data." /></p>
          </Section>

          <Section title={pick(lang, { nl: "6. Doorgifte buiten de EER", en: "6. Transfers outside the EEA" })}>
            <p><T nl="Sommige van onze tools (bijvoorbeeld analytics of AI-platformen) verwerken gegevens buiten de Europese Economische Ruimte. In dat geval baseren wij ons op passende waarborgen, zoals Standard Contractual Clauses van de Europese Commissie." en="Some of our tools (for example analytics or AI platforms) process data outside the European Economic Area. In such cases we rely on appropriate safeguards, such as the European Commission's Standard Contractual Clauses." /></p>
          </Section>

          <Section title={pick(lang, { nl: "7. Beveiliging", en: "7. Security" })}>
            <p><T nl="We nemen passende technische en organisatorische maatregelen om je gegevens te beschermen tegen verlies of onrechtmatige verwerking, waaronder versleutelde verbindingen (TLS), toegangscontrole en minimale dataverzameling." en="We take appropriate technical and organizational measures to protect your data against loss or unlawful processing, including encrypted connections (TLS), access control and data minimization." /></p>
          </Section>

          <Section title={pick(lang, { nl: "8. Jouw rechten", en: "8. Your rights" })}>
            <p><T nl="Je hebt het recht op inzage, rectificatie, verwijdering, beperking, dataportabiliteit en bezwaar tegen de verwerking van je persoonsgegevens. Stuur je verzoek naar" en="You have the right to access, rectify, erase, restrict, port and object to the processing of your personal data. Send your request to" /> <a href="mailto:groei@expose-your-brand.com" className="text-molten hover:underline">groei@expose-your-brand.com</a>. <T nl="Je hebt daarnaast het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens." en="You also have the right to file a complaint with the Dutch Data Protection Authority." /></p>
          </Section>

          <Section title={pick(lang, { nl: "9. Wijzigingen", en: "9. Changes" })}>
            <p><T nl="We kunnen deze privacyverklaring aanpassen. De meest recente versie vind je altijd op deze pagina." en="We may update this privacy statement. You can always find the latest version on this page." /></p>
          </Section>
        </div>
      </section>
    </>
  );
}