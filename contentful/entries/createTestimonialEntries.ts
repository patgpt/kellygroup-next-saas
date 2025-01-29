import { getEnvironment, getSpace } from "../client";

async function createTestimonials() {
  const space = await getSpace();
  const environment = await getEnvironment(space);

  const testimonials = [
    {
      internalName: "Testimonial 1",
      quote: {
        "en-US":
          "The KellyGroup team exceeded our expectations. Our website is faster and more scalable than ever!",
        "fr-CA":
          "L'équipe KellyGroup a dépassé nos attentes. Notre site est plus rapide et plus évolutif que jamais !",
      },
      clientName: {
        "en-US": "John Doe",
        "fr-CA": "Jean Dupont",
      },
      clientPosition: {
        "en-US": "CEO",
        "fr-CA": "PDG",
      },
      company: {
        "en-US": "TechCorp",
        "fr-CA": "TechCorp",
      },
      clientImage: "client-image-id-1", // Replace with actual asset ID
      testimonialDate: "2025-01-15",
    },
    {
      internalName: "Testimonial 2",
      quote: {
        "en-US":
          "Their development services are unmatched. KellyGroup delivered a flawless website on time.",
        "fr-CA":
          "Leurs services de développement sont inégalés. KellyGroup a livré un site impeccable dans les délais.",
      },
      clientName: {
        "en-US": "Emily Smith",
        "fr-CA": "Émilie Tremblay",
      },
      clientPosition: {
        "en-US": "Marketing Director",
        "fr-CA": "Directrice Marketing",
      },
      company: {
        "en-US": "CreativeSolutions",
        "fr-CA": "CreativeSolutions",
      },
      clientImage: "client-image-id-2", // Replace with actual asset ID
      testimonialDate: "2025-01-10",
    },
    {
      internalName: "Testimonial 3",
      quote: {
        "en-US":
          "We achieved our business goals thanks to KellyGroup’s expertise in web development.",
        "fr-CA":
          "Nous avons atteint nos objectifs commerciaux grâce à l'expertise de KellyGroup en développement web.",
      },
      clientName: {
        "en-US": "Michael Brown",
        "fr-CA": "Michel Brun",
      },
      clientPosition: {
        "en-US": "COO",
        "fr-CA": "COO",
      },
      company: {
        "en-US": "Innovatech",
        "fr-CA": "Innovatech",
      },
      clientImage: "client-image-id-3", // Replace with actual asset ID
      testimonialDate: "2025-01-05",
    },
    {
      internalName: "Testimonial 4",
      quote: {
        "en-US":
          "KellyGroup’s web development services have helped us streamline our business operations online.",
        "fr-CA":
          "Les services de développement web de KellyGroup nous ont aidés à optimiser nos opérations commerciales en ligne.",
      },
      clientName: {
        "en-US": "Sophia Davis",
        "fr-CA": "Sophie Gagnon",
      },
      clientPosition: {
        "en-US": "CTO",
        "fr-CA": "CTO",
      },
      company: {
        "en-US": "EcomWorks",
        "fr-CA": "EcomWorks",
      },
      clientImage: "client-image-id-4", // Replace with actual asset ID
      testimonialDate: "2025-01-20",
    },
    {
      internalName: "Testimonial 5",
      quote: {
        "en-US":
          "I am impressed with the professionalism and technical expertise of the KellyGroup team.",
        "fr-CA":
          "Je suis impressionné par le professionnalisme et l'expertise technique de l'équipe KellyGroup.",
      },
      clientName: {
        "en-US": "David Lee",
        "fr-CA": "David Lemoine",
      },
      clientPosition: {
        "en-US": "Founder",
        "fr-CA": "Fondateur",
      },
      company: {
        "en-US": "NextGenTech",
        "fr-CA": "NextGenTech",
      },
      clientImage: "client-image-id-5", // Replace with actual asset ID
      testimonialDate: "2025-01-25",
    },
    {
      internalName: "Testimonial 6",
      quote: {
        "en-US":
          "KellyGroup transformed our vision into reality with an incredible website.",
        "fr-CA":
          "KellyGroup a transformé notre vision en réalité avec un site web incroyable.",
      },
      clientName: {
        "en-US": "Jessica Moore",
        "fr-CA": "Jessica Morin",
      },
      clientPosition: {
        "en-US": "Product Manager",
        "fr-CA": "Chef de produit",
      },
      company: {
        "en-US": "BrightIdeas",
        "fr-CA": "BrightIdeas",
      },
      clientImage: "client-image-id-6", // Replace with actual asset ID
      testimonialDate: "2025-01-18",
    },
  ];

  for (const testimonial of testimonials) {
    const entry = await environment.createEntry("ComponentTestimonial", {
      fields: {
        internalName: {
          "en-US": testimonial.internalName,
        },
        quote: testimonial.quote,
        clientName: testimonial.clientName,
        clientPosition: testimonial.clientPosition,
        company: testimonial.company,
        clientImage: {
          "en-US": {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: testimonial.clientImage,
            },
          },
        },
        testimonialDate: {
          "en-US": testimonial.testimonialDate,
        },
      },
    });

    console.log(`Created Testimonial Entry: ${entry.sys.id}`);
  }

  console.log("All testimonials created successfully!");
}

createTestimonials();
