// components/AlertDialogDemo.tsx
"use client";

import {
  NeuAlertDialog,
  NeuAlertDialogAction,
  NeuAlertDialogCancel,
  NeuAlertDialogContent,
  NeuAlertDialogDescription,
  NeuAlertDialogTitle,
  NeuAlertDialogTrigger,
} from "@/components/nm-ui/dialogue/alert-dialogue";
import React from "react";

const AlertDialogDemo: React.FC = () => (
  <NeuAlertDialog>
    <NeuAlertDialogTrigger>Delete account</NeuAlertDialogTrigger>
    <NeuAlertDialogContent>
      <NeuAlertDialogTitle>Are you absolutely sure?</NeuAlertDialogTitle>
      <NeuAlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </NeuAlertDialogDescription>
      <div className="alert-dialog-actions">
        <NeuAlertDialogCancel>Cancel</NeuAlertDialogCancel>
        <NeuAlertDialogAction>Yes, delete account</NeuAlertDialogAction>
      </div>
    </NeuAlertDialogContent>
  </NeuAlertDialog>
);

export default AlertDialogDemo;
