import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Facebook, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import { sendFormSubmission } from "@/lib/send-form.functions";
import logoAsset from "@/assets/logo.png.asset.json";
import berryPortrait from "@/assets/berry-portrait.jpg.asset.json";
import founderPortrait from "@/assets/founder-portrait.jpg.asset.json";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <img src={logoAsset.url} alt="Expose Your Brand" className="h-14 w-auto mb-4" />
            <p className="text-white/60 max-w-sm leading-relaxed mb-6">
              Van 'Onzichtbaar' naar 'Aanbevolen'. AI-first SEO & GEO bureau voor ambitieuze ondernemers.
            </p>
            <div className="flex items-center gap-3 mb-5">
              <img src={berryPortrait.url} alt="Berry — Strategie" className="size-12 rounded-full object-cover ring-2 ring-molten/40" />
              <img src={founderPortrait.url} alt="Britt — Executie" className="size-12 rounded-full object-cover ring-2 ring-molten/40" />
              <div className="text-xs text-white/60">
                <p className="text-white font-medium">Berry & Britt</p>
                <p>Je directe contactpersonen</p>
              </div>
            </div>
            <address className="not-italic space-y-2 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 shrink-0 text-molten" />
                <span>Expose your Brand<br />Visstraat 55K<br />5211 DM Den Bosch · Nederland</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-molten" />
                <a href="mailto:groei@expose-your-brand.com" className="hover:text-white">groei@expose-your-brand.com</a>
              </div>
              <div className="text-white/40 text-xs pt-1">
                KvK 71474129 · 61944351<br />BTW NL001764651B24 · NL001846301B46
              </div>
            </address>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-molten mb-4">Diensten</p>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/diensten/geo" className="hover:text-white">GEO Optimalisatie</Link></li>
              <li><Link to="/diensten/seo" className="hover:text-white">SEO Strategie</Link></li>
              <li><Link to="/diensten/sea" className="hover:text-white">SEA & AI Ads</Link></li>
              <li><Link to="/diensten/cro" className="hover:text-white">Conversie (CRO)</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-molten mb-4">Bedrijf</p>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/over-ons" className="hover:text-white">Over ons</Link></li>
              <li><Link to="/cases" className="hover:text-white">Cases</Link></li>
              <li><Link to="/seo-voor-mkb" className="hover:text-white">SEO voor MKB</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-white/10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-molten mb-3">Nieuwsbrief</p>
            <NewsletterForm />
          </div>
          <div className="flex md:justify-end items-center gap-4">
            <a href="https://www.linkedin.com/company/expose-your-brand-com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="size-10 rounded-lg bg-white/5 hover:bg-molten transition-colors grid place-items-center">
              <Linkedin className="size-4" />
            </a>
            <a href="https://www.instagram.com/xposeyourbrand" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="size-10 rounded-lg bg-white/5 hover:bg-molten transition-colors grid place-items-center">
              <Instagram className="size-4" />
            </a>
            <a href="https://www.facebook.com/exposeyourbrandcom" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="size-10 rounded-lg bg-white/5 hover:bg-molten transition-colors grid place-items-center">
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-widest text-white/30">
          <p>© {new Date().getFullYear()} Expose Your Brand · KvK Nederland</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/voorwaarden" className="hover:text-white">Voorwaarden</Link>
            <Link to="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (sent) {
    return <p className="text-sm text-white/70">Bedankt voor je aanmelding.</p>;
  }

  return (
    <form
      className="flex gap-2 max-w-sm"
      onSubmit={async (e) => {
        e.preventDefault();
        setError(null);
        const fd = new FormData(e.currentTarget);
        setSubmitting(true);
        try {
          await sendFormSubmission({
            data: {
              formName: "Nieuwsbrief aanmelding",
              email: String(fd.get("email") ?? ""),
              url: "https://expose-your-brand.com",
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
    >
      <input
        name="email"
        type="email"
        required
        placeholder="E-mailadres"
        className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-molten text-white placeholder:text-white/40"
      />
      <input type="text" name="_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button disabled={submitting} className="bg-molten text-white px-4 py-2 rounded-md text-xs font-bold hover:brightness-110 disabled:opacity-60">
        {submitting ? "…" : "Aanmelden"}
      </button>
      {error && <p className="text-xs text-molten w-full">{error}</p>}
    </form>
  );
}