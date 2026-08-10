"use client";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { ISelectOption, Select } from "@/components/ui/Select";
import { IProduct } from "@/type/Product";
import { EmptyState } from "@/components/layout/EmptyState";

interface IProductsSection {
  products: IProduct[];
}

export function ProductsSection({ products }: IProductsSection) {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("Todos");

  const filters = useMemo(
    () => ["Todos", ...new Set(products.map((product) => product.type))],
    [products],
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesType =
        selectedType === "Todos" || product.type === selectedType;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase().trim());

      return matchesType && matchesSearch;
    });
  }, [products, selectedType, search]);

  return (
    <section aria-labelledby="products-title">
      <h2 id="products-title" className="sr-only">
        Produtos da loja
      </h2>
      <Container className="py-16">
        <div className="mb-10 flex flex-col items-end gap-4 md:grid md:grid-cols-5">
          <label className="relative col-span-4 flex-1">
            <span className="sr-only">Pesquisar produtos</span>

            <Search
              aria-hidden="true"
              size={18}
              className="text-muted pointer-events-none absolute top-1/2 left-4 -translate-y-1/2"
            />

            <input
              type="search"
              placeholder="Buscar produto..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="border-border placeholder:text-muted focus:border-yellow focus:ring-yellow/10 h-13 w-full rounded-2xl border bg-white pr-4 pl-11 text-sm transition-colors outline-none focus:ring-4"
            />
          </label>

          <Select
            id="category_select"
            label="Categoria"
            value={selectedType}
            onChange={setSelectedType}
            options={filters.map(
              (filter) =>
                ({
                  label: filter,
                  value: filter,
                }) as ISelectOption,
            )}
          />
          <p
            className="text-muted text-sm"
            aria-live="polite"
            aria-atomic="true"
          >
            Mostrando{" "}
            <strong className="text-dark">{filteredProducts.length}</strong>{" "}
            {filteredProducts.length === 1 ? "animal" : "animais"}
          </p>
        </div>
        {filteredProducts.length === 0 ? (
          <div role="status" aria-live="polite" className="...">
            <h3 className="text-dark text-xl font-black">
              Nenhum produto encontrado
            </h3>

            <p className="text-muted mt-2">
              Tente alterar a pesquisa ou selecionar outra categoria.
            </p>
          </div>
        ) : filteredProducts.length ? (
          <ul className="grid gap-5 md:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <li key={product.id}>
                <ProductCard
                  expanded
                  variant={
                    index % 3 === 0
                      ? "primary"
                      : index % 3 === 1
                        ? "dark"
                        : "secondary"
                  }
                  product={product}
                />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            icon="🛍️"
            title="Nenhum produto encontrado"
            description="Tente alterar a pesquisa ou selecionar outra categoria."
          />
        )}
      </Container>
    </section>
  );
}
