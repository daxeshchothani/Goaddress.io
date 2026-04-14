"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export type DropdownOption<TValue extends string = string> = {
  value: TValue;
  label: string;
  description?: string;
  rightText?: string;
};

type DropdownMenuProps<TValue extends string = string> = {
  value: TValue;
  options: DropdownOption<TValue>[];
  onChange: (value: TValue) => void;
  className?: string;
  compact?: boolean;
};

export function DropdownMenu<TValue extends string>({
  value,
  options,
  onChange,
  className = "",
  compact = false,
}: DropdownMenuProps<TValue>) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (rootRef.current && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const selectedOption = useMemo(() => options.find((option) => option.value === value), [options, value]);

  return (
    <div className={`relative ${className}`.trim()} ref={rootRef}>
      <button
        aria-expanded={open}
        className={`flex w-full items-center justify-between rounded-xl border border-slate-300 bg-white px-4 font-semibold text-slate-900 transition-colors hover:border-cyan-300/60 hover:bg-slate-50 ${
          compact ? "h-11 text-xs" : "h-14 text-sm"
        }`}
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span className="truncate text-left">
          {selectedOption?.label}
          {selectedOption?.description ? (
            <span className="ml-2 text-slate-500">{selectedOption.description}</span>
          ) : null}
        </span>
        <ChevronDownIcon className={`h-5 w-5 flex-none text-slate-500 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
      </button>

      {open ? (
        <div className="absolute z-20 mt-2 max-h-80 w-full overflow-y-auto rounded-xl border border-slate-200 bg-white p-2 shadow-[0_16px_34px_rgba(15,23,42,0.12)]">
          {options.map((option) => {
            const selected = option.value === value;

            return (
              <button
                className={`mb-1 flex w-full items-center justify-between rounded-lg px-3 py-3 text-left transition-colors ${
                  selected
                    ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/25 text-white"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                type="button"
              >
                <span>
                  <span className={`block ${compact ? "text-xs" : "text-sm"} font-semibold`}>{option.label}</span>
                  {option.description ? <span className="block text-xs text-slate-500">{option.description}</span> : null}
                </span>

                <span className="flex items-center gap-2">
                  {option.rightText ? <span className="text-xs font-bold text-cyan-300">{option.rightText}</span> : null}
                  {selected ? <CheckIcon className="h-4 w-4 text-cyan-300" /> : null}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
