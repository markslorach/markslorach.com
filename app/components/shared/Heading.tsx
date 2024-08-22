import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Heading = ({ children, className }: Props) => {
  return (
    <h2 className={cn("text-2xl font-semibold text-neutral-800", className)}>
      {children}
    </h2>
  );
};

export default Heading;
