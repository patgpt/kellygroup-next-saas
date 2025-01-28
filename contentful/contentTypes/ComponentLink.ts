import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const ComponentLink: CreateContentTypeProps = {
  name: "Component Social Link",
  description:
    "A generic component for handling external and internal links with optional display text and image asset.",
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
      id: "name",
      name: "Name",
      type: "Symbol",
      localized: true,
      required: true,
      validations: [{ size: { max: 100 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "href",
      name: "Href",
      type: "Symbol",
      localized: true,
      required: true,
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
    {
      id: "displayText",
      name: "Display Text",
      type: "Symbol",
      localized: true,
      required: false,
      validations: [{ size: { max: 100 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "image",
      name: "Image",
      type: "Link",
      linkType: "Asset",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
  ],
};

await createAndPublishContentType("ComponentLink", ComponentLink);
