import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, ChevronRight, ArrowUpRight } from "lucide-react";

import { categoryIcons } from "./icons/trim-icons";
import { PhotoPlaceholder } from "./photo-placeholder";
import type { ProductCategory } from "../lib/content";

/**
 * Product category card. Clicking the card slides a navy menu panel up over
 * it listing EVERY item in the category (client request, 2026-07-06), with
 * links out to the full catalog and the quote form. The panel is plain
 * CSS-transitioned (translate/opacity) so it needs no scroll library and
 * stays screenshot-safe when closed.
 */
export function ProductCard({ category }: { category: ProductCategory }) {
  const [open, setOpen] = useState(false);
  const Icon = categoryIcons[category.icon];

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[14px] border border-sf-line bg-white transition-all hover:border-sf-navy/30 hover:shadow-[0_20px_40px_-24px_rgba(16,20,35,0.35)]">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-label={`Show all ${category.name} items`}
        className="flex h-full flex-col text-left"
      >
        {category.image ? (
          <div className="aspect-[16/10] w-full overflow-hidden bg-sf-paper">
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        ) : (
          <PhotoPlaceholder
            label={`${category.name} photo pending`}
            className="aspect-[16/10] w-full rounded-none border-x-0 border-t-0"
          />
        )}

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sf-navy/5 text-sf-navy transition-colors group-hover:bg-sf-navy/10">
              {Icon ? <Icon width={22} height={22} /> : null}
            </div>
            <span className="font-spec text-[11px] uppercase tracking-wide text-sf-ink/40">
              {category.subcategories.length} items
            </span>
          </div>
          <h3 className="mt-5 font-display text-lg font-semibold text-sf-ink">{category.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-sf-ink/60">{category.description}</p>

          <span className="mt-4 inline-flex items-center gap-1 font-display text-sm font-semibold text-sf-navy">
            View all items
            <ChevronRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </button>

      {/* Slide-up item menu */}
      <div
        aria-hidden={!open}
        className={`absolute inset-0 flex flex-col bg-gradient-to-b from-sf-navy to-sf-navy-deep p-6 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {Icon ? <Icon width={20} height={20} className="text-sf-brass-light" /> : null}
            <h4 className="font-display text-base font-semibold text-white">{category.name}</h4>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close item menu"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={15} />
          </button>
        </div>

        <ul className="mt-4 flex-1 overflow-y-auto">
          {category.subcategories.map((sub) => (
            <li
              key={sub}
              className="flex items-center gap-2.5 border-b border-white/10 py-2 last:border-b-0"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sf-brass-light" aria-hidden />
              <span className="text-sm text-white/85">{sub}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center gap-5 border-t border-white/15 pt-4">
          <Link
            to="/products"
            hash={category.slug}
            className="inline-flex items-center gap-1 font-display text-sm font-semibold text-white"
          >
            Full catalog <ArrowUpRight size={14} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 font-display text-sm font-semibold text-sf-brass-light"
          >
            Request a quote <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
