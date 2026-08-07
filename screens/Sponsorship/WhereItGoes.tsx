import { Container } from "@/components/layout/Container";
import { whereItGoes } from "./whereItGoes";
import { Card } from "@/components/layout/Card";

export function WhereItGoes() {
  return (
    <section className="bg-light">
      <Container className="py-16 flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black">
            Para onde vai <span className="text-blue">sua contribuição?</span>
          </h2>
          <p className="text-muted">
            Todo o trabalho da Caramelos do Vale é voluntário. Sua contribuição
            vai 100% para os cuidados dos animais.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {whereItGoes.map((item) => (
            <li key={item.title}>
              <Card
                variant="light"
                {...item}
                className="text-center! items-center"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
