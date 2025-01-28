import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const ComponentProcess: CreateContentTypeProps = {
  name: "Component Process",
  description: "A component to display a step-by-step process or workflow.",
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
      id: "steps",
      name: "Steps",
      type: "Array",
      localized: false,
      required: true,
      items: {
        type: "Link",
        linkType: "Entry",
        validations: [
          {
            linkContentType: ["ComponentStep"],
          },
        ],
      },
      validations: [],
      disabled: false,
      omitted: false,
    },
  ],
};

await createAndPublishContentType("ComponentProcess", ComponentProcess);
