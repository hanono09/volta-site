import clsx from "clsx";
import { ReactNode } from "react";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border border-ink-500 bg-ink-800/80 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-bone-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
