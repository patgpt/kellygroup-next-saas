import { getContentful } from "../contentful-management-client";
import dotenv from "dotenv";
import { createAndPublishContentType } from "./operations";

dotenv.config();

const client = getContentful();

(async () => {
  try {
    const contentType = {
      name: "Component Navigation",
      description: "A navigation component for the site.",
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
          id: "items",
          name: "Navigation Items",
          type: "Array",
          localized: false,
          required: true,
          items: {
            type: "Link",
            linkType: "Entry",
            validations: [
              {
                linkContentType: ["ComponentNavigationItem"], // Apply linkContentType validation here
              },
            ],
          },
          disabled: false,
          omitted: false,
        },
        {
          id: "location",
          name: "Location",
          type: "Symbol",
          localized: false,
          required: true,
          validations: [
            {
              in: ["Header", "Footer", "Sidebar"], // Dropdown options
            },
          ],
          disabled: false,
          omitted: false,
        },
      ],
    };
    // Create content type
    await createAndPublishContentType("ComponentNavigation", contentType);

    console.log(
      "Component Navigation content type created and published successfully.",
    );
  } catch (error) {
    console.error("Error creating Component Navigation content type:", error);
  }
})();
