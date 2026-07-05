import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { processSteps } from "../../lib/content";
import { useReducedMotion } from "../../lib/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Horizontal scroll-scrubbed rail (desktop, md+) — a genuine scroll-driven
 * interaction rather than a passive loop. Degrades to a normal horizontally
 * swipeable row on mobile/reduced-motion (no pin), per wow-catalog.md's
 * mobile-degradation contract.
 */
export function ProcessRail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current!;
        const distance = track.scrollWidth - track.clientWidth;
        if (distance <= 0) return;

        const trigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.5}`,
          pin: true,
          scrub: 0.6,
          animation: gsap.to(track, { x: -distance, ease: "none" }),
        });

        return () => trigger.kill();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-sf-navy py-24 md:py-0 md:h-dvh">
      <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center px-6">
        <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Six steps from spec sheet to shipment
        </h2>

        <div
          ref={trackRef}
          className="mt-10 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] md:mt-14 md:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="w-[78vw] shrink-0 rounded-[14px] border border-white/12 bg-white/[0.04] p-7 sm:w-[340px]"
            >
              <span className="font-spec text-3xl text-sf-brass">{item.step}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
