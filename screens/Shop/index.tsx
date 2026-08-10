import { CTABanner } from "@/components/layout/CTABanner";
import { PageHero } from "@/components/layout/PageHero";
import { mainInfo } from "@/constants/mainInfo";
import { Suspense } from "react";
import { ProductGridSkeleton } from "@/components/layout/Skeleton/ProductGridSkeleton";
import { ProductsContent } from "./ProductContent";
import { ShopSkeleton } from "@/components/layout/Skeleton/ShopSkeleton";

export function ShopPage() {
  return (
    <>
      <PageHero
        variant="dark"
        details={
          <span
            aria-hidden="true"
            className="blob-1 bg-yellow absolute -top-16 -right-16 h-80 w-80 opacity-10"
          ></span>
        }
        tag="Lojinha"
        title={
          <>
            Leve a <span className="text-yellow">Caramelos</span> com você
          </>
        }
        description="Produtos que apoiam o trabalho da organização. Ao comprar, você ajuda diretamente nos cuidados dos nossos animais."
      />
      <Suspense fallback={<ShopSkeleton />}>
        <ProductsContent />
      </Suspense>
      <CTABanner
        variant="primary"
        title="Como comprar?"
        description="Verifique os itens disponíveis e entre em contato pelo nosso WhatsApp para realizar o pedido. Entrega e retirada conforme combinado."
        ctaList={[
          {
            label: "Pedir pelo WhatsApp",
            href: mainInfo.whatsapp,
            external: true,
          },
        ]}
      />
    </>
  );
}
