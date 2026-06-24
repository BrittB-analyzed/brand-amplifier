import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/_site/voorwaarden")({
  head: () => ({
    meta: [
      { title: "Algemene voorwaarden | Expose Your Brand" },
      { name: "description", content: "De algemene voorwaarden van Expose Your Brand voor SEO, GEO, SEA en CRO dienstverlening." },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Algemene voorwaarden" },
      { property: "og:url", content: "/voorwaarden" },
    ],
    links: [{ rel: "canonical", href: "/voorwaarden" }],
  }),
  component: VoorwaardenPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-2xl text-twilight font-semibold mb-3">{title}</h2>
      <div className="space-y-3 text-body-text leading-relaxed">{children}</div>
    </section>
  );
}

function VoorwaardenPage() {
  return (
    <>
      <PageHero
        eyebrow="Juridisch"
        title={<>Algemene <span className="text-molten italic">voorwaarden</span>.</>}
        description="Laatst bijgewerkt op 17 juni 2026. Van toepassing op alle dienstverlening van Expose Your Brand."
      />
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 ring-1 ring-black/5">
          <Section title="Artikel 1 — Definities">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Expose Your Brand is een onderneming die zich ten doel stelt het helpen van bedrijven met digital marketing, SEO, GEO, SEA en conversie-optimalisatie.</li>
              <li>'Algemene voorwaarden' verwijst naar de onderhavige voorwaarden.</li>
              <li>'Opdrachtgever': de natuurlijke of rechtspersoon die handelt in de uitoefening van zijn bedrijfs- of beroepsactiviteit en gebruikmaakt van de Diensten van Expose Your Brand.</li>
              <li>'Partijen': Expose Your Brand en Opdrachtgever gezamenlijk.</li>
              <li>'Overeenkomst': de tussen Expose Your Brand en Opdrachtgever gesloten overeenkomst tot dienstverlening.</li>
              <li>'Diensten': alle door Expose Your Brand en/of door haar ingeschakelde derden geleverde diensten, waaronder SEO, GEO, SEA, AI-advertising, conversie-optimalisatie en digital marketing strategie.</li>
              <li>'Website': <a href="https://expose-your-brand.com" className="text-molten hover:underline">https://expose-your-brand.com</a>.</li>
            </ol>
          </Section>

          <Section title="Artikel 2 — Identiteit van Expose Your Brand">
            <p>Expose Your Brand is gevestigd aan Visstraat 55K, 5211 DM Den Bosch, Nederland.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>KvK-nummers: 71474129 en 61944351</li>
              <li>BTW-identificatienummers: NL001764651B24 en NL001846301B46</li>
              <li>E-mail: <a href="mailto:groei@expose-your-brand.com" className="text-molten hover:underline">groei@expose-your-brand.com</a></li>
              <li>Website: <a href="https://expose-your-brand.com" className="text-molten hover:underline">https://expose-your-brand.com</a></li>
            </ul>
          </Section>

          <Section title="Artikel 3 — Toepasselijkheid">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Deze voorwaarden zijn van toepassing op ieder aanbod van Expose Your Brand en op alle huidige en toekomstige overeenkomsten tussen Partijen.</li>
              <li>Afwijkingen zijn slechts geldig indien uitdrukkelijk en schriftelijk overeengekomen.</li>
              <li>Inkoop- of andere voorwaarden van Opdrachtgever worden uitdrukkelijk van de hand gewezen.</li>
              <li>Indien een bepaling nietig blijkt, blijven de overige bepalingen onverkort van kracht.</li>
            </ol>
          </Section>

          <Section title="Artikel 4 — De Overeenkomst">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Alle aanbiedingen op de Website zijn vrijblijvend, tenzij anders aangegeven.</li>
              <li>Opdrachtgever kan contact opnemen via de Website, e-mail of telefoon.</li>
              <li>Expose Your Brand zal met Opdrachtgever overleggen en een offerte opmaken. De Overeenkomst komt tot stand door ondertekening of door (elektronische) opdrachtbevestiging.</li>
              <li>Een bevestiging van Expose Your Brand is beslissend voor de inhoud, onder voorbehoud van kennelijke verschrijvingen.</li>
            </ol>
          </Section>

          <Section title="Artikel 5 — Uitvoering">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Expose Your Brand zal de Diensten naar beste inzicht en vermogen uitvoeren conform goed vakmanschap.</li>
              <li>Op Expose Your Brand rust een inspanningsverplichting, geen resultaatsverplichting. Specifieke resultaten kunnen niet worden gegarandeerd.</li>
              <li>Expose Your Brand heeft het recht werkzaamheden door derden te laten verrichten.</li>
              <li>Opdrachtgever draagt zorg voor het tijdig aanleveren van benodigde gegevens. Bij vertraging kunnen extra kosten in rekening worden gebracht.</li>
            </ol>
          </Section>

          <Section title="Artikel 6 — Wijziging">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Wijzigingen worden in onderling overleg vastgelegd via een aanvullende of gewijzigde overeenkomst.</li>
              <li>Aanvullende opdrachten worden vooraf separaat geoffreerd.</li>
            </ol>
          </Section>

          <Section title="Artikel 7 — Opschorting & ontbinding">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Expose Your Brand mag de nakoming opschorten of de Overeenkomst ontbinden indien Opdrachtgever zijn verplichtingen niet (tijdig) nakomt, na schriftelijke ingebrekestelling.</li>
              <li>Bij wanprestatie is Opdrachtgever gehouden de geleden schade te vergoeden.</li>
            </ol>
          </Section>

          <Section title="Artikel 8 — Annulering & opzegging">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Annulering na ondertekening van de offerte of opdrachtbevestiging is niet mogelijk.</li>
              <li>Diensten duren standaard 12 maanden en worden automatisch verlengd.</li>
              <li>Na 12 maanden geldt een schriftelijke opzegtermijn van 2 maanden.</li>
            </ol>
          </Section>

          <Section title="Artikel 9 — Tarieven & betaling">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Alle bedragen zijn in euro's en exclusief btw, tenzij anders vermeld.</li>
              <li>Betaling geschiedt per bankoverschrijving binnen 14 dagen na factuurdatum.</li>
              <li>Bij niet-tijdige betaling is Opdrachtgever van rechtswege in verzuim en is de wettelijke (handels)rente verschuldigd, naast eventuele incassokosten.</li>
            </ol>
          </Section>

          <Section title="Artikel 10 — Aansprakelijkheid">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Expose Your Brand is niet aansprakelijk voor schade door onjuiste of onvolledige gegevens van Opdrachtgever.</li>
              <li>Expose Your Brand is niet aansprakelijk voor indirecte schade, waaronder gevolgschade, gederfde winst of reputatieschade.</li>
              <li>De aansprakelijkheid is beperkt tot het door de verzekeraar uitgekeerde bedrag, dan wel — bij gebreke daarvan — tot het door Opdrachtgever in de drie maanden voorafgaand aan de schadeveroorzakende gebeurtenis betaalde bedrag.</li>
              <li>De beperking geldt niet bij opzet of bewuste roekeloosheid.</li>
            </ol>
          </Section>

          <Section title="Artikel 11 — Overmacht">
            <p>In geval van overmacht (waaronder ziekte, storingen, brand, natuurrampen, pandemieën, oorlog) wordt nakoming opgeschort. Bij overmacht langer dan één maand zijn beide Partijen gerechtigd de Overeenkomst te ontbinden.</p>
          </Section>

          <Section title="Artikel 12 — Vertrouwelijkheid">
            <p>Partijen behandelen alle vertrouwelijke gegevens die zij van elkaar ontvangen als zodanig en gebruiken deze uitsluitend voor het doel waarvoor zij zijn verstrekt.</p>
          </Section>

          <Section title="Artikel 13 — Intellectuele eigendom">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Expose Your Brand behoudt alle rechten op door haar ontwikkelde strategieën, rapportages, content en software, op grond van de Auteurswet.</li>
              <li>Opdrachtgever garandeert dat aan Expose Your Brand verstrekte materialen geen inbreuk maken op rechten van derden en vrijwaart Expose Your Brand voor dergelijke aanspraken.</li>
            </ol>
          </Section>

          <Section title="Artikel 14 — Klachten">
            <p>Klachten kunnen schriftelijk worden gemeld bij <a href="mailto:groei@expose-your-brand.com" className="text-molten hover:underline">groei@expose-your-brand.com</a>. Wij nemen klachten binnen 5 werkdagen in behandeling.</p>
          </Section>

          <Section title="Artikel 15 — Wijzigingen voorwaarden">
            <p>Expose Your Brand behoudt zich het recht voor deze voorwaarden te wijzigen. Wijzigingen treden één maand na bekendmaking in werking.</p>
          </Section>

          <Section title="Artikel 16 — Toepasselijk recht">
            <p>Op alle rechtsverhoudingen is Nederlands recht van toepassing. Geschillen worden beslecht door de bevoegde rechter van het arrondissement Oost-Brabant.</p>
          </Section>
        </div>
      </section>
    </>
  );
}