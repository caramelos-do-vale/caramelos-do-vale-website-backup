export function PetCardSkeleton() {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white">
      {/* Imagem */}
      <div className="bg-dark/10 aspect-4/3 w-full animate-pulse" />

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        {/* Nome */}
        <div className="bg-dark/10 h-9 w-40 animate-pulse rounded-lg" />

        {/* Tags */}
        <div className="flex gap-2">
          <div className="bg-dark/10 h-7 w-16 animate-pulse rounded-full" />
          <div className="bg-dark/10 h-7 w-20 animate-pulse rounded-full" />
          <div className="bg-dark/10 h-7 w-28 animate-pulse rounded-full" />
        </div>

        {/* Descrição */}
        <div className="space-y-2">
          <div className="bg-dark/10 h-4 w-full animate-pulse rounded" />
          <div className="bg-dark/10 h-4 w-4/5 animate-pulse rounded" />
        </div>

        {/* Botão */}
        <div className="bg-dark/10 mt-auto h-12 w-full animate-pulse rounded-xl" />
      </div>
    </article>
  );
}
