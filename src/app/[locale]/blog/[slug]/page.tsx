import { routing } from "@/i18n/routing";
import sdk from "@/lib/contentful";

import type { PageParams } from "@/types/common";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return routing.locales.flatMap(async (locale) => {
    const data = await sdk.pageBlogPostCollection({
      locale: "en",
      preview: false,
    });
    const posts = data.data.pageBlogPostCollection?.items;
    return posts?.map((post) => {
      if (!post?.slug) {
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
  const data = await sdk.pageBlogPostCollection({
    locale,
    preview,
  });
  const post = data.data.pageBlogPostCollection?.items.find(
    (post) => post?.slug === slug,
  );
  if (!post) {
    return notFound();
  }

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.slug}</p>
    </div>
  );
};

export default Page;
