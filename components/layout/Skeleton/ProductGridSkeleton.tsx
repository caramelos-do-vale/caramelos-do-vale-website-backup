import {
  IProductCardSkeleton,
  ProductCardSkeleton,
} from "./ProductCardSkeleton";

export function ProductGridSkeleton(props: IProductCardSkeleton) {
  return (
    <ul
      aria-label="Carregando produtos"
      className="flex animate-pulse flex-col gap-5 md:grid md:grid-cols-3"
    >
      {[1, 2, 3].map((item) => (
        <li key={item}>
          <ProductCardSkeleton {...props} />
        </li>
      ))}
    </ul>
  );
}
