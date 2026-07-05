import { ImageIcon } from "lucide-react";

/**
 * Honest placeholder for real photography we do not have yet (no factory/
 * product photos supplied, and no image-generation credits this build — see
 * design-brief.md "Asset plan"). Never swapped for stock/picsum.
 */
export function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-[14px] border-2 border-dashed border-sf-navy/25 bg-gradient-to-br from-sf-navy/[0.06] to-sf-brass/[0.08] p-8 text-center ${className}`}
    >
      <ImageIcon className="h-6 w-6 text-sf-navy/40" strokeWidth={1.5} aria-hidden />
      <p className="font-spec text-xs uppercase tracking-wide text-sf-navy/50">{label}</p>
    </div>
  );
}
