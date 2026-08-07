import { ButtonLink } from "@/components/ui/Button";
import { ColorVariantProps } from "@/type/ColorVariantType";
import { CTAProps } from "@/type/CTAType";

interface ICard {
  variant: ColorVariantProps;
  icon: string;
  title: string;
  topics: string[];
  cta?: CTAProps;
}

export function ExtensionCard({ variant, icon, title, topics, cta }: ICard) {
  const variantStyle = {
    primary: {
      icon: "bg-dark/20",
      background: "bg-yellow",
      button: "dark",
      check: "text-blue",
    },
    secondary: {
      icon: "bg-white/20",
      background: "bg-blue text-white",
      button: "secondary",
      check: "text-yellow",
    },
    dark: {
      icon: "bg-yellow/20",
      background: "bg-dark text-white",
      button: "primary",
      check: "text-yellow",
    },
  };

  return (
    <article
      className={`
        p-8
        flex
        flex-col
        gap-4
        group
        rounded-3xl
        text-left
        shadow-[rgba(26,46,56,0.2)_0px_4px_20px]
        md:flex-row
        md:justify-between  
        md:items-center 
        ${variantStyle[variant].background}
    `}
    >
      <div className={`flex flex-col gap-5 ${cta ? "md:flex-row" : ""}`}>
        <span
          aria-hidden="true"
          className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${variantStyle[variant].icon}`}
        >
          {icon}
        </span>
        <div className="flex flex-col gap-3">
          <h3 className="font-black leading-tight text-2xl">{title}</h3>
          {topics.length > 1 ? (
            <ul className="flex flex-col gap-3">
              {topics.map((item, index) => (
                <li
                  key={`item_${index}`}
                  className="text-sm flex items-start gap-3"
                >
                  <span
                    className={variantStyle[variant].check}
                    aria-hidden="true"
                  >
                    ✓
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm -mt-1">{topics}</p>
          )}
        </div>
      </div>
      {cta && (
        <ButtonLink
          href={cta.href}
          {...(cta.external && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
          variant={variantStyle[variant].button as ColorVariantProps}
        >
          {cta.label}
        </ButtonLink>
      )}
    </article>
  );
}
