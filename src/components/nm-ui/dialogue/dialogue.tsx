// components/NeuDialog.tsx
"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React from "react";

interface NeuDialogProps
  extends React.ComponentProps<typeof DialogPrimitive.Root> {
  className?: string;
}

export const NeuDialog: React.FC<NeuDialogProps> = ({
  className,
  children,
  ...props
}) => (
  <DialogPrimitive.Root {...props}>
    <div
      className={clsx(
        "dialog",
        Array.isArray(className) ? className.join(" ") : className,
      )}
    >
      {children}
    </div>
  </DialogPrimitive.Root>
);

// Sub-components
interface NeuDialogTriggerProps
  extends React.ComponentProps<typeof DialogPrimitive.Trigger> {
  className?: string;
}

export const NeuDialogTrigger: React.FC<NeuDialogTriggerProps> = ({
  className,
  children,
  ...props
}) => (
  <DialogPrimitive.Trigger asChild>
    <button
      className={clsx(
        "dialog-trigger",
        Array.isArray(className) ? className.join(" ") : className,
      )}
      {...props}
    >
      {children}
    </button>
  </DialogPrimitive.Trigger>
);

interface NeuDialogContentProps
  extends React.ComponentProps<typeof DialogPrimitive.Content> {
  className?: string;
}

export const NeuDialogContent: React.FC<NeuDialogContentProps> = ({
  className,
  children,
  ...props
}) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="dialog-overlay" />
    <DialogPrimitive.Content
      className={clsx(
        "dialog-content",
        Array.isArray(className) ? className.join(" ") : className,
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
);

interface NeuDialogTitleProps
  extends React.ComponentProps<typeof DialogPrimitive.Title> {
  className?: string;
}

export const NeuDialogTitle: React.FC<NeuDialogTitleProps> = ({
  className,
  children,
  ...props
}) => (
  <DialogPrimitive.Title
    className={clsx(
      "dialog-title",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
  </DialogPrimitive.Title>
);

interface NeuDialogDescriptionProps
  extends React.ComponentProps<typeof DialogPrimitive.Description> {
  className?: string;
}

export const NeuDialogDescription: React.FC<NeuDialogDescriptionProps> = ({
  className,
  children,
  ...props
}) => (
  <DialogPrimitive.Description
    className={clsx(
      "dialog-description",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
  </DialogPrimitive.Description>
);

interface NeuDialogCloseProps
  extends React.ComponentProps<typeof DialogPrimitive.Close> {
  className?: string;
}

export const NeuDialogClose: React.FC<NeuDialogCloseProps> = ({
  className,
  children,
  ...props
}) => (
  <DialogPrimitive.Close asChild>
    <button
      className={clsx(
        "dialog-close",
        Array.isArray(className) ? className.join(" ") : className,
      )}
      {...props}
    >
      {children || <Cross2Icon />}
    </button>
  </DialogPrimitive.Close>
);
