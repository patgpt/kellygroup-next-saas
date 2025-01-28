import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const ComponentStep: CreateContentTypeProps = {
  name: "Component Step",
  description: "A single step in a process or workflow.",
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
      name: "Step Title",
      type: "Symbol",
      localized: true,
      required: true,
      validations: [{ size: { max: 100 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "description",
      name: "Step Description",
      type: "Text",
      localized: true,
      required: false,
      validations: [{ size: { max: 300 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "icon",
      name: "Step Icon",
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

await createAndPublishContentType("ComponentStep", ComponentStep);
