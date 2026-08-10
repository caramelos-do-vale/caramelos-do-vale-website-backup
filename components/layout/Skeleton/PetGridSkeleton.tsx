export function PetGridSkeleton() {
  return (
    <ul
      aria-label="Carregando animais"
      className="grid grid-cols-2 gap-4 md:grid-cols-4"
    >
      <li
        aria-hidden="true"
        className="bg-dark/10 col-span-2 row-span-2 aspect-square animate-pulse rounded-3xl md:aspect-auto"
      />

      {Array.from({ length: 4 }).map((_, index) => (
        <li
          key={index}
          aria-hidden="true"
          className="bg-dark/10 aspect-square animate-pulse rounded-3xl md:aspect-4/3"
        />
      ))}
    </ul>
  );
}
