// components/NeuAppBar.tsx
"use client";

import NavigationMenuDemo from "@/components/demo-components/navigation-menu-demo";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React from "react";

interface NeuAppBarProps {
  className?: string;
  drawerOpen?: boolean;
  onDrawerToggle?: () => void;
  title?: string;
  logo?: React.ReactNode;
  navigation?: { href: string; label: string }[];
  toolbar?: React.ReactNode;
}

export const NeuAppBar: React.FC<NeuAppBarProps> = ({
  className,
  drawerOpen = false,
  onDrawerToggle,
  title,
  logo,
  navigation = [],
  toolbar,
}) => {
  const combinedClassName = clsx(
    "appbar",
    Array.isArray(className) ? className.join(" ") : className,
  );

  return (
    <header className={combinedClassName}>
      {/* Left Section: Drawer Button and Title/Logo */}
      <div className="flex items-center gap-4">
        {onDrawerToggle && (
          <button
            className="appbar-drawer-button"
            onClick={onDrawerToggle}
            aria-label={drawerOpen ? "Close drawer" : "Open drawer"}
          >
            <HamburgerMenuIcon />
          </button>
        )}
        <div className="appbar-title">
          {logo || (title && <span>{title}</span>) || "Site Title"}
        </div>
      </div>

      {/* Center Section: Navigation (Desktop Only) */}
      {navigation.length > 0 && (
        <nav className="appbar-nav">
          <NavigationMenuDemo />
        </nav>
      )}

      {/* Right Section: Toolbar */}
      <div className="appbar-toolbar">
        {toolbar || (
          <span className="text-muted-foreground text-emboss-soft dark:text-muted-foreground">
            Toolbar
          </span>
        )}
      </div>
    </header>
  );
};
