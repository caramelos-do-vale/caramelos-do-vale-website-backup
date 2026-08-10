import { getPetById, getPetImages } from "@/services/pets";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MoveLeftIcon } from "lucide-react";
import { PetMainImages } from "./PetMainImages";
import { PetDetails } from "./PetDetails";
import { PetImageGallery } from "./PetImageGallery";
import { EmptyState } from "@/components/layout/EmptyState";

interface IPetDetailsPage {
  petId: number;
}

export async function PetDetailsPage({ petId }: IPetDetailsPage) {
  const pet = await getPetById(petId);

  if (!pet) {
    return (
      <EmptyState
        icon="🐾"
        title="Pet não encontrado"
        description="Não encontramos o pet que você está procurando."
      />
    );
  }

  const images = await getPetImages(petId);

  return (
    <>
      <section aria-labelledby="pet-name">
        <Container className="flex flex-col gap-3 pt-4 pb-16">
          <ButtonLink
            href="/pets"
            variant="secondary"
            appearance="ghost"
            icon={<MoveLeftIcon size={14} aria-hidden="true" />}
            iconPosition="left"
            className="w-fit"
          >
            Voltar para os pets
          </ButtonLink>
          <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-16">
            <PetMainImages images={images} petName={pet.pet_name} />
            <PetDetails pet={pet} />
          </div>
        </Container>
      </section>
      <PetImageGallery
        images={images}
        petName={pet.pet_name}
        petGender={pet.gender}
      />
    </>
  );
}
