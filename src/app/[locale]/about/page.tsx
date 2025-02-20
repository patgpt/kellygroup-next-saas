import type { PageParams } from "@/types/common";

const Page = async ({ params }: PageParams) => {
  const { locale } = await params;
  return <div>Hello world {locale}</div>;
};

export default Page;
