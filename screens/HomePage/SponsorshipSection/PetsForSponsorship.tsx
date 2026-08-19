import { EmptyState } from "@/components/layout/EmptyState";
import { getPetsforSponsorshipHomepage } from "@/services/pets";
import Image from "next/image";
import Link from "next/link";
import { SponsorshipButton } from "./SponsorshipButton";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { mainInfo } from "@/constants/mainInfo";

export async function PetsForSponsorship() {
  const pets = await getPetsforSponsorshipHomepage();

  if (!pets.length) {
    return (
      <EmptyState
        icon="🐾"
        title="Nenhum animal disponível para apadrinhamento"
        description="No momento, não temos animais disponíveis para apadrinhamento. Continue acompanhando nosso trabalho."
      />
    );
  }

  const [featuredPet, secondaryPet] = pets;
  const listPets = pets.slice(2, 5);

  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-end">
      <div
        aria-label="Exemplos de animais que podem ser apadrinhados"
        className="relative h-72 sm:h-80"
      >
        <Link
          href={featuredPet.sponsorship_group_link!}
          aria-label={`Conheça ${featuredPet.pet_name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="absolute top-0 left-0 z-20 h-64 w-56 overflow-hidden rounded-3xl shadow-[rgba(26,46,56,0.25)_0px_12px_40px] sm:h-72 sm:w-64">
            <Image
              src={featuredPet.profile_img}
              alt={`Foto de ${featuredPet.pet_name}`}
              fill
              sizes="(max-width: 640px) 224px, 256px"
              className="object-cover"
            />

            <figcaption className="from-dark/80 absolute right-0 bottom-0 left-0 bg-linear-to-t to-transparent p-4 pt-10">
              <p className="text-sm font-black text-white">
                {featuredPet.pet_name}
              </p>

              <p className="text-xs text-white/70">
                {featuredPet.gender === "f" ? "Fêmea" : "Macho"} ·{" "}
                {featuredPet.age}
              </p>
            </figcaption>
          </figure>
        </Link>

        {secondaryPet && (
          <Link
            href={secondaryPet.sponsorship_group_link!}
            aria-label={`Conheça ${secondaryPet.pet_name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="border-yellow absolute top-8 left-40 z-30 h-52 w-44 overflow-hidden rounded-3xl border-[3px] shadow-[rgba(26,46,56,0.2)_0px_8px_30px] sm:left-48 sm:h-56 sm:w-48">
              <Image
                src={secondaryPet.profile_img}
                alt={`Foto de ${secondaryPet.pet_name}`}
                fill
                sizes="(max-width: 640px) 176px, 192px"
                className="object-cover"
              />

              <figcaption className="from-dark/80 absolute right-0 bottom-0 left-0 bg-linear-to-t to-transparent p-3 pt-8">
                <p className="text-sm font-black text-white">
                  {secondaryPet.pet_name}
                </p>
              </figcaption>
            </figure>
          </Link>
        )}

        <div
          aria-label="Mais de 30 animais precisam de padrinhos"
          className="bg-blue absolute top-0 right-0 z-40 rounded-2xl px-4 py-2 shadow-[rgba(30,149,179,0.5)_0px_4px_16px] sm:right-4"
        >
          <p className="text-xs font-black text-white">+30 animais</p>

          <p className="text-xs text-white/70">precisam de padrinho</p>
        </div>
      </div>

      <div className="flex flex-col gap-7">
        {listPets.length && (
          <ul
            aria-label="Animais disponíveis para apadrinhamento"
            className="flex flex-col gap-3"
          >
            {listPets.map((pet) => (
              <li key={pet.pet_id}>
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl bg-white/60 p-3.5 shadow-[rgba(26,46,56,0.1)_0px_2px_12px]">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={pet.profile_img}
                      alt={`Foto de ${pet.pet_name}`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-sm font-bold">{pet.pet_name}</p>

                    <p className="text-xs text-[#3d1f00]/60">
                      {pet.gender === "f" ? "Fêmea" : "Macho"} · {pet.age}
                    </p>
                  </div>
                  <SponsorshipButton
                    petId={pet.pet_id}
                    petName={pet.pet_name}
                    petGroupLink={pet.sponsorship_group_link!}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col gap-3 md:flex-row">
          <ButtonLink
            href={mainInfo.communityWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit"
            variant="dark"
          >
            Quero apadrinhar
          </ButtonLink>

          <ButtonLink
            href="/sponsorship"
            className="w-fit"
            variant="dark"
            appearance="outline"
          >
            Conheça os animais
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
