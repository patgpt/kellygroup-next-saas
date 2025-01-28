import { HeroSection } from "@/components/Hero";
import { getContentful } from "@/lib/contentful";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const client = getContentful(false);
  const { data, errors } = await client.getHomePage({ locale: locale });
  const seo = data?.pageHomeCollection?.items[0]?.seo;
  const slug = data?.pageHomeCollection?.items[0]?.slug ?? "";
  if (errors) {
    throw new Error(errors[0].message);
  }
  return {
    title: seo?.metaTitle,
    description: seo?.metaDescription,
    openGraph: {
      title: seo?.openGraphTitle ?? "",
      description: seo?.openGraphDescription ?? "",
      url: slug, // TODO: Update this to the actual URL
      type: "website",
      locale: locale,
    },
    robots: {
      follow: seo?.robotsFollow ?? true,
      index: seo?.robotsIndex ?? true,
    },
    referrer: "origin",
    category: "", // add category
    icons: [], // add icons
    manifest: "", // add manifest
    twitter: {
      card: "summary", // add twitter card
      site: slug, // add twitter site
      creator: "", // add twitter creator
      creatorId: "", // add twitter creator id
      description: seo?.twitterDescription ?? "",
      title: seo?.twitterTitle ?? "",
      siteId: "", // add twitter site id
      images: [], // add twitter images
    },
    assets: [], // add assets ? Ask about this
    authors: [], // add authors ? Ask about this
    formatDetection: {
      url: true, // add format detection url
    },
    applicationName: "", // add application name
    alternates: {
      canonical: "", // add alternates canonical
      languages: {
        en: "", // add alternates languages en
        fr: "", // add alternates languages
      },
    }, // add alternates
  };
}
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
