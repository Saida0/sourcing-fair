import type { ReactNode } from "react";
import { motion, useReducedMotion as useMotionReducedMotion } from "motion/react";

/**
 * Entrance reveal. Fires ON MOUNT, never viewport/IntersectionObserver-gated
 * (review-rubric.md §A9b "screenshot-safe reveals") — every section is fully
 * visible in a headless full-page screenshot taken immediately after load.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useMotionReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
