import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTAButton } from "./CTAButton";
import logoAsset from "@/assets/logo.png.asset.json";
import sparklesBg from "@/assets/sparkles-bg.png.asset.json";

const services = [
  { to: "/diensten/seo", label: "SEO" },
  { to: "/diensten/geo", label: "GEO" },
  { to: "/diensten/sea", label: "SEA + AI Ads" },
  { to: "/diensten/cro", label: "CRO" },
  { to: "/diensten/seo-geo-audit", label: "SEO & GEO Audit" },
] as const;

const navItems = [
  { to: "/cases", label: "Cases" },
  { to: "/over-ons", label: "Over ons" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
              Diensten <ChevronDown className="size-3.5" />
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
          {navItems.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-molten transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton to="/contact" variant="molten" className="!h-10 !px-4 !text-sm">
            Plan gratis adviesgesprek
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
            <div className="text-xs font-bold uppercase tracking-widest text-twilight/40 pb-2">
              Diensten
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
            <div className="pt-4">
              <CTAButton to="/contact" variant="molten" className="w-full">
                Plan gratis adviesgesprek
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}