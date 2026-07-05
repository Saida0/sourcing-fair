import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react";

import { company, productCategories, navLinks } from "../lib/content";
import { submitInquiry } from "../lib/api/inquiries.functions";

export function Footer() {
  return (
    <footer className="border-t border-sf-line bg-sf-navy text-white">
      <div className="mx-auto max-w-[1240px] px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sf-brass font-display text-sm font-bold text-sf-ink">
                SF
              </span>
              <span className="font-display text-[15px] font-semibold text-white">
                Sourcing Fair
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              RMG trims &amp; accessories manufacturer and supplier, sourcing buttons,
              labels, zippers, tapes, tags, and packaging for garment exporters
              worldwide.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-sm text-white/70">
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail size={15} /> {company.email}
              </a>
              <a href={`tel:${company.phones[0].replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 hover:text-white">
                <Phone size={15} /> {company.phones[0]}
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" /> {company.address}
              </span>
            </div>
          </div>

          <FooterColumn
            title="Company"
            links={navLinks.map((l) => ({ label: l.label, to: l.to }))}
          />

          <FooterColumn
            title="Products"
            links={productCategories.slice(0, 6).map((c) => ({
              label: c.name,
              to: "/products",
              hash: c.slug,
            }))}
          />

          <div>
            <h4 className="font-spec text-[11px] uppercase tracking-wide text-white/45">
              Stay updated
            </h4>
            <p className="mt-3 text-sm text-white/60">
              Occasional notes on new trims and capacity, no spam.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Sourcing Fair. All rights reserved.</p>
          <p className="font-spec">Uttara, Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string; hash?: string }[];
}) {
  return (
    <div>
      <h4 className="font-spec text-[11px] uppercase tracking-wide text-white/45">{title}</h4>
      <ul className="mt-3 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              hash={link.hash}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NewsletterForm() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email) return;
    setState("loading");
    try {
      await submitInquiry({
        data: { kind: "newsletter", name: "Newsletter signup", email },
      });
      setState("done");
      setEmail("");
    } catch {
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <p className="mt-4 flex items-center gap-2 font-spec text-xs text-sf-brass-light">
        <Check size={14} /> You are on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        aria-label="Email address"
        className="h-10 w-full min-w-0 rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-sf-brass focus:outline-none"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        aria-label="Subscribe"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sf-brass text-sf-ink transition-transform hover:scale-105 disabled:opacity-60"
      >
        <ArrowRight size={16} />
      </button>
    </form>
  );
}
