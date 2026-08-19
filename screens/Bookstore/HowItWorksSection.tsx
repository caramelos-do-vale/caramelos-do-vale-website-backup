import { Container } from "@/components/layout/Container";
import { howItWorksItems } from "./howItWorksItems";
import { Card } from "@/components/layout/Card";
import { ColorVariantProps } from "@/type/ColorVariantType";

export function HowItWorksSection() {
  return (
    <section aria-labelledby="how-it-works-title">
      <Container className="py-16 flex flex-col gap-12">
        <h2
          className="text-3xl md:text-4xl font-black text-center"
          id="how-it-works-title"
        >
          Como funciona o Sebo?
        </h2>
        <ol className="flex flex-col gap-6 md:flex-row">
          {howItWorksItems.map((item, index) => (
            <li key={item.title}>
              <Card
                {...item}
                variant={item.variant as ColorVariantProps | "light"}
                step={index + 1}
              />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
