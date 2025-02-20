// components/NavContent.tsx
import { useTranslations } from "next-intl";
import React from "react";
import { NeuLink } from "../navigation/nav-link";
import { DrawerHeader } from "./drawer";

interface NavContentProps {
  onCloseAction: () => void;
}

export const NavContent: React.FC<NavContentProps> = ({ onCloseAction }) => {
  const t = useTranslations("Navigation");

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
    { href: "/settings", label: t("settings") },
  ];

  return (
    <>
      <DrawerHeader title={t("menu")} onCloseAction={onCloseAction} />
      <div className="drawer-body">
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <NeuLink
                  href={item.href}
                  variant="drawer"
                  shadowVariant="medium"
                  textEmbossVariant="bold"
                >
                  {item.label}
                </NeuLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
