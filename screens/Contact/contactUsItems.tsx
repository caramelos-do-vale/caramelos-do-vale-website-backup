import { mainInfo } from "@/constants/mainInfo";
import { CTAProps } from "@/type/CTAType";
import { Mail } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export type ContactUsItemProps = {
  variant: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: CTAProps;
};

export const contactUsItems: ContactUsItemProps[] = [
  {
    variant: "primary",
    icon: (
      <span className="h-14 w-14 flex items-center justify-center rounded-2xl bg-[#25d366] p-2">
        <FaWhatsapp aria-hidden="true" className="text-2xl text-white" />
      </span>
    ),
    title: "WhatsApp",
    description:
      "A maneira mais rápida de falar com a gente sobre adoções, apadrinhamentos e parcerias.",
    cta: { label: "Enviar mensagem", href: mainInfo.whatsapp, external: true },
  },
  {
    variant: "dark",
    icon: (
      <span className="h-14 w-14 flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgb(245,133,41),rgb(221,42,123),rgb(129,52,175))] p-2">
        <FaInstagram aria-hidden="true" className="text-2xl text-white" />
      </span>
    ),
    title: "Instagram",
    description:
      "Acompanhe o dia a dia dos animais, histórias e novidades. Também respondemos mensagens por lá.",
    cta: {
      label: mainInfo.instagram.user,
      href: mainInfo.instagram.href,
      external: true,
    },
  },
  {
    variant: "secondary",
    icon: (
      <span className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white/20 p-2">
        <Mail aria-hidden="true" size={24} className="text-white" />
      </span>
    ),
    title: "E-mail",
    description:
      "Acompanhe o dia a dia dos animais, histórias e novidades. Também respondemos mensagens por lá.",
    cta: {
      label: "caramelosdovale@gmail.com",
      href: mainInfo.mail,
    },
  },
];
