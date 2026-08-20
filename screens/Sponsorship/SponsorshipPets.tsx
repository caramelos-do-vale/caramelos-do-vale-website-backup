import { EmptyState } from "@/components/layout/EmptyState";
import { PetsSection } from "./PetsSection";
import { getPets } from "@/services/pets";

export async function SponsorshipPets() {
  const pets = await getPets({
    limit: 100,
    needsSponsorship: true,
  });

  if (!pets.data.length) {
    return (
      <EmptyState
        icon="💛"
        title="Nenhum animal disponível para apadrinhamento"
        description="No momento não temos animais disponíveis para apadrinhamento. Continue acompanhando nosso trabalho."
      />
    );
  }

  return <PetsSection pets={pets.data} />;
}
