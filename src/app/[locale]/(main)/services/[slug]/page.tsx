import { routing } from "@/i18n/routing";
import { getContentful } from "@/lib/contentful";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import type { PageParams } from "@/types/common";

export async function generateStaticParams() {
  return routing.locales.flatMap(async (locale) => {
    const client = getContentful(false);
    const data = await client.getAllBlogPosts({
      locale: locale,
    });

    const posts = data.data.pageBlogPostCollection?.items;
    return posts?.map((post) => {
      if (!post?.slug || !locale) {
        return notFound();
      }
      return {
        params: {
          locale,
          slug: post.slug,
        },
      };
    });
  });
}

const Page = async ({ params }: PageParams) => {
  const { locale, slug } = await params;
  const { isEnabled: preview } = await draftMode();

  try {
    const client = getContentful(preview);
    const response = await client.getServiceBySlug({
      locale,
      slug,
    });

    if (response.errors || !response.data?.pageServiceCollection?.items?.[0]) {
      return notFound();
    }

    const service = response.data.pageServiceCollection.items[0];

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">{service.title}</h1>
        {/* Add more service details here */}
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch service:", error);
    return notFound();
  }
};

export default Page;
