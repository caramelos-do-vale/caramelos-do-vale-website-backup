import { EmptyState } from "@/components/layout/EmptyState";
import { getPetsforAdoptionHomepage } from "@/services/pets";
import Image from "next/image";
import Link from "next/link";

export async function PetsForAdoption() {
  const pets = await getPetsforAdoptionHomepage();
  return (
    <>
      {pets.length ? (
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {pets.map((pet, index) => (
            <li
              key={pet.pet_id}
              className={`${index === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <Link
                href={`/pets/${pet.pet_id}`}
                className="group relative flex aspect-square overflow-hidden rounded-3xl md:aspect-4/3"
              >
                <Image
                  src={pet.profile_img}
                  alt={`Foto de ${pet.pet_name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
                />

                <div className="relative mt-auto w-full p-5 text-white">
                  <p className="text-2xl font-bold">{pet.pet_name}</p>
                  <p className="text-sm text-white/80">
                    {pet.gender === "f" ? "Fêmea" : "Macho"} · {pet.age}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState
          icon="🐾"
          title="Nenhum animal disponível no momento"
          description="Continue acompanhando nosso trabalho. Novos animais podem chegar a qualquer momento."
        />
      )}
    </>
  );
}
