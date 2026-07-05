import { StampButton } from "../cta/stamp-button";
import { Reveal } from "../reveal";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[20px] bg-sf-navy px-8 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-sf-brass/10 blur-3xl" />
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Tell us what your production line needs
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/65">
            Share your product, quantity, and target date. We reply with a real
            quote, not a generic brochure.
          </p>
          <div className="mt-9 flex justify-center">
            <StampButton to="/contact">Request a Quote</StampButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
