import { Locale } from "next-intl";

export type PageParams = {
  params: Promise<{
    locale: Locale;
    slug?: string;
  }>;
};
