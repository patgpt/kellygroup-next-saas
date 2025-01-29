import I18nNavigationLink from "@/components/I18nNavigationLink";
import { getContentful } from "@/lib/contentful";
import type { PageParams } from "@/types/common";
import { draftMode } from "next/headers";

const getServices = async ({
  locale,
  preview,
}: {
  locale: string;
  preview: boolean;
}) => {
  const client = getContentful(preview);

  try {
    const response = await client.getAllServices({
      locale,
      preview,
      limit: 10,
    });
    if (response.errors) {
      console.error("Failed to fetch services:", response.errors);
      throw new Error("Failed to fetch services");
    }
    return response.data.pageServiceCollection?.items ?? [];
  } catch (error) {
    console.error("Failed to fetch services:", error);
    throw new Error("Failed to fetch services");
  }
};

const Page = async ({ params }: PageParams) => {
  const { locale } = await params;
  const { isEnabled: preview } = await draftMode();
  const services = await getServices({ locale, preview });

  return (
    <div>
      Hello world {locale}
      <div className="card-grid">
        {services.map((service) => (
          <I18nNavigationLink
            href={`services/${service?.slug}`}
            key={service?.slug}
          >
            <h2>{service?.title}</h2>
            <p>{service?.description}</p>
          </I18nNavigationLink>
        ))}
      </div>
    </div>
  );
};

export default Page;
