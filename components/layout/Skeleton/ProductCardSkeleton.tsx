export interface IProductCardSkeleton {
  color?: "light" | "dark";
  expanded?: boolean;
}

export function ProductCardSkeleton({
  color = "light",
  expanded,
}: IProductCardSkeleton) {
  const colorVariantStyle = {
    light: {
      transparency10: "bg-white/10",
      transparency50: "bg-white/5",
    },
    dark: {
      transparency10: "bg-dark/10",
      transparency50: "bg-dark/5",
    },
  };

  return (
    <article
      className={`overflow-hidden rounded-3xl ${colorVariantStyle[color].transparency50}`}
    >
      <div
        className={`${expanded ? "h-100" : "h-55"} ${colorVariantStyle[color].transparency10}`}
      />

      <div className="flex flex-col gap-3 p-5">
        <div
          className={`h-5 w-2/3 rounded ${colorVariantStyle[color].transparency10}`}
        />

        <div
          className={`h-4 w-1/2 rounded ${colorVariantStyle[color].transparency10}`}
        />
      </div>
    </article>
  );
}
