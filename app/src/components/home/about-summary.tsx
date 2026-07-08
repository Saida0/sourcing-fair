import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import factoryPhoto from "../../assets/factory.jpg";
import buttonsPhoto from "../../assets/products/buttons.jpg";
import elasticPhoto from "../../assets/products/elastic.jpg";
import { Reveal } from "../reveal";
import { useReducedMotion } from "../../lib/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * About visual: an animated image collage. Each frame runs a slow Ken Burns
 * drift (scale + pan on the inner <img>, CSS keyframes so it costs nothing
 * on the main thread) and the two small tiles counter-drift vertically
 * against scroll via a scrubbed ScrollTrigger, giving the collage depth.
 * Both effects are disabled under prefers-reduced-motion; the images just
 * render static.
 */
export function AboutSummary() {
  const collageRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !collageRef.current) return;

    const ctx = gsap.context(() => {
      // Counter-drift: left tile eases up, right tile eases down while the
      // collage crosses the viewport. Scrubbed, so it tracks scroll exactly.
      gsap.fromTo(
        "[data-drift='up']",
        { y: 24 },
        {
          y: -24,
          ease: "none",
          scrollTrigger: {
            trigger: collageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        },
      );
      gsap.fromTo(
        "[data-drift='down']",
        { y: -24 },
        {
          y: 24,
          ease: "none",
          scrollTrigger: {
            trigger: collageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        },
      );
    }, collageRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 md:py-28">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div ref={collageRef} className="grid grid-cols-2 gap-4">
            <KenBurnsFrame
              src={factoryPhoto}
              alt="Trims production floor with industrial weaving machines"
              className="col-span-2 aspect-[16/10]"
              animate={!reduced}
            />
            <div data-drift="up">
              <KenBurnsFrame
                src={buttonsPhoto}
                alt="Assorted garment buttons"
                className="aspect-square"
                animate={!reduced}
                reverse
              />
            </div>
            <div data-drift="down">
              <KenBurnsFrame
                src={elasticPhoto}
                alt="Rolls of woven elastic bands"
                className="aspect-square"
                animate={!reduced}
              />
            </div>
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

/**
 * Image frame with a slow Ken Burns drift. Pure CSS animation (see
 * styles.css `.kenburns` / `.kenburns-reverse`) — scale/translate on the
 * compositor, no JS per frame. `reverse` alternates the pan direction so
 * adjacent tiles don't move in lockstep.
 */
function KenBurnsFrame({
  src,
  alt,
  className = "",
  animate,
  reverse = false,
}: {
  src: string;
  alt: string;
  className?: string;
  animate: boolean;
  reverse?: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-[14px] bg-sf-paper ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${
          animate ? (reverse ? "kenburns-reverse" : "kenburns") : ""
        }`}
      />
    </div>
  );
}
