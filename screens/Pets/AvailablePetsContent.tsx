import { getPetsForAdoption } from "@/services/pets";
import { AvailablePetsSection } from "./AvailablePetsSection";
import { EmptyState } from "@/components/layout/EmptyState";

export async function AvailablePetsContent() {
  const pets = await getPetsForAdoption();

  if (!pets.length) {
    return (
      <EmptyState
        icon="🐶"
        title="Nenhum pet disponível no momento"
        description="Continue acompanhando nosso trabalho. Novos animais podem chegar a qualquer momento."
      />
    );
  }

  return <AvailablePetsSection animals={pets} />;
}
