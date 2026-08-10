import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { mainInfo } from "@/constants/mainInfo";
import { CopyButton } from "@/components/ui/CopyButton";
import { footerSections } from "./footerSections";
import { Container } from "../Container";

export function Footer() {
  return (
    <footer className="border-yellow border-t-4 bg-(--color-dark)">
      <Container className="grid grid-cols-2 gap-8 pt-14 pb-10 text-sm text-white/60 md:grid-cols-5">
        <section
          aria-labelledby="footer-about"
          className="col-span-2 flex flex-col gap-4"
        >
          <h2 id="footer-about" className="sr-only">
            Sobre a Caramelos do Vale
          </h2>

          <Link
            href="/"
            aria-label="Voltar para página inicial"
            className="inline-flex"
          >
            <Image
              src="/caramelos_do_vale_logo_white.png"
              alt=""
              width={97}
              height={40}
              priority={false}
            />
          </Link>

          <p>Resgatando vidas no Campus do Vale da UFRGS desde 2022.</p>

          <ul className="flex items-center gap-2">
            <li>
              <Link
                title="Instagram da Caramelos do Vale"
                href={mainInfo.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar Instagram da Caramelos do Vale"
                className="focus-visible:outline-yellow flex items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(245,133,41),rgb(221,42,123),rgb(129,52,175))] p-2 transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(221,42,123,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                <FaInstagram
                  aria-hidden="true"
                  className="text-base text-white"
                />
              </Link>
            </li>

            <li>
              <Link
                title="Apoia.se da Caramelos do Vale"
                href={mainInfo.apoiase}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar Apoia.se da Caramelos do Vale"
                className="focus-visible:outline-yellow flex items-center justify-center rounded-full p-1 transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,255,255,0.15)] focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                <Image
                  src="/apoiase_logo.png"
                  alt=""
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </Link>
            </li>

            <li>
              <Link
                title="WhatsApp da Caramelos do Vale"
                href={mainInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar WhatsApp da Caramelos do Vale"
                className="focus-visible:outline-yellow flex items-center justify-center rounded-full bg-[#25d366] p-2 transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,211,102,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                <FaWhatsapp
                  aria-hidden="true"
                  className="text-base text-white"
                />
              </Link>
            </li>
          </ul>
        </section>

        {footerSections.map((footerSection) => (
          <nav
            key={footerSection.title}
            aria-labelledby={`footer-${footerSection.title}`}
            className="flex flex-col gap-3"
          >
            <h3
              id={`footer-${footerSection.title}`}
              className="text-yellow text-xs uppercase"
            >
              {footerSection.title}
            </h3>

            <ul className="flex flex-col gap-2">
              {footerSection.urlLists.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.url}
                    className="after:bg-yellow focus-visible:outline-yellow relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:transition-all hover:text-white hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <section
          aria-labelledby="footer-pix"
          className="col-span-2 flex flex-col gap-3 md:col-span-1"
        >
          <h3 id="footer-pix" className="text-yellow text-xs uppercase">
            Doação via Pix
          </h3>

          <CopyButton
            size="sm"
            variant="light"
            label="Chave Pix — e-mail"
            value={mainInfo.mail}
          />

          <CopyButton
            size="sm"
            variant="light"
            label="Chave Pix — CNPJ"
            value={mainInfo.cnpj}
          />
        </section>

        <section
          aria-label="Informações legais"
          className="col-span-full mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/60 md:flex-row md:justify-between"
        >
          <p>© 2025 Associação Caramelos do Vale — Projeto de Extensão UFRGS</p>

          <p>CNPJ {mainInfo.cnpj}</p>
        </section>
      </Container>
    </footer>
  );
}
