import { Link } from "@tanstack/react-router";

/**
 * CTA banner button. Interaction identity: a stamp/press — :active skews and
 * shifts like a hang-tag stamp being pressed down, distinct from the hero's
 * magnetic pill and the product card's swatch flip.
 */
export function StampButton({ to, children }: { to: string; children: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-3 rounded-[14px] border-2 border-white bg-white px-9 py-4 font-display text-base font-semibold text-sf-navy transition-transform duration-150 ease-out active:scale-[0.97] active:[transform:skew(-1deg,0.4deg)_scale(0.97)] motion-reduce:active:transform-none"
    >
      {children}
      <span aria-hidden className="text-sf-brass">
        &#8594;
      </span>
    </Link>
  );
}
