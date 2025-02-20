// components/GalleryCard.tsx
import React from "react";

interface GalleryCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string | string[];
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="nm-flat bg-background dark:bg-background border-border flex flex-col gap-4 rounded-lg border p-6">
      <h3 className="text-foreground dark:text-foreground text-emboss-bold mb-2 text-lg font-medium">
        {title}
      </h3>
      <p className="text-muted-foreground dark:text-muted-foreground mb-4 text-sm">
        {description}
      </p>
      <div>{children}</div>
    </div>
  );
};
