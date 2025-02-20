// components/NeuCollapsible.tsx
"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

/**
 * Variants for the collapsible component size
 */
type CollapsibleVariant = "default" | "compact" | "wide";

/**
 * Props for the main Collapsible component
 * @extends {React.ComponentProps<typeof CollapsiblePrimitive.Root>}
 */
interface NeuCollapsibleProps
  extends React.ComponentProps<typeof CollapsiblePrimitive.Root> {
  /** Visual variant of the collapsible */
  variant?: CollapsibleVariant;
  /** Additional CSS classes */
  className?: string;
}

/**
 * A neumorphic collapsible component that provides an expandable/collapsible section
 * with smooth animations and neumorphic styling.
 */
export const NeuCollapsible: React.FC<NeuCollapsibleProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    default: "collapsible",
    compact: "collapsible-compact",
    wide: "collapsible-wide",
  }[variant];

  const combinedClassName = clsx(
    variantStyles,
    Array.isArray(className) ? className.join(" ") : className,
  );

  return (
    <CollapsiblePrimitive.Root className={combinedClassName} {...props}>
      {children}
    </CollapsiblePrimitive.Root>
  );
};

// Sub-components

/**
 * Props for the CollapsibleTrigger component
 * @extends {React.ComponentProps<typeof CollapsiblePrimitive.Trigger>}
 */
interface NeuCollapsibleTriggerProps
  extends React.ComponentProps<typeof CollapsiblePrimitive.Trigger> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * The trigger button that controls the collapsible's expanded/collapsed state
 */
export const NeuCollapsibleTrigger: React.FC<NeuCollapsibleTriggerProps> = ({
  className,
  children,
  ...props
}) => (
  <CollapsiblePrimitive.Trigger asChild>
    <button
      className={clsx(
        "collapsible-trigger",
        Array.isArray(className) ? className.join(" ") : className,
      )}
      {...props}
    >
      {children}
    </button>
  </CollapsiblePrimitive.Trigger>
);

/**
 * Props for the CollapsibleContent component
 * @extends {React.ComponentProps<typeof CollapsiblePrimitive.Content>}
 */
interface NeuCollapsibleContentProps
  extends React.ComponentProps<typeof CollapsiblePrimitive.Content> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * The animated content section of the collapsible
 * Uses Framer Motion for smooth expand/collapse animations with a 3D effect
 */
export const NeuCollapsibleContent: React.FC<NeuCollapsibleContentProps> = ({
  className,
  children,
  ...props
}) => (
  <AnimatePresence>
    <CollapsiblePrimitive.Content asChild>
      <motion.div
        className={clsx(
          "collapsible-content",
          Array.isArray(className) ? className.join(" ") : className,
        )}
        // Animation states for a 3D fold effect
        initial={{ opacity: 0, height: 0, scaleY: 0, rotateX: -90 }}
        animate={{ opacity: 1, height: "auto", scaleY: 1, rotateX: 0 }}
        exit={{ opacity: 0, height: 0, scaleY: 0, rotateX: -90 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </CollapsiblePrimitive.Content>
  </AnimatePresence>
);
