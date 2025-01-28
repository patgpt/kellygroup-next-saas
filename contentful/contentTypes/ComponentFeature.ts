import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const ComponentFeature: CreateContentTypeProps = {
  name: "Component Feature",
  description: "A component to showcase features or highlights.",
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
      id: "linkText",
      name: "Link Text",
      type: "Symbol",
      localized: true,
      required: false,
      validations: [{ size: { max: 50 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "linkHref",
      name: "Link Href",
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

await createAndPublishContentType("ComponentFeature", ComponentFeature);
