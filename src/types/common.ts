export type PageParams = {
  params: Promise<{
    locale: string;
    slug?: string;
  }>;
};
