import { Container } from "@/components/layout/Container";
import { whereItGoesItems } from "./whereItGoesItems";
import { Card } from "@/components/layout/Card";

export function WhereItGoes() {
  return (
    <section className="bg-light">
      <Container className="flex flex-col gap-12 py-16">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            Para onde vai <span className="text-blue">sua contribuição?</span>
          </h2>
          <p className="text-muted">
            Todo o trabalho da Caramelos do Vale é voluntário. Sua contribuição
            vai 100% para os cuidados dos animais.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {whereItGoesItems.map((item) => (
            <li key={item.title}>
              <Card
                variant="light"
                {...item}
                className="items-center text-center!"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
