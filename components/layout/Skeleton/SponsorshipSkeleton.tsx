export function SponsorshipSkeleton() {
  return (
    <div
      aria-label="Carregando animais para apadrinhamento"
      className="mt-10 grid animate-pulse gap-8 md:grid-cols-2 md:items-end"
    >
      <div className="relative h-72 sm:h-80">
        <div className="bg-dark/10 absolute top-0 left-0 h-64 w-56 rounded-3xl sm:h-72 sm:w-64" />

        <div className="bg-dark/10 absolute top-8 left-40 h-52 w-44 rounded-3xl sm:left-48 sm:h-56 sm:w-48" />

        <div className="bg-dark/10 absolute top-0 right-0 h-12 w-28 rounded-2xl sm:right-4" />
      </div>

      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-dark/5 grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl p-3.5"
            >
              <div className="bg-dark/10 h-14 w-14 rounded-xl" />

              <div className="flex flex-col gap-2">
                <div className="bg-dark/10 h-4 w-24 rounded" />
                <div className="bg-dark/10 h-3 w-32 rounded" />
              </div>

              <div className="bg-dark/10 h-9 w-24 rounded-xl" />
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <div className="bg-dark/10 h-12 w-36 rounded-xl" />
          <div className="bg-dark/10 h-12 w-40 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
