import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { mainInfo } from "@/constants/mainInfo";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-(--color-dark) text-white"
    >
      <Container className="grid gap-10 py-10 md:grid-cols-[3fr_2fr] md:items-center md:py-16">
        <div className="flex max-w-3xl flex-col gap-4">
          <h1
            id="hero-title"
            className="text-4xl leading-tight font-black md:text-5xl lg:text-6xl"
          >
            Transformando <span className="text-yellow">histórias.</span>
            <br />
            Construindo novos <span className="text-blue">começos.</span>
          </h1>

          <p className="text-base text-white/70 md:text-lg">
            A Caramelos do Vale resgata e cuida de cães abandonados no Campus do
            Vale da UFRGS. Um projeto de extensão feito com muito amor e
            voluntariado.
          </p>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/pets" className="w-fit">
              Ver animais disponíveis
            </ButtonLink>

            <ButtonLink href="/about" className="w-fit" appearance="outline">
              Conheça a ONG
            </ButtonLink>
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-3 sm:grid-cols-3 md:flex md:flex-col w-full">
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-yellow bg-yellow/30 p-4 text-center md:items-start md:rounded-3xl md:p-5 md:text-left">
            <dd className="order-1 text-2xl font-bold text-yellow md:text-3xl">
              <span aria-hidden="true">+</span> {mainInfo.rescues}
            </dd>
            <dt className="order-2 text-xs">animais resgatados</dt>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-2xl border border-yellow bg-yellow/30 p-4 text-center md:items-start md:rounded-3xl md:p-5 md:text-left">
            <dd className="order-1 text-2xl font-bold text-yellow md:text-3xl">
              <span aria-hidden="true">+</span> {mainInfo.adoptions}
            </dd>
            <dt className="order-2 text-xs">adoções realizadas</dt>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-2xl border border-yellow bg-yellow/30 p-4 text-center md:items-start md:rounded-3xl md:p-5 md:text-left">
            <dd className="order-1 text-2xl font-bold text-yellow md:text-3xl">
              <span aria-hidden="true">+</span> {mainInfo.inCare}
            </dd>
            <dt className="order-2 text-xs">em nossos cuidados</dt>
          </div>
        </dl>
      </Container>
    </section>
  );
}
