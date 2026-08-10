import { CTABanner } from "@/components/layout/CTABanner";
import { ImgBanner } from "@/components/layout/ImgBanner";
import { PageHero } from "@/components/layout/PageHero";
import Image from "next/image";
import { StatisticsSection } from "./StatisticsSection";

export function AboutPage() {
  return (
    <>
      <PageHero
        variant="dark"
        details={
          <span
            aria-hidden="true"
            className="blob-1 bg-yellow absolute -top-20 -right-20 h-96 w-96 opacity-10"
          ></span>
        }
        tag="Nossa história"
        title={
          <>
            A <span className="text-yellow">Caramelos</span>
            <br />
            <span className="text-blue">do Vale</span>
          </>
        }
        description="Uma associação de alunas e servidoras da UFRGS unidas pelo amor aos animais e pelo desejo de transformar vidas."
        img={
          <div className="relative h-95 w-full overflow-hidden shadow-[rgba(0,0,0,0.3)_0px_12px_50px]">
            <Image
              src="/about_us.jpg"
              alt="Voluntária da Caramelos do Vale com cão resgatado"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="blob-1 object-cover"
            />
          </div>
        }
      />
      <ImgBanner
        variant="light"
        tag="Quem somos"
        title={
          <>
            Uma corrente de amor{" "}
            <span className="text-blue">que começa no campus</span>
          </>
        }
        paragraphs={[
          "A Caramelos do Vale é uma associação formada por uma rede de alunas e servidoras da UFRGS, dedicada ao resgate e ao cuidado de cães abandonados no Campus do Vale.",
          "Em 2025, formalizou-se como Projeto de Extensão, aproximando-se da comunidade universitária por meio do voluntariado convertido em horas de extensão.",
          "Os cães resgatados chegam muitas vezes em condições precárias: doentes, infestados de pulgas e carrapatos e, em geral, não castrados. Nossa atuação também se estende ao Jardim Universitário, onde circulam animais sem tutores e em situação de vulnerabilidade.",
          "Todo o trabalho é voluntário e mantido exclusivamente por doações espontâneas, realização de eventos e venda de produtos.",
        ]}
        img={
          <div className="relative w-full max-w-xs md:w-146 md:max-w-full">
            <div className="relative h-115 w-full overflow-hidden rounded-3xl shadow-[rgba(26,46,56,0.12)_0px_8px_40px]">
              <Image
                src="/about_us_2.jpg"
                alt="Um cão resgatado com uma placa de disponível para adoção"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover object-top"
              />
            </div>
            <div className="bg-yellow absolute -right-5 -bottom-5 rounded-2xl p-5">
              <time className="text-dark text-3xl font-black">2022</time>
              <div className="text-yellow-deep text-xs font-bold">Fundação</div>
            </div>
          </div>
        }
      />
      <StatisticsSection />
      <ImgBanner
        variant="primary"
        imgPosition="left"
        tag="A história que começou tudo"
        title={
          <>
            Tudo começou com <span className="text-blue">Lobo e Loba.</span>
          </>
        }
        paragraphs={[
          "O Lobo e a Loba foram responsáveis pelo surgimento da Caramelos do Vale em 2022. Em um campus praticamente vazio por causa da pandemia, essa dupla de prováveis irmãos circulava em busca de comida e atenção.",
          "O nome Caramelos do Vale é em homenagem a eles, que hoje seguem sob cuidados da ONG — em um lar temporário cheio de amor, com todos os cuidados e a segurança que merecem.",
          "Por vezes, eles visitam o campus em dias de cafés, fazendo a maior festa. 🐾",
        ]}
        img={
          <div className="blob-2 relative h-110 w-full max-w-sm overflow-hidden shadow-[rgba(26,46,56,0.2)_0px_12px_50px] md:w-146 md:max-w-full">
            <Image
              src="/founders.jpg"
              alt="Lobo e Loba, fundadores da Caramelos do Vale"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover object-top md:object-center"
            />
          </div>
        }
        details={
          <span
            aria-hidden="true"
            className="blob-3 bg-dark absolute bottom-0 -left-16 h-64 w-64 opacity-10"
          ></span>
        }
      />
      <CTABanner
        variant="dark"
        title="Junte-se a nós"
        description="Seja adotando, voluntariando, apadrinhando ou doando — toda ajuda é fundamental para continuarmos nosso trabalho. Juntos, podemos fazer do mundo um lugar mais justo para os animais."
        ctaList={[{ label: "Quero ajudar", href: "/contact" }]}
      />
    </>
  );
}
