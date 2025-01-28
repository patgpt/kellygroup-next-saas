import type { CreateContentTypeProps } from "contentful-management";
import { createAndPublishContentType } from "./operations";

export const PageBlogPost: CreateContentTypeProps = {
  name: "Page - BlogPost",
  description: "A content type for individual blog posts.",
  displayField: "title",
  fields: [
    {
      id: "internalName",
      name: "Internal Name",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [{ size: { max: 60 } }],
    },
    {
      id: "title",
      name: "Title",
      type: "Symbol",
      localized: true,
      required: true,
      validations: [{ size: { max: 100 } }],
    },
    {
      id: "description",
      name: "Description",
      type: "Symbol",
      localized: true,
      required: true,
      validations: [{ size: { max: 160 } }],
    },
    {
      id: "featuredImage",
      name: "Featured Image",
      type: "Link",
      linkType: "Asset",
      localized: false,
      required: true,
    },
    {
      id: "slug",
      name: "Slug",
      type: "Symbol",
      localized: true,
      required: true,
      validations: [{ unique: true }],
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
    },
    {
      id: "content",
      name: "Content",
      type: "RichText",
      localized: true,
      required: true,
    },
    {
      id: "author",
      name: "Author",
      localized: false,
      type: "Link",
      linkType: "Entry",
      required: true,
      validations: [
        {
          linkContentType: ["ComponentAuthor"],
        },
      ],
    },
    {
      id: "publishedDate",
      name: "Published Date",
      localized: false,
      type: "Date",
      required: true,
    },
    {
      id: "featured",
      name: "Featured",
      type: "Boolean",
      localized: false,
      required: false,
    },
    {
      id: "relatedPosts",
      name: "Related Posts",
      type: "Array",
      localized: false,
      items: {
        type: "Link",
        linkType: "Entry",
        validations: [
          {
            linkContentType: ["PageBlogPost"],
          },
        ],
      },
      required: false,
    },
  ],
};

await createAndPublishContentType("PageBlogPost", PageBlogPost);
