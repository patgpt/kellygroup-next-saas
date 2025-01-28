// Delete the REST client implementation and keep only:

// import { getSdk } from "../app/__generated__";
import { GraphQLClient } from "graphql-request";

export const contentfulClient = (preview = false) =>
  new GraphQLClient(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      headers: {
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_TOKEN
            : process.env.CONTENTFUL_DELIVERY_TOKEN
        }`,
      },
    },
  );

// export const getContentful = (preview?: boolean) =>
//   getSdk(contentfulClient(preview));
