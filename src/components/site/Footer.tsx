import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Facebook, MapPin } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <img src={logoAsset.url} alt="Expose Your Brand" className="h-14 w-auto mb-4 bg-white rounded-xl p-2 inline-block" />
            <p className="text-white/60 max-w-sm leading-relaxed mb-6">
              Van 'Onzichtbaar' naar 'Aanbevolen'. AI-first SEO & GEO bureau voor ambitieuze ondernemers.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <MapPin className="size-4" /> Nederland · expose-your-brand.com
            </div>
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
              <li><Link to="/kennis" className="hover:text-white">Kenniscentrum</Link></li>
              <li><Link to="/samenwerking" className="hover:text-white">Samenwerking</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-white/10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-molten mb-3">Nieuwsbrief</p>
            <form className="flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="E-mailadres"
                className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-molten text-white placeholder:text-white/40"
              />
              <button className="bg-molten text-white px-4 py-2 rounded-md text-xs font-bold hover:brightness-110">
                Aanmelden
              </button>
            </form>
          </div>
          <div className="flex md:justify-end items-center gap-4">
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="size-10 rounded-lg bg-white/5 hover:bg-molten transition-colors grid place-items-center">
              <Linkedin className="size-4" />
            </a>
            <a href="https://www.instagram.com/xposeyourbrand" aria-label="Instagram" className="size-10 rounded-lg bg-white/5 hover:bg-molten transition-colors grid place-items-center">
              <Instagram className="size-4" />
            </a>
            <a href="https://www.facebook.com/" aria-label="Facebook" className="size-10 rounded-lg bg-white/5 hover:bg-molten transition-colors grid place-items-center">
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-widest text-white/30">
          <p>© {new Date().getFullYear()} Expose Your Brand · KvK Nederland</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Voorwaarden</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}