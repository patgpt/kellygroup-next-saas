// components/NavContent.tsx
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { DrawerHeader } from "../drawer/drawer";

interface NavContentProps {
  onCloseAction: () => void;
  textEmbossVariant?: "raised" | "recessed" | "soft";
}

export const NavContent: React.FC<NavContentProps> = ({
  onCloseAction,
  textEmbossVariant = "raised",
}) => {
  const t = useTranslations("Navigation");
  const textEmbossClass = {
    raised: "text-emboss-raised",
    recessed: "text-emboss-recessed",
    soft: "text-emboss-soft",
  }[textEmbossVariant];

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
    { href: "/settings", label: t("settings") },
  ];

  return (
    <>
      <DrawerHeader
        title={t("menu")}
        onCloseAction={onCloseAction}
        textEmbossVariant={textEmbossVariant}
      />
      <div className="drawer-body">
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nm-raised text-foreground hover:text-accent focus-visible:outline-ring dark:text-foreground dark:hover:text-accent block p-2 ${textEmbossClass}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
