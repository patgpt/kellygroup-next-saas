import dotenv from "dotenv";
import { getContentful } from "../contentful-management-client";

dotenv.config();

const client = getContentful();

(async () => {
  try {
    const entryData = {
      fields: {
        name: {
          "en-US": "Homepage SEO",
        },
        slug: {
          "en-US": "homepage",
        },
        metaTitle: {
          "en-US": "Welcome to Our Website",
          "fr-FR": "Bienvenue sur notre site Web",
        },
        metaDescription: {
          "en-US":
            "Explore our services and discover how we can help you succeed.",
          "fr-FR":
            "Découvrez nos services et comment nous pouvons vous aider à réussir.",
        },
        canonicalUrl: {
          "en-US": "https://example.com/",
        },
        openGraphTitle: {
          "en-US": "Welcome to Our Website",
          "fr-FR": "Bienvenue sur notre site Web",
        },
        openGraphDescription: {
          "en-US": "Discover our offerings and transform your business.",
          "fr-FR": "Découvrez nos offres et transformez votre entreprise.",
        },
        twitterCardType: {
          "en-US": "Summary with large image",
        },
        twitterTitle: {
          "en-US": "Welcome to Our Website",
          "fr-FR": "Bienvenue sur notre site Web",
        },
        twitterDescription: {
          "en-US": "Explore our services and succeed.",
          "fr-FR": "Découvrez nos services et réussissez.",
        },
        robotsIndex: {
          "en-US": true,
        },
        robotsFollow: {
          "en-US": true,
        },
        schemaType: {
          "en-US": "Organization",
        },
      },
    };

    // Create the entry in Contentful
    const createdEntry = await client.entry.createWithId(
      {
        entryId: "homepageSeo",
        contentTypeId: "componentSeo",
        // environmentId: process.env.CONTENTFUL_ENVIRONMENT_ID,
        // spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
      entryData,
    );

    // Publish the entry
    await client.entry.publish(
      {
        entryId: createdEntry.sys.id,
        // environmentId: process.env.CONTENTFUL_ENVIRONMENT_ID,
        // spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
      createdEntry,
    );

    console.log(
      "ComponentSEO entry for the homepage created and published successfully.",
    );
  } catch (error) {
    console.error("Error creating ComponentSEO entry:", error);
  }
})();
