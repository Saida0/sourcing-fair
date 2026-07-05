import { presenceCountries } from "../../lib/content";
import { Reveal } from "../reveal";

export function Presence() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 md:py-28">
      <Reveal>
        <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-sf-ink md:text-4xl">
          A sourcing network across six countries
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-sf-ink/60">
          Head office in Dhaka, with an active supplier and buyer network across
          South and East Asia.
        </p>
      </Reveal>

      <div className="mt-10 divide-y divide-sf-line border-y border-sf-line">
        {presenceCountries.map((country, i) => (
          <Reveal key={country.name} delay={i * 0.04}>
            <div className="flex items-center justify-between gap-6 py-5">
              <span className="font-display text-lg font-medium text-sf-ink md:text-xl">
                {country.name}
              </span>
              <span className="font-spec text-xs text-sf-ink/45 md:text-sm">
                {country.role}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
