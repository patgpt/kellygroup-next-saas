import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const ComponentImageGallery: CreateContentTypeProps = {
  name: "Component Image Gallery",
  description:
    "A component to display a gallery of images with optional captions.",
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
      required: false,
      validations: [{ size: { max: 100 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "images",
      name: "Images",
      type: "Array",
      localized: false,
      required: true,
      items: {
        type: "Link",
        linkType: "Asset",
        validations: [],
      },
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "captions",
      name: "Captions",
      type: "Array",
      localized: true,
      required: false,
      items: {
        type: "Symbol",
        validations: [{ size: { max: 200 } }],
      },
      validations: [],
      disabled: false,
      omitted: false,
    },
  ],
};

await createAndPublishContentType(
  "ComponentImageGallery",
  ComponentImageGallery,
);
