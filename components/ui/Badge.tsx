import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export function Badge({ className = "", children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-border-color bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-text-primary/90 ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}
