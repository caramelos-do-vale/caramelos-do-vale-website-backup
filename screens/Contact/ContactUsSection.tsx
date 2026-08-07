"use client";
import React, { useState } from "react";
import { ContactUsItemProps, contactUsItems } from "./contactUsItems";
import { mainInfo } from "@/constants/mainInfo";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import { ColorVariantProps } from "@/type/ColorVariantType";

function Content({ item }: { item: ContactUsItemProps }) {
  return (
    <>
      <span aria-hidden="true">{item.icon}</span>
      <h3 className="text-xl font-black ">{item.title}</h3>
      <p className="-mb-3 text-sm">{item.description}</p>
    </>
  );
}

export function ContactUsSection() {
  const [copied, setCopied] = useState(false);

  async function handleCopy(value: string) {
    await navigator.clipboard.writeText(value);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  const variantStyle = {
    primary: {
      background: "bg-yellow",
      tag: "dark",
      description: "",
      cta: "",
    },
    secondary: {
      background: "bg-blue text-white",
      tag: "light",
      description: "text-white",
      cta: "text-yellow",
    },
    dark: {
      background: "bg-dark text-white",
      tag: "primary-transparent",
      description: "text-white/70",
      cta: "text-yellow",
    },
  };

  const baseStyle =
    "group transition-all hover:scale-102 duration-200 p-7 rounded-3xl flex flex-col gap-4 text-left";

  return (
    <section
      className="flex flex-col gap-8"
      aria-labelledby="contact-us-heading"
    >
      <h2 className="text-2xl font-black" id="contact-us-heading">
        Fale conosco
      </h2>
      <div className="flex flex-col gap-5 md:grid md:grid-cols-3">
        {contactUsItems.map((item) => (
          <React.Fragment key={item.title}>
            {item.cta.href === mainInfo.mail ? (
              <button
                onClick={() => handleCopy(item.cta.href)}
                className={`${baseStyle} ${variantStyle[item.variant as ColorVariantProps].background}`}
              >
                <Content item={item} />
                <p
                  className={`font-black text-sm text-yellow flex gap-1 mt-3 ${variantStyle[item.variant as ColorVariantProps].cta}`}
                >
                  {copied ? (
                    "Copiado!"
                  ) : (
                    <>
                      {item.cta.label}
                      <MoveRightIcon size={14} aria-hidden="true" />
                    </>
                  )}
                </p>
              </button>
            ) : (
              <Link
                href={item.cta.href}
                {...(item.cta.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className={`${baseStyle} ${variantStyle[item.variant as ColorVariantProps].background}`}
              >
                <Content item={item} />
                <p
                  className={`font-black text-sm flex gap-1 mt-3 ${variantStyle[item.variant as ColorVariantProps].cta}`}
                >
                  {item.cta.label}{" "}
                  <MoveRightIcon size={14} aria-hidden="true" />
                </p>
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
