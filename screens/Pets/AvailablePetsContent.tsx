import { getPets } from "@/services/pets";
import { AvailablePetsSection } from "./AvailablePetsSection";
import { EmptyState } from "@/components/layout/EmptyState";

export async function AvailablePetsContent() {
  const pets = await getPets({
    status: ["AVAILABLE"],
    limit: 100,
  });

  console.log(pets);
  if (!pets.data.length) {
    return (
      <EmptyState
        icon="🐶"
        title="Nenhum pet disponível no momento"
        description="Continue acompanhando nosso trabalho. Novos animais podem chegar a qualquer momento."
      />
    );
  }

  return <AvailablePetsSection pets={pets.data} />;
}
