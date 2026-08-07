/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { Select } from "@/components/ui/Select";

interface IProductsSection {
  products: any[];
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
        <div className="mb-10 flex flex-col gap-4 items-end md:grid md:grid-cols-5">
          <label className="relative flex-1 col-span-4">
            <span className="sr-only">Pesquisar produtos</span>

            <Search
              aria-hidden="true"
              size={18}
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted"
            />

            <input
              type="search"
              placeholder="Buscar produto..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="
                h-13
                w-full
                rounded-2xl
                border
                border-border
                bg-white
                pl-11
                pr-4
                text-sm
                outline-none
                transition-colors
                placeholder:text-muted
                focus:border-yellow
                focus:ring-4
                focus:ring-yellow/10
              "
            />
          </label>

          <Select
            id="category_select"
            label="Categoria"
            value={selectedType}
            onChange={setSelectedType}
            options={filters.map((filter) => ({
              label: filter,
              value: filter,
            }))}
          />
        </div>
        <p className="text-sm text-muted" aria-live="polite" aria-atomic="true">
          Mostrando{" "}
          <strong className="text-dark">{filteredProducts.length}</strong>{" "}
          {filteredProducts.length === 1 ? "animal" : "animais"}
        </p>
        {filteredProducts.length === 0 ? (
          <div role="status" aria-live="polite" className="...">
            <h3 className="text-xl font-black text-dark">
              Nenhum produto encontrado
            </h3>

            <p className="mt-2 text-muted">
              Tente alterar a pesquisa ou selecionar outra categoria.
            </p>
          </div>
        ) : (
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
        )}
      </Container>
    </section>
  );
}
