import type { ReactNode } from "react";

export type TagVariantProps =
  | "primary"
  | "secondary"
  | "dark"
  | "light"
  | "primary-transparent"
  | "dark-transparent"
  | "blue"
  | "yellow";

interface ITag {
  children: ReactNode;
  variant?: TagVariantProps;
}

const variantStyles: Record<TagVariantProps, string> = {
  primary: "bg-yellow text-dark",
  secondary: "bg-blue-light text-dark",
  dark: "bg-dark text-yellow",
  light: "bg-white/20 text-white",
  "primary-transparent": "bg-yellow/20 text-yellow",
  "dark-transparent": "bg-dark/15 text-dark",
  blue: "bg-blue-light text-blue",
  yellow: "bg-yellow-light text-yellow-deep",
};

export function Tag({ children, variant = "primary" }: ITag) {
  return (
    <span
      className={`
        flex
        gap-1
        w-fit
        rounded-full
        px-3
        py-1
        text-xs
        font-black
        uppercase
        tracking-wider
        ${variantStyles[variant]}
      `}
    >
      {children}
    </span>
  );
}
