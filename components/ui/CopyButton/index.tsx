"use client";

import { useState } from "react";

interface CopyButtonProps {
  size?: "sm" | "md";
  variant?: "light" | "primary";
  label: string;
  value: string;
}

export function CopyButton({
  size = "md",
  variant = "primary",
  label,
  value,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  const variantStyle = {
    primary: {
      background: "bg-yellow/15 border border-yellow/30 hover:bg-yellow/30",
      title: "text-yellow",
    },
    light: {
      background: "bg-white/5 border border-white/10 hover:bg-white/10",
      title: "text-white/50",
    },
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`${label}: ${value}. Clique para copiar`}
      className={`
        group
        flex
        flex-col
        gap-1
        rounded-xl
        p-3
        text-left
        transition-all
        duration-200
        hover:-translate-y-0.5
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-yellow
        ${variantStyle[variant].background}
      `}
    >
      <span className={`uppercase text-xs ${variantStyle[variant].title}`}>
        {label}
      </span>

      <span
        className={`
          font-bold
          text-white/80
          ${size === "md" ? "text-base" : "text-sm"}
        `}
      >
        {copied ? "✓ Copiado!" : value}
      </span>

      <span className="sr-only" aria-live="polite">
        {copied && "Texto copiado para a área de transferência"}
      </span>
    </button>
  );
}
