import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const ComponentAuthor: CreateContentTypeProps = {
  name: "Component Author",
  description:
    "A component representing an author with details and social links.",
  displayField: "name",
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
      id: "bio",
      name: "Bio",
      type: "Text",
      localized: true,
      required: false,
      validations: [{ size: { max: 500 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "profilePicture",
      name: "Profile Picture",
      type: "Link",
      linkType: "Asset",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "socialLinks",
      name: "Social Links",
      type: "Array",
      localized: false,
      required: false,
      items: {
        type: "Link",
        linkType: "Entry",
        validations: [
          {
            linkContentType: ["ComponentLink"],
          },
        ],
      },
      validations: [],
      disabled: false,
      omitted: false,
    },
  ],
};

await createAndPublishContentType("ComponentAuthor", ComponentAuthor);
