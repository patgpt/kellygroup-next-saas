import { HeroSection } from "@/components/Hero";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  // { params }: PageParams
  // const { locale } = await params;
  const t = await getTranslations("HomePage");
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <HeroSection />
      <h1>{t("title")}</h1>
    </div>
  );
}
