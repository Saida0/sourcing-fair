import {
  ShieldCheck,
  PenTool,
  BadgeDollarSign,
  Network,
  Factory,
  Timer,
  Globe2,
} from "lucide-react";

import {
  ButtonIcon,
  ZipperIcon,
  LabelIcon,
  TagIcon,
  BuckleIcon,
  DrawstringIcon,
} from "../icons/trim-icons";
import { strengths } from "../../lib/content";
import { Reveal } from "../reveal";
import "./why-us.css";

/* 4-col bento, 3 full rows with no holes:
   row 1-2 — featured 2×2 + four 1×1; row 3 — two 2-wide cards. */
const spans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-2",
];

/* One icon per strength, same order as lib/content.ts `strengths`. */
const strengthIcons = [ShieldCheck, PenTool, BadgeDollarSign, Network, Factory, Timer, Globe2];

/* Floating trim icons scattered behind the cards — the company's own
   products drifting like trims on a cutting table. Positions are viewport-
   relative; sizes/durations vary so nothing moves in lockstep. */
const floats = [
  { Icon: ButtonIcon, className: "left-[4%] top-[12%]", size: 72, duration: "16s", delay: "0s", tilt: "-8deg" },
  { Icon: ZipperIcon, className: "right-[6%] top-[8%]", size: 88, duration: "20s", delay: "-6s", tilt: "10deg" },
  { Icon: LabelIcon, className: "left-[12%] bottom-[10%]", size: 64, duration: "14s", delay: "-3s", tilt: "6deg" },
  { Icon: TagIcon, className: "right-[14%] bottom-[16%]", size: 56, duration: "18s", delay: "-9s", tilt: "-12deg" },
  { Icon: BuckleIcon, className: "left-[44%] top-[6%]", size: 48, duration: "15s", delay: "-4s", tilt: "8deg" },
  { Icon: DrawstringIcon, className: "right-[38%] bottom-[6%]", size: 60, duration: "22s", delay: "-11s", tilt: "-6deg" },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sf-paper to-white py-24 md:py-28">
      {/* Animated backdrop: aurora glows + floating trims. Decorative only. */}
      <div aria-hidden className="absolute inset-0">
        <div className="whyus-aurora whyus-aurora--navy" />
        <div className="whyus-aurora whyus-aurora--brass" />
        {floats.map(({ Icon, className, size, duration, delay, tilt }, i) => (
          <div
            key={i}
            className={`whyus-float ${className}`}
            style={{
              ["--bob-duration" as string]: duration,
              ["--bob-delay" as string]: delay,
              ["--bob-tilt" as string]: tilt,
            }}
          >
            <Icon width={size} height={size} />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-6">
        <Reveal>
          <span className="font-spec text-xs uppercase tracking-[0.18em] text-sf-brass">
            Why Sourcing Fair
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-sf-ink md:text-4xl">
            Built for buyers who cannot afford a missed shipment
          </h2>
          {/* Stitched thread rule — draws itself in like a seam. */}
          <svg
            aria-hidden
            className="mt-6 h-2 w-full max-w-md text-sf-brass/60"
            viewBox="0 0 448 8"
            fill="none"
          >
            <path className="whyus-stitch" d="M0 4 H448" stroke="currentColor" strokeWidth="2" />
          </svg>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[190px]">
          {strengths.map((item, i) => {
            const Icon = strengthIcons[i];
            return (
              <Reveal key={item.title} delay={i * 0.05} className={spans[i]}>
                <div className={`whyus-card ${i === 0 ? "whyus-card--featured" : ""}`}>
                  <div>
                    <div
                      className={`flex items-center justify-center rounded-full border ${
                        i === 0
                          ? "h-12 w-12 border-white/20 bg-white/10"
                          : "h-10 w-10 border-sf-navy/10 bg-sf-navy/5"
                      }`}
                    >
                      <Icon
                        size={i === 0 ? 22 : 18}
                        strokeWidth={1.7}
                        className={i === 0 ? "text-sf-brass-light" : "text-sf-brass"}
                      />
                    </div>
                    <h3
                      className={`font-display font-semibold ${
                        i === 0 ? "mt-5 text-2xl text-white" : "mt-3 text-base text-sf-ink"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      i === 0 ? "text-white/70" : "text-sf-ink/60"
                    }`}
                  >
                    {item.body}
                  </p>
                  <span
                    aria-hidden
                    className={`absolute right-5 top-5 font-spec text-[11px] tracking-wide ${
                      i === 0 ? "text-white/30" : "text-sf-ink/25"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
