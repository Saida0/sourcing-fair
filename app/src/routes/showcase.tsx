import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { WhatsappButton } from "../components/whatsapp-button";
import { Reveal } from "../components/reveal";
import { MagneticButton } from "../components/cta/magnetic-button";
import { ThreadLink } from "../components/cta/thread-link";
import { PhotoPlaceholder } from "../components/photo-placeholder";
import { ProductCard } from "../components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "../components/ui/carousel";
import { productCategories } from "../lib/content";

export const Route = createFileRoute("/showcase")({
  head: () => ({
    meta: [
      { title: "Product Showcase | Sourcing Fair" },
      {
        name: "description",
        content:
          "An animated showcase of Sourcing Fair's RMG trims and accessories categories, from buttons and labels to zippers and packaging.",
      },
    ],
  }),
  component: Showcase,
});

const slides = productCategories.slice(0, 6);

function Showcase() {
  return (
    <div className="min-h-dvh bg-white">
      <Nav />
      <main className="pt-32">
        <section className="mx-auto max-w-[900px] px-6 text-center">
          <Reveal>
            <span className="font-spec text-xs uppercase tracking-[0.18em] text-sf-brass">
              Product showcase
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-sf-ink md:text-6xl">
              Twelve categories, one sliding view
            </h1>
            <p className="mx-auto mt-6 max-w-[56ch] text-base leading-relaxed text-sf-ink/65">
              Buttons, labels, zippers, tapes, and packaging, manufactured and sourced
              across Bangladesh and China. Swipe through the categories below or let
              the slider run on its own.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-8">
              <MagneticButton to="/contact">Request a Quote</MagneticButton>
              <ThreadLink to="/products">View all products</ThreadLink>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto mt-16 max-w-[1100px] px-6">
          <Reveal delay={0.15}>
            <SlideShow />
          </Reveal>
        </section>

        <section className="mx-auto max-w-[1240px] px-6 py-24">
          <Reveal>
            <h2 className="max-w-lg font-display text-3xl font-semibold tracking-tight text-sf-ink md:text-4xl">
              The full range
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, i) => (
              <Reveal key={category.slug} delay={i * 0.05}>
                <ProductCard category={category} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}

/**
 * Auto-advancing embla carousel: plays on an interval like a slideshow, but
 * any manual drag/arrow interaction pauses the timer so it never fights the
 * visitor (design-recipe.md interaction rule — user intent wins over autoplay).
 */
function SlideShow() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || paused) return;
    const id = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3200);
    return () => window.clearInterval(id);
  }, [api, paused]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={() => setPaused(true)}
    >
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((category) => (
            <CarouselItem key={category.slug}>
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                {category.image ? (
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-sf-paper">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <PhotoPlaceholder
                    label={`${category.name} photo pending`}
                    className="aspect-[4/3]"
                  />
                )}
                <div>
                  <span className="font-spec text-xs uppercase tracking-[0.18em] text-sf-brass">
                    {category.name}
                  </span>
                  <p className="mt-4 text-base leading-relaxed text-sf-ink/65">
                    {category.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {category.subcategories.slice(0, 4).map((sub) => (
                      <span
                        key={sub}
                        className="rounded-full bg-sf-paper px-2.5 py-1 font-spec text-[11px] text-sf-ink/55"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="mt-8 flex items-center justify-center gap-2">
        {slides.map((category, i) => (
          <button
            key={category.slug}
            type="button"
            aria-label={`Go to ${category.name} slide`}
            onClick={() => api?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === selected ? "w-6 bg-sf-navy" : "w-1.5 bg-sf-navy/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
