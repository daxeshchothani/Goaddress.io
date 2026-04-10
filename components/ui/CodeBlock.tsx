import type { ReactNode } from "react";

type CodeBlockProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function CodeBlock({ title, children, className = "" }: CodeBlockProps) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-border-color bg-[#0f1016] shadow-glow ${className}`.trim()}>
      {title ? (
        <div className="flex items-center justify-between border-b border-border-color px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
          <span>{title}</span>
          <span className="rounded-full border border-border-color bg-white/5 px-3 py-1 text-[10px] tracking-[0.18em] text-text-primary/70">
            JSON
          </span>
        </div>
      ) : null}
      <pre className="overflow-x-auto px-5 py-4 text-sm leading-7 text-text-primary/90">
        <code>{children}</code>
      </pre>
    </div>
  );
}
