import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { faqs } from "../../lib/content";
import { Reveal } from "../reveal";

export function Faq() {
  return (
    <section className="mx-auto max-w-[820px] px-6 py-24 md:py-28">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-sf-ink md:text-4xl">
          Frequently asked questions
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="border-sf-line">
              <AccordionTrigger className="font-display text-base font-medium text-sf-ink hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-sf-ink/60">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
