// components/NeuTextarea.tsx
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

interface NeuTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  shadowVariant?: ShadowVariant;
  textEmbossVariant?: TextEmbossVariant;
}

export const NeuTextarea: React.FC<NeuTextareaProps> = ({
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
    <textarea
      className={clsx("neu-textarea", shadowClass, embossClass, className)}
      {...props}
    />
  );
};
