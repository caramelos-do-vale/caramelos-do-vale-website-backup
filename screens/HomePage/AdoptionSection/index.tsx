import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Tag } from "@/components/ui/Tag";
import { PetsForAdoption } from "./PetsForAdoption";
import { Suspense } from "react";
import { PetGridSkeleton } from "@/components/layout/Skeleton/PetGridSkeleton";

export function AdoptionSection() {
  return (
    <section aria-labelledby="adoption-title">
      <Container className="py-16 md:py-24">
        <Tag>Adoção</Tag>
        <div className="mb-10 flex flex-col gap-4 md:flex md:flex-row md:items-center md:justify-between">
          <h2
            id="adoption-title"
            className="text-3xl leading-tight font-black md:max-w-2xl md:text-4xl"
          >
            Conheça quem está esperando{" "}
            <span className="text-blue">por uma família.</span>
          </h2>
          <ButtonLink href="/pets" variant="secondary">
            Ver todos
          </ButtonLink>
        </div>
        <Suspense fallback={<PetGridSkeleton />}>
          <PetsForAdoption />
        </Suspense>
      </Container>
    </section>
  );
}
