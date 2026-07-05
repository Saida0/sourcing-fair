import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  ButtonIcon,
  ZipperIcon,
  LabelIcon,
  TagIcon,
} from "../icons/trim-icons";
import { useReducedMotion } from "../../lib/use-reduced-motion";

/**
 * The hero's signature visual: four of the company's own trims draw their
 * stroke paths and lock into an assembled row on mount, enacting the
 * "precision assembly" concept spine (design-brief.md). Fires on mount, not
 * scroll-gated, so a headless screenshot always shows the settled state.
 */
export function HeroAssembly() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !rootRef.current) return;
    const pieces = rootRef.current.querySelectorAll<HTMLElement>("[data-piece]");
    const paths = rootRef.current.querySelectorAll<SVGPathElement>("path, circle, rect");

    paths.forEach((el) => {
      const length =
        "getTotalLength" in el && typeof (el as unknown as SVGGeometryElement).getTotalLength === "function"
          ? (el as unknown as SVGGeometryElement).getTotalLength()
          : 40;
      gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(paths, { strokeDashoffset: 0, duration: 1, stagger: 0.04 }, 0);

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
      className="relative mx-auto grid aspect-square w-full min-w-0 max-w-[420px] grid-cols-2 gap-6 rounded-[24px] border border-sf-line bg-white p-10 shadow-[0_30px_60px_-30px_rgba(16,20,35,0.18)]"
    >
      <div className="absolute inset-6 rounded-[16px] border border-dashed border-sf-navy/15" aria-hidden />
      <Piece>
        <ButtonIcon width={56} height={56} className="text-sf-navy" />
      </Piece>
      <Piece>
        <ZipperIcon width={56} height={56} className="text-sf-brass" />
      </Piece>
      <Piece>
        <LabelIcon width={56} height={56} className="text-sf-brass" />
      </Piece>
      <Piece>
        <TagIcon width={56} height={56} className="text-sf-navy" />
      </Piece>
    </div>
  );
}

function Piece({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-piece
      className="flex items-center justify-center rounded-[14px] bg-sf-paper"
    >
      {children}
    </div>
  );
}
