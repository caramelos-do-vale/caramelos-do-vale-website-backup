import { Tag, TagVariantProps } from "@/components/ui/Tag";
import { Container } from "../Container";
import { ButtonLink } from "@/components/ui/Button";
import { CTAProps } from "@/type/CTAType";
import { ColorVariantProps } from "@/type/ColorVariantType";
import { useId } from "react";

interface IPageHero {
  variant: ColorVariantProps;
  details?: React.ReactNode;
  tag: string;
  title: React.ReactNode;
  description?: string;
  cta?: CTAProps;
  img?: React.ReactNode;
}

export function PageHero({
  variant,
  details,
  tag,
  title,
  description,
  cta,
  img,
}: IPageHero) {
  const titleId = useId();

  const variantStyle: Record<
    ColorVariantProps,
    {
      background: string;
      tag: TagVariantProps;
      description: string;
      button: ColorVariantProps;
    }
  > = {
    primary: {
      background: "bg-yellow",
      tag: "dark",
      description: "",
      button: "dark",
    },
    secondary: {
      background: "bg-blue text-white",
      tag: "light",
      description: "text-white",
      button: "primary",
    },
    dark: {
      background: "bg-dark text-white",
      tag: "primary-transparent",
      description: "text-white/70",
      button: "primary",
    },
  };

  return (
    <section
      className={`relative overflow-hidden ${variantStyle[variant].background}`}
      aria-labelledby={titleId}
    >
      {details}
      <Container
        className={`relative py-12 flex flex-col gap-12 md:items-center ${img ? "md:grid md:grid-cols-2" : "md:flex-row"}`}
      >
        <div className="flex flex-col gap-5">
          <Tag variant={variantStyle[variant].tag}>{tag}</Tag>
          <h1
            className="text-4xl font-black leading-tight md:text-6xl md:max-w-155"
            id={titleId}
          >
            {title}
          </h1>
          {description && (
            <p
              className={`text-base md:text-lg ${variantStyle[variant].description}`}
            >
              {description}
            </p>
          )}
          {cta && (
            <div className="mt-2">
              <ButtonLink
                href={cta.href}
                {...(cta.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                variant={variantStyle[variant].button}
              >
                {cta.label}
              </ButtonLink>
            </div>
          )}
        </div>
        {img}
      </Container>
    </section>
  );
}
