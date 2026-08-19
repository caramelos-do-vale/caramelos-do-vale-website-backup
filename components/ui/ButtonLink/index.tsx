import { ColorVariantProps } from "@/type/ColorVariantType";
import Link, { LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface IButtonLink
  extends
    LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  variant?: ColorVariantProps;
  size?: "sm" | "md" | "lg";
  appearance?: "solid" | "outline" | "ghost";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  appearance = "solid",
  icon,
  iconPosition = "right",
  className = "",
  disabled,
  ...otherProps
}: IButtonLink) {
  const baseStyles = `
    group
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-xl
    font-bold
    transition-all
    duration-200
    ease-out
    hover:-translate-y-0.5
    active:translate-y-0
    focus-visible:outline-2
    focus-visible:outline-offset-2
    disabled:pointer-events-none
    disabled:opacity-50
    disabled:hover:translate-y-0
  `;

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs md:px-5 md:py-2 md:text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }[size];

  const variants = {
    primary: {
      solid:
        "bg-yellow text-black shadow-[0_4px_14px_rgba(234,183,74,0.35)] hover:shadow-[0_6px_18px_rgba(234,183,74,0.45)]",
      outline: "border-2 border-yellow text-yellow hover:bg-yellow/10",
      ghost: "text-yellow hover:bg-yellow/10",
    },

    secondary: {
      solid:
        "bg-blue text-white shadow-[0_4px_14px_rgba(30,149,179,0.35)] hover:shadow-[0_6px_18px_rgba(30,149,179,0.45)]",
      outline: "border-2 border-blue text-blue hover:bg-blue/10",
      ghost: "text-blue hover:bg-blue/10",
    },

    dark: {
      solid: "bg-dark text-yellow shadow-none",
      outline: "border-2 border-dark/30 text-dark hover:bg-dark/10",
      ghost: "text-dark hover:bg-dark/10",
    },
  };

  const renderIcon = () =>
    icon ? (
      <span
        className={`
          shrink-0
          transition-transform
          duration-200
          ease-out
          ${
            iconPosition === "right"
              ? "group-hover:translate-x-1"
              : "group-hover:-translate-x-1"
          }
        `}
      >
        {icon}
      </span>
    ) : null;

  return (
    <Link
      aria-disabled={disabled}
      {...otherProps}
      className={`
        ${baseStyles}
        ${sizeStyles}
        ${variants[variant][appearance]}
        ${className}
      `}
    >
      {iconPosition === "left" && renderIcon()}
      {children}
      {iconPosition === "right" && renderIcon()}
    </Link>
  );
}
