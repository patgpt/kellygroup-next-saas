// components/NeuCard.tsx
import { clsx } from "clsx";
import React from "react";

type CardVariant = "default" | "flat" | "deep";

interface NeuCardProps {
  variant?: CardVariant;
  className?: string | string[];
  imageSrc?: string;
  imageAlt?: string;
  children: React.ReactNode;
}

export const NeuCard: React.FC<NeuCardProps> = ({
  variant = "default",
  className,
  imageSrc,
  imageAlt = "Card image",
  children,
}) => {
  const variantStyles = {
    default: "card",
    flat: "card-flat",
    deep: "card-deep",
  }[variant];

  const combinedClassName = clsx(
    variantStyles,
    Array.isArray(className) ? className.join(" ") : className,
  );

  return (
    <div className={combinedClassName}>
      {imageSrc && <img src={imageSrc} alt={imageAlt} className="card-image" />}
      {children}
    </div>
  );
};

// Sub-components
interface CardHeaderProps {
  className?: string | string[];
  children: React.ReactNode;
}

export const NeuCardHeader: React.FC<CardHeaderProps> = ({
  className,
  children,
}) => (
  <div
    className={clsx(
      "card-header",
      Array.isArray(className) ? className.join(" ") : className,
    )}
  >
    {children}
  </div>
);

interface CardContentProps {
  className?: string | string[];
  children: React.ReactNode;
}

export const NeuCardContent: React.FC<CardContentProps> = ({
  className,
  children,
}) => (
  <div
    className={clsx(
      "card-content",
      Array.isArray(className) ? className.join(" ") : className,
    )}
  >
    {children}
  </div>
);

interface CardFooterProps {
  className?: string | string[];
  children: React.ReactNode;
}

export const NeuCardFooter: React.FC<CardFooterProps> = ({
  className,
  children,
}) => (
  <div
    className={clsx(
      "card-footer",
      Array.isArray(className) ? className.join(" ") : className,
    )}
  >
    {children}
  </div>
);
