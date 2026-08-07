import { CTABanner } from "@/components/layout/CTABanner";
import { PageHero } from "@/components/layout/PageHero";
import { mainInfo } from "@/constants/mainInfo";
import Image from "next/image";
import { HowItWorksSection } from "./HowItWorksSection";

export function BookstorePage() {
  return (
    <>
      <PageHero
        variant="secondary"
        tag="Iniciativa"
        title={
          <>
            Sebo <span className="text-yellow">Caramelos</span>
          </>
        }
        description="Uma livraria com alma. O Sebo da Caramelos é uma iniciativa para arrecadar fundos para os cães — 100% dos valores são destinados aos animais sob cuidados da associação."
        cta={{
          label: "Acessar o Instagram do Sebo",
          href: mainInfo.bookstoreInstagram.href,
          external: true,
        }}
        img={
          <div className="relative w-full max-w-105 h-95">
            <div className="absolute top-0 left-0 h-72 w-56 -rotate-6 overflow-hidden rounded-2xl shadow-[rgba(0,0,0,0.3)_0px_8px_30px]">
              <Image
                src="/sebo.jpeg"
                alt="Sid com uma pilha de livros disponíveis no Sebo da Caramelos"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
            <div className="absolute top-10 right-0 h-64 w-52 rotate-5 overflow-hidden rounded-2xl shadow-[rgba(0,0,0,0.3)_0px_8px_30px]">
              <Image
                src="/sebo.jpeg"
                alt="Sid com uma pilha de livros disponíveis no Sebo da Caramelos"
                fill
                sizes="208px"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-yellow px-5 py-3 shadow-[rgba(234,183,74,0.6)_0px_4px_20px]"
            >
              <span className="text-sm font-black text-dark">
                @sebodacaramelos
              </span>
            </div>
          </div>
        }
      />
      <HowItWorksSection />
      <CTABanner
        details={
          <span
            aria-hidden="true"
            className="absolute -top-10 -right-10 w-56 h-56 opacity-10 blob-1 bg-dark"
          ></span>
        }
        variant="primary"
        icon="☕"
        title="Feiras presenciais no Campus"
        description="Além das vendas online, todo mês fazemos uma feira presencial no Campus do Vale da UFRGS. Você pode comprar, trocar e entregar doações. Acompanhe o Instagram para saber a data do próximo!"
        ctaList={[
          {
            label: "Ver próximas feiras",
            href: mainInfo.bookstoreInstagram.href,
            external: true,
          },
        ]}
      />
      <CTABanner
        variant="light"
        title="Quer doar livros?"
        description="Aceitamos livros de todos os tipos! Entre em contato pelo Instagram do Sebo para combinar a entrega no Campus do Vale da UFRGS ou em Porto Alegre."
        ctaList={[
          {
            label: "Falar com o Sebo",
            href: mainInfo.bookstoreInstagram.href,
            external: true,
          },
          {
            label: mainInfo.instagram.user,
            href: mainInfo.instagram.href,
            external: true,
          },
        ]}
      />
    </>
  );
}
