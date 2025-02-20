// components/NeuAvatar.tsx
"use client";

import { clsx } from "clsx";
import Image, { StaticImageData } from "next/image";
import React from "react";

type AvatarVariant =
  | "default"
  | "bordered"
  | "sunken"
  | "outer-shadow"
  | "inner-shadow";
type AvatarSize = "sm" | "md" | "lg";

interface NeuAvatarProps extends StaticImageData {
  src: string;
  alt: string;
  variant?: AvatarVariant;
  size?: AvatarSize;
  className?: string;
}

export const NeuAvatar: React.FC<NeuAvatarProps> = ({
  src,
  alt = "User avatar",
  variant = "default",
  size = "md",
  className,
}) => {
  const variantStyles = {
    default: "avatar",
    bordered: "avatar-bordered",
    sunken: "avatar-sunken",
    "outer-shadow": "avatar-outer-shadow",
    "inner-shadow": "avatar-inner-shadow",
  }[variant];

  const sizeStyles = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }[size];

  const combinedClassName = clsx(
    variantStyles,
    sizeStyles,
    Array.isArray(className) ? className.join(" ") : className,
  );

  return (
    <div className={combinedClassName} role="img" aria-label={alt}>
      <Image
        src={src}
        alt={alt}
        width={size === "sm" ? 32 : size === "md" ? 48 : 64}
        height={size === "sm" ? 32 : size === "md" ? 48 : 64}
        className="h-full w-full object-cover"
        priority={variant === "default"} // Optional: prioritize default variant for faster loading
      />
    </div>
  );
};
