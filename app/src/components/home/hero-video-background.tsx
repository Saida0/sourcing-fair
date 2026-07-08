import { useEffect, useRef } from "react";

import { useReducedMotion } from "../../lib/use-reduced-motion";

/**
 * Real cinematic product render (button assembling into its layers — top
 * surface, colour layer, base material, reinforcement ring) used as the hero
 * backdrop, in place of the coded aurora/particle rig. Playback is started
 * imperatively in an effect (not via the `autoPlay` attribute) so the SSR
 * markup and first client render stay identical and `prefers-reduced-motion`
 * can be honoured without a hydration mismatch.
 *
 * USAGE CONSTRAINT — same as animated-background.tsx: mount as the first
 * child of a `position: relative` section and give the sibling holding real
 * content its own `relative z-10` stacking context. This component itself
 * stays position: absolute + no z-index.
 */
export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduced) {
      video.pause();
      return;
    }
    video.play().catch(() => {
      // Autoplay can be rejected by the browser before user interaction;
      // the poster frame still reads fine as a static hero image.
    });
  }, [reduced]);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-sf-ink">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/hero-button-assembly-poster.jpg"
        className="h-full w-full object-cover"
      >
        <source src="/assets/hero-button-assembly.mp4" type="video/mp4" />
      </video>

      {/* Scrim: darkest over the copy (left), lighter over the product
          render (right) so the white headline stays legible against the
          video's pale studio background. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(16,20,35,0.94) 0%, rgba(16,20,35,0.86) 30%, rgba(18,48,95,0.72) 55%, rgba(18,48,95,0.4) 78%, rgba(18,48,95,0.22) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-sf-ink/70 via-transparent to-sf-ink/10" />
    </div>
  );
}
