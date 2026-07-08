import aboutBg from "../assets/factory.jpg";
import "./about-background.css";

/**
 * Decorative backdrop for the About page intro banner: an AI-generated
 * trims-factory interior (bright floor, weaving machines — client request,
 * 2026-07-06; swap for real factory photography when supplied) with a slow
 * "ken burns" drift and a scrim overlay so the dark navy heading/body text
 * stays readable no matter which part of the image sits behind it.
 *
 * USAGE CONSTRAINT — same as animated-background.tsx: mount as the FIRST
 * child of a `relative` section wrapper, no z-index on this component, and
 * give the sibling holding real content `relative z-10`. A negative
 * z-index here reproducibly fails to paint in this app (see
 * animated-background.tsx for the full writeup) — don't reintroduce one.
 */
export function AboutBackground() {
  return (
    <div
      aria-hidden="true"
      className="about-bg pointer-events-none absolute inset-0 overflow-hidden"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="about-bg__scrim absolute inset-0" />
    </div>
  );
}
