import { CTABanner } from "@/components/layout/CTABanner";
import { PageHero } from "@/components/layout/PageHero";
import { mainInfo } from "@/constants/mainInfo";
import Image from "next/image";
import { ImgBanner } from "@/components/layout/ImgBanner";
import { HowItWorks } from "./HowItWorks";
import { WhereItGoes } from "./WhereItGoes";
import { Suspense } from "react";
import { SponsorshipPets } from "./SponsorshipPets";
import { SponsorshipPetsSkeleton } from "@/components/layout/Skeleton/SponsorshipPetsSkeleton";

export async function SponsorshipPage() {
  return (
    <>
      <PageHero
        variant="primary"
        tag="Apadrinhamento"
        title={
          <>
            Apadrinhe <span className="text-blue">um amigo</span>
          </>
        }
        description="Nem todo encontro precisa terminar em adoção para transformar uma vida. Escolha um animal e faça parte da história dele — mesmo sem levá-lo para casa."
        details={
          <span
            aria-hidden="true"
            className="blob-1 bg-blue absolute -top-10 -right-10 h-80 w-80 opacity-10"
          ></span>
        }
        img={
          <div className="relative h-72 sm:h-80 lg:h-96">
            <div className="blob-1 absolute top-0 right-0 h-64 w-56 overflow-hidden shadow-[rgba(0,0,0,0.25)_0px_12px_40px] md:h-80 md:w-72">
              <Image
                src="/sponsorship_hero_1.jpg"
                alt=""
                fill
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
                className="object-cover"
              />
            </div>
            <div className="border-blue absolute bottom-0 left-4 h-28 w-28 overflow-hidden rounded-full border-4 shadow-[rgba(0,0,0,0.2)_0px_6px_24px] md:bottom-4 md:left-16 md:h-32 md:w-32">
              <Image
                src="/sponsorship_hero_2.jpg"
                alt=""
                fill
                sizes="(max-width: 640px) 112px, 128px"
                className="object-cover"
              />
            </div>
            <div className="absolute top-8 left-12 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-[rgba(0,0,0,0.2)_0px_6px_24px] md:left-20 md:h-28 md:w-28">
              <Image
                src="/sponsorship_hero_3.jpg"
                alt=""
                fill
                sizes="(max-width: 640px) 96px, 112px"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="bg-blue absolute right-0 bottom-4 flex h-12 w-12 items-center justify-center rounded-full text-2xl shadow-[rgba(234,183,74,0.6)_0px_4px_16px] sm:right-4"
            >
              💛
            </div>
          </div>
        }
      />
      <ImgBanner
        variant="light"
        imgPosition="left"
        title={
          <>
            O que é <span className="text-blue">apadrinhar?</span>
          </>
        }
        paragraphs={[
          "Apadrinhar é criar um vínculo real com um animal e contribuir para o cuidado dele — mesmo sem levá-lo para casa.",
          "Você escolhe um animal, passa a fazer parte da história dele, e sua contribuição ajuda a garantir que ele tenha alimentação adequada, cuidados veterinários e tudo o que precisa enquanto espera por um lar.",
          "O apadrinhamento não é uma versão menor da adoção. É uma relação própria — de carinho, vínculo e responsabilidade compartilhada.",
        ]}
        img={
          <div className="blob-2 w-max-md relative h-100 w-full overflow-hidden">
            <Image
              alt="Chocotone, um dos cães resgatados"
              className="h-full w-full object-cover"
              fill
              src="/sponsorship.jpg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        }
      />
      <Suspense fallback={<SponsorshipPetsSkeleton />}>
        <SponsorshipPets />
      </Suspense>
      <HowItWorks />
      <WhereItGoes />
      <CTABanner
        variant="dark"
        icon="💛"
        title="Pronto para apadrinhar?"
        description="Fale com a gente pelo Instagram ou WhatsApp e escolha o animal que vai fazer parte da sua vida."
        ctaList={[
          {
            label: "Quero apadrinhar",
            href: mainInfo.instagram.href,
            external: true,
          },
        ]}
      />
    </>
  );
}
