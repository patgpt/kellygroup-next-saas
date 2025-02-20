// components/DropdownMenuDemo.tsx
"use client";

import {
  NeuDropdownCheckboxItem,
  NeuDropdownContent,
  NeuDropdownItem,
  NeuDropdownLabel,
  NeuDropdownMenu,
  NeuDropdownRadioItem,
  NeuDropdownSeparator,
  NeuDropdownSubContent,
  NeuDropdownSubTrigger,
  NeuDropdownTrigger,
} from "@/components/nm-ui/menu/menu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import React from "react";

const DropdownMenuDemo: React.FC = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <NeuDropdownMenu>
      <NeuDropdownTrigger aria-label="Customise options">
        <HamburgerMenuIcon />
      </NeuDropdownTrigger>

      <NeuDropdownContent>
        <NeuDropdownItem>
          New Tab <span className="text-muted-foreground ml-auto">⌘+T</span>
        </NeuDropdownItem>
        <NeuDropdownItem>
          New Window <span className="text-muted-foreground ml-auto">⌘+N</span>
        </NeuDropdownItem>
        <NeuDropdownItem disabled>
          New Private Window{" "}
          <span className="text-muted-foreground ml-auto">⇧+⌘+N</span>
        </NeuDropdownItem>

        <NeuDropdownSeparator />

        <DropdownMenuPrimitive.Sub>
          <NeuDropdownSubTrigger>
            More Tools <ChevronRightIcon className="ml-auto" />
          </NeuDropdownSubTrigger>
          <NeuDropdownSubContent sideOffset={2} alignOffset={-5}>
            <NeuDropdownItem>
              Save Page As…{" "}
              <span className="text-muted-foreground ml-auto">⌘+S</span>
            </NeuDropdownItem>
            <NeuDropdownItem>Create Shortcut…</NeuDropdownItem>
            <NeuDropdownItem>Name Window…</NeuDropdownItem>
            <NeuDropdownSeparator />
            <NeuDropdownItem>Developer Tools</NeuDropdownItem>
          </NeuDropdownSubContent>
        </DropdownMenuPrimitive.Sub>

        <NeuDropdownSeparator />

        <NeuDropdownCheckboxItem
          checked={bookmarksChecked}
          onCheckedChange={setBookmarksChecked}
        >
          Show Bookmarks{" "}
          <span className="text-muted-foreground ml-auto">⌘+B</span>
        </NeuDropdownCheckboxItem>
        <NeuDropdownCheckboxItem
          checked={urlsChecked}
          onCheckedChange={setUrlsChecked}
        >
          Show Full URLs
        </NeuDropdownCheckboxItem>

        <NeuDropdownSeparator />

        <NeuDropdownLabel>People</NeuDropdownLabel>
        <DropdownMenuPrimitive.RadioGroup
          value={person}
          onValueChange={setPerson}
        >
          <NeuDropdownRadioItem value="pedro">
            Pedro Duarte
          </NeuDropdownRadioItem>
          <NeuDropdownRadioItem value="colm">Colm Tuite</NeuDropdownRadioItem>
        </DropdownMenuPrimitive.RadioGroup>
      </NeuDropdownContent>
    </NeuDropdownMenu>
  );
};

export default DropdownMenuDemo;
