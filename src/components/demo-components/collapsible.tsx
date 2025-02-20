// components/CollapsibleDemo.tsx
"use client";

import { Cross2Icon, RowSpacingIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import {
  NeuCollapsible,
  NeuCollapsibleContent,
  NeuCollapsibleTrigger,
} from "../nm-ui/layout/collapsible";

const CollapsibleDemo: React.FC = () => {
  const [openDefault, setOpenDefault] = useState(false);
  const [openCompact, setOpenCompact] = useState(false);
  const [openWide, setOpenWide] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Default Variant */}
      <NeuCollapsible
        variant="default"
        open={openDefault}
        onOpenChange={setOpenDefault}
      >
        <div className="collapsible-header">
          <span className="text-foreground text-emboss-soft dark:text-foreground">
            @peduarte starred 3 repositories
          </span>
          <NeuCollapsibleTrigger>
            {openDefault ? <Cross2Icon /> : <RowSpacingIcon />}
          </NeuCollapsibleTrigger>
        </div>
        <NeuCollapsibleContent>
          <div className="collapsible-item">
            <span className="text-foreground text-emboss-soft dark:text-foreground">
              @radix-ui/primitives
            </span>
          </div>
          <div className="collapsible-item">
            <span className="text-foreground text-emboss-soft dark:text-foreground">
              @radix-ui/colors
            </span>
          </div>
          <div className="collapsible-item">
            <span className="text-foreground text-emboss-soft dark:text-foreground">
              @radix-ui/themes
            </span>
          </div>
        </NeuCollapsibleContent>
      </NeuCollapsible>

      {/* Compact Variant */}
      <NeuCollapsible
        variant="compact"
        open={openCompact}
        onOpenChange={setOpenCompact}
      >
        <div className="collapsible-header">
          <span className="text-foreground text-emboss-soft dark:text-foreground">
            @user starred
          </span>
          <NeuCollapsibleTrigger>
            {openCompact ? <Cross2Icon /> : <RowSpacingIcon />}
          </NeuCollapsibleTrigger>
        </div>
        <NeuCollapsibleContent>
          <div className="collapsible-item">
            <span className="text-foreground text-emboss-soft dark:text-foreground">
              @repo/compact
            </span>
          </div>
        </NeuCollapsibleContent>
      </NeuCollapsible>

      {/* Wide Variant */}
      <NeuCollapsible variant="wide" open={openWide} onOpenChange={setOpenWide}>
        <div className="collapsible-header">
          <span className="text-foreground text-emboss-soft dark:text-foreground">
            @user starred 5 repositories
          </span>
          <NeuCollapsibleTrigger>
            {openWide ? <Cross2Icon /> : <RowSpacingIcon />}
          </NeuCollapsibleTrigger>
        </div>
        <NeuCollapsibleContent>
          <div className="collapsible-item">
            <span className="text-foreground text-emboss-soft dark:text-foreground">
              @repo/wide-1
            </span>
          </div>
          <div className="collapsible-item">
            <span className="text-foreground text-emboss-soft dark:text-foreground">
              @repo/wide-2
            </span>
          </div>
        </NeuCollapsibleContent>
      </NeuCollapsible>
    </div>
  );
};

export default CollapsibleDemo;
