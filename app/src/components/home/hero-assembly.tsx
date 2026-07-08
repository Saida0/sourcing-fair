import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ButtonIcon, ZipperIcon, LabelIcon, TagIcon } from "../icons/trim-icons";
import buttonsSq from "../../assets/hero-tiles/buttons-sq.jpg";
import zippersSq from "../../assets/hero-tiles/zippers-sq.jpg";
import labelsSq from "../../assets/hero-tiles/labels-sq.jpg";
import tagsSq from "../../assets/hero-tiles/tags-sq.jpg";
import { useReducedMotion } from "../../lib/use-reduced-motion";

/**
 * The hero's signature visual: four of the company's own trims (real AI-
 * generated product photography, one per category tag) fly in and lock into
 * an assembled grid on mount, enacting the "precision assembly" concept
 * spine (design-brief.md). Fires on mount, not scroll-gated, so a headless
 * screenshot always shows the settled state.
 */
const tiles = [
  { src: buttonsSq, alt: "Assorted garment buttons", Icon: ButtonIcon, label: "Buttons" },
  { src: zippersSq, alt: "Metal and nylon zippers", Icon: ZipperIcon, label: "Zippers" },
  { src: labelsSq, alt: "Woven garment labels", Icon: LabelIcon, label: "Labels" },
  { src: tagsSq, alt: "Kraft hang tags", Icon: TagIcon, label: "Tags" },
];

export function HeroAssembly() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !rootRef.current) return;
    const pieces = rootRef.current.querySelectorAll<HTMLElement>("[data-piece]");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    pieces.forEach((piece, i) => {
      const offsetX = [-36, 30, -22, 34][i % 4];
      const offsetY = [-24, 18, 30, -16][i % 4];
      const rotate = [-14, 10, -8, 12][i % 4];
      gsap.set(piece, { x: offsetX, y: offsetY, rotate, opacity: 0.001 });
      tl.to(
        piece,
        { x: 0, y: 0, rotate: 0, opacity: 1, duration: 0.9, ease: "back.out(1.4)" },
        0.25 + i * 0.12,
      );
    });

    return () => {
      tl.kill();
    };
  }, [reduced]);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto grid aspect-square w-full min-w-0 max-w-[420px] grid-cols-2 gap-5 rounded-[24px] border border-sf-line bg-white p-8 shadow-[0_30px_60px_-30px_rgba(16,20,35,0.18)]"
    >
      <div
        className="absolute inset-5 rounded-[16px] border border-dashed border-sf-navy/15"
        aria-hidden
      />
      {tiles.map(({ src, alt, Icon, label }) => (
        <div
          key={label}
          data-piece
          className="group relative overflow-hidden rounded-[14px] bg-sf-paper"
        >
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
          />
          {/* Spec chip: icon + category name, pinned to the tile's foot like
              a swatch label. */}
          <div className="absolute inset-x-2 bottom-2 flex items-center gap-1.5 rounded-full bg-white/85 px-2.5 py-1 backdrop-blur-sm">
            <Icon width={13} height={13} className="shrink-0 text-sf-navy" />
            <span className="font-spec text-[10px] uppercase tracking-wide text-sf-ink/70">
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
