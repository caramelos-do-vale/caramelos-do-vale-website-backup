import Image from "next/image";
import Link from "next/link";
import { Heart, MoveRight } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { IPet } from "@/type/Pet";
import { ButtonLink } from "../Button";

interface IPetCard {
  pet: IPet;
  mode?: "adoption" | "sponsorship";
}

export function PetCard({ pet }: IPetCard) {
  return (
    <article
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-[0_4px_24px_rgba(26,46,56,0.12)]
        transition-[transform,box-shadow]
        duration-300
        ease-out
        hover:-translate-y-1
        hover:shadow-[0_10px_32px_rgba(26,46,56,0.18)]
        motion-reduce:transition-none
        motion-reduce:hover:transform-none
      "
    >
      <Link
        href={`/pets/${pet.pet_id}`}
        aria-label={`Conhecer ${pet.pet_name}`}
        className="
          flex
          h-full
          flex-col
          rounded-3xl
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-yellow
        "
      >
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={pet.profile_img}
            alt={`Foto de ${pet.pet_name}`}
            fill
            sizes="
              (max-width: 767px) 100vw,
              (max-width: 1279px) 50vw,
              33vw
            "
            className="
              object-cover
              transition-transform
              duration-500
              ease-out
              group-hover:scale-105
              motion-reduce:transition-none
              motion-reduce:group-hover:scale-100
            "
          />

          <span
            className="
              absolute
              top-4
              right-4
              rounded-full
              bg-dark/70
              px-3
              py-1
              text-xs
              font-bold
              text-white
              backdrop-blur-sm
            "
          >
            {pet.gender === "f" ? "Fêmea" : "Macho"}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 gap-4">
          <h3 className="text-3xl font-black leading-tight text-dark">
            {pet.pet_name}
          </h3>

          <div
            className="-mt-2 flex flex-wrap gap-2"
            aria-label="Características"
          >
            <Tag variant="blue">{pet.age}</Tag>
            <Tag variant="yellow">{pet.size}</Tag>
            {pet.need_sponsorship && (
              <Tag variant="blue">
                <Heart aria-hidden="true" size={13} fill="currentColor" />
                Apadrinhamento
              </Tag>
            )}
          </div>

          {pet.description && (
            <p className="line-clamp-2 text-sm leading-relaxed text-muted">
              {pet.description}
            </p>
          )}

          <ButtonLink href="">
            Conhecer {pet.pet_name}
            <MoveRight aria-hidden="true" size={18} />
          </ButtonLink>
        </div>
      </Link>
    </article>
  );
}
