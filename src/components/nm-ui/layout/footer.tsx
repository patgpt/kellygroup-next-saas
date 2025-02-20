// components/FooterNav.tsx
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export const FooterNav: React.FC = () => {
  const t = useTranslations("Navigation");

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
    { href: "/settings", label: t("settings") },
  ];

  return (
    <footer className="footer">
      <nav className="mx-auto flex max-w-[80rem] flex-wrap gap-4 px-4">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="footer-navlink">
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
};
