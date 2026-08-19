"use client";
import { trackEvent } from "@/analytics";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Tag } from "@/components/ui/Tag";
import { mainInfo } from "@/constants/mainInfo";
import { IPet } from "@/type/Pet";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IPetDetails {
  pet: IPet;
  petPair: IPet | null;
}

export function PetDetails({ pet, petPair }: IPetDetails) {
  function handleClick() {
    trackEvent("click_adoption", {
      pet_id: pet.pet_id,
      pet_name: pet.pet_name,
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-5xl font-black md:text-6xl" id="pet-name">
        {pet.pet_name}
      </h1>
      <dl className="flex flex-wrap gap-2">
        <div>
          <dt className="sr-only">Idade</dt>
          <dd>
            <Tag variant="blue">{pet.age}</Tag>
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
            <Tag variant="dark-transparent">
              {pet.gender === "f" ? "Fêmea" : "Macho"}
            </Tag>
          </dd>
        </div>
      </dl>
      <p className="text-muted text-base md:text-lg">{pet.description}</p>
      {petPair && (
        <Link
          href={`/pets/${petPair.pet_id}?from=sponsorship`}
          className="bg-yellow-light border-yellow text-yellow-deep flex items-center gap-4 rounded-2xl border p-4"
        >
          <div className="relative">
            <div className="relative h-24 w-24">
              <Image
                src={petPair.profile_img}
                alt={`Foto de ${pet.pet_name}`}
                fill
                className="border-yellow rounded-full border-3 object-cover"
              />
            </div>

            <span className="bg-yellow absolute -top-1 -right-1 z-2 flex h-8 w-8 items-center justify-center rounded-full">
              <PlusIcon size={12} strokeWidth={4} />
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-xs font-black tracking-wider uppercase">
              Dupla inseparável
            </h3>
            <p className="text-sm">
              Ao apadrinhar {pet.pet_name}, você também apoia{" "}
              <b className="underline">{petPair.pet_name}</b>. Sua contribuição
              cuida dos dois.
            </p>
          </div>
        </Link>
      )}
      <div className="flex gap-3">
        {!pet.adopted && (
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
        )}
        {pet.need_sponsorship && (
          <ButtonLink
            href={pet.sponsorship_group_link!}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Quero apadrinhar ${pet.pet_name} pelo WhatsApp`}
            variant="secondary"
            size="lg"
            onClick={handleClick}
          >
            Quero apadrinhar {pet.pet_name}
          </ButtonLink>
        )}
      </div>
    </div>
  );
}
