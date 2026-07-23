import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Calendar } from "lucide-react";
import { Sparkle } from "@/components/site/Sparkle";
import { sendFormSubmission } from "@/lib/send-form.functions";
import { useLang, pick, T } from "@/lib/i18n";

export const Route = createFileRoute("/gratis-geo-audit")({
  head: () => ({
    meta: [
      { title: "Gratis GEO-audit — Ontdek wat AI over jouw merk zegt" },
      { name: "description", content: "Vraag een gratis GEO-audit aan en ontdek hoe ChatGPT, Gemini en Perplexity nu over jouw merk denken — inclusief concrete verbeterpunten." },
      { property: "og:title", content: "Gratis GEO-audit" },
      { property: "og:url", content: "/gratis-geo-audit" },
    ],
    links: [{ rel: "canonical", href: "/gratis-geo-audit" }],
  }),
  component: AuditLanding,
});

function AuditLanding() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const lang = useLang();
  const bullets = pick(lang, {
    nl: [
      "Live test: noemt AI je nu of je concurrenten?",
      "Visibility Score baseline incl. 3 concurrenten.",
      "Top-5 quick-wins voor de komende 30 dagen.",
      "Persoonlijke uitleg in een online gesprek.",
    ],
    en: [
      "Live test: does AI mention you or your competitors?",
      "Visibility Score baseline incl. 3 competitors.",
      "Top 5 quick wins for the next 30 days.",
      "Personal walkthrough in an online call.",
    ],
  });

  return (
    <div className="bg-silver min-h-screen font-sans text-body-text">
      <header className="px-6 py-6 border-b border-black/5 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-display font-semibold text-lg tracking-tight text-twilight">
            EXPOSE <span className="text-molten">YOUR BRAND</span>
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest text-twilight/40 hidden sm:block">
            {pick(lang, { nl: "Gratis · 24 uur antwoord", en: "Free · 24-hour reply" })}
          </span>
        </div>
      </header>

      <main className="mesh-bg pt-16 pb-24 px-6 relative overflow-hidden">
        <Sparkle className="absolute top-20 right-[10%] opacity-60" size="lg" animate />
        <Sparkle className="absolute bottom-20 left-[8%] opacity-40" size="md" color="blue" animate />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 relative z-10">
          <div className="lg:col-span-3 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white ring-1 ring-black/5 rounded-full mb-6">
              <Sparkle size="sm" />
              <span className="text-molten text-[10px] font-bold tracking-widest uppercase">{pick(lang, { nl: "Aanbod", en: "Offer" })}</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-twilight leading-[1.1] text-balance mb-6">
              <T nl={<>Ontdek hoe AI <span className="text-molten italic">nu</span> over jouw merk denkt.</>} en={<>Discover what AI <span className="text-molten italic">thinks</span> of your brand today.</>} />
            </h1>
            <p className="text-lg text-body-text mb-8 max-w-xl">
              <T
                nl="Een gratis, persoonlijke GEO-audit. Je krijgt zwart-op-wit te zien hoe ChatGPT, Gemini en Perplexity vandaag reageren als prospects naar jouw type bedrijf vragen — én wat we eraan kunnen doen."
                en="A free, personal GEO audit. You'll see in black and white how ChatGPT, Gemini and Perplexity respond today when prospects ask about your kind of business — and what we can do about it."
              />
            </p>

            <ul className="space-y-3 mb-10">
              {bullets.map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <Check className="size-5 text-molten shrink-0 mt-0.5" />
                  <span className="text-twilight">{t}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-twilight/5 rounded-xl ring-1 ring-twilight/10">
              <p className="text-xs font-bold uppercase tracking-widest text-twilight/60 mb-1">{pick(lang, { nl: "Geen verkooppraat", en: "No sales pitch" })}</p>
              <p className="text-sm text-twilight">{pick(lang, { nl: "Geen verplichting tot vervolgtraject. Wel echte data en advies dat je direct kunt gebruiken.", en: "No obligation to book a follow-up. Just real data and advice you can act on right away." })}</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 ring-1 ring-black/5 shadow-xl shadow-twilight/5 sticky top-6">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="size-4 text-molten" />
                <span className="text-molten font-bold text-xs uppercase tracking-widest">{pick(lang, { nl: "Vraag aan", en: "Request" })}</span>
              </div>
              <h2 className="font-display text-2xl font-semibold text-twilight mb-6">{pick(lang, { nl: "Start je audit", en: "Start your audit" })}</h2>
              {sent ? (
                <div className="p-6 bg-molten/5 ring-1 ring-molten/20 rounded-xl text-center">
                  <Sparkle className="mb-3" size="lg" />
                  <p className="text-twilight font-medium">{pick(lang, { nl: "Top! Check je inbox.", en: "Awesome! Check your inbox." })}</p>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setError(null);
                    const fd = new FormData(e.currentTarget);
                    setSubmitting(true);
                    try {
                      await sendFormSubmission({
                        data: {
                          formName: "Gratis GEO-audit",
                          name: String(fd.get("name") ?? ""),
                          email: String(fd.get("email") ?? ""),
                          url: String(fd.get("url") ?? ""),
                          extra: { Sector: String(fd.get("sector") ?? "") },
                          _hp: String(fd.get("_hp") ?? ""),
                        },
                      });
                      setSent(true);
                    } catch (err) {
                      setError(err instanceof Error ? err.message : pick(lang, { nl: "Verzenden mislukt.", en: "Failed to send." }));
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                  className="space-y-3"
                >
                  <input name="name" required placeholder={pick(lang, { nl: "Naam", en: "Name" })} className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
                  <input name="email" required type="email" placeholder={pick(lang, { nl: "Zakelijk e-mailadres", en: "Business email" })} className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
                  <input name="url" required type="url" placeholder={pick(lang, { nl: "Website (URL)", en: "Website (URL)" })} className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
                  <input name="sector" placeholder={pick(lang, { nl: "Sector / niche", en: "Sector / niche" })} className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
                  <input type="text" name="_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                  {error && <p className="text-xs text-molten">{error}</p>}
                  <button type="submit" disabled={submitting} className="w-full bg-molten text-white font-medium h-12 rounded-md hover:brightness-110 transition-all mt-2 disabled:opacity-60">
                    {submitting ? pick(lang, { nl: "Verzenden…", en: "Sending…" }) : pick(lang, { nl: "Vraag gratis audit aan", en: "Request free audit" })}
                  </button>
                  <p className="text-[11px] text-body-text text-center pt-2">
                    {pick(lang, { nl: "Binnen 24 uur antwoord van een specialist.", en: "A specialist replies within 24 hours." })}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}