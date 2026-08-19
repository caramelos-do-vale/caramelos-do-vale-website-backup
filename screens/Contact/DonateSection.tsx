import { ButtonLink } from "@/components/ui/ButtonLink";
import { CopyButton } from "@/components/ui/CopyButton";
import { mainInfo } from "@/constants/mainInfo";

export function DonateSection() {
  return (
    <section
      className="bg-dark flex flex-col gap-8 rounded-3xl p-8 text-white md:grid md:grid-cols-2"
      aria-labelledby="donate-heading"
    >
      <div className="flex flex-col gap-3">
        <span className="text-4xl" aria-hidden="true">
          💛
        </span>
        <h3 className="text-2xl font-black md:text-3xl" id="donate-heading">
          Faça uma doação via PIX
        </h3>
        <p className="text-sm text-white/60">
          Nossas chaves PIX para doações espontâneas. Em nome de Associação
          Caramelos do Vale — Pagbank.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <CopyButton label="Pix por e-mail" value={mainInfo.mailPix} />
        <CopyButton label="Pix por CNPJ" value={mainInfo.cnpj} />

        <ButtonLink
          href={mainInfo.apoiase}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          Doação recorrente no Apoia.se
        </ButtonLink>
      </div>
    </section>
  );
}
