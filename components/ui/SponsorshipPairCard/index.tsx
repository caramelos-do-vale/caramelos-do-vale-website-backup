import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { IPet } from "@/type/Pet";
import { ButtonLink } from "../ButtonLink";
import { Tag } from "../Tag";

interface ISponsorshipPairCard {
  pets: [IPet, IPet];
}

export function SponsorshipPairCard({ pets }: ISponsorshipPairCard) {
  const [firstPet, secondPet] = pets;

  const sponsorshipLink =
    firstPet.tutorship?.whatsappGroupUrl ??
    secondPet.tutorship?.whatsappGroupUrl;

  return (
    <article className="group bg-dark flex flex-col overflow-hidden rounded-3xl shadow-[0_4px_24px_rgba(26,46,56,0.12)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_32px_rgba(26,46,56,0.18)] motion-reduce:transition-none motion-reduce:hover:transform-none">
      <div className="relative aspect-4/3 overflow-hidden">
        <div className="grid h-full grid-cols-2">
          <Link
            href={`/pets/${firstPet.id}?from=sponsorship`}
            aria-label={`Conhecer ${firstPet.name}`}
            className="focus-visible:outline-yellow relative overflow-hidden focus-visible:z-10 focus-visible:outline-2 focus-visible:-outline-offset-2"
          >
            <Image
              src={firstPet.coverImage?.url || ""}
              alt={`Foto de ${firstPet.name}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
            />

            <div className="from-dark/70 absolute inset-x-0 bottom-0 bg-linear-to-t to-transparent p-3 pt-10">
              <p className="text-sm font-black text-white">{firstPet.name}</p>
            </div>
          </Link>

          <Link
            href={`/pets/${secondPet.id}?from=sponsorship`}
            aria-label={`Conhecer ${secondPet.name}`}
            className="focus-visible:outline-yellow relative overflow-hidden focus-visible:z-10 focus-visible:outline-2 focus-visible:-outline-offset-2"
          >
            <Image
              src={secondPet.coverImage?.url || ""}
              alt={`Foto de ${secondPet.name}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-103"
            />

            <div className="from-dark/70 absolute inset-x-0 bottom-0 bg-linear-to-t to-transparent p-3 pt-10 text-right">
              <p className="text-sm font-black text-white">{secondPet.name}</p>
            </div>
          </Link>
        </div>
        <span className="absolute top-3 left-3">
          <Tag aria-label="Dupla inseparável">Dupla inseparável</Tag>
        </span>
        <span
          aria-hidden="true"
          className="bg-yellow text-dark absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-lg font-black"
        >
          +
        </span>
      </div>
      <div className="flex flex-col gap-4 p-5">
        <div>
          <h3 className="text-xl font-black text-white">
            {firstPet.name} & {secondPet.name}
          </h3>

          <p className="text-sm leading-relaxed text-white/70">
            Sua contribuição cuida dos dois.
          </p>
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-white/70">
          {firstPet.description}
        </p>
        <div className="grid grid-cols-2 gap-2">
          <ButtonLink
            href={`/pets/${firstPet.id}?from=sponsorship`}
            appearance="outline"
          >
            Ver {firstPet.name}
          </ButtonLink>

          <ButtonLink
            href={`/pets/${secondPet.id}?from=sponsorship`}
            appearance="outline"
          >
            Ver {secondPet.name}
          </ButtonLink>
        </div>
        {sponsorshipLink ? (
          <ButtonLink
            href={sponsorshipLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apadrinhar a dupla
            <MoveRight aria-hidden="true" size={18} />
          </ButtonLink>
        ) : (
          <ButtonLink href={`/pets/${firstPet.id}?from=sponsorship`}>
            Apadrinhar a dupla
            <MoveRight aria-hidden="true" size={18} />
          </ButtonLink>
        )}
      </div>
    </article>
  );
}
