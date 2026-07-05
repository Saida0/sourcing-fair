import type { FC, SVGProps } from "react";

/**
 * Bespoke line-art icon set for the 12 product categories. One consistent
 * 1.6px stroke, no fill, drawn by hand (no AI image generation available this
 * build) — see design-brief.md "Asset plan".
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ButtonIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <circle cx="24" cy="24" r="16" />
      <circle cx="18" cy="18" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="30" cy="18" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="18" cy="30" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="30" cy="30" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LabelIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M9 12h30v20l-6 6H9z" />
      <path d="M14 20h20M14 26h14M14 32h9" />
    </svg>
  );
}

export function ElasticIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M6 18c3-6 6 6 9 0s6 6 9 0 6 6 9 0 6 6 9 0" />
      <path d="M6 30c3-6 6 6 9 0s6 6 9 0 6 6 9 0 6 6 9 0" />
    </svg>
  );
}

export function ZipperIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M18 6v20M30 6v20" />
      <path d="M18 10h12M18 14h12M18 18h12M18 22h12" />
      <rect x="19" y="26" width="10" height="8" rx="2" />
      <path d="M24 34v6" />
    </svg>
  );
}

export function TwillIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M6 16h36M6 24h36M6 32h36" />
      <path d="M12 12v8M20 12v8M28 12v8M36 12v8" />
      <path d="M12 28v8M20 28v8M28 28v8M36 28v8" />
    </svg>
  );
}

export function DrawstringIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M8 24c4-10 10-10 12 0s8 10 12 0 8-10 8 0" />
      <rect x="6" y="21" width="5" height="6" rx="2" />
      <rect x="36" y="21" width="6" height="6" rx="2" />
    </svg>
  );
}

export function BuckleIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <rect x="14" y="12" width="20" height="24" rx="3" />
      <path d="M14 24h20" />
      <path d="M6 24h8M34 24h8" />
    </svg>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M8 8h16l16 16-16 16-16-16z" />
      <circle cx="16" cy="16" r="2.4" />
      <path d="M6 6l4 4" />
    </svg>
  );
}

export function PatchIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <rect x="9" y="9" width="30" height="30" rx="8" strokeDasharray="3 4" />
      <path d="M17 24h14M24 17v14" />
    </svg>
  );
}

export function LaceIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M6 30c3-14 6-14 9 0s6-14 9 0 6-14 9 0 6-14 9 0" />
      <path d="M6 34h36" strokeDasharray="1 4" />
    </svg>
  );
}

export function PolyIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M14 14h20l3 24H11z" />
      <path d="M18 14v-3a6 6 0 0 1 12 0v3" />
      <path d="M11 30h26" strokeDasharray="1 4" />
    </svg>
  );
}

export function CartonIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M6 16l18-8 18 8-18 8z" />
      <path d="M6 16v16l18 8 18-8V16" />
      <path d="M24 24v16" />
    </svg>
  );
}

export const categoryIcons: Record<string, FC<IconProps>> = {
  button: ButtonIcon,
  label: LabelIcon,
  elastic: ElasticIcon,
  zipper: ZipperIcon,
  twill: TwillIcon,
  drawstring: DrawstringIcon,
  buckle: BuckleIcon,
  tag: TagIcon,
  patch: PatchIcon,
  lace: LaceIcon,
  poly: PolyIcon,
  carton: CartonIcon,
};
