import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useLang, pick, T } from "@/lib/i18n";

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

function Section({ title, children }: { title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-2xl text-twilight font-semibold mb-3">{title}</h2>
      <div className="space-y-3 text-body-text leading-relaxed">{children}</div>
    </section>
  );
}

function VoorwaardenPage() {
  const lang = useLang();
  return (
    <>
      <PageHero
        eyebrow={pick(lang, { nl: "Juridisch", en: "Legal" })}
        title={<T nl={<>Algemene <span className="text-molten italic">voorwaarden</span>.</>} en={<>Terms & <span className="text-molten italic">conditions</span>.</>} />}
        description={pick(lang, { nl: "Laatst bijgewerkt op 17 juni 2026. Van toepassing op alle dienstverlening van Expose Your Brand.", en: "Last updated on 17 June 2026. Applicable to all services provided by Expose Your Brand." })}
      />
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 ring-1 ring-black/5">
          <Section title={pick(lang, { nl: "Artikel 1 — Definities", en: "Article 1 — Definitions" })}>
            <ol className="list-decimal pl-5 space-y-2">
              <li><T nl="Expose Your Brand is een onderneming die zich ten doel stelt het helpen van bedrijven met digital marketing, SEO, GEO, SEA en conversie-optimalisatie." en="Expose Your Brand is a company that helps businesses with digital marketing, SEO, GEO, SEA and conversion optimization." /></li>
              <li><T nl="'Algemene voorwaarden' verwijst naar de onderhavige voorwaarden." en="'Terms & conditions' refers to these terms." /></li>
              <li><T nl="'Opdrachtgever': de natuurlijke of rechtspersoon die handelt in de uitoefening van zijn bedrijfs- of beroepsactiviteit en gebruikmaakt van de Diensten van Expose Your Brand." en="'Client': the natural or legal person acting in the course of a business or profession who uses Expose Your Brand's Services." /></li>
              <li><T nl="'Partijen': Expose Your Brand en Opdrachtgever gezamenlijk." en="'Parties': Expose Your Brand and Client together." /></li>
              <li><T nl="'Overeenkomst': de tussen Expose Your Brand en Opdrachtgever gesloten overeenkomst tot dienstverlening." en="'Agreement': the service agreement between Expose Your Brand and Client." /></li>
              <li><T nl="'Diensten': alle door Expose Your Brand en/of door haar ingeschakelde derden geleverde diensten, waaronder SEO, GEO, SEA, AI-advertising, conversie-optimalisatie en digital marketing strategie." en="'Services': all services delivered by Expose Your Brand and/or third parties it engages, including SEO, GEO, SEA, AI advertising, conversion optimization and digital marketing strategy." /></li>
              <li><T nl="'Website'" en="'Website'" />: <a href="https://expose-your-brand.com" className="text-molten hover:underline">https://expose-your-brand.com</a>.</li>
            </ol>
          </Section>

          <Section title={pick(lang, { nl: "Artikel 2 — Identiteit van Expose Your Brand", en: "Article 2 — Identity of Expose Your Brand" })}>
            <p><T nl="Expose Your Brand is gevestigd aan Visstraat 55K, 5211 DM Den Bosch, Nederland." en="Expose Your Brand is based at Visstraat 55K, 5211 DM Den Bosch, the Netherlands." /></p>
            <ul className="list-disc pl-5 space-y-1">
              <li><T nl="KvK-nummers: 71474129 en 61944351" en="Chamber of Commerce numbers: 71474129 and 61944351" /></li>
              <li><T nl="BTW-identificatienummers: NL001764651B24 en NL001846301B46" en="VAT numbers: NL001764651B24 and NL001846301B46" /></li>
              <li><T nl="E-mail" en="Email" />: <a href="mailto:groei@expose-your-brand.com" className="text-molten hover:underline">groei@expose-your-brand.com</a></li>
              <li>Website: <a href="https://expose-your-brand.com" className="text-molten hover:underline">https://expose-your-brand.com</a></li>
            </ul>
          </Section>

          <Section title={pick(lang, { nl: "Artikel 3 — Toepasselijkheid", en: "Article 3 — Applicability" })}>
            <ol className="list-decimal pl-5 space-y-2">
              <li><T nl="Deze voorwaarden zijn van toepassing op ieder aanbod van Expose Your Brand en op alle huidige en toekomstige overeenkomsten tussen Partijen." en="These terms apply to every offer from Expose Your Brand and to all current and future agreements between the Parties." /></li>
              <li><T nl="Afwijkingen zijn slechts geldig indien uitdrukkelijk en schriftelijk overeengekomen." en="Deviations are only valid if expressly agreed in writing." /></li>
              <li><T nl="Inkoop- of andere voorwaarden van Opdrachtgever worden uitdrukkelijk van de hand gewezen." en="Client's purchasing or other terms are expressly rejected." /></li>
              <li><T nl="Indien een bepaling nietig blijkt, blijven de overige bepalingen onverkort van kracht." en="If any provision is void, the remaining provisions remain fully in force." /></li>
            </ol>
          </Section>

          <Section title={pick(lang, { nl: "Artikel 4 — De Overeenkomst", en: "Article 4 — The Agreement" })}>
            <ol className="list-decimal pl-5 space-y-2">
              <li><T nl="Alle aanbiedingen op de Website zijn vrijblijvend, tenzij anders aangegeven." en="All offers on the Website are non-binding unless stated otherwise." /></li>
              <li><T nl="Opdrachtgever kan contact opnemen via de Website, e-mail of telefoon." en="Client can get in touch via the Website, email or phone." /></li>
              <li><T nl="Expose Your Brand zal met Opdrachtgever overleggen en een offerte opmaken. De Overeenkomst komt tot stand door ondertekening of door (elektronische) opdrachtbevestiging." en="Expose Your Brand will consult with Client and draw up a quote. The Agreement is formed on signature or by (electronic) order confirmation." /></li>
              <li><T nl="Een bevestiging van Expose Your Brand is beslissend voor de inhoud, onder voorbehoud van kennelijke verschrijvingen." en="A confirmation from Expose Your Brand is decisive as to content, subject to obvious clerical errors." /></li>
            </ol>
          </Section>

          <Section title={pick(lang, { nl: "Artikel 5 — Uitvoering", en: "Article 5 — Performance" })}>
            <ol className="list-decimal pl-5 space-y-2">
              <li><T nl="Expose Your Brand zal de Diensten naar beste inzicht en vermogen uitvoeren conform goed vakmanschap." en="Expose Your Brand will perform the Services to the best of its ability, in line with good craftsmanship." /></li>
              <li><T nl="Op Expose Your Brand rust een inspanningsverplichting, geen resultaatsverplichting. Specifieke resultaten kunnen niet worden gegarandeerd." en="Expose Your Brand has an obligation of effort, not of result. Specific results cannot be guaranteed." /></li>
              <li><T nl="Expose Your Brand heeft het recht werkzaamheden door derden te laten verrichten." en="Expose Your Brand is entitled to have work performed by third parties." /></li>
              <li><T nl="Opdrachtgever draagt zorg voor het tijdig aanleveren van benodigde gegevens. Bij vertraging kunnen extra kosten in rekening worden gebracht." en="Client is responsible for timely delivery of required data. Additional costs may be charged in case of delay." /></li>
            </ol>
          </Section>

          <Section title={pick(lang, { nl: "Artikel 6 — Wijziging", en: "Article 6 — Changes" })}>
            <ol className="list-decimal pl-5 space-y-2">
              <li><T nl="Wijzigingen worden in onderling overleg vastgelegd via een aanvullende of gewijzigde overeenkomst." en="Changes are recorded by mutual consent through a supplementary or amended agreement." /></li>
              <li><T nl="Aanvullende opdrachten worden vooraf separaat geoffreerd." en="Additional assignments are quoted separately in advance." /></li>
            </ol>
          </Section>

          <Section title={pick(lang, { nl: "Artikel 7 — Opschorting & ontbinding", en: "Article 7 — Suspension & termination" })}>
            <ol className="list-decimal pl-5 space-y-2">
              <li><T nl="Expose Your Brand mag de nakoming opschorten of de Overeenkomst ontbinden indien Opdrachtgever zijn verplichtingen niet (tijdig) nakomt, na schriftelijke ingebrekestelling." en="Expose Your Brand may suspend performance or terminate the Agreement if Client fails to (timely) meet its obligations, after written notice of default." /></li>
              <li><T nl="Bij wanprestatie is Opdrachtgever gehouden de geleden schade te vergoeden." en="In the event of breach Client is required to compensate the resulting damage." /></li>
            </ol>
          </Section>

          <Section title={pick(lang, { nl: "Artikel 8 — Annulering & opzegging", en: "Article 8 — Cancellation & notice" })}>
            <ol className="list-decimal pl-5 space-y-2">
              <li><T nl="Annulering na ondertekening van de offerte of opdrachtbevestiging is niet mogelijk." en="Cancellation after signing the quote or order confirmation is not possible." /></li>
              <li><T nl="Diensten duren standaard 12 maanden en worden automatisch verlengd." en="Services run for 12 months by default and renew automatically." /></li>
              <li><T nl="Na 12 maanden geldt een schriftelijke opzegtermijn van 2 maanden." en="After 12 months a written notice period of 2 months applies." /></li>
            </ol>
          </Section>

          <Section title={pick(lang, { nl: "Artikel 9 — Tarieven & betaling", en: "Article 9 — Rates & payment" })}>
            <ol className="list-decimal pl-5 space-y-2">
              <li><T nl="Alle bedragen zijn in euro's en exclusief btw, tenzij anders vermeld." en="All amounts are in euros and exclusive of VAT, unless stated otherwise." /></li>
              <li><T nl="Betaling geschiedt per bankoverschrijving binnen 14 dagen na factuurdatum." en="Payment is made by bank transfer within 14 days of the invoice date." /></li>
              <li><T nl="Bij niet-tijdige betaling is Opdrachtgever van rechtswege in verzuim en is de wettelijke (handels)rente verschuldigd, naast eventuele incassokosten." en="If payment is not made on time Client is automatically in default and owes statutory (commercial) interest, plus any collection costs." /></li>
            </ol>
          </Section>

          <Section title={pick(lang, { nl: "Artikel 10 — Aansprakelijkheid", en: "Article 10 — Liability" })}>
            <ol className="list-decimal pl-5 space-y-2">
              <li><T nl="Expose Your Brand is niet aansprakelijk voor schade door onjuiste of onvolledige gegevens van Opdrachtgever." en="Expose Your Brand is not liable for damage caused by incorrect or incomplete data from Client." /></li>
              <li><T nl="Expose Your Brand is niet aansprakelijk voor indirecte schade, waaronder gevolgschade, gederfde winst of reputatieschade." en="Expose Your Brand is not liable for indirect damage, including consequential damage, lost profit or reputational damage." /></li>
              <li><T nl="De aansprakelijkheid is beperkt tot het door de verzekeraar uitgekeerde bedrag, dan wel — bij gebreke daarvan — tot het door Opdrachtgever in de drie maanden voorafgaand aan de schadeveroorzakende gebeurtenis betaalde bedrag." en="Liability is limited to the amount paid out by the insurer or, failing that, to the amount paid by Client in the three months preceding the event causing the damage." /></li>
              <li><T nl="De beperking geldt niet bij opzet of bewuste roekeloosheid." en="This limitation does not apply in case of intent or willful recklessness." /></li>
            </ol>
          </Section>

          <Section title={pick(lang, { nl: "Artikel 11 — Overmacht", en: "Article 11 — Force majeure" })}>
            <p><T nl="In geval van overmacht (waaronder ziekte, storingen, brand, natuurrampen, pandemieën, oorlog) wordt nakoming opgeschort. Bij overmacht langer dan één maand zijn beide Partijen gerechtigd de Overeenkomst te ontbinden." en="In the event of force majeure (including illness, outages, fire, natural disasters, pandemics, war) performance is suspended. If force majeure lasts more than one month, either Party may terminate the Agreement." /></p>
          </Section>

          <Section title={pick(lang, { nl: "Artikel 12 — Vertrouwelijkheid", en: "Article 12 — Confidentiality" })}>
            <p><T nl="Partijen behandelen alle vertrouwelijke gegevens die zij van elkaar ontvangen als zodanig en gebruiken deze uitsluitend voor het doel waarvoor zij zijn verstrekt." en="The Parties treat all confidential information received from each other as such and use it solely for the purpose for which it was provided." /></p>
          </Section>

          <Section title={pick(lang, { nl: "Artikel 13 — Intellectuele eigendom", en: "Article 13 — Intellectual property" })}>
            <ol className="list-decimal pl-5 space-y-2">
              <li><T nl="Expose Your Brand behoudt alle rechten op door haar ontwikkelde strategieën, rapportages, content en software, op grond van de Auteurswet." en="Expose Your Brand retains all rights to the strategies, reports, content and software it develops, under copyright law." /></li>
              <li><T nl="Opdrachtgever garandeert dat aan Expose Your Brand verstrekte materialen geen inbreuk maken op rechten van derden en vrijwaart Expose Your Brand voor dergelijke aanspraken." en="Client warrants that materials supplied to Expose Your Brand do not infringe third-party rights and indemnifies Expose Your Brand against such claims." /></li>
            </ol>
          </Section>

          <Section title={pick(lang, { nl: "Artikel 14 — Klachten", en: "Article 14 — Complaints" })}>
            <p><T nl="Klachten kunnen schriftelijk worden gemeld bij" en="Complaints may be submitted in writing to" /> <a href="mailto:groei@expose-your-brand.com" className="text-molten hover:underline">groei@expose-your-brand.com</a>. <T nl="Wij nemen klachten binnen 5 werkdagen in behandeling." en="We address complaints within 5 business days." /></p>
          </Section>

          <Section title={pick(lang, { nl: "Artikel 15 — Wijzigingen voorwaarden", en: "Article 15 — Changes to these terms" })}>
            <p><T nl="Expose Your Brand behoudt zich het recht voor deze voorwaarden te wijzigen. Wijzigingen treden één maand na bekendmaking in werking." en="Expose Your Brand reserves the right to amend these terms. Changes take effect one month after notification." /></p>
          </Section>

          <Section title={pick(lang, { nl: "Artikel 16 — Toepasselijk recht", en: "Article 16 — Governing law" })}>
            <p><T nl="Op alle rechtsverhoudingen is Nederlands recht van toepassing. Geschillen worden beslecht door de bevoegde rechter van het arrondissement Oost-Brabant." en="All legal relationships are governed by Dutch law. Disputes are settled by the competent court in the East Brabant district." /></p>
          </Section>
        </div>
      </section>
    </>
  );
}