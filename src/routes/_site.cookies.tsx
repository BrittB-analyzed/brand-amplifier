import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useLang, pick, T } from "@/lib/i18n";

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

function Section({ title, children }: { title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-2xl text-twilight font-semibold mb-3">{title}</h2>
      <div className="space-y-3 text-body-text leading-relaxed">{children}</div>
    </section>
  );
}

function CookiesPage() {
  const lang = useLang();
  return (
    <>
      <PageHero
        eyebrow="Cookies"
        title={<T nl={<>Cookie<span className="text-molten italic">verklaring</span>.</>} en={<>Cookie <span className="text-molten italic">statement</span>.</>} />}
        description={pick(lang, { nl: "We gebruiken cookies om de site te laten werken, het gebruik te meten en jouw ervaring te verbeteren.", en: "We use cookies to make the site work, measure usage, and improve your experience." })}
      />
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 ring-1 ring-black/5">
          <Section title={pick(lang, { nl: "1. Wat zijn cookies?", en: "1. What are cookies?" })}>
            <p><T nl="Cookies zijn kleine tekstbestanden die bij een bezoek aan onze website op je apparaat worden opgeslagen. Ze helpen ons de site goed te laten werken en geanonimiseerd inzicht te krijgen in bezoekgedrag." en="Cookies are small text files stored on your device when you visit our website. They help us run the site properly and provide anonymized insight into visitor behavior." /></p>
          </Section>

          <Section title={pick(lang, { nl: "2. Welke cookies gebruiken wij?", en: "2. Which cookies do we use?" })}>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong><T nl="Functionele cookies" en="Functional cookies" /></strong> — <T nl="noodzakelijk voor het functioneren van de website (bijv. taalvoorkeur, sessie). Geen toestemming vereist." en="required for the website to function (e.g. language preference, session). No consent needed." /></li>
              <li><strong><T nl="Analytische cookies" en="Analytical cookies" /></strong> — <T nl="meten anoniem hoe bezoekers onze site gebruiken, zodat we deze kunnen verbeteren. Wij hebben deze privacyvriendelijk ingericht." en="anonymously measure how visitors use our site so we can improve it. Configured in a privacy-friendly way." /></li>
              <li><strong><T nl="Marketingcookies" en="Marketing cookies" /></strong> — <T nl="alleen geplaatst na expliciete toestemming. Worden gebruikt voor remarketing en het meten van advertentieprestaties." en="only set with explicit consent. Used for remarketing and measuring ad performance." /></li>
            </ul>
          </Section>

          <Section title={pick(lang, { nl: "3. Toestemming en beheer", en: "3. Consent and control" })}>
            <p><T nl="Bij je eerste bezoek vragen we toestemming voor niet-noodzakelijke cookies. Je kunt je voorkeuren altijd aanpassen via de cookie-instellingen in je browser. In de meeste browsers kun je cookies ook verwijderen of blokkeren." en="On your first visit we ask consent for non-essential cookies. You can change your preferences at any time via your browser's cookie settings. Most browsers also let you delete or block cookies." /></p>
          </Section>

          <Section title={pick(lang, { nl: "4. Cookies van derden", en: "4. Third-party cookies" })}>
            <p><T nl="Sommige cookies worden geplaatst door derden, zoals analytics-, video- of advertentieleveranciers. Op het gebruik van die cookies is het privacybeleid van de betreffende partij van toepassing." en="Some cookies are set by third parties, such as analytics, video or advertising providers. Their own privacy policies apply to those cookies." /></p>
          </Section>

          <Section title={pick(lang, { nl: "5. Contact", en: "5. Contact" })}>
            <p><T nl="Vragen over ons cookiegebruik? Mail ons via" en="Questions about our use of cookies? Email us at" /> <a href="mailto:groei@expose-your-brand.com" className="text-molten hover:underline">groei@expose-your-brand.com</a>.</p>
          </Section>
        </div>
      </section>
    </>
  );
}