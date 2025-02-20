// components/NeuInput.tsx
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

interface NeuInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  shadowVariant?: ShadowVariant;
  textEmbossVariant?: TextEmbossVariant;
}

export const NeuInput: React.FC<NeuInputProps> = ({
  shadowVariant = "soft",
  textEmbossVariant = "soft",
  className,
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
    <input
      className={clsx("neu-input", shadowClass, embossClass, className)}
      {...props}
    />
  );
};
