import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { WhatsappButton } from "../components/whatsapp-button";
import { Reveal } from "../components/reveal";
import { categoryIcons } from "../components/icons/trim-icons";
import { productCategories } from "../lib/content";

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
  return (
    <div className="min-h-dvh bg-white">
      <Nav />
      <main className="pt-32">
        <section className="mx-auto max-w-[900px] px-6 text-center">
          <Reveal>
            <span className="font-spec text-xs uppercase tracking-[0.18em] text-sf-brass">
              Full catalog
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-sf-ink md:text-5xl">
              Twelve trims categories, ready to quote
            </h1>
            <p className="mx-auto mt-6 max-w-[58ch] text-base leading-relaxed text-sf-ink/65">
              Every category below is sourced and manufactured to export standard.
              Request a quote for exact MOQ, materials, and lead time against your
              own specification.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto mt-16 max-w-[1240px] divide-y divide-sf-line border-y border-sf-line px-6">
          {productCategories.map((category, i) => {
            const Icon = categoryIcons[category.icon];
            return (
              <div key={category.slug} id={category.slug} className="scroll-mt-28 py-10">
                <Reveal delay={(i % 4) * 0.05}>
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sf-navy/5 text-sf-navy">
                        {Icon ? <Icon width={28} height={28} /> : null}
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-semibold text-sf-ink md:text-2xl">
                          {category.name}
                        </h2>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-sf-ink/60">
                          {category.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {category.subcategories.map((sub) => (
                            <span
                              key={sub}
                              className="rounded-full bg-sf-paper px-3 py-1 font-spec text-[11px] text-sf-ink/55"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      search={{ category: category.name }}
                      className="shrink-0 self-start rounded-full border border-sf-navy/25 px-5 py-2.5 font-display text-sm font-semibold text-sf-navy transition-colors hover:bg-sf-navy hover:text-white md:self-center"
                    >
                      Request a Quote
                    </Link>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </section>

        <section className="mx-auto max-w-[1240px] px-6 py-20 text-center">
          <p className="text-sm text-sf-ink/55">
            Not sure which category fits your product? Send us your tech pack and
            we will match it to the right trim.
          </p>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
