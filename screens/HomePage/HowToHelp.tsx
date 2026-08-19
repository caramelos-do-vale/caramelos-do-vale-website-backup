import { Container } from "@/components/layout/Container";
import { Card } from "@/components/layout/Card";
import { howToHelpItems } from "./howToHelpItems";

export function HowToHelp() {
  return (
    <section
      aria-labelledby="how-to-help-title"
      className="relative overflow-hidden bg-yellow"
    >
      <Container className="relative z-10 py-16 md:py-24">
        <div className="flex flex-col gap-4 mb-8">
          <h2
            id="how-to-help-title"
            className="text-3xl md:text-4xl font-black leading-tight max-w-xs md:max-w-sm mb-2"
          >
            Você também pode <span className="text-blue">fazer parte</span>
          </h2>
          <p className="text-[#3d1f00]/65">
            Cada forma de ajuda muda uma história.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {howToHelpItems.map((item, index) => (
            <li key={index}>
              <Card variant="dark" {...item} className="h-full" size="sm" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
