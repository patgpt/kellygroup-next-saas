import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const PageService: CreateContentTypeProps = {
  name: "Page Services",
  description: "A page to showcase services offered by the organization.",
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
      required: true,
      validations: [{ size: { max: 100 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "description",
      name: "Description",
      type: "Text",
      localized: true,
      required: false,
      validations: [{ size: { max: 300 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "featuredImage",
      name: "Featured Image",
      type: "Link",
      linkType: "Asset",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "serviceOverview",
      name: "Service Overview",
      type: "Link",
      linkType: "Entry",
      localized: false,
      required: true,
      validations: [
        {
          linkContentType: ["ComponentServiceOverview"],
        },
      ],
      disabled: false,
      omitted: false,
    },
    {
      id: "faqs",
      name: "FAQs",
      type: "Array",
      localized: false,
      required: false,
      items: {
        type: "Link",
        linkType: "Entry",
        validations: [
          {
            linkContentType: ["ComponentFAQ"],
          },
        ],
      },
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "testimonials",
      name: "Testimonials",
      type: "Array",
      localized: false,
      required: false,
      items: {
        type: "Link",
        linkType: "Entry",
        validations: [
          {
            linkContentType: ["ComponentTestimonial"],
          },
        ],
      },
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "cta",
      name: "Call-to-Action",
      type: "Link",
      linkType: "Entry",
      localized: false,
      required: false,
      validations: [
        {
          linkContentType: ["ComponentCTA"],
        },
      ],
      disabled: false,
      omitted: false,
    },
    {
      id: "seo",
      name: "SEO Settings",
      type: "Link",
      linkType: "Entry",
      localized: false,
      required: true,
      validations: [
        {
          linkContentType: ["ComponentSEO"],
        },
      ],
      disabled: false,
      omitted: false,
    },
  ],
};

await createAndPublishContentType("PageService", PageService);
