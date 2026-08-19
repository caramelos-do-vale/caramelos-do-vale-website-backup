import { EmptyState } from "@/components/layout/EmptyState";
import { ProductCard } from "@/components/ui/ProductCard";
import { getProductsForHomepage } from "@/services/products";

export async function ProductsForShop() {
  const products = await getProductsForHomepage();

  if (!products.length) {
    return (
      <EmptyState
        icon="🛍️"
        title="Nenhum produto disponível no momento"
        description="Nossa loja está sem produtos disponíveis agora. Continue acompanhando a Caramelos para conferir as novidades."
      />
    );
  }

  return (
    <ul
      aria-label="Produtos em destaque"
      className="flex flex-col gap-5 md:grid md:grid-cols-3"
    >
      {products.map((product, index) => (
        <li key={product.id}>
          <ProductCard
            product={product}
            variant={index % 2 === 1 ? "secondary" : "primary"}
          />
        </li>
      ))}
    </ul>
  );
}
