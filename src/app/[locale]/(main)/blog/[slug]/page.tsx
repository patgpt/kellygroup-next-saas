import type { PageBlogPost } from "@/graphql/__generated__/sdk";
import { routing } from "@/i18n/routing";
import { getContentful } from "@/lib/contentful";
import type { PageParams } from "@/types/common";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const client = getContentful(false);

  return routing.locales.flatMap(async (locale) => {
    const data = await client.getAllBlogPosts({
      locale: locale,
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
  const client = getContentful(preview);
  if (!slug) {
    return notFound();
  }
  const pages = await client
    .getBlogPostBySlug({
      locale: locale,
      preview: preview,
      slug: slug,
    })
    .then((res) => res.data.pageBlogPostCollection?.items || []);

  const post = pages[0] as PageBlogPost | undefined;
  if (!post) {
    return notFound();
  }

  return (
    <div>
      Hello world {locale + slug}
      <h1>{post?.title}</h1>
      <p>{post?.slug}</p>
    </div>
  );
};

export default Page;
