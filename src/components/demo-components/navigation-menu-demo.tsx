// components/NavigationMenuDemo.tsx
"use client";

import {
  NeuNavigationMenu,
  NeuNavigationMenuContent,
  NeuNavigationMenuItem,
  NeuNavigationMenuLink,
  NeuNavigationMenuList,
  NeuNavigationMenuListItem,
  NeuNavigationMenuTrigger,
} from "@/components/nm-ui/navigation/navigation-menu";
import React from "react";

const NavigationMenuDemo: React.FC = () => {
  return (
    <NeuNavigationMenu>
      <NeuNavigationMenuList>
        <NeuNavigationMenuItem>
          <NeuNavigationMenuTrigger>Learn</NeuNavigationMenuTrigger>
          <NeuNavigationMenuContent>
            <ul className="grid gap-4 p-4 sm:w-[500px] sm:grid-cols-2">
              <li className="row-span-3">
                <NeuNavigationMenuLink
                  href="/"
                  className="from-muted to-surface flex h-full flex-col justify-end bg-gradient-to-b p-6"
                >
                  <svg
                    aria-hidden
                    width="38"
                    height="38"
                    viewBox="0 0 25 25"
                    fill="currentColor"
                  >
                    <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z" />
                    <path d="M12 0H4V8H12V0Z" />
                    <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z" />
                  </svg>
                  <div className="text-foreground text-emboss-bold dark:text-foreground mt-4 mb-2 text-lg font-medium">
                    Radix Primitives
                  </div>
                  <p className="text-muted-foreground text-emboss-soft dark:text-muted-foreground text-sm">
                    Unstyled, accessible components for React.
                  </p>
                </NeuNavigationMenuLink>
              </li>
              <NeuNavigationMenuListItem
                href="https://stitches.dev/"
                title="Stitches"
              >
                CSS-in-JS with best-in-class developer experience.
              </NeuNavigationMenuListItem>
              <NeuNavigationMenuListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </NeuNavigationMenuListItem>
              <NeuNavigationMenuListItem
                href="https://icons.radix-ui.com/"
                title="Icons"
              >
                A crisp set of 15x15 icons, balanced and consistent.
              </NeuNavigationMenuListItem>
            </ul>
          </NeuNavigationMenuContent>
        </NeuNavigationMenuItem>

        <NeuNavigationMenuItem>
          <NeuNavigationMenuTrigger>Overview</NeuNavigationMenuTrigger>
          <NeuNavigationMenuContent>
            <ul className="grid gap-4 p-4 sm:w-[600px] sm:grid-cols-2">
              <NeuNavigationMenuListItem
                href="/primitives/docs/overview/introduction"
                title="Introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </NeuNavigationMenuListItem>
              <NeuNavigationMenuListItem
                href="/primitives/docs/overview/getting-started"
                title="Getting started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </NeuNavigationMenuListItem>
              <NeuNavigationMenuListItem
                href="/primitives/docs/guides/styling"
                title="Styling"
              >
                Unstyled and compatible with any styling solution.
              </NeuNavigationMenuListItem>
              <NeuNavigationMenuListItem
                href="/primitives/docs/guides/animation"
                title="Animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </NeuNavigationMenuListItem>
              <NeuNavigationMenuListItem
                href="/primitives/docs/overview/accessibility"
                title="Accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </NeuNavigationMenuListItem>
              <NeuNavigationMenuListItem
                href="/primitives/docs/overview/releases"
                title="Releases"
              >
                Radix Primitives releases and their changelogs.
              </NeuNavigationMenuListItem>
            </ul>
          </NeuNavigationMenuContent>
        </NeuNavigationMenuItem>

        <NeuNavigationMenuItem>
          <NeuNavigationMenuLink href="https://github.com/radix-ui">
            Github
          </NeuNavigationMenuLink>
        </NeuNavigationMenuItem>
      </NeuNavigationMenuList>
    </NeuNavigationMenu>
  );
};

export default NavigationMenuDemo;
