import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const ComponentSection: CreateContentTypeProps = {
  name: "Component Section",
  description:
    "A generic section component for grouping other components with optional background and heading.",
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
      id: "title",
      name: "Title",
      type: "Symbol",
      localized: true,
      required: false,
      validations: [{ size: { max: 100 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "subtitle",
      name: "Subtitle",
      type: "Symbol",
      localized: true,
      required: false,
      validations: [{ size: { max: 150 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "backgroundImage",
      name: "Background Image",
      type: "Link",
      linkType: "Asset",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "components",
      name: "Components",
      type: "Array",
      localized: false,
      required: true,
      items: {
        type: "Link",
        linkType: "Entry",
        validations: [
          {
            linkContentType: [
              "ComponentHero",
              "ComponentCTA",
              "ComponentServiceOverview",
              "ComponentFeature",
              "ComponentTestimonial",
              "ComponentFAQs",
              //   "ComponentProcess",
              "ComponentSocialLink",
            ],
          },
        ],
      },
      validations: [],
      disabled: false,
      omitted: false,
    },
  ],
};

await createAndPublishContentType("ComponentSection", ComponentSection);
