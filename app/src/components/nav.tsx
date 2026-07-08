import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { navLinks } from "../lib/content";
import logo from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";

export function Nav({ onDark = false }: { onDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only true while an unscrolled dark hero (e.g. the homepage) is showing
  // through the transparent nav — once scrolled, the nav gets its usual
  // white/blurred background, so normal dark-on-light text takes over.
  const light = onDark && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-sf-line bg-white/80 shadow-[0_1px_0_rgba(16,20,35,0.04)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          {/* Real brand logo (extracted from the client's V-card PDF), no
              chip — the dark hero shows through. logo-dark.png is the same
              mark with the navy wordmark/tagline recolored white so it stays
              readable over the dark background. */}
          <img
            src={light ? logoDark : logo}
            alt="Sourcing Fair — RMG trims & accessories"
            className="h-11 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-display text-[13.5px] font-medium transition-colors ${
                light ? "text-white/80 hover:text-white" : "text-sf-ink/70 hover:text-sf-navy"
              }`}
              activeProps={{ className: light ? "!text-white" : "!text-sf-navy" }}
            >
              {link.label}
            </Link>
          ))}
          <NavQuoteCta light={light} />
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden ${light ? "text-white" : "text-sf-ink"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-sf-line bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="font-display text-base font-medium text-sf-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-sf-navy px-5 py-3 text-center font-display text-sm font-semibold text-white"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

/** Nav CTA identity: a sliding-digit index reveal, distinct from every other
 * CTA on the page (hero pill, thread link, swatch flip, stamp button). */
function NavQuoteCta({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/contact"
      className={`group relative flex h-9 items-center overflow-hidden rounded-full border pl-4 pr-3 font-display text-[13px] font-semibold transition-colors ${
        light ? "border-white/30 text-white" : "border-sf-navy/25 text-sf-navy"
      }`}
    >
      <span className="relative block h-4 overflow-hidden">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-4">
          Request a Quote
        </span>
        <span className="absolute inset-0 block translate-y-4 transition-transform duration-300 ease-out group-hover:translate-y-0">
          Request a Quote
        </span>
      </span>
      <span className={`ml-2 font-spec text-[10px] ${light ? "text-sf-brass-light" : "text-sf-brass"}`}>
        01
      </span>
    </Link>
  );
}
