import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { X, ArrowUpRight, ChevronRight } from "lucide-react";

import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { WhatsappButton } from "../components/whatsapp-button";
import { Reveal } from "../components/reveal";
import { PhotoPlaceholder } from "../components/photo-placeholder";
import { categoryIcons } from "../components/icons/trim-icons";
import { productCategories, type ProductCategory } from "../lib/content";
// Reuses the aurora/floating-trim backdrop classes defined for the home
// "Why us" band — same visual system, one source of truth for the keyframes.
import "../components/home/why-us.css";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | Sourcing Fair Trims & Accessories" },
      {
        name: "description",
        content:
          "Twelve categories of RMG trims and accessories: buttons, labels, elastic, zippers, twill tape, drawstring, belt & buckle, hang tags, PU patches, lace, poly, and carton.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sourcingfairbd.com/products" }],
  }),
  component: Products,
});

function Products() {
  const [open, setOpen] = useState(false);
  // Kept through the close transition so the panel doesn't blank out while
  // it fades — only replaced when a new category is opened.
  const [active, setActive] = useState<ProductCategory | null>(null);

  const openCategory = (category: ProductCategory) => {
    setActive(category);
    setOpen(true);
  };

  return (
    <div className="min-h-dvh bg-white">
      <Nav />
      <main className="pt-32">
        <section className="relative overflow-hidden pb-8">
          {/* Soft animated backdrop behind the intro (decorative only). */}
          <div aria-hidden className="absolute inset-0">
            <div className="whyus-aurora whyus-aurora--navy" />
            <div className="whyus-aurora whyus-aurora--brass" />
          </div>

          <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
            <Reveal>
              <span className="font-spec text-xs uppercase tracking-[0.18em] text-sf-brass">
                Full catalog
              </span>
              <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-sf-ink md:text-5xl">
                Twelve trims categories, ready to quote
              </h1>
              <p className="mx-auto mt-6 max-w-[58ch] text-base leading-relaxed text-sf-ink/65">
                Every category below is sourced and manufactured to export standard. Click any
                category to see every item we supply, then request a quote for exact MOQ, materials,
                and lead time against your own specification.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto mt-10 grid max-w-[1240px] grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, i) => {
            const Icon = categoryIcons[category.icon];
            return (
              <Reveal key={category.slug} delay={(i % 6) * 0.05}>
                <button
                  type="button"
                  id={category.slug}
                  onClick={() => openCategory(category)}
                  aria-haspopup="dialog"
                  className="group flex h-full w-full scroll-mt-28 flex-col overflow-hidden rounded-[14px] border border-sf-line bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-sf-navy/30 hover:shadow-[0_24px_48px_-28px_rgba(16,20,35,0.4)] motion-reduce:hover:translate-y-0"
                >
                  {category.image ? (
                    <div className="aspect-[16/9] w-full overflow-hidden bg-sf-paper">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <PhotoPlaceholder
                      label={`${category.name} photo pending`}
                      className="aspect-[16/9] w-full rounded-none border-x-0 border-t-0"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sf-navy/5 text-sf-navy transition-colors group-hover:bg-sf-navy/10">
                        {Icon ? <Icon width={20} height={20} /> : null}
                      </div>
                      <span className="font-spec text-[11px] uppercase tracking-wide text-sf-ink/40">
                        {category.subcategories.length} items
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-lg font-semibold text-sf-ink">
                      {category.name}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-sf-ink/60">
                      {category.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 font-display text-sm font-semibold text-sf-navy">
                      View all items
                      <ChevronRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </section>

        <section className="mx-auto max-w-[1240px] px-6 py-20 text-center">
          <p className="text-sm text-sf-ink/55">
            Not sure which category fits your product? Send us your tech pack and we will match it
            to the right trim.
          </p>
        </section>
      </main>
      <Footer />
      <WhatsappButton />

      <CategoryModal category={active} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

/**
 * Popup listing every item in a category (client request, 2026-07-06).
 * Plain CSS transitions on an always-mounted node (same pattern as the home
 * product-card panel — AnimatePresence exit animations reproducibly hang in
 * this app, leaving the backdrop stuck at full opacity, so we deliberately
 * avoid it here). Items stagger in via per-item transition delays. Backdrop
 * click and Escape both close; body scroll is locked while open.
 */
function CategoryModal({
  category,
  open,
  onClose,
}: {
  category: ProductCategory | null;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!category) return null;
  const Icon = categoryIcons[category.icon];

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      aria-label={`${category.name} items`}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-sf-ink/60 p-4 backdrop-blur-sm transition-opacity duration-300 md:p-8 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`flex max-h-[86dvh] w-full max-w-2xl flex-col overflow-hidden rounded-[20px] bg-white shadow-2xl transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-y-0 scale-100 opacity-100" : "translate-y-7 scale-95 opacity-0"
        }`}
      >
        {/* Photo header */}
        <div className="relative h-40 shrink-0 overflow-hidden bg-sf-paper md:h-52">
          {category.image ? (
            <img src={category.image} alt={category.name} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-sf-navy/30">
              {Icon ? <Icon width={56} height={56} /> : null}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-sf-ink/70 via-sf-ink/10 to-transparent" />
          <div className="absolute bottom-4 left-6 flex items-center gap-3">
            {Icon ? (
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                <Icon width={20} height={20} />
              </span>
            ) : null}
            <div>
              <h3 className="font-display text-xl font-semibold text-white">{category.name}</h3>
              <p className="font-spec text-[11px] uppercase tracking-wide text-white/70">
                {category.subcategories.length} items available
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
          >
            <X size={17} />
          </button>
        </div>

        {/* Item list */}
        <div className="flex-1 overflow-y-auto p-6">
          <p className="text-sm leading-relaxed text-sf-ink/60">{category.description}</p>
          <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {category.subcategories.map((sub, i) => (
              <li
                key={sub}
                style={{ transitionDelay: open ? `${150 + i * 45}ms` : "0ms" }}
                className={`flex items-center gap-2.5 rounded-[10px] border border-sf-line bg-sf-paper/60 px-3.5 py-2.5 transition-all duration-300 ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                }`}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sf-brass" aria-hidden />
                <span className="text-sm text-sf-ink/80">{sub}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="flex shrink-0 items-center justify-between gap-4 border-t border-sf-line px-6 py-4">
          <span className="hidden text-xs text-sf-ink/50 sm:block">
            Custom specs, materials, and MOQ on request.
          </span>
          <Link
            to="/contact"
            search={{ category: category.name }}
            className="inline-flex items-center gap-1.5 rounded-full bg-sf-navy px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-sf-navy-deep"
          >
            Request a Quote <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
