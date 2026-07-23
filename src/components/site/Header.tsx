import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTAButton } from "./CTAButton";
import { useLang, useT } from "@/lib/i18n";
import logoAsset from "@/assets/logo.png.asset.json";
import sparklesBg from "@/assets/sparkles-bg.png.asset.json";

const services = [
  { to: "/diensten/seo", label: "SEO" },
  { to: "/diensten/geo", label: "GEO" },
  { to: "/diensten/sea", label: "SEA + AI Ads" },
  { to: "/diensten/cro", label: "CRO" },
] as const;

const auditLink = { to: "/diensten/seo-geo-audit", label: "SEO & GEO Audit" } as const;

const llmLogos = [
  { name: "ChatGPT", url: "https://www.google.com/s2/favicons?domain=openai.com&sz=128" },
  { name: "Gemini", url: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128" },
  { name: "Perplexity", url: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128" },
  { name: "Claude", url: "https://www.google.com/s2/favicons?domain=claude.ai&sz=128" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lang = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const t = useT({
    recommendedIn: { nl: "Aanbevolen in", en: "Recommended by" },
    services: { nl: "Diensten", en: "Services" },
    newBadge: { nl: "Nieuw", en: "New" },
    cta: { nl: "Plan gratis adviesgesprek", en: "Book free strategy call" },
    cases: { nl: "Cases", en: "Cases" },
    about: { nl: "Over ons", en: "About us" },
  });
  const navItems = [
    { to: "/cases", label: t.cases },
    { to: "/over-ons", label: t.about },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300 relative",
        scrolled
          ? "bg-white/90 backdrop-blur-md ring-1 ring-black/5"
          : "bg-transparent",
      )}
    >
      <div className="hidden md:flex relative z-20 items-center justify-end gap-3 px-6 pt-2 text-twilight/60">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t.recommendedIn}</span>
        <div className="flex items-center gap-2.5">
          {llmLogos.map((l) => (
            <img
              key={l.name}
              src={l.url}
              alt={l.name}
              title={l.name}
              className="h-5 w-5 object-contain opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          ))}
        </div>
        <div className="ml-3 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em]">
          <Link
            to={pathname}
            search={(prev) => ({ ...(prev as object), lang: undefined })}
            className={cn("px-1.5 py-0.5 rounded transition-colors", lang === "nl" ? "text-molten" : "hover:text-twilight")}
            aria-label="Nederlands"
          >
            NL
          </Link>
          <span aria-hidden className="opacity-30">|</span>
          <Link
            to={pathname}
            search={(prev) => ({ ...(prev as object), lang: "en" as const })}
            className={cn("px-1.5 py-0.5 rounded transition-colors", lang === "en" ? "text-molten" : "hover:text-twilight")}
            aria-label="English"
          >
            EN
          </Link>
        </div>
      </div>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-no-repeat transition-opacity duration-300 mix-blend-multiply",
          scrolled ? "opacity-40" : "opacity-70",
        )}
        style={{
          backgroundImage: `url(${sparklesBg.url})`,
          backgroundSize: "auto 200%",
          backgroundPosition: "right -20px center",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-24 sm:h-28 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between">
        <Link to="/" className="flex items-center min-w-0 shrink-0">
          <img
            src={logoAsset.url}
            alt="Expose Your Brand"
            className="h-16 sm:h-20 lg:h-24 w-auto block"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-twilight">
          <div className="relative group">
            <Link to="/diensten" className="inline-flex items-center gap-1 hover:text-molten transition-colors">
              {t.services} <ChevronDown className="size-3.5" />
            </Link>
            <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
              <div className="bg-white rounded-xl ring-1 ring-black/5 shadow-xl p-2">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block px-4 py-2 text-sm rounded-md hover:bg-silver hover:text-molten transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            to={auditLink.to}
            className="relative inline-flex flex-col items-center hover:text-molten transition-colors"
          >
            <span className="absolute -top-5 flex flex-col items-center">
              <Star className="size-3 text-molten fill-molten animate-sparkle-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-molten">
                {t.newBadge}
              </span>
            </span>
            <span>{auditLink.label}</span>
          </Link>
          {navItems.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-molten transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton to="/contact" variant="molten" className="!h-10 !px-4 !text-sm">
            {t.cta}
          </CTAButton>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-twilight"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-black/5">
          <div className="px-6 py-6 space-y-1">
            <Link
              to={auditLink.to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-2 text-molten font-bold"
            >
              <Star className="size-4 fill-molten animate-sparkle-pulse" />
              {auditLink.label}
              <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-molten bg-powder px-2 py-0.5 rounded-full">
                {t.newBadge}
              </span>
            </Link>
            <div className="h-px bg-black/5 my-2" />
            <div className="text-xs font-bold uppercase tracking-widest text-twilight/40 pb-2">
              {t.services}
            </div>
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                className="block py-2 text-twilight font-medium"
              >
                {s.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-black/5">
              {navItems.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-twilight font-medium"
                >
                  {n.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-1 pt-4 text-xs font-bold uppercase tracking-widest">
              <Link
                to={pathname}
                onClick={() => setOpen(false)}
                search={(prev) => ({ ...(prev as object), lang: undefined })}
                className={cn("px-2 py-1 rounded", lang === "nl" ? "text-molten" : "text-twilight/60")}
              >
                NL
              </Link>
              <span className="opacity-30">|</span>
              <Link
                to={pathname}
                onClick={() => setOpen(false)}
                search={(prev) => ({ ...(prev as object), lang: "en" as const })}
                className={cn("px-2 py-1 rounded", lang === "en" ? "text-molten" : "text-twilight/60")}
              >
                EN
              </Link>
            </div>
            <div className="pt-4">
              <CTAButton to="/contact" variant="molten" className="w-full">
                {t.cta}
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}