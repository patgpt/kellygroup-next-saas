import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const ComponentServiceOverview: CreateContentTypeProps = {
  name: "Component Service Overview",
  description: "A component to display an overview of a service.",
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
      required: true,
      validations: [{ size: { max: 100 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "description",
      name: "Description",
      type: "Text",
      localized: true,
      required: false,
      validations: [{ size: { max: 300 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "icon",
      name: "Icon",
      type: "Link",
      linkType: "Asset",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "ctaText",
      name: "CTA Text",
      type: "Symbol",
      localized: true,
      required: false,
      validations: [{ size: { max: 50 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "ctaLink",
      name: "CTA Link",
      type: "Symbol",
      localized: true,
      required: false,
      validations: [
        {
          regexp: {
            pattern: "https?://.+|/.+",
            flags: "",
          },
        },
      ],
      disabled: false,
      omitted: false,
    },
  ],
};

await createAndPublishContentType(
  "ComponentServiceOverview",
  ComponentServiceOverview,
);
