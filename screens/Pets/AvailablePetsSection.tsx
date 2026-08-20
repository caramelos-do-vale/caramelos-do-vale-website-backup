"use client";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { PetCard } from "@/components/ui/PetCard";
import { Select } from "@/components/ui/Select";
import { IPet } from "@/type/Pet";
import { EmptyState } from "@/components/layout/EmptyState";
import { calculatePetAge } from "@/utils/calculatePetAge";

interface IAvailablePetsSection {
  pets: IPet[];
}

export function AvailablePetsSection({ pets }: IAvailablePetsSection) {
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    size: "Todos",
    gender: "Todos",
    age: "Todos",
  });

  const sizeOptions = useMemo(
    () => ["Todos", ...new Set(pets.map((pet) => pet.size).filter(Boolean))],
    [pets],
  );

  const ageOptions = useMemo(
    () => [
      "Todos",
      ...new Set(
        pets.map((pet) => calculatePetAge(pet.birthDate)).filter(Boolean),
      ),
    ],
    [pets],
  );

  const filteredAnimals = useMemo(() => {
    return pets.filter((pet) => {
      const matchesSearch = pet.name
        .toLowerCase()
        .includes(search.toLowerCase().trim());

      const matchesSize = filters.size === "Todos" || pet.size === filters.size;

      const matchesGender =
        filters.gender === "Todos" ||
        pet.gender?.toLowerCase() === filters.gender.toLowerCase();

      const matchesAge =
        filters.age === "Todos" ||
        calculatePetAge(pet.birthDate) === filters.age;

      return matchesSearch && matchesSize && matchesGender && matchesAge;
    });
  }, [pets, filters, search]);

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
                className="text-muted pointer-events-none absolute top-1/2 left-4 -translate-y-1/2"
              />

              <input
                type="search"
                placeholder="Buscar por nome..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="border-border placeholder:text-muted focus:border-yellow focus:ring-yellow/10 h-13 w-full rounded-2xl border bg-white pr-4 pl-11 text-sm transition-colors outline-none focus:ring-4"
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
            className="text-muted text-sm"
            aria-live="polite"
            aria-atomic="true"
          >
            Mostrando{" "}
            <strong className="text-dark">{filteredAnimals.length}</strong>{" "}
            {filteredAnimals.length === 1 ? "animal" : "animais"}
          </p>
        </div>
        {filteredAnimals.length ? (
          <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredAnimals.map((pet) => (
              <li key={pet.id}>
                <PetCard pet={pet} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            icon="🐶"
            title="Nenhum pet encontrado"
            description="Tente alterar a pesquisa ou alterar os filtros."
          />
        )}
      </Container>
    </section>
  );
}
