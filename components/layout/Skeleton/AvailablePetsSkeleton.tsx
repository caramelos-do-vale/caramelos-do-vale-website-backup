import { PetCardSkeleton } from "./PetCardSkeleton";

export function AvailablePetsSkeleton() {
  return (
    <section aria-label="Carregando animais disponíveis">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-10 flex flex-col gap-8">
          {/* Título */}
          <div className="bg-dark/10 h-10 w-72 animate-pulse rounded-xl md:h-12 md:w-96" />

          {/* Filtros */}
          <div className="grid gap-4 md:grid-cols-3">
            {/* Busca */}
            <div className="md:col-span-3">
              <div className="bg-dark/10 h-13 w-full animate-pulse rounded-2xl" />
            </div>

            {/* Selects */}
            <div className="bg-dark/10 h-13 w-full animate-pulse rounded-2xl" />
            <div className="bg-dark/10 h-13 w-full animate-pulse rounded-2xl" />
            <div className="bg-dark/10 h-13 w-full animate-pulse rounded-2xl" />
          </div>

          {/* Contador */}
          <div className="bg-dark/10 h-5 w-32 animate-pulse rounded" />
        </div>

        {/* Cards */}
        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <li key={index}>
              <PetCardSkeleton />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
