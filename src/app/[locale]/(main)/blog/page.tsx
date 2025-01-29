import I18nNavigationLink from "@/components/I18nNavigationLink";
import { getContentful } from "@/lib/contentful";
import type { PageParams } from "@/types/common";

import { draftMode } from "next/headers";

async function getBlogPosts(locale: string, preview: boolean) {
  const client = getContentful(preview);

  try {
    const response = await client.getAllBlogPosts({
      locale,
      preview,
    });

    console.log("response", response.errors);

    return response.data.pageBlogPostCollection?.items ?? [];
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    throw new Error("Failed to fetch blog posts");
  }
}

export default async function BlogPage({ params }: PageParams) {
  const { locale } = await params;
  console.log("locale", locale);
  const { isEnabled: preview } = await draftMode();

  const posts = await getBlogPosts(locale, preview);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        <ul className="grid gap-4">
          {posts.map((post) => (
            <li key={post?.sys.id} className="border-b pb-4">
              <I18nNavigationLink
                href={`blog/${post?.slug}`}
                className="text-xl hover:underline"
              >
                {post?.title}
              </I18nNavigationLink>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
