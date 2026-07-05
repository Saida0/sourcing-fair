import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

import { MagneticButton } from "../cta/magnetic-button";
import { ThreadLink } from "../cta/thread-link";
import { HeroAssembly } from "./hero-assembly";
import { useReducedMotion } from "../../lib/use-reduced-motion";

/**
 * Tier-1 mechanic (design-brief.md "D3 — Kinetic type opener"): the headline
 * splits into characters that snap into alignment on mount, paired with the
 * HeroAssembly rig. Fires on load (not scroll-pinned) so the hero is fully
 * settled and readable in a headless screenshot, and so it never introduces
 * a pin-spacer blank band.
 */
export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !headlineRef.current) return;
    // "words, chars" (not just "chars") keeps each word glued into its own
    // wrapper so the browser only wraps between whole words, never mid-word.
    const split = new SplitType(headlineRef.current, { types: "words,chars" });
    gsap.fromTo(
      split.chars,
      { yPercent: 120, rotate: 6, opacity: 0 },
      {
        yPercent: 0,
        rotate: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.018,
        ease: "power4.out",
      },
    );
    return () => split.revert();
  }, [reduced]);

  return (
    <section className="relative flex min-h-[92dvh] items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/3 h-[420px] w-[420px] rounded-full bg-sf-navy/[0.04] blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-[320px] w-[320px] rounded-full bg-sf-brass/[0.07] blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="font-spec text-xs uppercase tracking-[0.18em] text-sf-brass">
            RMG Trims &amp; Accessories &middot; Uttara, Dhaka
          </span>
          <h1
            ref={headlineRef}
            className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-sf-ink md:text-6xl"
          >
            The trims behind the garments you export
          </h1>
          <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-sf-ink/65">
            Buttons, labels, zippers, tapes and tags manufactured and sourced across
            Bangladesh and China, backed by 10+ years supplying garment exporters
            worldwide.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-8">
            <MagneticButton to="/contact">Request a Quote</MagneticButton>
            <ThreadLink to="/products">View Products</ThreadLink>
          </div>
        </div>

        <HeroAssembly />
      </div>
    </section>
  );
}
