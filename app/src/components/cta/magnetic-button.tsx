import { useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring } from "motion/react";

import { useReducedMotion } from "../../lib/use-reduced-motion";

/**
 * Hero primary CTA. The only pill-shaped surface on the page (design-brief.md
 * "Corner language"). Magnetic pull via useMotionValue/springs, never
 * useState, per design-recipe.md §6.
 */
export function MagneticButton({ to, children }: { to: string; children: ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.3 });
  const reduced = useReducedMotion();

  function handleMove(event: React.MouseEvent<HTMLAnchorElement>) {
    if (reduced) return;
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const relX = event.clientX - (bounds.left + bounds.width / 2);
    const relY = event.clientY - (bounds.top + bounds.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="inline-block"
      whileTap={{ scale: 0.96 }}
    >
      <Link
        ref={ref}
        to={to}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="inline-flex items-center gap-2 rounded-full bg-sf-brass px-8 py-4 font-display text-sm font-semibold text-sf-ink shadow-[0_12px_30px_-10px_rgba(185,138,46,0.6)] transition-shadow hover:shadow-[0_16px_36px_-8px_rgba(185,138,46,0.75)] motion-reduce:transition-none"
      >
        {children}
      </Link>
    </motion.div>
  );
}
