import { Link } from "@tanstack/react-router";

/**
 * Hero secondary CTA. A stitched thread-path draws in under the label on
 * hover/focus (pure CSS stroke-dashoffset transition) — ties to the trims
 * material world instead of a generic underline.
 */
export function ThreadLink({
  to,
  children,
  dark = false,
}: {
  to: string;
  children: string;
  /** Use on dark backgrounds (e.g. the animated hero) instead of the default light-page colors. */
  dark?: boolean;
}) {
  return (
    <Link to={to} className="group inline-flex flex-col items-start gap-1.5">
      <span
        className={`font-display text-sm font-semibold ${dark ? "text-white" : "text-sf-ink"}`}
      >
        {children}
      </span>
      <svg
        width="120"
        height="10"
        viewBox="0 0 120 10"
        fill="none"
        className={dark ? "text-white/70" : "text-sf-navy"}
        aria-hidden
      >
        <path
          d="M1 5c10-6 20 6 30 0s20-6 30 0 20 6 30 0 20-6 27 0"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1 1"
          className="[stroke-dashoffset:1] transition-[stroke-dashoffset] duration-500 ease-out group-hover:[stroke-dashoffset:0] group-focus-visible:[stroke-dashoffset:0] motion-reduce:[stroke-dashoffset:0]"
        />
        <path
          d="M104 1l7 4-7 4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:opacity-100"
        />
      </svg>
    </Link>
  );
}
