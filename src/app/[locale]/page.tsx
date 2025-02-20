import { HeroSection } from "@/components/Hero";

import { PageParams } from "@/types/common";

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { draftMode } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
    description: "Home page",
  };
}

export default async function Home({ params }: PageParams) {
  const { isEnabled: preview } = await draftMode();
  const { locale } = await params;
  const t = await getTranslations("HomePage");

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <HeroSection />
      <h1>{t("title")}</h1>
    </div>
  );
}
