// components/NeuButton.tsx
"use client";

import { clsx } from "clsx";
import React from "react";

type ShadowVariant = "soft" | "medium" | "deep";
type TextEmbossVariant =
  | "raised"
  | "recessed"
  | "soft"
  | "bold"
  | "deep"
  | "gradient";

interface NeuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shadowVariant?: ShadowVariant;
  textEmbossVariant?: TextEmbossVariant;
}

export const NeuButton: React.FC<NeuButtonProps> = ({
  shadowVariant = "medium",
  textEmbossVariant = "bold",
  className,
  children,
  ...props
}) => {
  const shadowClass = {
    soft: "nm-flat",
    medium: "nm-raised",
    deep: "shadow-nm-deep",
  }[shadowVariant];
  const embossClass = {
    raised: "text-emboss-raised",
    recessed: "text-emboss-recessed",
    soft: "text-emboss-soft",
    bold: "text-emboss-bold",
    deep: "text-emboss-deep",
    gradient: "text-emboss-gradient",
  }[textEmbossVariant];

  return (
    <button
      className={clsx("neu-button", shadowClass, embossClass, className)}
      {...props}
    >
      {children}
    </button>
  );
};
