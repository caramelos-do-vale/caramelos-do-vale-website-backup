import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { mainInfo } from "@/constants/mainInfo";
import { getPetById } from "@/services/pets";
import { MoveLeftIcon } from "lucide-react";
import Image from "next/image";

interface IPetDetailsPage {
  petId: number;
}

export async function PetDetailsPage({ petId }: IPetDetailsPage) {
  const pet = await getPetById(petId);
  return (
    <section aria-labelledby="pet-name">
      <Container className="pt-4 pb-16 flex flex-col gap-3">
        <ButtonLink
          href="/pets"
          variant="secondary"
          appearance="ghost"
          icon={<MoveLeftIcon size={14} aria-hidden="true" />}
          iconPosition="left"
        >
          Voltar para os pets
        </ButtonLink>
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <Image
            src={pet.profile_img}
            alt={`Foto de ${pet.pet_name}`}
            width={576}
            height={520}
            priority
            className="rounded-3xl"
          />
          <div className="flex flex-col gap-5">
            <Tag>Disponível para adoção</Tag>
            <h1 className="text-5xl md:text-6xl font-black" id="pet-name">
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
            >
              Quero adotar {pet.pet_name}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
