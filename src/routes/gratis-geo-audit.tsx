import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Calendar } from "lucide-react";
import { Sparkle } from "@/components/site/Sparkle";
import { sendFormSubmission } from "@/lib/send-form.functions";

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

  return (
    <div className="bg-silver min-h-screen font-sans text-body-text">
      <header className="px-6 py-6 border-b border-black/5 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-display font-semibold text-lg tracking-tight text-twilight">
            EXPOSE <span className="text-molten">YOUR BRAND</span>
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest text-twilight/40 hidden sm:block">
            Gratis · 24 uur antwoord
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
              <span className="text-molten text-[10px] font-bold tracking-widest uppercase">Aanbod</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-twilight leading-[1.1] text-balance mb-6">
              Ontdek hoe AI <span className="text-molten italic">nu</span> over jouw merk denkt.
            </h1>
            <p className="text-lg text-body-text mb-8 max-w-xl">
              Een gratis, persoonlijke GEO-audit. Je krijgt zwart-op-wit te zien hoe ChatGPT, Gemini en Perplexity vandaag reageren als prospects naar jouw type bedrijf vragen — én wat we eraan kunnen doen.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "Live test: noemt AI je nu of je concurrenten?",
                "Visibility Score baseline incl. 3 concurrenten.",
                "Top-5 quick-wins voor de komende 30 dagen.",
                "Persoonlijke uitleg in een online gesprek.",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <Check className="size-5 text-molten shrink-0 mt-0.5" />
                  <span className="text-twilight">{t}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-twilight/5 rounded-xl ring-1 ring-twilight/10">
              <p className="text-xs font-bold uppercase tracking-widest text-twilight/60 mb-1">Geen verkooppraat</p>
              <p className="text-sm text-twilight">Geen verplichting tot vervolgtraject. Wel echte data en advies dat je direct kunt gebruiken.</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 ring-1 ring-black/5 shadow-xl shadow-twilight/5 sticky top-6">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="size-4 text-molten" />
                <span className="text-molten font-bold text-xs uppercase tracking-widest">Vraag aan</span>
              </div>
              <h2 className="font-display text-2xl font-semibold text-twilight mb-6">Start je audit</h2>
              {sent ? (
                <div className="p-6 bg-molten/5 ring-1 ring-molten/20 rounded-xl text-center">
                  <Sparkle className="mb-3" size="lg" />
                  <p className="text-twilight font-medium">Top! Check je inbox.</p>
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
                      setError(err instanceof Error ? err.message : "Verzenden mislukt.");
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                  className="space-y-3"
                >
                  <input name="name" required placeholder="Naam" className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
                  <input name="email" required type="email" placeholder="Zakelijk e-mailadres" className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
                  <input name="url" required type="url" placeholder="Website (URL)" className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
                  <input name="sector" placeholder="Sector / niche" className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
                  <input type="text" name="_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                  {error && <p className="text-xs text-molten">{error}</p>}
                  <button type="submit" disabled={submitting} className="w-full bg-molten text-white font-medium h-12 rounded-md hover:brightness-110 transition-all mt-2 disabled:opacity-60">
                    {submitting ? "Verzenden…" : "Vraag gratis audit aan"}
                  </button>
                  <p className="text-[11px] text-body-text text-center pt-2">
                    Binnen 24 uur antwoord van een specialist.
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