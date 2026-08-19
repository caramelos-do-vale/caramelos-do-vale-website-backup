import { Container } from "@/components/layout/Container";
import { Tag } from "@/components/ui/Tag";
import { SponsorshipAnalytics } from "./SponsorshipAnalytics";
import { Suspense } from "react";
import { PetsForSponsorship } from "./PetsForSponsorship";
import { SponsorshipSkeleton } from "@/components/layout/Skeleton/SponsorshipSkeleton";

export function SponsorshipSection() {
  return (
    <section
      aria-labelledby="sponsorship-title"
      className="bg-yellow relative overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="blob-1 bg-dark absolute -top-24 -left-16 h-80 w-80 opacity-15"
      />
      <span
        aria-hidden="true"
        className="blob-2 bg-blue absolute -right-16 -bottom-16 h-64 w-64 opacity-10"
      />

      <SponsorshipAnalytics />
      <Container className="relative z-10 py-16 md:py-24">
        <div className="mb-10 max-w-3xl">
          <Tag variant="dark-transparent">Apadrinhamento</Tag>

          <h2
            id="sponsorship-title"
            className="mt-4 text-3xl leading-tight font-black md:text-4xl"
          >
            Nem todo encontro precisa terminar em{" "}
            <span className="text-blue">adoção</span> para transformar uma vida.
          </h2>

          <p className="text-dark/70 mt-4 text-base md:text-lg">
            Escolha um animal da Caramelos do Vale para apadrinhar e ajude a
            garantir os cuidados que ele precisa. Crie um vínculo real sem
            precisar levá-lo para casa.
          </p>
        </div>

        <Suspense fallback={<SponsorshipSkeleton />}>
          <PetsForSponsorship />
        </Suspense>
      </Container>
    </section>
  );
}
