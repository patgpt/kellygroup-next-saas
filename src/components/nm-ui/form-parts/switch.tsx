// components/NeuSwitch.tsx
"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { clsx } from "clsx";
import React from "react";

type SwitchVariant = "default" | "small" | "large";

interface NeuSwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  variant?: SwitchVariant;
  className?: string;
}

export const NeuSwitch: React.FC<NeuSwitchProps> = ({
  variant = "default",
  className,
  ...props
}) => {
  const switchStyles = {
    default: "switch",
    small: "switch-small",
    large: "switch-large",
  }[variant];

  const thumbStyles = {
    default: "switch-thumb",
    small: "switch-thumb-small",
    large: "switch-thumb-large",
  }[variant];

  const combinedClassName = clsx(
    switchStyles,
    Array.isArray(className) ? className.join(" ") : className,
  );

  return (
    <SwitchPrimitive.Root className={combinedClassName} {...props}>
      <SwitchPrimitive.Thumb className={thumbStyles} />
    </SwitchPrimitive.Root>
  );
};
