import type { ReactNode } from "react";

type CodeBlockProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function CodeBlock({ title, children, className = "" }: CodeBlockProps) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-[0_12px_30px_rgba(15,23,42,0.07)] ${className}`.trim()}>
      {title ? (
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
          <span>{title}</span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] tracking-[0.18em] text-slate-600">
            JSON
          </span>
        </div>
      ) : null}
      <pre className="overflow-x-auto px-5 py-4 text-sm leading-7 text-slate-800">
        <code>{children}</code>
      </pre>
    </div>
  );
}
