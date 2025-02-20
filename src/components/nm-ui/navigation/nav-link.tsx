// components/NeuLink.tsx
import { clsx } from "clsx";
import Link from "next/link";
import React from "react";

type NeuLinkVariant = "desktop" | "footer" | "drawer";
type ShadowVariant = "soft" | "medium" | "deep";
type TextEmbossVariant =
  | "raised"
  | "recessed"
  | "soft"
  | "bold"
  | "deep"
  | "gradient";

interface NeuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: NeuLinkVariant;
  shadowVariant?: ShadowVariant;
  textEmbossVariant?: TextEmbossVariant;
  children: React.ReactNode;
}

export const NeuLink: React.FC<NeuLinkProps> = ({
  href,
  variant = "desktop",
  shadowVariant = "medium",
  textEmbossVariant = "raised",
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center transition-all duration-200 focus-visible:outline-ring";
  const variantStyles = {
    desktop: "desktop-navlink",
    footer: "footer-navlink",
    drawer: "drawer-navlink",
  }[variant];
  const shadowStyles = {
    soft: "nm-flat",
    medium: "nm-raised",
    deep: "shadow-nm-deep",
  }[shadowVariant];
  const embossStyles = {
    raised: "text-emboss-raised",
    recessed: "text-emboss-recessed",
    soft: "text-emboss-soft",
    bold: "text-emboss-bold",
    deep: "text-emboss-deep",
    gradient: "text-emboss-gradient",
  }[textEmbossVariant];

  const combinedClassName = clsx(
    baseStyles,
    variantStyles,
    shadowStyles,
    embossStyles,
    className,
  );

  return (
    <Link href={href} className={combinedClassName} {...props}>
      {children}
    </Link>
  );
};
