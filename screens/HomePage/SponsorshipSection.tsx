import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { getPetsforSponsorshipHomepage } from "@/services/pets";
import Image from "next/image";
import Link from "next/link";

export async function SponsorshipSection() {
  const pets = await getPetsforSponsorshipHomepage();

  return (
    <section
      aria-labelledby="sponsorship-title"
      className="relative overflow-hidden bg-yellow"
    >
      <span
        aria-hidden="true"
        className="blob-1 absolute -top-24 -left-16 h-80 w-80 bg-dark opacity-15"
      />
      <span
        aria-hidden="true"
        className="blob-2 absolute -right-16 -bottom-16 h-64 w-64 bg-blue opacity-10"
      />

      <Container className="relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <Tag variant="dark-transparent">Apadrinhamento</Tag>

          <h2
            id="sponsorship-title"
            className="mt-4 text-3xl leading-tight font-black md:text-4xl"
          >
            Nem todo encontro precisa terminar em{" "}
            <span className="text-blue">adoção</span> para transformar uma vida.
          </h2>

          <p className="mt-4 text-base text-dark/70 md:text-lg">
            Escolha um animal da Caramelos do Vale para apadrinhar e ajude a
            garantir os cuidados que ele precisa. Crie um vínculo real sem
            precisar levá-lo para casa.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
          <div
            aria-label="Exemplos de animais que podem ser apadrinhados"
            className="relative h-72 sm:h-80"
          >
            <Link href={`/pets/${pets[0].pet_id}`}>
              <figure className="absolute top-0 left-0 z-20 h-64 w-56 overflow-hidden rounded-3xl shadow-[rgba(26,46,56,0.25)_0px_12px_40px] sm:h-72 sm:w-64">
                <Image
                  src={pets[0].profile_img}
                  alt={pets[0].pet_name}
                  fill
                  sizes="(max-width: 640px) 224px, 256px"
                  className="object-cover"
                />
                <figcaption className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-dark/80 to-transparent p-4 pt-10">
                  <p className="text-sm font-black text-white">
                    {pets[0].pet_name}
                  </p>
                  <p className="text-xs text-white/70">
                    {pets[0].gender === "f" ? "Fêmea" : "Macho"} · {pets[0].age}
                  </p>
                </figcaption>
              </figure>
            </Link>
            <Link href={`/pets/${pets[1].pet_id}`}>
              <figure className="absolute top-8 left-40 z-30 h-52 w-44 overflow-hidden rounded-3xl border-[3px] border-yellow shadow-[rgba(26,46,56,0.2)_0px_8px_30px] sm:left-48 sm:h-56 sm:w-48">
                <Image
                  src={pets[1].profile_img}
                  alt="Mel, uma cachorra"
                  fill
                  sizes="(max-width: 640px) 176px, 192px"
                  className="object-cover"
                />

                <figcaption className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-dark/80 to-transparent p-3 pt-8">
                  <p className="text-sm font-black text-white">
                    {pets[1].pet_name}
                  </p>
                </figcaption>
              </figure>
            </Link>

            <div
              aria-label={"Mais de 30 animais precisam de padrinhos"}
              className="absolute top-0 right-0 z-40 rounded-2xl bg-blue px-4 py-2 shadow-[rgba(30,149,179,0.5)_0px_4px_16px] sm:right-4"
            >
              <p className="text-xs font-black text-white">+30 animais</p>
              <p className="text-xs text-white/70">precisam de padrinho</p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <ul className="flex flex-col gap-3">
              {pets.slice(2, 5).map((pet) => (
                <li key={pet.pet_id}>
                  <Link
                    href={`/pets/${pet.pet_id}`}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-3.5 rounded-2xl bg-white/60 shadow-[rgba(26,46,56,0.1)_0px_2px_12px]"
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 relative">
                      <Image
                        alt={pet.pet_name}
                        className="w-full h-full object-cover"
                        src={pet.profile_img}
                        fill
                        sizes="56px"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-bold">{pet.pet_name}</p>
                      <p className="text-xs text-[#3d1f00]/60">
                        {pet.gender === "f" ? "Fêmea" : "Macho"} · {pet.age}
                      </p>
                    </div>
                    <ButtonLink
                      size="sm"
                      variant="dark"
                      className="w-fit"
                      href=""
                    >
                      Apadrinhar
                    </ButtonLink>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 md:flex-row">
              <ButtonLink href="/sponsorship" className="w-fit" variant="dark">
                Quero apadrinhar
              </ButtonLink>
              <ButtonLink
                href="/pets"
                className="w-fit"
                variant="dark"
                appearance="outline"
              >
                Conheça os animais
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
