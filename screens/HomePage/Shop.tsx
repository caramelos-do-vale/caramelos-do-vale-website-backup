import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { Tag } from "@/components/ui/Tag";
import { getProductsForHomepage } from "@/services/products";

export async function Shop() {
  const products = await getProductsForHomepage();

  return (
    <section
      aria-labelledby="shop-title"
      className="relative overflow-hidden bg-dark"
    >
      <span
        aria-hidden="true"
        className="absolute -top-10 -right-10 w-56 h-56 opacity-10 blob-1 bg-yellow"
      ></span>
      <Container className="relative z-10 py-16 md:py-24">
        <div className="flex flex-col gap-4 mb-8">
          <Tag variant="secondary">Loja</Tag>
          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <h2
              id="shop-title"
              className="text-3xl md:text-4xl font-black leading-tight max-w-xs md:max-w-sm mb-2 text-white"
            >
              Leve a <span className="text-yellow">Caramelos</span> com você
            </h2>

            <ButtonLink href="/shop">Visite nossa loja</ButtonLink>
          </div>
        </div>
        <ul className="flex flex-col gap-5 md:grid md:grid-cols-3">
          {products.map((item, index) => (
            <li key={item.id}>
              <ProductCard
                product={item}
                variant={index % 2 === 1 ? "secondary" : "primary"}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
