"use client";

import { useTransition } from "react";
import { useRouter } from "@/i18n/routing";
import { Dropdown, DropdownItem } from "flowbite-react";
import { useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("UI");

  function onSelect(locale: string) {
    startTransition(() => {
      router.replace(locale);
    });
  }

  return (
    <Dropdown
      label={isPending ? "Loading..." : t("language")}
      dismissOnClick={false}
      color="blue"
      size="sm"
      trigger="hover"
      className="rounded-lg font-medium"
    >
      <DropdownItem onClick={() => onSelect("en")}>English</DropdownItem>
      <DropdownItem onClick={() => onSelect("fr")}>Français</DropdownItem>
    </Dropdown>
  );
}
