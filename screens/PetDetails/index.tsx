import { getPetById, getPetImages } from "@/services/pets";
import { PetMainSection } from "./PetMainSection";

interface IPetDetailsPage {
  petId: number;
}

export async function PetDetailsPage({ petId }: IPetDetailsPage) {
  const pet = await getPetById(petId);
  const images = await getPetImages(petId);

  return <PetMainSection images={images} pet={pet} />;
}
