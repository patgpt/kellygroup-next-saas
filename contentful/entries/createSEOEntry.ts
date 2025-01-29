import { getEnvironment, getSpace } from "../client";

async function createSEOEntry() {
  const space = await getSpace(); // Replace with your Space ID
  const environment = await getEnvironment(space); // Adjust the environment if necessary

  const seoEntry = await environment.createEntry("componentSeo", {
    fields: {
      name: {
        "en-US": "Web Development SEO",
      },
      slug: {
        "en-US": "web-development",
      },
      metaTitle: {
        "en-US": "Professional Web Development Services",
        "fr-CA": "Services professionnels de développement web",
      },
      metaDescription: {
        "en-US":
          "We provide expert web development solutions tailored to your business needs, ensuring scalability and SEO optimization.",
        "fr-CA":
          "Nous offrons des solutions expertes de développement web adaptées à vos besoins, garantissant évolutivité et optimisation SEO.",
      },
      canonicalUrl: {
        "en-US": "https://example.com/services/web-development", // Replace with the actual URL
      },
      openGraphTitle: {
        "en-US": "Expert Web Development Solutions",
        "fr-CA": "Solutions expertes de développement web",
      },
      openGraphDescription: {
        "en-US":
          "Achieve your business goals with our high-quality web development services.",
        "fr-CA":
          "Atteignez vos objectifs commerciaux grâce à nos services de développement web de haute qualité.",
      },
      openGraphImage: {
        "en-US": {
          sys: {
            type: "Link",
            linkType: "Asset",
            id: "open-graph-image-id", // Replace with your asset ID
          },
        },
      },
      twitterCardType: {
        "en-US": "Summary with large image",
      },
      twitterTitle: {
        "en-US": "Web Development Services",
        "fr-CA": "Services de développement web",
      },
      twitterDescription: {
        "en-US":
          "Discover our expert web development services tailored to your needs.",
        "fr-CA":
          "Découvrez nos services de développement web adaptés à vos besoins.",
      },
      schemaType: {
        "en-US": "Article",
      },
      robotsIndex: {
        "en-US": true,
      },
      robotsFollow: {
        "en-US": true,
      },
    },
  });

  console.log(`Component SEO entry created: ${seoEntry.sys.id}`);
}

createSEOEntry();
