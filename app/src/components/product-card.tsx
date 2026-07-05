import { Link } from "@tanstack/react-router";

import { categoryIcons } from "./icons/trim-icons";
import type { ProductCategory } from "../lib/content";

/**
 * Product category card. CTA identity: a swatch flip — the bottom-right
 * corner peels like a fabric swatch on hover/focus to reveal "View category",
 * a literal reference to this company's own material world.
 */
export function ProductCard({ category }: { category: ProductCategory }) {
  const Icon = categoryIcons[category.icon];

  return (
    <Link
      to="/products"
      hash={category.slug}
      className="group relative flex h-full flex-col overflow-hidden rounded-[14px] border border-sf-line bg-white p-6 transition-colors hover:border-sf-navy/30"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sf-navy/5 text-sf-navy transition-colors group-hover:bg-sf-navy/10">
        {Icon ? <Icon width={22} height={22} /> : null}
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-sf-ink">{category.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-sf-ink/60">{category.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {category.subcategories.slice(0, 3).map((sub) => (
          <span
            key={sub}
            className="rounded-full bg-sf-paper px-2.5 py-1 font-spec text-[11px] text-sf-ink/55"
          >
            {sub}
          </span>
        ))}
      </div>

      {/* Swatch-flip corner CTA */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-14 w-14 origin-bottom-right [transform:rotate(0deg)] transition-transform duration-300 ease-out group-hover:[transform:rotate(-18deg)_translate(2px,-2px)] motion-reduce:hidden"
        style={{
          background: "linear-gradient(135deg, transparent 50%, #1e4686 50.5%)",
        }}
      />
      <span className="absolute bottom-3 right-3 translate-y-1 font-spec text-[10px] uppercase tracking-wide text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:hidden">
        View
      </span>
    </Link>
  );
}
