import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, ClipboardCheck, Recycle, FileCheck2, Scale, Users } from "lucide-react";

import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { WhatsappButton } from "../components/whatsapp-button";
import { Reveal } from "../components/reveal";
import { StampButton } from "../components/cta/stamp-button";
import { CertificatesMarquee } from "../components/certificates-marquee";
import { businessRegistrations, factoryCertification } from "../lib/content";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Quality & Compliance | Sourcing Fair" },
      {
        name: "description",
        content:
          "How Sourcing Fair controls quality, sourcing, and compliance across its Bangladesh and China trims supply network.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sourcingfairbd.com/certifications" }],
  }),
  component: Certifications,
});

const commitments = [
  {
    icon: ShieldCheck,
    title: "Multi-stage inspection",
    body: "Raw material, in-process, and pre-shipment inspection on every order, checked against the buyer's own approved sample.",
  },
  {
    icon: ClipboardCheck,
    title: "Spec-matched sampling",
    body: "Bulk production is confirmed only after a physical sample is approved against the tech pack.",
  },
  {
    icon: Scale,
    title: "Ethical business practice",
    body: "Transparent pricing, honest lead times, and no substitution of materials without buyer sign-off.",
  },
  {
    icon: Users,
    title: "Vetted factory partners",
    body: "Production is placed only with factory partners we have a direct, ongoing working relationship with.",
  },
  {
    icon: Recycle,
    title: "Consistent supply chain",
    body: "A dual-country network across Bangladesh and China built for continuity, not one-off sourcing runs.",
  },
  {
    icon: FileCheck2,
    title: "Documentation on request",
    body: "Business registration and applicable compliance documents are shared directly with buyers during vendor qualification.",
  },
];

function Certifications() {
  return (
    <div className="min-h-dvh bg-white">
      <Nav />
      <main className="pt-32">
        <section className="mx-auto max-w-[900px] px-6 text-center">
          <Reveal>
            <span className="font-spec text-xs uppercase tracking-[0.18em] text-sf-brass">
              Quality &amp; compliance
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-sf-ink md:text-5xl">
              How we control quality, honestly
            </h1>
            <p className="mx-auto mt-6 max-w-[58ch] text-base leading-relaxed text-sf-ink/65">
              We would rather show you our process than a wall of badges. Here is
              what happens to every order before it reaches your production line,
              and how to get our compliance documentation directly.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto mt-16 max-w-[1240px] px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.07}>
                <div className="h-full rounded-[14px] border border-sf-line bg-white p-7">
                  <item.icon className="h-5 w-5 text-sf-brass" strokeWidth={1.7} />
                  <h2 className="mt-4 font-display text-base font-semibold text-sf-ink">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-sf-ink/60">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-[1240px] px-6">
          <Reveal>
            <h2 className="max-w-lg font-display text-3xl font-semibold tracking-tight text-sf-ink md:text-4xl">
              Registered &amp; compliant
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="h-full rounded-[14px] border border-sf-line bg-white p-7">
                <h3 className="font-display text-base font-semibold text-sf-ink">
                  Business registration
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-sf-ink/65">
                  {businessRegistrations.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-sf-brass" strokeWidth={1.7} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-[14px] border border-sf-line bg-white p-7">
                <h3 className="font-display text-base font-semibold text-sf-ink">
                  Factory partner certification
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-sf-ink/65">
                  <span className="font-semibold text-sf-ink">{factoryCertification.factory}</span>,
                  one of our button manufacturing partners, holds{" "}
                  <span className="font-semibold text-sf-ink">{factoryCertification.standard}</span>{" "}
                  certification.
                </p>
                <p className="mt-2 text-xs text-sf-ink/45">{factoryCertification.scope}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="mt-24">
          <CertificatesMarquee />
        </div>

        <section className="mx-auto mt-16 max-w-[1240px] px-6 pb-24">
          <Reveal>
            <div className="rounded-[20px] border border-sf-line bg-sf-paper px-8 py-14 text-center md:px-16">
              <h2 className="mx-auto max-w-xl font-display text-2xl font-semibold tracking-tight text-sf-ink md:text-3xl">
                Qualifying us as a vendor? Ask for our documentation directly.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm text-sf-ink/60">
                Business registration, factory addresses, and any compliance
                paperwork your buying team requires, sent on request.
              </p>
              <div className="mt-8 flex justify-center">
                <StampButton to="/contact">Request Documentation</StampButton>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
