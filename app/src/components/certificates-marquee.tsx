import { certificates } from "../lib/content";
import { Reveal } from "./reveal";

/**
 * Sliding strip of the company's real certificate/registration scans
 * (client request, 2026-07-08 — modeled on the "We Are Recognized By"
 * slider pattern common on B2B supplier sites, but showing only documents
 * this company actually holds). Infinite CSS marquee: content is rendered
 * twice, the second copy aria-hidden, and the track loops at -50%. Hover
 * pauses it; reduced-motion renders a static wrapped row.
 */
export function CertificatesMarquee() {
  const cards = certificates.map((cert) => (
    <figure
      key={cert.name}
      className="mx-3 w-56 shrink-0 rounded-[14px] border border-sf-line bg-white p-4 shadow-[0_10px_30px_-18px_rgba(16,20,35,0.25)]"
    >
      <div className="h-56 overflow-hidden rounded-[8px] border border-sf-line bg-sf-paper">
        <img
          src={cert.image}
          alt={`${cert.name} — ${cert.issuer}`}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <figcaption className="mt-3">
        <p className="font-display text-sm font-semibold text-sf-ink">{cert.name}</p>
        <p className="mt-0.5 font-spec text-[11px] text-sf-ink/50">{cert.issuer}</p>
      </figcaption>
    </figure>
  ));

  return (
    <section className="border-y border-sf-line bg-sf-paper py-16 md:py-20">
      <div className="mx-auto max-w-[1240px] px-6">
        <Reveal>
          <div className="text-center">
            <span className="font-spec text-xs uppercase tracking-[0.18em] text-sf-brass">
              We are recognized by
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-sf-ink md:text-3xl">
              Registrations &amp; certifications
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-sf-navy/60" />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="marquee mt-10" style={{ ["--marquee-duration" as string]: "38s" }}>
          <div className="marquee__track">
            <div className="flex">{cards}</div>
            <div className="flex" data-marquee-copy aria-hidden="true">
              {cards}
            </div>
          </div>
        </div>
      </Reveal>

      <p className="mx-auto mt-8 max-w-[60ch] px-6 text-center text-xs leading-relaxed text-sf-ink/45">
        Certified copies and certificate numbers are shared directly with buyers
        during vendor qualification.
      </p>
    </section>
  );
}
