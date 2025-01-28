// import createClient directly

import contentful from "contentful-management";
import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});
const client = contentful.createClient(
  {
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN as string, // This is the Contentful Management API token
    space: process.env.CONTENTFUL_SPACE_ID as string, // This is the Contentful space ID
  },
  {
    type: "plain",
    defaults: {
      environmentId: process.env.CONTENTFUL_ENVIRONMENT_ID, // This is the Contentful environment ID
      spaceId: process.env.CONTENTFUL_SPACE_ID, // This is the Contentful space ID
    },
  },
);

export const getContentful = () => client;
