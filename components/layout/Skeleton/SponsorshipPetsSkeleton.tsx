import { Container } from "@/components/layout/Container";
import { PetCardSkeleton } from "./PetCardSkeleton";

export function SponsorshipPetsSkeleton() {
  return (
    <section
      aria-label="Carregando animais disponíveis para apadrinhamento"
      className="bg-yellow relative overflow-hidden"
    >
      <Container className="flex flex-col gap-12 py-20">
        <div className="flex flex-col items-center gap-3">
          <div className="bg-dark/10 h-10 w-80 animate-pulse rounded-xl sm:w-96" />

          <div className="bg-dark/10 h-5 w-72 animate-pulse rounded" />
        </div>

        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <li key={index}>
              <PetCardSkeleton />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
