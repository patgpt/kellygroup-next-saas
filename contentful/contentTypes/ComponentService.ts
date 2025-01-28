import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const ComponentService: CreateContentTypeProps = {
  name: "Component Service",
  description:
    "A component to represent a service offered by the organization.",
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
      name: "Service Title",
      type: "Symbol",
      localized: true,
      required: true,
      validations: [{ size: { max: 100 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "description",
      name: "Service Description",
      type: "Text",
      localized: true,
      required: false,
      validations: [{ size: { max: 300 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "icon",
      name: "Service Icon",
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
      name: "Call-to-Action Text",
      type: "Symbol",
      localized: true,
      required: false,
      validations: [{ size: { max: 50 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "ctaLink",
      name: "Call-to-Action Link",
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

await createAndPublishContentType("ComponentService", ComponentService);
