import { EmptyState } from "@/components/layout/EmptyState";
import { getProducts } from "@/services/products";
import { ProductsSection } from "./ProductsSection";

export async function ProductsContent() {
  const products = await getProducts();

  if (!products.length) {
    return (
      <EmptyState
        icon="🛍️"
        title="Nenhum produto disponível no momento"
        description="Nossa lojinha está sendo atualizada. Volte em breve para conferir nossas novidades."
      />
    );
  }

  return <ProductsSection products={products} />;
}
