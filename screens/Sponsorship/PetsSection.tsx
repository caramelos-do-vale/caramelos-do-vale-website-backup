"use client";
import { Container } from "@/components/layout/Container";
import { PetCard } from "@/components/ui/PetCard";
import { SponsorshipPairCard } from "@/components/ui/SponsorshipPairCard";
import { IPet } from "@/type/Pet";

type SponsorshipItem =
  | {
      type: "pet";
      pet: IPet;
    }
  | {
      type: "pair";
      pets: [IPet, IPet];
    };

interface IPetsSection {
  pets: IPet[];
}

export function PetsSection({ pets }: IPetsSection) {
  function buildSponsorshipItems(pets: IPet[]): SponsorshipItem[] {
    const processedPets = new Set<number>();
    const items: SponsorshipItem[] = [];

    for (const animal of pets) {
      if (processedPets.has(animal.pet_id)) {
        continue;
      }

      if (animal.sponsorship_pair_id) {
        const partner = pets.find(
          (pet) => pet.pet_id === animal.sponsorship_pair_id,
        );

        if (partner) {
          items.push({
            type: "pair",
            pets: [animal, partner],
          });

          processedPets.add(animal.pet_id);
          processedPets.add(partner.pet_id);

          continue;
        }
      }

      items.push({
        type: "pet",
        pet: animal,
      });

      processedPets.add(animal.pet_id);
    }

    return items;
  }

  const sponsorshipItems = buildSponsorshipItems(pets);

  return (
    <section className="bg-blue relative overflow-hidden text-white">
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
        {pets.length === 0 ? (
          <div className="border-border rounded-3xl border bg-white px-8 py-14 text-center">
            <p className="text-dark text-xl font-black">
              Nenhum animal encontrado
            </p>
          </div>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sponsorshipItems.map((item) => {
              if (item.type === "pair") {
                return (
                  <li
                    key={`pair-${item.pets[0].pet_id}-${item.pets[1].pet_id}`}
                  >
                    <SponsorshipPairCard pets={item.pets} />
                  </li>
                );
              }
              return (
                <li key={`pet-${item.pet.pet_id}`}>
                  <PetCard pet={item.pet} mode="sponsorship" />
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </section>
  );
}
