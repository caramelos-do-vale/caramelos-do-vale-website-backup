import { Container } from "../Container";
import { ColorVariantProps } from "@/type/ColorVariantType";
import { Tag, TagVariantProps } from "@/components/ui/Tag";
import { CTAProps } from "@/type/CTAType";
import { ButtonLink } from "@/components/ui/ButtonLink";

interface IImgBanner {
  variant: ColorVariantProps | "light";
  details?: React.ReactNode;
  tag?: string;
  title: React.ReactNode;
  paragraphs: string[];
  cta?: CTAProps[];
  img: React.ReactNode;
  imgPosition?: "left" | "right";
}

export function ImgBanner({
  variant,
  details,
  tag,
  title,
  paragraphs,
  cta,
  img,
  imgPosition = "right",
}: IImgBanner) {
  const variantStyle: Record<
    ColorVariantProps | "light",
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
      tag: "light",
      description: "text-white/70",
      button: "secondary",
    },
    light: {
      background: "",
      tag: "secondary",
      description: "text-muted",
      button: "secondary",
    },
  };

  return (
    <section
      className={`relative overflow-hidden ${variantStyle[variant].background}`}
    >
      {details && <div aria-hidden="true">{details}</div>}
      <Container
        className={`relative py-16 flex flex-col gap-12 items-center md:grid md:grid-cols-2`}
      >
        {imgPosition === "left" && img}
        <div className="flex flex-col gap-6">
          {tag && <Tag variant={variantStyle[variant].tag}>{tag}</Tag>}
          <h2 className="text-3xl md:text-4xl font-black">{title}</h2>
          <div className="flex flex-col gap-4">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`paragraph_${index}`}
                className={`mx-auto max-w-sm md:max-w-3xl ${variantStyle[variant].description}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          {cta?.length && (
            <div className="flex flex-col gap-3 md:flex-row">
              {cta.map((item, index) => (
                <ButtonLink
                  key={item.label}
                  href={item.href}
                  {...(item.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  variant={variantStyle[variant].button}
                  appearance={index % 2 === 0 ? "solid" : "outline"}
                >
                  {item.label}
                </ButtonLink>
              ))}
            </div>
          )}
        </div>
        {imgPosition === "right" && img}
      </Container>
    </section>
  );
}
