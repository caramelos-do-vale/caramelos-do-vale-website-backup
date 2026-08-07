import { CTAProps } from "@/type/CTAType";
import { Container } from "../Container";
import { ColorVariantProps } from "@/type/ColorVariantType";
import { ButtonLink } from "@/components/ui/Button";
import { useId } from "react";

interface ICTABanner {
  variant: ColorVariantProps | "light";
  details?: React.ReactNode;
  icon?: React.ReactNode;
  title: string;
  description: string;
  ctaList: CTAProps[];
}

export function CTABanner({
  variant,
  details,
  icon,
  title,
  description,
  ctaList,
}: ICTABanner) {
  const titleId = useId();

  const variantStyle: Record<
    ColorVariantProps | "light",
    {
      background: string;
      description: string;
      button: ColorVariantProps;
    }
  > = {
    primary: {
      background: "bg-yellow",
      description: "",
      button: "dark",
    },
    secondary: {
      background: "bg-blue text-white",
      description: "text-white",
      button: "primary",
    },
    dark: {
      background: "bg-dark text-white",
      description: "text-white/70",
      button: "primary",
    },
    light: {
      background: "",
      description: "text-muted",
      button: "secondary",
    },
  };

  return (
    <section
      className={`relative overflow-hidden ${variantStyle[variant].background}`}
      aria-labelledby={titleId}
    >
      {details && <div aria-hidden="true">{details}</div>}
      <Container
        className="
        flex
        flex-col
        justify-center
        gap-4
        py-16
        text-center
      "
      >
        {icon && (
          <span aria-hidden="true" className="text-5xl">
            {icon}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-black" id={titleId}>
          {title}
        </h2>
        <p
          className={`mx-auto max-w-sm md:max-w-3xl ${variantStyle[variant].description}`}
        >
          {description}
        </p>
        <div className="mt-4 flex flex-col gap-4 justify-center md:flex-row">
          {ctaList.map((cta, index) => (
            <ButtonLink
              key={cta.label}
              href={cta.href}
              {...(cta.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              size="lg"
              variant={variantStyle[variant].button}
              className={`${ctaList.length > 1 ? "w-full md:w-fit" : "w-fit"}`}
              appearance={index % 2 === 1 ? "outline" : "solid"}
            >
              {cta.label}
            </ButtonLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
