import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-cyan-600/30 bg-cyan-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600",
        className,
      )}
      {...props}
    />
  );
}
