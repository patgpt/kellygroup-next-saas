// components/NeuSelect.tsx
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

interface NeuSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  shadowVariant?: ShadowVariant;
  textEmbossVariant?: TextEmbossVariant;
}

export const NeuSelect: React.FC<NeuSelectProps> = ({
  shadowVariant = "soft",
  textEmbossVariant = "soft",
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
    <select
      className={clsx("neu-select", shadowClass, embossClass, className)}
      {...props}
    >
      {children}
    </select>
  );
};
