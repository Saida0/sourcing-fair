import { buyers } from "../../lib/content";
import { Reveal } from "../reveal";

/**
 * Buyer strip as an infinite sliding marquee (same mechanic as
 * certificates-marquee.tsx). Wordmarks stay typographic — we do not hold
 * image rights to reproduce these brands' logo artwork.
 */
export function TrustedBy() {
  const marks = buyers.map((name) => (
    <span
      key={name}
      className="mx-7 shrink-0 whitespace-nowrap font-display text-lg font-semibold tracking-tight text-sf-ink/40"
    >
      {name}
    </span>
  ));

  return (
    <section className="border-y border-sf-line bg-sf-paper py-14">
      <div className="mx-auto max-w-[1240px] px-6 text-center">
        <Reveal>
          <span className="font-spec text-xs uppercase tracking-[0.18em] text-sf-ink/45">
            Trusted by garment brands and buying houses worldwide
          </span>
        </Reveal>
      </div>
      <Reveal delay={0.08}>
        <div className="marquee mt-8" style={{ ["--marquee-duration" as string]: "32s" }}>
          <div className="marquee__track items-center">
            <div className="flex items-center">{marks}</div>
            <div className="flex items-center" data-marquee-copy aria-hidden="true">
              {marks}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
