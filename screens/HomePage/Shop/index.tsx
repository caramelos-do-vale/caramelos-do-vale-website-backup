import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Tag } from "@/components/ui/Tag";
import { Suspense } from "react";
import { ProductsForShop } from "./ProductsForShop";
import { ProductGridSkeleton } from "@/components/layout/Skeleton/ProductGridSkeleton";

export function Shop() {
  return (
    <section
      aria-labelledby="shop-title"
      className="bg-dark relative overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="blob-1 bg-yellow absolute -top-10 -right-10 h-56 w-56 opacity-10"
      ></span>
      <Container className="relative z-10 py-16 md:py-24">
        <div className="mb-8 flex flex-col gap-4">
          <Tag variant="secondary">Loja</Tag>
          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <h2
              id="shop-title"
              className="mb-2 max-w-xs text-3xl leading-tight font-black text-white md:max-w-sm md:text-4xl"
            >
              Leve a <span className="text-yellow">Caramelos</span> com você
            </h2>

            <ButtonLink href="/shop" className="h-fit">
              Visite nossa loja
            </ButtonLink>
          </div>
        </div>
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductsForShop />
        </Suspense>
      </Container>
    </section>
  );
}
