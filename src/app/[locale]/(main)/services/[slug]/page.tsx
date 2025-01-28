import { routing } from "@/i18n/routing";
import { getContentful } from "@/lib/contentful";
import type { PageParams } from "@/types/common";
import { draftMode } from "next/headers";

export async function generateStaticPaths() {
  routing.locales.flatMap(async (locale) => {
    const { isEnabled: preview } = await draftMode();
    const paths = await getContentful()
      .getAllServices({ locale, preview })
      .then((response) => {
        return response.data.pageServiceCollection?.items.map((service) => {
          return {
            params: {
              locale,
              slug: service?.slug,
            },
          };
        });
      });
  });
}

const Page = async ({ params }: PageParams) => {
  const { locale, slug } = await params;
  const { isEnabled: preview } = await draftMode();
  const service = await getContentful(preview)
    .getServiceBySlug({ locale, slug })
    .then((response) => {
      return response.data.pageServiceCollection?.items[0];
    });

  return (
    <div>
      <div>{service?.title}</div>
    </div>
  );
};

export default Page;
