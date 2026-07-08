import { createFileRoute } from "@tanstack/react-router";
import { Target, Compass, Download } from "lucide-react";

import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { WhatsappButton } from "../components/whatsapp-button";
import { Reveal } from "../components/reveal";
import { AboutBackground } from "../components/about-background";
import labelsPhoto from "../assets/products/labels.jpg";
import buttonsPhoto from "../assets/products/buttons.jpg";
import twillTapePhoto from "../assets/products/twill-tape.jpg";
import lacePhoto from "../assets/products/lace.jpg";
import { values, presenceCountries, leadership } from "../lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Sourcing Fair" },
      {
        name: "description",
        content:
          "Sourcing Fair is a Bangladesh-based RMG trims and accessories manufacturer and supplier with a growing international presence across Asia.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sourcingfairbd.com/about" }],
  }),
  component: About,
});

const milestones = [
  {
    title: "A Dhaka sourcing desk",
    body: "Sourcing Fair began in Uttara, Dhaka as a focused garment trims and accessories supplier.",
  },
  {
    title: "A cross-border network",
    body: "Sourcing relationships extended into China, Hong Kong, Sri Lanka, India, and Indonesia.",
  },
  {
    title: "A 30+ member team",
    body: "Growth into a dedicated team covering sourcing, sampling, quality, and buyer support.",
  },
  {
    title: "520+ customers served",
    body: "A decade of order-after-order relationships with exporters and fashion brands worldwide.",
  },
];

function About() {
  return (
    <div className="min-h-dvh bg-sf-paper">
      <Nav />
      <main className="pt-32">
        <section className="relative overflow-hidden py-20 sm:py-28">
          <AboutBackground />
          <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
            <Reveal>
              <span className="font-spec text-xs uppercase tracking-[0.18em] text-sf-brass">
                About us
              </span>
              <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-sf-ink md:text-5xl">
                A trusted RMG trims partner, built over 10+ years
              </h1>
              <p className="mx-auto mt-6 max-w-[62ch] text-base leading-relaxed text-sf-ink/65">
                Sourcing Fair is a Bangladesh-based RMG trims and accessories manufacturer
                and supplier with a strong international presence in China. We specialize
                in delivering high-quality garment accessories that meet global fashion
                and apparel industry standards, with premium quality, competitive
                pricing, and on-time delivery for garment manufacturers, exporters, and
                fashion brands worldwide.
              </p>
              <a
                href="/Sourcing-Fair-Company-Profile.pdf"
                download
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-sf-navy/25 px-6 py-3 font-display text-sm font-semibold text-sf-navy transition-colors hover:bg-sf-navy hover:text-white"
              >
                <Download size={16} /> Download Company Profile (PDF)
              </a>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto mt-16 grid max-w-[1240px] grid-cols-2 gap-4 px-6 md:grid-cols-4">
          <div className="col-span-2 aspect-video overflow-hidden rounded-[14px] bg-sf-paper md:col-span-1">
            <img src={buttonsPhoto} alt="Assorted garment buttons" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-video overflow-hidden rounded-[14px] bg-sf-paper">
            <img src={twillTapePhoto} alt="Rolls of cotton twill tape" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-video overflow-hidden rounded-[14px] bg-sf-paper">
            <img src={labelsPhoto} alt="Woven labels product sample" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-video overflow-hidden rounded-[14px] bg-sf-paper">
            <img src={lacePhoto} alt="Cotton lace trims" className="h-full w-full object-cover" />
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-6 py-24">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[14px] border border-sf-line bg-white p-8">
                <Compass className="h-6 w-6 text-sf-brass" strokeWidth={1.7} />
                <h2 className="mt-4 font-display text-xl font-semibold text-sf-ink">Vision</h2>
                <p className="mt-3 text-sm leading-relaxed text-sf-ink/65">
                  To build a strong international sourcing bridge between Bangladesh,
                  China, and global fashion markets through trust, quality, and
                  service excellence, becoming a globally trusted sourcing partner in
                  the RMG trims and accessories industry.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-[14px] border border-sf-line bg-white p-8">
                <Target className="h-6 w-6 text-sf-brass" strokeWidth={1.7} />
                <h2 className="mt-4 font-display text-xl font-semibold text-sf-ink">Mission</h2>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-sf-ink/65">
                  <li>Provide high-quality garment trims and accessories at competitive prices.</li>
                  <li>Ensure on-time delivery and consistent supply chain efficiency.</li>
                  <li>Build long-term relationships with global buyers and manufacturers.</li>
                  <li>Maintain strict quality control and ethical business practices.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-6 pb-24">
          <Reveal>
            <h2 className="max-w-lg font-display text-3xl font-semibold tracking-tight text-sf-ink md:text-4xl">
              Leadership
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.08}>
                <div className="h-full rounded-[14px] border border-sf-line bg-white p-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sf-navy font-display text-sm font-bold text-white">
                    {person.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-sf-ink">
                    {person.name}
                  </h3>
                  <p className="mt-1 font-spec text-xs uppercase tracking-wide text-sf-brass">
                    {person.title}
                  </p>
                  <p className="mt-1 text-xs text-sf-ink/45">{person.credential}</p>
                  <p className="mt-4 text-sm leading-relaxed text-sf-ink/65">
                    &ldquo;{person.quote}&rdquo;
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-sf-paper py-24">
          <div className="mx-auto max-w-[1240px] px-6">
            <Reveal>
              <h2 className="max-w-lg font-display text-3xl font-semibold tracking-tight text-sf-ink md:text-4xl">
                What we hold ourselves to
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, i) => (
                <Reveal key={value.title} delay={i * 0.06}>
                  <div className="h-full rounded-[14px] border border-sf-line bg-white p-6">
                    <span className="font-spec text-xs text-sf-brass">0{i + 1}</span>
                    <h3 className="mt-3 font-display text-base font-semibold text-sf-ink">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-sf-ink/60">{value.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-6 py-24">
          <Reveal>
            <h2 className="max-w-lg font-display text-3xl font-semibold tracking-tight text-sf-ink md:text-4xl">
              Our growth, in real terms
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-0 md:grid-cols-4">
            {milestones.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="border-t-2 border-sf-navy py-5 pr-6 md:min-h-[168px]">
                  <span className="font-spec text-xs text-sf-ink/40">
                    Step {i + 1} of {milestones.length}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold text-sf-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sf-ink/60">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-sf-navy py-24">
          <div className="mx-auto max-w-[1240px] px-6">
            <Reveal>
              <h2 className="max-w-lg font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                International presence
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
              {presenceCountries.map((country, i) => (
                <Reveal key={country.name} delay={i * 0.05}>
                  <div className="h-full rounded-[14px] border border-white/12 bg-white/[0.04] p-6">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {country.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-white/55">{country.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
