import { stats } from "../../lib/content";
import { AnimatedCounter } from "../animated-counter";
import { Reveal } from "../reveal";

export function StatsBand() {
  return (
    <section className="border-y border-sf-line bg-sf-paper">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="text-3xl font-semibold text-sf-navy md:text-4xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-1.5 text-sm text-sf-ink/55">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
