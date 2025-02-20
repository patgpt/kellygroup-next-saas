import { routing } from "@/i18n/routing";

import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import I18nNavigationLink from "@/components/I18nNavigationLink";
import sdk from "@/lib/contentful";
import { Logger } from "@/lib/utils";
import type { PageParams } from "@/types/common";
import { ArrowRightIcon } from "lucide-react";

export async function generateStaticParams() {
  return routing.locales.flatMap(async (locale) => {
    return {
      params: {
        locale,
        slug: await sdk
          .ServicesQuery({
            locale: locale,
            preview: false,
          })
          .then((res) =>
            res.data.pageServiceCollection?.items.map((item) => item?.slug),
          )
          .catch((err) => {
            throw new Error(err);
          }),
      },
    };
  });
}

const Page = async ({ params }: PageParams) => {
  const slug = (await params).slug;
  const locale = (await params).locale;
  Logger("info", slug);
  const { isEnabled: preview } = await draftMode();
  if (slug === undefined) {
    return notFound();
  }
  const response = await sdk.ServiceBySlugQuery({
    locale,
    slug,
    preview,
  });
  const service = response.data.pageServiceCollection?.items?.[0];
  if (response.errors || !service) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <I18nNavigationLink href={`/${locale}/services`}>
        <ArrowRightIcon className="h-4 w-4" />
        Back to services
      </I18nNavigationLink>
      <I18nNavigationLink href={`/${locale}/services/${service.slug}`}>
        <ArrowRightIcon className="h-4 w-4" />
        {service.slug}
      </I18nNavigationLink>

      {/* Add more service details here */}
    </div>
  );
};

export default Page;
