import { CTABanner } from "@/components/layout/CTABanner";
import { PageHero } from "@/components/layout/PageHero";
import { mainInfo } from "@/constants/mainInfo";
import Image from "next/image";
import { WhatItIsSection } from "./WhatItIsSection";

export function ExtensionPage() {
  return (
    <>
      <PageHero
        variant="primary"
        details={
          <span
            aria-hidden="true"
            className="absolute top-0 right-0 w-96 h-96 opacity-10 blob-1 bg-dark"
          ></span>
        }
        tag="🎓 UFRGS · Desde 2025"
        title={
          <>
            Projeto de <span className="text-blue">Extensão</span>
          </>
        }
        description="Você é aluno da UFRGS, ama os animais e ainda precisa de horas de extensão? Aqui, você transforma horas de extensão em impacto real na vida de cãezinhos resgatados."
        cta={{
          label: "Acessar o edital",
          href: mainInfo.publicNotice,
          external: true,
        }}
        img={
          <div className="relative h-90 w-full max-w-120">
            <div className="blob-2 relative h-full w-full overflow-hidden shadow-[rgba(26,46,56,0.2)_0px_12px_50px]">
              <Image
                src="/extension_project.jpeg"
                alt="Projeto de Extensão Caramelos do Vale UFRGS"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover object-top-left"
              />
            </div>
          </div>
        }
      />
      <WhatItIsSection />
      <CTABanner
        details={
          <span
            aria-hidden="true"
            className="absolute -right-20 -top-20 w-72 h-72 opacity-10 blob-1 bg-yellow"
          ></span>
        }
        variant="secondary"
        icon="🎓"
        title="O edital está aberto!"
        description="Acesse o edital do Projeto de Extensão Caramelos do Vale na plataforma da UFRGS. Aqui, você transforma horas de extensão em impacto real na vida de cãezinhos resgatados."
        ctaList={[
          {
            label: "Acessar o edital",
            href: mainInfo.publicNotice,
            external: true,
          },
          {
            label: "Falar com a gente",
            href: mainInfo.instagram.href,
            external: true,
          },
        ]}
      />
    </>
  );
}
