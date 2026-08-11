import Image from "next/image";
import Link from "next/link";
import { Heart, MoveRight } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { IPet } from "@/type/Pet";

interface IPetCard {
  pet: IPet;
  mode?: "adoption" | "sponsorship";
}

export function PetCard({ pet, mode = "adoption" }: IPetCard) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_4px_24px_rgba(26,46,56,0.12)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_32px_rgba(26,46,56,0.18)] motion-reduce:transition-none motion-reduce:hover:transform-none">
      <Link
        href={`/pets/${pet.pet_id}?from=${mode}`}
        aria-label={`Conhecer ${pet.pet_name}`}
        className="focus-visible:outline-yellow flex h-full flex-col rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4"
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
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
          />
          <span className="bg-dark/70 absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
            {pet.gender === "f" ? "Fêmea" : "Macho"}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <h3 className="text-dark text-3xl leading-tight font-black">
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
            <p className="text-muted line-clamp-2 text-sm leading-relaxed">
              {pet.description}
            </p>
          )}

          <span className="bg-dark text-yellow mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold">
            Conhecer {pet.pet_name}
            <MoveRight aria-hidden="true" size={18} />
          </span>
        </div>
      </Link>
    </article>
  );
}
