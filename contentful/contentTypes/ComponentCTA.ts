import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const ComponentCTA: CreateContentTypeProps = {
  name: "Component CTA",
  description: "A call-to-action component for guiding user actions.",
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
      id: "heading",
      name: "Heading",
      type: "Symbol",
      localized: true,
      required: true,
      validations: [{ size: { max: 100 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "subheading",
      name: "Subheading",
      type: "Symbol",
      localized: true,
      required: false,
      validations: [{ size: { max: 150 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "buttonText",
      name: "Button Text",
      type: "Symbol",
      localized: true,
      required: true,
      validations: [{ size: { max: 50 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "buttonLink",
      name: "Button Link",
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
  ],
};

await createAndPublishContentType("ComponentCTA", ComponentCTA);
