import { HeroSection } from "./HeroSection";
import { AdoptionSection } from "./AdoptionSection";
import { SponsorshipSection } from "./SponsorshipSection";
import { Shop } from "./Shop";
import { HowToHelp } from "./HowToHelp";
import { HomeCarousel } from "./HomeCarousel";
import { ImgBanner } from "@/components/layout/ImgBanner";
import Image from "next/image";
import { mainInfo } from "@/constants/mainInfo";

export async function HomePage() {
  return (
    <>
      <HomeCarousel />
      <HeroSection />
      <AdoptionSection />
      <SponsorshipSection />
      <ImgBanner
        variant="secondary"
        imgPosition="right"
        tag="Sobre nós"
        title={
          <>
            Uma rede de cuidado que{" "}
            <span className="text-yellow">transforma histórias</span>
          </>
        }
        paragraphs={[
          "A Caramelos do Vale é uma associação formada por alunas e servidoras da UFRGS, dedicada ao resgate e cuidado de cães abandonados no Campus do Vale.",
          "Em 2025, formalizou-se como Projeto de Extensão, conectando a comunidade universitária por meio do voluntariado convertido em horas de extensão.",
        ]}
        cta={[{ label: "Conheça a Caramelos do Vale", href: "/about" }]}
        img={
          <div className="relative">
            <div className="relative h-110 w-89.5 shadow-[rgba(0,0,0,0.25)_0px_12px_50px] md:w-146">
              <Image
                src="/about_us.jpg"
                alt="Voluntária da Caramelos do Vale com um cão resgatado"
                fill
                sizes="(max-width: 767px) 358px, 584px"
                className="blob-1 object-cover"
              />
            </div>
            <div className="bg-yellow absolute -bottom-4 -left-4 rounded-2xl p-4 shadow-[rgba(234,183,74,0.5)_0px_6px_24px] sm:bottom-6 sm:left-6">
              <p className="text-dark text-2xl font-black">2022</p>
              <p className="text-yellow-deep text-xs font-bold">Fundação</p>
            </div>
          </div>
        }
        details={
          <>
            <span
              aria-hidden="true"
              className="blob-1 bg-yellow absolute -top-20 -right-20 h-80 w-80 opacity-10"
            ></span>
            <span
              aria-hidden="true"
              className="blob-2 absolute -bottom-16 -left-16 h-64 w-64 bg-white opacity-10"
            ></span>
          </>
        }
      />
      <ImgBanner
        variant="primary"
        imgPosition="left"
        tag="UFRGS"
        title={
          <>
            Projeto de <span className="text-blue">Extensão</span>
          </>
        }
        paragraphs={[
          "Desde 2025, a Caramelos do Vale é um Projeto de Extensão oficial da UFRGS. Alunos podem unir o amor aos animais com horas de extensão no currículo acadêmico.",
        ]}
        cta={[
          {
            label: "Conheça o Projeto de Extensão",
            href: "/extension-project",
          },
        ]}
        img={
          <div className="relative">
            <div className="relative h-105 w-89.5 shadow-[rgba(0,0,0,0.25)_0px_12px_50px] md:w-146">
              <Image
                src="/extension_project.jpeg"
                alt="Projeto de Extensão Caramelos do Vale UFRGS"
                fill
                sizes="(max-width: 767px) 358px, 584px"
                className="blob-2 object-cover object-top-left"
              />
            </div>
            <div className="bg-blue absolute -top-4 -right-4 flex h-20 w-20 items-center justify-center rounded-full sm:top-6 sm:right-6">
              <span className="text-3xl">🎓</span>
            </div>
          </div>
        }
        details={
          <span
            aria-hidden="true"
            className="blob-3 bg-dark absolute top-0 right-0 h-64 w-64 opacity-10"
          ></span>
        }
      />
      <ImgBanner
        variant="light"
        imgPosition="right"
        tag="Iniciativa"
        title={
          <>
            Sebo <span className="text-yellow">Caramelos</span>
          </>
        }
        paragraphs={[
          "O Sebo é uma iniciativa para arrecadar fundos para os cães. 100% dos valores são destinados aos animais sob cuidados da associação.",
          "Você pode comprar, trocar ou doar livros pelo Instagram do Sebo. Também aceitamos doações de livros na entrega no Campus do Vale.",
        ]}
        cta={[
          {
            label: "Conheça o Sebo",
            href: "/bookstore",
          },
          {
            label: mainInfo.bookstoreInstagram.user,
            href: mainInfo.bookstoreInstagram.href,
            external: true,
          },
        ]}
        img={
          <div className="relative h-80 sm:h-96">
            <div className="absolute top-0 left-8 h-64 w-48 rotate-[-4deg] overflow-hidden rounded-3xl shadow-[rgba(26,46,56,0.15)_0px_8px_30px] sm:h-72 sm:w-56">
              <Image
                src="/sebo.jpeg"
                alt="Sid com uma pilha de livros disponíveis no Sebo da Caramelos"
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-cover"
              />
            </div>

            <div className="absolute top-8 right-4 h-56 w-44 rotate-3 overflow-hidden rounded-3xl shadow-[rgba(26,46,56,0.15)_0px_8px_30px] sm:h-64 sm:w-52">
              <Image
                src="/sebo_2.jpg"
                alt="Café da Caramelos com itens do Sebo"
                fill
                sizes="(max-width: 640px) 176px, 208px"
                className="object-cover"
              />
            </div>

            <div className="bg-yellow absolute bottom-4.5 left-1/2 -translate-x-1/2 rounded-2xl px-5 py-3 whitespace-nowrap shadow-[rgba(234,183,74,0.5)_0px_4px_20px]">
              <span className="text-dark text-sm font-black">
                📚 100% revertido para os cães
              </span>
            </div>
          </div>
        }
      />
      <Shop />
      <HowToHelp />
    </>
  );
}
