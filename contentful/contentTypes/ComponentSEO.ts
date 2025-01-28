import { getContentful } from "../contentful-management-client";
import dotenv from "dotenv";

dotenv.config();

const client = getContentful();

(async () => {
  console.log("Space ID:", process.env.CONTENTFUL_SPACE_ID);
  console.log("Environment ID:", process.env.CONTENTFUL_ENVIRONMENT_ID);
  try {
    await client.contentType.create(
      {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        environmentId: `${process.env.CONTENTFUL_ENVIRONMENT_ID}`,
      },
      {
        displayField: "name",
        name: "Component Navigation",
        description: "Navigation settings for the site",
        fields: [
          {
            id: "name",
            name: "Internal Name",
            type: "Symbol",
            localized: false,
            required: true,
            validations: [{ size: { max: 60 } }],
          },
          {
            id: "menuItems",
            name: "Menu Items",
            type: "Array",
            localized: false,
            required: true,
            items: {
              type: "Object",
              validations: [],
              linkType: undefined, // Remove linkType for non-links
            },
          },
        ],
      },
    );

    console.log("Component Navigation content type created successfully.");
  } catch (error) {
    console.error("Error creating Component Navigation content type:", error);
  }
})();
