import { MoveRight, PackageX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { mainInfo } from "@/constants/mainInfo";
import { ColorVariantProps } from "@/type/ColorVariantType";
import { IProduct } from "@/type/Product";
import { formatCurrency } from "@/utils/formatCurrency";

interface IProductCard {
  product: IProduct;
  variant?: ColorVariantProps;
  expanded?: boolean;
}

export function ProductCard({
  product,
  variant = "primary",
  expanded = false,
}: IProductCard) {
  const variantStyles = {
    primary: {
      card: "bg-yellow text-dark",
      secondaryText: "text-dark/70",
      focus: "focus-visible:outline-yellow",
      buttonBg: "bg-dark text-yellow",
    },
    secondary: {
      card: "bg-blue text-yellow",
      secondaryText: "text-white/70",
      focus: "focus-visible:outline-blue",
      buttonBg: "bg-yellow text-blue",
    },
    dark: {
      card: "bg-dark text-yellow",
      secondaryText: "text-white/70",
      focus: "focus-visible:outline-yellow",
      buttonBg: "bg-yellow text-dark",
    },
  }[variant];

  const isAvailable = product.available;

  const cardContent = (
    <>
      <div
        className={`
          relative
          overflow-hidden
          ${expanded ? "h-100" : "h-55"}
        `}
      >
        <Image
          src={product.img_link}
          alt={product.name}
          fill
          sizes="
            (max-width: 767px) 100vw,
            (max-width: 1279px) 50vw,
            33vw
          "
          className={`
            object-cover
            transition-[transform,filter]
            duration-500
            ease-out
            ${
              isAvailable
                ? "group-hover:scale-105"
                : "grayscale-[0.35] opacity-75"
            }
            motion-reduce:transition-none
            motion-reduce:group-hover:scale-100
          `}
        />

        {!isAvailable && (
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-dark/20
            "
          >
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                bg-dark/90
                px-3
                py-1.5
                text-xs
                font-bold
                text-white
                shadow-lg
              "
            >
              <PackageX size={14} aria-hidden="true" />
              Indisponível
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col p-5">
        {expanded && product.type && (
          <span
            className={`
              text-[10px]
              font-bold
              uppercase
              tracking-wider
              ${variantStyles.secondaryText}
            `}
          >
            {product.type}
          </span>
        )}

        <h3
          className="
            mt-1
            text-lg
            font-black
            leading-tight
          "
        >
          {product.name}
        </h3>

        {expanded && product.material && (
          <p
            className={`
              mt-1
              text-sm
              ${variantStyles.secondaryText}
            `}
          >
            {product.material}
          </p>
        )}

        <div className="mt-3 flex items-center justify-between gap-4">
          <p className="text-sm font-bold">{formatCurrency(product.price)}</p>

          {isAvailable && (
            <span
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${variantStyles.buttonBg}`}
            >
              <MoveRight aria-hidden="true" size={20} />
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (!isAvailable) {
    return (
      <article
        aria-label={`${product.name}, produto indisponível`}
        className={`
          group
          overflow-hidden
          rounded-3xl
          shadow-[0_4px_24px_rgba(0,0,0,0.2)]
          ${variantStyles.card}
        `}
      >
        {cardContent}
      </article>
    );
  }

  return (
    <article
      className={`
        group
        overflow-hidden
        rounded-3xl
        shadow-[0_4px_24px_rgba(0,0,0,0.2)]
        transition-[transform,box-shadow]
        duration-300
        ease-out
        hover:-translate-y-1
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        motion-reduce:transition-none
        motion-reduce:hover:transform-none
        ${variantStyles.card}
      `}
    >
      <Link
        href={mainInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Comprar ${product.name} pelo WhatsApp`}
        className={`
          block
          h-full
          rounded-3xl
          ${variantStyles.focus}
          focus-visible:outline-2
          focus-visible:outline-offset-4
        `}
      >
        {cardContent}
      </Link>
    </article>
  );
}
