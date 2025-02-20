import { Link } from "@/i18n/routing";
import sdk from "@/lib/contentful";

import type { PageParams } from "@/types/common";

import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export default async function BlogPage({ params }: PageParams) {
  const { locale } = await params;
  const { isEnabled: preview } = await draftMode();

  const posts = await sdk
    .pageBlogPostCollection({
      locale: locale,
      preview: preview,
    })
    .then((res) => {
      if (res.data.pageBlogPostCollection?.items.length === 0) {
        return notFound();
      }

      return res.data.pageBlogPostCollection?.items;
    })
    .catch((err) => {
      throw new Error(err);
    });
  if (posts === undefined || posts.length === 0) {
    return notFound();
  }
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Blog Posts</h1>
      {posts.map((post) => (
        <Link key={post?.slug} href={`/blog/${post?.slug}`}>
          <h2>{post?.title}</h2>
        </Link>
      ))}
    </main>
  );
}
