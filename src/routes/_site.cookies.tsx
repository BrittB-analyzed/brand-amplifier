import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/_site/cookies")({
  head: () => ({
    meta: [
      { title: "Cookieverklaring | Expose Your Brand" },
      { name: "description", content: "Welke cookies Expose Your Brand gebruikt en hoe je ze beheert." },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Cookieverklaring" },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiesPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-2xl text-twilight font-semibold mb-3">{title}</h2>
      <div className="space-y-3 text-body-text leading-relaxed">{children}</div>
    </section>
  );
}

function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cookies"
        title={<>Cookie<span className="text-molten italic">verklaring</span>.</>}
        description="We gebruiken cookies om de site te laten werken, het gebruik te meten en jouw ervaring te verbeteren."
      />
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 ring-1 ring-black/5">
          <Section title="1. Wat zijn cookies?">
            <p>Cookies zijn kleine tekstbestanden die bij een bezoek aan onze website op je apparaat worden opgeslagen. Ze helpen ons de site goed te laten werken en geanonimiseerd inzicht te krijgen in bezoekgedrag.</p>
          </Section>

          <Section title="2. Welke cookies gebruiken wij?">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Functionele cookies</strong> — noodzakelijk voor het functioneren van de website (bijv. taalvoorkeur, sessie). Geen toestemming vereist.</li>
              <li><strong>Analytische cookies</strong> — meten anoniem hoe bezoekers onze site gebruiken, zodat we deze kunnen verbeteren. Wij hebben deze privacyvriendelijk ingericht.</li>
              <li><strong>Marketingcookies</strong> — alleen geplaatst na expliciete toestemming. Worden gebruikt voor remarketing en het meten van advertentieprestaties.</li>
            </ul>
          </Section>

          <Section title="3. Toestemming en beheer">
            <p>Bij je eerste bezoek vragen we toestemming voor niet-noodzakelijke cookies. Je kunt je voorkeuren altijd aanpassen via de cookie-instellingen in je browser. In de meeste browsers kun je cookies ook verwijderen of blokkeren.</p>
          </Section>

          <Section title="4. Cookies van derden">
            <p>Sommige cookies worden geplaatst door derden, zoals analytics-, video- of advertentieleveranciers. Op het gebruik van die cookies is het privacybeleid van de betreffende partij van toepassing.</p>
          </Section>

          <Section title="5. Contact">
            <p>Vragen over ons cookiegebruik? Mail ons via <a href="mailto:groei@expose-your-brand.com" className="text-molten hover:underline">groei@expose-your-brand.com</a>.</p>
          </Section>
        </div>
      </section>
    </>
  );
}