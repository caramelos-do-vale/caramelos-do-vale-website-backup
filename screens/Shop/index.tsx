import { CTABanner } from "@/components/layout/CTABanner";
import { PageHero } from "@/components/layout/PageHero";
import { mainInfo } from "@/constants/mainInfo";
import { ProductsSection } from "./ProductsSection";
import { getProducts } from "@/services/products";

export async function ShopPage() {
  const products = await getProducts();

  return (
    <>
      <PageHero
        variant="dark"
        details={
          <span
            aria-hidden="true"
            className="absolute -top-16 -right-16 w-80 h-80 opacity-10 blob-1 bg-yellow"
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
      <ProductsSection products={products} />
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
