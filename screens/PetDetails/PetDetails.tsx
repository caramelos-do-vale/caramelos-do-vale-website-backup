"use client";
import { trackEvent } from "@/analytics";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Tag } from "@/components/ui/Tag";
import { mainInfo } from "@/constants/mainInfo";
import { IPet } from "@/type/Pet";

interface IPetDetails {
  pet: IPet;
}

export function PetDetails({ pet }: IPetDetails) {
  function handleClick() {
    trackEvent("click_adoption", {
      pet_id: pet.pet_id,
      pet_name: pet.pet_name,
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <Tag>Disponível para adoção</Tag>
      <h1 className="text-5xl font-black md:text-6xl" id="pet-name">
        {pet.pet_name}
      </h1>
      <dl className="flex flex-wrap gap-2">
        <div>
          <dt className="sr-only">Idade</dt>
          <dd>
            <Tag variant="blue">{pet.age} anos</Tag>
          </dd>
        </div>

        <div>
          <dt className="sr-only">Porte</dt>
          <dd>
            <Tag variant="yellow">Porte {pet.size}</Tag>
          </dd>
        </div>

        <div>
          <dt className="sr-only">Sexo</dt>
          <dd>
            <Tag variant="dark-transparent">{pet.gender}</Tag>
          </dd>
        </div>
      </dl>
      <p className="text-muted text-base md:text-lg">{pet.description}</p>
      <ButtonLink
        href={mainInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Quero adotar ${pet.pet_name} pelo WhatsApp`}
        size="lg"
        onClick={handleClick}
      >
        Quero adotar {pet.pet_name}
      </ButtonLink>
    </div>
  );
}
