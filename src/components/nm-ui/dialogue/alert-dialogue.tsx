// components/NeuAlertDialog.tsx
"use client";

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { clsx } from "clsx";
import React from "react";

interface NeuAlertDialogProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Root> {
  className?: string;
}

export const NeuAlertDialog: React.FC<NeuAlertDialogProps> = ({
  className,
  children,
  ...props
}) => (
  <AlertDialogPrimitive.Root {...props}>
    <div
      className={clsx(
        "alert-dialog",
        Array.isArray(className) ? className.join(" ") : className,
      )}
    >
      {children}
    </div>
  </AlertDialogPrimitive.Root>
);

// Sub-components
interface NeuAlertDialogTriggerProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Trigger> {
  className?: string;
}

export const NeuAlertDialogTrigger: React.FC<NeuAlertDialogTriggerProps> = ({
  className,
  children,
  ...props
}) => (
  <AlertDialogPrimitive.Trigger asChild>
    <button
      className={clsx(
        "alert-dialog-trigger",
        Array.isArray(className) ? className.join(" ") : className,
      )}
      {...props}
    >
      {children}
    </button>
  </AlertDialogPrimitive.Trigger>
);

interface NeuAlertDialogContentProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Content> {
  className?: string;
}

export const NeuAlertDialogContent: React.FC<NeuAlertDialogContentProps> = ({
  className,
  children,
  ...props
}) => (
  <AlertDialogPrimitive.Portal>
    <AlertDialogPrimitive.Overlay className="alert-dialog-overlay" />
    <AlertDialogPrimitive.Content
      className={clsx(
        "alert-dialog-content",
        Array.isArray(className) ? className.join(" ") : className,
      )}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Content>
  </AlertDialogPrimitive.Portal>
);

interface NeuAlertDialogTitleProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Title> {
  className?: string;
}

export const NeuAlertDialogTitle: React.FC<NeuAlertDialogTitleProps> = ({
  className,
  children,
  ...props
}) => (
  <AlertDialogPrimitive.Title
    className={clsx(
      "alert-dialog-title",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
  </AlertDialogPrimitive.Title>
);

interface NeuAlertDialogDescriptionProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Description> {
  className?: string;
}

export const NeuAlertDialogDescription: React.FC<
  NeuAlertDialogDescriptionProps
> = ({ className, children, ...props }) => (
  <AlertDialogPrimitive.Description
    className={clsx(
      "alert-dialog-description",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
  </AlertDialogPrimitive.Description>
);

interface NeuAlertDialogCancelProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Cancel> {
  className?: string;
}

export const NeuAlertDialogCancel: React.FC<NeuAlertDialogCancelProps> = ({
  className,
  children,
  ...props
}) => (
  <AlertDialogPrimitive.Cancel asChild>
    <button
      className={clsx(
        "alert-dialog-cancel",
        Array.isArray(className) ? className.join(" ") : className,
      )}
      {...props}
    >
      {children}
    </button>
  </AlertDialogPrimitive.Cancel>
);

interface NeuAlertDialogActionProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Action> {
  className?: string;
}

export const NeuAlertDialogAction: React.FC<NeuAlertDialogActionProps> = ({
  className,
  children,
  ...props
}) => (
  <AlertDialogPrimitive.Action asChild>
    <button
      className={clsx(
        "alert-dialog-action",
        Array.isArray(className) ? className.join(" ") : className,
      )}
      {...props}
    >
      {children}
    </button>
  </AlertDialogPrimitive.Action>
);
