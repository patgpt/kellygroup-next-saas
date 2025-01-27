import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  // { params }: PageParams
  // const { locale } = await params;
  const t = await getTranslations("HomePage");
  return (
    <div className="container mx-auto">
      <h1>{t("title")}</h1>
    </div>
  );
}
