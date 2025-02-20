// components/NeuNavigationMenu.tsx
"use client";

import { CaretDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { clsx } from "clsx";
import React from "react";

interface NeuNavigationMenuProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Root> {
  className?: string;
}

export const NeuNavigationMenu: React.FC<NeuNavigationMenuProps> = ({
  className,
  children,
  ...props
}) => (
  <NavigationMenuPrimitive.Root
    className={clsx(
      "nav-menu",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
    <NavigationMenuPrimitive.Indicator className="nav-menu-indicator">
      <div className="indicator-arrow" />
    </NavigationMenuPrimitive.Indicator>
    <div className="nav-menu-viewport">
      <NavigationMenuPrimitive.Viewport className="h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)]" />
    </div>
  </NavigationMenuPrimitive.Root>
);

// Sub-components
interface NeuNavigationMenuListProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.List> {
  className?: string;
}

export const NeuNavigationMenuList: React.FC<NeuNavigationMenuListProps> = ({
  className,
  children,
  ...props
}) => (
  <NavigationMenuPrimitive.List
    className={clsx(
      "nav-menu-list",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.List>
);

interface NeuNavigationMenuItemProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Item> {
  className?: string;
}

export const NeuNavigationMenuItem: React.FC<NeuNavigationMenuItemProps> = ({
  className,
  children,
  ...props
}) => (
  <NavigationMenuPrimitive.Item
    className={clsx(
      "nav-menu-item",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Item>
);

interface NeuNavigationMenuTriggerProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> {
  className?: string;
}

export const NeuNavigationMenuTrigger: React.FC<
  NeuNavigationMenuTriggerProps
> = ({ className, children, ...props }) => (
  <NavigationMenuPrimitive.Trigger
    className={clsx(
      "nav-menu-trigger",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
    <CaretDownIcon className="caret-down" data-state="closed" aria-hidden />
  </NavigationMenuPrimitive.Trigger>
);

interface NeuNavigationMenuContentProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Content> {
  className?: string;
}

export const NeuNavigationMenuContent: React.FC<
  NeuNavigationMenuContentProps
> = ({ className, children, ...props }) => (
  <NavigationMenuPrimitive.Content
    className={clsx(
      "nav-menu-content",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Content>
);

interface NeuNavigationMenuLinkProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Link> {
  className?: string;
  href: string;
}

export const NeuNavigationMenuLink: React.FC<NeuNavigationMenuLinkProps> = ({
  className,
  href,
  children,
  ...props
}) => (
  <NavigationMenuPrimitive.Link
    href={href}
    className={clsx(
      "nav-menu-link",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Link>
);

interface NeuNavigationMenuListItemProps {
  className?: string;
  title: string;
  href: string;
  children: React.ReactNode;
}

export const NeuNavigationMenuListItem: React.FC<
  NeuNavigationMenuListItemProps
> = ({ className, title, href, children }) => (
  <li>
    <NeuNavigationMenuLink
      href={href}
      className={clsx(
        "nav-menu-list-item",
        Array.isArray(className) ? className.join(" ") : className,
      )}
    >
      <div className="title">{title}</div>
      <p className="description">{children}</p>
    </NeuNavigationMenuLink>
  </li>
);
