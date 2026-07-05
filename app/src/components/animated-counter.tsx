import { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "../lib/use-reduced-motion";

/**
 * Counts up on mount (not viewport-gated, so a headless screenshot always
 * shows a real number rather than a blank/zero state waiting on an
 * IntersectionObserver). Text-content animation only, no opacity involved.
 */
export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(value);
  const reduced = useReducedMotion();
  const started = useRef(false);

  useEffect(() => {
    if (reduced || started.current) return;
    started.current = true;
    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    setDisplay(0);
    requestAnimationFrame(tick);
  }, [reduced, value]);

  return (
    <span className="font-display tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
