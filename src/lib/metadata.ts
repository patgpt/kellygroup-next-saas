import { getContentful } from "@/lib/contentful";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

// TODO: Implement the `generatePageMetadata` function This is just a rough implementation a
// Obviouslly this wwont work for alll pages but it is a good start for the home page while I dedvelop the rest of the pages andd the SEO strategy Contentful ContentType

export async function generatePageMetadata({
  locale,
  pageQuery,
}: {
  locale: string;
  pageQuery: () => Promise<any>;
}): Promise<Metadata> {
  const client = getContentful(false);
  const { data, errors } = await client.getHomePage({
    locale: await getLocale(),
    preview: false,
  });

  if (errors) {
    throw new Error(errors[0].message);
  }

  const seo = data?.pageHomeCollection?.items[0]?.seo;
  const slug = data?.pageHomeCollection?.items[0]?.slug ?? "";

  return {
    title: seo?.metaTitle,
    description: seo?.metaDescription,
    openGraph: {
      title: seo?.openGraphTitle ?? "",
      description: seo?.openGraphDescription ?? "",
      url: slug,
      type: "website",
      locale: await getLocale(),
    },
    robots: {
      follow: seo?.robotsFollow ?? true,
      index: seo?.robotsIndex ?? true,
    },
    referrer: "origin",
    category: "",
    icons: [],
    manifest: "",
    twitter: {
      card: "summary",
      site: slug,
      creator: "",
      creatorId: "",
      description: seo?.twitterDescription ?? "",
      title: seo?.twitterTitle ?? "",
      siteId: "",
      images: [],
    },
    assets: [],
    authors: [],
    formatDetection: {
      url: true,
    },
    applicationName: "",
    alternates: {
      canonical: "",
      languages: {
        en: "",
        fr: "",
      },
    },
  };
}
