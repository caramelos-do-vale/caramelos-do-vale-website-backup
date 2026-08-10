"use client";
import { Container } from "@/components/layout/Container";
import { PetCard } from "@/components/ui/PetCard";
import { IPet } from "@/type/Pet";

interface IPetsSection {
  animals: IPet[];
}

export function PetsSection({ animals }: IPetsSection) {
  return (
    <section className="bg-yellow relative overflow-hidden">
      <span
        aria-hidden="true"
        className="blob-3 bg-dark absolute -top-10 -right-10 h-64 w-64 opacity-10"
      ></span>
      <Container className="flex flex-col gap-12 py-20">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Encontre um amigo para apadrinhar
          </h2>
          <p>Conheça quem está esperando por um vínculo especial.</p>
        </div>
        {animals.length === 0 ? (
          <div className="border-border rounded-3xl border bg-white px-8 py-14 text-center">
            <p className="text-dark text-xl font-black">
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
