import { ShieldCheck, ClipboardCheck, Recycle, FileCheck2 } from "lucide-react";

import { Reveal } from "../reveal";

const commitments = [
  {
    icon: ShieldCheck,
    title: "Inspection at every stage",
    body: "Raw material, in-process, and pre-shipment inspection built into the production plan, not bolted on at the end.",
  },
  {
    icon: ClipboardCheck,
    title: "Spec-matched sampling",
    body: "Every sample is checked against the buyer's own tech pack before bulk production is confirmed.",
  },
  {
    icon: Recycle,
    title: "Responsible sourcing",
    body: "Factory partners selected for fair labor practice and consistent output, in Bangladesh and China alike.",
  },
  {
    icon: FileCheck2,
    title: "Documentation on request",
    body: "Compliance and certification documents are shared directly with buyers during qualification, on request.",
  },
];

export function Quality() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 md:py-28">
      <Reveal>
        <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-sf-ink md:text-4xl">
          Quality commitments we hold ourselves to
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {commitments.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="flex h-full gap-4 rounded-[14px] border border-sf-line bg-white p-6">
              <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-sf-brass" strokeWidth={1.7} />
              <div>
                <h3 className="font-display text-base font-semibold text-sf-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-sf-ink/60">{item.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
