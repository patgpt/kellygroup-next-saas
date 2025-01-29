const contentful = require("contentful-management");
import dotenv from "dotenv";
dotenv.config({
  path: "../../.env",
});
const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  spaceId: process.env.CONTENTFUL_SPACE_ID,
});

async function createFAQEntries() {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID); // Replace with your Space ID
  const environment = await space.getEnvironment("master"); // Adjust the environment if necessary

  // FAQ Data
  const faqs = [
    {
      question: {
        "en-US": "What is included in your web development services?",
        "fr-CA": "Que comprennent vos services de développement web?",
      },
      answer: {
        "en-US":
          "Our web development services include front-end and back-end development, responsive design, e-commerce solutions, and SEO optimization to ensure your website performs exceptionally.",
        "fr-CA":
          "Nos services de développement web incluent le développement front-end et back-end, le design adaptatif, les solutions de commerce électronique et l'optimisation SEO pour garantir des performances exceptionnelles.",
      },
    },
    {
      question: {
        "en-US": "How long does it take to build a website?",
        "fr-CA": "Combien de temps faut-il pour créer un site web?",
      },
      answer: {
        "en-US":
          "The timeline depends on the complexity of your project, but most websites are completed within 4-8 weeks after the initial consultation.",
        "fr-CA":
          "La durée dépend de la complexité de votre projet, mais la plupart des sites web sont terminés en 4 à 8 semaines après la consultation initiale.",
      },
    },
    {
      question: {
        "en-US": "Do you provide ongoing support and maintenance?",
        "fr-CA": "Offrez-vous un support et une maintenance continus?",
      },
      answer: {
        "en-US":
          "Yes, we offer ongoing support and maintenance services to keep your website up-to-date, secure, and performing optimally.",
        "fr-CA":
          "Oui, nous offrons des services de support et de maintenance continus pour que votre site web reste à jour, sécurisé et performant.",
      },
    },
  ];

  for (const faq of faqs) {
    const entry = await environment.createEntry("ComponentFAQ", {
      fields: {
        question: faq.question,
        answer: faq.answer,
      },
    });

    console.log(`Created FAQ Entry: ${entry.sys.id}`);
  }

  console.log("All FAQ entries created successfully!");
}

createFAQEntries();
