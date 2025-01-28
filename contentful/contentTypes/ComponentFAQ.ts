import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const ComponentFAQ: CreateContentTypeProps = {
  name: "Component FAQ",
  description: "A component to display a single frequently asked question.",
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
      id: "question",
      name: "Question",
      type: "Symbol",
      localized: true,
      required: true,
      validations: [{ size: { max: 200 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "answer",
      name: "Answer",
      type: "Text",
      localized: true,
      required: true,
      validations: [{ size: { max: 1000 } }],
      disabled: false,
      omitted: false,
    },
  ],
};

await createAndPublishContentType("ComponentFAQ", ComponentFAQ);
