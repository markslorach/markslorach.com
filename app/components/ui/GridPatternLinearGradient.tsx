"use client";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export function GridPatternLinearGradient() {
  return (
    <GridPattern
      width={60}
      height={60}
      x={-1}
      y={-1}
      className={cn(
        "hidden opacity-40 [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] md:block",
      )}
    />
  );
}
