// components/AvatarDemo.tsx
"use client";

import { NeuAvatar } from "@/components/nm-ui/avatar";
import React from "react";

const AvatarDemo: React.FC = () => {
  const sampleImage =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=48&h=48&q=80"; // Sample avatar image

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Default Variant */}
      <div className="flex flex-col items-center">
        <NeuAvatar
          src={sampleImage}
          alt="User avatar"
          variant="default"
          height={48}
          width={48}
        />
        <span className="text-foreground text-emboss-soft dark:text-foreground mt-2">
          Default
        </span>
      </div>

      {/* Bordered Variant */}
      <div className="flex flex-col items-center">
        <NeuAvatar
          src={sampleImage}
          alt="User avatar with border"
          variant="bordered"
          height={48}
          width={48}
        />
        <span className="text-foreground text-emboss-soft dark:text-foreground mt-2">
          Bordered
        </span>
      </div>

      {/* Sunken Variant */}
      <div className="flex flex-col items-center">
        <NeuAvatar
          src={sampleImage}
          alt="User avatar sunken"
          variant="sunken"
          height={48}
          width={48}
        />
        <span className="text-foreground text-emboss-soft dark:text-foreground mt-2">
          Sunken
        </span>
      </div>

      {/* Outer Shadow Variant */}
      <div className="flex flex-col items-center">
        <NeuAvatar
          src={sampleImage}
          alt="User avatar with outer shadow"
          variant="outer-shadow"
          height={48}
          width={48}
        />
        <span className="text-foreground text-emboss-soft dark:text-foreground mt-2">
          Outer Shadow
        </span>
      </div>

      {/* Inner Shadow Variant */}
      <div className="flex flex-col items-center">
        <NeuAvatar
          src={sampleImage}
          alt="User avatar with inner shadow"
          variant="inner-shadow"
          height={48}
          width={48}
        />
        <span className="text-foreground text-emboss-soft dark:text-foreground mt-2">
          Inner Shadow
        </span>
      </div>

      {/* Size Variations */}
      <div className="flex items-center gap-4">
        <NeuAvatar
          src={sampleImage}
          alt="Small avatar"
          variant="default"
          size="sm"
          height={48}
          width={48}
        />
        <NeuAvatar
          src={sampleImage}
          alt="Medium avatar"
          variant="default"
          size="md"
          height={48}
          width={48}
        />
        <NeuAvatar
          src={sampleImage}
          alt="Large avatar"
          variant="default"
          size="lg"
          height={48}
          width={48}
        />
      </div>
    </div>
  );
};

export default AvatarDemo;
