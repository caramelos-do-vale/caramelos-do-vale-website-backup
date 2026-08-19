import type { ReactNode } from "react";

interface IEmptyState {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  className = "",
}: IEmptyState) {
  return (
    <div
      className={`bg-dark/5 flex flex-col items-center justify-center rounded-3xl px-6 py-12 text-center ${className} `}
    >
      {icon && (
        <div
          aria-hidden="true"
          className="bg-yellow/20 mb-4 flex h-14 w-14 items-center justify-center rounded-full text-2xl"
        >
          {icon}
        </div>
      )}

      <h3 className="text-dark text-lg font-black">{title}</h3>

      {description && (
        <p className="text-muted mt-2 max-w-md text-sm leading-relaxed">
          {description}
        </p>
      )}

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
