"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useParams } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("UI");
  const pathname = usePathname();
  const params = useParams();
  function onSelect(locale: string) {
    startTransition(() => {
      router.replace(
        {
          pathname: pathname,
          query: params,
        },
        {
          locale,
          scroll: false,
        },
      );
    });
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onSelect("en-US")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("fr-CA")}>
          Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
