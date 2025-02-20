// components/DialogDemo.tsx
"use client";

import { NeuButton } from "@/components/nm-ui/button/button";
import {
  NeuDialog,
  NeuDialogClose,
  NeuDialogContent,
  NeuDialogDescription,
  NeuDialogTitle,
  NeuDialogTrigger,
} from "@/components/nm-ui/dialogue/dialogue";
import { NeuInput } from "@/components/nm-ui/form-parts/input";
import React from "react";

const DialogDemo: React.FC = () => (
  <NeuDialog>
    <NeuDialogTrigger>Edit profile</NeuDialogTrigger>
    <NeuDialogContent>
      <NeuDialogTitle>Edit profile</NeuDialogTitle>
      <NeuDialogDescription>
        Make changes to your profile here. Click save when you’re done.
      </NeuDialogDescription>
      <fieldset className="mb-4 flex items-center gap-5">
        <label
          className="text-foreground text-emboss-soft dark:text-foreground w-24 text-right"
          htmlFor="name"
        >
          Name
        </label>
        <NeuInput
          id="name"
          defaultValue="Pedro Duarte"
          shadowVariant="soft"
          textEmbossVariant="soft"
          className="flex-1"
        />
      </fieldset>
      <fieldset className="mb-4 flex items-center gap-5">
        <label
          className="text-foreground text-emboss-soft dark:text-foreground w-24 text-right"
          htmlFor="username"
        >
          Username
        </label>
        <NeuInput
          id="username"
          defaultValue="@peduarte"
          shadowVariant="soft"
          textEmbossVariant="soft"
          className="flex-1"
        />
      </fieldset>
      <div className="flex gap-2">
        <NeuButton
          className="mr-4"
          shadowVariant="medium"
          textEmbossVariant="bold"
        >
          Save changes
        </NeuButton>
        <NeuDialogClose></NeuDialogClose>
      </div>
      <NeuDialogClose aria-label="Close" />
    </NeuDialogContent>
  </NeuDialog>
);

export default DialogDemo;
