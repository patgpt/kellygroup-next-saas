// components/SeparatorDemo.tsx
import { NeuSeparator } from "@/components/nm-ui/layout/separator";
import React from "react";

const SeparatorDemo: React.FC = () => (
  <div className="mx-4 w-full max-w-md">
    <div className="text-foreground text-emboss-bold dark:text-foreground text-base font-medium">
      Radix Primitives
    </div>
    <div className="text-foreground text-emboss-soft dark:text-foreground text-base">
      An open-source UI component library.
    </div>
    <NeuSeparator variant="default" />
    <div className="flex items-center gap-4">
      <div className="text-foreground text-emboss-soft dark:text-foreground text-base">
        Blog
      </div>
      <NeuSeparator variant="subtle" orientation="vertical" decorative />
      <div className="text-foreground text-emboss-soft dark:text-foreground text-base">
        Docs
      </div>
      <NeuSeparator variant="subtle" orientation="vertical" decorative />
      <div className="text-foreground text-emboss-soft dark:text-foreground text-base">
        Source
      </div>
    </div>
    <NeuSeparator variant="prominent" className="mt-4" />
    <p className="text-muted-foreground text-emboss-soft dark:text-muted-foreground text-sm">
      Variants showcase: default, subtle, prominent.
    </p>
  </div>
);

export default SeparatorDemo;
