import { ColorVariantProps } from "@/type/ColorVariantType";
import type { ReactNode } from "react";

interface ICard {
  size?: "sm" | "md";
  variant?: ColorVariantProps | "light";
  step?: number;
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function Card({
  size = "md",
  variant = "light",
  step,
  icon,
  title,
  description,
  className = "",
}: ICard) {
  const variantStyle = {
    primary: {
      background: "bg-yellow text-dark",
      description: "text-dark/70",
    },
    secondary: {
      background: "bg-blue text-white",
      description: "text-white/80",
    },
    dark: {
      background: "bg-dark text-yellow",
      description: "text-white/70",
    },
    light: {
      background: "bg-white border border-border text-dark",
      description: "text-muted",
    },
  }[variant];

  return (
    <article
      className={`
        flex
        flex-col
        gap-3
        rounded-3xl
        shadow-[rgba(26,46,56,0.2)_0px_4px_20px]
        ${size === "md" ? "p-8" : "p-5"}
        ${variantStyle.background}
        ${className}
      `}
    >
      <div className="flex justify-between items-end">
        {icon && (
          <div aria-hidden="true" className="text-4xl">
            {icon}
          </div>
        )}
        {step !== undefined && (
          <span
            aria-hidden="true"
            className="
              text-6xl
              font-black
              opacity-20
            "
          >
            {step.toString().padStart(2, "0")}
          </span>
        )}
      </div>
      <h3
        className={`
          font-black
          leading-tight
          ${size === "md" ? "text-xl" : "text-base"}
        `}
      >
        {title}
      </h3>
      <p
        className={`
          leading-relaxed
          ${variantStyle.description}
          ${size === "md" ? "text-sm" : "text-xs"}
        `}
      >
        {description}
      </p>
    </article>
  );
}
