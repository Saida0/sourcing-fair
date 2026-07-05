import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PhotoPlaceholder } from "../photo-placeholder";
import { Reveal } from "../reveal";

export function AboutSummary() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 md:py-28">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <PhotoPlaceholder label="Factory photo pending" className="col-span-2 aspect-[16/10]" />
            <PhotoPlaceholder label="Team photo pending" className="aspect-square" />
            <PhotoPlaceholder label="Product photo pending" className="aspect-square" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="font-spec text-xs uppercase tracking-[0.18em] text-sf-brass">
            About Sourcing Fair
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-sf-ink md:text-4xl">
            A trusted trims partner across Bangladesh and China
          </h2>
          <p className="mt-5 text-base leading-relaxed text-sf-ink/65">
            Sourcing Fair is a Bangladesh-based RMG trims and accessories manufacturer
            and supplier with a strong international presence in China. We deliver
            high-quality garment accessories that meet global fashion and apparel
            industry standards, with premium quality, competitive pricing, and
            on-time delivery for garment manufacturers, exporters, and fashion
            brands worldwide.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-sf-line pt-8">
            <div>
              <dt className="font-spec text-[11px] uppercase tracking-wide text-sf-ink/40">
                Founded
              </dt>
              <dd className="mt-1 font-display text-lg font-semibold text-sf-ink">10+ yrs ago</dd>
            </div>
            <div>
              <dt className="font-spec text-[11px] uppercase tracking-wide text-sf-ink/40">
                Head office
              </dt>
              <dd className="mt-1 font-display text-lg font-semibold text-sf-ink">Uttara, Dhaka</dd>
            </div>
            <div>
              <dt className="font-spec text-[11px] uppercase tracking-wide text-sf-ink/40">
                Network
              </dt>
              <dd className="mt-1 font-display text-lg font-semibold text-sf-ink">6 countries</dd>
            </div>
          </dl>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-sf-navy"
          >
            Read our full story <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
