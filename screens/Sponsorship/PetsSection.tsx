/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Container } from "@/components/layout/Container";
import { PetCard } from "@/components/ui/PetCard";

interface IPetsSection {
  animals: any[];
}

export function PetsSection({ animals }: IPetsSection) {
  return (
    <section className="relative overflow-hidden bg-yellow">
      <span
        aria-hidden="true"
        className="absolute -top-10 -right-10 w-64 h-64 opacity-10 blob-3 bg-dark"
      ></span>
      <Container className="py-20 flex flex-col gap-12">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl sm:text-4xl font-black">
            Encontre um amigo para apadrinhar
          </h2>
          <p>Conheça quem está esperando por um vínculo especial.</p>
        </div>
        {animals.length === 0 ? (
          <div className="rounded-3xl border border-border bg-white px-8 py-14 text-center">
            <p className="text-xl font-black text-dark">
              Nenhum animal encontrado
            </p>
          </div>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {animals.map((animal) => (
              <li key={animal.pet_id}>
                <PetCard pet={animal} mode="sponsorship" />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
