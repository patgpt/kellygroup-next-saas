// components/NeuLabel.tsx
import * as LabelPrimitive from "@radix-ui/react-label";
import { clsx } from "clsx";
import React from "react";

interface NeuLabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root> {
  className?: string;
}

export const NeuLabel: React.FC<NeuLabelProps> = ({
  className,
  children,
  ...props
}) => {
  const combinedClassName = clsx("neu-label", className);

  return (
    <LabelPrimitive.Root className={combinedClassName} {...props}>
      {children}
    </LabelPrimitive.Root>
  );
};
