// components/Drawer.tsx
"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";
import { useSwipeable } from "react-swipeable";

type DrawerPosition = "left" | "right" | "top" | "bottom";
type ShadowVariant = "soft" | "medium" | "deep";

interface DrawerProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  position?: DrawerPosition;
  shadowVariant?: ShadowVariant;
}

export const Drawer: React.FC<DrawerProps> = ({
  children,
  open,
  onOpenChange,
  position = "left",
  shadowVariant = "medium",
}) => {
  const t = useTranslations("Navigation");
  const shadowClass = {
    soft: "nm-flat",
    medium: "nm-raised",
    deep: "shadow-nm-deep",
  }[shadowVariant];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => position === "left" && onOpenChange?.(false),
    onSwipedRight: () => position === "right" && onOpenChange?.(false),
    onSwipedUp: () => position === "top" && onOpenChange?.(false),
    onSwipedDown: () => position === "bottom" && onOpenChange?.(false),
    delta: 50,
    trackMouse: false,
  });

  const motionVariants = {
    left: { initial: { x: "-100%" }, animate: { x: 0 }, exit: { x: "-100%" } },
    right: { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" } },
    top: { initial: { y: "-100%" }, animate: { y: 0 }, exit: { y: "-100%" } },
    bottom: { initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "100%" } },
  }[position];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <AnimatePresence>
          {open && (
            <>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="drawer-overlay"
                  onClick={() => onOpenChange?.(false)}
                />
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.div
                  variants={motionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`drawer ${position} ${shadowClass}`}
                  {...swipeHandlers}
                  aria-label={t("drawerLabel")}
                >
                  <div className="drawer-content">{children}</div>
                </motion.div>
              </Dialog.Content>
            </>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

// Drawer Header (Server Component)
interface DrawerHeaderProps {
  title: string;
  onCloseAction: () => void;
  textEmbossVariant?: "raised" | "recessed" | "soft";
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  title,
  onCloseAction,
  textEmbossVariant = "soft",
}) => {
  const t = useTranslations("Navigation");

  return (
    <div className="drawer-header">
      <h2 className="text-foreground dark:text-foreground text-emboss-bold text-lg font-medium">
        {title}
      </h2>
      <button
        onClick={onCloseAction}
        className="nm-raised text-foreground hover:text-accent focus-visible:outline-ring dark:text-foreground dark:hover:text-accent p-2"
        aria-label={t("close")}
      >
        <Cross2Icon className="h-6 w-6" />
      </button>
    </div>
  );
};
