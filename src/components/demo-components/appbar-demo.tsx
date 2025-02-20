// components/AppBarDemo.tsx
"use client";

import React, { useState } from "react";

import { NeuButton } from "@/components/nm-ui/button/button";
import { NeuAppBar } from "@/components/nm-ui/layout/appbar";
import {
  NeuDropdownContent,
  NeuDropdownItem,
  NeuDropdownMenu,
  NeuDropdownTrigger,
} from "@/components/nm-ui/menu/menu";
import { ChevronDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

const AppBarDemo: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigation = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const toolbar = (
    <>
      <NeuButton shadowVariant="soft" textEmbossVariant="soft" className="h-10">
        Settings <ChevronDownIcon />
      </NeuButton>
      <NeuDropdownMenu>
        <NeuDropdownTrigger>
          <HamburgerMenuIcon />
        </NeuDropdownTrigger>
        <NeuDropdownContent>
          <NeuDropdownItem>Item 1</NeuDropdownItem>
          <NeuDropdownItem>Item 2</NeuDropdownItem>
          <NeuDropdownItem>Item 3</NeuDropdownItem>
        </NeuDropdownContent>
      </NeuDropdownMenu>
    </>
  );

  return (
    <>
      <NeuAppBar
        title="Kellygroup"
        onDrawerToggle={() => setDrawerOpen(!drawerOpen)}
        navigation={navigation}
        toolbar={toolbar}
      />
      {/* Placeholder for drawer content, e.g., NeuDrawer */}
      {drawerOpen && (
        <div
          className="bg-muted/50 fixed inset-0 z-40"
          onClick={() => setDrawerOpen(false)}
        >
          <div className="nm-raised bg-surface h-full w-64 p-6">
            Drawer Content
          </div>
        </div>
      )}
    </>
  );
};

export default AppBarDemo;
