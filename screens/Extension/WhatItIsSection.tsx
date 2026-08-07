import { Container } from "@/components/layout/Container";
import { whatItIsItems } from "./whatItIsItems";
import { ExtensionCard } from "./ExtensionCard";
import { ColorVariantProps } from "@/type/ColorVariantType";

export function WhatItIsSection() {
  return (
    <section>
      <Container className="py-16 flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-black text-center">
          O que é o Projeto de Extensão?
        </h2>
        <p className="text-center text-muted md:max-w-3xl md:mx-auto">
          Desde 2025 somos um Projeto de Extensão dentro da UFRGS, com atuação
          voluntária em diversas áreas. Você pode fazer parte e converter seu
          trabalho em horas no seu currículo acadêmico.
        </p>
        <ul className="mt-10 flex flex-col gap-6 md:grid md:grid-col-2">
          {whatItIsItems.map((item, index) => (
            <li
              key={item.title}
              className={`${index === whatItIsItems.length - 1 ? "col-span-2" : "col-span-1"}`}
            >
              <ExtensionCard
                {...item}
                variant={item.variant as ColorVariantProps}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
