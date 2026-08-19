"use client";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface ISelectOption {
  label: string;
  value: string;
}

interface ISelect {
  id: string;
  label: string;
  value: string;
  options: ISelectOption[];
  onChange: (value: string) => void;
}

export function Select({ id, label, value, options, onChange }: ISelect) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  function capitalize(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <label htmlFor={id} className="mb-1 text-sm font-semibold">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-controls={`${id}-listbox`}
        aria-haspopup="listbox"
        aria-label={`${label}: ${selectedOption?.label}`}
        aria-expanded={open}
        className="border-border hover:border-yellow focus-visible:ring-yellow/10 flex h-13 w-full items-center justify-between rounded-2xl border bg-white px-4 text-left text-sm font-medium transition-[border-color,box-shadow] duration-200 focus-visible:ring-4 focus-visible:outline-none"
      >
        <span>{capitalize(selectedOption?.label ?? "")}</span>

        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`border-border absolute top-[calc(100%+8px)] right-0 left-0 z-30 overflow-hidden rounded-2xl border bg-white shadow-[rgba(26,46,56,0.12)_0px_8px_30px] transition-[opacity,transform] duration-200 ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        } `}
        aria-hidden={!open}
      >
        <ul role="listbox" id={`${id}-listbox`}>
          {options.map((option) => {
            const selected = option.value === value;

            return (
              <li key={option.value} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`focus-visible:bg-light flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors focus-visible:outline-none ${
                    selected
                      ? "bg-blue-light text-blue font-semibold"
                      : "hover:bg-light"
                  } `}
                >
                  {capitalize(option.label)}

                  {selected && <Check size={16} />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
