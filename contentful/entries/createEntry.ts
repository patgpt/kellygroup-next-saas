const contentful = require("contentful-management");
import dotenv from "dotenv";
dotenv.config();
const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN, // Replace with your CMA token
});

async function createPageServiceEntry() {
  const space = await client.getSpace("your-space-id"); // Replace with your Space ID
  const environment = await space.getEnvironment("master"); // Adjust the environment if necessary

  


  const pageServiceEntry = await environment.createEntry("PageService", {
    fields: {
      internalName: {
        "en-US": "Web Development Service",
      },
      slug: {
        "en-US": "web-development-service",
        "fr-CA": "service-de-developpement-web",
      },
      seo: {
        "en-US": {
          sys: {
            type: "Link",
            linkType: "Entry",
            id: "seo-entry-id-en", // Replace with the actual SEO entry ID for en-US
          },
        },
        "fr-CA": {
          sys: {
            type: "Link",
            linkType: "Entry",
            id: "seo-entry-id-fr", // Replace with the actual SEO entry ID for fr-CA
          },
        },
      },
      title: {
        "en-US": "Web Development Services",
        "fr-CA": "Services de développement web",
      },
      description: {
        "en-US":
          "We offer comprehensive web development services tailored to your business needs.",
        "fr-CA":
          "Nous offrons des services de développement web complets adaptés à vos besoins.",
      },
      featuredImage: {
        "en-US": {
          sys: {
            type: "Link",
            linkType: "Asset",
            id: "featured-image-id", // Replace with the actual asset ID
          },
        },
      },
      serviceOverview: {
        "en-US": {
          sys: {
            type: "Link",
            linkType: "Entry",
            id: "service-overview-id", // Replace with the actual Service Overview entry ID
          },
        },
      },
      faqs: [
        {
          sys: {
            type: "Link",
            linkType: "Entry",
            id: "faq-entry-id-1", // Replace with actual FAQ entry IDs
          },
        },
      ],
      testimonials: [
        {
          sys: {
            type: "Link",
            linkType: "Entry",
            id: "testimonial-entry-id-1", // Replace with actual Testimonial entry IDs
          },
        },
      ],
      cta: {
        "en-US": {
          sys: {
            type: "Link",
            linkType: "Entry",
            id: "cta-entry-id", // Replace with the actual CTA entry ID
          },
        },
      },
    },
  });

  console.log(`PageService entry created: ${pageServiceEntry.sys.id}`);
}

createPageServiceEntry();
