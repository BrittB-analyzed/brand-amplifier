import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, MessageSquare, MapPin, Building2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Sparkle } from "@/components/site/Sparkle";
import { sendFormSubmission } from "@/lib/send-form.functions";
import { useLang, useT } from "@/lib/i18n";
import berryPortrait from "@/assets/berry-portrait.jpg.asset.json";
import founderPortrait from "@/assets/founder-portrait.jpg.asset.json";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact & gratis adviesgesprek | Expose Your Brand" },
      { name: "description", content: "Plan een gratis AI-adviesgesprek met Expose Your Brand. 30 minuten, geen verkooppraat — wel concrete cijfers en een plan." },
      { property: "og:title", content: "Contact" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const lang = useLang();
  const t = useT({
    eyebrow: { nl: "Contact", en: "Contact" },
    titlePre: { nl: "Plan je ", en: "Book your " },
    titleMid: { nl: "gratis", en: "free" },
    titlePost: { nl: " adviesgesprek.", en: " strategy call." },
    heroDesc: {
      nl: "30 minuten gesprek. Concrete cijfers en een gedegen plan van aanpak. Binnen 24 uur antwoord.",
      en: "30-minute call. Concrete numbers and a solid plan of action. Reply within 24 hours.",
    },
    planTag: { nl: "Plan gesprek", en: "Book a call" },
    pickSlot: { nl: "Kies een tijdslot", en: "Pick a time slot" },
    directWith: {
      nl: <>Je spreekt direct met <span className="text-twilight font-medium">Berry</span> of <span className="text-twilight font-medium">Britt</span>.</>,
      en: <>You'll speak directly with <span className="text-twilight font-medium">Berry</span> or <span className="text-twilight font-medium">Britt</span>.</>,
    },
    orMessage: { nl: "Of stuur een bericht", en: "Or send a message" },
    thanks: { nl: "Bedankt. Je hoort binnen 24 uur van ons.", en: "Thanks. You'll hear back from us within 24 hours." },
    name: { nl: "Naam", en: "Name" },
    email: { nl: "E-mailadres", en: "Email address" },
    website: { nl: "Website (URL)", en: "Website (URL)" },
    message: { nl: "Waar kunnen we mee helpen?", en: "How can we help you?" },
    sending: { nl: "Verzenden…", en: "Sending…" },
    submit: { nl: "Vraag mijn gratis adviesgesprek aan", en: "Request my free strategy call" },
    reply: {
      nl: "Je krijgt binnen 24 uur persoonlijk antwoord van Berry of Britt.",
      en: "You'll get a personal reply from Berry or Britt within 24 hours.",
    },
    quote: {
      nl: "\"Binnen 3 maanden merkbaar meer aanvragen en eindelijk uitleg die klopt.\"",
      en: "\"Within 3 months noticeably more leads and finally explanations that make sense.\"",
    },
    social: { nl: "Al 40+ merken gingen je voor", en: "40+ brands went before you" },
    emailCard: { nl: "E-mail", en: "Email" },
    slackCard: { nl: "Slack", en: "Slack" },
    slackDesc: { nl: "Eigen kanaal na onboarding", en: "Dedicated channel after onboarding" },
    visitAddress: { nl: "Bezoekadres", en: "Visiting address" },
    companyInfo: { nl: "Bedrijfsgegevens", en: "Company details" },
    country: { nl: "Nederland", en: "Netherlands" },
    failed: { nl: "Verzenden mislukt.", en: "Submission failed." },
  });

  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (document.getElementById("calendly-widget-script")) return;
    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={<>{t.titlePre}<span className="text-molten italic">{t.titleMid}</span>{t.titlePost}</>}
        description={t.heroDesc}
      />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 ring-1 ring-black/5">
            <div className="flex items-center gap-2 mb-2">
              <Sparkle size="sm" />
              <span className="text-molten font-bold text-xs uppercase tracking-widest">{t.planTag}</span>
            </div>
            <h2 className="font-display text-2xl text-twilight font-semibold mb-6">{t.pickSlot}</h2>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-3">
                <img src={berryPortrait.url} alt="Berry" className="size-12 rounded-full object-cover ring-2 ring-white" />
                <img src={founderPortrait.url} alt="Britt" className="size-12 rounded-full object-cover ring-2 ring-white" />
              </div>
              <p className="text-sm text-body-text">{t.directWith}</p>
            </div>
            <div
              className="calendly-inline-widget rounded-xl overflow-hidden"
              data-url="https://calendly.com/groei-expose-your-brand/30min"
              style={{ minWidth: 320, height: 700 }}
            />
          </div>

          <div>
            <div className="bg-white rounded-2xl p-8 ring-1 ring-black/5 mb-6">
              <h2 className="font-display text-2xl text-twilight font-semibold mb-6">{t.orMessage}</h2>
              {sent ? (
                <div className="p-6 bg-molten/5 ring-1 ring-molten/20 rounded-xl text-center">
                  <Sparkle className="mb-3" size="lg" />
                  <p className="text-twilight font-medium">{t.thanks}</p>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setError(null);
                    const fd = new FormData(e.currentTarget);
                    setSubmitting(true);
                    try {
                      await sendFormSubmission({
                        data: {
                          formName: lang === "en" ? "Contact form (EN)" : "Contactformulier",
                          name: String(fd.get("name") ?? ""),
                          email: String(fd.get("email") ?? ""),
                          url: String(fd.get("url") ?? ""),
                          message: String(fd.get("message") ?? ""),
                          _hp: String(fd.get("_hp") ?? ""),
                        },
                      });
                      setSent(true);
                    } catch (err) {
                      setError(err instanceof Error ? err.message : t.failed);
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                >
                  <input name="name" required placeholder={t.name} className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
                  <input name="email" required type="email" placeholder={t.email} className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
                  <input name="url" required type="url" placeholder={t.website} className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
                  <textarea name="message" required placeholder={t.message} rows={5} className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten resize-none" />
                  <input type="text" name="_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                  {error && <p className="text-sm text-molten">{error}</p>}
                  <button type="submit" disabled={submitting} className="w-full bg-molten text-white font-medium h-12 rounded-md hover:brightness-110 transition-all disabled:opacity-60">
                    {submitting ? t.sending : t.submit}
                  </button>
                  <p className="text-xs text-body-text text-center pt-1">{t.reply}</p>
                  <div className="mt-4 p-4 bg-molten/5 ring-1 ring-molten/15 rounded-xl">
                    <p className="text-sm text-twilight italic leading-relaxed">{t.quote}</p>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-molten mt-2">{t.social}</p>
                  </div>
                </form>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a href="mailto:groei@expose-your-brand.com" className="p-5 bg-white rounded-xl ring-1 ring-black/5 hover:ring-molten/30 transition-all">
                <Mail className="size-5 text-molten mb-2" />
                <div className="font-display font-semibold text-twilight text-sm">{t.emailCard}</div>
                <div className="text-xs break-all">groei@expose-your-brand.com</div>
              </a>
              <div className="p-5 bg-white rounded-xl ring-1 ring-black/5">
                <MessageSquare className="size-5 text-molten mb-2" />
                <div className="font-display font-semibold text-twilight text-sm">{t.slackCard}</div>
                <div className="text-xs">{t.slackDesc}</div>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white rounded-xl ring-1 ring-black/5">
                <MapPin className="size-5 text-molten mb-2" />
                <div className="font-display font-semibold text-twilight text-sm mb-1">{t.visitAddress}</div>
                <address className="not-italic text-xs leading-relaxed">
                  Expose your Brand<br />
                  Visstraat 55K<br />
                  5211 DM Den Bosch<br />
                  {t.country}
                </address>
              </div>
              <div className="p-5 bg-white rounded-xl ring-1 ring-black/5">
                <Building2 className="size-5 text-molten mb-2" />
                <div className="font-display font-semibold text-twilight text-sm mb-1">{t.companyInfo}</div>
                <div className="text-xs leading-relaxed">
                  KvK 71474129<br />
                  KvK 61944351<br />
                  BTW NL001764651B24<br />
                  BTW NL001846301B46
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
