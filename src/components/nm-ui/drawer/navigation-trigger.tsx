// components/NavTrigger.tsx
import { useTranslations } from "next-intl";
import React from "react";

interface NavTriggerProps {
  onClick: () => void;
  position?: "left" | "right" | "top" | "bottom";
}

export const NavTrigger: React.FC<NavTriggerProps> = ({
  onClick,
  position = "left",
}) => {
  const t = useTranslations("Navigation");
  const positionClass = {
    left: "top-4 left-4",
    right: "top-4 right-4",
    top: "top-4 left-1/2 -translate-x-1/2",
    bottom: "bottom-4 left-1/2 -translate-x-1/2",
  }[position];

  return (
    <button
      onClick={onClick}
      className={`fixed ${positionClass} nm-raised text-foreground hover:text-accent focus-visible:outline-ring dark:text-foreground dark:hover:text-accent z-50 p-2`}
      aria-label={t("openDrawer")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  );
};
