import { createFileRoute } from "@tanstack/react-router";

import { AnimatedBackground } from "../components/animated-background";

// Temporary, unlinked preview route — not part of the site, just for
// reviewing the animated background in isolation before deciding where (if
// anywhere) to wire it into real pages. Safe to delete at any time.
export const Route = createFileRoute("/bg-preview")({
  component: BgPreview,
});

function BgPreview() {
  return (
    <div className="relative min-h-dvh">
      <AnimatedBackground />
      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center text-white">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
          Preview only
        </span>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Animated Background Preview
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-white/60">
          This route is not linked anywhere and is not part of the live site.
          Move your mouse around to see the parallax effect.
        </p>
      </div>
    </div>
  );
}
