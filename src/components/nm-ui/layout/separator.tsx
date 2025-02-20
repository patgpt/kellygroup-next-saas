// components/NeuSeparator.tsx
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { clsx } from "clsx";
import React from "react";

type SeparatorVariant = "default" | "subtle" | "prominent";
type Orientation = "horizontal" | "vertical";

interface NeuSeparatorProps
  extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  variant?: SeparatorVariant;
  orientation?: Orientation;
  className?: string;
}

export const NeuSeparator: React.FC<NeuSeparatorProps> = ({
  variant = "default",
  orientation = "horizontal",
  className,
  ...props
}) => {
  const variantStyles = {
    default: "separator",
    subtle: "separator-subtle",
    prominent: "separator-prominent",
  }[variant];

  const combinedClassName = clsx(
    variantStyles,
    Array.isArray(className) ? className.join(" ") : className,
  );

  return (
    <SeparatorPrimitive.Root
      className={combinedClassName}
      orientation={orientation}
      {...props}
    />
  );
};
