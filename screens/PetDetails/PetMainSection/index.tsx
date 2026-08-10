"use client";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { PetImageGallery } from "./PetImageGallery";
import { PetMainImages } from "./PetMainImages";
import { IPetImage } from "@/type/PetImage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MoveLeftIcon } from "lucide-react";
import { IPet } from "@/type/Pet";
import { PetDetails } from "./PetDetails";
import { trackEvent } from "@/analytics";

interface IPetMainSection {
  images: IPetImage[];
  pet: IPet;
}

export function PetMainSection({ images, pet }: IPetMainSection) {
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    trackEvent("view_pet", {
      pet_id: pet.pet_id,
      pet_name: pet.pet_name,
    });
  }, [pet]);

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
            <PetMainImages
              images={images}
              petName={pet.pet_name}
              showGallery={showGallery}
              handleShowGallery={setShowGallery}
            />
            <PetDetails pet={pet} />
          </div>
        </Container>
      </section>
      {showGallery && (
        <PetImageGallery
          images={images}
          petName={pet.pet_name}
          petGender={pet.gender}
          handleShowGallery={setShowGallery}
        />
      )}
    </>
  );
}
