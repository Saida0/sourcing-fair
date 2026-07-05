import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { productCategories } from "../../lib/content";
import { ProductCard } from "../product-card";
import { Reveal } from "../reveal";

export function ProductsGrid() {
  return (
    <section className="bg-sf-paper py-24 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="font-spec text-xs uppercase tracking-[0.18em] text-sf-brass">
                Product categories
              </span>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight text-sf-ink md:text-4xl">
                Twelve categories of trims, one supplier
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-sf-navy"
            >
              View full catalog <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, i) => (
            <Reveal key={category.slug} delay={(i % 6) * 0.04}>
              <ProductCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
