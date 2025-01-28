import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const PageHome: CreateContentTypeProps = {
  name: "Page Home",
  description: "The homepage of the website.",
  displayField: "internalName",
  fields: [
    {
      id: "internalName",
      name: "Internal Name",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [{ size: { max: 60 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "seo",
      name: "SEO Settings",
      type: "Link",
      linkType: "Entry",
      localized: false,
      required: true,
      validations: [
        {
          linkContentType: ["ComponentSEO"],
        },
      ],
      disabled: false,
      omitted: false,
    },
    {
      id: "slug",
      name: "Slug",
      type: "Symbol",
      localized: true,
      required: true,
      validations: [{ unique: true }],
      disabled: false,
      omitted: false,
    },
    {
      id: "hero",
      name: "Hero",
      type: "Link",
      linkType: "Entry",
      localized: false,
      required: true,
      validations: [
        {
          linkContentType: ["ComponentHero"],
        },
      ],
      disabled: false,
      omitted: false,
    },
    {
      id: "process",
      name: "Process",
      type: "Link",
      linkType: "Entry",
      localized: false,
      required: false,
      validations: [
        {
          linkContentType: ["ComponentProcess"],
        },
      ],
      disabled: false,
      omitted: false,
    },
    {
      id: "features",
      name: "Features",
      type: "Array",
      localized: false,
      required: false,
      items: {
        type: "Link",
        linkType: "Entry",
        validations: [
          {
            linkContentType: ["ComponentFeature"],
          },
        ],
      },
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "cta",
      name: "Call-to-Action",
      type: "Link",
      linkType: "Entry",
      localized: false,
      required: false,
      validations: [
        {
          linkContentType: ["ComponentCTA"],
        },
      ],
      disabled: false,
      omitted: false,
    },
  ],
};


await createAndPublishContentType("PageHome", PageHome);