import { getEnvironment, getSpace } from "../client";

async function createServiceOverview() {
  const space = await getSpace(); // Replace with your Space ID
  const environment = await getEnvironment(space); // Adjust the environment if necessary

  const serviceOverviewEntry = await environment.createEntry(
    "ComponentServiceOverview",
    {
      fields: {
        internalName: {
          "en-US": "Web Development Service Overview",
        },
        title: {
          "en-US": "Comprehensive Web Development",
          "fr-CA": "Développement Web Complet",
        },
        description: {
          "en-US":
            "Our team delivers high-quality web development solutions tailored to your business needs.",
          "fr-CA":
            "Notre équipe offre des solutions de développement web de haute qualité adaptées à vos besoins.",
        },
        // icon: {
        //   "en-US": {
        //     sys: {
        //       type: "Link",
        //       linkType: "Asset",
        //       id: "icon-asset-id", // Replace with the actual Asset ID
        //     },
        //   },
        // },
        ctaText: {
          "en-US": "Learn More",
          "fr-CA": "En savoir plus",
        },
        ctaLink: {
          "en-US": "/services/web-development",
          "fr-CA": "/fr/services/developpement-web",
        },
      },
    },
  );

  console.log(
    `ComponentServiceOverview entry created: ${serviceOverviewEntry.sys.id}`,
  );
}

createServiceOverview();
