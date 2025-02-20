// menu.tsx
// components/NeuDropdownMenu.tsx
"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, DotFilledIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React from "react";

interface NeuDropdownMenuProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Root> {
  className?: string;
}

export const NeuDropdownMenu: React.FC<NeuDropdownMenuProps> = ({
  className,
  children,
  ...props
}) => (
  <DropdownMenuPrimitive.Root {...props}>
    <div
      className={clsx(
        "dropdown-menu",
        Array.isArray(className) ? className.join(" ") : className,
      )}
    >
      {children}
    </div>
  </DropdownMenuPrimitive.Root>
);

// Sub-components
interface NeuDropdownTriggerProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Trigger> {
  className?: string;
}

export const NeuDropdownTrigger: React.FC<NeuDropdownTriggerProps> = ({
  className,
  children,
  ...props
}) => (
  <DropdownMenuPrimitive.Trigger asChild>
    <button
      className={clsx(
        "dropdown-trigger",
        Array.isArray(className) ? className.join(" ") : className,
      )}
      {...props}
    >
      {children}
    </button>
  </DropdownMenuPrimitive.Trigger>
);

interface NeuDropdownContentProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Content> {
  className?: string;
}

export const NeuDropdownContent: React.FC<NeuDropdownContentProps> = ({
  className,
  children,
  ...props
}) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      className={clsx(
        "dropdown-content",
        Array.isArray(className) ? className.join(" ") : className,
      )}
      sideOffset={5}
      {...props}
    >
      {children}
      <DropdownMenuPrimitive.Arrow className="dropdown-arrow" />
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
);

interface NeuDropdownItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Item> {
  className?: string;
}

export const NeuDropdownItem: React.FC<NeuDropdownItemProps> = ({
  className,
  children,
  ...props
}) => (
  <DropdownMenuPrimitive.Item
    className={clsx(
      "dropdown-item",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Item>
);

interface NeuDropdownSeparatorProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Separator> {
  className?: string;
}

export const NeuDropdownSeparator: React.FC<NeuDropdownSeparatorProps> = ({
  className,
  ...props
}) => (
  <DropdownMenuPrimitive.Separator
    className={clsx(
      "dropdown-separator",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  />
);

interface NeuDropdownSubTriggerProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> {
  className?: string;
}

export const NeuDropdownSubTrigger: React.FC<NeuDropdownSubTriggerProps> = ({
  className,
  children,
  ...props
}) => (
  <DropdownMenuPrimitive.SubTrigger
    className={clsx(
      "dropdown-sub-trigger",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.SubTrigger>
);

interface NeuDropdownSubContentProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.SubContent> {
  className?: string;
}

export const NeuDropdownSubContent: React.FC<NeuDropdownSubContentProps> = ({
  className,
  children,
  ...props
}) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.SubContent
      className={clsx(
        "dropdown-sub-content",
        Array.isArray(className) ? className.join(" ") : className,
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.SubContent>
  </DropdownMenuPrimitive.Portal>
);

interface NeuDropdownLabelProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Label> {
  className?: string;
}

export const NeuDropdownLabel: React.FC<NeuDropdownLabelProps> = ({
  className,
  children,
  ...props
}) => (
  <DropdownMenuPrimitive.Label
    className={clsx(
      "dropdown-label",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Label>
);

interface NeuDropdownCheckboxItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> {
  className?: string;
}

export const NeuDropdownCheckboxItem: React.FC<
  NeuDropdownCheckboxItemProps
> = ({ className, children, ...props }) => (
  <DropdownMenuPrimitive.CheckboxItem
    className={clsx(
      "dropdown-item",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    <DropdownMenuPrimitive.ItemIndicator className="dropdown-item-indicator">
      <CheckIcon />
    </DropdownMenuPrimitive.ItemIndicator>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
);

interface NeuDropdownRadioItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> {
  className?: string;
}

export const NeuDropdownRadioItem: React.FC<NeuDropdownRadioItemProps> = ({
  className,
  children,
  ...props
}) => (
  <DropdownMenuPrimitive.RadioItem
    className={clsx(
      "dropdown-item",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    <DropdownMenuPrimitive.ItemIndicator className="dropdown-item-indicator">
      <DotFilledIcon />
    </DropdownMenuPrimitive.ItemIndicator>
    {children}
  </DropdownMenuPrimitive.RadioItem>
);
