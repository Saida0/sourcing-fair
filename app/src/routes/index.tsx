import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { WhatsappButton } from "../components/whatsapp-button";
import { Hero } from "../components/home/hero";
import { StatsBand } from "../components/home/stats-band";
import { AboutSummary } from "../components/home/about-summary";
import { WhyUs } from "../components/home/why-us";
import { ProductsGrid } from "../components/home/products-grid";
import { ProcessRail } from "../components/home/process-rail";
import { Presence } from "../components/home/presence";
import { TrustedBy } from "../components/home/trusted-by";
import { CertificatesMarquee } from "../components/certificates-marquee";
import { Quality } from "../components/home/quality";
import { CtaBanner } from "../components/home/cta-banner";
import { Faq } from "../components/home/faq";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-white">
      <Nav onDark />
      <main>
        <Hero />
        <StatsBand />
        <AboutSummary />
        <WhyUs />
        <ProductsGrid />
        <ProcessRail />
        <Presence />
        <TrustedBy />
        <Quality />
        <CertificatesMarquee />
        <CtaBanner />
        <Faq />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
