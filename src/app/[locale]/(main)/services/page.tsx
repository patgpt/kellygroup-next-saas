import I18nNavigationLink from "@/components/I18nNavigationLink";
import sdk from "@/lib/contentful";

import type { PageParams } from "@/types/common";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

const Page = async ({ params }: PageParams) => {
  const { locale } = await params;
  const { isEnabled: preview } = await draftMode();
  const services = await sdk.ServicesQuery({ locale, preview });
  const servicesData = services.data.pageServiceCollection?.items;
  if (services.errors || !servicesData) {
    return notFound();
  }
  return (
    <div>
      Hello world {locale}
      <div className="card-grid">
        {servicesData.map((service) => (
          <I18nNavigationLink
            href={`services/${service?.slug}`}
            key={service?.slug}
          >
            <h2>{service?.title}</h2>
          </I18nNavigationLink>
        ))}
      </div>
    </div>
  );
};

export default Page;
