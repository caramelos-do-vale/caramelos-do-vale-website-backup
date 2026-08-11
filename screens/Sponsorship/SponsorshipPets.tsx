import { EmptyState } from "@/components/layout/EmptyState";
import { getPetsforSponsorship } from "@/services/pets";
import { PetsSection } from "./PetsSection";

export async function SponsorshipPets() {
  const animals = await getPetsforSponsorship();

  if (!animals.length) {
    return (
      <EmptyState
        icon="💛"
        title="Nenhum animal disponível para apadrinhamento"
        description="No momento não temos animais disponíveis para apadrinhamento. Continue acompanhando nosso trabalho."
      />
    );
  }

  return <PetsSection pets={animals} />;
}
