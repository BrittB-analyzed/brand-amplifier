import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageSquare, Calendar } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Sparkle } from "@/components/site/Sparkle";
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
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Plan je <span className="text-molten italic">gratis</span> adviesgesprek.</>}
        description="30 minuten. Geen verkooppraat — wel concrete cijfers en een plan. Binnen 24 uur antwoord."
      />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 ring-1 ring-black/5">
            <div className="flex items-center gap-2 mb-2">
              <Sparkle size="sm" />
              <span className="text-molten font-bold text-xs uppercase tracking-widest">Direct boeken</span>
            </div>
            <h2 className="font-display text-2xl text-twilight font-semibold mb-6">Kies een tijdslot</h2>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-3">
                <img src={berryPortrait.url} alt="Berry" className="size-12 rounded-full object-cover ring-2 ring-white" />
                <img src={founderPortrait.url} alt="Britt" className="size-12 rounded-full object-cover ring-2 ring-white" />
              </div>
              <p className="text-sm text-body-text">Je spreekt direct met <span className="text-twilight font-medium">Berry</span> of <span className="text-twilight font-medium">Britt</span>.</p>
            </div>
            <div className="aspect-[4/5] bg-silver rounded-xl grid place-items-center text-center px-6 border-2 border-dashed border-twilight/10">
              <div>
                <Calendar className="size-10 text-molten mx-auto mb-4" />
                <p className="text-sm text-twilight font-medium">Calendly afspraakmodule</p>
                <p className="text-xs text-body-text mt-2">Hier wordt de Calendly-widget geladen zodra je deze koppelt.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-8 ring-1 ring-black/5 mb-6">
              <h2 className="font-display text-2xl text-twilight font-semibold mb-6">Of stuur een bericht</h2>
              {sent ? (
                <div className="p-6 bg-molten/5 ring-1 ring-molten/20 rounded-xl text-center">
                  <Sparkle className="mb-3" size="lg" />
                  <p className="text-twilight font-medium">Bedankt. Je hoort binnen 24 uur van ons.</p>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <input required placeholder="Naam" className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
                  <input required type="email" placeholder="E-mailadres" className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
                  <input placeholder="Bedrijf" className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten" />
                  <textarea required placeholder="Waar kunnen we mee helpen?" rows={5} className="w-full bg-silver rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-molten resize-none" />
                  <button type="submit" className="w-full bg-molten text-white font-medium h-12 rounded-md hover:brightness-110 transition-all">
                    Verstuur bericht
                  </button>
                </form>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a href="mailto:hallo@expose-your-brand.com" className="p-5 bg-white rounded-xl ring-1 ring-black/5 hover:ring-molten/30 transition-all">
                <Mail className="size-5 text-molten mb-2" />
                <div className="font-display font-semibold text-twilight text-sm">E-mail</div>
                <div className="text-xs">hallo@expose-your-brand.com</div>
              </a>
              <div className="p-5 bg-white rounded-xl ring-1 ring-black/5">
                <MessageSquare className="size-5 text-molten mb-2" />
                <div className="font-display font-semibold text-twilight text-sm">Slack</div>
                <div className="text-xs">Eigen kanaal na onboarding</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}