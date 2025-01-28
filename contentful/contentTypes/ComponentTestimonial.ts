import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const ComponentTestimonial: CreateContentTypeProps = {
  name: "Component Testimonial",
  description:
    "A component to showcase client testimonials or success stories.",
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
      id: "quote",
      name: "Quote",
      type: "Text",
      localized: true,
      required: true,
      validations: [{ size: { max: 500 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "clientName",
      name: "Client Name",
      type: "Symbol",
      localized: true,
      required: true,
      validations: [{ size: { max: 100 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "clientPosition",
      name: "Client Position",
      type: "Symbol",
      localized: true,
      required: false,
      validations: [{ size: { max: 100 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "clientImage",
      name: "Client Image",
      type: "Link",
      linkType: "Asset",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "company",
      name: "Company",
      type: "Symbol",
      localized: true,
      required: false,
      validations: [{ size: { max: 100 } }],
      disabled: false,
      omitted: false,
    },
    {
      id: "testimonialDate",
      name: "Testimonial Date",
      type: "Date",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
  ],
};

await createAndPublishContentType("ComponentTestimonial", ComponentTestimonial);
