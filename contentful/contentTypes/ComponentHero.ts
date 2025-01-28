import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const ComponentHero: CreateContentTypeProps = {
  name: "Component Hero",
  description:
    "A hero section for pages with a heading, subheading, and call-to-action.",
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
      validations: [{ size: { max: 150 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "subheading",
      name: "Subheading",
      type: "Symbol",
      localized: true,
      required: false,
      validations: [{ size: { max: 250 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "backgroundImage",
      name: "Background Image",
      type: "Link",
      linkType: "Asset",
      localized: false,
      required: true,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "callToActionText",
      name: "Call-to-Action Text",
      type: "Symbol",
      localized: true,
      required: true,
      validations: [{ size: { max: 50 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "callToActionLink",
      name: "Call-to-Action Link",
      type: "Symbol",
      localized: true,
      required: true,
      validations: [{ regexp: { pattern: "https?://.+|/.+", flags: "" } }],
      disabled: false,
      omitted: false,
    },
  ],
};

await createAndPublishContentType("ComponentHero", ComponentHero);
