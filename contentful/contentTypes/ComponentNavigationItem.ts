import { getContentful } from "../contentful-management-client";
import dotenv from "dotenv";
import { createAndPublishContentType } from "./operations";

dotenv.config();

const client = getContentful();

(async () => {
  try {
    const contentType = {
      displayField: "internalName",
      name: "Component Navigation Item",
      description: "Navigation item used for menus and links",
      fields: [
        {
          id: "internalName",
          name: "Internal Name",
          type: "Symbol",
          localized: false,
          required: true,
          validations: [{ size: { max: 60 } }],
        },
        {
          id: "name",
          name: "Name",
          type: "Symbol",
          localized: true,
          required: true,
          validations: [{ size: { max: 100 } }],
        },
        {
          id: "href",
          name: "Href (Slug)",
          type: "Symbol",
          localized: true,
          required: true,
          validations: [
            {
              regexp: {
                pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$",
                flags: "",
              },
            },
          ],
        },
        {
          id: "icon",
          name: "Icon",
          type: "Link",
          linkType: "Asset",
          localized: false,
          required: false,
        },
      ],
    };

    await createAndPublishContentType("ComponentNavigationItem", contentType);

    console.log(
      "Component Navigation Item content type created and published successfully.",
    );
  } catch (error) {
    console.error(
      "Error creating Component Navigation Item content type:",
      error,
    );
  }
})();
