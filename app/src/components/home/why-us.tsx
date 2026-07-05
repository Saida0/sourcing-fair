import { strengths } from "../../lib/content";
import { Reveal } from "../reveal";

const spans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-4",
];

const tinted = new Set([0, 6]);

export function WhyUs() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 md:py-28">
      <Reveal>
        <span className="font-spec text-xs uppercase tracking-[0.18em] text-sf-brass">
          Why Sourcing Fair
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-sf-ink md:text-4xl">
          Built for buyers who cannot afford a missed shipment
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[168px]">
        {strengths.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05} className={spans[i]}>
            <div
              className={`flex h-full flex-col justify-between rounded-[14px] p-6 ${
                tinted.has(i)
                  ? "bg-sf-navy text-white"
                  : "border border-sf-line bg-white text-sf-ink"
              } ${i === 6 ? "md:flex-row md:items-center md:justify-between" : ""}`}
            >
              <h3
                className={`font-display font-semibold ${
                  i === 0 ? "text-2xl" : "text-base"
                } ${tinted.has(i) ? "text-white" : "text-sf-ink"}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  i === 6 ? "mt-2 md:mt-0 md:max-w-md" : "mt-2"
                } ${tinted.has(i) ? "text-white/70" : "text-sf-ink/60"}`}
              >
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
