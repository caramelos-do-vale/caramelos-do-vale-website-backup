/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { PetCard } from "@/components/ui/PetCard";
import { Select } from "@/components/ui/Select";

interface IAvailablePetsSection {
  animals: any[];
}

export function AvailablePetsSection({ animals }: IAvailablePetsSection) {
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    size: "Todos",
    gender: "Todos",
    age: "Todos",
  });

  const sizeOptions = useMemo(
    () => [
      "Todos",
      ...new Set(animals.map((animal) => animal.size).filter(Boolean)),
    ],
    [animals],
  );

  const ageOptions = useMemo(
    () => [
      "Todos",
      ...new Set(animals.map((animal) => animal.age).filter(Boolean)),
    ],
    [animals],
  );

  const filteredAnimals = useMemo(() => {
    return animals.filter((animal) => {
      const matchesSearch = animal.pet_name
        .toLowerCase()
        .includes(search.toLowerCase().trim());

      const matchesSize =
        filters.size === "Todos" || animal.size === filters.size;

      const matchesGender =
        filters.gender === "Todos" ||
        animal.gender?.toLowerCase() === filters.gender.toLowerCase();

      const matchesAge = filters.age === "Todos" || animal.age === filters.age;

      return matchesSearch && matchesSize && matchesGender && matchesAge;
    });
  }, [animals, filters, search]);

  return (
    <section aria-labelledby="available-pets-title">
      <Container className="py-16">
        <h2 id="available-pets-title" className="sr-only">
          Animais disponíveis para adoção
        </h2>
        <div className="mb-10 flex flex-col gap-4">
          <div className="grid">
            <label className="relative">
              <span className="sr-only">Buscar animal</span>

              <Search
                aria-hidden="true"
                size={18}
                className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted"
              />

              <input
                type="search"
                placeholder="Buscar por nome..."
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
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Select
              id="size_select"
              label="Porte"
              value={filters.size}
              onChange={(value) =>
                setFilters((current) => ({
                  ...current,
                  size: value,
                }))
              }
              options={sizeOptions.map((option) => ({
                label: option,
                value: option,
              }))}
            />

            <Select
              id="gender_select"
              label="Sexo"
              value={filters.gender}
              onChange={(value) =>
                setFilters((current) => ({
                  ...current,
                  gender: value,
                }))
              }
              options={[
                { label: "Todos", value: "Todos" },
                { label: "Fêmea", value: "f" },
                { label: "Macho", value: "m" },
              ]}
            />

            <Select
              id="age_select"
              label="Idade"
              value={filters.age}
              onChange={(value) =>
                setFilters((current) => ({
                  ...current,
                  age: value,
                }))
              }
              options={ageOptions.map((option) => ({
                label: option,
                value: option,
              }))}
            />
          </div>

          <p
            className="text-sm text-muted"
            aria-live="polite"
            aria-atomic="true"
          >
            Mostrando{" "}
            <strong className="text-dark">{filteredAnimals.length}</strong>{" "}
            {filteredAnimals.length === 1 ? "animal" : "animais"}
          </p>
        </div>
        {filteredAnimals.length === 0 ? (
          <div role="status" aria-live="polite" className="...">
            <h3 className="text-xl font-black text-dark">
              Nenhum animal encontrado
            </h3>

            <p className="mt-2 text-muted">
              Tente alterar os filtros ou limpar a pesquisa.
            </p>
          </div>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredAnimals.map((animal) => (
              <li key={animal.pet_id}>
                <PetCard pet={animal} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
