// components/DesktopNav.tsx
"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useTranslations } from "next-intl";
import React from "react";
import { NeuLink } from "./nav-link";

export const DesktopNav: React.FC = () => {
  const t = useTranslations("Navigation");

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
    { href: "/settings", label: t("settings") },
  ];

  return (
    <NavigationMenu.Root className="nav-horizontal">
      <NavigationMenu.List className="flex items-center gap-4">
        {navItems.map((item) => (
          <NavigationMenu.Item key={item.href}>
            <NavigationMenu.Link asChild>
              <NeuLink
                href={item.href}
                variant="desktop"
                shadowVariant="medium"
                textEmbossVariant="bold"
              >
                {item.label}
              </NeuLink>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
